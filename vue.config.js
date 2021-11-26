module.exports = {
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
