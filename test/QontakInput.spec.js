import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import QontakInput from '@/components/QontakInput.vue'
import * as BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

test('Test mounted', () => {
  const wrapper = mount(QontakInput, {
    localVue
  })
  expect(wrapper.vm).toBeTruthy()
});

test('Test snapshot', () => {
  const wrapper = mount(QontakInput, {
    localVue
  })
  expect(wrapper.html()).toMatchSnapshot()
});

test('Test emitter onInput', () => {
  const wrapper = shallowMount(QontakInput, {
    localVue
  })
  wrapper.vm.onInput('Oke')
  expect(wrapper.emitted().input).toEqual([['Oke']])
})


