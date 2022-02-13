import { Request, Response } from 'express';
import  Unit from '../models/Unit';

module.exports = {
    getAll: async (req: Request, res: Response) => {
        const units = await Unit.find()
        res.json(units)
    },
    getOne: async (req: Request, res: Response) => {
        const { id } = req.params
        if(id){
            const unit = await Unit.findById(id)
            res.json(unit)
        } else {
            res.status(404)
        }
    },
    putOne: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, owner, company } = req.body
        let data = { name, owner, company }
        await Unit.findByIdAndUpdate( id, data )
        res.status(200).json('Unit updated')
    },
    deleteOne: async (req: Request, res: Response) => {
        const { id } = req.params
        await Unit.findByIdAndDelete(id)
        res.json('Unit deleted')
    },
    postOne: async (req: Request, res: Response) => {
        const { name, owner, company } = req.body
        if(name && owner && company){
            await Unit.create({
                name,
                owner,
                company,
            })
        } else {
            res.status(400).json('No data received!')
        }
        res.status(201).json('Create Successfully')
    },

}

