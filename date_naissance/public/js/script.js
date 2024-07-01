const date = new Date()
const app = {
    data() {
        return {
            date_naissance: "",
            date_actuel: date,
            age: 0,
            phrase_age: ""
        }
    },
    methods: {
        calculer_age() {
            const naissance = new Date(this.date_naissance)
            const age = this.date_actuel - naissance
            age = Math.floor(age / 1000 / 60 / 60 / 24 / 365)
            this.age = age
            console.log(this.age)

        }
    }
}
Vue.createApp(app).mount("#date")