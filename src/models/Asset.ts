import { Schema, model, connection } from "mongoose";

type AssetType = {
    name: string,
    model: string,
    description: string,
    owner: string,
    health: number,
    status: string,
}

const schema = new Schema<AssetType>({
    name: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true },
    health: { type: Number, required: true },
    status: { type: String, required: true },
})

const modelName: string = 'Asset'

export default (connection && connection.models[modelName]) ?
connection.models[modelName] :
model<AssetType>(modelName, schema)
