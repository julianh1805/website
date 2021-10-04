module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/global.scss";
          @import "@/styles/buttons.scss";
        `
            }
        }
    }
};
