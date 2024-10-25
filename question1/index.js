const express=require("express")
const path =require("path")
const fs=require("fs")
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')))

 app.get("/",function(req,res){
    fs.readdir('./files',function(err,files){
        res.render("index",{files:files})
    })
    
 })
app.post("/create",function(req,res){
    const title = req.body.title.split(' ').join(''); // Remove spaces from title
    const filename = `${title}.txt`; // Correctly append the '.txt' extension

   fs.writeFile(`./files/${filename}`, req.body.detail, function(err){
    if (err) {
        console.error(err); // Log error if any occurs
        return res.status(500).send("Error writing file");
    }
    res.redirect("/");
   })
    console.log(req.body)
})
app.get("/profile/:username",function(req,res){
    res.send(`welcome ${req.params.username}`)
})
app.get("/file/:filename",function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf8",function(err,filedata){
        console.log(filedata)
        res.render("show",{filename:req.params.filename,filedata:filedata})
    })
    // res.send("file "+req.params.filename)
})


app.get("/profile/:username/:age",function(req,res){
    res.send(req.params)
})
app.listen(2000)