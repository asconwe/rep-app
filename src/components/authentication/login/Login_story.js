import { storiesOf } from '@storybook/vue';

import AppStyle from '@/AppStyle';
import Login from '@/components/authentication/login/Login';
import LoginContainer from '@/components/authentication/login/LoginContainer';

storiesOf('authentication/Login', module)
  .add('empty, unstyled', () => ({
    components: { AppStyle, Login },
    template: `
      <AppStyle>
        <Login :onSubmit="() => {}"/>
      </AppStyle>
    `,
  }))
  .add('with container', () => ({
    components: { AppStyle, LoginContainer },
    template: `
      <AppStyle>
        <LoginContainer />
      </AppStyle>
    `,
  }));
