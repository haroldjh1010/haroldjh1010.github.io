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
    summary: "I am a senior undergraduate student at Yonsei University, expecting a B.Eng. in Nano Science and Engineering & Materials Science and Engineering in February 2027. My research focuses on battery materials, and as an undergraduate researcher, I study ways to expand the low-temperature operating range of batteries by analyzing X-ray-based characterization data of Electrode-Electrolyte Interphases (EEIs).",
    interestsLabel: "Research Interests",
    interests: [
      "Space Batteries",
      "Low-Temperature (Cryogenic) Batteries",
      "Solid-State Electrolytes",
      "Sodium-Ion Batteries",
      "X-ray Spectroscopies",
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
  // [연구 경험 Research] 항목 필드: role, organization, institution, location, dates
  research: {
    heading: "Research Experience",
    navLabel: "Research",
    entries: [
      { role: "Undergraduate Researcher", organization: "Electrochemical Energy Storage Laboratory", institution: "Yonsei University", location: "", dates: "Jul 2026 – Present"
        },
      { role: "Participant", organization: "My Own Research Trends Analysis Report Contest", institution: "Yonsei University Library", location: "", dates: "Aug 2026"
        },
      { role: "Undergraduate Researcher (Course-Integrated)", organization: "Advanced Nano-energy Materials Laboratory 21", institution: "Yonsei University", location: "", dates: "Mar 2024 – Jun 2024"
        },
      { role: "Member, 2nd – 3rd Class", organization: "ALLOY (Academic Society of the Department of Materials Science and Engineering at Yonsei)", institution: "Yonsei University", location: "", dates: "Sep 2023 – Jun 2024"
        },
      { role: "Undergraduate Researcher (Course-Integrated)", organization: "Electrochemical Energy Storage Laboratory", institution: "Yonsei University", location: "", dates: "Sep 2023 – Dec 2023"
        }
    ]
  },
   // [기능 · 보유 기술 Skills] 그룹 필드: label, items[]
  skills: {
    heading: "Qualifications & Skills",
    navLabel: "Skills",
    groups: [
      { label: "Tools", items: [
          "XPS",
          "XRD",
          "XAS",
          "SEM",
          "Jupyter",
          "GitHub",
        ] },
      { label: "Languages", items: [
          "Korean (Native)",
          "English (Fluent)",
          "Mandarin Chinese (Intermediate)"
        ] }
    ]
  },
  // [주요 프로젝트 Projects] 항목 필드: title, type, venue, date, url
  // 링크 바꾸기: url 값을 원하는 주소로 바꾸세요. url을 "" 로 두면 링크 없이 제목만 보입니다.
  projects: {
    heading: "Selected Projects",
    navLabel: "Projects",
    moreDetailsLabel: "And More...",
    moreDetailsUrl: "https://app.notion.com/p/Presentations-Team-Projects-3b203ee0f516808abbf5dcb825f42992",
    entries: [
      { title: "Mechanical Impacts of Space Environment on Solid-State Batteries", type: "Report", venue: "NSE4001, Yonsei University", date: "Present", url: "https://app.notion.com/p/Research-Proposal-3f103ee0f51680e08959fec665fbee77" },
      { title: "Research Trends Analysis Report: Cryogenic Batteries", type: "Report (Korean)", venue: "My Own Research Trends Analysis Report Contest, Yonsei University Library", date: "Aug 2026", url: "https://app.notion.com/p/Research-Trends-Analysis-Report-Contest-Summer-2026-Korean-3b303ee0f51680c2b3d9ea2f99762aa5" },
      { title: "XPS Analyses of Cathode Samples", type: "Presentation", venue: "Summer Intern 2nd Seminar, EESL", date: "Aug 2026", url: "https://app.notion.com/p/XPS-Analyses-of-Cathode-Samples-3c403ee0f51680799bc4ea63ec10e66e" },
      { title: "Making a Successful Movie with Film Database", type: "Presentation", venue: "MS0003, Nanyang Technological University", date: "Aug 2024", url: "https://app.notion.com/p/at-NTU-3b203ee0f516803f83c4d4224cbd9808" },
      { title: "Ideas to Improve Sodium Ion Batteries", type: "Presentation", venue: "MST3310, Yonsei University", date: "Jun 2024", url: "https://app.notion.com/p/Materials-Research-Spring-2024-3b303ee0f516801da2aed06e8057d52d" },
      { title: "Zinc-Air Batteries: Recent Trends and Advancements", type: "Poster", venue: "2024 ALLOY Materials Conference, ALLOY", date: "Jun 2024", url: "https://app.notion.com/p/2024-ALLOY-Materials-Conference-3b303ee0f51680cfa581ccc04ff16ec8" },
      { title: "Why Sodium Ion Batteries?", type: "Presentation", venue: "3-Minute Thesis Contest, King Abdullah University of Science and Technology (KAUST)", date: "May 2024", url: "https://app.notion.com/p/at-KAUST-3b203ee0f5168086b2fce1f4b5c07cc3" },
      { title: "Improved Performances of High-Entropy Electrolytes with Additives", type: "Presentation", venue: "MST3320, Yonsei University", date: "Dec 2023", url: "https://app.notion.com/p/Materials-Research-2-Capstone-Design-Fall-2023-3b303ee0f51680bea168d012bd9327b4" },
      { title: "Analysis of Battery Performance with Nickel Content in NCM Cathodes", type: "Poster (Korean)", venue: "2023 ALLOY Team Poster Presentation, ALLOY", date: "Dec 2023", url: "https://app.notion.com/p/2023-ALLOY-Team-Poster-Presentation-Korean-3b303ee0f516809a8b99e8a5cdf40fa1" },
      ]
  },
  // [대외활동 Activities] 항목 필드: role, organization, institution, location, dates, bullets[], logo(선택)
  // 로고 빼기: logo 줄을 지우거나 logo: "" 로 두면 됩니다.
  awards: {
    heading: "Honors & Awards",
    navLabel: "Awards",
    entries: [
      { role: "Responsibility Award (Colonel Award)", organization: "Quartermaster Training Group", institution: "ROK Army", location: "", dates: "Feb 2026"
        },
      { role: "Overseas Exchange Promotion Scholarship", organization: "Office of International Affairs", institution: "Yonsei University", location: "", dates: "Jun 2024"
        },
      { role: "Underwood Jilli Scholarship (Merit-based Scholarship)", organization: "Yonsei University", institution: "", location: "", dates: "Feb 2024"
        },
      { role: "Outstanding Study Group Award (Psychology of Abnormal Behavior)", organization: "Innovation Center for Teaching and Learning", institution: "Yonsei University", location: "", dates: "Jan 2023"
        },
      { role: "Outstanding Study Group Award (Physical Chemistry (1))", organization: "Innovation Center for Teaching and Learning", institution: "Yonsei University", location: "", dates: "Aug 2022"
        }
    ]
  },
  activities: {
    heading: "Extracurricular Activities",
    navLabel: "Activities",
    entries: [
      { role: "Tutor", organization: "Korean Tutoring", institution: "Yonsei University", location: "", dates: "Sep 2026 – Present"
        },
      { role: "Squad Leader, Culinary Specialist", organization: "5022 Air Defense Unit", institution: "Republic of Korea Army", location: "", dates: "Dec 2024 – Jun 2026"
        },
      { role: "Visiting Student", organization: "KAUST Education Passport: Exploring Scientific Research Communication Methods", institution: "King Abdullah University of Science and Technology", location: "Thuwal, Kingdom of Saudi Arabia", dates: "Apr 2024 – May 2024"
        , logo: "logos/kaust.png" },
      { role: "Member, Translation Team", organization: "Yours (the 57th Yonsei University General Student Council Campaign Team)", institution: "", location: "", dates: "Nov 2023 – Dec 2023"
        },
      { role: "Member", organization: "2023 UIC Global Career Tour Korea", institution: "Underwood International College, Yonsei University", location: "", dates: "Aug 2023"
        },
      { role: "Staff", organization: "2023 UIC Career Fair", institution: "Underwood International College, Yonsei University", location: "", dates: "Aug 2023"
        },
      { role: "Vice President", organization: "CoNSEnt (the 7th Yonsei University Nano Science and Engineering Major Student Council)", institution: "", location: "", dates: "Apr 2022 – Dec 2022"
        },
      { role: "Private Tutor", organization: "Seoltab", institution: "", location: "", dates: "Sep 2021 – Dec 2024"
        },
      { role: "Member", organization: "14.5th Class", institution: "Piano In Yonsei (Yonsei University General Student Club)", location: "", dates: "Sep 2021 – Dec 2021"
        }
    ]
  },
  // [바닥글 Footer]
  footer: {
    copyright: "© 2026 Jeonghyeon KIM",
    lastUpdated: "Last updated: November 2026"
  }
};
