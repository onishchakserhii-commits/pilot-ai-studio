// Pilot AI Studio - Portfolio Data
export interface PortfolioProject {
  id: string;
  title: string;
  category: 'AI Integration' | 'Web Development' | 'AI & Web' | 'Automation';
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  technologies: string[];
  clientIndustry: string;
  clientSize: string;
  duration: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Customer Support Platform',
    category: 'AI Integration',
    shortDescription: 'Built an intelligent chatbot system using Llama 2 for a Swiss e-commerce startup to automate customer inquiries and reduce support costs.',
    fullDescription: `A comprehensive AI-powered customer support platform designed for a growing Swiss e-commerce business. The solution integrated Llama 2 language models with n8n workflows to create an intelligent chatbot capable of handling customer inquiries 24/7.

The platform was built with a modern tech stack including Next.js for the frontend, Node.js backend, and Docker containerization for seamless deployment on Vercel. The system intelligently routes complex queries to human agents while handling routine inquiries automatically.

The implementation included custom training on company-specific data, integration with existing CRM systems, and real-time analytics dashboards to track performance metrics.`,
    challenge: 'The client was overwhelmed with customer inquiries, resulting in slow response times and high support costs. They needed an intelligent solution that could handle multiple languages and maintain brand voice while reducing manual workload.',
    solution: 'We deployed a Llama 2-based chatbot integrated with n8n for workflow automation. The system was containerized with Docker and deployed on Vercel for high availability. We implemented custom fine-tuning on company data and created intelligent routing to human agents for complex issues.',
    results: [
      { metric: 'Response Time', value: '90% faster' },
      { metric: 'Support Costs', value: '65% reduction' },
      { metric: 'Customer Satisfaction', value: '+42%' },
      { metric: 'Automated Queries', value: '78%' },
    ],
    technologies: ['Llama 2', 'n8n', 'Next.js', 'Node.js', 'Docker', 'Vercel', 'PostgreSQL'],
    clientIndustry: 'E-commerce',
    clientSize: 'Small (15 employees)',
    duration: '4 months',
  },
  {
    id: 'project-2',
    title: 'Real-Time Data Dashboard for Financial Analytics',
    category: 'Web Development',
    shortDescription: 'Developed a high-performance React dashboard for a fintech startup to visualize real-time market data and portfolio analytics with sub-second latency.',
    fullDescription: `A sophisticated real-time financial analytics dashboard built for a Montreux-based fintech startup. The platform processes and visualizes complex market data with sub-second latency, enabling traders and portfolio managers to make informed decisions instantly.

The frontend was built with React 19 and Tailwind CSS, featuring interactive charts powered by Recharts and custom WebSocket connections for real-time updates. The backend was architected with Node.js and Express, connected to multiple data sources through optimized APIs.

The system handles thousands of concurrent connections and processes millions of data points daily, all while maintaining a responsive user experience across desktop and mobile devices.`,
    challenge: 'The client needed a platform that could handle massive amounts of real-time financial data while maintaining a responsive UI. Existing solutions were either too slow or too expensive to scale.',
    solution: 'We built a custom React dashboard with WebSocket connections for real-time updates, optimized state management with Redux, and a Node.js backend with efficient caching strategies. Docker containerization and Vercel deployment ensured scalability.',
    results: [
      { metric: 'Data Latency', value: '<500ms' },
      { metric: 'Concurrent Users', value: '5000+' },
      { metric: 'Uptime', value: '99.9%' },
      { metric: 'Performance Score', value: '98/100' },
    ],
    technologies: ['React 19', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express', 'WebSocket', 'Redis', 'Docker', 'Vercel'],
    clientIndustry: 'FinTech',
    clientSize: 'Small-Medium (25 employees)',
    duration: '3 months',
  },
  {
    id: 'project-3',
    title: 'Automated Workflow System with n8n',
    category: 'Automation',
    shortDescription: 'Designed and implemented a complex n8n workflow system that automated 40+ business processes for a Swiss manufacturing company, eliminating manual data entry.',
    fullDescription: `A comprehensive automation solution built with n8n for a Swiss manufacturing company struggling with manual data entry and disconnected systems. The project involved mapping 40+ business processes and automating them through intelligent workflows.

The system integrates multiple data sources including ERP systems, CRM platforms, email services, and cloud storage. Custom nodes were developed to handle company-specific logic, and the workflows were deployed on self-hosted n8n instances for maximum control and security.

The implementation included comprehensive documentation, staff training, and ongoing optimization to ensure the system evolves with the company's needs.`,
    challenge: 'The manufacturing company had fragmented systems and relied heavily on manual data entry, leading to errors and inefficiencies. They needed a solution that could integrate all systems without expensive custom development.',
    solution: 'We designed and implemented a comprehensive n8n workflow system with custom nodes for business-specific logic. The workflows were deployed on self-hosted instances with monitoring and backup systems. We provided staff training and documentation.',
    results: [
      { metric: 'Manual Tasks Eliminated', value: '40+' },
      { metric: 'Time Saved Weekly', value: '120 hours' },
      { metric: 'Error Rate', value: '-95%' },
      { metric: 'Process Efficiency', value: '+300%' },
    ],
    technologies: ['n8n', 'Node.js', 'Docker', 'PostgreSQL', 'REST APIs', 'Webhooks'],
    clientIndustry: 'Manufacturing',
    clientSize: 'Medium (50 employees)',
    duration: '2 months',
  },
  {
    id: 'project-4',
    title: 'AI-Enhanced Content Management System',
    category: 'AI & Web',
    shortDescription: 'Created a next-generation CMS with AI-powered content generation, SEO optimization, and multi-language support for a Swiss media company.',
    fullDescription: `A modern content management system enhanced with AI capabilities for a Swiss media publishing company. The platform combines traditional CMS functionality with intelligent content generation, automated SEO optimization, and real-time collaboration features.

Built with Next.js and TypeScript, the system features a beautiful admin interface for content creators, AI-powered suggestions for headlines and meta descriptions, and automated content distribution across multiple channels. The backend uses Node.js with PostgreSQL, and the entire system is containerized with Docker for easy deployment.

The platform supports multi-language content, version control, collaborative editing, and integrates with popular publishing tools and analytics platforms.`,
    challenge: 'The media company needed to scale content production while maintaining quality and SEO standards. They wanted AI assistance without losing editorial control or brand voice.',
    solution: 'We built a Next.js-based CMS with integrated Llama 2 models for content suggestions. The system features collaborative editing, automated SEO checks, and multi-language support. Docker deployment on Vercel ensured scalability and reliability.',
    results: [
      { metric: 'Content Production', value: '+180%' },
      { metric: 'SEO Score Improvement', value: '+45%' },
      { metric: 'Publishing Time', value: '70% faster' },
      { metric: 'Multi-language Support', value: '12 languages' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Llama 2', 'PostgreSQL', 'Node.js', 'Docker', 'Vercel', 'Tailwind CSS'],
    clientIndustry: 'Media & Publishing',
    clientSize: 'Medium (40 employees)',
    duration: '5 months',
  },
];

export function getPortfolioProject(id: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.id === id);
}

export function getAllPortfolioProjects(): PortfolioProject[] {
  return portfolioProjects;
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  return portfolioProjects.filter(project => project.category === category);
}

export function getCategories(): string[] {
  return [...new Set(portfolioProjects.map(p => p.category))];
}
