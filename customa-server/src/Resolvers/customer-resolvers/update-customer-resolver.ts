import { PrismaClient } from '@prisma/client'

export class UpdateCustomer {

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

    public async updateUsers(){
        const prisma = new PrismaClient()
        await prisma.user.updateMany({
            where: {
                email : this.email,
            },
            data: {
                nomeClient : this.nome,
                telefone : this.telefone,
                cnpj : this.cnpj,
                endereco : this.endereco,
                cidade : this.cidade
            },
        })
    }
}
