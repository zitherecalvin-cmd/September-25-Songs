/**
 * songs-data-set-2-sep-25.js — the 9-song "SET 2 SEP 25" setlist.
 *
 * Same shape as songs-data-september-25.js: each song is written-key chords
 * stacked over lyrics, grouped into labeled sections. `transpose.js` operates
 * directly on these raw lines (see transposeLine / classifyLine), so this
 * file is the single source of truth for both the Markdown chart
 * (build-markdown-set-2-sep-25.js) and the interactive HTML page
 * (chord_guide_set_2_sep_25.html).
 *
 * A line that starts with "// " is a performance note/directive — it's
 * rendered in italics and is never treated as a chord or lyric line.
 *
 * Source chords: extracted from the Ultimate-Guitar-style .docx sheets in
 * `D:\PERSONAL\Personal Projects\SEPTEMBER\September 25 Chords\` (a separate
 * project's folder — this repo only carries the transcribed data, not the
 * source .docx files). "Till They Take My Heart Away" was sourced from
 * `September 25 Chords\files\Till_They_Take_My_Heart_Away_Chords_by_Clair_Marlo.docx`
 * in this repo instead.
 *
 * A few source chord spellings were normalized so the transpose engine
 * recognizes them as real chords: a bare "7sus" (no following 2/4) was
 * normalized to "7sus4" (e.g. "F7sus" -> "F7sus4", "D7sus" -> "D7sus4",
 * "C7sus" -> "C7sus4") and "D7-9" (source shorthand for a flat 9) was
 * normalized to "D7b9". Chords/lyrics/spacing are otherwise verbatim from
 * the source sheets; curly apostrophes were straightened to match the rest
 * of the project's convention.
 *
 * "key" always names the song's root pitch class (not major/minor mode) —
 * that's all the transpose toolbar needs to track a shift. Tatsulok is
 * written in B minor per the source sheet; its "key" field is "B" so the
 * on-screen key label keeps updating correctly as you transpose (an exact
 * "Bm" string isn't recognized by the toolbar's key picker).
 *
 * BPM notes: only included where the source sheet stated one outright
 * (This Love 95, Awit ng Kabataan 133) — the rest had no tempo marking, so
 * bpm is omitted rather than guessed.
 *
 * Freestyle Medley and Kung Payagan were removed from this setlist, and
 * "Till They Take My Heart Away" was added, per a setlist revision.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.SET2_SONGS = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SONGS = [
    {
      number: 1,
      title: "Tadhana",
      artist: "Up Dharma Down",
      key: "C",
      sections: [
        { label: "Intro", lines: [
          "C       D Em x2",
          "C       Em   x2"
        ] },
        { label: "Verse 1", lines: [
          "C        D     Em",
          "Sa hindi inaasahang",
          "C        D     Em",
          "Pagtatagpo ng mga mundo",
          "C        D     Em",
          "May minsan lang na nagdugtong",
          "Am      Bm             C",
          "Damang dama na ang ugong nito",
          "",
          "C               D Em",
          "Di pa ba sapat ang sakit at lahat",
          "C               D Em",
          "Na hinding hindi ko ipararanas sa'yo?",
          "C              D Em",
          "Ibinubunyag ka ng iyong matang",
          "Am      Bm            C",
          "Sumisigaw ng pagsinta"
        ] },
        { label: "Chorus", lines: [
          "            C",
          "Ba't di pa patulan",
          "              Em",
          "Ang pagsuyong nagkulang?",
          "        C",
          "Tayong umaasang",
          "         Em",
          "Hilaga't kanluran",
          "         C",
          "Ikaw ang hantungan",
          "",
          "          Em",
          "At bilang kanlungan mo",
          "  Am      Bm     C",
          "Ako ang sasagip sa'yo"
        ] },
        { label: "Instrumental", lines: [
          "C Em   x2",
          "C D Em x2",
          "Am"
        ] },
        { label: "Verse 2", lines: [
          "C               D Em",
          "Saan nga ba patungo?",
          "C               D Em",
          "Nakayapak at nahihiwagaan na",
          "C               D Em",
          "Ang bagyo ng tadhana ay",
          "  Am    Bm             C",
          "Dinadala ako sa init ng bisig mo"
        ] },
        { label: "Chorus", lines: [
          "              C",
          "Ba't di pa sabihin",
          "             Em",
          "Ang hindi mo maamin?",
          "    C                 Em",
          "Ipauubaya na lang ba 'to sa hangin?",
          "         C         Em",
          "'Wag mo ikatakot ang bulong ng damdamin mo",
          "Am      Bm     C",
          "Naririto ako't nakikinig sa'yo"
        ] },
        { label: "Outro", lines: [
          "C   Em   x2",
          "C   D Em x2",
          "C"
        ] }
      ]
    },

    {
      number: 2,
      title: "You Are My Religion",
      artist: "FireHouse",
      key: "C#",
      sections: [
        { label: "Intro", lines: [
          "C# D#m7 F#add9 G#sus4 G# G#sus2 (x2)"
        ] },
        { label: "Verse 1", lines: [
          "C#                             A#m7",
          "I've lost my faith in everything",
          "                             F#add9",
          "I couldn't believe in anything",
          "        G#                C# F#add9           G#",
          "Until I put my faith in you",
          "C#                       A#m7",
          "Is it a sin is it a crime",
          "                                         F#9",
          "To worship somebody all of the time anytime,",
          "           G#             C# F#add9    G#",
          "I would do anything for you"
        ] },
        { label: "Pre-Chorus", lines: [
          "A#m                F#add9",
          "  I found my heaven right here with you",
          "A#m",
          "  Believe in me forever,",
          "       G#",
          "I believe in you"
        ] },
        { label: "Chorus", lines: [
          "C#           D#m7   F#add9     G#sus4 G# G#sus2",
          "Not just on Sunday, I love you every day and",
          "C#           D#m7   F#add9     G#sus4 G# G#sus2",
          "I fall to my knees every night I pray since",
          "C#          D#m7",
          "You've come and saved me",
          "F#add9 G#sus4 G#    G#sus2",
          "for   all eternity",
          "",
          "A#m                G#              F#add9",
          "In the name of the Father and the Son",
          "G#                 C#     D#m7",
          "You are my religion"
        ] },
        { label: "Verse 2", lines: [
          "C#                             A#m7",
          "I wasn't looking for a miracle",
          "                             F#add9",
          "Didn't think that love was possible",
          "        G#                C# F#add9 G#",
          "But your love has made me whole",
          "C#                       A#m7",
          "And I pray that this will never end",
          "                             F#add9",
          "You are my lover, my best friend",
          "           G#             C# F#add9 G#",
          "You took me in and saved my soul"
        ] },
        { label: "Pre-Chorus", lines: [
          "A#m              F#add9",
          "  I found my heaven right here with you",
          "A#m",
          "  Believe in me forever,",
          "       G#",
          "I believe in you"
        ] },
        { label: "Chorus", lines: [
          "A#m                 G#                 F#add9",
          "Forgive me for the things that I have done",
          "A#m                 G#                 F#add9",
          "In the name of the Father and the Son",
          "D#m7     G#       C#",
          "You are my religion"
        ] },
        { label: "Outro", lines: [
          "G Em7",
          "// (until fade)"
        ] }
      ]
    },

    {
      number: 3,
      title: "Tatlong Oras",
      artist: "Unknown",
      key: "B",
      sections: [
        { label: "Intro", lines: [
          "B C# E B"
        ] },
        { label: "Verse 1", lines: [
          "B                    D#7",
          "Sa unang tingin ko pa lang",
          "B7          Cdim          C#m7",
          "Para bang itinutulak ng hangin",
          "                       F#",
          "Mapang akit mong mga mata",
          "          B",
          "Ang syang nag dulot sa akin",
          "G#m               C#m7",
          "Na maisipan kong lapitan ka",
          "     F#",
          "Ngayong nahagkan kita, Ohhhh",
          "          C#7",
          "Di alam ang gagawin",
          "C#m7",
          "Kung tatanggapin ba",
          "  F#",
          "Pag sayo ito'y aking inamin"
        ] },
        { label: "Chorus", lines: [
          "B                 C#",
          "Sana'y iyong mabatid",
          "E",
          "Ako'y iyong napa-ibig",
          "B",
          "Sa tatlong oras nating pagsasama",
          "B                    C#",
          "Para bang ako'y nananaginip",
          "             E",
          "Pwede bang maulit",
          "        B",
          "Oh tatlong oras tayo pa'y magsama"
        ] },
        { label: "Turnaround", lines: [
          "B C# E B"
        ] },
        { label: "Verse 2", lines: [
          "B    F#    G#M - F#    E",
          "Umaga na't ako'y gising pa rin",
          "    C#m7      F#            B7",
          "Sa kakatitig ko sayo ay lumalalim",
          "B              G#m                    C#m7",
          "Aking nadarama pangako kong hindi mapapagal",
          "            F#",
          "Eh kaso lang nauutal Ohhhh",
          "G#m         C#7",
          "Di ko alam ang gagawin",
          "C#m7",
          "Maniniwala ba sakali",
          "F#",
          "mang ito'y aking aminin"
        ] },
        { label: "Chorus", lines: [
          "B                 C#",
          "Sana'y iyong mabatid",
          "E",
          "Ako'y iyong napa-ibig",
          "B",
          "Sa tatlong oras nating pagsasama",
          "G#m B                    C#",
          "Para bang ako'y nananaginip",
          "             E",
          "Pwede bang maulit",
          "        B",
          "Oh tatlong oras tayo pa'y magsama"
        ] },
        { label: "Bridge", lines: [
          "B  C#  D#  E",
          "    E                    B",
          "At kung balak mo'y ibaon na lang sa limot",
          "    E                    B",
          "Pwes 'wag kang magpadala sa takot",
          "B  C#  D#  E",
          "    E                    B F# G#m",
          "Aking mahal di naman ako nagbibiro",
          "    C#m7              F#",
          "Kaya sana ay pakinggan mo"
        ] },
        { label: "Interlude (Solo)", lines: [
          "F# - G - G# - G",
          "F# - C# - E - Em"
        ] },
        { label: "Chorus", lines: [
          "B                 C#",
          "Sana'y iyong mabatid",
          "E",
          "Ako'y iyong napa-ibig",
          "B",
          "Sa tatlong oras nating pagsasama",
          "G#m B                    C#",
          "Para bang ako'y nananaginip",
          "             E",
          "Pwede bang maulit",
          "        B",
          "Oh tatlong oras tayo pa'y magsama"
        ] },
        { label: "Chorus", lines: [
          "B                 C#",
          "Sana'y iyong mabatid",
          "E",
          "Ako'y iyong napa-ibig",
          "B",
          "Sa tatlong oras nating pagsasama",
          "G#m B                    C#",
          "Para bang ako'y nananaginip",
          "             E",
          "Pwede bang maulit",
          "        B",
          "Oh tatlong oras tayo pa'y magsama"
        ] },
        { label: "Outro", lines: [
          "B C# E B"
        ] }
      ]
    },

    {
      number: 4,
      title: "Maling Akala",
      artist: "Brownman Revival",
      key: "C",
      note: "The source sheet has no section labels ([Verse]/[Chorus]) — the Verse/Pre-Chorus/Chorus/Instrumental breakdown below is inferred from the repeating chord/lyric pattern.",
      sections: [
        { label: "Intro", lines: [
          "C - G - C - Em7 - Am7 - D - D7"
        ] },
        { label: "Verse 1", lines: [
          "            G              D                    Em C",
          "May mga kumakalat na balita",
          "               G             D                                   Em",
          "Na ang misis ni kuwan ay madaling makuha",
          "C                  G                C                             G",
          "Bago maniwala, magisip-isip ka muna",
          "     Am                                                      D",
          "Marami ang namamatay sa maling akala"
        ] },
        { label: "Verse 2", lines: [
          "           G                               D                               Em                 C",
          "Nung ako'y musmos pa lamang ay takot sa multo",
          "           G                         D                       Em",
          "Nung ako'y naging binata, sa erpat ng syota ko",
          "        C                     G                C                                G",
          "Ngayon ay may asawa at meron ng pamilya",
          "      Am                                                 D",
          "Wala na ngang multo ngunit takot sa asawa ko"
        ] },
        { label: "Pre-Chorus", lines: [
          "             Bm                                     Am",
          "'Di mo na kailangang mag-alinlangan",
          "          Bm                                   Am",
          "Kung tama ang gagawin mo",
          "             Bm                                          Am",
          "Basta't huwag kalimutang magdahan-dahan",
          "           Bm                              C",
          "Kung di sigurado sa kalalabasan",
          "    Eb                                D",
          "Kalalabasan ng binabalak mo"
        ] },
        { label: "Chorus", lines: [
          "     G         D                Em    C",
          "Maliit na butas, lumalaki",
          "G                  D       Em",
          "Konting gusot, dumadami",
          "C                 G                 C                        Em7",
          "'Di mo maibabaon sa limot at bahala",
          "     Am7                        D",
          "Kapag nabulag ka..ha...ng maling akala"
        ] },
        { label: "Instrumental", lines: [
          "G - D - Em - C",
          "G - D - Em",
          "C - G - C - G - Am - D"
        ] },
        { label: "Verse 3", lines: [
          "      G                  D          Em                         C",
          "Nasa'n na ba ako, kaninong kama 'to",
          " G                   D                   Em",
          "Ilang ulit na bang nagigising sa ibang kuwarto",
          "C                      G             C                             G",
          "Naglayas sa bahay, akala madali ang buhay",
          "        Am                                         D",
          "Ngayon ay nagsisisi dahil 'di nakapagtapos"
        ] },
        { label: "Pre-Chorus", lines: [
          "             Bm                                    Am",
          "'Di mo na kailangang mag-alinlangan",
          "          Bm                                  Am",
          "Kung tama ang gagawin mo",
          "             Bm                                         Am",
          "Basta't huwag kalimutang magdahan-dahan",
          "           Bm                             C",
          "Kung di sigurado sa kalalabasan",
          "     Eb                               D",
          "Kalalabasan ng binabalak mo"
        ] },
        { label: "Chorus", lines: [
          "       G       D                Em    C",
          "Maliit na butas, lumalaki",
          "G                  D      Em",
          "Konting gusot, dumadami",
          "C                 G                 C                     Em7",
          "'Di mo maibabaon sa limot at bahala",
          "     Am7                        D",
          "Kapag nabulag ka..ha...ng maling akala"
        ] },
        { label: "Verse 4", lines: [
          "            G             D                        Em C",
          "May mga kumakalat na balita",
          "               G      D                       Em",
          "Na ang kaligtasa'y madaling makuha",
          "C                  G                      C                 G",
          "Bago maniwala, magisip-isip ka muna",
          "     Am                                  D",
          "Marami ang namamata..hay sa maling akala"
        ] },
        { label: "Chorus", lines: [
          "       G       D               Em     C",
          "Maliit na butas, lumalaki",
          "G                  D      Em",
          "Konting gusot, dumadami",
          "C                 G                 C                      Em7",
          "'Di mo maibabaon sa limot at bahala",
          "     Am7                        D",
          "Kapag nabulag ka..ha...ng maling akala"
        ] },
        { label: "Outro", lines: [
          "G - D - Em - C",
          "G - D - Em",
          "C - G - C - Em7",
          "Am7 - D"
        ] }
      ]
    },

    {
      number: 5,
      title: "This Love",
      artist: "Maroon 5",
      key: "G",
      bpm: 95,
      sections: [
        { label: "Intro", lines: [
          "G       Cm   Fm       G7/D"
        ] },
        { label: "Verse 1", lines: [
          "G                       Cm",
          "I was so high I did not recognize",
          "                       Fm",
          "The fire burning in her eyes",
          "               G7/D",
          "The chaos that controlled my mind",
          "G                            Cm",
          "whispered goodbye as she got on a plane",
          "            Fm",
          "Never to return again",
          "                 G7/D",
          "But always in my heart"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm        Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "",
          "    Cm Fm        Bb          Eb",
          "And her heart is breaking in front of me",
          " Cm       F            Ab              G",
          "I have no choice cause I won't say goodbye anymore"
        ] },
        { label: "Interlude", lines: [
          "G Cm     Fm   G7/D"
        ] },
        { label: "Verse 2", lines: [
          "G                           Cm",
          "I tried my best to feed her appetite",
          "                 Fm",
          "Keep her coming every night",
          "                    G7/D",
          "So hard to keep her satisfied",
          "G                              Cm",
          "Kept playing love like it was just a game",
          "              Fm",
          "Pretending to feel the same",
          "                     G7/D",
          "Then turn around and leave again (oh!)"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm        Bb         Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm        Bb          Eb",
          "And her heart is breaking in front of me",
          " Cm       F             Ab             G",
          "I have no choice cause I won't say goodbye anymore"
        ] },
        { label: "Interlude", lines: [
          "G   Cm   Fm   G7/D"
        ] },
        { label: "Bridge", lines: [
          "Fm",
          "I'll fix these broken things",
          "Ebmaj7",
          "Repair your broken wings",
          "G7                          Cm",
          "And make sure everything's alright (it's alright)",
          "Fm",
          "My pressure on her hips",
          "Ebmaj7",
          "Sinking my fingertips",
          "",
          "G",
          "Into every inch of you",
          "G7",
          "Cause I know that's what you want me to do"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm         Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm         Bb         Eb",
          "And her heart is breaking in front of me",
          " Cm       F             Ab             G",
          "I have no choice cause I won't say goodbye anymore"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm         Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm         Bb         Eb",
          "And my heart is breaking in front of me",
          "Cm           F       Ab            G",
          "She said Goodbye too many times before"
        ] },
        { label: "Chorus", lines: [
          " Cm Fm         Bb        Eb",
          "This love has taken its toll on me",
          " Cm          Fm      Bb           Eb",
          "She said Goodbye too many times before",
          "    Cm Fm         Bb         Eb",
          "And her heart is breaking in front of me",
          " Cm       F             Ab             G",
          "I have no choice cause I won't say goodbye anymore"
        ] }
      ]
    },

    {
      number: 6,
      title: "Till They Take My Heart Away",
      artist: "Clair Marlo",
      key: "E",
      note: "Modulates up a perfect fifth (E -> B) for the final chorus and coda — written into the chart.",
      sections: [
        { label: "Intro", lines: [
          "E C#m7 D6/9",
          "E C#m7 D6/9"
        ] },
        { label: "Verse 1", lines: [
          "E                          C#m7      D6/9",
          "  I look into your eyes so far away.",
          "E",
          "  There's trouble on your mind,",
          "         C#m7         D6/9",
          "You're losing faith.",
          "  A               A/B",
          "Hey now let me hold you,",
          "         E       C#m7",
          "It will be okay.",
          "               A",
          "Cause I will love you,",
          "            A/B             E",
          "Till they take my heart away."
        ] },
        { label: "Verse 2", lines: [
          "Remember when you called,",
          "      C#m7        D6/9",
          "And said goodbye.",
          "E",
          "  You thought we'd lost it all,",
          "      C#m7     D6/9",
          "And so did I.",
          "A          A/B",
          "Even if I lost you,",
          "         E           C#m7",
          "I would feel the same.",
          "",
          "         A",
          "I will love you,",
          "          A/B      B/C#     Amaj9",
          "Till they take my heart away."
        ] },
        { label: "Chorus", lines: [
          "       B       G#m7   C#m7",
          "Believe, I'm here to stay.",
          "         A",
          "I will love you,",
          "           A/B             E C#m7    D6/9",
          "Till they take my heart away."
        ] },
        { label: "Verse 3", lines: [
          "E",
          "   Now we're stronger than before,",
          "       C#m7            D6/9",
          "We've made it through.",
          "E",
          "   I've never felt more sure,",
          "    C#m7        D6/9",
          "Because of you.",
          "  A                A/B",
          "Hey now, are you listening?",
          "          E          C#m7",
          "Can you hear me say?",
          "         A",
          "I will love you,",
          "           A/B      B/C#     Amaj9",
          "Till they take my heart away."
        ] },
        { label: "Chorus", lines: [
          "       B       G#m7   C#m7",
          "Believe, I'm here to stay.",
          "         A",
          "I will love you,",
          "           A/B",
          "Till they take my heart away."
        ] },
        { label: "Instrumental", lines: [
          "Dadd9   C#m7",
          "F#m7 A A/B B/C#"
        ] },
        { label: "Chorus", lines: [
          "// Key change: up a perfect fifth (E -> B)",
          "     B      B/C#   A#m7      D#m7",
          "Believe in me, I'm here to stay.",
          "         B",
          "I will love you,",
          "           B/C#",
          "Till they take my heart away."
        ] },
        { label: "Coda", lines: [
          " B     B/C#   A#m7   D#m7",
          "Away, away, away.",
          "        B",
          "I will love you,",
          "",
          "           B/C#",
          "Till they take my heart away. (fade)"
        ] }
      ]
    },

    {
      number: 7,
      title: "Gi Kumot-Kumot",
      artist: "The Ambassadors",
      key: "A",
      sections: [
        { label: "Verse 1", lines: [
          "     A                            E",
          "     gpanumpa ko na, nga kitang duha",
          "          D                   E",
          "     magtiunay sa ato nga gugma.",
          "                A              E",
          "     abi mog kita, magkadayon na",
          "             D             E",
          "     kay sa gugma nanumpa ta."
        ] },
        { label: "Pre-Chorus", lines: [
          "  F#m                          Bm",
          "  kalit gibyaan ikaaw nga naghilak",
          "            G        D                 E",
          "  mao nang dagway mo sa samin daw mabuak."
        ] },
        { label: "Chorus", lines: [
          "                     A",
          "     kay gikumot-kumot(gikumot-kumot)",
          "                     E",
          "     sa dakong kamot(sa dakong kamot)",
          "                   D                        E",
          "     ang dughan mong pagkadako, dako sa gugma",
          "                       A",
          "     kay gikumot-kumot(GIKUMOT-KUMOT)",
          "                    E",
          "     sa dakong kamot(sa dakong kamot)",
          "                 D                        E",
          "     ang dughan mong pagkadako, dako sa gugma."
        ] },
        { label: "Verse 1", lines: [
          "// Repeat verse 1",
          "     A                            E",
          "     gpanumpa ko na, nga kitang duha",
          "          D                   E",
          "     magtiunay sa ato nga gugma.",
          "                A              E",
          "     abi mog kita, magkadayon na",
          "             D             E",
          "     kay sa gugma nanumpa ta."
        ] },
        { label: "Pre-Chorus", lines: [
          "  F#m                          Bm",
          "  kalit gibyaan ikaaw nga naghilak",
          "            G        D                 E",
          "  mao nang dagway mo sa samin daw mabuak."
        ] },
        { label: "Chorus", lines: [
          "                     A",
          "     kay gikumot-kumot(gikumot-kumot)",
          "                     E",
          "     sa dakong kamot(sa dakong kamot)",
          "                   D                        E",
          "     ang dughan mong pagkadako, dako sa gugma",
          "                       A",
          "     kay gikumot-kumot(GIKUMOT-KUMOT)",
          "                    E",
          "     sa dakong kamot(sa dakong kamot)",
          "                 D                        E",
          "     ang dughan mong pagkadako, dako sa gugma."
        ] },
        { label: "Tag", lines: [
          "                    A",
          "      Kay  gikumot-kumoT (gikumot-kumot)",
          "                 E",
          "      gikumot-kumot, gikumot-kumot",
          "                 D",
          "      gikumot-kumot, gikumot-kumot",
          "                    E",
          "      gikumot-kumoooooot.."
        ] },
        { label: "Pre-Chorus", lines: [
          "// Repeat Ref. and Cho.",
          "  F#m                          Bm",
          "  kalit gibyaan ikaaw nga naghilak",
          "            G        D                 E",
          "  mao nang dagway mo sa samin daw mabuak."
        ] },
        { label: "Chorus", lines: [
          "                     A",
          "     kay gikumot-kumot(gikumot-kumot)",
          "                     E",
          "     sa dakong kamot(sa dakong kamot)",
          "                   D                        E",
          "     ang dughan mong pagkadako, dako sa gugma",
          "                       A",
          "     kay gikumot-kumot(GIKUMOT-KUMOT)",
          "                    E",
          "     sa dakong kamot(sa dakong kamot)",
          "                 D                        E",
          "     ang dughan mong pagkadako, dako sa gugma."
        ] }
      ]
    },

    {
      number: 8,
      title: "Awit ng Kabataan",
      artist: "Rivermaya",
      key: "C",
      bpm: 133,
      sections: [
        { label: "Intro", lines: [
          "C D G       (x9)"
        ] },
        { label: "Verse", lines: [
          "      C D           G           C D           G",
          "Nagtatawa sa akin kaibigan, nag-aaral ang buong mundo",
          "         C D           G         C D   G",
          "Wala na ba tayong mga kabataan sa ating mga ulo",
          "      C D         G            C D         G",
          "Kung gusto mo kaming sigawan bakit hindi nyo subukan",
          "    C D       G                C - D - G",
          "lalo nakayo di maiintindihan"
        ] },
        { label: "Chorus", lines: [
          "     C D      G",
          "Ang awit ng Kabataan",
          "     C D      G",
          "ang awit ng panahon",
          "     C D      G",
          "hanggang sa kinabukasan",
          "     C D      G",
          "awitin natin ngayon"
        ] },
        { label: "Verse", lines: [
          " C D      G",
          "Hindi Nyo kami mabibilang",
          "",
          "  C D     G",
          "At di rin maikakahon",
          "     C D        G            C D        G",
          "Marami kami ngunit iisa lamang ang aming pasyon"
        ] },
        { label: "Chorus", lines: [
          "     C D      G",
          "Ang awit ng Kabataan",
          "     C D      G",
          "ang awit ng panahon",
          "     C D      G",
          "hanggang sa kinabukasan",
          "     C D      G",
          "awitin natin ngayon"
        ] },
        { label: "Bridge", lines: [
          "               C                     G",
          "At sa pagtulog sa gabi maririnig ang dasal",
          "           C                         G",
          "ng mga kabataang uhaw sa tunay na pagmamahal"
        ] },
        { label: "Guitar Solo", lines: [
          "C - D - G"
        ] },
        { label: "Verse 3", lines: [
          "C - D - G",
          "Nawawala, nagtatago",
          "Naghahanap ng kaibigan",
          "Nagtataka, nagtatanong",
          "Kung kailan kami mapakikinggan",
          "Kung gusto mo akong subukan",
          "Bakit hindi mo subukan?",
          "Subukan mo akong pigilan",
          "Subukan n'yo kami"
        ] },
        { label: "Chorus", lines: [
          "     C D      G",
          "Ang awit ng Kabataan",
          "     C D      G",
          "ang awit ng panahon",
          "     C D      G",
          "hanggang sa kinabukasan",
          "     C D      G",
          "awitin natin ngayon",
          "",
          "Kabataan, Panahon",
          "Kabataan, ngayon na ang ating panahon",
          "Kabataan, Panahon",
          "Kabataan, Panahon",
          "Awitin natin, awitin natin",
          "",
          "Awit ng Kabataan",
          "Ang awit ng panahon"
        ] }
      ]
    },

    {
      number: 9,
      title: "Tatsulok",
      artist: "Bamboo",
      key: "B",
      note: "Written in B minor per the source sheet; \"key\" is set to \"B\" (the root pitch class) so the on-screen key label keeps updating correctly as you transpose.",
      sections: [
        { label: "Intro", lines: [
          "Bm    C#    D    Em    F#    Bm"
        ] },
        { label: "Verse 1", lines: [
          " Bm                      A",
          "Totoy bilisan mo, bilisan mo ang takbo",
          " Bm                               G",
          "Ilagan ang mga bombang nakatutok sa ulo mo",
          " Bm                       A",
          "Totoy tumalon ka, dumapa kung kailangan",
          " G                     A              Bm",
          "At baka tamaan pa ng mga balang ligaw",
          "",
          "Bm    C#    D    Em    F#    Bm"
        ] },
        { label: "Verse 2", lines: [
          "Bm                     A",
          "Totoy makinig ka huwag nang magpagabi",
          "Bm",
          "Baka pagkamalan pa't",
          "G",
          "Humandusay dyan sa tabi",
          "Bm                     A",
          "Totoy alam mo ba kung ano ang puno't dulo",
          "G                      A            Bm",
          "Ng di matapos tapos na kaguluhang ito"
        ] },
        { label: "Pre-Chorus", lines: [
          "   G                             F#m",
          "Hindi pula't dilaw ang tunay na magkalaban",
          "G                            F#m",
          "Ang kulay at tatak ay di siyang dahilan",
          "",
          "  Bm                     A",
          "Hangga't marami ang lugmok sa kahirapan",
          "  G           A",
          "At ang hustisya ay para lang sa mayaman",
          "",
          "F#    G     F#    D    C#"
        ] },
        { label: "Chorus", lines: [
          "      Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G   A                  Bm",
          "Hindi matatapos itong gulo",
          "",
          "Bm    C#    D    Em    F#    Bm"
        ] },
        { label: "Verse 3", lines: [
          "Bm                      A",
          "Ngunit ng suminag, kay daming mga tao,",
          " Bm                               G",
          "At ang dating munting bukid, ngayo'y sementeryo",
          " Bm                       A",
          "Totoy kumilos ka, baliktarin ang tatsulok",
          " G                     A              Bm",
          "Tulad ng dukha, nailagay mo sa tuktok"
        ] },
        { label: "Pre-Chorus", lines: [
          "   G                             F#m",
          "Hindi pula't dilaw ang tunay na magkalaban",
          "G                            F#m",
          "Ang kulay at tatak ay di siyang dahilan",
          "  Bm                     A",
          "Hangga't marami ang lugmok sa kahirapan",
          "  G           A",
          "At ang hustisya ay para lang sa mayaman",
          "",
          "F#    G     F#    D    C#"
        ] },
        { label: "Chorus", lines: [
          "   Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm",
          "Hindi matatapos itong gulo",
          "   Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm   (Bm 4 counts)",
          "Hindi matatapos itong gulo"
        ] },
        { label: "All Instruments", lines: [
          "Bm  A  Bm  A  Bm",
          "B  A  G  F#  G  A",
          "Bm  A  Bm  A  Bm",
          "B  A  G  F#  G  A  G"
        ] },
        { label: "Pre-Chorus", lines: [
          "// Slower tempo (adagio)",
          "   G                             F#m",
          "Hindi pula't dilaw ang tunay na magkalaban",
          "G                            F#m",
          "Ang kulay at tatak ay di siyang dahilan",
          "  Bm                     A",
          "Hangga't marami ang lugmok sa kahirapan",
          "  G           A             F#m",
          "At ang hustisya ay para lang sa mayaman"
        ] },
        { label: "Chorus", lines: [
          "   Bm (break)                        F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm",
          "Hindi matatapos itong gulo",
          " Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          "",
          " G   A",
          "Hindi matatapos",
          "G   A",
          "Di matatapos"
        ] },
        { label: "Outro", lines: [
          "G  A                Bm",
          "Di matatapos itong gulo"
        ] }
      ]
    }
  ];

  return SONGS;
}));
