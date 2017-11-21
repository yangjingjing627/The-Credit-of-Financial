import Vue from 'vue';
import md5 from 'js-md5';
import api from "apiConfig/apiConfig";
import { mapGetters } from 'vuex';
import { queryString } from 'widget/util/util';

export default {
	name: 'v-transferAccount',
	created() {
		this.getUserInfo();
		// 首页扫一扫回调
		this.walletAddress = queryString('walletAddress');
		if(queryString('amount')){
			this.amount = queryString('amount');
		}

		var self = this;
		bridgeRegisterHandler({
			method: "qrCodeResult",  // 当前页面扫码回调
			data: {},
			callback: function (responseData) {
				responseData = JSON.parse(responseData);
				self.walletAddress = responseData.walletAddress;
				self.amount = responseData.amount;
			}
		})
	},
	mounted() {

	},
	data() {
		return {
			userResult: {},
			walletAddress:'',
			amount:'',
			transferRemark: '',
			step1: true,
			step2: false,
			step3: false,
			pwd: '',
			errormsg: ''
		}
	},
	watch: {
		'rightClick'() {
			this.fScanQRCode();
		}
	},
	computed: {
		...mapGetters({
			gToken: 'token',
			rightClick: 'rightClick'
		})
	},
	destroyed(){ // 实例销毁之后调用
		// localStorage.removeItem('walletAddress');
		// localStorage.removeItem('amount');
	},
	methods: {
		// 用户信息
		getUserInfo: function () {
			this.$http.get(api.userInfo + this.gToken)
				.then((response) => {
					if (response.body.result) {
						this.userResult = response.body.result;
					}
				}).catch(function (response) {
					console.log(response)
				})
		},
		// 扫一扫
		fScanQRCode: function () {
			bridgeCallHandler({
				method: "scanQRCode",
				data: {},
				callback: function (responseData) {

				}
			});
		},
		// 验证用户密码
		verifyPwd: function () {
			// 密码接口提交
			const self = this;
			this.pwd = md5(md5(this.pwd));
			this.$http.get(api.checkPassWord + this.gToken + '&orderPassword=' + this.pwd)
				.then(function (res) {
					if (res.body.status == '20000551') {
						self.fTransferAccounts(); // 钱包转账接口
					} else {
						this.pwd = '';
						self.$toast(res.body.message, {
							duration: 2000
						});
					}
				}).catch(function (res) {
					console.log(res);
				})
		},
		fTransferAccounts: function () {  // 钱包转账
			var self = this;
			this.$http({
				method: 'post',
				url: api.transferAccounts + this.gToken,
				body: {
					"transferOut":this.userResult.walletAddress,  //转出方钱包地址
					"transferIn":this.walletAddress,  //转入方钱包地址
					"transferAmount": this.amount,  //转账金额
					"transferRemark": this.transferRemark     //备注
				}
			}).then((response) => {
				if (response.body.status == '20000551') {
					self.$router.push({ name: "tAccountSuccess" ,params:{ id:response.body.result.id }}); // 成功页
				} else {
					this.step1 = true;
					this.step2 = false;
					this.step3 = false;
					this.amount = '';
					self.$toast(response.body.message, {
						duration: 2000
					})
				}
			}).catch(function (response) {
				console.log(response)
			})
		},
		walletBalance: function (action) {  // 钱包转账操作，发送两次（支付/收款）--暂时不用
			var self = this;
			this.$http({
				method: 'post',
				url: api.walletBalance,
				body: {
					"amount": this.amount,
					"action": action, // 支付/收款
					"userId": this.userResult.id,
					"log": this.log,
					"txId": ''
				}
			}).then((response) => {
				if (response.body.status == '20000551') {
					self.$router.push({ path: "tAccountSuccess" }); // 成功页
				} else {
					self.$toast(response.body.message, {
						duration: 2000
					})
				}
			}).catch(function (response) {
				console.log(response)
			})
		},
		// 下一步
		nextStep2: function () {
			if (this.amount == '') {
				this.errormsg = '请输入转入金额';
			} else if (this.amount == '' || /^0/.test(this.amount) || isNaN(this.amount)) {
				this.errormsg = '请输入正确的转入金额';
			} else if (this.log == '') {
				this.errormsg = '请输入备注';
			} else {
				this.step2 = true;
				this.step3 = false;
			}
		},
		// 下一步验证密码，密码正确提交支付和收款接口操作
		nextStep3: function () {
			this.pwd = ''; // 关闭的时候情况密码框
			this.step2 = false;
			this.step3 = true;
		},
		close: function () {
			this.step1 = true;
			this.step2 = false;
		},
		goLastStep: function () {
			this.step2 = true;
			this.step3 = false;
			this.pwd = ''; // 关闭的时候情况密码框
		},
		numStack: function (num) {
			if (num === "") {
				return false;
			} else if (num == 'deleteNum') {
				if (this.pwd) {
					this.pwd = this.pwd.slice(0, -1);
				}
			} else {
				if (this.pwd.length < 6) {
					this.pwd += num;
					if (this.pwd.length == 6) {
						this.step2 = true;
						this.step3 = false;
						this.verifyPwd(); // 验证密码
					}
				}
			}
		}
	},
	components: {

	},
	filters: {

	}
}
