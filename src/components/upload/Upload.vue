<template>
  <div>
    <mt-header title="上传">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="pd-md">
      <mt-button type="primary" size="large" @click="showUpload('uploadVisible')">文件上传</mt-button><br/>
      <mt-button type="primary" size="large" @click="showUpload('cropVisible')">图片上传</mt-button><br/>
    </div>

    <mt-popup v-model="uploadVisible" position="right" style="width:100%;height:100%;">
      <mt-header title="文件上传">
        <mt-button @click="uploadVisible = !uploadVisible" slot="left" icon="back">返回</mt-button>
      </mt-header>
      <div class="pd-md">
        <uploader :options="options" class="uploader-example">
          <uploader-unsupport></uploader-unsupport>
          <uploader-drop>
           <p>Drop files here to upload or</p>
           <uploader-btn>select files</uploader-btn>
           <uploader-btn :attrs="attrs">select images</uploader-btn>
           <uploader-btn :directory="true">select folder</uploader-btn>
         </uploader-drop>
         <uploader-list></uploader-list>
       </uploader>
      </div>
	  </mt-popup>

    <mt-popup v-model="cropVisible" position="right" style="width:100%;height:100%;">
	    <mt-header title="图片上传">
      	<mt-button @click="cropVisible = !cropVisible" slot="left" icon="back">返回</mt-button>
      	<mt-button @click="sheetVisible = true" slot="right" icon="camera">选择图片</mt-button>
    	</mt-header>
      <div :style="{height:(screenHeight-100)+'px'}">
	    	<img id="image" style="opacity:0;" :src="img">
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
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
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
      }],
      options: {
        target: '//localhost:8001/api/upload',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      },
      img: require('../../../static/img/pdf/1.png')
    }
  },
  methods:{
  	showUpload(type){
  		if(type == 'uploadVisible'){
        this.uploadVisible = true
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