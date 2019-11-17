require('../src//db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5dcff6fa2b10f71c308926bb').then((task)=>{
   console.log(task)
    return Task.countDocuments({completed:false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})