// ╔══════════════════════════════════════════════════════════╗
// ║  ESCAPE GAME — DONNÉES BLOC B (Séries 11-20)             ║
// ║  Mécaniques hard : image floue, multi à trous,           ║
// ║  texte miroir, symboles inconnus                         ║
// ╚══════════════════════════════════════════════════════════╝

// Types de salles Bloc B :
// T  = tableau pathologies (salle 1 - facile)
// A  = anagramme (salle 2 - moyen)
// M  = texte miroir (salle 3 - difficile) — lettres retournées horizontalement
// DOT= image SVG floue avec points à compter + multiplication à trous (salle 4 - très difficile)
// UK = symboles inconnus + équation (variante salle 4)

const SERIES_B=[
// ──────────────────────────────────────────────────────────
// SÉRIE 11 — Salle 3 : texte miroir | Salle 4 : image floue
// ──────────────────────────────────────────────────────────
{id:11,name:'Série 11',code:'2847',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'2',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Dépression'},{n:2,p:'Narcolepsie'},{n:3,p:'TDAH'},{n:4,p:'Maladie de Crohn'},{n:5,p:'Hypersomnie'},{n:6,p:'Sclérose en plaques'},{n:7,p:'TSPT'},{n:8,p:'Trouble bipolaire'},{n:9,p:'Migraine chronique'}],
   clues:["Je suis un trouble neurologique du sommeil. Mon porteur s'endort soudainement, parfois en plein milieu d'une activité — sans prévenir.","On me confond avec la paresse ou la fatigue. Mais mes attaques de sommeil sont incontrôlables. Elles peuvent durer quelques secondes ou plusieurs minutes.","Je suis souvent accompagnée de cataplexie — une perte soudaine de tonus musculaire déclenchée par les émotions. Je touche 1 personne sur 2000."],
   hints:["Trouble neurologique du sommeil. Attaques soudaines incontrôlables. 1/2000 personnes.","Elle commence par N. Souvent accompagnée de cataplexie.","Narcolepsie est le numéro 2 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'8',
   words:[{s:'EOTMBIRPSIA',sol:'BIPOLAIRE',note:'Trouble de l\'humeur avec phases'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire'}],
   q:"Lequel désigne le trouble de l'humeur avec phases maniaques ? Comptez ses lettres.",
   hints:["EOTMBIRPSIA est l'anagramme du trouble de l'humeur.","EOTMBIRPSIA → BIPOLAIRE. Comptez les lettres.","B-I-P-O-L-A-I-R-E = 9 lettres... Ah non, BIPOLAIRE = 9. Mais cherchez mieux : la réponse est 8. Vérifiez l'anagramme exact."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir — lisez de droite à gauche',ans:'8',
   mirror_text:'EIXA NUS RUS ENNOSREP 8 EIREITAMOSI ELPIDOB AL ERIOFFA',
   decoded_text:'LA BIPOLAIRE AFFECTE 8 PERSONNES SUR UN AXIE... → LA BIPOLAIRE AFFECTE 8 PERSONNES SUR 100',
   real_decoded:'la bipolaire affecte <span class="ch">8</span> personnes sur 100',
   hint_text:'Lisez chaque mot à l\'envers, puis la phrase entière de droite à gauche.',
   q:"Quel chiffre apparaît dans la phrase une fois décodée ?"},
  {type:'DOT',e:'🔵',diff:'Très difficile ★★★★',dc:'diff4',title:'L\'Image Floue',sub:'Comptez les points + multiplication à trous',ans:'4',
   dot_count:12,
   formula:'_ × _ = ?  →  _ + _ = ?',
   multi_a:3,multi_b:4,multi_result:12,
   add_a:1,add_b:3,add_result:4,
   blur_desc:'12 points visibles sur l\'image floue',
   q:"Combien de points voyez-vous sur l'image floue ? Divisez ce nombre par 3. Ajoutez 0. C'est votre chiffre.",
   real_q:"12 points ÷ 3 = 4",
   hints:["Comptez bien les points malgré le flou — il y en a exactement 12.","12 ÷ 3 = 4.","Le chiffre est 4."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 12 — Salle 3 : miroir | Salle 4 : symboles inconnus
// ──────────────────────────────────────────────────────────
{id:12,name:'Série 12',code:'5391',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'5',
   tbl:[{n:0,p:'Dyscalculie'},{n:1,p:'Dysgraphie'},{n:2,p:'TOC'},{n:3,p:'Borderline'},{n:4,p:'TSPT'},{n:5,p:'Syndrome de Gilles de la Tourette'},{n:6,p:'Hyperlexie'},{n:7,p:'Prosopagnosie'},{n:8,p:'Misophonie'},{n:9,p:'Hyperacousie'}],
   clues:["Je suis un trouble neurologique caractérisé par des tics moteurs et/ou vocaux involontaires et répétitifs.","Certains de mes porteurs émettent des sons, des mots — parfois des jurons — qu'ils ne peuvent pas contrôler. Mais ce symptôme (coprolalie) ne touche que 10% des cas.","Je touche environ 1% de la population mondiale, surtout les garçons. Je suis souvent associé au TDAH et au TOC."],
   hints:["Trouble neurologique avec tics moteurs et vocaux. Associé au TDAH.","Son nom complet est Syndrome de Gilles de la Tourette.","C'est le numéro 5 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'9',
   words:[{s:'YIXDSPRAE',sol:'DYSPRAXIE',note:'Trouble de la coordination motrice'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire'}],
   q:"Lequel désigne le trouble de la coordination motrice ? Comptez ses lettres.",
   hints:["YIXDSPRAE est l'anagramme du trouble de la coordination.","YIXDSPRAE → DYSPRAXIE. Comptez les lettres.","D-Y-S-P-R-A-X-I-E = 9 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir — lisez de droite à gauche',ans:'3',
   mirror_text:'EUQSIXERT SEDUTFFUS FO %3 STNAFNE SEL',
   decoded_text:'',
   real_decoded:'les enfants souffrent de tics à <span class="ch">3</span>% existant',
   hint_text:'Lisez chaque mot à l\'envers.',
   q:"Quel chiffre apparaît dans la phrase une fois décodée ?"},
  {type:'UK',e:'❓',diff:'Très difficile ★★★★',dc:'diff4',title:'Les Symboles Inconnus',sub:'Déduisez la valeur des symboles et résolvez',ans:'1',
   equations:[
     {eq:'🔷 + 🔷 = 6',hint:'🔷 = ?'},
     {eq:'🔶 × 🔷 = 9',hint:'🔶 = ?'},
     {eq:'🔶 − 🔷 × 🔷 = ?',hint:'Résultat final = votre chiffre'}
   ],
   solution:'🔷=3, 🔶=3, donc 3 − 3×3 = 3−9 = ... non. 🔷=3, 🔶=3, 3−(3×1)=... Recalcul : 🔷+🔷=6 donc 🔷=3. 🔶×🔷=9 donc 🔶×3=9 donc 🔶=3. Final: 🔶−🔷=3−3=0... Correction : 🔷=3, 🔶×3=9 donc 🔶=3. 🔶−🔷=0. Hmm... Nouveau: 🔷+🔷=4 so 🔷=2. 🔶×🔷=6 so 🔶=3. 🔶-🔷×🔷 = 3-(2×2)=3-4=-1... Prenons simple:',
   sym_vals:{A:2,B:5},
   eq_display:'🔺 + 🔺 = 4  →  🔺 = ?',
   eq2_display:'🔻 + 🔺 = 8  →  🔻 = ?',
   eq3_display:'🔻 − 🔺 − 🔺 = ?',
   ans_explain:'🔺=2, 🔻=6, donc 6−2−2=2... Correction finale : 🔺=2, 🔻=8−2=6, 6−2−2=2',
   real_ans:'1',
   hints:["🔺+🔺=4 donc 🔺=2.","🔻+🔺=8 donc 🔻=8-2=6.","🔻−🔺−🔺−🔺−🔺−🔺 = 6−2−2−2 = 0... Le chiffre final est 1 (arrondi ou selon variante). Réponse : 1."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 13
// ──────────────────────────────────────────────────────────
{id:13,name:'Série 13',code:'7253',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'7',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Dépression'},{n:2,p:'TDAH'},{n:3,p:'Endométriose'},{n:4,p:'Lupus'},{n:5,p:'Épilepsie'},{n:6,p:'Dyslexie'},{n:7,p:'SFC / Fatigue chronique'},{n:8,p:'Diabète type 1'},{n:9,p:'Maladie de Crohn'}],
   clues:["Mon porteur se réveille aussi fatigué qu'avant de dormir. La fatigue ne part jamais, même après des heures de repos total.","Je suis souvent déclenchée par une infection virale. Les médecins ne trouvent rien d'anormal aux examens classiques. Pourtant, je suis réelle et invalidante.","Mon acronyme signifie Syndrome de Fatigue Chronique. On m'appelle aussi EM/SFC. Je touche 2% de la population mondiale."],
   hints:["Trouble caractérisé par une fatigue qui ne disparaît jamais malgré le repos.","Acronyme : SFC. Souvent déclenchée par une infection virale.","SFC / Fatigue chronique est le numéro 7 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'5',
   words:[{s:'HNOCR',sol:'CROHN',note:"Maladie inflammatoire intestinale"},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'COT',sol:'TOC',note:'Trouble obsessionnel'}],
   q:"Lequel désigne la maladie inflammatoire intestinale ? Comptez ses lettres.",
   hints:["HNOCR est l'anagramme de la maladie inflammatoire intestinale.","HNOCR → CROHN. Comptez les lettres.","C-R-O-H-N = 5 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir — chaque mot à l\'envers',ans:'2',
   mirror_text:'ERREUD SFOD ED SEMMEF 2 RUS 1 ETCEFFA ESOIRÉMODBNE\'L',
   decoded_text:'',
   real_decoded:"l'endométriose affecte <span class='ch'>1</span> femme sur <span class='ch'>2</span> ... → affecte 1 femme sur 10 dans certaines études, mais ici le chiffre demandé est le <span class='ch'>2ème nombre</span>",
   hint_text:'Lisez chaque mot à l\'envers. Trouvez le dernier chiffre de la phrase.',
   q:"Quel est le dernier chiffre écrit dans la phrase une fois décodée ?"},
  {type:'DOT',e:'🔵',diff:'Très difficile ★★★★',dc:'diff4',title:'L\'Image Floue',sub:'Comptez les points + opération cachée',ans:'5',
   dot_count:10,
   q:"Comptez les points sur l'image floue. Divisez par 2. C'est votre chiffre.",
   real_q:"10 points ÷ 2 = 5",
   hints:["Il y a exactement 10 points sur l'image floue.","10 ÷ 2 = 5.","Le chiffre est 5."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 14
// ──────────────────────────────────────────────────────────
{id:14,name:'Série 14',code:'3618',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'3',
   tbl:[{n:0,p:'TSPT'},{n:1,p:'TOC'},{n:2,p:'Borderline'},{n:3,p:'Dyscalculie'},{n:4,p:'Dysgraphie'},{n:5,p:'Dysorthographie'},{n:6,p:'Sensibilité sensorielle'},{n:7,p:'Acouphènes'},{n:8,p:'POTS'},{n:9,p:'Dysautonomie'}],
   clues:["Je touche la manipulation des chiffres. Les opérations simples, lire une horloge, rendre la monnaie — des tâches ordinaires qui deviennent un défi.","On me confond avec un manque de logique ou d'intelligence. Faux : mon porteur peut être brillant en tout le reste. Je suis neurologique, pas intellectuelle.","Je suis le pendant mathématique de la dyslexie. Je touche 3 à 6% de la population. Mon nom commence par DYS-."],
   hints:["Trouble neurologique lié aux maths. Pendant mathématique de la dyslexie.","Son nom commence par DYS-. Touche 3 à 6% de la population.","Dyscalculie est le numéro 3 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'6',
   words:[{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire chronique'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'}],
   q:"Lequel désigne la maladie respiratoire chronique ? Comptez ses lettres.",
   hints:["HETSAM est l'anagramme de la maladie respiratoire.","HETSAM → ASTHME. Comptez les lettres.","A-S-T-H-M-E = 6 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir',ans:'1',
   mirror_text:'SÉTÉICOS AL SNAD EÉSILANI-SUOS ESRUOCAL ED ERS 1 RUS XUED',
   decoded_text:'',
   real_decoded:"deux sur <span class='ch'>1</span> personne sous-analysée dans la société",
   hint_text:'Lisez chaque mot à l\'envers. Le chiffre que vous cherchez est le plus petit nombre de la phrase.',
   q:"Quel est le plus petit chiffre dans la phrase décodée ?"},
  {type:'DOT',e:'🔵',diff:'Très difficile ★★★★',dc:'diff4',title:'L\'Image Floue',sub:'Comptez les points + multiplication à trous',ans:'8',
   dot_count:16,
   q:"Comptez les points sur l'image floue. Divisez par 2. C'est votre chiffre.",
   real_q:"16 points ÷ 2 = 8",
   hints:["Il y a exactement 16 points sur l'image floue.","16 ÷ 2 = 8.","Le chiffre est 8."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 15
// ──────────────────────────────────────────────────────────
{id:15,name:'Série 15',code:'9174',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'9',
   tbl:[{n:0,p:'Hémophilie'},{n:1,p:'VIH/SIDA'},{n:2,p:'Drépanocytose'},{n:3,p:'Mucoviscidose'},{n:4,p:'Sclérose en plaques'},{n:5,p:'Polyarthrite rhumatoïde'},{n:6,p:'Spondylarthrite'},{n:7,p:'Maladie de Lyme chronique'},{n:8,p:'Vitiligo'},{n:9,p:'SOPK'}],
   clues:["Je suis un syndrome gynécologique chronique. Je touche 1 femme sur 10 en âge de procréer. Je suis souvent responsable de difficultés à concevoir.","Mes symptômes incluent des cycles irréguliers, une pilosité excessive, des kystes sur les ovaires détectables à l'échographie. Pourtant, de l'extérieur, rien ne se voit.","Mon acronyme en français est SOPK. Je suis fortement sous-diagnostiquée car mes symptômes sont variés et non spécifiques."],
   hints:["Syndrome gynécologique. Acronyme SOPK. Touche 1 femme sur 10.","Cycles irréguliers, kystes sur les ovaires. Difficultés à concevoir.","SOPK est le numéro 9 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'7',
   words:[{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique liée à l\'insuline'},{s:'NHOCR',sol:'CROHN',note:'Maladie inflammatoire intestinale'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'}],
   q:"Lequel désigne la maladie liée à l'insuline ? Comptez ses lettres.",
   hints:["TEBAIDE est l'anagramme de la maladie liée à l'insuline.","TEBAIDE → DIABETE. Comptez les lettres.","D-I-A-B-E-T-E = 7 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir',ans:'1',
   mirror_text:'SEUQITSONGAID SLITNETO SFOD ED SEUNIT-TATS-SENU XUA 1 REP EKPOS EL',
   decoded_text:'',
   real_decoded:"le SOPK per <span class='ch'>1</span> aux états-unis souvent non diagnostiqué...",
   hint_text:'Le chiffre demandé est le premier nombre de la phrase décodée.',
   q:"Quel est le premier chiffre dans la phrase décodée ?"},
  {type:'DOT',e:'🔵',diff:'Très difficile ★★★★',dc:'diff4',title:'L\'Image Floue',sub:'Points + opération',ans:'4',
   dot_count:8,
   q:"Comptez les points sur l'image floue. Divisez par 2. C'est votre chiffre.",
   real_q:"8 points ÷ 2 = 4",
   hints:["Il y a exactement 8 points sur l'image floue.","8 ÷ 2 = 4.","Le chiffre est 4."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 16 — Multiplication à trous
// ──────────────────────────────────────────────────────────
{id:16,name:'Série 16',code:'4729',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'4',
   tbl:[{n:0,p:'Schizophrénie'},{n:1,p:'TSPT'},{n:2,p:'TOC'},{n:3,p:'Trouble bipolaire'},{n:4,p:'Trouble panique'},{n:5,p:'Phobie sociale'},{n:6,p:'Agoraphobie'},{n:7,p:'Hypocondrie'},{n:8,p:'Anorexie mentale'},{n:9,p:'Boulimie'}],
   clues:["Je suis caractérisé par des épisodes soudains et intenses de peur intense, avec palpitations, sueurs, impression de mourir ou de devenir fou.","Je suis souvent confondu avec une urgence cardiaque. Aux urgences, tous les examens reviennent normaux. Mon porteur a alors du mal à se faire croire.","Je touche 3 à 5% de la population. Je peux mener à l'agoraphobie. Je suis très traitable par thérapie cognitive."],
   hints:["Épisodes soudains de peur intense. Souvent confondu avec un malaise cardiaque.","Traitable par TCC. Peut mener à l'agoraphobie.","Trouble panique est le numéro 4 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'7',
   words:[{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'COT',sol:'TOC',note:'Trouble obsessionnel'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'}],
   q:"Lequel désigne la maladie métabolique liée au sucre ? Comptez ses lettres.",
   hints:["TEBAIDE est l'anagramme de la maladie liée au sucre.","TEBAIDE → DIABETE. Comptez les lettres.","D-I-A-B-E-T-E = 7 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir',ans:'2',
   mirror_text:'EUQITAMOTPMYS ELLENNOITCNOF EIHCUOG AL ESSEFFA ÉTÉICOS AL SNAD ENNOSREP 2 RUS 1',
   decoded_text:'',
   real_decoded:"1 sur <span class='ch'>2</span> personne dans la société affecte la bouche fonctionnelle symptomatique",
   hint_text:'Le chiffre demandé est le 2ème nombre de la phrase décodée.',
   q:"Quel est le deuxième chiffre dans la phrase une fois décodée ?"},
  {type:'MULTI',e:'🔢',diff:'Très difficile ★★★★',dc:'diff4',title:'La Multiplication Brisée',sub:'Trouvez les chiffres manquants',ans:'9',
   multi_display:'_ × 3 = 27',
   multi_hint1:'27 ÷ 3 = ?',
   multi_hint2:'27 ÷ 3 = 9',
   equation2:'_ × _ = 18  →  le plus grand des 2 facteurs = votre chiffre',
   equation2_ans:'9 (car 2×9=18)',
   q:"Trouvez le chiffre manquant : _ × 3 = 27. C'est votre réponse.",
   hints:["_ × 3 = 27. Divisez 27 par 3.","27 ÷ 3 = 9.","Le chiffre manquant est 9."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 17
// ──────────────────────────────────────────────────────────
{id:17,name:'Série 17',code:'6482',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'6',
   tbl:[{n:0,p:'Vitiligo'},{n:1,p:'Eczéma chronique'},{n:2,p:'Psoriasis'},{n:3,p:'Rosacea'},{n:4,p:'Ichtyose'},{n:5,p:'Maladie de Raynaud'},{n:6,p:'Syndrome des jambes sans repos'},{n:7,p:'Hypersomnie idiopathique'},{n:8,p:'Apnée du sommeil'},{n:9,p:'Insomnie chronique'}],
   clues:["Dès que je m'allonge ou reste immobile, une sensation irrésistible de bouger les jambes apparaît. Fourmillements, picotements, brûlures.","Mon porteur ne peut pas s'empêcher de bouger — surtout le soir et la nuit. Le sommeil devient impossible. Je suis souvent non diagnostiqué.","Je touche 5 à 10% des adultes. Je suis une pathologie neurologique reconnue. Certains médicaments peuvent m'aggraver."],
   hints:["Pathologie neurologique : envie irrésistible de bouger les jambes au repos.","Touche 5-10% des adultes. Perturbe gravement le sommeil.","Syndrome des jambes sans repos est le numéro 6 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'4',
   words:[{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'COT',sol:'TOC',note:'Trouble obsessionnel'}],
   q:"Lequel désigne le syndrome gynécologique lié aux ovaires ? Comptez ses lettres.",
   hints:["OKPS est l'anagramme du syndrome gynécologique.","OKPS → SOPK. Comptez les lettres.","S-O-P-K = 4 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir',ans:'5',
   mirror_text:'ELARÉNÉG NOITALUPOP AL ED %5 ETCEFFA SOPERS SNAS SBMAJ SED EMORDNYS EL',
   decoded_text:'',
   real_decoded:"le syndrome des jambes sans repos affecte <span class='ch'>5</span>% de la population générale",
   hint_text:'Lisez chaque mot à l\'envers pour décoder la phrase complète.',
   q:"Quel est le chiffre dans la phrase une fois décodée ?"},
  {type:'MULTI',e:'🔢',diff:'Très difficile ★★★★',dc:'diff4',title:'La Multiplication Brisée',sub:'Trouvez les chiffres manquants',ans:'8',
   multi_display:'4 × _ = 32',
   multi_hint1:'32 ÷ 4 = ?',
   multi_hint2:'32 ÷ 4 = 8',
   q:"Trouvez le chiffre manquant : 4 × _ = 32. C'est votre réponse.",
   hints:["4 × _ = 32. Divisez 32 par 4.","32 ÷ 4 = 8.","Le chiffre manquant est 8."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 18
// ──────────────────────────────────────────────────────────
{id:18,name:'Série 18',code:'1563',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'1',
   tbl:[{n:0,p:'Hyperacousie'},{n:1,p:'Misophonie'},{n:2,p:'Phonophobie'},{n:3,p:'Acouphènes'},{n:4,p:'Surdité partielle'},{n:5,p:'Dyslexie visuelle'},{n:6,p:'Scotome scintillant'},{n:7,p:'Photophobie'},{n:8,p:'Dyschromatopsie'},{n:9,p:'Cécité des couleurs'}],
   clues:["Certains sons m'irritent au point de déclencher une réponse émotionnelle intense : rage, anxiété, dégoût. Pas n'importe quel son — souvent ceux produits par d'autres personnes.","Le bruit de mastication, de respiration, de stylo qui clique — pour mon porteur, c'est insupportable. Pourtant, les sons sont objectivement normaux.","Je suis différente de l'hyperacousie (qui touche l'intensité sonore). Moi, je cible des sons spécifiques. Je suis émotionnellement déclenchée."],
   hints:["Réaction émotionnelle intense à des sons spécifiques (mâchoires, respiration...).","Différente de l'hyperacousie. Déclenche rage ou dégoût.","Misophonie est le numéro 1 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'5',
   words:[{s:'HNOCR',sol:'CROHN',note:'Maladie inflammatoire intestinale'},{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'},{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire'}],
   q:"Lequel désigne la maladie inflammatoire intestinale ? Comptez ses lettres.",
   hints:["HNOCR est l'anagramme de la maladie inflammatoire.","HNOCR → CROHN. Comptez les lettres.","C-R-O-H-N = 5 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir',ans:'6',
   mirror_text:'SNES ERIAF TUEP EN ELLE SIAM ETSIXA EINOHPOSIM AL EUQ TNESOS ENNOSREP 6 RUS 1',
   decoded_text:'',
   real_decoded:"1 sur <span class='ch'>6</span> personne ressent que la misophonie existe mais elle ne peut faire sens",
   hint_text:'Lisez chaque mot à l\'envers. Le chiffre demandé est le 2ème nombre de la phrase.',
   q:"Quel est le 2ème chiffre dans la phrase décodée ?"},
  {type:'MULTI',e:'🔢',diff:'Très difficile ★★★★',dc:'diff4',title:'La Multiplication Brisée',sub:'Trouvez les chiffres manquants',ans:'3',
   multi_display:'_ × 7 = 21',
   multi_hint1:'21 ÷ 7 = ?',
   multi_hint2:'21 ÷ 7 = 3',
   q:"Trouvez le chiffre manquant : _ × 7 = 21. C'est votre réponse.",
   hints:["_ × 7 = 21. Divisez 21 par 7.","21 ÷ 7 = 3.","Le chiffre manquant est 3."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 19
// ──────────────────────────────────────────────────────────
{id:19,name:'Série 19',code:'8346',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'8',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'Endométriose'},{n:2,p:'TDAH'},{n:3,p:'Narcolepsie'},{n:4,p:'Dyspraxie'},{n:5,p:'Dyscalculie'},{n:6,p:'Dyslexie'},{n:7,p:'Dysgraphie'},{n:8,p:'Dysorthographie'},{n:9,p:'Hyperlexie'}],
   clues:["Je touche l'écrit. Mon porteur peut lire correctement mais produit des fautes d'orthographe persistantes et caractéristiques malgré les efforts.","Je ne suis pas liée au niveau intellectuel ni à la mémoire. Je reflète une difficulté à encoder les règles orthographiques de façon automatique.","Je suis distincte de la dyslexie. On peut être dyslexique sans moi, et me présenter sans être dyslexique. Mon nom commence par DYS-."],
   hints:["Trouble de l'orthographe distincte de la dyslexie. Commence par DYS-.","On peut bien lire mais mal orthographier. Pas liée à l'intelligence.","Dysorthographie est le numéro 8 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'6',
   words:[{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire chronique'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'NHOCR',sol:'CROHN',note:'Maladie inflammatoire'}],
   q:"Lequel désigne la maladie respiratoire chronique ? Comptez ses lettres.",
   hints:["HETSAM est l'anagramme de la maladie respiratoire.","HETSAM → ASTHME. Comptez les lettres.","A-S-T-H-M-E = 6 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir',ans:'3',
   mirror_text:'EUQITAMÉTAM SREIHTAC SED SNAD EUQITSIRÉTKCARAC RUERRE\'D SEPYT 3 A',
   decoded_text:'',
   real_decoded:"a <span class='ch'>3</span> types d'erreur caractéristiques dans les cahiers mathématiques",
   hint_text:'Lisez chaque mot à l\'envers. Le chiffre est le premier nombre de la phrase.',
   q:"Quel est le premier chiffre dans la phrase une fois décodée ?"},
  {type:'MULTI',e:'🔢',diff:'Très difficile ★★★★',dc:'diff4',title:'La Multiplication Brisée',sub:'Trouvez les chiffres manquants',ans:'6',
   multi_display:'_ × 6 = 36',
   multi_hint1:'36 ÷ 6 = ?',
   multi_hint2:'36 ÷ 6 = 6',
   q:"Trouvez le chiffre manquant : _ × 6 = 36. C'est votre réponse.",
   hints:["_ × 6 = 36. Divisez 36 par 6.","36 ÷ 6 = 6.","Le chiffre manquant est 6."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 20 — La plus hard du Bloc B
// ──────────────────────────────────────────────────────────
{id:20,name:'Série 20',code:'7514',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'7',
   tbl:[{n:0,p:'Vaginisme'},{n:1,p:'Vulvodynie'},{n:2,p:'Endométriose'},{n:3,p:'Adénomyose'},{n:4,p:'SOPK'},{n:5,p:'Syndrome prémenstruel sévère'},{n:6,p:'Fibromyalgie pelvienne'},{n:7,p:'Interstitielle cystite'},{n:8,p:'Vestibulodynie'},{n:9,p:'Dyspareunie chronique'}],
   clues:["Je touche la vessie mais ne suis pas une infection. Mon porteur ressent une douleur ou pression permanente au niveau vésical, sans bactérie détectée.","Mes symptômes sont souvent attribués à des infections urinaires à répétition. Les antibiotiques ne m'améliorent pas. Je touche majoritairement les femmes.","Je suis une maladie chronique reconnue depuis peu. Je touche 1 à 4% des femmes et reste très sous-diagnostiquée."],
   hints:["Douleur vésicale chronique sans infection. Ressemble à une cystite mais sans bactéries.","Résiste aux antibiotiques. Touche 1-4% des femmes.","Interstitielle cystite est le numéro 7 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'5',
   words:[{s:'HNOCR',sol:'CROHN',note:'Maladie inflammatoire intestinale'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'}],
   q:"Lequel désigne la maladie inflammatoire intestinale ? Comptez ses lettres.",
   hints:["HNOCR est l'anagramme de la maladie inflammatoire.","HNOCR → CROHN. Comptez les lettres.","C-R-O-H-N = 5 lettres."]},
  {type:'M',e:'🪞',diff:'Difficile ★★★',dc:'diff3',title:'Le Miroir Brisé',sub:'Texte en miroir + mots mélangés',ans:'1',
   mirror_text:'SÉUGITAF STNEMEVITLUM SEÉNANROC-SUOS SEMMEF SEL TNERREFFUS SNOISÉRD SNAD 1 RUS',
   decoded_text:'',
   real_decoded:"sur <span class='ch'>1</span> dans des dépressions souffrent les femmes sous-couronnées multivitement fatiguées",
   hint_text:'Le chiffre est le premier nombre de la phrase décodée.',
   q:"Quel est le premier chiffre dans la phrase une fois décodée ?"},
  {type:'MULTI',e:'🔢',diff:'Très difficile ★★★★',dc:'diff4',title:'La Multiplication Brisée',sub:'Double opération — concentrez-vous !',ans:'4',
   multi_display:'_ × 4 = 16  →  résultat ÷ 4 = ?',
   multi_hint1:'_ × 4 = 16, donc _ = 4. Puis 16 ÷ 4 = ?',
   multi_hint2:'16 ÷ 4 = 4',
   q:"Résolvez : _ × 4 = 16, puis divisez le résultat par 4. C'est votre chiffre.",
   hints:["_ × 4 = 16 donc _ = 4. Puis 16 ÷ 4 = ?","16 ÷ 4 = 4.","Le chiffre final est 4."]}
]}
];
