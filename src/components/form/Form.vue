<template>
  <div>
    <mt-header title="表单">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" :type="showPwd?'text':'password'" v-model="password" :disableClear="true">
        <i @click="showPwd = !showPwd" style="margin-right:3px;color:#26a2ff;" class="fa icon-picker" :class="{'fa-eye':showPwd,'fa-eye-slash':!showPwd}"></i>
      </mt-field>
      <MultiPicker label="框架" placeholder="请选择编程语言" v-model="language" :data="pickerItems" />
      <DatePicker label="开始日期" v-model="beginDate" :end="endDate"/>
      <DatePicker label="结束日期" v-model="endDate" :begin="beginDate"/>
      <DatePicker label="日期时段" v-model="dateRange" :options="dateOptions"/>
      <DatePicker label="选择月份" v-model="dateMonth" :options="{type:'month'}"/>
      <DatePicker label="开始时间" v-model="beginDatetime" type="datetime" :end="endDatetime"/>
      <DatePicker label="结束时间" v-model="endDatetime" type="datetime" :begin="beginDatetime"/>
      <DistPicker label="家庭住址" v-model="dist"/>
      <JobPicker label="职业" v-model="job"/>
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
      <mt-cell class="mint-field">
        <span slot="title">吸烟 {{smoking}}</span>
        <mt-switch class="switch-normal switch-smoking" v-model="smoking">
          <span class="normal-text">
            <span>允</span>
            <span>禁</span>
          </span>
        </mt-switch>
      </mt-cell>
      <mt-cell class="mint-field">
        <span slot="title">音量 {{volume}}%</span>
        <mt-range v-model="volume" :min="0" :max="100" style="width:100%;">
          <div slot="start" style="align-items:center;"><i class="fa fa-volume-off" style="color:#26a2ff;"></i>&nbsp;</div>
          <div slot="end" style="align-items:center;">&nbsp;<i class="fa fa-volume-up" style="color:#26a2ff;"></i></div>
        </mt-range>
      </mt-cell>
      <mt-radio title="单选框列表" v-model="radioValue" :options="['选项A', '选项B', '选项C']"></mt-radio>
      <mt-checklist title="复选框列表" v-model="checkValue" :options="['选项A', '选项B', '选项C']" align="right"></mt-checklist>
      <br/>
    </div>
  </div>
</template>

<script>
import MultiPicker from '../common/MultiPicker'
import DatePicker from '../common/DatePicker'
import DistPicker from '../common/DistPicker'
import JobPicker from '../common/JobPicker'
export default {
  name: 'Form',
  components:{
    DatePicker:DatePicker,
    DistPicker:DistPicker,
    JobPicker:JobPicker,
    MultiPicker:MultiPicker
  },
  data () {
    return {
      username:'',
      password:'',
      showPwd:false,
      language:'2',
      pickerItems:[{
        value:'1',
        text:'Angular'
      },{
        value:'2',
        text:'Vue'
      },{
        value:'3',
        text:'React'
      },{
        value:'4',
        text:'jQuery'
      }],
      beginDate:'2018-01-18',
      endDate:'2018-02-18',
      beginDatetime:'2018-03-18 10:00',
      endDatetime:'2018-03-20 15:00',
      dateRange:'2010-01-01 上午',
      dateOptions:{
        type:'hour',
        labels:["年", "月", "日", "时段"],
        customData:{
          "h":[{
            "text":"上午",
            "value":"上午"
          },{
            "text":"下午",
            "value":"下午"
          }]
        }
      },
      dateMonth:'2010-01',
      dist:'',
      job:'',
      gender: 'M',
      marriage: false,
      smoking:true,
      volume:60,
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
    
  }
}
</script>