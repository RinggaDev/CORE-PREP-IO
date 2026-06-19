# Software Design Document (SDD) - Session LOG1
## Focus: Organizing the Flow Learning System

### 1. Objective
Transform the static 3-step learning cards into an interactive, organized "Learning Flow System" within the web application to improve user focus, prevent cognitive overload, and ensure effective sequential learning.

### 2. Current State
The active study panel currently displays all three steps (Learn, Practice, Verify) simultaneously as static cards. The user manually checks the final "Mastery" box without any system-guided progression through the actual learning materials.

### 3. Proposed Design (The Interactive Flow System)
We will introduce a **Sequential Stepper UI** and granular state tracking.

**A. Guided Sequential Steps:**
Instead of showing all content with equal visual weight, the steps will be organized as a guided flow:
*   **Step 1: Learn (Acquire Theory)**
    *   Displays curated theory resources.
    *   *Action*: A "Mark Theory Complete" button.
    *   *System*: Completing this unlocks and scrolls to Step 2.
*   **Step 2: Practice (Apply Skill)**
    *   Displays practice links and the Desmos calculator widget (if applicable).
    *   *Action*: A "Mark Practice Complete" button.
    *   *System*: Completing this unlocks Step 3.
*   **Step 3: Verify (Self-Assessment)**
    *   Displays the final mastery checklist/affirmation.
    *   *Action*: "Confirm Mastery" checkbox.
    *   *System*: Marks the entire topic as Mastered and updates the global progress metrics in the sidebar.

**B. State Management (`app.js`):**
*   Update the `localStorage` schema to track the progress of *individual steps* for the active topic, not just the final mastery state.
*   Example schema update: `topicProgress: { "fractions": { stepCompleted: 1, isMastered: false } }`
*   This allows a user to resume a topic exactly at the step they left off (e.g., they finished theory yesterday, and can start practice today).

**C. UI/UX Layout (`index.html` & `index.css`):**
*   Implement a clean horizontal progress indicator (stepper) at the top of the active study panel.
*   Visually dim (reduce opacity) or collapse locked future steps to reduce cognitive load and enforce sequential learning.
*   Add smooth CSS transitions when a step is unlocked.

---

### 4. Execution Report
**Status**: Completed. The Interactive Flow Learning System has been implemented.

**Key Technical Achievements:**
1. **HTML Architecture**: Injected the `.flow-stepper` component directly under the panel header, tracking the 3 learning stages visually. Added unique IDs (`step1-card`, `step2-card`, `step3-card`) to target sequential logic.
2. **CSS State Design**: Programmed `.step-locked` (opacity 40%, greyscale, no pointer events), `.step-active` (teal border highlight with shadow), and `.step-completed` (teal badge with checkmark) classes.
3. **App.js State Migration & Logic**:
   - The system gracefully migrates the legacy `masteredTopics` schema to the granular `topicProgress: { stepCompleted: X, isMastered: Y }` format.
   - Introduced `ensureTopicState(topicId)` to instantly prime state objects on demand.
   - Centralized DOM updates inside `updateStepperDOM()` which loops through the stepper items and cards, unlocking them sequentially based on the saved `stepCompleted` integer.
   - Wired up "Mark Complete" buttons that incrementally shift the integer state from 0 ➔ 1 ➔ 2 and smoothly scroll the user to the newly unlocked module.
