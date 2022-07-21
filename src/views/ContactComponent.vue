<template>  
<section class="mb-4">
    <div class="container bg-black" id="box">
    <h2 class="h1-responsive font-weight-bold text-center my-4" style="color: white;">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5" style="color: white;">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>

    <div class="row">
    <div class="col-4">
    <div class="contact-info-item padd-15">
    <div class="icon"><i class="bi bi-telephone" id="icon"></i></div>
    <h4 style="color: white;">Call Me On</h4>
    <p><a href="tel: 0724170483">+27 72 417 0483</a></p>
    </div>
    </div>
    <div class="col-4">
    <div class="contact-info-item padd-15">
    <div class="icon"><i class="bi bi-geo-alt-fill"></i></div>
    <h4 style="color: white;">Home</h4>
    <p style="color: white;">Cape Town, South Africa</p>
    </div>
    </div>
    <div class="col-4">
    <div class="contact-info-item padd-15">
    <div class="icon"><i class="bi bi-envelope-fill"></i></div>
    <h4 style="color: white;">Email</h4>
<p>
    <a href="jsolomons239@gmail.com">jsolomons239@gmail.com</a>
    </p>
    </div>
    </div>
    </div>
    
    <div class="container">
    <div class="row">
    <div class="col-md-9 mb-md-0 mb-5">
    <form id="contact-form" name="contact-form" action="https://formspree.io/f/xknykzyr" method="POST">
    
    <div class="row">                   
    <div class="col-md-6">
    <div class="md-form mb-0">
    <label for="name" class="" style="color:white" id="field">Your name</label>
    <input type="text" id="name" name="name" class="form-control">
                                
    </div>
    </div>
                        
    <div class="col-md-6">
    <div class="md-form mb-0">
    <label for="email" class="" style="color:white" id="field">Your email</label>
    <input type="text" id="email" name="email" class="form-control">
                                
    </div>
    </div>
    </div>
                   
    <div class="row">
    <div class="col-md-12">
    <div class="md-form mb-0">
    <label for="subject" class="" style="color:white" id="field">Subject</label>
    <input type="text" id="subject" name="subject" class="form-control">
                                
    </div>
    </div>
    </div>
    
    <div class="row">
    <div class="col-md-12">
    <div class="md-form">
        <label for="message" style="color:white" id="field">Your message</label>
        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                
    </div>
    </div>
    </div>
</form>  
    
    <div class="text-center text-md-left">
    <a class="btn btn-outline-light" onclick="documentgetElementById('contact-form').submit();">Send</a>
    </div>
    <div class="status"></div>
    </div>
        
    </div> 
    </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style> 
  

  .icon{
    display: flex;
    justify-content: center;
    font-size: 50px;
  }

  p{
    display: flex;
    justify-content: center;
  }

  .text-center{
    display: flex;
    align-items: flex-start;
  }

  .h1-responsive{
    display: flex;
    justify-content: center;
  }

  #box{
    max-width: 4000px;
    max-height: 5000px;
  }

  body{
    background-color: black;
  }

  

</style>