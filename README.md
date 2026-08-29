# akrasael.github.io

Personal website for Kevin Haagensen Strömberg, served by GitHub Pages from
`main`. Plain static HTML and CSS — no build step, no framework.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home — intentionally empty |
| `mathematics.html` | Mathematics — heading, pull quote, Mathematical Writing, How to Play Folklore |
| `blog.html` | Blog — index of posts |
| `blog/` | One HTML file per post |
| `files/` | PDFs linked from the pages, served directly |
| `styles.css` | Shared styles for both pages |
| `fonts/` | Lora, self-hosted; `OFL.txt` is its licence and must stay |
| `site.js` | The only JavaScript; usage counters and their provider configuration |
| `404.html` | Not-found page; absolute paths only |
| `.nojekyll` | Serve the files as-is, without Jekyll processing |
| `CLAUDE.md` | Working notes, including the typography rules to follow |

## Layout

Tabs sit at the top right of the page and span the full viewport width, with
no divider rule beneath. They are ordinary links between the two files, so
navigation works without JavaScript and both pages are deep-linkable. The
current page carries `class="tab is-active"` and `aria-current="page"`, which
draws the grey underline.

Page content sits in `.wrap`, a centred container capped at a width that keeps
lines inside a comfortable measure. A block that should run nearer the page
edge goes outside `.wrap` and uses the `--gutter` spacing instead — `.writing`
does this to sit left-aligned, set in from the left edge.

## Adding content

`index.html` has a marked comment block where Home content would go. Write
ordinary HTML: `<h2>` for section headings, `<p>` for paragraphs, `<ul>`/`<li>`
for lists, `<img src="...">` for images. The stylesheet already covers those.

Typography conventions are recorded in `CLAUDE.md` — the short version is
curly quotes, real dashes, one space between sentences, and no underlining for
emphasis.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
