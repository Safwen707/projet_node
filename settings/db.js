const mongoose = require('mongoose')
const linkDatabase = () => {
    
         mongoose.connect('mongodb://localhost:27017/db')
         .then(
            ()=>{
                console.log(`MongoDB Connected : `)

            }
        )
         .catch (
            (err)=>
                {console.log(err)

                }
        ) 
        
        
        
}


/*const linkDatabase = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/db') 
        console.log(`MongoDB Connected: ${connect.connection.host}`)
        } catch (error) {
        console.log(error)
        
        }
}*/
module.exports = linkDatabase