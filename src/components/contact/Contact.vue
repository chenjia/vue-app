<template>
  <div>
    <mt-header title="联系人">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>
    
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input type="search" placeholder="输入姓名搜索" v-model="searchKey" class="mint-searchbar-core" style="padding:0 5px;">
      </div>
      <a class="mint-searchbar-cancel" style="display: none;">取消</a>
    </div>

    <mt-index-list v-if="ready" ref="indexList">
      <mt-index-section v-for="(contact, key) in contacts" :key="key" :index="key">
        <mt-cell v-for="(item, index) in contact" :key="index" :title="item"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      ready:false,
      searchKey:'',
      items:{
        A:['Aaron','Alden','Austin'],
        B:['Baldwin','Braden'],
        C:['Cox','Chapman'],
        D:['Davis','Dunn'],
        E:['Ellis','Elliott'],
        F:['Freeman','Franklin'],
        G:['Greene','Grant'],
        H:['Harris','Hall'],
        I:['Irvin','Irish'],
        J:['Jones','Johnson'],
        K:['King','Knight'],
        L:['Lewis','Lee'],
        M:['Martinez','Martin'],
        N:['Nichols','Nelson'],
        O:['Oliver','Osborne'],
        P:['Porter','Pierce'],
        Q:['Quick','Quinta'],
        R:['Robinson','Rose'],
        S:['Stone','Stevens'],
        T:['Thomas','Turner'],
        U:['Uwe','Urian'],
        V:['Vance','Vega'],
        W:['Wilson','White'],
        X:['Xavier','Xena'],
        Y:['Young','York'],
        Z:['Zack','Zenon']
      }
    }
  },
  computed:{
    contacts:function(){
      let result = {}
      if(this.searchKey){
        let items = this.items
        for(let contact in items){
          for(let item of items[contact]){
            if(item.toLowerCase().indexOf(this.searchKey.toLowerCase())!=-1){
              if(!result[contact]){
                result[contact] = []
              }
              result[contact].push(item)
            }
          }
        }
      }else{
        result = this.items
      }
      return result
    }
  },
  mounted(){
    setTimeout(()=>{
      this.ready = true
      this.items.C.push('Chenjia')
    },500)
  }
}
</script>