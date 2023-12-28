/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","e09dced50be1f87654c14ec2cf66f0f5"],["/archives/2023/05/index.html","8e73be52570d01242df61412104b306f"],["/archives/2023/06/index.html","d0f24cce046d9e3eafeeab23a799ac71"],["/archives/2023/07/index.html","04b269d4bd752902733b219f5481abf5"],["/archives/2023/07/page/2/index.html","cdd3d4e21dc16746d20698812f9ce357"],["/archives/2023/08/index.html","35d5c9a30ab404795cdc1e0a9ac5b514"],["/archives/2023/09/index.html","a1d442b7b8cf12b48f3287809596599e"],["/archives/2023/09/page/2/index.html","bd97b502cc88252e00222b32c56d645c"],["/archives/2023/10/index.html","c5fc288af9302ea3701474715354a3cc"],["/archives/2023/11/index.html","7ce93ddd8b691086e0c4b69761afbefe"],["/archives/2023/12/index.html","405e60b0a68112dea133b758c03413c5"],["/archives/2023/index.html","4062cffd2114fd477e66ea16fcb810ad"],["/archives/2023/page/2/index.html","b6211c60a3bc5a0a67a89d69f29881ec"],["/archives/2023/page/3/index.html","786d5bd8b126e321b2aaf2f2f4acbd65"],["/archives/2023/page/4/index.html","12ce72a7a6925407b66504b0ba14e6ad"],["/archives/2023/page/5/index.html","f38608c908d34551f897fc60ac020b5a"],["/archives/2023/page/6/index.html","0a82b12408d9695be41662f5240c29fe"],["/archives/2023/page/7/index.html","2c80c19ef375963ab42935232d96b3cb"],["/archives/index.html","fee35cd50fd8ba8b5ed4ed90cd4cf99c"],["/archives/page/2/index.html","cff4136b9096fa7fb1bd981fe6539db8"],["/archives/page/3/index.html","b4f4d3b205995947efc50f23d2f151c6"],["/archives/page/4/index.html","8111aa750985fe990ded1caf78dd7e96"],["/archives/page/5/index.html","4d4e45afdee45232e6bf75440ceaf48f"],["/archives/page/6/index.html","23b6d4216e1cedf410cbb3d3a4165935"],["/archives/page/7/index.html","6c5def02a8db54a0d44ab8a424ebe396"],["/categories/JavaWeb/AOP/index.html","1f00d5153dc15afb3fc61ec453ce904f"],["/categories/JavaWeb/Bean/index.html","6ff98a1d12ae848b01ffc9f94862f2b4"],["/categories/JavaWeb/index.html","e8c430729ba3db2f27f9bcd3b29da95f"],["/categories/Mysql/index.html","13723c8be59f2c0f8a020fbbac3791be"],["/categories/docker/index.html","91df7a6310b72b61cd9b622f4e895d38"],["/categories/flask框架/index.html","1f3ec0f8204bd6da1446d1382da15ebf"],["/categories/index.html","88d3d549f5252361104a7d274d601763"],["/categories/mybatis/index.html","ec7091ed98fe5927e86f2d47f06effc1"],["/categories/rabbitMQ/index.html","37ca309a707ad8f9e75e0a094628fa6b"],["/categories/爬虫/index.html","0479698e720956b31b57cbbbeaab88b4"],["/categories/算法/index.html","f93a52126386f634835f1764e3bd5f46"],["/categories/算法/page/2/index.html","cc7f9ffba1880f3203246e9e655bd64c"],["/categories/算法/page/3/index.html","ce9deb5d1a45fca69beccde1da0bbb95"],["/categories/算法/page/4/index.html","e79d066d551547f10b5b9294cff13853"],["/categories/算法/page/5/index.html","cfb361dcbd923ceb5c500a56e4eca301"],["/categories/算法/二分查找/index.html","506217b72cbd6f6c64f993e29809a1f8"],["/categories/算法/二叉树/index.html","5755310a1f23e8a624f409c0ba21ac32"],["/categories/算法/动态规划/index.html","ec57d6bfa02bda79b61081a156d91abe"],["/categories/算法/双指针/index.html","52dfa80744e993b8d7af68f9799e8807"],["/categories/算法/哈希/index.html","06ebc5084b67f09eef10ca4a7714b60e"],["/categories/算法/堆/index.html","62b0a9275ab3c415b7fe92439124b904"],["/categories/算法/子串/index.html","0d6de26620af56ebcd2f0ceaf3f57088"],["/categories/算法/普通数组/index.html","2467f3080096a4ad248ee60dde3683d1"],["/categories/算法/树/index.html","b6cd95aa7466d6cd4173662f08c024fa"],["/categories/算法/滑动窗口/index.html","eea977a9cfa39d19ef08e6638f0d4e52"],["/categories/算法/矩阵/index.html","9354e373ab432861a0ce76b7cca63044"],["/categories/算法/贪心算法/index.html","23ed23542bd319855bf47a31f8a16e4c"],["/categories/算法/链表/index.html","c9b1dc8ac61d7838b1700a1535262cb7"],["/categories/算法/链表/page/2/index.html","ffe42580a25e4eac80868150cb1b60a7"],["/categories/软件架构/index.html","3a9d9211e19f79d8d6c9b7f76ce72b80"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3e685b180fc27e907840fd3c97468802"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","cf497233aaf945e71d755a15bf6abc9f"],["/page/3/index.html","3734c2ae21b837895608b6bca3d0a7f9"],["/page/4/index.html","5e7948159571ed093335b19e3162d14f"],["/page/5/index.html","ee9c58be0fa657b4797e97fbc08c8609"],["/page/6/index.html","6c89761fa554c1e425ade45ab1d3220b"],["/page/7/index.html","f89bb99244d70c5ad3caee423ec4586f"],["/pages/JavaWeb/AOP/AOP.html","25515071678553836cf6ea975ca845a4"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","32da78277e842d271aeda34f4b68ed1c"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","e327249af6d01a53ae2b2e82844f4ee3"],["/pages/JavaWeb/事务管理.html","df099a6eb89c43d49f3d5f34497f359a"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","63aa802b14d76d467cb9059005480673"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","4c0800859fdc031640981d571ce0b754"],["/pages/JavaWeb/拦截器.html","44a59001e5ac0dbba18ff1c32353cd8e"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","047f0487400453e11efcaa7d86578ee1"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/Mysql/count的计数.html","a1ad03aacb9fe0d7f9d061ca3571aeaa"],["/pages/Mysql/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/pages/Mysql/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/pages/docker/docker.html","693a6db8a015b26b8805dc637cb0dcab"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","a6e371b5991556c6699747402ebc5933"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","1aaf75160caf5e9ff85cb6ca17c2307d"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","6957dafc14d6ef9cb823df1fac17d7ff"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/uncategorized/所遇到的sql优化方法.html","9bbdfcfdd7bd831af8240811e5082df0"],["/pages/uncategorized/队列.html","b08c3e1253ba3ac6c2a95ed2b0bcc5ad"],["/pages/爬虫/分布式爬虫.html","14d6eb0bd1f1e4f19b272368c1b843a9"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","ce2155f8f364865a41353d7e087c0c3d"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","7e2559263685c29a4173ea3c22f077db"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","4f58bc2b339973d6a77c8bbf965e63c0"],["/pages/算法/二分查找/搜索二维矩阵.html","ea1f6d729d6566f00d89210fe6f6c9c5"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","038ce84eb4158e0e9e34a86c0d5abbf1"],["/pages/算法/二叉树/二叉树的最大深度.html","1f6e6fa10f1053f7340bbdc75ebf3851"],["/pages/算法/二叉树/二叉树的直径.html","80854784986ac74972c5c49af74cc8c6"],["/pages/算法/二叉树/二叉树的遍历.html","7b9468b488021422f86b569bbeaaeb2e"],["/pages/算法/二叉树/对称二叉树.html","643f931ffef182bf29b84629c72b28b9"],["/pages/算法/二叉树/翻转二叉树.html","48eb77db0c9dba926a3a5b6c5b5030dd"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","f475748d8a24b7424dfcaeef111e9cba"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","0228d773604ac6d2aebde5429dd6a2f1"],["/pages/算法/双指针/接雨水.html","04ed82303fa5c51064f9d0402a1753a8"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","0c89d1c3ea94c73feb1afb49d1c1ca17"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","1139e5d00dc2193e8775ff37a92d7137"],["/pages/算法/哈希/hash表理解.html","fa51b11a3434e698acd829f34815e0a7"],["/pages/算法/哈希/两数之和.html","8e3bb70de29669b01f0b194346dc8ed6"],["/pages/算法/哈希/字母异位词分组.html","80bffee80713428246e1fd89a894d690"],["/pages/算法/哈希/最长连续序列.html","5262d10b544b853e9e8b9865d0d3e572"],["/pages/算法/堆/堆.html","fd51ff04a5d57ab095230b8cad63e1f0"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","042187306f941b6e5efcf00e2d413bfe"],["/pages/算法/子串/和为k的子数组.html","b1f44e68b00449119d2db9cffbd4cdae"],["/pages/算法/子串/最小覆盖子串.html","274ef97d9f13e85ee8b1ebe9988f1142"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","2067a83382bedd7556133c093e870e83"],["/pages/算法/普通数组/最大子数组和.html","63f02718ff00c36bbd1491b90169cc55"],["/pages/算法/普通数组/缺失的第一个正数.html","f271e2318cbaf00898211bc634a8ca4d"],["/pages/算法/普通数组/轮转数组.html","8ac267b9374d18f51d979b7971b8d823"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","b6cd76c09671a604c45a22a0889e06da"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","c8354d16c08d20e04ff0aff394b32501"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","b250ff3ffc1b5df16d035d59d4563c61"],["/pages/算法/矩阵/搜索二维矩阵 二.html","023bc189220baac547944b09887aa64a"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","a388c98a7767a7cfca90098877d1102a"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","0e983af7d69ba2ed67f5906557898035"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","1ebc297ba8238b1b6ed54f12591c899b"],["/pages/算法/贪心算法/划分字母区间.html","6328c02be8a87f6d32704fbf0e1c00c1"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","4b5d177bb18404b49d4720d55a84a45e"],["/pages/算法/链表/k个一组翻转链表.html","053bc663eb32c52609dbad9fa39218cb"],["/pages/算法/链表/两两交换节点.html","c5dc86a1b263da65c217b780463210cc"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","10f259519dcd0e854a0060e194726dab"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","aa5c36e369298834cc294f304f70c94f"],["/pages/算法/链表/反转链表.html","b73fe2005eca03c00bc867314e5f3f16"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","347c12c40bba1f498c81455e731e0575"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","6e3e5b43884072df96113d66e7a7deda"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","382c5338defd3091791afad0eb23c19d"],["/pages/算法/链表/深度拷贝.html","108692338311d711056cdabc11b3d596"],["/pages/算法/链表/环形链表.html","c95274bbea0cde09a19320da1f84f9a3"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","96834eb736fd49b1064517624168dcf4"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/软件架构/软件架构复习.html","4e8f065f8ece5ec93408f1b8fd6514c7"],["/sw-register.js","a27b5a15eda48cb934996fdf468c4efb"],["/tags/AOP/index.html","4f367880f1729e493648717f44769958"],["/tags/Bean/index.html","b9e7c5249bbefff1731445377af14318"],["/tags/JavaWeb/index.html","b3ffdfe637335ff7d83f52cfe68de40d"],["/tags/Mysql/index.html","5535b5df4406a6539f983bbf4aa8729e"],["/tags/Python/index.html","e2dab7d7c7a5cb39b1213a85a5516758"],["/tags/docker/index.html","e086c78fec5a81520695175318458484"],["/tags/flask框架/index.html","59403ffa9cdeda47d375801440032118"],["/tags/index.html","49e6f5e6ce397fd8a1c9c03553316211"],["/tags/mybatis/index.html","e0d7aa581d3eee9be0ad6e202e5b6892"],["/tags/nginx/index.html","d46e4dbdae41798c88f2fbe7aa82bd37"],["/tags/rabbitMQ/index.html","035bc6f242da3767e8e58f75296c17c8"],["/tags/事务/index.html","875426e23e4a5814d7cb41b42bb982f7"],["/tags/二叉树/index.html","c621ca599f278a27595ad5a477fb840e"],["/tags/会话技术/index.html","516e3fd82b8f6680487af26797022b7e"],["/tags/全局异常处理/index.html","72ab163142e3a9fa32c63b1967e1fda9"],["/tags/动态规划/index.html","8a6674987d32a2a98043bba326b45b2a"],["/tags/双指针/index.html","0e8604aba29996e4eab57d41d52e6dca"],["/tags/哈希/index.html","53ae74a6337638dafeac543d4816f6f1"],["/tags/堆/index.html","bc62f869068891dc0bd6cf43e88ad1d5"],["/tags/子串/index.html","1d4d342bed6925b0ab758c0b7c0e30c8"],["/tags/拦截器/index.html","5b15c7febaf19fcfcd7561762a3a15be"],["/tags/普通数组/index.html","d5f94cea0e81ed9350a9038d20092dca"],["/tags/树/index.html","0ba86ad62831cad45f83cdd5ebf0ea94"],["/tags/滑动窗口/index.html","4f51ed8e1e36886404707abdf5d5250f"],["/tags/爬虫/index.html","a8931fe4c701b98619412fd14dac5116"],["/tags/矩阵/index.html","49d20740e321d12f840e432d9ab33e63"],["/tags/算法/index.html","d095db9bfbca363e0affe744b798d3b7"],["/tags/算法/page/2/index.html","335530a8f0826fd0b715311c88c67e4f"],["/tags/算法/page/3/index.html","9c9d37f0fce1e8b1f19e69925ed04d89"],["/tags/算法/page/4/index.html","023388b9cf37a4ed626d5d18e4197eaa"],["/tags/算法/page/5/index.html","0f1a4ecc58b1605f79a1683bd849c190"],["/tags/贪心算法/index.html","b17a6a83c6d8f59780582b5f963b2e86"],["/tags/软件架构/index.html","40eb919e501e6ad6418f870e35016424"],["/tags/过滤器/index.html","0e593527ec4b5c57977cd4ee0aeb2ec1"],["/tags/链表/index.html","c114c906280abdccd1c8f98533a0e52b"],["/tags/链表/page/2/index.html","dca1929e5456d9637c31c4b62d715d01"]];
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
