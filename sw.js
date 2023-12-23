/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","b15f77f47173aa52a47e3997c057d35a"],["/archives/2023/05/index.html","6128f0e558338d86d8c24690225234d4"],["/archives/2023/06/index.html","0a7d8068f3bc40c0071f7407bd27da19"],["/archives/2023/07/index.html","ce94f38e38c7ca8ca2d8b4d4b2fe6a41"],["/archives/2023/07/page/2/index.html","625c3fb5f40119f33aeb6bf0dc9248ec"],["/archives/2023/08/index.html","ddd2143fd3590d39d8911881a65aa657"],["/archives/2023/09/index.html","cea8be6af225c79e8bf68f91c0e603bc"],["/archives/2023/09/page/2/index.html","b291a7bbb55bbd57439851ff56334b55"],["/archives/2023/10/index.html","f3a61f4a6d7e96e885068ca29032bd57"],["/archives/2023/11/index.html","9deb8b718545326ab29cb60f203c645c"],["/archives/2023/12/index.html","0cbd953b2338752258db39d1079cc89c"],["/archives/2023/index.html","bcc1a8f076c755985334f910691e7363"],["/archives/2023/page/2/index.html","097074dbc162218a8a6318e3ca81d24f"],["/archives/2023/page/3/index.html","255d2a81cf75d2a4c079fca48542549e"],["/archives/2023/page/4/index.html","a102fba662992efa60529ac53ffaab27"],["/archives/2023/page/5/index.html","ce18e2b69f1c2ad61dfa387774707b72"],["/archives/2023/page/6/index.html","488ba2fca054b33f1205facd4c37035f"],["/archives/2023/page/7/index.html","3410b5d0ef7959c80a5567ba44f726cb"],["/archives/index.html","a4597e5efd8091185f10fb15739bb7eb"],["/archives/page/2/index.html","9396bb2845098ef54cb55478f1bed3b2"],["/archives/page/3/index.html","61e3e04574007849bb983e76067feaee"],["/archives/page/4/index.html","e74d4d87f5923f1deb08253358ab717b"],["/archives/page/5/index.html","6ffca9da2dc28084b68fbc636523703c"],["/archives/page/6/index.html","cb033ba9eaea91c5a592128cc0eb60cd"],["/archives/page/7/index.html","09fe15cf83ad14ab7cd05c13f6f525c9"],["/categories/JavaWeb/AOP/index.html","e6073010d3f04bd1bc9fd0a4b66dde14"],["/categories/JavaWeb/Bean/index.html","6bd25a68676a577cfd8652f81cced543"],["/categories/JavaWeb/index.html","fac88c47313273735a191e67ca66fdd7"],["/categories/Mysql/index.html","74b5cb1ea45f00ad566350bf3268f538"],["/categories/docker/index.html","cad243813fc855837aa5cf3c5abcba6a"],["/categories/flask框架/index.html","c80555b18b96fb0f0920d83d658c01f0"],["/categories/index.html","6213bb7d48a56dc1b4ade6544ed00621"],["/categories/mybatis/index.html","05761da384c7e6092210ace58f2945ec"],["/categories/rabbitMQ/index.html","2c995cb7ec33b7a21a8960e76f137e73"],["/categories/爬虫/index.html","8682bbbe6e79a5b7be2b418e8683105e"],["/categories/算法/index.html","baa8799839ab9a375e9998218c6378c3"],["/categories/算法/page/2/index.html","b027a16f426ffb959acba6ab48aced60"],["/categories/算法/page/3/index.html","7ba7f7aa94ce278f1bd391a1757a428c"],["/categories/算法/page/4/index.html","ad67946d1ac3fce5358bef0d5fb65216"],["/categories/算法/page/5/index.html","940ac52be707872f8a766d2094c1f058"],["/categories/算法/二分查找/index.html","c8a774da49632a6ba2d0015971b507a6"],["/categories/算法/二叉树/index.html","263608953206636eb3cd7b44c0f0d3d6"],["/categories/算法/动态规划/index.html","8d2c06ef849320b0a85ed792b78bb458"],["/categories/算法/双指针/index.html","b18c07444d88c06c986ced24db4624cb"],["/categories/算法/哈希/index.html","3adf3b2dd0b32ad4a3e8a40670933603"],["/categories/算法/堆/index.html","cb9055d4506469610b758dd82710ed97"],["/categories/算法/子串/index.html","01055d9f7e5816390fb37b4f5f6af497"],["/categories/算法/普通数组/index.html","0e9c57e0ad84121bb34e4c79b692919e"],["/categories/算法/树/index.html","2b30f6db73d1b9ac0cccd011cb2c3fa2"],["/categories/算法/滑动窗口/index.html","58182ac3a413731a5d0c9043371a6382"],["/categories/算法/矩阵/index.html","a88a043cb60a2892bc4f91d985ae2bbb"],["/categories/算法/贪心算法/index.html","a1e8ff0c419424fd6c8960db25ac575a"],["/categories/算法/链表/index.html","cb773ff722ecf46cd8d648c45efd6d23"],["/categories/算法/链表/page/2/index.html","a0da057a064e449f56ee379aa26f286d"],["/categories/软件架构/index.html","671659dacf95c6349732baad8f41d2e0"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","aae9ac803944897bbc7b75c5bed1a726"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","e841e2cc3057ad59a1a047b57aaafbc1"],["/page/3/index.html","a44c219bf685017105b91035446a9de0"],["/page/4/index.html","713d057176b7b9e673aa9e2a22f39d96"],["/page/5/index.html","6b93fafd0659713d72245eeb00c4f1f3"],["/page/6/index.html","322e4cf7e16805fc57f074982ccebb8a"],["/page/7/index.html","4d84bdfc7efcdc7b72712df35b21910a"],["/pages/JavaWeb/AOP/AOP.html","91dd3c3b1a470b4d707f4eb076a2a0f3"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","10b24fc3b365ff4a05042edad0a263ac"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","1228b3f61e235e2b5923bf7bfe7c821b"],["/pages/JavaWeb/事务管理.html","e369d1627200c2165b00964db334b3ac"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","446aa1180cf52a3a85c23dfb9c61a21a"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","3f235dd03c5b9f6cdb74292c264e5f9c"],["/pages/JavaWeb/拦截器.html","7a73215c7537d0836e6875272028cacd"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","391b818d8084def77a977e82d5518b15"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/Mysql/count的计数.html","2e211ca62db861fb7bc79e70be1ba90a"],["/pages/Mysql/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/pages/Mysql/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/pages/docker/docker.html","e776f9b3480045fc0f23b07817560e4a"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","c6adf32d4fe152367ec65c6fff9396f3"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","10c3706bbb2eb46dafdc2f446f668956"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","d8aaddecea140098d003c13b148cb68b"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/uncategorized/所遇到的sql优化方法.html","0e80b60985d3a5bace95e3952dd702d5"],["/pages/uncategorized/队列.html","cd6058bacd7c6307c0199ce1c00b3d93"],["/pages/爬虫/分布式爬虫.html","46df929be692c272673dc36d5115e20c"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","c5a270f1a8372ee07acd892ad9b17850"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","b472db1c360ebe1c50c9d63b2c8b6056"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","db4490df65ec5c259d7c25b22011071a"],["/pages/算法/二分查找/搜索二维矩阵.html","5211be619a414faf9afe1f0252a61540"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","5d4dbd7b2d86803d2b9848fe18c15fc1"],["/pages/算法/二叉树/二叉树的最大深度.html","db664790a613bf7ccc254e64809a063c"],["/pages/算法/二叉树/二叉树的直径.html","f8d9d5a04a68d1bea8a99ba6e909ced4"],["/pages/算法/二叉树/二叉树的遍历.html","4f20aac52584a7093eea7e2bd7e0bd6b"],["/pages/算法/二叉树/对称二叉树.html","03980d76665a211e177c4c961cc84f2e"],["/pages/算法/二叉树/翻转二叉树.html","320f18ae321a3756c77cc78374abff9c"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","f7cb0b028ba469bb0ece20bfa5e9ff76"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","3f81149092392fddd2d1f65c2f3659a4"],["/pages/算法/双指针/接雨水.html","6d53f4e90e8adcb9c8f48f53ab7d0439"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","e988893c2cea7171e41302a9a7f51425"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","63cd0fbf7b7cfc70210d17e9988559b8"],["/pages/算法/哈希/hash表理解.html","58db123783a84e858d75b3bbe9916bce"],["/pages/算法/哈希/两数之和.html","0f87d2539ac1c031fd29500921433919"],["/pages/算法/哈希/字母异位词分组.html","ffde26bcdb3799bdb644c6d564edfd01"],["/pages/算法/哈希/最长连续序列.html","0b04cd257bfd7b259ba2c3b64a73c20d"],["/pages/算法/堆/堆.html","045af7c6bc09c1f0e65291e95a3a1594"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","d0461cb6044012f5fb24bc2c29482ab9"],["/pages/算法/子串/和为k的子数组.html","62646947f060fffdfb1dfcf0ad64a6bc"],["/pages/算法/子串/最小覆盖子串.html","ac1030f5a0ec3e4a9f45af4ef579c999"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","535acc0b230c317c875d5de77cc8563a"],["/pages/算法/普通数组/最大子数组和.html","2757b3ce7a3e808d971bd2fbd980aada"],["/pages/算法/普通数组/缺失的第一个正数.html","32d7dffae326efc59ebbebdfb00fe2de"],["/pages/算法/普通数组/轮转数组.html","56b3a3b7d1d524751b9dea6b6da46d7a"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","cfb6d8c48d74f62867506457a4a1f599"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","3a20a5db741431231ec6915e0c58df62"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","c9f9456883b124d5fee74f92decef367"],["/pages/算法/矩阵/搜索二维矩阵 二.html","71e297df46c4a971712127b51e0c17c9"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","ea4a833e4a46e9f773e3a92eb87c0985"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","2dbbad0db76318f1ae0887dd10400180"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","dc267d552bed8b039f856a91d1b3fc01"],["/pages/算法/贪心算法/划分字母区间.html","717ef23097578bf9df083166e80af5e9"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","a3cc613f8a082eb3a332792c1c434198"],["/pages/算法/链表/k个一组翻转链表.html","01c7801f6f6fb49fea7ee0e5540bdabd"],["/pages/算法/链表/两两交换节点.html","be006e6ce5060d3e97068bd2f75b901e"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","8700b66ddf5414afee70f3f6543015ea"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","410df644c7880ffc82865ed7fca90c2d"],["/pages/算法/链表/反转链表.html","03f890b2a366daaebad3225344585626"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","c6eefa75493b2250c02954fd8dee2051"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","ca53042ccf9ba54862ba241838f41d9d"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","1e9591848f3b32a777be12eb5051bc4d"],["/pages/算法/链表/深度拷贝.html","96212f1f58c33e1c465f9a5281bfb333"],["/pages/算法/链表/环形链表.html","722f4de5e051cb4847ce656978c02f64"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","53dee33f58b49c109bba61b4ac61be25"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/软件架构/软件架构第一章复习.html","be67b4994ced50bed55079fec0c9b7b1"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","329960ec62d30a9a1a62081c12646cef"],["/tags/AOP/index.html","ab2cf3912435caf5599c710afac2e2bd"],["/tags/Bean/index.html","5105964eb5c16631d380f3da5ef72477"],["/tags/JavaWeb/index.html","7682002dbad5048b25e83d2fe7bf1ab4"],["/tags/Mysql/index.html","fd82536f825598b5a96b199ad0263c0d"],["/tags/Python/index.html","546295aed80b0b4ba339c310cca15634"],["/tags/docker/index.html","89c84941aab1ca139a313cbb4f6da576"],["/tags/flask框架/index.html","e879f3293ff3f8e11f32c72212105970"],["/tags/index.html","25399264ba7d9675156f6dc396aad729"],["/tags/mybatis/index.html","0160b12ac9a675621f9da61c618fa63b"],["/tags/nginx/index.html","cc3df89457ba63cf13638f32cb60f56e"],["/tags/rabbitMQ/index.html","8e480ebce53a2140e8c856f97c4999dd"],["/tags/事务/index.html","f6dc5152dde62a05a14ed23c277a62f8"],["/tags/二叉树/index.html","08503bd6a897d337225a01f53bf80529"],["/tags/会话技术/index.html","e9390b8e6bd90663a780dc5522ec6549"],["/tags/全局异常处理/index.html","7dd0b9cae6070094ec055f10992fa290"],["/tags/动态规划/index.html","52ec480bd35637d5a4021eea1f490690"],["/tags/双指针/index.html","21534886cb35717e79c38d0c92e095da"],["/tags/哈希/index.html","4588edb272c440fd642fc6a5010dc52d"],["/tags/堆/index.html","344c3af65963a80b23a44d6cad7bf11f"],["/tags/子串/index.html","a34f84b679801fbcfe6f48885f17090b"],["/tags/拦截器/index.html","55501e1ba379037e0796a8f6f49cb975"],["/tags/普通数组/index.html","9a78a707ead12f109d160d32d06c4235"],["/tags/树/index.html","4493e67ef2fdfdd1430db52c6f064905"],["/tags/滑动窗口/index.html","1d0eac812d4d0b6808a92c45dac18a58"],["/tags/爬虫/index.html","4a4b5068f7bbade28d75f9b5c4ded645"],["/tags/矩阵/index.html","99403138c16cae3be87d0e1acfed0c73"],["/tags/算法/index.html","5cdc33cb44eb498209dc3c0b3fceca81"],["/tags/算法/page/2/index.html","84cf75a91cd14f79bae0997a5d1afb1e"],["/tags/算法/page/3/index.html","0b67b43169f72c765bf2b7154a51ead2"],["/tags/算法/page/4/index.html","7f802fe0d96d265f7322bb3d3a5e376f"],["/tags/算法/page/5/index.html","881c04497674129a6c9422882ac84077"],["/tags/贪心算法/index.html","eb4ab866d4cf28ba8247e21d8c414010"],["/tags/软件架构/index.html","de494f077871e603211951630e82476e"],["/tags/过滤器/index.html","3a010c255819625fce2246878b044267"],["/tags/链表/index.html","91e04aa1a65ddcd2f20b655beb5b3b01"],["/tags/链表/page/2/index.html","e0e1b448508d94ecb4904db171e683c8"]];
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
