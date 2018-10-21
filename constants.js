module.exports ={
  langs: ['PT-BR','EN'], //Essas serão as linguas a serem procuradas lá no ./cv_data
  output: 'cv/curriculum.pdf', //nome do arquivo de saida (antes do .pdf vai a lingua de forma automática)
  skillcount: 8, //nas habilidades, essa será a quantidade máxima das 'bolinhas' dos skills
  document: { //configurações do documento do PDFKit
    size: 'A4',
    layout: 'portrait',
    margin: 20
  },
  fonts: { //essas sãoas fontes para os icones e para os textos também, todas elas jáestão na pasta
    FA_REGULAR: 'fonts/fa-regular-400.ttf',
    FA_SOLID: 'fonts/fa-solid-900.ttf',
    FA_BRAND: 'fonts/fa-brands-400.ttf',
    ROBOTO: 'fonts/Roboto-Regular.ttf',
    ROBOTO_BOLD: 'fonts/Roboto-Bold.ttf'
  },
  align: { //para ajudar no alinhamento dos textos do PDFKit
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
    JUSTIFY: 'justify',
  },
  icons: { //para pegar outros icones é só ir na busca dos ícones do FontAwesome, ir na página do icone e ao invés de copiar a classe do ícone, é so clicar em copy glyph
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
  cv_data: { //essas são os arquivos dos dados do curriculo
    INFO: './cv_data/info.js',
    EDUCATION:'./cv_data/education.js',
    PROJECTS:'./cv_data/projects.js',
    SKILLS:'./cv_data/skills.js',
    TRANSLATION: './cv_data/translation.js'
  },
  //função para obter os dados de acordo com a lingua selecionada
  filterLang: (path,lang) => require(path).filter((elem,i,arr) => elem.lang === lang)[0]
}
