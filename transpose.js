/**
 * transpose.js — chord transposition engine for the September chord guides.
 *
 * Usable in the browser (exposes `window.ChordTranspose`) and in Node
 * (`module.exports`). No dependencies.
 *
 * Core ideas:
 *  - A "chord token" is a bare chord symbol like "G#m7", "Cadd9", "D/F#".
 *  - A "line" is a raw text line from a chord chart. It may be a pure chord
 *    line (e.g. "F Am7 G (x2)"), a chord line stacked above a lyric line, or
 *    plain lyric text. `classifyLine` tells you which.
 *  - Transposing a line only ever rewrites tokens that look like chords
 *    (or a chord wrapped in parentheses, e.g. "(D)"); every other character —
 *    including all whitespace — is left untouched. That's what keeps the
 *    chord-to-lyric column alignment stable: only token *text* changes, the
 *    surrounding spacing that lines chords up over syllables never moves.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ChordTranspose = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  var FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  var NOTE_BASE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

  // Keys that read as flats vs. sharps once you transpose into them.
  var SHARP_KEYS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#'];
  var FLAT_KEYS = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'];

  // The 12 pitch classes, in the spelling guitarists expect on a key picker.
  var KEY_LIST = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

  // A recognized chord-quality suffix. Longest/most specific alternatives
  // first so the regex engine doesn't stop early on a shorter partial match.
  var QUALITY =
    'maj13|maj11|maj9|maj7|maj|m7b5|m7#5|mM7|madd9|m6|m7|m9|m11|m13|m|' +
    'M7|M9|M|' +
    'sus2|sus4|sus|' +
    'add9|add11|add2|' +
    'dim7|dim|aug|' +
    '7sus4|7sus2|7b9|7#9|7b5|7#5|6\\/9|69|' +
    '9|11|13|7|6|5|2';

  // Root + optional accidental + optional quality + optional /bass.
  var CHORD_RE = new RegExp('^([A-G])(#|b)?(' + QUALITY + ')?(?:\\/([A-G])(#|b)?)?$');

  function noteIndex(letter, accidental) {
    var idx = NOTE_BASE[letter];
    if (accidental === '#') idx += 1;
    else if (accidental === 'b') idx -= 1;
    return ((idx % 12) + 12) % 12;
  }

  function usesFlats(key) {
    if (FLAT_KEYS.indexOf(key) !== -1) return true;
    if (SHARP_KEYS.indexOf(key) !== -1) return false;
    return false; // unknown key names default to sharp spelling
  }

  function spell(index, flats) {
    return flats ? FLAT_NAMES[index] : SHARP_NAMES[index];
  }

  function isChordToken(token) {
    return CHORD_RE.test(token);
  }

  // Tokens that are legitimately part of a "chord line" but aren't chords
  // themselves: repeat markers ("x2"), separators ("-"), "N.C." (no chord).
  function isChordyToken(token) {
    if (/^x\d+$/i.test(token)) return true;
    if (/^-+$/.test(token)) return true;
    if (/^N\.?C\.?$/i.test(token)) return true;
    return isChordToken(token);
  }

  /**
   * Classify a raw chart line as 'blank', 'chord' (a chord-only progression
   * line, or the chord row stacked above a lyric row), or 'lyric' (sung
   * text / prose — never touched by transposition).
   */
  function classifyLine(line) {
    var trimmed = line.trim();
    if (!trimmed) return 'blank';
    // Ignore parenthetical annotations ("(x2)", "(optional)", "(Riff 1)")
    // when deciding whether a line is "all chords".
    var stripped = trimmed.replace(/\([^)]*\)/g, ' ').trim();
    if (!stripped) return 'chord';
    var tokens = stripped.split(/\s+/);
    for (var i = 0; i < tokens.length; i++) {
      if (!isChordyToken(tokens[i])) return 'lyric';
    }
    return 'chord';
  }

  function transposeChordToken(token, semitones, targetKey) {
    var m = CHORD_RE.exec(token);
    if (!m) return token; // not a real chord (x2, -, N.C., ...): leave as-is
    var flats = usesFlats(targetKey);
    var rootIdx = noteIndex(m[1], m[2]);
    var newRootIdx = ((rootIdx + semitones) % 12 + 12) % 12;
    var out = spell(newRootIdx, flats) + (m[3] || '');
    if (m[4]) {
      var bassIdx = noteIndex(m[4], m[5]);
      var newBassIdx = ((bassIdx + semitones) % 12 + 12) % 12;
      out += '/' + spell(newBassIdx, flats);
    }
    return out;
  }

  // Matches either a "(...)" group or a run of non-whitespace characters.
  var TOKEN_OR_PAREN_RE = /\(([^)]*)\)|\S+/g;

  /**
   * Transpose every chord (bare or "(D)"-style parenthesized) in a raw
   * chart line by `semitones`, spelling the result for `targetKey`. All
   * other text — words, punctuation, "(x2)"-style annotations, and every
   * space — passes through completely unchanged.
   */
  function transposeLine(line, semitones, targetKey) {
    if (!semitones) {
      // Still worth re-spelling into the target key even with a 0-shift
      // jump (e.g. picking the same pitch class but the other enharmonic).
    }
    return line.replace(TOKEN_OR_PAREN_RE, function (whole, parenInner) {
      if (parenInner !== undefined) {
        // A parenthesized group can hold a single chord ("(D)"), several
        // ("(Dsus D)"), or a plain annotation ("(x2)", "(BREAK)", "(Riff 1)").
        // Transpose only the tokens inside that are actually chords; every
        // other word/number and all whitespace passes through untouched.
        var transposedInner = parenInner.replace(/\S+/g, function (tok) {
          return isChordToken(tok) ? transposeChordToken(tok, semitones, targetKey) : tok;
        });
        return '(' + transposedInner + ')';
      }
      if (isChordToken(whole)) {
        return transposeChordToken(whole, semitones, targetKey);
      }
      return whole;
    });
  }

  function keyIndex(key) {
    var m = /^([A-G])(#|b)?$/.exec(key);
    if (!m) return null;
    return noteIndex(m[1], m[2]);
  }

  /** Signed semitone shift (in [-6, 5]) from one key name to another. */
  function semitonesBetween(fromKey, toKey) {
    var a = keyIndex(fromKey), b = keyIndex(toKey);
    if (a === null || b === null) return 0;
    return ((b - a + 6) % 12 + 12) % 12 - 6;
  }

  /** Resulting key name after shifting `originalKey` by `semitones`, spelled per `preferFlats`. */
  function keyAfterShift(originalKey, semitones, preferFlats) {
    var idx = keyIndex(originalKey);
    if (idx === null) return originalKey;
    var newIdx = ((idx + semitones) % 12 + 12) % 12;
    return spell(newIdx, !!preferFlats);
  }

  return {
    SHARP_NAMES: SHARP_NAMES,
    FLAT_NAMES: FLAT_NAMES,
    SHARP_KEYS: SHARP_KEYS,
    FLAT_KEYS: FLAT_KEYS,
    KEY_LIST: KEY_LIST,
    usesFlats: usesFlats,
    isChordToken: isChordToken,
    isChordyToken: isChordyToken,
    classifyLine: classifyLine,
    transposeChordToken: transposeChordToken,
    transposeLine: transposeLine,
    keyIndex: keyIndex,
    semitonesBetween: semitonesBetween,
    keyAfterShift: keyAfterShift
  };
}));
