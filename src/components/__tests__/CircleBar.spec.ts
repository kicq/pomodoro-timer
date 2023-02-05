import { mount } from '@vue/test-utils'
import CircleBarVue from '../CircleBar.vue'


describe('CircleBar.vue', () => {

  const props = {
    size: 50,
    thin: 10
  }

  const wrapper = mount(CircleBarVue, {
    props
  })

  it('should be correct structure', () => {

    const svg = wrapper.element.querySelectorAll('svg')[0]
    const circles = svg.querySelectorAll('circle')

    expect(svg).toBeTruthy()
    expect(circles.length).toBe(2)
    expect(wrapper.element.children.item(1)?.tagName === 'DIV').toBeTruthy()
  })

  it('check svg radius', () => {
    const [svg] = wrapper.element.querySelectorAll('svg')
    const [circle, circle2] = svg.querySelectorAll('circle')
    const calcResult = String(props.size / 2 - props.thin / 2)
    expect(circle.getAttribute('r')).toBe(calcResult)
    expect(circle2.getAttribute('r')).toBe(calcResult)
  })

  it('check snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})