import Vue from 'vue'

require.ensure([], () => {
  let fastclick = require('fastclick')
  fastclick.attach(document.body)

  let Actionsheet = require('mint-ui/lib/actionsheet').default
  let Badge = require('mint-ui/lib/badge').default
  let Button = require('mint-ui/lib/button').default
  let Cell = require('mint-ui/lib/cell').default
  let CellSwipe = require('mint-ui/lib/cell-swipe').default
  let Checklist = require('mint-ui/lib/checklist').default
  let DatetimePicker = require('mint-ui/lib/datetime-picker').default
  let Field = require('mint-ui/lib/field').default
  let Header = require('mint-ui/lib/header').default
  let IndexList = require('mint-ui/lib/index-list').default
  let IndexSection = require('mint-ui/lib/index-section').default
  let Lazyload = require('mint-ui/lib/lazyload').default
  let Loadmore = require('mint-ui/lib/loadmore').default
  let Popup = require('mint-ui/lib/popup').default
  let Progress = require('mint-ui/lib/progress').default
  let Radio = require('mint-ui/lib/radio').default
  let Range = require('mint-ui/lib/range').default
  let Search = require('mint-ui/lib/search').default
  let Spinner = require('mint-ui/lib/spinner').default
  let Swipe = require('mint-ui/lib/swipe').default
  let SwipeItem = require('mint-ui/lib/swipe-item').default
  let Switch = require('mint-ui/lib/switch').default
  let Tabbar = require('mint-ui/lib/tabbar').default
  let TabContainer = require('mint-ui/lib/tab-container').default
  let TabContainerItem = require('mint-ui/lib/tab-container-item').default
  let TabItem = require('mint-ui/lib/tab-item').default
  
	Vue.use(Lazyload)
	Vue.component(Actionsheet.name, Actionsheet)
	Vue.component(Badge.name, Badge)
	Vue.component(Button.name, Button)
	Vue.component(Cell.name, Cell)
	Vue.component(CellSwipe.name, CellSwipe)
	Vue.component(Checklist.name, Checklist)
	Vue.component(DatetimePicker.name, DatetimePicker)
	Vue.component(Field.name, Field)
	Vue.component(Header.name, Header)
	Vue.component(IndexList.name, IndexList)
	Vue.component(IndexSection.name, IndexSection)
	Vue.component(Loadmore.name, Loadmore)
	Vue.component(Popup.name, Popup)
	Vue.component(Progress.name, Progress)
	Vue.component(Radio.name, Radio)
	Vue.component(Range.name, Range)
	Vue.component(Search.name, Search)
	Vue.component(Spinner.name, Spinner)
	Vue.component(Swipe.name, Swipe)
	Vue.component(SwipeItem.name, SwipeItem)
	Vue.component(Switch.name, Switch)
	Vue.component(Tabbar.name, Tabbar)
	Vue.component(TabContainer.name, TabContainer)
	Vue.component(TabContainerItem.name, TabContainerItem)
	Vue.component(TabItem.name, TabItem)

  window.lazyLibsLoaded = true
  console.log(window.lazyLibsLoaded)
}, 'lazyLibs')