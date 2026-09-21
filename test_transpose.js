// Run with: node test_transpose.js
var T = require('./transpose.js');

var failures = 0, count = 0;

function eq(actual, expected, label) {
  count++;
  if (actual !== expected) {
    failures++;
    console.log('FAIL: ' + label + '  got=' + JSON.stringify(actual) + '  want=' + JSON.stringify(expected));
  }
}

// --- transposeChordToken -------------------------------------------------
eq(T.transposeChordToken('C', 2, 'D'), 'D', 'C +2 -> D');
eq(T.transposeChordToken('G#m7', 1, 'A'), 'Am7', 'G#m7 +1 -> Am7');
eq(T.transposeChordToken('Cadd9', 2, 'D'), 'Dadd9', 'Cadd9 +2 preserves add9');
eq(T.transposeChordToken('Dsus2/A', 5, 'G'), 'Gsus2/D', 'slash chord transposes both parts');
eq(T.transposeChordToken('Bm7b5', 1, 'C'), 'Cm7b5', 'm7b5 quality preserved');
eq(T.transposeChordToken('D/F#', -2, 'C'), 'C/E', 'D/F# -2 -> C/E');
eq(T.transposeChordToken('N.C.', 3, 'F'), 'N.C.', 'N.C. passes through');
eq(T.transposeChordToken('x2', 3, 'F'), 'x2', 'x2 passes through');
eq(T.transposeChordToken('DM7', 2, 'E'), 'EM7', 'DM7 (alt maj7 spelling) preserved');

// flat vs sharp spelling follows target key
eq(T.transposeChordToken('C', 1, 'F'), 'Db', 'C +1 spelled flat in key of F');
eq(T.transposeChordToken('C', 1, 'D'), 'C#', 'C +1 spelled sharp in key of D');

// full circle: +12 semitones returns to the same spelling
eq(T.transposeChordToken('F#m7', 12, 'A'), 'F#m7', '+12 semitones is a no-op');

// --- classifyLine ----------------------------------------------------------
eq(T.classifyLine(''), 'blank', 'empty line is blank');
eq(T.classifyLine('   '), 'blank', 'whitespace-only line is blank');
eq(T.classifyLine('F Am7 G'), 'chord', 'bare chord line');
eq(T.classifyLine('D       C   G   D (x2)'), 'chord', 'chord line with (x2) annotation');
eq(T.classifyLine('G                    D (optional)'), 'chord', 'chord line with (optional) annotation');
eq(T.classifyLine('C - F - C - F'), 'chord', 'dash-separated chord line');
eq(T.classifyLine('(D)   A'), 'chord', 'parenthesized chord token');
eq(T.classifyLine("Hindi masabi ang nararamdaman"), 'lyric', 'plain lyric line');
eq(T.classifyLine("Baby let's cruise away from here"), 'lyric', "English lyric line with chord-like first letter isn't misclassified");

// --- transposeLine preserves spacing/annotations ---------------------------
eq(
  T.transposeLine('      F            Am7    G', 2, 'G'),
  '      G            Bm7    A',
  'transposeLine keeps original whitespace runs'
);
eq(
  T.transposeLine('D       C   G   D (x2)', 2, 'E'),
  'E       D   A   E (x2)',
  'transposeLine leaves (x2) alone'
);
eq(
  T.transposeLine('D (Dsus D) E G D (x2)', 2, 'E'),
  'E (Esus E) F# A E (x2)',
  'transposeLine transposes every chord inside a multi-chord paren group'
);
eq(
  T.transposeLine('A                             E (BREAK)                F#m', 2, 'B'),
  'B                             F# (BREAK)                G#m',
  'transposeLine leaves a non-chord annotation like (BREAK) untouched'
);
eq(
  T.transposeLine('G                    D (optional)', 2, 'A'),
  'A                    E (optional)',
  'transposeLine leaves (optional) alone, transposes chords'
);
eq(
  T.transposeLine('(D)   A', 2, 'E'),
  '(E)   B',
  'transposeLine transposes a parenthesized chord'
);
eq(
  T.transposeLine("Hindi masabi ang nararamdaman", 5, 'C'),
  "Hindi masabi ang nararamdaman",
  'transposeLine never touches lyric text'
);

// --- semitonesBetween / keyAfterShift --------------------------------------
eq(T.semitonesBetween('C', 'G'), -5, 'C->G shortest signed path is -5');
eq(T.keyAfterShift('C', 7, false), 'G', 'C shifted +7 spells as G');
eq(T.keyAfterShift('C', 1, true), 'Db', 'C shifted +1 with flats preference spells as Db');
eq(T.keyAfterShift('C', 1, false), 'C#', 'C shifted +1 with sharps preference spells as C#');

console.log(count + ' assertions, ' + failures + ' failed.');
if (failures > 0) process.exit(1);
