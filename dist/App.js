"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.post('/api/v1/parse', (req, res) => {
            let fname = req.body.data.substring(0, 8);
            let lname = req.body.data.substring(8, 18);
            let id = req.body.data.substring(18);
            console.log(fname, lname, id);
            res.json({
                statusCode: 200,
                data: {
                    firstName: fname,
                    lastName: lname,
                    clientId: id
                }
            });
        });
        router.post('/api/v2/parse', (req, res) => {
            let fname = req.body.data.substring(0, 8), lname = req.body.data.substring(8, 18), id = req.body.data.substring(18);
            fname = fname.split("0").join("");
            lname = lname.split("0").join("");
            id = id.split("");
            let firstPart = "", secondPart = "";
            for (let i = 0; i < id.length; i++) {
                i < 3 ? firstPart += id[i] : secondPart += id[i];
            }
            id = firstPart + "-" + secondPart;
            console.log(id);
            res.json({
                statusCode: 200,
                data: {
                    firstName: fname,
                    lastName: lname,
                    clientId: id
                }
            });
        });
        this.express.use(bodyParser.json());
        this.express.use('/', router);
    }
}
let app = new App().express;
exports.default = app;
//# sourceMappingURL=App.js.map