import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Register from '@/views/Register.vue'

describe('Register', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(Register, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          actions: {
            Register: jest.fn()
          }
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('should load images', () => {
    const alerts = wrapper.findAll('v-alert-stub')
    const card = wrapper.find('Card-stub')
    const inputs = wrapper.findAll('Input-stub')
    const btns = wrapper.findAll('v-btn-stub')

    expect(alerts.length).toBe(1)
    expect(alerts.at(0).text()).toContain('Testing Credentials')
    expect(card.exists()).toBe(true)
    expect(inputs.length).toBe(5)
    expect(btns.length).toBe(1)
    expect(btns.at(0).text()).toBe('Register')
  })
})