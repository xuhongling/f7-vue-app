<template>
  <f7-page name="contactsList" class="contactsList">
    <f7-navbar title="联系人" back-link="Back"></f7-navbar>
    <f7-list contacts-list v-for="(group, index) in arr2" :key="index" :group="group">
      <f7-list-group>
        <f7-list-item group-title>{{group}}</f7-list-item>
        <f7-list-item
          v-for="(item, index1) in lastList[group]"
          :key="index1"
          :item="item"
        >{{item.NAME}}</f7-list-item>
      </f7-list-group>
      <!-- <f7-list-group>
        <f7-list-item title="A" group-title></f7-list-item>
        <f7-list-item title="Aaron "></f7-list-item>
        <f7-list-item title="Abbie"></f7-list-item>
        <f7-list-item title="Adam"></f7-list-item>
        <f7-list-item title="Adele"></f7-list-item>
        <f7-list-item title="Agatha"></f7-list-item>
        <f7-list-item title="Agnes"></f7-list-item>
        <f7-list-item title="Albert"></f7-list-item>
        <f7-list-item title="Alexander"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="B" group-title></f7-list-item>
        <f7-list-item title="Bailey"></f7-list-item>
        <f7-list-item title="Barclay"></f7-list-item>
        <f7-list-item title="Bartolo"></f7-list-item>
        <f7-list-item title="Bellamy"></f7-list-item>
        <f7-list-item title="Belle"></f7-list-item>
        <f7-list-item title="Benjamin"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="C" group-title></f7-list-item>
        <f7-list-item title="Caiden"></f7-list-item>
        <f7-list-item title="Calvin"></f7-list-item>
        <f7-list-item title="Candy"></f7-list-item>
        <f7-list-item title="Carl"></f7-list-item>
        <f7-list-item title="Cherilyn"></f7-list-item>
        <f7-list-item title="Chester"></f7-list-item>
        <f7-list-item title="Chloe"></f7-list-item>
      </f7-list-group>
      <f7-list-group>
        <f7-list-item title="V" group-title></f7-list-item>
        <f7-list-item title="Vladimir"></f7-list-item>
      </f7-list-group>-->
    </f7-list>
  </f7-page>
</template>

<script>
import { config } from "utils/config";

export default {
  name: "ContactsList",
  data() {
    return {
      lastList: [],
      arr2: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    };
  },
  methods: {
    //先转换成对象，根据firstchar字段对应的字母，先循环字母数组，设置字母为k,对应数组为键值
    lists(listDatas) {
      let obj = {};
      for (let i = 0; i < this.arr2.length; i++) {
        obj[this.arr2[i]] = [];
        listDatas.forEach(item => {
          item.value = item.id;
          item.name = item.NAME;
          if (this.arr2[i] === item.firstchar) {
            obj[this.arr2[i]].push(item);
          }
        });
      }
      return obj;
    },
    getContactsData() {
      this.$axios.get(config.server + `/api/app/getContactsData`).then(data => {
        if (data.code === 1) {
          console.log(data.detail.result);
          this.lastList = this.lists(data.detail.result);
          console.log(this.lastList);
        }
      });
    }
  },
  mounted() {
    this.getContactsData();
  },
  components: {}
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.contactsList {
}
</style>