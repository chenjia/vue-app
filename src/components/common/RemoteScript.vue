<template>
  <i style="display: none;"></i>
</template>

<script>
export default {
  name: 'RemoteScript',
  props:['src','callback'],
  mounted(){
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = this.src;

    s.onload = s.readystatechange =  () => {
      if (!s.readyState || /loaded|complete/.test(s.readyState)) {
        this.$emit('callback');
        s.onload = s.readystatechange = null;
      }
    }

    document.body.appendChild(s);
  }
}
</script>