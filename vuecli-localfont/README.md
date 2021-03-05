# localfont

vue.config.js example for using local font files in vue-cli.

1. vue.config.js overrides default fonts rule and set limit to -1.
2. using file-loader for font does not work. vuecli still encodes font-face to base64
3. css/scss font-face uses the relative folder to the css/scss file, like normal use.
4. icon text can use normal html entity or unicode as usual.
