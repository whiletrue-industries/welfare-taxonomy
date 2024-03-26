import os
import dataflows as DF
import dataflows_airtable as DFA
from pathlib import Path

APIKEY = os.environ['AIRTABLE_APIKEY']
BASE = os.environ['AIRTABLE_BASE']
CONCEPTS_TABLE = 'Concepts'
TERMS_TABLE = 'Entry Terms'
VIEW = 'Grid view'

def main():
    terms = DF.Flow(
        DFA.load_from_airtable(BASE, TERMS_TABLE, VIEW, apikey=APIKEY),
    ).results()[0][0]
    terms = {x[DFA.AIRTABLE_ID_FIELD]: x['Name'] for x in terms}

    concepts = DF.Flow(
        DFA.load_from_airtable(BASE, CONCEPTS_TABLE, VIEW, apikey=APIKEY),
        DF.set_type('Entry Terms', transform=lambda x: [terms.get(y) for y in x] if x else None),
        DF.set_type('Vocabulary', transform=lambda x: [terms.get(y) for y in x] if x else None),
    ).results()[0][0]
    concept_map = {x[DFA.AIRTABLE_ID_FIELD]: x for x in concepts}
    for i, c in enumerate(concepts):
        c['Broader Term of...'] = [concept_map.get(x) for x in c['Broader Term of...']] if c['Broader Term of...'] else None
        c['Facet of...'] = [concept_map.get(x) for x in c['Facet of...']] if c['Facet of...'] else None
        c['idx'] = i
    
    diagram = ''
    diagram += ('---\ntitle: טקסונומיה משרד הרווחה\n---\nerDiagram\n')
    for c in concepts:
        diagram += (f'\te{c["idx"]}["{c["Name"]}"]\n')
    for c in concepts:
        if c['Broader Term of...']:
            for b in c['Broader Term of...']:
                diagram += (f'\te{c["idx"]} ||--|| e{b["idx"]} : "הרחבה של..."\n')
        if c['Facet of...']:
            for f in c['Facet of...']:
                diagram += (f'\te{c["idx"]} ||--|| e{f["idx"]} : "מאפיין של..."\n')

    diagram = f'export const diagram = `{diagram}`;'
    (Path(__file__).parent.parent / 'src' / 'app' / 'diagram.ts').write_text(diagram)

if __name__ == '__main__':
    main()