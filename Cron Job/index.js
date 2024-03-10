const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const app=express();
const cors = require('cors');
const moment=require('moment-timezone');

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("hii there am back with apis...");
})
app.listen(4040,()=>{
    console.log("Listening api is up and running");
})

// cron.schedule('* * * * *', (req,res) => {
//     console.log('running a task every minute',moment().format('DD MMM YYYY hh:mm:ss'));
//   });

// cron.schedule('*/10 * * * * *', (req,res) => {
//     console.log('running a task every 10 second',moment().format('DD MMM YYYY hh:mm:ss'));
//   });

//   cron.schedule('5-10 * * * * *', (req,res) => {
//     console.log('running a task every 5 to 10 second',moment().format('DD MMM YYYY hh:mm:ss'));
//   });

// cron.schedule('5,15,25,35 * * * * *', (req,res) => {
//     console.log('running a task every 5,15,25,35 second',moment().format('DD MMM YYYY hh:mm:ss'));
//   });

let task=cron.schedule('0 9 15 Aug *', (req,res) => {
    console.log('Happy Independence Day',moment().format('DD MMM YYYY hh:mm:ss'));
  }, {
    scheduled: false,
    timezone: "Asia/Kolkata"}
    );
//  task.start();


//  task.stop();