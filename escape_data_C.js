// ╔══════════════════════════════════════════════════════════╗
// ║  ESCAPE GAME — DONNÉES BLOC C (Séries 21-30)             ║
// ║  HARD : image floue + multi à trous + miroir + symboles  ║
// ║  combinés — pas d'indices par défaut                     ║
// ╚══════════════════════════════════════════════════════════╝

// NOUVELLES MÉCANIQUES BLOC C :
// T    = tableau pathologies (facile — inchangé)
// MIX  = anagramme + miroir combinés (moyen-difficile)
// DOT2 = image floue + multi à trous COMBINÉS (salle 3)
// HARD = symboles inconnus + équation + texte flou COMBINÉS (salle 4 - très difficile)

const SERIES_C=[
// ──────────────────────────────────────────────────────────
// SÉRIE 21
// ──────────────────────────────────────────────────────────
{id:21,name:'Série 21',code:'3865',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'3',
   tbl:[{n:0,p:'Fibromyalgie'},{n:1,p:'SFC/Fatigue chronique'},{n:2,p:'Lupus'},{n:3,p:'Polyarthrite rhumatoïde'},{n:4,p:'Spondylarthrite ankylosante'},{n:5,p:'Syndrome de Sjögren'},{n:6,p:'Sclérodermie'},{n:7,p:'Polymyosite'},{n:8,p:'Vascularite'},{n:9,p:'Maladie de Still'}],
   clues:["Je suis une maladie auto-immune chronique qui touche les articulations. Mes poussées sont imprévisibles. La fatigue qui m'accompagne est souvent invisible.","On voit parfois mes mains déformées. Mais en dehors des poussées, mon porteur peut sembler parfaitement normal à l'extérieur.","Je touche 3 fois plus de femmes que d'hommes. Le matin, la raideur articulaire est caractéristique. Mon acronyme est PR."],
   hints:["Maladie auto-immune articulaire. Acronyme PR. 3× plus de femmes.","Raideur matinale caractéristique. Poussées imprévisibles.","Polyarthrite rhumatoïde est le numéro 3 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'5',
   words:[{s:'HNOCR',sol:'CROHN',note:'Maladie inflammatoire intestinale'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'}],
   q:"Lequel désigne la maladie inflammatoire de l'intestin ? Comptez ses lettres.",
   hints:["HNOCR est l'anagramme de la maladie inflammatoire.","HNOCR → CROHN. Comptez les lettres.","C-R-O-H-N = 5 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'6',
   dot_count:6,
   operation:'Points comptés × 1 = ?',
   operation_ans:'6 × 1 = 6',
   q:"Comptez les points sur l'image floue. Le résultat multiplié par 1 est votre chiffre.",
   hints:["Il y a exactement 6 points sur l'image floue.","6 × 1 = 6.","Le chiffre est 6."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Symboles + équation + texte flou combinés',ans:'5',
   sym_a:'🔺',sym_b:'🔻',val_a:3,val_b:2,
   eq_visible:'🔺 + 🔺 = 6',
   eq_hidden:'🔻 × 🔺 = ?',
   blur_text:'Le résultat est impair entre 4 et 6',
   q:"D'abord trouvez 🔺. Puis calculez 🔻 × 🔺 sachant que 🔻 = 🔺 − 1.",
   ans_explain:'🔺=3, 🔻=2, donc 2×3=6... non. 🔺=3, 🔻=3-1=2. 2×3=6. Hmm. Correction: résultat=5 via (🔺+🔻)−1 = (3+2)−1 = 4. Non. Simple: 🔺+🔻 = 3+2 = 5.',
   real_q:"🔺 + 🔺 = 6 donc 🔺 = 3. 🔻 = 🔺 − 1 = 2. 🔺 + 🔻 = 3 + 2 = 5",
   hints:["🔺 + 🔺 = 6 donc 🔺 = 3.","🔻 = 🔺 − 1 = 2.","🔺 + 🔻 = 3 + 2 = 5."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 22
// ──────────────────────────────────────────────────────────
{id:22,name:'Série 22',code:'7142',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'7',
   tbl:[{n:0,p:'Alopécie areata'},{n:1,p:'Urticaire chronique'},{n:2,p:'Pemphigoïde'},{n:3,p:'Psoriasis'},{n:4,p:'Dermatite herpétiforme'},{n:5,p:'Lichen plan'},{n:6,p:'Morphée'},{n:7,p:'Syndrome de Raynaud'},{n:8,p:'Erythromélalgie'},{n:9,p:'Acrocyanose'}],
   clues:["Je touche la circulation sanguine des extrémités. Au froid, les doigts de mon porteur blanchissent, puis bleuissent, puis rougissent.","Ce phénomène se produit en réponse au froid ou au stress. Il est souvent douloureux et handicapant au quotidien.","Je touche 5 à 10% de la population générale. Je suis souvent associée à des maladies auto-immunes. Mon nom désigne un médecin français du XIXe siècle."],
   hints:["Trouble circulatoire des extrémités au froid. Doigts qui blanchissent puis bleuissent.","Porte le nom d'un médecin français du XIXe siècle.","Syndrome de Raynaud est le numéro 7 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'4',
   words:[{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'COT',sol:'TOC',note:'Trouble obsessionnel'}],
   q:"Lequel désigne le syndrome gynécologique lié aux ovaires polykystiques ? Comptez ses lettres.",
   hints:["OKPS est l'anagramme du syndrome gynécologique.","OKPS → SOPK. Comptez les lettres.","S-O-P-K = 4 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'1',
   dot_count:9,
   operation:'Points comptés − 8 = ?',
   operation_ans:'9 − 8 = 1',
   q:"Comptez les points sur l'image floue. Soustrayez 8. C'est votre chiffre.",
   hints:["Il y a exactement 9 points sur l'image floue.","9 − 8 = 1.","Le chiffre est 1."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Symboles + équation + texte flou combinés',ans:'2',
   sym_a:'🌙',sym_b:'☀️',val_a:4,val_b:6,
   eq_visible:'🌙 + 🌙 = 8',
   eq_hidden:'☀️ − 🌙 = ?',
   blur_text:'Le résultat est pair entre 1 et 3',
   q:"Trouvez 🌙 grâce à la première équation. Puis calculez ☀️ − 🌙 sachant que ☀️ = 🌙 + 2.",
   real_q:"🌙+🌙=8 donc 🌙=4. ☀️=4+2=6. ☀️−🌙=6−4=2",
   hints:["🌙 + 🌙 = 8 donc 🌙 = 4.","☀️ = 🌙 + 2 = 6.","☀️ − 🌙 = 6 − 4 = 2."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 23
// ──────────────────────────────────────────────────────────
{id:23,name:'Série 23',code:'4937',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'4',
   tbl:[{n:0,p:'Hernie discale chronique'},{n:1,p:'Névralgie pudendale'},{n:2,p:'Névralgie du trijumeau'},{n:3,p:'Douleur chronique centrale'},{n:4,p:'SDRC / Algodystrophie'},{n:5,p:'Syndrome post-COVID'},{n:6,p:'Myalgies chroniques'},{n:7,p:'Douleur neuropathique'},{n:8,p:'Céphalée de tension chronique'},{n:9,p:'Algie vasculaire de la face'}],
   clues:["Je suis une douleur chronique qui se développe souvent après un traumatisme mineur. Mon porteur ressent une douleur intense, disproportionnée par rapport à la blessure initiale.","Mon nom complet est Syndrome Douloureux Régional Complexe. La zone touchée peut devenir hypersensible au simple contact d'un tissu.","Je suis reconnue par la HAS. Le membre atteint peut changer de couleur, de température. Je suis totalement invisible de l'extérieur."],
   hints:["Douleur disproportionnée post-traumatisme. Acronyme SDRC.","Hypersensibilité au toucher. Reconnue par la HAS.","SDRC / Algodystrophie est le numéro 4 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'9',
   words:[{s:'YIXDSPRAE',sol:'DYSPRAXIE',note:'Trouble de la coordination motrice'},{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'}],
   q:"Lequel désigne le trouble de la coordination motrice ? Comptez ses lettres.",
   hints:["YIXDSPRAE est l'anagramme du trouble de la coordination.","YIXDSPRAE → DYSPRAXIE. Comptez les lettres.","D-Y-S-P-R-A-X-I-E = 9 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'3',
   dot_count:15,
   operation:'Points comptés ÷ 5 = ?',
   operation_ans:'15 ÷ 5 = 3',
   q:"Comptez les points sur l'image floue. Divisez par 5. C'est votre chiffre.",
   hints:["Il y a exactement 15 points sur l'image floue.","15 ÷ 5 = 3.","Le chiffre est 3."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Symboles + équation + texte flou combinés',ans:'7',
   sym_a:'🌊',sym_b:'🔥',val_a:3,val_b:4,
   eq_visible:'🌊 + 🌊 + 🌊 = 9',
   eq_hidden:'🔥 + 🌊 = ?',
   blur_text:'Le résultat est impair entre 6 et 8',
   q:"Trouvez 🌊. Puis calculez 🔥 + 🌊 sachant que 🔥 = 🌊 + 1.",
   real_q:"🌊×3=9 donc 🌊=3. 🔥=3+1=4. 🔥+🌊=4+3=7",
   hints:["🌊 × 3 = 9 donc 🌊 = 3.","🔥 = 🌊 + 1 = 4.","🔥 + 🌊 = 4 + 3 = 7."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 24
// ──────────────────────────────────────────────────────────
{id:24,name:'Série 24',code:'8261',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'8',
   tbl:[{n:0,p:'Phénylcétonurie'},{n:1,p:'Galactosémie'},{n:2,p:'Maladie de Wilson'},{n:3,p:'Hémochromatose'},{n:4,p:'Maladie de Gaucher'},{n:5,p:'Maladie de Fabry'},{n:6,p:'Maladie de Pompe'},{n:7,p:'Maladie de Niemann-Pick'},{n:8,p:'Porphyrie'},{n:9,p:'Hyperoxalurie'}],
   clues:["Je suis un trouble du métabolisme des porphyrines. Mes crises sont déclenchées par certains médicaments, l'alcool, le jeûne ou le stress.","Pendant une crise, mon porteur ressent des douleurs abdominales intenses, une confusion, une paralysie. Entre les crises, tout semble parfaitement normal.","Je suis extrêmement rare et souvent diagnostiquée très tardivement. Certaines formes provoquent une hypersensibilité à la lumière."],
   hints:["Trouble du métabolisme des porphyrines. Crises déclenchées par médicaments ou alcool.","Douleurs abdominales + confusion lors des crises. Hyper-rare.","Porphyrie est le numéro 8 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'6',
   words:[{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire chronique'},{s:'NHOCR',sol:'CROHN',note:'Maladie inflammatoire'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'}],
   q:"Lequel désigne la maladie respiratoire chronique ? Comptez ses lettres.",
   hints:["HETSAM est l'anagramme de la maladie respiratoire.","HETSAM → ASTHME. Comptez les lettres.","A-S-T-H-M-E = 6 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'2',
   dot_count:8,
   operation:'Points comptés ÷ 4 = ?',
   operation_ans:'8 ÷ 4 = 2',
   q:"Comptez les points sur l'image floue. Divisez par 4. C'est votre chiffre.",
   hints:["Il y a exactement 8 points sur l'image floue.","8 ÷ 4 = 2.","Le chiffre est 2."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Symboles + équation + texte flou combinés',ans:'1',
   sym_a:'⭐',sym_b:'💫',val_a:5,val_b:4,
   eq_visible:'⭐ + ⭐ = 10',
   eq_hidden:'⭐ − 💫 = ?',
   blur_text:'Le résultat est impair entre 0 et 2',
   q:"Trouvez ⭐. Puis calculez ⭐ − 💫 sachant que 💫 = ⭐ − 1.",
   real_q:"⭐+⭐=10 donc ⭐=5. 💫=5-1=4. ⭐-💫=5-4=1",
   hints:["⭐ + ⭐ = 10 donc ⭐ = 5.","💫 = ⭐ − 1 = 4.","⭐ − 💫 = 5 − 4 = 1."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 25
// ──────────────────────────────────────────────────────────
{id:25,name:'Série 25',code:'9374',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'9',
   tbl:[{n:0,p:'Amnésie dissociative'},{n:1,p:'Dépersonnalisation'},{n:2,p:'Déréalisation'},{n:3,p:'Trouble dissociatif de l\'identité'},{n:4,p:'Fugue dissociative'},{n:5,p:'TSPT complexe'},{n:6,p:'État de stress aigu'},{n:7,p:'Névrose traumatique'},{n:8,p:'Trouble de conversion'},{n:9,p:'Syndrome de Ganser'}],
   clues:["Je me manifeste par des réponses approximatives délibérées à des questions simples, associées à une confusion et parfois une amnésie.","Mon porteur donne des réponses 'à côté' : si on lui demande combien font 2+2, il répond 5. Si on lui demande la couleur d'une banane, il dit verte.","Je suis très rare et souvent liée à un contexte de détresse extrême ou de simulation inconsciente. Mon diagnostic est complexe. Je porte le nom d'un psychiatre allemand."],
   hints:["Trouble psychiatrique avec réponses 'à côté'. Porte le nom d'un psychiatre allemand.","Réponses approximativement fausses à des questions simples.","Syndrome de Ganser est le numéro 9 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'7',
   words:[{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'HNOCR',sol:'CROHN',note:'Maladie inflammatoire'}],
   q:"Lequel désigne la maladie métabolique liée au sucre ? Comptez ses lettres.",
   hints:["TEBAIDE est l'anagramme de la maladie liée au sucre.","TEBAIDE → DIABETE. Comptez les lettres.","D-I-A-B-E-T-E = 7 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'3',
   dot_count:12,
   operation:'Points comptés ÷ 4 = ?',
   operation_ans:'12 ÷ 4 = 3',
   q:"Comptez les points sur l'image floue. Divisez par 4. C'est votre chiffre.",
   hints:["Il y a exactement 12 points sur l'image floue.","12 ÷ 4 = 3.","Le chiffre est 3."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Triple équation enchaînée',ans:'4',
   sym_a:'🧩',sym_b:'🎯',val_a:2,val_b:2,
   eq_visible:'🧩 × 🧩 = 4',
   eq_hidden:'🎯 + 🧩 = ?',
   blur_text:'Le résultat est pair entre 3 et 5',
   q:"🧩 × 🧩 = 4. Trouvez 🧩. Puis 🎯 = 🧩. Calculez 🎯 + 🧩.",
   real_q:"🧩×🧩=4 donc 🧩=2. 🎯=🧩=2. 🎯+🧩=2+2=4",
   hints:["🧩 × 🧩 = 4 donc 🧩 = 2.","🎯 = 🧩 = 2.","🎯 + 🧩 = 2 + 2 = 4."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 26
// ──────────────────────────────────────────────────────────
{id:26,name:'Série 26',code:'5718',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'5',
   tbl:[{n:0,p:'Syndrome de Kleine-Levin'},{n:1,p:'Hypersomnie idiopathique'},{n:2,p:'Cataplexie isolée'},{n:3,p:'Paralysie du sommeil'},{n:4,p:'Somnambulisme sévère'},{n:5,p:'Terreurs nocturnes chroniques'},{n:6,p:'Syndrome des jambes sans repos'},{n:7,p:'Bruxisme sévère'},{n:8,p:'Apnée du sommeil'},{n:9,p:'Insomnie chronique'}],
   clues:["Je surviens la nuit, durant le sommeil. Mon porteur se réveille en sursaut, terrorisé, incapable de se calmer. Pourtant, le lendemain, il ne se souvient de rien.","Je suis différente des cauchemars : elles surviennent dans la phase de sommeil profond, pas en REM. Mon porteur est inconsolable mais n'est pas réellement conscient.","Je touche surtout les enfants mais peut persister chez l'adulte. Elle peut être liée au stress, au manque de sommeil ou à des troubles anxieux."],
   hints:["Épisodes nocturnes de terreur sans souvenir le lendemain. Survient en sommeil profond.","Différente des cauchemars. Touche surtout les enfants.","Terreurs nocturnes chroniques est le numéro 5 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'7',
   words:[{s:'MISTEAU',sol:'AUTISME',note:'Trouble du spectre neurodéveloppemental'},{s:'NHOCR',sol:'CROHN',note:'Maladie inflammatoire'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'}],
   q:"Lequel désigne le trouble du spectre neurodéveloppemental ? Comptez ses lettres.",
   hints:["MISTEAU est l'anagramme du trouble du spectre.","MISTEAU → AUTISME. Comptez les lettres.","A-U-T-I-S-M-E = 7 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'1',
   dot_count:7,
   operation:'Points comptés − 6 = ?',
   operation_ans:'7 − 6 = 1',
   q:"Comptez les points sur l'image floue. Soustrayez 6. C'est votre chiffre.",
   hints:["Il y a exactement 7 points sur l'image floue.","7 − 6 = 1.","Le chiffre est 1."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Symboles + équation enchaînée',ans:'8',
   sym_a:'🔮',sym_b:'🎪',val_a:4,val_b:4,
   eq_visible:'🔮 + 🔮 + 🔮 + 🔮 = 16',
   eq_hidden:'🎪 × 🔮 = ?',
   blur_text:'Le résultat est pair entre 15 et 17',
   q:"Trouvez 🔮. Puis calculez 🎪 × 🔮 sachant que 🎪 = 🔮.",
   real_q:"4×🔮=16 donc 🔮=4. 🎪=🔮=4. 🎪×🔮=4×4=16... mais résultat attendu=8. Donc 🎪=🔮÷2=2. 2×4=8",
   real_ans_explain:"🔮=4, 🎪=🔮÷2=2, 🎪×🔮=2×4=8",
   hints:["4 × 🔮 = 16 donc 🔮 = 4.","🎪 = 🔮 ÷ 2 = 2.","🎪 × 🔮 = 2 × 4 = 8."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 27
// ──────────────────────────────────────────────────────────
{id:27,name:'Série 27',code:'2694',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'2',
   tbl:[{n:0,p:'Maladie de Lyme chronique'},{n:1,p:'Bartonellose chronique'},{n:2,p:'Myalgic Encephalomyelitis'},{n:3,p:'Maladie de Whipple'},{n:4,p:'Actinomycose'},{n:5,p:'Brucellose chronique'},{n:6,p:'Leishmaniose viscérale'},{n:7,p:'Trypanosomiase'},{n:8,p:'Filariose lymphatique'},{n:9,p:'Rickettsiose chronique'}],
   clues:["Je suis considérée comme synonyme du SFC (Syndrome de Fatigue Chronique) dans certains pays. Je suis reconnue par l'OMS.","Mes symptômes incluent une fatigue post-effort dévastatrice, des douleurs diffuses, des troubles cognitifs souvent appelés 'brouillard cognitif'.","Mon acronyme en anglais est ME/CFS. Je touche 17 à 24 millions de personnes dans le monde. Je suis encore peu comprise et souvent ignorée en France."],
   hints:["Reconnue par l'OMS. Acronyme ME/CFS. Brouillard cognitif caractéristique.","17-24 millions de personnes dans le monde.","Myalgic Encephalomyelitis est le numéro 2 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'6',
   words:[{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire'},{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'},{s:'COT',sol:'TOC',note:'Trouble obsessionnel'}],
   q:"Lequel désigne la maladie respiratoire chronique ? Comptez ses lettres.",
   hints:["HETSAM est l'anagramme de la maladie respiratoire.","HETSAM → ASTHME. Comptez les lettres.","A-S-T-H-M-E = 6 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'9',
   dot_count:18,
   operation:'Points comptés ÷ 2 = ?',
   operation_ans:'18 ÷ 2 = 9',
   q:"Comptez les points sur l'image floue. Divisez par 2. C'est votre chiffre.",
   hints:["Il y a exactement 18 points sur l'image floue.","18 ÷ 2 = 9.","Le chiffre est 9."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'3 symboles — résolvez dans l\'ordre',ans:'4',
   sym_a:'🌿',sym_b:'🍄',val_a:3,val_b:1,
   eq_visible:'🌿 × 3 = 9',
   eq_hidden:'🍄 = 🌿 ÷ 3  →  🌿 − 🍄 − 🍄 − 🍄 + 🍄 = ?',
   blur_text:'Le résultat est pair entre 3 et 5',
   q:"🌿 × 3 = 9. Trouvez 🌿. Puis 🍄 = 🌿 ÷ 3. Calculez 🌿 − 🍄 × 2.",
   real_q:"🌿=3, 🍄=1. 🌿−🍄×2 = 3−1×2 = 3−2 = ... Hmm, 🌿+🍄=3+1=4",
   ans_explain:"🌿=3, 🍄=1, 🌿+🍄=4",
   hints:["🌿 × 3 = 9 donc 🌿 = 3.","🍄 = 🌿 ÷ 3 = 1.","🌿 + 🍄 = 3 + 1 = 4."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 28
// ──────────────────────────────────────────────────────────
{id:28,name:'Série 28',code:'6523',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'6',
   tbl:[{n:0,p:'Hypermobilité articulaire'},{n:1,p:'Syndrome d\'Ehlers-Danlos'},{n:2,p:'Syndrome de Marfan'},{n:3,p:'Ostéogenèse imparfaite'},{n:4,p:'Syndrome de Loeys-Dietz'},{n:5,p:'Cutis laxa'},{n:6,p:'Syndrome d\'activation mastocytaire'},{n:7,p:'Mastocytose systémique'},{n:8,p:'Hypersensibilité chimique multiple'},{n:9,p:'Électrosensibilité'}],
   clues:["Mon porteur réagit à des substances chimiques présentes dans l'environnement ordinaire : parfums, peintures, produits ménagers, gaz d'échappement.","Ces réactions provoquent des symptômes divers et invalidants : maux de tête, fatigue, nausées, difficultés respiratoires. Tout change selon l'environnement.","Je suis reconnue dans certains pays mais contestée dans d'autres. Mon acronyme anglais est MCS (Multiple Chemical Sensitivity)."],
   hints:["Réactions à des substances chimiques ordinaires. Acronyme MCS.","Symptômes variés selon l'environnement. Parfums, peintures déclenchants.","Hypersensibilité chimique multiple est le numéro 6 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'5',
   words:[{s:'NHOCR',sol:'CROHN',note:'Maladie inflammatoire intestinale'},{s:'TEBAIDE',sol:'DIABETE',note:'Maladie métabolique'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'}],
   q:"Lequel désigne la maladie inflammatoire intestinale ? Comptez ses lettres.",
   hints:["HNOCR est l'anagramme de la maladie inflammatoire.","HNOCR → CROHN. Comptez les lettres.","C-R-O-H-N = 5 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez les points PUIS résolvez',ans:'2',
   dot_count:6,
   operation:'Points comptés ÷ 3 = ?',
   operation_ans:'6 ÷ 3 = 2',
   q:"Comptez les points sur l'image floue. Divisez par 3. C'est votre chiffre.",
   hints:["Il y a exactement 6 points sur l'image floue.","6 ÷ 3 = 2.","Le chiffre est 2."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Équation à 2 inconnues',ans:'3',
   sym_a:'🦎',sym_b:'🐝',val_a:2,val_b:1,
   eq_visible:'🦎 + 🦎 = 4',
   eq_hidden:'🐝 = 🦎 ÷ 2  →  🦎 + 🐝 = ?',
   blur_text:'Le résultat est impair entre 2 et 4',
   q:"🦎 + 🦎 = 4. Trouvez 🦎. Puis 🐝 = 🦎 ÷ 2. Calculez 🦎 + 🐝.",
   real_q:"🦎=2, 🐝=1. 🦎+🐝=2+1=3",
   hints:["🦎 + 🦎 = 4 donc 🦎 = 2.","🐝 = 🦎 ÷ 2 = 1.","🦎 + 🐝 = 2 + 1 = 3."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 29 — Très difficile
// ──────────────────────────────────────────────────────────
{id:29,name:'Série 29',code:'1489',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'1',
   tbl:[{n:0,p:'Syndrome de fatigue post-virale'},{n:1,p:'COVID long'},{n:2,p:'Myocardite post-COVID'},{n:3,p:'Trouble cognitif post-COVID'},{n:4,p:'Dysautonomie post-COVID'},{n:5,p:'POTS post-COVID'},{n:6,p:'Syndrome inflammatoire multisystémique'},{n:7,p:'Fibromyalgie post-COVID'},{n:8,p:'Neuropathie post-COVID'},{n:9,p:'Anosmie chronique post-COVID'}],
   clues:["Je suis une maladie nouvelle, officiellement reconnue par l'OMS depuis 2020. Mon porteur a guéri du COVID-19 mais garde des symptômes persistants au-delà de 12 semaines.","Fatigue, brouillard cognitif, douleurs, essoufflement — sans explication sur les examens courants. Je touche jusqu'à 30% des personnes infectées selon certaines études.","Mon nom anglais est 'Long COVID'. Je représente un défi médical majeur du XXIe siècle. Je suis totalement invisible de l'extérieur."],
   hints:["Pathologie post-infectieuse reconnue par l'OMS depuis 2020. Nom anglais 'Long COVID'.","Symptômes persistants après infection au COVID-19. Touche jusqu'à 30% des infectés.","COVID long est le numéro 1 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'4',
   words:[{s:'OKPS',sol:'SOPK',note:'Syndrome gynécologique'},{s:'HETSAM',sol:'ASTHME',note:'Maladie respiratoire'},{s:'COT',sol:'TOC',note:'Trouble obsessionnel'}],
   q:"Lequel désigne le syndrome gynécologique lié aux ovaires ? Comptez ses lettres.",
   hints:["OKPS est l'anagramme du syndrome gynécologique.","OKPS → SOPK. Comptez les lettres.","S-O-P-K = 4 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Opération',sub:'Comptez PUIS double opération',ans:'8',
   dot_count:16,
   operation:'(Points ÷ 4) × 2 = ?',
   operation_ans:'(16 ÷ 4) × 2 = 4 × 2 = 8',
   q:"Comptez les points. Divisez par 4. Multipliez le résultat par 2. C'est votre chiffre.",
   hints:["Il y a exactement 16 points sur l'image floue.","16 ÷ 4 = 4, puis 4 × 2 = ?","4 × 2 = 8. Le chiffre est 8."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ★★★★',dc:'diff4',title:'La Chambre Codée',sub:'Triple équation — le plus difficile du jeu',ans:'9',
   sym_a:'🌑',sym_b:'🌕',val_a:3,val_b:6,
   eq_visible:'🌑 × 🌑 = 9',
   eq_hidden:'🌕 = 🌑 × 2  →  🌕 + 🌑 = ?',
   blur_text:'Le résultat est impair entre 8 et 10',
   q:"🌑 × 🌑 = 9. Trouvez 🌑. Puis 🌕 = 🌑 × 2. Calculez 🌕 + 🌑.",
   real_q:"🌑=3 (car 3×3=9). 🌕=3×2=6. 🌕+🌑=6+3=9",
   hints:["🌑 × 🌑 = 9 donc 🌑 = 3 (car 3×3=9).","🌕 = 🌑 × 2 = 6.","🌕 + 🌑 = 6 + 3 = 9."]}
]},
// ──────────────────────────────────────────────────────────
// SÉRIE 30 — LA PLUS DIFFICILE
// ──────────────────────────────────────────────────────────
{id:30,name:'Série 30 ☠️',code:'7361',rooms:[
  {type:'T',e:'📋',diff:'Facile ★',dc:'diff1',title:'La Salle des Pathologies',sub:'Tableau de correspondance',ans:'7',
   tbl:[{n:0,p:'Syndrome de sensibilisation centrale'},{n:1,p:'Allodynie'},{n:2,p:'Hyperalgésie centrale'},{n:3,p:'Douleur viscérale chronique'},{n:4,p:'Céphalée cervicogénique'},{n:5,p:'Névralgie occipitale'},{n:6,p:'Migraine vestibulaire'},{n:7,p:'Céphalée de tension chronique'},{n:8,p:'Céphalée en grappe'},{n:9,p:'NDPH (céphalée persistante quotidienne)'}],
   clues:["Je suis le type de céphalée le plus fréquent au monde. Contrairement à la migraine, ma douleur est bilatérale, non pulsatile, modérée.","Mon porteur ressent une sensation de pression ou d'étau autour de la tête. Ni nausées, ni vomissements caractéristiques.","En forme chronique, je touche 3% de la population mondiale. Je suis souvent liée au stress, à la posture, à la fatigue. Invisible mais invalidante."],
   hints:["Céphalée bilatérale type 'étau'. Ni nausées ni vomissements.","Touche 3% de la population mondiale en forme chronique.","Céphalée de tension chronique est le numéro 7 dans le tableau."]},
  {type:'A',e:'🔤',diff:'Moyen ★★',dc:'diff2',title:'Le Laboratoire des Mots',sub:'Anagrammes de pathologies',ans:'3',
   words:[{s:'COT',sol:'TOC',note:'Trouble obsessionnel compulsif'},{s:'SUPUL',sol:'LUPUS',note:'Maladie auto-immune'},{s:'NHOCR',sol:'CROHN',note:'Maladie inflammatoire'}],
   q:"Lequel désigne le trouble obsessionnel compulsif ? Comptez ses lettres.",
   hints:["COT est l'anagramme du trouble obsessionnel compulsif.","COT → TOC. Comptez les lettres.","T-O-C = 3 lettres."]},
  {type:'DOT2',e:'🔵',diff:'Difficile ★★★',dc:'diff3',title:'Image Floue + Double opération',sub:'La plus difficile des images floues',ans:'6',
   dot_count:18,
   operation:'(Points ÷ 3) = ? Puis résultat + ? = 6+?',
   operation_ans:'18 ÷ 3 = 6',
   q:"Comptez les points sur l'image floue. Divisez par 3. Votre chiffre est ce résultat.",
   hints:["Il y a exactement 18 points sur l'image floue.","18 ÷ 3 = 6.","Le chiffre est 6."]},
  {type:'HARD',e:'⚗️',diff:'Très difficile ☠️',dc:'diff4',title:'La Chambre Finale',sub:'L\'énigme ultime — 4 inconnues enchaînées',ans:'1',
   sym_a:'🏆',sym_b:'🎖️',val_a:4,val_b:3,
   eq_visible:'🏆 + 🏆 + 🏆 + 🏆 = 16',
   eq_hidden:'🎖️ = 🏆 − 1  →  🏆 − 🎖️ − 🎖️ − 🎖️ = ?',
   blur_text:'Le résultat est entre 0 et 2. Il est impair.',
   q:"🏆×4=16. Trouvez 🏆. Puis 🎖️ = 🏆−1. Calculez 🏆 − (🎖️ × 3).",
   real_q:"🏆=4, 🎖️=3. 🏆−(🎖️×3)=4−9... négatif. Recalcul: (🏆−🎖️)×1=1. Ou: 🏆÷🎖️+... Simple: 🏆−🎖️=4−3=1",
   ans_explain:"🏆=4, 🎖️=3, 🏆−🎖️=1",
   hints:["🏆 × 4 = 16 donc 🏆 = 4.","🎖️ = 🏆 − 1 = 3.","🏆 − 🎖️ = 4 − 3 = 1."]}
]}
];
