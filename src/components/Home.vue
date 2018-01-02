<template>
  <div id="home">
    <menu-card title="Ubüngen" route="ubung" action="Mach die Übungen"></menu-card>
    <menu-card title="WörterBuch" route="wort" action="Lerne die Wörter"></menu-card>
    <menu-card title="Theory" route="theory" action="Lies die Theorie"></menu-card>
  </div>
</template>

<script>

import MenuCard from '@/components/MenuCard'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Debug'
    }
  },
  components: {
    'menu-card': MenuCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
