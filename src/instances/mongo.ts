import { connect } from 'mongoose'

require('dotenv').config()

export const mongoConnect = async () =>{
    try {
        console.log('Conecting mongo...')
        await connect(process.env.MONGO_URL as string)
        console.log('Conectado com sucesso.')

    }catch(error) {
        console.log('Error: ', error)
    }
}