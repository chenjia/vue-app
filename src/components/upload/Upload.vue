<template>
  <div>
    <mt-header title="上传">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <div class="pd-md">
      <mt-button type="primary" size="large" @click="showUpload('uploadVisible')">文件上传</mt-button><br/>
      <mt-button type="primary" size="large" @click="showUpload('cropVisible')">图片上传</mt-button><br/>
      <mt-button type="primary" size="large" @click="showUpload('galleryVisible')">相册管理</mt-button><br/>
    </div>

    <mt-popup v-model="uploadVisible" position="right" style="width:100%;height:100%;">
      <mt-header title="文件上传">
        <mt-button @click="uploadVisible = !uploadVisible" slot="left" icon="back">返回</mt-button>
      </mt-header>
      <div class="pd-md">
        <uploader :options="options" class="uploader-example">
          <uploader-unsupport>对不起，您的浏览器不支持此上传控件</uploader-unsupport>
          <uploader-drop>
           <p>拖动文件到此处上传</p>
           <uploader-btn>选择文件</uploader-btn>
           <uploader-btn :attrs="attrs">选择图片</uploader-btn>
           <uploader-btn :directory="true">选择文件夹</uploader-btn>
         </uploader-drop>
         <uploader-list></uploader-list>
       </uploader>
      </div>
	  </mt-popup>

    <mt-popup v-model="cropVisible" position="right" style="width:100%;height:100%;">
      <mt-header title="图片上传">
        <mt-button @click="cropVisible = !cropVisible" slot="left" icon="back">返回</mt-button>
        <mt-button @click="" slot="right">
          选择图片
          <input ref="imgFile" @change="selectImg" accept="image/*" style="position:absolute;top:0;right:0;opacity:0;width:58px;height:40px;" type="file" name="" value="">
        </mt-button>
      </mt-header>
      <div class="uploadBox" style="width:100%;">
        <img id="image">
      </div>
      <div class="pd-md center">
        <div style="display:inline-block;width:100px;">
          <div class="preview"></div>
        </div>
      </div>

      <div class="pd-md" style="position:absolute;bottom:0;width:100%;height:61px;box-sizing: border-box;">
        <mt-button class="btn-upload" v-show="imgReady" type="primary" size="large" @click="uploadImg">开始上传</mt-button>  
      
        <mt-progress v-show="uploading || percent==100" :value="percent" :bar-height="5" style="margin-top:10px;">
          <div slot="start">上传文件　</div>
          <div slot="end"><span style="display:inline-block;width:60px;">　{{percent}}%</span></div>
        </mt-progress>
      </div>
    </mt-popup>

    <mt-popup v-model="galleryVisible" position="right" style="overflow-y:auto;background:#eee;width:100%;height:100%;z-index:1000;">
      <mt-header title="相册管理">
        <mt-button @click="galleryVisible = !galleryVisible" slot="left" icon="back">返回</mt-button>
        <mt-button @click="createGallery" slot="right">创建相册</mt-button>
      </mt-header>

      <div class="flexable" style="padding:10px 5px;flex-wrap: wrap;justify-content: space-between;">
        <div v-for="i in 2" class="flex-item">
          <div v-if="(index+i-1)%2==0" v-for="index in 5" style="margin-bottom:10px;background:#fff;border:1px solid #ccc;border-radius: 5px;">
            <div class="pd-sm" style="border-radius: 5px 5px 0 0;">
              <img style="width:100%;" :src="'./static/img/gallery/'+(index-1)+'.jpg'">
              <div style="padding:0 5px;color:#999;font-size:14px;">
                <i class="fa fa-map-marker"></i>
                <span>上海市浦东新区xxx路xxx号</span>
              </div>
            </div>
            <div class="flexable primary" style="padding:10px 0;font-size:14px;justify-content:space-around;border-top:1px solid #ccc;border-radius: 0 0 5px 5px;">
              <i class="fa fa-thumbs-up" style="color: rgb(255, 215, 0);"></i>
              <i class="fa fa-heart" style="color: rgb(255, 99, 71);"></i>
              <i class="fa fa-share-alt" style="color: rgb(50, 205, 50);"></i>
            </div>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import store from '../../vuex/store'
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
import 'cropperjs/dist/cropper.min.css'
import Cropper from 'cropperjs'
import { MessageBox } from 'mint-ui'

let cropper
function each(arr, callback) {
  let length = arr.length
  let i

  for (i = 0; i < length; i++) {
    callback.call(arr, arr[i], i, arr)
  }

  return arr
}

export default {
  name: 'Upload',
  data () {
    return {
      cropper:null,
      cropVisible:false,
      uploadVisible:false,
      galleryVisible:false,
      options: {
        target: window.Config.server + '/upload/uploadFile',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      },
      imgReady:false,
      uploading:false,
      percent: 0,
      galleryList:[]
    }
  },
  methods:{
  	showUpload(type){
      this[type] = true
  	},
    selectImg(e){
      // this.$refs.imgFile.value = null;
      let _this = this
      let image = document.querySelector('#image')
      let previews = document.querySelectorAll('.preview')

      let reader = new FileReader()
      reader.readAsDataURL(this.$refs.imgFile.files[0])

      reader.onload = function(e) {
        _this.imgReady = true
        _this.percent = 0
        image.onload = function(){
          let ratio = image.width/image.height
          document.querySelector('.uploadBox').style.height = _this.screenWidth/ratio+'px'
        }
        if(cropper){
          cropper.replace(this.result)
          previews[0].innerHTML = ''
        }else{
          image.src = this.result

          cropper = new Cropper(image, {
            aspectRatio:1,
            crop: function(e) {
              let data = e.detail
              let cropper = this.cropper
              let imageData = cropper.getImageData()
              let previewAspectRatio = data.width / data.height

              each(previews, function (elem) {
                let previewImage = elem.getElementsByTagName('img').item(0)
                let previewWidth = elem.offsetWidth
                let previewHeight = previewWidth / previewAspectRatio
                let imageScaledRatio = data.width / previewWidth

                elem.style.height = previewHeight + 'px'
                previewImage.style.width = imageData.naturalWidth / imageScaledRatio + 'px'
                previewImage.style.height = imageData.naturalHeight / imageScaledRatio + 'px'
                previewImage.style.marginLeft = -data.x / imageScaledRatio + 'px'
                previewImage.style.marginTop = -data.y / imageScaledRatio + 'px'
              })
            }
          })
        }

        let clone = image.cloneNode()
        clone.className = ''
        clone.style.cssText = 
        'display: block;' +
        'width: 100%;' +
        'min-width: 0;' +
        'min-height: 0;' +
        'max-width: none;' +
        'max-height: none;'

        each(previews, function (elem) {
          elem.appendChild(clone.cloneNode())
        })
      }
    },
  	uploadImg(){
      this.imgReady = false
      this.uploading = true
      let file = this.$refs.imgFile.files[0]
      let canvas = cropper.getCroppedCanvas()
      let base64url = canvas.toDataURL(file.type)
      console.log(base64url.substr(0,100))
      base64url = base64url.substr(base64url.indexOf(';base64,')+8)
      console.log(base64url.substr(0,100))

      let timer = setInterval(()=>{
        this.percent += parseInt(Math.random()*5, 10)
        if(this.percent>99){
          this.percent = 99
        }
      },100)

      utils.http.post('/upload/uploadImg', {type:file.type.substr(6),base64url:base64url}).then(response => {
        clearInterval(timer)
        this.percent = 100
        setTimeout(()=>{
          this.uploading = false
          this.percent = 0
        },100)
      }, error => {
        console.log(error)
        store.commit('TOGGLE_POPUP', {visible: true, text: '上传图片失败', duration: 3000})
      })
  	},
    createGallery(){
      MessageBox.prompt("请输入相册名称").then(({ value, action }) => {
        
      })
    }
  },
  mounted(){
		
  }
}
</script>
<style type="text/css" scoped>
.preview {
  overflow: hidden;
}
</style>