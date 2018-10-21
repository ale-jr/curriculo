const constants = require('../constants.js')
const style = require('./style.js')

module.exports = function(doc,width,height,sidebar_width,lang){

  //Dados do curriculum
  const education = constants.filterLang(constants.cv_data.EDUCATION,lang)

  const projects = constants.filterLang(constants.cv_data.PROJECTS,lang)

  const skills = constants.filterLang(constants.cv_data.SKILLS,lang)

  const translation = constants.filterLang(constants.cv_data.TRANSLATION,lang)
  //Fim dos dados do curriculum

  //Definir tamanhos
  const sizes = style.sizes

  //Estilo da barra principal
  const main = style.main

  //Definir detalhes de formação e projetos
  const main_x = main.padding + sidebar_width
  const details_padding = main.details_padding + main_x

  const details_text = {
    width: (width - details_padding) - main.padding * 2,
    align: constants.align.LEFT
  }

  const setDetail = (item) =>
  doc.font(constants.fonts.ROBOTO)
  .fillColor(main.text)
  .fontSize(sizes.h3)
  .text(item.date,main_x,undefined)
  .font(constants.fonts.ROBOTO_BOLD)
  .moveUp()
  .text(item.title,details_padding,undefined,details_text)
  .fontSize(sizes.p)
  .font(constants.fonts.ROBOTO)
  .text(item.description,details_padding,undefined,details_text)
  .moveDown(0.5)
  //Fim Definir detalhes de formação e projetos


  //Formação
  doc.font(constants.fonts.FA_SOLID)
  .fillColor(main.title)
  .fontSize(sizes.big_icon)
  .text(constants.icons.FAS_GRADUATION,main_x,20)
  .moveUp()
  .font(constants.fonts.ROBOTO_BOLD)
  .fontSize(sizes.h1)
  .text(translation.education,main_x+main.icon_padding,undefined)
  .moveDown(0.5)
  //Detalhes de formação
  education.details.forEach((details,index,arr)=> setDetail(details))

  //Projetos
  doc.font(constants.fonts.FA_SOLID)
  .fillColor(main.title)
  .fontSize(sizes.big_icon)
  .moveDown(0.5)
  .text(constants.icons.FAS_PROJECT,main_x,undefined)
  .moveUp()
  .font(constants.fonts.ROBOTO_BOLD)
  .fontSize(sizes.h1)
  .text(translation.projects,main_x+main.icon_padding,undefined)
  .moveDown(0.5)

  //Detalhes dos projetos
  projects.details.forEach((details,index,arr)=> setDetail(details))

  //Skills
  doc.font(constants.fonts.FA_SOLID)
  .fillColor(main.title)
  .fontSize(sizes.big_icon)
  .moveDown(0.5)
  .text(constants.icons.FAS_CODE,main_x,undefined)
  .moveUp()
  .font(constants.fonts.ROBOTO_BOLD)
  .fontSize(sizes.h1)
  .text(translation.skills,main_x+main.icon_padding,undefined)
  .moveDown(0.5)

  const setSkill = (skill) =>{
    doc.font(constants.fonts.ROBOTO_BOLD)
  .fillColor(main.text)
  .fontSize(sizes.h3)
  .text(skill.skill,main_x,undefined)
  .font(constants.fonts.ROBOTO_BOLD)
  .moveUp()
  .font(constants.fonts.FA_SOLID)
  let skills_x = details_padding

  for(var i=0;i<constants.skillcount;i++){
    const circle_color = i<skill.level ? main.title : main.text
    doc.fillColor(circle_color)
    .text(constants.icons.FAS_CIRCLE,skills_x,undefined)
    .moveUp()
    skills_x+=main.skill_padding
  }

  doc.moveDown(1.5)
}

  skills.details.forEach((skill,index,arr)=> setSkill(skill))


}//Fim module.exports
