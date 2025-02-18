const XLSX = require('xlsx');
const fs = require('fs');

// Função para ler e converter o arquivo Excel em JSON
function excelToJson(filePath) {
    const workbook = XLSX.readFile(filePath);
    
    // Obter os dados da primeira planilha
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Converter para JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    return jsonData;
}

// Exemplo de uso
const json = excelToJson('/Users/danielyoneshigejunior/Desktop/scripts/dePara/SomeFile.xlsx');
console.log(JSON.stringify(json, null, 2));

// Salvar em um arquivo JSON
fs.writeFileSync('saida.json', JSON.stringify(json, null, 2));
