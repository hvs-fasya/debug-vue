<template>
  <div id="toolbar">
  <header class="mdc-toolbar mdc-toolbar--fixed">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span class="mdc-toolbar__title">{{ title }}</span>
        </section>
        <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
          <a href="#" @click="openMenu" @tap="openMenu" class="material-icons mdc-toolbar__icon toggle" aria-label="More" alt="More" ref="more">more_vert</a>
          <div class="mdc-menu-anchor">
              <div class="mdc-simple-menu" v-bind:class="{'mdc-simple-menu--open': menuOpen }" tabindex="-1">
                <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                  <li @click="goToRoute('/')" class="mdc-list-item" role="menuitem" tabindex="0">
                    Home
                  </li>
                  <li @click="goToRoute('ubung')" class="mdc-list-item" role="menuitem" tabindex="0">
                    Übungen
                  </li>
                  <li @click="goToRoute('wort')" class="mdc-list-item" role="menuitem" tabindex="0">
                    Wörterbch
                  </li>
                  <li @click="goToRoute('theory')" class="mdc-list-item" role="menuitem" tabindex="0">
                    Theory
                  </li>
                </ul>
              </div>
          </div>
        </section>
      </div>
    </header>
    </div>
</template>

<script>

import Router from '@/router/index.js'

export default {
  name: 'toolbar',
  data () {
    return {
      title: 'DeBug',
      menuOpen: false
    }
  },
  methods: {
    documentClick: function (e) {
      let el = this.$refs.more
      if (e.target !== el) {
        this.closeMenu()
      }
    },
    openMenu: function () {
      this.menuOpen = true
      document.addEventListener('click', this.documentClick)
    },
    closeMenu: function () {
      this.menuOpen = false
      document.removeEventListener('click', this.documentClick)
    },
    goToRoute: function (route) {
      Router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mdc-menu-anchor {
  position: relative;
  overflow: visible;
}

.mdc-simple-menu {
  transform-origin: right top 0px;
  right: 0px; 
  top: 0px; 
  transform: scale(1, 1);
  margin: 8px;
}
</style>
