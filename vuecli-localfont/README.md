# localfont

vue.config.js example for using local font files in vue-cli.

1. overrides default fonts rule and set limit to -1 in vue.config.js 

2. replacing url-loader by file-loader for font does not work. vuecli still encodes font-face to base64

3. uses the relative folder to the css/scss file as we usually do.

4. icon text in templates can use html entity or unicode.

5. using @import in additionalData will break the function of additionalData option.
   I have to import scss in main.js, and only use plain css/scss in additionalData.
   
```
this works.
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

this does not work.
css: {
	loaderOptions: {
	  scss: {  
		additionalData : `            
		@import "~@/assets/scss/site.scss";
		.preclass {
		  background-color: red;
		}
		`,    //
		sourceMap: true,
	  }
	}
},
```