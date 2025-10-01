/**
 * Chapters Data for Blood Test Interpretation App
 * Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP
 */

export const chaptersData = [
  {
    id: 1,
    title: 'Full Blood Count (FBC)',
    shortTitle: 'FBC',
    icon: 'bloodtype',
    description: 'Reading and interpreting FBC results with systematic approach',
    color: '#e74c3c',
    estimatedReadTime: '15 min',
    sections: [
      'Introduction: The Art of Reading Numbers',
      'Step 1: The Systematic Approach to Reading FBC',
      'Step 2: Decoding Anaemia Patterns',
      'Step 3: White Cell Interpretation Skills',
      'Step 4: Platelet Count Clinical Significance',
      'Step 5: Putting It All Together - Pattern Recognition',
      'Step 6: Red Flags That Demand Immediate Action',
      'Summary: Mastering FBC Interpretation'
    ],
    clinicalPearls: [
      {
        title: 'Never Read in Isolation',
        content: 'A single abnormal value means little - it\'s the pattern of abnormalities that reveals the diagnosis. Hb 95 g/L with MCV 65 fl tells a completely different story than Hb 95 g/L with MCV 110 fl.'
      },
      {
        title: 'The MCV is Your Best Friend',
        content: 'In anaemia, MCV classification is 90% of your diagnosis. Microcytic = iron deficiency until proven otherwise. Macrocytic = B12/folate deficiency until proven otherwise.'
      }
    ],
    redFlags: [
      'WCC >50 × 10⁹/L - Possible leukaemia',
      'WCC <1.0 × 10⁹/L - Severe neutropenia',
      'Blast Cells Reported - Immediate haematology discussion',
      'Pancytopenia pattern - Haematological malignancy'
    ]
  },
  {
    id: 2,
    title: 'Liver Function Tests',
    shortTitle: 'LFTs',
    icon: 'local-hospital',
    description: 'LFTs interpretation and clinical correlation',
    color: '#f39c12',
    estimatedReadTime: '12 min',
    sections: [
      'Understanding Liver Function Tests',
      'Hepatocellular vs Cholestatic Patterns',
      'Acute vs Chronic Liver Injury',
      'Drug-Induced Liver Injury',
      'Clinical Correlation and Next Steps'
    ]
  },
  {
    id: 3,
    title: 'Urea & Electrolytes',
    shortTitle: 'U&Es',
    icon: 'water-drop',
    description: 'Kidney function and electrolyte balance assessment',
    color: '#3498db',
    estimatedReadTime: '14 min',
    sections: [
      'Kidney Function Assessment',
      'Electrolyte Imbalances',
      'Acute vs Chronic Kidney Disease',
      'Fluid Balance Interpretation'
    ]
  },
  {
    id: 4,
    title: 'Thyroid Function Tests',
    shortTitle: 'TFTs',
    icon: 'psychology',
    description: 'TSH, T3, T4 interpretation and clinical patterns',
    color: '#9b59b6',
    estimatedReadTime: '10 min',
    sections: [
      'Understanding Thyroid Physiology',
      'Primary vs Secondary Thyroid Disease',
      'Subclinical Thyroid Disease',
      'Thyroid Function in Illness'
    ]
  },
  {
    id: 5,
    title: 'Iron, B12 & Folate',
    shortTitle: 'Haematinics',
    icon: 'medication',
    description: 'Haematinics and deficiency patterns',
    color: '#e67e22',
    estimatedReadTime: '13 min',
    sections: [
      'Iron Studies Interpretation',
      'B12 and Folate Assessment',
      'Combined Deficiencies',
      'Treatment Monitoring'
    ]
  },
  {
    id: 6,
    title: 'HbA1c & Diabetes',
    shortTitle: 'HbA1c',
    icon: 'monitor-heart',
    description: 'Diabetes monitoring and management',
    color: '#27ae60',
    estimatedReadTime: '11 min',
    sections: [
      'HbA1c Interpretation',
      'Diabetes Diagnosis',
      'Monitoring Glycemic Control',
      'Complications Screening'
    ]
  },
  {
    id: 7,
    title: 'Lipid Profile',
    shortTitle: 'Lipids',
    icon: 'favorite',
    description: 'Cardiovascular risk assessment',
    color: '#e74c3c',
    estimatedReadTime: '9 min',
    sections: [
      'Lipid Profile Components',
      'Cardiovascular Risk Calculation',
      'Treatment Targets',
      'Secondary Causes'
    ]
  },
  {
    id: 8,
    title: 'Inflammatory Markers',
    shortTitle: 'CRP/ESR',
    icon: 'local-fire-department',
    description: 'CRP, ESR, and acute phase proteins',
    color: '#ff6b6b',
    estimatedReadTime: '8 min',
    sections: [
      'CRP vs ESR',
      'Acute Phase Response',
      'Clinical Applications',
      'Monitoring Treatment'
    ]
  },
  {
    id: 9,
    title: 'Cardiac Markers',
    shortTitle: 'Troponin',
    icon: 'ecg',
    description: 'Troponin and heart attack diagnosis',
    color: '#ff4757',
    estimatedReadTime: '10 min',
    sections: [
      'Troponin Interpretation',
      'MI Diagnosis',
      'Non-MI Troponin Elevation',
      'Risk Stratification'
    ]
  },
  {
    id: 10,
    title: 'Bone Profile',
    shortTitle: 'Bone',
    icon: 'airline-seat-legroom-reduced',
    description: 'Calcium, phosphate, and bone health',
    color: '#2ecc71',
    estimatedReadTime: '12 min',
    sections: [
      'Calcium Metabolism',
      'Vitamin D Assessment',
      'Bone Disease Patterns',
      'PTH Interpretation'
    ]
  },
  {
    id: 11,
    title: 'Hormonal Profile',
    shortTitle: 'Hormones',
    icon: 'science',
    description: 'Reproductive and stress hormones',
    color: '#8e44ad',
    estimatedReadTime: '15 min',
    sections: [
      'Reproductive Hormones',
      'Adrenal Function',
      'Growth Hormone',
      'Hormone Interactions'
    ]
  },
  {
    id: 12,
    title: 'Specialized Tests',
    shortTitle: 'Specialized',
    icon: 'biotech',
    description: 'Advanced diagnostic markers',
    color: '#34495e',
    estimatedReadTime: '18 min',
    sections: [
      'Tumor Markers',
      'Autoimmune Markers',
      'Genetic Testing',
      'Emerging Biomarkers'
    ]
  },
  {
    id: 13,
    title: 'Case Studies',
    shortTitle: 'Cases',
    icon: 'quiz',
    description: 'Real clinical scenarios and interpretations',
    color: '#16a085',
    estimatedReadTime: '20 min',
    sections: [
      'Case 1: Complex Anaemia',
      'Case 2: Acute Illness',
      'Case 3: Chronic Disease',
      'Case 4: Emergency Presentation'
    ]
  }
];

// Quick reference data
export const normalRanges = {
  fbc: {
    'Haemoglobin (Male)': '130-175 g/L',
    'Haemoglobin (Female)': '120-155 g/L',
    'MCV': '82-100 fl',
    'WCC': '4.0-11.0 ×10⁹/L',
    'Platelets': '150-450 ×10⁹/L',
    'RDW': '11.5-15.0%'
  },
  biochemistry: {
    'Sodium': '135-145 mmol/L',
    'Potassium': '3.5-5.0 mmol/L',
    'Urea': '2.5-6.7 mmol/L',
    'Creatinine': '70-120 μmol/L',
    'eGFR': '>90 mL/min/1.73m²'
  }
};

// Search keywords for each chapter
export const searchKeywords = {
  1: ['fbc', 'full blood count', 'anaemia', 'haemoglobin', 'mcv', 'white cells', 'platelets', 'blood count'],
  2: ['liver', 'alt', 'ast', 'alp', 'bilirubin', 'albumin', 'hepatitis', 'jaundice'],
  3: ['kidney', 'urea', 'creatinine', 'egfr', 'sodium', 'potassium', 'electrolytes'],
  4: ['thyroid', 'tsh', 't3', 't4', 'hyperthyroid', 'hypothyroid', 'thyrotoxicosis'],
  5: ['iron', 'ferritin', 'b12', 'folate', 'vitamin', 'deficiency', 'haematinics'],
  6: ['diabetes', 'hba1c', 'glucose', 'diabetic', 'insulin', 'glycemic'],
  7: ['cholesterol', 'lipids', 'hdl', 'ldl', 'triglycerides', 'cardiovascular', 'heart'],
  8: ['crp', 'esr', 'inflammation', 'inflammatory', 'acute phase', 'infection'],
  9: ['troponin', 'cardiac', 'heart attack', 'mi', 'myocardial infarction', 'chest pain'],
  10: ['calcium', 'phosphate', 'bone', 'vitamin d', 'pth', 'osteoporosis'],
  11: ['hormones', 'testosterone', 'oestrogen', 'cortisol', 'reproductive', 'adrenal'],
  12: ['tumor markers', 'autoimmune', 'specialized', 'genetic', 'biomarkers'],
  13: ['cases', 'clinical', 'scenarios', 'examples', 'practice']
};