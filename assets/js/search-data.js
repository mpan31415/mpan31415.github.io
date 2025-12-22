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
        },{id: "news-variable-grasp-pose-and-commitment-for-trajectory-optimization-is-accepted-to-hora-2023",
          title: '🎉 Variable Grasp Pose and Commitment for Trajectory Optimization is accepted to HORA...',
          description: "",
          section: "News",},{id: "news-graduated-from-bsc-mechatronics-engineering-university-of-melbourne-with-first-class-honours",
          title: '🎓 Graduated from BSc. Mechatronics Engineering (University of Melbourne) with First-Class Honours',
          description: "",
          section: "News",},{id: "news-facevis-exploring-a-robot-s-face-for-affective-visualisation-design-is-accepted-to-chi-2023",
          title: '🎉 FaceVis: Exploring a Robot’s Face for Affective Visualisation Design is accepted to...',
          description: "",
          section: "News",},{id: "news-team-unimelb-s-entry-officemate-won-1st-place-in-the-office-assistant-robot-competition-at-hri-2024",
          title: '🏆 Team UniMelb’s entry “OfficeMate” won 1st-place in the Office Assistant Robot Competition...',
          description: "",
          section: "News",},{id: "news-effects-of-shared-control-on-cognitive-load-and-trust-in-teleoperated-trajectory-tracking-is-accepted-to-ieee-robotics-and-automation-letters-ra-l-with-oral-presentation-at-iros-2025",
          title: '🎉 Effects of Shared Control on Cognitive Load and Trust in Teleoperated Trajectory...',
          description: "",
          section: "News",},{id: "news-a-review-of-differentiable-simulators-is-accepted-to-ieee-access",
          title: '🎉 A Review of Differentiable Simulators is accepted to IEEE Access',
          description: "",
          section: "News",},{id: "news-using-fitts-law-to-benchmark-assisted-human-robot-performance-is-accepted-to-hri-2025",
          title: '🎉 Using Fitts’ Law to Benchmark Assisted Human-Robot Performance is accepted to HRI...',
          description: "",
          section: "News",},{id: "news-officemate-pilot-evaluation-of-an-office-assistant-robot-is-accepted-to-hri-2025",
          title: '🎉 OfficeMate: Pilot Evaluation of an Office Assistant Robot is accepted to HRI...',
          description: "",
          section: "News",},{id: "news-assisting-mocap-based-teleoperation-of-robot-arm-using-augmented-reality-visualisations-is-accepted-to-hri-2025",
          title: '🎉 Assisting MoCap-Based Teleoperation of Robot Arm using Augmented Reality Visualisations is accepted...',
          description: "",
          section: "News",},{id: "news-learning-on-the-fly-rapid-policy-adaptation-via-differentiable-simulation-is-accepted-to-corl-2025-resource-rational-robot-learning-workshop",
          title: '🎉 Learning on the Fly: Rapid Policy Adaptation via Differentiable Simulation is accepted...',
          description: "",
          section: "News",},{id: "news-learning-on-the-fly-rapid-policy-adaptation-via-differentiable-simulation-is-accepted-to-ieee-robotics-and-automation-letters-ra-l-with-oral-presentation-at-icra-2026",
          title: '🎉 Learning on the Fly: Rapid Policy Adaptation via Differentiable Simulation is accepted...',
          description: "",
          section: "News",},{id: "projects-deep-rl-for-motion-imitation",
          title: 'Deep RL for Motion Imitation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deepmimic/";
            },},{id: "projects-gaussian-process-regression-pollution-prediction",
          title: 'Gaussian Process Regression - Pollution Prediction',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gp_pollution_pred/";
            },},{id: "projects-autonomous-lane-changing-maneuver",
          title: 'Autonomous lane-changing maneuver',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lane_changing/";
            },},{id: "projects-neural-radiance-fields-for-view-synthesis-nerf",
          title: 'Neural Radiance Fields for View Synthesis (NeRF)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nerf/";
            },},{id: "projects-rocket-docking-maneuver",
          title: 'Rocket docking maneuver',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rocket_docking/";
            },},{id: "projects-trajectory-optimization-for-quadrupedal-robot",
          title: 'Trajectory Optimization for Quadrupedal Robot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trajopt_mujoco/";
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
