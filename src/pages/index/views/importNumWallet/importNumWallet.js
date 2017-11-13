import Vue from 'vue';
import "../static/css/common.css";
import api from 'apiConfig/apiConfig';
import {mapGetters} from 'vuex';
export default {
    name: 'v-importNumWallet',
    created() {
        this.userInfo()
    },
    data() {
        return {
            realName: "",
            idCardNumber: "",
            bank: '',
            cardNumber: '',
            mobilePhone: "",
            nickname: ''
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        userInfo(){
            const self = this;
            this.$http.get(api.userInfo + self.gToken).then(
                function (res) {
                    if (res.body.status == "20000551") {
                        self.realName = res.body.result.realName;
                        self.idCardNumber = res.body.result.idCardNumber;
                        self.mobilePhone = res.body.result.mobilePhone;
                        self.bank = res.body.result.banks[0].bankName;
                        self.cardNumber = res.body.result.banks[0].bankCard;
                    }
                },
            ).catch(function (res) {
                console.log(res);
            })
        },
        importWallet(){
            if (!this.nickname) {
                return;
            }
            var self = this;
            this.$http({
                url: api.importWallet + self.gToken,
                method: "post",
                body: {
                    "mobilePhone": this.mobilePhone,
                    "name": this.nickname
                }
            }).then(
                function (res) {
                    if (res.body.status == "20000551") {
                        self.$router.push({path: "importWalletResult"});
                    }
                },
            ).catch(function (res) {
                console.log(res);
            })
        }
    },
    components: {},
    filters: {}
}