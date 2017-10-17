import ToastComponet from "./vue-toast.vue";

let Toast = {};
Toast.install = function(Vue, options) {
  var opt = {
    duration: 3000,
    message:'hello toast!'
  };
  Vue.prototype.$toast = function(messages) {
    if(typeof messages === 'object') {
      for (let key in messages) {
        opt[key] = messages[key]
      }
    } else if(typeof messages === 'string') {
      opt.message = messages
    }
    const ToastController = Vue.extend(ToastComponet);
    var instance = new ToastController().$mount(document.createElement("div"));
    instance.message = opt.meg;
    instance.visible = true;
    document.body.appendChild(instance.$el);
    setTimeout(() => {
      instance.visible = false;
      document.body.removeChild(instance.$el);
    }, opt.duration);
  };
  Vue.prototype.$toast["show"] = function(messages) {
    Vue.prototype.$toast(messages);
  };
};
// if (window.Vue) {
//   Vue.use(Toast);
// }
export default Toast;
