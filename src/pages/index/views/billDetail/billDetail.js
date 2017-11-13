import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {toThousands,formatDateTime} from 'widget/util/util';
import {mapGetters} from 'vuex';

export default {
    name:'v-billDetail',
    created() {
        this.getBillDetail(); // 用户信息
    },
    data() {
      return {
          billResult:[],
          billDetails:{},
          section:0,
          pagesize: 10,
          pagenum: 1,
          totalPages: 0,
          isMore: false
      }
    },
    watch:{

    },
    computed:{
        ...mapGetters({
            token:'token'
        })
    },
    methods:{
        // 账单明细
        getBillDetail(){
            this.$http.get(api.billList + this.token+"&pagesize=" + this.pagesize + "&pagenum=" + this.pagenum)
            .then((response) => {
            if(response.body.result){
              this.billResult = response.body.result.orderResList;
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
        billSection(type, id){
            this.section = type;
            if (type === 1) {
              this.$http.get(api.billDetail + id + '?QB_AUTH_TOKEN=' + this.token)
              .then((response) => {
                this.billDetails = response.body.result;
              }).catch(function(response) {
                console.log(response)
              })
            }else if(type === 0) {

            }
        },
        getMoreBill () {
          this.$http.get(api.billList + this.token+"&pagesize=" + this.pagesize + "&pagenum=" + this.pagenum)
          .then((response) => {
          if(response.body.result){
            this.billResult = this.billResult.concat(response.body.result.orderResList);
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
        }
    },
    components:{

    },
    filters:{
        toThousands,
        formatDateTime
    }
}
