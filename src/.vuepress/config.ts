import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';  // 需要导入 viteBundler
import theme from "./theme.js";

export default defineUserConfig({
  base: '/xinqinian-blog/', 
  lang: "zh-CN",
  title: "新启年科技工作室",
  description: "一群热爱技术、喜欢折腾的伙伴组成的非商业、纯兴趣团队",
  
  // 🔴 关键修改：将 server 配置移到 bundler 里面
  bundler: viteBundler({
    viteOptions: {
      server: {
        host: '0.0.0.0',  // 监听所有网络接口
        allowedHosts: ['blog.newerastudio.cc.cd'],  // 允许的域名
        port: 8080,  // 端口移到这边
      },
    },
  }),

  // 这些配置保持原样
  hostname: 'https://blog.newerastudio.cc.cd',
  head: [
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' 
    }],
    ['link', { rel: 'icon', href: 'https://s41.ax1x.com/2026/02/12/pZba5PU.png' }],
    ['meta', { name: 'keywords', content: '新启年,科技工作室,技术团队,开源项目,技术博客' }],
    ['meta', { name: 'author', content: '新启年科技工作室' }],
	  ['link', { rel: 'canonical', href: 'https://blog.newerastudio.cc.cd' }]
  ],
  
  theme,
  // host: 'localhost',  // 🔴 删除这一行，已经在 bundler 里配置了
  // port: 8080,        // 🔴 删除这一行，已经在 bundler 里配置了
});