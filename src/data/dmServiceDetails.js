import seoImg from '../assets/digitalmarketing1.jpeg'; // Placeholder, ideally use specific images
import ppcImg from '../assets/digitalmarketing1.jpeg';
import socialImg from '../assets/digitalmarketing1.jpeg';
import contentImg from '../assets/digitalmarketing1.jpeg';
import emailImg from '../assets/digitalmarketing1.jpeg';
import analyticsImg from '../assets/digitalmarketing1.jpeg';

export const dmServiceDetails = {
    'seo': {
        title: "Search Engine Optimization (SEO)",
        subtitle: "Rank Higher, Drive Organic Traffic",
        description: "SEO is the foundation of long-term digital success. We optimize your website's technical structure, on-page content, and off-page authority to ensure you rank for keywords that matter to your business.",
        features: [
            "Comprehensive Website Audit",
            "Keyword Research & Strategy",
            "On-Page Optimization (Meta tags, Headers, Content)",
            "Technical SEO (Site Speed, Mobile-Friendliness)",
            "Link Building & Off-Page Strategy",
            "Local SEO for Geographic Targeting"
        ],
        image: seoImg,
        benefits: [
            "Increase organic visibility and brand awareness",
            "Drive high-quality, targeted traffic",
            "Cost-effective long-term marketing strategy"
        ],
        process: [
            { title: "Audit", desc: "Analyzing your current site health and competitors." },
            { title: "Strategy", desc: "Identifying high-value keywords and content gaps." },
            { title: "Optimization", desc: "Implementing technical and content fixes." },
            { title: "Growth", desc: "Building authority through backlinks and content." }
        ],
        technologies: ["Google Analytics", "SEMrush", "WordPress", "Search Console"]
    },
    'ppc': {
        title: "Pay-Per-Click Advertising (PPC)",
        subtitle: "Instant Visibility, Measurable ROI",
        description: "Get immediate results with targeted ad campaigns. We manage Google Ads, Bing Ads, and display networks to put your brand in front of users who are actively searching for your products or services.",
        features: [
            "Campaign Setup & Strategy",
            "Keyword Bidding & Management",
            "Ad Copywriting & A/B Testing",
            "Landing Page Optimization",
            "Retargeting Campaigns",
            "Detailed Performance Reporting"
        ],
        image: ppcImg,
        benefits: [
            "Immediate traffic and lead generation",
            "Precise audience targeting",
            "Complete control over ad spend"
        ],
        process: [
            { title: "Setup", desc: "Configuring accounts and tracking pixels." },
            { title: "Launch", desc: "Going live with targeted ad groups." },
            { title: "Monitor", desc: "Daily optimization of bids and keywords." },
            { title: "Scale", desc: "Expanding profitable campaigns." }
        ],
        technologies: ["Google Ads", "Meta Ads", "Google Analytics", "Looker"]
    },
    'smm': {
        title: "Social Media Marketing",
        subtitle: "Engage Your Audience, Build Community",
        description: "Social media is where your customers hang out. We help you build a strong presence on platforms like Facebook, Instagram, LinkedIn, and Twitter/X, creating content that sparks conversation and builds loyalty.",
        features: [
            "Social Media Strategy Development",
            "Content Calendar Creation & Publishing",
            "Community Management & Engagement",
            "Paid Social Advertising (Meta, LinkedIn)",
            "Influencer Marketing Collaboration",
            "Brand Reputation Management"
        ],
        image: socialImg,
        benefits: [
            "Direct engagement with customers",
            "Increased brand loyalty and trust",
            "Viral potential for content"
        ],
        process: [
            { title: "Plan", desc: "Defining voice, tone, and platforms." },
            { title: "Create", desc: "Designing visuals and writing captions." },
            { title: "Engage", desc: "Responding to comments and messages." },
            { title: "Grow", desc: "Analyzing metrics to improve reach." }
        ],
        technologies: ["Meta Ads", "LinkedIn", "Canva", "Buffer"]
    },
    'content': {
        title: "Content Marketing",
        subtitle: "Tell Your Story, Educate Your Customers",
        description: "Content is king. We create high-quality, valuable content that educates your audience, addresses their pain points, and establishes your brand as an industry thought leader.",
        features: [
            "Blog Post Writing & Management",
            "Whitepapers & E-books",
            "Video Scripting & Production",
            "Infographics & Visual Content",
            "Case Studies & Success Stories",
            "Content Distribution Strategy"
        ],
        image: contentImg,
        benefits: [
            "Builds authority and credibility",
            "Supports SEO efforts",
            "Nurtures leads through the funnel"
        ],
        process: [
            { title: "Research", desc: "Understanding audience interests." },
            { title: "Draft", desc: "Creating compelling narratives." },
            { title: "Edit", desc: "Refining for clarity and SEO." },
            { title: "Publish", desc: "Distributing across channels." }
        ],
        technologies: ["WordPress", "HubSpot", "Google Analytics", "Canva"]
    },
    'email': {
        title: "Email Marketing",
        subtitle: "Nurture Leads, Drive Retention",
        description: "Email remains one of the most effective marketing channels. We design personalized email campaigns and automated flows that keep your audience engaged and drive repeat business.",
        features: [
            "List Building & Segmentation",
            "Newsletter Design & Creation",
            "Automated Drip Campaigns",
            "Cart Abandonment Flows",
            "Personalization & Dynamic Content",
            "A/B Testing Subject Lines"
        ],
        image: emailImg,
        benefits: [
            "High ROI compared to other channels",
            "Direct communication line to customers",
            "Automated customer lifecycle management"
        ],
        process: [
            { title: "Segment", desc: "Categorizing subscribers by behavior." },
            { title: "Design", desc: "Creating responsive email templates." },
            { title: "Send", desc: "Scheduling campaigns for optimal times." },
            { title: "Analyze", desc: "Tracking open and click-through rates." }
        ],
        technologies: ["Mailchimp", "HubSpot", "Salesforce", "Canva"]
    },
    'web-optimization': {
        title: "Web Optimization",
        subtitle: "Fast, Accessible, and User-Friendly",
        description: "Your website is your digital storefront. We optimize it for speed, accessibility, and user experience to ensure you don't lose potential customers to slow loading times or poor navigation.",
        features: [
            "Site Speed Optimization (Core Web Vitals)",
            "Mobile Responsiveness & UX Tuning",
            "Accessibility Compliance (WCAG)",
            "Technical Debt Reduction",
            "Caching & CDN Configuration",
            "Database Optimization"
        ],
        image: seoImg, // Using seoImg as fallback
        benefits: [
            "Lower bounce rates",
            "Better search engine rankings",
            "Improved user satisfaction"
        ],
        process: [
            { title: "Audit", desc: "Measuring baseline performance metrics." },
            { title: "Fix", desc: "Addressing critical technical issues." },
            { title: "Enhance", desc: "Improving visual stability and interactivity." },
            { title: "Monitor", desc: "Continuous performance tracking." }
        ],
        technologies: ["Lighthouse", "GTmetrix", "React", "Next.js"]
    },
    'analytics': {
        title: "Analytics & Reporting",
        subtitle: "Data-Backed Decisions for Maximum Growth",
        description: "Don't fly blind. We set up robust analytics tracking and use conversion rate optimization (CRO) techniques to turn more of your visitors into paying customers.",
        features: [
            "Google Analytics 4 (GA4) Setup",
            "Conversion Funnel Analysis",
            "Heatmap & User Behavior Tracking",
            "A/B Testing Landing Pages",
            "Custom Reporting Dashboards",
            "ROI Attribution Modeling"
        ],
        image: analyticsImg,
        benefits: [
            "Clear visibility into marketing performance",
            "Improved website conversion rates",
            "Data-driven budget allocation"
        ],
        process: [
            { title: "Track", desc: "Implementing tags and events." },
            { title: "Analyze", desc: "Identifying drop-off points." },
            { title: "Test", desc: "Running experiments to improve UX." },
            { title: "Optimize", desc: "Implementing winning variations." }
        ],
        technologies: ["Google Analytics", "Looker", "Tableau", "Hotjar"]
    },
    'video': {
        title: "Video Shoots & Editing",
        subtitle: "Captivate Audience with Visual Storytelling",
        description: "Video allows you to connect with your audience on an emotional level. We provide end-to-end video production services, from concept script to post-production editing, creating content that engages and converts.",
        features: [
            "Concept Development & Scriptwriting",
            "Professional Video Shooting (4K)",
            "Post-Production Editing & VFX",
            "Motion Graphics & Animation",
            "Sound Design & Colour Grading",
            "Social Media Shorts & Reels"
        ],
        image: contentImg, // Using contentImg as fallback
        benefits: [
            "Highest engagement rate of any media",
            "Complex ideas explained simply",
            "Stronger emotional connection with brand"
        ],
        process: [
            { title: "Concept", desc: "Brainstorming and storyboarding." },
            { title: "Shoot", desc: "Capturing high-quality footage." },
            { title: "Edit", desc: "Assembling the story with professional cuts." },
            { title: "Deliver", desc: "Formatting for various platforms." }
        ],
        technologies: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Cinema 4D"]
    }
};
