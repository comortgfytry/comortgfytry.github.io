/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","65338d95e73a0d272479247c4dee9818"],["/archives/2023/07/page/2/index.html","c9fbf20b6683c5ce6a25640c541a4b39"],["/archives/2023/08/index.html","0b3532c566f68551bdd5bb64a4f205c1"],["/archives/2023/09/index.html","53325dc488105cefbd5dfe22cee62603"],["/archives/2023/09/page/2/index.html","4224c70ed515a16e49288b74e54ea7b3"],["/archives/2023/10/index.html","e6a537452577362de01f36bc79ce1ee1"],["/archives/2023/11/index.html","c42461492667953a89e3979bff5ad806"],["/archives/2023/12/index.html","658d21045560723e7df5d3f95f41e703"],["/archives/2023/index.html","20c30fcd79bdb2628e0bc609b7f1ba6c"],["/archives/2023/page/2/index.html","e6ffadd75e461be8645c5f9fceaac9d0"],["/archives/2023/page/3/index.html","1630fc1214f1de3a9937844c48b1e26d"],["/archives/2023/page/4/index.html","0012a8dc7d702ce94a29367ae857eb60"],["/archives/2023/page/5/index.html","f97b5872e29b8ae40e482b273fdb12bc"],["/archives/2023/page/6/index.html","d88d59dcd9532c016e61e9b44cbc9685"],["/archives/index.html","6209a7bb6765ef2df37f2d05fb49c33a"],["/archives/page/2/index.html","9b25ccd355f0a6c82057d3cd4a14e054"],["/archives/page/3/index.html","d4accbccc4764b5d89826382a6e8ebaa"],["/archives/page/4/index.html","e8cc00f360e927b40f67bc9f42806dfc"],["/archives/page/5/index.html","59f769f091631d62c410265d5a97595c"],["/archives/page/6/index.html","1ff1f95d41bd68986a9908475dac7801"],["/categories/JavaWeb/AOP/index.html","0374b4921dd2848616ad1a2008c5fab2"],["/categories/JavaWeb/Bean/index.html","4c4854a615bcf2b7b7b7179f60842642"],["/categories/JavaWeb/index.html","e094ab423a21266868e11117d90f2699"],["/categories/flask框架/index.html","cce8c57cf3a9d896b06150830d17c405"],["/categories/index.html","3b00163e3f5f042837d529e941664f38"],["/categories/mybatis/index.html","aa426757a3594a44dcf80cfbc5d26e91"],["/categories/爬虫/index.html","9be846b7ec00d1af65ff22240ef38e39"],["/categories/算法/index.html","bdffd311cff13b008add2f1ca5ce757f"],["/categories/算法/page/2/index.html","283c2f14a9dda9ea665a5fe49ee09545"],["/categories/算法/page/3/index.html","da64bc6c088c55f612ad350145d56e78"],["/categories/算法/page/4/index.html","dd683ba2f9a941528eda61b475689d87"],["/categories/算法/page/5/index.html","b9de4521883d4e8d4272242f5086a709"],["/categories/算法/二分查找/index.html","ab7bb619a098a12362cfb526dc1b0722"],["/categories/算法/二叉树/index.html","fd948c853cb16c82690158a13746af6a"],["/categories/算法/动态规划/index.html","cdd180c01778ebc750bf0c4c923259e4"],["/categories/算法/双指针/index.html","fef42068d0553ca499a50bd64cacd9e0"],["/categories/算法/哈希/index.html","bed2ea1bec5578e3e4bfefbea34050fb"],["/categories/算法/堆/index.html","ea9c0a5ffd716d691f6bf50ebe5177a2"],["/categories/算法/子串/index.html","3e9b66869d2afa6a0007f156e60df6d4"],["/categories/算法/普通数组/index.html","2bf278b726d794ea27df3e25680312f3"],["/categories/算法/树/index.html","a2e3b129eada842c4ce061aa47ceed00"],["/categories/算法/滑动窗口/index.html","20c7a9b020785e2cf4ca205861451ce2"],["/categories/算法/矩阵/index.html","973609a6d710a0bce8b152017180c5db"],["/categories/算法/贪心算法/index.html","0eb3f112646e3598b04ace12ef949ea9"],["/categories/算法/链表/index.html","f8262c14ec238719d813ea75c0929104"],["/categories/算法/链表/page/2/index.html","7f1dbf32daa54abb90c93c1bfc554788"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","91e3aee03f10805e1eb7f681e3dead56"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","2edeffb6937f673b13ee65f238751bd6"],["/page/3/index.html","d2ad925d471908f3f8010b2934a59486"],["/page/4/index.html","de4ac76563ac4bdf8c8ebfd9ce4db9c2"],["/page/5/index.html","a3536028d7247f63bcc3046a24bb575d"],["/page/6/index.html","303a58bace576b02d67fbd32fc4a06fb"],["/pages/JavaWeb/AOP/AOP.html","7447098703a01c7b3c99eb408e8ec205"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","d53cff610c62438b4856bd580e896c53"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","6579bb661ed9f26c2080821a9629b2d4"],["/pages/JavaWeb/事务管理.html","5c4403ee8585a74d991ee1365c998c47"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","1a0c3a70e08dd3faa9bbdec3084e9349"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","49b85ec13e848f66c1523634cfc5bdec"],["/pages/JavaWeb/拦截器.html","7ab2e4f1ab3b817a539cebfb261ef4fb"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","5b4121aef44d6594751668b3bcbf099b"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","ac173be727058bc1a696559346ba6062"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","755119821830ddac04ee553394925fd3"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/uncategorized/队列.html","b74ff21a19d809d3471ba0489b18b5d7"],["/pages/爬虫/分布式爬虫.html","32d7825626b6bf48ec9d16a29c8f75fd"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","cb5a6c3fd5c100bff446d1e2e38641b0"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","ec4d659f564af7422279aaa8e6125dc2"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","fb924c681c9a728a72268bce73301f55"],["/pages/算法/二分查找/搜索二维矩阵.html","3afc357a4811d4c46dcd81dbea79c9b2"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","f5ee1df7a8aafc0bfda242ad466f92e4"],["/pages/算法/二叉树/二叉树的最大深度.html","cb3b236b36a9374b9b7167a6c269af59"],["/pages/算法/二叉树/二叉树的直径.html","3ace77d5906dee84175205d6ac314be6"],["/pages/算法/二叉树/二叉树的遍历.html","d7b294d263c4227c4e58804f2c6b11c6"],["/pages/算法/二叉树/对称二叉树.html","dbc8369e8adb2352a013a43990040a60"],["/pages/算法/二叉树/翻转二叉树.html","b4c17103e941e87ee7b8bc4e86e7ec30"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","c6243466def4baa5f7b67706739ed5b5"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","ac5305f979365b310ba864b1a71fdb48"],["/pages/算法/双指针/接雨水.html","48b931bdb54cd666f03234ac52271f83"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","998e1786467e00a9b2e0dbc6f1b99656"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","8b8cc69edae75655d52bd723c605c51d"],["/pages/算法/哈希/hash表理解.html","d6cdb9c3e174ca0c3d15cae5e254a582"],["/pages/算法/哈希/两数之和.html","092ab2431e569c27c5b145c8fabc48c5"],["/pages/算法/哈希/字母异位词分组.html","f8b378fdde6418271bdeb566328a01fc"],["/pages/算法/哈希/最长连续序列.html","e90d9833bbd452484c6a1d6b032c6de0"],["/pages/算法/堆/堆.html","e8007417e3efad3910237c9ab1f6081a"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","5cdde389f230be25609295a00cbc2615"],["/pages/算法/子串/和为k的子数组.html","05153a05f6ad1cf9a82e67b378cc9537"],["/pages/算法/子串/最小覆盖子串.html","8de6da61e1f030b90c51c6c7159b630d"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","3e2785b6f712e231e79cde771bd3690d"],["/pages/算法/普通数组/最大子数组和.html","667e84097a759c240f28e250f1d77e42"],["/pages/算法/普通数组/缺失的第一个正数.html","ded4fcc47be624d034efe279358272b1"],["/pages/算法/普通数组/轮转数组.html","76b1720c2004f7eaedd4a2e4e9c894f4"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","593271d65a2cdc3506883f4214dada82"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","c1da3531440443eb1de43c39efe1671b"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","1517c72845984228fa0748783a6604bd"],["/pages/算法/矩阵/搜索二维矩阵 二.html","fe43150f958f0f87367539571ff7d126"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","0ce69488aa9423a987e0232bf8370b86"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","2bfd33a1469beb7331912a26d1b34033"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","21964ad731b4d98df3b4c2dafa6faaa1"],["/pages/算法/贪心算法/划分字母区间.html","805ee3f61484dce62ef0d79f75f26f97"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","8dba5c13bff540ce1bb18eb2fc8b2e59"],["/pages/算法/链表/k个一组翻转链表.html","04884f00e5b3374dd440e16517a94619"],["/pages/算法/链表/两两交换节点.html","b6d4172b6241baee0297aca20a2b796c"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","86480cc289a579b28b4c108b772d5929"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","4bc32d15b431aae6c07d4177a8f2f2cc"],["/pages/算法/链表/反转链表.html","c7b4ffbddac07e27de04526e837fe2a6"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","b133b06e4d34298f24ab4755e4acea4e"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","43d651e087f0b9104a34558dae41faca"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","e50afadaadca642af1ea806cf53008cf"],["/pages/算法/链表/深度拷贝.html","267b2422e2fd6a95aeb7f8bdcd3f89cc"],["/pages/算法/链表/环形链表.html","b55cf290df90ed7d2ac9e1154c0b0b29"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","a651074e837bd713cfa00d5d75efb624"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","7a5ac9f9a852b4a341a4d9cb0a79aa26"],["/tags/AOP/index.html","3356871e9e7f7e54165bb11ee3a72fe9"],["/tags/Bean/index.html","df604e7d3bb03c7a7590662d0f1d6504"],["/tags/JavaWeb/index.html","0d907017575665f6176c967f4a027042"],["/tags/Python/index.html","c41a9b51501412ad7ba2d8ebfba5d44b"],["/tags/flask框架/index.html","880cc871ba40b170d19777ec44e751f6"],["/tags/index.html","0c439134ecf69e02fecc7cb5d44719b2"],["/tags/mybatis/index.html","171fd5f723e32151b8e3154b0e543d42"],["/tags/nginx/index.html","cd893309c1250830562136684f8e1ce8"],["/tags/事务/index.html","8b2298f053e65f0244cb8b065a486433"],["/tags/二叉树/index.html","0228119c9118b6ea32357dbd7aab6466"],["/tags/会话技术/index.html","152b682170e0e15c8cc1dac102fabe1c"],["/tags/全局异常处理/index.html","0dc33b42c551fff3680f9815378ae184"],["/tags/动态规划/index.html","e1a3cbdf9d55d08ddce4a6663a09b70b"],["/tags/双指针/index.html","46f0be24737361a383bce899ce20dbd8"],["/tags/哈希/index.html","cbe6dbf2a342814f497697e40c17ae0d"],["/tags/堆/index.html","97ba433fe6d6ac7b987d650ae5921df5"],["/tags/子串/index.html","c80b40f3003e25bd486e4eb194f302f7"],["/tags/拦截器/index.html","c1fe4eebc85cc831f6d755cde25252df"],["/tags/普通数组/index.html","24002cd48d736e1f363caa88e72d725a"],["/tags/树/index.html","9fade27d8a13fa8609aa106642f097ca"],["/tags/滑动窗口/index.html","ad199c6ff5def8b87ae3300cc7469f28"],["/tags/爬虫/index.html","53111dca9ad23b9f4644e1b10919fc8f"],["/tags/矩阵/index.html","c353db44c5c1eee5f5564e74ee49344d"],["/tags/算法/index.html","cba7d08fabe260fc73472c9248dcde8a"],["/tags/算法/page/2/index.html","fc6713de290a44ded1a939f142e4fa6f"],["/tags/算法/page/3/index.html","b515468beac8d3f0057e5b34efe94b7a"],["/tags/算法/page/4/index.html","d9b71c1361bd3e740774a75656b4ee84"],["/tags/算法/page/5/index.html","54686e4f27108a49e6c278276de7a13b"],["/tags/贪心算法/index.html","7e9ce2916efd3c11217f288cbb555aec"],["/tags/过滤器/index.html","5aa8a1ba4a52848a9216dce0f775821c"],["/tags/链表/index.html","6e13ed9da9cefcafafdd61e4baee9a0d"],["/tags/链表/page/2/index.html","17cb17db4dc01554e2306852bd7fbea6"]];
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
