# Software Design Document (SDD) - Session LOG2
## Focus: Unified Curriculum Database (SAT, AP Calculus, and AI Math)

### 1. Objective
Refactor the split Math curriculum in `app.js` into a unified, linear **Tier 1 - 6** structure. Based on the student's background (vocational SMK RPL student focusing on Web/App/SaaS products and aiming for global Bachelor of AI programs), we will pivot the higher tiers from Olympiad/OSN math to **AP Calculus (AB & BC)** and **AI Math Foundations (Linear Algebra & Matrix basics)**. This provides high-impact academic credentials (SAT Math + AP Calculus score 5) and solid AI preparation while avoiding OSN burnout.

### 2. Current State
- Math curriculum is divided into two separate classification systems: "Phase 1: Arithmetic Core", "Phase 2: Bridge to Algebra" and "Tier 1: Foundations", "Tier 2: Spatial...", up to "Tier 5: Olympiad Mastery".
- Navigation sidebar lists both Phases and Tiers simultaneously, creating an inconsistent layout.
- The curriculum lacks any Calculus or Matrix/Linear Algebra topics, which are vital for AP Calculus prep and the target Bachelor of AI program.

### 3. Proposed Design (The Unified 6-Tier Curriculum)
We will reorganize the `curriculum` array in `app.js` into a single, cohesive, linear list of Tiers:

- **Tier 1: Arithmetic Core & Foundations**: (Fractions, Integers, PEMDAS, Exponents/Roots, GCF/LCM).
- **Tier 2: Algebra & Equations (SAT Math)**: (Algebraic Manipulations, Equations/Inequalities, Systems, Set Theory).
- **Tier 3: Spatial & Coordinate Geometry (SAT Math)**: (Geometry Basics, Similarity/Congruence, Functions/Graphs).
- **Tier 4: Advanced SAT & Pre-Calculus**: (Quadratics, Logarithms, Trigonometry, Wavy-Curve, P&C Basics).
- **Tier 5: AP Calculus AB (Limits & Derivatives for AI)**: (Limits & Continuity, Rules of Differentiation, Applications of Derivatives, Indefinite & Definite Integrals).
- **Tier 6: AP Calculus BC & Linear Algebra (AI Foundations)**: (Infinite Sequences & Series, Advanced Integration, Vectors & Matrices, Multivariable Calculus & Gradient Descent).

Each topic's `learnLinks` and `practiceLinks` will be verified and enriched with highly specific Khan Academy, organic chemistry tutor, or college board AP prep.

---

### 4. Execution Report
**Status**: Completed. The unified 6-Tier curriculum database has been implemented.

**Key Technical Achievements:**
1. **Curriculum Array Rewrite**: Replaced the split `arithmetic-p1`, `arithmetic-p2`, `tier1-foundations` ... `tier5-olympiad` group structure with a unified `tier1-arithmetic` through `tier6-calc-bc-linalg` linear progression.
2. **Pivot from OSN Olympiad to AP Calculus + AI Math**: Tiers 5 & 6 now cover AP Calculus AB (Limits, Derivatives, Derivative Applications, Integrals) and AP Calculus BC + Linear Algebra (Infinite Series, Integration by Parts, Vectors/Matrices, Gradient Descent) directly aligned with the student's target Bachelor of AI program.
3. **Enriched Resources**: Every topic now contains multiple specific learning links (Khan Academy, The Organic Chemistry Tutor, 3Blue1Brown, StatQuest, Math Antics) and separate practice/mock links including College Board AP past papers and SAT-specific drill exercises.
4. **Topic IDs Preserved**: All foundational topic IDs (`integers`, `pemdas`, `fractions`, `exponents-roots`, `gcf-prime`, `equations-inequalities`, `system-equations`, `set-theory`, `geometry-basics`, `similarity-congruence`, `linear-graphs`, `quadratic-functions`, `logarithms`, `trigonometry-basics`, `non-linear-inequalities`, `combinatorics-intro`) are kept identical to preserve `localStorage` user progress.
5. **Browser Verified**: Confirmed correct sidebar rendering (Tiers 1–6 visible), topic content loading with multiple links, and zero JavaScript console errors after reload.
