import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {queryString} from 'widget/util/util';

export default {
    name: 'v-moreDetail',
    created() {
        this.getProList(); // 项目信息
        this.isActive();
    },
    data() {
        return {
            section: 0,
            detailResult: {},
            blockResult: {}
        }
    },
    watch: {},
    computed: {},
    methods: {
        // 动态切换
        isActive(){
            if (queryString('active')) {
                this.section = queryString('active');
            }
        },
        // 切换
        fActiveSection(type){
            this.section = type;
        },
        // 项目信息
        getProList: function () {
            this.$http.get(api.projectDetail + '/' + queryString('id'))
                .then((response) => {
                    this.detailResult = response.body.result;
                    this.blockInfo();  // 区块概要
                }).catch(function (response) {
                console.log(response)
            })
        },
        // 区块概要
        blockInfo: function () {
            this.$http.get(api.blockinfo + this.detailResult.chainTxId)
                .then((response) => {
                    this.blockResult = response.body.result;
                }).catch(function (response) {
                console.log(response)
            })
        }
    },
    components: {},
    filters: {}
}