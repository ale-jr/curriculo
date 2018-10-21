const PDFKit = require('pdfkit')
const fs = require('fs')
const constants = require('../constants.js')

const style = require('./style.js')

const createDoc = (lang) => {

  //informações gerais
  const info = constants.filterLang(constants.cv_data.INFO,lang)

  //Cariação do documento
  var doc = new PDFKit({...constants.document, author: info.name})


  //Definições de tamanhos do documento
  const width = doc.page.width
  const height = doc.page.height
  const sidebar_width = width * (style.sidebar.width / 100)

  const filename = `${constants.output.split('.')[0]} - ${info.name} ${lang}.${constants.output.split('.')[1]}`
  //Cria o stream
  doc.pipe(fs.createWriteStream(filename))



  //Cor de fundo e da lateral
  doc.rect(0,0,width,height)
  .fill(style.main.background)
  .rect(0,0,sidebar_width,height)
  .fill(style.sidebar.background)

  //Gerar a barra lateral
  require('./sidebar.js')(doc,width,height,sidebar_width,lang)

  //Gerar a área principal
  require('./main.js')(doc,width,height,sidebar_width,lang)


  //Tudo certo, faz o stream do PDF

  console.log(`Versão ${lang} criada, nome do arquido: ${filename}`)
  doc.end()
}

module.exports = createDoc
