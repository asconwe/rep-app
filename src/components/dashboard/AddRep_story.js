import { storiesOf } from '@storybook/vue';

import AppStyle from '@/AppStyle';
import AddRep from '@/components/dashboard/AddRep';

storiesOf('dashboard/AddRep', module)
  .add('story as a component', () => ({
    components: { AddRep, AppStyle },
    template: `
      <app-style>
        <add-rep :site-id="id" />
        <input type="text" v-model="id" />
      </app-style>
    `,
    data() {
      return {
        id: '5aa872cad43ff303b47baa73',
      };
    },
  }));
