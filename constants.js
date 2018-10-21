module.exports ={
  langs: ['PT-BR','EN'],
  output: 'cv/curriculum.pdf',
  skillcount: 8,
  document: {
    size: 'A4',
    layout: 'portrait',
    margin: 20
  },
  fonts: {
    FA_REGULAR: 'fonts/fa-regular-400.ttf',
    FA_SOLID: 'fonts/fa-solid-900.ttf',
    FA_BRAND: 'fonts/fa-brands-400.ttf',
    ROBOTO: 'fonts/Roboto-Regular.ttf',
    ROBOTO_BOLD: 'fonts/Roboto-Bold.ttf'
  },
  align: {
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
    JUSTIFY: 'justify',
  },
  icons: {
    FAS_PHONE: '',
    FAS_MAP : '',
    FAS_CALENDAR: '',
    FAS_ENVELOPE: '',
    FAS_PLUS: '',
    FAS_GRADUATION: '',
    FAS_PROJECT: '',
    FAS_CODE: '',
    FAS_CIRCLE: '',
    FAS_DOT_CIRCLE: '',
    FAS_TRUCK: '',
    FAB_GITHUB: '',
    FAB_LINKEDIN: '',
  },
  cv_data: {
    INFO: './cv_data/info.js',
    EDUCATION:'./cv_data/education.js',
    PROJECTS:'./cv_data/projects.js',
    SKILLS:'./cv_data/skills.js',
    TRANSLATION: './cv_data/translation.js'
  },
  filterLang: (path,lang) => require(path).filter((elem,i,arr) => elem.lang === lang)[0]
}
