import Vue from 'vue';
import api from 'apiConfig/apiConfig';
export default {
    name: 'v-settings',
    created() {

    },
    data() {
        return {}
    },
    watch: {},
    computed: {},
    methods: {
        logOut(){
            var self = this;
            this.$http.delete(api.logOut + localStorage.getItem("token")).then(function (res) {
                if (res.body.status == "20000551") {
                    localStorage.removeItem("token");
                    self.$router.push({"path": "wallet"})
                } else {
                    self.$toast(res.body.message || "未知错误", {
                        duration: 2000
                    })
                }
            }).catch(function (res) {
                console.log(res)
            })
        }
    },
    components: {},
    filters: {}
}