const slider = Vue.createApp({
    data(){
        return {
            currentSlide: 1,
            targetWidth: 0,
            currentTouchX: 0,
            touchStartX: 0,
            touchMoveX: 0,
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
            this.currentSlide--
            if(this.currentSlide <= 0 ){
                this.currentSlide = 5
            }
            const label = document.getElementById('label' + this.currentSlide)
            label.click()
        },
        selectSlide(e){
            this.currentSlide = e.target.id.slice(-1)
        },
        swipDown(e) {
            this.targetWidth = e.target.clientWidth;
            this.touchStartX = e.targetTouches[0].clientX
            // console.log(e.targetTouches[0].clientX)
        },
        swipMove(e) {
            this.touchMoveX = this.touchStartX - e.targetTouches[0].clientX
            // console.log(this.touchMoveX)
        },
        swipUp(e) {
            if (this.targetWidth / 4 <= Math.abs(this.touchMoveX)) {
                if (this.touchMoveX > 0) {
                    this.nextSlide()
                } else {
                    this.backSlide()
                }
            }
        }
    }
}).mount('#slider')