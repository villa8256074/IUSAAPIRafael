const express = require('express');
const postdata = require('./postdatamodulerouter');

const routersIndex = express.Router();

routersIndex.get('/', async function (req, res, next) {
    try {
        res.render('index', { banners: await postdata.findmotos() });
    } catch (err) {
        console.error('Error al obtener los banners', err.message);
        next(err);
    }
});

routersIndex.post('/list/findmotos', async function (req, res, next) {
    let body = req.body;
    console.log(body);
    try {
        res.render('motos', { title: "Lista de motos", motos: await postdata.findmotos(body.name, body.phone, body.mail) });
    } catch (err) {
        console.error('Error al obtener los banners', err.message);
        next(err);
    }
});

routersIndex.post('/api/findmotos', async function (req, res, next) {
    let body = req.body;
    console.log(body);
    res.json({
        "ok": true,
        "usuario": body.name,
        "motos": await postdata.findmotos(body.name, body.phone, body.mail)
    });
});


module.exports = routersIndex;