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
		options:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      init: false,
    	picker:null,
      inputValue:this.value,
      opts:{}
    }
  },
  methods: {
    open() {
    	// $('.modal-open').css({pointerEvents:'auto'});
  		if(this.readonly)return;

      if(!this.init){
        mui.init();
        this.opts = this.options
        this.opts.type = this.options.type || this.type || 'date'
        this.opts.value = this.value || this.opts.value
        this.opts.beginDate = utils.format.parseDate(this.begin || '1900-01-01', 'yyyy-MM-dd')
        this.opts.endDate = utils.format.parseDate(this.end || '2100-01-01', 'yyyy-MM-dd')
        this.picker = new mui.DtPicker(this.opts);
        this.init = true
      }

      this.picker.show(rs => {
				this.inputValue = rs.value
				this.$emit("input", rs.value)
        this.picker.dispose()
        this.init = false
  		});
    }
  },
  watch:{
  	begin(val){
      if(this.picker){
        this.picker.dispose()
      }
      
  		this.opts.beginDate = this.begin?utils.format.parseDate(this.begin, 'yyyy-MM-dd HH:mm:ss'):utils.format.parseDate('1900-01-01', 'yyyy-MM-dd');
      this.opts.value = this.inputValue
  		this.picker = new mui.DtPicker(this.opts)
  	},
  	end(val){
      if(this.picker){
        this.picker.dispose()
      }
  		this.opts.endDate = this.end?utils.format.parseDate(this.end, 'yyyy-MM-dd HH:mm:ss'):new Date();
  		this.opts.value = this.inputValue
  		this.picker = new mui.DtPicker(this.opts)
  	}
  },
  mounted(){
  	
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