import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  let wrapper
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders component with contents', () => {
    const h4 = wrapper.find('h4')
    const cardText = wrapper.find('v-card-text-stub').find('div')
    const alert = wrapper.find('v-alert-stub')

    expect(wrapper.html()).toMatchSnapshot()
    expect(h4.exists()).toBe(true)
    expect(h4.text()).toContain('authentication/authorization')
    expect(cardText.text()).toBe('MEVN-Auth APP')
    expect(alert.exists()).toBe(true)
    expect(alert.find('.title').text()).toBe('Instructions')
    expect(alert.text()).toContain('You can go to register or login to test authentication')
  })
})
