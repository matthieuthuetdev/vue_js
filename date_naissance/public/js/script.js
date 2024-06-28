const date = new Date()
const app = {
    data() {
        return {
            date_naissance: "",
            date_actuel: date.toDateString("y/m/d"),
            age: 0
        }
    }
}
Vue.createApp(app).mount("#date")