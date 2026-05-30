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
  urgencyText: 'Currently accepting O Level Physics students for September 2026',
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
      q: "What if we're not satisfied with the tutor?",
      a: 'We replace the tutor. No questions, no delay.'
    },
    {
      q: 'Do sessions happen at our home?',
      a: 'Home visits are available in DHA and Clifton. Online sessions are available for students anywhere.'
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
      experience: '4 years CAIE. O Level Physics',
      subjects: ['O Level Physics']
    },
    {
      id: 'ahmad',
      name: 'Ahmad R.',      qualification: 'MSc Physics, LUMS',
      experience: '6 years CAIE. O and A Level',
      subjects: ['O Level Physics', 'A Level Physics']
    },
    {
      id: 'zainab',
      name: 'Zainab A.',      qualification: 'MSc Chemistry, KU',
      experience: '3 years CAIE. A Level Chemistry',
      subjects: ['A Level Chemistry']
    },
    {
      id: 'sara',
      name: 'Sara K.',      qualification: 'BSc Chemistry (Hons), KU',
      experience: '5 years CAIE. A Level expert',
      subjects: ['A Level Chemistry', 'O Level Chemistry']
    },
    {
      id: 'omar',
      name: 'Omar H.',      qualification: 'BSc Mathematics, IBA',
      experience: '7 years CAIE. Past paper focus',
      subjects: ['O Level Maths', 'A Level Maths']
    },
    {
      id: 'fatima',
      name: 'Fatima M.',      qualification: 'BSc Computer Science, FAST',
      experience: '4 years CAIE. CS and ICT',
      subjects: ['A Level Computer Science', 'O Level ICT']
    }
  ],

  homeTestimonials: [
    {
      name: 'Nadia',
      area: 'DHA Phase 6',
      subject: 'O/A Level Physics',
      quote:
        'Our son went from a D to a strong B in one term. The tutor knew the CAIE mark scheme inside out.'
    },
    {
      name: 'Kamran',
      area: 'Clifton',
      subject: 'O/A Level Chemistry',
      quote:
        'Finally someone who could explain organic mechanisms properly. Past-paper practice made the difference.'
    },
    {
      name: 'Ayesha',
      area: 'Clifton',
      subject: 'O/A Level Maths',
      quote:
        'Structured lessons at home, no wasted time. We saw improvement within the first month.'
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
        'Punctual, prepared, and honest about what needed work. The feedback after each session was useful.'
    }
  ],

  landingPages: {
    'physics': {
      kicker: 'Cambridge Curriculum · O/A Level',
      h1: 'Physics tutoring for Cambridge students.',
      subheading:
        'Clear explanations, paper technique, and familiarity with how Cambridge marks Physics. Tutors who have worked with CAIE students for years.',
      area: 'Karachi',
      subject: 'O/A Level Physics',
      level: 'O Level',
      cta: 'Talk to Tutoriks',
      formTitle: 'Match me with a Physics tutor',
      formCta: 'Match',
      bullets: ['Tutors familiar with CAIE Physics papers', 'Electricity, Mechanics, Waves, and all major topics', 'Parent update after every session'],
      matchTitle: 'A tutor recommended for fit, not availability.',
      matchCopy:
        'Before recommending a Physics tutor, we look at syllabus stage, weak topics, school pace, and exam session. The goal is support from someone who actually knows the paper.',
      signals: [
        'Topic-level assessment before the first lesson',
        'Mark-scheme wording built into explanations',
        'Past-paper questions once the concept is solid'
      ],
      methodTitle: 'From concept to paper.',
      methodIntro:
        'Physics improves when students understand the concept, handle the calculations, and know what the examiner expects.',
      method: [
        {
          title: 'Build the concept',
          copy: 'The tutor makes sure the student understands the idea first. Formulas with context, not memorised in isolation.'
        },
        {
          title: 'Link to the paper',
          copy: 'Each topic is tied to command words, expected diagrams, and what that specific paper requires.'
        },
        {
          title: 'Practice under exam conditions',
          copy: 'Timed past-paper questions show where marks are still lost. Lessons loop back to fix those gaps.'
        }
      ],
      footerTitle: 'Start with the right Physics tutor.',
      footerCopy:
        'Tell us the school, exam session, and weakest topics. We will recommend a suitable tutor.',
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
      h1: 'Chemistry tutoring for Cambridge students.',
      subheading:
        'Organic, physical, and inorganic Chemistry. Taught with attention to CAIE mark schemes and what examiners actually look for.',
      area: 'Karachi',
      subject: 'O/A Level Chemistry',
      level: 'A Level',
      cta: 'Talk to Tutoriks',
      formTitle: 'Match me with a Chemistry tutor',
      formCta: 'Match',
      bullets: ['Examiner-report insights used in lessons', 'Organic, Physical and Inorganic. Full syllabus coverage.', 'Parent update after every session'],
      matchTitle: 'A tutor recommended for fit, not availability.',
      matchCopy:
        'A Level Chemistry is precise. We check whether the problem is conceptual gaps, mechanism logic, calculation method, or paper timing before recommending anyone.',
      signals: [
        'Organic mechanisms practised to fluency',
        'Moles, equilibria, and kinetics practised with structure',
        'CAIE wording practised in definitions and explanations'
      ],
      methodTitle: 'Preparation, topic by topic.',
      methodIntro:
        'The best Chemistry students do not guess what the examiner wants. They have practised enough to recognise it.',
      method: [
        {
          title: 'Identify the weak papers',
          copy: 'We check performance across Paper 1, 2, 4, and practical-style questions to find where marks are being lost.'
        },
        {
          title: 'Build mechanism fluency',
          copy: 'Organic Chemistry is taught as a logical system. Not a list of reactions to memorise.'
        },
        {
          title: 'Mark against CAIE standard',
          copy: 'Answers are checked against official mark schemes so students learn exactly where marks are awarded and lost.'
        }
      ],
      footerTitle: 'Start with the right Chemistry tutor.',
      footerCopy:
        'Tell us the syllabus stage, latest grade, and weakest topics. We will recommend a suitable tutor.',
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
            'Past-paper marking was strict but fair. Exactly what CAIE examiners expect.'
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
      h1: 'Maths tutoring for Cambridge students.',
      subheading:
        'Clear methods, consistent practice, and paper technique. Tutors who understand how CAIE marks Maths.',
      area: 'Karachi',
      subject: 'O/A Level Maths',
      level: 'O Level',
      cta: 'Talk to Tutoriks',
      formTitle: 'Match me with a Maths tutor',
      formCta: 'Match',
      bullets: ['Pure, Applied and Statistics. All components.', 'Method marks given the same attention as final answers', 'Parent update after every session'],
      matchTitle: 'A tutor recommended for fit, not availability.',
      matchCopy:
        'Before recommending a Maths tutor, we check whether the issue is foundational gaps, question interpretation, working-out presentation, or exam-hall speed.',
      signals: [
        'Topic-by-topic weakness assessment',
        'Exam-style practice from the first session',
        'Focused homework rather than generic worksheets'
      ],
      methodTitle: 'Foundations, patterns, then speed.',
      methodIntro:
        'Maths improves when students have a method they can reproduce reliably under exam conditions.',
      method: [
        {
          title: 'Repair foundations',
          copy: 'We fix the algebra and number skills that quietly affect every later topic.'
        },
        {
          title: 'Teach the patterns',
          copy: 'Students learn how CAIE question types are built, so papers feel familiar.'
        },
        {
          title: 'Build exam speed',
          copy: 'Timed practice builds accuracy and pacing without overwhelming the student.'
        }
      ],
      footerTitle: 'Start with the right Maths tutor.',
      footerCopy:
        'Tell us the current grade and most difficult topics. We will recommend a suitable tutor.',
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
      h1: 'Computer Science tutoring for Cambridge students.',
      subheading:
        'Theory, algorithms, and programming. Prepared to the standard CAIE examiners expect.',
      area: 'Karachi',
      subject: 'O/A Level Computer Science',
      level: 'A Level',
      cta: 'Talk to Tutoriks',
      formTitle: 'Match me with a CS tutor',
      formCta: 'Match',
      bullets: ['9618 and 2210 syllabus coverage', 'Theory and coding technique combined', 'Parent update after every session'],
      matchTitle: 'A tutor recommended for fit, not availability.',
      matchCopy:
        'Computer Science needs both teaching ability and technical judgement. We recommend tutors who understand the syllabus and can spot weak reasoning in theory answers and code.',
      signals: [
        'Theory answers built for mark schemes',
        'Pseudocode patterns practised to fluency',
        'Programming tasks matched to Paper 3 expectations'
      ],
      methodTitle: 'Theory, algorithms, then applied code.',
      methodIntro:
        'Computer Science becomes manageable when theory, pseudocode, and programming reinforce each other.',
      method: [
        {
          title: 'Structure the theory',
          copy: 'Students learn concise, mark-ready explanations. Not unfocused notes.'
        },
        {
          title: 'Trace algorithms',
          copy: 'Dry runs, pseudocode patterns, and data structures are practised until they feel routine.'
        },
        {
          title: 'Code with purpose',
          copy: 'Programming sessions focus on readable logic, debugging, and exam-style tasks.'
        }
      ],
      footerTitle: 'Start with the right CS tutor.',
      footerCopy:
        'Tell us the paper, programming language, and weak topics. We will recommend a suitable tutor.',
      tutorIds: ['fatima'],
      waPrefill:
        "Hi, I'm looking for an O/A Level Computer Science tutor in DHA or Clifton for my child.",
      testimonials: [
        {
          name: 'Bilal',
          area: 'DHA Phase 5',
          subject: 'O/A Level CS',
          quote:
            'Paper 3 programming preparation was thorough. Pseudocode and Python both covered properly.'
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
