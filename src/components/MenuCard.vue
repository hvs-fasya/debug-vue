<template>
<div @click="goToRoute" @tap="goToRoute" class="card-container">
  <div class="mdc-card menu-card">
    <section class="mdc-card__media">
      <h1 class="mdc-card__title mdc-card__title--large">{{ title }}</h1>
    <section class="mdc-card__actions">
      <button class="mdc-button mdc-button--compact mdc-card__action">{{ action }}</button>
    </section>
    </section>
  </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: ['title', 'route', 'action'],
  data () {
    return {
      msg: 'Debug'
    }
  },
  methods: {
    'goToRoute': function () {
      this.$router.push(this.route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mdc-card {
    margin: 16px;
  }
  .menu-card {
    background-color: var(--mdc-theme-background);
  }

  .card-container {
      min-width: 300px;
    }

  @media only screen and (max-width: 980px) {
    
    .card-container {
      
    }
    .mdc-card {
     max-width: 300px;
     margin-right: auto;
     margin-left: auto;
     margin-bottom: 16px;
     margin-top: 16px;
    }
  }
</style>
