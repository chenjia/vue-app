<template>
  <div id="lock">

  </div>
</template>

<script>
import '../../../static/lib/H5lock/src/H5lock.js'
export default {
  name: 'h5lock',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  mounted(){
    let opt = {
      chooseType: 3, // 3 , 4 , 5,
      width: 300, // lock wrap width
      height: 300, // lock wrap height
      container: 'lock', // the id attribute of element
      inputEnd: function(psw){} // when draw end param is password string
    }
    let lock = new H5lock(opt);
    lock.init();
  }
}
</script>
<style>

</style>