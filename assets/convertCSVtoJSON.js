let csvToJson = require('./node_modules/convert-csv-to-json')
let fileInputName = 'toolkit_commands.csv'
let fileOutputName = fileInputName.split(".")[0] + '.json'
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName)