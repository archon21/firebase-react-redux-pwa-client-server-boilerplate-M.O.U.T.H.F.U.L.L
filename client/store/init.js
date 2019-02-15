const defaultState = {
  phone: '860.646.0131',
  company: 'Hayes Developers',
  charities: [
    'Manchester Memorial Hospital',
    'Juvenile Diabetes Foundation',
    'Bolton Women’s Club',
    'American Cancer Society',
    'East Catholic High School',
    'The Salvation Army',
    'Saint James School',
    'Disabled American Veterans',
    'Manchester Police Explorers',
    'American Heart Association',
    'Berlin Football',
    'Hero’s Fund',
    'Rockville Elks Lodge',
    'Vietnam Memorial Fund',
    'Visiting Nurse & Health Services of CT',
    'United States Olympic Committee',
    'Child Advocacy Center of Connecticut',
    'Easter Seals',
    'Eastern Connecticut Health Network (ECHN)',
    'Leukemia & Lymphoma Society',
    '100 Club of Connecticut',
    'Bolton Land Trust',
    'Little Sisters of the Poor',
    'Bolton Community News',
    'U S O',
    'Vernon 4th of July Fireworks Fund',
    'The American Legion',
    'Manchester Eighth Utilities District',
    'VNA Hospice Programs',
    'Bolton Community Education Foundation',
    'Wounded Warrior Project',
    'Rockville Elks Lodge',
    'March of Dimes',
    'Rockville Downtown Association',
    'National Kidney Foundation',
    'Channel 3 Kids Camp',
    'American Brain Tumor Association',
    'Western Connecticut State University',
    'The Journey of Hope Campaign',
    'Hockanum Valley Community Council',
    'Home and Hospice Foundation',
    'NCTV, CPTV and WGBY',
    'CSAH – Easter Meals Project'
  ],
  sporting: [
    'Saint James School',
    'Golf Tournament Sponsorship',
    'Newington Parks and Recreation',
    'Advertising Sponsor',
    'Manchester Sports',
    'Advertising Sponsor',
    'Saint Paul School',
    'Golf Tournament Sponsorship',
    'New England Jr. Falcons',
    'Advertising Sponsor',
    '100 Club of Connecticut',
    'Golf Tournament Sponsorship'
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
