"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    owner: { type: String, required: true },
});
const modelName = 'Unit';
exports.default = (mongoose_1.connection && mongoose_1.connection.models[modelName]) ?
    mongoose_1.connection.models[modelName] :
    (0, mongoose_1.model)(modelName, schema);
