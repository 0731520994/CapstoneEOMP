<template>
  <div>
    <div class="Container-fluid">
      <div class="front">
        <h1 class="home">Spring into Savings!</h1>
        <p class="homep1">Boost your confidence with our Latest Glam collection made with love
          <span>Unisex | Beauty | Accessories | Perfumes</span>
        </p>
        <img src="https://i.postimg.cc/4x1xzk73/slider-img.png" id="kid" class="d-block w-10" style="height: 30rem" alt="Kids Profile" loading="lazy"/>

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
  margin-left: 65%;
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

@media (max-width: 576px) {
  #kid {
    margin-left: 24%;
  }

 

  .corouselp {

    margin-top: 4rem;
  }
}

.carousel-text {
  width: 80%;
  background-color: black;
  margin: 3rem 8rem;
  height: 20%;
  padding: 3rem;
  position: relative;
}

.arousel-inner {
  margin-left: 4rem;
}

.h-home {
  color: rgb(238, 216, 248);
  width: fit-content;
  margin: 6% 38%;
  position: absolute;
  top : 55%;
  font-weight: 00;

}

.carousel {
  background: linear-gradient(to right, purple 65%, black 45%);
  color: purple;
  width: 100%;
  height: 30rem;
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

 
   
 
 </style>