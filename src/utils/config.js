const config = {
	title: "荆州市县级农村基层防汛监测预警平台",
	version: "v1.0.0",
	server: 'http://iot.keepsoft.net:9473/jzfx-web',
	// server: 'http://localhost:8089'
}

let mapConfig = {
	center: [112.240684664, 30.3347925889],
	mapUrl: {
		"tianditu_img": "http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=be981e1ad1840652786fd1cb717f95a8",
		"tianditu_vec": "http://t3.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=be981e1ad1840652786fd1cb717f95a8",
		"tianditu_ter": "http://t3.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=be981e1ad1840652786fd1cb717f95a8",
		"tianditu_label": "http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=be981e1ad1840652786fd1cb717f95a8",
	},
	//行政区划颜色对应表
	addvcdToColor:{
	   "421003001000":"rgba(221,160,221, 0.3)",
	   "421003002000":"rgba(255,0,255, 0.3)",
	   "421003003000":"rgba(64,224,208, 0.3)",
	   "421003100000":"rgba(100,149,237, 0.3)",
	   "421003101000":"rgba(245,245,220, 0.3)",
	   "421003102000":"rgba(50,205,50, 0.3)",
	   "421003103000":"rgba(0,250,154, 0.3)",
	   "421003104000":"rgba(0,128,128, 0.3)",
	   "421003105000":"rgba(147,112,219, 0.3)",
	   "421003106000":"rgba(255,192,203, 0.3)",
	   "421003450000":"rgba(218,112,214, 0.3)"
	}
}

mapConfig.layers = new Array();

//图层配置
mapConfig.layer_type=[
	{
		"ln_en":"rainfall_pp",
		"ln_cn":"雨量站",
		"png":"./images/gis/meteorological-station.png"
	},
	{
		"ln_en":"reservoir_rr",
		"ln_cn":"水库站",
		"png":"./images/gis/reservoir.png"
	},
	{
		"ln_en":"river_zz",
		"ln_cn":"河道水位站",
		"png":"./images/gis/wl_0.png"
	},
	{
	  "ln_en": "layer_dd",
	  "ln_cn": "闸站",
	  "png": "./images/gis/brake_dd.png"
   },
	{
 		"ln_en": "layer_dp",
  	"ln_cn": "泵站",
  	"png": "./images/gis/pump_dd.png"
  }
]
//water_rainfall--降雨量颜色配置
mapConfig.water_rainfall = {"id":[[0,0],[0,10],[10,25],[25,50],[50,100],[100,250],[250,250000]],
	"id_cn":["暂无数据","0_10雨量","10_25雨量","25_50雨量","50_100雨量","100_250雨量","250以上雨量",],
	"colors":["#FFFFFF","#A6F28E","#258C30","#61B8FF","#0000E1","#FA00FA","#880015"],
	"childs":["water_rainfall_0_0","water_rainfall_0_10","water_rainfall_10_25","water_rainfall_25_50","water_rainfall_50_100","water_rainfall_100_250","water_rainfall_250"]};


export {config, mapConfig}