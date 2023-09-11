<template>
<div>
 <div class="card mb-3" style="max-width:100 80rem; height: 35rem;">
  <div class="row g-0">
    <div class="col-md-4">
        
      <img src="https://i.postimg.cc/T1zvw6X9/istockphoto-1432773286-612x612-removebg-preview.png" class="img-fluid rounded-start" alt="" width="100%">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">About Us</h1>
        <p class="card-text">At JoyfulGif---ts, we believe in the magic of personal touch. When you choose a product, you're not just selecting an item; you're crafting a moment. Our unique personalization feature allows you to choose a color that resonates with your intent. Every gift is carefully wrapped and adorned with a sweet message, a motivational quote, or words of inspiration. It's a reminder that your gesture goes beyond the gift itself – it's a heartfelt connection that transcends distance and time.</p>
        <h4>Our Vision</h4>
        <p class="card-text">Our vision is simple yet profound – to be a beacon of joy in a world that sometimes feels overwhelming. We aspire to remind you that every moment, no matter how small, is an opportunity to create happiness. </p>
        <h4>Our Mission</h4>
        <p class="card-text">Through our offerings, we aim to spread positivity, foster connections, and remind you that every gesture counts.</p>
      </div>
  </div>
</div>
</div>

<div class="container-fluid">
<div class="icons">
  <img src="https://i.postimg.cc/kGjZZcjP/fast-delivery-icon-removebg-preview.png" alt="" style="width: 17rem; height:17rem">
  <img src="https://i.postimg.cc/3JRzGsR8/quality-icon-removebg-preview.png" alt="" style="width: 12rem; height:12rem">
  <img src="https://i.postimg.cc/J7K9GrRY/wrapped-gift-removebg-preview.png" alt="" style="width: 15rem; height:15rem">
<div>
  <h2 class="delivery">Fast Delivery </h2>
</div>

<div>
  <h2 class="quality">Quality Products</h2>
</div>


  <div>
    <h2 class="wrapped">Wrapped gifts</h2>
  </div>
</div>
</div>

    </div>
</template>

<script>
    export default {
        name: 'AboutView',
        components: {

        }

    }
</script>

<style >
.card{
    background-color: purple;
   
}

.img-fluid{
  margin-top: 14%;
}

.card-title{
  color: rgb(255, 255, 255);
  text-align: center;
  align-items: center;
  padding: 3%;
  text-shadow: 5px 5px 3px black;
 
 
}

.card-text{
  color: white;
 font-size: large;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

h4{
  background-color: rgba(255, 255, 255, 0.477);
  width:fit-content;
 padding: 1%;
}



.img{
  justify-content: center;
  align-items: center;
 
  margin-left: 15%;
}


.delivery{
  margin-left: 15%;
 
}

.quality{
  margin-left: 41%;

}

.wrapped{
  margin-left: 70%;
 
}

@media (max-width: 576px) {
  .card{
    background-color: purple;
    height:fit-content
}
}

</style>