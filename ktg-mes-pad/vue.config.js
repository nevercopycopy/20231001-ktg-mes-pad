//vue.config.js
const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true )
			})
		]
	},
	devServer: {
	    proxy: {
	      '/api': {
	        target: 'http://101.43.244.58:8080/',
	        changeOrigin: true,
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
	    },
	}
}