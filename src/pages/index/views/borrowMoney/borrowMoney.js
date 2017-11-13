import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from "apiConfig/apiConfig";
import {queryString, fmtDate, fNotifyError} from 'widget/util/util';

export default {
    name: 'v-borrowMoney',
    created() {
        this.computeStats();
    },
    data() {
        return {
            userInfo: '',//用户信息
            borrowState: '',//借款状态
            applicationId:'',//id
            checked: true,
            b: false,
            money: '',//审核通过后可借款金额
            time: '',//审核通过后可借款时间
            dataDue: '',//审核通过截止日期
            status3: false,
            lastAmount: '',//最近一期还款计划总金额
            lastTime: '',//最近一期还款时间，
            lastMoney: ''//最近一期还款金额
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
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
        computeStats(){
            //1100为审核中；3002为拒贷；20000为待签约；
            this.borrowState = queryString("applyStatus");
            this.applicationId=queryString("applicationId");
            if (!this.borrowState) {
                this.$http.get(api.xdcore + this.gToken).then(res => {
                    if (res.body.status == 20000551) {
                        this.borrowState = res.body.result.status;
                        this.applicationId=res.body.result.applicationId;
                        this.showPage()
                    }
                }).catch(res=>{
                    console.log(res);
                })
            }else{
                this. showPage();
            }  
        },
        showPage(){//根据url传过来的状态显示页面  
             if (this.borrowState == 20000) {//待签约
                this.status3=true;
                this.getUserInfo();
                this.inquireAmount();
            }else if (this.borrowState == 35000|| this.borrowState == 40000) {//放款成功
                this.getUserInfo();
                this.inquireAmount();//查询可借金额接口，渲染已借金额
            }
    
        },
        repayLast(){//获取最近一期还款计划,接口不能用
            this.$http.get(api.loanIntention + this.applicationId+"/repayLast?QB_AUTH_TOKEN=" + this.gToken).then(res => {
                if (res.body.status == 20000551) {
                    this.lastAmount = res.body.result.amount;
                    this.lastTime = res.body.result.time;
                    this.lastMoney = res.body.result.totalAmount;
                }
            }).catch(res => {
                console.log(res)
            })
        },
        toRepayPlan(){//点击还款计划按钮
            this.$http.get(api.xdcore + this.gToken).then(res => {
                    if (res.body.status == 20000551) {
                       if(res.body.result.status < 40000){
                            this.$toast("还款计划还没有生成",{
                                duration:2000
                        })}else if(res.body.result.status == 40000){
                            this.$router.push({path:'repayPlan?applicationId=' + this.applicationId});
                        }
                    }
                }).catch(res=>{
                    console.log(res);
                })
        },
        inquireAmount(){//查询可借金额接口，渲染已借金额
            this.$http({
                url:api.loanIntention+this.applicationId+"/loanInfo?QB_AUTH_TOKEN="+this.gToken,
                method:'get'
            }).then(res=>{
                this.money=res.body.result.loanAmount;
                this.time=res.body.result.loanTerm;
                this.dataDue=res.body.result.signEndDate;
            }).catch(res=>{
                console.log(res);
            })
        }
    },
    components: {},
    filters: {
        fmtDate,
        dateFilter(time){ 
            if(time){
                return time.substr(0,4) + "年" + time.substr(4,2) + "月" + time.substr(6,2) + "日";
            }
        }
    }
}