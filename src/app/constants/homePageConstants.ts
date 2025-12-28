interface HeaderOption {
  title: string;
  resource: string;
}

interface TechnicalSkill {
  title: string;
  resource: string;
}

interface HomePageConstants {
  title: string;
  professionalSummary: string;
  technicalSkills: TechnicalSkill[];
  headerOptions: HeaderOption[];
}

const homePageConstants: HomePageConstants = {
  title: "Welcome to My Portfolio",
  professionalSummary: `Software Engineer with 5+ years of experience designing and building scalable, high-availability backend
systems using Java, Spring, and relational databases. Strong experience with AWS cloud services and
infrastructure automation using Terraform and Ansible. Proven ability to work in distributed systems
environments, having working knowledge of React.js to support end-to-end product development.`,
  technicalSkills: [
    {
      title: "React",
      resource: "/react",
    },
    {
      title: "Node.js",
      resource: "/nodejs",
    },
  ],
  headerOptions: [
    {
      title: "About Me",
      resource: "/about",
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
