<template>
	<div>
		<!-- 图片预览 -->
		<f7-photo-browser
			:photos="photos"
			theme="dark"
			ref="standaloneDark"
		></f7-photo-browser>
		<f7-list media-list>
			<f7-list-item
				v-for="(item, index) in failsList"
				:key="index"
				link="#"
				:title="item.MedName"
				:subtitle="item.OrderContent"
			>
				<video
					:src="server + item.MedURL"
					slot="media"
					width="80"
					v-if="
						item.MediaType == '.mp4' ||
							item.MediaType == '.wmv' ||
							item.MediaType == '.avi'
					"
				></video>
				<img
					v-if="
						item.MediaType == '.png' ||
							item.MediaType == '.jpg' ||
							item.MediaType == '.gif'
					"
					@click="$refs.standaloneDark.open()"
					slot="media"
					:src="server + item.MedURL"
					width="80"
				/>
			</f7-list-item>
		</f7-list>
	</div>
</template>

<script>
import { config } from "utils/config";
export default {
	data() {
		return {
			server: config.server,
			failsList: [],
			photos: [
				{
					url: "img/beach.jpg",
					caption: "Amazing beach in Goa, India"
				},
				{
					url: "img/monkey.jpg",
					caption: "I met this monkey in Chinese mountains"
				},
				{
					url: "img/mountains.jpg",
					caption: "Beautiful mountains in Zhangjiajie, China"
				}
			]
		};
	},
	methods: {
		getFailsList(item) {
			let that = this;
			let BelongType = '';
			if(item.BelongType!=null){
				BelongType = item.BelongType
			}
			this.$axios({
				method: "post",
				url: config.server + "/api/moveinspect/getInspectFiles",
				data: {
					BelongType: BelongType,
					MediaTypes: "",
					RecordId: item.id,
					beginTime: "",
					endTime: "",
					name: ""
				}
			}).then(res => {
				if (res.code === 1) {
					this.failsList = res.detail.result;
					console.log(res);
				}
			});
		}
	},
	mounted() {},
	components: {}
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.infoManageTab {
	width: 100%;
	height: 100%;
	padding: 10px 10px 28px 10px;
	.infoManageList {
		margin: 10px 0;
	}
}
</style>
