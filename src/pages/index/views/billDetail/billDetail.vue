<template>
	<div class="wrapBox">
		<div class="wrap" v-if="billResult!=''">
			<!--账单明细  -->
			<div class="billDeail">
				<div class="flexA flexA_140" v-for="item in billResult" @click="billSection(1, item.id)">
					<div>
						<div class="f30">{{item.orderType}}</div>
						<div class="f24 g9">{{item.createTime | formatDateTime}}</div>
					</div>

					<span :class="item.isInput == 1 ? 'red' : 'blue'" class="f28">
						<em v-if="item.isInput == 0">-</em><em v-else>+</em>
						{{item.orderAmount | toThousands}}（QBM）<i class="arrows ml20"></i>
					</span>
				</div>
			</div>
			<input v-if="isMore" @click="getMoreBill" type="button" name="" value="点击加载更多">

			<!--交易详情  -->
			<div class="dealDetail" v-if="section == 1">
				<div class="cheader">
					<div class="left" @click="billSection(0)">
						<i class="icon_arrow"></i>
					</div>
					<div class="mid">
						<h2 class="title">交易详情</h2>
					</div>
				</div>
				<div class="wrap mt20 f30">
					<div class="flexA">
						<h5>交易类型</h5>
						<div class="g6">{{ billDetails.orderType }}</div>
						<div class="g6" v-if="billDetails.type == 'receive'">收款</div>
						<div class="g6" v-if="billDetails.type == 'freeze'">冻结</div>
						<div class="g6" v-if="billDetails.type == 'unfreeze'">解冻</div>
					</div>
					<div class="flexA">
						<h5>交易金额</h5>
						<div class="g6 red">￥{{billDetails.orderAmount | toThousands}}</div>
					</div>
					<div class="flexA">
						<h5>交易时间</h5>
						<div class="g6">{{billDetails.createTime | formatDateTime}}</div>
					</div>
					<div class="flexA">
						<h5>交易结果</h5>
						<div class="g6">{{billDetails.dealResult}}</div>
					</div>
					<div class="flexA">
						<h5>订单号</h5>
						<div class="g6">{{billDetails.orderId}}</div>
					</div>
				</div>
			</div>
		</div>

		<!--暂无数据  -->
		<div class="noData" v-if="billResult == 0">
			<span class="noDataIcon"></span>
			<p>暂无数据</p>
		</div>
	</div>
</template>
<style lang="sass" scoped>
@import '../static/css/common.css';
@import '../static/css/detail.css';
.blue{color: #30A4FF;}
input {
	display: block;
	width: 60%;
	height: 80px;
	line-height: 80px;
	margin: 20px auto;
	text-align: center;
	background: #fff;
	text-indent: -20px;
}
</style>
<script src="./billDetail.js"></script>
