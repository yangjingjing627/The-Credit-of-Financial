import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {dateFormat, toThousands} from 'widget/util/util'; // 格式化日期
import {mapGetters} from 'vuex';

export default {
    name: 'v-walletFinance',
    created() {
        this.getUserInfo(); // 用户信息
        this.getProList(); // 钱包理财列表
    },
    data() {
        return {
            userResult: {},
            investorResult: [],
            borrowResult: [],
            result: []
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
             gToken: 'token'
        })
    },
    methods: {
        // 用户信息
        getUserInfo: function () {
            this.$http.get(api.uInfowithInvest + '?withInvest=1&QB_AUTH_TOKEN=' + this.gToken)
                .then((response) => {
                    if (response.body.result) {
                        this.userResult = response.body.result;
                        console.log(this.userResult.recoveredInterest);
                    }
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 钱包理财列表
        getProList: function () {
            this.$http.get(api.qbManage + this.token)
                .then((response) => {
                    if (response.body.result) {
                        this.result = response.body.result;
                        this.getBorrowList();
                    }
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 借款信息
        getBorrowList: function () {
            this.$http.get(api.project)
                .then((response) => {
                    if (response.body.result) {
                        this.borrowResult = response.body.result;
                        var item, bItem;
                        for (item in this.result) {
                            for (bItem in this.borrowResult) {
                                if (this.result[item].loanId == this.borrowResult[bItem].id) {
                                    this.result[item]["title"] = this.borrowResult[bItem].title;
                                    this.result[item]["rate"] = this.borrowResult[bItem].rate;
                                    this.result[item]["period"] = this.borrowResult[bItem].period;
                                    this.result[item]["omsName"] = this.borrowResult[bItem].omsName;
                                    this.result[item]["borrowStatus"] = this.borrowResult[bItem].status;
                                    this.result[item]["startTime"] = this.borrowResult[bItem].startTime;
                                    this.result[item]["refundTime"] = this.borrowResult[bItem].refundTime;
                                }
                            }
                        }
                        this.investorResult = this.result;
                    }


                }).catch(function (response) {
                console.log(response)
            })
        }
    },
    components: {},
    filters: {
        dateFormat,
        toThousands
    }
}