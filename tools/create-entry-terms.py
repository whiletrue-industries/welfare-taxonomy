import os
import dataflows as DF
import dataflows_airtable as DFA
from pathlib import Path

APIKEY = os.environ['AIRTABLE_APIKEY_RW']
BASE = os.environ['AIRTABLE_BASE']
CONCEPTS_TABLE = 'Concepts'
TERMS_TABLE = 'Entry Terms'
RAW_TERMS_TABLE = 'Raw Terms'
GRID_VIEW = 'Grid view'

def process():
    raw_terms = DF.Flow(
        DFA.load_from_airtable(BASE, RAW_TERMS_TABLE, GRID_VIEW, apikey=APIKEY),
        DF.filter_rows(lambda row: row.get('Add Entry Term') and row.get('Add Vocabulary Of')),
        DF.filter_rows(lambda row: '\n' not in row.get('Add Entry Term'))
    ).results()[0][0]
    print('GOT #{} relevant terms'.format(len(raw_terms)))

    update = []
    for term in raw_terms:
        update.append({
            DFA.AIRTABLE_ID_FIELD: term[DFA.AIRTABLE_ID_FIELD],
            'Entry Term': [term['Add Entry Term']],
            'Status': 'Relevant',
        })
    
    DF.Flow(
        update,
        DF.update_resource(-1, name=RAW_TERMS_TABLE),
        DFA.dump_to_airtable({
            (BASE, RAW_TERMS_TABLE): {
                'resource-name': RAW_TERMS_TABLE,
                'typecast': True
            }
        }, apikey=APIKEY)
    ).process()

    entry_terms = DF.Flow(
        DFA.load_from_airtable(BASE, TERMS_TABLE, GRID_VIEW, apikey=APIKEY),
    ).results()[0][0]
    entry_terms = {x['Name']: (x[DFA.AIRTABLE_ID_FIELD], x.get('Part of vocabulary...') or []) for x in entry_terms}

    concepts = DF.Flow(
        DFA.load_from_airtable(BASE, CONCEPTS_TABLE, GRID_VIEW, apikey=APIKEY),
    ).results()[0][0]
    concepts = {x['Name']: x[DFA.AIRTABLE_ID_FIELD] for x in concepts}

    update = {}
    for term in raw_terms:
        vocab_concept = term['Add Vocabulary Of']
        concept_rid = concepts[vocab_concept]
        entry_term = term['Add Entry Term']
        try:
            entry_term_rid = entry_terms.get(entry_term)[0]
            entry_term_vocabulary = entry_terms.get(entry_term)[1]
        except:
            print('Entry term not found: {}'.format(entry_term))
            raise
        if concept_rid not in entry_term_vocabulary:
            entry_term_vocabulary.append(concept_rid)
        update.setdefault(entry_term_rid, {}).update({
            DFA.AIRTABLE_ID_FIELD: entry_term_rid,
            'Part of vocabulary...': entry_term_vocabulary
        })
    update = list(update.values())
    DF.Flow(
        update,
        DF.update_resource(-1, name=TERMS_TABLE),
        DFA.dump_to_airtable({
            (BASE, TERMS_TABLE): {
                'resource-name': TERMS_TABLE,
                'typecast': False
            }
        }, apikey=APIKEY)
    ).process()

if __name__ == '__main__':
    process()
