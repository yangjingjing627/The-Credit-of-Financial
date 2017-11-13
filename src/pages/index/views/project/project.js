import Vue from 'vue';
import {mapGetters} from 'vuex';
import api from 'apiConfig/apiConfig';
import footer from 'index/widget/footer/footer.vue';
import {dateFormat, datetime} from 'widget/util/util'; // 格式化日期

export default {
    name: 'v-project',
    created() {
        this.getProList();
    },
    data() {
        return {
            routeName: 'project',
            list: {},
            stroke: 0
        }
    },
    watch: {},
    computed: {
        //    ...mapGetters({
        //        apiUrl:'apiUrl'
        //    })
    },
    ready: function () {

    },
    methods: {
        // 项目列表
        getProList: function () {
            this.$http.get(api.project)
                .then((response) => {
                    // this.$set('list', response.body.result);
                    this.list = response.body.result;
                }).catch(function (response) {
                console.log(response)
            })
        },
        fAmountProgress(item){
            if (item) {
                return parseInt(item.enterAmount / item.amount * 100);
            }
            return '';
        },
        formateA(item){
            if (item) {
                var num = this.fAmountProgress(item);
                if (num != 0) {
                    this.stroke = 1;
                }
                return num / 100 * 255;
            }

        }
    },
    components: {
        'c-footer': footer
    },
    filters: {
        dateFormat,
        datetime
    }
}