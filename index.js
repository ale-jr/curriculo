const PDFKit = require('pdfkit')
const fs = require('fs')



const style = require('./style.js')

//Definindo e filtrando dados por lingua
const LANG = "PT-BR"
const filterLang = (path,lang) => require(path).filter((elem,i,arr) => elem.lang === lang)[0]


const info = filterLang('./info.js',LANG)

//Cariação do dcumento
var doc = new PDFKit({
  size: 'A4',
  layout: 'portrait'
})


//Definições de tamanhos do documento
const width = doc.page.width
const height = doc.page.height
const sidebar_width = width * (style.sidebar.width / 100)

//Cria o stream
doc.pipe(fs.createWriteStream('curriculum.pdf'))

//Fontes usadas no PDF
doc.registerFont('FontAwesome-Regular','fonts/fa-regular-400.ttf')
doc.registerFont('FontAwesome-Solid','fonts/fa-solid-900.ttf')
doc.registerFont('Roboto','fonts/Roboto-Regular.ttf')
doc.registerFont('Roboto-Bold','fonts/Roboto-Bold.ttf')

//Cor de fundo e da lateral
doc.rect(0,0,width,height)
.fill(style.background)
.rect(0,0,sidebar_width,height)
.fill(style.accent)


//Definir tamanhos
const sizes = style.sizes

//Preencher a sidebar
const sidebar = style.sidebar
const sidebar_text = {
  width: sidebar_width - sidebar.padding,
  align: 'center'
}

//Nome
doc.font('Roboto-Bold')
.fillColor(sidebar.accent)
.fontSize(sizes.h1)
.text(info.name,sidebar.padding,25,sidebar_text)

//Posição
doc.moveDown()
.fontSize(sizes.h2)
.text(info.position,sidebar_text)



//Tudo certo, faz o stream do PDF
doc.end()
