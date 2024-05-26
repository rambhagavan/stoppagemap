// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const gpsData = [
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9294916,
        "longitude": 74.9173533,
        "speed": 0,
        "odometer_reading": 750424,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716229815000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.92936,
        "longitude": 74.91744,
        "speed": 0,
        "odometer_reading": 750429,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262019000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9292766,
        "longitude": 74.9175266,
        "speed": 8,
        "odometer_reading": 750452,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262166000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9290049,
        "longitude": 74.9177016,
        "speed": 7,
        "odometer_reading": 750488,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262183000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9289483,
        "longitude": 74.9177,
        "speed": 8,
        "odometer_reading": 750492,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262186000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.928745,
        "longitude": 74.9176766,
        "speed": 8,
        "odometer_reading": 750515,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262195000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9287266,
        "longitude": 74.9176866,
        "speed": 7,
        "odometer_reading": 750519,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262196000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9287149,
        "longitude": 74.9176983,
        "speed": 6,
        "odometer_reading": 750523,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262197000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9287066,
        "longitude": 74.9177133,
        "speed": 7,
        "odometer_reading": 750523,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262198000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9287433,
        "longitude": 74.9177916,
        "speed": 6,
        "odometer_reading": 750532,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262208000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9287583,
        "longitude": 74.9178,
        "speed": 7,
        "odometer_reading": 750532,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262209000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9288016,
        "longitude": 74.9178133,
        "speed": 10,
        "odometer_reading": 750539,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262211000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.92934,
        "longitude": 74.9179483,
        "speed": 21,
        "odometer_reading": 750601,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262223000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9293766,
        "longitude": 74.9179533,
        "speed": 22,
        "odometer_reading": 750604,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262224000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.92942,
        "longitude": 74.9179583,
        "speed": 23,
        "odometer_reading": 750607,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262225000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9294466,
        "longitude": 74.91796,
        "speed": 24,
        "odometer_reading": 750609,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262226000
    },
    {
        "EquipmentId": "EQPT-4",
        "latitude": 12.9294783,
        "longitude": 74.9179616,
        "speed": 25,
        "odometer_reading": 750612,
        "eventDate": 1716229800000,
        "eventGeneratedTime": 1716262227000
    }

]
  

app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/api/gps-data', (req, res) => {
  res.json(gpsData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
