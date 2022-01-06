export const formatSnils = snils => (typeof snils === 'string' && snils.length === 11)
  ? snils.match(/(\d{3})(\d{3})(\d{3})(\d{2})/).slice(1, 5).map((el, i) => i === 2 ? el + ' ' : i === 3 ? el : el + '-').join('')
  : snils

export const formatBoolean = val => val ? 'ДА' : 'НЕТ'
