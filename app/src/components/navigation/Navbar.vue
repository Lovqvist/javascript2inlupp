<template>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom border-dark ">
        <div class="container">
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            
            <router-link class="navbar-brand " to="/"><span>MySHOP</span></router-link>
            
            
                <!-- Dropdown -->
                <div class=" navbar dropdown icon ">
                    <a
                    class="nav-link"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                        <i class="text-dark fas fa-shopping-cart"></i>
                            <span v-show="cartItemCount" class="badge rounded-pill badge-notification bg-light text-dark">{{ cartItemCount }}</span>

                    </a>
                    <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                        <Shopping-cart />
                    </ul>
                    
                    <i v-if="!loggedIn" ><router-link class="nav-link text-dark login-link" to="/login">Logga in</router-link></i>
                    
                    <a v-if="loggedIn"
                    class="text-dark nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >   
                        <i v-if="loggedIn" class="text-dark fas fa-user"></i>
                        
                    </a>
                    <ul v-if="loggedIn" class="dropdown-menu dropdown-menu-end border border-4 rounded" aria-labelledby="navbarDropdownMenuLink">
                        
                        <li><router-link class="dropdown-item" to="/orderhistory">Order historik</router-link></li>
                        <li><button class="dropdown-item" @click="handleLogout()">Logga ut</button></li>
                    </ul>
                </div>
                
            
               

            <div class="mx-3 collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Produkter</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/about">Om oss</router-link>
                    </li>
                </ul>
            </div>

           

            
            
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCart from '../shoppingCart/ShoppingCart.vue'

export default {
name: 'Navbar',
components: { 
    ShoppingCart 
},
methods: {
    ...mapActions(['logout']),
    handleLogout() {
        this.logout()
    }
},
computed: {
    ...mapGetters(['cartItemCount', 'loggedIn'])
}   
    
}
</script>
 
<style scoped>
    nav {
        background-color:  rgba(182, 142, 173, 0.788);
    }
    
    .navbar-brand {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 28px;
    }
    .icon {
        border: none;
        box-shadow: none;
    }

    .shopping-cart {
        min-width: 340px;
    }

    .a.hover {
        background: rgba(182, 142, 173, 0.788);
    }

@media (min-width: 992px) {
    .navbar {
        display: flex;
    }
    .navbar-brand {
        order:0;
    }
    .navbar-nav {
        order:1;
    }
    .icon {
        order:2;   
    }
    
}



</style>