const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

// Get all reviews
router.route("/")
.get((request, response) => {
  const query = pool.query("SELECT * FROM reviews", (error, results, fields) => {
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
 // insert new review
  .post((request, response) => {
    //  const meal = new meal(request.body)
    const {title, description, location, meal_when, max_reservation, price, created_date} = request.body;
    const review = {
      title: title,
      description: description,
      location: location,
      meal_when: meal_when,
      max_reservation: max_reservation,
      price: price,
      created_date: created_date
    };
    const query = pool.query("INSERT INTO reviews SET ?", review,(error, results, fields) => {
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
   // Get one review with id
router.route("/:id")
      .get((request, response) => {
        const id = request.params.id;
        const query = pool.query("SELECT * FROM reviews where id = ?", id,(error, results, fields) => {
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
      //Update reviews
      .put((request, response) => {
        const id = request.params.id;
        const {title, description, location, meal_when, max_reservation, price, created_date} = request.body;
        const query = pool.query("UPDATE reviews SET ?  WHERE id = ? ", [{title, description, location, meal_when, max_reservation, price, created_date},id],(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` review with id : ${id} Updated` );
          }
        );
      })
  // Delete one review with id
      .delete((request, response) => {
        const id = request.params.id;
        const query = pool.query("DELETE FROM reviews where id ?", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` review with id : ${id} Removed` );
          });
      })


module.exports = router;
