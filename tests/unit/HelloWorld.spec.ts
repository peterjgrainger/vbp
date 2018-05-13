import { shallow } from '@vue/test-utils';
import LandingPage from '@/components/LandingPage.vue';

describe('LandingPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallow(LandingPage, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
