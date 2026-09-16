# PRD — Personal Portfolio

## 1. Purpose

A simple, single-page personal portfolio. It introduces who I am, gives a brief look at my career, and then spends most of its weight on a curated selection of case studies. It is not an agency site — it should feel like one person's work, shown well.

## 2. Goals

- Visitor understands in a few seconds who I am and what I do.
- Visitor gets a quick sense of my career path without reading a full resume.
- Visitor spends most of their time browsing the featured cases — that's the actual portfolio.
- Reuse what's already built (the recreated Marte-style case pages) instead of rebuilding content from scratch.

## 3. Non-goals

- Not a multi-service agency site (no Tech/Services/Knowledge/Blog pages).
- Not a blog or CMS.
- Not showing all 15 previously-built cases — only a curated subset (see §5.3).
- No lead-generation contact form (name/company/phone/message) — that pattern belongs to Marte as a studio, not to an individual portfolio. A simple way to reach out is enough (see §5.4).

## 4. Audience

People evaluating my work: potential employers, clients, or collaborators. They're scanning, not reading — content should be skimmable, cases should do the talking.

## 5. Scope — Page Structure

Single page (`index.html`), four sections, top to bottom:

### 5.1 Intro / Hero
- Name, role/title, one-line positioning statement.
- Short intro paragraph.
- **Content status: placeholder.** Use lorem ipsum until real copy is provided.

  > *Lorem ipsum dolor sit amet, consectetur adipiscing elit. [Name] — [Role]. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*

### 5.2 Career (brief)
- A short overview of career path — not a full resume. Could be a couple of sentences or a compact timeline (2–4 milestones max), whichever reads faster.
- **Content status: placeholder.** Use lorem ipsum until real copy is provided.

  > *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.*

### 5.3 Cases (main focus)
Grid of 8 selected cases, reusing the card component and detail pages already built in `/cases/`:

| Case | Existing detail page |
|---|---|
| Mamboo® SuperApp | `cases/mamboo-superapp.html` |
| Loog | `cases/loog.html` |
| Rede D'Or Surgical Workflow | `cases/fluxo-cirurgico.html` |
| Saúde Leve | `cases/saude-leve.html` |
| Using design to fight the pandemic | `cases/design-no-combate-a-pandemia.html` |
| The remote revolution in medical systems | `cases/a-revolucao-remota-nos-sistemas-medicos.html` |
| People & Management | `cases/gente-gestao.html` |
| Stone Sketching Workshops | `cases/stone-sketching-workshops.html` |

No rebuild needed for the detail pages themselves — they already exist and work. The only change needed is filtering the grid on the home page down to these 8 (from the current 15) and pointing "back to cases" links on each detail page at the new home page instead of the old 15-item list.

### 5.4 Contact (lightweight)
Minimal — a way to reach out, not a form. E.g. an email link (`mailto:`) and/or social links. Exact content TBD with real bio.

## 6. Visual & Technical Direction

- **Aesthetic:** reuse the Marte look — same typefaces (Varela + Typekit objektiv-mk fonts), same spacing/scale system, same card and typography styles already in `css/marte.css`. Visual continuity with the case pages matters more than a redesign.
- **Navigation:** simplify. The current recreated nav (Home / Tech / Services / Case studies / Knowledge / Blog / About dropdown / Get in touch) is an agency's full site nav — it doesn't fit a single-page personal portfolio. Replace with simple in-page anchors: Intro · Career · Cases · Contact.
- **Structure:** one `index.html` at the project root (replacing the current 15-case listing as the site's new home page), plus the existing `cases/*.html` detail pages, filtered to the 8 above.
- **Assets:** keep hotlinking the existing Webflow-hosted CDN images used by the 8 chosen cases (already working) — no need to re-host.

## 7. Open Items (blocking before build)

- [ ] Real bio/intro copy (name, title, positioning line, short paragraph)
- [ ] Real career summary or timeline content
- [ ] Contact method to display (email address, socials, or both)
- [ ] Any personal photo/portrait for the intro section (optional)
- [ ] Confirm order of the 8 cases in the grid (default: as listed in §5.3)

## 8. Success Criteria

- Loads as a single, fast, simple page.
- A first-time visitor can state who I am and what I do within 10 seconds of landing.
- All 8 featured case cards link to fully working, already-built detail pages.
- Nothing on the page reads as "agency" — it reads as one person's portfolio.
