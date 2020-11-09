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
opt = {"jump":0,"no_menu":0,"repufld":0,"noplyr":0,"nocsr":0,"media_height":"","btns":1,"ipadr":"","mstr":0,"autscl":1,"ctrmed":0,"ctrnot":0,"lncsr":0,"opacity":0.2,"synbox":0,"speed":1,"top_margin":0,"yubvid":"1woH96ROG-c","nomed":0,"delay":0,"repskip":0,"spdctl":0,"lopctl":false,"metro":0,"btime":-1,"etime":0,"offrol":0,"dotted":0};
lpRec = {"loopBtn":1,"loopStart":0,"loopEnd":187.36607142857147};
times_arr = [[0.00,3.21,8.93,13.76,18.58,23.40,28.23,33.05,37.88,42.70],
[42.70,47.52,51.47,54.46,57.45,60.44,63.43,71.85,80.27,88.72,90.48],
[90.48,92.32,94.15,95.99,97.82,103.76,109.06,111.96,114.78,115.85,119.42],
[119.42,122.98,126.55,130.12,132.39,134.75,137.10,138.30,139.50,140.70,141.90],
[141.90,156.33,157.53,158.72,167.53,175.18,178.79,182.39,185.99,189.60,193.20],
[193.20,196.80,200.40,204.01,207.61,211.21,214.82,224.46,234.09,236.42,238.75],
[238.75,241.08,243.41,245.74,248.07,250.40,252.73,255.06,257.39,259.72]];
abc_arr = ["X:1",
"T:G. Puccini",
"T:Un bel dì vedremo",
"Z:©",
"%%measurenb 0",
"%%scale 0.85",
"%%pagewidth 21.00cm",
"%%leftmargin 1.00cm",
"%%rightmargin 1.00cm",
"L:1/8",
"Q:1/4=56",
"M:3/4",
"I:linebreak $",
"K:Gb",
"V:1 treble nm=\"Soprano (Butterfly)\"",
"V:1",
" g3 e ge | f2 f2 z d | e3 B eB | d2 d2 ed |$ A3 F/G/ AF | B2 B2 z G | D3 D/E/ FD | %7",
"w: Un bel dì ve-|dre- mo le-|var- si un fil di|fu- mo- sull' e-|stre- mo con- fin del|ma- re. E|poi la * na- ve ap-|",
"[M:13/16] G2 G7/2 z |[M:3/4] FG A2 B2 |$ AG F4 | B2 =c2 (3BAG | B4 B2 | =cd e2 f2 | ed =c4 | %14",
"w: pa- re.|Poi la na- ve|bian- * ca|en- tra nel _ _|por- to,|rom- ba il suo sa-|lu- * to.|",
" f2 __a2 f/ed/ |$ f4 f2 | f2 ed (3:2:2B2 =c |[M:13/16] d2 E z/ G<B z/ =c/ |[M:2/4] FF A=c | %19",
"w: Ve- di? E' _ ve-|nu- to!|Io non gli scendo in-|con tro. Io no. Mi|met- to là sul|",
" BB/B/ BB |$ z F A=c |$ z B ff/f/ | f2 F/F/F/F/ | =c c3- | cB =c[de] | F F3 | z2 z =c | =cc cc |$ %28",
"w: ci- glio del col- le|e a- spet- to|e aspet- to gran|tem- po e non mi|pe- sa,|_ la lunga at-|te- sa|E u-|sci- to dal- la|",
" =cA (3Bcd |$ =c2 c2- | c2 e2 | ff ee | =c2 eE | A2 B2 | =c2 __eB | =c4 |[M:9/16] =c3- c3/2 |$ %37",
"w: fol- la cit- * ta-|di- na|_ un|uo- mo, un pic- ciol|pun- to s'av-|via per|la col _|li-|na _|",
"[M:4/8] z z/ [AB]/ =c>[AB] | F z/ F/ F/F/ F/F/ | F/F/ z/ [AB]/ =c>[AB] | F F/F/F F/F/ |$ AAAF | %42",
"w: Chi sa- rà? Chi sa-|rà? E co- me sa- rà|giun- to che di- rà? che di-|rà? Chia- me- rà But- ter-|fly dal- la lon-|",
" E2 E2 |$ A A/A/ A>F | E E/E/ E/E/ E/E/ | FF z/ F/ F/F/ | A A2 A |[M:17/32] ddd3/2d3/4 |$ %48",
"w: ta- na.|Io sen- za dar ri-|spo- sta me ne sta- rò na-|sco- sta un po' per|ce- lia e un|po' per non mo-|",
"[M:3/4] g3 e ge |$ f2 f2 z d | e/e/e/e/ eB eB | dd/d/ d2 ed |$ A/A/A/A/ AF/G/ A/A/F/F/ | %53",
"w: rire al pri- mo in|con- tro, ed|egli al- quan- to in pe- na chia- me-|rà, chia- me- rà _ Pic-|ci- na mogli- et- ti- na o- lez- zo di ver-|",
" B2 B2 z G |$ D/D/D/D/ DD/E/ FD | G2 G4 | z z/ [GG]/ B>[GA] BB/[BB]/ | d2 d4 |$ f2 f>f __a>e |$ %59",
"w: be- na, i|no- mi che mi da- va al suo ve-|ni- re|Tutto que- to av- ver- rà, te lo pro-|met- to.|Tien- ti la tua pa-|",
" f2 f/f/f/f/ __a>e | f2 f2 z d | b4- bB | z6 | z6 | z6 | z6 |$ z6 | z6 |] %68",
"w: u- ra, io son si- cu- ra|fe- de l'a-|spet- * to.|||||||",
""];
abc_enc = [];
lyr_arr = {
"en": [
{
    "line": 1,
    "startTime": 2.7,
    "endTime": 8.5,
    "text": "One day, we'll see."
},
{
    "line": 2,
    "startTime": 9,
    "endTime": 18,
    "text": "Remove a wire of smoke on the end"
},
{
    "line": 3,
    "startTime": 18.3,
    "endTime": 22,
    "text": "Border of the sea."
},
{
    "line": 4,
    "startTime": 22.3,
    "endTime": 28,
    "text": "And then the ship appears"
},
{
    "line": 5,
    "startTime": 28.3,
    "endTime": 35,
    "text": "And then the ship is white."
},
{
    "line": 6,
    "startTime": 40.3,
    "endTime": 52,
    "text": "Step into the harbor, shake his greeting."
},
{
    "line": 7,
    "startTime": 58.3,
    "endTime": 62,
    "text": "See, he came!"
},
{
    "line": 8,
    "startTime": 78.3,
    "endTime": 82,
    "text": "I'm not going to meet him, I'm not. I stand"
},
{
    "line": 9,
    "startTime": 88.3,
    "endTime": 95,
    "text": "there on the edge of the hill and wait, wait"
},
{
    "line": 10,
    "startTime": 98.3,
    "endTime": 102,
    "text": "Great time and it doesn't weigh me down"
},
{
    "line": 11,
    "startTime": 110.3,
    "endTime": 120,
    "text": "The long wait."
},
{
    "line": 12,
    "startTime": 138.3,
    "endTime": 202,
    "text": "And... out of the city crowd.  A man, a tiny dot It starts up the hill."
},
],
"it": [
{
    "line": 1,
    "startTime": 2.7,
    "endTime": 8.5,
    "text": "Un bel dì, vedremo"
},
{
    "line": 2,
    "startTime": 9,
    "endTime": 18,
    "text": "Levarsi un fil di fumo sull'estremo"
},
{
    "line": 3,
    "startTime": 18.3,
    "endTime": 22,
    "text": "Confin del mare."
},
{
    "line": 4,
    "startTime": 22.3,
    "endTime": 28,
    "text": "E poi la nave appare"
},
{
    "line": 5,
    "startTime": 28.3,
    "endTime": 35,
    "text": "E poi la nave è bianca."
},
{
    "line": 6,
    "startTime": 40.3,
    "endTime": 52,
    "text": "Entra nel porto, romba il suo saluto."
},
{
    "line": 7,
    "startTime": 58.3,
    "endTime": 62,
    "text": "Vedi? È venuto!"
},
{
    "line": 8,
    "startTime": 78.3,
    "endTime": 82,
    "text": "Io non gli scendo incontro, io no. Mi metto"
},
{
    "line": 9,
    "startTime": 88.3,
    "endTime": 95,
    "text": "Là sul ciglio del colle e aspetto, aspetto"
},
{
    "line": 10,
    "startTime": 98.3,
    "endTime": 102,
    "text": "Gran tempo e non mi pesa"
},
{
    "line": 11,
    "startTime": 110.3,
    "endTime": 120,
    "text": "La lunga attesa."
},
{
    "line": 12,
    "startTime": 138.3,
    "endTime": 202,
    "text": "E... uscito dalla folla cittadina"
},
    ],
"de": [
        {
            "line": 1,
            "startTime": 2.7,
            "endTime": 8.5,
        "text": "Eines Tages werden"
        },
        {
            "line": 2,
            "startTime": 9,
            "endTime": 18,
            "text": "wir eine Rauchlinie am äußersten"
        },
        {
            "line": 3,
            "startTime": 18.3,
            "endTime": 22,
            "text": "Rand des Meeres."
        },
        {
            "line": 4,
            "startTime": 22.3,
            "endTime": 28,
            "text": "Und dann erscheint das Schiff"
        },
        {
            "line": 5,
            "startTime": 28.3,
            "endTime": 35,
            "text": "Und dann ist das Schiff weiß."
        },
        {
            "line": 6,
            "startTime": 40.3,
            "endTime": 52,
            "text": "Treten Sie in den Hafen, schütteln Sie Ihr Hallo."
        },
        {
            "line": 7,
            "startTime": 58.3,
            "endTime": 62,
            "text": "Siehst du, er ist gekommen!"
        },
        {
            "line": 8,
            "startTime": 78.3,
            "endTime": 82,
            "text": "Ich werde ihn nicht treffen. Ich stehe dort"
        },
        {
            "line": 9,
            "startTime": 88.3,
            "endTime": 95,
            "text": "am Rande des Hügels und warte, warte"
        },
        {
            "line": 10,
            "startTime": 98.3,
            "endTime": 102,
            "text": "eine lange Zeit und mir macht"
        },
        {
            "line": 11,
            "startTime": 110.3,
            "endTime": 120,
            "text": "das lange Warten nichts aus."
        },
        {
            "line": 12,
            "startTime": 138.3,
            "endTime": 202,
            "text": "Und... aus der Menge der Stadt."
        },
    ],
    "es": [
        {
            "line": 1,
            "startTime": 2.7,
            "endTime": 8.5,
            "text": "Un día, veremos"
        },
        {
            "line": 2,
            "startTime": 9,
            "endTime": 18,
            "text": "una línea de humo subir en el otro"
        },
        {
            "line": 3,
            "startTime": 18.3,
            "endTime": 22,
            "text": "lado del mar."
        },
        {
            "line": 4,
            "startTime": 22.3,
            "endTime": 28,
            "text": "Y entonces aparece la nave"
        },
        {
            "line": 5,
            "startTime": 28.3,
            "endTime": 35,
            "text": "Entonces el barco blanco"
        },
        {
            "line": 6,
            "startTime": 40.3,
            "endTime": 52,
            "text": "entra en el puerto, ruge su saludo."
        },
        {
            "line": 7,
            "startTime": 58.3,
            "endTime": 62,
            "text": "¿Ves? ¡Vino!"
        },
        {
            "line": 8,
            "startTime": 78.3,
            "endTime": 82,
            "text": "No voy a bajar, yo no. Me quedo"
        },
        {
            "line": 9,
            "startTime": 88.3,
            "endTime": 95,
            "text": "en el borde de la colina y espero, y espero"
        },
        {
            "line": 10,
            "startTime": 98.3,
            "endTime": 102,
            "text": "mucho tiempo y no me importa"
        },
        {
            "line": 11,
            "startTime": 110.3,
            "endTime": 120,
            "text": "la larga espera."
        },
        {
            "line": 12,
            "startTime": 138.3,
            "endTime": 202,
            "text": "Y fuera de la multitud de la ciudad."
        },
    ],
    "ja": [
        {
            "line": 1,
            "startTime": 2.7,
            "endTime": 22,
            "text": "いつか海の端に煙が上がってくるの"
        },
        {
            "line": 2,
            "startTime": 9,
            "endTime": 18,
            "text": "端に煙が上がってくるの"
        },
        {
            "line": 3,
            "startTime": 18.3,
            "endTime": 22,
            "text": "を見るでしょうそして船が現れます"
        },
        {
            "line": 4,
            "startTime": 22.3,
            "endTime": 28,
            "text": "を見るでしょうそして船が現れます"
        },
        {
            "line": 5,
            "startTime": 28.3,
            "endTime": 35,
            "text": "そして白い船が港に入り、彼女の挨拶"
        },
        {
            "line": 6,
            "startTime": 40.3,
            "endTime": 52,
            "text": "そして白い船が港に入り、彼女の挨拶"
        },
        {
            "line": 7,
            "startTime": 58.3,
            "endTime": 62,
            "text": "ほら、彼が来た！"
        },
        {
            "line": 8,
            "startTime": 78.3,
            "endTime": 82,
            "text": "下には行かない私"
        },
        {
            "line": 9,
            "startTime": 88.3,
            "endTime": 95,
            "text": "は丘の端に立って待っていて長い間待っていても構わ"
        },
        {
            "line": 10,
            "startTime": 98.3,
            "endTime": 102,
            "text": "ないそして"
        },
        {
            "line": 11,
            "startTime": 110.3,
            "endTime": 120,
            "text": "ないそして"
        },
        {
            "line": 12,
            "startTime": 138.3,
            "endTime": 202,
            "text": "て・・・都会の人ごみの中から"
        },
    ],
};
