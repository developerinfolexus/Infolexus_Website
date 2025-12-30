import mobileAppImg from '../assets/mobile1.jpeg';
import uiuxImg from '../assets/uiux2.jpeg';
import customWebImg from '../assets/custom.jpeg';
import erpImg from '../assets/erp.jpeg';
import dataAnalyticsImg from '../assets/dataanalystic.jpeg';
import digitalMarketingImg from '../assets/digitalmarketing1.jpeg';
import aiMlImg from '../assets/Ai&ml.jpeg';
import webDevImg from '../assets/webimage.jpeg';
import cloudImg from '../assets/unnamed.jpg';
import testingImg from '../assets/testing_qa_v2.png';
import itSupportImg from '../assets/it_support_247_v2.png';

export const serviceDetails = {
    'ma-01': {
        title: "Mobile Application Development",
        subtitle: "Native & Cross-Platform Excellence for the Mobile-First Era",
        description: "In a world where mobile traffic dominates, your app is often the primary touchpoint for your customers. We don't just build apps; we engineer mobile experiences that are intuitive, engaging, and performant. Whether you need a high-performance native application for iOS and Android or a cost-effective cross-platform solution using Flutter or React Native, our team delivers pixel-perfect code. We handle the entire lifecycle from concept validation and UX prototyping to App Store submission and post-launch maintenance, ensuring your app scales with your user base.",
        features: [
            "Native iOS Development (Swift, SwiftUI)",
            "Native Android Development (Kotlin, Jetpack Compose)",
            "Cross-Platform Solutions (Flutter, React Native)",
            "Real-time Chat & Communication Features",
            "Geolocation & Maps Integration",
            "Secure Payment Gateway Integration",
            "Offline Mode & Local Database Sync",
            "Push Notifications & User Engagement Logic",
            "Wearable & IoT Device Connectivity"
        ],
        benefits: [
            "Reach a wider audience with dual-platform support",
            "Enhance brand loyalty through superior UX",
            "Open new revenue channels via in-app purchases"
        ],
        process: [
            { title: "Discovery & Strategy", desc: "We analyze your market, competitors, and user persona to define the app's core value proposition." },
            { title: "Wireframing & UX", desc: "Creating low-fidelity blueprints to map out user journeys and interaction flows." },
            { title: "Visual Design (UI)", desc: "Applying your brand identity to create stunning, high-fidelity interface designs." },
            { title: "Agile Development", desc: "Iterative coding sprints with regular builds for your review and feedback." },
            { title: "QA & Testing", desc: "Rigorous automated and manual testing across a farm of real devices." },
            { title: "Launch & Growth", desc: "App Store optimization (ASO), submission handling, and analytics setup." }
        ],
        technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL", "SQLite"],
        image: mobileAppImg
    },
    'cw-02': {
        title: "Custom Web Application",
        subtitle: "Tailored Software for Business Critical Operations",
        description: "Off-the-shelf software often forces you to change your business processes to fit the tool. We build custom web applications that fit your business like a glove. From complex enterprise resource planning (ERP) dashboards to customer-facing portals and SaaS platforms, we utilize modern full-stack technologies to create secure, scalable, and responsive web solutions. We prioritize clean architecture, ensuring your application is easy to maintain and ready to grow as your business requirements evolve.",
        features: [
            "SaaS (Software as a Service) Platform Development",
            "Progressive Web Apps (PWA) for Offline Access",
            "Single Page Applications (SPA) for Fluid UX",
            "Secure Customer & Vendor Portals",
            "Real-time Dashboards & Data Visualization",
            "API-First Architecture & Third-Party Integrations",
            "Role-Based Access Control (RBAC) Systems",
            "Cloud-Native Serverless Architecture"
        ],
        benefits: [
            "Automate unique business workflows",
            "Reduce licensing costs of multiple SaaS tools",
            "Own your data and technology IP"
        ],
        process: [
            { title: "Requirements Gathering", desc: "Deep dive workshops to document every functional and non-functional requirement." },
            { title: "System Architecture", desc: "Designing a robust database schema and server infrastructure plan." },
            { title: "Frontend Development", desc: "Building responsive, accessible, and interactive client-side interfaces." },
            { title: "Backend Development", desc: "Engineering secure APIs, business logic, and database integrations." },
            { title: "Integration Testing", desc: "Ensuring all modules and external services communicate flawlessly." },
            { title: "Deployment & Scale", desc: "Setting up CI/CD pipelines and auto-scaling cloud infrastructure." }
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Next.js", "Redis", "Docker"],
        image: customWebImg
    },
    'es-03': {
        title: "Enterprise Solutions (ERP/CRM)",
        subtitle: "Integrated Systems for Large Scale Operations",
        description: "Optimize your organizational efficiency with our custom ERP and CRM solutions. We help you break down data silos, automate routine tasks, and get a 360-degree view of your business operations and customer relationships.",
        features: [
            "Custom ERP Development & Implementation",
            "CRM Customization & Integration (Salesforce, HubSpot)",
            "Supply Chain & Inventory Management Systems",
            "HR & Payroll Automation Modules",
            "Business Intelligence & Reporting Dashboards",
            "Legacy System Modernization"
        ],
        process: [
            { title: "Workflow Audit", desc: "Analyzing current bottlenecks in operations." },
            { title: "Solution Design", desc: "Blueprint for a unified digital ecosystem." },
            { title: "Module Dev", desc: "Building and testing individual functional units." },
            { title: "Training", desc: "Onboarding staff specifically for the new system." }
        ],
        technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Java", ".NET", "Python"],
        image: erpImg
    },
    'ai-04': {
        title: "AI & Machine Learning",
        subtitle: "Intelligent Algorithms for Smarter Decisions",
        description: "Unlock the power of data with our advanced AI and ML services. We build predictive models, recommendation engines, and natural language processing systems that help you automate decision-making and uncover hidden insights.",
        features: [
            "Predictive Analytics & Forecasting Models",
            "Natural Language Processing (NLP) & Chatbots",
            "Computer Vision & Image Recognition",
            "Recommendation Engines for E-commerce",
            "Process Automation (RPA)",
            "Generative AI Integration (LLMs)"
        ],
        process: [
            { title: "Data Prep", desc: "Cleaning and structuring data for training." },
            { title: "Modeling", desc: "Selecting and training appropriate algorithms." },
            { title: "Validation", desc: "Testing accuracy against real-world scenarios." },
            { title: "Integration", desc: "Embedding models into application workflows." }
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "Hugging Face"],
        image: aiMlImg
    },
    'ui-05': {
        title: "UI/UX Design",
        subtitle: "Designing Experiences that Convert",
        description: "We blend aesthetics with usability to create digital products that users love. Our design process focuses on empathy, clarity, and engagement, ensuring every interaction feels intuitive and every pixel serves a purpose.",
        features: [
            "User Research & Persona Mapping",
            "Information Architecture & Wireframing",
            "Interactive Prototyping",
            "High-Fidelity UI Design Systems",
            "Usability Testing & Iteration",
            "Micro-interactions & Motion Design"
        ],
        process: [
            { title: "Empathize", desc: "Understanding the user's pain points." },
            { title: "Define", desc: "Establishing clear design goals." },
            { title: "Ideate", desc: "Brainstorming creative solutions." },
            { title: "Prototype", desc: "Creating testable design artifacts." }
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "Protopie", "After Effects", "Miro"],
        image: uiuxImg
    },
    'da-06': {
        title: "Data Analytics",
        subtitle: "Turning Raw Data into Actionable Insights",
        description: "Stop guessing and start knowing. Our data analytics services help you collect, visualize, and interpret data to drive strategic business growth. We turn complex datasets into clear, interactive dashboards.",
        features: [
            "Data Warehousing & ETL Pipelines",
            "Interactive Business Intelligence Dashboards",
            "Real-time Data Streaming & Visualization",
            "Customer Behavior Analysis",
            "Performance & KPI Tracking",
            "Scalable Big Data Infrastructure"
        ],
        process: [
            { title: "Collection", desc: "Aggregating data from multiple sources." },
            { title: "Processing", desc: "Cleaning and transforming raw data." },
            { title: "Analysis", desc: "Applying statistical methods to find trends." },
            { title: "Visualization", desc: "Presenting findings in clear reports." }
        ],
        technologies: ["Tableau", "PowerBI", "Looker", "Apache Spark", "Snowflake", "Python (Pandas)"],
        image: dataAnalyticsImg
    },
    'ic-07': {
        title: "Infrastructure & Cloud",
        subtitle: "Reliable, Scalable, and Secure Foundation",
        description: "Build your business on a rock-solid foundation. We design and manage cloud architectures that are secure, cost-effective, and infinitely scalable, ensuring your applications are always up and running.",
        features: [
            "Cloud Migration Strategy (AWS, Azure, GCP)",
            "DevOps, CI/CD & Automation",
            "Serverless Architecture Implementation",
            "Containerization (Docker & Kubernetes)",
            "Infrastructure as Code (Terraform)",
            "24/7 Cloud Monitoring & Optimization"
        ],
        process: [
            { title: "Assessment", desc: "Reviewing current infrastructure needs." },
            { title: "Planning", desc: "Designing a cloud-native roadmap." },
            { title: "Migration", desc: "Moving assets with zero downtime." },
            { title: "Management", desc: "Ongoing monitoring and scaling." }
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
        image: cloudImg
    },
    'qa-08': {
        title: "Testing & QA",
        subtitle: "Flawless Performance, Guaranteed",
        description: "Bugs cost money and reputation. Our dedicated QA team ensures your software is bulletproof before it hits the market. We use a mix of automated and manual testing to cover every edge case.",
        features: [
            "Automated Testing Suites",
            "Manual Functional & UI Testing",
            "Performance & Load Testing",
            "Security Vulnerability Assessment",
            "API Testing",
            "Mobile App Compatibility Testing"
        ],
        process: [
            { title: "Planning", desc: "Defining test cases and acceptance criteria." },
            { title: "Execution", desc: "Running automated and manual tests." },
            { title: "Reporting", desc: "Documenting bugs and performance issues." },
            { title: "Retesting", desc: "Verifying fixes before release." }
        ],
        technologies: ["Selenium", "Cypress", "Jest", "Appium", "JMeter", "Postman"],
        image: testingImg
    },
    'wd-09': {
        title: "Web Development",
        subtitle: "Captivating Websites that Drive Growth",
        description: "Your website is your digital storefront. We build stunning, responsive, and SEO-optimized websites that tell your brand story and convert visitors into loyal customers.",
        features: [
            "Corporate & Brand Website Development",
            "E-commerce Stores (Shopify, WooCommerce)",
            "CMS Development (WordPress, Strapi)",
            "Responsive & Mobile-First Design",
            "Web Accessibility (WCAG) Compliance",
            "Speed Optimization & Core Web Vitals"
        ],
        process: [
            { title: "Strategy", desc: "Defining site structure and content." },
            { title: "Design", desc: "Creating visual mockups and layouts." },
            { title: "Development", desc: "Coding the frontend and backend." },
            { title: "Launch", desc: "Live deployment and indexing." }
        ],
        technologies: ["MongoDB", "Express", "React", "Node.js", "Python", "Next.js", "HTML5", "CSS3"],
        image: webDevImg
    },
    'it-10': {
        title: "IT Support",
        subtitle: "24/7 Reliability for Your Business",
        description: "Downtime is not an option. Our managed IT support services ensure your systems are always operational, secure, and up-to-date, allowing you to focus on your core business.",
        features: [
            "24/7 Helpdesk & Remote Support",
            "Network Security & Management",
            "Data Backup & Disaster Recovery",
            "Hardware & Software Procurement",
            "Cybersecurity Monitoring",
            "Employee Onboarding & Access Management"
        ],
        process: [
            { title: "Audit", desc: "Checking current IT health." },
            { title: "Setup", desc: "Installing monitoring tools." },
            { title: "Support", desc: "Immediate response to tickets." },
            { title: "Maintenance", desc: "Regular patching and updates." }
        ],
        technologies: ["Jira Service Desk", "TeamViewer", "Active Directory", "Cisco", "Sophos", "Office 365"],
        image: itSupportImg
    },
    'dm-11': undefined, // Removed DM as it has its own page
    'security': {
        title: "Cyber Security Services",
        subtitle: "Protect Your Digital Assets 24/7",
        description: "In an era of increasing cyber threats, security is not an option—it's a necessity. We provide comprehensive cybersecurity solutions that protect your infrastructure, data, and users from evolving threats. From vulnerability assessments to real-time monitoring and incident response, we ensure your business remains resilient against attacks.",
        features: [
            "Vulnerability Assessment & Penetration Testing (VAPT)",
            "Security Operations Center (SOC) as a Service",
            "Identity & Access Management (IAM)",
            "Cloud Security Posture Management",
            "Endpoint Detection & Response (EDR)",
            "Compliance Audits (GDPR, ISO 27001)"
        ],
        process: [
            { title: "Assess", desc: "Identifying vulnerabilities and risks." },
            { title: "Protect", desc: "Implementing defense mechanisms." },
            { title: "Monitor", desc: "24/7 surveillance of network traffic." },
            { title: "Respond", desc: "Rapid action on detected threats." }
        ],
        technologies: ["Splunk", "CrowdStrike", "Wireshark", "Nessus", "Burp Suite", "AWS Security Hub"],
        image: itSupportImg // Reusing IT support image as placeholder if no specific one
    }
};
