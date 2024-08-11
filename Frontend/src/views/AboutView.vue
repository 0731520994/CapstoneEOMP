<template>
  <div>
    <div class="card-about mb-3">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="https://i.postimg.cc/T1zvw6X9/istockphoto-1432773286-612x612-removebg-preview.png" id="bounce"   alt="" loading="lazy">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h1 class="card-title">Who we are.</h1>
            <p class="card-text">At Joyful Gifts, we believe in the magic of personal touch. When you choose a product, you're not just selecting an item; you're crafting a moment. Our unique personalization feature allows you to choose a color that resonates with your intent. Every gift is carefully wrapped and adorned with a sweet message, a motivational quote, or words of inspiration. It's a reminder that your gesture goes beyond the gift itself – it's a heartfelt connection that transcends distance and time.</p>
           
            <p class="card-text">Our vision is simple yet profound – to be a beacon of joy in a world that sometimes feels overwhelming...</p>
          
            <p class="card-text">Through our offerings, we aim to spread positivity, foster connections, and remind you that every gesture counts.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="icons">
       
        <img src= "https://i.postimg.cc/76pDg5wF/Quality-removebg-preview.png" alt="" class="icon" id="quality-icon" loading="lazy">
        <h2 class="icon-label">Quality Products</h2>

         
        <img src="https://i.postimg.cc/QC1DSjMH/fast-delivery-removebg-preview.png" alt="" class="icon" id="fast-delivery-icon" loading="lazy">
        <h2 class="icon-label">Fast Delivery</h2>
        
     
        <img src="https://i.postimg.cc/4dKs76kv/wrapped-removebg-preview.png" alt="" class="icon" id="wrapped-gift-icon" loading="lazy">
        <h2 class="icon-label">Wrapped Gifts</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

#bounce {

  margin-top: 4rem; 

}

.bounce:hover {
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
.card-about {
  background-color: purple;
  padding: 2rem;
  padding-bottom: 6rem;
  color: white;
  margin-bottom: 5rem;
  margin-top: 5rem;
}

.card-title {
  margin: 5%;
  text-align: center;
  font-size: 5rem;
  text-align: center;
  color: Black;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: bounce 10s infinite alternate; 
}

.card-text {
  font-size: 1.2rem;
}

h4 {
  background-color: rgba(255, 255, 255, 0.477);
  width: fit-content;
  padding: 0.5rem;
  margin-top: 1rem;
}

.icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.icon {
  width: 8rem;
  height: 8rem;
  
}

.icon-label {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.icon-container{
  padding: 5rem;
  margin: 5rem;
}
@media (max-width: 768px) {
  .card-about {
    padding: 1rem;
  }

  
}
</style>
