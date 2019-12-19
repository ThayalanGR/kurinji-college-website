let Url = window.location.origin;
if (window.location.origin === "http://localhost:3000" || window.location.origin === "http://192.168.15.210:3000") {
    const splitUrl = window.location.origin.split(":")
    Url = `${splitUrl[0]}:${splitUrl[1]}/kurinji`
}

export default {
    baseUrl: Url,
    siteurl: Url
}