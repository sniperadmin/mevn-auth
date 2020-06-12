import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Logos from '@/components/Logos.vue'

describe('Logos', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = mount(Logos, {
      localVue,
      vuetify
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  
  it('should load images', () => {
    const logos = wrapper.findAll('.v-image__image')

    expect(wrapper.html()).toMatchSnapshot()
    expect(logos.length).toEqual(6)
  })
})