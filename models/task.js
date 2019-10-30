const mongoose = require('mongoose');
const {Schema} = mongoose;

const TasksSchema = new Schema({
    cuatri:{type: String, required: true},
    
    fecha_soli:{type: String, required: true},
    fecha_entre:{type: String, required: true},

    tiempo:{type: String, required: true},
    precio:{type: String, required: true},
    servicio:{type: String, required: true},
    finan:{type: String, required: true},
    resul:{type: String, required: true}
});

module.exports = mongoose.model('Task', TasksSchema);