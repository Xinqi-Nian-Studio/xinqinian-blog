import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "项目",
    icon: "folder",
    prefix: "/projects/",
    children: [
      { text: "工具集合", icon: "tool", link: "tools/" },
      { text: "框架实验", icon: "flask", link: "frameworks/" },
      { text: "学习资源", icon: "book-open", link: "resources/" },
    ]
  },
  {
    text: "博客",
    icon: "pen-to-square",
    children: [
      { text: "博客首页", icon: "house", link: "/blog/" },
      { text: "前端开发", icon: "code", link: "/blog/frontend/" },
      { text: "后端开发", icon: "server", link: "/blog/backend/" },
      { text: "开发工具", icon: "screwdriver-wrench", link: "/blog/devtools/" },
      { text: "心得体会", icon: "heart", link: "/blog/thoughts" },
    ]
  },
  {
    text: "团队",
    icon: "user-group",
    children: [
      { text: "关于我们", icon: "circle-info", link: "/about" },
      { text: "成员介绍", icon: "users", link: "/team/members" },
      { text: "工作流程", icon: "list-check", link: "/team/workflow" },
      { text: "协作规范", icon: "book", link: "/team/conventions" },
      { text: "技术分享", icon: "presentation", link: "/team/share-sessions" },
    ]
  },
  {
    text: "博客分类",
    children: [
      { text: "前端开发", link: "/category/前端开发/" },
      { text: "后端开发", link: "/category/后端开发/" },
      { text: "开发工具", link: "/category/开发工具/" },
      { text: "心得体会", link: "/category/心得体会/" },
    ],
  },
  {
    text: "VuePress文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);