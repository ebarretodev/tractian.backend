import { Schema, model, connection } from "mongoose";

type UnitType = {
    name: string,
    company: string,
    owner: string,
}

const schema = new Schema<UnitType>({
    name: { type: String, required: true },
    company: { type: String, required: true },
    owner: { type: String, required: true },
})

const modelName: string = 'Unit'

export default (connection && connection.models[modelName]) ?
connection.models[modelName] :
model<UnitType>(modelName, schema)
