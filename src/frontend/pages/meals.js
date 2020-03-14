const deleteMeal = (id) => {
  console.log('deleteMeal', id);
  fetch (`/api/meals/${id}`, {
    method: 'DELETE' 
  })
  .then(res => res.json())
  .then (response => {
    console.log(response);
  })
}


window.handleMealsRequest = () => {
  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      //console.log(meals[1].title);
      console.log(meals);
      document.body.innerHTML = `
  <h1>Meals</h1>
  <ol>
      ${meals.map(meal => {
       return `
         <li>
         ${meal.title} for ${meal.price} DKK  
         <a href ='meal/${meal.id}'>  Details for ${meal.title} </a>
         <button onClick="deleteMeal(${meal.id})"> Delete </button>

          <hr>       
        </li>
        `;
      }).join('')}
      </ol>
  `;
    })
    .catch(err => console.error(err));
 };

