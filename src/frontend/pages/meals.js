// Delete meal

// Note: I don't want to activate delete meal to avoid anyone delete files from heroku
/* 
const deleteMeal = (id) => {  
  console.log('deleteMeal', id);
  fetch (`/api/meals/${id}`, {
    method: 'DELETE' 
  })
  .then(res => res.json())
  .then (results => {
    console.log(results);
  })
} */

// add new meal 
const insertMeal = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const max_reservation = document.getElementById("max_reservation").value;
  const price = document.getElementById("price").value;
  

  console.log('Meal inserted :' , title, description, location, max_reservation, price);
    fetch (`/api/meals/`, {
    method: 'POST' , headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title,
      description,
      location,
      max_reservation,
      price
    
    })
  })
  .then(res => res.json())
  .then (results => {
    console.log('you have add: ', results);    
  })
}


window.handleMealsRequest = () => {
    fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      console.log(meals);

  document.body.innerHTML = `

 <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meal Sharing Page</title>   
    </head>
  
   <body>
    <header>
        <h1>Meal list</h1>
    <div >
        <nav  >
          <ul id="navigation_menu">
          <li><a href="home" data-navigo> Home </a></li>
          <li><a href="meals" data-navigo> Meals </a></li>      
          <li><a href="aboutUs" data-navigo> About us </a> </li>
          <li><a href="contactUs" data-navigo>Contact us</a></li>
          </ul>      
        </nav>
    </div>
  </header>
  <div id="container">
          <div id='allMealList'>
            <ul>
            ${meals.map(meal => {
            return `
            <div>
                <li  id="meal_list">                    
                  ${meal.title} for ${meal.price} DKK              
                   <button id="deleteBtn" onClick="deleteMeal(${meal.id})"> Delete </button> 
                <a id="updateInfo" href ='meal/${meal.id}'> Update info </a> 

                </li>
            </div>
                `;
              }).join('')}
              
          </ul>
            </div>

    
              <div >
              <form id="new_meal">
                  <h2> Create new meal </h2>
                  
                      <label for="title"> Title : </label>
                        <input type="text" id="title" name="title">
                        
                      <label for="description"> Description : </label>
                        <input type="text" id="description" name="description">
                        
                      <label for="location"> Location: </label>
                        <input type="text" id="location" name="location">
                    
                      <label for="max_reservation"> max_reservation : </label>
                        <input type="number" id="max_reservation" name="max_reservation" min="1"  max="10" step="1">
                        
                      <label for="price"> Price : </label>
                        <input type="number" id="price" name="price" min="1"  max="499" step="1">                    

                  <button id="createBtn" onClick ="insertMeal()"> Create </button>
                  </form>
              </div>
</div >

<hr>
<footer>
    
      <div class="about_us">
          <h3>FIND US</h3>  <br>
          <div class="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5352.994411057106!2d12.539566113974336!3d55.66017617835857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x352c940085c22f73!2sDISIE%20(Danish%20Institute%20for%20Sustainable%20Innovation%20%26%20Entrepreneurship)!5e0!3m2!1sen!2sdk!4v1571353744504!5m2!1sen!2sdk"  frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div> 
      </div>   
          <div> 
              <p> We Open </p> 
              <p>M-Th: 7am-4pm</p>
              <p>Fri-Sat: 9am-8pm</p>  
          </div> 
        
      <div class="footer_menu">
              <h3>NAVIGATION</h3>
              <ul>
              <li><a href="home" data-navigo> Home </a></li>
              <li><a href="meals" data-navigo> Meals </a></li>      
              <li><a href="aboutUs" data-navigo> About us </a> </li>
              <li><a href="contactUs" data-navigo>Contact us</a></li>
              </ul>
      </div>      
             
  </footer>   

  <div>
  <p>© 2020 Copenhagen</p>
  <p> Email : mealsharing@gmail.com <p>
  </div>

</body>
    </html>
`;
});
}
