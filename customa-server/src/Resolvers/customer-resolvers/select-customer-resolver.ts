import { PrismaClient } from '@prisma/client'
import axios from 'axios';

export class SelectCustomer {

    public email: any;


    constructor(email? : any) {
        this.email = email
    }

    public async getUsers() {
        const prisma = new PrismaClient()
        const users = await prisma.user.findMany()
        return users
    }
}
