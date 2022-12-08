
module.exports={
    reactStrictMode:true,
    basePath:process.env.GITHUB_ACTIONS ? '':'',
    assetPrefix:'/',
    trailingSlash:true,    
    images:{unoptimized:true},
}