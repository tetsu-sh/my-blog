
module.exports={
    reactStrictMode:true,
    basePath:process.env.GITHUB_ACTIONS ? '/my-blog':'',
    assetPrefix:this.basePath,
    trailingSlash:true,    
    images:{unoptimized:true},
}