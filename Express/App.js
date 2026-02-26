// const express = require('express');
// //import express from 'express';  /* Both means same */

// const app = express();
// const port = 8080;


// /* 
// Use app.get to read in express
// */
// /* app.get('/', (req, res) =>{
//     res.send('This is My First Server Using Express');
// });

// app.get('/about', (req, res) =>{
//     res.send('<h1>This is About Page</h1>');
// });

// app.get('/image', (req, res) => {
//     res.send('<img src = "https://www.shutterstock.com/image-vector/panda-teddy-bear-bamboo-illustration-600nw-2409126125.jpg" height = 100px, width = 100px></img>')
// }) */

// app.get('/',(req, res) => {
//     res.send('<h1>ABES Engineering College</h1><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmk1PHONqzC5xU2IbX-SA-zaKv7ND-69Dtg&s" height = 100px, width = 100px></img>');
// })

// app.listen(port, () => {
//     console.log(`Server is Running at http://localhost:${port}`);
// })


const express = require('express');
const app = express();
const port = 8080;

//Database of JSON
const datas = [
    {
        id: 1,
        Name: "abc",
        Course: "B-Tech"
    },
    {
        id: 2,
        Name: "xyz",
        Course: "MBA"
    }
]

// Data Read
app.get('/read', (req, res) => {
    try{
        res.status(200).json({message: "Show All Data", data: datas});
    } catch(err){
        res.status(500).json({message: "Data Not Found", error: err.message})
    }
})

//Data Read By Id
// This Process is Known as Params
app.get('/about/:id', (req, res) => {
    try{
        const id = req.params.id;
        const data = datas.find(item => item.id == id);
        if (!data){
            res.status(404).json({message: "Data Not Fount", d : datas});
        } else {
            res.status(200).json({message: "Data Found", data});
        }
    } catch(err) {
        res.status(500).json({message: "Data Not Fount", error: err.message});
    }
})

//To Create Data app.post Method is used
//Data Created
app.use(express.json());
app.post('/create', (req, res) => {
    try{
        const newData ={
            id: datas.length + 1,
            ...req.body
        }
        datas.push(newData);
        res.status(200).json({message: "Data Added", newData});
    } catch(err){
        res.status(500).json({message: "Data Not Fount", error: err.message});
    }
})

//To Update Data app.put Method is Used
//Data Update
app.put('/update/:id', (req, res) => {
    try{
        const id = req.params.id;
        const data = datas.findIndex(item => item.id == id);
        if (data === -1){
            return res.status(404).json({message: "Data Not Found"})
        }
        datas[data] = {
            ...datas[data],
            ...req.body
        }
        res.status(200).json({message: "Data Updated", d: datas[data]});   
    } catch (err){
        res.status(500).json({message: "Data Not Found", error: err.message});
    }
})

//To Delete Data app.delete Method is Used
//Data Delete
app.delete('/delete/:id', (req, res) => {
    try{
        const id = req.params.id;
        const data = datas.find(item => item.id == id);
        if (data == -1){
            return res.status(404).json({message: "Data Not Found"});
        }
        datas.splice(data, 1);
        res.status(200).json({message: "Data Deleted", data});
    } catch(err){
        res.status(500).json({message: "Data Not Found", error: err.message});
    }
})

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`);
});