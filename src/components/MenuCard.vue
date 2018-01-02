<template>
<div @click="goToRoute" @tap="goToRoute">
  <div class="mdc-card demo-card">
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
<style>
  .mdc-card {
    margin: 16px;
  }
  .demo-card {
    background-color: var(--mdc-theme-background);
  }
</style>
