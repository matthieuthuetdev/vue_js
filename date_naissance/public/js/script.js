const current_date = new Date()
const app = {
    data() {
        return {
            date_naissance: undefined,
            date_naissance_formater: undefined,
            date_actuel: current_date,
            age: undefined
        }
    },
    methods: {
        calculer_age() {
            const naissance = new Date(this.date_naissance)
            const age = this.date_actuel - naissance
            this.age = Math.floor(age / 1000 / 60 / 60 / 24 / 365)
            const date_naissance_formater = new Date(naissance).toLocaleDateString()
            this.date_naissance_formater = date_naissance_formater
            console.log(this.date_naissance_formater)

        }
    }
}
Vue.createApp(app).mount("#date")