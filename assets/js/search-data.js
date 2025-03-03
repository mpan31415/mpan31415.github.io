// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Click the button on the right to download the CV as a PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-a-full-paper-accepted-at-ieee-hora-2023",
          title: '🎉 A full paper accepted at IEEE HORA 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-graduated-from-the-university-of-melbourne-with-a-bachelor-of-science-degree-in-mechatronics-engineering-first-class-honours",
          title: 'Graduated from The University of Melbourne with a Bachelor of Science degree in...',
          description: "",
          section: "News",},{id: "news-a-late-breaking-paper-accepted-at-acm-chi-2023",
          title: '🎉 A late-breaking paper accepted at ACM CHI 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-admitted-to-masters-programs-in-robotics-at-both-eth-zürich-and-epfl",
          title: 'Admitted to Masters programs in Robotics at both ETH Zürich and EPFL',
          description: "",
          section: "News",},{id: "news-the-officemate-team-unimelb-won-1st-place-in-the-office-assistant-robot-competition-at-hri-2024",
          title: '🏆 The ‘OfficeMate’ (Team UniMelb) won 1st-place in the Office Assistant Robot Competition...',
          description: "",
          section: "News",},{id: "news-a-paper-accepted-by-ieee-robotics-and-automation-letters-ra-l",
          title: '🎉 A paper accepted by IEEE Robotics and Automation Letters (RA-L)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-a-paper-accepted-by-ieee-access",
          title: '🎉 A paper accepted by IEEE Access',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-began-my-masters-studies-in-robotics-systems-and-control-at-eth-zürich",
          title: 'Began my Masters studies in Robotics, Systems and Control at ETH Zürich',
          description: "",
          section: "News",},{id: "news-attended-swiss-robotics-day-2024-in-basel-switzerland",
          title: 'Attended Swiss Robotics Day 2024 in Basel, Switzerland',
          description: "",
          section: "News",},{id: "news-a-full-paper-accepted-at-acm-ieee-hri-2025",
          title: '🎉 A full paper accepted at ACM/IEEE HRI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-two-late-breaking-papers-accepted-at-acm-ieee-hri-2025",
          title: '🎉 Two late-breaking papers accepted at ACM/IEEE HRI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11/";
            },},{id: "news-won-the-best-project-prize-in-the-task-gaussian-process-regression-for-air-pollution-prediction-for-the-course-probabilistic-ai-taught-by-prof-andreas-krause-at-eth-zürich",
          title: 'Won the best-project prize in the task - Gaussian Process Regression for Air...',
          description: "",
          section: "News",},{id: "news-began-my-semester-project-in-the-robotics-and-perception-group-at-the-university-of-zürich-supervised-by-prof-davide-scaramuzza",
          title: 'Began my Semester Project in the Robotics and Perception Group at The University...',
          description: "",
          section: "News",},{id: "projects-gaussian-process-regression-pollution-prediction",
          title: 'Gaussian Process Regression - Pollution Prediction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gp_pollution_pred/";
            },},{id: "projects-autonomous-lane-changing-maneuver",
          title: 'Autonomous lane-changing maneuver',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lane_changing/";
            },},{id: "projects-rocket-docking-maneuver",
          title: 'Rocket docking maneuver',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rocket_docking/";
            },},{id: "projects-monocular-visual-odometry-pipeline",
          title: 'Monocular Visual Odometry pipeline',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vo_pipeline/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%63%68%61%65%6C.%70%61%6E%33%31%34%31%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mpan31415", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michael-pan-01335a175", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2272-0925", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ngZ6XuYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
