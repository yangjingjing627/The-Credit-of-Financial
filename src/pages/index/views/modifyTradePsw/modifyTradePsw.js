import Vue from 'vue';
import '../static/css/common.css';
import api from "apiConfig/apiConfig";
import {mapGetters} from 'vuex';
export default {
    name: 'v-modifyTradePsw',
    created() {

    },
    data() {
        return {
            psw1: '',
            psw2: '',
            psw3: "",
            checkForm: false,
            flag: true
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        toggle(){
            if (this.flag) {
                this.flag = false;
            } else {
                this.flag = true;
            }
        },
        beforSubmit(){
            const reg = /^\d{6}$/;
            if (!(this.psw1 && this.psw2 && this.psw3)) {
                return;
            } else if (!reg.test(this.psw1)) {
                this.$toast("原交易密码错误", {
                    duration: 2000
                })
                return;
            } else if (!reg.test(this.psw2)) {
                this.$toast("新密码格式不正确", {
                    duration: 2000
                })
                return;
            } else if (this.psw2 != this.psw3) {
                this.$toast("两次输入密码不一致", {
                    duration: 2000
                })
                return;
            } else if (this.psw2 == this.psw1) {
                this.$toast("新密码不能与原密码相同", {
                    duration: 2000
                })
                return;
            } else {
                this.checkForm = true;
            }
        },
        modifyLogPsw(){
            var self = this;
            this.beforSubmit();
            if (!this.checkForm) {
                return false;
            } else {
                this.$http.put(api.tradePsw + this.gToken + "&oldOrderPassword=" + this.psw1, {'oldOrderPassword': this.psw1,"orderPassword": self.psw2}).then(res => {
                    if (res.body.status == "20000551") {
                        self.$toast("密码修改成功", {
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
