


const app = {
    data(){
        return {
            text: '',
            color: '',
          
        }
    },
    methods: {
        addColor1(){
            this.color = 'red'
        },
        addColor2(){
            this.color = 'green'
        },
        addColor3(){
            this.color = 'orange'
        }
    },
}

Vue.createApp(app).mount('#box')
