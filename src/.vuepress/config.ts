import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: '/xinqinian-blog/', 
  lang: "zh-CN",
  title: "新启年科技工作室",
  description: "一群热爱技术、喜欢折腾的伙伴组成的非商业、纯兴趣团队",
  dest: 'docs', 
  head: [
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' 
    }],
    
    ['link', { rel: 'icon', href: 'https://s41.ax1x.com/2026/02/12/pZba5PU.png' }],
    ['meta', { name: 'keywords', content: '新启年,科技工作室,技术团队,开源项目,技术博客' }],
    ['meta', { name: 'author', content: '新启年科技工作室' }],
  ],
  
  theme,
  host: 'localhost',
  port: 8080,
});