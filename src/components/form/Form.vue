<template>
  <div>
    <mt-header title="表单">
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-cell class="mint-field">
      <span slot="title">开关{{switchValue}}</span>
      <mt-switch v-model="switchValue"></mt-switch>
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
      switchValue:true,
      checkValue:['选项A'],
      radioValue:''
    }
  },
  mounted(){
    
  }
}
</script>