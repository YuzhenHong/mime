<template>
    <div id="nav">
    <b-navbar toggleable="lg"  type="dark">
        <b-navbar-brand href="/">
            <img src="https://i.postimg.cc/jjbJn7ys/favicon.png" class="d-inline-block align-top" alt="">
            <b-nav-text>迷．糜</b-nav-text>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-navbar-nav right>
                    <b-nav-item href="/fog">情緒勒索</b-nav-item>
                    <b-nav-item href="/detection">自我檢測</b-nav-item>
                    <b-nav-item href="/information">相關資訊</b-nav-item>
                    <b-nav-item href="/about">關於我們</b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>
<script>
export default {
    name: 'Navbar'
};
</script>

<style>

#nav img{
    width: 50px;
    height: 50px;
}

a.nav-link{
    font-size: 20px;
}
.navbar-dark .navbar-nav .nav-link,.navbar-dark .navbar-text{
    color: #fff;
    font-weight: bold;
    background-color: rgba(0,0,0,0);
}
.navbar-dark .navbar-nav .nav-link:hover {
    color: #EEB868;
}
    
</style>