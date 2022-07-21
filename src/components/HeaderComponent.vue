<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark" id="navbar">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#"><img src="../assets/images.png" alt="" img-size="3px"></a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">home</router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/about">about</router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/services">services</router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/projects">projects</router-link> |
        </li>
        <li class="nav-item">
          <router-link to="/testimonials">testimonials</router-link> |
        </li>
        <li class="nav-item">
            <router-link to="/contact">contact</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>

<div :style="{'background-image':'url(https://vuejs.org/images/logo.png) '}" style="opacity: 0.7;">
  </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>