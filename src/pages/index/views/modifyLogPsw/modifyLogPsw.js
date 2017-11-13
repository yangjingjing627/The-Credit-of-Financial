import Vue from 'vue';
import '../static/css/common.css';
import api from "apiConfig/apiConfig";
export default {
    name: 'v-modifyLogPsw',
    created() {

    },
    data() {
        return {
            psw1: '',
            psw2: '',
            psw3: "",
            checkForm: false
        }
    },
    watch: {},
    computed: {},
    methods: {
        beforSubmit(){
            const reg = /(?!^.*[\u4E00-\u9FA5].*$)^\S{6,16}$/;
            if (!(this.psw1 && this.psw2 && this.psw3)) {
                return;
            } else if (!reg.test(this.psw1)) {
                this.$toast("当前登录密码错误", {
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
                this.$http.put(api.modifyLogPsw + localStorage.getItem("token"), {'oldPassword': self.psw1,"password": self.psw2}).then(function (res) {
                    if (res.body.status == "20000551") {
                         localStorage.removeItem("token");
                        self.$toast("密码修改成功", {
                            duration: 2000,
                            callback: function () {
                                self.$router.push({"path": "login"});
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
