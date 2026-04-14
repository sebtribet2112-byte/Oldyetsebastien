// ╔══════════════════════════════════════════════════════════╗
// ║  ESCAPE GAME — SÉRIES PIÈGES (31-33)                    ║
// ║  Aucun indice · Textes chaotiques · Questions contenu   ║
// ╚══════════════════════════════════════════════════════════╝
//
// RÈGLES SALLE 3 :
//   1. b↔d et m↔n (comme d'habitude)
//   2. Certains mots sont AUSSI écrits à l'envers
//
// Exemples de mots inversés + encodés :
//   "invisible"  → encode→ "imvisidle" → inverse→ "eldisivmi"
//   "handicap"   → encode→ "hambicap"  → inverse→ "pacibmah"
//   "diagnostic" → encode→ "biagmostic"→ inverse→ "citsomgaib"
//   "reconnu"    → encode→ "recommu"   → inverse→ "ummocer"
//   "personnes"  → encode→ "persommes" → inverse→ "semmosrep"
//
// Pour décoder un mot inversé :
//   appliquer b↔d m↔n, PUIS lire à l'envers (ou l'inverse)

const SERIES_PIEGE=[

// ──────────────────────────────────────────────────────────
// SÉRIE 31 ⚠️ — code : 6279
// ──────────────────────────────────────────────────────────
{id:31,name:'Série 31 ⚠️',code:'6279',rooms:[

  {type:'T',e:'📋',diff:'Difficile ★★★',dc:'diff3',
   title:'La Salle des Pathologies',sub:'Lisez les 3 indices jusqu\'au bout avant de répondre',ans:'6',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Dépression'},{n:2,p:'Dyslexie'},{n:3,p:'TDAH'},
        {n:4,p:'Endométriose'},{n:5,p:'Épilepsie'},{n:6,p:'Lupus'},
        {n:7,p:'SFC / Fatigue chronique'},{n:8,p:'Diabète type 1'},{n:9,p:'Dyspraxie'}],
   clues:[
     "Je provoque une fatigue intense et des douleurs articulaires imprévisibles. Plusieurs pathologies de ce tableau ont ce même symptôme — continuez à lire avant de répondre.",
     "Je suis une maladie AUTO-IMMUNE : mon système immunitaire attaque les propres organes de mon porteur. Reins, cœur, peau et articulations peuvent être touchés simultanément.",
     "Mon emblème est un insecte fragile aux ailes colorées, souvent associé à la transformation. Je suis surnommée 'la grande simulatrice' car mes symptômes varient et trompent pendant des années."
   ],
   hints:[]},

  {type:'A',e:'🔤',diff:'Difficile ★★★',dc:'diff3',
   title:'Le Laboratoire des Mots',sub:'Décodez les 3 mots — la question n\'est pas celle que vous attendez',ans:'2',
   words:[
     {s:'COT',sol:'TOC',note:'Trouble obsessionnel compulsif'},
     {s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},
     {s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire chronique'}
   ],
   q:"Trouvez le mot le plus court parmi les 3 solutions. Combien de CONSONNES contient-il ? (voyelles = a e i o u y)",
   hints:[]},

  // Texte confus : b↔d, m↔n + certains mots écrits à l'envers (après encodage)
  // Mots inversés : eldisivmi=invisible, ummocer=reconnu, citsomgaib=diagnostic
  // Normal : "en france, sept pour cent de la population vit avec un handicap invisible reconnu
  //   par la mdph. quatre-vingts pour cent des handicaps ne se voient pas de l'extérieur.
  //   de nombreuses personnes ne connaissent pas leur situation, car le diagnostic peut
  //   prendre plusieurs années."
  {type:'C',e:'🔀',diff:'Très difficile ★★★★',dc:'diff4',has_reversed:true,
   title:'Le Cerveau Embrouillé',sub:'b↔d · m↔n · certains mots sont aussi écrits à l\'envers',ans:'7',
   confused:"em framce, sept pour cemt be la populatiom vit avec um hambicap eldisivmi ummocer par la mdph. quatre vigmts pour cemt bes hambicaps me se voiemt pas be l'extérieur. be mondreuses persommes me commaissemt pas leur situatiom, car le citsomgaib peut prembre plusieurs ammées.",
   decoded:"en france, sept pour cent de la population vit avec un handicap invisible reconnu par la mdph. quatre-vingts pour cent des handicaps ne se voient pas de l'extérieur. de nombreuses personnes ne connaissent pas leur situation, car le diagnostic peut prendre plusieurs années.",
   q:"Quel pourcentage de la population française vit avec un handicap invisible reconnu par la MDPH ?",
   hints:[]},

  // 3 étapes : 🌙×🌙=9 → 🌙=3 · 🔺=🌙×2=6 · 🌙+🔺=9
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',
   title:'La Chambre des Codes',sub:'Trois étapes enchaînées — résolvez dans l\'ordre',ans:'9',
   sym_a:'🌙',sym_b:'🔺',val_a:3,val_b:6,
   eq_visible:'🌙 × 🌙 = 9',
   eq_hidden:'🌙 × 2 = 🔺   →   🌙 + 🔺 = ?',
   blur_text:'Le résultat est supérieur à 8.',
   q:"Étape 1 : trouvez 🌙. Étape 2 : calculez 🔺 = 🌙 × 2. Étape 3 : calculez 🌙 + 🔺.",
   real_q:"🌙=3, 🔺=6, 3+6=9",
   hints:[]}
]},

// ──────────────────────────────────────────────────────────
// SÉRIE 32 ⚠️⚠️ — code : 4165
// ──────────────────────────────────────────────────────────
{id:32,name:'Série 32 ⚠️⚠️',code:'4165',rooms:[

  // Piège : "1 enfant sur 10" dans les indices → répondre 1 au lieu de chercher le numéro 4
  {type:'T',e:'📋',diff:'Difficile ★★★',dc:'diff3',
   title:'La Salle des Pathologies',sub:'Un chiffre apparaît dans les indices — ce n\'est PAS la réponse',ans:'4',
   tbl:[{n:0,p:'Trouble bipolaire'},{n:1,p:'TOC'},{n:2,p:'Dépression'},{n:3,p:'Schizophrénie'},
        {n:4,p:'TDAH'},{n:5,p:'TSA / Autisme'},{n:6,p:'Dyslexie'},{n:7,p:'Dyscalculie'},
        {n:8,p:'Dyspraxie'},{n:9,p:'Dysgraphie'}],
   clues:[
     "Je touche la concentration, l'impulsivité et la gestion du temps. Mon porteur commence de nombreuses tâches sans jamais en terminer. Son cerveau cherche constamment de la nouveauté et de la stimulation.",
     "Je suis d'origine NEUROLOGIQUE. On me confond souvent avec un manque de volonté ou un problème éducatif. La recherche montre que mon porteur a un fonctionnement cérébral différent — pas inférieur.",
     "Mon acronyme comporte exactement 4 lettres. La première est T, la dernière est H. Ces 4 lettres décrivent précisément ce que je suis. Cherchez maintenant mon NUMÉRO dans le tableau."
   ],
   hints:[]},

  // Piège : compter le nb de fois que la lettre O apparaît dans TOC = 1
  {type:'A',e:'🔤',diff:'Difficile ★★★',dc:'diff3',
   title:'Le Laboratoire des Mots',sub:'La question porte sur UNE lettre précise, pas sur le total',ans:'1',
   words:[
     {s:'COT',sol:'TOC',note:'Trouble obsessionnel compulsif'},
     {s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune systémique'},
     {s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire chronique'}
   ],
   q:"Trouvez le mot le plus court parmi les 3 solutions. Combien de fois la lettre O apparaît-elle dans ce mot ?",
   hints:[]},

  // Mots inversés : semmosrep=personnes, eldisivmi=invisible, éuqitsomgaib=diagnostiqué
  // Normal : "six millions de personnes en france vivent avec un handicap invisible.
  //   un handicap sur deux n'est pas diagnostiqué. en dehors des grandes villes,
  //   l'accès aux soins spécialisés reste difficile pour les personnes concernées."
  {type:'C',e:'🔀',diff:'Très difficile ★★★★',dc:'diff4',has_reversed:true,
   title:'Le Cerveau Embrouillé',sub:'b↔d · m↔n · certains mots sont aussi écrits à l\'envers',ans:'6',
   confused:"six nillioms be semmosrep em framce vivemt avec um hambicap eldisivmi. um hambicap sur beux m'est pas biagmostiqué. em behors bes grambes villes, l'accès aux soims spécialisés reste bifficile pour les persommes comcermées.",
   decoded:"six millions de personnes en france vivent avec un handicap invisible. un handicap sur deux n'est pas diagnostiqué. en dehors des grandes villes, l'accès aux soins spécialisés reste difficile pour les personnes concernées.",
   q:"Combien de millions de personnes en France vivent avec un handicap invisible ?",
   hints:[]},

  // 🌸=3, 🌊=2 → 🌸×🌸 − 🌊×🌊 = 9−4 = 5
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',
   title:'La Chambre des Codes',sub:'Calculez sans vous précipiter',ans:'5',
   sym_a:'🌸',sym_b:'🌊',val_a:3,val_b:2,
   eq_visible:'🌸 = 3     🌊 = 2',
   eq_hidden:'🌸 × 🌸 − 🌊 × 🌊 = ?',
   blur_text:'Le résultat est impair, entre 4 et 6.',
   q:"Calculez : 🌸 × 🌸 − 🌊 × 🌊. Utilisez les valeurs indiquées et respectez l'ordre des opérations.",
   real_q:"3×3 − 2×2 = 9 − 4 = 5",
   hints:[]}
]},

// ──────────────────────────────────────────────────────────
// SÉRIE 33 ☠️ — code : 9348
// ──────────────────────────────────────────────────────────
{id:33,name:'Série 33 ☠️',code:'9348',rooms:[

  // Piège : indice 1 contient une contre-vérité volontaire sur Crohn
  {type:'T',e:'📋',diff:'Très difficile ★★★★',dc:'diff4',
   title:'La Salle des Pathologies',sub:'⚠️ Le premier indice contient une ERREUR volontaire',ans:'9',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Dépression'},{n:2,p:'TDAH'},{n:3,p:'TSA / Autisme'},
        {n:4,p:'Endométriose'},{n:5,p:'Épilepsie'},{n:6,p:'Lupus'},
        {n:7,p:'SFC / Fatigue chronique'},{n:8,p:'Diabète type 1'},{n:9,p:'Maladie de Crohn'}],
   clues:[
     "⚠️ ERREUR VOLONTAIRE : on prétend souvent que je touche uniquement le ventre. C'est FAUX. Je touche tout le tube digestif, de la bouche jusqu'à l'anus. Ignorez cette fausse idée.",
     "Je suis une MICI — Maladie Inflammatoire Chronique de l'Intestin. Je provoque des douleurs abdominales, des diarrhées sévères et une fatigue profonde. En rémission, rien ne me trahit de l'extérieur.",
     "Mon nom est celui d'un gastro-entérologue AMÉRICAIN qui m'a décrite pour la première fois à New York dans les années 1930. Son nom de famille est devenu le mien."
   ],
   hints:[]},

  // Piège : compter les lettres de TOC = 3 mais la question demande une connaissance médicale
  {type:'A',e:'🔤',diff:'Très difficile ★★★★',dc:'diff4',
   title:'Le Laboratoire des Mots',sub:'Identifiez d\'abord la bonne pathologie par sa description',ans:'3',
   words:[
     {s:'MISTEAU',sol:'AUTISME',note:'Trouble du spectre neurodéveloppemental'},
     {s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune systémique'},
     {s:'COT',sol:'TOC',note:'Se lit dans le nom : obsessions + compulsions'}
   ],
   q:"Parmi ces 3 pathologies, laquelle se caractérise par des PENSÉES INTRUSIVES non désirées que le porteur tente de neutraliser par des rituels répétitifs ? Combien de lettres a son nom ?",
   hints:[]},

  // Texte très confus : long, dense, mots inversés, contre-piège sur "quatre"
  // Piège MAJEUR : "quatre" n'est PAS encodé (aucun b/d/m/n) → reste identique
  //   mais il est entouré de mots tellement déformés que les joueurs doutent
  // Mots inversés : pacibmah=handicap, eldisivmi=invisible, citsomgaib=diagnostic
  // Normal : "quatre personnes sur dix ne savent pas qu'elles ont un handicap invisible.
  //   le diagnostic moyen prend environ sept ans avant d'être posé.
  //   les femmes sont deux fois plus souvent diagnostiquées tardivement que les hommes.
  //   de nombreuses personnes vivent sans aucune reconnaissance administrative."
  {type:'C',e:'🔀',diff:'Très difficile ☠️',dc:'diff4',has_reversed:true,
   title:'Le Cerveau Embrouillé',sub:'b↔d · m↔n · certains mots à l\'envers · texte long et dense',ans:'4',
   confused:"quatre persommes sur bix me savemt pas qu'elles omt um pacibmah eldisivmi. le citsomgaib noyem premb emvirom sept ams avamt b'être posé. les fennes somt beux fois plus souvemt biagmostiquées tarbivenemt que les honnes. be mondreuses persommes vivemt sams aucume recommaissamce abmimistrative.",
   decoded:"quatre personnes sur dix ne savent pas qu'elles ont un handicap invisible. le diagnostic moyen prend environ sept ans avant d'être posé. les femmes sont deux fois plus souvent diagnostiquées tardivement que les hommes. de nombreuses personnes vivent sans aucune reconnaissance administrative.",
   q:"Combien de personnes sur dix ne savent pas qu'elles ont un handicap invisible ?",
   hints:[]},

  // Piège : 🌙×⭐ = 5×3 = 15 → deux chiffres, impossible → trouver l'opération correcte
  {type:'HARD',e:'⚗️',diff:'Très difficile ☠️',dc:'diff4',
   title:'La Chambre des Codes',sub:'Une opération donne un résultat impossible — trouvez la bonne',ans:'8',
   sym_a:'🌙',sym_b:'⭐',val_a:5,val_b:3,
   eq_visible:'🌙 × 🌙 = 25   →   🌙 = 5',
   eq_hidden:'⭐ = 🌙 − 2   →   🌙 ○ ⭐ = chiffre entre 0 et 9',
   blur_text:'Le résultat est pair, entre 7 et 9.',
   q:"🌙=5. Calculez ⭐=🌙−2. L'opération × entre 🌙 et ⭐ donne un résultat à 2 chiffres — impossible comme réponse. Trouvez l'opération qui donne un chiffre entre 0 et 9.",
   real_q:"🌙=5, ⭐=3, 5×3=15 impossible, 5+3=8",
   hints:[]}
]}
];
