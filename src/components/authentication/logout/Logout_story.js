import { storiesOf } from '@storybook/vue';
import AppStyle from '@/AppStyle';
import Logout from '@/components/authentication/logout/Logout';

storiesOf('authentication/Logout', module)
  .add(' story as a component', () => ({
    components: { Logout, AppStyle },
    template: `
      <app-style>
         <Logout />
      </app-style>
     `,
  }));
