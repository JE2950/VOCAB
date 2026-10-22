/* Shared word bank, mastery tracking and question makers.
   Used by index.html (2D game) and tower3d.html (3D tower). */
/* ================= WORD BANK =================
   word | form used in sentences | part of speech | definition | sentence | confusable group
   Groups stop near-synonyms appearing as wrong answers for each other. */
const RAW = `#spell
accommodate||v|to provide a room or space for someone|The new hotel can ___ up to forty guests.|
accompany||v|to go somewhere with someone|Will you ___ me to the village market?|
according||adv|as stated or reported by (according to)|The treasure is buried under the oak tree, ___ to the map.|
achieve||v|to succeed in doing something after a lot of effort|If you practise every day, you will ___ your goal.|
aggressive||a|ready to attack or fight; hostile|The ___ wolf snarled and lunged at the shepherd.|
amateur||n|someone who does an activity for fun, not as a paid job|She is not paid for her paintings because she is only a keen ___.|
ancient||a|very old; from long ago|The ___ castle had stood on the hill for a thousand years.|
apparent||a|clearly seen or understood; obvious|From her muddy boots, it was ___ that she had been in the forest.|
appreciate||v|to be thankful for; to value something|I really ___ all the help you gave me with my homework.|
attached||a|joined or fastened to something; very fond of|A label was ___ to the parcel with string.|
available||a|free or ready to be used or bought|Are there any seats ___ on the next train?|
average||a|ordinary or typical; usual|On a normal, ___ day, the baker sells two hundred loaves.|
awkward||a|clumsy; difficult or embarrassing|There was a long, ___ silence after he forgot her name.|
bargain||n|something bought for less than it is worth; a good deal|At only fifty pence, the old book was a real ___.|
bruise||n|a dark mark on the skin caused by a knock|After falling off her pony, she had a purple ___ on her knee.|
category||n|a group of things that are alike in some way|Apples and pears belong in the fruit ___.|
cemetery||n|a place where dead people are buried|Ivy covered the old gravestones in the village ___.|
committee||n|a group of people chosen to make decisions|The ___ voted to hold the summer fair in June.|
communicate||v|to share information or ideas with others|Dolphins ___ with each other using clicks and whistles.|
community||n|a group of people who live in the same place|The whole village ___ came together to rebuild the bridge.|
competition||n|a contest to find the best or the winner|She won first prize in the baking ___.|
conscience||n|the voice inside you that tells you right from wrong|His ___ told him he should own up to breaking the vase.|
conscious||a|awake and aware of what is around you|After fainting, the knight was ___ again within a minute.|
controversy||n|strong public disagreement about something|The plan to close the library caused great ___ in the town.|
convenience||n|something that makes life easier; ease|For extra ___, the shop is right next to the station.|
correspond||v|to write letters to each other; to match|The two pen pals ___ by letter every month.|
criticise||v|to point out faults in someone or something|It is unkind to ___ someone's drawing without saying something nice too.|
curiosity||n|a strong wish to know or learn something|Filled with ___, Alice peered through the tiny door.|
definite||a|certain; clear and fixed|We need a ___ answer by Friday, not a "maybe".|
desperate||a|having lost almost all hope; in great need|Lost in the desert, the travellers were ___ for water.|dd
determined||a|having made a firm decision and refusing to give up|Nothing would stop her: she was ___ to reach the top of the mountain.|dd
develop||v|to grow or change over time|Tadpoles slowly ___ into frogs.|
dictionary||n|a book that lists words in alphabetical order and gives their meanings|Look up the meaning of the word in a ___.|
disastrous||a|causing great damage or total failure|The flood was ___ for the farmers, who lost all their crops.|
embarrass||v|to make someone feel awkward or ashamed|Please don't ___ me by singing loudly in front of my friends.|
environment||n|the natural world; your surroundings|Dropping litter harms the ___.|
equipment||n|the tools or things needed for an activity|The climbers checked their ropes and other ___ before setting off.|
especially||adv|more than usual; particularly|I love all fruit, but ___ strawberries.|
exaggerate||v|to make something sound bigger or better than it really is|Don't ___! You did not catch a fish as big as a whale.|
excellent||a|extremely good|Your story was ___, so I gave it full marks.|good
existence||n|the state of being real or alive|Scientists doubt the ___ of the Loch Ness Monster.|
explanation||n|something said or written that makes something clear|The teacher gave a clear ___ of how volcanoes erupt.|
familiar||a|well known; easily recognised|The song sounded ___, as if she had heard it before.|
foreign||a|from or belonging to another country|He enjoys learning ___ languages such as French and Spanish.|
forty||num|the number 40 (four tens)|There are ___ thieves in the old tale of Ali Baba.|
frequently||adv|often; many times|My grandparents visit ___, about three times a week.|
government||n|the group of people who run a country|The ___ has announced a new law about school holidays.|
guarantee||n|a promise that something will happen or will work|The toaster comes with a two-year ___.|
harass||v|to keep pestering or bothering someone|Seagulls ___ people on the beach for their chips.|
hindrance||n|something that gets in the way and makes things harder|Her heavy rucksack was a ___ as she climbed the steep path.|
identity||n|who or what someone is|The masked knight refused to reveal his true ___.|
immediately||adv|at once; without delay|When the fire alarm rings, leave the building ___.|
individual||n|a single, separate person|Each ___ in the class will get their own certificate.|
interfere||v|to get involved in something that is not your business|Please don't ___ while I'm mending the clock.|ii
interrupt||v|to stop someone while they are speaking or doing something|It is rude to ___ someone while they are talking.|ii
language||n|the words people use to speak and write to each other|Welsh is the ___ spoken in many parts of Wales.|
leisure||n|free time for relaxing and enjoying yourself|In her ___ time, she likes to read and ride her bike.|
lightning||n|a flash of light in the sky during a storm|A bolt of ___ struck the old oak tree.|
marvellous||a|wonderful; amazing|We had a ___ time at the seaside.|good
mischievous||a|playfully naughty|The ___ kitten unrolled all the toilet paper.|
muscle||n|a part of the body that tightens and relaxes to make you move|He pulled a ___ in his leg while sprinting.|
necessary||a|needed; essential|Water is ___ for all living things.|
neighbour||n|someone who lives next door or nearby|Our ___ fed the cat while we were on holiday.|
nuisance||n|an annoying person or thing; an annoyance|The buzzing fly was a real ___.|
occupy||v|to fill or take up a space or time; to live in|Jigsaw puzzles ___ my little brother for hours.|
occur||v|to happen|Earthquakes ___ when parts of the Earth's crust move.|
opportunity||n|a chance to do something|The school trip was a great ___ to see the Roman ruins.|
parliament||n|the group of people elected to make a country's laws|Members of ___ debate new laws in Westminster.|
persuade||v|to make someone agree by giving good reasons|She tried to ___ her dad to let her have a puppy.|
physical||a|to do with the body|Rugby is a very ___ sport.|
prejudice||n|an unfair opinion formed without knowing the facts|Judging someone by their accent is a form of ___.|
privilege||n|a special right or advantage|It was a ___ to meet the famous author.|
profession||n|a job that needs special training or study|Teaching is a rewarding ___.|
programme||n|a show on TV or radio; a plan of events|My favourite nature ___ is on at six o'clock.|
pronunciation||n|the way a word is said|The ___ of "colonel" surprises many people.|
queue||n|a line of people waiting their turn|We waited in a long ___ for the roller coaster.|
recognise||v|to know someone or something because you have seen it before|I didn't ___ you with your new haircut!|
recommend||v|to say that something is good and worth trying|I ___ the chocolate cake because it's delicious.|rs
relevant||a|connected to what is being talked about|Only include facts that are ___ to the question.|
restaurant||n|a place where you pay to sit and eat a meal|We booked a table at an Italian ___ for Mum's birthday.|
rhyme||n|a word that ends with the same sound as another|"Cat" is a ___ for "hat".|
rhythm||n|a regular, repeated pattern of beats or sounds|We clapped along to the ___ of the drum.|
sacrifice||n|giving up something you value for something more important|She made a ___ by giving all her pocket money to charity.|
secretary||n|a person who deals with letters, records and appointments|The school ___ answered the phone and booked the meeting.|
shoulder||n|the joint between your arm and your neck|The parrot sat on the pirate's ___.|
signature||n|your name written in your own special way|Please add your ___ at the bottom of the letter.|
sincerely||adv|honestly; truly meaning it|"I am ___ sorry," he said, and he really meant it.|
soldier||n|a person who serves in an army|The ___ marched proudly past the palace.|
stomach||n|the organ in your body where food is broken down|My ___ rumbled because I had skipped breakfast.|
sufficient||a|enough|Is there ___ food for everyone at the party?|
suggest||v|to put forward an idea for others to think about|Can I ___ that we play outside instead?|rs
symbol||n|a sign or picture that stands for something|The dove is a ___ of peace.|
system||n|a set of parts or steps that work together|The library uses a clever ___ to sort its books by subject.|
temperature||n|how hot or cold something is|The ___ dropped below freezing last night.|
thorough||a|careful and complete, missing nothing out|The detective made a ___ search of the room.|
twelfth||num|number 12 in a series|December is the ___ month of the year.|
variety||n|a range of different things|The sweet shop sells a huge ___ of sweets.|
vegetable||n|a plant, or part of a plant, eaten as food|A carrot is a root ___.|
vehicle||n|something used to carry people or goods, such as a car or lorry|A tractor is a farm ___.|
yacht||n|a sailing boat used for racing or holidays|The ___ glided across the bay with its white sails billowing.|
#story
companion||n|someone you do something with|Her dog was her faithful ___ on long walks.|
nemesis||n|your greatest enemy|The wicked witch was the princess's ___.|
workforce||n|all the people who are doing the work|The toy factory has a ___ of three hundred elves.|
fictional||a|made up; not real|Cinderella is a ___ character.|
fable||n|a short story that teaches a lesson, often with animals|"The Tortoise and the Hare" is a ___ about patience.|
pint||n|a measurement of liquid|The milkman left a ___ of milk on the doorstep.|
initial||a|happening at the beginning|My ___ plan was to walk, but then it started to rain.|first
quarrel||n|an angry argument or disagreement|The twins had a ___ over who would get the last biscuit.|
lumber||v|to move slowly and awkwardly (as a noun: chopped wood)|The giant began to ___ through the forest, shaking the trees.|
inferno||n|a large fire that is dangerously out of control|The dragon's breath turned the barn into a blazing ___.|
bewildered||a|completely puzzled or confused|Lost in the maze, the prince felt completely ___.|
inaugural||a|the first in a series; marking a beginning|The ___ village fete was such a success that it became a yearly event.|first
misgivings||n|feelings of doubt; reservations|She had ___ about crossing the rickety rope bridge.|
credible||a|believable|His excuse that a dragon ate his homework was not ___.|
equitable||a|fair and just|The pirates wanted every crew member to get a fair, ___ share of the gold.|
absurd||a|silly; making no sense|The idea of a fish riding a bicycle is completely ___.|silly
preposterous||a|ridiculous; completely unreasonable|Claiming that the moon is made of cheese is ___!|silly
rough||a|not smooth|The bark of the oak tree felt ___ under her fingers.|
corrosive||a|able to eat or burn through things, like an acid|The witch's ___ potion burned a hole straight through the cauldron.|
eruptive||a|likely to erupt or burst out|The ___ volcano spews out lava every few years.|boom
volatile||a|highly unstable; likely to explode|The chemist handled the ___ liquid carefully in case it exploded.|boom
harbour (noun)|harbour|n|a place where boats dock|The fishing boats sailed back into the ___ at sunset.|harbour
harbour (verb)|harbour|v|to give someone shelter (you might harbour a criminal!)|It is against the law to ___ a criminal.|harbour
house (noun)|house|n|a building you might live in|The family lived in a small ___ beside the river.|house
house (verb)|house|v|to give something a home (you might house a stray cat)|The new museum will ___ the ancient treasures.|house
accommodation||n|a place where someone can stay or live|The inn offered ___ for travellers on their way to the city.|
inconspicuous||a|not easily seen; not noticeable|The spy wore grey to stay ___ in the crowd.|
solemn||a|serious; grave|The funeral was a quiet and ___ occasion.|
unorthodox||a|breaking with what is normal or traditional|Her ___ way of teaching, with lessons held up in the treetops, broke every rule.|odd
radical||a|extreme; very different from what came before|The king made ___ changes, knocking down the whole castle to start again.|odd
eccentric||a|unusual and slightly strange|The ___ old wizard wore odd socks and kept an owl in his hat.|odd
conformist||n|someone who behaves the same way as everyone else|A true ___, he always wore exactly what his friends wore.|
consecutive||a|one after another, without a break|It rained for five ___ days.|
inert||a|not moving; lifeless|The dragon lay ___ on the cave floor, as still as stone.|still
immobile||a|unable to move; not moving|With his leg in plaster, he was ___ for weeks.|still
unresponsive||a|not reacting or answering|The robot was ___: however many buttons we pressed, it did nothing.|still
dominion||n|land ruled by a king or queen, often won in war|The emperor ruled over a vast ___.|land
territory||n|an area of land that belongs to someone|The fox marked its ___ to warn other foxes away.|land
itinerant||a|travelling from place to place|The ___ minstrel wandered from village to village, singing for his supper.|
wail||v|to cry out loudly|The baby began to ___ when her rattle fell on the floor.|
whirl||v|to turn or spin around very quickly|Autumn leaves ___ in the wind.|
cyclone||n|a violent storm with heavy rain and winds that spin in a circle|The ___ tore the roofs off houses along the coast.|
certainly||adv|without any doubt; surely|"Will you help me?" asked the princess. "___!" said the fox.|
lulled||v|calmed or soothed by a gentle sound or movement|The gentle rocking of the boat ___ the baby to sleep.|
eerie||a|strange and frightening|A strange, ___ howl echoed through the dark forest.|
gumption||n|courage and initiative; common sense|It took real ___ to stand up to the bully.|
noun||g|a person, place, thing or idea|In "The knight rode home", the word "knight" is a(n) ___.|
verb||g|an action or doing word|In "The dragon roared", the word "roared" is a(n) ___.|
adjective||g|a word that describes a noun|In "the shiny sword", the word "shiny" is a(n) ___.|
adverb||g|a word that describes a verb (often ends in -ly)|In "She ran quickly", the word "quickly" is a(n) ___.|
pronoun||g|a word that takes the place of a noun (he, she, I, you, they)|In "They found the key", the word "They" is a(n) ___.|
simile||g|a comparison using "like" or "as"|"As brave as a lion" is a(n) ___.|
dialogue||g|conversation between characters|The words characters say to each other, written in speech marks, are called ___.|`;

const WORDS = [];
(() => { let set = 'spell';
  for (const line of RAW.split('\n')) {
    if (!line.trim()) continue;
    if (line[0] === '#') { set = line.slice(1).trim(); continue; }
    const [word, form, pos, def, sent, group] = line.split('|');
    WORDS.push({ word, form: form || word, pos, def, sent, group: group || '', set });
  }
})();
const BY = Object.fromEntries(WORDS.map(w => [w.word, w]));

/* Opposites: ISEB "most nearly opposite in meaning" */
const OPP = [
  ['ancient','modern',['old','ruined','rough']],
  ['familiar','unknown',['well-known','friendly','similar']],
  ['rough','smooth',['bumpy','coarse','hard']],
  ['credible','unbelievable',['believable','honest','serious']],
  ['inconspicuous','noticeable',['hidden','quiet','small']],
  ['sufficient','not enough',['plenty','exactly right','enough']],
  ['conformist','rebel',['follower','copycat','member']],
  ['solemn','cheerful',['serious','grave','sad']],
  ['equitable','unfair',['fair','equal','generous']],
  ['initial','final',['first','early','opening']],
  ['bewildered','clear-headed',['confused','puzzled','lost']],
  ['aggressive','gentle',['fierce','hostile','angry']],
  ['definite','uncertain',['sure','fixed','clear']],
  ['frequently','rarely',['often','regularly','usually']],
  ['awkward','graceful',['clumsy','embarrassing','difficult']],
  ['excellent','dreadful',['superb','brilliant','fine']],
  ['volatile','stable',['explosive','unstable','dangerous']],
  ['amateur','professional',['beginner','hobbyist','learner']],
  ['necessary','optional',['essential','vital','needed']],
  ['inert','lively',['still','motionless','frozen']],
  ['absurd','sensible',['silly','ridiculous','foolish']],
  ['immediately','later',['at once','now','instantly']],
  ['companion','enemy',['friend','partner','ally']],
  ['itinerant','settled',['wandering','roving','travelling']],
  ['eccentric','ordinary',['odd','quirky','unusual']],
  ['conscious','unaware',['awake','alert','aware']],
  ['foreign','native',['overseas','alien','distant']],
  ['apparent','hidden',['obvious','clear','plain']],
  ['thorough','careless',['careful','complete','detailed']],
  ['marvellous','terrible',['wonderful','amazing','splendid']],
];
/* Odd one out: [key word, odd answer, the three that belong] */
const ODD = [
  ['preposterous','credible',['absurd','preposterous','ridiculous']],
  ['inert','itinerant',['inert','immobile','motionless']],
  ['solemn','mischievous',['solemn','serious','grave']],
  ['quarrel','companion',['quarrel','argument','disagreement']],
  ['whirl','lumber',['whirl','spin','twirl']],
  ['cyclone','yacht',['cyclone','hurricane','tornado']],
  ['bewildered','determined',['bewildered','puzzled','confused']],
  ['simile','simile',['noun','verb','adverb']],
  ['frequently','immediately',['frequently','often','regularly']],
  ['eccentric','conformist',['eccentric','unorthodox','unconventional']],
  ['equitable','aggressive',['equitable','fair','just']],
  ['misgivings','guarantee',['misgivings','doubts','reservations']],
  ['inconspicuous','apparent',['inconspicuous','hidden','unnoticeable']],
  ['companion','nemesis',['companion','friend','partner']],
  ['marvellous','disastrous',['marvellous','excellent','wonderful']],
  ['harass','appreciate',['harass','pester','annoy']],
  ['occur','occupy',['occur','happen','take place']],
  ['sufficient','scarce',['sufficient','enough','adequate']],
  ['wail','whisper',['wail','howl','shriek']],
  ['inferno','puddle',['inferno','blaze','bonfire']],
  ['dominion','vehicle',['dominion','territory','kingdom']],
  ['fictional','genuine',['fictional','made-up','imaginary']],
];
/* Word use: one correct sentence and three that do not fit */
const USE = [
  ['harbour (verb)','In which sentence is "harbour" used as a verb (a doing word)?','The kind farmer agreed to harbour the runaway prince.',['The ships rocked gently in the harbour.','We walked along the harbour wall.','The harbour was full of fishing boats.']],
  ['house (verb)','In which sentence is "house" used as a verb (a doing word)?','The old barn will house the rescued ponies.',['Their house had a red front door.','The house on the hill was empty.','We painted the house blue.']],
  ['lumber','In which sentence does "lumber" mean chopped wood?','The woodcutter stacked the lumber beside his cottage.',['The bear began to lumber towards the river.','Elephants lumber slowly across the plain.','Watch the giant lumber down the lane.']],
  ['lumber','In which sentence does "lumber" mean to move slowly and awkwardly?','The tired troll began to lumber back to his cave.',['The cart was piled high with lumber.','They built the raft from lumber.','The lumber was stacked by the barn.']],
  ['consecutive','Which sentence uses "consecutive" correctly?','She won the race for three consecutive years.',['The consecutive cat purred on the mat.','He consecutive ran to the shop.','We ate a consecutive sandwich for lunch.']],
  ['volatile','Which sentence uses "volatile" correctly?','The volatile mixture fizzed and then exploded.',['The volatile kitten slept peacefully all day.','She gave me a volatile hug.','The pond was calm and volatile.']],
  ['nemesis','Which sentence uses "nemesis" correctly?','The hero finally faced his nemesis in the dark castle.',['She shared her sandwich with her nemesis and best friend.','My nemesis is a type of sandwich.','He wore his nemesis to the party.']],
  ['lulled','Which sentence uses "lulled" correctly?','The soft music lulled the baby to sleep.',['The loud alarm lulled everyone awake.','He lulled the ball across the field.','The thunder lulled the house with a crash.']],
  ['itinerant','Which sentence uses "itinerant" correctly?','The itinerant pedlar never stayed in one town for long.',['The itinerant oak tree had stood there for centuries.','She stayed itinerant at home all week.','The itinerant rock never moved.']],
  ['gumption','Which sentence uses "gumption" correctly?','It took gumption to climb the tower alone.',['She chewed a piece of gumption.','The gumption fell off the shelf.','He poured gumption into the teapot.']],
  ['inaugural','Which sentence uses "inaugural" correctly?','The inaugural meeting of the chess club was held on Monday.',['This is the inaugural time I have told you to stop!','The inaugural cake was eaten last.','He arrived inaugural after everyone else.']],
  ['accompany','Which sentence uses "accompany" correctly?','The fox will accompany the princess on her journey.',['The princess accompanied the castle alone.','We accompany the sandwich for lunch.','He accompanied his homework into the bin.']],
  ['conscience','Which sentence uses "conscience" (not "conscious") correctly?','A guilty conscience kept him awake all night.',['After the fall, he was not conscience.','She was conscience of someone behind her.','Be conscience of the step.']],
  ['according','Which sentence uses "according" correctly?','According to the weather forecast, it will snow tomorrow.',['She according the piano beautifully.','The according was too loud.','He ran according the field.']],
];
/* Grammar: which word in the sentence is a ___ */
const GRAM = [
  ['The tired knight rode slowly through the forest.','adverb','slowly',['tired','knight','rode']],
  ['The clever fox hid behind the barn.','adjective','clever',['fox','hid','behind']],
  ['She whispered the secret to the owl.','pronoun','She',['whispered','secret','owl']],
  ['The dragon roared at the frightened villagers.','verb','roared',['dragon','frightened','villagers']],
  ['Princess Ava opened the enormous chest.','noun','chest',['opened','enormous','the']],
  ['They quickly climbed the tall tower.','adverb','quickly',['They','climbed','tall']],
  ['The wise owl gave advice.','adjective','wise',['owl','gave','advice']],
  ['We found a golden key under the rug.','pronoun','We',['found','golden','under']],
  ['The giant lumbered across the bridge.','verb','lumbered',['giant','across','bridge']],
  ['Happily, the travellers reached the castle.','adverb','Happily',['travellers','reached','castle']],
  ['The curious kitten chased a butterfly.','noun','butterfly',['curious','chased','a']],
  ['The eerie wind howled loudly.','adjective','eerie',['wind','howled','loudly']],
  ['He bravely faced the witch.','adverb','bravely',['He','faced','witch']],
  ['The mischievous elves hid the boots.','verb','hid',['mischievous','elves','boots']],
];
/* Spot the feature: which of these is a simile / dialogue / fable */
const SPOT = [
  ['simile','Which of these is a simile?','Her eyes sparkled like stars.',['Her eyes were stars.','Her eyes sparkled brightly.','She had bright, sparkling eyes.']],
  ['simile','Which of these is a simile?','The giant was as tall as a tree.',['The giant was very tall.','The giant was a walking tree.','The tall giant stomped away.']],
  ['simile','Which of these is a simile?','The witch cackled like a hen.',['The witch cackled loudly.','The witch was a cackling hen.','A hen cackled near the witch.']],
  ['dialogue','Which of these is dialogue?','"Follow me," whispered the fox.',['The fox crept through the trees.','It was a dark and stormy night.','The tower was tall and grey.']],
  ['dialogue','Which of these is dialogue?','"Who goes there?" called the guard.',['The guard stood by the gate.','Somebody was coming up the path.','The guard wondered who it was.']],
  ['fable','Which of these is most likely to be a fable?','The Fox and the Grapes: a short animal tale with a lesson at the end',['A list of the kings and queens of England','A newspaper report about a football match','Instructions for building a shed']],
  ['pronoun','Which of these words is a pronoun?','they',['castle','quickly','brave']],
  ['adjective','Which of these words is an adjective?','eerie',['whirl','certainly','cyclone']],
  ['adverb','Which of these words is an adverb?','frequently',['frequent','frequency','free']],
  ['noun','Which of these words is a noun?','inferno',['inert','solemn','wail']],
  ['verb','Which of these words is a verb?','whirl',['absurd','queue','eerie']],
];

/* ================= STATE + STORAGE ================= */
const STORE = 'blocktower-v1';
let SAVE = { stats: {}, best: 0, name: '', set: 'all', sound: true, run: null };
try { const s = JSON.parse(localStorage.getItem(STORE) || 'null'); if (s) SAVE = Object.assign(SAVE, s); } catch (e) {}
function persist() { try { localStorage.setItem(STORE, JSON.stringify(SAVE)); } catch (e) {} }
function stat(k) { return SAVE.stats[k] || (SAVE.stats[k] = { r: 0, w: 0 }); }

const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const LET = 'ABCDE';

function active() { return SAVE.set === 'all' ? WORDS : WORDS.filter(w => w.set === SAVE.set); }
function inSet(word) { const w = BY[word]; return !w || SAVE.set === 'all' || w.set === SAVE.set; }

/* weighted choice: words you got wrong come back more often */
let recent = [];
function weightOf(k) { const s = SAVE.stats[k]; if (!s) return 1.4; return Math.max(0.35, 1 + s.w * 2.5 - Math.min(s.r, 5) * 0.15); }
function pickWeighted(items, keyFn) {
  let pool = items.filter(it => !recent.includes(keyFn(it)));
  if (pool.length < 3) pool = items;
  const ws = pool.map(it => weightOf(keyFn(it)));
  let t = Math.random() * ws.reduce((a, b) => a + b, 0);
  for (let i = 0; i < pool.length; i++) { t -= ws[i]; if (t <= 0) return pool[i]; }
  return pool[pool.length - 1];
}
function remember(k) { recent.push(k); if (recent.length > 14) recent.shift(); }

function poolFor(w) {
  const same = p => p === w.pos || (w.pos === 'num' && p === 'a') || (w.pos === 'adv' && p === 'adv');
  return WORDS.filter(x => x !== w && same(x.pos) && !(w.group && x.group === w.group) && x.form !== w.form);
}
function distractors(w, n, field) {
  const seen = new Set([w[field]]);
  const act = new Set(active());
  let cands = shuffle(poolFor(w)).sort((a, b) => (act.has(b) ? 1 : 0) - (act.has(a) ? 1 : 0));
  const out = [];
  for (const c of cands) { if (out.length >= n) break; if (!seen.has(c[field])) { seen.add(c[field]); out.push(c[field]); } }
  for (const c of shuffle(WORDS)) { if (out.length >= n) break; if (c !== w && !(w.group && c.group === w.group) && !seen.has(c[field])) { seen.add(c[field]); out.push(c[field]); } }
  return out;
}
function build(right, wrongs) { const opts = shuffle([right, ...wrongs]); return { options: opts, answer: opts.indexOf(right) }; }

/* ================= QUESTION MAKERS ================= */
const MAKE = {
  def(n) {
    const w = pickWeighted(active(), x => x.word);
    return Object.assign(build(w.def, distractors(w, n - 1, 'def')), {
      key: w.word, label: 'Closest meaning',
      prompt: `Which of these is closest in meaning to the word <b class="target">${esc(w.word)}</b>?`,
      explain: `<b>${esc(w.word)}</b> means ${esc(w.def)}.`, ex: w.sent.replace('___', w.form) });
  },
  word(n) {
    const w = pickWeighted(active(), x => x.word);
    return Object.assign(build(w.word, distractors(w, n - 1, 'word')), {
      key: w.word, label: 'Find the word',
      prompt: `Which word means <b class="target">${esc(w.def)}</b>?`,
      explain: `<b>${esc(w.word)}</b> means ${esc(w.def)}.`, ex: w.sent.replace('___', w.form) });
  },
  cloze(n) {
    const w = pickWeighted(active(), x => x.word);
    const s = esc(w.sent).replace('___', '<span class="blank">&nbsp;</span>');
    return Object.assign(build(w.form, distractors(w, n - 1, 'form')), {
      key: w.word, label: 'Complete the sentence',
      prompt: `Choose the word that best completes the sentence.<span class="sentence">${s}</span>`,
      explain: `<b>${esc(w.form)}</b> means ${esc(w.def)}.`, ex: w.sent.replace('___', w.form) });
  },
  opp() {
    const items = OPP.filter(o => inSet(o[0])); if (!items.length) return null;
    const o = pickWeighted(items, x => 'opp:' + x[0]);
    return Object.assign(build(o[1], o[2]), {
      key: o[0], skey: 'opp:' + o[0], label: 'Opposite',
      prompt: `Which word or phrase is most nearly <u>opposite</u> in meaning to <b class="target">${esc(o[0])}</b>?`,
      explain: `<b>${esc(o[0])}</b> means ${esc(BY[o[0]]?.def || '')}, so the opposite is <b>${esc(o[1])}</b>.` });
  },
  odd() {
    const items = ODD.filter(o => inSet(o[0])); if (!items.length) return null;
    const o = pickWeighted(items, x => 'odd:' + x[0] + x[1]);
    const why = o[0] === 'simile' ? 'Noun, verb and adverb are all word classes. A simile is a comparison.' : `<b>${esc(o[2].join(', '))}</b> all mean much the same. <b>${esc(o[1])}</b> does not.`;
    return Object.assign(build(o[1], o[2]), {
      key: BY[o[0]] ? o[0] : null, skey: 'odd:' + o[0] + o[1], label: 'Odd one out',
      prompt: `Three of these words are similar in meaning. Which is the <u>odd one out</u>?`, explain: why });
  },
  use() {
    const items = USE.filter(o => inSet(o[0])); if (!items.length) return null;
    const o = pickWeighted(items, x => 'use:' + x[2]);
    return Object.assign(build(o[2], o[3]), {
      key: o[0], skey: 'use:' + o[2], label: 'Use the word', prompt: esc(o[1]),
      explain: `<b>${esc(o[0].replace(/ \(.*\)/, ''))}</b>: ${esc(BY[o[0]]?.def || '')}.` });
  },
  gram() {
    if (SAVE.set === 'spell') return null;
    if (Math.random() < 0.45) {
      const o = pickWeighted(SPOT, x => 'spot:' + x[2]);
      return Object.assign(build(o[2], o[3]), {
        key: o[0], skey: 'spot:' + o[2], label: 'Grammar', prompt: esc(o[1]),
        explain: `A <b>${o[0]}</b> is ${esc(BY[o[0]].def)}.` });
    }
    const g = pickWeighted(GRAM, x => 'gram:' + x[0]);
    const art = /^[aeiou]/.test(g[1]) ? 'an' : 'a';
    return Object.assign(build(g[2], g[3]), {
      key: g[1], skey: 'gram:' + g[0], label: 'Grammar',
      prompt: `Which word in this sentence is ${art} <b class="target">${g[1]}</b>?<span class="sentence">${esc(g[0])}</span>`,
      explain: `<b>${esc(g[2])}</b> is ${art} ${g[1]}: ${esc(BY[g[1]].def)}.` });
  },
};
function makeQuestion(types, n) {
  for (let tries = 0; tries < 8; tries++) {
    const t = types[Math.floor(Math.random() * types.length)];
    const q = MAKE[t](n);
    if (q) { q.type = t; remember(q.skey || q.key); return q; }
  }
  const q = MAKE.def(n); q.type = 'def'; return q;
}

