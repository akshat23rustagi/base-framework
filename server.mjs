import express from 'express';
import lib from './lib/hooks/router/fetchRoute';

const app = express();

lib(express);

const cb1 = (req, res, next) => {
    console.log('Inside here#1');
    res.send({
        success : true,
        message : 'Hello world',
        id : req.params.pid
    });
    res.end();
    next();
};

const cb2 = (req, res, next) => {
    console.log('Inside here#2');
    next();
};

app.get('/v1/product/:pid', [cb1, cb2], () => {
    console.log('Inside here#3');
});

app.listen(8095, () => {
    console.log('Server started on port 8095');
});