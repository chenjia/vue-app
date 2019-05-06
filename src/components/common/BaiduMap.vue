<template>
  <div id="mapBox" style="width:100%;position:absolute;top:40px;" :style="{height:screenHeight-40+'px'}">
    <iframe src="static/html/baiduMap.html?callback=mapCallback" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
import store from '../../vuex/store'
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
    let maximumAge = 0
    window.mapCallback = BMap => {
      console.log('in callback',utils.cache.get('position'))
      const map = new BMap.Map("mapBox")
      const p = utils.cache.get('position') || {lng:104,lat:35}
      map.centerAndZoom(new BMap.Point(p.lng,p.lat),4)
      navigator.geolocation.watchPosition(position => {
        console.log(position)
        const currentLat = position.coords.latitude
        const currentLon = position.coords.longitude
        const gpsPoint = new BMap.Point(currentLon, currentLat)

        let  convertor = new BMap.Convertor()
        let  pointArr = []
        pointArr.push(gpsPoint)
        convertor.translate(pointArr, 1, 5, data => {
          utils.cache.set('position',data.points[0])
          if(data.status === 0) {
            let marker = new BMap.Marker(data.points[0])
            console.log(data.points[0])
            map.clearOverlays()
            map.addOverlay(marker)
            if(maximumAge == 0){
              map.centerAndZoom(data.points[0],18)
            }else {
              map.panTo(data.points[0])
            }
            map.addControl(new BMap.NavigationControl())
            maximumAge = 15000
          }
        })
      }, err => {
        console.log(JSON.stringify(err.code))
        store.commit('TOGGLE_POPUP', {visible: true, text: '获取地理位置坐标失败！', duration: 1000})
      }, { maximumAge: maximumAge, timeout: 60000, enableHighAccuracy: true })
    }
  }
}
</script>