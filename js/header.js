const app = Vue.createApp({
    data(){
        return {
            homeMenu: false,
            infoMenu: false,
        }
    },
    methods: {
        homeClick(){
            this.homeMenu = !this.homeMenu
            const cover = document.querySelector('.menu-cover')
            cover.style.height = '100%'
            if(!this.homeMenu){
                const cover = document.querySelector('.menu-cover')
                cover.style.height = '0'
            }
        },
        infoClick(){
            this.infoMenu = !this.infoMenu
            const cover = document.querySelector('.menu-cover')
            cover.style.height = '100%'
            if(!this.infoMenu){
                const cover = document.querySelector('.menu-cover')
                cover.style.height = '0'
            }
        },
        coverclick(){
            const cover = document.querySelector('.menu-cover')
            cover.style.height = '0'
            this.homeMenu = false
            this.infoMenu = false
        }
    }
}).mount('#header')