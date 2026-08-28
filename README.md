# akrasael.github.io

Personal website for Kevin Haagensen Strömberg, served by GitHub Pages.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home page |
| `mathematics.html` | Mathematics page |
| `styles.css` | Shared styles for both pages |
| `.nojekyll` | Serve the files as-is, without Jekyll processing |

## Adding content

Each page has a marked comment block in `<main>`:

```html
<!-- ==========================================================
     Add the Home page content below this line.
     ========================================================== -->
```

Write ordinary HTML underneath it — `<h2>` for section headings, `<p>` for
paragraphs, `<ul>`/`<li>` for lists, `<img src="...">` for images. The
stylesheet already covers those.

## Navigation

The two tabs are plain links between the two files. The current page carries
`class="tab is-active"` and `aria-current="page"`; the other tab has neither.
When adding a page, copy an existing file, add a `<a class="tab">` entry to the
`<nav>` of every page, and set the active tab on the new one.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publishing

GitHub Pages serves the default branch from the repository root. Once this is
merged into the default branch the site is live at
<https://akrasael.github.io/>.
