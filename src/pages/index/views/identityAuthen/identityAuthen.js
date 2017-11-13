import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from "apiConfig/apiConfig";
import '../static/css/common.css';
import {toThousands} from "widget/util/util";
import {fNotifyError} from 'widget/util/util';

export default {
    name: 'v-identityAuthen',
    created() {

    },
    mounted() {
        var self = this;
        bridgeRegisterHandler({  // 身份证信息回调
            method: "idCardResult",
            data: {},
            callback: function (responseData) {
                // {
                //     "IdCardInfoFront": {
                //         "name": "章文顺",
                //         "sex": "男",
                //         "nation": "汉",
                //         "birthday": "1990-1-4",
                //         "address": "安徽省安庆市宜秀区罗岭镇黄梅村章草组11号",
                //         "idCard": "340881199001040313",
                //         "frontPicture": "/storage/emulated/0/Font_1505462823882.png"
                //     }
                // }

                // {
                //     "IdCardInfoBack": {
                //         "effectiveTime": "20150226-20250226",
                //         "idIssued": "内黄县公安局",
                //         "backPicture": "/storage/emulated/0/Back_1505554416132.png"
                //     }
                // } 
               
                self.IdCardInfo = JSON.parse(responseData);
                if (self.IdCardInfo.front) {  // 身份证正面信息
                    self.showFront = true;
                    self.name = self.IdCardInfo.front.name;
                    self.idCard = self.IdCardInfo.front.idCard;
                    self.frontPicture = self.IdCardInfo.front.frontPicture;
                    self.sex = self.IdCardInfo.front.sex;
                    self.address = self.IdCardInfo.front.address;
                    self.birthdate = self.IdCardInfo.front.birthday;
                } else {  // 身份证反面信息
                    self.showBack = true;
                    self.effectiveTime = self.IdCardInfo.back.effectiveTime;
                    self.backPicture = self.IdCardInfo.back.backPicture;
                }
            }
        });
    },
    data() {
        return {
            IdCardInfo: {},
            name: '',//身份证姓名
            idCard: '',//身份证号码
            effectiveTime: '',
            frontPicture: '',
            backPicture: '',
            showFront: false,
            showBack: false,
            front: '',
            sex:'',
            address:'',
            birthdate:''//出生日期
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        }),
        imgSrcFront(){  // 身份证正面图片
            if (!this.frontPicture) {
                return '';
            }
            return 'data:image/jpg;base64,' + this.frontPicture;
        },
        imgSrcBack(){  // 身份证反面图片
            if (!this.backPicture) {
                return '';
            }
            return 'data:image/jpg;base64,' + this.backPicture;
        },
        imgSrcTest(){  // 测试
            if (!this.frontPicture) {
                return '';
            }
            this.frontPicture = 'file://' + this.frontPicture;
            return this.frontPicture;
        }
    },
    methods: {
        ...mapActions({
            fGetUser: 'fGetUser'
        }),
        // 上传身份证
        fScanIdCard: function (value) {
            bridgeCallHandler({
                method: "scanIdCard",
                data: {
                    idCard: value
                },
                callback: function (responseData) {

                }
            });
        },
        sureInfo(){//确认身份证信息
            if (!(this.name && this.idCard && this.effectiveTime &&this.frontPicture&&this.backPicture)) {
                return false;
            }else if(!/^[\u4E00-\u9FA5.]{2,10}$/.test(this.name)){
                this.$toast("姓名格式错误",{
                    duration:2000
                })
                return false;
            }else if(!/^(\d{15}|\d{17}[0-9x])$/i.test(this.idCard)){
                this.$toast("身份证号格式错误",{
                    duration:2000
                })
                return false;
            }else {
                var idInfo = {
                    "attachNumber": 2,
                    "customerName":this.name,
                    "certificateCode":this.idCard,
                    "sex":this.sex,
                    "birthdate":this.birthdate,
                    "idCardAddress":this.address
                };
                idInfo=JSON.stringify(idInfo);
                localStorage.setItem("idInfo", idInfo);
                this.$router.push({path: 'digitalInfoAuth'})
            }
        },
        imgSrcT(event){
            console.log(event.target.src);
        }
    },
    components: {},
    filters: {
        toThousands
    }
}