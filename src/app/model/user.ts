export class User {

    id: Number;
    login: String;
    nome: String;
    cpf: String;
    
    constructor(id: Number, login: String, nome: String, cpf:String){
        this.id = id;
        this.login = login;
        this.nome = nome;
        this.cpf = cpf;
    }
}
