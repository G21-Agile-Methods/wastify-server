import { Schema, model, SchemaTypes } from "mongoose";
import { EducationalContentRes } from "../types";

const EducationalContentSchema = new Schema({
    title: {
        type: SchemaTypes.String,
        required: true
    },
    description: {
        type: SchemaTypes.String,
        required: true
    },
    content: {
        type: SchemaTypes.String,
        required: true
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: "Manager",
        required: true
    },
}, { timestamps: true })


export const EducationalContentModel = model<EducationalContentRes>("EducationalContent", EducationalContentSchema);