# September 25 Songs — Chord Guide

Chord charts for the September 25 jam sessions, with a key-transpose toolbar built for guitar. Two independent setlists live side by side in this repo, sharing the same engine (`transpose.js`).

## Guides

- **`chord_guide_september_25.html`** / **`chord-guide-september-25.md`** — "September 25 Songs", a 10-song setlist (see `songs-data-september-25.js` for the source data)
- **`chord_guide_set_2_sep_25.html`** / **`chord-guide-set-2-sep-25.md`** — "SET 2 SEP 25", a second 10-song setlist (see `songs-data-set-2-sep-25.js` for the source data)

## Setlist — September 25 Songs

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

## Setlist — SET 2 SEP 25

1. Freestyle Medley (When I Met You / Bakit Ba Ganyan / Think I'm Inlove) — Freestyle
2. You Are My Religion — FireHouse
3. This Love — Maroon 5
4. Tadhana — Up Dharma Down
5. Kung Payagan — Cup of Joe
6. Tatlong Oras
7. Maling Akala — Brownman Revival
8. Tatsulok — Bamboo
9. Awit ng Kabataan — Rivermaya
10. Gi Kumot-Kumot — The Ambassadors

## How it works

- **`songs-data-september-25.js`** / **`songs-data-set-2-sep-25.js`** are each setlist's single source of truth: every song's chords and lyrics, grouped into labeled sections.
- **`transpose.js`** is the transposition engine (works in the browser and in Node), shared by both guides. It rewrites chord roots, slash-bass notes, and extensions (`maj7`, `add9`, `sus4`, `m7b5`, ...) while leaving lyrics, section labels, and spacing untouched. Sharp/flat spelling follows the target key's own convention.
- **`build-markdown-september-25.js`** / **`build-markdown-set-2-sep-25.js`** render each setlist's data file into its matching `.md` chart.
- **`test_transpose.js`** is the engine's test suite — run with `node test_transpose.js`.

## Source material

Chord sheets for both setlists are transcribed from the Ultimate-Guitar-style `.docx` sheets in `September 25 Chords/`, in the Busking-September project (`D:\PERSONAL\Personal Projects\SEPTEMBER\September 25 Chords\`) — that folder isn't part of this repo, only the transcribed data is.

- September 25 Songs: the Madonna Medley is arranged from `files/MADONNA MEDLEY.docx`, cross-checked against the three individual Madonna sheets in that folder.
- SET 2 SEP 25: the Freestyle Medley is arranged from `Opm_Medley_Chords_by_Freestyle_Philippines.docx`.

## Opening the guides

The HTML pages load their data via `<script src="...">`, so open them through a local server rather than `file://` directly, e.g.:

```
python -m http.server 8000
```

then visit `http://localhost:8000/chord_guide_september_25.html` or `http://localhost:8000/chord_guide_set_2_sep_25.html`.
