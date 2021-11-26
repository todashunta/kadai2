const main = Vue.createApp({
    data() {
        return {
            imgExpend: false,
            imgWidth: '90%',
        }
    },
    methods: {
        imgClick() {
            console.log('click')
            this.imgExpend = !this.imgExpend
            if (this.imgExpend) {
                this.imgWidth = '200%'
            } else {
                this.imgWidth = '90%'
            }
        }
    }
}).mount('#main')