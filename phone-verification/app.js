const express = require("express");
const app = express();
const port = 3000;

const config = require("./config");

const client = require("twilio")(config.accountSID, config.authToken);

// /login
//     - phone number
//     - channel (sms/call)

// /verify
//     - phone number
//     - code

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Homepage",
        info: {
            login: "shortcut link: localhost:3000/login?phonenumber=x",
            verify: "shortcut link: localhost:3000/verify?phonenumber=x&code=x",
        },
    });
});

// Login Endpoint
app.get("/login", (req, res) => {
    if (req.query.phonenumber) {
        client.verify
            .services(config.serviceID)
            .verifications.create({
                to: `+${req.query.phonenumber}`,
                channel: "sms",
            })
            .then((data) => {
                res.status(200).send({
                    message: "Verification is sent!!",
                    phonenumber: req.query.phonenumber,
                    data,
                });
            });
    } else {
        res.status(400).send({
            message: "Error ",
            phonenumber: req.query.phonenumber,
            data,
        });
    }
});

// Verify Endpoint
app.get("/verify", (req, res) => {
    client.verify
        .services(config.serviceID)
        .verificationChecks.create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code,
        })
        .then((data) => {
            if (data.status === "approved") {
                res.status(200).send({
                    message: "User is Verified!!",
                    data,
                });
                console.log(data);
            } else {
                res.status(403).send({
                    message: "Incorrect Code",
                    data,
                });
                console.log(data);
            }
        });
});

// listen to the server at 3000 port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at ${port}`);
});
