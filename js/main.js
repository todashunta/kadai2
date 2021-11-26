const main = Vue.createApp({
    data() {
        return {
            imgExpend: false,
            imgWidth: '90%',
            riskExpend: false,
            riskWidth: '90%',
            riskTransform: '0'
        }
    },
    methods: {
        imgClick() {
            this.imgExpend = !this.imgExpend
            if (this.imgExpend) {
                this.imgWidth = '200%'
            } else {
                this.imgWidth = '90%'
            }
        },
        hideImgDiv(e) {
            const bottomIcon = e.target.firstChild
            if (document.body.clientWidth <= 600) {
                if (getComputedStyle(e.target).height == '100px') {
                    e.target.style.height = 'auto'
                    bottomIcon.style.display = 'none'
                } else {
                    e.target.style.height = '100px'
                    bottomIcon.style.display = 'block'
                }
            }
        },
        hideImg(e) {
            const bottomIcon = e.target.previousSibling
            if (document.body.clientWidth <= 600) {
                if (getComputedStyle(e.target.parentNode).height == '100px') {
                    e.target.parentNode.style.height = 'auto'
                    bottomIcon.style.display = 'none'
                } else {
                    e.target.parentNode.style.height = '100px'
                    bottomIcon.style.display = 'block'
                }
            }
        },
        riskClick() {
            this.riskExpend = !this.riskExpend
            if (this.riskExpend) {
                this.riskWidth = '200%'
                this.riskTransform = '20%'
            } else {
                this.riskWidth = '90%'
                this.riskTransform = '0'
            }
        }
    }
}).mount('#main')