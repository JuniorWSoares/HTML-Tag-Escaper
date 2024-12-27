const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

run()

function escapeHtmlSpecialCharacters(text){
    return text.replace(/[<>&]/g, (match) => {
        switch(match){
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case "&":
                return "&amp;"
            default:
                return match
        }
    })
}

function escapeHtmlFile(inputFilePath, outputFilePath){
    try {
        const fileContent = fs.readFileSync(inputFilePath, "utf-8")
        const escapedContent = escapeHtmlSpecialCharacters(fileContent)
        fs.writeFileSync(outputFilePath, escapedContent, "utf-8")
        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)
    } catch (error) {
        console.log("ERRO: ", error.message)
        process.exit(1)
    }
}

function askFilePath(question){
    const rl = readline.createInterface({input: process.stdin, output: process.stdout})
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

async function userInteraction(){
    //node html-escaper.js <inputFile> <outputFile>
    let inputPath = process.argv[2]
    if(!inputPath){
        inputPath = await askFilePath("Informe o caminho do arquivo de entrada: ")
    }
    inputPath = path.resolve(inputPath)

    const defaultName = `escape_${path.basename(inputPath).replace(/\.[a-zA-z]*$/, "")}.txt`
    const answer = await askFilePath(`Informe o caminho do arquivo de saida: (Saida Padrao: ${defaultName}) `)
    let outputPath = answer.length > 0 ? answer : defaultName
    outputPath = path.resolve(outputPath)

    escapeHtmlFile(inputPath, outputPath)
}

function run(){
    const args = process.argv
    if(args.length >= 4){
        escapeHtmlFile(path.resolve(args[2]), path.resolve(args[3]))
    } else{
        console.log("\n----------------------------")
        console.log("HTML Tag Escaper v1.0")
        console.log("----------------------------\n")
        console.log("Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape.")
        userInteraction()
    }
}