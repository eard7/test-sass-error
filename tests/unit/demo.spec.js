import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Demo from '@/components/Demo/Demo.vue'

describe('Demo.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).to.include('demo component');
  })
})
