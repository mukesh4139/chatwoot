import Vue from 'vue';
import Vuex from 'vuex';

import agents from './modules/agents';
import auth from './modules/auth';
import billing from './modules/billing';
import cannedResponse from './modules/cannedResponse';
import Channel from './modules/channels';
import contacts from './modules/contacts';
import conversationMetadata from './modules/conversationMetadata';
import conversations from './modules/conversations';
import inboxes from './modules/inboxes';
import inboxMembers from './modules/inboxMembers';
import reports from './modules/reports';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    agents,
    auth,
    billing,
    cannedResponse,
    Channel,
    contacts,
    conversationMetadata,
    conversations,
    inboxes,
    inboxMembers,
    reports,
  },
});
