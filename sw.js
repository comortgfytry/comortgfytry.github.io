/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","f569dddc3c470678e977a71ac78c51fd"],["/archives/2023/05/index.html","1d79d157eb0cc26f7547fbec09fd51b3"],["/archives/2023/06/index.html","27e7f99d2470944ecdea701ac4dde91e"],["/archives/2023/07/index.html","c8e96138e2e65fd21862cdc4d7e52b75"],["/archives/2023/07/page/2/index.html","9f9f00bd56dce1babd4e31d7413236b9"],["/archives/2023/08/index.html","615bf9049e4490195f132107d6a576c2"],["/archives/2023/09/index.html","ccc57554ebec01eb42aba6a4ba6089c5"],["/archives/2023/09/page/2/index.html","612873a19d09f21faf427d1727a883ea"],["/archives/2023/10/index.html","eac01911dccc2a055c9c9a06701576a4"],["/archives/2023/11/index.html","d072dd966ac5f59a621eedad41f7984e"],["/archives/2023/12/index.html","abc127e7afeca2ba6dc0dff0f19392a9"],["/archives/2023/index.html","210869981c507c31b6c80f932e3c61c4"],["/archives/2023/page/2/index.html","7c6e020f90be86c86e0afb1a5c934cd6"],["/archives/2023/page/3/index.html","eec51fe3a409a3ad8105d617011f6529"],["/archives/2023/page/4/index.html","1635db28ffe2e3868181dda52311d85b"],["/archives/2023/page/5/index.html","5836eb38703e0f6ef3ef6ca04b52d7bc"],["/archives/2023/page/6/index.html","28a9e9217408870a37eb17485b222604"],["/archives/2023/page/7/index.html","51d596216b8daf5de4f1c055a7f1afc3"],["/archives/index.html","41374e26863729fd495997fdcd3ed3fa"],["/archives/page/2/index.html","0d4c65386b339623c2c2c0715fb659d3"],["/archives/page/3/index.html","a28362f94062971ba804ee75d43dd1c7"],["/archives/page/4/index.html","e4c56bb342065e3caf86024fa3d73390"],["/archives/page/5/index.html","5a5c14f49c44d5aa9ada4574a6505063"],["/archives/page/6/index.html","61c0709ac7fdcb34931fd77bf6f5f05c"],["/archives/page/7/index.html","dd3d6fb7141fa579de8ba291f19b2b93"],["/categories/JavaWeb/AOP/index.html","b24d2e04c5e4bcfdda1bbb5b1d69285f"],["/categories/JavaWeb/Bean/index.html","44dd7966e937f07e60d59a1f523b32c1"],["/categories/JavaWeb/index.html","e8bfdb06cd6c9adcd072eb09f2085f64"],["/categories/Mysql/index.html","c827b96a50f5bad407c464b0f50770a0"],["/categories/docker/index.html","4adb458604bba6fccf3dfdfefdb86f84"],["/categories/flask框架/index.html","f3b89e9bbed58e88a7a0fbe4f98f95c7"],["/categories/index.html","d89077b6c0dd54b26415ef6e23dc10a3"],["/categories/mybatis/index.html","13f91dd4a27216554096c0b2e59045e0"],["/categories/rabbitMQ/index.html","03606bef6a40d4b66d369c7b2daa743f"],["/categories/爬虫/index.html","67b447c3063b30b9563b0ef7a927c732"],["/categories/算法/index.html","6fc78aadad8218dc000ba0594764f558"],["/categories/算法/page/2/index.html","27a3a5012b206e1a0b6663946889d148"],["/categories/算法/page/3/index.html","4180e9d5f8ebb1948fc277525a94f516"],["/categories/算法/page/4/index.html","1fc0f276b468849e3eb9c286567b01b2"],["/categories/算法/page/5/index.html","e92872b45f6536754d8c0fa2a6781791"],["/categories/算法/二分查找/index.html","16d906165113a71471dca05ff983d2b4"],["/categories/算法/二叉树/index.html","94bad5ef52d660fa8c5b985101b5630f"],["/categories/算法/动态规划/index.html","de6e57fed10584fe1a0a0b561f9c5213"],["/categories/算法/双指针/index.html","36a3d94a5eb4c7c8afd57efbce3c1fda"],["/categories/算法/哈希/index.html","79042f474dcf8cc66fa85c5dcbb0c367"],["/categories/算法/堆/index.html","f44bc26464992612e75d0d4237802db0"],["/categories/算法/子串/index.html","fadeda721e026dc1d4e51ca6fd604aac"],["/categories/算法/普通数组/index.html","edf07021291d53d8c1201035d1c45130"],["/categories/算法/树/index.html","ea03d45e1445eff380a5058fe0dcbf88"],["/categories/算法/滑动窗口/index.html","6949ebe21bbed736e5fcbebc629135de"],["/categories/算法/矩阵/index.html","19404ab20382e10a0bcd8a573db9def0"],["/categories/算法/贪心算法/index.html","518b2cd2e5f24881933b87b0392af77f"],["/categories/算法/链表/index.html","6f37c2c117c125218a100cbfef82dc11"],["/categories/算法/链表/page/2/index.html","11a034df2778c71c0bd2ef4a479726ad"],["/categories/软件架构/index.html","d41958701397271c1d8e10f73f4199c7"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d690e4d6ca508d05235e3a4c476459ed"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","dbc49b143a6cfb35370d2da8c3973598"],["/page/3/index.html","5a19fb4fc8fc6d0f0de30132fc4fbd1a"],["/page/4/index.html","d47198adef3b38197e962d226b61d44a"],["/page/5/index.html","7baa315e43d8d9b3984b770d980e5774"],["/page/6/index.html","a4c2e65bc0b5b35619a1568eb996ec9e"],["/page/7/index.html","8c281e676bd54dceea418d65575672dd"],["/pages/JavaWeb/AOP/AOP.html","599d8e9a82638ff943fcff58c74f380b"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","4d0663ec57d7da814efd367cd8cb1fa6"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","bb7c0dfcc0c083b5a4b415506cec5623"],["/pages/JavaWeb/事务管理.html","8f6b313897364b201db9efa19da86e32"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","a6cbce37ad7d252e03ba26bf6e54dbec"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","1fcd586ea40cd5b2dceabd0182bce8ae"],["/pages/JavaWeb/拦截器.html","bde307ff3bfe2c7034c71dd9604fb625"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","e091cda2f80f74a6159af11e59d4d45f"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/Mysql/count的计数.html","ab4fba8f53eca96910bcecc7227d3d6e"],["/pages/Mysql/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/pages/Mysql/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/pages/docker/docker.html","32d0f5835f193b6c48bf469f9d2a3401"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","8676736a5fe82f04bd8d18c18c86d576"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","6761c75704461dbd9595caa355b3df0b"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","d1b8779a0b8bcfd414a182dc20a11d65"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/uncategorized/所遇到的sql优化方法.html","bdddb52351cf860441c647f5b8591f4f"],["/pages/uncategorized/队列.html","a84756d6c9a199a60062df303046030d"],["/pages/爬虫/分布式爬虫.html","1c1a69cd40b60fcedee4f9e21560cc9e"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","16c54068f47ac3641c6675c210e313cd"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","0abd836a50c09989d77e30cad6bf30c6"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","64281c13a628329930f6acbe6526ae49"],["/pages/算法/二分查找/搜索二维矩阵.html","52e443c548f55cf0a22249beee231065"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","53f17c219209feb77b159497e167c45f"],["/pages/算法/二叉树/二叉树的最大深度.html","41baea2d47b349a48ed1300c92c93076"],["/pages/算法/二叉树/二叉树的直径.html","dd2362e4ef34504786979143662cf244"],["/pages/算法/二叉树/二叉树的遍历.html","e0f8ba4fd3c2849f3860fe79644eb95f"],["/pages/算法/二叉树/对称二叉树.html","c3667ab2e992f9c76fea75e131c36a95"],["/pages/算法/二叉树/翻转二叉树.html","000ed9fdcad5b02d7f90216abba4774b"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","8a9be3c96639fc6a5898c7bc403e5412"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","c52cc64e3b3dcbf23f527e4fcbdedc39"],["/pages/算法/双指针/接雨水.html","7e5cb8a804e204aebb699233fe143e10"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","c7a3f2c00de2ab22831328fb182ada8a"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","bb54f9196a29d5a2deb088904f50deb6"],["/pages/算法/哈希/hash表理解.html","6fd2676293a86cbe6144eb6d006bbe5c"],["/pages/算法/哈希/两数之和.html","abb3239363e89adf50de294b654893e9"],["/pages/算法/哈希/字母异位词分组.html","5e97658fb9fb648477ec9b500c32b149"],["/pages/算法/哈希/最长连续序列.html","3b7a352936a2b355da3c71dda790414c"],["/pages/算法/堆/堆.html","bb0fdae09778fca9e0761cac04568469"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","78f7e0dcccad383704ea55415f8e0d6c"],["/pages/算法/子串/和为k的子数组.html","ed679357a64b14de58785c634c3fb65f"],["/pages/算法/子串/最小覆盖子串.html","ab5dd4ee5b288781233982e34f70fe37"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","550e03efe27222fea51b2cee806e1610"],["/pages/算法/普通数组/最大子数组和.html","247242f73cf5c2d10d8ae0b9ec552aad"],["/pages/算法/普通数组/缺失的第一个正数.html","36996c0ea5ea55d28001a0e7136d957b"],["/pages/算法/普通数组/轮转数组.html","bb3030784b8bf3354f85a10b1ad63d4d"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","cc533483d14d2e76195719e11f39930f"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","4060ccbd83de8614fe7f40115cc746a7"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","5cc780d26ed473d9688199c00a1354ae"],["/pages/算法/矩阵/搜索二维矩阵 二.html","927ee8cffac60da320f1340bc93fd246"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","8d918c8bd2810388d41bf68deaf48519"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","7045ca78b121212625ed1aa88e878b4b"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","c254c97fc35943710162163f2a253e8d"],["/pages/算法/贪心算法/划分字母区间.html","55b0f2a5ccc18fad3a727f50aab331cc"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","a29ccb7c1f7d8f9b0ea561dfdc3dd751"],["/pages/算法/链表/k个一组翻转链表.html","24be6fcb452ce1fbf1558f07db45f959"],["/pages/算法/链表/两两交换节点.html","958dc7f3db5d9339a727fbb9291bc866"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","4369609957640d0faec13775f461335f"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","2c9b20e0e866083b75c5b5d34be9651f"],["/pages/算法/链表/反转链表.html","2e733407b071c3ba1fb7a5bd0a658a4e"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","15caf5c7509c766ba3c4d19d6f7e4ef5"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","2c1a8df800cec66204b15ceeeafa224a"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","506739d9287f05059797f2aa46310651"],["/pages/算法/链表/深度拷贝.html","59a1d6409ecb11e1e440b6a747cd4d3c"],["/pages/算法/链表/环形链表.html","5d01f2667ab28004ef4b42db26c8ddae"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","fdc6c88ad960d30256d52f7535ed53bb"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/软件架构/软件架构复习.html","890eb651b511b7dc8f353b29b78c900f"],["/sw-register.js","50d8c1b50b458f15e54f9f731a212550"],["/tags/AOP/index.html","bc2ad29f4941a899224660f41d87b76e"],["/tags/Bean/index.html","db7934bfd2d176f5604438c0c72246fa"],["/tags/JavaWeb/index.html","a3813c9fae47f99acecd01c3a30dcacb"],["/tags/Mysql/index.html","9a413a05452dcf15de2ef58e22869678"],["/tags/Python/index.html","861ab964a1eafc6550c449f89bb48f83"],["/tags/docker/index.html","a89e8ac0ade28876d237ffc525924bda"],["/tags/flask框架/index.html","a2af0a701e7df8af274be5beb98b483a"],["/tags/index.html","2241796f25baf403224aabb56c5b54ec"],["/tags/mybatis/index.html","f28aef0743e7f8952f0c68090f0c0b30"],["/tags/nginx/index.html","92539bcf53f27969b78181b383b76ab1"],["/tags/rabbitMQ/index.html","c41ccaa5464d7e07b98ffe554e90c26e"],["/tags/事务/index.html","0b9f5f54eb1f653d62b675e48195e038"],["/tags/二叉树/index.html","0cc4d7ab7774f28f6744a43043ea52e2"],["/tags/会话技术/index.html","efa2636f000d05abd3bac1863922b009"],["/tags/全局异常处理/index.html","0d2bf0dd25c8109891c8a819ca44d74d"],["/tags/动态规划/index.html","801cfdee062da8fbd3bcb3bac420b776"],["/tags/双指针/index.html","1455207d91aa96f015d045e2e2599f35"],["/tags/哈希/index.html","60d0e66caef8995aad5ecad1406b85e2"],["/tags/堆/index.html","b8fa318044d9db2eb7fdc95f80017569"],["/tags/子串/index.html","c4b50e839869022e4cf9ac5ba624abc2"],["/tags/拦截器/index.html","e73d8ea4f0cc09ac1ec39df80001dd23"],["/tags/普通数组/index.html","b5d72a57713dc5cb758bde535a496864"],["/tags/树/index.html","82936689af29cf8ea8e45530fa85761b"],["/tags/滑动窗口/index.html","c54f1f24f3b41d13765b94283b1eee52"],["/tags/爬虫/index.html","96d5a102b000d35955fc6ee2cd8fa708"],["/tags/矩阵/index.html","d0073332d281b297fc6fe63805bf44b0"],["/tags/算法/index.html","2141dfb79970a6a13e49e8f014ea3919"],["/tags/算法/page/2/index.html","c8e680b4798dc0c90a058b61bf6503f5"],["/tags/算法/page/3/index.html","7369ebca6da5a11261c885a36a7dee52"],["/tags/算法/page/4/index.html","7f27fd4d4179727aff01bf132e917a3c"],["/tags/算法/page/5/index.html","8bb1727cbdf2f3b66f50e253af203ab2"],["/tags/贪心算法/index.html","6f70a6dd5b0ca5209c70d029d87da357"],["/tags/软件架构/index.html","07e8ac442e8ea54c82ede1ab1dffe548"],["/tags/过滤器/index.html","ca9ade1280f51559974a9f44ba78774a"],["/tags/链表/index.html","99659b044fe4e9553f05ab96fa3502f7"],["/tags/链表/page/2/index.html","fff7f96bfd44eb1151280cd8e58f40fc"]];
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
