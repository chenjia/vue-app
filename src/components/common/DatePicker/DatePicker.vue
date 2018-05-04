<template>
  <mt-field @click.native="open" v-model="inputValue" :label="label" :placeHolder="placeHolder" :disableClear="true" :readonly="true">
    <i @click="open" class="fa icon-picker" :class="{'fa-calendar':type=='date','fa-clock-o':type=='datetime'}"></i>
  </mt-field>
</template>
<script>
export default {
  name: 'DatePicker',
  props: {
    label: {
      type: String,
      default: "请选择"
    },
    placeHolder: {
      type: String,
      default: "请选择日期"
    },
    value: {},
    type: {
      type: String,
      default: 'date'
    },
    begin: {},
    end: {},
		readonly:{
			type:Boolean,
			default:false
		},
		options:{}
  },
  data() {
    return {
    	picker:null,
      inputValue:this.value,
      opts:{}
    }
  },
  methods: {
    open() {
    	// $('.modal-open').css({pointerEvents:'auto'});
  		if(this.readonly)return;
      this.picker.show(rs => {
				this.inputValue = rs.value
				this.$emit("input", rs.value);
  		});
    },
    close() {
      
    },
    confirm(value) {
      
    }
  },
  watch:{
  	begin(val){
  		this.opts.beginDate = this.begin?utils.format.parseDate(this.begin, 'yyyy-MM-dd HH:mm:ss'):utils.format.parseDate('1900-01-01', 'yyyy-MM-dd');
  		console.log(this.opts)
  		this.picker = new mui.DtPicker(this.opts);
  	},
  	end(val){
  		this.opts.endDate = this.end?utils.format.parseDate(this.end, 'yyyy-MM-dd HH:mm:ss'):new Date();
  		console.log(this.opts)
  		this.picker = new mui.DtPicker(this.opts);
  	}
  },
  mounted(){
  	mui.init();
  	this.opts = {} || this.options
  	this.opts.type = this.type || 'date'
  	this.opts.value = this.opts.value || this.value
  	this.opts.beginDate = this.opts.beginDate || utils.format.parseDate('1900-01-01', 'yyyy-MM-dd')
  	this.opts.endDate = this.opts.endDate || utils.format.parseDate('2100-01-01', 'yyyy-MM-dd')
  	this.picker = new mui.DtPicker(this.opts);
  }
}
</script>
<style type="text/css" scoped>
.icon-picker{
  position:absolute;
  top:-8px;
  right:4px;
  color:#26a2ff;
}
</style>