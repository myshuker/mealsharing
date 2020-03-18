
const addReview = id => {
  const title = document.getElementById("review_title").value;
  const description = document.getElementById("review_description").value;
  const stars = document.getElementById("stars").value;
  
 
    fetch(`/api/reviews/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        stars
      })
    })
    .then(res => res.json())
    .then (results => {
      console.log('you have add review: ', results);    
      alert(`Your review has been added. `);
      });
  };

window.handleMealRequest = params => {  
 
  fetch(`/api/meals/${params.id}`)
  .then(response => response.json())
  .then(meal => {
        // I'm not sure this because when I press order btn  nothing happen no error and no alert  
    
    const reserveMeal = (id) => {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone_number");
      console.log('Meal reversed :' , name, email, phone);
    

      //const orderBtn = document.getElementById('order-btn')
      // if(${meal.max_reservation} {})

        fetch(`/api/reservations/`, {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value,
            meal_id: id,
            phonenumber: phone.value,
            email: email.value
          })
        })
        .then(res => res.json())
        .then (results => {
                alert(`you have successfully made reservations for meal : ${meal.title} `);
    
        })
      }
    
  document.body.innerHTML = `

  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meal Sharing Page</title>   
    </head>
  
   <body>
    <header>
        <h1>About meal</h1>
   
        <div >
            <nav  >
              <ul id="navigation_menu">
              <li><a href="/" data-navigo> Home </a></li>
              <li><a href="/meals" data-navigo> Meals </a></li>      
              <li><a href="/aboutUs" data-navigo> About us </a> </li>
              <li><a href="/contactUs" data-navigo>Contact us</a></li>
              </ul>      
            </nav>
        </div>
      </header>

<div id="meal-container">        
        <div >               
               <h1>Meal info for : ${meal.title}</h1>
               <h3>   The price : ${meal.price} DKK  </h3> 
               <h3>    Description : ${meal.description}  </h3> 
               <h3>   max reservation : ${meal.max_reservation} </h3> 
               <div> <img id="img-meal" src= "https://source.unsplash.com/400x400?${meal.title}"  alt="${meal.title}"></div>
        </div>
        <div>
        <form  id="review-form" >
          <h2 >Add review for  ${meal.title} meal </h2>
          <label for="review_title"> Title : </label>
          <input id="review_title" type="text"  name="title"   required>
          <label for="review_description"> Description : </label>
          <textarea id="review_description"  placeholder="write your review here..." rows="8" cols= "25" name="description"   required ></textarea>
        
          <label for="star"> Stars : </label>
          <input id="stars" type="number"  name="star"  min="1"  max="5" step="1" required>  <br>
          <button type="submit" id="review-btn" onClick="addReview(${meal.id})})" >Send</button>
        </form>
        </div>   
 
</div>

<div>
          <form  id="order-form" >
            <h2 >Reservation order for a ${meal.title} meal </h2>
            <label for="name"> Name : </label>
            <input id="name" type="text"  name="name"  placeholder="Name" required>
            <label for="email"> Email : </label>
            <input id="email" type="email"  name="email"   placeholder="Email" required>
            <label for="phone_number"> PhoneNumber : </label>
            <input id="phone_number" type="text"  name="phone"  placeholder="PhoneNumber" required>
            <button type="submit" id="order-btn" onClick="reserveMeal(${meal.id})})" >Order</button>
       </form>
        </div>

    </body>
    </html>

  `;
  })
};
