module.exports = {
    pluginOptions: {
        compression:{
            gzip: {
                filename: '[file].gz[query]',
                algorithm: 'gzip',
                include: /\.(js|css|html|svg|json)(\?.*)?$/i,
                minRatio: 0.8,
            }
        }
    },
    devServer: {
        disableHostCheck: true
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/global.scss";
          @import "@/styles/buttons.scss";
          @import "@/styles/forms.scss";
        `
            }
        }
    }
};
