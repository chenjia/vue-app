<template>
  <div id="mapBox" style="width:100%;position:absolute;top:40px;" :style="{height:screenHeight-40+'px'}">
    <iframe src="static/html/baiduMap.html?callback=mapCallback" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'BaiduMap',
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    computed:{
      
    },
    mounted () {
      

      window.mapCallback = BMap => {
        const map = new BMap.Map("mapBox")
        const p = utils.cache.get('position') || {lng:121.506396,lat:31.24495}
        map.centerAndZoom(new BMap.Point(p.lng,p.lat),15)
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position)
          const currentLat = position.coords.latitude
          const currentLon = position.coords.longitude
          const gpsPoint = new BMap.Point(currentLon, currentLat)

          let  convertor = new BMap.Convertor();
          let  pointArr = [];
          pointArr.push(gpsPoint);
          convertor.translate(pointArr, 1, 5, function(data){
            console.log(JSON.stringify(data))
            utils.cache.set('position',data.points[0])
            if(data.status === 0) {
              let  marker = new BMap.Marker(data.points[0]);
              map.addOverlay(marker);
              map.centerAndZoom(data.points[0],15)
              map.addControl(new BMap.NavigationControl())
            }
          })
        }, function(err){
          console.log(err)
          alert(JSON.stringify(err))
        })
      }
    }
  }
</script>