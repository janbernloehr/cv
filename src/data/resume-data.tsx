import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dr. Jan Bernlöhr",
  initials: "JB",
  location: "Kornwestheim, Deutschland",
  locationLink: "https://www.google.com/maps/place/Kornwestheim",
  about:
    "Senior Expert Machine Learning Perception for ADAS",
  summary:
    "TBD",
  avatarUrl: "https://avatars.githubusercontent.com/u/1050099?s=400&u=ed3d13a9b1106ef32769f90de44ec5ab9f8212d4&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "jan.bernloehr@de.bosch.com",
    tel: "+491622925931",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/janbernloehr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jan-bernl%C3%B6hr-14b3a025/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/janm_net",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "PhD in Mathematics, University of Zurich",
      degree: "Thesis: New features of the Birkhoff map for the dNLS equation, Supervisor: Prof. Kappeler",
      start: "2012",
      end: "2016",
    },
    {
      school: "Diploma in Mathematics, University of Stuttgart",
      degree: "Thesis: Spectral triangles of Zakharov-Shabat operators in weighted Sobolev spaces; with distinction",
      start: "2007",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Bosch, L4",
      link: "https://www.bosch.com/stories/topics/automated-driving/",
      badges: [],
      title: "Technology Lead Video Perception",
      logo: NSNLogo,
      start: "2021",
      end: "2024",
      description: "* `*` Transformed the stack from single-camera networks to spatio-temporal multi-view networks \n * `*` Close collaboration with CR (AIM 301 aka Temporal-Multi-View and AID 400 aka Deep-Fusion) \n * `*` Successful customer demos of urban hands-free driving using solely cameras (vision only) \n * `*` Build-up of the multi-modal sequential MSL dataset \n * `*` End-to-end data loop with < 24h cycle time from event in car to new network in car \n * `*` Training optimization for A100 yielding 7-figure savings YoY \n * `*` Strong use of auto-labeling (vision foundation models + post processing)",
    },
    {
      company: "Bosch & Daimler collaboration project Athena",
      link: "https://www.businessinsider.de/gruenderszene/allgemein/daimler-bosch-roboter-taxis/",
      badges: [],
      title: "Deep Learning Engineer -> Product Owner",
      logo: NSNLogo,
      start: "2018",
      end: "2021",
      description: "* `*` Deep Learning based camera perception for automated driving \n * `*` Multi Task CNNs (Semantic Segmentation, 3d Object Detection, Object Tracking, ...) \n * `*` Co-Creator xflow: reusable training modules to facilitate collaboration in large teams (> 50 devs) \n * `*` Continuous & reproducible trainings (16x V100; weekly sync with Microsoft's AzureML Team) \n * `*` Real-time optimization & deployment on embedded platforms (QNX, CUDA,  NVIDIA Xavier & Orin)",
    },
    {
      company: "Bosch, DACore",
      link: "https://www.bosch-mobility.com/de/mobility-themen/sicherheit-fuer-alle-verkehrsteilnehmer/fahrerassistenzsysteme-fuer-pkw/",
      badges: [],
      title: "Developer → Product Owner",
      logo: NSNLogo,
      start: "2016",
      end: "2017",
      description: "* `*` Team-lead Behavioral Planning @ DACore (SOPs: VW Golf 8, JLR Defender)\n * `*` Software architect for scalable Planner Level 1-3 \n * `*` Rollout of Continuous Build & Continuous Testing in Open and Closed Loop Simulation",
    },
    {
      company: "Institute of Mathematics, University of Zurich",
      link: "https://www.math.uzh.ch/home",
      badges: [],
      title: "Scholar of the Zurich Graduate School of Mathematics -> Research Assistant",
      logo: NSNLogo,
      start: "2012",
      end: "2016",
      description: "* `*` Research on nonlinear partial differential equations - see [publications](https://janbernloehr.de/academia/publications) \n * `*` Invited talks in Nantes, Luminy, Rome, St. Petersburg, Ascona",
    },
    {
      company: "Microsoft, Munich / Redmond",
      link: "https://www.math.uzh.ch/home",
      badges: ["Hybrid"],
      title: "Microsoft Expert Student Partner, Microsoft Certified Professional",
      logo: NSNLogo,
      start: "2007",
      end: "2012",
      description: "* `*` Organization of Talks and Workshops at German Universities on Azure and .NET \n * `*` Invited Speaker at TechEd 2009 Berlin on Azure Web Services \n * `*` Active contributions to .net, Visual Studio, and Windows Presentation Foundation",
    },
  ],
  skills: [
    "Torch",
    "Tensorflow",
    "Computer Vision",
    "Transformer",
    "Python",
    "Azure",
    "Embedded",
    "CUDA",
    "C++",
  ],
  projects: [
  ],
} as const;
