<template>
  <div>
  
  <div class="app-container">
   
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="info_logo">
        <h2>Joyful gifts</h2>
      </div>
      <div class="row">
    
        <div class="col-md-3">
          <div class="footer-logo">
            <img src="https://i.postimg.cc/YqnDkQXk/Logotype_Boutique_Fashion_Neon.png" style="width:14rem; border-radius:100%">
           </div> 
          </div>

        <div class="col-md-3">
          <div class="info_contact">
            <h5>About Shop</h5>
            <div>

              <div class="img-box">
                <img src="images/telephone-white.png" width="12px" alt="">
              </div>
              <p>+27 21 232 1122</p>
            </div>

            <div>
              <div class="img-box">
                <img src="images/envelope-white.png" width="18px" alt="">
              </div>
              <p>
                info@joyfulgifts.co.za
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="info_info">
            <h5>Informations</h5>
            <p>Please subscribe to get our latest blogs and newsletters.</p>
            <p>Thank you for shopping with us, please come again 💜!</p>
          </div>
        </div>


        <div class="col-md-3">
          <div class="info_form ">
            <h5>Newsletter</h5>

            <form action="https://formspree.io/f/moqoldrq" method="POST">
              <input type="email" name="email" placeholder="Enter your email">
              <button class="subscribe" type="submit">Subscribe</button>
            </form>
            
            <div class="social_icons">
              <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/feed/" target="_blank"><i class="bi bi-linkedin"></i></a>
              <a href="">
                <img src="images/youtube.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
    <section class="footer_section">
      <div class="container">
        <p class="lead">Copyright &copy;{{ cyear }}. All Rights Reserved by Joyful Gifts</p>
      </div>
    </section>
  </div>
  </div>
</template>



 

<script>
  export default {
    data() {
      return {
        cyear: new Date().getFullYear()
      };
    }
  }
</script>

<style >

.info_section {
  background-color: black;
  color: #ffffff;
  margin-top:100px;
}

.info_logo {
  width: 80%;
  margin: 0 auto 45px auto;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #ffffff;
}

.info_logo h2 {
  text-transform: uppercase;
  font-weight: bold;
}

.info_section h5 {
  margin-bottom: 25px;
  font-size: 24px;
}



.info_form form input {
  outline: none;
  width: 100%;
  padding: 7px 10px;

}

.subscribe{
  display: inline-block;
  background-color: purple;
  transition: all 0.3s;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 15px;
  border: 3px solid white;
  padding: 14px 10px;
  color: white;
  border-radius: 24px;

}

.subscribe:hover {
  background-color: white;
  color: purple;
}

.social_icons {
  margin-top: 35px;
  width: 100%;
  display: flex;

}

.social_icons a {
  margin-right: 25px;
  margin-left: 15px;
}

.footer-logo{
  margin-bottom: 7%;
  
}

.bi {
  color: white;
  
}

.lead{
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  color: white;
  background-color: purple;

}

.footer_section{
  background-color: purple;
  padding: 1rem;
}

.app-container {
  margin-top: 100px;
  
}

</style>