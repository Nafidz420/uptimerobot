const axios = require("axios")
const urls = ["https://anime-link.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("pingpong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
