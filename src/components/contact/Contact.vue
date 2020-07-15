<template>
  <div>
    <mt-header title="联系人">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <div>{{items}}</div>

    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input type="search" placeholder="输入姓名搜索" v-model="searchKey" class="mint-searchbar-core" style="padding:0 5px;">
      </div>
      <a class="mint-searchbar-cancel" style="display: none;">取消</a>
    </div>

    <mt-index-list v-if="ready" ref="indexList">
      <mt-index-section v-for="(group, index) in contacts" :key="index" :index="group.group">
        <mt-cell v-for="(item, index) in group.items" :key="group.group+index" :title="getName(item)">
          <a style="color:#888;text-decoration: none;" :href="'tel:'+item.phoneNumbers[0].value">{{item.phoneNumbers[0].value}}</a>
          <i class="fa fa-fw fa-phone"></i>
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import pinyin from 'pinyin'
export default {
  name: 'contact',
  data () {
    return {
      ready:false,
      searchKey:'',
      items:[]
    }
  },
  computed:{
    contacts(){
      let result = []
      let items = this.pinyinSort(this.items)
      if (this.searchKey) {
        for (let i = 0; i < items.length; i++) {
          let group = items[i]
          let groupItems = []
          for (let item of group.items) {
            let name = this.getName(item)
            if (name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1) {
              groupItems.push(item)
            }
          }
          if (groupItems.length) {
            result.push({group:group.group, items:groupItems})  
          }
        }
      } else {
        result = items
      }
      console.log(result[0])
      return result
    }
  },
  methods:{
    getName(contact){
      return contact.displayName || contact.name.formatted
    },
    pinyinSort(contacts){
      let arr = [].concat(contacts)
      let group = []
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
      letters.forEach((item,i)=>{
        let current = []
        for(let j=arr.length-1;j>=0;j--){
          let contact = arr[j]
          let name = this.getName(contact).replace(/阿/g, '啊')
          if(name.substr(0,1).toUpperCase() === item){
            current.push(contact)
            arr.splice(j, 1)
            continue
          } else if(pinyin(name, {style: pinyin.STYLE_FIRST_LETTER,heteronym: true,segment: true})[0][0].substr(0,1).toUpperCase() === item) {
            current.push(contact)
            arr.splice(j, 1)
          }
        }

        if(current.length) {
          current.sort((a,b)=>{
            let displayNameA = this.getName(a)
            let displayNameB = this.getName(b)
            return displayNameA.charCodeAt() - displayNameB.charCodeAt()
          })
          group.push({group: item, items:current})
        }
      })
      return group
    }
  },
  beforeMount(){
    if(!window.cordova){
      this.items = [{
        displayName: 'Aaron',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '阿毛',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Braden',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '宝宝',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Chapman',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '场地',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Dunn',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '到达',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Elliott',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '饿了么',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Found',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '非常',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Grant',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '搞饭',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Hall',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '哈哈',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Irish',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'items',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Johnson',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '就是',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'key',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '开始',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'left',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '勒夫',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '刘双龙',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '卢金龙',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Martin',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '蚂蜂',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Nelson',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '呢方式',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Osborne',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '哦哦',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Pierce',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '浦东',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Quinta',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '区分',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Rose',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '人格',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'String',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '顺风耳',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Turner',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '听歌',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Urian',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Uwe',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Vega',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Vance',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'White',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '网格',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Xena',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '幸福氛围',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'York',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '雨神',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: 'Zenon',
        phoneNumbers:[{value:'13333333333'}]
      },{
        displayName: '在发疯',
        phoneNumbers:[{value:'13333333333'}]
      }]

      setTimeout(()=>{
        this.items.push({displayName:'陈佳', phoneNumbers:[{value:'18702189255'}]})
      },200)
    }
  },
  mounted(){
    setTimeout(()=>{
      this.ready = true
    },100)

    let _this = this
    document.addEventListener("deviceready", ()=>{
      const onSuccess = contacts => {
        _this.items = contacts
      }

      const onError = contactError => {
        alert('onError!')
      }

      var fields = ["displayName", "name", "phoneNumbers", "emails", "address"]
      var options = { filter: "", multiple: true }
      navigator.contacts.find(fields, onSuccess, onError, options)
    }, false)
  }
}
</script>