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
      <mt-index-section v-for="(contact, key) in contacts" :key="key" :index="key">
        <mt-cell :href="'tel:'+item.phoneNumbers[0].value" v-for="(item, index) in contact" :key="index" :title="item.displayName">
          {{item.phoneNumbers[0].value}}
        </mt-cell>
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
      items:[{
        displayName:'张三',
        phoneNumbers:[{value:'13333333331'}]
      },{
        displayName:'张三2',
        phoneNumbers:[{value:'13333333331'}]
      },{
        displayName:'张三3',
        phoneNumbers:[{value:'13333333331'}]
      },{
        displayName:'阿毛',
        phoneNumbers:[{value:'13333333331'}]
      },{
        displayName:'adai',
        phoneNumbers:[{value:'13333333331'}]
      },{
        displayName:'aa',
        phoneNumbers:[{value:'13333333331'}]
      },{
        displayName:'查',
        phoneNumbers:[{value:'13333333331'}]
      }]
      // items:{
      //   A:['Aaron','Alden','Austin'],
      //   B:['Baldwin','Braden'],
      //   C:['Cox','Chapman'],
      //   D:['Davis','Dunn'],
      //   E:['Ellis','Elliott'],
      //   F:['Freeman','Franklin'],
      //   G:['Greene','Grant'],
      //   H:['Harris','Hall'],
      //   I:['Irvin','Irish'],
      //   J:['Jones','Johnson'],
      //   K:['King','Knight'],
      //   L:['Lewis','Lee'],
      //   M:['Martinez','Martin'],
      //   N:['Nichols','Nelson'],
      //   O:['Oliver','Osborne'],
      //   P:['Porter','Pierce'],
      //   Q:['Quick','Quinta'],
      //   R:['Robinson','Rose'],
      //   S:['Stone','Stevens'],
      //   T:['Thomas','Turner'],
      //   U:['Uwe','Urian'],
      //   V:['Vance','Vega'],
      //   W:['Wilson','White'],
      //   X:['Xavier','Xena'],
      //   Y:['Young','York'],
      //   Z:['Zack','Zenon']
      // }
    }
  },
  computed:{
    contacts:function(){
      let result = {}
      let items = this.pySegSort(this.items)
      if(this.searchKey){
        for(let contact in items){
          for(let item of items[contact]){
            let name = item.displayName || item.name.formatted
            if(name.toLowerCase().indexOf(this.searchKey.toLowerCase())!=-1){
              if(!result[contact]){
                result[contact] = []
              }
              result[contact].push(item)
            }
          }
        }
      }else{
        result = items
      }
      return result
    }
  },
  methods:{
    pySegSort(arr) {
      if(!String.prototype.localeCompare) return null;

      let letters = "*ABCDEFGHJKLMNOPQRSTWXYZ".split('');
      let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
      let group = {};
      letters.forEach(function(item,i){
        let current = []

        for(let j=arr.length-1;j>=0;j--){
          let contact = arr[j]
          let name = contact.displayName || contact.name.formatted
          if(name.substr(0,1).toUpperCase() === item){
            current.push(contact);
            arr.splice(j, 1);
            continue;
          }else if((!zh[i-1] || zh[i-1].localeCompare(name) <= 0) && name.localeCompare(zh[i]) == -1) {
            current.push(contact);
            arr.splice(j, 1);
          }
        }

        if(current.length) {

          current.sort(function(a,b){
            let displayNameA = a.displayName || a.name.formatted
            let displayNameB = b.displayName || b.name.formatted
            if(displayNameA.substr(0,1).charCodeAt()<150 || displayNameB.substr(0,1).charCodeAt()<150){
              return displayNameA.substr(0,1).charCodeAt() > displayNameB.substr(0,1).charCodeAt()
            }
            return displayNameA.localeCompare(displayNameB);
          });
          group[item] = current
        }
      });
      return group;
    }
  },
  mounted(){
    setTimeout(()=>{
      this.ready = true
    },100)
    setTimeout(()=>{
      if(this.items.C){
        this.items.C.push({name:'chenjia', phoneNumbers:['18702189255']})
      }
    },200)

    let _this = this
    document.addEventListener("deviceready", ()=>{
      function onSuccess(contacts) {
        _this.items = contacts
        console.log('Found ' + contacts.length + ' contacts.')
        for (var i = 0; i < contacts.length; i++) {
          console.log("Contact[" + i + "]: " + JSON.stringify(contacts[i]))
        }
      };

      function onError(contactError) {
        alert('onError!');
      };

      var fields = ["displayName", "name", "phoneNumbers", "emails", "address"]
      console.log(navigator.contacts.fieldType)
      var options = { filter: "", multiple: true }
      navigator.contacts.find(fields, onSuccess, onError, options);
    }, false);
  }
}
</script>