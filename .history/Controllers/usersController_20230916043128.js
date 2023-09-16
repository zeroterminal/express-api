//  .S       S.     sSSs    sSSs   .S_sSSs      sSSs    sSSs    sSSs_sSSs     .S_sSSs    sdSS_SSSSSSbs   .S_sSSs      sSSs_sSSs    S.      S.        sSSs   .S_sSSs
// .SS       SS.   d%%SP   d%%SP  .SS~YS%%b    d%%SP   d%%SP   d%%SP~YS%%b   .SS~YS%%b   YSSS~S%SSSSSP  .SS~YS%%b    d%%SP~YS%%b   SS.     SS.      d%%SP  .SS~YS%%b
// S%S       S%S  d%S'    d%S'    S%S   `S%b  d%S'    d%S'    d%S'     `S%b  S%S   `S%b       S%S       S%S   `S%b  d%S'     `S%b  S%S     S%S     d%S'    S%S   `S%b
// S%S       S%S  S%|     S%S     S%S    S%S  S%|     S%S     S%S       S%S  S%S    S%S       S%S       S%S    S%S  S%S       S%S  S%S     S%S     S%S     S%S    S%S
// S&S       S&S  S&S     S&S     S%S    d*S  S&S     S&S     S&S       S&S  S%S    S&S       S&S       S%S    d*S  S&S       S&S  S&S     S&S     S&S     S%S    d*S
// S&S       S&S  Y&Ss    S&S_Ss  S&S   .S*S  Y&Ss    S&S     S&S       S&S  S&S    S&S       S&S       S&S   .S*S  S&S       S&S  S&S     S&S     S&S_Ss  S&S   .S*S
// S&S       S&S  `S&&S   S&S~SP  S&S_sdSSS   `S&&S   S&S     S&S       S&S  S&S    S&S       S&S       S&S_sdSSS   S&S       S&S  S&S     S&S     S&S~SP  S&S_sdSSS
// S&S       S&S    `S*S  S&S     S&S~YSY%b     `S*S  S&S     S&S       S&S  S&S    S&S       S&S       S&S~YSY%b   S&S       S&S  S&S     S&S     S&S     S&S~YSY%b
// S*b       d*S     l*S  S*b     S*S   `S%b     l*S  S*b     S*b       d*S  S*S    S*S       S*S       S*S   `S%b  S*b       d*S  S*b     S*b     S*b     S*S   `S%b
// S*S.     .S*S    .S*P  S*S.    S*S    S%S    .S*P  S*S.    S*S.     .S*S  S*S    S*S       S*S       S*S    S%S  S*S.     .S*S  S*S.    S*S.    S*S.    S*S    S%S
//  SSSbs_sdSSS   sSS*S    SSSbs  S*S    S&S  sSS*S    SSSbs   SSSbs_sdSSS   S*S    S*S       S*S       S*S    S&S   SSSbs_sdSSS    SSSbs   SSSbs   SSSbs  S*S    S&S
//   YSSP~YSSY    YSS'      YSSP  S*S    SSS  YSS'      YSSP    YSSP~YSSY    S*S    SSS       S*S       S*S    SSS    YSSP~YSSY      YSSP    YSSP    YSSP  S*S    SSS
//                                SP                                         SP               SP        SP                                                 SP
//                                Y                                          Y                Y         Y                                                  Y

import User from "../Models/usersModel.js";
import express from "express";
import jwt from "jsonwebtoken";
const usersController = express.Router();

//  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗     █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
// ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝    ██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║
// ██║     ██████╔╝█████╗  ███████║   ██║   █████╗      ███████║██║  ██║██╔████╔██║██║██╔██╗ ██║
// ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝      ██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║
// ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗    ██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
//  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝

usersController.post("/create/admin", (req, res) => {
    res.json("CREATED username ADMIN and password P@ssword");
    let admin = new User({
        username: "admin",
        name: "admin",
        email: "admin@zoned",
        password: "P@ssword",
        level: "Admin",
    });
    admin.save();
});

// ██╗    ██╗██╗██████╗ ███████╗    ██████╗  █████╗ ████████╗ █████╗ ██████╗  █████╗ ███████╗███████╗
// ██║    ██║██║██╔══██╗██╔════╝    ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
// ██║ █╗ ██║██║██████╔╝█████╗      ██║  ██║███████║   ██║   ███████║██████╔╝███████║███████╗█████╗
// ██║███╗██║██║██╔═══╝ ██╔══╝      ██║  ██║██╔══██║   ██║   ██╔══██║██╔══██╗██╔══██║╚════██║██╔══╝
// ╚███╔███╔╝██║██║     ███████╗    ██████╔╝██║  ██║   ██║   ██║  ██║██████╔╝██║  ██║███████║███████╗
//  ╚══╝╚══╝ ╚═╝╚═╝     ╚══════╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

usersController.delete("/delete/everything", async(req, res) => {
    const delete_all = await User.deleteMany({});
    if (!delete_all) {
        res.status(404).json({ message: "Error." });
    } else {
        res.status(200).json({ message: "Database Wiped." });
    }
});

// ██████╗  █████╗ ███╗   ██╗██████╗  ██████╗ ███╗   ███╗
// ██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔═══██╗████╗ ████║
// ██████╔╝███████║██╔██╗ ██║██║  ██║██║   ██║██╔████╔██║
// ██╔══██╗██╔══██║██║╚██╗██║██║  ██║██║   ██║██║╚██╔╝██║
// ██║  ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝██║ ╚═╝ ██║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝     ╚═╝

usersController.post("/create/randoms", async(req, res) => {
    res.json("CREATED random accounts, check /users to view them");
    let randoms = [
        new User({
            username: "pizza",
            name: "myuwi",
            email: "noob@zonednetwork.com",
            password: "I-like-small-mushrooms",
            level: "noob",
        }),

        new User({
            username: "zero",
            name: "Jay",
            email: "Jay@zonednetwork.com",
            password: "123",
            level: "Admin",
        }),

        new User({
            username: "clot",
            name: "blut im Venen",
            email: "Venen@zonednetwork.com",
            password: "Scheiße",
            level: "scheiße",
        }),
    ];
    await User.insertMany(randoms);
});

// ██╗   ██╗██╗███████╗██╗    ██╗    ██╗   ██╗███████╗███████╗██████╗ ███████╗
// ██║   ██║██║██╔════╝██║    ██║    ██║   ██║██╔════╝██╔════╝██╔══██╗██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║    ██║   ██║███████╗█████╗  ██████╔╝███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║    ██║   ██║╚════██║██╔══╝  ██╔══██╗╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝    ╚██████╔╝███████║███████╗██║  ██║███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝      ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝

usersController.get("/", async(req, res) => {
    const users = await User.find();
    res.json(users);
});

// ██╗   ██╗██╗███████╗██╗    ██╗    ██╗   ██╗███████╗███████╗██████╗ ███╗   ██╗ █████╗ ███╗   ███╗███████╗
// ██║   ██║██║██╔════╝██║    ██║    ██║   ██║██╔════╝██╔════╝██╔══██╗████╗  ██║██╔══██╗████╗ ████║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║    ██║   ██║███████╗█████╗  ██████╔╝██╔██╗ ██║███████║██╔████╔██║█████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║    ██║   ██║╚════██║██╔══╝  ██╔══██╗██║╚██╗██║██╔══██║██║╚██╔╝██║██╔══╝
//  ╚████╔╝ ██║███████╗╚███╔███╔╝    ╚██████╔╝███████║███████╗██║  ██║██║ ╚████║██║  ██║██║ ╚═╝ ██║███████╗
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝      ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝

usersController.get("/view/:username", async(req, res) => {
    try {
        const username = req.params.username;
        const userPromise = User.findOne({ username });
        const results = await Promise.allSettled([userPromise]);
        if (results[0].status === "fulfilled") {
            const user = results[0].value;
            res.json(user);
        } else {
            res.json({ message: "Invalid User" });
        }
    } catch (error) {
        res.json({ message: error });
    }
});

// ███████╗██████╗ ██╗████████╗    ██╗   ██╗███████╗███████╗██████╗ ███╗   ██╗ █████╗ ███╗   ███╗███████╗
// ██╔════╝██╔══██╗██║╚══██╔══╝    ██║   ██║██╔════╝██╔════╝██╔══██╗████╗  ██║██╔══██╗████╗ ████║██╔════╝
// █████╗  ██║  ██║██║   ██║       ██║   ██║███████╗█████╗  ██████╔╝██╔██╗ ██║███████║██╔████╔██║█████╗
// ██╔══╝  ██║  ██║██║   ██║       ██║   ██║╚════██║██╔══╝  ██╔══██╗██║╚██╗██║██╔══██║██║╚██╔╝██║██╔══╝
// ███████╗██████╔╝██║   ██║       ╚██████╔╝███████║███████╗██║  ██║██║ ╚████║██║  ██║██║ ╚═╝ ██║███████╗
// ╚══════╝╚═════╝ ╚═╝   ╚═╝        ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝

usersController.patch("/edit/:username", async(req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });

        user.username = req.body.username ? req.body.username : user.username;
        user.name = req.body.name ? req.body.name : user.name;
        user.email = req.body.email ? req.body.email : user.email;
        user.password = req.body.password ? req.body.password : user.password;
        user.level = req.body.level ? req.body.level : user.level;
        user.comments = req.body.comments ? req.body.comments : user.comments;
        user.likes = req.body.likes ? req.body.likes : user.likes;
        user.dislikes = req.body.dislikes ? req.body.dislikes : user.dislikes;
        user.phone = req.body.phone ? req.body.phone : user.phone;
        user.active = req.body.active ? req.body.active : user.active;

        await User.findOneAndUpdate({ user });
        user.save();
        res.json(user);
    } catch (error) {
        res.json({ message: error });
    }
});

//  ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗    ██╗   ██╗███████╗███████╗██████╗
// ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝    ██║   ██║██╔════╝██╔════╝██╔══██╗
// ██║     ██████╔╝█████╗  ███████║   ██║   █████╗      ██║   ██║███████╗█████╗  ██████╔╝
// ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝      ██║   ██║╚════██║██╔══╝  ██╔══██╗
// ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗    ╚██████╔╝███████║███████╗██║  ██║
//  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝     ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝

usersController.post("/create", (req, res) => {
    const createUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        level: req.body.level,
        comments: req.body.comments,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        phone: req.body.phone,
        active: req.body.active,
    });
    createUser.save();
    return res.json({
        message: "Successfully Created " + req.body.username,
    });
});

// ██████╗ ███████╗██╗     ███████╗████████╗███████╗    ██╗   ██╗███████╗███████╗██████╗
// ██╔══██╗██╔════╝██║     ██╔════╝╚══██╔══╝██╔════╝    ██║   ██║██╔════╝██╔════╝██╔══██╗
// ██║  ██║█████╗  ██║     █████╗     ██║   █████╗      ██║   ██║███████╗█████╗  ██████╔╝
// ██║  ██║██╔══╝  ██║     ██╔══╝     ██║   ██╔══╝      ██║   ██║╚════██║██╔══╝  ██╔══██╗
// ██████╔╝███████╗███████╗███████╗   ██║   ███████╗    ╚██████╔╝███████║███████╗██║  ██║
// ╚═════╝ ╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝     ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝

usersController.delete("/delete/:username", async(req, res) => {
    try {
        const user = await User.findOneAndDelete({
            username: req.params.username,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ██████╗ ███████╗ ██████╗ ██╗███████╗████████╗███████╗██████╗
// ██╔══██╗██╔════╝██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
// ██████╔╝█████╗  ██║  ███╗██║███████╗   ██║   █████╗  ██████╔╝
// ██╔══██╗██╔══╝  ██║   ██║██║╚════██║   ██║   ██╔══╝  ██╔══██╗
// ██║  ██║███████╗╚██████╔╝██║███████║   ██║   ███████╗██║  ██║
// ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

usersController.post("/register", async(req, res, next) => {
    const { name, email, password } = req.body;
    const newUser = User({
        name,
        email,
        password,
    });

    try {
        await newUser.save();
    } catch {
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }
    let token;
    try {
        token = jwt.sign({ userId: newUser.id, email: newUser.email },
            "secretkeyappearshere", { expiresIn: "1h" }
        );
    } catch (err) {
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }
    res.status(201).json({
        success: true,
        data: { userId: newUser.id, email: newUser.email, token: token },
    });
});

// ██╗      ██████╗  ██████╗ ██╗███╗   ██╗
// ██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
// ██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
// ██║     ██║   ██║██║   ██║██║██║╚██╗██║
// ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
// ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝

usersController.post("/login", async(req, res, next) => {
    let { username, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ username: username });
    } catch {
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }
    if (!existingUser || existingUser.password != password) {
        const error = Error("Wrong details please check at once");
        return next(error);
    }
    let token;
    try {
        //Creating jwt token
        token = jwt.sign({ userId: existingUser.id, username: existingUser.username },
            process.env.database, { expiresIn: "1h" }
        );
    } catch (err) {
        console.log(err);
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }

    res.status(200).json({
        success: true,
        data: {
            userId: existingPUser.id,
            username: existingUser.username,
            token: token,
        },
    });
});

export default usersController;