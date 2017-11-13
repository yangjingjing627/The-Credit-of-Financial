import Vue from 'vue';
import {mapGetters} from 'vuex';
import footer from 'index/widget/footer/footer.vue';

export default {
    name: 'v-treasure',
    created() {

    },
    data() {
        return {
            routeName: 'treasure'
        }
    },
    watch: {},
    computed: {},
    ready: function () {

    },
    methods: {},
    components: {
        'c-footer': footer
    },
    filters: {}
}