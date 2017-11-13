import Vue from 'vue';
import api from "apiConfig/apiConfig";
import { mapGetters } from 'vuex';
import {toThousands} from 'widget/util/util';

export default {
    name: 'v-tAccountSuccess',
    created() {
        //query获取
        // this.$route.query;
        //params获取
        // const params = this.$route.params.id; 
        this.billSection();
    },
    data() {
        return {
            billDetails:''
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken:'token'
        })
    },
    methods: {
        billSection() {
            this.$http.get(api.billDetail + this.$route.params.id + '?QB_AUTH_TOKEN=' + this.gToken)
            .then((response) => {
                this.billDetails = response.body.result;
            }).catch(function (response) {
                console.log(response)
            })
        }
    },
    components: {},
    filters: {}
}