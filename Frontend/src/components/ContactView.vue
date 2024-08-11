<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h4 class="h4-contact">Contact Us</h4>
      <form action="https://formspree.io/f/moqoldrq" method="POST">

        <div class="row mb-3">
          <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName3" name="name">
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" name="email">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputSubject3" class="col-sm-2 col-form-label">Subject</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSubject3" name="subject">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputMessage3" class="col-sm-2 col-form-label">Message</label>
          <div class="col-sm-10">
            <textarea class="form-control" id="inputMessage3" rows="8" name="message"></textarea>
          </div>
        </div>
        <button type="submit" class="submit-contact">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: rgb(238, 216, 248);
  padding: 20px;
  width: 700px;
  position: relative;
}

.form-control {
  background-color: rgb(238, 216, 248);
  border: 0.5px solid rgb(151, 150, 150);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}




.submit-contact {
  margin-top: 4%;
  margin-bottom: 1%;
  background-color: purple;
  color: rgb(238, 216, 248);
  border: none;
  padding: 3% 5%;
  cursor: pointer;
  margin-left: 34%;
  width: 35%;
 
 
}

.submit-contact:hover {
  background-color: transparent;
  color: purple;
  border: 2px solid purple;
}






.h4-contact {
  text-align: center;
  margin-bottom: 15px;
}
</style>
