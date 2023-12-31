export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento =  nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    get nome() {
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }
    
    get role(){
        return this.#role
    }
    
    get ativo(){
        return this.#ativo
    }
    
    set nome (novoNome) {
        if (novoNome === ''){
            throw new Error ('Formato não válido')
        }
        this.#nome = novoNome;
    }
    
    exibirInfos() {
        return `${this.nome}, ${this.email}`;
    }
};
    // #montaObjUser(){
        //     return({
            //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }


// const novoUser = new User ('Gessyca', 'g@g.com', '1999-10-08');

// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser));