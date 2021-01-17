const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/home.html")
})


app.post("/", function(req, res) {

  const Nexmo = require('nexmo');

  const nexmo = new Nexmo({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
    applicationId: process.env.VONAGE_APPLICATION_ID,
    privateKey: process.env.VONAGE_PRIVATE_KEY
  });

  var message1 = req.body.text
  + ". My emergency is " + req.body.one + ". " + req.body.two + ". My phone and name is: " + req.body.three + ". Please text me details and do not call."

  const ncco = [{
    action: 'talk',
    voiceName: 'Joey',
    text: message1,
  }, ];

  nexmo.calls.create({
      to: [{
        type: 'phone',
        number: process.env.TO_NUM
      }],
      from: {
        type: 'phone',
        number: process.env.FROM_NUM
      },
      ncco,
    },
    (err, result) => {
      console.log(err || result);
    },
  );


  res.send("Information sent.")
})


app.listen(process.env.PORT || 3000, () => console.log('listening at 3000'));
