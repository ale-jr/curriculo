//Constantes
const constants = require('./constants.js')
//Função para criar o documento de acordo com a língua
const createDoc = require('./cv_layout/createDoc.js')

//para cada lingua
constants.langs.forEach((lang,index,arr)=> createDoc(lang))
