<template>
  <div>
    
    <!-- Aquí agregamos el router-view que mostrará el componente de la ruta actual -->
    <router-view></router-view>
  </div>
</template>

<script>
// No necesitas importar MyComponent aquí, ya que se cargará dinámicamente según la ruta.

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
