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
const User_1 = __importDefault(require("../models/User"));
module.exports = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield User_1.default.find();
        res.json(users);
    }),
    getOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //getUser: (id: string) => { return axios.get(`${BASE_URL_API}/users/${id}`)},
        const { id } = req.params;
        if (id) {
            const user = yield User_1.default.findById(id);
            res.json(user);
        }
        else {
            res.status(404);
        }
    }),
    putOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //putUser: (id: number, values: any) => { return axios.put(`${BASE_URL_API}/users/${id}`, values)},
        const { id } = req.params;
        const { email, username, gender, company } = req.body;
        let data = { email, username, gender, company };
        yield User_1.default.findByIdAndUpdate(id, data);
        res.status(200).json('User updated');
    }),
    deleteOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //deleteUser: (id: number) => { return axios.delete(`${BASE_URL_API}/users/${id}`)},
        const { id } = req.params;
        yield User_1.default.findByIdAndDelete(id);
        res.json('Users deleted');
    }),
    postOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //postUser: (data: any ) => { return axios.post(`${BASE_URL_API}/users`, data)},
        const { email, username, gender, company } = req.body;
        if (email && username && gender && company) {
            yield User_1.default.create({
                email,
                username,
                gender,
                company,
            });
        }
        else {
            res.status(400).json('No data received!');
        }
        res.status(201).json('Create Successfully');
    }),
};
