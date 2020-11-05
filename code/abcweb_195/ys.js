//########################################
//# This page contains score data, timing data and the media file path. Save it as a text file in
//# the same folder as abcweb.html. Abcweb preloads score and media when it is opened with the
//# file name as parameter in the url, for example: http://your.domain.org/abcweb.html?file_name
//# Also works locally with file:///path/to/abcweb.html?file_name
//# **** You have to correct the path to the media file below! (media_file="...";) ****
//########################################
//#
media_file = "";
offset_js = 0.00;
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":0,"ctrmed":0,"ctrnot":0,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"m2uTFF_3MaA","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":false,"metro":0,"btime":-1,"etime":0,"offrol":0,"dotted":0};
lpRec = {"loopBtn":1,"loopStart":0,"loopEnd":158.70535714285703};
times_arr = [[0.00,0.54,2.68,4.82,6.96,9.11,10.71,11.25,13.39,15.54],
[15.54,17.68,19.29,19.82,21.96,24.11,26.25,27.86,28.39,30.54,32.68],
[32.68,34.82,36.96,39.11,41.25,43.39,45.54,47.68,49.82,51.96,53.57],
[53.57,54.11,56.25,58.39,60.54,62.68,64.82,66.96,69.11,71.25,73.39],
[73.39,75.54,77.68,79.82,81.96,84.11,86.25,88.39,90.00,92.14,94.29],
[94.29,96.43,98.57,100.71,102.86,105.00,107.14,107.68,109.82,111.96,114.11],
[114.11,116.25,118.39,120.54,122.68,124.82,126.96,129.11,131.25,133.39,135.54],
[135.54,137.68,139.82,141.96,144.11,146.25,148.39,150.54,152.68,154.82,156.96],
[156.96,158.71]];
abc_arr = ["X: 1",
"T: Yellow Submarine",
"C: The Beatles",
"M: 4/4",
"L: 1/8",
"Q:1/4=112",
"K:G",
"z2 |",
"z6 B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 B3/2B/2|A3/2G/2 E3-E/2E/2 B3/2B/2| A4 z2|",
"w: In the town_ where I was born  Lived a man_ who sailed the sea.",
"B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 B3/2B/2|A3/2G/2 E3-E/2E/2 B3/2B/2| A4 z2|",
"w: And he told_ us of his life  In the land_ of sub-ma-rines.",
"B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 B3/2B/2|A3/2G/2 E3-E/2E/2 B3/2B/2| A4 z2|",
"w: So we sailed_ up to the sun  'Till we found_ the sea of green,",
"B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 B3/2B/2|AG E2- E/2z3/2 B3/2B/2|A4- A3/2z2z/2|",
"w: And we lived_ beneath the waves In our yellow_ submarine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2- G/2z3/2|",
"w: We all live in a yel-low sub-ma-rine, Yel-low sub-ma-rine, yel-low sub-ma-rine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2 |",
"w: We all live in a yel-low sub-ma-rine, Yel-low sub-ma-rine, yel-low sub-ma-rine.",
"B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 BB|A3/2G/2 E2- E/2z3/2 B3/2B/2|",
"w: And our friends_ are all aboard, Many more of them_ live next door,",
"A4 z2 B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z4|",
"w: And the band begins to play.",
"z8|z8|z8|",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2- G/2z3/2|",
"w: We all live in a yellow submarine, Yellow submarine, yellow submarine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2|",
"w: We all live in a yellow submarine, Yellow submarine, yellow submarine.",
"z8|z8|z8|z8|z8|z8|z8|z8|",
"B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 BB|A3/2G/2 E2- E/2z3/2 B3/2B/2|",
"w: As we live_ a life of ease, Everyone of us_ has all we need.",
"A4 z2 B3/2c/2|d4- d3/2B/2 A3/2B/2|G4 z2 B3/2B/2|AG E2- E/2z3/2 B3/2B/2| A4- A3/2z2z/2|",
"w: Sky of blue_ and sea of green In our yellow_ sub-ma-rine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2- G/2z3/2|",
"w: We all live in a yel-low sub-ma-rine, Yel-low sub-ma-rine, yel-low sub-ma-rine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2- G/2z3/2|",
"w: We all live in a yellow submarine, Yellow submarine, yellow submarine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2- G/2z3/2|",
"w: We all live in a yel-low sub-ma-rine, Yel-low sub-ma-rine, yel-low sub-ma-rine.",
"d2 d2 d2 d3/2e/2|A3/2A/2 A3/2A/2 A2- A/2z3/2|A3/2A/2 A3/2A/2 A2- A/2z3/2| G3/2G/2 G3/2G/2 G2- G/2 |",
"w: We all live in a yel-low sub-ma-rine, Yel-low sub-ma-rine, yel-low sub-ma-rine.",
""];
abc_enc = [];
lyr_arr = {
"en": [
{
    "line": 1,
    "startTime": 1,
    "endTime": 6,
    "text": "In the town where I was born "
},
{
    "line": 2,
    "startTime": 6.1,
    "endTime": 10,
    "text": "Lived a man who sailed to sea "
},
{
    "line": 3,
    "startTime": 10.681,
    "endTime": 19,
    "text": "And he told us of his life in the land of submarines"
},
{
    "line": 4,
    "startTime": 19.084,
    "endTime": 27.8,
    "text": "So we sailed up to the sun Till we found the sea of green "
},
{
    "line": 5,
    "startTime": 28.084,
    "endTime": 36.5,
    "text": "And we lived beneath the waves In our yellow submarine"
},
{
    "line": 6,
    "startTime": 37.12,
    "endTime": 45.552,
    "text": "We all live in a yellow submarine Yellow submarine, yellow submarine "
},
{
    "line": 7,
    "startTime": 46,
    "endTime": 53.552,
    "text": "We all live in a yellow submarine Yellow submarine, yellow submarine "
},
{
    "line": 8,
    "startTime": 54,
    "endTime": 58.083,
    "text": "And our friends are all on board "
},
{
    "line": 9,
    "startTime": 58.689,
    "endTime": 62.683,
    "text": "Many more of them live next door "
},
{
    "line": 10,
    "startTime": 63.083,
    "endTime": 66.68299999999999,
    "text": "And the band begins to play"
},
{
    "line": 11,
    "startTime": 72.006,
    "endTime": 80.251,
    "text": "We all live in a yellow submarine Yellow submarine, yellow submarine "
},
{
    "line": 12,
    "startTime": 81.026,
    "endTime": 89.251,
    "text": "We all live in a yellow submarine Yellow submarine, yellow submarine "
},
{
    "line": 13,
    "startTime": 106.295,
    "endTime": 110.128,
    "text": "As we live a life of ease "
},
{
    "line": 14,
    "startTime": 111,
    "endTime": 115.128,
    "text": "Everyone of us has all we need "
},
{
    "line": 15,
    "startTime": 115.6,
    "endTime": 119.128,
    "text": "Sky of blue and sea of green "
},
{
    "line": 16,
    "startTime": 119.695,
    "endTime": 123.128,
    "text": "In our yellow submarine"
},
{
    "line": 17,
    "startTime": 124.165,
    "endTime": 132.157,
    "text": "We all live in a yellow submarine Yellow submarine, yellow submarine "
},
{
    "line": 18,
    "startTime": 133.201,
    "endTime": 140.829,
    "text": "We all live in a yellow submarine Yellow submarine, yellow submarine "
},
],
"it": [
{
    "line": 1,
    "startTime": 1,
    "endTime": 6,
    "text": "Nella città dove sono nato "
},
{
    "line": 2,
    "startTime": 6.1,
    "endTime": 10,
    "text": "Viveva un uomo che andava per mare "
},
{
    "line": 3,
    "startTime": 10.681,
    "endTime": 19,
    "text": "E ci raccontò della sua vita nella terra dei sottomarini"
},
{
    "line": 4,
    "startTime": 19.084,
    "endTime": 27.8,
    "text": "Quindi veleggiammo verso il sole Finchè trovammo il mare verde"
},
{
    "line": 5,
    "startTime": 28.084,
    "endTime": 36.5,
    "text": "E vivemmo sotto le onde Nel nostro sottomarino giallo"
},
{
    "line": 6,
    "startTime": 37.12,
    "endTime": 45.552,
    "text": "Noi tutti viviamo in un sottomarino giallo, sottomarino giallo, sottomarino giallo"
},
{
    "line": 7,
    "startTime": 46,
    "endTime": 53.552,
    "text": "Noi tutti viviamo in un sottomarino giallo, sottomarino giallo, sottomarino giallo"
},
{
    "line": 8,
    "startTime": 54,
    "endTime": 58.083,
    "text": "E i nostri amici sono tutti a bordo"
},
{
    "line": 9,
    "startTime": 58.689,
    "endTime": 62.683,
    "text": "Molti ancora vivono qui vicino"
},
{
    "line": 10,
    "startTime": 63.083,
    "endTime": 66.68299999999999,
    "text": "E la banda comincia a suonare"
},
{
    "line": 11,
    "startTime": 72.006,
    "endTime": 80.251,
    "text": "Noi tutti viviamo in un sottomarino giallo, sottomarino giallo, sottomarino giallo "
},
{
    "line": 12,
    "startTime": 81.026,
    "endTime": 89.251,
    "text": "Noi tutti viviamo in un sottomarino giallo, sottomarino giallo, sottomarino giallo"
},
{
    "line": 13,
    "startTime": 106.295,
    "endTime": 110.128,
    "text": "Viviamo una vita facile "
},
{
    "line": 14,
    "startTime": 111,
    "endTime": 115.128,
    "text": "Ognuno di noi ha tutto quello di cui ha bisogno "
},
{
    "line": 15,
    "startTime": 115.6,
    "endTime": 119.128,
    "text": "Un cielo blu e un mare verde "
},
{
    "line": 16,
    "startTime": 119.695,
    "endTime": 123.128,
    "text": "Nel nostro sottomarino giallo"
},
{
    "line": 17,
    "startTime": 124.165,
    "endTime": 132.157,
    "text": "Noi tutti viviamo in un sottomarino giallo, sottomarino giallo, sottomarino giallo "
},
{
    "line": 18,
    "startTime": 133.201,
    "endTime": 140.829,
    "text": "Noi tutti viviamo in un sottomarino giallo, sottomarino giallo, sottomarino giallo "
},
],
};

