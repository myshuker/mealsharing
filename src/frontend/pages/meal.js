

const updateMeal = (id) => {
 const title = document.getElementById('meal-title').value
 const price = document.getElementById('meal-price').value
 const meal_when = document.getElementById('meal-meal_when').value
 const created_date = document.getElementById('meal-created_date').value
  console.log('updateMeal', id, title, price, meal_when, created_date);
  fetch (`/api/meals/${id}`, {
    method: 'PUT' ,
    body: {
      id,
      title,
      price,
      meal_when,
      created_date
    }
  })
  .then(res => res.json())
  .then (response => {
    console.log(response);
  })
}



window.handleMealRequest = params => {
  fetch(`/api/meals/${params.id}`)
  .then(response => response.json())
  .then(meal => {

  document.body.innerHTML = `
  
  <h1>Meal info for : ${meal.title}</h1>
<input value ="${meal.title}" id = 'meal-title'>
<input value ="${meal.price}"  id = 'meal-price'>
<input value ="${meal.meal_when}" id = 'meal-meal_when'>
<input value ="${meal.created_date}" id = 'meal-created_date'>
<button onClick = "updateMeal(${meal.id})">Save</button>

  `;

  })
};
