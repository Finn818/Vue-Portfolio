<template>
  <section>
    <h1 style="color:white"><u><b>Services</b></u></h1>
    <h3 style="color:white">Hover The Page!!!</h3>
      <div class="container" style="color:aqua">
      <div class="row">
        <div class="overlay">
        <i class="bi bi-laptop" id="icon"></i>
        <div class="col-md-4" id="text">  
        
        <h4 style="color: white;">Web Design</h4>
        <p style="color: white; text-align: center;">Are oyu looking to get more feet through the door, expose your business to a wider audience or open an online store? Getting a new website or online store may be simpler than you think!</p>
        
        <div>
        <i class="bi bi-camera" id="icon"></i>
        <div class="col-md-4" id="text">
        <h4 style="color: white;" id="">Responsive Design</h4>
        <p style="color: white;">Great web design without functionality is like a sports car with no engine!</p>
        </div>
        </div>

        <div>
        <i class="bi bi-code-slash" id="icon"></i>
        <div class="col-md-4" id="text">
        <h4 style="color: white;">Web Development</h4>
        <p style="color: white;">If there’s one thing you learn by working on a lot of different Websites, it’s that almost any design idea no matter how appallingly bad can be made usable in the right circumstances, with enougheffort.</p>
        </div>
        </div>
  </div>
  </div>
  </div>
  </div>
  </section>


</template>

<script>
export default {
};
</script>

<style>
.container {
  position: flex;
  width: 100%;
  height: 50%;
}

.overlay {
  position: content;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: flex;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

#icon{
    display: flex;
    justify-content: center;
    font-size: 100px;
  }

  #text{
    display: contents;
  }

</style>