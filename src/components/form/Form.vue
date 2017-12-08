<template>
  <div>
    <mt-header title="表单">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-cell class="mint-field">
      <span slot="title">婚否 {{marriage}}</span>
      <mt-switch class="switch-normal" v-model="marriage">
        <span class="normal-text gender-text">
          <span>是</span>
          <span>否</span>
        </span>
      </mt-switch>
    </mt-cell>
    <mt-cell class="mint-field">
      <span slot="title">性别 {{gender}}</span>
      <mt-switch class="switch-normal switch-gender" v-model="genderSwitch">
        <span class="normal-text gender-text">
          <span>男</span>
          <span>女</span>
        </span>
      </mt-switch>
    </mt-cell>
    <mt-radio title="单选框列表" v-model="radioValue" :options="['选项A', '选项B', '选项C']"></mt-radio>
    <mt-checklist title="复选框列表" v-model="checkValue" :options="['选项A', '选项B', '选项C']"></mt-checklist>
  </div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      username:'',
      password:'',
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
  mounted(){
    
  }
}
</script>