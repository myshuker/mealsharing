
const express = require("express");
const app = express();
const router = express.Router();

const db = require("./../database");

router.get("/", (req, res) => {
  const query = db.query("select * from meals", function(err, results) {
    if (err) {
      res.status(404).json({
        msg: "Check Query",
        Query: query.sql
      });
    }
    console.log("Query :", query.sql);
    res.send(results);
  });
})

router.get('/:id', (req,res) =>{
  const{id} =req.params
    db.query("select * from meals where id = ?",id, function(err, results) {
      if (err) {
          console.error(err);
          throw new Error('Internal Error')
      }
      res.json(results[0]);
    });
  })
  
router.post('/',(req,res)=> {
  // const {title,description,location,meal_when,max_reservation,price,created_date} = req.body
  //  or this:
  const postData = req.body  
  // if(!title || !description || !location || !meal_when || !max_reservation || !price || !created_date) throw new Error('Inconsistent data')
    db.query("INSERT INTO meals SET ?", postData, function(err, results) {
      if (err) {
          console.error(err);
          throw new Error('Internal Error')
      }
      res.json(results);
      // res.json({createdId : results.insertId});
    });
  })
  
  router.put('/:id',(req,res)=> {
    // const id =req.params
    const {id,title,description,location,meal_when,max_reservation,price,created_date} = req.body    
    // if(!title || !description || !location || !meal_when || !max_reservation || !price || !created_date) throw new Error('Inconsistent data')
    db.query("UPDATE meals SET ? where id =? ",[{title,description,location,meal_when,max_reservation,price,created_date},id], function(err, results) {
        if (err) {
            console.error(err);
            throw new Error('Internal Error')
        }
        db.query("select * from meals where id = ?",id, function(err, results) {
          if (err) {
              console.error(err);
              throw new Error('Internal Error')
          }
          res.json(results);
        });
      });
    })
  
router.delete('/:id', (req,res) =>{
  const{id} =req.params
    db.query("delete from meals where id = ?",id, function(err, results) {
      if (err) {
          console.error(err);
          throw new Error('Internal Error')
      }
      // res.json({createdId : results.insertId});
      // console.log(results);
      // res.json(results);
      if(results.affectedRows===1){
        res.send({results: `Deleted object with id ${id}`})
      } else {
        res.send({results: 'Object not found'})
      }
    });
  })

module.exports = router;

