"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true },
    health: { type: Number, required: true },
    status: { type: String, required: true },
});
const modelName = 'Asset';
exports.default = (mongoose_1.connection && mongoose_1.connection.models[modelName]) ?
    mongoose_1.connection.models[modelName] :
    (0, mongoose_1.model)(modelName, schema);
