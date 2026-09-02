# akrasael.github.io

Personal website for Kevin Haagensen Strömberg, served by GitHub Pages from
`main`. Plain static HTML and CSS — no build step, no framework.

## Standing instruction: workflow

Do the whole job without asking for sign-off at each step. Commit to the
working branch, open the pull request, merge it, and confirm the GitHub Pages
deployment succeeded. Do not stop at "ready to merge" and wait — merging is
pre-authorised.

Still worth raising: anything genuinely destructive, or a decision where two
readings would produce materially different work.

## Standing instruction: typography

Follow the recommendations in Matthew Butterick's *Practical Typography*
(<https://practicaltypography.com/>) in everything produced for this repo.
The working rules:

**Text setting**
- Body text 15–25px on screen.
- Line spacing 120–145% of the text size. Do not exceed this — loose leading
  is a common default and it is wrong.
- Line length 45–90 characters. Constrain the measure explicitly; a full-width
  container will overshoot it badly on a wide display.
- Generous page margins. White space is not wasted space.

**Fonts**
- Use a real typeface, not a system default. Never Times New Roman or Arial
  as the intended font — only as the tail of a fallback stack.
- Keep the number of families small; this site uses one (Lora) with a serif
  fallback stack.
- Lora is served from `fonts/` in this repository, never from Google, so no
  third party sees who visits.
- The two files in `fonts/` are the unmodified variable webfonts from the
  Lora project's own release (github.com/cyrealtype/Lora-Cyrillic,
  `fonts/webfonts/`), kept under their upstream file names. Never subset,
  convert or rename them: a modified version may not carry the reserved
  font name "Lora" under the SIL OFL, and serving the Original Version is
  what keeps the site clear of that condition. To update, copy the new
  release's files and its `OFL.txt` over verbatim.
- Each file covers weights 400–700 upright or italic, so a new weight needs
  no new file. Italic must come from the italic file: without a real face the
  browser fakes it by slanting the roman, which is what italic looked like
  before the font was self-hosted.

**Punctuation and characters**
- Curly quotes and apostrophes (`&ldquo; &rdquo; &lsquo; &rsquo;`), never the
  straight typewriter forms.
- Em dash for a break in thought, en dash for ranges, hyphen only for
  compounds. Use the real characters.
- One space between sentences, never two.
- Use the real ellipsis character rather than three periods.

**Layout**
- Widow and orphan control: `text-wrap: pretty` on running text,
  `text-wrap: balance` on headings.
- Set block quotations apart by their own formatting.

**Emphasis and alignment**
- Never underline for emphasis — underlining means a link. Use bold or italic,
  and sparingly.
- Avoid long stretches of all caps; if used, add letterspacing.
- Do not combine a first-line indent with space between paragraphs. Pick one.
- Left-aligned by default. Centered text only for short display passages.
- Avoid justified text without hyphenation.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home — intentionally empty |
| `mathematics.html` | Mathematics — heading, pull quote, Mathematical Writing, How to Play Folklore |
| `blog.html` | Blog — index of posts |
| `blog/` | One HTML file per post |
| `files/` | PDFs linked from the pages, served directly |
| `styles.css` | Shared styles |
| `fonts/` | Lora, unmodified upstream variable webfonts; `OFL.txt` is its licence and must stay |
| `site.js` | The only JavaScript; usage counters and their provider configuration |
| `404.html` | Not-found page; absolute paths only |
| `.nojekyll` | Serve files as-is, without Jekyll |

## Layout conventions

- Tabs sit at the top right of the page, full viewport width, no divider rule
  beneath. The active tab carries `class="tab is-active"`, `aria-current="page"`
  and a grey underline.
- Page content sits in `.wrap` (centred, capped width). A block that should
  run to the page edge goes outside `.wrap` and uses `--gutter`.
- `.centered` centres a short display block. `.writing` is left-aligned and
  set in from the left page edge.
- A blog entry on `blog.html` is one `<article class="post-preview">`:
  a `.post-date` block in the left column, then `.post-body` holding the
  title, excerpt, a `.button` link and the `.post-meta` posted-at line.
  On narrow screens the date stacks above the title. Change the `<time>`
  `datetime` attribute whenever the visible date changes.
- `404.html` uses **absolute** local paths throughout (`/styles.css`,
  `/index.html`, …) and must keep doing so. GitHub Pages serves it for a
  missing URL at any depth, so a relative path resolves against the wrong base
  and the page arrives unstyled with broken navigation. Every other page uses
  relative paths as normal.
- `site.js` is the only JavaScript and it does one thing: count usage. Nothing
  on the site may depend on it — with scripting off, every page, link and
  download still works. Provider configuration lives only in its `CONFIG`
  block, never inline in a page. Click events are attached there by CSS
  selector, so links need no handlers or extra attributes.
- The download selector excludes `http` hrefs deliberately. The thesis link is
  both external and a `.pdf`; without that exclusion one click would be counted
  twice, as a download and as an outbound click.
- Every page carries the same three tabs. A post inside `blog/` is one
  directory down, so its nav hrefs and its stylesheet link need a `../`
  prefix; pages at the root do not.

## Local preview

```sh
python3 -m http.server 8000
```
