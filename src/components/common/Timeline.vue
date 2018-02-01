<template>
	<div style="padding:10px;">
		<div class="timeline-item" v-for="(item, index) in items">
			<div class="line-item">
				<div class="line" :class="{history:index<1}" :style="{borderColor:color[index],borderStyle:'dashed'}">
					<div class="line-icon" :class="item.icon" :style="{background:color[index]}"></div>
				</div>
			</div>

			<div class="content-item" :style="{borderLeftColor:color[index]}">
				<div class="content-title">{{item.title}}</div>
				<div class="content-details">{{item.content}}</div>
				<div class="content-time">{{item.time}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'tab',
  props: ['items'],
  data() {
    return {
      color:[
      	'#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', 
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
	margin:0 auto;
	padding:0;
	width:0px;
	height:100%;
	border-width:1px;
}
.line.history{
	border-style:solid!important;
}
.line-icon{
	position:relative;
	top:24px;
	left:-12px;
	text-align:center;
	line-height:24px;
	width:24px;
	height:24px;
	border-radius:50%;
	box-shadow: 2px 2px 5px #888888;
	color:#fff;
}
.content-item{
	flex:1 0 100px;
	border:1px solid #ccc;
	border-left:4px solid;
	margin-top:10px;
	
}
.content-title{
	font-size:16px;
	border-bottom:1px dashed #ccc;
	padding:4px 10px;
}
.content-details{
	padding:10px;
	font-size:14px;
}
.content-time{
	padding:5px;
	font-size:12px;
	color:#aaa;
	text-align:right;
}
</style>