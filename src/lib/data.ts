export const PORTFOLIO_DATA = {
  personal: {
    name: "Suhail Aslam",
    titles: ["Software Engineer", "Backend Engineer", "Cloud & DevOps Enthusiast"],
    oneLiner: "Building scalable cloud-native systems, distributed architectures, and production-grade applications.",
    about: "Backend-focused Software Engineer with hands-on production experience building cloud-native, microservices-based systems on .NET and ASP.NET Core. Skilled in distributed systems, event-driven architecture, CQRS, and Kubernetes deployment, with working exposure to observability (OpenTelemetry, Prometheus, Grafana) and full-stack development using React and TypeScript.",
    links: {
      github: "https://github.com/Suhailaslamk",
      linkedin: "https://linkedin.com/in/suhailaslamk",
      email: "mailto:suhailaslam81@gmail.com",
      resume: "/suhail_aslam_k_resume.pdf"
    }
  },
  skills: {
    backend: ["C#", "ASP.NET Core", "Entity Framework Core", "ADO.NET", "Dapper", "LINQ", "REST", "SOAP", "GraphQL", "gRPC"],
    frontend: ["React", "Redux", "Zustand", "Angular", "RxJS", "TypeScript", "JavaScript", "Tailwind CSS", "Blazor"],
    cloudDevops: ["Azure", "AWS", "AKS", "Kubernetes", "Docker", "Helm", "ACR", "GitHub Actions", "NGINX", "Linux"],
    architecture: ["Clean Architecture", "DDD", "CQRS", "MediatR", "Event-Driven Architecture", "Microservices", "SOLID"],
    databases: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch"],
    messagingObservability: ["Kafka", "RabbitMQ", "Hangfire", "Quartz.NET", "OpenTelemetry", "Prometheus", "Grafana", "Jaeger", "Serilog"],
    testingSecurity: ["xUnit", "Integration/E2E Testing", "JWT", "RBAC", "Rate Limiting", "mTLS"]
  },
  projects: [
    {
      id: "nextrade",
      name: "Nextrade",
      tagline: "Distributed Trading Platform",
      githubUrl: "https://github.com/Suhailaslamk/Nextrade",
      timeline: "May 2026 – Present",
      description: "A high-throughput, distributed trading platform engineered with microservices architecture, capable of processing high-volume order matching using in-memory dictionaries and Channel<T> concurrency.",
      architectureHighlights: ["Microservices (8 independently deployable services)", "CQRS & DDD", "Event-Driven with Kafka", "Outbox Pattern", "YARP API Gateway with GraphQL Federation"],
      techStack: ["C#", ".NET 8", "ASP.NET Core", "Kafka", "Redis", "gRPC", "YARP", "Hot Chocolate GraphQL", "Kubernetes"],
      challenges: [
        "Engineered an in-memory order-matching engine handling 100,000+ limit orders/sec with Redis snapshot-and-replay recovery.",
        "Implemented Transactional Outbox pattern with a relay worker and Redis distributed locking for exactly-once Kafka delivery.",
        "Built a resilient API Gateway using YARP with RS256 JWT validation and DataLoader batching to eliminate N+1 queries."
      ]
    },
    {
      id: "homiee",
      name: "Homiee",
      tagline: "Local Commerce Marketplace",
      githubUrl: "https://github.com/Suhailaslamk/Homiee.Backend",
      timeline: "Feb 2026 – Apr 2026",
      description: "A full-stack local marketplace architected as an ASP.NET Core 8 modular monolith, deployed to Azure Kubernetes Service (AKS) via multi-stage Docker builds and GitHub Actions CI/CD pipelines.",
      architectureHighlights: ["Modular Monolith", "Transactional multi-order checkout engine", "Dual-ORM Data Layer (EF Core + Dapper)", "Redis Cache-Aside Layer"],
      techStack: ["ASP.NET Core 8", "React 19", "SQL Server", "Redis", "Docker", "Kubernetes (AKS)", "OpenTelemetry", "SignalR", "Razorpay"],
      challenges: [
        "Designed a transactional multi-order checkout engine validating cart contents and stock synchronously within a single EF Core transaction.",
        "Engineered a Redis cache-aside layer with automatic in-memory fallback.",
        "Instrumented the platform end-to-end with OpenTelemetry, Prometheus, and Grafana for observability."
      ]
    },
    {
      id: "daor",
      name: "Daor",
      tagline: "Premium Sunglasses E-Commerce Platform",
      githubUrl: "https://github.com/Suhailaslamk/Daor",
      timeline: "2025",
      description: "A modern, premium commerce platform tailored for selling high-end sunglasses, focusing on a seamless user experience and robust backend management.",
      architectureHighlights: ["E-Commerce Backend", "Payment Integration", "Inventory Management"],
      techStack: ["ASP.NET Core", "React", "SQL Server", "Stripe", "Azure"],
      challenges: [
        "Building a visually stunning, performant storefront with a headless commerce architecture.",
        "Implementing secure, scalable payment processing and order fulfillment workflows."
      ]
    }
  ],
  experience: [
    {
      company: "Bridgeon Solutions",
      role: "Software Developer Intern",
      location: "Kerala, India",
      timeline: "July 2025 – Present",
      bullets: [
        "Developed and maintained backend features for live client projects using ASP.NET Core, C#, Entity Framework Core, and SQL Server within a Clean Architecture-based, microservices-oriented codebase.",
        "Built and consumed REST and GraphQL APIs, and contributed to integration logic involving Kafka, RabbitMQ, and Redis caching.",
        "Wrote unit and integration tests with xUnit to validate business logic and catch regressions.",
        "Collaborated within an Agile/Scrum workflow, supporting CI/CD pipelines, containerized development with Docker, and Azure-based deployments while gaining exposure to observability tooling."
      ]
    }
  ],
  education: [
    {
      institution: "University of Calicut",
      degree: "Bachelor of Science in Computer Science",
      location: "Kerala, India",
      timeline: "2022 – 2025"
    }
  ]
};
