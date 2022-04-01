//creating an array and passing the number, questions, options and answers
let questions = [
  {
    numb: 1,
    question: "A 72-year-old woman has been on hydrochlorothiazide 12.5 mg for many years to control her Stage II hypertension. Her blood pressure (BP) at this visit is 168/96. She is currently complaining of pain on her right hip and on both knees. She has increased her dose of ibuprofen (Motrin) from 400 mg 3 times day (TID) to 800 mg TID. She is still in pain and would like something stronger. Which of the following statements is the best explanation of the effects of ibuprofen (Motrin) on her disease?",
    answer: "It inhibits the effect of renal prostaglandins and blunts the effectiveness of the diuretic",
    options: [             
            "It increases the chances of adverse effects to her health",
            "It inhibits the effect of renal prostaglandins and blunts the effectiveness of the diuretic",
            "It prolongs the therapeutic effects of hydrochlorothiazide and other diuretics",
            "None of the statements are true",
    ]
  },
  {
    numb: 2,
    question: "All of the following are infections that affect mostly the labia and vagina except:", 
    answer: "Chlamydia Trachomatis", 
    options: [ "Bacterial vaginosis",
               "Candidiasis",
               "Trichomoniasis",
               "Chlamydia Trachomatis"]
  },
  {
    
    numb: 3,
    question: "The nurse practitioner would test the obturator and iliopsoas muscle to evaluate for:", 
    answer: "Acute appendicitis", 
    options: [ "Cholecystitis",
               "Acute appendicitis",
               "Inguinal hernia",
               "Gastric ulcer"]
  },
  {
    
    numb: 4,
    question: "Treatment for mild preeclampsia includes all of the following except:", 
    answer: "A prescription of methyldopa (Aldomet) to control blood pressure", 
    options: [ "Bed rest except for bathroom privileges",
               "Close monitoring of weight and blood pressure",
               "Close follow-up of urinary protein, serum creatinine, and platelet count",
               "A prescription of methyldopa (Aldomet) to control blood pressure"]
  },
  {
    
    numb: 5,
    question: "All of the following services are covered under Medicare Part A except:", 
    answer: "Nursing home care", 
    options: ["Inpatient hospitalizations",
              "Medicines administered to a patient while hospitalized",
              "Nursing home care",
              "Surgeons"]
  },
  {
    
    numb: 6,
    question: "A 28-year-old student is seen in the school health clinic with complaints of a hacking cough that is productive of small amounts of sputum and a runny nose. He does not take any medications, denies any allergies, and has no significant medical history. Physical examination reveals a low-grade temperature of 99.9 degrees Fahrenheit, respirations of 16/min, a pulse of 90 beats per minute, and diffuse fine crackles in the base of the lungs. A chest radiograph (x-ray) shows diffuse infiltrates on the lower lobe of the right lung. The total white blood cell count is 10,500/uL. What is the most likely diagnosis?", 
    answer: "Mycoplasma pneumonia", 
    options: ["Streptococcal pneumonia",
              "Mycoplasma pneumonia",
              "Acute bronchitis",
              "Legionnaires disease"]
  },
  {
    
    numb: 7,
    question: "A 39-year-old migrant worker presents to the clinic 2.5 days after a purified protein derivative (PPD) test. What minimum size of induration would be considered positive for this patient?", 
    answer: "10 mm", 
    options: ["3 mm",
              "5 mm",
              "10 mm",
              "15 mm"]
  },
  {
    numb: 8,
    question: "All of the following are correct statements regarding the role of the person named in a durable power of attorney except:", 
    answer: "The patient’s spouse has a right to override the agent's decisions", 
    options: ["The agent's decisions are legally binding",
              "The agent can make decisions in other areas of the patient’s life such as financial issues",
              "The agent can decide for the patient who is on life support when that life support can be terminated",
              "The patient’s spouse has a right to override the agent's decisions"]
  },
  {
    
    numb: 9,
    question: "All of the following are true statements regarding Munchausen syndrome except:", 
    answer: "The patient has a medical illness that causes an anxiety reaction and denial", 
    options: ["It is considered a mental illness",
              "The patient has a medical illness that causes an anxiety reaction and denial",
              "The patient fakes an illness in order to gain attention from health care providers",
              "The patient has an inconsistent medical history along with a past history of"]
  },
  {
    
    numb: 10,
    question: "Which of the following antihypertensive medications should the nurse practitioner avoid when treating patients with emphysema?", 
    answer: "Beta-blockers", 
    options: ["Calcium channel blockers",
              "Angiotensin-converting enzyme (ACE) inhibitors",
              "Beta-blockers",
              "Diuretics"]
  },
  {
    
    numb: 11,
    question: "A 30-year-old chef complains of pruritic hives over her chest and arms but denies difficulty swallowing or breathing. She reports a family history of allergic rhinitis and asthma. Which of the following interventions is most appropriate?", 
    answer: "Perform a complete and thorough history", 
    options: ["Perform a complete and thorough history",
              "Prescribe an oral antihistamine such as diphenhydramine 25 mg PO QID",
              "Give an injection of epinephrine 1:1000 intramuscularly stat",
              "Call 911"]
  },
  {
    
    numb: 12,
    question: "Which of the following findings is most likely in young primigravidas with pregnancy induced hypertension?", 
    answer: "Edema of the face and the upper extremities", 
    options: ["Abdominal cramping and constipation",
              "Edema of the face and the upper extremities",
              "Shortness of breath",
              "Dysuria and frequency"]
  },
  {
    
    numb: 13,
    question: "Which of the following symptoms is associated with B12 deficiency anemia?", 
    answer: "Tingling and numbness of both feet", 
    options: ["Spoon-shaped nails and pica",
              "An abnormal neurological exam",
              "A vegan diet",
              "Tingling and numbness of both feet"]
  },
  {
    
    numb: 14,
    question: "A second triple screen on a 35-year-old primigravida reveals abnormally low levels of the alpha fetoprotein and estriol and high levels of human chorionic gonadotropin. Which of the following interventions is the best choice for this patient?", 
    answer: "Order an ultrasound", 
    options: ["Order an ultrasound",
              "Order a computed tomography (CT) scan of the abdomen",
              "Order a 24-hour urine for protein clearance",
              "Assess for a history of illicit drug or alcohol use"]
  },
  {
    
    numb: 15,
    question: "All of the following are true statements about diverticula except:", 
    answer: "Most diverticula in the colon are infected with gram-negative bacteria", 
    options: ["Diverticula are located in the colon",
              "A low-fiber diet is associated with the condition",
              "Most diverticula in the colon are infected with gram-negative bacteria",
              "Supplementing with fiber such as psyllium (Metamucil) is recommended"]
  },
  {
    
    numb: 16,
    question: "Patients who are diagnosed with gonorrhea should also be treated for which of the following infections?", 
    answer: "Chlamydia trachomatis", 
    options: ["Chancroid",
              "Chlamydia trachomatis",
              "Herpes genitals",
              "PID (pelvic inflammatory disease)"]
  },
];