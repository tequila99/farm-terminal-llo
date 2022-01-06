<template lang='pug'>
//- @virtual-scroll='handleScroll'
//- @row-click='editRecipe'
q-page(padding)
  q-table(
    :rows='itemsCured'
    :columns='columns'
    row-key='uuid'
    flat
    ref='table'
    virtual-scroll
    hide-bottom
    :pagination.sync='pagination'
    table-header-class='text-accent text-medium'
    :table-header-style='{"background-color": isDark ? "#121212" : "#ffffff"}'
    class='recipe-table-llo'
    selection='single'
    v-model:selected='selectedItems'
    @virtual-scroll='handleScroll'
    @row-click='handleRecipe'
    )
    template(#body-cell-status='{ value: { id, recipe_id, name } }')
      q-td.cursor-pointer(style='width:60px;max-width:60px')
        RecipeStatusIcon(:status='id' size='sm')
        q-tooltip {{ name }}
    template(#body-cell-number='{ value, row: { dateParent }}')
      q-td(style='width:60px;max-width:60px;')
        div {{ value }}
        .text-grey-7 {{ dateParent }}
    template(#body-cell-division='{ value: { division, id }, row: { dateChange }}')
      q-td(style='width:140px;max-width:160px;')
        .ellipsis.cursor-pointer(v-if='id !== 1') {{ division ? division.short_name : ''}}
          q-tooltip(v-if='division') {{ division.name }}
        .text-grey-7(v-if='id !==1') {{ dateChange }}
    template(#body-cell-patient='{ value, row: { snils }}')
      q-td(style='width:190px;max-width:250px;')
        .ellipsis.text-bold {{ value }}
        .caption.text-grey-7 {{ snils }}
    template(#body-cell-lgota='{ value, row: { name_lgoty, source, code_diagnosis, name_diagnosis }}')
      q-td(style='width:60px;max-width:60px;')
        .text-center {{ source }}
        .text-center.cursor-pointer
          span.text-primary.text-bold {{ value }}
            q-tooltip {{ name_lgoty }}
          span.text-grey-7 &nbsp;({{ code_diagnosis }})
            q-tooltip {{ name_diagnosis }}
    template(#body-cell-doctor='{ value, row: { name_mo }}')
      q-td(style='width:150px;max-width:180px;white-space:normal;')
        .text-bold {{ value }}
        .text-teal.ellipsis.cursor-pointer {{ name_mo }}
          q-tooltip {{ name_mo }}
    template(#body-selection='scope')
      q-checkbox(v-model='scope.selected' size='xs' color='teal' keep-color)
</template>

<script>
import { format, parseISO } from 'date-fns'
import { formatSnils } from 'src/helpers'
import RecipeStatusIcon from 'components/icons/RecipeStatusIcon.vue'
import { recipeSymbol, barcodeSymbol } from 'src/api/dependency'
export default {
  name: 'RecipeTable',
  inject: {
    recipe: recipeSymbol,
    barcode: barcodeSymbol
  },
  props: {},
  data () {
    return {
      items: [],
      pagination: { rowsPerPage: 0 },
      selectedItems: [],
      columns: [
        {
          name: 'status',
          required: true,
          label: 'Статус',
          align: 'center',
          field: 'status',
          headerStyle: 'text-align:center!important;width:50px;max-width:50px;'
        },
        {
          name: 'number',
          required: true,
          label: 'Номер / Дата',
          align: 'center',
          field: 'number',
          headerStyle: 'text-align:center!important'
        },
        {
          name: 'division',
          required: true,
          label: 'Изменён',
          align: 'center',
          field: 'status',
          headerStyle: 'text-align:center!important'
        },
        {
          name: 'patient',
          required: true,
          label: 'Пациент/СНИЛС',
          field: 'patient',
          align: 'left',
          headerStyle: 'text-align:center!important'
        },
        {
          name: 'name',
          required: true,
          label: 'Препарат',
          field: 'drug_name',
          align: 'left',
          style: 'white-space:normal;',
          classes: 'column__name text-positive text-bold',
          headerStyle: 'text-align:center!important'
        },
        {
          name: 'lgota',
          required: true,
          label: 'Бюджет/льгота',
          field: 'code_lgoty',
          align: 'rigth',
          headerStyle: 'text-align:center!important'
        },
        {
          name: 'doctor',
          required: true,
          label: 'Врач/МО',
          field: 'doctor',
          align: 'rigth',
          headerStyle: 'text-align:center!important'
        }
      ]
    }
  },
  watch: {
    query (val) {
      this.handleLoad()
    },
    lloPrescription (val) {
      console.log('Прочитан льготный рецепт')
    }
  },
  computed: {
    isDark () {
      return this.$q.dark.isActive
    },
    itemsCured () {
      return this.items.map(el => ({
        ...el,
        dateParent: format(parseISO(el.date_parent), 'dd.MM.yyyy'),
        snils: el.snils ? formatSnils(el.snils) : '',
        dateChange: format(parseISO(el.status.change_date), 'dd.MM.yyyy')
      }))
    },
    query () {
      return this.$route.query.q || ''
    },
    lloPrescription () {
      return this.barcode.lloPrescription
    }
  },
  methods: {
    async handleLoad () {
      const items = await this.recipe.filter(this.query)
      this.items = Object.freeze(items)
    },
    async handleScroll ({ index, to, direction }) {
      if (index === to && direction === 'increase' && this.items.length > 1) {
        const items = await this.recipe.next()
        this.items = items
      }
    },
    handleRecipe (e, { id }) {
      this.$router.push({ path: `/recipe/${id}` })
    }
  },
  mounted () {
    this.handleLoad()
  },
  components: {
    RecipeStatusIcon
  }
}
</script>

<style lang='scss'>
.recipe-table-llo {
  height: 850px;
  th {
    font-size: 18px;
  }
  tbody td {
    font-size: 18px;
    @media screen and (max-width: 1439px) {
      font-size: 17px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 16px;
    }
    @media screen and (max-width: 599px) {
      font-size: 15px;
    }
  }
  .column__name {
    font-size: 15px;
    @media screen and (max-width: 1439px) {
      font-size: 14px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 13px;
    }
    @media screen and (max-width: 599px) {
      font-size: 12px;
    }
  }
  thead tr th {
    position: sticky;
    z-index: 1;
  }
  thead tr:first-child th {
    top: 0;
  }
   & ::-webkit-scrollbar {
     width: 6px;
     background-color: #ccc;
   }
   & ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: #a8a8a8;
    box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0,0,0,0.1)
   }
   & ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #707070;
   }
}
</style>
