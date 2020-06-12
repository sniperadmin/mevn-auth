import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      localVue,
      vuetify
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('should load footer', () => {
    const footer = wrapper.find('v-footer-stub')
    const card = wrapper.find('v-card-stub')
    const buttons = wrapper.findAll('v-btn-stub')

    expect(footer.exists()).toBe(true)
    expect(card.exists()).toBe(true)
    expect(card.classes()).toContain('indigo')

    expect(buttons.length).toBe(3)
    expect(buttons.at(0).find('v-icon-stub').text()).toContain('facebook')
    expect(buttons.at(1).find('v-icon-stub').text()).toContain('github')
    expect(buttons.at(2).find('v-icon-stub').text()).toContain('linkedin')

    expect(card.find('.white--text.pt-0').text()).toContain('This Project took a full day long working on it.')
    expect(card.find('strong').text()).toContain('Nasr Galal')
  })
})
