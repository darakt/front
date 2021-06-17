
import { mount, shallowMount } from '@vue/test-utils'
import Connection from './Connection.vue'

describe('The component Connection', () => {
  it('Should let you connect if the tuple usernam/password is right', async () => {
    const wrapper = mount(Connection);

    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('username')
    expect(wrapper.find('input[type="text"]').element).toBe('some value')

  })
})