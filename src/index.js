import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";

configDotenv({
    path: './.env'
})

connectDB();






















/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants"

import express from "express";
const app = express();

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERROR: " + error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error: " + error);
        throw error;
    }
})
*/