<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in Lunbotu" :key="item"><img :src="item" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-home"></span> -->
                    <img src="./images/user-select.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                    <img src="./images/user-select.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                    <img src="./images/user-select.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-location"></span> -->
                    <img src="./images/user-select.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-search"></span> -->
                    <img src="./images/user-select.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <!-- <span class="mui-icon mui-icon-phone"></span> -->
                    <img src="./images/user-select.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul> 
		</div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                Lunbotu:[]
            }
        },
        created(){
            this.getBunbotu()
        },
        methods:{
            getBunbotu(){
                this.$http.get('http://img.yunhaixitong.com/config/ad.json').then(result => {
                    console.log(result.body.record.banner)
                    this.Lunbotu = result.body.record.banner
                     
                })
            }
        }
    }
</script>
<style lang="sass" scoped>
    .mint-swipe{
        height:220px;
        .mint-swipe-item{
            &:nth-child(1){
                background:yellow
            }
            &:nth-child(2){
                background:orange
            }
            &:nth-child(3){
                background:blue
            }
            img{
                width:100%;
                height:100%;
            }
        }
    }
    .mui-content > .mui-table-view:first-child{
        margin-top:0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
        img{
            width:60%
        }
    }
    .mui-grid-view.mui-grid-9{
        background:#fff;
    }
</style>