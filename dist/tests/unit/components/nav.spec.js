import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Nav from '@/components/Nav.vue'

describe('Nav', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(Nav, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          getters: {
            isLoggedIn: jest.fn()
          },
          actions: {
            logout: jest.fn()
          }
        }
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('should load images', () => {
    const appBar = wrapper.find('v-app-bar-stub')
    const toolbarTitle = wrapper.find('v-toolbar-title-stub')
    const buttons = wrapper.findAll('v-btn-stub')

    expect(appBar.exists()).toBe(true)
    expect(toolbarTitle.exists()).toBe(true)
    expect(toolbarTitle.text()).toBe('MEVN-Authentication & Authorization')
    expect(buttons.length).toBe(5)
  })
})