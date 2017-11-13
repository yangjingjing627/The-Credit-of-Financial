import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from 'apiConfig/apiConfig';
import {fNotifyError} from 'widget/util/util';

export default {
    name: 'v-realNameAuth',
    created() {
        this.getUserInfo();
    },
    data() {
        return {
            name: '',
            idCard: '',
            errorMsg: "",
            realNameFlag: false
        }
    },
    watch: {
        $router(to,from){
            if(to.name=="realNameAuth"){
                this.getUserInfo();
            }
        }
    },
    computed: {
        ...mapGetters({
            gToken: 'token',
            user: 'user'
        })
    },
    methods: {
        ...mapActions({
            fGetUser: 'fGetUser'
        }),
        getUserInfo(){// 用户信息
            const self = this;
            this.fGetUser(this.gToken).then(data => {
                if (data.authStatus< 10) {
                    self.realNameFlag = true;
                }else if(data.authStatus >= 10){
                    self.name = data.realName;
                    self.idCard = data.idCardNumber;
                    self.$refs.input1.setAttribute("readonly", 'readonly');
                    self.$refs.input2.setAttribute("readonly", 'readonly');
                }
            }).catch(err => {
                fNotifyError(this, err);
            });
        },
        submit(){
            const self = this;
            const reg1 = /^[\u4E00-\u9FA5·]{2,}$/;
            const reg2 = /^(\d{15}|\d{17}[0-9x])$/;
            if (!(this.name && this.idCard)) {
                return false;
            } else if (!reg1.test(this.name)) {
                this.errorMsg = "姓名格式不正确";
                return false;
            } else if (!reg2.test(this.idCard)) {
                this.errorMsg = "身份证格式不正确";
                return false;
            } else {
                this.$http({
                    method: "put",
                    url: api.realName + this.gToken,
                    body: {
                        "realName": this.name,
                        "idCardNumber": this.idCard
                    }
                }).then(function (res) {
                    if (res.body.status == "20000551") {
                        self.$router.push({path: "realNameSuccess"});
                    } else {
                        self.$toast(res.body.message || '未知错误', {
                            duration: 2000
                        })
                    }
                }).catch(function (res) {
                    console.log(res);
                })
            }

        }
    },
    components: {},
    filters: {}
}