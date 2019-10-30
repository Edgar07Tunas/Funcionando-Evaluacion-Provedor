const express = require('express');
const router = express.Router();

 const Task = require('../models/task')

 router.get('/', async (req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
 });
 
 router.get('/:id', async (req,res)=>{
     const task = await Task.findById(req.params.id);
     res.json(task);
 });
 
 router.post('/', async (req,res)=>{
     const {cuatri,fecha_soli,fecha_entre,tiempo,precio,servicio,
            finan,resul}= req.body;
     const tasks = new Task({cuatri,fecha_soli,fecha_entre,tiempo,precio,servicio,
        finan,resul});
     await tasks.save();
     res.json({status:'Tarea Guardada'});
 });
 
 router.put('/:id', async (req, res)=>{
     const {cuatri,fecha_soli,fecha_entre,tiempo,precio,servicio,
        finan,resul} = req.body;
     const newTask ={cuatri,fecha_soli,fecha_entre,tiempo,precio,servicio,
        finan,resul};
     await Task.findByIdAndUpdate(req.params.id, newTask);
     res.json({status:'Orden Actualizada'});
 });
 
 router.delete('/:id', async (req, res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Orden Eliminada'})
 });

module.exports = router;