const path = require('path')
const postcssPresetEnv = require('postcss-preset-env')
const postcssPxToViewport = require('postcss-px-to-viewport')

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: 'dist',
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'f7-vue-app',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	css: {
		extract: true,
		sourceMap: false,
		requireModuleExtension: false,
		loaderOptions: {
			css: {},
			postcss: {
				plugins: () => [
					postcssPresetEnv({}),
					postcssPxToViewport({
						viewportWidth: 375,  // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
						viewportHeight: 667,  // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
						unitPrecision: 5,  // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
						viewportUnit: 'vw',  // 指定需要转换成的视窗单位，建议使用vw
						selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
						minPixelValue: 1,  // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
						mediaQuery: false  // 允许在媒体查询中转换`px`
					})
				],
			}
		},
	},
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/app':{
				target: 'http://192.168.2.185:7778',
				changeOrigin: true,
				secure: false,
			}
		}
	},
	configureWebpack: config => {
		config.resolve = {
			extensions: ['.js', '.vue', '.json', '.css', '.less'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
				'assets': resolve('src/assets'),
				'components': resolve('src/components'),
				'router': resolve('src/router'),
				'public': resolve('public'),
				'store': resolve('src/store'),
				'pages': resolve('src/pages'),
				'utils': resolve('src/utils'),
			}
		}
	}
}