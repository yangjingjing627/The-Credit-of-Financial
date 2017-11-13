import Vue from 'vue';

export default {
    name: 'v-demo',
    created() {
        this.fCallToast();
        this.fCallDialog();
        this.fCallLoading();
    },
    data() {
        return {
            email: '',
            name: '',
            phone: '',
            url: '',
            list: []
        }
    },
    watch: {},
    computed: {},
    methods: {
        fCallToast(){
            this.$toast('toast提示', {
                duration: 2000
            })
        },
        fCallDialog(){
            this.$alert({
                content: 'lallala',
                onOk: function () {
                    console.log('alert ok');
                }
            });
            this.$confirm({
                content: 'confirm lalala',
                onOk: function () {
                    console.log('confirm ok');
                },
                onCancel: function () {
                    console.log('confirm cancel');
                }
            });
        },
        fCallLoading(){
            const self = this;
            this.$loading(true);
            setTimeout(function () {
                self.$loading(false);
            }, 3000);
        },
        fCallAjax(){
            //得到正确的this指向
            const self = this;
            //具体用法参考vue-resource文档
            this.$loading(true);
            this.$http({
                method: 'POST',
                url: '',
                body: {
                    userId: ''
                }
            }).then(function (res) {
                //赋值操作，例如
                self.name = res.name;
                self.list = res.list;
            })
                .catch((res) => {
                    //error handle
                })
                .finally(function () {
                    //清理工作，关闭loading等
                    self.$loading(false);
                });
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    // eslint-disable-next-line
                    alert('From Submitted!');
                    return;
                }

                alert('Correct them errors!');
            });
        }
    },
    components: {},
    filters: {}
}