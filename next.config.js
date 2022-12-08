
module.exports={
    reactStrictMode:true,
    basePath:process.env.GITHUB_ACTIONS ? '/my-blog':'',
    assetPrefix:process.env.GITHUB_ACTIONS? '/my-blog':'',
    trailingSlash:true,    
    images:{unoptimized:true},
}