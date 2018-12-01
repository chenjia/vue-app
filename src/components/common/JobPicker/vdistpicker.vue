<template>
  <div class="distpicker-address-wrapper">
    <template v-if="type != 'mobile'">
      <select @change="getCities" v-model="currentProvince" :disabled="disabled">
        <option :value="placeholders.province">{{ placeholders.province }}</option>
        <option v-for="(item, index) in provinces"
                :value="item"
                :key="index">
          {{ item }}
        </option>
      </select>
      <template v-if="!onlyProvince">
        <select @change="getAreas" v-model="currentCity" :disabled="disabled">
          <option :value="placeholders.city">{{ placeholders.city }}</option>
          <option v-for="(item, index) in cities"
                  :value="item"
                  :key="index">
            {{ item }}
          </option>
        </select>
        <select v-if="!hideArea" v-model="currentArea" :disabled="disabled">
          <option :value="placeholders.area">{{ placeholders.area }}</option>
          <option v-for="(item, index) in areas "
                  :value="item"
                  :key="index">
            {{ item }}
          </option>
        </select>
      </template>
    </template>
    <template v-else>
      <div :class="addressHeader">
        <div style="width:100%;height:50px;">
          <mt-search v-model="searchKey"></mt-search>
        </div>
        <ul>
          <li v-if="showProvinceTab" :class="{'active': tab === 1}" @click="resetProvince">{{ currentProvince && !staticPlaceholder ? currentProvince : placeholders.province }}</li>
          <template v-if="!onlyProvince">
            <li v-if="showCityTab" :class="{'active': tab === 2}" @click="resetCity">{{  currentCity && !staticPlaceholder ? currentCity : placeholders.city }}</li>
            <li v-if="showAreaTab && !hideArea" :class="{'active': tab === 3}">{{ currentArea && !staticPlaceholder ? currentArea : placeholders.area }}</li>
          </template>
        </ul>
      </div>
      <div :class="addressContainer">
        <ul v-if="tab === 1">
          <li v-for="(item, index) in provinces"
              :class="{'active': item === currentProvince}"
              @click="chooseProvince(item)"
              :key="index">
            {{ item }}
          </li>
        </ul>
        <template v-if="!onlyProvince">
          <ul v-if="tab === 2">
            <li v-for="(item, index) in cities"
                :class="{'active': item === currentCity}"
                @click="chooseCity(item)"
                :key="index">
              {{ item }}
            </li>
          </ul>
          <ul v-if="tab === 3 && !hideArea">
            <li v-for="(item, index) in areas"
                :class="{'active': item === currentArea}"
                @click="chooseArea(item)"
                :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import DISTRICTS from './job';

const DEFAULT_CODE = 0

export default {
  name: 'v-distpicker',
  props: {
    province: { type: [String, Number], default: '' },
    city: { type: [String, Number], default: '' },
    area: { type: [String, Number], default: '' },
    type: { type: String, default: '' },
    hideArea: { type: Boolean, default: false },
    onlyProvince: { type: Boolean, default: false },
    staticPlaceholder: { type: Boolean, default: false },
    placeholders: {
      type: Object,
      default() {
        return {
          province: '大类',
          city: '中类',
          area: '小类',
        }
      }
    },
    disabled: { type: Boolean, default: false },
    addressHeader: { type: String, default: 'address-header' },
    addressContainer: { type: String, default: 'address-container' },
  },
  data() {
    return {
      tab: 1,
      showProvinceTab: true,
      showCityTab: false,
      showAreaTab: false,
      provinces: [],
      cities: [],
      areas: [],
      searchKey:'',
      currentProvince: this.determineType(this.province) || this.placeholders.province,
      currentCity: this.determineType(this.city) || this.placeholders.city,
      currentArea: this.determineType(this.area) || this.placeholders.area,
    }
  },
  created() {
    if (this.type != 'mobile') {
      this.provinces = this.getDistricts()
      this.cities = this.province ? this.getDistricts(this.getAreaCode(this.determineType(this.province))) : []
      this.areas = this.city ? this.getDistricts(this.getAreaCode(this.determineType(this.city), this.area)) : []
    } else {
      if (this.area && !this.hideArea && !this.onlyProvince) {
        this.tab = 3
        this.showCityTab = true
        this.showAreaTab = true
        this.areas = this.getDistricts(this.getAreaCode(this.determineType(this.city), this.area))
      } else if (this.city && this.hideArea && !this.onlyProvince) {
        this.tab = 2
        this.showCityTab = true
        this.cities = this.getDistricts(this.getAreaCode(this.determineType(this.province)))
      } else {
        this.provinces = this.getDistricts()
      }
    }
  },
  watch: {
    currentProvince(vaule) {
      this.$emit('province', this.setData(vaule))
      if (this.onlyProvince) this.emit('selected')
    },
    currentCity(value) {
      this.$emit('city', this.setData(value, this.currentProvince))
      if (value != this.placeholders.city && this.hideArea) this.emit('selected')
    },
    currentArea(value) {
      if(!this.showProvinceTab){
        const area = this.setData(value)
        const province = this.setData(DISTRICTS[0][area.code.substr(0,2)])
        const city = this.setData(DISTRICTS[area.code.substr(0,2)][area.code.substr(0,4)])
        this.currentProvince = province.value
        this.currentCity = city.value
      }

      this.$emit('area', this.setData(value, this.currentProvince))
      if (value != this.placeholders.area) this.emit('selected')
    },
    province(value) {
      this.currentProvince = this.province || this.placeholders.province
      this.cities = this.determineValue(this.currentProvince, this.placeholders.province)
    },
    city(value) {
      this.currentCity = this.city || this.placeholders.city
      this.areas = this.determineValue(this.currentCity, this.placeholders.city, this.currentProvince)
    },
    area(value) {
      this.currentArea = this.area || this.placeholders.area
    },
    searchKey(value){
      if(value){
        this.areas = {}
        for(let i in this.getDistricts()){
          let obj1 = this.getDistricts(i)
          for(let j in obj1){
            let obj2 = this.getDistricts(j)
            for(let k in obj2){
              let obj3 = obj2[k]
              if(obj3.indexOf(this.searchKey) !== -1){
                this.areas[k] = obj3
                this.showProvinceTab = false
                this.showCityTab = false
                this.showAreaTab = true
                this.tab = 3
              }
            }
          }
        }
      }else{
        this.resetCity()
        this.resetProvince()
      }
    }
  },
  methods: {
    setData(value, check = '') {
      return {
        code: this.getAreaCode(value, check),
        value: value,
      }
    },
    emit(name) {
      let data = {
        province: this.setData(this.currentProvince)
      }

      if (!this.onlyProvince) {
        this.$set(data, 'city', this.setData(this.currentCity))
      }

      if (!this.onlyProvince || this.hideArea) {
        this.$set(data, 'area', this.setData(this.currentArea))
      }

      this.$emit(name, data)
    },
    getCities() {
      this.currentCity = this.placeholders.city
      this.currentArea = this.placeholders.area
      this.cities = this.determineValue(this.currentProvince, this.placeholders.province)
      this.cleanList('areas')
      if (this.cities === null) {
        this.emit('selected')
        this.tab = 1
        this.showCityTab = false
      }
    },
    getAreas() {
      this.currentArea = this.placeholders.area
      this.areas = this.determineValue(this.currentCity, this.placeholders.city, this.currentProvince)
      if (this.areas === null) {
        this.emit('selected')
        this.tab = 2
        this.showAreaTab = false
      }
    },
    resetProvince() {
      this.tab = 1
      this.provinces = this.getDistricts()
      this.showCityTab = false
      this.showAreaTab = false
      this.showProvinceTab = true
    },
    resetCity() {
      this.tab = 2
      this.showCityTab = true
      this.showAreaTab = false
      this.getCities()
    },
    chooseProvince(name) {
      this.currentProvince = name
      if (this.onlyProvince) return
      this.tab = 2
      this.showCityTab = true
      this.showAreaTab = false
      this.getCities()
    },
    chooseCity(name) {
      this.currentCity = name
      if (this.hideArea) return
      this.tab = 3
      this.showCityTab = true
      this.showAreaTab = true
      this.getAreas()
    },
    chooseArea(name) {
      this.currentArea = name
    },
    getAreaCode(name, check = '') {
      for(let x in DISTRICTS) {
        for(let y in DISTRICTS[x]) {
          if(name === DISTRICTS[x][y]) {
            if (check.length > 0) {
              if(this.getAreaCode(check) === undefined ){
                alert(check)
              }
              if (y.slice(0, 2) !== this.getAreaCode(check).slice(0, 2)) {
                continue
              } else {
                return y
              }
            } else {
              return y
            }
          }
        }
      }
    },
    getCodeValue(code) {
      console.log(code)
      for(let x in DISTRICTS) {
        for(let y in DISTRICTS[x]) {
          if(code === parseInt(y)) {
            return DISTRICTS[x][y]
          }
        }
      }
    },
    getDistricts(code = DEFAULT_CODE) {
      return DISTRICTS[code] || []
    },
    determineValue(currentValue, placeholderValue, check = '') {
      if(currentValue === placeholderValue) {
        return []
      } else {
        return this.getDistricts(this.getAreaCode(currentValue, check))
      }
    },
    determineType(value) {
      if(typeof value === 'number') {
        return this.getCodeValue(value)
      }

      return value
    },
    cleanList(name) {
      this[name] = []
    },
  }
}
</script>

<style lang="scss">
.distpicker-address-wrapper {
  color: #9caebf;
  select {
    padding: .5rem .75rem;
    height: 40px;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;

    option {
      font-weight: normal;
      display: block;
      white-space: pre;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
  .address-header {
    background-color: #fff;

    .mint-search-list{
      z-index:-1;
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: stretch;

      li {
        display: inline-block;
        padding: 10px 10px 7px;

        &.active {
          border-bottom: #52697f solid 3px;
          color: #52697f;
        }
      }
    }
  }
  .address-container {
    background-color: #fff;

    ul {
      height: 100%;
      overflow: auto;

      li {
        padding: 10px;
        border-top: 1px solid #f6f6f6;

        &.active {
          color: #52697f;
        }
      }
    }
  }
}
</style>
