import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "团队",
      icon: "user-group",
      children: [
        { text: "关于我们", link: "/about" },
        { text: "成员介绍", link: "/team/members" },
        { text: "工作流程", link: "/team/workflow" },
        { text: "协作规范", link: "/team/conventions" },
        { text: "技术分享", link: "/team/share-sessions" },
      ]
    },
    {
      text: "项目",
      icon: "folder",
      children: [
        { text: "所有项目", link: "/projects/" },
        { text: "工具集合", link: "/projects/tools/" },
        { text: "框架实验", link: "/projects/frameworks/" },
        { text: "学习资源", link: "/projects/resources/" },
      ]
    },
    {
      text: "博客",
      icon: "pen-to-square",
      children: [
        { text: "博客首页", link: "/blog/" },
        { text: "前端开发", link: "/blog/frontend/" },
        { text: "后端开发", link: "/blog/backend/" },
        { text: "开发工具", link: "/blog/devtools/" },
        { text: "心得体会", link: "/blog/thoughts" },
      ]
    },
  ],
});