// ============================================================================
// 公共配置 —— 可在后台 /admin/settings.html 在线编辑
// 这里都是公开信息，不要把 token 等密钥放进来
// ============================================================================

export const VERSION = '20260904205619';

export const CONFIG = {
  repo: {
    owner: "LuoTYi712",
    name: "Boil-blogs",
    branch: "main"
  },
  authorizedUsers: ["luotyi712"],
  site: {
    title: "小破站",
    subtitle: "记录",
    author: "吕小树",
    logo: "https://ts2.tc.mm.bing.net/th/id/OIP-C.zTriqUjJClgqCjRXya8DgAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    favicon: "https://ts4.tc.mm.bing.net/th/id/OIP-C.fjbR3qNay50P895fUCYYdgHaJh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    avatar: "https://avatars.githubusercontent.com/u/0?v=4",
    description: "前进，前进，不择手段的前进！",
    url: "https://LuoTYi712.github.io/Boil-blogs",
    locale: "zh-CN",
    nav: [
      {
        name: "首页",
        href: "./"
      },
      {
        name: "标签",
        href: "tags.html"
      },
      {
        name: "归档",
        href: "archives.html"
      },
      {
        name: "系列",
        href: "series.html"
      },
      {
        name: "工具",
        href: "tools.html"
      },
      {
        name: "关于",
        href: "post/about/"
      }
    ],
    social: {
      github: "https://github.com/LuoTYi712",
      twitter: "",
      email: "luotyi712@gmail.com",
      rss: "rss.xml"
    }
  },
  giscus: {
    enabled: false,
    repo: "",
    repoId: "",
    category: "Announcements",
    categoryId: "",
    mapping: "specific",
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "top",
    lang: "zh-CN",
    notesTerm: "gitblog-notes-feed"
  },
  analytics: {
    enabled: false,
    snippet: ""
  },
  pageviews: {
    enabled: true,
    showHomeStats: true,
    showPostViews: true,
    showFooterStats: true,
    saobby: {
      site: {
        img: "",
        dashboard: "",
        label: "总访问"
      },
      extra: []
    },
    vercount: {
      scriptSrc: "",
      label: "阅读"
    }
  },
  auth: {
    githubDeviceFlow: {
      clientId: "",
      scope: "repo read:user"
    }
  },
  paths: {
    posts: "posts",
    index: "data/posts.json",
    uploads: "assets/uploads"
  },
  upload: {
    preferWebp: true,
    webpQuality: 0.85,
    maxWidth: 1920
  },
  theme: {
    default: "auto",
    preset: "jianshu",
    allowReaderPresetSwitch: true,
    tokens: {},
    customCss: ""
  },
  share: {
    enabled: false,
    showInPosts: true,
    showInPages: false,
    qrcodeOfPage: true
  },
  donate: {
    enabled: false,
    title: "如果这篇文章对你有帮助，欢迎请我喝杯咖啡 ☕️",
    wechat: "",
    alipay: "",
    paypal: ""
  }
};
