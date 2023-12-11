class Heroi { //além de guardar informações, guarda comportamentos
	constructor(nome, idade, tipo) { //boa prática
		this.nome = nome;
    	this.idade = idade;
        this.tipo = tipo; //guerreito, mago, monge, ninja
        this.ataque = this.definirAtaque();
    }
    
    definirAtaque () {
    	if(this.tipo == "guerreiro") {
    		return "espada";
   	 	} else if (this.tipo == "mago") {
    		return "magia";
    	} else if (this.tipo == "monge") {
    		return "artes marciais";
   		} else {
    		return "shuriken";
    	}
    }

    atacar(){
    	console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }

}

let novoHeroi = new Heroi("Marina", 18, "mago");
novoHeroi.atacar();
