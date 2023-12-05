/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","f360f97bfbda70291123e423a0352b74"],["/archives/2023/07/page/2/index.html","8669a8ab7f4faa4c32b7571354fbe617"],["/archives/2023/08/index.html","c73f7bdd1d0add1232736e9557f44725"],["/archives/2023/09/index.html","d9d42621ed7bee892b0f3c1f52030a72"],["/archives/2023/09/page/2/index.html","99c0330932dc2cf53fd3eff2df3ec68a"],["/archives/2023/10/index.html","ede8871085491f304f08a03fa247fd3d"],["/archives/2023/11/index.html","fa69f9885466f4b5398ce1e30350ce05"],["/archives/2023/12/index.html","5acb168f50f43530d4ebcd51638fecd9"],["/archives/2023/index.html","cad405163cf9f1870695e6a6e8b0670a"],["/archives/2023/page/2/index.html","7d2d1abe07c9e9add595665908cb4ec8"],["/archives/2023/page/3/index.html","f73eb11d6ec7a075a21406b37eb52003"],["/archives/2023/page/4/index.html","c4138277a075661b23ba192dd43c977a"],["/archives/2023/page/5/index.html","e1582d0199a02087be1b3cd0f0791c70"],["/archives/2023/page/6/index.html","34bae4a89cf53156e44c667f5d53d262"],["/archives/index.html","e8970d25a6fb72a4fba6d2c0fe766e8d"],["/archives/page/2/index.html","82edca94fb6eb25ac7ff403666955604"],["/archives/page/3/index.html","4d1ba0e7394884bb51ac2e7b8786a6cf"],["/archives/page/4/index.html","720940d3d5167b0ef7c51dd670793135"],["/archives/page/5/index.html","7ef39f5572687ea7fab88524f8ccf72a"],["/archives/page/6/index.html","fd181efa5d9700c52a63e0911bea3f53"],["/categories/JavaWeb/AOP/index.html","45ce1ca9b5c5735365dab5c97b0911d7"],["/categories/JavaWeb/Bean/index.html","1f49c19651da3b49ca9bc0c758852a33"],["/categories/JavaWeb/index.html","76268f4c807430076b4580862f7b6ca7"],["/categories/flask框架/index.html","b68715c36e01af7d2021e42369095eec"],["/categories/index.html","d14861da13548c828826a4203391176e"],["/categories/爬虫/index.html","7ad4e133817c0c712bd572834ed3c644"],["/categories/算法/index.html","760c7dcacfd8800387809180166b1448"],["/categories/算法/page/2/index.html","cae6374bf3d2a21a185dd744f2e948dc"],["/categories/算法/page/3/index.html","7c82664f672c5e06e1030086c94f56ac"],["/categories/算法/page/4/index.html","924bf4c3a2b926819b5221282de2535c"],["/categories/算法/page/5/index.html","67626e2ce983b433c4cd0be09bbe9a4b"],["/categories/算法/二分查找/index.html","13f63512e4739c72de2c136ee67f73d5"],["/categories/算法/二叉树/index.html","1c2f2b45eda7894c174488279a1dc364"],["/categories/算法/动态规划/index.html","07143725c736ece4b30bf6103b9eacd9"],["/categories/算法/双指针/index.html","1c5f3eaa062b7c56f47f664a52db59af"],["/categories/算法/哈希/index.html","42654a7a3dc77b8f33f4f2734ecf5c00"],["/categories/算法/堆/index.html","2124462a251ac705327105a2641526f6"],["/categories/算法/子串/index.html","12e3968a09dd0425e34cbfcea3c6a3bf"],["/categories/算法/普通数组/index.html","136eb339d344759dd93504a8e205f194"],["/categories/算法/树/index.html","508cc177d3b060fa9e4b9f64beef7026"],["/categories/算法/滑动窗口/index.html","9d332ea4046ec858140d8e2a7f9e13dc"],["/categories/算法/矩阵/index.html","ed7068a89f1626ed597260b8b1775a00"],["/categories/算法/贪心算法/index.html","f182ac0f2d2d8be8cfd048712ca3ebc5"],["/categories/算法/链表/index.html","ec38bf6a5ec0cbf1b45240f8ddb95337"],["/categories/算法/链表/page/2/index.html","6c4c4b3bdd11905caac6cd180b556ba1"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8de6ad41c823f466a41fdaf052474387"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","0adfda342bc226c5317413282309eb05"],["/page/3/index.html","8d720b7559d518e1b2f9df16e4a68226"],["/page/4/index.html","f7a5c1788ea0b64c7c3c886cb6b8b071"],["/page/5/index.html","f9036ae6ea42d0172f6889c12aad35cf"],["/page/6/index.html","7ba860ff28dfa6343d7aef6a8fb7999d"],["/pages/JavaWeb/AOP/AOP.html","5b208e4a8dc6ccbe8eb999fee6c47ba2"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","7a0aba6366eef855535f3bc1d5dbbf9d"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","4bf4917cc9392777288e52ce890e3b99"],["/pages/JavaWeb/事务管理.html","c04d62b1d604abab62cf14bd7d5a7a9c"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","73ff2c65064cad7cdf7e995b92682b34"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","7481d49247afc2f3b10cf020c9f848e4"],["/pages/JavaWeb/拦截器.html","292f247091d617482296161e9c9b0eab"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","8644470a3d6ed63ec4030e755c6cba14"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","114854ab5a5cc5b1e5fc7294e047983c"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","240fb28209473164ac56a8af6df742dc"],["/pages/爬虫/分布式爬虫.html","0445423f2effbb6e6215650733dc539b"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","b7b3fab934c536ab2fc77fedc7ec33ae"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","bf22b3080ed7a83bc09df6d3b6144b90"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","b538addc55239bdbcdb4b131eed669fe"],["/pages/算法/二分查找/搜索二维矩阵.html","a7778987ea4cb1d99a9b45e46a995cb3"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","cc04993b9b6c967c2c7a3c3573231b35"],["/pages/算法/二叉树/二叉树的最大深度.html","d1921d3a8c9d0af3ca749c04aa6679c6"],["/pages/算法/二叉树/二叉树的直径.html","b02dc8f4565eb00932fb39aa99e60b8f"],["/pages/算法/二叉树/二叉树的遍历.html","e7a841d7e3cc2b3f626d0615b599c0c9"],["/pages/算法/二叉树/对称二叉树.html","3974960e544b87df48d133a829ee4bdd"],["/pages/算法/二叉树/翻转二叉树.html","767c4846cc1f38ae8425d5fcb4ed12ce"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","a15df4ee026a58c7109e71bc036684db"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","d8d434196acd78feea6948365579fa7b"],["/pages/算法/双指针/接雨水.html","3314708a4afd72e9ca45f76e53bfe138"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","5fc76de03aba01ac112d1b352f2699f0"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","021a62f1fbc32c439e4e5cf468cf10c8"],["/pages/算法/哈希/hash表理解.html","28a068f1fa98406542e1878ea1329456"],["/pages/算法/哈希/两数之和.html","3de062047ebe9dfe31a93b9fe2755f3f"],["/pages/算法/哈希/字母异位词分组.html","58cba8c2c5fe3c24c9727ad716af93df"],["/pages/算法/哈希/最长连续序列.html","88578be5d872ce8c388eb6495eac7250"],["/pages/算法/堆/堆.html","47891b38a9b539ba9e02d7bf05530a94"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","6fb5968ff7fbf19dba20dd7e8a947376"],["/pages/算法/子串/和为k的子数组.html","e832242b541e74b255e9e6f92a789fcf"],["/pages/算法/子串/最小覆盖子串.html","1b4d9e6cd63e382d582ad31ce9f8118d"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","5990c2d1845712bcc54bb685b5c924d6"],["/pages/算法/普通数组/最大子数组和.html","2af9419cf7da11ec2eb8b95e4d5fe351"],["/pages/算法/普通数组/缺失的第一个正数.html","fd5120745c19c3811da8548df5a4e00a"],["/pages/算法/普通数组/轮转数组.html","39d0c9ab6861457540101f752478055e"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","a0ac829f1942ca3487836ec7dd2afc0c"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","bea6082617a6af68d78783b4f5d0f158"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","7cd4520404846ca2bf986d4ea8084088"],["/pages/算法/矩阵/搜索二维矩阵 二.html","85f38db9e095158f59d49024b4cf722d"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","a3465cc842cedee64b616a3522115521"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","f54393c2d801f9b99ef3cc8b390bec7e"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","7e65c9f353c0cade709099fd3b261102"],["/pages/算法/贪心算法/划分字母区间.html","2c20fc93ffdd8afd99cc686aea1eaa26"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","db5251a8b0fc34f37ff61ffdbf084947"],["/pages/算法/链表/k个一组翻转链表.html","e30670047c31426870d2d8462bff26fe"],["/pages/算法/链表/两两交换节点.html","86ff41c9dc653b74f1b347e963fe3302"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","0f4aaf019a8271bbfc7b10e00a979fe4"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","cad95278d19fc790340a2670f3557d2f"],["/pages/算法/链表/反转链表.html","09401596435ca8b3dfec2e7efcda2ebc"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","6bb7cf402188c30c148d9c90e5be3c5f"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","9d4867365d692bf03fd52eb7b72896e1"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","dd99f1830f37bce69f575c2d838ad452"],["/pages/算法/链表/深度拷贝.html","5dedbc75fec9f6b3ac4391cdafd73926"],["/pages/算法/链表/环形链表.html","b867e8c4b946c3e2c4846fddd5ee9ad9"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","a63645f8f86d4a3a45278959f78e5d19"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","12184cc6a5d1eb4b32a89f8e8d27f624"],["/tags/AOP/index.html","3f81ef02e847c545fbbe1715b26a74fd"],["/tags/Bean/index.html","af80d7271cdc8ef17a1d92d6ce5d7315"],["/tags/JavaWeb/index.html","eab5c8926dbfc3563eb1e82b2618499c"],["/tags/Python/index.html","49a45d3a8ec23f9ac58ec62d5b839268"],["/tags/flask框架/index.html","6477f04542d68a6686e606f2e2c88c06"],["/tags/index.html","595cc9039ae64d2f99cb8df6cb65a307"],["/tags/nginx/index.html","7f3465932910b63d331ae11cb216be06"],["/tags/事务/index.html","d422e9b963cbb02f6a4135d9d1a0e16f"],["/tags/二叉树/index.html","79dba757d45df756c0cf8462a51f2420"],["/tags/会话技术/index.html","8ed9e901751c84d98b3b24c43488cc47"],["/tags/全局异常处理/index.html","f435112aa3fe3fcb8f639a8786b01524"],["/tags/动态规划/index.html","8cad2e1c1daf9a88927a8d68bc5d6949"],["/tags/双指针/index.html","fa0d62ebd608a5ff379225cdaee08b08"],["/tags/哈希/index.html","16a8fb4218066da2eda24d6d639debea"],["/tags/堆/index.html","537a1035c755240dba506ccdd059d1f5"],["/tags/子串/index.html","af70f09b26ff2dfce889c01339e5ea3b"],["/tags/拦截器/index.html","d91428224f12c7fabd295aa4202db01d"],["/tags/普通数组/index.html","8d410a5c172d663b8a9a1c2fff4142a8"],["/tags/树/index.html","827092559d2f2c77371ebb69e96fc8ac"],["/tags/滑动窗口/index.html","99db027d6ce9757942ee962f0f773487"],["/tags/爬虫/index.html","9e7e868f239c49ca35fcb887d9a7f488"],["/tags/矩阵/index.html","57d019e4177d7438634ed6e9b91e4e99"],["/tags/算法/index.html","21d09600e6b7e254dd9abbd7f072b337"],["/tags/算法/page/2/index.html","7f3678e482d06e8b4e54d136d9cd5856"],["/tags/算法/page/3/index.html","6ec471f65508e6853cdaab6f85396f7e"],["/tags/算法/page/4/index.html","37cbf701dc94b81961858af48532e75f"],["/tags/算法/page/5/index.html","9530433fb9ccba2bca3beed98d0d00ca"],["/tags/贪心算法/index.html","b7e4e6e75313f8b6d26cf8e2e7cd93e3"],["/tags/过滤器/index.html","5207c0285788bcc425460190bb5e0700"],["/tags/链表/index.html","72b9b4cb9e5fed67c1f252c35160c53e"],["/tags/链表/page/2/index.html","2c59d29c28127f9ec113dac9cfe897f9"]];
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
