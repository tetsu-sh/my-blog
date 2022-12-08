const withExportImages=require('next-export-optimize-images')

module.exports=withExportImages({
    reactStrictMode:true,
    basePath:process.env.GITHUB_ACTIONS && "/my-blog",
    assetPrefix:this.basePath,
    trailingSlash:true,    
    images:{domains:this.basePath},
})