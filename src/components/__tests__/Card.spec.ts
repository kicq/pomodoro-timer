import { State } from '@/timer'
import { mount } from '@vue/test-utils'
import CardVue from '../Card.vue'

describe('Card.vue', () => {
  interface Props{
    seconds: number
    value: number
    isBreakTime: boolean
    state: State
  }

  const props: Props = {
    seconds: 0,
    value: 0,
    isBreakTime: false,
    state: 'running'
  }
  
  const wrapper = mount(CardVue, {props})
  it('test snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  
})