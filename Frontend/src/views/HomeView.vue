<template>
  <div>
    <div class="Container-fluid">
      <div class="front">
        <h1 class="home">Spring into Savings!</h1>
        <p class="homep1">Boost your confidence with our Latest Glam collection made with love
          <span>Unisex | Beauty | Accessories | Perfumes</span>
        </p>
        <img src="https://i.postimg.cc/4x1xzk73/slider-img.png" id="kid" class="d-block w-10" alt="Kids Profile" loading="lazy"/>

        <RouterLink to="/products" class="submit-home">Shop now</RouterLink>
      </div>
    </div>

    <testimonialscomp/>

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <h1 class="h1-testi">Here's what <span>others</span> say:</h1>
        
        <div class="carousel-item active">
          <div class="carousel-text">
            <p class="corouselp"> " Shipping was very quick and I love the material of the purchases!!! For the price you guys have been doing a great job I see much improvement. "</p>
          </div> 
          <h3 class="h-home">By: 👨🏽Sam Due</h3>
        </div>

        <div class="carousel-item">
          <div class="carousel-text">
            <p class="corouselp"> "  The products are of great quality. There's hardly ever a disappointment .shipping could be a bit quicker though but overall the experience is good."</p>
          </div>
          <h3 class="h-home">By: 👩‍🦰Ellain Matthews</h3>
        </div>

        <div class="carousel-item">
          <div class="carousel-text">
            <p class="corouselp">" Everything was as ordered and came fast... wish the coupon deals were like they were two years ago when you actuaally got really good discounts."</p>
          </div>
          <h3 class="h-home">By: 👩🏽Sis Lina</h3>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <h1 class="feature">Featured Products.</h1>

    <div class="row row-cols-1 row-cols-md-4 g-4">
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
          <img src="https://i.postimg.cc/gJCcNFSx/Bracelet.png" class="card-img-top" alt="" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
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
          <img src="https://i.postimg.cc/L4gnfvCq/Versace-Pour-Home-Dylan.jpg" class="card-img-top" alt="" style="width: 15rem; height: 14rem; padding: 2rem; margin:auto">
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
 
 <style scoped>

#kid {
  margin-left: 67%;
  height: 30rem
}

/* img and text */
/*big text */
.home {
  font-size: 5rem;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: Black;
}

/*Small text */
.homep1 {
  font-size: 1.2rem;
  text-decoration: bold;
  text-align: center;
  position: absolute;
  top: 56%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: black;
}

.homep1 span {
  display: block;
  margin-top: 3px;
}

/*shop button */
.submit-home {
  position: absolute;
  top: 68%;
  right: 62%;
  text-align: center;
  cursor: pointer;
  text-decoration: 2rem solid;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 1% 4%;
  cursor: pointer;
}

.submit-home:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}

/*featured */

.row{
  justify-content: center;
  
}
.card {
  margin: 6%;

  background-color: white;
}

.card-home {
  margin: 7%;
  border-radius: 30%;
  height: 80%;
  width: 70%;
  background-color: white;
}

.card-hbody {
  background-color: rgba(128, 0, 128, 0.277);
  color: black;
  height: 15%;
  margin: 4%;
}

.cardh-title {
  text-align: center;
  text-shadow: 3px 3px white;
}

.card-homefooter {
  display: none;
}

.card-homefooter-button {
  margin-right: 10px;
}

.card:hover .card-homefooter {
  display: block;
}

.see {
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  border: 3px solid white;
  padding: 7px 14px;
  background: purple;
  color: white;
  transition: 0.25px;
  cursor: pointer;
  text-decoration: solid;
}

.see:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}



.card-homefooter {
  margin: auto;
  background-color: white;
  color: white;
  border-radius: 100%;
}

.feature {
  margin: 5%;
  text-align: center;
  font-size: 5rem;
  text-align: center;
  color: Black;
 
}

/*Testimonials*/



.corouselp {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 200;
}
.carousel {
  background: linear-gradient(to right, purple 65%, black 45%);
  color: purple;
  width: 100%;
  height: auto; 
  max-height: 30rem; 
}

.carousel-text {
  width: 80%;
  background-color: black;
  margin: 3rem auto;
  height: auto; 
  padding: 3rem;
  position: relative;
  text-align: center;
}

.arousel-inner {
  margin-left: 4rem;
}

.h-home {
  color: rgb(238, 216, 248);
  width: fit-content;
  margin: 0 auto; 
  position: relative;
  bottom: 3rem;
  font-weight: 700;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-top: 4rem;
}


.corouselp {
  color: rgb(238, 216, 248);
}

.h1-testi {
  font-size: 2.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 2rem 18rem;
}

.h1-testi span {
  font-size: 4rem;
  color: #262626;
}



@media screen and (max-width: 259px) {

  #kid{
 height: 15rem;
 margin-left: 13rem;
  }
  .home {
  font-size: 1.2rem;
  top: 48%;
  left: 28%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 35%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 54%;
}
 
/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 8rem;
}
}

@media (min-width: 300px) and (max-width: 350px) {

  #kid{
 height: 15rem;
 margin-left: 11rem;
  }
  .home {
  font-size: 1.2rem;
  top: 48%;
  left: 28%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 35%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 54%;
}
/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon{
  display: none;
}
.carousel-control-next-icon {
 margin-bottom: 8rem;

}
}

@media (min-width: 351px) and (max-width: 400px) {

  #kid{
 height: 15rem;
 margin-left: 14rem;
  }
  .home {
  font-size: 1.4rem;
  top: 48%;
  left: 32%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 38%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}

/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon{
  display: none;
}
.carousel-control-next-icon {
 margin-bottom: 9rem;

}

}
   

@media (min-width: 401px) and (max-width: 450px) {

  #kid{
 height: 15rem;
 margin-left: 16rem;
  }
  .home {
  font-size: 1.7rem;
  top: 47%;
  left: 30%;
  margin-left: 2rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 38%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}

/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}  

@media (min-width: 451px) and (max-width: 500px) {

  #kid{
 height: 15rem;
 margin-left: 19rem;
  }
  .home {
  font-size: 2rem;
  top: 48%;
  left: 32%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 38%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}


/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}

@media (min-width: 501px) and (max-width: 550px) {

  #kid{
 height: 15rem;
 margin-left: 22rem;
  }
  .home {
  font-size: 2rem;
  top: 48%;
  left: 34%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 38%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}

/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2.5rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}

@media (min-width: 551px) and (max-width: 600px) {

  #kid{
 height: 15rem;
 margin-left: 24rem;
  }
  .home {
  font-size: 2.3rem;
  top: 48%;
  left: 32%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.6rem;
  top: 60%;
  left: 34%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}
 
/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2.5rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}

@media (min-width: 601px) and (max-width: 650px) {

  #kid{
 height: 17rem;
 margin-left: 26rem;
  }
  .home {
  font-size: 2.6rem;
  top: 48%;
  left: 32%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.7rem;
  top: 61%;
  left: 34%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}


/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2.5rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
 
}

@media (min-width: 651px) and (max-width: 700px) {

  #kid{
 height: 17rem;
 margin-left: 28rem;
  }
  .home {
  font-size: 2.6rem;
  top: 48%;
  left: 38%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.7rem;
  top: 61%;
  left: 40%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}


/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
 
}

@media (min-width: 701px) and (max-width: 800px) {

  #kid{
 height: 18rem;
 margin-left: 32rem;
  }
  .home {
  font-size: 2.9rem;
  top: 48%;
  left: 38%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.7rem;
  top: 61%;
  left: 40%;
}
/*shop button */
.submit-home {

  top: 70%;
  right: 52%;
}


/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 2rem 3rem;
}

.h1-testi span {
  font-size: 2.5rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 11rem;

}
}






@media (min-width: 801px) and (max-width: 950px) {

  #kid{
 height: 20rem;
 margin-left: 40rem;
  }

  .home {
  font-size: 3.2rem;
  top: 48%;
  left: 40%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 0.8rem;
  top: 62%;
  left: 40%;
}
/*shop button */
.submit-home {

  top: 72%;
  right: 52%;
}

/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}

@media (min-width: 951px) and (max-width: 991px) {

  #kid{
 height: 20rem;
 margin-left: 42rem;
  }

  .home {
  font-size: 3.5rem;
  top: 48%;
  left: 40%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 1rem;
  top: 66%;
  left: 40%;
}
/*shop button */
.submit-home {

  top: 76%;
  right: 52%;
}

/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}



@media (min-width: 992px) and (max-width: 1067px) {

  #kid{
 height: 20rem;
 margin-left: 50rem;
  }

  .home {
  font-size: 4rem;
  top: 48%;
  left: 40%;
  margin-left: 1rem;

  }
  /*Small text */
.homep1 {
  font-size: 1rem;
  top: 66%;
  left: 40%;
}
/*shop button */
.submit-home {

  top: 76%;
  right: 52%;
}

/* Testi */
.carousel-text {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    bottom: 4rem;
    padding: 2rem;
   
  }

  .h-home {
    bottom: 9rem;
    margin-left: 3rem;
    font-size: 1rem;
    
  }

  
.h1-testi {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(238, 216, 248);
  margin: 1.5rem 3rem;
}

.h1-testi span {
  font-size: 2rem;
  color: #262626;
}

.corouselp {
  text-align: center;
  font-size: 1rem;
  font-weight: 100;
 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
 margin-bottom: 12rem;

}
}

 </style>