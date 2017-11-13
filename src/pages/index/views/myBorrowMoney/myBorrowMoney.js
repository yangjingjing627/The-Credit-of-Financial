import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {mapGetters} from 'vuex';
import {formatDateTime} from 'widget/util/util';

export default {
    name: 'v-billDetail',
    created() {
      this.getLoadList()
    },
    data() {
        return {
          loanResList:[],
          section:0,
          pagesize: 10,
          pagenum: 1,
          totalPages: 0,
          isMore: true
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            token: 'token'
        })
    },
    methods: {
      getLoadList(){
          this.$http.get(api.loanList + this.token+"&pagesize=" + this.pagesize + "&pagenum=" + this.pagenum)
          .then((response) => {
          if(response.body.result){
            this.loanResList = response.body.result.loanResList;
            this.totalPages = response.body.result.totalPages
            this.pagenum = this.pagenum +1
            if(this.pagenum <= this.totalPages) {
              this.isMore = true
            }else {
              this.isMore = false
            }
          }
          }).catch(function(response) {
              console.log(response)
          })
      },
    },
    components: {},
    filters: {
      formatDateTime
    }
}
