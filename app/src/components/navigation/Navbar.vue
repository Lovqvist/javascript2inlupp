<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark ">
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
            
            <router-link class="navbar-brand" to="/"><span>MySHOP</span></router-link>
            <div class="icon">
                <a class="text-dark" href="#">
                    <i class="fas fa-user"></i>
                </a>
                <a class="mx-2 text-dark" href="#">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </div>
            
            <div class="mx-3 collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/about">About Us</router-link>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
</template>

<script>
export default {

}
</script>
 
<style scoped>
    
    .navbar-brand {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 28px;
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