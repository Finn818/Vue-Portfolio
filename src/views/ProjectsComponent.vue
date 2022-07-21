<template>
      <div class="container" id="box">
    <div class="row">
    </div>
    <div class="row">
      <div class="portfolio-heading">
        <h2 style="color:white">My last Projects :</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4"  >
         <div class="portfolio-img">
           <img class="img-fluid" src="../assets/calculator.jpg" alt="" id="projimage">
         </div>
    </div>
      <div  class="col-md-4">
          <div class="portfolio-img">
            <img class="img-fluid" src="../assets/gridScreenshot.jpg" alt="" id="projimage">
          </div>
        </div>
      <div class="col-md-4">
          <div class="portfolio-img">
            <img class="img-fluid" src="../assets/OneScreenshot.png" alt="" id="projimage">
          </div>
      </div>
      </div>
      <div class="row my-4">
        <div class="col-md-4">
          <div class="portfolio-img">
            <img class="img-fluid" src="../assets/Rainbow.png" alt="" id="projimage">
          </div>
          

      </div>
       <div class="col-md-4">
          <div class="portfolio-img">
            <img class="img-fluid" src="../assets/imagestyling.png" alt="" id="projimage">
          </div>
      </div>
    
    
        <div class="col-md-4">
          <div class="portfolio-img">
            <img class="img-fluid" src="../assets/sneakerstore.png" alt="" id="projimage">
          </div>
    </div>
    
    </div>
  </div>


        

</template>

<script>
export default{
 }
</script>

<style>

.service .container {
    padding-bottom: 40px;
    height: 100%
    ;
  }

  .service .service-item {
    -ms-flex: 0 0 33.33%;
    flex: 0 0 33.33%;
    max-width: 33.33%;
    margin-bottom: 30px;
    display: -ms-flexbox;
    display: flex;
    height: 520px;
  }
  
  .service .service-item .service-item-inner {
    background-color: #fdf9ff;
    border: 1px solid #d4d4e3;
    border-radius: 10px;
    padding: 30px 15px;
    text-align: center;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
 
  .service .service-item .service-item-inner h4 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #302e4d;
    font-weight: 700;
    text-transform: capitalize;
  }
  .service .service-item .service-item-inner p {
    font-size: 16px;
    color: #504e70;
    line-height: 25px;
    margin: 125px;
    justify-content: center;
    display: block;
  }

  .service{
      background: grey;
      width: 100%;
      padding: 130px 0px;
      font-size: 100px;
  }

  .icon{
    position: absolute;
    padding-left: 142px;
  }

  .section-title{
    display: flex;
    justify-content: center;
  }

  #projimage{
    width: 350px;
    height: 250px;
  }

</style>