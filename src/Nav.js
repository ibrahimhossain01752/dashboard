import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const Nav = ({Toggle}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-none d-md-block" href="#">Dashboard</a>
    <a class="navbar-brand d-block d-md-none" onclick={Toggle}>
      <i class="bi bi-justify"></i>
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li class="nav-item mx-1 border rounded">
          <a class="nav-link text-white" aria-current="page" href="#"><i class="bi bi-search"></i>Search</a>
        </li>
        <li class="nav-item mx-1 border rounded">
          <a class="nav-link text-white" aria-current="page" href="#">Account</a>
        </li>
        <li class="nav-item mx-1 border rounded">
          <a class="nav-link text-white" aria-current="page" href="#">Logout</a>
        </li>
      
       
       
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Nav;