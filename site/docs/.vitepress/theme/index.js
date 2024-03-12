import DefaultTheme from 'vitepress/theme';
import vueWeui from 'vue-weui-next';
import DynamicLayout from '../components/DynamicLayout.vue'
import Toast from '../components/Toast.vue';
import ActionSheet from '../components/ActionSheet.vue';
import Dialog from '../components/Dialog.vue';
import HalfScreenDialog from '../components/HalfScreenDialog.vue';
import Alert from '../components/Alert.vue';
import NavBar from '../components/NavBar.vue';
import TabBar from '../components/TabBar.vue';

export default {
  ...DefaultTheme,
  Layout: DynamicLayout,
  enhanceApp: async ({ app }) => {
    app.mixin({
      async mounted() {
        import('vue-weui-next').then(module => {
          app.use(module.default)
        })
      },
    })
    // app.use(vueWeui);
    app.component('custom-toast', Toast);
    app.component('custom-actionsheet', ActionSheet);
    app.component('custom-dialog', Dialog);
    app.component('custom-halfscreen-dialog', HalfScreenDialog);
    app.component('custom-alert', Alert);
    app.component('custom-navbar', NavBar);
    app.component('custom-tabbar', TabBar);
  },
};
