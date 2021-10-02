module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/app.css');
    eleventyConfig.addPassthroughCopy('./src/imgs');
    eleventyConfig.addPassthroughCopy('./src/pdf');
    eleventyConfig.addPassthroughCopy('./src/admin');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}