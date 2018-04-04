// var baseUrl = 'https://dev-apis.qianbao.com/';  // 开发环境
// var baseUrl = 'https://apis.qianbao.com/';  // 生产环境
// var baseUrl = 'https://sit-apis.qianbao.com/';  // 测试环境
var baseUrl = 'http://172.28.40.117:9999/';  // 生产环境

module.exports = {
    "project": baseUrl + "jiedai/v1/p2p/loans", //项目列表
    "projectDetail": baseUrl + "jiedai/v1/p2p/loan", //项目详情
    'login': baseUrl + "jiedai/v1/p2p/login",//登录
    "authCode": baseUrl + "jiedai/v1/p2p/register/sms?mobilePhone=",//获取注册手机验证码
    "register": baseUrl + "jiedai/v1/p2p/register",//注册
    "userInfo": baseUrl + "jiedai/v1/p2p/investor?QB_AUTH_TOKEN=", //用户信息查询
    "uInfowithInvest": baseUrl + "jiedai/v1/p2p/investor", //用户信息查询--钱包理财
    'realName': baseUrl + "jiedai/v1/p2p/investor/auth?QB_AUTH_TOKEN=" , //实名认证
    "buyNow": baseUrl + "jiedai/v1/p2p/invest?QB_AUTH_TOKEN=" ,//投标
    "importWallet" :baseUrl + "jiedai/v1/p2p/investor/applyForWallet?QB_AUTH_TOKEN=",//导入数字钱包
    "qbManage": baseUrl + "jiedai/v1/p2p/invests?QB_AUTH_TOKEN=",//钱包理财
    "logOut" :baseUrl + "jiedai/v1/p2p/logout?QB_AUTH_TOKEN=", //退出登录
    "modifyLogPsw": baseUrl + "jiedai/v1/p2p/investor?QB_AUTH_TOKEN=" ,//修改登录密码
    "getAuthCode": baseUrl + "jiedai/v1/p2p/investor/password/sms?mobilePhone=", //忘记登录密码获取验证码
    'forgetLogPsw':baseUrl + "jiedai/v1/p2p/investor/password?smsCode=",//忘记登录密码
    // 'verifyPwd':baseUrl + 'jiedai/v1/bank/user/verify',  // 验证数字钱包密码
    'walletBalance':baseUrl + 'jiedai/v1/bank/wallet/balance',  // 发送支付/收款操作
    'blockinfo':baseUrl + 'jiedai/v1/p2p/blockinfo/', // 区块概要
    'bindBank': baseUrl + 'jiedai/v1/p2p/investor/tieCard?QB_AUTH_TOKEN=', //绑卡
    'bankList': baseUrl + 'jiedai/v1/p2p/banks', //银行列表
    'bindBankCode': baseUrl + 'jiedai/v1/p2p/investor/tieCard/sms?QB_AUTH_TOKEN=', //绑卡短信验证码
    'purchase': baseUrl + 'jiedai/v1/p2p/investor/purchase?QB_AUTH_TOKEN=', //申购
    'redeem': baseUrl + 'jiedai/v1/p2p/investor/redeem?QB_AUTH_TOKEN=', //赎回
    'income':baseUrl + 'loan/xdcore/finance/income?token=',// 获取理财昨日收益
    'qualification': baseUrl + 'jiedai/v1/loan/xdcore/qualification?QB_AUTH_TOKEN=',//获取借款资质
    "xdcore": baseUrl + "jiedai/v1/loan/xdcore/application?QB_AUTH_TOKEN=",//获取申请借款状态；将合同传到链上
    "tradePsw": baseUrl +"jiedai/v1/p2p/investor/order/password?QB_AUTH_TOKEN=",//设置交易密码
    "forgetTradePsw": baseUrl +"jiedai/v1/p2p/investor/order/password/forget?QB_AUTH_TOKEN=",//忘记交易密码
    "forgetTradePswSmSCode": baseUrl +'jiedai/v1/p2p/investor/order/password/sms?QB_AUTH_TOKEN=', // 忘记交易密码短信验证码
    "billList": baseUrl + "jiedai/v1/order/orders?QB_AUTH_TOKEN=",   //  账单列表
    "billDetail": baseUrl + 'jiedai/v1/order/details/', // 账单交易详情
    "checkPsw": baseUrl +"jiedai/v1/p2p/investor/order/checkPassword?QB_AUTH_TOKEN=",//验证交易密码,
    "loadInfo":baseUrl +"jiedai/v1/loan/xdcore/loanInfo?QB_AUTH_TOKEN=",//审核通过后，查询可借金额，有效期
    "loanIntention": baseUrl +"jiedai/v1/loan/xdcore/",//借款意向提交 ;审核通过后，查询可借金额，有效期
    "protocol": baseUrl + 'jiedai/v1/loan/xdcore/protocol?QB_AUTH_TOKEN=', //生成合同数据
    "digCashBaLanceCheck":baseUrl +'jiedai/v1/p2p/investor/digCashBaLanceCheck?QB_AUTH_TOKEN=',  // 余额查询
    'checkPassWord':baseUrl+'jiedai/v1/p2p/investor/order/checkPassword?QB_AUTH_TOKEN=',  // 校验交易密码
    'transferAccounts':baseUrl+'jiedai/v1/p2p/investor/transferAccounts?QB_AUTH_TOKEN=', //转账
    "billList": baseUrl + "jiedai/v1/order/orders?QB_AUTH_TOKEN=",   //  账单列表
    "billDetail": baseUrl + 'jiedai/v1/order/details/', // 账单详情
    "loanList": baseUrl + "jiedai/v1/loan/xdcore/loans?QB_AUTH_TOKEN=" ,// 我的借款列表
    "trial": baseUrl + "jiedai/v1/loan/xdcore/trial?QB_AUTH_TOKEN=", //借款试算接口
    "getCode2": baseUrl + "jiedai/v1/loan/xdcore/application/auth/sms?QB_AUTH_TOKEN=", //进件获取验证码
    "checkCode2": baseUrl + "jiedai/v1/loan/xdcore/application/auth/sms/check?QB_AUTH_TOKEN=",//进件验证验证码
// 钱包生活
    "collect": baseUrl + "app/wallet/store/collect",// 商铺类型
}
