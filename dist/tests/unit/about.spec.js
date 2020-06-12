import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import About from '@/views/About.vue'

describe('About', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(About, {
      localVue,
      vuetify,
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('should load images', () => {
    const card = wrapper.findAll('card-stub')

    expect(card.length).toBe(3)
  })
})