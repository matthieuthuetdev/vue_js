const app = {
    data() {
        return {
            taille: 16,
            max: 48
        }
    },
    methods: {
        agrendire() {
            this.taille++
        }
    }
}
Vue.createApp(app).mount("#app")