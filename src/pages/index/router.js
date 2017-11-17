import Vue from 'vue';
import VueRouter from 'vue-router';
import cookies from 'js-cookie';
import home from './views/home/home.vue';
import treasure from './views/treasure/treasure.vue';
import project from './views/project/project.vue';
import wallet from './views/wallet/wallet.vue';

const projectDetail = resolve => {
    require.ensure(['./views/projectDetail/projectDetail.vue'], () => {
        resolve(require('./views/projectDetail/projectDetail.vue'))
    }, 'projectDetail')
}
const calculator = resolve => {
    require.ensure(['./views/calculator/calculator.vue'], () => {
        resolve(require('./views/calculator/calculator.vue'))
    }, 'calculator')
}
const moreDetail = resolve => {
    require.ensure(['./views/moreDetail/moreDetail.vue'], () => {
        resolve(require('./views/moreDetail/moreDetail.vue'))
    }, 'moreDetail')
}
const buyNow = resolve => {
    require.ensure(['./views/buyNow/buyNow.vue'], () => {
        resolve(require('./views/buyNow/buyNow.vue'))
    }, 'buyNow')
}
const bidSuccess = resolve => {
    require.ensure(['./views/bidSuccess/bidSuccess.vue'], () => {
        resolve(require('./views/bidSuccess/bidSuccess.vue'))
    }, 'bidSuccess')
}
const importNumWallet = resolve => {
    require.ensure(['./views/importNumWallet/importNumWallet.vue'], () => {
        resolve(require('./views/importNumWallet/importNumWallet.vue'))
    }, 'importNumWallet')
}
const importWalletResult = resolve => {
    require.ensure(['./views/importWalletResult/importWalletResult.vue'], () => {
        resolve(require('./views/importWalletResult/importWalletResult.vue'))
    }, 'importWalletResult')
}
const dealPassword = resolve => {
    require.ensure(['./views/dealPassword/dealPassword.vue'], () => {
        resolve(require('./views/dealPassword/dealPassword.vue'))
    }, 'dealPassword')
}
const feedback = resolve => {
    require.ensure(['./views/feedback/feedback.vue'], () => {
        resolve(require('./views/feedback/feedback.vue'))
    }, 'feedback')
}
const forgotLogPsw = resolve => {
    require.ensure(['./views/forgotLogPsw/forgotLogPsw.vue'], () => {
        resolve(require('./views/forgotLogPsw/forgotLogPsw.vue'))
    }, 'forgotLogPsw')
}
const forgotTradePsw = resolve => {
    require.ensure(['./views/forgotTradePsw/forgotTradePsw.vue'], () => {
        resolve(require('./views/forgotTradePsw/forgotTradePsw.vue'))
    }, 'forgotTradePsw')
}
const userCenter = resolve => {
    require.ensure(['./views/userCenter/userCenter.vue'], () => {
        resolve(require('./views/userCenter/userCenter.vue'))
    }, 'userCenter')
}
const realNameAuth = resolve => {
    require.ensure(['./views/realNameAuth/realNameAuth.vue'], () => {
        resolve(require('./views/realNameAuth/realNameAuth.vue'))
    }, 'realNameAuth')
}
const realNameSuccess = resolve => {
    require.ensure(['./views/realNameSuccess/realNameSuccess.vue'], () => {
        resolve(require('./views/realNameSuccess/realNameSuccess.vue'))
    }, 'realNameSuccess')
}
const passwordManage = resolve => {
    require.ensure(['./views/passwordManage/passwordManage.vue'], () => {
        resolve(require('./views/passwordManage/passwordManage.vue'))
    }, 'passwordManage')
}
const amountFrozen = resolve => {
    require.ensure(['./views/amountFrozen/amountFrozen.vue'], () => {
        resolve(require('./views/amountFrozen/amountFrozen.vue'))
    }, 'amountFrozen')
}
const settings = resolve => {
    require.ensure(['./views/settings/settings.vue'], () => {
        resolve(require('./views/settings/settings.vue'))
    }, 'settings')
}
const billDetail = resolve => {
    require.ensure(['./views/billDetail/billDetail.vue'], () => {
        resolve(require('./views/billDetail/billDetail.vue'))
    }, 'billDetail')
}
const myBorrowMoney = resolve => {
    require.ensure(['./views/myBorrowMoney/myBorrowMoney.vue'], () => {
        resolve(require('./views/myBorrowMoney/myBorrowMoney.vue'))
    }, 'myBorrowMoney')
}
const dealDetail = resolve => {
    require.ensure(['./views/dealDetail/dealDetail.vue'], () => {
        resolve(require('./views/dealDetail/dealDetail.vue'))
    }, 'dealDetail')
}
const bank = resolve => {
    require.ensure(['./views/bank/bank.vue'], () => {
        resolve(require('./views/bank/bank.vue'))
    }, 'bank')
}
const bindBank = resolve => {
    require.ensure(['./views/bindBank/bindBank.vue'], () => {
        resolve(require('./views/bindBank/bindBank.vue'))
    }, 'bindBank')
}
const walletFinance = resolve => {
    require.ensure(['./views/walletFinance/walletFinance.vue'], () => {
        resolve(require('./views/walletFinance/walletFinance.vue'))
    }, 'walletFinance')
}
const walletLife = resolve => {
    require.ensure(['./views/walletLife/walletLife.vue'], () => {
        resolve(require('./views/walletLife/walletLife.vue'))
    }, 'walletLife')
}
const walletReceipt = resolve => {
    require.ensure(['./views/walletReceipt/walletReceipt.vue'], () => {
        resolve(require('./views/walletReceipt/walletReceipt.vue'))
    }, 'walletReceipt')
}
const receiptSuccess = resolve => {
    require.ensure(['./views/receiptSuccess/receiptSuccess.vue'], () => {
        resolve(require('./views/receiptSuccess/receiptSuccess.vue'))
    }, 'receiptSuccess')
}
const transferAccount = resolve => {
    require.ensure(['./views/transferAccount/transferAccount.vue'], () => {
        resolve(require('./views/transferAccount/transferAccount.vue'))
    }, 'transferAccount')
}
const tAccountSuccess = resolve => {
    require.ensure(['./views/tAccountSuccess/tAccountSuccess.vue'], () => {
        resolve(require('./views/tAccountSuccess/tAccountSuccess.vue'))
    }, 'tAccountSuccess')
}
const setAmount = resolve => {
    require.ensure(['./views/setAmount/setAmount.vue'], () => {
        resolve(require('./views/setAmount/setAmount.vue'))
    }, 'setAmount')
}
const login = resolve => {
    require.ensure(['./views/login/login.vue'], () => {
        resolve(require('./views/login/login.vue'))
    }, 'login')
}
const register = resolve => {
    require.ensure(['./views/register/register.vue'], () => {
        resolve(require('./views/register/register.vue'))
    }, 'register')
}
const modifyLogPsw = resolve => {
    require.ensure(['./views/modifyLogPsw/modifyLogPsw.vue'], () => {
        resolve(require('./views/modifyLogPsw/modifyLogPsw.vue'))
    }, 'modifyLogPsw')
}
const modifyTradePsw = resolve => {
    require.ensure(['./views/modifyTradePsw/modifyTradePsw.vue'], () => {
        resolve(require('./views/modifyTradePsw/modifyTradePsw.vue'))
    }, 'modifyTradePsw')
}
const setTradePsw = resolve => {
    require.ensure(['./views/setTradePsw/setTradePsw.vue'], () => {
        resolve(require('./views/setTradePsw/setTradePsw.vue'))
    }, 'setTradePsw')
}
const notice = resolve => {  // 公告
    require.ensure(['./views/notice/notice.vue'], () => {
        resolve(require('./views/notice/notice.vue'))
    }, 'notice')
}
const borrowMoney = resolve => {
    require.ensure(['./views/borrowMoney/borrowMoney.vue'], () => {
        resolve(require('./views/borrowMoney/borrowMoney.vue'))
    }, 'borrowMoney')
}
const editProfile = resolve => {
    require.ensure(['./views/editProfile/editProfile.vue'], () => {
        resolve(require('./views/editProfile/editProfile.vue'))
    }, 'editProfile')
}
const modifyFamilyInfo = resolve => {
    require.ensure(['./views/modifyFamilyInfo/modifyFamilyInfo.vue'], () => {
        resolve(require('./views/modifyFamilyInfo/modifyFamilyInfo.vue'))
    }, 'modifyFamilyInfo')
}
const loanContract = resolve => {
    require.ensure(['./views/loanContract/loanContract.vue'], () => {
        resolve(require('./views/loanContract/loanContract.vue'))
    }, 'loanContract')
}
const purchase = resolve => {
    require.ensure(['./views/purchase/purchase.vue'], () => {
        resolve(require('./views/purchase/purchase.vue'))
    }, 'purchase')
}
const redeem = resolve => {
    require.ensure(['./views/redeem/redeem.vue'], () => {
        resolve(require('./views/redeem/redeem.vue'))
    }, 'redeem')
}
const loadCommit = resolve => {
    require.ensure(['./views/loadCommit/loadCommit.vue'], () => {
        resolve(require('./views/loadCommit/loadCommit.vue'))
    }, 'loadCommit')
}
const lucky = resolve => {
    require.ensure(['./views/lucky/lucky.vue'], () => {
        resolve(require('./views/lucky/lucky.vue'))
    }, 'lucky')
}
const digitalInfoAuth = resolve => {
    require.ensure(['./views/digitalInfoAuth/digitalInfoAuth.vue'], () => {
        resolve(require('./views/digitalInfoAuth/digitalInfoAuth.vue'))
    }, 'digitalInfoAuth')
}
const identityAuthen = resolve => {
    require.ensure(['./views/identityAuthen/identityAuthen.vue'], () => {
        resolve(require('./views/identityAuthen/identityAuthen.vue'))
    }, 'identityAuthen')
}
const familyInfo = resolve => {
    require.ensure(['./views/familyInfo/familyInfo.vue'], () => {
        resolve(require('./views/familyInfo/familyInfo.vue'))
    }, 'familyInfo')
}
const digitalAccountApplying = resolve => {
    require.ensure(['./views/digitalAccountApplying/digitalAccountApplying.vue'], () => {
        resolve(require('./views/digitalAccountApplying/digitalAccountApplying.vue'))
    }, 'digitalAccountApplying')
}
const repayPlan = resolve => {
    require.ensure(['./views/repayPlan/repayPlan.vue'], () => {
        resolve(require('./views/repayPlan/repayPlan.vue'))
    }, 'repayPlan')
}

const routeConfig = [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'home',
        component: home, // 首页
        meta: {
            show: false
        }
    },
    {
        path: '/treasure',
        name: 'treasure',
        component: treasure, // 财富首页
        meta: {
            show: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login, //登录页面
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: register, //注册页面
        meta: {
            back: true,
            midText: '欢迎注册'
        }
    },
    {
        path: '/notice',
        name: 'notice',
        component: notice, //公告
        meta: {
            back: true,
            midText: '公告'
        }
    },
    {
        path: '/project',
        name: 'project',
        component: project, //项目页面，首页
        meta: {
            back: false,
            midText: '区块链金融',
            rightIcon: 'iconfont icon-tips-jia'
        }
    },
    {
        path: '/projectDetail',
        name: 'projectDetail',
        component: projectDetail, //项目详情页面
        meta: {
            show: false
        }
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: calculator, //计算器页面
        title: '计算器'
    },
    {
        path: '/moreDetail',
        name: 'moreDetail',
        component: moreDetail, //更多详情页面
        meta: {
            back: true,
            midText: '更多详情'
        }
    },
    {
        path: '/buyNow',
        name: 'buyNow',
        component: buyNow, //立即购买页面
        meta: {
            back: true,
            midText: '立即购买'
        }
    },
    {
        path: '/bidSuccess',
        name: 'bidSuccess',
        component: bidSuccess, //投标成功页面
        meta: {
            back: true,
            midText: '投标成功'
        }
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: wallet, //钱包页面
        meta: {
            show: false
            // classz:'wallet-header',
            // midText: '钱包'
        }
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: feedback, //意见反馈页面
        meta: {
            back: true,
            midText: '意见反馈'
        }
    },
    {
        path: '/forgotLogPsw',
        name: 'forgotLogPsw',
        component: forgotLogPsw, //忘记登录密码页面
        meta: {
            back: true,
            midText: '忘记登录密码'
        }
    },
    {
        path: '/forgotTradePsw',
        name: 'forgotTradePsw',
        component: forgotTradePsw, //忘记交易密码页面
        meta: {
            back: true,
            midText: '忘记交易密码'
        }
    },
    {
        path: '/importNumWallet',
        name: 'importNumWallet',
        component: importNumWallet, //申请数字钱包账户页面
        meta: {
            back: true,
            midText: '申请数字钱包账户'
        }
    },
    {
        path: '/importWalletResult',
        name: 'importWalletResult',
        component: importWalletResult, //导入数字钱包结果页面
        meta: {
            midText: '导入数字钱包账户'
        }
    },
    {
        path: '/dealPassword',
        name: 'dealPassword',
        component: dealPassword, //设置交易密码页面
        meta: {
            back: true,
            midText: '设置交易密码'
        }
    },
    {
        path: '/userCenter',
        name: 'userCenter',
        component: userCenter, //个人中心
        meta: {
            back: true,
            midText: '个人中心'
        }
    },
    {
        path: '/realNameAuth',
        name: 'realNameAuth',
        component: realNameAuth, //实名认证
        meta: {
            back: true,
            midText: '实名认证'
        }
    },
    {
        path: '/realNameSuccess',
        name: 'realNameSuccess',
        component: realNameSuccess, //实名认证成功
        meta: {
            back: true,
            midText: '实名认证成功'
        }
    },
    {
        path: '/passwordManage',
        name: 'passwordManage',
        component: passwordManage, //密码管理
        meta: {
            back: true,
            midText: '密码管理'
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: settings, //用户设置页面
        meta: {
            back: true,
            midText: '设置'
        }
    },
    {
        path: '/amountFrozen',
        name: 'amountFrozen',
        component: amountFrozen, //冻结金额
        meta: {
            back: true,
            midText: '冻结金额明细'
        }
    },
    {
        path: '/billDetail',
        name: 'billDetail',
        component: billDetail, //账单明细页面
        meta: {
            back: true,
            midText: '账单明细'
        }
    },
    {
        path: '/myBorrowMoney',
        name: 'myBorrowMoney',
        component: myBorrowMoney, //我的借款
        meta: {
            back: true,
            midText: '我的借款'
        }
    },
    {
        path: '/dealDetail',
        name: 'dealDetail',
        component: dealDetail, //交易详情页面
        meta: {
            back: true,
            midText: '交易详情'
        }
    },
    {
        path: '/bank',
        name: 'bank',
        component: bank, //银行卡页面
        meta: {
            back: true,
            leftPath: 'wallet',
            midText: '银行卡'
        }
    },
    {
        path: '/bindBank',
        name: 'bindBank',
        component: bindBank, //绑定银行卡页面
        meta: {
            back: true,
            midText: '绑定银行卡'
        }
    },
    {
        path: '/walletFinance',
        name: 'walletFinance',
        component: walletFinance, //钱包理财页面
        meta: {
            back: true,
            midText: '钱包理财'
        }
    },
    {
        path: '/walletLife',
        name: 'walletLife',
        component: walletLife, //钱包生活页面
        meta: {
            back: true,
            midText: '钱包生活'
        }
    },
    {
        path: '/walletReceipt',
        name: 'walletReceipt',
        component: walletReceipt, //钱包收款页面
        meta: {
            back: true,
            midText: '钱包收款'
        }
    },
    {
        path: '/receiptSuccess',
        name: 'receiptSuccess',
        component: receiptSuccess, //收款成功页面
        meta: {
            back: true,
            midText: '收款成功'
        }
    },
    {
        path: '/transferAccount',
        name: 'transferAccount',
        component: transferAccount, //转账页面
        meta: {
            back: true,
            midText: '转账',
            // rightIcon: 'icon-tips-ta',
            leftPath:'home'
        }
    },
    {
        path: '/tAccountSuccess',
        name: 'tAccountSuccess',
        component: tAccountSuccess, //转账成功页面
        meta: {
            back: true,
            midText: '转账成功'
        }
    },
    {
        path: '/setAmount',
        name: 'setAmount',
        component: setAmount, //转账成功页面
        meta: {
            back: true,
            midText: '设置收款金额'
        }
    },
    {
        path: '/modifyLogPsw',
        name: 'modifyLogPsw',
        component: modifyLogPsw, //修改登录密码页面
        meta: {
            back: true,
            midText: '修改登录密码'
        }
    },
    {
        path: '/modifyTradePsw',
        name: 'modifyTradePsw',
        component: modifyTradePsw, //修改交易密码页面
        meta: {
            back: true,
            midText: '修改交易密码'
        }
    },
    {
        path: '/setTradePsw',
        name: 'setTradePsw',
        component: setTradePsw, //设置交易密码页面
        meta: {
            back: true,
            midText: '设置交易密码'
        }
    },
    {
        path: '/borrowMoney',
        name: 'borrowMoney',
        component: borrowMoney, //我要借款页面
        meta: {
            back: true,
            leftPath:'treasure',
            midText: '我要借款'
        }
    },
    {
        path: '/editProfile',
        name: 'editProfile',
        component: editProfile, //修改资料页面   ----暂时去掉这个页面
        meta: {
            back: true,
            midText: '修改资料'
        }
    },
    {
        path: '/modifyFamilyInfo',
        name: 'modifyFamilyInfo',
        component: modifyFamilyInfo, //修改家庭信息页面   ----暂时去掉这个页面
        meta: {
            back: true,
            midText: '修改家庭信息'
        }
    },
    {
        path: '/loanContract',
        name: 'loanContract',
        component: loanContract, //借款用户协议页面
        meta: {
            back: true,
            midText: '用户协议'
        }
    },
    {
        path: '/purchase',
        name: 'purchase',
        component: purchase, //申购
        meta: {
            back: true,
            midText: '申购'
        }
    },
    {
        path: '/redeem',
        name: 'redeem',
        component: redeem, //赎回
        meta: {
            back: true,
            midText: '赎回'
        }
    },
    {
        path: '/loadCommit',
        name: 'loadCommit',
        component: loadCommit, //身份认证 借款意向提交成功页面
        meta: {
            back: true,
            midText: '身份认证',
            leftPath:'borrowMoney'
        }
    },
    {
        path: '/lucky',
        name: 'lucky',
        component: lucky, //我要借款
        meta: {
            back: true,
            midText: '我要借款'
        }
    },
    {
        path: '/repayPlan',
        name: 'repayPlan',
        component: repayPlan, //还款计划页面
        meta: {
            back: true,
            midText: '我要借款'
        }
    },
    {
        path: '/digitalInfoAuth',
        name: 'digitalInfoAuth',
        component: digitalInfoAuth, //身份认证 填写预留手机号页面
        meta: {
            back: true,
            midText: '身份认证'
        }
    },
    {
        path: '/identityAuthen',
        name: 'identityAuthen',
        component: identityAuthen, //扫描身份证件认证
        meta: {
            back: true,
            midText: '身份认证'
        }
    },
    {
        path: '/digitalAccountApplying',
        name: 'digitalAccountApplying',
        component: digitalAccountApplying, //扫描身份证件认证
        meta: {
            back: true,
            midText: '申请数字钱包账户'
        }
    },
    {
        path: '/familyInfo',
        name: 'familyInfo',
        component: familyInfo, //身份认证 家庭信息
        meta: {
            back: true,
            midText: '身份认证'
        }
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes: routeConfig
});

//add mock cookie
// cookies.set('wlcUserId',escape("886E41417490442887380A7F7A8B48B5"))

router.beforeEach((to, from, next) => {
    console.log('to ' + to.path)
    if (to.path === '/home') {
        //mock add cookie
        // const userId = cookies.get('wlcUserId');
        // if(!userId){
        //     alert('no user')
        // }
        // else{
        //     store.commit(types['setUser'],{userId:userId});
        //     next();
        // }
        next();
    } else {
        next();
    }
});

router.afterEach(function (transition) {
    // document.title = transition.meta.title;
    Vue.clearOverlay();
    Vue.clearLoading();
});


export default router;
