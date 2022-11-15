import { PrismaClient } from '@prisma/client'

export class DeleteCustomer {

    public email: any;

    constructor(email: any) {
        this.email = email
    }

    public async deleteUser() {
        const prisma = await new PrismaClient()
        await prisma.user.delete({
            where: {
                email: this.email
            },
          }
        )
    }
}
