import { configure } from '@storybook/vue';

import Vue from 'vue'
import Vuex from 'vuex' // Vue plugins
import contenteditable from 'vue-contenteditable-directive'

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(contenteditable)

const req = require.context('../src/components', true, /\_story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}


configure(loadStories, module)