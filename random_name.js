const crypto = require("crypto");
const n = crypto.randomInt(0, 1000000);
//console.log(n);

const adjectives = ["aback",
"abaft",
"abashed",
"abiding",
"abject",
"ablaze",
"able",
"abrupt",
"absent",
"absurd",
"abusive",
"acid",
"acidic",
"acrid",
"adamant",
"afraid",
"ahead",
"ajar",
"alert",
"alike",
"alive",
"alleged",
"aloof",
"amazing",
"amuck",
"amused",
"amusing",
"ancient",
"angry",
"annoyed",
"anxious",
"aquatic",
"ashamed",
"average",
"aware",
"awesome",
"bad",
"bashful",
"bawdy",
"bent",
"berserk",
"big",
"billowy",
"bitter",
"bizarre",
"black",
"bloody",
"blue",
"boiling",
"boorish",
"bored",
"boring",
"bouncy",
"brainy",
"brash",
"brave",
"brawny",
"breezy",
"brief",
"bright",
"broad",
"broken",
"brown",
"bumpy",
"burly",
"busy",
"cagey",
"callous",
"calm",
"capable",
"careful",
"caring",
"certain",
"cheap",
"chief",
"chilly",
"chubby",
"chunky",
"clammy",
"classy",
"clean",
"clear",
"clever",
"cloudy",
"closed",
"clumsy",
"cold",
"common",
"complex",
"cooing",
"cool",
"crabby",
"craven",
"crazy",
"creepy",
"crooked",
"crowded",
"cruel",
"cuddly",
"curious",
"curly",
"curved",
"curvy",
"cut",
"cute",
"cynical",
"daffy",
"daily",
"damaged",
"damp",
"dapper",
"dark",
"dashing",
"dead",
"deadpan",
"dear",
"deep",
"deeply",
"defiant",
"demonic",
"direful",
"dirty",
"dizzy",
"drab",
"dreary",
"drunk",
"dry",
"dull",
"dusty",
"dynamic",
"eager",
"early",
"earthy",
"easy",
"eatable",
"elastic",
"elated",
"elderly",
"elegant",
"elfin",
"elite",
"eminent",
"empty",
"envious",
"equable",
"equal",
"erect",
"erratic",
"evasive",
"even",
"excited",
"exotic",
"faded",
"faint",
"fair",
"false",
"famous",
"fancy",
"far",
"fast",
"fat",
"faulty",
"fearful",
"feeble",
"feigned",
"female",
"fertile",
"festive",
"few",
"fierce",
"filthy",
"fine",
"finicky",
"first",
"fixed",
"flaky",
"flashy",
"flat",
"flimsy",
"flowery",
"fluffy",
"foamy",
"foolish",
"frail",
"fragile",
"frantic",
"free",
"fresh",
"fretful",
"full",
"funny",
"furry",
"furtive",
"future",
"fuzzy",
"gabby",
"gainful",
"gamy",
"gaping",
"gaudy",
"general",
"gentle",
"giant",
"giddy",
"gifted",
"glib",
"glossy",
"godly",
"good",
"goofy",
"gratis",
"gray",
"greasy",
"great",
"greedy",
"green",
"grey",
"groovy",
"grouchy",
"grubby",
"grumpy",
"guarded",
"gusty",
"half",
"halting",
"handy",
"hanging",
"hapless",
"happy",
"hard",
"harsh",
"hateful",
"heady",
"healthy",
"heavy",
"hellish",
"helpful",
"hideous",
"high",
"hissing",
"hollow",
"homely",
"hot",
"huge",
"hulking",
"humdrum",
"hungry",
"hurried",
"hurt",
"hushed",
"husky",
"icky",
"icy",
"idiotic",
"ill",
"illegal",
"immense",
"innate",
"irate",
"itchy",
"jaded",
"jagged",
"jazzy",
"jealous",
"jittery",
"jobless",
"jolly",
"joyous",
"juicy",
"jumbled",
"jumpy",
"keen",
"kind",
"kindly",
"knotty",
"knowing",
"known",
"labored",
"lacking",
"lame",
"languid",
"large",
"last",
"late",
"lavish",
"lazy",
"lean",
"learned",
"left",
"legal",
"lethal",
"level",
"lewd",
"light",
"like",
"limping",
"little",
"lively",
"living",
"lonely",
"long",
"longing",
"loose",
"loud",
"loutish",
"lovely",
"loving",
"low",
"lowly",
"lucky",
"lumpy",
"lush",
"lying",
"lyrical",
"macabre",
"macho",
"madly",
"magenta",
"magical",
"male",
"mammoth",
"many",
"marked",
"massive",
"married",
"mature",
"mean",
"measly",
"meaty",
"medical",
"meek",
"mellow",
"melodic",
"melted",
"mere",
"messy",
"mighty",
"milky",
"minor",
"misty",
"mixed",
"moaning",
"modern",
"moldy",
"muddled",
"mundane",
"murky",
"mushy",
"mute",
"naive",
"nappy",
"narrow",
"nasty",
"natural",
"naughty",
"near",
"neat",
"needy",
"nervous",
"new",
"next",
"nice",
"nifty",
"nimble",
"nippy",
"noisy",
"nonstop",
"normal",
"nosy",
"noxious",
"nutty",
"oafish",
"obese",
"obscene",
"oceanic",
"odd",
"offbeat",
"old",
"onerous",
"open",
"optimal",
"orange",
"organic",
"oval",
"overt",
"painful",
"pale",
"paltry",
"panicky",
"parched",
"past",
"perfect",
"petite",
"phobic",
"pink",
"piquant",
"placid",
"plain",
"plant",
"plastic",
"plucky",
"poised",
"polite",
"poor",
"premium",
"present",
"pretty",
"pricey",
"prickly",
"private",
"profuse",
"proud",
"public",
"puffy",
"pumped",
"puny",
"purple",
"purring",
"pushy",
"puzzled",
"quaint",
"quick",
"quiet",
"quirky",
"rabid",
"racial",
"ragged",
"rainy",
"rampant",
"rapid",
"rare",
"raspy",
"ratty",
"ready",
"real",
"rebel",
"red",
"regular",
"rich",
"right",
"rigid",
"ripe",
"ritzy",
"roasted",
"robust",
"roomy",
"rotten",
"rough",
"round",
"royal",
"ruddy",
"rude",
"rural",
"rustic",
"sable",
"sad",
"safe",
"salty",
"same",
"sassy",
"savory",
"scarce",
"scared",
"scary",
"scrawny",
"second",
"secret",
"sedate",
"seemly",
"selfish",
"serious",
"shaggy",
"shaky",
"shallow",
"sharp",
"shiny",
"short",
"shrill",
"shut",
"shy",
"sick",
"silent",
"silky",
"silly",
"simple",
"sincere",
"skinny",
"sleepy",
"slim",
"slimy",
"sloppy",
"slow",
"small",
"smart",
"smelly",
"smiling",
"smoggy",
"smooth",
"sneaky",
"snotty",
"soft",
"soggy",
"solid",
"somber",
"sordid",
"sore",
"sour",
"special",
"spicy",
"spiffy",
"spiky",
"spooky",
"spotted",
"spotty",
"squalid",
"square",
"staking",
"stale",
"steady",
"steep",
"sticky",
"stiff",
"stingy",
"stormy",
"strange",
"striped",
"strong",
"sturdy",
"subdued",
"sudden",
"sulky",
"super",
"superb",
"supreme",
"swanky",
"sweet",
"swift",
"taboo",
"tacit",
"tacky",
"tall",
"tame",
"tan",
"tangy",
"tart",
"tasty",
"tawdry",
"tearful",
"tedious",
"teeny",
"telling",
"ten",
"tender",
"tense",
"tenuous",
"tested",
"testy",
"thick",
"thin",
"third",
"thirsty",
"tidy",
"tight",
"tiny",
"tired",
"torpid",
"tough",
"trashy",
"tricky",
"trite",
"true",
"typical",
"ultra",
"unable",
"unarmed",
"unequal",
"uneven",
"unique",
"unkempt",
"unknown",
"unruly",
"untidy",
"unused",
"unusual",
"upbeat",
"uppity",
"upset",
"uptight",
"used",
"useful",
"useless",
"utopian",
"vacuous",
"vague",
"various",
"vast",
"verdant",
"versed",
"violent",
"violet",
"vulgar",
"wacky",
"waggish",
"waiting",
"wakeful",
"wanting",
"warlike",
"warm",
"wary",
"watery",
"weak",
"wealthy",
"weary",
"wet",
"white",
"whole",
"wicked",
"wide",
"wiggly",
"wild",
"willing",
"windy",
"wiry",
"wise",
"wistful",
"witty",
"womanly",
"wooden",
"woozy",
"worried",
"wrong",
"wry",
"yellow",
"young",
"yummy",
"zany",
"zealous",
"zesty",
"zippy",
"zonked"];

const animals = ["Monkey",
"Gorilla",
"Orangutan",
"Dog",
"Wolf",
"Fox",
"Raccoon",
"Cat",
"Lion",
"Tiger",
"Leopard",
"Horse",
"Unicorn",
"Zebra",
"Deer",
"Bison",
"Cow",
"Pig",
"Sheep",
"Camel",
"Llama",
"Giraffe",
"Elephant",
"Mammoth",
"Rhino",
"Hippo",
"Mouse",
"Rat",
"Hamster",
"Rabbit",
"Chipmunk",
"Beaver",
"Hedgehog",
"Bat",
"Bear",
"Koala",
"Panda",
"Sloth",
"Otter",
"Skunk",
"Kangaroo",
"Badger",
"Turkey",
"Chicken",
"Rooster",
"Chick",
"Bird",
"Penguin",
"Dove",
"Eagle",
"Duck",
"Swan",
"Owl",
"Dodo",
"Flamingo",
"Peacock",
"Parrot",
"Frog",
"Turtle",
"Lizard",
"Snake",
"Dragon",
"Sauropod",
"T-Rex",
"Whale",
"Dolphin",
"Seal",
"Fish",
"Shark",
"Octopus",
"Snail",
"Bug",
"Ant",
"Honeybee",
"Beetle",
"LadyBug",
"Cricket",
"Spider",
"Scorpion",
"Fly",
"Worm",
"Microbe",
"Crab",
"Lobster",
"Shrimp",
"Squid"];

var nameAdjective = adjectives[n%adjectives.length];
var nameAnimal = animals[n%animals.length];
var nameNumber = n%99;

//console.log(nameAdjective.charAt(0).toUpperCase() + nameAdjective.slice(1));
//console.log(nameAnimal.charAt(0).toUpperCase() + nameAnimal.slice(1));
//console.log(nameNumber);

console.log((nameAdjective.charAt(0).toUpperCase() + nameAdjective.slice(1)) + (nameAnimal.charAt(0).toUpperCase() + nameAnimal.slice(1))+(nameNumber))