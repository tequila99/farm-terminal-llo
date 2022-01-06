<template lang='pug'>
.column
  .row.q-mt-sm.q-col-gutter-md
    .col-8
      CommonInput(:modelValue='item.name_mo' label='Медицинская организация, выписавшая рецепт' readonly)
        q-tooltip {{ item.name_mo }}
    .col-4
      CommonInput(:modelValue='item.doctor' label='Врач, выписавший рецепт' readonly)
  .row.q-mt-lg.q-col-gutter-md
    .col-6
      CommonInput(:modelValue='item.patient' label='ФИО лица, на которое выписан рецепт' readonly)
    .col-3
      CommonInput(:modelValue='formatSnils' label='СНИЛС лица, на которое выписан рецепт' readonly)
    .col-3
      CommonInput(:modelValue='item.birth_date' label='Дата рождения' readonly)
  .row.q-mt-xs.q-col-gutter-md
    .col-3
      CommonInput(:modelValue='item.source?.name' label='Бюджет' readonly)
    .col-2
      CommonInput(:modelValue='item.code_lgoty' label='Код льготы' readonly)
    .col-7
      CommonInput(:modelValue='item.name_lgoty' label='Наименование льготы' readonly)
        q-tooltip {{ item.name_lgoty }}
  .row.q-mt-xs.q-col-gutter-md
    .col-2
      CommonInput(:modelValue='item.code_diagnosis' label='Код МКБ' readonly)
    .col-10
      CommonInput(:modelValue='item.name_diagnosis' label='Наименование диагноза' readonly)
        q-tooltip {{ item.name_diagnosis }}
  .row.q-mt-xs.q-col-gutter-md
    .col-12
      CommonInput(:modelValue='item.drug_name' label='Наименование лекарства' readonly type='textarea')
  .row.q-mt-xs.q-col-gutter-md
    .col-2
      CommonInput(:modelValue='item.quantity' label='Количество (d.t.d)' readonly)
    .col-2
      CommonInput(:modelValue='item.use_duration' label='Длительность приема' readonly)
    .col-4
      CommonInput(:modelValue='item.admission_method' label='Схема приема' readonly)
    .col-2
      CommonInput(:modelValue='formatVzn' label='Признак ВЗН' readonly)
    .col-2
      CommonInput(:modelValue='formatCommission' label='Протокол ВК' readonly)
</template>

<script>
import CommonInput from 'components/inputs/CommonInputLabel.vue'
import { formatSnils, formatBoolean } from 'src/helpers'
export default {
  name: 'InfoTab',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    formatSnils () {
      return formatSnils(this.item.snils)
    },
    formatVzn () {
      return formatBoolean(this.item.vzn)
    },
    formatCommission () {
      return formatBoolean(this.item.commission_protocol)
    }
  },
  components: { CommonInput }
}
</script>
