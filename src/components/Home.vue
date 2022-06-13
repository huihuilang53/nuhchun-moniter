<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <router-link to="/home" class="tou">
          <img src="../assets/heima.png" alt="" />
          <span class="asd"></span>
        </router-link>
        <span class="asd">商品管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 左边侧边栏 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="rgb(64,158,255)"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
        <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/'+subItem.path)">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      // 左侧菜单数据
      menulist: [],
      // 定义一个字体图标对象
      iconsObj: {
        125: 'el-icon-s-custom',
        103: 'el-icon-s-check',
        101: 'el-icon-s-goods',
        102: 'el-icon-s-order',
        145: 'el-icon-s-marketing'
      },
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    towelcome() {
      this.$router.push('/home')
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$message.warning('已退出')
    },
    // 获取所有的菜单
    async getMenuList() {
      const { data: result } = await this.$http.get('menus')
      if (result.meta.status !== 200) return this.$message.error(result.meta.msg)
      this.menulist = result.data
      // console.log(result)
    },
    // 点击按钮切换菜单折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style scoped>
.home_container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header > div {
  display: flex;
  align-items: center;
}

.el-header > div > a > span{
  display:inline-block;
  margin-left: 15px;
  line-height: px;
  color: white;
  text-decoration: none;
}
.el-aside {
  background-color: #333744;
}
.toggle-button {
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: rgb(144,147,153);
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer
}
.el-menu {
  border-right: none;
}

.el-main {
  background-color: #eaedf1;
}

</style>
