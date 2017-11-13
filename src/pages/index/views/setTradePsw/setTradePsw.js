import Vue from 'vue';
import '../static/css/common.css';
import api from "apiConfig/apiConfig";
import {mapGetters} from 'vuex';
export default {
    name: 'v-setTradePsw',
    created() {

    },
    data() {
        return {
            psw1: '',
            psw2: '',
            checkForm: false
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        beforSubmit(){
            const reg = /^\d{6}$/;
            if (!(this.psw1 && this.psw2)) {
                return;
            } else if (!reg.test(this.psw1)) {
                this.$toast("密码格式错误", {
                    duration: 2000
                })
                return;
            } else if (this.psw1 != this.psw2) {
                this.$toast("两次输入密码不一致", {
                    duration: 2000
                })
                return;
            } else {
                this.checkForm = true;
            }
        },
        setTradePsw(){
            const self = this;
            this.beforSubmit();
            if (!this.checkForm) {
                return false;
            } else {
                this.$http({
                    url: api.tradePsw + this.gToken,
                    method: "post",
                    body: {
                        "orderPassword": self.psw2
                    }
                }).then(res => {
                    if (res.body.status == "20000551") {
                        self.$toast("密码设置成功", {
                            duration: 2000,
                            callback: function () {
                                self.$router.push({"path": "wallet"})
                            }
                        })
                    }
                })
            }


        }
    },
    components: {},
    filters: {}
}