/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","82070e57104b932fbb5a818c08a63823"],["/archives/2023/05/index.html","6e36b1da7b9500f0062ddbd5f19ea029"],["/archives/2023/06/index.html","3150a048563a77dd95fcfe3ca3eb117b"],["/archives/2023/07/index.html","a110ec5d2417c628914501adf49e7ff2"],["/archives/2023/07/page/2/index.html","db3a2e7e08903cd3d2d750e575d1df17"],["/archives/2023/08/index.html","ebf3b012faeef83e78d2d02ba22e1b40"],["/archives/2023/09/index.html","83223689e262ad4464e1687fc1d433ce"],["/archives/2023/09/page/2/index.html","fc8e9202ef80e43968169bf32ec3b97e"],["/archives/2023/10/index.html","ffacde060502855cf45c120f2d7c05d8"],["/archives/2023/11/index.html","c221b8820a9dabcb6fff6752a8224e9e"],["/archives/2023/12/index.html","f62d7d4f31560f478a756f90c2444248"],["/archives/2023/index.html","44050559ba27f39b6384dae865b7050c"],["/archives/2023/page/2/index.html","ed3bc92def4836e4add27ecfde37f552"],["/archives/2023/page/3/index.html","d9541e1551580a9cb2c2efde8cd10d29"],["/archives/2023/page/4/index.html","36ebeb831c833c44ccc2097e3be1a2ab"],["/archives/2023/page/5/index.html","baa94f079a3b0f3858b71008d77af1ab"],["/archives/2023/page/6/index.html","492215609207213d5312c7655c940539"],["/archives/2023/page/7/index.html","e8e464797afd0aac3a295bd558eab348"],["/archives/index.html","321a1622938f1d8f260ecba6f72123b9"],["/archives/page/2/index.html","304625c25fd5960d67ca5ca3e134ea97"],["/archives/page/3/index.html","a9e8edb5d8ae2f43a6180a823169cfeb"],["/archives/page/4/index.html","724c7a4a7ce5f872c456754c610a276d"],["/archives/page/5/index.html","fad547b35799b1e588e5f1d8c58a7e12"],["/archives/page/6/index.html","c339aad0c363ea81c1d54ed230d61edb"],["/archives/page/7/index.html","34974754b2357efbcf339e48f864cfc5"],["/categories/JavaWeb/AOP/index.html","0e2499f74ee8a22643ab0d60f2f67751"],["/categories/JavaWeb/Bean/index.html","5714e04579f8225d7039071349a17226"],["/categories/JavaWeb/index.html","8487d4ef0207231056cc2fb8c25b3cfb"],["/categories/docker/index.html","fa13bce2e37eba3444944c86c3b92cc5"],["/categories/flask框架/index.html","f16013fce6737b0a605c0ddfa7eb106c"],["/categories/index.html","054e5f7c0a9b94d6d9128db8e36ea062"],["/categories/mybatis/index.html","621b414be0d0cb8d4a1d9d69f4401b22"],["/categories/rabbitMQ/index.html","675743072e87195430960c0251b0ed2b"],["/categories/爬虫/index.html","ee8676a2225f5916efa347bc15744b90"],["/categories/算法/index.html","d54398c6a2aa6aed6585209aaaf6b722"],["/categories/算法/page/2/index.html","a1da49ae131f9d96c249f493e7d3386e"],["/categories/算法/page/3/index.html","8b9b2cef65f459a8b2e08d6b30f34a54"],["/categories/算法/page/4/index.html","661a8d4344a99c2ad9ee08ae13ee19b2"],["/categories/算法/page/5/index.html","fff1bed6c402d626cce78fad871af167"],["/categories/算法/二分查找/index.html","485eeb87fc7d5ee0849c7f336ef7fa01"],["/categories/算法/二叉树/index.html","f8d8bdfa432cc8205904dc7360af4ff1"],["/categories/算法/动态规划/index.html","3a5ae7e015029fb085d082297647a32c"],["/categories/算法/双指针/index.html","c399cea50ff2fda8fa44ac768140825e"],["/categories/算法/哈希/index.html","68267e0aad26132da1c78629fad41da8"],["/categories/算法/堆/index.html","47370da50a2ea663a491b242de4a0790"],["/categories/算法/子串/index.html","ba99408d2a8b2221169e3c6e9fcdeea9"],["/categories/算法/普通数组/index.html","9c1ed8c5abc1401bec48630dc62c1391"],["/categories/算法/树/index.html","b3c2ea5e4f12b9786f224b663e48aec3"],["/categories/算法/滑动窗口/index.html","53b52f604658ac20175bf5bba4bc22f8"],["/categories/算法/矩阵/index.html","504d3abc220096e24b34e3afd51a1b58"],["/categories/算法/贪心算法/index.html","c4d5e3f07c7856b0aba9a7283a2040f3"],["/categories/算法/链表/index.html","de9949927420fd62c2ae985b01c28ddf"],["/categories/算法/链表/page/2/index.html","d0870c63318acf19d4d18ef1c22b7ed6"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a5ff2c60aa2a4601853d054167fd5d3c"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","f6d09848cc006e970e7848fa4cc897ac"],["/page/3/index.html","6128e30add2729974d19a222e397abdb"],["/page/4/index.html","1619588c1f0a5f6822b165a5ad99265c"],["/page/5/index.html","151c0a0bb9db502e12876578e5da9970"],["/page/6/index.html","82908f52f30bc645bf705aa0af9c6ce4"],["/page/7/index.html","26a5bcb86da5e076653ae61e60458d58"],["/pages/JavaWeb/AOP/AOP.html","b5cd230d915ae4636094239c52ea9114"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","3472b4fb285fcd492e342b34e78497f2"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","bce9b13a2e174ac051768c5587f2bcdc"],["/pages/JavaWeb/事务管理.html","0e700f64f84d9bb1a61396390614cb6b"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","180ab9210540262a2559ae7ead4c58c7"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","f181c5173d8596f21729bd875f5bf110"],["/pages/JavaWeb/拦截器.html","bf6ee008c990216bf581690aa16beb24"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","18bebdd2de907b879ab197e490c6b4e4"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/docker/docker.html","7044f2b7a3da401d25f25640e298d703"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","ab54da6e6f6727769180e6bfe96ad49c"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","3d7c9a8568f8c21747c91ce03740e548"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","6beee7a22abeefb711dcb709e600f947"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/uncategorized/队列.html","cdf1e433ab7eec66b0d1a20eb7a7852b"],["/pages/爬虫/分布式爬虫.html","4c863557fe63d962cc2eed35bafe19a1"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","381f909bbc4a5cdb7e3c64d35ffc6206"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","948abac728e7a91f27dde097800b762d"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","867bffd40e6f905bb9921b70c478db74"],["/pages/算法/二分查找/搜索二维矩阵.html","6fda2f57c1d8d95664daa22780eb3ab0"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","f5bb0c85db02abd3f4a37d4e75d863c3"],["/pages/算法/二叉树/二叉树的最大深度.html","60293efdd34d96af7c5188647dd403ba"],["/pages/算法/二叉树/二叉树的直径.html","655aa07189bd3b93c22df2b4cc0c90a9"],["/pages/算法/二叉树/二叉树的遍历.html","b93cf4ad578afe88a6224013e577df31"],["/pages/算法/二叉树/对称二叉树.html","d4c1ed705890bf0f4621d4b4e103c1eb"],["/pages/算法/二叉树/翻转二叉树.html","c7610e5b12715df6af21fcb4a749699e"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","f996263e1e310c7aba4bb8ddefcb75fb"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","452287334a724eed7622c5d778d1e1ba"],["/pages/算法/双指针/接雨水.html","0fbcdfc1f92df491d11304dd9c8ca992"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","29855f10586609a69f9d424a7de4309c"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","41d2ddb97ce1424c54cf316a449feb3a"],["/pages/算法/哈希/hash表理解.html","4455623c8d3429f20fa30d1dea6cda51"],["/pages/算法/哈希/两数之和.html","96a838bf37e7156ee73dc35cb09eb5bb"],["/pages/算法/哈希/字母异位词分组.html","031f999343c7e900d3ebff9d22f3240f"],["/pages/算法/哈希/最长连续序列.html","3a4b7dfdf1a14bd44fa4a9e80a89f9e9"],["/pages/算法/堆/堆.html","c1e2664ff3478771fc8fdab7afcb3875"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","cd012fc4cdc07c4fe8b4847e7dfb3548"],["/pages/算法/子串/和为k的子数组.html","a0970f9b93616ae694aab4fed8ed82f6"],["/pages/算法/子串/最小覆盖子串.html","d8658b6ef4781f88d1740913a1ad8bf0"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","ab134ca542069a544118743a4c3fc4aa"],["/pages/算法/普通数组/最大子数组和.html","45ddf4c20c2cbbbd7b9d136dfb3a7d38"],["/pages/算法/普通数组/缺失的第一个正数.html","7863cbe2fdd3f7b13b91778922965bd9"],["/pages/算法/普通数组/轮转数组.html","fa318570a0a9622801813c8ccb09a5de"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","debc2dc6f512ac90762a03782ff43887"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","a303b6cf5254ff82ecd5d4dd530ed933"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","e9cd2c0b8327eff7722860bd5fbf7e86"],["/pages/算法/矩阵/搜索二维矩阵 二.html","45fba914a2a9191b77b027bda458c106"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","17058ef10616a856d5461129ce58c2dd"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","62e8b91f896c8d6604bb55083519a58f"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","ff84549aec50898f3763d056e8b7270c"],["/pages/算法/贪心算法/划分字母区间.html","3d8d4f812e3df65d86484485f1d26ac0"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","44bfe30da9a9aa77cfcb73c586eb871b"],["/pages/算法/链表/k个一组翻转链表.html","e1e0db02582385908f6a3eee4d8755ee"],["/pages/算法/链表/两两交换节点.html","c91cc3931b5467b4644d981feb25e167"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","a6ab49fce380bdc13fbc1121bdbc6884"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","adeb99048884147a0a6b77260dc2661e"],["/pages/算法/链表/反转链表.html","20f82e9ae6beb4ff4b59c19cc5353f59"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","988ffef3d0539aee8f67738681a757b8"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","e8506ca4fd2225e912aacd64fbd21ae9"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","578b4a4014f5dc797e65300ac8bdea0b"],["/pages/算法/链表/深度拷贝.html","fd9b7c24f6bd0d5991363214ae054bc4"],["/pages/算法/链表/环形链表.html","b048cd569803a69c87e721d63dbbc31e"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","a0d2ce3e8c342b37e13b71108b57bb63"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","f27e0899d5c7c9e80e01e046026d5897"],["/tags/AOP/index.html","30802c276de2ebce0af568cef125bc09"],["/tags/Bean/index.html","af06688dcc44b531f46cddf24a716f43"],["/tags/JavaWeb/index.html","b7d734466d1b1a109b83bca7a3fc95b2"],["/tags/Python/index.html","319a2029eb60acc6d2dabf3edd13150b"],["/tags/docker/index.html","52acd567bca2961bf670a0fe8a7b4b3d"],["/tags/flask框架/index.html","50dce17148a3d2908d978d34475c4019"],["/tags/index.html","cad67623c07afb7c0600132ba89fccd9"],["/tags/mybatis/index.html","b8b13a9c02a48a6e852682b941fb6210"],["/tags/nginx/index.html","a7c86d6ac3d942c85e1f9e7056b3bf25"],["/tags/rabbitMQ/index.html","80cd56dcec82f2b8a732817e2cf60d2c"],["/tags/事务/index.html","8d7f7d91ba9164e498551ec995016662"],["/tags/二叉树/index.html","30d8bf15a868263d9d9f4d7149c7ecdb"],["/tags/会话技术/index.html","e0d942149b6741195d5f09b4ca673e2e"],["/tags/全局异常处理/index.html","557785f3f4c297af0ce96bd5a6013d81"],["/tags/动态规划/index.html","8cedf8fd5f5bcd8cbc7de449976a5b4b"],["/tags/双指针/index.html","e2b29f8a7cf9cbb573a5ff9f5637564c"],["/tags/哈希/index.html","9b704a72758c87fefb810ebd9be0b692"],["/tags/堆/index.html","0e66289216a38dbbe2c5d39d494971be"],["/tags/子串/index.html","bcf669bfce14349a72e8f5988ca1fba4"],["/tags/拦截器/index.html","345cd55015655b9f7ff317d08f45811c"],["/tags/普通数组/index.html","15e35fe6a6c573c69b1af5f46a32af7f"],["/tags/树/index.html","71b4626589b5b52eb8154d43e92b22c8"],["/tags/滑动窗口/index.html","c0c0273f8d047011ac4875957226ec9d"],["/tags/爬虫/index.html","ea5580dfbd60f71db41316e50265b4bd"],["/tags/矩阵/index.html","70fac858710d0ae629aad68aabe37f1b"],["/tags/算法/index.html","b996563445ce5167b55f18120f2b90cc"],["/tags/算法/page/2/index.html","b81e15c809837c9893bd19006a88f91d"],["/tags/算法/page/3/index.html","a2350aa1311166656e98bb923a8ae7f2"],["/tags/算法/page/4/index.html","3deebcb98f7f9dcf00691faff9e29c89"],["/tags/算法/page/5/index.html","3700b09fd8579aece7a2a7aea6a0c0ab"],["/tags/贪心算法/index.html","e8a193417bf2ab4118000591a3711816"],["/tags/过滤器/index.html","c5f07e5fd0101bf971be2927dc847c76"],["/tags/链表/index.html","fcf2909a05aff2d9f3ac9b635cb21970"],["/tags/链表/page/2/index.html","07131ad449ea569bc23940e278f8f01d"]];
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
