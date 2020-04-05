<template>
	<div class="mapScale">
		<span @click="handleClickZoomIn"><i class="iconfont icon-jia"></i></span>
		<span @click="handleClickZoomOut"><i class="iconfont icon-jian"></i></span>
	</div>
</template>

<script>
export default {
	name: "MapScale",
	data() {
		return {};
	},
	methods: {
		handleClickZoomIn() {
			let Map = this.globalMap;
			if (Map.getZoom() === 19) {
				this.$f7.dialog.alert("已经放大到最高级别！", "温馨提示");
				return;
			}
			Map.zoomIn();
		},
		handleClickZoomOut() {
			let Map = this.globalMap;
			if (Map.getZoom() < 9) {
				this.$f7.dialog.alert("已经缩放到最低级别！", "温馨提示");
				return;
			}
			Map.zoomOut();
		}
	},
	mounted() {},
	components: {}
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.mapScale {
	position: absolute;
	right: 10px;
	bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #fff;
	width: 40px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	border-radius: 40px;
	overflow: hidden;
	span {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 40px;
		padding-top: 8px;
		padding-bottom: 4px;
		font-size: 14px;
		color: #666;
		overflow: hidden;
		i {
			color: #777;
			font-size: 22px;
		}
		&:active {
			color: #4287ff !important;
			background: #deedff;
			i {
				color: #4287ff !important;
			}
		}
	}
	span:last-child {
		border-bottom: none;
		padding-top: 6px;
		padding-bottom: 6px;
	}
}
</style>
