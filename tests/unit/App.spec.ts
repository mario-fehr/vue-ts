import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
    it('has header', () => {
        const wrapper = mount(App);
        expect(wrapper.text()).contain('Hello Vue 3 + TypeScript + Vite');
        expect(wrapper.html()).toMatchSnapshot();
    });
});
