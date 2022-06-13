/* eslint-disable vue/no-parsing-error */
<template>
  <div class="welcome">
    <div class="info">
      <h2>Welcome!</h2>
      <ul>
        <li>
          <a href="https://nuhchun.cn/1094.html" target="_blank">（零）后台项目与git的创建配置</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1134.html" target="_blank"> （一） 登录界面模块 – 主页界面</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1141.html" target="_blank">（二）用户管理模块</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1144.html" target="_blank">（三）权限管理模块</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1148.html" target="_blank">（四）商品管理模块-商品分类功能</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1151.html" target="_blank">（五）商品管理模块-分类参数功能</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1153.html" target="_blank">（六）商品管理模块- 商品列表功能</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1155.html" target="_blank">（七）订单管理模块</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1158.html" target="_blank">（八）数据统计模块</a
          >
        </li>
        <li>
          <a href="https://nuhchun.cn/1117.html" target="_blank">（九）后台系统项目性能优化</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="less" scoped>
.welcome {
  font-size: 20px;
  text-align: center;
  h3 {
    margin: 0 auto 0;
    font-size: 30px;
  }
  .info {
    margin: 5px 0 10px;
    ul {
      margin: 5px 0 0 150px;
      li {
        margin: 5px 0 50px;
        text-align: left;
        margin: 8px;
        color: black;
        a {
          text-align: center;
          display: inline-block;
          padding: 5px;
          text-decoration: none;
          font-size: 18px;
          border: 3px solid pink;
        }
        a:hover {
          color: pink;
          background-color: green;
        }
      }
    }
  }
}
</style>
