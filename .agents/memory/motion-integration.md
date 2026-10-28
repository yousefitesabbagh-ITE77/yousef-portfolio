---
name: Motion integration
description: Non-obvious Lenis behavior and touch-test requirements.
---

Keep the fixed-header anchor offset in CSS scroll-padding rather than also adding a Lenis offset.

**Why:** This Lenis version already reads scroll-padding; specifying both doubles the intended gap.

**How to apply:** Native and smooth anchor navigation should share the same CSS offset.

Synthetic touch tests must provide targetTouches as well as touches and changedTouches.

**Why:** Lenis reads targetTouches on touchstart. Incomplete synthetic events can report runtime errors that real touch events do not produce.

**How to apply:** Match browser touch event structure when testing gallery swipes.
