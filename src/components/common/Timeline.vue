<template>
	<div style="padding:10px;">
		<div class="timeline-item" v-for="(item, index) in items">
			<div class="line-item">
				<div class="line" :class="{history:item.history}" :style="{borderColor:item.history?color[index]:'#ccc',borderStyle:'dashed'}">
					<div v-if="index == 0" class="line-start"></div>
					<div class="line-icon" :class="item.icon" :style="{background:(item.history?color[index]:'#ccc')}"></div>
				</div>
			</div>

			<div class="content-item" :style="{border:'1px solid ' +(item.history?color[index]:'#ccc'),borderLeft:'4px solid '+(item.history?color[index]:'#ccc'),boxShadow:'2px 2px 5px '+(item.history?color[index]:'#888')}">
				<div class="content-arrow" :style="{borderRight:'8px solid '+(item.history?color[index]:'#ccc')}"></div>
				<div class="content-title" :style="{borderBottom:'1px dashed '+(item.history?color[index]:'#ccc')}">{{item.title}}</div>
				<div class="content-details">{{item.content}}</div>
				<div class="content-time">{{item.time|dateFilter(false)}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import '../../filters'
export default {
  name: 'tab',
  props: ['items'],
  data() {
    return {
      color:[
      	'#87cefa', '#ff7f50', '#da70d6', '#32cd32', '#6495ed', 
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
      ]
    }
  },
  methods: {
    
  }
}
</script>
<style type="text/css" scoped>
.timeline-item{
	width:100%;
	margin-left:-10px;
	display:flex;
}
.line-item{
	flex:0 0 80px;
}
.line{
	position:relative;
	margin:0 auto;
	padding:0;
	width:0px;
	height:100%;
	border-width:1px;
}
.line.history{
	border-style:solid!important;
}
.line-start{
	position:absolute;
	left:-6px;
	top:-2px;
	width:6px;
	height:6px;
	border-radius:50%;
	background:#fff;
	border:3px solid #26a2ff;
}
.line-icon{
	position:relative;
	top:22px;
	left:-13px;
	text-align:center;
	line-height:24px;
	width:25px;
	height:25px;
	border-radius:50%;
	box-shadow: 2px 2px 5px #888888;
	color:#fff;
}
.content-item{
	flex:1 0 100px;
	border-radius:0 4px 4px 0;
	margin-top:22px;
	position:relative;
}
.content-arrow{
	position:absolute;
	top:5px;
	left:-12px;
	width:0;
	height:0;
	border-top:8px solid #fff;
	border-bottom:8px solid #fff;
}
.content-title{
	font-size:16px;
	height:20px;
	line-height:20px;
	padding:4px 10px;
}
.content-details{
	padding:10px;
	font-size:14px;
}
.content-time{
	padding:5px;
	font-size:12px;
	color:#888;
	text-align:right;
}
</style>