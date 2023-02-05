import { shallowMount } from '@vue/test-utils'
import TipComponentVue from '../TipComponent.vue'
import loc from '@/locales'

describe('check TipComponent', () => {
  
  const wrapper = shallowMount(TipComponentVue)

  it('should be mounted correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  it('should show correct tipName', () => {
    expect(wrapper.text()).toContain(loc.locales.value.tipName)
  })

  it('display text include from locales', () => {
   expect(loc.locales.value.tips.some(item => wrapper.text().includes(item))).toBeTruthy()
  })
})
