const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const linkDatabase = require('./settings/db')
const expense=require("./routes/expense")
dotenv.config()
const app = express()
app.use(express.json());// chay7li ri9I
const port = 1007;
const User=require("./models/expense")
filename="" //bech nsajl esm l file fel bd;
const multer =require('multer'); // importation de multer (bib necessair pour upload image)
//configuration
const mystorag=multer.diskStorage(/*ya5ou objet (3andou 2 att) en parametre*/{
    destination:'./uploads',
    /*fonction a 3 parametre */
    filename:(req,file,redirect)=>{
        let date =Date.now();
        let fl = date+"."+file.mimetype.split('/')[1] /* /image/png */ 
        redirect(null,fl)
        filename= fl ; //bech nsajl esm l file fel bd
      }
})
                       


app.get('/', (req, res) => {
 res.json('running!!')
 })

//app.use('/expense/v1',expense)
app.post('/expense/v1',(req, res) => {
    data= req.body;
    console.log(data);
    usr= new User(data);
    usr.save()
        .then(
            (savedU)=>res.send(savedU)
        )
        .catch(
            (err)=>{
                res.send(err)
            }

        )

        
    });

    app.get('/getall',(req,res)=>{
        console.log('get  work')
        User.find()
        .then(
            (tab)=>{
                res.send(tab);//tab3ath res lel partie front
            }

        )
        .catch(
            (err)=>{
                res.send(err);//tab3ath erreur lel partie front
            }
            
        )


    });
     
    app.get('/getbyid/:id',(req,res)=>{
        myid=req.params.id;
        User.findOne({_id:myid})
        .then(
            (tab)=>{
                res.send(tab);
                console.log(tab)
            }
        )

        
        .catch(
            (err)=>{
                res.send(err);
            }
        )

    })

    app.get('/getbyDay/:day',(req,res)=>{
        Day=req.params.day;
        User.findOne({day:Day})
        .then(
            (tab)=>{
                res.send(tab);
                console.log(tab)
            }
        )

        
        .catch(
            (err)=>{
                res.send(err);
            }
        )

    })

    app.delete('/delete/:id',(req,res)=>{
        myid=req.params.id;
        User.findOneAndDelete({_id:myid})
        .then(
            (deleted)=>{
                console.log(deleted);
                res.send(deleted);
                
            }
        )

        
        .catch(
            (err)=>{
                res.send(err);
            }
        )


    })


    app.put('/update/:id',(req,res)=>{
        myid=req.params.id;
        newData=req.body;
        User.findOneAndUpdate({_id:myid},newData)
        .then(
            (updated)=>{
                console.log(updated);
                res.send(updated);
                
            }
        )

        
        .catch(
            (err)=>{
                res.send(err);
            }
        )


    })






 linkDatabase();
 
 app.listen(port, () => {
 console.log(`Nodejs connect with mongodb is listening to port ${port}`)
})