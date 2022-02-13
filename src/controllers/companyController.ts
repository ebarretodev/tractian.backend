import { Request, Response } from 'express';
import  Company from '../models/Company';

module.exports = {
    getAll: async (req: Request, res: Response) => {
        const companies = await Company.find()
        res.json(companies)
    },
    getOne: async (req: Request, res: Response) => {
        const { id } = req.params
        if(id){
            const company = await Company.findById(id)
            res.json(company)
        } else {
            res.status(404)
        }
    },
    putOne: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, address, business } = req.body
        let data = { name, address, business }
        await Company.findByIdAndUpdate( id, data )
        res.status(200).json('Company updated')
    },
    deleteOne: async (req: Request, res: Response) => {
        const { id } = req.params
        await Company.findByIdAndDelete(id)
        res.json('Company deleted')
    },
    postOne: async (req: Request, res: Response) => {
        const { name, address, business } = req.body
        if(name && address && business){
            await Company.create({
                name,
                address,
                business,
            })
        } else {
            res.status(400).json('No data received!')
        }
        res.status(201).json('Create Successfully')
    },

}
