const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) =>{
    res.json({mensaje:"Hola desde el servidor"});
});

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});


