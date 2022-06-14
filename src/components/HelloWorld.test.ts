import { describe, test, expect } from 'vitest';
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  test('HelloWorld renders correctly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello World' } });
    expect(wrapper.get('h1').text()).toBe('Hello World');
  });

  test('HelloWorld updates button', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello World' } });

    const button = wrapper.get('button');
    button.trigger('click');
    button.trigger('click');

    await nextTick();

    expect(button.text()).toBe('count is: 2');
  });
});
