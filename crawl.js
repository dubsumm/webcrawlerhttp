const getURLsFromHTML = (htmlBody,baseURL) => {
    const urls = []
    return urls
}



const normalizeURL = (urlString) => {

    const urlObj = new URL(urlString)
    console.log(urlObj)
    const hostPath =  `${urlObj.hostname}${urlObj.pathname}`
    if(hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}