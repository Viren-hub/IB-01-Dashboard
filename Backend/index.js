const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyparser.json());

let alert=require('alert');


//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Dashboard',
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

app.get('/ppc/:P_Id', (req, res) => {
    let uid = req.params.P_Id;
    let qr = `SELECT * FROM ppc where P_Id=${uid}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all PPC Data",
                data: result
            })
        }
    })
});


app.get('/ppc', (req, res) => {
    // let uid = req.params.P_id;
    let qr = `SELECT * FROM ppc`;
    
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

app.get('/logic_building', (req, res) => {
    let qr = ' SELECT * FROM logic_building';
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

//post Data of Internship



app.post('/internship', (req, res) => {
    console.log(req.body, "created Data");
    let ID = req.body.ID;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Mobile = req.body.Mobile;
    let Pending_Fees = req.body.Pending_Fees;
    let Paid_Fees = req.body.Paid_Fees;


    let qr = `insert into internship(ID,Name,Email,Mobile,Pending_Fees, Paid_Fees)
                values('${ID}','${Name}','${Email}','${Mobile}','${Pending_Fees}','${Paid_Fees}') `

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
        server.close()
    })
})


//***************************************************************************************************************************
//   Aniket's updation

// PPC update data
app.post('/ppc/:id', (req, res) => {
    let id = req.params.id;
    
    let P_Name = req.body.name;
    let P_Email = req.body.email;
    let P_Mobile = req.body.mobile;
    let P_PendingFees = req.body.pending_fees;
    let P_PaidFees = req.body.paid_fees;
    
    let qr = `update ppc set P_Name='${P_Name}',P_Email='${P_Email}',P_Mobile='${P_Mobile}',P_PendingFees='${P_PendingFees}',
    P_PaidFees='${P_PaidFees}' where P_Id=${id}`;
    
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            alert(`Your Data of ID ${id} updated Successfully..!`)
            res.send({
                message: 'Data updated'
            
            })
        }
         else {
            res.send({
                message: 'wrong...'
            })
        }
    })
})

// Logic Building Update Data

app.get('/logic_building/:P_Id', (req, res) => {
    let uid = req.params.P_Id;
    let qr = `SELECT * FROM logic_building where Id=${uid}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all LB Data",
                data: result
            })
        }
    })
});


app.post('/logic_building/:id', (req, res) => {
    let id = req.params.id;
    
    let P_Name = req.body.name;
    let P_Email = req.body.email;
    let P_Mobile = req.body.mobile;
    let P_PendingFees = req.body.pending_fees;
    let P_PaidFees = req.body.paid_fees;
    
    let qr = `update logic_building set Name='${P_Name}',Email='${P_Email}',Mob='${P_Mobile}',
    PendingFees='${P_PendingFees}',Paidfees='${P_PaidFees}'
     where Id=${id}`;
    
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            alert(`Your Data of ID ${id} updated Successfully..!`)
            res.send({
                message: 'Data updated'
            
            })
        }
         else {
            res.send({
                message: 'wrong...'
            })
        }
    })
})

// Internship Update Data

app.get('/internship/:P_Id', (req, res) => {
    let uid = req.params.P_Id;
    let qr = `SELECT * FROM internship where Id=${uid}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Internship Data",
                data: result
            })
        }
    })
});

app.post('/internship/:id', (req, res) => {
    let id = req.params.id;
    
    let P_Name = req.body.name;
    let P_Email = req.body.email;
    let P_Mobile = req.body.mobile;
    let P_PendingFees = req.body.pending_fees;
    let P_PaidFees = req.body.paid_fees;
    
    let qr = `update internship set Name='${P_Name}',Email='${P_Email}',Mobile='${P_Mobile}',
    Pending_Fees='${P_PendingFees}',Paid_Fees='${P_PaidFees}'
     where Id=${id}`;
    
    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result) {
            alert(`Your Data of ID ${id} updated Successfully..!`)
            res.send({
                message: 'Data updated'
            
            })
        }
         else {
            res.send({
                message: 'wrong...'
            })
        }
    })
})

//***************************************************************************************************************************

//post Data PPC

app.post('/ppc/post', (req, res) => {
    
    let P_Id = req.body.P_Id;
    let P_Name = req.body.P_Name;
    let P_Email = req.body.P_Email;
    let P_Mobile = req.body.P_Mobile;
    let P_PendingFees = req.body.P_PendingFees;
    let P_PaidFees = req.body.P_PaidFees;
    let P_Image = req.body.P_Image;

    let qr = `insert into ppc(P_Id,P_Name,P_Email,P_Mobile,P_PendingFees, P_PaidFees,P_Image)
                values('${P_Id}','${P_Name}','${P_Email}','${P_Mobile}','${P_PendingFees}','${P_PaidFees}','${P_Image}')) `


    db.query(qr, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.send({
                massage: 'Data Inserted'
            })

        } else {
            res.send({
                massage: 'wrong...'
            })
        }
        server.close()
    })
})


//post Data Logic_Building

app.post('/logic_building', (req, res) => {

    let Id = req.body.Id;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Mob = req.body.Mob;
    let PendingFees = req.body.PendingFees;
    let Paidfees = req.body.Paidfees;


    let qr = `insert into logic_building(Id,Name,Email,Mob,PendingFees, Paidfees)
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
        server.close()
    })
})

app.listen(3000, () => {
    console.log("server listen on port 3000")
})