const express = require("express");
const router = express.Router();
const models = require("../models");
const helpers = require("../helpers/ctrl.helpers");
/* 
    EMPLOYEE CRUD ROUTES
*/
//Employee Get One
router.get("/employee/:id", (req, res) => {
    if (!req.params.id) {
        helpers.sendJsonError(res, "Must Provide a Valid ID", 400)
    }
    else {
        models.Employee.findById(req.params.id)
            .then(resp => {
                res.json(resp)
            })
            .catch(err => {
                helpers.sendJsonError(res, err.toString(), 404)
                console.error(err);
            })
    }

})
//Employee Get All
router.get("/employee", (req, res) => {
    models.Employee.findAll()
        .then(resp => {
            res.json(resp)
        })
        .catch(err => {
            helpers.sendJsonError(res, err.toString(), 400)
            console.error(err);
        })
})
//Employee Create
router.post("/employee", (req, res) => {
    const emp = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        jobTitle: req.body.jobTitle
    }
    if (emp.firstName && emp.lastName && emp.age && emp.jobTitle) {
        models.Employee.create(emp)
            .then(resp => {
                res.json(resp);
            })
            .catch(err => {
                helpers.sendJsonError(res, err.toString(), 400)
                console.error(err);
            })
    }
    else {
        helpers.sendJsonError(res, "Please provide a first name, last name, age, and job title property to create an employee", 400);
    }
})

//Employee Update
router.put("/employee/:id", (req, res) => {
    if (!req.params.id) {
        helpers.sendJsonError(res, "Must Provide a Valid ID", 400)
        return;
    }
    const emp = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        jobTitle: req.body.jobTitle
    }
    if (req.body.firstName && req.body.lastName && req.body.age && req.body.jobTitle) {
        models.Employee.update(emp, {
            where: {
                id: req.params.id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            helpers.sendJsonError(res, err.toString(), 400)
            console.error(err);
        })
    }
    else {
        helpers.sendJsonError(res, "Please provide a first name, last name, age, and job title property to create an employee", 400);
    }
});

//Employee Delete
router.delete("/employee/:id", (req, res) => {
    if (!req.params.id) {
        helpers.sendJsonError(res, "Must Provide a Valid ID", 400)

    } else {
        models.Employee.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(err => {
            helpers.sendJsonError(res, err.toString(), 400)
            console.error(err);
        })
    }

})

//Employee Update
router.delete("/employee/:id", (req, res) => {
    const emp = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        jobTitle: req.body.jobTitle
    }
    if (emp.firstName && emp.lastName && emp.age && emp.jobTitle) {
        models.Employee.create(emp)
            .then(resp => {
                res.json(resp);
            })
            .catch(err => {
                helpers.sendJsonError(res, err.toString(), 400)
                console.error(err);
            })
    }
    else {
        helpers.sendJsonError(res, "Please provide a first name, last name, age, and job title property to create an employee", 400);
    }
})

module.exports = router;