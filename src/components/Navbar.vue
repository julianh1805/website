<template>
    <div class="container">
      <nav id="navbar">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDMgNTEyLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzUxLjk4LDBjLTI3LjI5NiwxLjg4OC01OS4yLDE5LjM2LTc3Ljc5Miw0Mi4xMTJjLTE2Ljk2LDIwLjY0LTMwLjkxMiw1MS4yOTYtMjUuNDcyLDgxLjA4OCAgICBjMjkuODI0LDAuOTI4LDYwLjY0LTE2Ljk2LDc4LjQ5Ni00MC4wOTZDMzQzLjkxNiw2MS41NjgsMzU2LjU1NiwzMS4xMDQsMzUxLjk4LDB6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00NTkuODUyLDE3MS43NzZjLTI2LjIwOC0zMi44NjQtNjMuMDQtNTEuOTM2LTk3LjgyNC01MS45MzZjLTQ1LjkyLDAtNjUuMzQ0LDIxLjk4NC05Ny4yNDgsMjEuOTg0ICAgIGMtMzIuODk2LDAtNTcuODg4LTIxLjkyLTk3LjYtMjEuOTJjLTM5LjAwOCwwLTgwLjU0NCwyMy44NC0xMDYuODgsNjQuNjA4Yy0zNy4wMjQsNTcuNDA4LTMwLjY4OCwxNjUuMzQ0LDI5LjMxMiwyNTcuMjggICAgYzIxLjQ3MiwzMi44OTYsNTAuMTQ0LDY5Ljg4OCw4Ny42NDgsNzAuMjA4YzMzLjM3NiwwLjMyLDQyLjc4NC0yMS40MDgsODgtMjEuNjMyYzQ1LjIxNi0wLjI1Niw1My43OTIsMjEuOTIsODcuMTA0LDIxLjU2OCAgICBjMzcuNTM2LTAuMjg4LDY3Ljc3Ni00MS4yOCw4OS4yNDgtNzQuMTc2YzE1LjM5Mi0yMy41ODQsMjEuMTItMzUuNDU2LDMzLjA1Ni02Mi4wOCAgICBDMzg3Ljg1MiwzNDIuNjI0LDM3My45MzIsMjE5LjE2OCw0NTkuODUyLDE3MS43NzZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
        <span>
          <router-link class="navbar-item" to="/">Accueil</router-link>
          <router-link class="navbar-item" to="/formation">Formation</router-link>
          <router-link class="navbar-item" to="/experiences">Experiences</router-link>
          <router-link class="navbar-item" to="/qualites">Qualites</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>
      </span>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss">
.container{
    padding: 5px 0;
  nav#navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    img{
      width: 36px;
  }
  span{
    display: flex;
    .navbar-item.router-link-active{
      &::before {
        width: 12px;
        background-color: $font-wbg-color;
      }
    }
    .navbar-item {
      color: $font-wbg-color;
      margin-right: 10px;
      display: block;
      position: relative;
      padding: 3px 0;
      text-decoration: none;
      &:hover{
        color: $font-wbg-hover-color;
        transition-duration: 300ms;
        cursor: pointer;
        &::before{
          width: 100%;
          background-color: $font-wbg-hover-color;
        }
      }
      &::before{
        content: "";
        position: absolute;
        bottom: -.2rem;
        left: 50%;
        width: 0;
        height: 2px;
        background-color: $font-wbg-color;
        transform: translateX(-50%);
        transition: width 175ms cubic-bezier(.4,.25,.3,1);
      }
    }
  }
  }
}
</style>
