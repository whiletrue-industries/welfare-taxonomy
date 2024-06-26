export const diagram = `---
title: טקסונומיה משרד הרווחה
---
erDiagram
	e0[" מוגבלות"] {
	  _ _ "מח לה כרונית או פגיעה גופנית עם השלכות על מוגבלות פיזית"
	  _ _ "מחלה כרונית או מצב נוירולוגי אחר עם השלכות על מוגבלות שכלית"
	  _ _ "מצב בריאותי אקוטי או זמני"
	  _ _ "אדם המוכר כנכה"
	  _ _ "עיוורון ולקות ראייה"
	  _ _ "חירשות וכבדות שמיעה"
	  _ _ "ריבוי נכויות "
	  _ _ "לקות למידה"
	  _ _ "מחלה או הפרעה נפשית"
	  _ _ "הפרעות בספקטרום האוטיסטי )ASD)"
	  _ _ "מוגבלות "
	  _ _ "מוגבלות שכלית או התפתחותית"
	  _ _ "ריבוי לקויות קוגניטיביות ונפשיות"
	  _ _ "מצב תשוש"
	  _ _ "מצב תשוש נפש"
	  _ _ "מצב סיעודי"
	  _ _ "מצב סיעודי מורכב"
	}
	e1["אגף"] {
	  _ _ "אגף בכיר השמות חוץ ביתיות ומיוחדות"
	  _ _ "אגף שיתופי פעולה בין לאומיים"
	}
	e2["אוכלוסיית יעד"]
	e3["אלימות"] {
	  _ _ "אלימות במשפחה "
	  _ _ "אלימות פיזית"
	  _ _ "אלימות נפשית"
	  _ _ "אלימות מינית"
	  _ _ "אלימות מילולית"
	  _ _ "אלימות כלכלית "
	  _ _ "אלימות רב ממדית"
	  _ _ "נתון לאלימות בתוך המשפחה"
	  _ _ "נתון לאלימות מחוץ למשפחה"
	  _ _ "מפעיל אלימות בתוך המשפחה"
	  _ _ "מפעיל אלימות מחוץ למשפחה"
	}
	e4["גיאוגרפיה"]
	e5["הזנחה"] {
	  _ _ "הזנחה בתחום הפיזי"
	  _ _ "הזנחה בתחום הבריאות הפיזית או הנפשית"
	  _ _ " הזנחה בתחום  הרגשי, קוגניטיבי חברתי "
	  _ _ "חשיפה לאלימות במסגרת המשפחה"
	  _ _ "הזנחה רב ממדית "
	  _ _ "התעללות והזנחה"
	  _ _ "נטישה"
	}
	e6["התנהגויות סיכוניות, שוליות חברתית ועבריינות"] {
	  _ _ "התנהגות מנוגדת לחוק"
	  _ _ "התמכרות לחומרים פסיכואקטיביים (סמים או אלכוהול)"
	  _ _ "התמכרות להימורים או התמכרות התנהגותית אחרת"
	  _ _ "שימוש לרעה שאינו התמכרות"
	  _ _ "התמכרות רב ממדית "
	  _ _ "המצאות במעגל הזנות "
	  _ _ "דרות רחוב "
	  _ _ "התנהגות מינית מסתכנת ומסכנת"
	  _ _ "חברות בכת פוגענית"
	  _ _ "התנהגות סיכונית אחרת"
	}
	e7["התראה"]
	e8["זכאות "] {
	  _ _ "תנאי זכאות"
	  _ _ "זכאים"
	}
	e9["זמן"] {
	  _ _ "תאריך "
	}
	e10["חסמים תפקודיים אישיים וחברתיים"] {
	  _ _ "אי-השגת אבני דרך להתפתחות"
	  _ _ "קושי בטיפול אישי ובמיומנויות יומיומיות"
	  _ _ "קשיים בצריכת שירותים ובמיצוי זכויות"
	  _ _ "הזנחה עצמית ו/או אגרנות"
	  _ _ "משבר זהות נרחב"
	  _ _ "הערכה עצמית ירודה ו/או תפיסת חוללות עצמית נמוכה"
	  _ _ "קשיים בהשתלבות בקהילה, דחיית אחרים ו/או הדרה חברתית"
	  _ _ "בדידות ו/או העדר מערכות תמיכה"
	  _ _ "ניתוק ממסגרת לימודית ותעסוקתית"
	  _ _ "חסמים תעסוקתיים מורכבים"
	  _ _ "קשיים במסגרת תעסוקה"
	  _ _ "קשיים במסגרת חינוכית "
	  _ _ "קשיים במסגרת צבאית / שירות לאומי"
	  _ _ "מצוקה רגשית"
	}
	e11["יחידה ארגונית"]
	e12["מגזר באוכלוסיה"]
	e13["מזהים "] {
	  _ _ "סמל מסגרת"
	  _ _ "סמל תעריף"
	  _ _ "סמל תכנית"
	  _ _ "מזהה פניה"
	  _ _ "מספר בקשה"
	  _ _ "מזהה עיר"
	  _ _ "מספר מכרז"
	  _ _ "מספר קבוצה"
	  _ _ "מספר הוראה"
	  _ _ "מספר הוראה קודם"
	}
	e14["מסגרות דיור חוץ ביתיות"] {
	  _ _ "הוסטל"
	  _ _ "בית אבות "
	  _ _ "דירת מעבר"
	  _ _ "גגון "
	  _ _ "מקלט "
	  _ _ "מכינה "
	  _ _ "מסגרת דיור חוץ ביתית"
	  _ _ "דיור ציבורי "
	  _ _ "דיור מוגן"
	  _ _ "דיורית "
	  _ _ "דירה"
	  _ _ "דירת מדרגה "
	  _ _ "הטבות לדיור"
	  _ _ "הלנת חירום"
	  _ _ "מעון"
	  _ _ "פנימיה"
	  _ _ "קלט חירום"
	  _ _ "קלט קהילתי"
	  _ _ "שלוחה של מסגרת חוץ ביתית"
	}
	e15["מסגרת "] {
	  _ _ "מסגרת דיור חוץ ביתית"
	}
	e16["מספר תאגיד"]
	e17["מענה חברתי"] {
	  _ _ "אימוץ "
	  _ _ "אומנה"
	  _ _ "מרכז טיפולי "
	}
	e18["מערכות מידע"] {
	  _ _ "נתיב"
	  _ _ "מערכת השמה אלקטרונית"
	  _ _ "מערכת דיווח רשויות"
	  _ _ "מס״ר"
	  _ _ "מנ״ע"
	}
	e19["מפעיל"]
	e20["מצבי חיים"] {
	  _ _ "מגדר"
	  _ _ "נפעגים"
	  _ _ "משפחה"
	  _ _ "להט״ב"
	}
	e21["מצבי חיים מיוחדים "] {
	  _ _ "הורות עצמאית (יחידאית)"
	  _ _ "משפחה מורכבת"
	  _ _ "מטפל/ת עיקרי/ת או אפוטרופוס באחר שהנו חולה/מוגבל"
	  _ _ "אובדן ושכול"
	  _ _ "חשיפה לאירוע מחולל טראומה"
	  _ _ "חסוי/ה או חסר/ת ישע"
	  _ _ "ערירות"
	  _ _ "ניצולי שואה"
	  _ _ "עולה או בן/בת של עולה"
	  _ _ "העדר מעמד חוקי בארץ, פליטות, בקשת מקלט, הגירת עבודה"
	  _ _ "תושב/ת חוזר/ת"
	  _ _ "אסיר/ה או עציר/ה"
	  _ _ "אסיר/ה משוחרר/ת"
	  _ _ "נפגע/ת עבירה פלילית"
	  _ _ " דור ההורים מוכר לש רותי הרווחה"
	  _ _ "אובדן ושכול"
	}
	e22["מקבל שירות"] {
	  _ _ "מושם"
	}
	e23["נזקקות"] {
	  _ _ "תקין"
	}
	e24["נזקקות משק בית ומשפחה"]
	e25["נזקקות פרט"] {
	  _ _ "אלימות"
	}
	e26["עוני והדרה"] {
	  _ _ "עוני רב-ממדי מתמשך"
	  _ _ "מצוקה כלכלית זמנית"
	  _ _ "בעיות בניהול תקציב משק הבית"
	  _ _ "בעיות דיור"
	  _ _ "חוסר בציוד בסיסי"
	  _ _ "אי בטחון תזונתי"
	  _ _ "קשיים במימון מענים פיזיים ובריאותיים"
	  _ _ "קשיים בצריכת שירותים ובמיצוי זכויות"
	  _ _ "קשיים במימון מענים התפתחותיים - חינוכיים של בני המשפחה"
	  _ _ "קשיים בהשתלבות בקהילה, דחייה, על ידי אחרים ו/או מודרות חברתית"
	  _ _ "בדידות ו/או העדר מערכות תמיכה"
	}
	e27["צורך "]
	e28["קבוצות גיל"] {
	  _ _ "אזרחים ותיקים"
	  _ _ "ילדים"
	  _ _ "צעירים"
	  _ _ "בגיר"
	  _ _ "קטין"
	}
	e29["קשיים ביחסים בתוך המשפחה"] {
	  _ _ "ליקוי בתפקוד ההורי לרבות קשיים בהשגחה ובהגנה"
	  _ _ "אלימות במשפחה "
	  _ _ "קונפליקט בעוצמה גבוהה על רקע פירוד/גירושין"
	  _ _ "חוסר יציבות בהרכב משק הבית"
	  _ _ "קשיים ביחסים שבין בני זוג"
	  _ _ "קשיים בין ההורים לבין ילדיהם"
	  _ _ "קשיים בין ילדי המשפחה"
	  _ _ "קשיים ביחסים בין המשפחה הגרעינית למורחבת"
	  _ _ "קשיים בי חסים בין כלל בני המשפחה"
	}
	e30["רשות מקומית"] {
	  _ _ "רשות שולחת"
	}
	e31["תכנית"] {
	  _ _ "יתד "
	  _ _ "נושמים לרווחה"
	  _ _ "יש מצב"
	  _ _ "סל״ע "
	  _ _ "עיר מקדמת זכויות"
	  _ _ "מרכז חוסן"
	  _ _ "קהילה נגישה"
	  _ _ "בית חם"
	  _ _ "מז״ל (מעגל זהב להט״ב)"
	  _ _ "שחקית"
	  _ _ "צל״ש"
	  _ _ "אוריון"
	  _ _ "בשבילי"
	  _ _ "להב״ה"
	}
	e32["תפוקה"] {
	  _ _ "השמה"
	  _ _ "טיפול סוציאלי"
	}
	e20 ||--|| e0 : "הרחבה של..."
	e11 ||--|| e1 : "הרחבה של..."
	e20 ||--|| e2 : "הרחבה של..."
	e31 ||--|| e4 : "מאפיין של..."
	e25 ||--|| e6 : "הרחבה של..."
	e25 ||--|| e10 : "הרחבה של..."
	e31 ||--|| e11 : "מאפיין של..."
	e20 ||--|| e12 : "הרחבה של..."
	e17 ||--|| e14 : "הרחבה של..."
	e13 ||--|| e16 : "הרחבה של..."
	e19 ||--|| e16 : "מאפיין של..."
	e31 ||--|| e17 : "מאפיין של..."
	e31 ||--|| e19 : "מאפיין של..."
	e31 ||--|| e20 : "מאפיין של..."
	e20 ||--|| e21 : "הרחבה של..."
	e17 ||--|| e23 : "מאפיין של..."
	e23 ||--|| e24 : "הרחבה של..."
	e23 ||--|| e25 : "הרחבה של..."
	e20 ||--|| e28 : "הרחבה של..."
	e24 ||--|| e29 : "הרחבה של..."
`;