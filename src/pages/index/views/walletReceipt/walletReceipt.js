import Vue from 'vue';
import {mapGetters} from 'vuex';
import api from "apiConfig/apiConfig";

export default {
    name: 'v-walletReceipt',
    created() {
        this.getUserInfo(); // 用户信息
        this.fSetAmount(); // 判断是否设置金额
    },
    data() {
        return {
            qrCode: '',
            code: '',
            userResult: {},
            amount: '',
            isSet: 0
        }
    },
    watch: {
        'rightClick'(){
            this.fScanQRCode();
        }
    },
    computed: {
        ...mapGetters({
            rightClick: 'rightClick',
            token: 'token'
        }),
        fAmount(){
            if(!this.amount){
                return '';
            }else{
                return ',"amount":' + this.amount;
            }
        }
    },
    methods: {
        fGenerateQrCode(){
        //   this.qrCode = '123123123' + Math.random();
            if(this.userResult.walletAddress){
                this.qrCode = '{"walletAddress": "' + this.userResult.walletAddress + '"' +  this.fAmount +'}';
            }
        },
        // 用户信息
        getUserInfo: function () {
            this.$http.get(api.userInfo + this.token)
                .then((response) => {
                    if (response.body.result) {
                        this.userResult = response.body.result;
                        localStorage.setItem("walletAddress", this.userResult.walletAddress);
                        this.fGenerateQrCode(); // 二维码生成
                    }
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 判断是否设置金额
        fSetAmount: function () {
            var _amount = localStorage.getItem('amount');
            if (_amount) {
                this.amount = _amount;
                this.isSet = 1;
                this.fGenerateQrCode();
            }
        },
        // 清除金额
        clearAmount: function (event) {
            localStorage.removeItem('amount');
            this.isSet = event;
            this.amount = '';
            this.fGenerateQrCode();
        }
    },
    components: {},
    filters: {}
}
