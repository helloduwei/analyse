<template>
  <div class="conditions">
    <div :class="{range: true, active: range.type === rangeType}" v-for="(range, rangeIndex) in ranges" :key="rangeIndex" @click="toggleRange(range)">
      {{range.value}}
    </div>
    <div :class="{range: true, active: 2 === rangeType}" @click="toggleRange({
      value: 'YY:MM:DD', type: 2
    })">
      <input type="text" :id="eleId" placeholder="请选择日期范围">
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    eleId: String
  },
  data() {
    return {
      jeDate: window.jeDate,
      ranges: [
        {
          value: '最近7天',
          type: 0
        },
        {
          value: '最近30天',
          type: 1
        }
      ],
      rangeType: 0
    }
  },
  methods: {
    toggleRange(range) {
      this.rangeType = range.type
      let timeData = {}
      if (this.rangeType === 0) {
        timeData = this.lastDays(7)
        this.passDate(timeData)
      } else if (this.rangeType === 1) {
        timeData = this.lastDays(30)
        this.passDate(timeData)
      }
    },
    lastDays(day) {
      day = day - 0
      const gap = day*60*60*24
      const now = Math.floor(+new Date()/1000)
      const end = now - gap
      return {start: end, end: now}
    },
    init() {
      const options = {
        format: "YYYY-MM-DD",
        range:" 至 ",
        donefun: (d) => {
          this.getPickerDate(d)
        }
      }
      const elementId = '#' + this.eleId
      this.jeDate(elementId, options)
    },
    getPickerDate(d) {
      const start = d.date[0]
      const end = d.date[1]
      const startSec = +new Date(`${start.YYYY}-${start.MM}-${start.DD} 00:00:00`)/1000
      const endSec = +new Date(`${end.YYYY}-${end.MM}-${end.DD} 23:59:59`)/1000
      const date = {start: startSec, end: endSec}
      this.passDate(date)
    },
    passDate(range) {
      this.$emit('fetchRange', range)
    }
  },
  mounted() {
    this.init()
    this.passDate(this.lastDays(7))
  }
}
</script>

<style lang="less" scoped>
.conditions {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  .range {
    display: inline-block;
    margin: 0 0 0 10px;
    border-radius: 4px;
    height: 30px;
    width: auto;
    padding: 0 10px;
    line-height: 30px;
    font-size: 14px;
    color: #154972;
    background-color: #ddeefb;
    cursor: pointer;
  }
  .active {
    color: #0091f2;
    background-color: #c5e5fa;
  }
  input {
    width: 182px;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
