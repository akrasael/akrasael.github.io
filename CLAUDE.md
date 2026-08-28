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
| `mathematics.html` | Mathematics — heading, pull quote, Mathematical Writing |
| `styles.css` | Shared styles |
| `.nojekyll` | Serve files as-is, without Jekyll |

## Layout conventions

- Tabs sit at the top right of the page, full viewport width, no divider rule
  beneath. The active tab carries `class="tab is-active"`, `aria-current="page"`
  and a grey underline.
- Page content sits in `.wrap` (centred, capped width). A block that should
  run to the page edge goes outside `.wrap` and uses `--gutter`.
- `.centered` centres a short display block. `.writing` is left-aligned and
  set in from the left page edge.

## Local preview

```sh
python3 -m http.server 8000
```
