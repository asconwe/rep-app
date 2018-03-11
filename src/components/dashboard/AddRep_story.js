import { storiesOf } from '@storybook/vue';

import AppStyle from '@/AppStyle';
import AddRep from '@/components/dashboard/AddRep';

storiesOf('dashboard/AddRep', module)
  .add('story as a component', () => ({
    components: { AddRep, AppStyle },
    template: `
      <app-style>
        <add-rep />
      </app-style>
    `,
  }));
