import { shallowMount } from '@vue/test-utils'
import App from './App'
import Counter from './Counter'

describe('App', () => {
    const wrapper = shallowMount(App)  

    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('contains the increment button', () => {
        const wrapper = shallowMount(Counter)
        expect(wrapper.vm.counter).toBe(0)
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.counter).toBe(1)
    })

    it('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
    })
})