const current_date = new Date()
const app = {
    data() {
        return {
            date_naissance: undefined,
            heure_naissance: undefined,
            minute_naissance: undefined,
            secondes_naissance: undefined,
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
            const date_naissance_formater = new Date(this.date_naissance).toLocaleDateString()
            this.date_naissance_formater = date_naissance_formater
            this.heure_naissance = naissance.getHours() + ":"+ naissance.getMinutes()
            

        }
    }
}
Vue.createApp(app).mount("#date")