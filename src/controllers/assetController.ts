import { Request, Response } from 'express';
import Asset from '../models/Asset';

module.exports = {
    getAll: async (req: Request, res: Response) => {
        const assets = await Asset.find({})
        res.json(assets)
    },
    getOne: async (req: Request, res: Response) => {
        const { id } = req.params
        if(id){
            const asset = await Asset.findById(id)
            res.json(asset)
        } else {
            res.status(404)
        }
    },
    putOne: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, model, description, owner, health, status } = req.body
        let data = { name, model, description, owner, health, status }
        await Asset.findByIdAndUpdate( id, data )
        res.status(200).json('Asset updated')
    },
    deleteOne: async (req: Request, res: Response) => {
        const { id } = req.params
        await Asset.findByIdAndDelete(id)
        res.json('Asset deleted')
    },
    postOne: async (req: Request, res: Response) => {
        const { name, model, description, owner, health, status } = req.body
        if(name && model && description && owner && health && status){
            await Asset.create({
                name,
                model,
                description,
                owner,
                health,
                status,

            })
        } else {
            res.status(400).json('No data received!')
        }
        res.status(201).json('Create Successfully')
    },

}
