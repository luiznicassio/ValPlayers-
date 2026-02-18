const express = require('express');
const app = express();
const PORT = 3000; 


app.get('/', (req,res)=>{

    res.send('servidor val playes rodando'); 
}); 

app.listen(PORT, ()=>{
    console.log(`server rodando link:http://localhost:${PORT}`)
})
