<template lang='pug'>
q-page.relative(padding)
  .absolute-top-right.q-pr-md.q-pt-sm
    CloseButton(color='primary')
  .column.q-gutter-md.q-px-lg
    .text-h5.text-primary.text-bold.flex.justify-center
      |Рецепт №
      span.text-accent.q-mx-sm {{ item.number }}
      |от
      span.text-accent.q-mx-sm {{ item.date_parent }}.
      |Статус -
      RecipeStatusLabel.q-ml-sm(:status='item.status?.id') {{ item.status?.name || 'неизвестен' }}
      RecipeStatusIcon.q-ml-md(size='md' :status='item.status?.id')
  q-tabs.q-pl-xl(
    v-model='tab'
    dense
    align='left'
    )
    q-tab(name='info' label='Информация')
    q-tab(name='file' label='Файл рецепта')

  q-tab-panels(animated v-model='tab')
    q-tab-panel(name='info')
      InfoTab(:item='item')
    q-tab-panel(name='file')
      PdfTab.scroll.q-mx-auto.pdf-view(:uuid='item?.uuid')
</template>

<script>
import { recipeSymbol } from 'src/api/dependency'
import RecipeStatusIcon from 'components/icons/RecipeStatusIcon.vue'
import RecipeStatusLabel from 'components/labels/RecipeStatusLabel.vue'
import InfoTab from './InfoTab.vue'
import PdfTab from './PdfTab.vue'
import CloseButton from 'components/buttons/CloseButton.vue'
export default {
  name: 'RecipeProfile',
  inject: {
    recipe: recipeSymbol
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      item: {},
      tab: 'file'
    }
  },

  methods: {
    async handleLoad () {
      const item = await this.recipe.get(this.id)
      this.item = item
    }
  },
  mounted () {
    this.handleLoad()
  },
  components: { RecipeStatusIcon, RecipeStatusLabel, CloseButton, InfoTab, PdfTab }
}
</script>

<style lang="scss">
.pdf-view {
  height:75vh;
  width:95%;
  padding:0 50px;
}
</style>
