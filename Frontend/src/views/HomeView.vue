<template>
  <div>
   <div class="Container-fluid">
     <div class="front">
       <h1 class="home">Spring into Savings!</h1>
       <p class="homep1">Discover our Latest...</p>
       <p class="homeP"> Glam Collection</p>
       <img src="https://i.postimg.cc/4x1xzk73/slider-img.png" id="kid" class="d-block w-10" style="height: 30rem" alt="Kids Profile" loading="lazy"/>

       <RouterLink to="/products" class="submit-home">Shop now</RouterLink>
     </div>
   </div>
   
  
  
  
 
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="height: 22rem" >
   <div class="carousel-inner"  style="width: 99%">
         <div class="carousel-item active">
           <div class="carousel-text">
             <h3 class="h-home">👨🏽Sam Due</h3>
             <p class="corouselp">Very nice collection. Price , I find it very reasonable. <br>All the items are displayed in good order. It is really a pleasure to visit this shop</p>
           </div>
         </div>
 
         <div class="carousel-item">
           <div class="carousel-text">
             <h3 class="h-home">👩‍🦰Ellain Matthews</h3>
             <p class="corouselp">Excellent product ✔️
               Very quick delivery ✔️
               Very pleased 😊</p>
           </div>
         </div>
 
         <div class="carousel-item">
           <div class="carousel-text ">
             <h3 class="h-home">👩🏽Sis Lina</h3>
             <p class="corouselp">I bought the watch for my husband's birthday. He loved love it.<br> Beautiful presentation and packaging.</p>
           </div>
         </div>
       </div>
       <button
         class="carousel-control-prev"
         type="button"
         data-bs-target="#carouselExampleAutoplaying"
         data-bs-slide="prev"
       >
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button
         class="carousel-control-next"
         type="button"
         data-bs-target="#carouselExampleAutoplaying"
         data-bs-slide="next"
       >
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>
 
     <h1 class="feature">Featured...</h1>
 
     <div class="row row-cols-1 row-cols-md-3 g-4">
       <div class="col">
         <div class="card h-100 ">
           <img src="https://i.postimg.cc/QCN38RtB/images.jpg" class="card-img-top" alt="" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
           <div class="card-hbody">
             <h5 class="cardh-title">Noise Champ</h5>
           </div>
           <div class="card-homefooter">
             <RouterLink to="/products" class="see more">See more</RouterLink>
           </div>
         </div>
       </div>
 
       <div class="col">
         <div class="card h-100">
           <img src="https://i.postimg.cc/nrJZ3FGM/about-img.png" class="card-img-top" alt="" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
           <div class="card-hbody">
             <h5 class="cardh-title">Bracelet</h5>
           </div>
           <div class="card-homefooter">
             <RouterLink to="/products" class="see more">See more</RouterLink>
           </div>
         </div>
       </div>
 
       <div class="col">
         <div class="card h-100">
           <img src="https://i.postimg.cc/jS3rdrLh/versace-pour-homme-dylan-blue-eau-de-toilette.webp" class="card-img-top" alt="" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
           <div class="card-hbody">
             <h5 class="cardh-title">Versace Pour Home Dylan</h5>
           </div>
           <div class="card-homefooter">
     
             <RouterLink to="/products" class="see more">See more</RouterLink>
            
           </div>
         </div>
       </div>
     </div>
   </div>
 
 
 
 
     
            
 </template>
 
 <script>
 export default {
         name: 'HomeView',
         components: {
   
   }
       }
 
 function validate(event) {
   event.preventDefault(); // Prevent the default form submission
 
   var usernameInput = document.getElementById('username').value;
   var passwordInput = document.getElementById('password').value;
   
   if (usernameInput.value.trim() === '') {
     alert('Please enter your username.');
     return;
   }
 
   if (passwordInput.value === '') {
     alert('Please enter your password.');
     return;
   }
   alert('Form validated successfully!');
 }
 
 </script>
 
 <style >
 .card {
   margin: 6%;
   border-radius: 15%;
   background-color: white;
 }
 
 .card-home{
   margin: 7%;
   border-radius: 30%;
   height: 80%;
   width: 70%;
   background-color: white;
  
 }
 
 .card-hbody {
   background-color: rgba(128, 0, 128, 0.277);
   color: black;
   height: 20%;
   margin: 4%;
  
 }
 
 .cardh-title {
   text-align: center;
  text-shadow: 3px 3px white;
 }
 
 .card-homefooter {
   display: none;
 }
 
 .card-homefooter-button{
   margin-right: 10px;
 }
 .card:hover .card-homefooter{
   display: block;
  
 }
 
 .see {
 
 font-family: Georgia, 'Times New Roman', Times, serif;
 text-align: center;
 border: 3px solid white;
 padding: 5px 5px;
 background: purple;
 color: white;
 border-radius: 24px;
 transition: 0.25px;
 cursor: pointer ;
 text-decoration: solid; 
 }
 
 
 .see:hover{
  color: black;
  background:  rgb(238, 216, 248);
 }
 
 .carousel-item {
   width: 60%;
   box-shadow: 4p 4px white;
   background-color:rgba(255, 255, 255, 0.062);
   margin-left: 4rem;
   margin-top: 7rem;
 }
 
 .arousel-inner{
   margin-left: 4rem;
 }
 
 
 .h-home{
   background-color: whitesmoke;
   width: fit-content;
   margin: 1%;
 }
 
 
 
 
 
 .box{
   width:300px;
   padding:30px;
   top:5px;
   left: 50%;
   transform: translate(-5%, 5%);
   background: blue;
   text-align: center;
 }
 
 .box h1{
   color: pink;
   font-weight: 700;
 }
 
 .box input [type="text"],.input[type="password"] {
   border: 0;
   background: none;
   display: block;
   margin: 20px auto;
   text-align: center;
   border: 3px solid pink;
   padding: 14px 10px;
   width: 220px;
   outline: none;
   color: white;
   border-radius: 25px;
   transition: 0.25px;
 
 }
 
 .box input [type="text"]:focus,.box[type="password"]focus{
   width:300px;
   padding:30px;
   top:5px;
   left: 50%;
   transform: translate(-5%, 5%);
   background: blue;
   text-align: center;
 }
 
 .box{
   color: pink;
   font-weight: 700;
 }
 
 .box input [type="text"]:focus,.box[type="password"]{
   border: 0;
   background: none;
   display: block;
   text-align: center;
   border: 3px solid blue;
   padding: 14px 10px;
   width: 220px;
   outline: none;
   color: white;
   border-radius: 24px;
   transition: 0.25px
 }
 
 .box input [type="text"]:focus,.box[type="password"]:focus{
   width: 270px;
   border-color: pink;
 }
 
 .box input[type="submit"]{
   border: o;
   background: none;
   display: block;
   text-align: center;
   border: 3px solid blue;
   padding: 14px 10px;
   width: 220px;
   outline: none;
   color: white;
   border-radius: 24px;
   transition: 0.25px;
   cursor: pointer
 }
 
 .box input[type="submit"]:hover{
   background: black
 }
 
 #kid {
 
   margin-left: 65%; 
 
 }
 
 
 .carousel {
   background-color: purple;
   color: purple;
 }
 
 /* img and text*/
 
 .home{
   font-size: 5rem;
   text-shadow: 4px 6px #edd7d7;
   text-align: center;
   position: absolute;
   top: 30%;
   left: 35%;
   transform: translate(-50%, -50%);
   color: purple
 
   /* background-color: rgba(255, 255, 255, 0.377); */
 
 }
 
 .homeP {
   font-size: 5rem;
   text-shadow: 4px 6px white;
   text-align: center;
   position: absolute;
   top: 40%;
   left: 35%;
   transform: translate(-50%, -50%);
   color: purple;
 
   
 }
 
 .homep1 {
   font-size: 2rem;
  
   text-align: center;
   position: absolute;
   top: 50%;
   left: 35%;
   transform: translate(-50%, -50%);
   color: purple;
 
 
   
 }
 
 .submit-home{
  position: absolute;
  top: 56%;
  right: 62%;
 font-family: Georgia, 'Times New Roman', Times, serif;
 text-align: center;
 border: 3px solid white;
 padding: 14px 10px;
 background: purple;
 outline: none;
 color: black;
 border-radius: 24px;
 transition: 0.25px;
 cursor: pointer ;
 text-decoration: solid;
 
 
 
 
     animation: colorAnimation 5s infinite alternate;
   }
   
   @keyframes colorAnimation {
     0% {
       background-color: purple;
     }
     50% {
       color: purple;
     }
     100% {
       background-color:  rgb(238, 216, 248);
     }
   }
   
 
 
 .submit-home:hover{
   color: rgb(238, 216, 248);
   background: purple;
 }
 
 .corouselp{
   color: white;
 }
 
 .see {
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  border: 3px solid white;
  padding: 10px 8px;
  background: purple;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25px;
  cursor: pointer ;
  text-decoration: solid;
 
 
 }
 .card-homefooter{
   margin: auto;
   background-color: white;
   color: white;
   border-radius: 100%;
   
 
 }
 
 .feature{
   color: purple;
   background-color: white;
   margin: 5%;
   text-align: center;
 
 }
 
 .corouselp{
   text-align: center;
   font-size: 2rem;
 }
 
 @media (max-width: 576px) {
     #kid {
 
 margin-left: 24%; 
 
 
 }
 
 .homep1 {
   font-size: 25px;
   font-weight:bold;
   text-align:center;
   top: 5%;
   left: 35%;
   transform: translate(-50%, -50%);
   color: purple;
  
 }
 
 
 
 
 .home{
   font-size: 3rem;
   text-align:start;
 
   }
 
   .homeP {
   font-size: 1rem;
   text-align: center;
  font-weight: bold;
   top: 53%;
   left: 34%;
 background-color: white;
 
   
 }
 
 
 .carousel-item {
   width: 70%;
   box-shadow: 4p 4px white;
   background-color:rgba(255, 255, 255, 0.062);
   font-size: 4px;
   margin: 1rem;
 }
 
 .h-home{
   font-size: 4px;
 }
 .corouselp{
  
   font-size: 1rem;
   margin-top: 4rem;;
 }
 
 
 
 }
 
 
 /*Testimonials*/
 
 
   
 
   
 
 
 </style>