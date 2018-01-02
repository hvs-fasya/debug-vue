<template>
<div class="flip-container" v-bind:class="{ flip: translated }">
    <div class="flipper">
      <div class="front">
        <div @tap="translated=!translated" @click="translated=!translated" class="mdc-card wort-card">
          <section class="mdc-card__media">
          <section class="mdc-card__media-item mdc-card__media-item--1x">
            <h1 class="mdc-card__title mdc-card__title--large">{{ artikel }} {{ text }}</h1>
            <section class="mdc-card__supporting-text" v-if="!translated && wort.speech_part == 'subst'">
              <i>plural: die {{wort.plural}}</i>
            </section>
          </section>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['wort'],
  data () {
    return {
      translated: false
    }
  },
  computed: {
    'artikel': function () {
      if (this.wort.speech_part !== 'subst' || this.translated === true) {
        return ''
      }
      switch (this.wort.gender) {
        case 'm':
          return 'der'
        case 'f':
          return 'die'
        case 'n':
          return 'das'
      }
    },
    'text': function () {
      if (this.translated) {
        return this.wort.translation
      }
      return this.wort.text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mdc-card {
    margin: 16px;
  }
  .wort-card {
    background-color: var(--mdc-theme-background);
  }
  h1.mdc-card__title {
    padding-left: 16px;
  }

  .flip-container {
    perspective: 1000px;
  }
  /* flip the pane */
  .flip-container.flip .flipper {
    transform: rotateY(360deg);
  }
  .flip-container, .front {
    width: 300px;
    height: 200px;
  }
  /* flip speed goes here */
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }
  /* hide back of pane during swap */
  .front {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }
  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }
</style>
