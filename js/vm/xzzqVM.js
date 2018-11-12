var sjgsggVM = new Vue({
    el: '#xzzq-box',
    data: {
        list: []
    },
    methods: {
        open(url) {
            window.open(url)
        }
    },
    created: function () {
        eval(document.querySelectorAll('[herald-content="下载专区"] script')[0].innerText)
        for (var i = 0; i < w5imgJsons.length; i++) {
            // w1imgJsons[i].year = w1imgJsons[i].date.split('-')[0]
            // w1imgJsons[i].date = w1imgJsons[i].date.split('-')[1] + '-' + w1imgJsons[i].date.split('-')[2]
            w5imgJsons[i].href = w5imgJsons[i].url
        }
        this.list = w5imgJsons
        console.log(w5imgJsons)
    }
})