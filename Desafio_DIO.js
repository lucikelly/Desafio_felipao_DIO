const prompt = require("readline-sync") // Importa o módulo prompt-sync para interação com o usuário

console.log("==============================================================");
console.log("       1️⃣  Desafio Classificador de nível de Herói 🥇 🥋    ");
console.log("==============================================================");

let continuar = true; // Variável para controlar a execução do loop

while (continuar) {
  
  let nomeJogador = String(prompt.question("Informe nome do seu jogador(a): "));
  console.log(`Beleza ${nomeJogador}, seja bem vindo ao Classificador!!`);

  let experiencia = Number(prompt.question(`Agora ${nomeJogador}, nos diga, qual o seu XP? `));

  let nivelJogador // Variável para armazenar o nível do jogador

  switch (true) {
    case experiencia <= 1000:
      nivelJogador = 'Nível Ferro 🔨';
      mensagemNivel()
      break;

    case experiencia >= 1001 && experiencia <= 2000:
      nivelJogador = 'Nível Bronze 🥉';
      mensagemNivel()
      break;

    case experiencia >= 2001 && experiencia <= 5000:
      nivelJogador = 'Nível Prata 🥈';
      mensagemNivel()
      break;

    case experiencia >= 5001 && experiencia <= 7000:
      nivelJogador = 'Nível Ouro 🥇';
      mensagemNivel()
      break;

    case experiencia >= 7001 && experiencia <= 8000:
      nivelJogador = 'Nível Platina 👩‍🦳';
      mensagemNivel()
      break;

    case experiencia >= 8001 && experiencia <= 9000:
      nivelJogador = 'Nível Ascendente 🌟';
      mensagemNivel()
      break;

    case experiencia >= 9001 && experiencia <= 10000:
      nivelJogador = 'Nível Imortal 💀';
      mensagemNivel()
      break;

    case experiencia > 10001:
      nivelJogador = 'Nível Radiante 🏆';
      mensagemNivel()
      break;

    default:
      nivelJogador = "Atenção !!! seu nível não foi encotrado, lembre-se de digitar apenas numeros no campo XP";
      console.log("                     ################# ERRO ################")
      console.log(nivelJogador)
      
  }


  function mensagemNivel (){
    console.log("==============================================================");
    console.log(`      ${nomeJogador}, Seu Herói é ${nivelJogador} !!          `);
    console.log("==============================================================");
  }


  // Pergunta ao usuário se deseja continuar inserindo novos jogadores
  let resposta = prompt.question("Deseja verificar outro jogador? (s/n) ");
  if (resposta.toLowerCase() !== 's') {
    continuar = false; // Se a resposta não for 's', interrompe o loop
  }
}

console.log("Fim do Classificador!");
