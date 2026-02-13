import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 基本信息
  hostname: "",
  
  author: {
    name: "新启年工作室",
  },

  logo: "https://s41.ax1x.com/2026/02/12/pZba5PU.png",

  // 导航栏和侧边栏
  navbar,
  sidebar,

  // 页脚
  footer: "新启年科技工作室",
  displayFooter: true,

  // 图标配置
  iconAssets: "fontawesome",
  iconPrefix: "fas",

  // 插件配置（只启用最基本的）
  plugins: {
    // 博客功能（最简启用）
    blog: true,
    tag: true,
    // 组件
    categoryItemMap: {
      前端开发: "frontend",
      后端开发: "backend",
      开发工具: "devtools",
      心得体会: "thoughts",
    },
    components: {
      components: ["Badge", "VPCard"],
    },
  },
});