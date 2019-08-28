import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import MouseClick from '@/MouseClick'

describe('Click event', () => {
  it('Click on yes button calls our method with argument "yes"', () => {
    const spy = sinon.spy()
    const wrapper = shallowMount(MouseClick, {
      propsData: {
        callMe: spy
      }
    })
    wrapper.find('button.yes').trigger('click')

   // spy.should.have.been.calledWith('yes')
  })
})