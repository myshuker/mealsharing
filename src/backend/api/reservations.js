const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

// Get all reservations
router.route("/")
.get((request, response) => {
  const query = pool.query("SELECT * FROM reservations", (error, results, fields) => {
      if (error) {
        response.status(404).json({
          msg: "Check Query",
          Query: query.sql
        });
      }
      console.log("Query :", query.sql);
      response.send(results);
    }
  );
})
 // insert new reservations
  .post((request, response) => {   
    const {number_of_guests, meal_id, location, created_date} = request.body;
    const reservation = {
        number_of_guests: number_of_guests,
        meal_id: meal_id,
        created_date: created_date      
    };
    const query = pool.query("INSERT INTO reservations SET ?", reservation,(error, results, fields) => {
        if (error) {
          response.status(404).json({
            msg: "There are error please check Query",
            Query: query.sql
          });
        }
        console.log("Query :", query.sql);
        response.status(201).json(results);
      }
    );
  });
   // Get one reservation with id
router.route("/:id")
      .get((request, response) => {
        const {id} = request.params;
        const query = pool.query("SELECT * FROM reservations where id = ?", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.json(results);
          }
        );
      })
      // update reservations
      .put((request, response) => {
        const id = request.params.id;
       const {number_of_guests, meal_id, location, created_date} = request.body;
        const query = pool.query("UPDATE reservations SET ?  WHERE id = ? ", [{number_of_guests, meal_id, location, created_date},id],(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` reservation with id : ${id} Updated` );
          }
        );
      })
  // Delete one reservation with id
      .delete((request, response) => {
        const id = request.params.id;
        const query = pool.query("DELETE FROM reservations WHERE id =?", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` reservation with id : ${id} Removed` );
          }
        );
      })


module.exports = router;
