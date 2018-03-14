import { storiesOf } from '@storybook/vue';

import axios from 'axios';

import AppStyle from '@/AppStyle';
import Login from '@/components/authentication/login/Login';
import LoginContainer from '@/components/authentication/login/LoginContainer';

storiesOf('authentication/Login', module)
  .add('No container', () => ({
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
        <button @click="handleClick">test</button>
      </AppStyle>
    `,
    methods: {
      handleClick() {
        axios(`${BASE_URL}/api/sites`, {
          method: 'POST',
          withCredentials: true,
          data: {
            name: 'test',
            address: 'test',
          },
        })
          // eslint-disable-next-line
          .then(data => console.log(data))
          // eslint-disable-next-line
          .catch(err => console.error(err))
      },
    },
  }));
