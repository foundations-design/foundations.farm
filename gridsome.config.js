// Changes here require a server restart.

const path = require('path');

// Function to add sass loader
function addStyleResource(rule) {
    rule.use('style-resource').loader('style-resources-loader').options({
        patterns: [
            path.resolve(__dirname, './src/assets/*.scss')
        ]
    })
}

module.exports = {
    siteName: 'Gridsome',

    // Get your files
    // you'll need another plugin object if you want to import a different folder

    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'src/posts/**/*.md',
                typeName: 'BlogPost',
                route: '/posts/:slug' //magic!
            }
        }
    ],

    // Prepare the files for Gridsome
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],

        }
    },

    // Add sass loader
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    }
}
