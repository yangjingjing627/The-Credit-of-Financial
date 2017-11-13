import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import api from "apiConfig/apiConfig";
import {queryString, fmtDate, fNotifyError,formatDateTime} from 'widget/util/util';

export default {
    name: 'v-repayPlan',
    created() {
       this. repayLast();
    },
    data() {
        return {
            b: false,
            applicationId:'',
            amount:'',//本期应还总额
            date:'',//还款日期
            repaymentList:'',//还款列表
            activeIndex:-1
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
        repayLast(){//获取最近一期还款计划
            this.applicationId=queryString("applicationId");
            this.$http.get(api.loanIntention + this.applicationId+"/repayPlan?QB_AUTH_TOKEN=" + this.gToken).then(res => {
                if (res.body.status == 20000551) {
                    this. repaymentList=res.body.result.repayments;
                    this.amount = this.repaymentList[0].amount;
                    this.date = this.repaymentList[0].date;
                }
            }).catch(res => {
                console.log(res)
            })
        },
        fItemClick(index){
            if(this.activeIndex == index){
                this.activeIndex = -1;
            }
            else{
                this.activeIndex = index;
            }
        }
    },
    components: {},
    filters: {
        fmtDate,
        formatDateTime
    }
}