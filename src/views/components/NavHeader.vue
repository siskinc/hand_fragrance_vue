<template>
    <div>
        <div class="nav-self">
            <div style="padding-top: inherit" class="container">
                <form class="form-inline" action="http://www.yushu.im/book/search" method="get">
                    <div class="flex-vertical-center-height">
                        <div class="col-md-2  col-xs-3 logo">
                            <img src="/static/images/index/logo-yushu.png" width="69px" height="46px">
                        </div>
                        <div style="margin-left:20px;" class="col-md-7  col-xs-6 input-group">
                            <input name="q" type="text" placeholder="ISBN、图书名称" class="form-control input-sm">
                            <span class="input-group-btn">
                            <input class="btn btn-search" type="submit" value="搜索">
                        </span>
                        </div>
                        <div class="col-md-3 col-xs-3" style="padding-right: 0">


                            <div class="container-height flex-vertical-center login-box">

                                <div style="height: 100%; width: 100%;display: flex; justify-content: flex-end; align-items: center">
                                    <a href="/login">登录</a>
                                    <a class="btn-end" href="http://www.yushu.im/register">注册</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="sub-nav flex-vertical-center">
            <div class="container" style="width: 100%">
                <div class="row">
                    <div class="col-md-2 col-xs-3 col-md-offset-2">

                        <router-link id="recent" class="flex-vertical-hor-center" :class="{'linking': linking === 'index'}" to="/">
                            <img src="/static/images/index/upload.png">
                            <span>最近上传</span>
                        </router-link>
                    </div>
                    <div class="col-md-2 col-xs-3">
                        <a id="gifts" href="http://www.yushu.im/my/gifts" class="flex-vertical-hor-center">
                            <img src="/static/images/index/gift.png">
                            <span>赠送清单</span>
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-3">
                        <router-link id="wishes" class="flex-vertical-hor-center" :class="{'linking': linking === 'wish'}" to="/wish">
                            <img src="/static/images/index/wish.png">
                            <span>心愿清单</span>
                        </router-link>
<!--                        <a id="wishes" href="http://www.yushu.im/my/wish" class="flex-vertical-hor-center">-->
<!--                            -->
<!--                        </a>-->
                    </div>
                    <div class="col-md-2 col-xs-3">
                        <a id="pending" href="http://www.yushu.im/pending" class="flex-vertical-hor-center">
                            <img src="/static/images/index/fish.png">
                            <span>鱼漂</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../../static/css/bootstrap.min.css'
    import '../../../static/css/base.css'
    import '../../../static/css/index.css'

    export default {
        props: ['linking'],
        name: "NavHeader"
    }
</script>

<style scoped>

</style>
