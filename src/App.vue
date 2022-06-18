<template>
  <div id="app">
    <router-view/>

    <div style="position:fixed;text-align:center;bottom:0;margin:0 auto;width:100%;color: #5c6b77">
        <a style="color:#FFF" href="https://beian.miit.gov.cn/" target="_blank">青ICP备2021000798号-1</a>
    </div>

		 	<div style="position:fixed;text-align:right;bottom:0;margin:0 auto;width:100%;color: #5c6b77">
		 		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=63022402000008" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">青公网安备 63022402000008号</p></a>
		</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>