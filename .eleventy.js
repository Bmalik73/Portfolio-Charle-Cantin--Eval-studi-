module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/picture');
    eleventyConfig.addPassthroughCopy("./src/script.js");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }

}