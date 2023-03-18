import fs from "fs";
import express from "express";
import * as dotenv from "dotenv";
dotenv.config()

let app = express()
let PORT = process.env.PORT
let heading = new Date()
let dates = heading.getDate()
let hours = heading.getHours()
let minutes = heading.getMinutes()
app.post("/file", function(request, response){
  const date = new Date()
  const stamp = Date.now()

  const name = date.toString().split("")
  const data = stamp.toString()
  let fileName = `${dates}-${hours}-${minutes}`
  console.log(fileName)
  fs.writeFile(`./fileSystem/${fileName}.text`,data,(err)=>{
    console.log(err)
  })
  response.send("DONE")
})

app.get("/getData/:fileName", function(request, response){
  const {fileName} = request.params
  fs.readFile(`./fileSystem/${fileName}.text`,"utf-8",(err, data)=>{
    response.send(data)
  })
  
})
app.listen(PORT)