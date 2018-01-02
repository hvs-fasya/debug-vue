<template>
  <v-touch id="app">
    <toolbar></toolbar>
    <div class="mdc-toolbar-fixed-adjust">
      <router-view></router-view>
    </div>
  </v-touch>
</template>

<script>

import Toolbar from '@/components/Toolbar'

export default {
  name: 'app',
  components: {
    'toolbar': Toolbar
  }
}
</script>

<style>

div {
  display: block;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
        --mdc-theme-primary: #7a8e77;
        --mdc-theme-primary-light: #b0cead;
        --mdc-theme-primary-dark: #384237;
        --mdc-theme-secondary: #bc6486;
        --mdc-theme-secondary-light: #f98eb7;
        --mdc-theme-secondary-dark: #59152c;
        --mdc-theme-background: #f9f59d;
      }

.mdc-toolbar-fixed-adjust {
  margin-top: 90px;
}
</style>
