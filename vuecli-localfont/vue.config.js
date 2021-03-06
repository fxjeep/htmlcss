module.exports = {
    css: {
        loaderOptions: {
          scss: {  //@import "~@/assets/scss/site.scss";
            additionalData : `            
            .preclass {
              background-color: red;
            }
            `,    //
            sourceMap: true,
          }
        }
    },
    chainWebpack: config => {
      config.module
            .rule("fonts")
            .test(/\.(ttf|otf|eot|woff|woff2|svg)$/)
            .use("url-loader")          //using file-loader will copy font files, but font file name in css is base64 encoded, browser won't load it.
              .loader("url-loader")     //have to use limit:-1 to fallback to file-loader
              .tap(options => {
                options = {
                  limit:-1,
                  name: 'fonts/[name].[ext]'
                }
                return options
              })
              .end()
    }
  }