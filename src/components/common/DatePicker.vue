<template>
  <mt-field @click.native="open" v-model="value" :label="label" :disableClear="true" :readonly="true">
    <i @click="open" class="fa fa-calendar icon-picker"></i>
    <mt-datetime-picker v-model="dateValue" ref="datepicker"
                        :type="type"
                        cancelText="清空"
                        :start-date="startDate"
                        :end-date="endDate"
                        year-format="{value}年"
                        month-format="{value}月"
                        date-format="{value}日"
                        hour-format="{value}时"
                        minute-format="{value}分"
                        @confirm="confirm" />
  </mt-field>
</template>
<script>
export default {
  name: 'datePicker',
  props: {
    label: {
      type: String,
      default: "请选择"
    },
    value: {
    },
    //类型
    type: {
      type: String,
      default: 'date'
    },
    //最小日期
    startDate: {
      type: Date,
      default: function() {
        return new Date('1900/01/01')
      }
    },
    //最大日期
    endDate: {
      type: Date,
      default: function() {
        return new Date('2100/12/31')
      }
		},
		//是否禁用
		disabled:{
			type:Boolean,
			default:false
		}
  },
  data() {
    return {
      isRender:true,
      dateValue: this.value?utils.format.parseDate(this.value):new Date(),
      text: '请选择',
      showPicker: false
    }
  },
  computed: {
  },
  methods: {
    //点击打开选择框按钮
    open() {
      this.$refs.datepicker.open()
      utils.ui.modal.afterOpen()
      
      setTimeout(() => {
        this.$el.getElementsByClassName('v-modal')[0].onclick = () => {
          this.close()
        }
      })
    },
    //点击关闭按钮
    close() {
      setTimeout(() => {
        this.$refs.datepicker.close()
        utils.ui.modal.beforeClose()
      })
    },
    //点击确认按钮
    confirm(value) {
      let dateValue = utils.format.toDate(value, this.type == 'datetime' ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd')
      this.$emit('input', dateValue)
      this.close()
    }
  },
  mounted(){
    this.$el.getElementsByClassName('mint-datetime-cancel')[0].onclick = () => {
      this.dateValue = new Date()
      this.$emit('input', '')
      this.close()
    }
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