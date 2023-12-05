/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","19cc593645b57c9ed4fdc7b8a7b2450c"],["/archives/2023/07/page/2/index.html","e6e092de4bb2d2455476972b68f44bba"],["/archives/2023/08/index.html","086a51e6a6664e942fb0afc4a77b6806"],["/archives/2023/09/index.html","e8b46f81214414ce6a3e68606b90d5e4"],["/archives/2023/09/page/2/index.html","be577ea36525b5a9c66c027378366e14"],["/archives/2023/10/index.html","94edb01a50e32dd393bf8c3752ae9d34"],["/archives/2023/11/index.html","29c4b28d22048e9a91a3a45d58e5fd1c"],["/archives/2023/12/index.html","18982a06d738f4db6e9d6427657ec821"],["/archives/2023/index.html","a7836398658b81bb16ffdc576cbd820b"],["/archives/2023/page/2/index.html","28c37431506fcd429c39e62f19261923"],["/archives/2023/page/3/index.html","ea165bb416826beb710bf214d82de882"],["/archives/2023/page/4/index.html","eb9eaa808a1c2b038ad112796a6580c5"],["/archives/2023/page/5/index.html","6061937f625b4b2a7cf79cc3832eeca9"],["/archives/2023/page/6/index.html","ec1a0f0e6e980bebcc809c0974dafce1"],["/archives/index.html","aa08dd5f53d0e08b7a8a9c383fc83f57"],["/archives/page/2/index.html","f17ba3301c2572ae5fb7d7e108c3f33d"],["/archives/page/3/index.html","7c087a520383fc72fce1a8c356fba6f5"],["/archives/page/4/index.html","614f9fff966a1b52cad6ec33a3b42454"],["/archives/page/5/index.html","601c665d5e5f603bd11fb7f224a22cab"],["/archives/page/6/index.html","46b573c7fbf66235ba4eced89e5e4fc1"],["/categories/JavaWeb/AOP/index.html","267baff40a1c1a1ddf7db861c16d24f8"],["/categories/JavaWeb/Bean/index.html","2cdb74d30cece2cec80c274f1c645c9d"],["/categories/JavaWeb/index.html","95f57068edf6c5ba095ce55e76390f7b"],["/categories/flask框架/index.html","701c5ec96e40512832bb47ad66096843"],["/categories/index.html","aa6fd48aaa888c9c7ab3620db57b6c1a"],["/categories/爬虫/index.html","532cb46e26fb929c5f31a9da5eb3d6f8"],["/categories/算法/index.html","f741b1ed40b2f223ce29cef18ab3f861"],["/categories/算法/page/2/index.html","94e192f22db81432d673102f2932b494"],["/categories/算法/page/3/index.html","fbe8e18271c8de568eba67f0f602896d"],["/categories/算法/page/4/index.html","8ee56194324da38d57b61455a1e0c589"],["/categories/算法/page/5/index.html","ca025e36fe6031497053f0850f96d9c9"],["/categories/算法/二分查找/index.html","b8a788788752619346d482f60c2dae40"],["/categories/算法/二叉树/index.html","37f2a828bbe33ebc37a90c0617eb7105"],["/categories/算法/动态规划/index.html","ac8c152dcf333c38ad3dbaf7a50e9a14"],["/categories/算法/双指针/index.html","e9e0bc0c0f86bf0eba260c6acfee9094"],["/categories/算法/哈希/index.html","ccc7c2906e4ce096876e5e162eecb667"],["/categories/算法/堆/index.html","cb92946cc1aceb7457edca502dace977"],["/categories/算法/子串/index.html","0753af42e597bd295e6f8232992ca272"],["/categories/算法/普通数组/index.html","014ba96d5d90ca11ae2bde9411a1b4b0"],["/categories/算法/树/index.html","a5c3176c770c7530664fde68d264f7bc"],["/categories/算法/滑动窗口/index.html","597f76ce083431f1a6dc82eeca776c9c"],["/categories/算法/矩阵/index.html","89799fa22fe2f686f9b09e9eefb11562"],["/categories/算法/贪心算法/index.html","c8b708d40ffe2d3937c6fe6049446888"],["/categories/算法/链表/index.html","8f791e555e3f69a6652497cb9a0868c1"],["/categories/算法/链表/page/2/index.html","ccd67b788de3a0b3b2801091a58216be"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3d698651ccd91edc9e9c7aa5d561917a"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","946a4308b46a01eba6e43228270563ef"],["/page/3/index.html","74c823ffd04723d0f4e0aabe87c2b2e7"],["/page/4/index.html","44767143bde9d043f31e2542365b2144"],["/page/5/index.html","908f731cac710fdf622cb230a635f90b"],["/page/6/index.html","83cd430087c519222677d191edaa5b0a"],["/pages/JavaWeb/AOP/AOP.html","ef148756c1c7ccc5f42dac7da133503e"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","6a37ca9ee5e6726ccbbf187aa8dc2c2d"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","4d171394115710025ef0dbf931daef4e"],["/pages/JavaWeb/事务管理.html","64b83978c8f67c02bf3a75868e1db0b7"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","14e0e25b103e84fb2f681118b1109251"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","b33d5c81449ad5c9fb0f7ac09e9acdd8"],["/pages/JavaWeb/拦截器.html","3d55fd6274419a7f15ad495afbcb70f9"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","58f0c7942ad3e5419530254cd501071e"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","b19c1e7679d344beb9c4eef06abdeed5"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","d607d0cc6d8326f6b8ff0b21aae77403"],["/pages/爬虫/分布式爬虫.html","34d174481ae3d3c18fe7d055fda6e808"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","b4182d9e8249cabcad80bba649607132"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","2eb6760603de2256a7f5baf01a294db9"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","2e77e593897fc51e6a4c02ed96e9946a"],["/pages/算法/二分查找/搜索二维矩阵.html","4fffffb6aca7ce87b59d41c3eb67afa1"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","92293747492f60b508cc1fb2da377f5d"],["/pages/算法/二叉树/二叉树的最大深度.html","2ad0ebf87090f75795e1842ec88cb9ea"],["/pages/算法/二叉树/二叉树的直径.html","870792e7649b22d5e6f50aee9449955e"],["/pages/算法/二叉树/二叉树的遍历.html","3525e5e14d90b4efadb6d4313ddc3a0b"],["/pages/算法/二叉树/对称二叉树.html","b7eccf710e0086a7b52ad03bf7034400"],["/pages/算法/二叉树/翻转二叉树.html","d032e022fd4e7f2ed3633171d95d849b"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","3c64762f887dc82fe2635c08fcf3acff"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","177f803a22a1dc2f53dc6c8038ce0a73"],["/pages/算法/双指针/接雨水.html","c50f24de36cae7f7fa9e51da451c5928"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","a4f2ca66dfd0f14e04d79642d210d695"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","a79f5f850734e37926e24c4c271ffcca"],["/pages/算法/哈希/hash表理解.html","90400637346e2df1bd199b8848e94067"],["/pages/算法/哈希/两数之和.html","b170657659a5b4ac8c0c52a4ad7bdebd"],["/pages/算法/哈希/字母异位词分组.html","b611cfb128de5dfc7d4e1fddf791e7ef"],["/pages/算法/哈希/最长连续序列.html","3ce4abf43c51ebd50a820d620ee4623b"],["/pages/算法/堆/堆.html","42786d148ec672d5f9e781b7b69563de"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","68100e5c470e3cb6c9896239c5988f09"],["/pages/算法/子串/和为k的子数组.html","6c4b0a480674e13a1c096cd9bf8f4ce0"],["/pages/算法/子串/最小覆盖子串.html","df2e9d3a8450666d7dc14921b1195989"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","eb97ee6998012c665a9614ff1925447c"],["/pages/算法/普通数组/最大子数组和.html","3e7b0b83ef615569b94b1d55a2aeb52e"],["/pages/算法/普通数组/缺失的第一个正数.html","51818e2582abd303757615bf188bb943"],["/pages/算法/普通数组/轮转数组.html","bbc66c45ef88141d2964b194c7029943"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","c108afab2c7262b1b155efb27dfcc0fd"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","f00b22c7fd34b55e34719fe93355af8b"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","2c0e6f55302aa73ede11a1363fc9af2c"],["/pages/算法/矩阵/搜索二维矩阵 二.html","00f8d87df33b2abbeb03c253c01831f2"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","7429e7bbe0b890d1e14df741e3f86b6b"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","305e71357dc87f57c37cad38b6633887"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","02cfdfa75b5be1e8c4d2c9bbb4b709b1"],["/pages/算法/贪心算法/划分字母区间.html","d529aa51282fff7ecd8cb9a84133aa12"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","417575e5ec9117b4b9d0eb1ac20c1c38"],["/pages/算法/链表/k个一组翻转链表.html","8b985831e8c571c9dea6cee361641349"],["/pages/算法/链表/两两交换节点.html","c8abe1a94432af2df7f5d57b3ee361a3"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","76f721164bf9c1f3a49f294bae595b50"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","8d4b475d339c48aa37678178b1d83bc2"],["/pages/算法/链表/反转链表.html","16fa98af2942b7c8728b91801e1e58bb"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","5d1c301e03678527b0cc7d639ec376f9"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","bbfc4c64c17543dabb3f27f06b6ec492"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","6c58e4d54685ad6a2bf850af85010fa7"],["/pages/算法/链表/深度拷贝.html","1a1d28d2d56ff25f9f77322d10519cdd"],["/pages/算法/链表/环形链表.html","96e14913bf9eb992d22084caa47bd226"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","ecef1d3d05f0acb83f17ade69bf33c40"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","d3a7072678c914a3350ccd9298947791"],["/tags/AOP/index.html","ed6745c14e41bd3e59cc70d24df0587a"],["/tags/Bean/index.html","8fdf2ca28d6d2739f8f84cd2b1e62602"],["/tags/JavaWeb/index.html","fe821eb799148c45d5bcbd6c71b0b1a4"],["/tags/Python/index.html","36eb3ca1e59585147c99c2343ffaf110"],["/tags/flask框架/index.html","302945bcbb34d58c33bf4b8c1286383a"],["/tags/index.html","c050401df5e170397660bb436dad5daf"],["/tags/nginx/index.html","c15bc4cf4fa1210cfea941b6cc9b69df"],["/tags/事务/index.html","fa4672306a941ef23d4aa6af2e31e9a9"],["/tags/二叉树/index.html","4ac09d5dd54d2a31f0fb1be0527d6665"],["/tags/会话技术/index.html","377e9d231c38dbdeeedc9e6f41d95d0c"],["/tags/全局异常处理/index.html","8c2fea2e586373fd19fb42e5b92d04ed"],["/tags/动态规划/index.html","f70d54b78967e7c95a705d3adfde0a03"],["/tags/双指针/index.html","0c3eb7e785219628058cf06c8fcb0a7b"],["/tags/哈希/index.html","97af79d414eaa3b4046dfa93ab713fe9"],["/tags/堆/index.html","66b41fdfdadc07ae4b15458d5976bb42"],["/tags/子串/index.html","a52212f1b10e3be14f2f361336abb3c5"],["/tags/拦截器/index.html","73889e614b0e8e53846db88d1b5c52ad"],["/tags/普通数组/index.html","c2c1e0d39ac7216ce7dc6fc66731501b"],["/tags/树/index.html","36e74cc66f41973623be71cdf3ad3a92"],["/tags/滑动窗口/index.html","6bdaba21bf2604c18542e2cab2c613b1"],["/tags/爬虫/index.html","b8a0f4ff748939c51c478f6e28effab7"],["/tags/矩阵/index.html","d58c2e7b5ebadb4a915b7ad73ec28663"],["/tags/算法/index.html","5a410464acb6bad94dc59f185029ac72"],["/tags/算法/page/2/index.html","e55b32b73ad88ac78147f1cba3125763"],["/tags/算法/page/3/index.html","cf6b6bad48022691aa0d2b51cf9133b3"],["/tags/算法/page/4/index.html","2cffb577a3540311513dc1e0f7f39256"],["/tags/算法/page/5/index.html","e5b7676c1ed3f31fedf693460c386f98"],["/tags/贪心算法/index.html","fd3da19f788b57e753a8d09a77d416c0"],["/tags/过滤器/index.html","2aec9147b187489e0ff5b7a303bae59e"],["/tags/链表/index.html","41e65d62fe111adccc4c817d36c95e0a"],["/tags/链表/page/2/index.html","cb18378685a601e250a358bff57e81fb"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
