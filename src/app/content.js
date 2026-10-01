export const newsItems = [
  {
    date: "24 Sep 2026",
    content: (
      <>
        Our paper{" "}
        <strong>
          A Separation Principle for Cooperative Multi-Agent Reinforcement
          Learning
        </strong>{" "}
        has been accepted at NeurIPS 2026.
      </>
    ),
  },
  {
    date: "15 July 2026",
    content: (
      <>
        Our paper{" "}
        <a
          href="https://ieeexplore.ieee.org/document/11578069"
          target="_blank"
          rel="noreferrer"
          className="hover-link"
        >
          Bounded Linear Programs for Data-Driven Optimal Control via
          Moment-Matching
        </a>{" "}
        has been accepted for presentation at the 2026 65th IEEE Conference on
        Decision and Control (CDC). See you in December!
      </>
    ),
  },
  {
    date: "10 July 2026",
    content: (
      <>
        Our paper{" "}
        <strong>
          A Separation Principle for Cooperative Multi-Agent Reinforcement
          Learning
        </strong>{" "}
        has been accepted as an Oral at EWRL 2026.
      </>
    ),
  },
  {
    date: "4 Jun 2026",
    content: (
      <>
        Our paper{" "}
        <a
          href="https://ieeexplore.ieee.org/document/11578069"
          target="_blank"
          rel="noreferrer"
          className="hover-link"
        >
          Bounded Linear Programs for Data-Driven Optimal Control via
          Moment-Matching
        </a>{" "}
        has been accepted for publication in IEEE Control Systems Letters
        (L-CSS).
      </>
    ),
  },
  {
    date: "26 May 2025",
    content: (
      <>
        I&apos;ll give an invited talk at the{" "}
        <a
          href="https://bisp14.imati.cnr.it/home_page.php"
          target="_blank"
          rel="noreferrer"
          className="hover-link"
        >
          Bayesian Inference in Stochastic Processes (BISP) workshop
        </a>{" "}
        in Milan.
      </>
    ),
  },
  {
    date: "22 Jan 2025",
    content: (
      <>
        Our paper{" "}
        <a
          href="https://proceedings.mlr.press/v258/pezzetti25a.html"
          target="_blank"
          rel="noreferrer"
          className="hover-link"
        >
          Function-Space MCMC for Bayesian Wide Neural Networks
        </a>{" "}
        has been accepted at AISTATS 2025.
      </>
    ),
  },
  {
    date: "10 Oct 2024",
    content: (
      <>
        Our paper{" "}
        <a
          href="https://openreview.net/pdf?id=3TsD8RI3vc"
          target="_blank"
          rel="noreferrer"
          className="hover-link"
        >
          Preconditioned Crank-Nicolson Algorithms for Wide Bayesian Neural
          Networks
        </a>{" "}
        has been accepted at the NeurIPS 2024 Workshop on Bayesian
        Decision-making and Uncertainty.
      </>
    ),
  },
  {
    date: "1 Sep 2024",
    content: (
      <>
        I officially started my PhD at the{" "}
        <a
          href="https://ai.ethz.ch/"
          target="_blank"
          rel="noreferrer"
          className="hover-link"
        >
          ETH AI Center
        </a>{" "}
        under the supervision of Prof. Florian D&ouml;rfler and Prof. Giorgia
        Ramponi.
      </>
    ),
  },
];

export const publications = [
  {
    tag: "NeurIPS",
    title:
      "A Separation Principle for Cooperative Multi-Agent Reinforcement Learning",
    authors: (
      <>
        Lucia Pezzetti, Nicolas Lanzetti, Antonio Terpin, Florian
        D&ouml;rfler, Giorgia Ramponi
      </>
    ),
    venue: "Advances in Neural Information Processing Systems (NeurIPS 2026)",
    paperUrl: "",
    pdfUrl: "/Separation_Principle_for_MARL.pdf",
    bibtexUrl: "",
  },
  {
    tag: "L-CSS",
    title:
      "Bounded Linear Programs for Data-Driven Optimal Control via Moment-Matching",
    authors: (
      <>
        Andrea Martinelli, Lucia Pezzetti, Niklas Schmid, Florian
        D&ouml;rfler, John Lygeros
      </>
    ),
    venue:
      "IEEE Control Systems Letters (L-CSS)",
    paperUrl: "https://ieeexplore.ieee.org/document/11578069",
    pdfUrl: "/Bounded_OneShot_LP.pdf",
    bibtexUrl: "https://ieeexplore.ieee.org/document/11578069",
  },
  {
    tag: "AISTATS",
    title: "Function-Space MCMC for Bayesian Wide Neural Networks",
    authors: "Lucia Pezzetti, Stefano Favaro, Stefano Peluchetti",
    venue:
      "28th International Conference on Artificial Intelligence and Statistics (AISTATS 2025)",
    paperUrl: "https://proceedings.mlr.press/v258/pezzetti25a.html",
    pdfUrl:
      "https://raw.githubusercontent.com/mlresearch/v258/main/assets/pezzetti25a/pezzetti25a.pdf",
    bibtexUrl: "https://proceedings.mlr.press/v258/pezzetti25a.html",
  },
  {
    tag: "NeurIPS BDU",
    title:
      "Preconditioned Crank-Nicolson Algorithms for Wide Bayesian Neural Networks",
    authors: "Lucia Pezzetti, Stefano Favaro, Stefano Peluchetti",
    venue:
      "Advances in Neural Information Processing Systems (NeurIPS) Workshop on Bayesian Decision-making and Uncertainty (2024)",
    paperUrl: "https://openreview.net/pdf?id=3TsD8RI3vc",
    pdfUrl: "https://openreview.net/pdf?id=3TsD8RI3vc",
    bibtexUrl: "https://openreview.net/forum?id=3TsD8RI3vc",
  },
];

export const projects = [
  {
    topic: "Multi-Agent Reinforcement Learning",
    title: "A Separation Principle for Cooperative Multi-Agent Reinforcement Learning",
    description:
      "We study cooperative multi-agent reinforcement learning with decoupled noisy dynamics and a shared population objective. The separation principle upper-bounds the population cost-to-go by an optimal transport problem built from a target-conditioned single-agent cost-to-go. This leads to SALT: learn one reusable single-agent policy and coordinate the agents through optimal transport, enabling transfer across fleet sizes and stochastic mobility tasks.",
    image: "/research-coordination.png",
    imageAlt:
      "Illustration of data-driven control, transportation routes, and multi-agent system dynamics",
    keywords: ["Multi-agent RL", "Optimal transport", "Fleet coordination"],
    relatedPublications: [
      "A Separation Principle for Cooperative Multi-Agent Reinforcement Learning",
    ],
    learnMore: {
      eyebrow: "The idea in one sentence",
      lead: "SALT turns a difficult fleet-level decision into two reusable pieces: learn how one agent can reach a target, then let optimal transport decide who should go where.",
      methodSteps: [
        {
          title: "Single-agent learning",
          description:
            "Train a shared, target-conditioned policy and cost-to-go function for a single agent. Its complexity does not grow with the fleet size.",
        },
        {
          title: "Optimal transport assignment",
          description:
            "Use the learned target-conditioned cost-to-go function as the price of sending each agent to each target, and solve the resulting optimal-transport assignment.",
        },
        {
          title: "Coordinate at scale",
          description:
            "Route every agent with the same policy, while reusing the learned coordination layer for new target configurations and unseen fleet sizes.",
        },
      ],
      foundations: [
        {
          symbol: "≡",
          title: "Interchangeable agents",
          description:
            "Agents are homogeneous: they share the same dynamics, costs, and policy. Their labels carry no useful information, so the problem can be lifted to the more natural space of probability measures.",
        },
        {
          symbol: "∥",
          title: "Decoupled dynamics",
          description:
            "Each agent moves under its own state, action, and noise. Agents are coupled through the collective goal, not through one another’s transition equations.",
        },
        {
          symbolLatex: String.raw`\mu \to \nu`,
          symbolAlt: "population distribution to target distribution",
          title: "A distributional goal",
          description:
            "The fleet aims to match a target distribution. Optimal transport measures the formation error and naturally exposes the assignment hidden inside the objective.",
        },
      ],
      applications: {
        eyebrow: "Possible applications",
        title: "Where assignment and control meet",
        main: {
          title: "Urban delivery fleets in South Manhattan",
          description:
            "A dispatcher must decide both which vehicle should serve each request and how every vehicle should navigate through uncertain, time-varying traffic. SALT connects these decisions without learning a separate joint policy for every fleet size.",
          image: "/salt-south-manhattan-map.png",
          imageWidth: 1218,
          imageHeight: 1556,
          imageAlt:
            "South Manhattan road network with colored vehicle routes connecting initial positions to delivery targets",
          steps: [
            {
              title: "Assign using realistic costs",
              description:
                "Optimal transport pairs vehicles and requests using the learned expected cost-to-go, not only geometric distance.",
            },
            {
              title: "Route with one shared policy",
              description:
                "Each vehicle follows the same target-conditioned policy toward its assigned destination.",
            },
            {
              title: "Adapt as the city changes",
              description:
                "Assignments can be recomputed online as traffic conditions, requests, or vehicle locations evolve.",
            },
          ],
          facts: ["2,087 intersections", "4,255 directed roads", "1-100 vehicles"],
        },
        additional: [
          {
            title: "Ride-hailing",
            description: "Match available drivers to changing passenger demand.",
            image: "/application-ride-hailing.png",
            imageAlt: "Taxis navigating to passenger pickup locations",
          },
          {
            title: "Warehouse logistics",
            description: "Assign mobile robots to shelves, parcels, and stations.",
            image: "/application-warehouse-robots.png",
            imageAlt: "Autonomous warehouse robots carrying packages",
          },
          {
            title: "Drone coverage",
            description: "Coordinate inspection or sensing targets across a fleet.",
            image: "/application-drone-coverage.png",
            imageAlt: "A coordinated formation of autonomous drones",
          },
          {
            title: "Emergency response",
            description: "Dispatch responders as incidents and priorities change.",
            image: "/application-emergency-response.png",
            imageAlt: "Ambulance navigating toward an emergency location",
          },
        ],
      },
      theorem: {
        formula: String.raw`J_t(\mu_t,\nu) \leq \mathcal{K}_{j_t}(\mu_t,\nu)`,
        formulaAlt:
          "The population cost-to-go is upper bounded by optimal transport with the single-agent cost-to-go as transport cost.",
        explanation: [
          "Because the only fleet-level coupling is the target assignment, the target-conditioned single-agent cost-to-go ",
          {
            latex: String.raw`j_t(s,z)`,
            label: "j sub t of s and z",
          },
          " can serve as the transport cost between the current population ",
          { latex: String.raw`\mu_t`, label: "mu sub t" },
          " and target distribution ",
          { latex: String.raw`\nu`, label: "nu" },
          ". This is the bridge from the theorem to SALT.",
        ],
        cases: [
          {
            label: "Deterministic dynamics:",
            description: "the separation is exact.",
          },
          {
            label: "Stochastic dynamics:",
            description:
              "it is an upper bound whose gap measures the value of adapting assignments after noise is observed.",
          },
        ],
      },
      paragraphs: [
        "Why this helps in practice: a conventional multi-agent policy learns in a joint state-action space whose size grows rapidly with the number of agents. SALT handles the only population-level decision through optimal transport, while trajectories from the entire fleet train one shared single-agent learner. We tested the algorithm on gridworld ablations and on a delivery task over south Manhathann",
      ],
      highlights: [
        { value: "1–100", label: "fleet-size transfer in deployment without retraining" },
        { value: "15–21%", label: "lower travel time than static shortest path on South Manhattan" },
        { value: "480×", label: "fewer interactions than MAPPO to reach milestones in a gridworl environment" },
      ],
      featureMedia: true,
      image: "/salt-scheme.png",
      imageWidth: 2640,
      imageHeight: 887,
      imageAlt:
        "Three-stage SALT diagram showing the population-space formulation, separation principle, and optimal-transport assignment with single-agent reinforcement learning",
      imageCaption:
        "From a population representation to the separation principle: optimal transport decides who goes where, while a shared single-agent policy decides how to reach each assigned target.",
      video: "/salt-manhattan.mp4",
      videoPoster: "/salt-manhattan-poster.png",
    },
  },
  {
    topic: "Model-Free Optimal Control",
    title: "Data-Driven Linear Programs for Control",
    description:
      "This work develops data-driven linear-programming methods for model-free optimal control in continuous state and action spaces. It characterizes when sampled optimal-control LPs remain bounded and uses moment-matching to design cost vectors that preserve finite solutions and useful control performance, including for nonlinear systems and limited datasets.",
    image: "/research-control.png",
    imageAlt:
      "Illustration of optimization landscapes, geometric structures, and probabilistic trajectories",
    keywords: ["Optimal control", "Data-driven methods", "Linear programming"],
    relatedPublications: [
      "Bounded Linear Programs for Data-Driven Optimal Control via Moment-Matching",
    ],
    learnMore: {
      storyType: "bounded-lp",
      eyebrow: "The challenge in one sentence",
      lead:
        "A sampled Bellman linear program may look perfectly feasible and still have no finite optimum. The missing ingredient is choosing an objective direction supported by the data.",
      methodSteps: [
        {
          title: "Collect transitions",
          description:
            "Observe state, action, next-state, and cost tuples without identifying the system dynamics.",
          formula: String.raw`(x_i,u_i,x_i^+,\ell_i)`,
          formulaAlt: "state, action, next state, and stage cost tuple",
        },
        {
          title: "Build the sampled LP",
          description:
            "Use basis functions to turn sampled Bellman inequalities into a finite-dimensional linear program.",
          formula: String.raw`\Phi^\top \alpha \leq \ell`,
          formulaAlt: "Phi transpose alpha is less than or equal to ell",
        },
        {
          title: "Match the moments",
          description:
            "Construct the objective from the same data geometry so that the optimization direction lies inside the bounded cone.",
          formula: String.raw`b_c = \Phi\lambda`,
          formulaAlt: "b sub c equals Phi lambda",
        },
        {
          title: "Extract a controller",
          description:
            "Solve the bounded LP and act greedily with respect to the learned Q-function.",
          formula: String.raw`\pi(x)=\arg\min_u q(x,u)`,
          formulaAlt: "pi of x minimizes q of x and u over u",
        },
      ],
      foundations: [
        {
          symbol: "N",
          title: "Finite data",
          description:
            "Only finitely many Bellman inequalities are observed, leaving unconstrained directions in the approximate Q-function.",
        },
        {
          symbolLatex: String.raw`c`,
          symbolAlt: "objective measure c",
          title: "The objective matters",
          description:
            "Unlike the exact LP, the sampled problem can be finite or unbounded depending on the selected cost vector.",
        },
        {
          symbolLatex: String.raw`\operatorname{cone}(\Phi)`,
          symbolAlt: "the cone generated by Phi",
          title: "Geometry decides boundedness",
          description:
            "The observed transitions generate a cone of objective directions for which the LP has a finite optimum.",
        },
      ],
      theorem: {
        formula: String.raw`\begin{aligned} b_c \in \operatorname{cone}(\Phi) &\iff \exists\,\lambda\geq 0 \\[-2pt] &\text{such that } b_c=\Phi\lambda \end{aligned}`,
        formulaAlt:
          "The linear program is bounded exactly when its objective vector belongs to the cone generated by the data matrix Phi.",
        explanation: [
          "The vector ",
          { latex: String.raw`b_c=\int \phi(z)c(dz)`, label: "the objective moment vector b sub c" },
          " determines the direction in which the LP maximizes. Boundedness holds precisely when this vector can be represented as a nonnegative combination of the columns of the data matrix ",
          { latex: String.raw`\Phi`, label: "Phi" },
          ". Moment matching constructs such a direction directly from the observed transitions.",
        ],
        cases: [
          {
            label: "No regularizer required:",
            description: "boundedness comes from objective design rather than clipping the feasible set.",
          },
          {
            label: "Polynomial features:",
            description: "the required moments can be obtained from a tractable linear or semidefinite feasibility problem.",
          },
        ],
      },
      results: [
        {
          title: "Linear systems",
          image: "/bounded-linear-results.png",
          imageWidth: 1300,
          imageHeight: 350,
          imageAlt:
            "Boundedness isolines and normalized controller performance for linear systems",
          caption:
            "Moment matching remains bounded in substantially higher dimensions than a fixed-covariance objective while retaining near-optimal closed-loop performance.",
        },
        {
          title: "Nonlinear mechanical systems",
          image: "/bounded-nonlinear-results.png",
          imageWidth: 1300,
          imageHeight: 460,
          imageAlt:
            "Boundedness isolines and controlled state and input trajectories for nonlinear mechanical systems",
          caption:
            "The learned polynomial controller stabilizes the unstable equilibrium, whereas uncontrolled trajectories settle at other equilibria.",
        },
      ],
      highlights: [
        { value: "n = 30", label: "100% bounded at N = 500 in the tested LTI setting" },
        { value: "≈1%", label: "closed-loop performance gap from analytic LQR" },
        { value: "nonlinear", label: "polynomial control from model-free transition data" },
      ],
      paragraphs: [
        "A linear program can turn optimal control into a tractable optimization problem, but a data-driven approximation can fail if its feasible region is unbounded. That makes it difficult to know whether a controller learned from limited data is mathematically well behaved.",
        "This work characterizes boundedness through the observed data and the chosen cost vector. Moment-matching gives a practical way to design that cost vector, including for polynomial features and nonlinear systems, without relying only on ad hoc regularization.",
        "The analysis describes the cone of directions in which the sampled optimal LP is bounded and connects feasibility to the excitation present in the dataset. Numerical experiments compare boundedness and control performance across linear and nonlinear systems as the number of samples, auxiliary features, and state dimension change.",
      ],
      image: "/bounded-linear-results.png",
      imageAlt:
        "Boundedness isolines and moment-matching performance for linear systems",
    },
  },
  {
    topic: "Bayesian Machine Learning",
    title: "Function-Space MCMC for Wide Neural Networks",
    description:
      "This work develops MCMC methods for Bayesian wide neural networks directly in function space. Using preconditioned Crank-Nicolson proposals and the Gaussian-process perspective of wide networks, it studies how to sample posterior functions and quantify uncertainty without making inference increasingly sensitive to parameter dimension.",
    image: "/research-bayesian.png",
    imageAlt:
      "Illustration of neural networks, trajectories, and probability landscapes for scalable multi-agent coordination",
    keywords: ["Bayesian ML", "MCMC", "Wide neural networks"],
    relatedPublications: ["Function-Space MCMC for Bayesian Wide Neural Networks"],
  },
];
