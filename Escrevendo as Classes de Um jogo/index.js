class heroClass {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }
}

let hero = new heroClass("Naruto",25,"Guerreiro");
if (hero.classe === "Guerreiro") {
    console.log("O Guerreiro atacou usando espada");
} else if (hero.classe === "Mago") {
    console.log("O Mago atacou usando magia");
} else if (hero.classe === "Lutador") {
    console.log("O Lutador atacou usando artes marciais"); 
} else if (hero.classe === "Ninja") {
    console.log("O Ninja atacou usando katana");
}
console.log(hero);