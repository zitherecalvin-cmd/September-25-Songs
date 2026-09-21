/**
 * songs-data-set-2-sep-25.js — the 10-song "SET 2 SEP 25" setlist.
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
 * source .docx files).
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
      title: "Freestyle Medley",
      subtitle: "When I Met You / Bakit Ba Ganyan / Think I'm Inlove",
      artist: "Freestyle",
      key: "Bb",
      note: "Three-song medley performed as one continuous arrangement, capo 1st fret per the source sheet (chords below are written/fretted shapes, not sounding pitch). Transposing shifts every section together, preserving the medley's built-in key changes (Bb -> F for Bakit Ba Ganyan -> C for Think I'm Inlove, then back toward Bb for the closing reprise).",
      sections: [
        { label: "When I Met You — Intro", lines: [
          "A#M7 D#m/A# D#m/G# C#M7 Cm Cm/F A#M7",
          "A# A#/A A#/G A#/F D#9 F7sus4"
        ] },
        { label: "When I Met You — Verse 1", lines: [
          "        A#M7     D#m             A#M7",
          "There I was an empty piece of a shell",
          "      D#m            Dm7",
          "Just mindin' my own world;",
          "",
          "                Gm         Cm                F7sus4 F7",
          "Without even knowin' what love and life were all about",
          "F#m Fm    A#M7",
          "Then you came",
          "     D#m                    A#M7",
          "You brought me out of the shell;",
          "    D#m                Dm7",
          "You gave the world to me",
          "             Gm",
          "And before I knew",
          "         Cm        F7sus4 F7      D#9 E9",
          "There I was so in love with you"
        ] },
        { label: "When I Met You — Chorus", lines: [
          " D#M7          D7          Gm",
          "You gave me a reason for my being",
          "Gm F#m Fm   A#      D#M7       D#9 E9",
          "And I love what I'm feelin'",
          "D#M7          D7           Gm",
          "You gave me a meaning to my life",
          "Gm F#m Fm        A#   D#M7",
          "Yes, I've gone beyond existing",
          "       Cm Dm D#M7 F7        A#M7",
          "And it all began when I met you"
        ] },
        { label: "When I Met You — Verse 2", lines: [
          "   D#m                    A#M7",
          "I love the touch of your hair",
          "     D#m                 Dm7",
          "And when I look in your eyes",
          "         Gm     Cm               F7sus4 F7",
          "I just know, I know I'm on to something good",
          "F#m Fm A#M7        D#m              A#M7",
          "And I'm sure my love for you will endure",
          "       D#m                   Dm7",
          "Your love will light up my world;",
          "                Gm     Cm                 F7sus4 F7       D#9 E9",
          "And take all my cares away with the aching part of me"
        ] },
        { label: "When I Met You — Chorus", lines: [
          " D#M7          D7          Gm",
          "You gave me a reason for my being",
          "Gm F#m Fm   A#       D#M7      D#9 E9",
          "And I love what I'm feelin'",
          "D#M7          D7           Gm",
          "You gave me a meaning to my life",
          "Gm F#m Fm        A#    D#M7",
          "Yes, I've gone beyond existing",
          "// Transition to Bakit Ba Ganyan",
          "       Cm Dm D#M7 F7        A#M7 G# C7sus4",
          "And it all began when I met you"
        ] },
        { label: "Bakit Ba Ganyan — Intro", lines: [
          "F Cm F Cm"
        ] },
        { label: "Bakit Ba Ganyan — Verse 1", lines: [
          "F",
          "Bakit ba ganyan",
          "      Cm                 F",
          "Ang ibig ko'y lagi kang pagmasdan?",
          "     Cm                      A#",
          "Umula't umaraw ay hindi pagsasawaan",
          "      A#m7      Am7    D7sus4 D7",
          "Ang iyong katangian",
          "Gm7                     C7sus4 C7        F   C7sus4 C7",
          "Damdamin ko'y ibang-iba kapag kapiling ka, sinta",
          "F           Cm7",
          "Ewan ko, bakit ba ganyan;",
          "     F                Cm7     F7",
          "Damdamin ay di maintindihan?",
          "     A#              C/A# C",
          "Kailangan ang pag-ibig mo",
          "Am7              C#7         D7",
          "Dahil sa ako'y nagmamahal sa 'yo",
          "    Gm7      C7sus4 C7          F Cm F Cm",
          "Magmula nang kita'y makilala"
        ] },
        { label: "Bakit Ba Ganyan — Verse 2", lines: [
          "F",
          "Bakit ba ganyan",
          "      Cm7                   F",
          "Kung minsan ay nauutal sa kaba",
          "  Cm",
          "Kapag ika'y kausap na?",
          "     A#                 A#m7      Am7     C7sus4 C7",
          "Ngunit lumalakas ang loob kung ikaw ay nakatawa",
          "F           Cm7",
          "Ewan ko, bakit ba ganyan;",
          "     F                Cm7     F7",
          "Damdamin ay di maintindihan?",
          "     A#              C/A# C",
          "Kailangan ang pag-ibig mo",
          "Am7              C#7         D7b9",
          "Dahil sa ako'y nagmamahal sa 'yo",
          "// Transition to Think I'm Inlove",
          "    Gm7      C7sus4 C7          Cm Dm Em",
          "Magmula nang kita'y makilala (oh)"
        ] },
        { label: "Think I'm Inlove — Intro", lines: [
          "Fm A# C F A# G"
        ] },
        { label: "Think I'm Inlove — Verse 1", lines: [
          "         C",
          "Is, this love",
          "        G/C",
          "Feeling restless inside",
          "        C",
          "Wanting you",
          "          G/C",
          "To always be my side",
          "        F                       G/F",
          "I don't even want you out of my side",
          "",
          "         Em                       Am",
          "You are in my thoughts all day and night",
          "  Dm                     G",
          "I can't get you out of my mind",
          "   G7          C   C7sus4 C7",
          "I think I'm in love"
        ] },
        { label: "Think I'm Inlove — Chorus", lines: [
          "   C     Dm Em F",
          "I think I'm in love",
          "              G/F      Em D#7",
          "Think I'm in love with you",
          "Dm",
          "Every single day",
          "",
          "Every single night",
          "              G",
          "Every single moment of my life",
          "                     C         C7sus4    C7",
          "I want to spend them all with you",
          "    C   Dm Em F",
          "I think I'm in love",
          "                G/F     Em    Am",
          "I think I'm in love with you",
          "Dm7",
          "Tell me that you care",
          "",
          "Tell me... please",
          "                      G",
          "Tell me that you also feel",
          "                 C G/C C G/C",
          "The way that I do..."
        ] },
        { label: "Think I'm Inlove — Verse 2", lines: [
          "             C",
          "Can't describe",
          "            G/C",
          "Words are just not enough",
          "          C",
          "Can't explain",
          "           G/C",
          "It all happened so fast",
          "        F                        G/F",
          "What exactly am I feeling right now",
          "             Em7                  A",
          "If this is love I got to know somehow",
          "      Dm7                      G",
          "Just how long this madness will last",
          "                      C    C7",
          "'cause I think I'm in love"
        ] },
        { label: "Think I'm Inlove — Chorus", lines: [
          "  C     Dm Em F",
          "I think I'm in love",
          "",
          "             G/F       Em D#7",
          "Think I'm in love with you",
          "Dm",
          "Every single day",
          "",
          "Every single night",
          "              G",
          "Every single moment of my life",
          "                     C         C7sus4    C7",
          "I want to spend them all with you",
          "    C   Dm Em F",
          "I think I'm in love",
          "                G/F     Em    Am",
          "I think I'm in love with you",
          "Dm7",
          "Tell me that you care",
          "",
          "Tell me... please",
          "                      G",
          "Tell me that you also feel",
          "                A#",
          "The way that I do..."
        ] },
        { label: "Medley — Outro", lines: [
          "// Reprise, transition back to When I Met You",
          "D#9 E9",
          "",
          " D#M7           D7         Gm",
          "You gave me a reason for my being",
          "Gm F#m Fm   A#       D#M7      D#9 E9",
          "And I love what I'm feelin'",
          "D#M7           D7          Gm",
          "You gave me a meaning to my life",
          "Gm F#m Fm         A#   D#M7",
          "Yes, I've gone beyond existing",
          "       Cm Dm D#M7 F7        A#M7",
          "And it all began when I met you",
          "           A#7",
          "When I met you",
          " D#M7           D7         Gm",
          "You gave me a reason for my being",
          "Gm F#m Fm   A#       D#M7      D#9 E9",
          "And I love what I'm feelin'",
          "D#M7           D7          Gm",
          "You gave me a meaning to my life",
          "Gm F#m Fm         A#   D#M7",
          "Yes, I've gone beyond existing",
          "       Cm Dm D#M7 F7",
          "And it all began",
          "",
          "When I met you",
          "                    A#M7 D#m/A# D#m/G# C#M7 Cm   Cm/F",
          "Coz' I think I'm Inlove...",
          "      A#M7",
          "Ooohhhh...."
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
      number: 4,
      title: "Tadhana",
      artist: "Up Dharma Down",
      key: "G",
      note: "Capo 4th fret per the source sheet (chords below are written/fretted shapes, not sounding pitch).",
      sections: [
        { label: "Intro", lines: [
          "G       A Bm x2",
          "G       Bm   x2"
        ] },
        { label: "Verse 1", lines: [
          "G        A     Bm",
          "Sa hindi inaasahang",
          "G        A     Bm",
          "Pagtatagpo ng mga mundo",
          "G        A     Bm",
          "May minsan lang na nagdugtong",
          "Em      F#m             G",
          "Damang dama na ang ugong nito",
          "",
          "G               A Bm",
          "Di pa ba sapat ang sakit at lahat",
          "G               A Bm",
          "Na hinding hindi ko ipararanas sa'yo?",
          "G              A Bm",
          "Ibinubunyag ka ng iyong matang",
          "Em      F#m            G",
          "Sumisigaw ng pagsinta"
        ] },
        { label: "Chorus", lines: [
          "            G",
          "Ba't di pa patulan",
          "              Bm",
          "Ang pagsuyong nagkulang?",
          "        G",
          "Tayong umaasang",
          "         Bm",
          "Hilaga't kanluran",
          "         G",
          "Ikaw ang hantungan",
          "",
          "          Bm",
          "At bilang kanlungan mo",
          "  Em      F#m     G",
          "Ako ang sasagip sa'yo"
        ] },
        { label: "Instrumental", lines: [
          "G Bm   x2",
          "G A Bm x2",
          "Em"
        ] },
        { label: "Verse 2", lines: [
          "G               A Bm",
          "Saan nga ba patungo?",
          "G               A Bm",
          "Nakayapak at nahihiwagaan na",
          "G               A Bm",
          "Ang bagyo ng tadhana ay",
          "  Em    F#m             G",
          "Dinadala ako sa init ng bisig mo"
        ] },
        { label: "Chorus", lines: [
          "              G",
          "Ba't di pa sabihin",
          "             Bm",
          "Ang hindi mo maamin?",
          "    G                 Bm",
          "Ipauubaya na lang ba 'to sa hangin?",
          "         G         Bm",
          "'Wag mo ikatakot ang bulong ng damdamin mo",
          "Em      F#m     G",
          "Naririto ako't nakikinig sa'yo"
        ] },
        { label: "Outro", lines: [
          "G   Bm   x2",
          "G   A Bm x2",
          "G"
        ] }
      ]
    },

    {
      number: 5,
      title: "Kung Payagan",
      artist: "Cup of Joe",
      key: "C",
      note: "Capo 4th fret per the source sheet (chords below are written/fretted shapes, not sounding pitch).",
      sections: [
        { label: "Intro", lines: [
          "C",
          "C G Em D",
          "C G Em D"
        ] },
        { label: "Verse 1", lines: [
          "   C              G",
          "Sinta, kumusta ka na?",
          "     C                             G",
          "Nakahanap na ba ng trabaho sa Maynila",
          "     C",
          "Matagal ka nang nasa 'king isip",
          " G                        C",
          "Ako rin ba nasa panaginip mo",
          "                           G",
          "O mahimbing na ang 'yong tulog?"
        ] },
        { label: "Chorus", lines: [
          "Em               D       C             D",
          "   Anong gagawin mo kung may pagkakataon?",
          "        C           G          Em         D           C",
          "Kung payagan ng kalangitan at tayo ay pagbibigyang muli",
          "                     G          Em         D",
          "Balik ba kung sa'n nagkamali o susugal sa mga tala?",
          " C               G             Em            D",
          "Alam ko nang ngayo'y 'di na kayang lumaban pa",
          "    C              G                Em              D",
          "Sa susunod 'di pababayaan kung papayagan at pagbibigyan"
        ] },
        { label: "Instrumental", lines: [
          "C G Em D"
        ] },
        { label: "Verse 2", lines: [
          "   C                G",
          "Sinta, pakinggan mo nga",
          "",
          "   C                                   G",
          "Pagsisising laman ng boses sa bawat hinga",
          "      C",
          "May natitira bang respeto sa 'kin",
          " G                        C",
          "Upang makita aking pagbabago",
          "                        G",
          "O umikot na'ng 'yong mundo"
        ] },
        { label: "Chorus", lines: [
          "Em               D       C            D",
          "   Anong gagawin mo kung may pagkakataon?",
          "        C           G          Em         D           C",
          "Kung payagan ng kalangitan at tayo ay pagbibigyang muli",
          "                     G          Em         D",
          "Balik ba kung sa'n nagkamali o susugal sa mga tala?",
          " C               G             Em            D",
          "Alam ko nang ngayo'y 'di na kayang lumaban pa",
          "    C              G                C               D",
          "Sa susunod 'di pababayaan kung papayagan at pagbibigyan"
        ] },
        { label: "Instrumental", lines: [
          "G Em D C"
        ] },
        { label: "Bridge", lines: [
          "        G",
          "Kung pagbibigyan, papayag ba",
          "        Em",
          "Kung pagbibigyan, papayag ba",
          "        D",
          "Kung pagbibigyan, papayag ba",
          "        C",
          "Kung pagbibigyan, papayag ba"
        ] },
        { label: "Chorus", lines: [
          "   C              G",
          "Sinta, kumusta ka na",
          "       C          G           Em         D            C",
          "Kung payagan ng kalangitan at tayo ay pagbibigyang muli",
          "                   G           Em         D",
          "Balik ba kung sa'n nagkamali o susugal sa mga tala?",
          " C              G             Em            D",
          "Alam ko nang ngayo'y 'di na kayang lumaban pa",
          "   C             G                 Em               D",
          "Sa susunod 'di pababayaan kung papayagan at pagbibigyan"
        ] },
        { label: "Post-Chorus", lines: [
          "C                      G",
          "(Kung papayagan at pagbibigyan)",
          "Em                      D",
          "  (Kung papayagan at pagbibigyan)",
          "",
          "   C             G                 C                D",
          "Sa susunod 'di pababayaan kung papayagan at pagbibigyan"
        ] }
      ]
    },

    {
      number: 6,
      title: "Tatlong Oras",
      artist: "Unknown",
      key: "B",
      sections: [
        { label: "Intro", lines: [
          "B C# E B"
        ] },
        { label: "Verse 1", lines: [
          "B                    F#",
          "Sa unang tingin ko pa lang",
          "G#m                  E",
          "Para bang itinutulak ng hangin",
          "              B         F#",
          "Mapang akit mong mga mata",
          "          B",
          "Ang syang nag dulot sa akin",
          "G#m          E",
          "Na maisipan kong lapitan ka",
          "     F#",
          "Ngayong nahagkan kita",
          "G#m",
          "Ohhhh",
          "          C#        E",
          "Di alam ang gagawin kung tatanggapin ba",
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
          "B          G#M - F      E",
          "Umaga na't ako'y gising pa rin",
          "                              B",
          "Sa kakatitig ko sayo ay lumalalim",
          "B              D#m                    E",
          "Aking nadarama pangako kong hindi mapapagal",
          "            F#",
          "Eh kaso lang nauutal Ohhhh",
          "        C#",
          "Di ko alam ang gagawin",
          "E              F#",
          "Maniniwala ba sakali mang ito'y aking aminin"
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
        { label: "Bridge", lines: [
          "    E                    B",
          "At kung balak mo'y ibaon na lang sa limot",
          "    E                    B",
          "Pwes 'wag kang magpadala sa takot",
          "    E                    B - C# - D# - E",
          "Aking mahal di naman ako nagbibiro",
          "    E              F#",
          "Kaya sana ay pakinggan mo"
        ] },
        { label: "Interlude (Solo)", lines: [
          "F# - G - G# - G - F# - C# - E - Em"
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
        { label: "Outro", lines: [
          "B C# E B"
        ] }
      ]
    },

    {
      number: 7,
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
      number: 8,
      title: "Tatsulok",
      artist: "Bamboo",
      key: "B",
      note: "Written in B minor per the source sheet; \"key\" is set to \"B\" (the root pitch class) so the on-screen key label keeps updating correctly as you transpose.",
      sections: [
        { label: "Intro", lines: [
          "Bm                Em"
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
          "Bm                         D5"
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
          "  G           A             F#m",
          "At ang hustisya ay para lang sa mayaman"
        ] },
        { label: "Chorus", lines: [
          "      Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G   A                  Bm",
          "Hindi matatapos itong gulo",
          "",
          "Bm                D5"
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
        { label: "Solo", lines: [
          "// 99% Sure",
          "Bm   F#m G Em G A F#m B Em F#m"
        ] },
        { label: "Pre-Chorus", lines: [
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
          "   Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          " G    A                 Bm",
          "Hindi matatapos itong gulo",
          " Bm                           F#m",
          "Habang may tatsulok at sila ang nasa tuktok",
          "",
          " G   A                  Bm",
          "Hindi matatapos itong gulo"
        ] },
        { label: "Outro", lines: [
          "Di matatapos itong gulo"
        ] }
      ]
    },

    {
      number: 9,
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
          "Nagtataka sa akin kaibigan, nag-aaral ang buong mundo",
          "         C D           G         C D   G",
          "Wala na ba tayong mga kabataan sa ating mga ulo",
          "      C D         G            C D         G",
          "Kung gusto mo kami sigawan bakit hindi nyo subukan",
          "    C D       G",
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
          "Hindi nila tayo mabibilang",
          "",
          "  C D     G",
          "di rin maikakahon",
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
        ] }
      ]
    },

    {
      number: 10,
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
    }
  ];

  return SONGS;
}));
