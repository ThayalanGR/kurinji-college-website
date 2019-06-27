let Url = "http://erp.epizy.com";
let mainUrl = window.location.origin;
if (window.location.origin === "http://localhost:3000")
    Url = "http://localhost/kurinji"

export default {
    baseUrl: Url,
    siteurl: mainUrl
}