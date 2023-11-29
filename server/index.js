// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const EmployeeModel = require('./models/Employee')

// const app = express()
// app.use(express.json())
// app.use(cors())

// // mongoose.connect("mongodb://127.0.0.1:27017/employee")
// mongoose.connect("mongodb+srv://hemumani73:sIcAvRZCliyMj7Yi@cluster0.4wd1kim.mongodb.net/employee")
// // ,{
// //     useNewUrlParser : true,
// //     useUnifiedTopology : true.

// // })
// // .then(()=>{console.log("Connection success")})
// // .catch((error)=>{console.log("Connection failed")})

// app.post('/register',(req,res)=>{
//     console.log('Received data:',req.body)
//     EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err=>res.json(err))
// })
// app.post('/login',(req,res)=>{
//     const {email, password} = req.body;
//     EmployeeModel.findOne({email:email})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json("Login Success")
//             }
//             else{
//                 res.json('Password is incorrect!')
//             }
//         }
//         else{
//             res.json('No record existed!')
//         }
//     })
// })

// app.listen(3001,()=>{
//     console.log("server is running")
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json())


// const pass = 'sIcAvRZCliyMj7Yi'
//Schema
const schemaData = mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, {
    timestamps: true
})

const userModel = mongoose.model("employees", schemaData)





const PORT = process.env.PORT || 8080


//read
// "http://localhost:8080/"
app.get("/", async (req, res) => {
    const data = await userModel.find({})
    res.json({ success: true, data: data })
})

//create data || save data in mongodb
// "http://localhost:8080/create"
// {
//     name, 
//     email, 
//     password
// }
app.post("/create", async (req, res) => {
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({ success: true, message: "data save successfully", data: data })
})

//update data
// "http://localhost:8080/update"
// {
//     id:"",
//     name:"", 
//     email:"", 
//     password:""
// }
app.put("/update", async (req, res) => {
    console.log(req.body)
    const { _id, ...rest } = req.body
    console.log(rest)
    // const updateUser = await userModel.findByIdAndUpdate(id, rest)
    const data = await userModel.updateOne({ _id: _id }, rest)
    res.send({ success: true, message: "data updated sccessfully", data: data })
})

//delete api
// "http://localhost:8080/delete/id"
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "data deleted sccessfully", data: data })
})


mongoose.connect("mongodb+srv://hemumani73:sIcAvRZCliyMj7Yi@cluster0.4wd1kim.mongodb.net/employee")
    .then(() => {
        console.log("Connect to DB")
        app.listen(PORT, () => console.log("Server is Running"))
    })
    .catch((err) => console.log(err))
