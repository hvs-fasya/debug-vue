<template>
  <div>
    <select-lesson :lessonNumber="lessonNumber" class="select-lesson"></select-lesson>
    <div id="home" class="cards-container">
      <menu-card title="Ubüngen" route="ubung" action="Mach die Übungen"></menu-card>
      <menu-card title="WörterBuch" route="wort" action="Lerne die Wörter"></menu-card>
      <menu-card title="Theory" route="theory" action="Lies die Theorie"></menu-card>
    </div>
  </div>
</template>

<script>

import MenuCard from '@/components/MenuCard'
import SelectLesson from '@/components/SelectLesson'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Debug',
      lessonNumber: 1
    }
  },
  components: {
    'menu-card': MenuCard,
    'select-lesson': SelectLesson
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .select-lesson {
    margin-top: 50px;
  }

  .cards-container {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flexbox;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  @media only screen and (max-width: 980px) {
    .cards-container {
      flex-direction: column;
      margin-top: 10px;
    }
  }

</style>
