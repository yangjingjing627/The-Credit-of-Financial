import Vue from 'vue';
import api from "apiConfig/apiConfig";
import {fmtDate} from 'widget/util/util';
import '../static/css/common.css';

export default {
    name: 'v-amountFrozen',
    created() {
        this.userInfo();
    },
    data() {
        return {
            userId: '',
            result: "",
            showData: false
        }
    },
    watch: {},
    computed: {},
    methods: {
        userInfo(){
            const self = this;
            this.$http.get(api.userInfo + localStorage.getItem("token")).then(
                function (res) {
                    self.userId = res.body.result.id;
                    self.operationLog();
                },
            ).catch(function (res) {
                console.log(res);
            })
        },
        operationLog(){
            const self = this;
            self.$http.get(api.saveWallet + self.userId + "/operationlog").then(
                function (res) {
                    self.result = res.body.result;
                    if (self.result.length == 0) {
                        self.showData = true;
                    }
                },
            ).catch(function (res) {
                console.log(res);
            })
        },
        fShowItem(list, item){
            if (item.type == 'freeze') {
                let compareList = list.filter(it => {
                    return it.type == 'unfreeze' && it.txId == item.txId;
                })
                return compareList.length <= 0;
            }
            return false;
        }
    },
    components: {},
    filters: {
        fmtDate
    }
}