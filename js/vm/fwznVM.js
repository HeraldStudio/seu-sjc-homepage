var sjgsggVM = new Vue({
    el: '#fwzn-box',
    data: {
        list: []
    },
    methods: {
        open(url) {
            window.open(url)
        }
    },
    created: function () {
        eval(document.querySelectorAll('[herald-content="服务指南"] script')[0].innerText)
        for (var i = 0; i < w4imgJsons.length; i++) {
            // w1imgJsons[i].year = w1imgJsons[i].date.split('-')[0]
            // w1imgJsons[i].date = w1imgJsons[i].date.split('-')[1] + '-' + w1imgJsons[i].date.split('-')[2]
            w4imgJsons[i].href = w4imgJsons[i].url
        }
        this.list = w4imgJsons
        console.log(w4imgJsons)
    }
})