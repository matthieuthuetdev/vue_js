const date = new Date()
const app = {
    data() {
        return {
            date_naissance: "",
            date_actuel: date.toLocaleDateString("fr-fr"),
            age: 0
        },
        calculer_age(){
            
        }
    }
}
Vue.createApp(app).mount("#date")