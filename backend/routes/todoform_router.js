var express = require('express');
var router = express.Router();
var Task = require('../module/todoForm');

router.get('/', function (req, res, next) {

    Task.getTodo(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:id?', function(req, res, next) {

    Task.getTodoById(req.params.id, function(err, rows)
    {  
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
    
    }); 
    

router.post('/',function(req,res,next){
console.log(req.body);
    Task.addTodo(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});


router.delete('/:id',function(req,res,next)
{
    Task.deleteTodo(req.params.id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:id', function (req, res, next) {

    Task.editTodo(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;