const mysql = require("./db").db;

//getall data
getPersons = (req, res) => {
    const qrl = "select * from persons"
    mysql.query(qrl, (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(
                results
            )
        }
    })
}

// get 1 data

getPerson = (req, res) => {
    const id = req.params.id;
    const qrl = `select * from persons where id = ${id}`
    mysql.query(qrl, (err, results) => {
        if (err) { console.log(err) }
        else {
            res.send(results[0])
        }
    })
}
//  put data 

postPerson = (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const fatherName = req.body.fatherName;
    const sex = req.body.sex;
    const eduQua = req.body.eduQua;
    const mobile = req.body.mobile;
    const address = req.body.address;

    const qrl = `insert into persons (fName, lName, fatherName, sex, eduQua, mobile, address) values ('${fName}', '${lName}','${fatherName}', '${sex}', '${eduQua}', '${mobile}', '${address}')`;

    mysql.query(qrl, (err, results) => {
        if (err) { console.log(err) }
        else {
            res.send(results)
        }
    })
}
// delete data 
deletePerson = (req, res) => {
    const id = req.params.id;
    const qrl = `delete from persons where id = ${id}`;

    mysql.query(qrl, (err, results) => {
        if (err) throw err;
        res.send(results)
    })

}

// update data
putPerson = (req, res) => {
    const id = req.params.id;

    const fName = req.body.fName;
    const lName = req.body.lName;
    const fatherName = req.body.fatherName;
    const sex = req.body.sex;
    const eduQua = req.body.eduQua;
    const mobile = req.body.mobile;
    const address = req.body.address;

    const qrl = `update persons set fName='${fName}',lName='${lName}',fatherName='${fatherName}',sex='${sex}',eduQua='${eduQua}',mobile='${mobile}',address='${address}'`;
    mysql.query(qrl, (err, results) => {
        if (err) throw err;
        res.send(results[0])
    })
}


module.exports = { getPersons, getPerson, postPerson, deletePerson, putPerson }