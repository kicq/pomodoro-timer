import commonEn from './en.common.json'
import commonRu from './ru.common.json'
import tipsEn from './en.tips.json'
import tipsRu from './ru.tips.json'
import { computed, ref, Ref } from 'vue'


class Locale {
  private list = {
    en: {
      ...commonEn,
      ...tipsEn
    },
    ru: {
      ...commonRu,
      ...tipsRu
    }
  }
  private _lang: Ref<keyof typeof this.list> = ref(
    this.defaultLang
  )

  get lang(){
    return this._lang.value
  }

  get defaultLang (): keyof typeof this.list {
    const lang = window.navigator.language.slice(0, 2)
    return Object.keys(this.list).includes(lang) ? lang as keyof typeof this.list: 'en'
  }

  locales = computed(() => this.list[this._lang.value])

  setLocale(name: 'en' | 'ru'){
    this._lang.value = name
    console.log('lang', this._lang.value)
  }
}


export default new Locale()
