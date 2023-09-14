<template>
<div>
 <div class="card-about mb-3" style="max-width:100 80rem; height: 35rem;">
  <div class="row g-0">
    <div class="col-md-4">
        
      <img id="bounce" src="https://i.postimg.cc/T1zvw6X9/istockphoto-1432773286-612x612-removebg-preview.png" class="img-fluid rounded-start" alt="" width="100%">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">About Us</h1>
        <p class="card-text">At Joyful Gifts, we believe in the magic of personal touch. When you choose a product, you're not just selecting an item; you're crafting a moment. Our unique personalization feature allows you to choose a color that resonates with your intent. Every gift is carefully wrapped and adorned with a sweet message, a motivational quote, or words of inspiration. It's a reminder that your gesture goes beyond the gift itself – it's a heartfelt connection that transcends distance and time.</p>
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
  <img  src="https://i.postimg.cc/kGjZZcjP/fast-delivery-icon-removebg-preview.png" alt="" style="width: 17rem; height:17rem">
  <img  src="https://i.postimg.cc/3JRzGsR8/quality-icon-removebg-preview.png" alt="" style="width: 12rem; height:12rem">
  <img  src="https://i.postimg.cc/J7K9GrRY/wrapped-gift-removebg-preview.png" alt="" style="width: 15rem; height:15rem">
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
.card-about{
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

 



.icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

#bounce {

  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: bounce 0.5s infinite alternate; 
}

img:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); 
  }
}

@media (max-width: 576px) {
  .card-about{
    background-color: purple;
  
}
}

</style>