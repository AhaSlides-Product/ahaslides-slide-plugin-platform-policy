# AhaSlides Slide Plugin Platform Policy

- **Edition:** 1.0 (internal)
- **Applies to:** Internal slide developers - AhaSliders and trusted partners
- **Status:** Draft for review
- **Last updated:** 11 September 2026
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

- **The implementation** - the working slide type.
- **Subheading** - the one-line summary.
- **Long description** - spelling out its **use cases** and **instructions**.
- **Preview GIF** - showing it in action.
- **Tags** - chosen from the platform's tag list.
- **3–5 screenshots** - *optional.*
- **Templates** demonstrating use cases - *optional.*

**Getting started.** You don't have to work through this alone - ask **Agent Fleet** (in the
slide-types channel) to walk you through it. It knows the policy, can assemble the package, and can
file the submission for you. Good opening prompts:

- "Where do we start with a slide-type submission?"
- "What's the submission checklist, and what should we do before submitting?"

## 3. The review process

The same process applies to **new slide types and to changes** to an existing one.

**Weekly rhythm:** Submit before every Monday. Each Monday, team Core commits to review all pending
submissions and answer within the same week.

**Where to file.** A submission is a **Jira Story in project `AHA`**, titled
`Slide MarketPlace > Review new slide type: <Name>`, left in the pending-review backlog. Not sure how?
Ask Agent Fleet - *"Where should our slide-type submission go - and can you file it?"* - and it will
create the Story with the full package for you.

**The answer is one of:**

- **Pass** - approved to go live.
- **Rejection** - always with comments on **why** and **what to change**.

**Three reviewers - a submission passes only if all three approve:**

| Role | Reviewer | Owns |
| --- | --- | --- |
| QA | Lily or Amber | Function, SDK use, data, edge cases (section 4) |
| UI / UX | Lan | Design system, style, assets, accessibility (section 5) |
| Marketing | Trent | Name, metadata, tagging & categorisation (section 6) |

- **Work with your reviewers.** You are welcome to reach out and work with them - but reviewers will
 not fix the issues for you. The fixes are yours to make.
- **Open backlog.** The pending-review queue is transparent: every slide developer can see what is
 waiting.

## 4. QA review - Lily or Amber

A submission is **rejected** if any of these is true:

- It does not support **Report / Export** features.
- It does not support **AI** features.
- It misuses or does not comply with the **SDK**.
- It does not handle **edge cases** gracefully.
- Data - **real-time and persistent** - is not recorded correctly.

## 5. UI / UX review - Lan

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

## 6. Marketing review - Trent

The marketing reviewer reserves the right to alter the slide type's **name, metadata, and
tagging / categorisation** for marketing and strategic reasons.

## 7. Approval & change history

**Dave is the sole approver of changes to this policy.** No change takes effect until Dave has
approved it, and each approved change is recorded below.

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| 1.0 | 11 September 2026 | Initial internal edition - submission package, weekly review process, QA / UI-UX / Marketing criteria. | Pending - Dave |

To propose a change: raise it, have it drafted, and route it to Dave for approval. Once approved, add
a dated row here and bump the version.
