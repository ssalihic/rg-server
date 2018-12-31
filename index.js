const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// gleda jel username/pw jednak i vraca result valjal
app.post('/userpw', (req, res) => {
    let tijelo = req.body;
    let username = tijelo['username'];
    let password = tijelo['password'];
    let pamti = false;
    fs.readFile(path.join(__dirname + '/korisnici.csv'), function (err, data) {
        let sviKorisnici = data.toString().split('\n');
        for (let i = 0; i < sviKorisnici.length; ++i) {
            let info = sviKorisnici[i].split(",");
            let tempuser = info[0];
            let temppass = info[1];
            if (username == tempuser && password == temppass) {
                pamti = true;
                break;
            }
        }
        if (pamti) res.send(true);
        else res.send(false);
    });
});

// vraca json objekata iz igravrijeme
// sluzi za prikaz rang liste
app.get('/dajJsonIgre', (req, res) => {
    fs.readFile(path.join(__dirname + '/igravrijeme.csv'), (err, contents) => {
        if (err) {
            res.writeHead(504, {
                'Content-Type': 'application/json'
            });
            throw err;
        }
        let spisakLjudi = contents.toString().split("\n");
        let nizObjekata = [];
        for (let i = 0; i < spisakLjudi.length; ++i) {
            let parametri = spisakLjudi[i].split(",");
            let objekat = {
                korisnik: parametri[0],
                soba1: parametri[1],
                soba2: parametri[2],
                soba3: parametri[3],
                soba4: parametri[4]
            };
            nizObjekata.push(objekat);
        }
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(nizObjekata));
    });
});


app.listen(9000, () => {
    console.log("Slušam 9000 port!");
});