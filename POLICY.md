# AhaSlides Slide Plugin Platform Policy

- **Edition:** 1.0 (internal)
- **Version:** 1.9
- **Applies to:** Internal slide developers - AhaSliders and trusted partners
- **Last updated:** 7 October 2026
- **Sole approver of changes:** Dave

> This is the canonical, agent-readable source of the policy. The human-readable,
> web-viewable version is generated from it. See the Approval & change history at the end.

## 1. Who this is for

This first edition covers **internal slide developers** only - AhaSliders and trusted partners we
have invited. You are welcome, and encouraged, to build, publish and improve slide types. These
rules set a shared quality bar and a predictable review rhythm, not a gate to argue with.

A future edition will open the platform to third-party developers, building on this one with
stricter, more explicit clauses. Design your slide type as if that scrutiny is coming.

## 2. What you submit

The live list of every field, its options and current usage is at <https://ahaslides-product.github.io/ahaslides-slide-plugin-platform-policy/fields.html>.

Every submission is more than the implementation. It must include:

- **Slide type name** - what the slide type is called. *Mandatory.*
- **The implementation** - the working slide type.
- **Subheading** - the one-line summary.
- **Long description** - spelling out its **use cases** and **instructions**.
- **Preview GIF** - showing it in action.
- **Format** - one or more, chosen from: Quiz, Game, Audience input, Content. A slide type can belong
 to several formats; picking more than one lists it in every matching format's section of the
 presenter's picker.
- **Purpose** - one or more, chosen from: Icebreaker, Knowledge check, Opinions & feedback,
 Brainstorm & collaborate, Decision making, Fun & energiser, Team building, Reflection & wellbeing,
 Present content, Random pick (lucky draws, raffles, random teams or mission assignment).
- **Audience size** - one or more, chosen from: Small (1-9), Medium (10-39), Large (40-199),
 Huge (200+).
- **Setting** - one or more, chosen from: Classroom, Workplace, Events, Casual.
- **UI style** - *required*, exactly one of: Standard or Immersive. It describes the presenter
 (big-screen) view, and it cannot be both. See section 6 for what each style means.
- **Leaderboard points** - *required*, Yes or No: does the slide type add points to the
 presentation's leaderboard (as Pick Answer does)? A game that keeps its own internal score but does
 not add it to the leaderboard is No.
- **Search keywords (tags)** - chosen from the platform's tag list. They are never shown to users;
 they only help people find your slide type when searching.
- **3–5 screenshots** - *optional.*
- **Templates** demonstrating use cases - *optional.*

Format, Purpose, Audience size, Setting, UI style and Leaderboard points are each stored as an
explicit value, not free text - pick only from the option list above. More options may be added to each list later.

## 3. How you submit

There are two ways to submit a slide type for review:

- **Via Agent Fleet** - in the slide-types channel, ask the AhaSlides agent to submit your slide
 type for review; it gathers the submission package and files it for you.
- **Via the web interface** - sign in to the developer portal at
 `staging-slides-marketplace.ahaslides.io/developer` and use **Submit new slide type**. The form is
 self-explanatory (and may change).

### The two submission types

Whichever method you use, you choose a submission type:

- **Upload bundle** - pick this if you built the slide type **outside** the repo and already have its
 HTML files (`presenter.html`, `audience.html`, `settings.html`) ready to upload. You attach the
 bundle files directly.
- **First-party (reference)** - pick this if you built it **inside** the AhaSlides repo. Instead of
 uploading files you link its live implementation, and a **Pick from the repo** dropdown can auto-fill
 the fields. It goes live via its repo PR merge - approval here is the review sign-off.

The difference is only in *how the implementation reaches us* - upload the files, or reference a live
in-repo build. The submission package in section 2 is required either way.

## 4. The review process

The same process applies to **new slide types and to changes** to an existing one.

**Weekly rhythm:** Submit before every Monday. Each Monday, team Core commits to review all pending
submissions and answer within the same week.

**The answer is one of:**

- **Pass** - approved to go live.
- **Rejection** - always with comments on **why** and **what to change**.

**Three reviewers - a submission passes only if all three approve:**

| Role | Reviewer | Owns |
| --- | --- | --- |
| QA | Lily or Amber | Function, SDK use, data, edge cases (section 5) |
| UI / UX | Lan | Design system, style, assets, accessibility (section 6) |
| Marketing | Trent | Name, metadata, tagging & categorisation (section 7) |

- **Work with your reviewers.** You are welcome to reach out and work with them - but reviewers will
 not fix the issues for you. The fixes are yours to make.
- **Track your submission.** The review queue is open - check your submission's status and reviewer
 feedback any time in the developer portal at `staging-slides-marketplace.ahaslides.io/developer`.

### How a review is recorded

- Each reviewer sets a **status** on your submission - Pending, Reviewing, Approved or Rejected -
 with a comment. A comment is required to reject.
- Reviews are **transparent per reviewer**: you can see each role's status and comment, who left it,
 and when. A reviewer edits only their own review.
- Reviews stay **editable until full sign-off**. A reviewer can revise their status or comment at any
 time; the review locks only once all three roles approve and the slide type goes live.

### Notifications

You do not need to watch the queue. You are notified when a role requests changes or rejects, when a
new review comment is added, and when the final approval lands and your slide type goes live.

- **Slack DM** - live.
- **A reply in your original submission thread** - live.
- **Email** - coming soon.

## 5. QA review - Lily or Amber

Each slide type is assigned one QA reviewer (Lily or Amber) internally, picked at random at first
submission and kept unchanged across every later submission so the reviewer builds up context on the
slide type. This assignment is a reviewer-side workflow detail and is not shown to submitters.

A submission is **rejected** if any of these is true:

- It does not support **Report / Export** features.
- The **Slides Agent** can't create or edit it. (The slide type itself needs no AI features.)
- It misuses or does not comply with the **SDK**.
- It does not handle **edge cases** gracefully.
- Data - **real-time and persistent** - is not recorded correctly.

## 6. UI / UX review - Lan

### The Editing View

Must comply with AhaSlides' design system - no exceptions.

### The Presenting View & the Participant View

The developer must **clearly declare** one of two UI styles:

- **Standard (default):** Both views **must comply** with the design system and respect the
 presentation's theme settings.
- **Immersive:** Both views need **not** comply with the design system. Theme and font support is
 *recommended, not mandatory*. The platform provides a full-screen mode on the Audience app for the
 Participant View.

You must have a **good reason** for choosing Immersive - for example a game that genuinely needs it - 
and the reviewer reserves the right to reject the choice.

### Media assets

- All media assets - slide-type icon, preview GIF, screenshots - must not conflict with AhaSlides'
 branding and design system.
- You must hold the **legal rights** to publish every media asset, including in-app assets.

### Accessibility

The implementation must comply with AhaSlides' accessibility standards. Most notably:

- Form elements in the **Editing View** and the **Participant View** must be accessible.
- The **Presenting View** must support keyboard-only use - full no-mouse, no-touch operation.

### Audio

The slide must follow the presentation's audio setting.

## 7. Marketing review - Trent

The marketing reviewer reserves the right to alter the slide type's **name, metadata, and
tagging / categorisation** for marketing and strategic reasons.

The marketing reviewer checks every submission against the rules below.

### 7.1 Rules for all copy: name, subheading and description

- **Ethical.** No violence, sexual or offensive language, racism or swear words, including slang and puns.
- **No other brands.** No product or company names, especially well-known SaaS brands, unless the word is also an everyday one. Exception: a slide type that genuinely works with a platform may name it, spelt exactly as the brand does (YouTube Quiz). Section 7.6 covers its visuals.
- **No implied endorsement.** The name and copy must not suggest another company made or approved the slide type. Once third-party developers join, they must not imply AhaSlides made theirs.
- **Clear English.** Natural English that a non-native speaker understands. US or British spelling are both fine, but use one consistently within a listing.
- **Related to how it works.** The copy must reflect how the slide type works or what it is used for. If it doesn't, the copy is fixed or rejected as set out in section 7.7.
- **Unique.** Not identical or confusingly close to an existing slide type, built-in or third-party.
- **True.** It claims only what the slide does today. No "AI", "live" or "unlimited" unless that is true. Privacy claims too: say "anonymous" or "GDPR compliant" only if the slide really works that way.
- **Safe for school.** Many presenters are teachers. No gambling words, and nothing unsuitable for under-13s. Not "Casino", "Slot Machine" or "Bet".
- **No links or contact details.** No URLs, email addresses or social media handles in the name, subheading or description.
- **No promo or ranking words.** No "best", "#1", "top", "new" or "ultimate".
- **No price or plan words.** No "free", "sale" or "Pro only" in the name or subheading. Plan limits belong on the paywall, not in the listing.
- **Clean formatting.** No emoji, ALL CAPS or repeated symbols ("!!!", "***").
- **Capitalisation.** The name is in Title Case, like a product name: Duck Race, Spinner Wheel, YouTube Quiz. The subheading and description use normal sentence capitalisation.

### 7.2 Name

- **1-3 words, 24 characters max.**
- **Says what it does.** Use the common name people already search for: Word Cloud, Spinner Wheel, Mind Map.
- **Never a trademarked name**, even a well-known one. Use Word Guess, not Wordle; Quiz Board, not Jeopardy. Copy the type of name, never another product's look or UI.
- **No "AhaSlides" in the name.**
- **Banned filler words.** No "plugin", "add-on", "app", "slide type", "beta", "v2", "Pro" or "Ultimate".
- **No category padding.** Don't add "Quiz" or "Game" just for search; the Format field does that. The word is fine when it is part of the common name. Quiz Board and Word Guess are fine; Spinner Wheel Quiz Game is not.
- **No workaround respellings.** A rejected name can't come back as a near-copy, such as Wurdle after Wordle.
- **No renaming after launch.** Once a slide type is live, its name is fixed. If a change is truly needed, the owner must resubmit it for Marketing review. Changing the name never takes effect without approval.

### 7.3 Subheading (tagline)

- **One sentence, 60-120 characters.**
- **What the audience does and what they get.** For example: Rate statements and watch a live spider chart take shape.
- **Adds something.** Don't just repeat the name, and skip filler like "fun", "engaging" or "interactive" unless it adds meaning.
- **Plain words.** No acronyms, slang or jokes, because they don't translate.

### 7.4 Long description

- **300-700 characters, in 2-3 short paragraphs.** It is required before approval.
- **Fixed structure:** (1) what it is and how it works; (2) 2-3 concrete use cases with their context, such as a classroom, workshop or event; (3) how to set it up, in up to 3 steps.
- **Speaks to the presenter** as "you", in plain words and short sentences, with no developer jargon.
- **No keyword stuffing.** The same keyword appears at most 5 times. No lists of brands, places or events added for search.
- **No testimonials, ratings or user counts.** We can't verify them.
- **No unprovable claims**, such as "most popular" or "loved by millions".

### 7.5 Categories and search keywords

- **At most 2 Formats and 3 Purposes**, so a slide type doesn't appear in every section of the picker.
- **Tags must match what the slide really does.** No keyword stuffing.

### 7.6 Visuals

- **The preview GIF shows real use within 10 seconds**, and matches what the copy promises.
- **No misleading results.** Demo data is fine, but the GIF and screenshots show only results the slide can really produce. No made-up "10,000 votes".
- **No competitor logos or third-party brands** in the GIF or screenshots. Exception: a slide type that genuinely works with a platform may show that platform's content in use (a YouTube video in YouTube Quiz), but never its logo as the icon.
- **No fast flashing.** Nothing in the GIF flashes more than 3 times a second, as that can trigger seizures (WCAG 2.3.1).
- **The icon, GIF and screenshots don't clash with AhaSlides branding**, and the developer holds the rights to every asset.

### 7.7 Pass/fail checks for the Marketing reviewer

- A new user can explain how the slide works from the name and subheading alone.
- The preview GIF matches what the copy promises.
- The copy passes a spell-check and a banned-word filter.
- Every rule in sections 7.1-7.6 passes. For a small issue (capitalisation, length, spelling), Marketing fixes the copy itself and notes the change. A serious one (trademark, ethics, safe for school, a misleading claim) means rejection, with the rule number in the review comment.

## 8. Approval & change history

**Dave is the sole approver of changes to this policy.** No change takes effect until Dave has
approved it, and each approved change is recorded below.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| 1.0 | 11 September 2026 | Initial internal edition - submission package, weekly review process, QA / UI-UX / Marketing criteria. | Pending - Dave |
| 1.1 | 15 September 2026 | Documented the live review portal: how you submit (submission dashboard and Submit-new flow, submission types and their differences), per-reviewer status and comments, reviews editable until full sign-off, and submitter notifications (Slack DM and origin-thread reply live, email coming soon). Reviewer roles, submission package and weekly SLA unchanged. | Dave |
| 1.2 | 15 September 2026 | Added section 3, "How you submit", with UI captures of the Submitter view (submission dashboard and the Submit-new-slide-type form) and a description of the two submission types (Upload bundle vs first-party reference) and their difference. Renumbered the review, QA, UI/UX, marketing and change-history sections accordingly. | Dave |
| 1.3 | 16 September 2026 | Made the slide type name an explicit mandatory field; rewrote "How you submit" to the two methods (Agent Fleet and web); exposed the developer portal link for tracking progress; kept the human-readable page concise and added an FAQ to it. | Dave |
| 1.4 | 22 September 2026 | QA reviewer assignment is now fixed per slide type internally: each slide type keeps the same QA reviewer (Lily or Amber), picked at random at first submission, across every resubmission. Kept reviewer-side and not shown to submitters. Enforced in the review portal. UI/UX and Marketing reviewers unaffected. | Dave |
| 1.5 | 25 September 2026 | Clarified the QA AI rule: a slide type is rejected if the AhaSlides Slides Agent cannot create or edit it. It does not need AI features of its own; the earlier wording ("does not support AI features") was misread as requiring generative-AI actions in the editing panel. | Dave |
| 1.6 | 28 September 2026 | Tightened the wording of the QA AI rule. Meaning unchanged. | Dave |
| 1.7 | 29 September 2026 | Reworked the slide type attribute fields in section 2, "What you submit": Category is now Format (Quiz, Game, Audience input, Content); Ideal audience size is now Audience size, with Medium 10-39 and Large 40-199; Best for is now Setting; UI style is a required field, exactly one of Standard or Immersive (the presenter big-screen view); new required Leaderboard points field (Yes or No: does the slide add points to the presentation's leaderboard). Purpose is unchanged. Tags are described as Search keywords, hidden from users. | Dave |
| 1.8 | 7 October 2026 | Added "Random pick" to the Purpose options in section 2, "What you submit" (lucky draws, raffles, random teams or mission assignment). | Dave |
| 1.9 | 7 October 2026 | Added the marketing guideline to section 7 (Marketing review): rules for the name, subheading, long description, categories and visuals, plus the Marketing reviewer's pass/fail checks and the fix-or-reject rule. | Pending - Dave |

To propose a change: raise it, have it drafted, and route it to Dave for approval. Once approved, add
a dated row here and bump the version.
