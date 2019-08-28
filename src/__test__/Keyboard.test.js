
import { shallowMount } from '@vue/test-utils'
import Keyboard from '@/KeyBoard'

describe('Key event tests', () => {
  it('Quantity is zero by default', () => {
    const wrapper = shallowMount(Keyboard)
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Up arrow key increments quantity by 1', () => {
    const wrapper = shallowMount(Keyboard)
    wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(1)
  })

  it('Down arrow key decrements quantity by 1', () => {
    const wrapper = shallowMount(Keyboard)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(4)
  })

  it('Escape sets quantity to 0', () => {
    const wrapper = shallowMount(Keyboard)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Magic character "a" sets quantity to 13', () => {
    const wrapper = shallowMount(Keyboard)
    wrapper.trigger('keydown', {
      key: 'a'
    })
    expect(wrapper.vm.quantity).toBe(13)
  })
})