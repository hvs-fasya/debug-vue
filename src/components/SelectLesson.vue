<template>
  <div>
    <div class="mdc-menu-anchor">
    <button ref="caret" @click="openMenu" @tap="openMenu" class="mdc-button">
      Lesson {{ nummer }}<span class="caret"></span>
    </button>
      <div class="mdc-simple-menu" v-bind:class="{'mdc-simple-menu--open': lessonsOpen }" tabindex="-1">
        <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
          <li @click="setLesson" v-for="number in lessonNumbers" class="mdc-list-item" role="menuitem" tabindex="0" :lessonId="number">Lesson {{ number }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['lessonNumber'],
  data () {
    return {
      nummer: 1,
      lessonsOpen: false,
      lessonNumbers: Array.apply(null, Array(7)).map(function (_, i) { return i + 1 })
    }
  },
  methods: {
    documentClick: function (e) {
      let el = this.$refs.caret
      if (e.target !== el) {
        this.closeMenu()
      }
    },
    openMenu: function () {
      document.addEventListener('click', this.documentClick)
      this.lessonsOpen = true
    },
    closeMenu: function () {
      this.lessonsOpen = false
      document.removeEventListener('click', this.documentClick)
    },
    setLesson: function (e) {
      this.nummer = Number(e.target.getAttribute('lessonId'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .caret {
    vertical-align: middle;
    display: inline-block;
    margin-left: 3px;
    border-width: 5px;
    border-style: solid;
    border-right: 5px solid transparent;
    border-color: var(--mdc-theme-primary) transparent transparent;
    width: 0;
    height: 0;
  }
  .mdc-menu-anchor {
    overflow: visible;
    position: relative;
  }
  .mdc-simple-menu {
    top: 0; 
    left: 0;
  }

</style>
