<template>
    <div>
        <ul class="wrap">
            <li class="flexA flexA_140" v-for="item in result" v-if="fShowItem(result,item)">
                <div>
                    <div class="f30">{{item.log}}</div>
                    <div class="f24 g9">{{item.timestamp|fmtDate}}</div>
                </div>
                <span class="f28 red">{{item.amount}}（QBM）</span>
            </li>
        </ul>
        <div v-show="showData" class="noData">
            <span class="noDataIcon"></span>
            <p>暂无数据</p>
        </div>
    </div>
</template>
<style lang="sass" scoped>
</style>
<script src="./amountFrozen.js"></script>