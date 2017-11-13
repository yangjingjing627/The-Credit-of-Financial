import Vue from 'vue';
import {mapGetters} from 'vuex';
import api from "apiConfig/apiConfig";

export default {
    name: 'v-setAmount',
    created() {

    },
    mounted() {

    },
    data() {
        return {
            amount: '',
            reason: '',
            isDisabled: true,
            flag: false,
            errormsg: ''
        }
    },
    watch: {},
    computed: {},
    methods: {
        confirmSetAmount: function () {
            if (this.amount) {
                if (isNaN(this.amount) || /^\./.test(this.amount)) {
                    this.errormsg = '收款金额只能为数字';
                }
                else if (/^0/.test(this.amount)) {
                    this.errormsg = '请输入正确的收款金额';
                }
                else if (/(\.\d{3,})$/.test(this.amount)) {
                    this.errormsg = '请输入2位小数点以内的金额';
                } else {
                    localStorage.setItem('amount', this.amount);
                    this.$router.push({path: "walletReceipt"})
                }
            }
        }
    },
    components: {},
    filters: {}
}