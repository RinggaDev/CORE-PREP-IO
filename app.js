/* ==========================================================================
   CURRICULUM DATABASE
   ========================================================================== */
const curriculum = [
    {
        id: "tier1-arithmetic",
        title: "Tier 1: Arithmetic Core & Foundations",
        type: "math",
        items: [
            {
                id: "integers",
                title: "Integer & Negative Number Operations",
                description: "The bedrock of all algebra. Master adding, subtracting, multiplying, and dividing with negative numbers, absolute values, and complex sign expressions. A single careless sign error can ruin an entire SAT problem.",
                learnLinks: [
                    { name: "Negative Numbers: Adding & Subtracting (Khan Academy)", url: "https://www.khanacademy.org/math/algebra-basics/basic-alg-foundations/alg-basics-negative-numbers/v/adding-and-subtracting-negative-number-examples", domain: "khanacademy.org" },
                    { name: "Negative Numbers: Multiplying & Dividing (Khan Academy)", url: "https://www.khanacademy.org/math/arithmetic/arith-review-negative-numbers/multiply-divide-negatives/v/multiplying-positive-and-negative-numbers", domain: "khanacademy.org" },
                    { name: "Adding & Subtracting Integers (Math Antics)", url: "https://www.youtube.com/watch?v=_BgblvF90UE", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Integer Operations Practice Set (Khan Academy)", url: "https://www.khanacademy.org/math/arithmetic/arith-review-negative-numbers#arith-review-neg-num-quiz", domain: "khanacademy.org" },
                    { name: "Negative Numbers Unit Test (Khan Academy)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples/cc-6th-absolute-value/e/absolute_value", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "pemdas",
                title: "Order of Operations (PEMDAS/BODMAS)",
                description: "Absolute precision in parentheses → exponents → multiplication/division → addition/subtraction. Master nested and multi-step expressions. One wrong evaluation order = incorrect SAT answer.",
                learnLinks: [
                    { name: "Order of Operations Introduction (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-arith-prop-factors/pre-algebra-order-of-operations/v/introduction-to-order-of-operations", domain: "khanacademy.org" },
                    { name: "PEMDAS with Exponents & Fractions (Math Antics)", url: "https://www.youtube.com/watch?v=dAgfnK528RA", domain: "youtube.com" },
                    { name: "Order of Operations Advanced (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=1Vw1yTj_H0s", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "PEMDAS Exercise Set (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-arith-prop-factors#pre-algebra-order-of-operations", domain: "khanacademy.org" },
                    { name: "PEMDAS Quiz & Unit Test (Khan Academy)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-expressions-and-variables/cc-6th-order-of-operations/e/order_of_operations", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "fractions",
                title: "Fractions — The Biggest Bottleneck",
                description: "The single most critical topic before entering Algebra. Master: adding/subtracting with common denominators, fraction multiplication/division, mixed numbers ↔ improper fractions, simplifying (using GCF), and fraction-to-decimal conversions.",
                learnLinks: [
                    { name: "Fraction Arithmetic Full Unit (Khan Academy)", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", domain: "khanacademy.org" },
                    { name: "Simplifying & Equivalent Fractions (Khan Academy)", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic/arith-review-visualizing-equiv-frac/v/visualizing-equivalent-fractions", domain: "khanacademy.org" },
                    { name: "Fractions Basics & Operations (Math Antics)", url: "https://www.youtube.com/watch?v=5juto2ze8Lg", domain: "youtube.com" },
                    { name: "Fractions Review (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=mO53O6Z18kM", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Fraction Operations Unit Test (Khan Academy)", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic#fraction-mult-div-topic", domain: "khanacademy.org" },
                    { name: "Adding & Subtracting Fractions Quiz (Khan Academy)", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic/arith-review-add-subtract-frac/e/adding_and_subtracting_fractions", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "exponents-roots",
                title: "Exponents & Roots",
                description: "Core SAT topic. Learn all exponent laws (product rule, power rule, quotient rule), negative exponents, fractional exponents, square roots, and cube roots. Simplify radicals like √18 = 3√2.",
                learnLinks: [
                    { name: "Exponent Rules & Properties (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals/pre-algebra-exponent-properties/v/exponent-properties-1", domain: "khanacademy.org" },
                    { name: "Fractional & Negative Exponents (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:rational-exponents-radicals", domain: "khanacademy.org" },
                    { name: "Laws of Exponents (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=ZtB0Srs2TK4", domain: "youtube.com" },
                    { name: "Simplifying Radicals & Square Roots (Brian McLogan)", url: "https://www.youtube.com/watch?v=y3hA-Iiy6jA", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Exponent Properties Quiz (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals#pre-algebra-exponent-properties", domain: "khanacademy.org" },
                    { name: "Simplifying Radicals Practice (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:rational-exponents-radicals/x2f8bb11595b61c86:simplifying-square-roots/e/simplifying_radicals", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "gcf-prime",
                title: "GCF, LCM & Prime Factorization",
                description: "Essential for simplifying algebraic fractions. Master: prime factorization (factor tree method), Greatest Common Factor (GCF/GCD) using Euclidean algorithm, Least Common Multiple (LCM), and the relationship LCM × GCF = a × b.",
                learnLinks: [
                    { name: "Prime Factorization & Factor Trees (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-prime-factorization/v/prime-factorization", domain: "khanacademy.org" },
                    { name: "GCF & LCM Full Lesson (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples#pre-algebra-greatest-common-divisor", domain: "khanacademy.org" },
                    { name: "Prime Factorization (Math Antics)", url: "https://www.youtube.com/watch?v=XGbOiYhHY2c", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "GCF Practice Exercises (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-greatest-common-divisor/e/greatest_common_divisor", domain: "khanacademy.org" },
                    { name: "LCM Practice Exercises (Khan Academy)", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-lcm/e/least_common_multiple", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            }
        ]
    },
    {
        id: "tier2-algebra",
        title: "Tier 2: Algebra & Equations (SAT Math Core)",
        type: "math",
        items: [
            {
                id: "algebraic-manipulation",
                title: "Algebraic Manipulations & Factoring",
                description: "The language of advanced math. Master: expanding expressions (FOIL), factoring quadratics (x²+bx+c), special products (a²-b², (a+b)², (a-b)²), polynomial long division, and simplifying complex algebraic fractions.",
                learnLinks: [
                    { name: "Multiplying & Factoring Polynomials (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics-multiplying-factoring", domain: "khanacademy.org" },
                    { name: "Polynomial Long Division (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6ec90d96a98:polynomial-arithmetic/x2ec2f6ec90d96a98:poly-long-div/v/polynomial-division", domain: "khanacademy.org" },
                    { name: "Algebra 1 Review Study Guide (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=v0sHU_9Bksg", domain: "youtube.com" },
                    { name: "How To Factor Polynomials (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=zc2CEXRgBjs", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Factoring Expressions Quiz (Khan Academy)", url: "https://www.khanacademy.org/math/algebra#x2f8bb11595b61c86:quadratics-multiplying-factoring", domain: "khanacademy.org" },
                    { name: "SAT Algebra Skill Check — College Panda PDF Exercises", url: "https://collegepanda.com/sat-math-practice-tests/", domain: "collegepanda.com" }
                ],
                hasDesmos: false
            },
            {
                id: "equations-inequalities",
                title: "Equations & Inequalities",
                description: "Solve single-variable linear equations, quadratic equations (by factoring, completing the square, quadratic formula), rational equations, absolute value equations, and linear/quadratic inequalities on the number line.",
                learnLinks: [
                    { name: "Solving Linear Equations Full Course (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities", domain: "khanacademy.org" },
                    { name: "Quadratic Formula Explained (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:quadratic-formula/v/proof-of-quadratic-formula", domain: "khanacademy.org" },
                    { name: "Solving Equations (Math Antics)", url: "https://www.youtube.com/watch?v=l3XzepN03KQ", domain: "youtube.com" },
                    { name: "Algebra 2 Introduction, Basic Review (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=i6sbjtJjJ-A", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Equations & Inequalities Practice (Khan Academy)", url: "https://www.khanacademy.org/math/algebra#x2f8bb11595b61c86:solve-equations-inequalities", domain: "khanacademy.org" },
                    { name: "SAT Heart of Algebra Drills (Khan Academy)", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-heart-of-algebra", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "system-equations",
                title: "Systems of Equations",
                description: "Solve systems of 2 and 3 variables using substitution, elimination, and matrix-based methods. Understand graphical intersection interpretations (0, 1, or infinite solutions).",
                learnLinks: [
                    { name: "Systems of Equations — Full Course (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations-inequalities", domain: "khanacademy.org" },
                    { name: "System of 3 Variables — Elimination Method (Khan Academy)", url: "https://www.khanacademy.org/math/precalculus/x9e81a4e98b3c7ae9:matrices/x9e81a4e98b3c7ae9:solving-with-matrices/v/using-a-matrix-to-solve-a-system-of-equations", domain: "khanacademy.org" },
                    { name: "Solving Systems Using Elimination & Substitution (Brian McLogan)", url: "https://www.youtube.com/watch?v=V7H1oUW2zHU", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Systems of Equations Unit Quiz (Khan Academy)", url: "https://www.khanacademy.org/math/algebra#x2f8bb11595b61c86:systems-of-equations-inequalities", domain: "khanacademy.org" },
                    { name: "SAT Systems of Equations Practice Problems", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-heart-of-algebra/x0a8c2e5f3af3e66b:sat-systems-of-equations/e/systems-of-equations-word-problems", domain: "khanacademy.org" }
                ],
                hasDesmos: true
            },
            {
                id: "set-theory",
                title: "Set Theory & Logic Basics",
                description: "Understand sets (universal set, subsets, empty set), operations (union ∪, intersection ∩, complement), and solve logical word problems using Venn Diagrams. Foundation for discrete math and probability.",
                learnLinks: [
                    { name: "Introduction to Sets (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/probability-library/basic-set-ops/v/intersection-and-union-of-sets", domain: "khanacademy.org" },
                    { name: "Venn Diagrams & Probability (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/probability-library/basic-set-ops/v/venn-diagrams-and-sets", domain: "khanacademy.org" },
                    { name: "Set Theory - Introduction (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=e_kG2Z5v8uA", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Set Operations Drills (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/probability-library#basic-set-ops", domain: "khanacademy.org" },
                    { name: "Venn Diagram Logic Problems (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/probability-library/basic-set-ops/e/basic-set-notation", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            }
        ]
    },
    {
        id: "tier3-geometry",
        title: "Tier 3: Geometry & Functions (SAT Math)",
        type: "math",
        items: [
            {
                id: "geometry-basics",
                title: "Plane Geometry & Pythagoras",
                description: "SAT-essential geometry: triangle properties (interior angles, special right triangles 30-60-90 and 45-45-90), Pythagorean theorem, circle properties (arc, chord, sector), polygon angle sums, area and perimeter formulas.",
                learnLinks: [
                    { name: "High School Geometry Full Course (Khan Academy)", url: "https://www.khanacademy.org/math/geometry", domain: "khanacademy.org" },
                    { name: "Circle Theorems & Properties (Khan Academy)", url: "https://www.khanacademy.org/math/geometry/hs-geo-circles", domain: "khanacademy.org" },
                    { name: "Geometry Introduction (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=302eJ3TzJGY", domain: "youtube.com" },
                    { name: "Pythagorean Theorem & Special Right Triangles (Eddie Woo)", url: "https://www.youtube.com/watch?v=rWlA6k7g2sE", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Geometry Unit Tests (Khan Academy)", url: "https://www.khanacademy.org/math/geometry/hs-geo-trig", domain: "khanacademy.org" },
                    { name: "SAT Geometry & Trigonometry Practice (Khan Academy)", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-geometry-trigonometry", domain: "khanacademy.org" }
                ],
                hasDesmos: true
            },
            {
                id: "similarity-congruence",
                title: "Similarity, Congruence & Proportions",
                description: "Determine when two triangles are similar (AA, SAS, SSS) or congruent (ASA, AAS, HL). Apply scale factors, corresponding side ratios, and proportional reasoning. Foundation for SAT word problem geometry.",
                learnLinks: [
                    { name: "Congruence & Triangle Proofs (Khan Academy)", url: "https://www.khanacademy.org/math/geometry/hs-geo-congruence", domain: "khanacademy.org" },
                    { name: "Similar Triangles & Scale Factors (Khan Academy)", url: "https://www.khanacademy.org/math/geometry/hs-geo-similarity", domain: "khanacademy.org" },
                    { name: "Similar Triangles (Math Antics)", url: "https://www.youtube.com/watch?v=OepJWVGzKEs", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Similarity Drills & Ratios (Khan Academy)", url: "https://www.khanacademy.org/math/geometry/hs-geo-similarity/hs-geo-similar-triangles/e/similarity_1", domain: "khanacademy.org" },
                    { name: "Congruence Unit Test (Khan Academy)", url: "https://www.khanacademy.org/math/geometry/hs-geo-congruence#hs-geo-triangle-congruence", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "linear-graphs",
                title: "Functions & Linear Coordinate Geometry",
                description: "Define domain, range, function notation f(x). Plot and interpret linear functions. Find slope (m), y-intercept, point-slope form, distance between two points, midpoint formula, and slope of parallel/perpendicular lines.",
                learnLinks: [
                    { name: "Introduction to Functions (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions", domain: "khanacademy.org" },
                    { name: "Linear Equations & Graphing (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs", domain: "khanacademy.org" },
                    { name: "Graphing Linear Equations (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=S0T0LgA7Rz0", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Graphing Linear Functions (Khan Academy)", url: "https://www.khanacademy.org/math/algebra#x2f8bb11595b61c86:linear-equations-graphs", domain: "khanacademy.org" },
                    { name: "SAT Linear Functions Practice Problems", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-heart-of-algebra/x0a8c2e5f3af3e66b:sat-linear-equations-graphs/e/sat-linear-equations-and-graphs", domain: "khanacademy.org" }
                ],
                hasDesmos: true
            }
        ]
    },
    {
        id: "tier4-advanced-sat",
        title: "Tier 4: Advanced SAT & Pre-Calculus",
        type: "math",
        items: [
            {
                id: "quadratic-functions",
                title: "Quadratic Functions & Parabola Analysis",
                description: "The #1 topic on SAT Math Advanced. Determine vertex (h,k), axis of symmetry, discriminant (D = b²-4ac), nature of roots, and parabola transformations. Convert between standard, vertex, and factored forms.",
                learnLinks: [
                    { name: "Quadratic Functions & Equations Full Course (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations", domain: "khanacademy.org" },
                    { name: "Vertex Form & Completing the Square (Khan Academy)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:vertex-form/v/vertex-form-intro", domain: "khanacademy.org" },
                    { name: "Graphing Quadratic Functions (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=Hq2Up_1Ih5E", domain: "youtube.com" },
                    { name: "Pre-Calculus Full Course (Professor Leonard)", url: "https://www.youtube.com/playlist?list=PLDesaqWTN6QTxmIfDza8s2mYVzI_mR19w", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Quadratics Unit Tests (Khan Academy)", url: "https://www.khanacademy.org/math/algebra#x2f8bb11595b61c86:quadratic-functions-equations", domain: "khanacademy.org" },
                    { name: "SAT Advanced Math — Quadratics (Khan Academy)", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-advanced-math/x0a8c2e5f3af3e66b:sat-quadratic-functions/e/sat-quadratic-functions-factored-form", domain: "khanacademy.org" }
                ],
                hasDesmos: true
            },
            {
                id: "logarithms",
                title: "Exponential & Logarithmic Functions",
                description: "Understand exponential growth/decay, define logarithm as the inverse of exponent (log_b(x) = y ↔ b^y = x), master all log rules (product, quotient, power, change-of-base), and solve exponential equations using natural log (ln).",
                learnLinks: [
                    { name: "Intro to Logarithms (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6ec90d96a98:exponential-models-logarithms", domain: "khanacademy.org" },
                    { name: "Log Properties Explained (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=TMmxKZaCqe0", domain: "youtube.com" },
                    { name: "Solving Logarithmic Equations (Brian McLogan)", url: "https://www.youtube.com/watch?v=kR6D9O6qG6k", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Logarithm Properties Practice (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2#x2ec2f6ec90d96a98:exponential-models-logarithms", domain: "khanacademy.org" },
                    { name: "SAT Exponential Models Drills", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-advanced-math/x0a8c2e5f3af3e66b:sat-exponential-functions/e/sat-exponential-functions", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            },
            {
                id: "trigonometry-basics",
                title: "Trigonometric Ratios, Graphs & Unit Circle",
                description: "SAT & AP Calc prerequisite. Learn sin/cos/tan on right triangles (SOH-CAH-TOA), the unit circle (key angle values: 0°, 30°, 45°, 60°, 90°), graphing sine and cosine waves (amplitude, period, phase shift), and basic sine/cosine law for oblique triangles.",
                learnLinks: [
                    { name: "Trigonometry & Unit Circle (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6ec90d96a98:trigonometry", domain: "khanacademy.org" },
                    { name: "Unit Circle Memorization Guide (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=ER8KsPCPFdE", domain: "youtube.com" },
                    { name: "Graphing Trigonometric Functions (Brian McLogan)", url: "https://www.youtube.com/watch?v=2pS6L8t1ZtA", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Trig Ratios & Graphing Exercises (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2#x2ec2f6ec90d96a98:trigonometry", domain: "khanacademy.org" },
                    { name: "SAT Trig & Geometry Practice Problems", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-geometry-trigonometry/x0a8c2e5f3af3e66b:sat-trigonometry/e/sat-trig-ratios-and-special-right-triangles", domain: "khanacademy.org" }
                ],
                hasDesmos: true
            },
            {
                id: "non-linear-inequalities",
                title: "Non-Linear Inequalities (Wavy-Curve)",
                description: "Solve quadratic, polynomial, and rational inequalities algebraically using the Wavy-Curve (Sign Chart / Number Line) method. Essential for Pre-Calculus and AP Calculus domain analysis.",
                learnLinks: [
                    { name: "Wavy Curve / Sign Chart Method Explained (YouTube)", url: "https://www.youtube.com/watch?v=gT8Z07a4u2I", domain: "youtube.com" },
                    { name: "Solving Rational Inequalities (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6ec90d96a98:rational-functions#x2ec2f6ec90d96a98:rational-inequalities", domain: "khanacademy.org" },
                    { name: "Rational Inequalities (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=0yZcPyHWTwk", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Polynomial Inequalities Practice (Khan Academy)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6ec90d96a98:rational-functions#x2ec2f6ec90d96a98:rational-inequalities", domain: "khanacademy.org" },
                    { name: "SAT Math: Advanced Inequalities Drills", url: "https://collegepanda.com/", domain: "collegepanda.com" }
                ],
                hasDesmos: true
            },
            {
                id: "combinatorics-intro",
                title: "Permutations, Combinations & Probability",
                description: "Counting problems appear on SAT and are foundational for probabilistic AI. Learn fundamental counting principle, factorial notation, permutations P(n,r) when order matters, combinations C(n,r) when order doesn't matter, and basic probability (P = favorable / total).",
                learnLinks: [
                    { name: "Permutations & Combinations Intro (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations", domain: "khanacademy.org" },
                    { name: "Fundamental Counting Principle (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations/counting-principle-lib/v/basic-probability", domain: "khanacademy.org" },
                    { name: "Permutations and Combinations Tutorial (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=XqNHagaCMKw", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Permutations & Combinations Exercises (Khan Academy)", url: "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations#permutations", domain: "khanacademy.org" },
                    { name: "SAT Probability & Combinatorics Problems", url: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f3af3e66b:sat-math-problem-solving-data-analysis/x0a8c2e5f3af3e66b:sat-probability/e/sat-probability", domain: "khanacademy.org" }
                ],
                hasDesmos: false
            }
        ]
    },
    {
        id: "tier5-calc-ab",
        title: "Tier 5: AP Calculus AB — Limits & Derivatives",
        type: "math",
        items: [
            {
                id: "calculus-limits",
                title: "Limits & Continuity",
                description: "The gateway to all Calculus. Understand the concept of a limit (what a function approaches, not its value at a point). Evaluate limits algebraically (direct substitution, factoring, rationalizing), one-sided limits, limits at infinity, and analyze continuity vs. discontinuity on a graph.",
                learnLinks: [
                    { name: "Essence of Calculus: What is a limit? (3Blue1Brown)", url: "https://www.youtube.com/watch?v=kfF40MiS7zA", domain: "youtube.com" },
                    { name: "Limits Introduction — AP Calculus (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-2/v/introduction-to-limits-hd", domain: "khanacademy.org" },
                    { name: "Limits Full Playlist (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=YNstP0ESndU", domain: "youtube.com" },
                    { name: "Calculus 1: Limits (Professor Leonard)", url: "https://www.youtube.com/playlist?list=PLF797E961509B4EB5", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "AP Calc AB: Limits Unit Practice (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new", domain: "khanacademy.org" },
                    { name: "College Board AP Calculus AB: Limits Free-Response", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam/past-exam-questions", domain: "apcentral.collegeboard.org" }
                ],
                hasDesmos: true
            },
            {
                id: "calculus-derivatives",
                title: "Derivatives & Differentiation Rules",
                description: "The mathematical engine behind AI training. Learn: what a derivative measures (instantaneous rate of change = slope of tangent line), power rule, product rule, quotient rule, chain rule, and derivatives of trig, exponential (e^x), and logarithmic functions.",
                learnLinks: [
                    { name: "Essence of Calculus: The Paradox of the Derivative (3Blue1Brown)", url: "https://www.youtube.com/watch?v=9vKqVkMQHKk", domain: "youtube.com" },
                    { name: "Derivatives Full Course — AP Calculus (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new", domain: "khanacademy.org" },
                    { name: "Chain Rule Explained (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=HaHsqDjWMLU", domain: "youtube.com" },
                    { name: "Calculus 1: Derivatives (Professor Leonard)", url: "https://www.youtube.com/watch?v=cCCbHfaG2LU", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Differentiation Rules Practice (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new", domain: "khanacademy.org" },
                    { name: "Derivative Rules Unit Quiz (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-diff-1-optional/e/taking-derivatives", domain: "khanacademy.org" }
                ],
                hasDesmos: true
            },
            {
                id: "calculus-deriv-apps",
                title: "Applications of Derivatives (Optimization & AI Insight)",
                description: "Where calculus becomes useful for AI. Learn: increasing/decreasing intervals, local/global min-max, first & second derivative tests, curve sketching, and optimization problems. Critically: understand how Gradient Descent (the core of neural network training) uses the derivative to minimize a loss function.",
                learnLinks: [
                    { name: "Applying Derivatives — AP Calculus (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new", domain: "khanacademy.org" },
                    { name: "Gradient Descent, Step-by-Step (StatQuest)", url: "https://www.youtube.com/watch?v=sDv4f4s2SB8", domain: "youtube.com" },
                    { name: "Optimization Calculus (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=1rD4f07zNtc", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Derivative Applications Unit Test (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new", domain: "khanacademy.org" },
                    { name: "AP Calc AB Free Response: Optimization Problems (College Board)", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam/past-exam-questions", domain: "apcentral.collegeboard.org" }
                ],
                hasDesmos: true
            },
            {
                id: "calculus-integrals",
                title: "Indefinite & Definite Integrals",
                description: "The reverse of differentiation. Learn antiderivatives (indefinite integrals), Fundamental Theorem of Calculus (FTC Parts 1 & 2), Riemann sums for area approximation, definite integrals for exact area under a curve, and basic u-substitution.",
                learnLinks: [
                    { name: "Essence of Calculus: Integration and the FTC (3Blue1Brown)", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0", domain: "youtube.com" },
                    { name: "Integration — AP Calculus AB (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new", domain: "khanacademy.org" },
                    { name: "Fundamental Theorem of Calculus (The Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=xjtEfpFbGH8", domain: "youtube.com" },
                    { name: "Calculus 1: Integrals (Professor Leonard)", url: "https://www.youtube.com/playlist?list=PLF797E961509B4EB5", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Integration Unit Tests (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new", domain: "khanacademy.org" },
                    { name: "AP Calculus AB Practice Exam (College Board Official)", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab/exam/past-exam-questions", domain: "apcentral.collegeboard.org" }
                ],
                hasDesmos: true
            }
        ]
    },
    {
        id: "tier6-calc-bc-linalg",
        title: "Tier 6: AP Calculus BC & Linear Algebra (AI Core)",
        type: "math",
        items: [
            {
                id: "calculus-series",
                title: "Infinite Sequences & Series (Taylor & Maclaurin)",
                description: "AP Calculus BC-exclusive topic crucial for AI signal processing. Learn: convergence and divergence of series (ratio test, integral test), geometric series, power series, Taylor series expansion f(x) = Σ f^n(a)/n! (x-a)^n, and Maclaurin series (Taylor at a=0). Used in ML to approximate activation functions.",
                learnLinks: [
                    { name: "Taylor Series Explained (3Blue1Brown)", url: "https://www.youtube.com/watch?v=3d6DsjIBzJ4", domain: "youtube.com" },
                    { name: "Sequences & Series — AP Calculus BC (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new", domain: "khanacademy.org" },
                    { name: "Calculus 2: Sequences and Series (Professor Leonard)", url: "https://www.youtube.com/watch?v=8l0zEaGkGk0&list=PLDesaqWTN6EQ2J4vgsN1s-m1Y75E9wB3x", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Series Convergence Practice (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new", domain: "khanacademy.org" },
                    { name: "AP Calculus BC Past Free-Response (Series Focus)", url: "https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam/past-exam-questions", domain: "apcentral.collegeboard.org" }
                ],
                hasDesmos: false
            },
            {
                id: "calculus-integration-adv",
                title: "Advanced Integration Techniques",
                description: "AP Calculus BC's integration toolkit. Learn Integration by Parts (∫u dv = uv - ∫v du), partial fractions decomposition, and trigonometric integrals. These appear directly in BC exams and are prerequisites for the probability integrals used in AI statistics.",
                learnLinks: [
                    { name: "Integration by Parts (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-6-11/v/deriving-integration-by-parts-formula", domain: "khanacademy.org" },
                    { name: "Advanced Integration Techniques Playlist (Organic Chemistry Tutor)", url: "https://www.youtube.com/watch?v=svbcL1bXwkQ", domain: "youtube.com" },
                    { name: "Calculus 2: Integration Techniques (Professor Leonard)", url: "https://www.youtube.com/playlist?list=PLDesaqWTN6EQ2J4vgsN1s-m1Y75E9wB3x", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Advanced Integration Unit (Khan Academy)", url: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new", domain: "khanacademy.org" },
                    { name: "BC Integration Free-Response Practice (College Board)", url: "https://apcentral.collegeboard.org/courses/ap-calculus-bc/exam/past-exam-questions", domain: "apcentral.collegeboard.org" }
                ],
                hasDesmos: false
            },
            {
                id: "linear-algebra-matrices",
                title: "Vectors, Matrices & Linear Transformations",
                description: "The language AI speaks. Every image, audio, or text fed into an AI model is represented as a matrix of numbers. Learn: vector addition/scalar multiplication, dot product, matrix multiplication (A×B), transpose, determinant, inverse matrix, and how linear transformations reshape data. This is the #1 math skill for ML engineering.",
                learnLinks: [
                    { name: "Essence of Linear Algebra (3Blue1Brown)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", domain: "youtube.com" },
                    { name: "Linear Algebra Full Course (Khan Academy)", url: "https://www.khanacademy.org/math/linear-algebra", domain: "khanacademy.org" },
                    { name: "MIT 18.06 Linear Algebra, Spring 2005 (Gilbert Strang)", url: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Matrix Operations Exercises (Khan Academy)", url: "https://www.khanacademy.org/math/precalculus/x9e81a4e98b3c7ae9:matrices#x9e81a4e98b3c7ae9:practice", domain: "khanacademy.org" },
                    { name: "Linear Algebra Problem Sets (MIT OpenCourseWare)", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/assignments/", domain: "ocw.mit.edu" }
                ],
                hasDesmos: false
            },
            {
                id: "ai-math-gradient-descent",
                title: "Multivariable Calculus & Gradient Descent",
                description: "The mathematical core of Deep Learning. Learn: partial derivatives (∂f/∂x — treating other variables as constants), the gradient vector ∇f (the direction of steepest ascent), and how Gradient Descent iteratively moves a model's parameters in the direction of -∇f to minimize the loss function. This is exactly how GPT and neural networks 'learn'.",
                learnLinks: [
                    { name: "Gradient Descent in Machine Learning (StatQuest)", url: "https://www.youtube.com/watch?v=sDv4f4s2SB8", domain: "youtube.com" },
                    { name: "Partial Derivatives Introduction (Khan Academy)", url: "https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/introduction-to-partial-derivatives", domain: "khanacademy.org" },
                    { name: "Backpropagation calculus (3Blue1Brown)", url: "https://www.youtube.com/watch?v=tIeHLnjs5U8", domain: "youtube.com" }
                ],
                practiceLinks: [
                    { name: "Multivariable Calculus Exercises (Khan Academy)", url: "https://www.khanacademy.org/math/multivariable-calculus", domain: "khanacademy.org" },
                    { name: "Implement Gradient Descent from Scratch (fast.ai)", url: "https://course.fast.ai/", domain: "fast.ai" }
                ],
                hasDesmos: false
            }
        ]
    },
    {
        id: "ielts-y1",
        title: "IELTS Track: Year 1 (Foundations)",
        type: "english",
        items: [
            {
                id: "ielts-grammar",
                title: "English Grammar & Sentences",
                description: "Master grammar structures, active/passive voice, relative clauses, and compounding logic to construct complex sentences naturally.",
                learnLinks: [
                    { name: "BBC Advanced Grammar Guide", url: "https://www.bbc.co.uk/learningenglish/advanced-grammar-guide", domain: "bbc.co.uk" }
                ],
                practiceLinks: [
                    { name: "Sentence Structure Drills (BBC Learning English)", url: "https://www.bbc.co.uk/learningenglish/english/course/towards-advanced", domain: "bbc.co.uk" }
                ],
                hasDesmos: false
            },
            {
                id: "ielts-vocabulary",
                title: "Academic Vocabulary & Reading",
                description: "Build robust vocab lists for IELTS. Focus on reading long-form economics, science, and history articles without translation support.",
                learnLinks: [
                    { name: "The Economist Main Articles", url: "https://www.economist.com/", domain: "economist.com" },
                    { name: "Vocabulary.com Word Lists", url: "https://www.vocabulary.com/lists", domain: "vocabulary.com" }
                ],
                practiceLinks: [
                    { name: "Academic Vocabulary Practice (Vocabulary.com)", url: "https://www.vocabulary.com/play/", domain: "vocabulary.com" }
                ],
                hasDesmos: false
            }
        ]
    },
    {
        id: "ielts-y2",
        title: "IELTS Track: Year 2 (Simulation)",
        type: "english",
        items: [
            {
                id: "ielts-format",
                title: "IELTS Format & Assessment Overview",
                description: "Understand the four modules (Reading, Writing, Speaking, Listening) and study band descriptor requirements for tasks.",
                learnLinks: [
                    { name: "IELTS Liz — Band Descriptors Explained", url: "https://ieltsliz.com/ielts-band-scores/", domain: "ieltsliz.com" }
                ],
                practiceLinks: [
                    { name: "IELTS Test Format Overview (IELTS Liz)", url: "https://ieltsliz.com/ielts-test-format/", domain: "ieltsliz.com" }
                ],
                hasDesmos: false
            },
            {
                id: "ielts-tactics",
                title: "Writing & Speaking Templates",
                description: "Study structured templates for Writing Task 1 (charts, lines, maps) and Writing Task 2 (argument essays). Run spontaneous speaking drills.",
                learnLinks: [
                    { name: "IELTS Writing Task 1 Tips (IELTS Liz)", url: "https://ieltsliz.com/ielts-writing-task-1-lessons/", domain: "ieltsliz.com" },
                    { name: "IELTS Writing Task 2 Essay Structures (IELTS Liz)", url: "https://ieltsliz.com/ielts-writing-task-2/", domain: "ieltsliz.com" }
                ],
                practiceLinks: [
                    { name: "Writing Practice & Analysis (E2 IELTS YouTube)", url: "https://www.youtube.com/@E2IELTS", domain: "youtube.com" }
                ],
                hasDesmos: false
            },
            {
                id: "ielts-mocks",
                title: "Timed Simulations & Full Mock Tests",
                description: "Complete full, timed mock papers to build physical stamina for the 3-hour exam timeframe.",
                learnLinks: [
                    { name: "British Council — Free IELTS Practice Tests", url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-practice-tests", domain: "takeielts.britishcouncil.org" }
                ],
                practiceLinks: [
                    { name: "Full Reading & Listening Mock Tests (IELTS Liz)", url: "https://ieltsliz.com/free-ielts-practice-tests/", domain: "ieltsliz.com" }
                ],
                hasDesmos: false
            }
        ]
    }
];

const topicStudyMaterial = {
    integers: {
        tips: [
            "Rule of Signs: When multiplying or dividing, same signs give positive (+), different signs give negative (-).",
            "Subtraction as Addition: Rewrite subtraction of a negative as addition of a positive: <span class=\"tip-code\">a - (-b) = a + b</span>.",
            "Absolute Value: <span class=\"tip-code\">|x|</span> is the distance from 0. It is always non-negative. E.g., <span class=\"tip-code\">|-5| = 5</span>.",
            "SAT Trap: Watch out for parentheses! <span class=\"tip-code\">-x²</span> is not the same as <span class=\"tip-code\">(-x)²</span>. If x = -3, <span class=\"tip-code\">-x² = -9</span>, but <span class=\"tip-code\">(-x)² = 9</span>."
        ],
        aiPrompts: [
            {
                title: "Socratic Integer Tutor",
                desc: "Guides you step-by-step through solving negative number equations without giving away answers directly.",
                prompt: "Act as a Socratic math tutor. I am studying Integer & Negative Number Operations. Do not give me the answers directly. Ask me one question at a time to check my understanding and guide me to solve questions involving integers and double signs step-by-step."
            },
            {
                title: "Feynman Analogy Guide",
                desc: "Explains negative number math using simple, real-world concepts (like bank accounts or elevators).",
                prompt: "Explain the concepts of adding, subtracting, multiplying, and dividing negative numbers using the Feynman Technique. Use simple real-world analogies (like debts, elevators, or walking backwards) to make it intuitive."
            },
            {
                title: "Common Pitfalls Quiz",
                desc: "Tests your ability to spot typical sign errors on exams.",
                prompt: "Provide 3 algebraic equations containing double negative signs and absolute values where students commonly make careless errors. Show the incorrect way students solve them, explain why it is incorrect, and then ask me to solve them correctly."
            }
        ]
    },
    pemdas: {
        tips: [
            "Order: Parentheses ➔ Exponents ➔ Multiplication & Division (Left to Right) ➔ Addition & Subtraction (Left to Right).",
            "Division Trap: Division and multiplication have the same priority. Solve them strictly from left to right. E.g., <span class=\"tip-code\">8 ÷ 2 × 4 = 4 × 4 = 16</span>, NOT <span class=\"tip-code\">8 ÷ 8 = 1</span>.",
            "Fraction Bar: A fraction bar acts as a grouping symbol. Fully simplify the numerator and denominator before dividing."
        ],
        aiPrompts: [
            {
                title: "Order of Operations Evaluator",
                desc: "Generates step-by-step nested PEMDAS problems to drill calculation order.",
                prompt: "Generate 3 advanced arithmetic problems containing nested parentheses, exponents, fractions, and multiplication/division to practice PEMDAS. Walk me through the step-by-step order of operations for solving them."
            },
            {
                title: "Common Traps Checker",
                desc: "Explains why left-to-right priority causes mistakes in division and multiplication.",
                prompt: "Explain the common pitfalls when applying PEMDAS/BODMAS, particularly the left-to-right rule for multiplication/division and addition/subtraction. Provide examples of expressions that are frequently evaluated incorrectly."
            }
        ]
    },
    fractions: {
        tips: [
            "Common Denominators: Required for addition and subtraction. Use the Least Common Multiple (LCM) of denominators.",
            "Multiplication: Multiply straight across: <span class=\"tip-code\">(a/b) × (c/d) = (ac)/(bd)</span>. No common denominator needed!",
            "Division (Keep-Change-Flip): Multiply by the reciprocal: <span class=\"tip-code\">(a/b) ÷ (c/d) = (a/b) × (d/c)</span>.",
            "Simplifying: Divide both the numerator and the denominator by their Greatest Common Factor (GCF)."
        ],
        aiPrompts: [
            {
                title: "Fractions Visualizer",
                desc: "Asks the AI to explain fractions using visual descriptions and slicing analogies.",
                prompt: "Explain fraction addition, subtraction, multiplication, and division visually using analogies like pizza slices, measuring cups, or coordinate lines. Keep the explanation intuitive for someone who struggles with abstract math."
            },
            {
                title: "Reciprocal & Division Drills",
                desc: "Creates problems focusing on complex fractions and division by fractions.",
                prompt: "Act as a math tutor. Give me 3 exercises focusing on dividing fractions by fractions and simplifying complex algebraic fractions. Wait for my response before giving the step-by-step solution."
            }
        ]
    },
    "exponents-roots": {
        tips: [
            "Product Rule: <span class=\"tip-code\">xᵃ · xᵇ = xᵃ⁺ᵇ</span>.",
            "Quotient Rule: <span class=\"tip-code\">xᵃ / xᵇ = xᵃ⁻ᵇ</span>.",
            "Power of Power Rule: <span class=\"tip-code\">(xᵃ)ᵇ = xᵃᵇ</span>.",
            "Negative Exponents: <span class=\"tip-code\">x⁻ⁿ = 1/xⁿ</span>.",
            "Fractional Exponents: <span class=\"tip-code\">x^(a/b) = ᵇ√xᵃ</span>.",
            "Radical Simplification: Find the largest perfect square factor: <span class=\"tip-code\">√18 = √(9 · 2) = 3√2</span>."
        ],
        aiPrompts: [
            {
                title: "Exponent Laws Simplifier",
                desc: "Helps you memorize and practice applying product, quotient, and power rules.",
                prompt: "Create a cheat sheet and practice drill for the 5 fundamental exponent rules (product, quotient, power-of-power, negative exponents, fractional exponents). Give me 3 simplify-the-expression questions to solve."
            },
            {
                title: "Radicals & Roots Solver",
                desc: "Shows you how to rationalize denominators and simplify square/cube roots.",
                prompt: "Explain how to simplify radicals and how to rationalize denominators (e.g., simplifying expressions like 3 / (2 + √5)). Give me step-by-step rules and a practice question."
            }
        ]
    },
    "gcf-prime": {
        tips: [
            "Prime Factorization: Break down a number into its prime building blocks (e.g., <span class=\"tip-code\">12 = 2² · 3</span>).",
            "GCF (Greatest Common Factor): Take the lowest power of all common prime factors. Used for simplifying fractions.",
            "LCM (Least Common Multiple): Take the highest power of all prime factors that appear in either number. Used for finding common denominators.",
            "Formula: <span class=\"tip-code\">GCF(a,b) × LCM(a,b) = a × b</span>."
        ],
        aiPrompts: [
            {
                title: "Euclidean Algorithm Coach",
                desc: "Teaches you the fast method to find GCF of large numbers without listing factors.",
                prompt: "Explain the Euclidean Algorithm for finding the Greatest Common Divisor (GCD) of large numbers step-by-step. Give me a walkthrough for GCD(324, 76) and then ask me to try one."
            },
            {
                title: "LCM Word Problems Tutor",
                desc: "Helps you recognize when a word problem is asking for GCF vs. LCM.",
                prompt: "Provide 3 word problems where I need to apply GCF or LCM (e.g., synchronized bell ringing, cutting tiles). Explain the keywords in the questions that reveal whether GCF or LCM is needed."
            }
        ]
    },
    "algebraic-manipulation": {
        tips: [
            "FOIL Method: Expand <span class=\"tip-code\">(a+b)(c+d) = ac + ad + bc + bd</span>.",
            "Difference of Squares: <span class=\"tip-code\">a² - b² = (a-b)(a+b)</span>.",
            "Perfect Square Trinomials: <span class=\"tip-code\">(a ± b)² = a² ± 2ab + b²</span>.",
            "Factoring: For trinomial <span class=\"tip-code\">x² + bx + c</span>, find two numbers that multiply to c and add to b.",
            "Common Trap: Factoring <span class=\"tip-code\">(x+y)²</span> as <span class=\"tip-code\">x² + y²</span>. Don't forget the middle term <span class=\"tip-code\">2xy</span>!"
        ],
        aiPrompts: [
            {
                title: "Factoring Masterclass",
                desc: "Drills factoring quadratics (when a = 1 and when a > 1).",
                prompt: "Act as an SAT Math Coach. I need to practice factoring quadratic trinomials of the form ax^2 + bx + c. Provide 3 problems (one where a=1, one where a>1, and one difference of squares) and guide me through the factoring steps."
            },
            {
                title: "Polynomial Division Tutor",
                desc: "Guides you through polynomial long division and synthetic division.",
                prompt: "Explain polynomial long division and synthetic division step-by-step. Show how to divide (x^3 + 3x^2 - 4) by (x - 1) and explain the Remainder Theorem."
            }
        ]
    },
    "equations-inequalities": {
        tips: [
            "Golden Rule: Whatever you do to one side of the equation, you must do to the other.",
            "Inequality Trap: When multiplying or dividing both sides by a negative number, you MUST flip the inequality sign! E.g., <span class=\"tip-code\">-2x < 6 ➔ x > -3</span>.",
            "Quadratic Formula: For <span class=\"tip-code\">ax² + bx + c = 0</span>, <span class=\"tip-code\">x = (-b ± √(b²-4ac)) / 2a</span>.",
            "Completing the Square: To rewrite <span class=\"tip-code\">x² + bx</span>, add and subtract <span class=\"tip-code\">(b/2)²</span>."
        ],
        aiPrompts: [
            {
                title: "Inequality Sign Checker",
                desc: "Drills multi-step inequalities, highlighting negative multiplication rules.",
                prompt: "Provide 3 algebraic inequalities to solve, including fractions and negative coefficients. Monitor my steps and check if I correctly flip the inequality sign when multiplying or dividing by negative numbers."
            },
            {
                title: "Quadratic Equation Specialist",
                desc: "Helps you choose the best solving method: factoring, completing the square, or quadratic formula.",
                prompt: "Give me a quadratic equation that cannot be easily factored. Guide me to solve it using: (1) completing the square, and (2) the quadratic formula. Verify that both methods yield the same result."
            }
        ]
    },
    "system-equations": {
        tips: [
            "Substitution Method: Best when one variable is already isolated or has a coefficient of 1.",
            "Elimination Method: Multiply equations by constants to cancel out one variable when added together.",
            "Graphical Meaning: The solution is the point where the lines intersect.",
            "Number of Solutions: Parallel lines (same slope, different y-intercept) have NO solution. Overlapping lines have infinite solutions. Intersecting lines have exactly one solution."
        ],
        aiPrompts: [
            {
                title: "SAT Word Problem Solver",
                desc: "Teaches you how to translate wordy English stories into clean equations.",
                prompt: "Provide 2 system of equations word problems typical of the SAT Math section (e.g., ticket pricing, speed/distance, mixture problems). Help me translate the English sentences into mathematical equations first, then guide me to solve them."
            },
            {
                title: "Systems with Infinite/No Solutions",
                desc: "Explains how to determine unknown constants in equations for zero or infinite intersections.",
                prompt: "Explain how to solve systems of equations questions that ask for 'no solutions' or 'infinitely many solutions' when a constant (like 'k' or 'a') is present. Give me a practice problem of this type."
            }
        ]
    },
    "set-theory": {
        tips: [
            "Union (<span class=\"tip-code\">A ∪ B</span>): Elements in A OR B (or both). Includes everything in both circles.",
            "Intersection (<span class=\"tip-code\">A ∩ B</span>): Elements in A AND B. The overlapping region.",
            "Complement (<span class=\"tip-code\">A'</span>): Elements not in set A.",
            "Venn Diagram Formula: <span class=\"tip-code\">|A ∪ B| = |A| + |B| - |A ∩ B|</span>."
        ],
        aiPrompts: [
            {
                title: "Venn Diagram Logic Driller",
                desc: "Creates complex three-circle logic puzzles and shows you how to fill them from the center outward.",
                prompt: "Create a Venn Diagram logic puzzle involving three sets (e.g., students taking Math, Physics, and Chemistry). Explain the step-by-step strategy of starting from the central intersection and working outwards."
            }
        ]
    },
    "geometry-basics": {
        tips: [
            "Pythagorean Theorem: <span class=\"tip-code\">a² + b² = c²</span> (c is the hypotenuse).",
            "Pythagorean Triples to Memorize: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25).",
            "Special Right Triangles: 45-45-90 ratio is <span class=\"tip-code\">1 : 1 : √2</span>. 30-60-90 ratio is <span class=\"tip-code\">1 : √3 : 2</span>.",
            "Circle Arc & Sector: <span class=\"tip-code\">Arc Length = (θ/360) · 2πr</span>. <span class=\"tip-code\">Sector Area = (θ/360) · πr²</span>."
        ],
        aiPrompts: [
            {
                title: "Special Right Triangles Coach",
                desc: "Explains the shortcuts for finding side lengths in 30-60-90 and 45-45-90 triangles.",
                prompt: "Act as an SAT Math tutor. Teach me how to quickly find missing side lengths in 30-60-90 and 45-45-90 triangles without using the Pythagorean theorem. Provide 3 practice problems."
            },
            {
                title: "Circle Theorems Master",
                desc: "Reviews arc lengths, sector areas, and central vs. inscribed angle rules.",
                prompt: "Explain the rules of circle geometry: central angles, inscribed angles, tangent lines, arc length, and sector area. Provide a diagram-description practice problem for each."
            }
        ]
    },
    "similarity-congruence": {
        tips: [
            "Similar Triangles: Angles are equal, sides are proportional. (Criteria: AA, SAS, SSS).",
            "Congruent Triangles: Shape and size are identical. Sides and angles are equal. (Criteria: SSS, SAS, ASA, AAS, HL).",
            "Area Scale Factor: If the side ratio is k, the area ratio is <span class=\"tip-code\">k²</span>! If volume, it is <span class=\"tip-code\">k³</span>."
        ],
        aiPrompts: [
            {
                title: "Similarity & Ratios Guide",
                desc: "Explains how to set up proportions for nested triangles.",
                prompt: "Explain how to set up side length proportions for similar triangles, especially nested triangles (one inside another). Give me a step-by-step example and a practice problem."
            }
        ]
    },
    "linear-graphs": {
        tips: [
            "Slope Formula: <span class=\"tip-code\">m = (y₂ - y₁) / (x₂ - x₁)</span>.",
            "Forms: Slope-Intercept (<span class=\"tip-code\">y = mx + b</span>), Point-Slope (<span class=\"tip-code\">y - y₁ = m(x - x₁)</span>).",
            "Parallel vs. Perpendicular: Parallel slopes are equal (<span class=\"tip-code\">m₁ = m₂</span>). Perpendicular slopes are negative reciprocals (<span class=\"tip-code\">m₁ · m₂ = -1</span>).",
            "Distance Formula: <span class=\"tip-code\">d = √((x₂-x₁)² + (y₂-y₁)²)</span>."
        ],
        aiPrompts: [
            {
                title: "Coordinate Geometry Helper",
                desc: "Drills linear equation conversions and finding perpendicular bisectors.",
                prompt: "Explain coordinate geometry basics: how to find the equation of a line parallel/perpendicular to a given line passing through a specific point. Ask me a 2-step question to solve."
            }
        ]
    },
    "quadratic-functions": {
        tips: [
            "Forms: Standard (<span class=\"tip-code\">y = ax² + bx + c</span>), Vertex (<span class=\"tip-code\">y = a(x-h)² + k</span> where (h,k) is the vertex).",
            "Finding Vertex: <span class=\"tip-code\">h = -b / 2a</span>, then plug in to find <span class=\"tip-code\">k = f(h)</span>.",
            "Discriminant: <span class=\"tip-code\">D = b² - 4ac</span>. If D > 0, 2 real roots; if D = 0, 1 real root; if D < 0, 0 real roots.",
            "Parabola Direction: If a > 0, opens UP (min vertex). If a < 0, opens DOWN (max vertex)."
        ],
        aiPrompts: [
            {
                title: "Parabola Analysis Drill",
                desc: "Teaches you how to convert quadratic equations into vertex form by completing the square.",
                prompt: "Act as an Advanced Math Coach. Explain how to convert the quadratic equation y = 2x^2 - 12x + 10 into vertex form y = a(x-h)^2 + k by completing the square. Ask me to perform a similar conversion and check my work."
            },
            {
                title: "Discriminant & Roots Tutor",
                desc: "Focuses on discriminant questions where you solve for unknown constants.",
                prompt: "Provide 2 problems exploring the discriminant of a quadratic equation. One problem should ask me to find the range of 'k' values for which the equation has no real solutions."
            }
        ]
    },
    logarithms: {
        tips: [
            "Definition: <span class=\"tip-code\">log_b(x) = y ➔ bʸ = x</span>.",
            "Product Rule: <span class=\"tip-code\">log_b(xy) = log_b(x) + log_b(y)</span>.",
            "Quotient Rule: <span class=\"tip-code\">log_b(x/y) = log_b(x) - log_b(y)</span>.",
            "Power Rule: <span class=\"tip-code\">log_b(xᵏ) = k log_b(x)</span>.",
            "Change of Base: <span class=\"tip-code\">log_b(x) = ln(x) / ln(b)</span>."
        ],
        aiPrompts: [
            {
                title: "Log Laws Drill",
                desc: "Drills expanding and condensing complex logarithmic expressions.",
                prompt: "Generate 3 expressions to practice expanding and condensing using logarithm properties (product, quotient, power rules). Walk me through the step-by-step derivation."
            }
        ]
    },
    "trigonometry-basics": {
        tips: [
            "SOH-CAH-TOA: <span class=\"tip-code\">sin(θ) = Opp/Hyp</span>, <span class=\"tip-code\">cos(θ) = Adj/Hyp</span>, <span class=\"tip-code\">tan(θ) = Opp/Adj</span>.",
            "Identity: <span class=\"tip-code\">sin²(θ) + cos²(θ) = 1</span>.",
            "Unit Circle Coordinates: <span class=\"tip-code\">(x, y) = (cos(θ), sin(θ))</span>.",
            "Degrees to Radians: Multiply by <span class=\"tip-code\">π / 180</span>."
        ],
        aiPrompts: [
            {
                title: "Unit Circle Memorizer",
                desc: "Provides tricks and shortcuts (like the Hand Rule) to recall sin/cos values quickly.",
                prompt: "Explain the unit circle and teach me shortcuts (like the finger shortcut or coordinate patterns) to quickly memorize sine and cosine values for standard angles: 0, 30, 45, 60, and 90 degrees."
            }
        ]
    },
    "non-linear-inequalities": {
        tips: [
            "Wavy-Curve Method: Isolation (make right side 0) ➔ Factor (find roots) ➔ Plot critical numbers on number line ➔ Determine signs of intervals starting positive from the far right.",
            "Even Multiplicity: At roots with even exponents (e.g. <span class=\"tip-code\">(x-c)²</span>), sign does NOT change (curve bounces).",
            "Odd Multiplicity: At roots with odd exponents, sign changes (curve crosses line)."
        ],
        aiPrompts: [
            {
                title: "Wavy Curve Method Coach",
                desc: "Teaches the sign chart method for solving polynomial and rational inequalities.",
                prompt: "Explain the Wavy Curve (Sign Chart) method for solving non-linear polynomial inequalities. Guide me through solving (x-1)(x+2)^2(x-3) >= 0."
            }
        ]
    },
    "combinatorics-intro": {
        tips: [
            "Permutations: Order MATTERS (e.g. race positions, codes). <span class=\"tip-code\">P(n,r) = n! / (n-r)!</span>.",
            "Combinations: Order DOES NOT matter (e.g. committees). <span class=\"tip-code\">C(n,r) = n! / (r!(n-r)!)</span>.",
            "Probability: <span class=\"tip-code\">P(A) = Favorable / Total</span>.",
            "Complement: <span class=\"tip-code\">P(A') = 1 - P(A)</span>."
        ],
        aiPrompts: [
            {
                title: "Permutations vs. Combinations",
                desc: "Explains how to identify when order matters in word problems.",
                prompt: "Explain the difference between Permutations and Combinations. Provide 3 word problems, and help me determine which counting formula applies to each."
            }
        ]
    },
    "calculus-limits": {
        tips: [
            "Limit Concept: The value f(x) approaches as x gets arbitrarily close to c from both sides.",
            "Direct Substitution: Try this first. If you get a real number, that is your limit.",
            "Indeterminate Form (0/0): Factor, rationalize, or expand the expression, then substitute again.",
            "Continuity: Continuous at c if: (1) f(c) exists, (2) limit exists, and (3) limit = f(c)."
        ],
        aiPrompts: [
            {
                title: "Indeterminate Limits Solver",
                desc: "Teaches factoring and rationalizing techniques for 0/0 limits.",
                prompt: "Explain how to evaluate algebraic limits that result in the indeterminate form 0/0. Provide a step-by-step walkthrough for factoring, rationalizing denominators, and using the squeeze theorem."
            }
        ]
    },
    "calculus-derivatives": {
        tips: [
            "Derivative Definition: Instantaneous rate of change / slope of tangent line.",
            "Power Rule: <span class=\"tip-code\">d/dx[xⁿ] = n xⁿ⁻¹</span>.",
            "Product Rule: <span class=\"tip-code\">(uv)' = u'v + uv'</span>.",
            "Quotient Rule: <span class=\"tip-code\">(u/v)' = (u'v - uv') / v²</span>.",
            "Chain Rule: <span class=\"tip-code\">d/dx[f(g(x))] = f'(g(x)) · g'(x)</span>."
        ],
        aiPrompts: [
            {
                title: "Chain Rule Masterclass",
                desc: "Drills nested derivatives using the chain rule.",
                prompt: "Act as a Calculus Tutor. I want to master the Chain Rule for derivatives. Explain it using nested functions, and give me 3 practice problems to solve step-by-step."
            }
        ]
    },
    "calculus-deriv-apps": {
        tips: [
            "First Derivative Test: If f'(x) > 0, f is increasing. If f'(x) < 0, f is decreasing. Critical points occur where f'(x) = 0 or undefined.",
            "Concavity: If f''(x) > 0, concave up. If f''(x) < 0, concave down. Inflection point occurs where concavity changes sign.",
            "AI Connection: Gradient Descent adjusts parameters: <span class=\"tip-code\">w ➔ w - α · ∂L/∂w</span> to minimize loss."
        ],
        aiPrompts: [
            {
                title: "Optimization Problem Coach",
                desc: "Teaches you how to set up and solve classic calc min/max word problems.",
                prompt: "Explain the optimization workflow in Calculus (finding local maxima and minima to solve real-world problems). Provide a classic problem (like maximizing the area of a fence) and guide me through the steps."
            },
            {
                title: "Gradient Descent in AI",
                desc: "Deep-dives into how neural networks use derivatives to learn.",
                prompt: "Explain the connection between derivative applications (like finding the slope to locate minimum points) and Gradient Descent in Neural Networks. Use clear analogies and math terms."
            }
        ]
    },
    "calculus-integrals": {
        tips: [
            "Antiderivative: The reverse of differentiation. Don't forget <span class=\"tip-code\">+ C</span>!",
            "Power Rule for Integrals: <span class=\"tip-code\">∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C</span> (for n ≠ -1).",
            "Integral of 1/x: <span class=\"tip-code\">∫ (1/x) dx = ln|x| + C</span>.",
            "FTC: <span class=\"tip-code\">∫[a to b] f(x) dx = F(b) - F(a)</span> where F'(x) = f(x)."
        ],
        aiPrompts: [
            {
                title: "U-Substitution Specialist",
                desc: "Drills matching composite functions with their derivative parts for integration.",
                prompt: "Explain U-Substitution for integrals step-by-step. Show how to identify which part of the integrand to set as 'u', and give me 2 practice problems."
            }
        ]
    },
    "calculus-series": {
        tips: [
            "Geometric Series: converges to <span class=\"tip-code\">a / (1-r)</span> if |r| < 1.",
            "Ratio Test: converges if <span class=\"tip-code\">lim |a_n+1 / a_n| < 1</span>.",
            "Taylor Series: <span class=\"tip-code\">f(x) = Σ f⁽ⁿ⁾(a)/n! (x-a)ⁿ</span>.",
            "Key Maclaurin Series: <span class=\"tip-code\">eˣ = Σ xⁿ/n!</span>, <span class=\"tip-code\">sin(x) = Σ (-1)ⁿ x²ⁿ⁺¹/(2n+1)!</span>."
        ],
        aiPrompts: [
            {
                title: "Taylor Series Approximator",
                desc: "Explains how infinite polynomials approximate complex functions like sin(x) or e^x.",
                prompt: "Explain Taylor and Maclaurin series expansions. Why do we represent trigonometric or exponential functions as infinite polynomials in mathematics and AI? Give a visual-style text explanation."
            }
        ]
    },
    "calculus-integration-adv": {
        tips: [
            "Integration by Parts: <span class=\"tip-code\">∫ u dv = uv - ∫ v du</span>.",
            "LIATE Rule: Choose 'u' in order: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.",
            "Partial Fractions: Expand <span class=\"tip-code\">1 / ((x-a)(x-b)) = A/(x-a) + B/(x-b)</span> then integrate."
        ],
        aiPrompts: [
            {
                title: "Integration by Parts Drill",
                desc: "Drills selecting 'u' and 'dv' correctly to avoid infinite integration loops.",
                prompt: "Explain Integration by Parts. Give me 2 problems to practice (e.g., integrating x*ln(x) or x*e^x) and guide me through selecting 'u' and 'dv' using LIATE."
            }
        ]
    },
    "linear-algebra-matrices": {
        tips: [
            "Matrix Multiplication: Row-by-column dot products. <span class=\"tip-code\">A_m×n · B_n×p = C_m×p</span>.",
            "Determinant (2x2): <span class=\"tip-code\">ad - bc</span>. If det = 0, matrix is singular (no inverse).",
            "Transpose (Aᵀ): Swapping rows and columns.",
            "AI Core: All images, text embeddings, and weights in AI are represented as matrices of floating numbers."
        ],
        aiPrompts: [
            {
                title: "Linear Transformations Visualizer",
                desc: "Explains matrix multiplication as stretching, rotating, and shearing coordinate spaces.",
                prompt: "Explain matrix multiplication and linear transformations visually (e.g. stretching or rotating vectors in space). Explain why this mathematical system is ideal for representing image pixels and word embeddings in AI."
            }
        ]
    },
    "ai-math-gradient-descent": {
        tips: [
            "Partial Derivative: Derivative with respect to one variable, treating others as constants.",
            "Gradient (∇f): Vector of all partial derivatives. Points in the direction of steepest increase.",
            "Gradient Descent Update: <span class=\"tip-code\">x_new = x_old - η · ∇f(x_old)</span>.",
            "Learning Rate (η): Controls step size. Too large overshoots; too small takes forever."
        ],
        aiPrompts: [
            {
                title: "Backpropagation Calculus",
                desc: "Walks through how chain rule and partial derivatives adjust weights in neural networks.",
                prompt: "Explain how partial derivatives and the chain rule are used in Backpropagation to train neural networks. Walk through the math using a simple 3-node network (input, hidden weight, output loss)."
            }
        ]
    },
    "ielts-grammar": {
        tips: [
            "Complex Sentences: Combine clauses using subordinators (although, since, whereas).",
            "Relative Clauses: Add details using 'which', 'who', 'whose', 'where'. Excellent for IELTS Task 1 synthesis.",
            "Advanced Structures: Use inversion (e.g., 'Rarely have we seen...') for band 7.5+ grammar marks."
        ],
        aiPrompts: [
            {
                title: "IELTS Sentence Upgrader",
                desc: "Rewrite simple sentences into band 8+ structures using relative clauses, nominalization, or inversions.",
                prompt: "Act as an IELTS Writing Examiner. I will write a simple sentence. Please rewrite it in 3 ways to achieve Band 8+ grammar: (1) using passive/relative clauses, (2) using advanced nominalization, and (3) using inversion or conditional structures."
            }
        ]
    },
    "ielts-vocabulary": {
        tips: [
            "Academic Collocations: Learn phrases like 'profound impact', 'mitigate consequences', 'skeptical view'.",
            "Paraphrasing: The core reading skill. Match keywords in questions with synonyms in the texts.",
            "Depth > Breadth: Focus on using a few advanced words perfectly in context rather than many complex words incorrectly."
        ],
        aiPrompts: [
            {
                title: "Academic Vocabulary Builder",
                desc: "Generates high-level collocations and idioms for specific essay topics.",
                prompt: "Provide 10 high-level academic vocabulary words and collocations useful for an IELTS essay. For each, give the definition, band 8+ sample sentence, and common synonyms."
            }
        ]
    },
    "ielts-format": {
        tips: [
            "Writing Criteria: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy (25% each).",
            "Speaking Criteria: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation (25% each).",
            "Timing: Budget 20 mins for Task 1 and 40 mins for Task 2. Task 2 is worth twice the points!"
        ],
        aiPrompts: [
            {
                title: "Examiner Rubric Explainer",
                desc: "Breaks down band descriptors to show you exactly what is required to cross from Band 6 to Band 7/8.",
                prompt: "Act as an IELTS Examiner. Explain the difference between Band 6, Band 7, and Band 8 in the Writing section. Detail exactly what candidates must do in terms of Lexical Resource and Coherence to level up."
            }
        ]
    },
    "ielts-tactics": {
        tips: [
            "Task 1 Structure: Paraphrase Intro ➔ Overview (2 major trends) ➔ Detail Paragraph 1 ➔ Detail Paragraph 2. No personal opinions!",
            "Task 2 Structure: Intro (Paraphrase + Thesis) ➔ Body 1 (Idea + Detail + Example) ➔ Body 2 (Idea + Detail + Example) ➔ Conclusion (Summarize).",
            "Speaking Part 2 (Cue Card): Use the 1-min prep time to jot down a timeline (Past, Present, Future) to keep speaking for 2 mins."
        ],
        aiPrompts: [
            {
                title: "Interactive IELTS Essay Checker",
                desc: "Grades your essay draft against the official rubrics, giving a band score and specific line edits.",
                prompt: "Act as an official IELTS Examiner. I will paste an IELTS Writing Task 2 essay. Evaluate it against the 4 assessment criteria, assign a band score, and suggest detailed edits to upgrade my sentences."
            },
            {
                title: "IELTS Speaking Part 3 Partner",
                desc: "Engages you in a Socratic discussion on academic issues, grading your oral responses.",
                prompt: "Let's practice IELTS Speaking Part 3. You are the examiner. Ask me one abstract question. I will reply, then you will evaluate my fluency, vocabulary, and grammar, offering band-score feedback."
            }
        ]
    },
    "ielts-mocks": {
        tips: [
            "Listening Prediction: Before the audio plays, read questions to predict word types (noun, number, date).",
            "Reading Skimming: Spend 2-3 mins reading headings and first sentences to map the passage structure before questions.",
            "Draft Planning: Always spend 3-5 mins planning your writing outline before starting. An unplanned essay caps your score."
        ],
        aiPrompts: [
            {
                title: "Reading Map Trainer",
                desc: "Teaches you how to skim and locate answers quickly by mapping synonyms.",
                prompt: "Act as an IELTS Reading Coach. Give me a short paragraph (200 words) and a typical IELTS reading question (e.g. matching headings or multiple choice). Explain how to scan the text using keyword-synonym mapping to find the answer in 30 seconds."
            }
        ]
    }
};

/* ==========================================================================
   APP CONTROLLER & STATE MANAGEMENT
   ========================================================================== */
class CorePrepApp {
    constructor() {
        this.state = {
            topicProgress: {}, // Key: topicId, Value: { stepCompleted: 0, isMastered: false }
            studyHours: 0,
            problemsSolved: 0,
            streakDays: 0,
            lastActiveDate: ""
        };
        this.activeTopic = null;
        this.desmosOpen = false;

        this.init();
    }

    init() {
        this.loadState();
        this.registerDOMEvents();
        this.renderSyllabus();
        this.updateOverallMetrics();
        this.checkStreakLogic();
    }

    /* Load states from localStorage */
    loadState() {
        try {
            const savedData = localStorage.getItem("coreprep_user_data");
            if (savedData) {
                const parsed = JSON.parse(savedData);
                let progress = parsed.topicProgress || {};
                
                // Migrate old masteredTopics data
                if (parsed.masteredTopics && Object.keys(progress).length === 0) {
                    Object.keys(parsed.masteredTopics).forEach(key => {
                        progress[key] = {
                            stepCompleted: parsed.masteredTopics[key] ? 2 : 0,
                            isMastered: parsed.masteredTopics[key]
                        };
                    });
                }

                this.state = {
                    topicProgress: progress,
                    studyHours: parsed.studyHours || 0,
                    problemsSolved: parsed.problemsSolved || 0,
                    streakDays: parsed.streakDays || 0,
                    lastActiveDate: parsed.lastActiveDate || ""
                };
            }
        } catch (e) {
            console.error("Failed to load local storage state:", e);
        }
    }

    /* Save states to localStorage */
    saveState() {
        try {
            localStorage.setItem("coreprep_user_data", JSON.stringify(this.state));
        } catch (e) {
            console.error("Failed to save local storage state:", e);
        }
    }

    /* Update metrics displays */
    updateOverallMetrics() {
        let totalMath = 0;
        let masteredMath = 0;
        let totalEnglish = 0;
        let masteredEnglish = 0;

        curriculum.forEach(group => {
            group.items.forEach(item => {
                const isMastered = this.state.topicProgress[item.id]?.isMastered === true;
                if (group.type === "math") {
                    totalMath++;
                    if (isMastered) masteredMath++;
                } else {
                    totalEnglish++;
                    if (isMastered) masteredEnglish++;
                }
            });
        });

        const mathPercent = totalMath > 0 ? Math.round((masteredMath / totalMath) * 100) : 0;
        const englishPercent = totalEnglish > 0 ? Math.round((masteredEnglish / totalEnglish) * 100) : 0;

        document.getElementById("math-progress").innerText = `${mathPercent}%`;
        document.getElementById("english-progress").innerText = `${englishPercent}%`;
        document.getElementById("streak-days").innerText = this.state.streakDays;
    }

    /* Check and increment streak days */
    checkStreakLogic() {
        const today = new Date().toDateString();
        if (this.state.lastActiveDate === "") {
            // New user, streak defaults to 0
            return;
        }

        const lastDate = new Date(this.state.lastActiveDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 1) {
            // Gap is more than 24 hours, streak resets
            this.state.streakDays = 0;
            this.saveState();
            document.getElementById("streak-days").innerText = 0;
        }
    }

    /* Update streak when user logs learning metrics */
    triggerStreakUpdate() {
        const today = new Date().toDateString();
        
        if (this.state.lastActiveDate !== today) {
            if (this.state.lastActiveDate === "") {
                this.state.streakDays = 1;
            } else {
                const lastDate = new Date(this.state.lastActiveDate);
                const currentDate = new Date(today);
                const diffTime = Math.abs(currentDate - lastDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    this.state.streakDays += 1;
                } else {
                    this.state.streakDays = 1;
                }
            }
            this.state.lastActiveDate = today;
            this.saveState();
            this.updateOverallMetrics();
        }
    }

    /* Dom Events Listeners Setup */
    registerDOMEvents() {
        // Daily tracker save button
        document.getElementById("save-daily-log").addEventListener("click", () => {
            const hrs = parseFloat(document.getElementById("hours-input").value) || 0;
            const qs = parseInt(document.getElementById("problems-input").value) || 0;

            if (hrs > 0 || qs > 0) {
                this.state.studyHours += hrs;
                this.state.problemsSolved += qs;
                this.triggerStreakUpdate();
                alert(`Successfully logged today's progress:\nHours studied: +${hrs} hrs\nProblems solved: +${qs} qs`);
                
                // Reset daily inputs after saving
                document.getElementById("hours-input").value = 0;
                document.getElementById("problems-input").value = 0;
            } else {
                alert("Please input hours or questions solved before saving.");
            }
        });

        // Step completion button handlers
        document.getElementById("complete-step1-btn").addEventListener("click", () => {
            if (!this.activeTopic) return;
            this.ensureTopicState(this.activeTopic.id);
            this.state.topicProgress[this.activeTopic.id].stepCompleted = Math.max(1, this.state.topicProgress[this.activeTopic.id].stepCompleted);
            this.saveState();
            this.updateStepperDOM();
            document.getElementById("step2-card").scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        document.getElementById("complete-step2-btn").addEventListener("click", () => {
            if (!this.activeTopic) return;
            this.ensureTopicState(this.activeTopic.id);
            this.state.topicProgress[this.activeTopic.id].stepCompleted = Math.max(2, this.state.topicProgress[this.activeTopic.id].stepCompleted);
            this.saveState();
            this.updateStepperDOM();
            document.getElementById("step3-card").scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        // Mastery Checkbox toggle handler
        document.getElementById("mastery-checkbox").addEventListener("change", (e) => {
            if (!this.activeTopic) return;
            this.ensureTopicState(this.activeTopic.id);

            const isChecked = e.target.checked;
            this.state.topicProgress[this.activeTopic.id].isMastered = isChecked;
            if (isChecked) {
                this.state.topicProgress[this.activeTopic.id].stepCompleted = 2; // Make sure step 2 is marked done
            }
            this.saveState();
            this.updateOverallMetrics();
            this.updateStepperDOM();

            // Highlight checked syllabus button in DOM
            const syllabusBtn = document.querySelector(`[data-id="${this.activeTopic.id}"]`);
            if (syllabusBtn) {
                const statusIndicator = syllabusBtn.querySelector(".status-indicator");
                if (isChecked) {
                    statusIndicator.className = "status-indicator mastered fa-solid fa-circle-check";
                } else {
                    statusIndicator.className = "status-indicator in-progress fa-solid fa-circle-notch";
                }
            }
        });

        // Desmos widget visibility toggle
        document.getElementById("toggle-desmos-btn").addEventListener("click", () => {
            this.toggleDesmosWidget();
        });

        document.getElementById("close-desmos-btn").addEventListener("click", () => {
            this.closeDesmosWidget();
        });
    }

    /* Generate the sidebar items dynamically */
    renderSyllabus() {
        const container = document.getElementById("syllabus-list");
        container.innerHTML = "";

        curriculum.forEach(group => {
            const groupDiv = document.createElement("div");
            groupDiv.className = "syllabus-group";
            
            // Group Header Button (collapsible)
            const headerBtn = document.createElement("button");
            headerBtn.className = "syllabus-header";
            headerBtn.innerHTML = `
                <span>${group.title}</span>
                <i class="fa-solid fa-chevron-right syllabus-header-chevron"></i>
            `;
            
            const itemContainer = document.createElement("div");
            itemContainer.className = "syllabus-items";

            headerBtn.addEventListener("click", () => {
                const isExpanded = groupDiv.classList.toggle("expanded");
                headerBtn.classList.toggle("expanded", isExpanded);
            });

            // Populate Sub-Items
            group.items.forEach(item => {
                const itemBtn = document.createElement("button");
                itemBtn.className = "syllabus-item-btn";
                itemBtn.setAttribute("data-id", item.id);

                const isMastered = this.state.topicProgress[item.id]?.isMastered === true;
                const statusClass = isMastered 
                    ? "status-indicator mastered fa-solid fa-circle-check" 
                    : "status-indicator not-started fa-regular fa-circle";

                itemBtn.innerHTML = `
                    <i class="${statusClass}"></i>
                    <span class="syllabus-item-label">${item.title}</span>
                `;

                itemBtn.addEventListener("click", () => {
                    // Remove selected state from others
                    document.querySelectorAll(".syllabus-item-btn").forEach(btn => {
                        btn.classList.remove("selected");
                    });
                    itemBtn.classList.add("selected");
                    
                    // Mark as In Progress when clicked (if it was not started)
                    const indicator = itemBtn.querySelector(".status-indicator");
                    if (!this.state.topicProgress[item.id]?.isMastered && indicator.classList.contains("not-started")) {
                        indicator.className = "status-indicator in-progress fa-solid fa-circle-notch";
                    }

                    this.loadTopicWorkspace(item, group.title);
                });

                itemContainer.appendChild(itemBtn);
            });

            groupDiv.appendChild(headerBtn);
            groupDiv.appendChild(itemContainer);
            container.appendChild(groupDiv);
        });
    }

    /* Load clicked topic details inside the focus workspace panel */
    loadTopicWorkspace(topic, groupTitle) {
        this.activeTopic = topic;
        this.closeDesmosWidget();

        // Switch screen panels from empty state
        document.getElementById("empty-state-panel").style.display = "none";
        const activePanel = document.getElementById("active-panel");
        activePanel.style.display = "flex";

        // Setup values
        document.getElementById("panel-breadcrumbs").innerText = `${groupTitle}`;
        document.getElementById("panel-topic-title").innerText = topic.title;
        document.getElementById("panel-topic-description").innerText = topic.description;

        // Reset & Populate Learn links
        const learnContainer = document.getElementById("panel-learn-links");
        learnContainer.innerHTML = "";
        topic.learnLinks.forEach(link => {
            const anchor = document.createElement("a");
            anchor.className = "resource-link-btn";
            anchor.href = link.url;
            anchor.target = "_blank";
            anchor.innerHTML = `
                <div class="resource-link-left">
                    <i class="resource-link-icon fa-solid fa-square-arrow-up-right"></i>
                    <span>${link.name}</span>
                </div>
                <span class="resource-domain">${link.domain}</span>
            `;
            learnContainer.appendChild(anchor);
        });

        // Reset & Populate Practice links
        const practiceContainer = document.getElementById("panel-practice-links");
        practiceContainer.innerHTML = "";
        topic.practiceLinks.forEach(link => {
            const anchor = document.createElement("a");
            anchor.className = "resource-link-btn";
            anchor.href = link.url;
            anchor.target = "_blank";
            anchor.innerHTML = `
                <div class="resource-link-left">
                    <i class="resource-link-icon fa-solid fa-circle-nodes"></i>
                    <span>${link.name}</span>
                </div>
                <span class="resource-domain">${link.domain}</span>
            `;
            practiceContainer.appendChild(anchor);
        });

        // Manage Desmos calculator button toggle
        const desmosBtn = document.getElementById("toggle-desmos-btn");
        if (topic.hasDesmos) {
            desmosBtn.style.display = "inline-flex";
        } else {
            desmosBtn.style.display = "none";
        }

        // Populate Study Tips / Notes
        const tipsContainer = document.getElementById("panel-study-tips-container");
        const tipsList = document.getElementById("panel-tips-list");
        tipsList.innerHTML = "";
        
        const extraData = topicStudyMaterial[topic.id];
        
        if (extraData && extraData.tips && extraData.tips.length > 0) {
            tipsContainer.style.display = "block";
            extraData.tips.forEach(tip => {
                const li = document.createElement("li");
                li.innerHTML = `<i class="fa-regular fa-lightbulb"></i> <span>${tip}</span>`;
                tipsList.appendChild(li);
            });
        } else {
            tipsContainer.style.display = "none";
        }

        // Populate AI Prompts
        const promptsContainer = document.getElementById("panel-ai-prompts-container");
        const promptsGrid = document.getElementById("panel-prompts-grid");
        promptsGrid.innerHTML = "";

        if (extraData && extraData.aiPrompts && extraData.aiPrompts.length > 0) {
            promptsContainer.style.display = "block";
            extraData.aiPrompts.forEach(p => {
                const card = document.createElement("div");
                card.className = "prompt-card";
                card.innerHTML = `
                    <div class="prompt-card-header">
                        <div class="prompt-card-title"><i class="fa-solid fa-robot"></i> ${p.title}</div>
                    </div>
                    <div class="prompt-card-desc">${p.desc}</div>
                    <div class="prompt-text-container">
                        <div class="prompt-text">${p.prompt}</div>
                        <button class="copy-prompt-btn" title="Copy Prompt"><i class="fa-regular fa-clipboard"></i></button>
                    </div>
                `;
                
                // Add event listener to the copy button
                const copyBtn = card.querySelector(".copy-prompt-btn");
                copyBtn.addEventListener("click", () => {
                    this.copyPromptToClipboard(p.prompt, copyBtn);
                });
                
                promptsGrid.appendChild(card);
            });
        } else {
            promptsContainer.style.display = "none";
        }

        // Set mastery checkbox value
        const isMastered = this.state.topicProgress[topic.id]?.isMastered === true;
        document.getElementById("mastery-checkbox").checked = isMastered;
        
        // Update the stepper logic based on current progress
        this.updateStepperDOM();
    }

    ensureTopicState(topicId) {
        if (!this.state.topicProgress[topicId]) {
            this.state.topicProgress[topicId] = { stepCompleted: 0, isMastered: false };
        }
    }

    updateStepperDOM() {
        if (!this.activeTopic) return;
        this.ensureTopicState(this.activeTopic.id);
        const progress = this.state.topicProgress[this.activeTopic.id];
        const step = progress.stepCompleted;
        const isMastered = progress.isMastered;

        // Reset all stepper UI
        for(let i=1; i<=3; i++) {
            document.getElementById(`stepper-${i}`).className = "stepper-item";
            document.getElementById(`step${i}-card`).className = "step-card step-locked";
        }
        document.querySelectorAll(".stepper-line").forEach(l => l.className = "stepper-line");

        // Step 1 is always unlocked
        document.getElementById("step1-card").classList.remove("step-locked");
        document.getElementById("stepper-1").classList.add("active");

        if (step >= 1) {
            // Completed Step 1
            document.getElementById("step1-card").classList.add("step-completed");
            document.getElementById("stepper-1").classList.add("completed");
            document.getElementsByClassName("stepper-line")[0].classList.add("completed");
            
            // Unlock Step 2
            document.getElementById("step2-card").classList.remove("step-locked");
            document.getElementById("stepper-2").classList.add("active");
        }

        if (step >= 2) {
            // Completed Step 2
            document.getElementById("step2-card").classList.add("step-completed");
            document.getElementById("stepper-2").classList.add("completed");
            document.getElementsByClassName("stepper-line")[1].classList.add("completed");

            // Unlock Step 3
            document.getElementById("step3-card").classList.remove("step-locked");
            document.getElementById("stepper-3").classList.add("active");
        }
        
        if (isMastered) {
            document.getElementById("step3-card").classList.add("step-completed");
            document.getElementById("stepper-3").classList.add("completed");
        }

        // Set the active highlight for the *current* step user is on
        if (step === 0 && !isMastered) document.getElementById("step1-card").classList.add("step-active");
        if (step === 1 && !isMastered) document.getElementById("step2-card").classList.add("step-active");
        if (step >= 2 && !isMastered) document.getElementById("step3-card").classList.add("step-active");
    }

    /* Toggle the embedded Desmos Graphing calculator Widget inside main workspace */
    toggleDesmosWidget() {
        const frameContainer = document.getElementById("desmos-frame-container");
        const iframe = document.getElementById("desmos-iframe");

        if (this.desmosOpen) {
            this.closeDesmosWidget();
        } else {
            // Lazy load iframe src
            iframe.src = "https://www.desmos.com/calculator";
            frameContainer.style.display = "block";
            this.desmosOpen = true;
            document.getElementById("toggle-desmos-btn").innerHTML = `<i class="fa-solid fa-calculator"></i> Hide Desmos Calculator`;
        }
    }

    closeDesmosWidget() {
        const frameContainer = document.getElementById("desmos-frame-container");
        const iframe = document.getElementById("desmos-iframe");
        
        frameContainer.style.display = "none";
        iframe.src = ""; // Unload iframe resources
        this.desmosOpen = false;
        document.getElementById("toggle-desmos-btn").innerHTML = `<i class="fa-solid fa-calculator"></i> Toggle Desmos Calculator`;
    }

    copyPromptToClipboard(text, buttonElement) {
        navigator.clipboard.writeText(text).then(() => {
            // Success animation
            buttonElement.classList.add("copied");
            buttonElement.innerHTML = `<i class="fa-solid fa-check"></i>`;
            
            const originalTitle = buttonElement.getAttribute("title");
            buttonElement.setAttribute("title", "Copied!");
            
            setTimeout(() => {
                buttonElement.classList.remove("copied");
                buttonElement.innerHTML = `<i class="fa-regular fa-clipboard"></i>`;
                buttonElement.setAttribute("title", originalTitle || "Copy Prompt");
            }, 2000);
        }).catch(err => {
            console.error("Could not copy prompt text: ", err);
            // Fallback for older browsers
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                buttonElement.classList.add("copied");
                buttonElement.innerHTML = `<i class="fa-solid fa-check"></i>`;
                setTimeout(() => {
                    buttonElement.classList.remove("copied");
                    buttonElement.innerHTML = `<i class="fa-regular fa-clipboard"></i>`;
                }, 2000);
            } catch (e) {
                alert("Please manually select and copy the prompt text.");
            }
            document.body.removeChild(textarea);
        });
    }
}

// Initialise Application when page content is loaded
document.addEventListener("DOMContentLoaded", () => {
    window.app = new CorePrepApp();
});
