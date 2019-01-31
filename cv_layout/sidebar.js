const constants = require('../constants.js')
const style = require('./style.js')

module.exports = function(doc,width,height,sidebar_width,lang){
  //tamanhos de textos e icones
  const sizes = style.sizes

  const info = constants.filterLang(constants.cv_data.INFO,lang)

  const translation = constants.filterLang(constants.cv_data.TRANSLATION,lang)


  //Preencher a sidebar
  const sidebar = style.sidebar
  const sidebar_text = {
    width: sidebar_width - sidebar.padding * 2,
    align: constants.align.CENTER
  }

  //Nome
  doc.font(constants.fonts.ROBOTO_BOLD)
  .fillColor(sidebar.accent)
  .fontSize(sizes.h1)
  .text(info.name,sidebar.padding,25,sidebar_text)
  .moveDown()

  //Posição
  doc.fontSize(sizes.h2)
  .text(info.position,sidebar.padding,undefined,sidebar_text)
  .moveDown()
  .moveTo(10,doc.y)
  .lineTo(sidebar_width-10,doc.y)
  .strokeColor(sidebar.text)
  .stroke()
  .moveDown()



  //Contato
  const setDetails = (icon,info) =>
  doc.font(icon.font)
  .fillColor(sidebar.text)
  .text(icon.icon,sidebar.padding,undefined)
  .font(constants.fonts.ROBOTO)
  .moveUp()
  .text(info,sidebar.icon_padding,undefined,{width:sidebar_width - (sidebar.padding *2.5), align: constants.align.LEFT})
  .moveDown(0.6)

  //para cada contato
  info.details.forEach((contact,index,arr)=> setDetails(contact.icon,contact.info))



  //Objetivo
  doc.font(constants.fonts.FA_SOLID)
  .moveDown(0.5)
  .fontSize(sizes.h1)
  .text(constants.icons.FAS_PLUS,sidebar.padding,undefined)
  .moveUp()
  .font(constants.fonts.ROBOTO)
  .text(translation.objectives,sidebar.padding+ 30,undefined)
  .fontSize(sizes.h3)
  .text(info.objective,sidebar.padding,undefined,{...sidebar_text, align: 'left'})

  //Sobre

  if(!info.about) return

  doc.font(constants.fonts.FA_SOLID)
  .moveDown(0.5)
  .fontSize(sizes.h1)
  .text(constants.icons.FAS_SMILE,sidebar.padding,undefined)
  .moveUp()
  .font(constants.fonts.ROBOTO)
  .text(translation.about,sidebar.padding+ 30,undefined)
  .fontSize(sizes.h3)
  .text(info.about,sidebar.padding,undefined,{...sidebar_text, align: 'left'})




  //FIM Sidebar

}//module.exports
