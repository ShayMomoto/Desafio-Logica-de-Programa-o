//Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:
//Se XP for menor de que 1000 = Ferro
//Se XP for entre 1001 e 2000 = Bronze
//Se XP for entre 2001 e 5000 = Prata
//Se XP for entre 5001 e 7000 = Ouro
//Se XP for entre 7001 e 8000 = Platina
//Se XP for entre 8001 e 9000 = Ascendente
//Se XP for entre 9001 e 10000 = Imortal
//Se XP for maior ou igual a 10001 = Radiante

const prompt = require('prompt-sync')();

let heroi = {
    nome: prompt("Qual o nome do herói? "),
    xp: parseInt(prompt("Qual a quantidade de XP? "))
}

let nivel;

if (heroi.xp < 1000) {
    nivel = "Ferro";
}
else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
    nivel = "Bronze";
}
else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
    nivel = "Prata";
}
else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
    nivel = "Ouro";
}
else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
    nivel = "Platina";
}
else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
    nivel = "Ascendente";
}
else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
    nivel = "Imortal";
}
else if (heroi.xp >= 10001) {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);