/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","6472646e300f752a0fc4266315bd0c11"],["/archives/2023/06/index.html","90ade81fed31874673bfd8070fc4c689"],["/archives/2023/07/index.html","4f8e92de91f84588786f3d56e81079fd"],["/archives/2023/07/page/2/index.html","dfb03217aed5a0c7b717823885fe6823"],["/archives/2023/08/index.html","fcee364cedd16c49c291643276f8440d"],["/archives/2023/09/index.html","0ef23e32a8b4731ca4bc981b05d0e047"],["/archives/2023/09/page/2/index.html","f12a8ca95efa44a10d02e2ec7c20b707"],["/archives/2023/10/index.html","7f373d9f1f023934e557cbcde1bf155b"],["/archives/2023/11/index.html","1feaee72779d21f387f8ddafb1624982"],["/archives/2023/12/index.html","e09439aef0bb0f255f3cfa3522624f2f"],["/archives/2023/index.html","ff16ed5702bbcf512db71ff9b0d782df"],["/archives/2023/page/2/index.html","e974fd1467641a706607a18c34c5feea"],["/archives/2023/page/3/index.html","619f1f49210a0d9792a22f95ada7de34"],["/archives/2023/page/4/index.html","a5a47afb9e518c553c30a33a58888566"],["/archives/2023/page/5/index.html","6350a28562eb4893ac7a9c52b0a30745"],["/archives/2023/page/6/index.html","bcad8b094f851770c9acc725ffc8048f"],["/archives/index.html","08db440ca5e622a0f5b195df921042aa"],["/archives/page/2/index.html","70512eff3eba428a1a4ec239d5a79698"],["/archives/page/3/index.html","69f337cf349a3c1076f3b7e83ac0e223"],["/archives/page/4/index.html","1244b8471d23b361acaec15fd9e483c2"],["/archives/page/5/index.html","e3278c107a07958516582f71e5164718"],["/archives/page/6/index.html","a45f4164a482069690ae9ee971ca3ceb"],["/categories/JavaWeb/AOP/index.html","1de2650b91818355bab72f356a8c5cc5"],["/categories/JavaWeb/Bean/index.html","046ece30f0d9bdf3e98fde298b078408"],["/categories/JavaWeb/index.html","56db119806f9019ec74efadb5e7dc84f"],["/categories/docker/index.html","c49c78532d71af34b9c8fa2355aa3c4f"],["/categories/flask框架/index.html","3d52332f736b5c1f47bab46ce087c635"],["/categories/index.html","bd4b7764c421875d66276655a40368d0"],["/categories/mybatis/index.html","ae6e147559e3f81affab9b259b059dd5"],["/categories/爬虫/index.html","0b36ca0f97d4da2d1c7bfea5a50d76b5"],["/categories/算法/index.html","2fd4a69eb845ebe53a9af47a62fc3c12"],["/categories/算法/page/2/index.html","54be92a25b3ba175f807793c10df7deb"],["/categories/算法/page/3/index.html","8146c939e626425b86f196f844f8c2d0"],["/categories/算法/page/4/index.html","811f29590d1310eeec7d4fba027313c5"],["/categories/算法/page/5/index.html","dd3e85b9e29cb6167e258b5aa04f80c2"],["/categories/算法/二分查找/index.html","c59f4ebdfb0057de0cdf253ba1103d81"],["/categories/算法/二叉树/index.html","c89516a2da2d17c1f18f254c0844d616"],["/categories/算法/动态规划/index.html","642d1a372dcad726bb0c21948563fda5"],["/categories/算法/双指针/index.html","e40a1588cf5a83e580a51ad123c4346f"],["/categories/算法/哈希/index.html","6245f5fffc905057666b964b8673b1db"],["/categories/算法/堆/index.html","a8d37e2a7e4871046153ac20dc74f0d6"],["/categories/算法/子串/index.html","4b75d1415fd4e262489b8b62ee9029de"],["/categories/算法/普通数组/index.html","c46a2b29adacf99d8ed193515fd9eb60"],["/categories/算法/树/index.html","da283ceb857fdf3f7778dbd8a42c7221"],["/categories/算法/滑动窗口/index.html","7840f37a40c8dc004641c95f33232992"],["/categories/算法/矩阵/index.html","b2d94ecb0110da1b1aeb794d815932ad"],["/categories/算法/贪心算法/index.html","28e8510b4941f56a234ce278cf584542"],["/categories/算法/链表/index.html","fb5b5a06c0d55371d138bbfbead2e394"],["/categories/算法/链表/page/2/index.html","95b204ce7d831dd21574a2eab002da23"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","74625dfc19f7676abd36d4f97d154b1b"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","e04d07ebbfbc4ed855f57a479951ed7c"],["/page/3/index.html","4415522332d138bfc5aaa16f39eab683"],["/page/4/index.html","b7bca2d492d73ac6ed23cd2776c12afc"],["/page/5/index.html","abc6862367bd869441cb8f23254ecbde"],["/page/6/index.html","2c242b808ff13b9b0b662a9dd404bdb6"],["/pages/JavaWeb/AOP/AOP.html","54b561d4e22b64825a05ce5b4aa8b382"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","0c86966d0f714da68fbc888e02f6569a"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","c9d1a477be57eaea0ccb4df8c1c9b457"],["/pages/JavaWeb/事务管理.html","e1c65cc57ad5329823e65e2789c5ed23"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","e927fb3d45e7bb3d5f2a4373860e327d"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","dac121685cb44090706a9689022de1ab"],["/pages/JavaWeb/拦截器.html","fabbd69c2b8aade456c725277b4364b4"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","2a6a5b495ad9cfa5e0f0b902a6e32b73"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/docker/docker.html","6a64f48e286a6027d35101bc2460f1b3"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","292df2c0876c1307ac716dd5bf8bb730"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","7f038e06054bad3aeb25bba80712a379"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/uncategorized/队列.html","139a87cc865d351bf2f42a63268fc60d"],["/pages/爬虫/分布式爬虫.html","c885be7a2092d6064c8ef2401f27f53d"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","6ca84b148773ce03c951b5061cd771b3"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","2856df1f51b59877d9d05856bdf37ba2"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","9643d3289a259e8c72ea1ea577552003"],["/pages/算法/二分查找/搜索二维矩阵.html","9a2d06281eaaa0a7ff83668af49cbc41"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","b20fb8d86092085e3d01acf0f3edcdc4"],["/pages/算法/二叉树/二叉树的最大深度.html","755ffa71f69bef237e6185cf430ae1d2"],["/pages/算法/二叉树/二叉树的直径.html","c3ec075b8b9d1fb304c73b644a754e72"],["/pages/算法/二叉树/二叉树的遍历.html","4a47d3560acb7673401eb532d3b7a974"],["/pages/算法/二叉树/对称二叉树.html","6368bf421b991a6d6e71327cf1525273"],["/pages/算法/二叉树/翻转二叉树.html","025040991bdcab00bdc16fd2836b3497"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","0a0a7d69ebcdfb2ac4040ca83cc6605c"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","ae3b7f1ef5298626d506f7cf376de1c5"],["/pages/算法/双指针/接雨水.html","fe6f3f971d2b014b727a4b280520dcdd"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","9361babeee19261abb8d1fd3065a2310"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","93b48f01721f042f57c80a7d41ff6052"],["/pages/算法/哈希/hash表理解.html","27ef2cb9dbab316d00bc0861e0f07fbf"],["/pages/算法/哈希/两数之和.html","2eb5cdc5966d051031881b00fee3a2a2"],["/pages/算法/哈希/字母异位词分组.html","5535f2a714a08483d8d65b43503fb690"],["/pages/算法/哈希/最长连续序列.html","820e676a6b118885fc124efcffd637d3"],["/pages/算法/堆/堆.html","168b29ec319f170b28f970fef02ddac9"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","6667f7ee65780213484ab8f33990145f"],["/pages/算法/子串/和为k的子数组.html","ecf5cb64f133089e339d2b06b37e638f"],["/pages/算法/子串/最小覆盖子串.html","a59c6a3525edd609e10927426eb4684e"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","1d9a496e68271d3821a9a0b3b33e8235"],["/pages/算法/普通数组/最大子数组和.html","bb6b9c178b85b066a2f142f951a72c15"],["/pages/算法/普通数组/缺失的第一个正数.html","5976054861b23dfa5e79431873168c2e"],["/pages/算法/普通数组/轮转数组.html","5032691a8e5b68e2f8a5119d048ce725"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","b745c8503425530f262f78552ce5e3e0"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","101512766e3d87085cbcb32b1d241f2f"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","c5d7a4d982850f43739cce04a87c743a"],["/pages/算法/矩阵/搜索二维矩阵 二.html","4e1bba469bab296d5d13a530b57f091a"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","ec65314a0272bd02cf8b164fd29c8ab6"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","60c8f29f344f0a12d26a5f8b6a4493c8"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","29bd287119f14dabc5e403dfeb9cb392"],["/pages/算法/贪心算法/划分字母区间.html","2257b3fb96024ee578ddbbee261a1754"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","7cfcdccd457db1b0ec98297535efad27"],["/pages/算法/链表/k个一组翻转链表.html","5a10086af02c087c56f9b9968f069678"],["/pages/算法/链表/两两交换节点.html","4a97255cd8f961d61a969d5d8a0ce4bd"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","7ada880eb93f42372995d2948edbdd6a"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","bab91965dffdb92be2888821dd3d2dec"],["/pages/算法/链表/反转链表.html","dab4ac670cb6ad072ce340b3d60acfbb"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","1613eacbe6505e63874c56b7783c9b45"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","52913cd1a250fe3282f56aea5209c75b"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","acb132c41118479ccc6a3c8335ebe302"],["/pages/算法/链表/深度拷贝.html","987dffff10030c0543aa3838e95689a1"],["/pages/算法/链表/环形链表.html","e7005e194cf705c574ed92e4057621d2"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","b1770e43c18dcef2380b9a3fc0658399"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","2c5d2d713aee70b12dda473c8ff33d75"],["/tags/AOP/index.html","5b7fe092d538c9899b6e108e4b8b1fe2"],["/tags/Bean/index.html","006552a0970776d1d97196a2c72111ef"],["/tags/JavaWeb/index.html","20d4112b4ea5fffded5cda082a1a5faf"],["/tags/Python/index.html","b4880c4630d3c4728b760ae186ac57eb"],["/tags/docker/index.html","3e7070cd495427866400da3615ca3e7c"],["/tags/flask框架/index.html","71ab487b48e803a8e1cf1240bae39edc"],["/tags/index.html","ffa4d0d3d44da9622c015718d75a0efe"],["/tags/mybatis/index.html","0f0389435fa40d91a5ec5ad1d82a7d90"],["/tags/nginx/index.html","f3988efdaa486244ba3626dc2cce8042"],["/tags/事务/index.html","046e184e7630d00077cc68b1c4e07aa8"],["/tags/二叉树/index.html","c4cc989692f3b644a02da4705158b940"],["/tags/会话技术/index.html","5235540024a1f52ca72727d1cda83b46"],["/tags/全局异常处理/index.html","b1fd0b4497669b1677f20090e8fba958"],["/tags/动态规划/index.html","fda8c0e9423b85464f42d35e9c1a42bd"],["/tags/双指针/index.html","2c3b0a69e352561010d68f7fb4b64bb3"],["/tags/哈希/index.html","85f40084e40273dd076df125efadbdb6"],["/tags/堆/index.html","7a4edf2487dbab12385c442b68f9fd12"],["/tags/子串/index.html","13abd648cc743c3bab1349ff12bc2cd1"],["/tags/拦截器/index.html","b62648035c1a38b8b00692d25784d26b"],["/tags/普通数组/index.html","7964bebf969541b483cff49e454857db"],["/tags/树/index.html","fe478306dec5897daf5d4fb0c20085e5"],["/tags/滑动窗口/index.html","718ba733185a61eeb1ae9cb26b838f94"],["/tags/爬虫/index.html","33fe0744df1eadc4c463d2bb6d9a7886"],["/tags/矩阵/index.html","0e4a3d751818489ab418fdbbee92780a"],["/tags/算法/index.html","9b22ab02a4cc3c2ee2f46365d682f490"],["/tags/算法/page/2/index.html","0f9843151fde6de4372b07ac44043525"],["/tags/算法/page/3/index.html","b028e7e4c425e7c5df8d1959ced151f0"],["/tags/算法/page/4/index.html","a4275140b4cad542db3a83aafce2b7b4"],["/tags/算法/page/5/index.html","b54ab924e2bbf270f6ae9ea731098b7a"],["/tags/贪心算法/index.html","320247fe5610de5e9f46a76c1d05ce31"],["/tags/过滤器/index.html","3c241a4af6f321207448f47179581a9d"],["/tags/链表/index.html","eec1a5262f6ef730293dc856a67565a7"],["/tags/链表/page/2/index.html","a7e2ff9eef4260edb90f7591baeab747"]];
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
