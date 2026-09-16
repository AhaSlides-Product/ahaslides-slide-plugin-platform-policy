# AhaSlides Slide Plugin Platform Policy

- **Edition:** 1.0 (internal)
- **Version:** 1.3
- **Applies to:** Internal slide developers - AhaSliders and trusted partners
- **Status:** Draft for review
- **Last updated:** 16 September 2026
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

Every submission is more than the implementation. It must include:

- **Slide type name** - what the slide type is called. *Mandatory.*
- **The implementation** - the working slide type.
- **Subheading** - the one-line summary.
- **Long description** - spelling out its **use cases** and **instructions**.
- **Preview GIF** - showing it in action.
- **Tags** - chosen from the platform's tag list.
- **3–5 screenshots** - *optional.*
- **Templates** demonstrating use cases - *optional.*

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

A submission is **rejected** if any of these is true:

- It does not support **Report / Export** features.
- It does not support **AI** features.
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

## 8. Approval & change history

**Dave is the sole approver of changes to this policy.** No change takes effect until Dave has
approved it, and each approved change is recorded below.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| 1.0 | 11 September 2026 | Initial internal edition - submission package, weekly review process, QA / UI-UX / Marketing criteria. | Pending - Dave |
| 1.1 | 15 September 2026 | Documented the live review portal: how you submit (submission dashboard and Submit-new flow, submission types and their differences), per-reviewer status and comments, reviews editable until full sign-off, and submitter notifications (Slack DM and origin-thread reply live, email coming soon). Reviewer roles, submission package and weekly SLA unchanged. | Dave |
| 1.2 | 15 September 2026 | Added section 3, "How you submit", with UI captures of the Submitter view (submission dashboard and the Submit-new-slide-type form) and a description of the two submission types (Upload bundle vs first-party reference) and their difference. Renumbered the review, QA, UI/UX, marketing and change-history sections accordingly. | Dave |
| 1.3 | 16 September 2026 | Made the slide type name an explicit mandatory field; rewrote "How you submit" to the two methods (Agent Fleet and web); exposed the developer portal link for tracking progress; kept the human-readable page concise and added an FAQ to it. | Pending - Dave |

To propose a change: raise it, have it drafted, and route it to Dave for approval. Once approved, add
a dated row here and bump the version.
