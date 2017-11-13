import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from 'apiConfig/apiConfig';
import footer from 'index/widget/footer/footer.vue';

export default {
    name: 'v-home',
    created() {
		// this.qualificationFn();
		this.getApplyStatus();
    },
    mounted(){
        var self = this;
        bridgeRegisterHandler({  // 扫码回调
            method: "qrCodeResult",
            data: {},
            callback: function(responseData) {
                responseData = JSON.parse(responseData);
                let qs = {};
                qs.walletAddress = responseData.walletAddress;
                if(responseData.amount){
                    qs.amount = responseData.amount;
                }
               
                self.$router.push({path:"transferAccount",query: qs })
            }
        })
    },
    data() {
        return {
            routeName: 'home',
            status: '',
            time: '',
			bynamic: false,
            url:''
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    ready: function () {

    },
    methods: {
        // 扫一扫
        fScanQRCode: function () {
            bridgeCallHandler({
                method: "scanQRCode",
                data: {},
                callback: function (responseData) {

                }
            });
        },
        // 招财贷 申请动态
        qualificationFn(){
            if (this.gToken) {
                this.$http.get(api.qualification + this.gToken)
				.then(function (res) {
                    // 1100为审核中；3002为拒贷；20000为待签约；3004为签约中
					if (res.body.status == '20000551') {
						this.bynamic = true; // 显示招财贷动态模块
						this.time = res.body.timestamp;
						if (res.body.result.status == 1) {
							this.status = '审核中';
						} else if (res.body.result.status == 2) {
							this.status = '拒贷';
						} else if (res.body.result.status == 3) {
							this.status = '驳回'; // (先屏蔽)
						} else if (res.body.result.status == 4) {
							this.status = '待签约';
						} else if (res.body.result.status == 5) {
							this.status = '签约中';
						} else if (res.body.result.status == 6) {
							this.status = '待放款';
						} else if (res.body.result.status == 7) {
							this.status = '放款中';
						} else if (res.body.result.status == 8) {
							this.status = '放款成功';
						} else if (res.body.result.status == 9) {
							this.status = '放款失败';
						} else {
							this.status = '成功';
						}
					}
				}).catch(function (res) {
					console.log(res);
                })
            }
		},
		getApplyStatus(){ //判断借款状态
            if (this.gToken) {
                this.$http.get(api.xdcore + this.gToken).then(res => {
                    

                    // if (this.borrowState == 20000) {//待签约
                    //     this.status3=true;
                    //     this.getUserInfo();
                    //     this.inquireAmount();
                    // }else if (this.borrowState == 35000|| this.borrowState == 40000) {//放款成功
                    //     this.getUserInfo();
                    //     this.inquireAmount();//查询可借金额接口，渲染已借金额
                    // }

                    if (res.body.status == '20000551') {  // 未借款
                        if(res.body.result.status == '40000551'){
                            this.bynamic = false; // 隐藏招财贷动态模块
                        }else {
                            this.bynamic = true; // 显示招财贷动态模块
                            this.url = 'borrowMoney?applyStatus=' + res.body.result.status + '&applicationId=' + res.body.result.applicationId; 

                            // 1100为审核中；3002为拒贷；20000为待签约；3004为签约中
                            if (res.body.result.status == '1100') {
                                this.status = '审核中';
                            } else if (res.body.result.status == '53500') {
                                this.status = '拒贷';
                            } else if (res.body.result.status == '20000') {
                                this.status = '待签约'; 
                            }  else if(res.body.result.status == '40000'){
                                this.status = '待还款';
                            }else{
                                this.status = '';
                            }
                        }
                    } else if(res.body.status == '40100551'){  // token失效
                        this.$router.push({path: 'home'});
                    }
                })
            }
        }
    },
    components: {
        'c-footer': footer
    },
    filters: {}
}