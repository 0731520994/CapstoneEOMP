<template>
  <div>
    <div class="card-about mb-3">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="https://i.postimg.cc/T1zvw6X9/istockphoto-1432773286-612x612-removebg-preview.png" class="bounce" alt="" width="100%">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h1 class="card-title">About Us</h1>
            <p class="card-text">At Joyful Gifts, we believe in the magic of personal touch. When you choose a product, you're not just selecting an item; you're crafting a moment. Our unique personalization feature allows you to choose a color that resonates with your intent. Every gift is carefully wrapped and adorned with a sweet message, a motivational quote, or words of inspiration. It's a reminder that your gesture goes beyond the gift itself – it's a heartfelt connection that transcends distance and time.</p>
            <h4>Our Vision</h4>
            <p class="card-text">Our vision is simple yet profound – to be a beacon of joy in a world that sometimes feels overwhelming...</p>
            <h4>Our Mission</h4>
            <p class="card-text">Through our offerings, we aim to spread positivity, foster connections, and remind you that every gesture counts.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="icons">
        
        <img src="https://i.postimg.cc/kGjZZcjP/fast-delivery-icon-removebg-preview.png" alt="" class="icon" id="fast-delivery-icon">
        <h2 class="icon-label">Fast Delivery</h2>
        
      
        <img src="https://i.postimg.cc/3JRzGsR8/quality-icon-removebg-preview.png" alt="" class="icon" id="quality-icon">
        <h2 class="icon-label">Quality Products</h2>
        
     
        <img src="https://i.postimg.cc/J7K9GrRY/wrapped-gift-removebg-preview.png" alt="" class="icon" id="wrapped-gift-icon">
        <h2 class="icon-label">Wrapped Gifts</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

#bounce {

  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: bounce 0.5s infinite alternate; 
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
  color: white;
}

.card-title {
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

@media (max-width: 768px) {
  .card-about {
    padding: 1rem;
  }

  .icon {
    width: 5rem;
    height: 5rem;
  }
}
</style>
