import { Request, Response } from 'express';
import  User from '../models/User';

module.exports = {
    getAll: async (req: Request, res: Response) => {
        const users = await User.find()
        res.json(users)
    },
    getOne: async (req: Request, res: Response) => {
        //getUser: (id: string) => { return axios.get(`${BASE_URL_API}/users/${id}`)},
        const { id } = req.params
        if(id){
            const user = await User.findById(id)
            res.json(user)
        } else {
            res.status(404)
        }
    },
    putOne: async (req: Request, res: Response) => {
        //putUser: (id: number, values: any) => { return axios.put(`${BASE_URL_API}/users/${id}`, values)},
        const { id } = req.params
        const { email, username, gender, company } = req.body
        let data = { email, username, gender, company }
        await User.findByIdAndUpdate( id, data )
        res.status(200).json('User updated')
    },
    deleteOne: async (req: Request, res: Response) => {
        //deleteUser: (id: number) => { return axios.delete(`${BASE_URL_API}/users/${id}`)},
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.json('Users deleted')
    },
    postOne: async (req: Request, res: Response) => {
        //postUser: (data: any ) => { return axios.post(`${BASE_URL_API}/users`, data)},
        const { email, username, gender, company } = req.body
        if(email && username && gender && company){
            await User.create({
                email,
                username,
                gender,
                company,
            })
        } else {
            res.status(400).json('No data received!')
        }
        res.status(201).json('Create Successfully')
    },

}


