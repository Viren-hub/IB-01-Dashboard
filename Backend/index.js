const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dashboard',
    port: 3306
})

// check connection

db.connect(err => {
    if (err) { console.log(err); } else {
        console.log("connected")
    }
})




//fetch data from server
//here "ppc" is the table name which is in databse
app.get('/Ppc/:P_id', (req, res) => {
    let uid = req.params.P_id;
    let qr = `SELECT * FROM Ppc where P_id=${uid}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all PPC Data",
                data: result
            })
        }
    })
});


app.get('/Ppc', (req, res) => {
    // let uid = req.params.P_id;
    let qr = `SELECT * FROM Ppc`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all PPC Data",
                data: result
            })
        }
    })
});

//fetch data from server
//here "internship" is the table name which is in databse
app.get('/internship', (req, res) => {
    let qr = ' SELECT * FROM internship';
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Internship Data",
                data: result
            })
        }
    })
});

app.get('/logicbuilding', (req, res) => {
    let qr = ' SELECT * FROM logicbuilding';
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Logic Building Data",
                data: result
            })
        }
    })
});





//fetch data from server
//here "rawdata" is the table name which is in databse
app.get('/Rawdata/:id', (req, res) => {
    let id = req.params.id;
    let qr = `SELECT * FROM Rawdata where id=${id}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Rawdata Data",
                data: result
            })
        }
    })
});
//post Data


app.listen(3001, () => {
    console.log("server listen on port 3001")
})

app.post('/internship', (req, res) => {
    console.log(req.body, "created Data");
    let ID = req.body.ID;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Mobile = req.body.Mobile;
    let Pending_fees = req.body.Pending_fees;
    let Paid_fees = req.body.Paid_fees;


    let qr = `insert into internship(ID,Name,Email,Mobile,Pending_fees, Paid_fees)
                values('${ID}','${Name}','${Email}','${Mobile}','${Pending_fees}','${Paid_fees}') `

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.send({
                massage: 'Data Insertd'
            })

        } else {
            res.send({
                massage: 'wrong...'
            })
        }
    })
})


//post Data PPC


app.listen(3000, () => {
    console.log("server listen on port 3000")
})

app.post('/ppc', (req, res) => {
    console.log(req.body, "created Data");
    let P_Id = req.body.P_Id;
    let P_Name = req.body.P_Name;
    let P_Email = req.body.P_Email;
    let P_Mobile = req.body.P_Mobile;
    let P_PendingFees = req.body.P_PendingFees;
    let P_PaidFees = req.body.P_PaidFees;


    let qr = `insert into ppc(P_Id,P_Name,P_Email,P_Mobile,P_PendingFees, P_PaidFees)
                values('${P_Id}','${P_Name}','${P_Email}','${P_Mobile}','${P_PendingFees}','${P_PaidFees}') `

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.send({
                massage: 'Data Insertd'
            })

        } else {
            res.send({
                massage: 'wrong...'
            })
        }
    })
})



//post Data Logic_Building

app.listen(3002, () => {
    console.log("server listen on port 3002")
})

app.post('/logicbuilding', (req, res) => {
    console.log(req.body, "created Data");
    let Id = req.body.Id;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Mob = req.body.Mob;
    let PendingFees = req.body.PendingFees;
    let Paidfees = req.body.Paidfees;


    let qr = `insert into logicbuilding(Id,Name,Email,Mob,PendingFees, Paidfees)
                values('${Id}','${Name}','${Email}','${Mob}','${PendingFees}','${Paidfees}') `

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.send({
                massage: 'Data Insertd'
            })

        } else {
            res.send({
                massage: 'wrong...'
            })
        }
    })
})