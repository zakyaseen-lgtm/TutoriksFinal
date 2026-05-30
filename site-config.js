window.TUTORIKS = {
  name: 'Tutoriks',
  whatsapp: '923322201628',
  phone: '+923322201628',
  phoneDisplay: '+92 332 2201628',
  address: 'Office 12, 2nd Floor, Plot 44-C, Khayaban-e-Shamsheer, Phase 5, DHA, Karachi',
  gmbUrl: 'https://g.page/r/tutoriks-placeholder',
  siteUrl: 'https://tutoriks.pk',
  trialSessionPkr: 2500,
  trialIsFree: false,
  showUrgency: false,
  urgencyText: 'Limited Cambridge tutoring availability for the coming term',
  waHome:
    "Hi, I'm interested in O/A Level tutoring for my child. Home in DHA or Clifton, or online.",

  faq: [
    {
      q: 'Do you teach matric or FSc students?',
      a: 'No. We work exclusively with IGCSE, GCSE, and CAIE O/A Level students.'
    },
    {
      q: 'Can we try before committing to a month?',
      a: null // filled by getFaqAnswer in main.js
    },
    {
      q: "What if the tutor is not the right fit?",
      a: 'We review the concern and arrange a more suitable tutor where needed.'
    },
    {
      q: 'Do sessions happen at our home?',
      a: 'Home sessions are available in DHA and Clifton. Online sessions are available for students anywhere.'
    },
    {
      q: 'What if my child misses a session?',
      a: "Sessions can be rescheduled with 24 hours' notice."
    }
  ],

  tutors: [
    {
      id: 'hassan',
      name: 'Hassan T.',      qualification: 'BSc Physics, NUST',
      experience: '4 years CAIE — O Level Physics',
      subjects: ['O Level Physics']
    },
    {
      id: 'ahmad',
      name: 'Ahmad R.',      qualification: 'MSc Physics, LUMS',
      experience: '6 years CAIE — O & A Level',
      subjects: ['O Level Physics', 'A Level Physics']
    },
    {
      id: 'zainab',
      name: 'Zainab A.',      qualification: 'MSc Chemistry, KU',
      experience: '3 years CAIE — A Level Chemistry',
      subjects: ['A Level Chemistry']
    },
    {
      id: 'sara',
      name: 'Sara K.',      qualification: 'BSc Chemistry (Hons), KU',
      experience: '5 years CAIE — A Level expert',
      subjects: ['A Level Chemistry', 'O Level Chemistry']
    },
    {
      id: 'omar',
      name: 'Omar H.',      qualification: 'BSc Mathematics, IBA',
      experience: '7 years CAIE — past paper focus',
      subjects: ['O Level Maths', 'A Level Maths']
    },
    {
      id: 'fatima',
      name: 'Fatima M.',      qualification: 'BSc Computer Science, FAST',
      experience: '4 years CAIE — CS & ICT',
      subjects: ['A Level Computer Science', 'O Level ICT']
    }
  ],

  homeTestimonials: [
    {
      name: 'Nadia',
      area: 'DHA Phase 6',
      subject: 'O/A Level Physics',
      quote:
        'The tutor understood the CAIE mark scheme and helped our son move from a D to a strong B in one term.'
    },
    {
      name: 'Kamran',
      area: 'Clifton',
      subject: 'O/A Level Chemistry',
      quote:
        'Organic mechanisms were finally explained as a system. The past-paper practice was focused and consistent.'
    },
    {
      name: 'Ayesha',
      area: 'Clifton',
      subject: 'O/A Level Maths',
      quote:
        'Structured home lessons, clear homework, and no wasted time. We saw improvement within the first month.'
    },
    {
      name: 'Bilal',
      area: 'DHA Phase 5',
      subject: 'O/A Level CS',
      quote:
        'The tutor aligned with the school scheme of work. Paper 3 programming preparation was thorough.'
    },
    {
      name: 'Hina',
      area: 'DHA Phase 8',
      subject: 'O/A Level Physics',
      quote:
        'Professional, punctual, and clear feedback after every session.'
    }
  ],

  landingPages: {
    'physics': {
      kicker: 'Cambridge Curriculum · O/A Level',
      h1: 'Cambridge __Physics__ tutoring with structure.',
      subheading:
        'Concept clarity, calculation method, and paper technique from tutors familiar with CAIE Physics expectations.',
      area: 'Karachi',
      subject: 'O/A Level Physics',
      level: 'O Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Request a Physics tutor',
      formCta: 'Request match',
      bullets: ['Cambridge mark-scheme familiarity', 'Mechanics, electricity, waves, and practical skills', 'Parent update after every session'],
      matchTitle: 'Matched for syllabus fit.',
      matchCopy:
        'We assess syllabus stage, weak topics, school pace, and exam timeline before recommending a Physics tutor. The aim is calm, structured support from someone who knows the paper.',
      signals: [
        'Topic-level assessment before the first lesson',
        'Mark-scheme phrasing built into explanations',
        'Past-paper practice once concepts are secure'
      ],
      methodTitle: 'From concept to paper.',
      methodIntro:
        'Physics improves when understanding, calculation, and exam technique are trained together.',
      method: [
        {
          title: 'Build the concept',
          copy: 'The tutor develops genuine understanding first, so formulas have context rather than being memorised in isolation.'
        },
        {
          title: 'Connect to Cambridge',
          copy: 'Every topic is tied to command words, expected diagrams, and examiner expectations for that paper.'
        },
        {
          title: 'Test under conditions',
          copy: 'Timed past-paper questions identify remaining weaknesses, and lessons loop back with focused repair.'
        }
      ],
      footerTitle: 'Request a suitable Physics tutor.',
      footerCopy:
        'Share the school, exam session, and weakest topics. We will recommend a suitable tutor.',
      tutorIds: ['ahmad', 'hassan'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Physics tutor in DHA for my child.",
      testimonials: [
        {
          name: 'Nadia',
          area: 'DHA Phase 6',
          subject: 'O/A Level Physics',
          quote:
            'Electricity and waves were the weak areas. Six weeks of focused past-paper practice and he achieved a B.'
        },
        {
          name: 'Hassan',
          area: 'DHA Phase 5',
          subject: 'O/A Level Physics',
          quote:
            'The tutor came to our home twice a week. Clear explanations and genuine CAIE question practice.'
        },
        {
          name: 'Sana',
          area: 'DHA Phase 8',
          subject: 'O/A Level Physics',
          quote:
            'We had tried two other services before Tutoriks. This was the first tutor who genuinely knew the syllabus.'
        }
      ]
    },
    'chemistry': {
      kicker: 'Cambridge Curriculum · O/A Level',
      h1: 'Cambridge __Chemistry__ tutoring with precision.',
      subheading:
        'Organic, physical, and inorganic Chemistry taught with attention to CAIE wording, calculation method, and paper expectations.',
      area: 'Karachi',
      subject: 'O/A Level Chemistry',
      level: 'A Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Request a Chemistry tutor',
      formCta: 'Request match',
      bullets: ['Examiner-report insights applied carefully', 'Organic, physical, and inorganic syllabus coverage', 'Parent update after every session'],
      matchTitle: 'Matched for syllabus fit.',
      matchCopy:
        'Chemistry requires precision. We assess whether the issue is conceptual gaps, mechanism logic, calculation method, or paper timing before recommending a tutor.',
      signals: [
        'Organic mechanisms practised to fluency',
        'Moles, equilibria, and kinetics practised with structure',
        'CAIE wording practised in definitions and explanations'
      ],
      methodTitle: 'Structured preparation, topic by topic.',
      methodIntro:
        'Strong students learn how Chemistry marks are awarded, not only how topics are explained.',
      method: [
        {
          title: 'Identify the weak papers',
          copy: 'We map performance across Paper 1, 2, 4, and practical-style questions to find where marks are lost.'
        },
        {
          title: 'Build mechanism fluency',
          copy: 'Organic Chemistry is taught as a logical system, not a set of disconnected reactions.'
        },
        {
          title: 'Mark to CAIE standard',
          copy: 'Answers are checked against official wording so students learn exactly where marks are awarded and lost.'
        }
      ],
      footerTitle: 'Request a suitable Chemistry tutor.',
      footerCopy:
        'Share the syllabus stage, latest grade, and weakest topics. We will recommend a suitable tutor.',
      tutorIds: ['sara', 'zainab'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Chemistry tutor in DHA for my child.",
      testimonials: [
        {
          name: 'Kamran',
          area: 'DHA Phase 6',
          subject: 'O/A Level Chemistry',
          quote:
            'Organic chemistry went from her weakest paper to her strongest in one term.'
        },
        {
          name: 'Mehwish',
          area: 'DHA Phase 4',
          subject: 'O/A Level Chemistry',
          quote:
            'Past-paper marking was strict but fair, exactly what CAIE examiners expect.'
        },
        {
          name: 'Adil',
          area: 'DHA Phase 7',
          subject: 'O/A Level Chemistry',
          quote:
            'Home tutoring saved us hours of travel. The tutor was always on time.'
        }
      ]
    },
    'mathematics': {
      kicker: 'Cambridge Curriculum · O/A Level',
      h1: 'Cambridge __Maths__ tutoring with clear method.',
      subheading:
        'Clear methods, consistent practice, and exam technique from tutors who understand how CAIE Maths papers are marked.',
      area: 'Karachi',
      subject: 'O/A Level Maths',
      level: 'O Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Request a Maths tutor',
      formCta: 'Request match',
      bullets: ['Pure, applied, and statistics components', 'Method marks treated as seriously as accuracy', 'Parent update after every session'],
      matchTitle: 'Matched for syllabus fit.',
      matchCopy:
        'We assess whether the issue is foundational gaps, question interpretation, working-out presentation, or exam-hall speed before recommending a Maths tutor.',
      signals: [
        'Topic-by-topic weakness assessment',
        'Exam-style practice from the first session',
        'Focused homework rather than generic worksheets'
      ],
      methodTitle: 'Foundations, patterns, then speed.',
      methodIntro:
        'Maths improves when students have a reliable method they can reproduce under timed conditions.',
      method: [
        {
          title: 'Repair foundations',
          copy: 'We address the algebra and number skills that quietly affect every later topic.'
        },
        {
          title: 'Teach the patterns',
          copy: 'Students learn how CAIE question types are constructed, so papers become familiar.'
        },
        {
          title: 'Build exam speed',
          copy: 'Timed practice gradually improves accuracy and pacing without overwhelming the student.'
        }
      ],
      footerTitle: 'Request a suitable Maths tutor.',
      footerCopy:
        'Share the current grade and most difficult topics. We will recommend a suitable tutor.',
      tutorIds: ['omar', 'ahmad'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Maths tutor in DHA or Clifton for my child.",
      testimonials: [
        {
          name: 'Ayesha',
          area: 'Clifton',
          subject: 'O/A Level Maths',
          quote:
            'Algebra and graphs were a struggle. Structured weekly practice resolved it.'
        },
        {
          name: 'Danish',
          area: 'DHA',
          subject: 'O/A Level Maths',
          quote:
            'Past-paper method from the first week. Achieved an A in the May/June series.'
        },
        {
          name: 'Maryam',
          area: 'Clifton',
          subject: 'O/A Level Maths',
          quote:
            'Patient tutor, clear homework, and exam-style questions every session.'
        }
      ]
    },
    'cs': {
      kicker: 'Cambridge Curriculum · O/A Level',
      h1: 'Cambridge __Computer Science__ tutoring.',
      subheading:
        'Theory, algorithms, pseudocode, and programming prepared to the standard CAIE examiners expect.',
      area: 'Karachi',
      subject: 'O/A Level Computer Science',
      level: 'A Level',
      cta: 'Talk to a Tutor',
      formTitle: 'Request a CS tutor',
      formCta: 'Request match',
      bullets: ['9618 and 2210 syllabus coverage', 'Theory and coding technique combined', 'Parent update after every session'],
      matchTitle: 'Matched for syllabus fit.',
      matchCopy:
        'Computer Science requires both teaching ability and technical judgement. We recommend tutors who understand the syllabus and can diagnose weak reasoning in both theory answers and code.',
      signals: [
        'Theory answers structured for mark schemes',
        'Pseudocode patterns practised to fluency',
        'Programming tasks aligned with Paper 3 expectations'
      ],
      methodTitle: 'Theory, algorithms, then applied code.',
      methodIntro:
        'Computer Science improves when theory, pseudocode, and programming practice reinforce each other.',
      method: [
        {
          title: 'Structure the theory',
          copy: 'Students learn concise, mark-ready explanations instead of unfocused notes.'
        },
        {
          title: 'Trace algorithms',
          copy: 'Dry runs, pseudocode patterns, and data structures are practised until they feel predictable.'
        },
        {
          title: 'Code with purpose',
          copy: 'Programming sessions focus on readable logic, debugging habits, and exam-style tasks.'
        }
      ],
      footerTitle: 'Request a suitable CS tutor.',
      footerCopy:
        'Share the paper, programming language, and weak topics. We will recommend a suitable tutor.',
      tutorIds: ['fatima'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Computer Science tutor in DHA or Clifton for my child.",
      testimonials: [
        {
          name: 'Bilal',
          area: 'DHA Phase 5',
          subject: 'O/A Level CS',
          quote:
            'Paper 3 programming preparation was thorough. Pseudocode and Python were both covered properly.'
        },
        {
          name: 'Saima',
          area: 'Clifton',
          subject: 'O/A Level CS',
          quote:
            'Theory topics were broken down clearly. Mock grades went from C to A.'
        },
        {
          name: 'Usman',
          area: 'Clifton',
          subject: 'O/A Level CS',
          quote:
            'The tutor understood the 9618 syllabus updates. Recommended for CAIE Computer Science.'
        }
      ]
    }
  }
};
