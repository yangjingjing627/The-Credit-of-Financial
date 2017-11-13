import Vue from 'vue';
import api from 'apiConfig/apiConfig';
import {mapGetters, mapActions} from 'vuex';
import {fNotifyError} from 'widget/util/util';

export default {
    name: 'v-bank',
    created() {
        this.isAuthStatusFn();
    },
    data() {
        return {
            isBank: '',
            banks: {}
        }
    },
    watch: {},
    computed: {
        ...mapGetters({
            gToken: 'token'
        })
    },
    methods: {
        ...mapActions({
            fGetUser: 'fGetUser'
        }),
        isAuthStatusFn() {
            const self = this;
            this.fGetUser(this.gToken).then(data => {
                if (data.bankStatus == 1) { // 已绑卡
                    self.banks = data.banks[0];
                    self.isBank = false;
                } else {
                    self.isBank = true;
                }
            }).catch(err => {
                fNotifyError(this, err);
            });
        }
    },
    components: {},
    filters: {}
}