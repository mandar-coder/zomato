require("dotenv").config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const zomato = express();

//database connection
import ConnectDB from './database/connection'

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(cors());
zomato.use(helmet());

zomato.get("/", (req,res) => {
    res.json({message: "Setup Success"});
});

zomato.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is up and running"))
        .catch(() =>
            console.log("Server is running, but database connection failed ...")
        )
);