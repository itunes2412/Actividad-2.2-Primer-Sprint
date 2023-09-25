<template>
    <div class="app">
      <!-- Menú de Navegación -->
      <nav class="navbar">
        <div class="logo" @click="toggleLogoSize">
          <img
            :style="{ 'transform': `scale(${logoScale})` }"
            src="/logo.png"
            alt="Logo"
            @click.stop
          />
        </div>
        <ul class="menu">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/nosotros.vue">Nosotros</router-link></li>
          <li><router-link to="/propiedades">Propiedades</router-link></li>
          <li><router-link to="/proyectos">Proyectos</router-link></li>
          <li><router-link to="/promocion">Promoción</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
        <button class="login-button">Iniciar Sesión</button>
      </nav>
  
      <!-- Contenido de la Página -->
      <main class="content">
        <!-- Sección de Inicio -->
        <section class="inicio-section">
          <!-- Banner -->
          <div class="banner">
            <img src="/.jpg" alt="Banner" />
          </div>
  
          <!-- Texto de Inicio -->
          <div class="inicio-text">
            <h1>Bienvenidos a HOUSE FINDER</h1>
            <p>AQUI SERA PROYECTOS</p>
          </div>
        </section>
  
        <!-- Resto del contenido de la página -->
        <!-- Puedes agregar más secciones y contenido aquí -->
      </main>
  
      <!-- Footer -->
      <footer class="footer">
        <table>
          <!-- Contenido del footer -->
          <!-- ... (código del footer anterior) ... -->
        </table>
        <p style="font-size: 12px;">&copy; 2023 House Finder. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        logoScale: 1, // Escala inicial del logo
      };
    },
    methods: {
      toggleLogoSize() {
        // Cambia la escala del logo al 150% cuando se hace clic
        this.logoScale = this.logoScale === 1 ? 1.5 : 1;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el esqueleto de la página */
  .app {
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
  
  /* Estilos para el menú de navegación */
  .navbar {
    background-color: #ffffff; /* Azul indigo */
    color: #fff; /* Texto blanco */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  
  /* Estilos para el logo */
  .logo img {
    max-height: 150px; /* Tamaño inicial del logo */
    transition: max-height 0.3s ease; /* Transición suave de tamaño */
    cursor: pointer; /* Cambia el cursor al hacer clic */
  }
  
  /* Estilos para el menú */
  .menu {
    list-style: none;
    display: flex;
    gap: 20px;
    margin-left: 10px;
  }
  
  .menu li a {
    text-decoration: none;
    color: #1f1f1f; /* Texto blanco */
    transition: color 0.3s ease;
  }
  
  .menu li a:hover {
    color: #ba8c26; /* Dorado en hover */
  }
  
  /* Estilos para el botón de inicio de sesión */
  .login-button {
    background-color: #caa24c; /* Dorado */
    color: #292929; /* Texto negro */
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-right: 100px; /* Añadido margen derecho */
  }
  
  .login-button:hover {
    background-color: #12407c; /* Negro en hover */
    color: #fff; /* Texto blanco en hover */
  }
  
  /* Estilos para la sección de inicio */
  .inicio-section {
    /* Personaliza los estilos de la sección de inicio aquí */
  }
  
  /* Estilos para el banner */
  .banner {
    /* Personaliza los estilos del banner aquí */
  }
  
  /* Estilos para el texto de inicio */
  .inicio-text {
    /* Personaliza los estilos del texto de inicio aquí */
  }
  
  /* Estilos para el botón "Aprende Más" */
  .btn-learn-more {
    /* Personaliza los estilos del botón "Aprende Más" aquí */
  }
  </style>
  