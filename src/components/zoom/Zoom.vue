<template>
  <div>
    <mt-header title="缩放">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="pd-md">
    	<mt-button @click="showPDF" type="primary" size="large">预览PDF</mt-button><br/>
      <mt-button @click="showTable" type="primary" size="large">预览表格</mt-button><br/>
    </div>
    
    <zoom title="放大缩小" :dialog="true" :show.sync="popupPDF">
      <mt-button @click="popupPDF = !popupPDF" type="primary" size="large">关闭</mt-button>
      <div style="overflow-y:auto;" :style="{height:screenHeight+'px'}">
        <img class="image" v-for="item in items" style="width:100%;border-bottom:1px solid #ccc;" v-lazy="'./static/img/pdf/'+item">
      </div>
    </zoom>

    <zoom title="放大缩小" :dialog="true" :show.sync="popupTable">
      <mt-button @click="popupTable = !popupTable" type="primary" size="large">关闭</mt-button>
      <div style="overflow:auto;" :style="{height:screenHeight+'px'}">
        <table class="table" border="1" bordercolor="blue">
          <caption align="center"> 课程表</caption>
          <tr>
            <th>项目</th>
            <th colspan="5">上课</th>
            <th colspan="2">休息</th>
          </tr>
          <tr>
            <th>星期</th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
            <th>星期六</th>
            <th>星期日</th>
          </tr>
          <tr>
            <td rowspan="4">上午</td>
            <td>语文</td>
            <td>数学</td>
            <td>英语</td>
            <td>英语</td>
            <td>物理</td>
            <td>计算机</td>
            <td rowspan="4">休息</td>
          </tr>
          <tr>
            <td>数学</td>
            <td>数学</td>
            <td>地理</td>
            <td>历史</td>
            <td>化学</td>
            <td>计算机</td>
          </tr>
          <tr>
            <td>化学</td>
            <td>语文</td>
            <td>体育</td>
            <td>计算机</td>
            <td>英语</td>
            <td>计算机</td>
          </tr>
          <td>政治</td>
          <td>英语</td>
          <td>体育</td>
          <td>历史</td>
          <td>地理</td>
          <td>计算机</td>
          <tr>
            <td rowspan="2">下午</td>
            <td>语文</td>
            <td>数学</td>
            <td>英语</td>
            <td>英语</td>
            <td>物理</td>
            <td>计算机</td>
            <td rowspan="2">休息</td>
          </tr>
          <tr>
            <td>数学</td>
            <td>数学</td>
            <td>地理</td>
            <td>历史</td>
            <td>化学</td>
            <td>计算</td>
          </tr>
        </table>
      </div>
    </zoom>
  </div>
</template>

<script>
import zoom from '../common/Zoom.vue'
export default {
  name: 'Zoom',
  components:{
    zoom
  },
  data () {
    return {
      popupPDF: false,
      popupTable: false,
      items: []
    }
  },
  methods:{
    showPDF(){
      this.popupPDF = !this.popupPDF
      if(this.items.length == 0){
        let array = []
        for(let i=1;i<=20;i++){
          array.push(i+'.png')
        }
        this.items = array
      }
    },
    showTable(){
      this.popupTable = !this.popupTable
    }
  },
  mounted(){
    
  }
}
</script>
<style type="text/css">
.image[lazy=loading] {
  background:url('../../../static/img/loading.gif') no-repeat center;
}
.table {
  margin-top:10px;
  font-size: 16px;
  width: 800px;
  border: 1px solid #a8c0de;
  border-collapse: collapse;
}
.table th {
    background: #24a9ee;
    border-bottom: none;
    padding:6px;
    color:white;
    font-size:9px;
    border-right: 1px solid #a8c0de;
}
.table td {
    border-right: 1px solid #a8c0de;
    padding:6px;
    font-size:9px;
}
.table tbody tr:nth-child(odd) {
    background: #ddf1fd;
}
</style>