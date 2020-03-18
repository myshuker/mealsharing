window.handleHomeRequest = () => {
  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      //console.log(meals[1].title);
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
  <div id="text-header">
  <img id="icon" src="https://media-exp1.licdn.com/dms/image/C560BAQG2xNZ1fk_ekg/company-logo_200_200/0?e=2159024400&v=beta&t=NbL6ai_FU3N1Z__fTAvLpSrXNnDIaop4UzHi124kVrs" alt="icon">
      <h1>Feeling hungry?</h1>
      <h1>Join us with Meal Sharing Page</h1>
      </div>
<hr>
         
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
<hr>

<div class="container">
  <div id="search_bar">
      <input type="search" placeholder="Search ..." >
      <button id="searchBtn" type="submit">Search</button>
  </div>  
  <br>

<h2>Welcom with you in our food site</h2>
<h4>Discover home cooking  </h4>

<div id="db_meals">
    ${meals.map(meal => {
    return `
        <div id="all-meals">               
              <ul >
              <li id="li-meal">
              <div>  <a href="meal/${meal.id}" >${meal.title} </a> </div>
             <div> <img src= "https://source.unsplash.com/200x200?${meal.title}"  alt="${meal.title}"></div>
             <div>   ${meal.price}DKK </div>
             </li>
             </ul>
        </div>
      `
     }).join('')}
      
</div>
</div>
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
})
// if any links are added to the dom, use this function
// make the router handle those links.
router.updatePageLinks();
};


