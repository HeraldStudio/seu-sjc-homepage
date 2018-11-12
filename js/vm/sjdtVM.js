var sjdtVM = new Vue({
    el: '#sjdt-box',
    data: {
        list: []
    },
    methods: {
        open(url) {
            window.open(url)
        }
    },
    created: function () {
        eval(document.querySelectorAll('[herald-content="审计动态"] script')[0].innerText)
        for (var i = 0; i < w1imgJsons.length; i++) {
            // w1imgJsons[i].year = w1imgJsons[i].date.split('-')[0]
            // w1imgJsons[i].date = w1imgJsons[i].date.split('-')[1] + '-' + w1imgJsons[i].date.split('-')[2]
            w1imgJsons[i].href = w1imgJsons[i].url
            if (w1imgJsons[i].title.length >= 24) {
                w1imgJsons[i].title = w1imgJsons[i].title.slice(0, 23) + '...'
            }
        }
        this.list = w1imgJsons
        console.log(w1imgJsons)
    }
})