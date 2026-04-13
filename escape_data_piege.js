// ╔══════════════════════════════════════════════════════════╗
// ║  ESCAPE GAME — DONNÉES PIÈGES (Séries 31-33)            ║
// ║  Questions tordues — réflexion longue requise            ║
// ╚══════════════════════════════════════════════════════════╝
//
// PIÈGES PAR SALLE :
//  Salle 1 (T)    → indices 1 & 2 décrivent 2 pathologies, seul l'indice 3 tranche
//  Salle 2 (A)    → question inattendue : voyelles, maladie respiratoire vs neurologique…
//  Salle 3 (C)    → CHIFFRE (digit) visible en premier ≠ premier NOMBRE EN LETTRES
//  Salle 4 (HARD) → piège priorité des opérations : × AVANT +, ou leurre multiplication

const SERIES_PIEGE=[

// ──────────────────────────────────────────────────────────
// SÉRIE 31 ⚠️ — code : 6827
// ──────────────────────────────────────────────────────────
{id:31,name:'Série 31 ⚠️ Pièges',code:'6827',rooms:[

  // SALLE 1 — Piège : indices 1 & 2 décrivent aussi la Fibromyalgie → seul l'indice 3 distingue
  {type:'T',e:'📋',diff:'Facile ★ ⚠️',dc:'diff1',
   title:'La Salle des Pathologies',sub:'⚠️ Les deux premiers indices décrivent DEUX pathologies — lisez le 3ᵉ !',ans:'6',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Dépression'},{n:2,p:'Dyslexie'},{n:3,p:'TDAH'},
        {n:4,p:'Endométriose'},{n:5,p:'Épilepsie'},{n:6,p:'Lupus'},
        {n:7,p:'SFC / Fatigue chronique'},{n:8,p:'Diabète type 1'},{n:9,p:'Dyspraxie'}],
   clues:[
     "⚠️ PIÈGE — Mon 1ᵉʳ indice décrit intentionnellement DEUX pathologies : je provoque une fatigue profonde, des douleurs diffuses et articulaires imprévisibles. Ne répondez pas encore !",
     "Mon 2ᵉ indice réduit : je suis une maladie AUTO-IMMUNE. Mon système immunitaire attaque mes propres organes. La fibromyalgie et la fatigue chronique sont éliminées — elles ne sont pas auto-immunes.",
     "Mon 3ᵉ indice est décisif : mon emblème est un PAPILLON. Je touche surtout les femmes entre 15 et 45 ans. Je suis surnommée 'la grande simulatrice'."
   ],
   hints:[
     "⚠️ Cherchez une maladie AUTO-IMMUNE avec pour emblème le papillon.",
     "Le papillon = une seule pathologie dans ce tableau. Elle touche principalement les femmes.",
     "Lupus = numéro 6 dans le tableau."
   ]},

  // SALLE 2 — Piège : compter lettre par lettre — la dernière E de DYSLEXIE souvent oubliée
  {type:'A',e:'🔤',diff:'Moyen ★★ ⚠️',dc:'diff2',
   title:'Le Laboratoire des Mots',sub:'⚠️ Comptez lettre par lettre — la dernière est souvent oubliée !',ans:'8',
   words:[
     {s:'EIXYLSED',sol:'DYSLEXIE',note:'Trouble des apprentissages lié à la lecture'},
     {s:'MODERNISETOE',sol:'ENDOMETRIOSE',note:'Maladie gynécologique chronique'},
     {s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique liée au sucre'}
   ],
   q:"⚠️ PIÈGE : Comptez les lettres du mot désignant le TROUBLE DES APPRENTISSAGES lié à la lecture. Épeler lettre par lettre à voix haute — la toute dernière est souvent oubliée !",
   hints:[
     "Le trouble des apprentissages lié à la lecture : EIXYLSED → DYSLEXIE.",
     "D-Y-S-L-E-X-I-E : épeler à voix haute pour ne pas oublier le E final.",
     "D(1)-Y(2)-S(3)-L(4)-E(5)-X(6)-I(7)-E(8) = 8 lettres. Pas 7 !"
   ]},

  // SALLE 3 — Piège : "3" (digit) visible en premier, mais premier NOMBRE EN LETTRES = DEUX = 2
  {type:'C',e:'🔀',diff:'Difficile ★★★ ⚠️',dc:'diff3',
   title:'Le Cerveau Embrouillé',sub:"⚠️ Un chiffre (digit) apparaît avant le premier nombre en lettres — ce n'est pas la réponse !",ans:'2',
   confused:"3 malabies sur cemt somt b'origime meuroloqigue. beux persommes sur bix m'omt aucum biagmostic. le prenier mondre em lettres est votre chiffre.",
   decoded:"3 maladies sur cent sont d'origine neurologique. <span class='ch'>DEUX</span> personnes sur dix n'ont aucun diagnostic. le premier nombre en lettres est votre chiffre.",
   hints:[
     "⚠️ PIÈGE : Le '3' est écrit en CHIFFRE (digit), pas en lettres. La question demande le premier nombre écrit EN LETTRES.",
     "Continuez à lire : 'DEUX personnes sur dix n'ont aucun diagnostic'.",
     "Le premier nombre EN LETTRES est DEUX = 2."
   ]},

  // SALLE 4 — Piège priorité × avant + : 1+(3×2)=7 et non (1+3)×2=8
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★ ⚠️',dc:'diff4',
   title:'La Chambre des Codes',sub:'⚠️ Piège priorité : × se calcule AVANT + !',ans:'7',
   sym_a:'ops',sym_b:'ops2',val_a:0,val_b:0,
   eq_visible:'🌊 = 1     🥄 = 3     💉 = 2',
   eq_hidden:'🌊 + 🥄 × 💉 = ?',
   blur_text:'⚠️ Si vous trouvez 8, vous avez lu gauche→droite — FAUX. Le résultat est IMPAIR entre 6 et 8.',
   q:"⚠️ PIÈGE PRIORITÉ : Calculez 🌊 + 🥄 × 💉 avec 🌊=1, 🥄=3, 💉=2. En mathématiques, × se calcule AVANT +. Ne lisez PAS gauche à droite !",
   real_q:"Priorité × avant + : 1 + (3×2) = 1 + 6 = 7",
   hints:[
     "⚠️ (1+3)×2 = 8 est FAUX. La multiplication est prioritaire.",
     "D'abord 🥄×💉 = 3×2 = 6. Ensuite 🌊 + 6 = 1 + 6.",
     "1 + (3 × 2) = 1 + 6 = 7."
   ]}
]},

// ──────────────────────────────────────────────────────────
// SÉRIE 32 ⚠️⚠️ — code : 4626
// ──────────────────────────────────────────────────────────
{id:32,name:'Série 32 ⚠️⚠️ Pièges',code:'4626',rooms:[

  // SALLE 1 — Piège : les indices mentionnent "1 enfant sur 10" → leurre, réponse = 4
  {type:'T',e:'📋',diff:'Facile ★ ⚠️⚠️',dc:'diff1',
   title:'La Salle des Pathologies',sub:"⚠️ Les indices contiennent le chiffre 1 — ce n'est pas le numéro dans le tableau !",ans:'4',
   tbl:[{n:0,p:'Trouble bipolaire'},{n:1,p:'TOC'},{n:2,p:'Dépression'},{n:3,p:'Schizophrénie'},
        {n:4,p:'TDAH'},{n:5,p:'TSA / Autisme'},{n:6,p:'Dyslexie'},{n:7,p:'Dyscalculie'},
        {n:8,p:'Dyspraxie'},{n:9,p:'Dysgraphie'}],
   clues:[
     "⚠️ PIÈGE : Mon 1ᵉʳ indice contient le chiffre 1 — c'est un LEURRE. Je touche 1 enfant sur 10 en âge scolaire. Ne répondez PAS 1 : c'est le chiffre de l'indice, pas mon numéro dans le tableau.",
     "Mon acronyme comporte 4 lettres. La 1ʳᵉ est T. Je touche la concentration, l'impulsivité et l'organisation. On confond souvent mes symptômes avec de la paresse — c'est faux : je suis d'origine neurologique.",
     "Je suis le TDAH — Trouble Déficitaire de l'Attention avec ou sans Hyperactivité. Cherchez maintenant mon NUMÉRO dans le tableau."
   ],
   hints:[
     "⚠️ Le '1' des indices est un leurre. Cherchez TDAH dans le tableau.",
     "TDAH figure dans le tableau. Son numéro n'est pas 1.",
     "TDAH est le numéro 4 dans le tableau."
   ]},

  // SALLE 2 — Piège : question demande la maladie RESPIRATOIRE, pas neurologique (instinct)
  {type:'A',e:'🔤',diff:'Moyen ★★ ⚠️⚠️',dc:'diff2',
   title:'Le Laboratoire des Mots',sub:"⚠️ Lisez la question jusqu'au bout — l'instinct trompe !",ans:'6',
   words:[
     {s:'MISTEAU',sol:'AUTISME',note:'Trouble du spectre neurodéveloppemental'},
     {s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire chronique'},
     {s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune systémique'}
   ],
   q:"⚠️ PIÈGE : Cette fois, la question ne porte NI sur le trouble neurologique NI sur l'auto-immune. Comptez les lettres du mot désignant la maladie RESPIRATOIRE chronique.",
   hints:[
     "⚠️ Beaucoup comptent AUTISME (7) par réflexe. La question demande la maladie RESPIRATOIRE.",
     "La maladie respiratoire : HETSAM → ASTHME.",
     "A-S-T-H-M-E = 6 lettres."
   ]},

  // SALLE 3 — Piège : "une" est un article, pas un nombre cardinal → DEUX est la réponse
  {type:'C',e:'🔀',diff:'Difficile ★★★ ⚠️⚠️',dc:'diff3',
   title:'Le Cerveau Embrouillé',sub:"⚠️ 'une' est un article, pas un nombre — le premier NOMBRE CARDINAL est ailleurs !",ans:'2',
   confused:"ume femme sur beux souffre b'emdométriose à ume périobe be sa vie. le premier MOMBRE CARBIMAL em lettres est votre chiffre.",
   decoded:"une femme sur <span class='ch'>DEUX</span> souffre d'endométriose à une période de sa vie. le premier NOMBRE CARDINAL en lettres est votre chiffre.",
   hints:[
     "⚠️ PIÈGE : 'une' et 'une période' sont des ARTICLES — pas des nombres cardinaux. La question demande un nombre qui COMPTE une quantité.",
     "Le premier NOMBRE CARDINAL : 'une femme sur DEUX'.",
     "DEUX est le premier nombre cardinal en lettres. DEUX = 2."
   ]},

  // SALLE 4 — Piège priorité : 3+(1×3)=6, pas (3+1)×3=12
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★ ⚠️⚠️',dc:'diff4',
   title:'La Chambre des Codes',sub:'⚠️ Double piège : trouvez 🔺, puis PRIORITÉ des opérations',ans:'6',
   sym_a:'tri',sym_b:'tri2',val_a:0,val_b:0,
   eq_visible:'🔺 × 🔺 = 9',
   eq_hidden:'🔺 + 🔻 × 🔺 = ?',
   blur_text:'⚠️ Si vous trouvez 12, vous lisez gauche→droite. Le vrai résultat est PAIR entre 5 et 7.',
   q:"Étape 1 : 🔺×🔺=9 → 🔺=? Étape 2 : ⚠️ Calculez 🔺+🔻×🔺 sachant que 🔻=🔺÷3. PRIORITÉ × avant + !",
   real_q:"🔺=3, 🔻=1. Priorité : 3+(1×3)=3+3=6",
   hints:[
     "🔺×🔺=9 donc 🔺=3. Puis 🔻=3÷3=1.",
     "⚠️ Ne faites pas (3+1)×3=12. Faites 3+(1×3).",
     "3 + (1 × 3) = 3 + 3 = 6."
   ]}
]},

// ──────────────────────────────────────────────────────────
// SÉRIE 33 ☠️ — code : 9148
// ──────────────────────────────────────────────────────────
{id:33,name:'Série 33 ☠️ Ultra-Pièges',code:'9148',rooms:[

  // SALLE 1 — Piège : indice 1 contient une CONTRE-VÉRITÉ volontaire sur Crohn
  {type:'T',e:'📋',diff:'Facile ★ ☠️',dc:'diff1',
   title:'La Salle des Pathologies',sub:'☠️ Le premier indice contient une CONTRE-VÉRITÉ — restez vigilant !',ans:'9',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Dépression'},{n:2,p:'TDAH'},{n:3,p:'TSA / Autisme'},
        {n:4,p:'Endométriose'},{n:5,p:'Épilepsie'},{n:6,p:'Lupus'},
        {n:7,p:'SFC / Fatigue chronique'},{n:8,p:'Diabète type 1'},{n:9,p:'Maladie de Crohn'}],
   clues:[
     "☠️ CONTRE-VÉRITÉ VOLONTAIRE dans cet indice : on dit souvent que je touche uniquement le ventre — c'est FAUX. Je peux toucher n'importe quelle partie du tube digestif, de la bouche à l'anus.",
     "Je suis une MICI — Maladie Inflammatoire Chronique de l'Intestin. Je provoque des douleurs abdominales, des diarrhées, une fatigue intense. En dehors des poussées, mon porteur peut sembler parfaitement bien.",
     "Mon nom désigne un gastro-entérologue AMÉRICAIN qui m'a décrite pour la première fois dans les années 1930. Son nom de famille est devenu mon nom."
   ],
   hints:[
     "☠️ Ignorez le piège de l'indice 1. Je suis une MICI — Maladie Inflammatoire Chronique Intestinale.",
     "Je porte le nom d'un médecin américain des années 1930 (Burrill Bernard Crohn).",
     "Maladie de Crohn = numéro 9 dans le tableau."
   ]},

  // SALLE 2 — Piège : compter les VOYELLES (pas les lettres) du mot le plus court
  {type:'A',e:'🔤',diff:'Moyen ★★ ☠️',dc:'diff2',
   title:'Le Laboratoire des Mots',sub:'☠️ Ne comptez pas les LETTRES — comptez les VOYELLES du mot le plus court !',ans:'1',
   words:[
     {s:'COT',sol:'TOC',note:'Trouble obsessionnel compulsif — 3 lettres, mais combien de voyelles ?'},
     {s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune — 5 lettres'},
     {s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire — 6 lettres'}
   ],
   q:"☠️ ULTRA-PIÈGE : Décodez les 3 mots. Ne comptez PAS leurs lettres. Trouvez le mot le plus COURT, puis comptez combien de VOYELLES (a, e, i, o, u, y) il contient.",
   hints:[
     "☠️ PIÈGE : Ne répondez pas 3 (nombre de lettres de TOC). La question demande le nombre de VOYELLES.",
     "Le mot le plus court est TOC. Ses lettres : T (consonne) — O (voyelle) — C (consonne).",
     "TOC contient 1 seule voyelle : O. Réponse = 1."
   ]},

  // SALLE 3 — Piège : QUATRE n'a aucun b/d/m/n → reste identique dans le texte confus
  {type:'C',e:'🔀',diff:'Difficile ★★★ ☠️',dc:'diff3',
   title:'Le Cerveau Embrouillé',sub:"☠️ Le nombre en lettres n'a PAS changé dans le texte confus — cherchez pourquoi !",ans:'4',
   confused:"quatre sur bix persommes atteimtes b'ume nalabie imvisidle me somt pas biagmostiquées. le prenier mondre em lettres bams ce texte est votre chiffre.",
   decoded:"<span class='ch'>QUATRE</span> sur dix personnes atteintes d'une maladie invisible ne sont pas diagnostiquées. le premier nombre en lettres dans ce texte est votre chiffre.",
   hints:[
     "☠️ PIÈGE : 'quatre' ne contient ni b, ni d, ni m, ni n — la règle ne l'affecte PAS. Il reste 'quatre' dans les deux textes. C'est le piège !",
     "Les joueurs cherchent une transformation qui n'existe pas. QUATRE = QUATRE.",
     "Le premier nombre en lettres est QUATRE = 4."
   ]},

  // SALLE 4 — Piège : multiplication donne 15 (2 chiffres = impossible) → utiliser addition = 8
  {type:'HARD',e:'⚗️',diff:'Très difficile ☠️',dc:'diff4',
   title:'La Chambre des Codes',sub:"☠️ L'équation affichée est un LEURRE — si le résultat a 2 chiffres, changez d'opération !",ans:'8',
   sym_a:'moon',sym_b:'star',val_a:5,val_b:3,
   eq_visible:'🌙 + 🌙 + 🌙 + 🌙 + 🌙 = 25  →  🌙 = 5',
   eq_hidden:'🌙 × ⭐ = ? ← LEURRE (résultat à 2 chiffres !)',
   blur_text:"☠️ La multiplication 5×3=15 a 2 chiffres → impossible ! Changez d'opération. Résultat PAIR entre 7 et 9.",
   q:"☠️ 🌙=5, ⭐=🌙−2=3. La multiplication 🌙×⭐=15 est un leurre (2 chiffres). Trouvez l'opération qui donne UN chiffre entre 0 et 9.",
   real_q:"🌙=5, ⭐=3. 5×3=15 impossible. 5+3=8 ✅",
   hints:[
     "☠️ 🌙=5 et ⭐=🌙−2=3. La multiplication 5×3=15 a 2 chiffres → c'est le LEURRE.",
     "Si × ne marche pas, essayez + : 🌙+⭐=5+3.",
     "5 + 3 = 8. Un seul chiffre. Réponse = 8."
   ]}
]}
];
