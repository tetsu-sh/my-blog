
module.exports={
    reactStrictMode:true,
    basePath:process.env.GITHUB_ACTIONS ? '/blog.chimu-chimu.org':'',
    assetPrefix:'/',
    trailingSlash:true,    
    images:{unoptimized:true},
}