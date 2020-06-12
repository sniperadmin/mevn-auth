import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Home from '@/views/Home.vue'

describe('Home', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      localVue,
      vuetify,
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('should load images', () => {
    const card = wrapper.find('HelloWorld-stub')

    expect(card.exists()).toBe(true)
  })
})