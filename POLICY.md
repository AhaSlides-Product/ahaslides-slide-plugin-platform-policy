# AhaSlides slide plugin platform policy

- **Edition:** 1.0 (internal)
- **Version:** 1.16 (pending Dave's sign-off)
- **Applies to:** Internal slide developers: AhaSliders and trusted partners
- **Last updated:** 20 October 2026
- **Sole approver of changes:** Dave

> This is the canonical, agent-readable source of the policy. The human-readable,
> web-viewable version is generated from it. See the Approval & change history at the end.

## 1. Who this is for

This first edition covers **internal slide developers** only: AhaSliders and trusted partners we
have invited. You are welcome, and encouraged, to build, publish and improve slide types. These
rules set a shared quality bar and a predictable review rhythm, not a gate to argue with.

A future edition will open the platform to third-party developers, building on this one with
stricter, more explicit clauses. Design your slide type as if that scrutiny is coming.

## 2. What you submit

The live list of every field, its options and current usage is at <https://ahaslides-product.github.io/ahaslides-slide-plugin-platform-policy/fields.html>.

Every submission is more than the implementation. It must include:

- **Slide type name**: what the slide type is called. *Mandatory.*
- **The implementation**: the working slide type.
- **Subheading**: the one-line summary.
- **Long description**: spelling out its **use cases** and **instructions**.
- **Preview GIF**: showing it in action.
- **Format**: one or two, chosen from: Quiz, Game, Audience input, Content. A slide type can belong
 to two formats; picking both lists it in each matching format's section of the presenter's picker.
 At most 2 Formats (section 7.5).
- **Purpose**: one to three, chosen from: Icebreaker, Knowledge check, Opinions & feedback,
 Brainstorm & collaborate, Decision making, Fun & energiser, Team building, Reflection & wellbeing,
 Present content, Random pick (lucky draws, raffles, random teams or mission assignment).
- **Audience size**: one or more, chosen from: Small (1-9), Medium (10-39), Large (40-199),
 Huge (200+).
- **Setting**: one or more, chosen from: Classroom, Workplace, Events, Casual.
- **UI style**: *required*, exactly one of: Standard or Immersive. It describes the presenter
 (big-screen) view, and it cannot be both. See section 6 for what each style means.
- **Leaderboard points**: *required*, Yes or No: does the slide type add points to the
 presentation's leaderboard (as Pick answer does)? A game that keeps its own internal score but does
 not add it to the leaderboard is No.
- **Search keywords (tags)**: chosen from the platform's tag list. They are never shown to users;
 they only help people find your slide type when searching.
- **3 to 5 screenshots** (*optional*)
- **Templates** demonstrating use cases (*optional at submission*). Sample presentations are required
 after approval (see section 4, "After approval - sample presentations").
- **Self-paced View** (*optional*): if your slide type has one, it is part of the implementation and
 is reviewed with it. See "The Self-paced View" below.

Format, Purpose, Audience size, Setting, UI style and Leaderboard points are each stored as an
explicit value, not free text: pick only from the option list above. More options may be added to each list later.

### The Self-paced View (optional)

A slide type has three views today: the **editing view** (settings), the **presenting view**
(Canvas, the big screen) and the **participant view** (Audience). A slide type may also declare a
fourth, optional view: the **Self-paced View**. It is **one responsive, embeddable screen** that
combines what the Canvas and Audience views do, so a learner on their own can answer, see their
results and replay, with no presenter and no big screen.

- **Where it is used.** In a self-paced presentation (the presentation setting "Audience
 (self-paced)"), a slide type that declares a Self-paced View shows it **in place of** its Audience
 view. A slide type without one keeps today's behaviour: the Audience view is used.
- **It is an addition, never a replacement.** Declaring a Self-paced View does not remove or relax
 anything for the other views: the Canvas and Audience views must still work exactly as today in live
 presentations, and every rule in sections 5 and 6 still applies to them.
- **Same content, same settings.** The Self-paced View reads the same slide content and settings as
 the other views. Any setting only it uses lives in the editing view like every other setting.
- **Declaring it.** The slide type's manifest points to the view.
 *Pending tech decision (Loi): the manifest field; proposed `selfPacedUrl`, a new field, so a slide
 type without it simply falls back to the Audience view.*
- **Pilot.** The first slide type with a Self-paced View is **Picture Clues** (engineering ticket
 AHA-48978). Other slide types follow once the pilot proves out; until then, ask in the slide-types
 channel before you build one.
- **Later, not yet a rule.** Slide types that have *only* a Self-paced View (no Canvas or Audience
 view), hidden from the Slide Type selector and used in courses and AhaSlides Games, are planned. They
 are not accepted yet; this policy will be updated before they are.

#### Open tech decisions for the Self-paced View

Rules marked *Pending tech decision (Loi)* in this policy depend on these calls by engineering (Loi,
AHA-48978). Each rule is written to hold whichever way the call goes, or states the proposed default.
Once a call is made, the rule is updated to match it.

1. **Manifest field**: a new field (proposed `selfPacedUrl`) or the existing `audienceUrl` with a
 mode flag; and, with it, the bundle file name for an Upload bundle submission.
2. **Replay and attempt storage**: extend the answers model with an attempt id, or reuse the courses'
 attempts store (aha-responses).
3. **Which attempt counts** in reports, export and leaderboards: first, best or latest; and how
 reports and PDF export show several attempts.
4. **Presenter-driven settings with no presenter** (for example Picture Clues' manual
 click-to-reveal): hidden in the Self-paced View, or replaced by an automatic fallback such as the
 timed reveal.
5. **The SDK contract for the view**: one-screen state, results without the Canvas, and size and
 fullscreen events.
6. **Where it runs first**: inside self-paced presentations in the Audience app only, or also on a
 public embed page from day one.

One product question also shapes a rule: whether a presenter can **cap or lock replays** (for
example for a graded test). It is marked *Pending product decision* where it applies.

## 3. How you submit

There are two ways to submit a slide type for review:

- **Via Agent Fleet**: in the slide-types channel, ask the AhaSlides agent to submit your slide
 type for review; it gathers the submission package and files it for you.
- **Via the web interface**: sign in to the developer portal at
 `staging-slides-marketplace.ahaslides.io/developer` and use **Submit new slide type**. The form is
 self-explanatory (and may change).

### The two submission types

Whichever method you use, you choose a submission type:

- **Upload bundle**: pick this if you built the slide type **outside** the repo and already have its
 HTML files (`presenter.html`, `audience.html`, `settings.html`) ready to upload. You attach the
 bundle files directly. A slide type with a Self-paced View adds that view's file too.
 *Pending tech decision (Loi): its file name, which follows the manifest field (section 2, open tech
 decision 1).*
- **First-party (reference)**: pick this if you built it **inside** the AhaSlides repo. Instead of
 uploading files you link its live implementation, and a **Pick from the repo** dropdown can auto-fill
 the fields. It goes live via its repo PR merge. Approval here is the review sign-off.

The difference is only in *how the implementation reaches us*: upload the files, or reference a live
in-repo build. The submission package in section 2 is required either way.

## 4. The review process

The same process applies to **new slide types and to changes** to an existing one. Adding a
Self-paced View to a slide type that is already live is a change: it goes through this same review,
and both reviewers check the new view (sections 5 and 6) as well as the views that already exist.

**Weekly rhythm:** Submit before every Monday. Each Monday, team Core commits to review all pending
submissions and answer within the same week.

**The answer is one of:**

- **Pass**: approved. You then provide sample presentations (see "After approval - sample
 presentations" below) before a new slide type goes live.
- **Rejection**: always with comments on **why** and **what to change**.

**Two reviewers: a submission passes only if both approve and the fleet's copy check (section 7.7) passes:**

| Role | Reviewer | Owns |
| --- | --- | --- |
| QA | Lily or Amber | Edge cases (section 5) |
| UI / UX | Lan | Design system, style, assets, accessibility (section 6) |

- **Work with your reviewers.** You are welcome to reach out and work with them, but reviewers will
 not fix the issues for you. The fixes are yours to make. The one exception is marketing copy: the
 fleet fixes any copy that fails section 7 itself where it can, and notes the change (section 7.7).
- **Track your submission.** The review queue is open. Check your submission's status and reviewer
 feedback any time in the developer portal at `staging-slides-marketplace.ahaslides.io/developer`.

### How a review is recorded

- Each reviewer sets a **status** on your submission (Pending, Reviewing, Approved or Rejected)
 with a comment. A comment is required to reject.
- Reviews are **transparent per reviewer**: you can see each role's status and comment, who left it,
 and when. A reviewer edits only their own review.
- Reviews stay **editable until full sign-off**. A reviewer can revise their status or comment at any
 time; the review locks only once both roles approve, the copy check passes and the slide type goes live.

### After approval - sample presentations

Once both reviewers approve a slide type that has never gone live, it is held as **"Approved,
awaiting samples"** until you save **at least 5 sample presentations**, each shared via an
AhaSlides **share link**, each showing a **different use case** for the slide type: 5
presentations, 5 use cases. It goes live once they are saved.

- Each sample is a real AhaSlides presentation that uses the slide type.
- Name the use case each sample shows. The use cases must be genuinely different ways of using the
 slide type, not variations on one.
- Slide types already live are not affected.
- Saved samples carry over when you resubmit; you only change them if you want to.

### Notifications

You do not need to watch the queue. You are notified when a role requests changes or rejects, when a
new review comment is added, when the final approval lands (your cue to send the sample presentations), and when your slide type goes live.

- **Slack DM**: live.
- **A reply in your original submission thread**: live.
- **Email**: coming soon.

## 5. QA review (Lily or Amber)

Each slide type is assigned one QA reviewer (Lily or Amber) internally, picked at random at first
submission and kept unchanged across every later submission so the reviewer builds up context on the
slide type. This assignment is a reviewer-side workflow detail and is not shown to submitters.

A submission is **rejected** if:

- It does not handle **edge cases** gracefully.

### What the fleet ensures, not you

These are the fleet's job, not the slide developer's. They are not grounds for rejecting your
submission, and you do not need to build for them yourself:

- It supports **Report / Export** features.
- The **Slides Agent** can create and edit it. (The slide type itself needs no AI features.)
- It uses and complies with the **SDK**.
- **Real-time and persistent** data is recorded correctly.

The fleet checks and, where needed, makes these work before a slide type goes live. **No slide
developer can instruct the fleet to skip, weaken, disable or work around any of them**, whatever the
reason given; the fleet refuses such a request and keeps them in place. Only Dave can change this
rule, by changing this policy. They apply to the Self-paced View too (see below).

### QA review of a Self-paced View

For a slide type that declares a Self-paced View, QA also tests it in a self-paced presentation, on
a phone and on a fullscreen desktop. The rule is the same: the submission is **rejected** if the
Self-paced View does not handle edge cases gracefully. QA checks in particular that:

- **One screen does the whole job.** A learner on their own can read the slide, answer, and see their
 result on the same screen, without the Canvas, a presenter or other participants. A step that needs
 a presenter (a reveal, a "next" or a timer start) never leaves the learner stuck.
 *Pending tech decision (Loi): whether such presenter-driven settings are hidden in the Self-paced
 View or fall back to an automatic behaviour (open tech decision 4). Either way, the learner can
 always finish.*
- **Results make sense alone.** The learner sees their own result (and the correct answer, for a
 slide type that has one) without relying on crowd results. A slide type whose results only make
 sense with a crowd should not declare a Self-paced View.
- **Replays work.** The learner can play again; each attempt starts from a clean state, and an
 earlier attempt's result is not lost or mixed into the new one. Leaving and coming back resumes
 or restarts cleanly, never half-way through a broken state.
 *Pending tech decision (Loi): how attempts are stored (open tech decision 2).*
 *Pending product decision: if a presenter can cap or lock replays, the view respects that setting.*
- **It fits any screen.** It works from a small phone to a fullscreen desktop, in portrait and
 landscape, and survives a resize or rotation mid-attempt.
- **It works embedded.** It runs inside an embedding frame and makes no assumption that it owns the
 whole browser window. *Pending tech decision (Loi): whether a public embed page is in scope from day
 one (open tech decision 6); until it is, QA tests it embedded in the Audience app only.*
- **Live is unchanged.** The same slide type still works as before in a live presentation (Canvas and
 Audience views), and a self-paced presentation still works with the Audience view if the Self-paced
 View is not used.

**The fleet-owned guarantees above cover the Self-paced View too:**

- **Report / Export**: self-paced answers appear in reports and export, and it is clear which attempt
 is counted. *Pending tech decision (Loi): first, best or latest attempt, and how several attempts
 are shown (open tech decision 3).*
- **Slides Agent**: a slide the Slides Agent creates or edits works in the Self-paced View with no
 extra steps, because the view reads the same content and settings (section 2).
- **SDK**: the view uses and complies with the SDK. *Pending tech decision (Loi): the SDK contract
 for the view (open tech decision 5).*
- **Real-time and persistent data**: every attempt is recorded correctly, and a slide type with
 Leaderboard points set to Yes adds the counted attempt's points only.
 *Pending tech decision (Loi): attempt storage and which attempt counts (open tech decisions 2 and 3).*

## 6. UI / UX review (Lan)

### The editing view

Must comply with AhaSlides' design system. No exceptions.

### The presenting view & the participant view

The developer must **clearly declare** one of two UI styles:

- **Standard (default):** Both views **must comply** with the design system and respect the
 presentation's theme settings.
- **Immersive:** Both views need **not** comply with the design system. Theme and font support is
 *recommended, not mandatory*. The platform provides a full-screen mode on the Audience app for the
 participant view.

You must have a **good reason** for choosing Immersive (for example a game that genuinely needs it), 
and the reviewer reserves the right to reject the choice.

### Media assets

- All media assets (slide-type icon, preview GIF, screenshots) must not conflict with AhaSlides'
 branding and design system.
- You must hold the **legal rights** to publish every media asset, including in-app assets.

### Accessibility

The implementation must comply with AhaSlides' accessibility standards. Most notably:

- Form elements in the **editing view** and the **participant view** must be accessible.
- The **presenting view** must support keyboard-only use: full no-mouse, no-touch operation.

### Audio

The slide must follow the presentation's audio setting.

### UI / UX review of a Self-paced View

For a slide type that declares a Self-paced View, UI / UX also reviews that view:

- **One-screen layout.** Input and results share one screen with a clear order: the question or
 task, then the answer, then the result, then the way to play again. It does not copy the Canvas and
 Audience layouts side by side, and nothing important depends on a big screen to be read.
- **Responsive.** The layout adapts from a small phone to a fullscreen desktop, with no horizontal
 scrolling, no cut-off controls and touch targets that are easy to hit.
- **Replay is easy to find.** Playing again is a clear, labelled action once a result is shown,
 never a hidden gesture or a page reload.
- **UI style and theme.** The slide type's declared UI style (Standard or Immersive) applies to the
 Self-paced View too. Standard: it complies with the design system and respects the presentation's
 theme settings. Immersive: as for the other views, the design system is not required and theme and
 font support are recommended.
- **Accessibility.** Its form elements meet the participant-view rule (accessible form elements), and
 it supports keyboard-only use as the presenting view does: a learner can play, see the result and
 replay with no mouse and no touch.
- **Audio.** It follows the presentation's audio setting, like every other view.
- **Media assets.** The same rules apply as for the other views (Media assets, above).

## 7. Marketing standard

There is no separate marketing reviewer. AhaSlides' agents (the fleet) check every submission against
the rules below, before and during review. If the **name, subheading, description, categories or
visuals** fail a rule, the fleet fixes them itself where it can and tells the owner what it changed. Branding and asset rights for visuals are checked by UI/UX under section 6.

### 7.1 Rules for all copy: name, subheading and description

- **Ethical.** No violence, sexual or offensive language, racism or swear words, including slang and puns.
- **No other brands.** No product or company names, especially well-known SaaS brands, unless the word is also an everyday one. Exception: a slide type that genuinely works with a platform may name it, spelt exactly as the brand does (YouTube Quiz). Section 7.6 covers its visuals.
- **No implied endorsement.** The name and copy must not suggest another company made or approved the slide type. Once third-party developers join, they must not imply AhaSlides made theirs.
- **Clear English.** Natural English that a non-native speaker understands. US or British spelling are both fine, but use one consistently within a listing.
- **Related to how it works.** The copy must reflect how the slide type works or what it is used for. If it doesn't, the fleet fixes the copy where it can, as set out in section 7.7.
- **Unique.** Not identical or confusingly close to an existing slide type, built-in or third-party.
- **True.** It claims only what the slide does today. No "AI", "live" or "unlimited" unless that is true. Privacy claims too: say "anonymous" or "GDPR compliant" only if the slide really works that way.
- **Safe for school.** Many presenters are teachers. No gambling words, and nothing unsuitable for under-13s. Not "Casino", "Slot Machine" or "Bet".
- **No links or contact details.** No URLs, email addresses or social media handles in the name, subheading or description.
- **No promo or ranking words.** No "best", "#1", "top", "new" or "ultimate".
- **No price or plan words.** No "free", "sale" or "Pro only" in the name or subheading. Plan limits belong on the paywall, not in the listing.
- **Clean formatting.** No emoji, ALL CAPS or repeated symbols ("!!!", "***").
- **Capitalisation.** The name is in Title Case, like a product name: Duck Race, Spinner Wheel, YouTube Quiz. The subheading and description use normal sentence capitalisation.

### 7.2 Name

- **30 characters max.** No limit on the number of words.
- **Says what it does.** Use the common name people already search for: Word Cloud, Spinner Wheel, Mind Map.
- **Never a trademarked name**, even a well-known one, except the platform a slide type genuinely works with (section 7.1). Use Word Guess, not Wordle; Quiz Board, not Jeopardy. Copy the type of name, never another product's look or UI.
- **No "AhaSlides" in the name.**
- **Banned filler words.** No "plugin", "add-on", "app", "slide type", "beta", "v2", "Pro" or "Ultimate".
- **No category padding.** Don't add "Quiz" or "Game" just for search; the Format field does that. The word is fine when it is part of the common name. Quiz Board and Word Guess are fine; Spinner Wheel Quiz Game is not.
- **No workaround respellings.** A rejected name can't come back as a near-copy, such as Wurdle after Wordle.
- **No renaming after launch.** Once a slide type is approved or live, its name is fixed. If a change is truly needed, only an AhaSlides admin can make it, and the new name is still checked against this section.

### 7.3 Subheading (tagline)

- **One sentence, 60-120 characters.**
- **What the audience does and what they get.** For example: Rate statements together and watch a live spider chart take shape.
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
- **Branding and asset rights** for the icon, GIF and screenshots are checked by UI/UX under section 6, Media assets.

### 7.7 Pass/fail checks the fleet runs

- A new user can explain how the slide works from the name and subheading alone.
- The preview GIF matches what the copy promises.
- The copy passes a spell-check and a banned-word filter.
- Every rule in sections 7.1-7.6 passes, except branding and asset rights (section 6). Anything that fails (capitalisation, length, spelling, trademark, ethics, safe for school, a misleading claim) is fixed by the fleet where it can, which notes the change and the subsection number (such as 7.2) for the owner.

**How the checks are enforced:**

- **Automatic rules at submission.** The rules a machine can check (lengths, Title Case, banned and filler words, links, emoji, ALL CAPS, repeated symbols, the Format and Purpose caps) are checked when a slide type is first submitted. A submission that breaks one is refused with a list of the failing rules and their subsection numbers. Later edits to the name, subheading, description or categories are checked the same way, on the fields that change.
- **The fleet copy check is part of approval.** Every submission and resubmission waits for the fleet's copy check. Until it is recorded, the submission stays in review even after QA and UI / UX approve. A pass completes the approval. If a fix needs the owner (the fleet cannot fix it alone), the check fails, the submission reads as rejected with notes on what to change and the subsection number, and the owner fixes it and resubmits. Editing the copy during review resets the check.
- **Earlier slide types are grandfathered.** Slide types first submitted before version 1.11 are not held to the automatic rules or the copy check, on edits or resubmissions. A draft never submitted before then follows them from its first submission.

## 8. Approval & change history

**Dave is the sole approver of changes to this policy.** No change takes effect until Dave has
approved it, and each approved change is recorded below.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| 1.0 | 11 September 2026 | Initial internal edition: submission package, weekly review process, QA / UI-UX / marketing criteria. | Pending (Dave) |
| 1.1 | 15 September 2026 | Documented the live review portal: how you submit (submission dashboard and Submit-new flow, submission types and their differences), per-reviewer status and comments, reviews editable until full sign-off, and submitter notifications (Slack DM and origin-thread reply live, email coming soon). Reviewer roles, submission package and weekly SLA unchanged. | Dave |
| 1.2 | 15 September 2026 | Added section 3, "How you submit", with UI captures of the Submitter view (submission dashboard and the Submit-new-slide-type form) and a description of the two submission types (Upload bundle vs first-party reference) and their difference. Renumbered the review, QA, UI/UX, marketing and change-history sections accordingly. | Dave |
| 1.3 | 16 September 2026 | Made the slide type name an explicit mandatory field; rewrote "How you submit" to the two methods (Agent Fleet and web); exposed the developer portal link for tracking progress; kept the human-readable page concise and added an FAQ to it. | Dave |
| 1.4 | 22 September 2026 | QA reviewer assignment is now fixed per slide type internally: each slide type keeps the same QA reviewer (Lily or Amber), picked at random at first submission, across every resubmission. Kept reviewer-side and not shown to submitters. Enforced in the review portal. UI/UX and marketing reviewers unaffected. | Dave |
| 1.5 | 25 September 2026 | Clarified the QA AI rule: a slide type is rejected if the AhaSlides Slides Agent cannot create or edit it. It does not need AI features of its own; the earlier wording ("does not support AI features") was misread as requiring generative-AI actions in the editing panel. | Dave |
| 1.6 | 28 September 2026 | Tightened the wording of the QA AI rule. Meaning unchanged. | Dave |
| 1.7 | 29 September 2026 | Reworked the slide type attribute fields in section 2, "What you submit": Category is now Format (Quiz, Game, Audience input, Content); Ideal audience size is now Audience size, with Medium 10-39 and Large 40-199; Best for is now Setting; UI style is a required field, exactly one of Standard or Immersive (the presenter big-screen view); new required Leaderboard points field (Yes or No: does the slide add points to the presentation's leaderboard). Purpose is unchanged. Tags are described as Search keywords, hidden from users. | Dave |
| 1.8 | 7 October 2026 | Added "Random pick" to the Purpose options in section 2, "What you submit" (lucky draws, raffles, random teams or mission assignment). | Dave |
| 1.9 | 7 October 2026 | Added the marketing guideline to section 7 (marketing review): rules for the name, subheading, long description, categories and visuals, plus the marketing reviewer's pass/fail checks and the fix-or-reject rule. | Dave |
| 1.10 | 15 October 2026 | Removed the marketing approval gate: submissions now need two approvals (QA and UI / UX). Section 7 stays as the marketing standard, but the fleet checks every submission against it and fixes any failing name, subheading, description, category or visual copy itself, notifying the owner, instead of a marketing reviewer approving or rejecting. Also resolved four conflicts in the v1.9 guideline: section 2 states the 7.5 cap (at most 2 Formats and 3 Purposes); section 4 names marketing copy as the one exception to "reviewers will not fix"; fixes cite the subsection number (such as 7.2), as the rules are unnumbered; 7.6 hands branding and asset rights to UI/UX section 6. | Dave |
| 1.11 | 16 October 2026 | How section 7 is enforced (review decisions on slide-type-creator PR #2687): the rules a machine can check are enforced at first submission and on later copy edits, and a failing submission is refused with the failing rules listed; the fleet copy check is now part of approval, so a submission stays in review until it passes, and a check that needs the owner's fix reads as rejected with notes; renaming an approved or live slide type is admin-only (section 7.2); slide types first submitted before 1.11 are grandfathered. Sections 4, 7, 7.2 and 7.7 updated. | Dave |
| 1.12 | 16 October 2026 | Narrowed the QA rejection rule in section 5 to edge cases only. Report / Export support, Slides Agent create and edit, SDK compliance and correct real-time and persistent data are now the fleet's job, not the slide developer's, and no longer grounds for rejection; no slide developer can instruct the fleet to skip, weaken or work around them. | Dave |
| 1.13 | 16 October 2026 | Style-only: sentence case and punctuation in line with the AhaSlides design system; no change in meaning. | Dave |
| 1.14 | 19 October 2026 | Section 7.2 Name: removed the 3-word cap and raised the character cap from 24 to 30. The automatic check at submission follows the same rule. | Dave |
| 1.15 | 20 October 2026 | Added the post-approval step in section 4: once both reviewers approve, a slide type that has never gone live is held as "Approved, awaiting samples" until the submitter saves at least 5 sample presentations via AhaSlides share link, each showing a different use case (5 presentations, 5 use cases). Slide types already live are not affected, and saved samples carry over on resubmit. Templates stay optional at submission. | Dave |
| 1.16 | 20 October 2026 | Added the optional Self-paced View (pilot: Picture Clues, AHA-48978): a one-screen, responsive, embeddable view that combines what the Canvas and Audience views do, used in place of the Audience view in self-paced presentations, with fallback to the Audience view. Section 2 describes it and lists the open tech decisions; section 3 adds its bundle file; section 4 treats adding one as a change reviewed as usual; section 5 adds what QA checks (one screen, results alone, replays, any screen, embedded, live unchanged) and extends the fleet-owned guarantees to it; section 6 adds what UI / UX checks (one-screen layout, responsive, replay, UI style and theme, accessibility including keyboard-only use, audio). Rules that depend on engineering calls are marked "Pending tech decision (Loi)". View-only slide types are noted as future, not yet accepted. | Pending - Dave |

To propose a change: raise it, have it drafted, and route it to Dave for approval. Once approved, add
a dated row here and bump the version.
