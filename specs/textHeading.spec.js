import { expect } from '@jest/globals'
import { shallowMount } from '@vue/test-utils'
import textHeading from "../components/textHeading.vue"

test('heading text', async () => {
  const wrapper = shallowMount(textHeading,{
    propsData: {
      text: "Hello world",
      level: 3,
      display: "heading"
    }
  })

  expect(wrapper.find('h3.heading__heading').text()).toContain('Hello world')
})
