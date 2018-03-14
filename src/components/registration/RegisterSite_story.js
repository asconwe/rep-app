import { storiesOf } from '@storybook/vue';
import AppStyle from '@/AppStyle';
import RegisterSite from '@/components/registration/RegisterSite';

storiesOf('registration/RegisterSite', module)
  .add(' story as a component', () => ({
    components: { RegisterSite, AppStyle },
    template: `
      <app-style>
        <RegisterSite />
      </app-style>
     `,
  }));
