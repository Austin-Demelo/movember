const port = "4000"
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const cors = require("cors");
app.use(express.static("public"));
app.use(cors());
var router = express.Router();
const multer = require('multer')

const mysql = require("mysql")
const fs = require('fs')

// //file upload
// //npm install multer
// const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' +file.originalname)
//   }
// })

// const upload = multer({ storage: storage }).single('file')
// //end file upload

// const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, "./");},
//         filename: function(req,file,cb){
//             const ext = file.mimetype.split("/")[1];
//             cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
//         }
// })
// const upload = multer({
//     storage: storage
// })




var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movember'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected')
});


app.post('/getCompetitors', async(request, response)=>{
    
    try{
    await connection.query(`SELECT * FROM Competitors`, (err, result, field) =>{
        if (err) throw err;
        // map then  > console.log(result[0].MoustachePic)
        //read from file
        dataArray = []
        
        //  result.map((item, index) =>{
        //     let pa = fs.readFile(`images/${item.MoustachePic}`, 'utf8', (err, data)=>  new Promise(function(resolve){ 
        //         if(err){
        //             console.log(err)
        //             return
        //         }
                
        //         resolve(item.MoustachePic = data)
        //         }))//end promise
        //          dataArray.push(item)
        //         console.log(dataArray)
        //     });//end map
        // }
        
            // let myP = new Promise(function(resolve){
            //     resolve("nutsack")
             


        // }).then(s => {
        //     dataArray.push(item)
        // });

        // console.log(dataArray)
       

        response.send(result)
    })
    }catch(error){
        console.log(error)
    }
})
//`INSERT INTO Competitors('Competitor_ID', 'FirstName', 'LastName", 'MoustacheName', 'MoustachePic', 'TotalDonationsRaised')`

app.post('/logUserIn', async(request, response)=>{
    email = request.body.email
    await connection.query(`SELECT * FROM Competitors where email = '${email}'`, (err, result, field) =>{
        if (err) throw err;
        if(result.length > 0){
            console.log("user exists")
        }else{
            console.log("user doesn't exist")
        }
    
    })
})



//works just cna't figure out how ot insert
app.use("/uploads", async (req, res, next) => {
    const body = req.body;
    console.log("body")
    console.log(body)
    console.log("dsf")
    console.log(req.fileName)
    try {
        
        console.log(process.cwd())
        fs.writeFile(`images/${req.body.fileName}.txt`, body.myFile,(error) => {
            if(error) throw err;
            console.log("the file was saved")
        })
    ////   const newImage = await Post.create(body);
    ////   newImage.save();
    await connection.query(`INSERT INTO Competitors( FirstName, MoustacheName, MoustachePic, TotalDonationsRaised,  email, password) VALUES('austin', 'tickler','${req.body.fileName}.txt', '1000', 'ad@gmail.com', '1234');`
    , (err, result, field) =>{
        if (err) throw err;
        res.send(result)
    })
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  });

  

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
