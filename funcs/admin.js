const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./dist/db.json')
const db = low(adapter)

function Admin(app){
    
    app.get('/admin/addMember/', function(req, res) {
        let __std=db.get("std").value()
        res.render('admin',{std:__std});
    });

    app.get("/admin/results",(req,res)=>{
        let __res=db.get("result").value()
        res.render("resultAd",{res:__res})
    })
    app.get("/api/results",(req,res)=>{
        let __res=db.get("result").value()
        res.json(__res)
    })
    app.post("/api/results",(req,res)=>{
        //console.log(req.body);
        db.get("result").push(req.body).write()
        res.json("sucess")
    })



    app.post('/admin/addMember', function(req, res) {
        console.log(res.body);
        if(db.get("std").find({adno:req.body.adno}).value()){
            res.send("already Exist")
        }else{
            
            db.get("std").push(req.body).write()
            res.send("Set");
        }
        
    });
    
    app.post('/Pic', function(req, res) {
        console.log(req.body);
        let Pics=[
                db.get("std").find({adno:req.body.f.adno}).value(),
                db.get("std").find({adno:req.body.s.adno}).value(),
                db.get("std").find({adno:req.body.t.adno}).value()
            ]
        
        
        res.json(Pics);
    });
}

exports.Admin=Admin