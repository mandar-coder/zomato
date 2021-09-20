require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";


//configs
import googleAuthConfig from "./config/google.config";
//Routes
import Auth from "./API/Auth/index";
import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";
import Menu from "./API/Menu/index";
import Image from "./API/Image/index";
import Order from "./API/Orders/index";
import Review from "./API/Reviews/index";
import User from "./API/User/index";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

//passport config
googleAuthConfig(passport);

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
//erorr in this
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
    res.json({ message: "Setup Success" });
});

zomato.use("/Auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);
zomato.use("/user", User);

zomato.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is up and running"))
        .catch(() =>
            console.log("Server is running, but database connection failed ...")
        )
);
