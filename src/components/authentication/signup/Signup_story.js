import { storiesOf } from '@storybook/vue';
import AppStyle from '@/AppStyle';
import Signup from '@/components/authentication/signup/Signup';
import SignupContainer from '@/components/authentication/signup/SignupContainer';

storiesOf('authentication/Signup', module)
  .add(' story as a component', () => ({
    components: { Signup, AppStyle },
    template: `
    <AppStyle>
      <Signup :onSubmit="() => {}"/>
    </AppStyle>
  `,
  }))
  .add('with container', () => ({
    components: { AppStyle, SignupContainer },
    template: `
    <AppStyle>
      <SignupContainer />
    </AppStyle>
  `,
  }));
