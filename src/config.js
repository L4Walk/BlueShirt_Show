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
    sortId: 2,
    title: "蓝衫云",
    subtitle: "中国香港CN2 GIA 美国大带宽服务器 VPS",
    url: "https://www.blueshirtyun.com/",
    icon: BLUESHRIT_LOGO
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
