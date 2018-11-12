var sjgsggVM = new Vue({
    el: '#sjgsgg-box',
    data: {
        list: []
    },
    methods: {
        open(url) {
            window.open(url)
        }
    },
    created: function () {
        eval(document.querySelectorAll('[herald-content="审计公示公告"] script')[0].innerText)
        for (var i = 0; i < w3imgJsons.length; i++) {
            // w1imgJsons[i].year = w1imgJsons[i].date.split('-')[0]
            // w1imgJsons[i].date = w1imgJsons[i].date.split('-')[1] + '-' + w1imgJsons[i].date.split('-')[2]
            w3imgJsons[i].href = w3imgJsons[i].url
        }
        this.list = w3imgJsons
        console.log(w3imgJsons)
    }
})