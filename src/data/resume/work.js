/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'ProgKids',
    position: 'Senior Data Analyst',
    url: 'https://www.progkids.com/',
    startDate: '2023-11-01',
    summary: 'Data collection, cleaning, and preparation, along with their analysis and exploration using statistical methods and machine learning algorithms. Model development and training. Continuous monitoring and optimization of models based on new data and feedback. Preparation of documentation and reports for management and stakeholders.',
    highlights: [
      'Built a data analytics system from scratch',
      'Developed a call monitoring system for sales managers using large language models',
      'Designed and implemented a comprehensive monitoring and alert system that reduced issue resolution time by 31% and minimized operational disruptions by 21%',
    ],
  },
  {
    name: 'LGR-GROUP',
    position: 'Data Scientist',
    url: 'https://lgr-group.ru/',
    startDate: '2020-05-01',
    endDate: '2023-11-01',
    summary: `Proven expertise in optimizing warehouse logistics 
              through innovative data-driven solutions and personnel management. S`,
    highlights: [
      'Implemented an automated system for tracking warehouse personnel performance, leading to a 12% increase in operational efficiency',
      'Optimized staff allocation and shift planning, reducing downtime by 17%',
      'Developed a real-time inventory management solution, minimizing order processing errors by 21%',
    ],
  },
  {
    name: 'World Telehealth Company LLC',
    position: 'CEO',
    url: '',
    startDate: '2018-08-01',
    endDate: '2020-07-01',
    summary: `WTC was my startup that provided telemedicine
              consultations primarily in Latin American countries.`,
    highlights: [
      'Founded and developed a telemedicine company from scratch',
      'Developed an ML model for detecting skin tumor diseases',
      'Increased the number of employees to 9',
      'Conducted over 300 telemedicine consultations for citizens of Chile and Mexico',
    ],
  },
  {
    name: 'Experience in the field of medicine',
    position: 'Medical Worker',
    url: '',
    startDate: '2011-06-01',
    endDate: '2019-11-01',
    summary: `Worked as a doctor, emergency medical technician (EMT), and nurse.
    Acquired extensive experience in the field of medicine:`,
    highlights: [
      '09/2018 – 11/2019: General Practitioner (Telemedicine). World Telehealth Company LLC, Hanover, Maryland, United States',
      '06/2013 – 08/2015: General Practitioner. City Medical and Social Center, St. Petersburg, Russia',
      '11/2010 – 03/2013: Nurse. Cardiovascular Surgery Department (10/2011 – 03/2013), Ophthalmology Department (11/2010 – 10/2011). St. Petersburg State Pavlov Medical University, St. Petersburg, Russia',
      '06/2011 – 08/2011: Paramedic. Ivanovo City Hospital, Ivanovo, Russia',
    ],
  },
  {
    name: 'Freelance',
    position: 'Scientific Writer',
    url: '',
    startDate: '2015-08-01',
    endDate: '2018-05-01',
    summary: `Writing academic and scientific papers 
              on freelance platforms.`,
    highlights: [
      'Authored 193 scientific articles in the fields of medicine, biology, and psychology.',
    ],
  },
];

export default work;
