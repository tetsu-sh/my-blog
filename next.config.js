
module.exports={
    reactStrictMode:true,
    basePath:process.env.GITHUB_ACTIONS ? '/my-blog':'',
    assetPrefix:'/',
    trailingSlash:true,    
    images:{unoptimized:true},
}