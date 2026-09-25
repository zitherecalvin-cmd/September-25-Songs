/**
 * songs-data-september-25.js — the 10-song "September 25 Songs" setlist.
 *
 * Same shape as songs-data.js: each song is written-key chords stacked over
 * lyrics, grouped into labeled sections. `transpose.js` operates directly on
 * these raw lines (see transposeLine / classifyLine), so this file is the
 * single source of truth for both the Markdown chart
 * (build-markdown-september-25.js) and the interactive HTML page
 * (chord_guide_september_25.html).
 *
 * A line that starts with "// " is a performance note/directive — it's
 * rendered in italics and is never treated as a chord or lyric line.
 *
 * Source chords: extracted from the Ultimate-Guitar-style .docx sheets in
 * `September 25 Chords/` (the medley from `files/MADONNA MEDLEY.docx`, cross-
 * checked against the three individual Madonna sheets in the folder root).
 *
 * A couple of source chord spellings were normalized so the transpose engine
 * recognizes them as real chords: "C#7sus" / "E7sus" -> "C#7sus4" / "E7sus4"
 * (the engine's quality table only knows sus2/sus4, not a bare "sus" after a
 * 7), and a few dash-joined progressions ("G-Cadd9", "F-Am-Bb-F-") were
 * respaced into normal space-separated chord tokens. Chords/lyrics/spacing
 * are otherwise verbatim from the source sheets.
 *
 * BPM notes: only included where the source sheet stated one outright
 * (September 125, Beautiful Sunday 120, Ang Huling El Bimbo 90) — the rest
 * had no tempo marking, so bpm is omitted rather than guessed.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SEPT25_SONGS = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SONGS = [
    {
      number: 1,
      title: "Madonna Medley",
      subtitle: "Like a Prayer / Like a Virgin / Material Girl",
      artist: "Madonna",
      key: "F",
      note: "Three-song medley performed as one continuous arrangement; transposing shifts every section together, preserving the medley's built-in key changes (F -> C for Material Girl).",
      sections: [
        { label: "Like a Prayer — Intro", lines: [
          "// Slow, instruments only",
          "F                 C",
          "When you call my name",
          "                      Bb",
          "It's like a little prayer",
          "                 F/A",
          "I'm down on my knees",
          "        Dm   C   F",
          "I wanna take you there",
          "// Rhythm guitar enters, vocals start",
          "F                C",
          "In the midnight hour",
          "                   Bb",
          "I can feel your power",
          "               F/A",
          "Just like a prayer",
          "              Dm    C  Bb",
          "You know I'll take you there"
        ] },
        { label: "Like a Prayer — Verse", lines: [
          "Dm        C Gm Dm",
          "Life is a mystery",
          "Dm            C      Gm  Dm",
          "Everyone must stand a-lone",
          "Dm         C     Gm F",
          "I hear you call my name",
          "Bb     F     C      Dm",
          "And it feels like home"
        ] },
        { label: "Like a Prayer — Chorus", lines: [
          "F                 C",
          "When you call my name",
          "                      Bb",
          "It's like a little prayer",
          "                 F/A",
          "I'm down on my knees",
          "        Dm   C   F",
          "I wanna take you there",
          "F                C",
          "In the midnight hour",
          "                   Bb",
          "I can feel your power",
          "               F/A",
          "Just like a prayer",
          "              Dm    C  Bb",
          "You know I'll take you there"
        ] },
        { label: "Like a Prayer — Chorus", lines: [
          "F                 C",
          "When you call my name",
          "                      Bb",
          "It's like a little prayer",
          "                 F/A",
          "I'm down on my knees",
          "        Dm   C   F",
          "I wanna take you there",
          "F                C",
          "In the midnight hour",
          "                   Bb",
          "I can feel your power",
          "               F/A",
          "Just like a prayer",
          "              Dm    C  Bb",
          "You know I'll take you"
        ] },
        { label: "Like a Virgin — Intro", lines: [
          "// Transition to Like a Virgin",
          "F6"
        ] },
        { label: "Like a Virgin — Verse 1", lines: [
          "          F6",
          "I made it through the wilderness",
          "Somehow I made it through",
          "Gm",
          "Didn't know how lost I was",
          "      F6",
          "Until I found you",
          "      F6",
          "I was beat, incomplete",
          "I'd been had, I was sad and blue",
          "        Gm        Dm",
          "But you made me feel",
          "          Gm     Dm",
          "Yeah, you made me feel",
          "          Csus4 - C - Csus2 - C",
          "Shiny and new"
        ] },
        { label: "Like a Virgin — Chorus", lines: [
          "       F6",
          "Like a virgin",
          "Touched for the very first time",
          "       Gm",
          "Like a virgin",
          "          F6",
          "When your heart beats",
          "Next to mine"
        ] },
        { label: "Like a Virgin — Verse 2", lines: [
          "               F6",
          "Gonna give you all my love, boy",
          "My fear is fading fast",
          "Gm",
          "Been saving it all for you",
          "            F6",
          "'Cause only love can last",
          "          F6",
          "You're so fine and you're mine",
          "Make me strong, yeah, you make me bold",
          "         Gm            Dm",
          "Oh, your love thawed out",
          "            Gm        Dm",
          "Yeah, your love thawed out",
          "                    Csus4 - C - Csus2 - C",
          "What was scared and cold"
        ] },
        { label: "Like a Virgin — Chorus", lines: [
          "       F6",
          "Like a virgin, hey",
          "Touched for the very first time",
          "       Gm",
          "Like a virgin",
          "          F6",
          "With your heartbeat",
          "             Dm",
          "Next to mine"
        ] },
        { label: "Like a Virgin — Bridge", lines: [
          "G                 Dm        G               Dm",
          "    Wo-ah-wo-ah        Wohoh,      Wo-ah-wo-ah   Wohoh",
          "G                 Dm       G G G",
          "    Wo-ah-wo-ah        Wohoh"
        ] },
        { label: "Material Girl — Intro", lines: [
          "// Transition to Material Girl",
          "F G             G      Am",
          "Living in a material world",
          "    F         G      C",
          "And I am a material girl",
          "",
          "C       A# C   A# (repeat several times)"
        ] },
        { label: "Material Girl — Verse 1", lines: [
          "C",
          "Some boys kiss me, some boys hug me",
          "A#                Am/C",
          "I think they're O.K.",
          "C",
          "If they don't give me proper credit",
          "F      G       C",
          "I just walk away",
          "C",
          "They can beg and they can plead",
          "A#                       Am/C",
          "But they can't see the light, that's right",
          "C",
          "Cause the boy with the cold hard cash",
          "    F     G        C",
          "Is always Mister Right, 'cause we are"
        ] },
        { label: "Material Girl — Chorus", lines: [
          "F G             G      Am",
          "Living in a material world",
          "    F         G      C",
          "And I am a material girl",
          "C",
          "You know that we are",
          "F   G          G      Am",
          "living in a material world",
          "    F         G      C",
          "And I am a material girl"
        ] },
        { label: "Material Girl — Verse 2", lines: [
          "C",
          "Some boys romance, some boys slow dance",
          "A#                    Am/C",
          "That's all right with me",
          "C",
          "If they can't raise my interest then I",
          "F       G        C",
          "Have to let them be",
          "C",
          "Some boys try and some boys lie but",
          "A#                  Am/C",
          "I don't let them play",
          "C",
          "Only boys who save their pennies",
          "F       G      C",
          "Make my rainy day, 'cause they are"
        ] },
        { label: "Material Girl — Chorus", lines: [
          "F G             G      Am",
          "Living in a material world",
          "    F         G      C",
          "And I am a material girl",
          "C",
          "You know that we are",
          "F   G          G      Am",
          "living in a material world",
          "    F         G      C",
          "And I am a material girl"
        ] },
        { label: "Material Girl — Chorus", lines: [
          "F G             G      Am",
          "Living in a material world",
          "    F         G      C",
          "And I am a material girl",
          "C",
          "You know that we are",
          "F   G          G      Am",
          "living in a material world",
          "    F         G      C",
          "And I am a material girl"
        ] },
        { label: "Material Girl — Fill", lines: [
          "C       A# C   A#",
          "C       A# C   A#"
        ] },
        { label: "Material Girl — Outro", lines: [
          "C              A#",
          "Living in a material world [material]",
          "C              A#",
          "Living in a material world",
          "C              A#",
          "Living in a material world [material]",
          "C              A#",
          "Living in a material world"
        ] }
      ]
    },

    {
      number: 2,
      title: "September",
      artist: "Earth, Wind & Fire",
      key: "D",
      bpm: 125,
      sections: [
        { label: "Intro", lines: [
          "Dmaj7          C#m7      Bm7 C#m7   F#m7  (x2)",
          "Dmaj7         C#m7      Bm7 C#m7    C#7/E#     F#m7",
          "Gmaj7/A (x2)"
        ] },
        { label: "Verse 1", lines: [
          "          Dmaj7 C#m7 Bm7",
          "Do you remember",
          "     C#m7 F#m7            Dmaj7 C#m7 Bm7",
          "the 21st night of September?",
          "C#m7                               F#m7               Dmaj7   C#m7   Bm7",
          "Love was changing the minds of pretenders",
          "C#m7        C#7/E# F#m7   Gmaj7/A",
          "While chasing the clouds away"
        ] },
        { label: "Verse 2", lines: [
          "N.C.            Dmaj7     C#m7 Bm7",
          "Our hearts were ringing",
          "       C#m7        F#m7             Dmaj7 C#m7 Bm7",
          "In the key that our souls were singing",
          "C#m7           F#m7         Dmaj7 C#m7 Bm7",
          "As we danced in the night,",
          "Dmaj7                C#m7         Bm7    Gmaj7/A",
          "Remember, how the stars stole the night away"
        ] },
        { label: "Chorus", lines: [
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - say do you remember",
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - dancing in September",
          "",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Ba de ya - never was a cloudy day",
          "Ba de ya"
        ] },
        { label: "Post-Chorus", lines: [
          "Bm7    E7     C#m7   F#m7",
          "Ba-du, ba-du, ba-du, ba-du",
          "Bm7    E7     C#m7   F#m7",
          "Ba-du, ba-du, ba-du, ba-du",
          "Bm7    E7     C#m7   F#m7     Gmaj/A",
          "Ba-du, ba-du, ba-du-da"
        ] },
        { label: "Verse 3", lines: [
          "                  Dmaj7 C#m7 Bm7",
          "My thoughts are with you",
          "         C#m7           F#m7    Dmaj7 C#m7 Bm7",
          "Holding hands with your heart to see you",
          "          C#m7     F#m7",
          "Only blue talk and love,",
          "Dmaj7 C#m7 Bm7 C#m7             C#7/E#       F#m7     Gmaj7/A",
          "Remember                 how we knew love was here to stay"
        ] },
        { label: "Verse 4", lines: [
          "    Dmaj7 C#m7 Bm7              C#m7     F#m7          Dmaj7 C#m7   Bm7",
          "Now December         found the love that we shared in September",
          "      C#m7     F#",
          "Only blue talk and love,",
          "Dmaj7 C#m7 Bm7 C#m7           C#7/E#       F#m7      Gmaj7/A",
          "Remember                    the true love we share today"
        ] },
        { label: "Chorus", lines: [
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - say do you remember",
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - dancing in September",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Ba de ya - never was a cloudy day"
        ] },
        { label: "Chorus", lines: [
          "And we'll say",
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - say do you remember",
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - dancing in September",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Golden dreams were shiny days (Dee-ya)"
        ] },
        { label: "Bridge", lines: [
          "Bm7   E7   C#m7          F#m7",
          "The bells was ringin', oh-oh",
          "Bm7   E7   C#m7          F#m7",
          "Our souls were singin'",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Do you remember never a cloudy day? Yow"
        ] },
        { label: "Chorus", lines: [
          "Bm7   E7   C#m7          F#m7",
          "And we'll say ba-dee-ya (Ba-dee-ya, dee-ya)",
          "Bm7   E7   C#m7          F#m7",
          "Say, do you remember? Ba-dee-ya (Ba-dee-ya, dee-ya)",
          "Bm7   E7   C#m7          F#m7",
          "Dancin' in September",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Never was a cloudy day (Dee-ya)"
        ] },
        { label: "Chorus", lines: [
          "And we'll say",
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - say do you remember",
          "Bm7   E7   C#m7          F#m7",
          "Ba de ya - dancing in September",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Golden dreams were shiny days (Dee-ya)"
        ] },
        { label: "Outro", lines: [
          "Bm7   E7   C#m7          F#m7",
          "Ba-dee-ya, dee-ya, dee-ya",
          "Bm7   E7   C#m7          F#m7",
          "Ba-dee-ya, dee-ya, dee-ya",
          "Bm7   E7   C#m7          F#m7",
          "Ba-dee-ya, dee-ya, dee-ya, dee-ya",
          "Bm7   E7   C#m7          F#m7",
          "Ba-dee-ya, dee-ya, dee-ya",
          "Bm7   E7   C#m7          F#m7",
          "Ba-dee-ya, dee-ya, dee-ya",
          "Bm7   E7   C#m7          F#m7 Gmaj7/A",
          "Ba-dee-ya, dee-ya, dee-ya, dee-ya"
        ] }
      ]
    },

    {
      number: 3,
      title: "Awitin Mo, Isasayaw Ko",
      artist: "VST & Company",
      key: "F#",
      sections: [
        { label: "Intro", lines: [
          "B A#m G#m C#7sus4 C#7"
        ] },
        { label: "Verse", lines: [
          "   F#            F#M7       G#m          Bm",
          "Walang iba pang sasarap sa pagtitinginan natin",
          "F#         F#M7         G#m              Bm",
          "Sana ay di na magwakas itong awit ng pag-ibig",
          "       A#m                         B",
          "Awit natin ay wag na wag mong kalimutan",
          "       A#m                            B",
          "Pangako ko naman na lagi kang pakikinggan",
          "B     A#m    G#m    C#7sus4 C#7",
          "Mag-pakailan man",
          "",
          "AM7           DM7",
          "Ang isang pag-ibig",
          "AM7           DM7",
          "Ay parang lansangan",
          "AM7       DM7",
          "na pandalawahan",
          "Bm                           E7sus4 E7",
          "kaya't sa ating awit tayo ay magbigayan"
        ] },
        { label: "Chorus", lines: [
          "DM7             C#m",
          "Hahh, awitin mo at isasayaw ko",
          "DM7             C#m         F#7   Bm   C#7",
          "Hahh, awitin mo at isasayaw ko    Hahh.."
        ] },
        { label: "Solo", lines: [
          "// Instrumental — verse chords",
          "F#            F#M7       G#m          Bm",
          "F#         F#M7         G#m              Bm",
          "       A#m                         B",
          "       A#m                            B",
          "B     A#m    G#m    C#7sus4 C#7"
        ] },
        { label: "Bridge", lines: [
          "AM7           DM7",
          "Ang isang pag-ibig",
          "AM7           DM7",
          "Ay parang lansangan",
          "AM7       DM7",
          "na pandalawahan",
          "Bm                           E7sus4 E7",
          "kaya't sa ating awit tayo ay magbigayan"
        ] },
        { label: "Chorus", lines: [
          "DM7             C#m",
          "Hahh, awitin mo at isasayaw ko",
          "DM7             C#m         F#7   Bm   C#7",
          "Hahh, awitin mo at isasayaw ko    Hahh.."
        ] }
      ]
    },

    {
      number: 4,
      title: "Beautiful Sunday",
      artist: "Daniel Boone",
      key: "D",
      bpm: 120,
      note: "Modulates up a whole step (D -> E) for the final chorus and outro — written into the chart, not something the transpose toolbar does automatically.",
      sections: [
        { label: "Intro", lines: [
          "D (x3)  G  A"
        ] },
        { label: "Verse 1", lines: [
          "D",
          "Sunday morning up with the lark",
          "  D",
          "I think I'll take a walk in the park",
          "G         A                    D",
          "Hey, hey hey, it's a beautiful day",
          "D",
          "I've got someone waiting for me",
          "    D",
          "And when I see her I know that she'll say",
          "G         A                      D",
          "Hey, hey hey, it's a beautiful day"
        ] },
        { label: "Chorus", lines: [
          "D                        G",
          "Ha, ha, ha, beautiful Sunday",
          "                A             D",
          "This is my, my, my beautiful day",
          "         D",
          "When you say, say, say",
          "             E7",
          "Say that you love me",
          "    G       A                   D",
          "Oh, my, my, my it's a beautiful day."
        ] },
        { label: "Verse 2", lines: [
          "D",
          "Birds are singing, you're by my side",
          "      D",
          "Let's take a car and go for a ride",
          "G         A                     D",
          "Hey, hey, hey, it's a beautiful day.",
          "D",
          "We'll drive on and follow the sun",
          "D",
          "Makin' Sunday go on and on",
          "G         A                    D",
          "Hey, hey, hey it's a beautiful day"
        ] },
        { label: "Chorus", lines: [
          "D                        G",
          "Ha, ha, ha, beautiful Sunday",
          "                A             D",
          "This is my, my, my beautiful day",
          "         D",
          "When you say, say, say",
          "             E7",
          "Say that you love me",
          "    G       A                   D",
          "Oh, my, my, my it's a beautiful day."
        ] },
        { label: "Chorus", lines: [
          "// Key change: up a whole step (D -> E)",
          "E                        A",
          "Ha, ha, ha, beautiful Sunday",
          "         B                    E",
          "This is my, my, my beautiful day",
          "          E",
          "When you say, say, say",
          "            F#7",
          "Say that you love me",
          "    A       B                   E",
          "Oh, my, my, my it's a beautiful day."
        ] },
        { label: "Outro", lines: [
          "E                        A",
          "Ha, ha, ha, beautiful Sunday",
          "        B",
          "This is my, my, my"
        ] }
      ]
    },

    {
      number: 5,
      title: "Salamin, Salamin",
      artist: "BINI",
      key: "F",
      sections: [
        { label: "Intro", lines: [
          "Gm C F Dm"
        ] },
        { label: "Verse 1", lines: [
          "Gm                        C",
          "Oh, hello there, misteryoso",
          "              F                       Dm",
          "'Di pa rin mabasa ang 'yong tunay na motibo, ooh-woah",
          "Gm               C",
          "Iba'ng pinapakita, taliwas sa'yong salita",
          "F                   Dm",
          "Pero ayokong magduda baka lang sa simula",
          "",
          "Gm                   C",
          "Maghihintay na lang na ika'y dumaan",
          "F                    Dm",
          "Sana ay maibsan ang aking pangungulila",
          "Gm                   C",
          "Trapped in this fairytale",
          "                   F                   Dm",
          "But I don't wanna wake up in this dream, baby"
        ] },
        { label: "Pre-Chorus", lines: [
          "Bb     Gm     F        Dm C",
          "Ayokong umasa sa paniniwalang",
          "Bb                C",
          "May pag-asa nga ba",
          "    Dm",
          "Na baka ang puso ko'y mapagbigyan?"
        ] },
        { label: "Chorus", lines: [
          "Gm             C",
          "Mahiwagang salamin",
          "                  F",
          "Kailan ba niya aaminin",
          "         Dm",
          "Kaniyang tunay na pagtingin?",
          "Gm             C",
          "Mahiwagang salamin",
          "                   F",
          "Ano ba'ng dapat gawin?",
          "          Dm",
          "Bakit ang puso'y nabibitin?",
          "",
          "Gm",
          "Salamin, salamin sa dingding",
          "  C",
          "Nasa'n na ang pag-ibig?",
          "F",
          "Salamin, salamin sa dingding",
          "Dm",
          "Pwede mo bang sabihin?",
          "Gm",
          "Salamin, salamin sa dingding",
          "  C",
          "Nasa'n na ang pag-ibig",
          "F",
          "Salamin, salamin",
          "            Dm",
          "Kailan niya ba 'ko papansinin?"
        ] },
        { label: "Verse 2", lines: [
          "Gm              C",
          "Ayokong maniwala (Ayokong maniwala, ayy)",
          "F                    Dm",
          "Na baka mabalewala (Oh, no, oh, no)",
          "Gm                   C",
          "Pero sa'yong sulyap mga mata'y nangungusap",
          "               F            Dm",
          "'Di ko kayang magpanggap, ano ba talaga ito?",
          "",
          "Gm                   C",
          "Maghihintay na lang na ika'y dumaan",
          "F                    Dm",
          "Sana ay maibsan ang aking pangungulila",
          "Gm                   C",
          "Trapped in this fairytale",
          "                   F                   Dm",
          "But I don't wanna wake up in this dream, baby"
        ] },
        { label: "Pre-Chorus", lines: [
          "Bb     Gm     F        Dm C",
          "Ayokong umasa sa paniniwalang",
          "Bb                C",
          "May pag-asa nga ba",
          "    Dm",
          "Na baka ang puso ko'y mapagbigyan?"
        ] },
        { label: "Chorus", lines: [
          "Gm             C",
          "Mahiwagang salamin",
          "                  F",
          "Kailan ba niya aaminin",
          "         Dm",
          "Kaniyang tunay na pagtingin?",
          "Gm             C",
          "Mahiwagang salamin",
          "                   F",
          "Ano ba'ng dapat gawin?",
          "          Dm",
          "Bakit ang puso'y nabibitin?",
          "",
          "Gm",
          "Salamin, salamin sa dingding",
          "  C",
          "Nasa'n na ang pag-ibig?",
          "F",
          "Salamin, salamin sa dingding",
          "Dm",
          "Pwede mo bang sabihin?",
          "Gm",
          "Salamin, salamin sa dingding",
          "  C",
          "Nasa'n na ang pag-ibig",
          "F",
          "Salamin, salamin",
          "            Dm",
          "Kailan niya ba 'ko papansinin?"
        ] },
        { label: "Bridge", lines: [
          "Gm",
          "Mirror, mirror on the wall",
          "C",
          "Please tell my prince charming I'm waiting for his call",
          "F",
          "Bakit ba pasikot-sikot Para bang pinapaikot",
          "Dm",
          "'Di ko talaga ma-gets Ano ba talaga ang next move mo?",
          "Gm",
          "Gusto ko lang naman malaman (Malaman)",
          "C",
          "Ano ba ang katotohanan (Oh, my)",
          "F",
          "Better say it now, it's not too late",
          "Dm",
          "I'm ready to be called your princess, hey (Hey)"
        ] },
        { label: "Pre-Chorus", lines: [
          "Bb     Gm     F        Dm C",
          "Ayokong umasa sa paniniwalang",
          "Bb                C",
          "May pag-asa nga ba",
          "    Dm",
          "Na baka ang puso ko'y mapagbigyan?"
        ] },
        { label: "Chorus", lines: [
          "Gm             C",
          "Mahiwagang salamin",
          "                  F",
          "Kailan ba niya aaminin",
          "         Dm",
          "Kaniyang tunay na pagtingin?",
          "Gm             C",
          "Mahiwagang salamin",
          "                   F",
          "Ano ba'ng dapat gawin?",
          "          Dm",
          "Bakit ang puso'y nabibitin?",
          "",
          "Gm",
          "Salamin, salamin sa dingding",
          "  C",
          "Nasa'n na ang pag-ibig?",
          "F",
          "Salamin, salamin sa dingding",
          "Dm",
          "Pwede mo bang sabihin?",
          "Gm",
          "Salamin, salamin sa dingding",
          "  C",
          "Nasa'n na ang pag-ibig",
          "F",
          "Salamin, salamin",
          "            Dm",
          "Kailan niya ba 'ko papansinin?"
        ] }
      ]
    },

    {
      number: 6,
      title: "Dahil Mahal Kita",
      artist: "The Boyfriends",
      key: "A",
      sections: [
        { label: "Verse", lines: [
          "      A                 Bm",
          "Ano man ang sabihin nila",
          "  Dm                          A",
          "Ika'y patuloy kong mamahalin",
          "    A            Bm",
          "Maging sino ka man",
          "         Dm                     A",
          "Di na magbabago ang pag-ibig ko",
          "    A                Bm",
          "Dahil minamahal kita",
          "            Dm                       A A G# F#m",
          "Walang makakapigil sa 'king damdamin.",
          "",
          "F#m              C#m      D       Bm",
          "Upang ikaw ay ibigin ko ng lubos",
          "E              A",
          "Sasambahin lagi",
          "                Bm          D                    A",
          "Dahil mahal kita lahat ng bagay ay aking makakamtan"
        ] },
        { label: "Chorus", lines: [
          "E     A                     Bm",
          "At dahil mahal kita handa akong magparaya",
          "Dm                A",
          "Kahit katumbas nito'y kasawian",
          "   A                       Bm",
          "Dahil mahal kita sa 'yo lamang liligaya",
          "Dm               A",
          "At di na muling iibig pa,"
        ] },
        { label: "Verse", lines: [
          "     A                Bm",
          "Maging sino ka man",
          "",
          "  Dm                       A",
          "Ika'y patuloy kong mamahalin",
          "    A            Bm",
          "Dahil minamahal kita",
          "         Dm                   A",
          "Walang makakapigil sa 'king damdamin",
          "",
          "F#m              C#m      D       Bm",
          "Upang ikaw ay ibigin ko ng lubos",
          "E              A",
          "Sasambahin lagi",
          "",
          "                Bm          D                    A",
          "Dahil mahal kita lahat ng bagay ay aking makakamtan"
        ] },
        { label: "Chorus", lines: [
          "E     A                     Bm",
          "At dahil mahal kita handa akong magparaya",
          "Dm                A",
          "Kahit katumbas nito'y kasawian",
          "   A                       Bm",
          "Dahil mahal kita sa 'yo lamang liligaya",
          "Dm               A",
          "At di na muling iibig pa,"
        ] },
        { label: "Interlude", lines: [
          "F#m              C#m      D       Bm",
          "E              A",
          "                Bm          D                    A"
        ] },
        { label: "Chorus", lines: [
          "E     A                     Bm",
          "At dahil mahal kita handa akong magparaya",
          "Dm                 A",
          "Kahit katumbas nito'y kasawian",
          "   A                       Bm",
          "Dahil mahal kita sa 'yo lamang liligaya",
          "Dm               A",
          "At di na muling iibig pa,"
        ] },
        { label: "Chorus", lines: [
          "E     A                     Bm",
          "At dahil mahal kita handa akong magparaya",
          "Dm                 A",
          "Kahit katumbas nito'y kasawian",
          "   A                       Bm",
          "Dahil mahal kita sa 'yo lamang liligaya",
          "Dm               A",
          "At di na muling iibig pa,",
          "",
          "// (then fade)"
        ] }
      ]
    },

    {
      number: 7,
      title: "Tuloy Pa Rin",
      artist: "Neocolours",
      key: "G",
      note: "Modulates up a minor third (G -> Eb) for the final two chorus repeats — written into the chart.",
      sections: [
        { label: "Intro", lines: [
          "C  Em  C  Em  D"
        ] },
        { label: "Verse", lines: [
          "      G",
          "Sa wari ko'y",
          "   D                 Em",
          "Lumipas na ang kadiliman ng araw",
          "         G             D",
          "Dahan-dahan pang gumigising",
          "        Em     D",
          "At ngayo'y babawi na",
          "Em",
          "Muntik na",
          "D                G       D/F# C",
          "Nasanay ako sa 'king pag-i-isa",
          "Em           D",
          "  Kaya nang iwanan ang",
          "    C        D",
          "Bakas ng kahapon ko"
        ] },
        { label: "Chorus", lines: [
          "                 G              D",
          "Tuloy pa rin ang awit ng buhay ko",
          "                Em             D",
          "Nagbago man ang hugis ng puso mo",
          "                   C                G",
          "Handa na 'kong hamunin ang aking mundo",
          "                 D",
          "'Pagkat tuloy pa rin"
        ] },
        { label: "Verse 2", lines: [
          "      G            D",
          "Kung minsan ay hinahanap",
          "         Em",
          "Pang alaala ng iyong halik (alaala ng 'yong halik)",
          "    G                D",
          "Inaamin ko na kay tagal pa",
          "   Em       D",
          "Bago malilimutan ito",
          "Em               D",
          "Kay hirap nang maulit muli",
          "       G    D/F#       C",
          "Ang naiwan nating pag-ibig (alam ko na 'yan)",
          "Em               D",
          "Tanggap na at natututo pang",
          "      C            D",
          "Harapin ang katotohanang ito"
        ] },
        { label: "Chorus", lines: [
          "                 G              D",
          "Tuloy pa rin ang awit ng buhay ko",
          "                Em             D",
          "Nagbago man ang hugis ng puso mo",
          "                   C                G",
          "Handa na 'kong hamunin ang aking mundo",
          "                   Am      D",
          "'Pagkat tuloy pa rin ohh hoohh"
        ] },
        { label: "Chorus", lines: [
          "                 G              D",
          "Tuloy pa rin ang awit ng buhay ko",
          "                Em             D",
          "Nagbago man ang hugis ng puso mo",
          "                   C                G",
          "Handa na 'kong hamunin ang aking mundo",
          "                   D",
          "'Pagkat tuloy pa rin"
        ] },
        { label: "Verse", lines: [
          "Em",
          "Muntik na",
          "D                G      D/F# C",
          "Nasanay ako sa 'king pag-i-isa",
          "Em           D",
          "  Kaya nang iwanan ang",
          "    C        D",
          "Bakas ng kahapon ko"
        ] },
        { label: "Chorus", lines: [
          "// Key change: up a minor third (G -> Eb)",
          "                 Ab             Eb",
          "Tuloy pa rin ang awit ng buhay ko (tuloy pa rin)",
          "                Fm             Eb",
          "Nagbago man ang hugis ng puso mo (oh..hoh..)",
          "                   Db               Ab",
          "Handa na 'kong hamunin ang aking mundo (handang harapin ang mundo)",
          "                   Bbm Eb",
          "'Pagkat tuloy pa rin"
        ] },
        { label: "Chorus", lines: [
          "                 Ab             Eb",
          "Tuloy pa rin ang awit ng buhay ko",
          "                Fm             Eb",
          "Nagbago man ang hugis ng puso mo",
          "                   Db               Ab",
          "Handa na 'kong hamunin ang aking mundo",
          "                 Eb",
          "'Pagkat tuloy pa rin"
        ] }
      ]
    },

    {
      number: 8,
      title: "Pangako",
      artist: "Cueshé",
      key: "F",
      sections: [
        { label: "Intro", lines: [
          "F (x5)"
        ] },
        { label: "Verse 1", lines: [
          "F",
          "  Kislap ng yong mga mata",
          "Ako'y iyong nadadala",
          "                          Bb",
          "Parang anghel ang yong ganda",
          "                F",
          "Di maiwasan hahanap-hanapin ka",
          " F",
          "O kay tamis ng yong mga ngiti",
          "Ako'y iyong naaakit",
          "                      Bb",
          "Tulad ng rosas nakakaaliw",
          "                            C",
          "Di mapigilang mabighani sa iyo"
        ] },
        { label: "Chorus 1", lines: [
          "   F",
          "At hindi ko hahayaan na",
          " Am",
          "ika'y mawawala",
          "     Bb",
          "Pipilitin ko ang puso",
          "        F",
          "mong mahulog sa akin"
        ] },
        { label: "Verse 2", lines: [
          "F",
          "    Pagsapit ng gabi",
          "Sa isip ay ikaw pa rin",
          "                          Bb",
          "Mga larawan mo sa aking tabi",
          "                C",
          "Na laging nakamasid"
        ] },
        { label: "Chorus 1", lines: [
          "   F",
          "At hindi ko hahayaan na",
          " Am",
          "ika'y mawawala",
          "     Bb",
          "Pipilitin ko ang puso",
          "        F",
          "mong mahulog sa akin"
        ] },
        { label: "Chorus 2", lines: [
          "   F",
          "At hinding-hindi ka",
          "                 Am",
          "magaalinlangan pangako ito",
          "     Bb                    F",
          "Gagawin ang lahat para sa iyo"
        ] },
        { label: "Bridge", lines: [
          "C            Bb Bb Dm",
          "  Oh woh woh hoh",
          "C             Bb C",
          "  Oh woh wohh wohh"
        ] },
        { label: "Guitar Solo", lines: [
          "F  Am  Bb  F"
        ] },
        { label: "Chorus 1", lines: [
          "   F",
          "At hindi ko hahayaan na",
          " Am",
          "ika'y mawawala",
          "     Bb",
          "Pipilitin ko ang puso",
          "        F",
          "mong mahulog sa akin"
        ] },
        { label: "Chorus 2", lines: [
          "   F",
          "At hinding-hindi ka",
          "                 Am",
          "magaalinlangan pangako ito",
          "     Bb                    F",
          "Gagawin ang lahat para sa iyo"
        ] },
        { label: "Outro", lines: [
          "F  F (hold)"
        ] }
      ]
    },

    {
      number: 9,
      title: "Makita Kang Muli",
      artist: "Sugarfree",
      key: "G",
      sections: [
        { label: "Intro", lines: [
          "G  Cadd9",
          "G             Cadd9       D",
          "    Oohoohooh Oohoohoohooh"
        ] },
        { label: "Verse 1", lines: [
          "Em               D/F#       G",
          "  bawat sandali ng aking buhay",
          "           Am7              Em",
          "pagmamahal mo ang aking taglay",
          "               D/F#               G",
          "saan man mapadpad ng hanging hindi",
          "       Cadd9          Am7",
          "magbabago aking pagtingin",
          "          Bm7           Am7",
          "pangako natin sa may kapal",
          "          Bm7               Cadd9",
          "na tayo lamang sa habang buhay",
          "      D",
          "maghintay....."
        ] },
        { label: "Chorus", lines: [
          "G               Bm7",
          "    ipaglalaban ko",
          "               Cadd9",
          "ang ating pag-ibig",
          "G                Bm7",
          "  maghintay ka lamang",
          "           Cadd9",
          "ako'y darating",
          "         D               Em",
          "pagka't sa isang taong mahal mo",
          "           D/F# G      Cadd9/A Cadd9",
          "ng buong puso lahat ay ga.....gawin",
          "               G D",
          "makita kang muli",
          "              Am7 Cadd9 D",
          "makita kang muli"
        ] },
        { label: "Verse 2", lines: [
          "Em              D/F#           G",
          "  puso'y nagdurusa, nangungulila",
          "        Am7           Em",
          "iniisip ka, pag nag-iisa",
          "    D/F#        G",
          "inaala mga sandali",
          "          Cadd9      Am7",
          "nang tayo ay magkapiling",
          "            Bm7            Am7",
          "ikaw ang gabay sa akin tuwina",
          "            Bm7                 Cadd9",
          "ang aking ilaw sa gabing mapanglaw",
          "         D",
          "tanging ikaw....."
        ] },
        { label: "Chorus", lines: [
          "G             Bm7",
          "  ipaglalaban ko",
          "               Cadd9",
          "ang ating pag-ibig",
          "G                 Bm7",
          "  maghintay ka lamang",
          "           Cadd9",
          "ako'y darating",
          "         D               Em",
          "pagka't sa isang taong mahal mo",
          "           D/F# G      Cadd9/A Cadd9",
          "ng buong puso lahat ay ga.....gawin",
          "               G Cadd9 D",
          "makita kang muli",
          "               G Cadd9",
          "makita kang muli",
          "               G",
          "makita kang muli"
        ] }
      ]
    },

    {
      number: 10,
      title: "Ang Huling El Bimbo",
      artist: "Eraserheads",
      key: "G",
      bpm: 90,
      sections: [
        { label: "Intro", lines: [
          "G   A7      C        G   x2"
        ] },
        { label: "Verse 1", lines: [
          "(G)                A7",
          "Kamukha mo si Paraluman,",
          "C                      G",
          "  Nung tayo ay bata pa.",
          "G                         A7",
          "  At ang galing-galing mo sumayaw,",
          "      C               G",
          "Mapa boogie man o cha-cha.",
          "            G   A7",
          "Ngunit ang paborito,",
          "       C              G",
          "Ay pagsayaw mo ng el bimbo.",
          "         G          A7",
          "Nakakaindak, nakakaaliw,",
          "          C        G",
          "Nakakatindig balahibo."
        ] },
        { label: "Pre-Chorus 1", lines: [
          "Em                  G            C             D",
          "   Pagkagaling sa skwela ay didiretso na sa inyo,",
          "Em              G             C         D",
          "   At buong maghapon ay tinuturuan mo ako."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "         G          A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Verse 2", lines: [
          "(G)                      A7",
          "Naninigas ang aking katawan,",
          "    C              G",
          "Pagumikot na ang plaka.",
          "G                   A7",
          "  Patay sa kembot ng bewang mo,",
          "         C                 G",
          "At ang pungay ng iyong mga mata.",
          "       G        A7",
          "Lumiliwanag ang buhay,",
          "         C             G",
          "Habang tayo'y magkaakbay.",
          "           G            A7",
          "At dahan-dahang dumudulas,",
          "           C                  G",
          "Ang kamay ko sa makinis mong braso."
        ] },
        { label: "Pre-Chorus 2", lines: [
          "Em        G              C           D",
          "   Sana noon pa man ay sinabi na sa iyo,",
          "Em                G           C            D",
          "   Kahit hindi na uso ay ito lang ang alam ko."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "         G          A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Bridge", lines: [
          "          G",
          "La la la la",
          "   A7",
          "La la",
          "    C",
          "La la",
          "         G",
          "La la la la"
        ] },
        { label: "Verse 3", lines: [
          "(G)                     A7",
          "Lumipas ang maraming taon,",
          "C                  G",
          "  Di na tayo nagkita.",
          "G                           A7",
          "  Balita ko'y may anak ka na,",
          "    C             G",
          "Ngunit walang asawa.",
          "     G         A7        C",
          "Tagahugas ka raw ng pinggan",
          "          G",
          "Sa may Ermita.",
          "            G        A7",
          "At isang gabi nasagasaan,",
          "              C           G",
          "Sa isang madilim na eskinita."
        ] },
        { label: "Pre-Chorus 3", lines: [
          "Em              G            C            D",
          "   Lahat ng pangarap ko'y bigla lang natunaw,",
          "Em                  G          C          D",
          "   Sa panaginip na lang pala kita maisasayaw."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "         G          A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Chorus", lines: [
          "      G          A7",
          "Magkahawak ang ating kamay,",
          "      C             G",
          "At walang kamalay-malay.",
          "        G           A7",
          "Na tinuruan mo ang puso ko,",
          "     C        G",
          "Na umibig ng tunay."
        ] },
        { label: "Coda", lines: [
          "          G",
          "La la la la",
          "   A7",
          "La la",
          "    C",
          "La la",
          "         G",
          "La la la la"
        ] }
      ]
    }
  ];

  return SONGS;
}));
