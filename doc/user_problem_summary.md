# User Problem Summary & Product Proposal: Math & Language Prep Planner

## 1. Context & User Profile
The target user is a student preparing for high-stakes, competitive academic and language milestones:
*   **SAT (Digital)**: Requires high-speed, accurate algebra, and data interpretation.
*   **A-Levels**: Requires rigorous, structured, step-by-step mathematical reasoning and Calculus foundation.
*   **OSN (Indonesian Math Olympiad)**: Requires high-level creative problem-solving, modular arithmetic, combinatorics, and rigorous proofs.
*   **IELTS**: Requires systematic English language development from general vocabulary to academic writing and timed simulations.

The user's timeframe is structured as a **2-year plan**:
*   **Year 1 (Foundation)**: Focuses on concept mastery (Math fundamentals and IELTS general English) without the stress of mock exams.
*   **Year 2 (Simulation)**: Focuses on exam-specific tactics, speed drills, and mock test simulations.

---

## 2. Core User Problems
Based on the case study files ([material.x.md](file:///d:/3. Code Project/MATH/material.x.md) and [material-google.md](file:///d:/3. Code Project/MATH/material-google.md)), the user faces the following key challenges:

### A. The "Muddy Foundation" Trap
*   **Problem**: Students often rush into advanced SAT, A-Level, or OSN math topics before mastering foundational arithmetic.
*   **Solution**: Provide a clear, visible sequence of topics so the user can trace prerequisites and confirm they have covered basic arithmetic before proceeding to advanced material.

### B. The Arithmetic & Fraction Bottleneck
*   **Problem**: Fractions are identified as the single largest bottleneck for students transitioning to Algebra and Calculus.
*   **Solution**: The dashboard prioritizes and flags crucial bottleneck topics (e.g., Fractions, Negative Numbers, PEMDAS) so users can focus on mastering them first.

### C. Overlapping but Disparate Goals
*   **Problem**: Preparing for SAT, A-Levels, OSN, and IELTS simultaneously feels overwhelming.
*   **Solution**: A unified, clean syllabus manager that groups topics logically under Math Tiers and Language Tracks, showing how foundational work feeds into multiple exams.

### D. Time Management & Consistency Breakdown
*   **Problem**: Maintaining a daily routine of 1–1.5 hours of study, solving 30–40 math problems daily, and dividing time between Math (60%) and English (40%) is extremely difficult without structural tracking.

---

## 3. Product Proposal: What We Should Build

To address these problems, we should build a **Math & Language Curriculum Dashboard**. This tool focuses on **utility and distraction-free learning**, providing direct access to resources and clean progress tracking.

### Core Features

#### 1. Minimalist Curriculum Index (No Gamified Locking)
*   **Clear Overview**: A clean list-based syllabus organized by Tiers (1 to 5) and Phases (Arithmetic 1 to 3).
*   **Direct Navigation**: All nodes are accessible at any time (no game-like lock gates). The user is free to jump between topics depending on their immediate study needs, but the recommended progression is clearly indicated.
*   **High-Impact Highlighting**: High-impact foundational topics (like fractions) are flagged with clean, subtle markers.

#### 2. Clean Progress Tracking
*   **Status Indicators**: Simple, visible status indicators for each topic:
    *   `○ Not Started`
    *   `◐ In Progress`
    *   `● Mastered`
*   **Daily Log Sidebar**: A simple logger to record:
    *   Hours studied today (target: 1-1.5 hrs)
    *   Problems solved today (target: 30-40 problems)
    *   Status charts showing overall curriculum completion rates.

#### 3. 2-Year Study System & Schedule Planner
*   **Timeline View**: A minimalist switcher between Year 1 (Concepts & Foundation) and Year 2 (Exam Practice & Mock Tests) to show relevant objectives.
*   **60/40 Ratio Helper**: A simple calendar layout reminding the user of their weekly schedule:
    *   Math Focus: Mon, Wed, Fri
    *   English Focus: Tue, Thu

---

## 4. Internet Resource Access & Study System

The core purpose of this tool is to bridge the user directly to the best resources on the web, optimizing for distraction-free learning.

### A. Focus-Driven Study Flow
When a user selects a topic from the Index, the details panel displays a clean, 3-step checklist:

1.  **Step 1: Learn (Curated Theory Links)**
    *   Direct links to high-quality explanations, videos, or course modules (e.g., specific Khan Academy lessons, or website explanations).
2.  **Step 2: Practice (Exercises & Interactive Tools)**
    *   Links to practice problem sets (e.g., Khan Academy practice pages, College Panda chapters, or AoPS Alcumus modules).
    *   **In-App Desmos Widget**: For graphing, coordinate geometry, or function-based topics, the panel embeds a clean, collapsible [Desmos Graphing Calculator](https://www.desmos.com/calculator) to allow immediate mathematical play and verification.
3.  **Step 3: Log & Verify**
    *   A simple self-affirmation checkmark: *"I have practiced this topic and feel confident (90%+ accuracy)."*
    *   Checking this box transitions the node status to **Mastered** and increments the curriculum completion percentage.

---

## 5. Curriculum Mapping & Curated Resources

Below is the curriculum mapping that ties every tier and phase to specific, curated internet platforms and materials to streamline learning.

| Tier / Phase | Core Topics | Recommended Free & Paid Internet Resources | Curated Learning Focus |
| :--- | :--- | :--- | :--- |
| **Phase 1: Arithmetic Core** | Integers, negative numbers, order of operations (PEMDAS), fractions. | [Khan Academy (Arithmetic)](https://www.khanacademy.org/math/arithmetic) | Absolute mastery of fraction arithmetic and negative signs. |
| **Phase 2: Bridge to Algebra** | Exponents & roots, GCF, LCM, prime factorization, radical simplification. | [Khan Academy (Pre-Algebra)](https://www.khanacademy.org/math/pre-algebra) | Rules of exponents, factor trees, simplifying radical expressions. |
| **Tier 1: Foundations** | Basic algebraic expressions, factoring, system of linear equations, sets. | [Khan Academy (Algebra 1)](https://www.khanacademy.org/math/algebra) | Linear equation manipulations, factoring quadratic expressions. |
| **Tier 2: Spatial & Graphs** | Geometry shapes, Pythagoras, similarity, functions, linear graphs. | [Khan Academy (Geometry)](https://www.khanacademy.org/math/geometry) & [Desmos Lessons](https://learn.desmos.com/) | Graph visualization, coordinate geometry, similarity theorems. |
| **Tier 3: Intermediate** | Functions & quadratics, log rules, trig ratios, wavy-curve method, counting. | [College Panda SAT Math](https://thecollegepanda.com/math/) & [Organic Chemistry Tutor (Trig)](https://www.youtube.com/@TheOrganicChemistryTutor) | Speed drills for SAT-style algebra, log conversions, trig values. |
| **Tier 4: Advanced Pre-Calc** | Polynomials (Vieta's), compositions, trig identities, circles, intro mod arithmetic. | [AoPS Alcumus](https://artofproblemsolving.com/alcumus) & [Khan Academy (Precalculus)](https://www.khanacademy.org/math/precalculus) | Complex graph transformations, modular remainder arithmetic, remainder theorems. |
| **Tier 5: Olympiad Mastery** | Algoritma Euklides, Fermat's Little Theorem, Menelaus, Stars and Bars. | [AoPS Wiki (Olympiad)](https://artofproblemsolving.com/wiki) & Arthur Engel *Problem Solving Strategies* | Rigorous math proofs, advanced combinatorics, and number theory. |
| **IELTS Track: Year 1** | English grammar, academic vocabulary, passive listening & reading. | [BBC Learning English](https://www.bbc.co.uk/learningenglish) & [The Economist Articles](https://www.economist.com/) | Daily vocabulary logging and transition to reading complex academic texts. |
| **IELTS Track: Year 2** | IELTS task structures, listening/reading drills, writing templates, mock speaking. | [IELTS Liz](https://ieltsliz.com/) & [E2 IELTS YouTube](https://www.youtube.com/@E2IELTS) | Timed mock test simulations, essay outlines, and templates. |

---

## 6. Visual & UI Design Goals
*   **Theme**: Sleek, distraction-free dark mode. Monochromatic background palette (deep charcoal and rich slate) accented with a single functional highlight color (e.g., custom bright teal for active/mastered elements).
*   **Layout**: 
    *   **Left Panel**: Split view sidebar. The top half shows overall progress counters (percentage complete, daily study streak); the bottom half lists the collapsible Curriculum Index.
    *   **Right/Main Panel**: Focus workspace. When a topic is clicked, this pane populates with the direct resource links, the Desmos widget (if applicable), and the action plan.
*   **Aesthetic Principle**: Zero-clutter, clean typography (using sans-serif fonts like Inter), and generous spacing. Avoid unnecessary animations, focusing only on fast, instant transitions.
