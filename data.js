/*
 * data.js : 이 파일 하나만 고치면 홈페이지 내용이 바뀝니다.
 * 수정 규칙
 *  1) 글자는 큰따옴표 "..." 안에 씩니다. 값 사이에는 쉼표(,)를 빼면 안 됩니다.
 *  2) 기간은 "Mar 2021 – Feb 2027"처럼 en dash(–)를 씨요. 진행 중이면 "Present".
 *  3) 저장 후 index.html을 새로고침하세요. "Could not read data.js"가 보이면
 *     방금 고친 부분의 쉼표와 따옴표를 확인하세요.
 */
window.SITE_DATA = {
  // [프로필 Profile] 이름, 한 줄 소개, 소속, 위치, 이메일, 사진 파일명, CV PDF 경로
  // 사진 넣기: personal-homepage 폴더에 profile.jpg 를 넣으면 자동으로 바뀝니다.
  profile: {
    name: "Jeonghyeon KIM",
    initials: "JK",
    headline: "B.Eng. Candidate in Nano Science and Engineering & Materials Science and Engineering",
    affiliation: "Yonsei University",
    location: "Seoul / Suwon, Republic of Korea",
    emails: [
      "harold.jhkim@gmail.com",
      "2021199jeonghyeon@yonsei.ac.kr"
    ],
    photo: "profile.jpg",
    cvPdf: "",
    cvLabel: "Download CV"
  },
  // [소개 About] 요약 문단과 관심 분야 목록
  about: {
    heading: "About",
    navLabel: "About",
    summary: "I am an undergraduate student at Yonsei University, expecting a B.Eng. in Nano Science and Engineering & Materials Science and Engineering in February 2027. My research focuses on battery materials. As an Undergraduate Researcher at the Electrochemical Energy Storage Laboratory (EESL), I study ways to expand the low-temperature operating range of batteries and analyze X-ray-based characterization data of Electrode-Electrolyte Interphases (EEIs).",
    interestsLabel: "Research Interests",
    interests: [
      "Low-Temperature (Cryogenic) Batteries",
      "Solid-State Electrolytes",
      "Sodium-Ion Batteries",
      "X-ray Spectroscopies"
    ]
  },
  // [학력 Education] 항목 필드: institution, location, dates, program, details[], logo(선택)
  // 로고 빼기: logo 줄을 지우거나 logo: "" 로 두면 됩니다. 바꿀 때는 logos 폴더에 파일을 넣고 경로를 고치세요.
  education: {
    heading: "Education",
    navLabel: "Education",
    entries: [
      { institution: "Yonsei University", location: "Seoul, Republic of Korea", dates: "Mar 2021 – Feb 2027", program: "B.Eng. expected in Nano Science and Engineering & Materials Science and Engineering", details: [
          "Cumulative GPA: 3.93 / 4.30"
        ], logo: "logos/yonsei.jpg" },
      { institution: "Nanyang Technological University", location: "Singapore, Republic of Singapore", dates: "Jun 2024 – Jul 2024", program: "Exchange Student, Global Education and Mobility Trailblazer", details: [
          "Coursework: MS0003 Introduction to Data Science and Artificial Intelligence"
        ], logo: "logos/ntu.png" },
      { institution: "Shanghai Jiao Tong University", location: "Shanghai, People's Republic of China", dates: "Feb 2024 – Jun 2024", program: "Virtual Exchange Student, Jiao Tong Global Virtual Classroom", details: [
          "Coursework: MSE2602 Materials Chemistry"
        ], logo: "logos/sjtu.png" }
    ]
  },
  // [연구 경험 Research] 항목 필드: role, organization, institution, location, dates, bullets[]
  research: {
    heading: "Research Experience",
    navLabel: "Research",
    entries: [
      { role: "Undergraduate Researcher", organization: "Electrochemical Energy Storage Laboratory (EESL)", institution: "Yonsei University", location: "", dates: "Jul 2026 – Present", bullets: [
          "Researched methods to expand the low-temperature operating range of solid-state batteries, considering external environmental factors in space regions",
          "Analyzed lab-based X-ray Photoelectron Spectroscopy (XPS) data of Sodium Ion Battery cathode samples, based on changes in electrolyte conditions and etching depths",
          "Synthesized and Characterized advanced cathode materials for Sodium Ion Batteries, focusing on the enhancement of the Cathode-Electrolyte Interphases and identification of charging effect controller"
        ] },
      { role: "Participant", organization: "My Own Research Trends Analysis Report Contest", institution: "Yonsei University Library", location: "", dates: "Aug 2026", bullets: [
          "Evaluated recent global research trends on cryogenic batteries by utilizing SciVal by Scopus"
        ] },
      { role: "Undergraduate Researcher (Course-Integrated)", organization: "Advanced Nano-energy Materials Laboratory 21", institution: "Yonsei University", location: "", dates: "Mar 2024 – Jun 2024", bullets: [
          "Conducted comprehensive research on optimizing Sodium Ion Batteries by systematically modulating the composition and structure of cathode, anode, and electrolyte materials, attaining an A+ grade in MST3310 Materials Research"
        ] },
      { role: "Member, 2nd – 3rd Class", organization: "ALLOY (Academic Society of the Yonsei DMSE)", institution: "Yonsei University", location: "", dates: "Sep 2023 – Jun 2024", bullets: [
          "Examined the recent advancements and performance variations with electrochemical data interpretation of Zinc-Air Batteries and Lithium Ion Batteries",
          "Scrutinized corporate trajectories, strategic goals, key accomplishments, and SWOT indices for Korean battery corporations",
          "Collaborated with other prospective researchers from diverse majors"
        ] },
      { role: "Undergraduate Researcher (Course-Integrated)", organization: "EESL", institution: "Yonsei University", location: "", dates: "Sep 2023 – Dec 2023", bullets: [
          "Investigated hypothetical methods to enhance High-Entropy Electrolytes for Lithium Ion Batteries via optimizing salts and additives, attaining an A0 grade in MST3320 Materials Research 2: Capstone Design"
        ] }
    ]
  },
  // [주요 프로젝트 Projects] 항목 필드: title, type, venue, date, url
  // 링크 바꾸기: url 값을 원하는 주소로 바꾸세요. url을 "" 로 두면 링크 없이 제목만 보입니다.
  projects: {
    heading: "Selected Projects",
    navLabel: "Projects",
    moreDetailsLabel: "More Details",
    moreDetailsUrl: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992",
    entries: [
      { title: "Mechanical Impacts of Space Environment on Solid-State Batteries", type: "Report", venue: "NSE4001, Yonsei University", date: "Present", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Research Trends Analysis Report: Cryogenic Batteries", type: "Report", venue: "My Own Research Trends Analysis Report Contest, Yonsei University Library", date: "Aug 2026", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "XPS Analyses of Cathode Samples", type: "Presentation", venue: "2nd Summer Intern Seminar, EESL", date: "Aug 2026", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Making a Successful Movie with Film Database", type: "Presentation", venue: "MS0003, Nanyang Technological University", date: "Aug 2024", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Ideas to Improve Sodium Ion Batteries", type: "Presentation", venue: "MST3310, Yonsei University", date: "Jun 2024", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Zinc-Air Batteries: Recent Trends and Advancements", type: "Poster", venue: "2024 ALLOY Materials Conference, ALLOY", date: "Jun 2024", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Why Sodium Ion Batteries?", type: "Presentation", venue: "3-Minute Thesis Contest, King Abdullah University of Science and Technology (KAUST)", date: "May 2024", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Analysis of POSCO Group", type: "Presentation", venue: "ALLOY&SYNERGY Joint Session, ALLOY", date: "Apr 2024", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Improved Performances of High-Entropy Electrolytes with Additives", type: "Report", venue: "MST3320, Yonsei University", date: "Dec 2023", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Analysis of Battery Performance with Nickel Content in NCM Cathodes", type: "Poster", venue: "2023 ALLOY Team Poster Presentation, ALLOY", date: "Dec 2023", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" },
      { title: "Defect Engineering in WBG Perovskite Tandem Solar Cells", type: "Presentation", venue: "Best Presenter Session, ALLOY", date: "Sep 2023", url: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992" }
    ]
  },
  // [기능 · 보유 기술 Skills] 그룹 필드: label, items[]
  skills: {
    heading: "Qualifications & Skills",
    navLabel: "Skills",
    groups: [
      { label: "X-ray based Analyses", items: [
          "XPS",
          "XRD",
          "XAS"
        ] },
      { label: "", items: [
          "Basic proficiency in Jupyter and Machine Learning"
        ] },
      { label: "Languages", items: [
          "Korean (Native)",
          "English (Academic Proficiency, TOEFL iBT26: 5.5)",
          "Mandarin Chinese (Intermediate)"
        ] }
    ]
  },
  // [대외활동 Activities] 항목 필드: role, organization, institution, location, dates, bullets[], logo(선택)
  // 로고 빼기: logo 줄을 지우거나 logo: "" 로 두면 됩니다.
  activities: {
    heading: "Extracurricular Activities",
    navLabel: "Activities",
    entries: [
      { role: "Tutor", organization: "Korean Tutoring", institution: "Yonsei University", location: "", dates: "Sep 2026 – Present", bullets: [
          "Supported an international freshman in familiarizing himself with Korean University culture by teaching natural modern Korean phrases and college tips"
        ] },
      { role: "Squad Leader, Culinary Specialist", organization: "5022 Air Defense Unit", institution: "Republic of Korea Army", location: "", dates: "Dec 2024 – Jun 2026", bullets: [
          "Demonstrated high standards of performance and dedication to the duty of vital combat support to ensure troop morale and mission readiness by serving nutritious meals"
        ] },
      { role: "Visiting Student", organization: "KAUST Education Passport: Exploring Scientific Research Communication Methods", institution: "King Abdullah University of Science and Technology", location: "Thuwal, Kingdom of Saudi Arabia", dates: "Apr 2024 – May 2024", bullets: [
          "Mastered research ethics and persuasive scientific presentation skills, culminating in the 3-Minute-Thesis competition",
          "Surveyed cutting-edge experimental instrumentation and advanced research infrastructure through intensive facility tours",
          "Cultivated cross-cultural networks with 19 other international prospective undergraduate researchers and with KAUST researchers"
        ], logo: "logos/kaust.png" },
      { role: "Member, Translation Team", organization: "Yours (the 57th Yonsei University General Student Council Campaign Team)", institution: "", location: "", dates: "Nov 2023 – Dec 2023", bullets: [
          "Translated the education pledges from Korean into English for non-Korean Yonsei students",
          "Engaged in lecture-hall advocacy rallies and choreography campaigns, contributing to the election of the first general student council in three consecutive years"
        ] },
      { role: "Member", organization: "2023 UIC Global Career Tour Korea", institution: "Underwood International College, Yonsei University", location: "", dates: "Aug 2023", bullets: [
          "Conducted interviews and Q&A sessions with Yonsei alumni regarding corporate culture and required engineering backgrounds during onsite visits to STEM market leaders, including Samsung, LG Display, and SK On",
          "Co-authored an e-book report with a focus on SK On and Hanwha Qcells, elaborating business models and insights gained from the tour"
        ] },
      { role: "Vice President", organization: "CoNSEnt (the 7th Yonsei University Nano Science and Engineering Major Student Council)", institution: "", location: "", dates: "Apr 2022 – Dec 2022", bullets: [
          "Revitalized campus life and student society as a delegate of the first post-pandemic student council, successfully transitioning from remote to in-person engagement",
          "Orchestrated exchange class programs with Korea University students for the historic Yon-Ko Games",
          "Organized the first post-pandemic all-class Membership Training seminar of the Integrated Science and Engineering Division, supervising recreation games and student safety overnight"
        ] },
      { role: "Private Tutor", organization: "Seoltab", institution: "", location: "", dates: "Sep 2021 – Dec 2024", bullets: [
          "Taught Mathematics, English, and Chemistry subjects in online sessions for Korean middle school and high school students in rural areas with limited educational infrastructure"
        ] }
    ]
  },
  // [바닥글 Footer]
  footer: {
    copyright: "© 2026 Jeonghyeon KIM",
    lastUpdated: "Last updated: November 2026"
  }
};
