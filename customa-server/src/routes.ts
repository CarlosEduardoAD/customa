import express from "express"
import { SelectCustomer } from "./Resolvers/customer-resolvers/select-customer-resolver"
import { CreateCustomer } from "./Resolvers/customer-resolvers/create-customer-resolver"
import { DeleteCustomer } from "./Resolvers/customer-resolvers/delete-customer-resolver"
import { UpdateCustomer } from "./Resolvers/customer-resolvers/update-customer-resolver"
import axios from 'axios'

export const routes = express.Router()

routes.get('/api/v1/')

routes.get('/api/v1/users', async (req, res) => {
    const customerObj = new SelectCustomer()
    const users = await customerObj.getUsers()
    return res.json(users).status(200)

})

routes.post('/api/v1/insertUsers', async (req, res) => {
    const { nome, email, telefone, endereco, cnpj, cep } = req.body
    console.log(cep)
    const resAxios = await axios.get(`https://viacep.com.br/ws/${(cep.replace(/"/g, ""))}/json/`)
    const cidade = resAxios.data.localidade
    const createObj = new CreateCustomer(nome, email, telefone, cnpj, endereco, cidade)
    createObj.insertUsers()
    return res.status(200)
})

routes.put('/api/v1/updateUsers', async (req, res) => {
    const email = req.query.email
    const { nome, telefone, cnpj, endereco, cep } = req.body
    const resAxios = await axios.get(`https://viacep.com.br/ws/${(cep.replace(/"/g, ""))}/json/`)
    const cidade = resAxios.data.localidade
    const updateObj = new UpdateCustomer(nome, email, telefone, cnpj, endereco, cidade)
    updateObj.updateUsers()
})

routes.delete('/api/v1/deleteUsers', (req, res) => {
    const email = req.query.email
    const deleteObj = new DeleteCustomer(String(email))
    deleteObj.deleteUser()
})
