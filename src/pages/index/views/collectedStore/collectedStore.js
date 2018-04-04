import Vue from 'vue';
import api from "apiConfig/apiConfig";

export default {
    name: 'v-collectedStore',
    created() {
      this.collect(); // 店铺收藏
    },
    data() {
        return {}
    },
    watch: {},
    computed: {},
    methods: {
      collect() {
        this.$http.get(api.collect).then(function (response) {
            console.log(response);
            // if(response.body.result){
            //   this.billResult = response.body.result.orderResList;
            //   this.totalPages = response.body.result.totalPages
            //   this.pagenum = this.pagenum +1
            //   if(this.pagenum <= this.totalPages) {
            //     this.isMore = true
            //   }else {
            //     this.isMore = false
            //   }
            // }
        }).catch(function (res) {
            console.log(res)
        })
      }
    },
    components: {},
    filters: {}
}
