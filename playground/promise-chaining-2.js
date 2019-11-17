require('../src//db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dcff6fa2b10f71c308926bb').then((task)=>{
//    console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
const deletetaskAndCount=async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})

    return count
}
deletetaskAndCount('5dcff7625b189e4278e85116').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(error)
})
