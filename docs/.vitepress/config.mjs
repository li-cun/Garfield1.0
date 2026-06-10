import { defineConfig } from "vitepress"
export default defineConfig({
  lang: "zh-CN",
  title: "Garfield1.0",
  description: "加菲猫网文写作课程 Skill 文档",
  base: "/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "课程精要", link: "/course-digest" },
      { text: "概念词汇", link: "/glossary" },
      { text: "金句索引", link: "/quotes" },
      { text: "学习路径", link: "/study-paths" },
      { text: "GitHub", link: "https://github.com/li-cun/Garfield1.0" }
    ],
    sidebar: [
      { text: "介绍", link: "/" },
      { text: "课程精要", link: "/course-digest" },
      { text: "概念词汇表", link: "/glossary" },
      { text: "金句索引", link: "/quotes" },
      { text: "学习路径", link: "/study-paths" },
      { text: "课程索引", link: "/lessons" },
      { text: "安装与使用", link: "/usage" }
    ]
  }
})
