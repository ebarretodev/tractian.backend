"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = __importDefault(require("../models/Unit"));
module.exports = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const units = yield Unit_1.default.find();
        res.json(units);
    }),
    getOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        if (id) {
            const unit = yield Unit_1.default.findById(id);
            res.json(unit);
        }
        else {
            res.status(404);
        }
    }),
    putOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, owner, company } = req.body;
        let data = { name, owner, company };
        yield Unit_1.default.findByIdAndUpdate(id, data);
        res.status(200).json('Unit updated');
    }),
    deleteOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        yield Unit_1.default.findByIdAndDelete(id);
        res.json('Unit deleted');
    }),
    postOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, owner, company } = req.body;
        if (name && owner && company) {
            yield Unit_1.default.create({
                name,
                owner,
                company,
            });
        }
        else {
            res.status(400).json('No data received!');
        }
        res.status(201).json('Create Successfully');
    }),
};
