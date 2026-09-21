# September 25 Songs — Chord Guide

Chord charts for the "September 25 Songs" jam session, with a key-transpose toolbar built for guitar.

## Guide

- **`chord_guide_september_25.html`** / **`chord-guide-september-25.md`** — 10-song setlist (see `songs-data-september-25.js` for the source data)

## Setlist

1. Madonna Medley (Like a Prayer / Like a Virgin / Material Girl)
2. September — Earth, Wind & Fire
3. Awitin Mo, Isasayaw Ko — VST & Company
4. Beautiful Sunday — Daniel Boone
5. Salamin, Salamin — BINI
6. Dahil Mahal Kita
7. Tuloy Pa Rin — Neocolours
8. Pangako — Cueshé
9. Makita Kang Muli — Sugarfree
10. Ang Huling El Bimbo — Eraserheads

## How it works

- **`songs-data-september-25.js`** is the single source of truth: each song's chords and lyrics, grouped into labeled sections.
- **`transpose.js`** is the transposition engine (works in the browser and in Node). It rewrites chord roots, slash-bass notes, and extensions (`maj7`, `add9`, `sus4`, `m7b5`, ...) while leaving lyrics, section labels, and spacing untouched. Sharp/flat spelling follows the target key's own convention.
- **`build-markdown-september-25.js`** renders `songs-data-september-25.js` into `chord-guide-september-25.md`.
- **`test_transpose.js`** is the engine's test suite — run with `node test_transpose.js`.

## Source material

Chord sheets are in `September 25 Chords/` (Ultimate-Guitar-style `.docx` files); the Madonna Medley is arranged from `September 25 Chords/files/MADONNA MEDLEY.docx`, cross-checked against the three individual Madonna sheets in that folder.

## Opening the guide

The HTML page loads its data via `<script src="...">`, so open it through a local server rather than `file://` directly, e.g.:

```
python -m http.server 8000
```

then visit `http://localhost:8000/chord_guide_september_25.html`.
