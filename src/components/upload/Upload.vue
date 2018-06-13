<template>
  <div>
    <mt-header title="上传">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="pd-md">
      <mt-button type="primary" size="large" @click="showUpload('uploadVisible')">文件上传</mt-button><br/>
      <mt-button type="primary" size="large" @click="showUpload('cropVisible')">图片上传</mt-button><br/>
    </div>

    <mt-popup v-model="uploadVisible" position="right" popup-transition="popup-fade">
      <mt-header title="文件上传">
        <mt-button @click="back" slot="left" icon="back">返回</mt-button>
      </mt-header>
      <div class="pd-md">
        
      </div>
	  </mt-popup>

    <mt-popup v-model="cropVisible" position="right" popup-transition="popup-fade" style="width:100%;" :style="{height:screenHeight+'px'}">
	    <mt-header title="图片上传">
      	<mt-button @click="back" slot="left" icon="back">返回</mt-button>
      	<mt-button @click="sheetVisible = true" slot="right" icon="camera">选择图片</mt-button>
    	</mt-header>
      <div :style="{height:(screenHeight-100)+'px'}">
	    	<img id="image" style="opacity:0;" src="../../../static/img/pdf/1.png">
	    </div>
	    <div class="pd-md">
	    	<mt-button class="btn-progress" size="large" @click="uploadImg">开始上传</mt-button>
	    </div>
	  </mt-popup>

	  <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
import jquery from 'jquery'
window.jQuery = window.$ = jquery
import 'cropper/dist/cropper.min.css'
import cropper from 'cropper'
export default {
  name: 'Upload',
  data () {
    return {
      cropVisible:false,
      uploadVisible:false,
      sheetVisible: false,
      actions:[{
        name:'从文件导入'
      },{
        name:'打开照相机'
      }]
    }
  },
  methods:{
  	showUpload(type){
  		if(type == 'uploadVisible'){

  		}else if(type == 'cropVisible'){
  			this.cropVisible = true
  			$('#image').cropper({
  				aspectRatio: 1,
  				crop: function(event) {
  					console.log(event.detail.x);
  					console.log(event.detail.y);
  					console.log(event.detail.width);
  					console.log(event.detail.height);
  					console.log(event.detail.rotate);
  					console.log(event.detail.scaleX);
  					console.log(event.detail.scaleY);
  				}
  			});
  		}
  	},
  	uploadImg(){
  		let progress = 0
  		let timer = setInterval(()=>{
  			progress += parseInt(Math.random()*5, 10)
  			if(progress>100){
  				progress = 100;
  				clearInterval(timer)
  			}
  			let style = '<style>.btn-progress:before{width:'+progress+'%;background:#26a2ff;content: " ";position:absolute;top:0;bottom:0;left:0;z-index:0;}</style>'
  			let div = $('<div></div>')
  			div.html(style)
  			$('.btn-progress').before(div)
  		},100)
  		
  	}
  },
  mounted(){
		
  }
}
</script>
<style type="text/css">
.btn-progress label{
	z-index: 999;
	color: green;
	position: relative;
}
.btn-progress:before{
	transition:all .5s;
	width:0%;
	background:#26a2ff;
	content: " ";
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	z-index:0;
}
</style>