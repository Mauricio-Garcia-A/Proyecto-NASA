<script>
  import svelteLogo from './imagenes/logo.png'
  import sun from './imagenes/sun.png'
  import moon from './imagenes/moon.png'
  import earth from './imagenes/earth.png'
   import fondo from './imagenes/fondo.jpg'
</script>

<main>
  <div class='contenedor-logo'>
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </div>

  <div class='contenedor-items'>
      <div class='item'>
          <img src={moon} class="logo astro" alt="Vite Logo" />
          <h1>MOON</h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta
          </p>
          <button>Ver Mapa</button>
      </div>
      <div  class='item'>
          <img src={earth} class="logo astro" alt="Vite Logo" />
          <h1>EARTH</h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta
          </p>
          <button>Ver Mapa</button>
      </div>
      <div  class='item'>
          <img src={sun} class="logo astro" alt="Vite Logo" />
          <h1>SUN</h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T. persona que se dedica a la imprenta
          </p>
          <button>Ver Mapa</button>
      </div>
  </div>
  
</main>

<style>
  .contenedor-logo{
    width: 100px;
    height: 300px;
  }
  main {
    background: rgb(31, 29, 29);
    {
   background-image: url('../imagenes/fondo.jpg');
   background-repeat: repeat;
   background-attachment: fixed;
   background-size: 100%;
}
    width: 100%;
    margin: 0;
    padding: 10px;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo.astro {
    height: 400px;
    position: absolute;
    top: -200px;
    left:-20px;
    
    
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  .contenedor-items {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    

  }
  .item {
    background: rgba(158, 158, 158, 0.619);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 180px;
    padding-bottom: 20px;
    width: 420px;
  }
</style>
