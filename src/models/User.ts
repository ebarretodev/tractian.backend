import { Schema, model, connection } from "mongoose";

type UserType = {
    email: string,
    username: string,
    gender: string,
    company: [string],
}

const schema = new Schema<UserType>({
    email: { type:String, required:true},
    username: { type:String, required:true},
    gender: { type:String, required:true},
    company: { type:[String], required:true},
})

const modelName: string = 'User'

export default (connection && connection.models[modelName]) ?
connection.models[modelName] :
model<UserType>(modelName, schema)
