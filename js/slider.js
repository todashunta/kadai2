const slider = Vue.createApp({
    data(){
        return {
            currentSlide: 1
        }
    },
    methods: {
        nextSlide(){
            this.currentSlide++
            if(this.currentSlide >= 6 ){
                this.currentSlide = 1
            }
            const label = document.getElementById('label' + this.currentSlide)
            label.click()
        },
        backSlide(){
            console.log(this.currentSlide)
            this.currentSlide--
            if(this.currentSlide <= 1 ){
                this.currentSlide = 5
            }
            const label = document.getElementById('label' + this.currentSlide)
            label.click()
        },
        selectSlide(e){
            this.currentSlide = e.target.id.slice(-1)
        }
    }
}).mount('#slider')