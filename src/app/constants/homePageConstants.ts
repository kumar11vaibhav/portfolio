interface HeaderOption {
  title: string;
  resource: string;
}

interface TechnicalSkill {
  id: number;
  title: string;
  resource: string;
}

interface ProfessionalSummary {
  intro: string;
  delivery: string;
  coreStrengths: string[];
  closing: string;
}

interface HomePageConstants {
  title: string;
  professionalSummary: ProfessionalSummary;
  technicalSkills: TechnicalSkill[];
  headerOptions: HeaderOption[];
}

const homePageConstants: HomePageConstants = {
  title: "From Design to Production — Backend Engineering | Cloud | AI-Enabled Systems",
  professionalSummary: {
    intro:
      "Hi — I’m Baibhav, a Software Engineer with 5+ years of experience designing and building scalable, reliable backend systems for cloud-native, production-grade applications.",
    delivery:
      "I deliver end-to-end solutions: designing Java + Spring Boot microservices, improving performance and reliability through testing, observability, and operational best practices, and deploying services on AWS with automated infrastructure.",
    coreStrengths: [
      "Backend development: Java, Spring Boot, REST APIs, microservice patterns.",
      "Cloud engineering: AWS, infrastructure automation with Ansible and Terraform.",
      "System design: scalable architectures, performance tuning, and maintainability.",
      "Reliability & quality: test-driven development, observability, and operational practices.",
      "Emerging focus: Retrieval-Augmented Generation (RAG) and AI-driven systems.",
    ],
    closing:
      "I’m passionate about taking ideas from design to production and enjoy collaborating across teams to build data-driven and AI-enabled products.",
  },
  technicalSkills: [
    {
      id: 1,
      title: "Java",
      resource: "/java",
    },
    {
      id: 2,
      title: "Spring Boot",
      resource: "/spring-boot",
    },
    {
      id: 3,
      title: "AWS",
      resource: "/aws",
    },
    {
      id: 4,  
      title: "Terraform",
      resource: "/terraform",
    },
    { 
      id: 5,
      title: "Ansible",
      resource: "/ansible",
    },
    {
      id: 6,
      title: "SQL",
      resource: "/sql",
    },
    {
      id: 7,
      title: "React.js",
      resource: "/react",
    },
    {
      id: 8,
      title: "CI/CD",
      resource: "/cicd",
    }
  ],
  headerOptions: [
    {
      title: "About Me",
      resource: "/home",
    },
    {
      title: "Projects",
      resource: "/projects",
    },
    {
      title: "Contact",
      resource: "/contact",
    },
  ],
};

export { homePageConstants };
export type { HomePageConstants, HeaderOption, TechnicalSkill };
