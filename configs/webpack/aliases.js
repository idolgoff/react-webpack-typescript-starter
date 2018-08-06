module.exports = {
    aliases: function(resolve) {
        return ({
            "@assets": resolve(__dirname, `../../src/assets`),
            "@components": resolve(__dirname, `../../src/components`),
            "@redux": resolve(__dirname, `../../src/redux`),
            "@routes": resolve(__dirname, `../../src/routes`),
            "@screens": resolve(__dirname, `../../src/screens`),
            "@styles": resolve(__dirname, `../../src/styles`),
        })
    }
}