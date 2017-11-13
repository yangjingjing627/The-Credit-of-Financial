import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from "apiConfig/apiConfig";
export default {
    mounted(){
        var self = this;
        bridgeRegisterHandler({  // 通讯录回调
            method: "telephoneDirectoryResult",
            data: {},
            callback: function (responseData) {
                responseData = JSON.parse(responseData);
                if(self.sTemp == 1){
                    if (responseData.number) {  // android
                        self.mobile1 = responseData.number;
                    } else { // ios
                        self.mobile1 = responseData;
                    }
                }else{
                    if (responseData.number) {  // android
                        self.mobile2 = responseData.number;
                    } else { // ios
                        self.mobile2 = responseData;
                    }
                }
            }
        });
    },
    data() {
        return {
            walletOwner: '',
            walletBank: '',
            walletAddr: '',
            mobile1: '',
            mobile2:'',
            isMarry: 0,  //婚姻状况
            consort: '', //配偶或亲属1姓名
            errorInfo: '',
            sTemp:''
        }
    },
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        reGet() {
            //倒计时
        },
        splitMobile(e) {
            var obj = window.event;
            if (obj.keyCode != 8) {                                     //判断是否为Backspace键，若不是执行函数；
                var b = document.getElementById("idNum").value;        //定义变量input  value值；
                var maxValue = 23;                                                       //限制输入框的最大值；
                b = b.replace(/[^\d\s]/g, "");                                         //正则表达式：如果输入框中输入的不是数字或者空格，将不会显示；
                document.getElementById("idNum").value = b;               //把新得到得value值赋值给输入框；
                for (var n = 1; n <= 4; n++) {
                    if (b.length <= 5 * n - 2 || b.length > 5 * n - 1) {                    //判断是否是该加空格的时候，若不会，还是原来的值；
                        b = b;
                    } else {
                        b = b + " ";                                                           //给value添加一个空格；
                        document.getElementById("idNum").value = b;    //赋值给输入框新的value值；
                    }
                }
            }
        },
        splitMobileNum(num) {
            var text_len = document.getElementById(num).value.length;
            if (text_len === 3 || text_len === 8) {
                document.getElementById(num).value += " ";
            }
        },
        splitPersonId() {
            var text_len = document.getElementById("idNum").value.length;
            if (text_len === 6 || text_len === 11 || text_len === 16) {
                document.getElementById("idNum").value += " ";
            }
        },
        fSubmit() {
            var idInfo = JSON.parse(localStorage.getItem("idInfo")),
            borrowInfo = JSON.parse(localStorage.getItem("borrowInfo")),
            mobileNo = localStorage.getItem("mobileNo");  
            if(this.isMarry<1){
                this.$toast("请选择婚姻状况",{
                    duration:2000
                });
                return false;
            }else if(!/^[\u4E00-\u9FA5.]{2,10}$/.test(this.consort)){
                this.$toast("请输入正确的联系人姓名",{
                    duration:2000
                });
                return false;
            }else if(!/^1[34578]\d{9}$/.test(this.mobile1)){
                this.$toast("请输入正确的联系人手机号",{
                    duration:2000
                });
                return false;
            }else if(!/^(\d{15}|\d{17}[0-9x])$/i.test(this.walletBank)){
                this.$toast("请输入正确的联系人身份证号",{
                    duration:2000
                });
                return false;
            }else{
                this.$http({
                    url: api.xdcore + this.gToken,
                    method: 'post',
                    body: {
                        "attachNumber": 2,//上传附件张数
                        "applyDate": "201709251612",// 申请日期
                        "applyAmount": borrowInfo.applyAmount,//申请金额
                        "period": borrowInfo.period,//申请期限
                        "periodUnit": "M",//申请期限单位
                        "loanPurpose": borrowInfo.loanPurpose,//贷款用途
                        "productCode": "111603",//产品编码
                        "customerName": idInfo.customerName,//客户名称
                        "customerType": "1",//  客户类型
                        "certificateType": '1',//    证件类型
                        "certificateCode": idInfo.certificateCode,//
                        "sex": idInfo.sex=='男'?1:0,//客户性别
                        "birthdate": "19900106",// 出生日期
                        "mobileNo": mobileNo,//手机号码
                        "idCardAddress": idInfo.idCardAddress,//身份证明细地址
                        "idCardRegionCode": "056400",//身份证住址行政区编码
                        "contactName": this.consort,//联系人姓名
                        "contactRelation": this.isMarry!=2?'10':'2'//与申请人关系
                    }
                }).then(res => {
                    if (res.body.status == 20000551) {
                        localStorage.removeItem("idInfo");
                        localStorage.removeItem("borrowInfo");
                        localStorage.removeItem(" mobileNo");
                        this.$router.push({'path': 'loadCommit'})
                    }
                }).catch(res => {
                    console.log(res)
                })
            }
        },
        fGetTelephoneDirectory(e) {  // 调用app手机通讯录
            this.sTemp = e;
            bridgeCallHandler({
                method: "getTelephoneDirectory",
                data: {
                },
                callback: function (responseData) {

                }
            });
        }
    }
}
