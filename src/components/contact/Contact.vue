<template>
  <div>
    <mt-header title="联系人">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>
    
    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input type="search" placeholder="输入姓名搜索" v-model="searchKey" class="mint-searchbar-core" style="padding:0 5px;">
      </div>
      <a class="mint-searchbar-cancel" style="display: none;">取消</a>
    </div>

    <mt-index-list v-if="ready" ref="indexList">
      <mt-index-section v-for="(group, index) in contacts" :key="index" :index="group.group">
        <mt-cell :href="'tel:'+item.phoneNumbers[0].value" v-for="(item, index) in group.items" :key="group.group+index" :title="getName(item)" :value="item.phoneNumbers[0].value"></mt-cell>
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
      items:[],
      names:['Aaron','Alden','Austin','Baldwin','Braden','Cox','Chapman','Davis','Dunn','Ellis','Elliott','Freeman','Franklin','Greene','Grant','Harris','Hall','Irvin','Irish','Jones','Johnson','King','Knight','Lewis','Lee','Martinez','Martin','Nichols','Nelson','Oliver','Osborne','Porter','Pierce','Quick','Quinta','Robinson','Rose','Stone','Stevens','Thomas','Turner','Uwe','Urian','Vance','Vega','Wilson','White','Xavier','Xena','Young','York','Zack','Zenon']
    }
  },
  computed:{
    contacts(){
      let result = []
      let items = this.pySegSort(this.items)
      if(this.searchKey){
        for(let i=0;i<items.length;i++){
          let group = items[i]
          let groupItems = []
          for(let item of group.items){
            let name = this.getName(item)
            if(name.toLowerCase().indexOf(this.searchKey.toLowerCase())!=-1){
              groupItems.push(item)
            }
          }
          if(groupItems.length){
            result.push({group:group.group, items:groupItems})  
          }
        }
      }else{
        result = items
      }
      return result
    }
  },
  methods:{
    getName(contact){
      return contact.displayName || contact.name.formatted
    },
    pySegSort(contacts) {
      let arr = [].concat(contacts)
      if(!String.prototype.localeCompare) return null;
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
      let zh = "阿八嚓哒妸发旮哈讥讥咔垃痳拏噢妑七呥扨它穵穵穵夕丫帀".split('');
      let group = [];
      letters.forEach((item,i)=>{
        let current = []

        for(let j=arr.length-1;j>=0;j--){
          let contact = arr[j]
          let name = this.getName(contact)
          if(name.substr(0,1).toUpperCase() === item){
            current.push(contact);
            arr.splice(j, 1);
            continue;
          } else if((!zh[i] || zh[i].localeCompare(name,'zh-CN', { sensitivity: 'base'}) <= 0) && name.localeCompare(zh[i+1],'zh-CN', { sensitivity: 'base'}) == -1) {
            current.push(contact);
            arr.splice(j, 1);
          }
        }

        if(current.length) {
          current.sort((a,b)=>{
            let displayNameA = this.getName(a)
            let displayNameB = this.getName(b)
            if(displayNameA.substr(0,1).charCodeAt()<150 || displayNameB.substr(0,1).charCodeAt()<150){
              return displayNameA.substr(0,1).charCodeAt() > displayNameB.substr(0,1).charCodeAt()
            }
            return displayNameA.localeCompare(displayNameB,'zh-CN', { sensitivity: 'base'});
          });
          group.push({group: item, items:current})
        }
      });
      return group;
    }
  },
  beforeMount(){
    if(!window.cordova){
      const array = []
      for(let item of this.names){
        array.push({
          displayName: item,
          phoneNumbers:[{value:'13333333333'}]
        })
      }
      this.items = array
    }
    // this.items = [{
    //   displayName: 'Aaron',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '阿毛',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Braden',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '宝宝',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Chapman',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '场地',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Dunn',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '到达',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Elliott',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '饿了么',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Found',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '非常',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Grant',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '搞饭',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Hall',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '哈哈',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Irish',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'items',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Johnson',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '就是',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'key',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '开始',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'left',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '勒夫',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Martin',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '蚂蜂',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Nelson',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '呢方式',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Osborne',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '哦哦',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Pierce',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '浦东',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Quinta',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '区分',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Rose',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '人格',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'String',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '顺风耳',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Turner',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '听歌',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Urian',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Uwe',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Vega',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Vance',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'White',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '网格',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Xena',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '幸福氛围',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'York',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '有氛围',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: 'Zenon',
    //   phoneNumbers:[{value:'13333333333'}]
    // },{
    //   displayName: '在发疯',
    //   phoneNumbers:[{value:'13333333333'}]
    // }]
  },
  mounted(){
    setTimeout(()=>{
      this.ready = true
    },100)
    setTimeout(()=>{
      // this.items.push({displayName:'陈佳', phoneNumbers:[{value:'18702189255'}]})
    },200)

    let _this = this
    document.addEventListener("deviceready", ()=>{
      function onSuccess(contacts) {
        _this.items = contacts
        console.log('Found ' + contacts.length + ' contacts.')
      };

      function onError(contactError) {
        alert('onError!');
      };

      var fields = ["displayName", "name", "phoneNumbers", "emails", "address"]
      var options = { filter: "", multiple: true }
      navigator.contacts.find(fields, onSuccess, onError, options);
    }, false);
  }
}
</script>