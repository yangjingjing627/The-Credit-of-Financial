import Vue from 'vue';
import api from "apiConfig/apiConfig";
import md5 from "js-md5";
import {mapGetters, mapActions} from 'vuex';
import {fNotifyError,queryString} from 'widget/util/util';
import {JSEncrypt} from 'widget/util/jsencrypt';

export default {
    name: 'v-loanContract',
    created() {
        this.getUserInfo();
        this.getContract();
        
    },
    data() {
        return {
            userInfo: '',
            protocolInfo: '',
            pwd: '',
            pswDialog: false,
            applicationId:'',
            isShow:queryString('isShow')
        }
    },
    watch: {},
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
        // 用户信息
        getUserInfo(){//查询用户信息
            const self = this;
            this.fGetUser(this.gToken).then(data => {
                self.userInfo = data;
            }).catch(err => {
                fNotifyError(this, err);
            });
        },
        getContract(){ // 请求合同动态数据
            this.$http.get(api.protocol + this.gToken +"&applicationId=" + queryString("apcId")).then(res => {
                if (res.body.status == 20000551) {
                    this.protocolInfo = res.body.result;
                }
            }).catch(res => {
                console.log(res)
            })

        },
        // FProtocolSubmit(){ // 将合同签名传到链上
        //     // 数字签名
        //     var encrypt = new JSEncrypt();
        //     encrypt.setPublicKey(this.userInfo.publicKey); //  私钥
        //     var protocol = encrypt.encrypt(document);
        //     var self = this;
        //     this.$http({
        //         url: api.xdcore + this.gToken + '&applicationId='+queryString("apcId"),
        //         method: 'post',
        //         body: {
        //             "protocol": protocol
        //         }
        //     }).then(function (res) {
        //         console.log(res.body.status)
        //         if (res.body.status == '20000551') {
        //             this.submitBorrow();
        //         }
        //     }).catch(function (res) {
        //         console.log(res);
        //     })
        // },
        submitBorrow(){//借款意向提交
            // var encrypt = new JSEncrypt();
            // encrypt.setPublicKey(this.userInfo.publicKey); //  私钥
        //    var protocol = this.$refs.content.innerHTML;
            var self = this;
            this.$http({
                url:api.loanIntention + queryString("apcId") + "/loan?QB_AUTH_TOKEN=" + this.gToken,
                method:'post',
                body:{
                    "sign":'1234'
                }
            }).then(res => {
                if (res.body.status == 20000551) {
                    this.$router.push({path: 'borrowMoney?applyStatus=35000&applicationId='+queryString("apcId")})
                }
            }).catch(res=>{
                console.log(res)
            })

        },
        checkPsw(){//验证交易密码
            this.pwd = md5(md5(this.pwd));
            this.$http.get(api.checkPsw + this.gToken + "&orderPassword=" + this.pwd).then(res => {
                this.pwd = '';
                if (res.body.status == 20000551) {
                    this.submitBorrow();//借款意向提交
                }
            }).catch(res => {
                console.log(res)
            })
        },
        numStack(num){//数字键盘的按键操作
            if (num === "") {
                return false;
            } else if (num == 'deleteNum') {
                if (this.pwd) {
                    this.pwd = this.pwd.slice(0, -1);
                }
            } else {
                if (this.pwd.length < 6) {
                    this.pwd += num;
                    if (this.pwd.length == 6) {
                        this.pswDialog = false;
                        this.checkPsw(); // 验证交易密码
                    }
                }
            }
        },
        fClose: function () {
			this.pswDialog = false;
		}
    },
    components: {},
    filters: {}
}