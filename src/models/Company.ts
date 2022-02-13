import { Schema, model, connection } from "mongoose";

type CompanyType = {
    name: string,
    address: string,
    business: string,
}

const schema = new Schema<CompanyType>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    business: { type: String, required: true },
})

const modelName: string = 'Company'

export default (connection && connection.models[modelName]) ?
connection.models[modelName] :
model<CompanyType>(modelName, schema)
