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
    methods :{
        calculer_age(){
            const naissance = new Date(this.date_naissance)
            this.age = this.date_actuel - this.date_naissance
            console.log(this.age)

        }
    }
}
Vue.createApp(app).mount("#date")