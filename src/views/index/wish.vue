<template>
    <div>
        <NavHeader :linking="'wish'"></NavHeader>
        <div class="container">
            <div class="row">


            </div>


            <div class="row flex-vertical-center">
                <div style="margin-top:20px;" class="col-md-6">
                    <span class="sub-title">我想要的书籍  共  1 本</span>
                    <hr>
                </div>
            </div>

            <div class="row my-gifts-row">
                <a href="http://www.yushu.im/book/9787535436702/detail" class="">
                </a>
                <div style="margin-bottom:30px; display: flex" class="col-md-9 col-padding content-box"><a
                        href="http://www.yushu.im/book/9787535436702/detail" class="">
                </a>
                    <div style="display: flex; justify-content: flex-start; flex-grow: 1"><a
                            href="http://www.yushu.im/book/9787535436702/detail" class="">
                        <div class="col-md-2 img-box">
                            <img class="book-img-small shadow" src="/static/images/index/s3046564.jpg">
                        </div>
                    </a>
                        <div style="margin-top:6px;" class="col-md-6 flex-vertical"><a
                                href="http://www.yushu.im/book/9787535436702/detail" class="">
                            <span id="title" class="book-middle-title">白水煮一切</span>
                            <div style="margin-top:6px;" class="flex-vertical description-font">
                                <span id="author">大张伟</span>
                                <span id="publisher">长江文艺出版社</span>
                                <span id="price">￥19.00元</span>
                                <span id="isbn">9787535436702</span>
                            </div>
                        </a><a class="link-normal" href="http://www.yushu.im/wish/book/9787535436702/redraw">
                            撤销
                        </a>
                        </div>
                    </div>
                    <div class="col-md-3 flex-vertical" style="padding: 0">

                        <a href="http://www.yushu.im/book/9787535436702/detail">
                            <span class="bg-info">3人赠送</span>
                        </a>

                    </div>
                </div>

            </div>


        </div>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";

    export default {
        name: "wish",
        data() {
            return {}
        },
        components: {NavFooter, NavHeader}
    }
</script>

<style scoped>

</style>
