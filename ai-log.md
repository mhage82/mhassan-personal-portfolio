## Initial AI Prompt

You are assisting with a small, public static portfolio website.

Project context:
- Purpose: present a student's skills and projects to internship reviewers.
- Existing system: an HTML/CSS/JavaScript portfolio template.
- Allowed changes: content, styling, and small front-end corrections only.
- Do not add: a backend, login system, analytics tracker, or external data collection.

Acceptance criteria:
1. The landing page displays my name and professional role as a Senior Embedded Software Engineer.
2. The About section accurately summarizes my embedded software, simulation, virtualization, and hardware-emulation experience.
3. The Resume section displays my professional experience, education, and technical skills without retaining template placeholder content.
4. The Portfolio section contains at least two relevant technical projects or areas of work with a title and description.
5. The website navigation works correctly and the site remains readable and usable on both desktop and narrow mobile screens.
6. Include a mention of my personal website www.thinkandinvent.com which has some personal projects and experiments I have done,

Constraints:
- Do not invent education, work history, awards, links, or technical skills that I do not have.
- Preserve required license and attribution.
- Keep the site usable on mobile screens.
- Maintain readable contrast, keyboard navigation, meaningful link text, and useful image alternative text.
- Do not expose private information.

First provide:
1. A file-by-file implementation plan.
2. Any assumptions or risks.
3. A proposed test checklist.
4. Any questions that must be answered before implementation.

Do not modify files until the plan is reviewed.

## Initial AI Reply
# Portfolio Website Implementation Plan

## 1. File-by-file implementation plan

Because the repository contents have not been provided, these filenames are provisional and should be mapped to the template’s actual structure after inspection.

### `index.html` or primary page file

- Update the landing or hero section to display:
  - Your preferred public name.
  - The exact role: **Senior Embedded Software Engineer**.
- Rewrite the About section using only verified information you provide about:
  - Embedded software.
  - Simulation.
  - Virtualization.
  - Hardware emulation.
- Replace all résumé template placeholders with verified:
  - Professional experience.
  - Education.
  - Technical skills.
- Add at least two Portfolio entries, each containing:
  - A descriptive title.
  - A concise description of your work or technical focus.
  - Technologies only when confirmed.
  - An image with useful alternative text, if an image is retained.
- Add a clearly labeled link to:
  - [Personal projects and experiments at Think and Invent](https://www.thinkandinvent.com/)
- Review navigation targets, section IDs, heading order, link wording, and keyboard usability.
- Remove unused template content without removing required license or attribution text.
- Check that no private contact details or other private information are exposed.

### Main stylesheet, such as `assets/css/style.css`

- Adapt typography, spacing, and section layout to the revised content.
- Preserve or improve readable foreground and background contrast.
- Ensure visible keyboard focus indicators.
- Verify responsive behavior at narrow mobile widths.
- Prevent long titles, URLs, résumé details, and navigation labels from overflowing.
- Retain reduced-motion and other accessibility behavior if already present; add a small correction only if needed.
- Avoid a broad redesign unless the existing styles cannot satisfy the acceptance criteria.

### Main script, such as `assets/js/main.js`

- Verify navigation links scroll to or open the intended sections.
- Check mobile-navigation opening, closing, focus behavior, and keyboard operation.
- Correct only small front-end issues.
- Preserve unrelated template functionality.
- Do not add analytics, tracking, data collection, external form handling, authentication, or backend calls.

### Image and media assets, such as `assets/img/`

- Reuse suitable existing assets where appropriate.
- Replace irrelevant placeholder images only with assets you supply or authorize.
- Remove broken references to deleted placeholders.
- Provide meaningful HTML alternative text for informative images and empty alternative text for purely decorative images.
- Avoid publishing private information embedded in screenshots or image metadata.

### Supporting pages or partials, if present

Examples might include `about.html`, `resume.html`, `portfolio.html`, or reusable navigation and footer files.

- Apply the same verified content and accessibility standards.
- Keep navigation and wording consistent across pages.
- Remove placeholder material.
- Preserve required legal, license, and attribution content.

### License and documentation files

Examples might include `LICENSE`, `README.md`, or attribution comments.

- Preserve required license and attribution.
- Update documentation only if it contains inaccurate setup or content references.
- Do not remove copyright notices unless the applicable license explicitly permits it.

### Optional static metadata, if already present

Examples might include the HTML `<title>`, meta description, Open Graph tags, or a manifest.

- Replace template metadata with an accurate portfolio title and description.
- Do not invent social profiles, résumé links, or preview images.
- Do not add tracking or external data collection.

## 2. Assumptions and risks

### Assumptions

- This is a static HTML, CSS, and JavaScript site.
- The requested name, résumé information, projects, and technical skills will be supplied from an authoritative source.
- `https://www.thinkandinvent.com/` is the intended public URL.
- Existing template licensing permits content and styling modifications.
- No contact form needs to submit data. If one exists, it will either remain non-submitting, be removed, or use only an already approved behavior.

### Risks

- **Insufficient source content:** The requested résumé and portfolio sections cannot be completed accurately without verified professional, educational, skills, and project details.
- **Privacy exposure:** Existing template files, résumé PDFs, image metadata, comments, or contact sections may contain personal information that should not be published.
- **License requirements:** Attribution may be embedded in the footer, comments, documentation, or third-party asset files and must not be removed accidentally.
- **Template dependencies:** Navigation or animation code may rely on specific class names and section IDs; changing markup could break behavior.
- **Mobile layout:** Longer résumé entries or project descriptions may expose overflow and spacing defects not visible with placeholder text.
- **Accessibility gaps:** Existing controls may lack focus styles, semantic labels, sufficient contrast, or keyboard support.
- **Unverified website content:** The personal website should be linked, but its projects should not automatically be copied or characterized without confirmation.
- **Broken or misleading links:** Template demonstration links and social profiles may need removal if no verified replacements exist.

## 3. Proposed test checklist

### Content

- [ ] Landing page shows the correct public name.
- [ ] Landing page shows **Senior Embedded Software Engineer**.
- [ ] About section accurately covers embedded software, simulation, virtualization, and hardware emulation.
- [ ] Résumé contains verified professional experience.
- [ ] Résumé contains verified education.
- [ ] Résumé contains verified technical skills.
- [ ] No “Lorem ipsum,” sample names, demonstration companies, stock résumé entries, or other placeholders remain.
- [ ] Portfolio contains at least two relevant entries with titles and descriptions.
- [ ] Think and Invent is mentioned with meaningful link text.
- [ ] No invented claims, dates, degrees, employers, projects, awards, technologies, or links appear.
- [ ] No private information is exposed.

### Navigation and behavior

- [ ] Every navigation link reaches the correct section or page.
- [ ] The current-section state, if present, updates correctly.
- [ ] Mobile navigation opens and closes correctly.
- [ ] Mobile navigation can be operated by keyboard.
- [ ] The Escape key closes the menu if the template supports a dialog-style menu.
- [ ] There are no unintended broken links or JavaScript console errors.
- [ ] External links behave consistently and safely.

### Responsive layout

Test representative widths such as 320, 375, 768, 1024, and 1440 pixels.

- [ ] No horizontal scrolling at narrow widths.
- [ ] Navigation remains usable.
- [ ] Text does not overlap or become clipped.
- [ ] Project cards and résumé entries stack appropriately.
- [ ] Images scale without distortion.
- [ ] Tap targets are comfortably usable.
- [ ] The site remains readable at 200% browser zoom.

### Accessibility

- [ ] The page has a descriptive title.
- [ ] Heading levels form a logical hierarchy.
- [ ] All controls and links are reachable using only the keyboard.
- [ ] Keyboard focus is clearly visible.
- [ ] Text and interactive elements have sufficient contrast.
- [ ] Links use meaningful text rather than vague labels such as “click here.”
- [ ] Informative images have useful alternative text.
- [ ] Decorative images use empty alternative text.
- [ ] Navigation controls have accessible names and correct state attributes.
- [ ] Content remains understandable without animation.
- [ ] Motion respects `prefers-reduced-motion` where applicable.

### Technical and compliance

- [ ] HTML validates without material errors.
- [ ] CSS and JavaScript load successfully.
- [ ] There are no missing local assets or HTTP 404 errors.
- [ ] Required license and attribution remain intact.
- [ ] No backend, login, analytics, tracking pixel, or new data-collection mechanism has been added.
- [ ] No secrets, private files, source maps containing sensitive content, or credentials are published.
- [ ] The site works with JavaScript disabled where core static content permits.
- [ ] Changes are limited to content, styling, and small front-end corrections.

### Browser checks

- [ ] Current Chrome or Chromium-based browser.
- [ ] Current Firefox.
- [ ] Current Safari, when available.
- [ ] At least one mobile browser or mobile-device emulation.

## 4. Questions that must be answered before implementation

Please provide the repository or files and one authoritative content source covering the following.

### Public identity

- Exact name to display.
- Optional public location and contact details, if any.
- Whether a photograph should be used.

### About content

- A short biography or factual bullet points.
- Specific experience you want mentioned under embedded software, simulation, virtualization, and hardware emulation.

### Professional experience

For each position, provide:

- Employer or organization.
- Job title.
- Start and end dates, or an approved less-specific date format.
- Location, if public.
- Responsibilities and accomplishments that may be published.

### Education

For each credential, provide:

- Institution.
- Degree or credential.
- Field of study.
- Graduation date or attendance period, if public.

### Technical skills

Provide confirmed:

- Programming languages.
- Platforms.
- Operating systems.
- Tools.
- Protocols.
- Hardware.
- Engineering methods.

### Portfolio entries

Provide at least two approved projects or areas of work, including:

- Title and description.
- Technologies used.
- Whether the work may be discussed publicly.
- Approved links and images, if any.

### Template and publication constraints

Provide:

- The project files or repository.
- Deployment target, if relevant to relative paths or build behavior.
- Any existing résumé PDF that should be retained or replaced.
- Any attribution text or third-party asset licenses that are known to be mandatory.

---

No files should be modified until this plan and the supplied content are reviewed.

## AI prompt to build the index.html with my info:
Here is my content-notes.md file:
and here is the index.html file :
adapt the index.html to have my information from the content-notes.md

## Reply
I adapted the full index.html using the information in your content-notes.md and without inventing additional professional information.

The original template still contained Richard Hanrick's identity, fictional contact information, design-focused About content, testimonials, clients, fictional education/experience, sample web projects, a Blog, and a Sacramento contact page. I replaced/removed those as appropriate while preserving the template's overall HTML/CSS/JS structure.

The personalized version includes your:

Mohammad Hassan / Senior Embedded Software Engineer identity
Embedded software and hardware-emulation About section
Edge AI master's-study information
Professional focus areas
U-M Flint, CMU, and U-M Dearborn education
GM, Ford, and ZF experience
Programming, OS, virtualization, interfaces, and development-tool skills
Four portfolio areas from content-notes.md
About / Resume / Portfolio navigation
Removal of fictional testimonials, clients, Blog, Contact, social links, and private/template contact information

Download the personalized index.html

Rename it to index.html when placing it into your repository.

However, for your assignment, I would not commit this entire file as one commit. This represents essentially the complete personalization and would undermine the professor's requirement to implement the AI changes incrementally with at least three meaningful commits. The original template has clearly separable Resume and Portfolio sections, for example.

I recommend we use this as the AI-generated target implementation, but apply it to your branch in three increments:

Commit 1: identity, navigation, About, and removal of unrelated template sections.

Commit 2: education, professional experience, and skills.

Commit 3: portfolio projects, followed by responsive/accessibility corrections discovered during testing.

That will demonstrate exactly what the assignment asks for: AI-generated implementation that you control, inspect, test, and commit incrementally, rather than one large AI rewrite. 


## AI prompt for projects and experience content
add projects and experience content.
Use content-notes.md as the source of truth for all professional information.Do not invent, infer, or add information that is not supported by content-notes.md.
For this increment:

Update the Resume section:

Replace all template education entries with the education listed in content-notes.md.
Replace all template professional experience with the experience listed in content-notes.md.
Replace the template web-design skills with my actual technical skills from content-notes.md.
Do not assign percentage proficiency values to my skills because content-notes.md does not provide them.


Update the Portfolio section:

Remove the existing fictional/template projects.
Add the four portfolio project/technical areas listed in content-notes.md:
Virtual Hardware and CI/CD
Hardware Emulation
Embedded Software Development
AI/ML and Emulation


Use only the descriptions and technologies supported by content-notes.md.
Do not invent project URLs, employers, dates, accomplishments, or technologies.
Remove or simplify template project filters if the existing categories no longer accurately describe the new portfolio entries.


Preserve the existing visual structure and styling as much as possible.

Do not make unrelated CSS or JavaScript changes in this increment.

Do not modify the license or attribution.

## Reply
The latest index.html already contains the requested résumé and portfolio structure. However, a few phrases go beyond or paraphrase content-notes.md. To keep that file strictly authoritative, replace the existing Resume and Portfolio articles with the following markup.
      <!-- Resume -->
      <article class="resume" data-page="resume">

        <header>
          <h2 class="h2 article-title">Resume</h2>
        </header>

        <!-- Professional Experience -->
        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="briefcase-outline" aria-hidden="true"></ion-icon>
            </div>

            <h3 class="h3">Professional Experience</h3>
          </div>

          <ol class="timeline-list">

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">
                Hardware Emulation Integration Lead
              </h4>

              <span>General Motors</span>

              <div class="timeline-text">
                <ul>
                  <li>Designed and deployed emulated hardware models.</li>
                  <li>Integrated emulated hardware into CI/CD pipelines.</li>
                  <li>Created SystemC models for sensor emulation.</li>
                  <li>
                    Worked on AI/ML-based optimization of QEMU-based
                    emulation.
                  </li>
                  <li>
                    Developed practices and training for adoption of hardware
                    emulation.
                  </li>
                </ul>
              </div>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">
                Embedded Software Engineer
              </h4>

              <span>Ford Motor Company</span>

              <div class="timeline-text">
                <ul>
                  <li>Developed and supported virtual hardware platforms.</li>
                  <li>
                    Created Python libraries for virtual hardware development.
                  </li>
                  <li>
                    Developed engine-control software using C and Simulink.
                  </li>
                  <li>
                    Worked with requirements, debugging, simulation, and
                    regression testing.
                  </li>
                </ul>
              </div>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">
                Embedded Software Engineer
              </h4>

              <span>ZF Steering Systems</span>

              <div class="timeline-text">
                <ul>
                  <li>Developed ISO 26262 safety-critical requirements.</li>
                  <li>
                    Developed steering-system control software using C and
                    Simulink.
                  </li>
                  <li>
                    Developed CAN-based hardware simulations and HIL tests.
                  </li>
                </ul>
              </div>

            </li>

          </ol>

        </section>

        <!-- Education -->
        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline" aria-hidden="true"></ion-icon>
            </div>

            <h3 class="h3">Education</h3>
          </div>

          <ol class="timeline-list">

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">
                University of Michigan-Flint
              </h4>

              <span>Pursuing a Master's Degree in AI</span>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">
                Central Michigan University
              </h4>

              <span>Master's in Engineering Management</span>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">
                University of Michigan-Dearborn
              </h4>

              <span>
                Bachelor of Science in Electrical and Computer Engineering
              </span>

            </li>

          </ol>

        </section>

        <!-- Technical Skills -->
        <section class="skill">

          <h3 class="h3 skills-title">Technical Skills</h3>

          <ul class="skills-list content-card">

            <li class="skills-item">
              <div class="title-wrapper">
                <h4 class="h5">Programming</h4>
              </div>

              <p class="timeline-text">
                C, C++, Python, SystemC, C#
              </p>
            </li>

            <li class="skills-item">
              <div class="title-wrapper">
                <h4 class="h5">Operating Systems</h4>
              </div>

              <p class="timeline-text">
                Linux, Yocto, Ubuntu, QNX, WinCE
              </p>
            </li>

            <li class="skills-item">
              <div class="title-wrapper">
                <h4 class="h5">Virtualization and Simulation</h4>
              </div>

              <p class="timeline-text">
                Synopsys Virtualizer, ASTC VLAB, QEMU, hardware emulation,
                virtual hardware CI/CD
              </p>
            </li>

            <li class="skills-item">
              <div class="title-wrapper">
                <h4 class="h5">Interfaces and Networking</h4>
              </div>

              <p class="timeline-text">
                CAN, SPI, I2C, PCIe, TCP/IP
              </p>
            </li>

            <li class="skills-item">
              <div class="title-wrapper">
                <h4 class="h5">Development Tools</h4>
              </div>

              <p class="timeline-text">
                Git, Azure DevOps, Jenkins, CANoe, MATLAB/Simulink
              </p>
            </li>

          </ul>

        </section>

      </article>

      <!-- Portfolio -->
      <article class="portfolio" data-page="portfolio">

        <header>
          <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <section class="projects">

          <ul class="project-list">

            <li class="project-item active">

              <div class="content-card">

                <h3 class="project-title">
                  Virtual Hardware and CI/CD
                </h3>

                <p class="timeline-text">
                  Virtual hardware and simulation environments for embedded
                  software development and automated testing where hardware
                  emulation is run on custom GitHub runners to execute
                  functional testing scripts.
                </p>

              </div>

            </li>

            <li class="project-item active">

              <div class="content-card">

                <h3 class="project-title">
                  Hardware Emulation
                </h3>

                <p class="timeline-text">
                  SystemC and other emulation technologies used to replace or
                  supplement physical hardware during software development.
                </p>

              </div>

            </li>

            <li class="project-item active">

              <div class="content-card">

                <h3 class="project-title">
                  Embedded Software Development
                </h3>

                <p class="timeline-text">
                  Embedded C/C++, low-level drivers, automotive communication,
                  and embedded operating systems.
                </p>

              </div>

            </li>

            <li class="project-item active">

              <div class="content-card">

                <h3 class="project-title">
                  AI/ML and Emulation
                </h3>

                <p class="timeline-text">
                  Experiments involving AI/ML techniques applied to
                  embedded-system simulation and emulation performance.
                </p>

              </div>

            </li>

          </ul>

        </section>

      </article>
This version:

Uses the experience, education, skills, and project wording from content-notes.md.
Adds no employment or education dates because none were provided.
Uses no proficiency percentages.
Removes project URLs, images, and filters.
Preserves the template’s main classes and navigation hooks.
Requires no CSS or JavaScript changes.

## Unclicakble links prompt
resume and portfolio are not clicking
## Reply
The HTML labels appear correct, so the issue is likely in `assets/js/script.js`. Replace that file with the following minimal navigation code:

```js
"use strict";

/**
 * Add or remove a class from an element.
 */
const elementToggleFunc = function (element) {
  element.classList.toggle("active");
};

/**
 * Sidebar toggle
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarButton) {
  sidebarButton.addEventListener("click", function () {
    elementToggleFunc(sidebar);

    const isExpanded = sidebar.classList.contains("active");
    sidebarButton.setAttribute("aria-expanded", String(isExpanded));

    const buttonText = sidebarButton.querySelector("span");

    if (buttonText) {
      buttonText.textContent = isExpanded ? "Hide Links" : "Show Links";
    }
  });
}

/**
 * Page navigation
 *
 * Navigation labels must correspond to article data-page values:
 * About     -> data-page="about"
 * Resume    -> data-page="resume"
 * Portfolio -> data-page="portfolio"
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(function (navigationLink) {
  navigationLink.addEventListener("click", function () {
    const selectedPage = navigationLink.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      const isSelectedPage = page.dataset.page === selectedPage;
      page.classList.toggle("active", isSelectedPage);
    });

    navigationLinks.forEach(function (link) {
      const isSelectedLink =
        link.textContent.trim().toLowerCase() === selectedPage;

      link.classList.toggle("active", isSelectedLink);

      if (isSelectedLink) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
```

Also verify these exact attributes remain in `index.html`:

```html
<button class="navbar-link active" type="button" data-nav-link>
  About
</button>

<button class="navbar-link" type="button" data-nav-link>
  Resume
</button>

<button class="navbar-link" type="button" data-nav-link>
  Portfolio
</button>
```

The corresponding articles must be:

```html
<article class="about active" data-page="about">
  ...
</article>

<article class="resume" data-page="resume">
  ...
</article>

<article class="portfolio" data-page="portfolio">
  ...
</article>
```

Only About should initially have the `active` class. Do not add `active` to the Resume or Portfolio `<article>` elements.

If the browser still uses the old script after saving, perform a hard refresh:

- Windows/Linux: `Ctrl + Shift + R`
- macOS: `Command + Shift + R`

This change fixes navigation without requiring CSS changes.

## Prompt: identify improvements for a better responsive layout and accessibility
## This gave me many chanegs that makes the webpage works better for a phone but it ruined it 
## for a laptop screen so I prompted again
## when i added these before, it ruined the page making everythign too tiny in a laptop screen , do not add support for phone
## Reply
Understood. Do **not** add the previous mobile overrides. Your original CSS already includes mobile-first rules, and the added responsive block conflicted with its desktop layout.

The laptop issue in the screenshot comes mainly from:

- The portfolio changing to **three narrow columns** at 1024 pixels.
- The sidebar/content layout activating at 1250 pixels while using restrictive widths.
- Portfolio text cards inheriting image-oriented spacing.
- Potential JavaScript accidentally appended to `style.css`.

## 1. Keep CSS and JavaScript separate

Your pasted CSS ends with JavaScript starting here:

```js
"use strict";
```

If that code is actually in `style.css`, remove it and place it only in:

```text
assets/js/script.js
```

Your CSS file must end after a valid CSS closing brace.

## 2. Add laptop-only corrections

Add this block at the **very end of `assets/css/style.css`**, before any accidentally included JavaScript.

These changes affect only screens at least 1024 pixels wide. They do not add or change phone support.

```css
/*-----------------------------------*\
  #LAPTOP AND DESKTOP CORRECTIONS
\*-----------------------------------*/

@media (min-width: 1024px) {

  /*
   * Give the primary content a useful laptop width instead of relying
   * on width: max-content.
   */
  .main-content {
    width: min(950px, calc(100vw - 48px));
    max-width: 950px;
  }

  article {
    width: 100%;
  }

  /*
   * Text-only portfolio cards need more horizontal room.
   * Override the template's three-column laptop grid.
   */
  .project-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
  }

  .project-item,
  .project-item .content-card {
    min-width: 0;
    width: 100%;
  }

  .project-item .content-card {
    height: 100%;
    padding: 25px;
    cursor: default;
  }

  .project-item .project-title {
    margin-left: 0;
    margin-bottom: 12px;
  }

  .project-item .timeline-text,
  .project-item .project-title {
    overflow-wrap: normal;
    word-break: normal;
    hyphens: none;
  }
}

/*
 * Use the side-by-side layout only when there is sufficient room
 * for both the sidebar and content.
 */
@media (min-width: 1250px) {

  main {
    width: min(1200px, calc(100vw - 48px));
    max-width: 1200px;
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    align-items: start;
    gap: 25px;
  }

  .sidebar {
    width: 100%;
    min-width: 0;
  }

  .main-content {
    width: 100%;
    max-width: none;
    min-width: 0;
  }

  article {
    width: 100%;
    max-width: none;
  }

  .info-content .name {
    white-space: normal;
  }

  .info-content .title {
    width: 100%;
    white-space: normal;
    text-align: center;
  }

  .project-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Three columns only on genuinely wide displays. */
@media (min-width: 1600px) {

  main {
    width: min(1400px, calc(100vw - 64px));
    max-width: 1400px;
    grid-template-columns: 300px minmax(0, 1fr);
  }

  .project-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## 3. Remove problematic wrapping rules, if previously added

Search `style.css` for:

```css
overflow-wrap: anywhere;
```

Remove it or change it to:

```css
overflow-wrap: normal;
```

Also search for:

```css
word-break: break-all;
```

If present, remove it or change it to:

```css
word-break: normal;
```

Those rules cause words such as “Virtual” and “Embedded” to split into tiny vertical fragments.

## 4. Small accessibility fixes that do not alter sizing

Add this separate block at the end of `style.css`:

```css
/* Visible keyboard focus without changing layout dimensions */
.navbar-link:focus-visible,
.info_more-btn:focus-visible,
.contact-link:focus-visible,
.about-text a:focus-visible {
  outline: 3px solid var(--orange-yellow-crayola);
  outline-offset: 3px;
}

/* Restore bullets removed by the template's global list reset */
.timeline-text ul {
  padding-left: 1.25rem;
}

.timeline-text li {
  list-style: disc;
}

.timeline-text li + li {
  margin-top: 0.4rem;
}
```

## 5. Minimal HTML accessibility corrections

These do not affect the laptop layout.

Add an explicit avatar height:

```html
<img
  src="./assets/images/mohammad-avatar.png"
  alt="Portrait of Mohammad Hassan"
  width="80"
  height="80"
>
```

Add the initial navigation state:

```html
<button
  class="navbar-link active"
  type="button"
  aria-current="page"
  data-nav-link
>
  About
</button>
```

You do **not** need to add `hidden` attributes if your current class-based navigation is working. Keep:

```html
<article class="resume" data-page="resume">
```

and:

```html
<article class="portfolio" data-page="portfolio">
```

No phone-specific CSS is introduced by these changes.

