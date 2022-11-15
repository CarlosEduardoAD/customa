import { PrismaClient } from '@prisma/client'

export class CreateCustomer {
    public nome: any;
    public email: any;
    public telefone: any;
    public cnpj: any;
    public endereco: any;
    public cidade: any;


    constructor(nome : any, email : any, telefone : any, cnpj : any, endereco : any, cidade : any) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.cnpj = cnpj
        this.endereco = endereco
        this.cidade = cidade
    }

    public async insertUsers(){
        const prisma = new PrismaClient()
        await prisma.user.create({
            data : {
                nomeClient : this.nome,
                email : this.email,
                telefone : this.telefone,
                cnpj : this.cnpj,
                endereco : this.endereco,
                cidade : this.cidade
            },
        })
        console.log('Query comSpleta com sucesso')
    }

}
