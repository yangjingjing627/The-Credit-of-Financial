<template>
    <div>
        <div class="wrap">
            <div class="flexA flexA_140">
                <div class="fix">
					<span class="icon_bank l">
						<img src="../static/images/bank/icon_CMB.png" width="100%"/>
					</span>
                    <div class="l">
                        <h5 class="f30">招商银行（尾号6923）</h5>
                        <p class="f24 g9">单笔限额5万元 | 每日限购10万元</p>
                    </div>
                </div>
                <div class="arrows"></div>
            </div>
        </div>
        <div class="wrap">
            <div class="flexA">
                <h5 class="f30">申购金额</h5>
                <div class="w520">
                    <input type="text" placeholder="建议申购100元以上金额" name="amount" class="f28"/>
                </div>
            </div>
        </div>
        <div class="content mt100">
            <router-link to="" class="btn">确认申购</router-link>
        </div>
    </div>
</template>

<style lang="sass" scoped>
    .icon_bank img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        display: inline-block;
        margin-right: 36px;
        border: 12px solid #f9f9f9;
    }
</style>
<script src="./subscribe.js"></script>