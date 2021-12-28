<template>
    <header>
       <Button icon="pi pi-align-justify" @click="$emit('burgerClicked')" class="p-button-rounded p-button-secondary p-button-outlined menu-burger" />
       <h2>Shopping Deals App</h2> 
       <nav>
         <ul>
           <li>
             <router-link to="/register" class="nav-link">Register</router-link>
           </li>
         </ul>
       </nav>
    </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;    
  background-color: #000;
  display: flex;
  align-items: center;
}

h2 {
  color: #fff;
  justify-self: center;
  width: 100%
}

ul {
  list-style: none;
}

.menu-burger {
  justify-self: flex-start;
  left: 20px
}

.nav-link {
  text-decoration: none;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  float: right;
  align-self: center;
}
</style>