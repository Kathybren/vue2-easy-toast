# Overview

a toast plugin for vue

# Installation
```bash
import VueToast from 'vue2-easy-toast'

Vue.use(VueToast)
```
# Usage
Basic Usage
```Javascript
this.$toast.show('hello,toast')
```
Or To configure more options
```Javascript
this.$toast.show({
  message: 'hello,toast',
  duration: 5000
})
```