<template>
	<f7-page name="searchContent" :page-content="false" class="searchContent" v-show="isShowSearchBar">
		<f7-subnavbar :inner="false">
      <f7-searchbar
        search-container=".search-list"
        search-in=".item-title"
        :disable-button="!$theme.aurora"
      ></f7-searchbar>
    </f7-subnavbar>
		<div class="searchListWrapper">
			<f7-list class="searchbar-not-found">
		    <f7-list-item title="没有查询到"></f7-list-item>
		  </f7-list>
		  <f7-list class="search-list searchbar-found">
		    <f7-list-item title="Acura"></f7-list-item>
		    <f7-list-item title="Audi"></f7-list-item>
		    <f7-list-item title="BMW"></f7-list-item>
		    <f7-list-item title="Cadillac "></f7-list-item>
		    <f7-list-item title="Chevrolet "></f7-list-item>
		    <f7-list-item title="Chrysler "></f7-list-item>
		    <f7-list-item title="Dodge "></f7-list-item>
		    <f7-list-item title="Ferrari "></f7-list-item>
		    <f7-list-item title="Ford "></f7-list-item>
		    <f7-list-item title="GMC "></f7-list-item>
		    <f7-list-item title="Honda"></f7-list-item>
		    <f7-list-item title="Hummer"></f7-list-item>
		    <f7-list-item title="Hyundai"></f7-list-item>
		    <f7-list-item title="Infiniti "></f7-list-item>
		    <f7-list-item title="Isuzu "></f7-list-item>
		    <f7-list-item title="Jaguar "></f7-list-item>
		    <f7-list-item title="Jeep "></f7-list-item>
		    <f7-list-item title="Kia"></f7-list-item>
		    <f7-list-item title="Lamborghini "></f7-list-item>
		    <f7-list-item title="Land Rover"></f7-list-item>
		    <f7-list-item title="Lexus "></f7-list-item>
		    <f7-list-item title="Lincoln "></f7-list-item>
		    <f7-list-item title="Lotus "></f7-list-item>
		    <f7-list-item title="Mazda"></f7-list-item>
		    <f7-list-item title="Mercedes-Benz"></f7-list-item>
		    <f7-list-item title="Mercury "></f7-list-item>
		    <f7-list-item title="Mitsubishi"></f7-list-item>
		    <f7-list-item title="Nissan "></f7-list-item>
		    <f7-list-item title="Oldsmobile "></f7-list-item>
		    <f7-list-item title="Peugeot "></f7-list-item>
		    <f7-list-item title="Pontiac "></f7-list-item>
		    <f7-list-item title="Porsche"></f7-list-item>
		    <f7-list-item title="Regal"></f7-list-item>
		    <f7-list-item title="Saab "></f7-list-item>
		    <f7-list-item title="Saturn "></f7-list-item>
		    <f7-list-item title="Subaru "></f7-list-item>
		    <f7-list-item title="Suzuki "></f7-list-item>
		    <f7-list-item title="Toyota"></f7-list-item>
		    <f7-list-item title="Volkswagen"></f7-list-item>
		    <f7-list-item title="Volvo"></f7-list-item>
		  </f7-list>
		</div>
		<div class="mask" @click="hideSearchBar"></div>
	</f7-page>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		name: "SearchContent",
		data() {
			return {
				
			}
		},
		computed: {
			...mapState([
				'isShowSearchBar'
			])
		},
		methods:{
			...mapActions([
        'setShowSearchBar'
      ]),
			hideSearchBar(){
				this.setShowSearchBar(false)
			}
		},
		mounted(){
			
		},
		components:{
			
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.searchContent{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2000;
		width: 100%;
		height: 100%;
		padding-top: 70px;
		background: transparent;
		.mask{
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.4);
			position: absolute;
			top: 0;
			left: 0;
		}
		.searchListWrapper{
			width: 100%;
			height: 400px;
			padding: 0 14px;
			border-radius: 8px;
			overflow-y: scroll;
			/deep/.search-list,/deep/.searchbar-not-found {
				margin: 0;
			}
		}
		/deep/.subnavbar{
			top: 10px;
		}
		/deep/.searchbar,/deep/.subnavbar,/deep/.subnavbar:before,form{
      width: 100%;
      background: transparent;
    }
    /deep/.searchbar{
      margin-left: 14px;
      margin-right: 14px;
    }
	}
</style>