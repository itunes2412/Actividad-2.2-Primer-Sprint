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
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/nosotros"></router-link></li>
        <li><router-link to="/propiedades"></router-link></li>
        <li><router-link to="/proyectos"></router-link></li>
        <li><router-link to="/promoción"></router-link></li>
        <li><router-link to="/contacto"></router-link></li>
        <li><router-link to="/blog"></router-link></li>
      </ul>
      
    </nav>

    <!-- Contenido de la Página -->
    <main class="content">
      <!-- Sección de Inicio -->
      <section class="inicio-section">
      

    
      </section>

      <div class="login-block">
        <h2 style="color: #ba8c26;">Registro</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username" style="color: #1f1f1f;">Nombre</label>
            <input type="text" id="username" name="username" v-model="formData.username" required class="input-field">
          </div>
          <div class="form-group">
            <label for="password" style="color: #1f1f1f;">Apellidos</label>
            <input type="password" id="password" name="password" v-model="formData.password" required class="input-field">
          </div>
          <div class="form-group">
            <label for="password" style="color: #1f1f1f;">Correo Electronico</label>
            <input type="password" id="password" name="password" v-model="formData.password" required class="input-field">
          </div>
          <div class="form-group">
            <label for="password" style="color: #1f1f1f;">Nombre de Usuario </label>
            <input type="password" id="password" name="password" v-model="formData.password" required class="input-field">
          </div>
          <div class="form-group">
            <label for="password" style="color: #1f1f1f;">Contraseña</label>
            <input type="password" id="password" name="password" v-model="formData.password" required class="input-field">
          </div>
          <div class="form-group">
            <label for="password" style="color: #1f1f1f;">Confirmar Contraseña</label>
            <input type="password" id="password" name="password" v-model="formData.password" required class="input-field">
          </div>
          <button type="submit" :disabled="loading" class="login-button">Registrar</button>
        </form>
        <p v-if="error" class="error-message" style="color: #FF0000;">{{ error }}</p>
        

      </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <!-- Resto del contenido de la página -->
      <!-- Puedes agregar más secciones y contenido aquí -->
    </main>

    <!-- Footer -->
    <footer class="footer">
      <table>
        <!-- Información del footer -->
        <!-- Ajusta los estilos según tus necesidades -->
      </table>
      <p style="font-size: 12px; color: #ba8c26;">&copy; 2023 House Finder. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logoScale: 1, // Escala inicial del logo
      showLoginBlock: false, // Controla la visibilidad del bloque de inicio de sesión
      formData: {
        username: '',
        password: '',
      },
      loading: false,
      error: '',
    };
  },
  methods: {
    toggleLogoSize() {
      // Cambia la escala del logo al 150% cuando se hace clic
      this.logoScale = this.logoScale === 1 ? 1.5 : 1;
    },
    login() {
      // Aquí puedes agregar la lógica de autenticación.
      // Simulación de una solicitud asincrónica con un timeout.
      this.loading = true;
      setTimeout(() => {
        if (this.formData.username === 'usuario' && this.formData.password === 'contraseña') {
          // Autenticación exitosa, redirigir al usuario o realizar otras acciones.
          this.error = '';
        } else {
          // Error de autenticación.
          this.error = 'Credenciales incorrectas. Inténtalo de nuevo.';
        }
        this.loading = false;
      }, 2000);
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
  background-color: var(--primary-bg-color);
  color: var(--menu-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

/* Estilos para el logo */
.logo img {
  max-height: 150px;
  transition: max-height 0.3s ease;
  cursor: pointer;
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
  color: var(--menu-text-color);
  transition: color 0.3s ease;
}

.menu li a:hover {
  color: var(--menu-text-hover-color);
}

.login-block {
  width: 30%;
  padding-right: 10%;
  margin: 0;
  margin-left: auto; /* Mueve el bloque al lado derecho de la ventana */
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
  margin-right: 0px; /* Añadido margen derecho */
}

.login-button:hover {
  background-color: #12407c; /* Negro en hover */
  color: #fff; /* Texto blanco en hover */
}

/* Estilos para el formulario */
.form-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Resto de tus estilos */
/* Ajusta los estilos según tus necesidades y utiliza las variables de color definidas. */
</style>
