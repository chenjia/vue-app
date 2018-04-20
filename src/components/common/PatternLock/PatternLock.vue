<template>
	<div style="position:absolute;width:100%;display:table;height:100%;text-align:center;background-size: 100% 100%;background-image:url(./static/img/lock-bg.jpg)">
		<div style="display:table-cell;vertical-align:middle;">
      <div class="mhn-lock-title">
        <span :class="{'mhn-lock-stable':lock.state=='stable','mhn-lock-success':lock.state=='success','mhn-lock-failure':lock.state=='failure'}">{{lock.title}}</span>
      </div>
      <div class="mhn-lock-demo">
        <table :class="{'shake':lock.state=='failure'}" cellspacing="6">
          <tr v-for="i in 3">
            <td :class="{'mhn-lock-selected':lock.prevPattern&&(lock.prevPattern.indexOf((i-1)*3+j) != -1)}" v-for="j in 3"></td>
          </tr>
        </table>
      </div>
      <div class="mhn-lock-wrap">
        <div class="mhn-lock" :class="{'patt-success':lock.state=='success','patt-error':lock.state=='failure'}"></div>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  name: 'patternLock',
  data() {
    return {
    	lock:{}
    }
  },
  methods: {
    
  },
  mounted(){
  	let oldPattern = utils.cache.get('pattern')
  	let timer,patternLock
  	let _this = this
  	let options = {
  		onDraw(newPattern){
  			if((newPattern+'').length<4){
  				this.lock = {
  					title:'请至少输入4位密码',
  					state:'failure'
  				};
  				clearTimeout(timer);
  				timer = setTimeout(()=>{
  					patternLock.reset();
  					if(oldPattern){
  						_this.lock = {
  							title:'请输入手势密码解锁',
  							state:'stable'
  						};
  					}else{
  						_this.lock = {
  							title:'请输入初始手势密码',
  							state:'stable'
  						};
  					}
  				},2000);
  			}else{
  				if(oldPattern){
  					if(oldPattern==newPattern){
  						_this.lock = {
  							prevPattern:null,
  							title:'解锁成功',
  							state:'success'
  						};
  						clearTimeout(timer);
  						timer = setTimeout(()=>{
  							_this.go('home')
  						},1000);
  					}else{
  						_this.lock = {
  							title:'密码输入错误，请重新输入',
  							state:'failure'
  						};
  						clearTimeout(timer);
  						timer = setTimeout(()=>{
  							patternLock.reset();
  							_this.lock = {
  								prevPattern:null,
  								title:'请输入手势密码解锁',
  								state:'stable'
  							};
  						},2000);
  					}
  				}else{
  					if(_this.lock.prevPattern){
  						if(_this.lock.prevPattern==newPattern){
  							utils.cache.set('pattern',newPattern);
  							clearTimeout(timer);
  							_this.lock = {
  								prevPattern:null,
  								title:'密码设置成功',
  								state:'success'
  							};
  						}else{
  							_this.lock = {
  								prevPattern:null,
  								title:'两次密码不一致，请重新输入',
  								state:'failure'
  							};
  							clearTimeout(timer);
  							timer = setTimeout(()=>{
  								patternLock.reset();
  								_this.lock = {
  									prevPattern:null,
  									title:'请输入手势密码解锁',
  									state:'stable'
  								};
  							},2000);
  						}
  					}else{
  						_this.lock = {
  							prevPattern:newPattern,
  							title:'请再输入一次',
  							state:'stable'
  						};
  						patternLock.reset();
  					}

  				}
  			}
  		}
  	};

  	patternLock= new PatternLock(document.querySelector('.mhn-lock'),options);
  	document.querySelector('.mhn-lock-wrap').style.display = 'inline-block'
  	if(oldPattern){
  		this.lock = {
  			title:'请输入手势密码解锁',
  			state:'stable'
  		};
  	}else{
  		this.lock = {
  			title:'请输入初始手势密码',
  			state:'stable'
  		};
  	}
  }
}
</script>