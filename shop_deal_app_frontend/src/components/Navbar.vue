<template>
    <header>
       <h2 class="brand">Shopping Deals App</h2> 
       <nav>
         <ul class="nav-links">
           <li>
             <router-link to="/register" class="link">Today's Selection</router-link>
           </li>
           <li>
             <router-link to="/register" class="link">Categories</router-link>
           </li>
           <li>
             <router-link to="/register" class="link"><button>Sign Up</button></router-link>
           </li>
         </ul>
       </nav>
    </header>
</template>

<style scoped>
li, .link, button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 5%;
  background-color: #083a85;
}

h2 {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #edf0f1;
    margin-right: auto;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav-links li a {
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.nav-links li a:hover {
  color: rgb(0, 130, 169);
}

button {
  padding: 9px 25px;
  background-color: rgb(28, 194, 130);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

button:hover {
    background-color: rgb(0, 130, 169);
}
</style>