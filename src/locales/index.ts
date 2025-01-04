import { createI18n } from 'vue-i18n'
import trTR from '@/locales/lang/tr.json'
import enUS from '@/locales/lang/en.json'
import { dateFormats } from '@/locales/constant'

const i18n = createI18n({
  legacy: false,
  locale: 'tr-TR',
  fallbackLocale: 'en-US',
  dateFormats,
  numberFormats: {
    'tr-TR': {
      currency: {
        style: 'currency',
        currency: 'TRY',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
    },
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
    },
  },
  messages: {
    'tr-TR': trTR,
    'en-US': enUS,
  },
  devtools: !import.meta.env.PROD,
  missing: (locale, key) => {
    console.error(`i18n :: missing key: ${key}`)
    return key
  },
})

export default i18n
