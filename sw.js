/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","2d3f496ed974d33e1746a56314934532"],["/archives/2023/05/index.html","86ca74586837162f16ae731c1ac3e197"],["/archives/2023/06/index.html","f30ef8da60252c5f4ff2922c3ce56e6b"],["/archives/2023/07/index.html","6b180450dba113a62318977f137eef15"],["/archives/2023/07/page/2/index.html","48baf8d509926ab808996a050f49fd63"],["/archives/2023/08/index.html","90b8efc36eb42c3f4c96fefb1097395a"],["/archives/2023/09/index.html","758b14dd5df5d40ab1d5dd9d3c4a5d67"],["/archives/2023/09/page/2/index.html","8a922361464f8ea5f9c42fc7a18130d5"],["/archives/2023/10/index.html","0f0876fe57e2205d12f3fb07e33d334a"],["/archives/2023/11/index.html","fe5596864762867ca50e62f3962e5fe6"],["/archives/2023/12/index.html","b501c7b6b8761f359c606e77635b8843"],["/archives/2023/index.html","03d8f2813e9ee1a6b648c5530bf56530"],["/archives/2023/page/2/index.html","123f8764fed4681ad67e256908d1c6fc"],["/archives/2023/page/3/index.html","b20bb74ee5e3d95d99f67f88d44dde53"],["/archives/2023/page/4/index.html","16d6aff8303a806c95a776792c6ea4d8"],["/archives/2023/page/5/index.html","b38f7cf734e7624c7b9970afa881a712"],["/archives/2023/page/6/index.html","ed4b5ec633ae67aeb7fa789207cacca1"],["/archives/2023/page/7/index.html","4e86f0209361d7dc475fa372245f9122"],["/archives/index.html","2dd671915b0eede866a9a2ad2ebfc003"],["/archives/page/2/index.html","b914058c6c076b5c51e5b5eb14824b76"],["/archives/page/3/index.html","9ae6fab573cf7da99c7b4bdef51037c1"],["/archives/page/4/index.html","505981ed8bcdeac8323b6cb00128a7c9"],["/archives/page/5/index.html","c6f024bf4d51eb84cc74be1efcaab5cb"],["/archives/page/6/index.html","64c1477e24e0080c421ea79f6e767d88"],["/archives/page/7/index.html","9856b7e7b6c334183d402f24e4ffd921"],["/categories/JavaWeb/AOP/index.html","cdd3ac1b3d75efb9e8e5c3d3ed056ab6"],["/categories/JavaWeb/Bean/index.html","e504335024a7cbeaed5dd4e765bcc4b0"],["/categories/JavaWeb/index.html","a831dea2ab7f1f946438dc56e14d0feb"],["/categories/Mysql/index.html","0c7d36d9f02c6dfbaba1bd62ad3d33cc"],["/categories/docker/index.html","0921d809071cc7aa3179d9597596ab71"],["/categories/flask框架/index.html","5ce147729cfdf29cd1a7bae5831a3524"],["/categories/index.html","e3bdf46b0a1d71a1ab8a67d2b706bfaf"],["/categories/mybatis/index.html","279b6ed3f31659f08e67795b6bde6b79"],["/categories/rabbitMQ/index.html","e6531023d77a3c2d86889829cd6a4f4f"],["/categories/爬虫/index.html","78ec31ebab84a59d5e0c210eb3d77c27"],["/categories/算法/index.html","12981c4d375eacf3a09e89714fc9f5af"],["/categories/算法/page/2/index.html","87a03a04044ea83a207cfa2e310e2d4e"],["/categories/算法/page/3/index.html","77cc1ce7bc2823c98aee5dc451759c8f"],["/categories/算法/page/4/index.html","fdf51769ee3647136ca863d725e4a2b7"],["/categories/算法/page/5/index.html","512f730245a746f32ded7a53bb6a6ec9"],["/categories/算法/二分查找/index.html","664ba176c7f38296d5216ade73c5d68c"],["/categories/算法/二叉树/index.html","5b291b94c151fac224528ff5e1e71e9a"],["/categories/算法/动态规划/index.html","301e9ecc967f3348ce65b8e6cb0b83ee"],["/categories/算法/双指针/index.html","dfbf88ab3cbb777d512feb4bcc2bc8af"],["/categories/算法/哈希/index.html","516252dc8108f4b52d6e84d758c953c7"],["/categories/算法/堆/index.html","ae81b9a3559cff136eaa705eb7e6b78d"],["/categories/算法/子串/index.html","25210dbebf0a3e71353bf1e1da4ed930"],["/categories/算法/普通数组/index.html","41362d6f594edd2b4a9bcc3d2bd61abe"],["/categories/算法/树/index.html","9a921828bc2c0f0b140d3d365b90e753"],["/categories/算法/滑动窗口/index.html","24296ea05f8729fa12b987f6c6663ca8"],["/categories/算法/矩阵/index.html","58db0b6e475ad438b07edf47e48bc2d2"],["/categories/算法/贪心算法/index.html","03bb0a732217ca1aaa78b293103b9014"],["/categories/算法/链表/index.html","aaa1c0ec851dd473526145bbdcc59e64"],["/categories/算法/链表/page/2/index.html","18e1844c08799c9a345a0cdb117b08c4"],["/categories/软件架构/index.html","ce95045b0e61f0ebb456e6d29f22d0b5"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7d59057f384b037a0cf3de0ab9d3fd05"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","2ba67917cd86c6ab34901e879c6537b9"],["/page/3/index.html","0349f163b8aaf9cdad8f58661228fa52"],["/page/4/index.html","5e978ec3055439ae7d58d321575e02c9"],["/page/5/index.html","4edaea1a9ad2c4da77fd61dd3c39c3df"],["/page/6/index.html","5864e0c88dc09f7fe91b18ea4d49510e"],["/page/7/index.html","fe2ecc086df4fee63929d0699b20d0d4"],["/pages/JavaWeb/AOP/AOP.html","507e2f22e796958a2066a922cadd47e7"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","1907366dc2f0d2ad21697f90df782cb6"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","a9218bc1d8dc2acd630ac31f049919f1"],["/pages/JavaWeb/事务管理.html","ee08aa157e2081341d11462952fd9764"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","d2d18532f91e5c6ca092a95fac1ce9dd"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","ca5317e3dc8be33e8a6f0025e0a87a54"],["/pages/JavaWeb/拦截器.html","e6fb2f5dfb99f9f983e841fb8ab9e591"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","e03371024dbccc6d4c42efcbbec50eff"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/Mysql/count的计数.html","7f2eea19862347c55b5cc9e201d24762"],["/pages/Mysql/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/pages/Mysql/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/pages/docker/docker.html","b66e9a0918f61e641258e7538f7efd5d"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","892d9053b258a0ce3c77f8fc69e45803"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","5fff799abe3e6a15eb30be5727072fba"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","d904bf3ffd1945bd7800d60451d1aec0"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/爬虫/分布式爬虫.html","dacd57b677d87bae12ffc314661a4849"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","6283e1dd68b19c3314d6cc2630b3b79b"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","8827d52ed34722a038283690baa1ed5a"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","1a7ad068f20df75083604417f194ab5f"],["/pages/算法/二分查找/搜索二维矩阵.html","e8ea41853c1fd2866cec0352c45354a1"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","0ef889e68597bfcfca80eba62925e97d"],["/pages/算法/二叉树/二叉树的最大深度.html","7235244280fbded29f7f4706dc918c47"],["/pages/算法/二叉树/二叉树的直径.html","1298b23dcea01aae0476351b3cf7a807"],["/pages/算法/二叉树/二叉树的遍历.html","d5975fcc464f55381e050ec50015d100"],["/pages/算法/二叉树/对称二叉树.html","2f48201caa5952807b1c840ff1416b26"],["/pages/算法/二叉树/翻转二叉树.html","5f45a22a00c1d097749de30db282bf33"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","9a06d6435e482a5a71fb722612bac51d"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","9497422771a27395aae8928244a5bdb0"],["/pages/算法/双指针/接雨水.html","6f42422117bcc0282011a5018ec8626c"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","79bb2fc93646ef559a35d8a7e5e0ebcc"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","2961840cfa58ccebc7face5aa7029ac7"],["/pages/算法/哈希/hash表理解.html","6fc43a4f791ddb3f6072a1a7648d3bf7"],["/pages/算法/哈希/两数之和.html","f80a1304104752784dee5709bd57c581"],["/pages/算法/哈希/字母异位词分组.html","cc0945a148b914325768cd383c341dae"],["/pages/算法/哈希/最长连续序列.html","77dfe7ab077502049718bce7485a3159"],["/pages/算法/堆/堆.html","88f256f15d59fb8f87e2bd0164cb892c"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","0faf164f82bcb01d6ff95dad6da7e092"],["/pages/算法/子串/和为k的子数组.html","9a2735792009c4094a44612f08d5d693"],["/pages/算法/子串/最小覆盖子串.html","59b19860b36aa76d37ac9251c3d6553b"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","30f6978faa096b7c7b0d643fa60fe2af"],["/pages/算法/普通数组/最大子数组和.html","1607acf0f2f94f39ba05c3f5799e51be"],["/pages/算法/普通数组/缺失的第一个正数.html","afec85d3054f0a1f37af6a242bdf1659"],["/pages/算法/普通数组/轮转数组.html","0fc2201e24a1f89c7490ba6f27a46e2f"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","af118bcd8b95677cf779c153258b76c2"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","73681242f3f67855bea3e6005822328e"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","c4fdb70bfcef80e2c86fa292997c3699"],["/pages/算法/矩阵/搜索二维矩阵 二.html","0207bd64584e98f5ab7af7538afc67c5"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","4b944d5c102b55ca3932ee3751004006"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","fcc8f8c3f0f2355e924c1a5976af753d"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","59fac1305864c1551feb6765544d6f3a"],["/pages/算法/贪心算法/划分字母区间.html","76701d537b6b63aed57afddf01ac167e"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","ba99426f616626b1e0e928b41a00d602"],["/pages/算法/链表/k个一组翻转链表.html","bea37f7de72b2f68be0869d636e12297"],["/pages/算法/链表/两两交换节点.html","c418e0912c8df1afaa4a60ed2d0dd385"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","cea62d85aeffc4ef3a7fbb691481da13"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","561af846b32fd1ee406def31f8664e37"],["/pages/算法/链表/反转链表.html","3ad37c6da7395247e0e51c82fe0ad75e"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","1ca285dca6b1d7b25202bceef34f2918"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","0fee674f192ba3f16767a9fc80f7f3fa"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","4268ae59f9596007201070fbc9259e1d"],["/pages/算法/链表/深度拷贝.html","9ca51ec46e347b03c747145f6d0aa71d"],["/pages/算法/链表/环形链表.html","6aca2a1b60b6789cc393e4fc384b6042"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","8e67ffca2bd97f9e1997ccd6acfcc1c2"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/软件架构/软件架构复习.html","6ab97a83c4041a93416478975f51b26d"],["/sw-register.js","8e4f707fff5d7ca908758c8b5c1e7fc3"],["/tags/AOP/index.html","a82f520ae1b32b9bdc85f15abc468840"],["/tags/Bean/index.html","92b34326b41abaf77f6c46b8f76109da"],["/tags/JavaWeb/index.html","5c9c73c94842ee0a6aed75286a3b13e1"],["/tags/Mysql/index.html","bafcada89fea337f33793c526edfaca7"],["/tags/Python/index.html","fe39d402713068e94ef7ae5f60acaddc"],["/tags/docker/index.html","f816b51d4056ed6cf0abd1a46e62b4a3"],["/tags/flask框架/index.html","b656fa7c3b31144d69cf058c0ae36d1a"],["/tags/index.html","deeaee7213ae43fefd6b58d7d633f820"],["/tags/mybatis/index.html","e96611e6889249da8d7c70128ee197d4"],["/tags/nginx/index.html","63422645e2717bd5ca874c717345fed3"],["/tags/rabbitMQ/index.html","a730d0d0776a5cfc26ca15f6a5a726de"],["/tags/事务/index.html","10355529b96152ea01cb8a05c43af00c"],["/tags/二叉树/index.html","beeee719697f00a7a360b10c1b4af6d7"],["/tags/会话技术/index.html","badf28862ff4020a9d3815d3816e10fd"],["/tags/全局异常处理/index.html","e53d549876b1a36e5f83b938d512d059"],["/tags/动态规划/index.html","00e5eef2ca11a8c7e4d16be4d4378ebd"],["/tags/双指针/index.html","95778e4fd87668ff5080cd9e6e584016"],["/tags/哈希/index.html","abbbea1021b459d034b13d85393d91d4"],["/tags/堆/index.html","c919141130bc0534c71abd1413dcd2ec"],["/tags/子串/index.html","b21d30657632fcfd647a3d3ef8cf24c8"],["/tags/拦截器/index.html","63e7af8a4cfc375ff06a206efe87d1ef"],["/tags/普通数组/index.html","5dcde00348ff13051eaabbf960caabf2"],["/tags/树/index.html","b3f23e8661772e55d2ebc468b048fb1a"],["/tags/滑动窗口/index.html","7051090d43060ba0cfefb10a671d3304"],["/tags/爬虫/index.html","824894f3c3fc1639370730e186cf950d"],["/tags/矩阵/index.html","fceb267e801997aecd1dd1fd38e43067"],["/tags/算法/index.html","edee5e59694f0b1442dd13ca2cc67c98"],["/tags/算法/page/2/index.html","6bfc020ccc5269233668549c71aa1d89"],["/tags/算法/page/3/index.html","d540d18d98cd79c1e9b855d0951beaab"],["/tags/算法/page/4/index.html","d6956ff5703a176964f0b67334ab5751"],["/tags/算法/page/5/index.html","914ab4d14f902e07421a5a7d92dd14ca"],["/tags/贪心算法/index.html","3f9176c49bda8951e527a40039dbb48c"],["/tags/软件架构/index.html","e12b832545aa81ea14a1dc55ae1a4c1c"],["/tags/过滤器/index.html","c6d365520d7a59d233b1ee1f210e6c5f"],["/tags/链表/index.html","e972fa8d615a3453c3eba2117064a393"],["/tags/链表/page/2/index.html","8fcb6ece197d94772a360ecbd6a639b0"]];
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
