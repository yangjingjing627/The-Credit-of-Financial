import Vue from 'vue';
import {mapGetters} from 'vuex';

export default {
    name: 'v-treasure',
    created() {

    },
    data() {
        return {
            routeName: 'treasure',
            section: 0
        }
    },
    watch: {},
    computed: {},
    ready: function () {

    },
    methods: {
        billSection(type, txId){
            this.section = type;
        }
    },
    components: {},
    filters: {}
}