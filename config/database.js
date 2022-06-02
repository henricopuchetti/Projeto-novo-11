const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:boschiero@fiaptecnico.jm5sh.mongodb.net/todo_list')
}

module.exports = conn