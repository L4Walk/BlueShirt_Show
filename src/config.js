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


const LOGO_BLUESHRIT = "http://www.bluelskj.com/wp-content/uploads/2023/05/8fa5b-www.blueshirtyun.com.png";
const LOGO_CLOUD = 'http://www.bluelskj.com/wp-content/uploads/2023/10/蓝衫云_64.png'
const LOGO_MIDJOURNEY = 'http://www.bluelskj.com/wp-content/uploads/2023/10/蓝衫midjourney_64.png';
const LOGO_ACDEMIEC = 'http://www.bluelskj.com/wp-content/uploads/2023/10/学术GPT_64.png';
const LOGO_GPTPRO = 'http://www.bluelskj.com/wp-content/uploads/2023/10/蓝衫GPT进阶版_64.png';
const LOGO_GPTFREE  = 'http://www.bluelskj.com/wp-content/uploads/2023/10/蓝衫GPT免费版_64.png';
const LOGO_GPTBUY = 'http://www.bluelskj.com/wp-content/uploads/2023/10/GPT购买平台_64.png';
const LOGO_SHIRTAITOOLKIT = 'http://www.bluelskj.com/wp-content/uploads/2023/10/ShirtAI-toolkit_64.png';
const LOGO_CHUANGJU = 'http://www.bluelskj.com/wp-content/uploads/2023/10/创聚_64.jpg';




// pageId 命名规则: txx，t为sortID，xx为编号
const PAGES_DATA = [
  /* 官方站点 */
  {
    pageId: 101,
    sortId: 1,
    title: "蓝衫官网",
    subtitle: "",
    url: "https://www.bluelsqkj.com/",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 102,
    sortId: 1,
    title: "蓝衫导航",
    subtitle: "一个可自定义的简介导航网站",
    url: "http://www.your-web-page.xyz/",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 103,
    sortId: 1,
    title: "蓝衫云",
    subtitle: "中国香港CN2 GIA 美国大带宽服务器 VPS SSL证书",
    url: "https://www.blueshirtyun.com/",
    icon: LOGO_CLOUD
  },
  {
    pageId: 104,
    sortId: 1,
    title: "蓝衫轻盘",
    subtitle: "文件资源共享",
    url: "https://www.blueshirttools.com/",
    icon: LOGO_BLUESHRIT
  },


  /* 基础服务 */
  {
    pageId: 201,
    sortId: 2,
    title: "蓝衫云",
    subtitle: "中国香港CN2 GIA 美国大带宽服务器 VPS SSL证书",
    url: "https://www.blueshirtyun.com/",
    icon: LOGO_CLOUD
  },
  {
    pageId: 202,
    sortId: 2,
    title: "蓝衫APP封装",
    subtitle: "专业的 Android / ios 打包解决方案",
    url: "https://www.blueios.com/",
    icon: "https://www.blueios.com/static/images/logo.png"
  },



  /* 社交媒体 */
  {
    pageId: 301,
    sortId: 3,
    title: "微信公众号-蓝衫科技",
    subtitle: "",
    url: "http://www.bluelskj.com/wp-content/uploads/2023/10/蓝衫科技.png",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 302,
    sortId: 3,
    title: "微信公众号-蓝衫轻科技",
    subtitle: "",
    url: "http://www.bluelskj.com/wp-content/uploads/2023/10/蓝衫轻科技.jpg",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 303,
    sortId: 3,
    title: "微信公众号-智慧蓝衫",
    subtitle: "",
    url: "http://www.bluelskj.com/wp-content/uploads/2023/10/智慧蓝衫.jpg",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 304,
    sortId: 3,
    title: "微信公众号-创聚校园",
    subtitle: "",
    url: "http://www.bluelskj.com/wp-content/uploads/2023/10/创聚校园.jpg",
    icon: LOGO_CHUANGJU
  },
  {
    "pageId": 305,
    "sortId": 3,
    "title": "知乎-蓝衫科技",
    "subtitle": "",
    "url": "https://www.zhihu.com/people/mi-hun-dream-76",
    "icon": "https://th.bing.com/th/id/R.f0bd97564b85fd953f0d3a416650ef32?rik=%2fSDTEtosZK4hIw&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2021%2f04-07%2f98963%2fwater_98963_698_698_.png&ehk=8l2O6L%2b3ARFH2w6EYU%2b57FSZ%2fh3noVqeAY4b4%2fZ2%2fr4%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "pageId": 306,
    "sortId": 3,
    "title": "Bilibili-蓝衫轻科技",
    "subtitle": "",
    "url": "https://space.bilibili.com/346415234?spm_id_from=333.337.search-card.all.click",
    "icon": "https://android-artworks.25pp.com/fs08/2021/04/15/0/110_a1c6eb62a7b1139bee62358a2f0ebf02_con_130x130.png"
  },
  {
    "pageId": 307,
    "sortId": 3,
    "title": "今日头条-蓝衫科技",
    "subtitle": "",
    "url": "https://www.toutiao.com/c/user/token/MS4wLjABAAAAfRCHPCpVGx2xcLQKQ4T_ByqCVgfyp8NGmdD8vU2T2ztx5GOAu1P515HEdKzpfFwU/?",
    "icon": "https://ts1.cn.mm.bing.net/th/id/R-C.29e434e50c151a2ab26f5c20681a1954?rik=0OVXD0T26b4xrw&riu=http%3a%2f%2fpro.statics.logoqs.techuangyi.com%2f2017%2f08%2f01%2fstFAKrcP3eRPeYW7Jwc3QzXc.jpg&ehk=u3u3zKGpzc%2fnHOap0%2f0kgjTlCPhBaiJpRJDvLnPQCzU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
  },
  {
    "pageId": 308,
    "sortId": 3,
    "title": "RSS-蓝衫科技",
    "subtitle": "",
    "url": "https://www.bluelsqkj.com/feed",
    "icon": "https://th.bing.com/th/id/R.836829e6642b0f4920dc56143112fe03?rik=erdNdDZgJEe84Q&riu=http%3a%2f%2fwww.ranklogos.com%2fwp-content%2fuploads%2f2012%2f04%2fRSS-logo.png&ehk=bH7ZQE7aEOGgCH28o3U5jkJj5Uz9jGl08sWFGKj%2fK3U%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    "pageId": 309,
    "sortId": 3,
    "title": "推特-蓝衫科技",
    "subtitle": "",
    "url": "https://mobile.twitter.com/FengIves",
    "icon": "https://pngmind.com/wp-content/uploads/2019/08/Twitter-Logo-Png-Transparent-Background.jpg"
  },
  {
    "pageId": 310,
    "sortId": 3,
    "title": "油管-蓝衫科技",
    "subtitle": "",
    "url": "https://www.youtube.com/channel/UCp0r9_FrVb4TgRqmYyVatDg",
    "icon": "https://th.bing.com/th/id/OIP.vfYgwsIM9IiKnbDetbxsLwAAAA?pid=ImgDet&rs=1"
  },
  
  

  /* AI生态 */
  {
    pageId: 401,
    sortId: 4,
    title: "Shirt.AI",
    subtitle: "",
    url: "https://www.lsshirtai.com/",
    icon: LOGO_SHIRTAITOOLKIT
  },  
  {
    pageId: 402,
    sortId: 4,
    title: "ChatGPT 进阶版",
    subtitle: "",
    url: "https://www.bluelsqkj.com/zh_cn/chatgptpro",
    icon: LOGO_GPTPRO
  },
  {
    pageId: 403,
    sortId: 4,
    title: "ChatGPT 免费版",
    subtitle: "",
    url: "https://www.bluelsqkj.com/zh_cn/chatgptbuild",
    icon: LOGO_GPTFREE
  },
  {
    pageId: 404,
    sortId: 4,
    title: "ChatGPT 购买平台",
    subtitle: "",
    url: "https://www.bluelsqkj.com/zh_cn/chatgpt-purchase-2",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 405,
    sortId: 4,
    title: "学术GPT",
    subtitle: "",
    url: "https://www.bluelsqkj.com/zh_cn/academicgpt",
    icon: LOGO_ACDEMIEC
  },
  {
    pageId: 406,
    sortId: 4,
    title: "ChatGPT Plus",
    subtitle: "",
    url: "https://www.bluelsqkj.com/zh_cn/chatgptplus2",
    icon: LOGO_BLUESHRIT
  },
  {
    pageId: 407,
    sortId: 4,
    title: "Midjourney普通版",
    subtitle: "",
    url: "https://www.bluelsqkj.com/zh_cn/midjourney",
    icon: LOGO_MIDJOURNEY
  },
  /* 其他站点 */

  
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
