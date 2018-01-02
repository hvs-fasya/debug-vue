<template>
  <div class="wort-container">
      <select-lesson :lessonNumber="lessonNumber"></select-lesson>
      <wort-card :wort="wort" ref="card"></wort-card>
      <div class="mdc-slider" tabindex="0" role="slider">
        <div class="mdc-slider__track-container">
            <div class="mdc-slider__track"></div>
        </div>
        <div class="mdc-slider__thumb-container" :style="sliderX">
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
          <div class="mdc-slider__focus-ring"></div>
        </div>
      </div>
      <div @click="next" @tap="next" class="next-container">
        <button class="mdc-button"><i>weiter... </i></button>
      </div>
  </div>
</template>

<script>

import WortCard from '@/components/WortCard'
import SelectLesson from '@/components/SelectLesson'

let words = [
  {text: 'Tisch', plural: 'Tische', translation: 'стол', speech_part: 'subst', gender: 'm', lesson: 1},
  {text: 'Lampe', plural: 'Lampen', translation: 'лампа', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Buch', plural: 'Bücher', translation: 'книга', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'Stuhl', plural: 'Stühle', translation: 'стул', speech_part: 'subst', gender: 'm', lesson: 1},
  {text: 'Tasche', plural: 'Taschen', translation: 'сумка', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Bild', plural: 'Bilder', translation: 'картина', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'Schrank', plural: 'Schränke', translation: 'шкаф', speech_part: 'subst', gender: 'm', lesson: 1},
  {text: 'Blume', plural: 'Blumen', translation: 'цветок', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Wort', plural: 'Worte', translation: 'слово', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'Vase', plural: 'Vasen', translation: 'ваза', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Haus', plural: 'Häuser', translation: 'дом', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'Straße', plural: 'Straßen', translation: 'улица', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Zimmer', plural: 'Zimmer', translation: 'комната', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Übung', plural: 'Übungen', translation: 'упражнение', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Kind', plural: 'Kinder', translation: 'ребенок', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'Mensch', plural: 'Menschen', translation: 'человек', speech_part: 'subst', gender: 'm', lesson: 1},
  {text: 'Zeitung', plural: 'Zeitungen', translation: 'газета', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Lehrer', plural: 'Lehrer', translation: 'учитель', speech_part: 'subst', gender: 'm', lesson: 1},
  {text: 'Zeitschrift', plural: 'Zeitschriften', translation: 'журнал', speech_part: 'subst', gender: 'f', lesson: 1},
  {text: 'Mädchen', plural: 'Mädchen', translation: 'девушка', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'Spielzeug', plural: 'Spielzeug', translation: 'игрушка', speech_part: 'subst', gender: 'n', lesson: 1},
  {text: 'groß', translation: 'большой', speech_part: 'adj', lesson: 1}
]

export default {
  name: 'wort',
  data () {
    return {
      index: 0,
      lessonNumber: 1
    }
  },
  computed: {
    'wort': function () {
      return words[this.index]
    },
    'sliderX': function () {
      return 'transform:translateX(' + this.index * (288 / words.length) + 'px)'
    }
  },
  components: {
    'wort-card': WortCard,
    'select-lesson': SelectLesson
  },
  methods: {
    next: function () {
      if (this.index === words.length - 1) {
        this.$refs.card.translated = false
        this.index = 0
      } else {
        this.$refs.card.translated = false
        this.index = this.index + 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .next-container {
    height: 200px;
    width: 300px;
    text-align: right;
  }
  .mdc-slider {
    width: 300px;
  }
  
  @media only screen and (min-width: 980px) {
    .wort-container {
      margin-left: 10%;
    }
  }

</style>
