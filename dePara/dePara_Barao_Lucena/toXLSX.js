const fs = require('fs');
const XLSX = require('xlsx');

// Exemplo de dados JSON que você quer converter
const jsonData = '/Users/danielyoneshigejunior/Desktop/scripts/dePara/dePara_Barao_Lucena/lucena_members.json';

// Função para converter JSON para XLSX
function jsonParaXlsx(jsonData, nomeArquivo) {
    // Converte o JSON para uma planilha
    const ws = XLSX.utils.json_to_sheet(jsonData);

    // Cria um arquivo de workbook (planilha Excel)
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Planilha1'); // O nome da aba (Planilha1) pode ser alterado

    // Escreve o arquivo XLSX
    XLSX.writeFile(wb, nomeArquivo);
}

// Chama a função para gerar o arquivo XLSX
jsonParaXlsx(jsonData, 'dados.xlsx');

console.log("Arquivo XLSX criado com sucesso!");
