module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "bsky.syui.cf";
				return args;
			})
	},
	publicPath: "./",
	configureWebpack: {
		output: {
			filename: '[name].js',
			chunkFilename: '[name].js'
		}
	},
	css: {
		extract: {
			filename: '[name].css',
			chunkFilename: '[name].css'
		},
	},
}
