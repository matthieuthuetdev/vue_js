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
            const heure = naissance.getHours() <= 9 ? "0"+naissance.getHours(): naissance.getHours()
            const minute = naissance.getMinutes()<= 9 ? "0"+naissance.getMinutes(): naissance.getMinutes()
            const seconde = naissance.getSeconds()<= 9 ? "0"+naissance.getSeconds(): naissance.getSeconds()
            this.heure_naissance = heure + ":" + minute + ":" + seconde
        }
    }
}
Vue.createApp(app).mount("#date")