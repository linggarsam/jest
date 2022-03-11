import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import PagesIndex from '@/pages/index.vue'
import QontakInput from '@/components/QontakInput.vue'
import * as BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

test('Test mounted', () => {
  const wrapper = mount(PagesIndex, {
    localVue,
    components: {
      QontakInput
    }
  })
  expect(wrapper.vm).toBeTruthy()
});

test('Test snapshot', () => {
  const wrapper = mount(PagesIndex, {
    localVue,
    components: {
      QontakInput
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
});

test('Test checkAnswer sudah terjawab method', () => {
  const wrapper = shallowMount(PagesIndex, {
    localVue,
    components: {
      QontakInput
    }
  })
  wrapper.vm.userAnswer = 'a'
  wrapper.vm.checkAnswer()
  expect(wrapper.vm.result).toBe('Sudah terjawab')
})

test('Test checkAnswer tidak terjawab method', () => {
  const wrapper = shallowMount(PagesIndex, {
    localVue,
    components: {
      QontakInput
    }
  })
  wrapper.vm.userAnswer = ''
  wrapper.vm.checkAnswer()
  expect(wrapper.vm.result).toBe('Belum terjawab')
})

test('Test checkAnswer tidak sesuai pilihan method', () => {
  const wrapper = shallowMount(PagesIndex, {
    localVue,
    components: {
      QontakInput
    }
  })
  wrapper.vm.userAnswer = 'c'
  wrapper.vm.checkAnswer()
  expect(wrapper.vm.result).toBe('Jawaban tidak sesuai pilihan')
})