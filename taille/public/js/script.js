const app = {
    data() {
        return {
            taille: 16,
            min: 8,
            max: 48
        }
    },
    methods: {
        agrendire() {
            if (this.taille >= this.max) {
                this.taille = 16;
            } else {
                this.taille++
            }
        },
        retrecir() {
            if (this.taille <= this.min) {
                this.taille = 16
            } else {
                this.taille--
            }
        }

    }
}
Vue.createApp(app).mount("#app")