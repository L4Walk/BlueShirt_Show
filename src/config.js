const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "蓝衫科技 官网"; // 个人网站名字

const BLOG_URL = "https://www.bluelsqkj.com/"; // 个人网站链接（请填写完整链接）

const GITHUB = ""; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://ts1.cn.mm.bing.net/th/id/R-C.ea46e780c79acab0adc06e92964538ee?rik=owa1g2%2bHyBaBHQ&riu=http%3a%2f%2fstatic.58cgg.com%2fuploads%2fallimg%2f201028%2f245-20102R31144601.jpg&ehk=jIXeHZlS8yYgC24OInkc3U%2fzhDwGuTaN%2bChbQjEvmBk%3d&risl=&pid=ImgRaw&r=0"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "官方站点" },
  { sortId: 2, title: "基础服务" },
  { sortId: 3, title: "社交媒体" },
  { sortId: 4, title: "AI生态" },
  { sortId: 5, title: "其他站点"},
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const BLUESHRIT_LOGO = "http://www.bluelskj.com/wp-content/uploads/2023/05/8fa5b-www.blueshirtyun.com.png";

const PAGES_DATA = [
  /* 官方站点 */
  {
    pageId: 1,
    sortId: 1,
    title: "蓝衫官网",
    subtitle: "",
    url: "https://www.bluelsqkj.com/",
    icon: BLUESHRIT_LOGO
  },
  {
    pageId: 2,
    sortId: 1,
    title: "蓝衫导航",
    subtitle: "一个可自定义的简介导航网站",
    url: "http://www.your-web-page.xyz/",
    icon: BLUESHRIT_LOGO
  },
  {
    pageId: 3,
    sortId: 1,
    title: "蓝衫云",
    subtitle: "中国香港CN2 GIA 美国大带宽服务器 VPS SSL证书",
    url: "https://www.blueshirtyun.com/",
    icon: BLUESHRIT_LOGO
  },

  /* 基础服务 */
  {
    pageId: 3,
    sortId: 2,
    title: "蓝衫云",
    subtitle: "中国香港CN2 GIA 美国大带宽服务器 VPS SSL证书",
    url: "https://www.blueshirtyun.com/",
    icon: BLUESHRIT_LOGO
  },


  /* 社交媒体 */
  {
    pageId: 4,
    sortId: 3,
    title: "知乎-蓝衫科技",
    subtitle: "",
    url: "https://www.zhihu.com/people/mi-hun-dream-76",
    icon: "https://th.bing.com/th/id/R.f0bd97564b85fd953f0d3a416650ef32?rik=%2fSDTEtosZK4hIw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2021%2f04-07%2f98963%2fwater_98963_698_698_.png&ehk=8l2O6L%2b3ARFH2w6EYU%2b57FSZ%2fh3noVqeAY4b4%2fZ2%2fr4%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    pageId: 5,
    sortId: 3,
    title: "Bilibili-蓝衫轻科技",
    subtitle: "",
    url: "https://space.bilibili.com/346415234?spm_id_from=333.337.search-card.all.click",
    icon: "https://android-artworks.25pp.com/fs08/2021/04/15/0/110_a1c6eb62a7b1139bee62358a2f0ebf02_con_130x130.png"
  },
  {
    pageId: 6,
    sortId: 3,
    title: "今日头条-蓝衫科技",
    subtitle: "",
    url: "https://www.toutiao.com/c/user/token/MS4wLjABAAAAfRCHPCpVGx2xcLQKQ4T_ByqCVgfyp8NGmdD8vU2T2ztx5GOAu1P515HEdKzpfFwU/?",
    icon: "https://ts1.cn.mm.bing.net/th/id/R-C.29e434e50c151a2ab26f5c20681a1954?rik=0OVXD0T26b4xrw&riu=http%3a%2f%2fpro.statics.logoqs.techuangyi.com%2f2017%2f08%2f01%2fstFAKrcP3eRPeYW7Jwc3QzXc.jpg&ehk=u3u3zKGpzc%2fnHOap0%2f0kgjTlCPhBaiJpRJDvLnPQCzU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
  },
  {
    pageId: 7,
    sortId: 3,
    title: "RSS-蓝衫科技",
    subtitle: "",
    url: "https://www.bluelsqkj.com/feed",
    icon: "https://bpic.51yuansu.com/pic2/cover/00/46/15/581566e070e20_610.jpg"
  },
  {
    pageId: 8,
    sortId: 3,
    title: "推特-蓝衫科技",
    subtitle: "",
    url: "https://mobile.twitter.com/FengIves",
    icon: "https://th.bing.com/th/id/OIP.h0IBZs64qZwjv6w26r2O7gHaFj?pid=ImgDet&rs=1"
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "以互助之心，做实用之事"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
