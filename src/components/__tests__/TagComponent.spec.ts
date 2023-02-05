import TagComponentVue from '@/components/TagComponent.vue'
import { mount } from '@vue/test-utils'

const textSlot = 'My text'

describe('TagComponent mount', () => {
  
  const wrapper = mount(TagComponentVue, { slots: { default: textSlot }})

  it('TagComponent render truthy text ', () => {
    expect(wrapper.text()).toContain(textSlot)
  })

  it('TagComponent don\'t any classes ', () => {
    expect(wrapper.classes().length).toEqual(0)
  })

  it('should match the snapshot ', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})