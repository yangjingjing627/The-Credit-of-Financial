import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {queryString, toThousands} from 'widget/util/util';
import countdown from 'widget/countdown/countdown.vue';
import {mapGetters} from 'vuex';

export default {
    name: 'v-projectDetail',
    created() {
        this.getProList();
    },
    data() {
        return {
            id: '',
            list: {},
            calculator: false,
            amount: 10000,
            countDef: 0,
            stepAmount: 10000, // 递增金额
            amountMin: 10000, // 起投金额
            num: ''
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            token: 'token'
        }),
        deadTime(){
            return +new Date(this.list.deadTime)
        },
        count(){
            return this.calcCount();
        },
        amountProgressbar(){
            return this.amountProgress == '' ? 0 : this.amountProgress;
        },
        amountProgress(){
            if (this.list && !isNaN(this.list.enterAmount) && !isNaN(this.list.amount)) {
                console.log
                return String(this.list.enterAmount / this.list.amount * 100).split('.')[0];
            }
            else {
                return '';
            }
        },
        qbm(){
            if (this.list && !isNaN(this.list.amount) && !isNaN(this.list.enterAmount)) {
                return this.list.amount - this.list.enterAmount;
            }
            else {
                return '';
            }
        }
    },
    methods: {
        calcCount: function () {
            // 计算公式
            // // 输入金额 / 总借款额 * 总利息 保留两位小数 = 利息; 
            var _count = this.amount / this.list.amount * this.list.interestAmount;
            return _count.toFixed(2);
        },
        // 项目详情
        getProList: function () {
            this.$http.get(api.projectDetail + '/' + queryString('id'))
                .then((response) => {
                    if (response.body.result) {
                        this.list = response.body.result;
                        this.countDef = this.calcCount(); // 默认万元收益
                    }
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 计算按钮显示
        calculatorBtn: function () {
            this.calculator = true;
        },
        calculatorClose: function () {
            this.calculator = false;
        },
        addMoney: function () {  // 加
            //计算系数，向下取整 {（当前输入金额+递增金额-起投金额）/递增金额，0}
            var money = Number(this.amount);
            var coefficient = Math.floor((money + (this.stepAmount) - (this.amountMin)) / (this.stepAmount));
            coefficient = coefficient < 0
                ? 0
                : coefficient;
            this.amount = (this.amountMin) + (this.stepAmount) * coefficient;
        },
        subMoney: function () {  // 减
            //计算系数，向上取整 MAX[roundup{(当前输入金额-递增金额-起投金额)/递增金额，1）},0]
            var money = Number(this.amount);
            var coefficient = Math.ceil((money - (this.stepAmount) - (this.amountMin)) / (this.stepAmount));
            coefficient = coefficient < 0
                ? 0
                : coefficient;
            this.amount = (this.amountMin) + (this.stepAmount) * coefficient;
        },
        numStack: function (num) {
            var _num = num.toString();
            var _amount = this.amount.toString();
            if (num == '.') { //小数点单独判断，只能点击一次
                if (_amount.indexOf('.') == -1) {
                    this.amount = _amount + _num;
                }
            } else {
                this.amount = _amount + _num;
            }
        },
        deleteNum: function () {  // 删除数字
            var _amount = this.amount.toString();
            this.amount = _amount.substring(0, _amount.length - 1);
        }
    },
    components: {
        'c-countdown': countdown
    },
    filters: {
        toThousands
    }
}