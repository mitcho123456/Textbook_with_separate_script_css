/**
 * Full Blood Count (FBC) Chapter Content
 * Extracted from complete medical textbook HTML
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

export const fbcChapterContent = {
  id: 1,
  title: 'Reading the Full Blood Count',
  subtitle: 'Mastering FBC Interpretation Skills in Primary Care',
  icon: 'bloodtype',
  color: '#e74c3c',
  estimatedReadTime: '15 min',

  introduction: {
    title: 'Introduction: The Art of Reading Numbers',
    icon: '🔍',
    content: `Every FBC tells a story. The skill lies not in memorising normal ranges, but in recognising patterns, understanding relationships between parameters, and translating numerical data into clinical meaning. This chapter teaches you to read FBC results like a detective examining clues, where each parameter provides evidence about what's happening inside your patient's bone marrow and circulation.`
  },

  clinicalPearls: [
    {
      title: 'Never Read in Isolation',
      content: 'A single abnormal value means little - it\'s the pattern of abnormalities that reveals the diagnosis. Hb 95 g/L with MCV 65 fl tells a completely different story than Hb 95 g/L with MCV 110 fl, even though both represent anaemia.',
      category: 'interpretation'
    },
    {
      title: 'The MCV is Your Best Friend',
      content: 'In anaemia, MCV classification is 90% of your diagnosis. Microcytic = iron deficiency until proven otherwise. Macrocytic = B12/folate deficiency until proven otherwise. This simple rule will guide you correctly in the vast majority of cases.',
      category: 'diagnostic'
    },
    {
      title: 'The RDW Reveals Mixed Stories',
      content: 'Normal MCV with raised RDW (>15%) suggests mixed deficiency - some cells are small (iron deficient) and some large (B12/folate deficient), averaging out to normal. Always check all haematinics when RDW is elevated.',
      category: 'interpretation'
    },
    {
      title: 'Age Changes Everything with Lymphocytosis',
      content: 'Lymphocytosis >5.0 in a patient over 60 is chronic lymphocytic leukaemia until proven otherwise. In younger patients, think viral infection. Same number, completely different meaning based on age.',
      category: 'differential'
    },
    {
      title: 'Thrombocytosis as a Cancer Clue',
      content: 'Platelets >600 in patients over 60 can be the first sign of underlying malignancy, particularly colorectal or lung cancer. Don\'t dismiss high platelets as "reactive" - investigate for occult malignancy, especially if persistent.',
      category: 'oncology'
    },
    {
      title: 'The Three Cell Line Rule',
      content: 'If all three cell lines (red cells, white cells, platelets) are abnormal, think bone marrow pathology. This is never a coincidence and always requires urgent investigation. Single cell line problems are usually nutritional or reactive.',
      category: 'hematology'
    },
    {
      title: 'Trust Your Clinical Instinct',
      content: 'If the FBC result doesn\'t fit with your clinical assessment of the patient, always request a blood film and consider discussing with haematology. Laboratory errors are rare, but atypical presentations of serious conditions are not.',
      category: 'clinical'
    }
  ],

  referenceRanges: {
    title: 'Essential FBC Normal Ranges (Adults)',
    data: [
      {
        parameter: 'Haemoglobin (Hb)',
        maleRange: '130-175',
        femaleRange: '120-155',
        units: 'g/L'
      },
      {
        parameter: 'Mean Cell Volume (MCV)',
        maleRange: '82-100',
        femaleRange: '82-100',
        units: 'fl'
      },
      {
        parameter: 'White Cell Count (WCC)',
        maleRange: '4.0-11.0',
        femaleRange: '4.0-11.0',
        units: '×10⁹/L'
      },
      {
        parameter: 'Platelets',
        maleRange: '150-450',
        femaleRange: '150-450',
        units: '×10⁹/L'
      },
      {
        parameter: 'Red Cell Distribution Width (RDW)',
        maleRange: '11.5-15.0',
        femaleRange: '11.5-15.0',
        units: '%'
      }
    ]
  },

  systematicApproach: {
    title: 'Step 1: The Systematic Approach to Reading FBC',
    icon: '🎯',
    steps: [
      {
        title: 'First Glance: The Overview',
        content: 'Scan quickly - are all three cell lines (red, white, platelets) normal, or are one, two, or all three abnormal? This immediate pattern recognition guides your entire approach.'
      },
      {
        title: 'Red Cell Analysis: Size Matters',
        content: 'If Hb is low, immediately look at MCV. <80 fl = microcytic (think iron deficiency), >100 fl = macrocytic (think B12/folate), 80-100 fl = normocytic (think chronic disease or bleeding).'
      },
      {
        title: 'White Cell Differential: The Detail Story',
        content: 'Don\'t just look at total WCC - examine the differential. High neutrophils suggest infection, high lymphocytes may indicate viral infection or lymphoproliferative disorder.'
      },
      {
        title: 'Additional Clues: RDW and Blood Film',
        content: 'High RDW indicates variation in cell sizes - valuable in mixed deficiencies. Always request blood film comments when results don\'t fit the clinical picture.'
      }
    ]
  },

  anaemiaPatterns: {
    title: 'Step 2: Decoding Anaemia Patterns',
    icon: '🧮',
    patterns: [
      {
        type: 'Microcytic Anaemia (MCV <80 fl)',
        pattern: 'Hb ↓, MCV ↓, RDW ↑',
        think: 'Iron deficiency (95% of cases)',
        nextSteps: 'Check ferritin, consider thalassaemia trait if ferritin normal',
        redFlag: 'In men >50 or post-menopausal women, always investigate source of blood loss',
        color: '#3498db'
      },
      {
        type: 'Macrocytic Anaemia (MCV >100 fl)',
        pattern: 'Hb ↓, MCV ↑, often with neutrophil hypersegmentation',
        think: 'B12 or folate deficiency',
        nextSteps: 'Check B12 and folate levels',
        redFlag: 'Neurological symptoms suggest B12 deficiency requiring urgent treatment',
        color: '#e74c3c'
      },
      {
        type: 'Normocytic Anaemia (MCV 80-100 fl)',
        pattern: 'Hb ↓, MCV normal, variable RDW',
        think: 'Chronic disease, acute blood loss, or mixed deficiency',
        nextSteps: 'Check inflammatory markers, haematinics',
        redFlag: 'Sudden onset suggests acute bleeding',
        color: '#f39c12'
      }
    ],
    examples: [
      {
        title: 'Example 1: Classic Iron Deficiency',
        values: 'Hb 85 g/L, MCV 68 fl, RDW 18%',
        interpretation: 'Severe microcytic anaemia with high variation - classic iron deficiency pattern',
        type: 'abnormal-low'
      },
      {
        title: 'Example 2: B12 Deficiency',
        values: 'Hb 95 g/L, MCV 115 fl, RDW 16%',
        interpretation: 'Macrocytic anaemia - check B12/folate urgently, especially if neurological symptoms',
        type: 'abnormal-high'
      },
      {
        title: 'Example 3: Mixed Deficiency',
        values: 'Hb 90 g/L, MCV 88 fl, RDW 20%',
        interpretation: 'Normal MCV but very high RDW suggests both iron and B12/folate deficiency',
        type: 'critical'
      }
    ]
  },

  whiteCellInterpretation: {
    title: 'Step 3: White Cell Interpretation Skills',
    icon: '⚪',
    content: {
      overview: 'Total WCC alone tells you little - you must examine the differential count to understand what\'s happening:',
      differentials: [
        {
          type: 'Neutrophilia (>7.5)',
          causes: 'Bacterial infection, inflammation, stress response'
        },
        {
          type: 'Lymphocytosis (>4.0)',
          causes: 'Viral infection, or in elderly patients, consider CLL'
        },
        {
          type: 'Eosinophilia (>0.4)',
          causes: 'Allergy, parasites, drug reactions'
        },
        {
          type: 'Neutropenia (<2.0)',
          causes: 'Viral infections, drug-induced, or haematological disorders'
        }
      ],
      patterns: [
        {
          pattern: 'High WCC + High neutrophils',
          meaning: 'Bacterial infection'
        },
        {
          pattern: 'High WCC + High lymphocytes',
          meaning: 'Viral infection or CLL in elderly'
        },
        {
          pattern: 'Low WCC + Low neutrophils',
          meaning: 'Viral infection or drug effect'
        },
        {
          pattern: 'Very high WCC (>30)',
          meaning: 'Consider leukaemia, request urgent blood film'
        }
      ]
    }
  },

  plateletSignificance: {
    title: 'Step 4: Platelet Count Clinical Significance',
    icon: '🔴',
    categories: [
      {
        range: 'Normal Platelets (150-450)',
        significance: 'No bleeding risk, normal clotting function. Values at lower end of normal (150-200) still provide adequate haemostasis for most procedures.',
        type: 'normal'
      },
      {
        range: 'Mild Thrombocytopenia (100-150)',
        significance: 'Usually no clinical significance. May see prolonged bleeding after trauma or surgery. Most commonly due to viral infections or medications.',
        type: 'abnormal-low'
      },
      {
        range: 'Moderate Thrombocytopenia (50-100)',
        significance: 'Increased bleeding risk with surgery/procedures. Investigate underlying cause. May need platelet transfusion for major procedures.',
        type: 'abnormal-high'
      },
      {
        range: 'Severe Thrombocytopenia (<50)',
        significance: 'Spontaneous bleeding risk. Urgent haematology referral required. Patient needs immediate assessment and monitoring.',
        type: 'critical'
      }
    ],
    decisionPoints: [
      {
        threshold: '<50',
        action: 'Hold anticoagulants, urgent haematology referral'
      },
      {
        threshold: '50-100',
        action: 'Caution with procedures, investigate cause'
      },
      {
        threshold: '>600',
        action: 'Consider underlying malignancy in older patients'
      },
      {
        threshold: '>1000',
        action: 'Paradoxical bleeding risk due to platelet dysfunction'
      }
    ]
  },

  redFlags: [
    {
      title: 'WCC >50 × 10⁹/L',
      description: 'Possible leukaemia - urgent blood film and haematology referral',
      urgency: 'immediate'
    },
    {
      title: 'WCC <1.0 × 10⁹/L',
      description: 'Severe neutropenia - infection risk, urgent assessment needed',
      urgency: 'immediate'
    },
    {
      title: 'Blast Cells Reported',
      description: 'Any blast cells on film require immediate haematology discussion',
      urgency: 'immediate'
    },
    {
      title: 'Lymphocytosis + Anaemia + Thrombocytopenia',
      description: 'Pancytopenia pattern suggests haematological malignancy',
      urgency: 'same-day'
    },
    {
      title: 'Hb <70 g/L with symptoms',
      description: 'Consider immediate transfusion needs',
      urgency: 'same-day'
    },
    {
      title: 'Platelets <50',
      description: 'Bleeding precautions, urgent haematology referral',
      urgency: 'same-day'
    }
  ],

  classicPatterns: {
    title: 'Step 5: Putting It All Together - Pattern Recognition',
    icon: '🧩',
    patterns: [
      {
        name: 'Iron Deficiency Pattern',
        findings: {
          hb: 'Low',
          mcv: 'Low (<80)',
          rdw: 'High (>15%)',
          platelets: 'Often elevated'
        },
        nextStep: 'Check ferritin',
        color: '#3498db'
      },
      {
        name: 'B12/Folate Deficiency',
        findings: {
          hb: 'Low',
          mcv: 'High (>100)',
          rdw: 'High',
          wcc: 'May be low'
        },
        nextStep: 'Check B12 and folate',
        color: '#e74c3c'
      },
      {
        name: 'Chronic Disease Anaemia',
        findings: {
          hb: 'Mildly low',
          mcv: 'Normal or slightly low',
          rdw: 'Normal',
          pattern: 'Everything slightly off'
        },
        nextStep: 'Investigate underlying condition',
        color: '#f39c12'
      },
      {
        name: 'Haematological Malignancy',
        findings: {
          pattern: 'Multiple abnormalities',
          hb: 'Low',
          wcc: 'Very high or very low',
          platelets: 'Low'
        },
        nextStep: 'Urgent blood film and referral',
        color: '#8e44ad'
      }
    ]
  },

  criticalValues: {
    title: 'Step 6: Red Flags That Demand Immediate Action',
    icon: '⚠️',
    sameDayActions: [
      'Hb <70 g/L with symptoms: Consider immediate transfusion needs',
      'WCC >50 or <1.0: Phone result to patient immediately, urgent referral',
      'Platelets <50: Bleeding precautions, urgent haematology referral',
      'Blast cells on film: Same-day haematology discussion',
      'Pancytopenia: All three cell lines low - urgent bone marrow investigation needed',
      'Any combination of severe abnormalities: Never normal - always investigate urgently'
    ]
  },

  summary: {
    title: 'Summary: Mastering FBC Interpretation',
    icon: '📈',
    fiveStepMethod: [
      'Overview Scan: Normal, one abnormal, or multiple abnormalities?',
      'MCV Classification: If anaemic, let MCV guide your thinking',
      'Pattern Recognition: Look for classic combinations',
      'Clinical Correlation: Does the result fit the patient?',
      'Action Planning: Investigation, treatment, or referral needed?'
    ],
    masterPatterns: [
      'Iron deficiency: Low Hb + Low MCV + High RDW',
      'B12/Folate: Low Hb + High MCV + High RDW',
      'Chronic disease: Mild ↓ Hb + Normal MCV'
    ],
    keyRules: [
      'MCV is your best diagnostic friend',
      'RDW reveals mixed deficiencies',
      'Multiple abnormalities = bone marrow problem'
    ],
    neverMiss: [
      'Blast cells = urgent haematology',
      'Pancytopenia = bone marrow failure',
      'Extreme values = immediate action'
    ]
  },

  quickDecisionTree: {
    title: 'Quick Decision Tree for Anaemia',
    steps: [
      {
        decision: 'Patient has anaemia (Hb below normal)',
        type: 'decision'
      },
      {
        decision: 'Check MCV immediately - This determines 90% of your diagnostic approach',
        type: 'decision'
      },
      {
        action: 'MCV <80: Check ferritin → Treat iron deficiency → Investigate source if unexplained',
        type: 'action'
      },
      {
        action: 'MCV >100: Check B12/folate → Treat deficiency → Investigate malabsorption',
        type: 'action'
      },
      {
        action: 'MCV 80-100: Check RDW → If high, check all haematinics → If normal, investigate chronic disease',
        type: 'action'
      }
    ]
  }
};