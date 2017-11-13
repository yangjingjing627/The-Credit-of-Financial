import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {mapGetters} from 'vuex';

export default {
    name: 'v-subscribe',
    created() {
    },
    data() {
        return {
            userResult: {},
            billResult: {},
            detailResult: {},
            section: 0
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            token: 'token'
        })
    },
    methods: {},
    components: {},
    filters: {}
}