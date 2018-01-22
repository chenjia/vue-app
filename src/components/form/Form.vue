<template>
  <div>
    <mt-header title="表单">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    <div v-if="ready">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <datepicker label="出生日期" v-model="date"/>
      <distpicker label="家庭住址" v-model="dist"/>
      <mt-cell class="mint-field">
        <span slot="title">婚否 {{marriage}}</span>
        <mt-switch class="switch-normal" v-model="marriage">
          <span class="normal-text">
            <span>是</span>
            <span>否</span>
          </span>
        </mt-switch>
      </mt-cell>
      <mt-cell class="mint-field">
        <span slot="title">性别 {{gender}}</span>
        <mt-switch class="switch-normal switch-gender" v-model="genderSwitch">
          <span class="normal-text">
            <span>男</span>
            <span>女</span>
          </span>
        </mt-switch>
      </mt-cell>
      <mt-radio title="单选框列表" v-model="radioValue" :options="['选项A', '选项B', '选项C']"></mt-radio>
      <mt-checklist title="复选框列表" v-model="checkValue" :options="['选项A', '选项B', '选项C']"></mt-checklist>
    </div>
  </div>
</template>

<script>
import datepicker from '../common/DatePicker'
import distpicker from '../common/DistPicker'
export default {
  name: 'form',
  components:{
    datepicker,
    distpicker
  },
  data () {
    return {
      ready:false,
      username:'',
      password:'',
      date:'2018-01-18',
      dist:'430102',
      gender: 'M',
      marriage: false,
      checkValue:['选项A'],
      radioValue:''
    }
  },
  computed:{
    genderSwitch:{
      get(){
        return this.gender == 'M'
      },
      set(value){
        if(value){
          this.gender = 'M'
        }else {
          this.gender = 'F'
        }
      }
    }
  },
  methods:{
    
  },
  mounted(){
    setTimeout(()=>{
      this.ready = true
    },500)
  }
}
</script>