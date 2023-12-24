/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","d0050cf80e2a447cf374367513e35171"],["/archives/2023/05/index.html","51aaf40bea2764ab6768aa46579d4e66"],["/archives/2023/06/index.html","db6c5dff00b21fc9e07d2c2996f8fe27"],["/archives/2023/07/index.html","0d5d6c87a085d8ef451c5ea55306fb92"],["/archives/2023/07/page/2/index.html","af07ed1ba7c4eae617c23fef8a3a9baa"],["/archives/2023/08/index.html","27efdc9bae20857068c87db9ee32df5a"],["/archives/2023/09/index.html","5de6291891537c984bcc29c474c2330b"],["/archives/2023/09/page/2/index.html","aad27631eb95c1b91aa9158100cc97f5"],["/archives/2023/10/index.html","0e0ca18cc74334ae33c2cbcbcc1c7c3b"],["/archives/2023/11/index.html","60e66b08689cb55e6f5a5e49ca40b2e0"],["/archives/2023/12/index.html","d0cccd195d1794757295ca9eff05eedc"],["/archives/2023/index.html","884f4ad2e1beccef6f925f924fddf60b"],["/archives/2023/page/2/index.html","bd57774ff7744b6add9b10489b101d94"],["/archives/2023/page/3/index.html","ffbfe3efd86826b5e4d98de195d16109"],["/archives/2023/page/4/index.html","1bed272b7d71eb10e965a100607531e1"],["/archives/2023/page/5/index.html","98034ac2a5ffc1be3b52323dfa1686a4"],["/archives/2023/page/6/index.html","f715e002129b7edb197c939c130f980b"],["/archives/2023/page/7/index.html","24a32eb0036ad0a3eddb0f976a0688c4"],["/archives/index.html","59744f304f62f8b4de192be7a017a2ac"],["/archives/page/2/index.html","71930d9ff547be2bf64d51d4869b9425"],["/archives/page/3/index.html","41a8748cef55f9054c863bbd1fa60420"],["/archives/page/4/index.html","d485fd48c227f26e8b405f94e433df4d"],["/archives/page/5/index.html","6a5278982945ad497f51173a87643d5d"],["/archives/page/6/index.html","bf4de5e284226582324159bfab1d82c9"],["/archives/page/7/index.html","df6fbba70bc6575ad9551ae9087da9f6"],["/categories/JavaWeb/AOP/index.html","6733c44f7c8373d46ad9f391ce00750c"],["/categories/JavaWeb/Bean/index.html","ed496311bef529864dee09be085390e9"],["/categories/JavaWeb/index.html","298796717202e9c074961df8b879b91e"],["/categories/Mysql/index.html","681a7bd02fa67a6a81c0978816dcfda9"],["/categories/docker/index.html","02b91097908bea0d916338a5fbe833a3"],["/categories/flask框架/index.html","3379dff4a63399695fad7efdf197a9dc"],["/categories/index.html","c5b3ebed5ccd977eb8cc5044fc525f0f"],["/categories/mybatis/index.html","d2f5bd18fac843ac1d6849c40587431a"],["/categories/rabbitMQ/index.html","58ad90d80c54c9dbdb99ea88d3174cfd"],["/categories/爬虫/index.html","b44389cddc9036922fd93ec835d4341d"],["/categories/算法/index.html","1ddeaa76d4e458de429235820d8a3859"],["/categories/算法/page/2/index.html","223dff1efc6c5881bb0b521d15ac7095"],["/categories/算法/page/3/index.html","18f46d45015c8f535863df673323e110"],["/categories/算法/page/4/index.html","69010d7fbe0fc477d1f79b8d621f058b"],["/categories/算法/page/5/index.html","51293b2bcef82d28b3a19b7d81f40245"],["/categories/算法/二分查找/index.html","7ba9be121af39d70c6b1ce20fe2b8ea5"],["/categories/算法/二叉树/index.html","1c20d86cc888b3860ff07ad16256efa0"],["/categories/算法/动态规划/index.html","ad1048f631d8ea4140b233fdf0d444f1"],["/categories/算法/双指针/index.html","e7cebaf8b43809b684608a1bf42b5d9c"],["/categories/算法/哈希/index.html","e8a520264eb5e0310067389ec970afd4"],["/categories/算法/堆/index.html","77fd7261505cecf4b4a60e8e65079d31"],["/categories/算法/子串/index.html","2af082af37857135878f7ae7968036e2"],["/categories/算法/普通数组/index.html","ef186060c63edf6d6b9aff53b346dd49"],["/categories/算法/树/index.html","87c5b3d06cc76d2374bd4d8a77fe01d7"],["/categories/算法/滑动窗口/index.html","dc1da22c8993ace3761d241e8084a25c"],["/categories/算法/矩阵/index.html","963386b2c264bf1bcb4019187bc2b500"],["/categories/算法/贪心算法/index.html","e0fa4bd148148601f2bbbe16813bf58c"],["/categories/算法/链表/index.html","cb34110f4ca1e8f1d2f74eefb7a9618b"],["/categories/算法/链表/page/2/index.html","49321e9819b8dcd6eb821544982e5112"],["/categories/软件架构/index.html","85ebee6984bd64a022b95ad34231efb3"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","30f0a000db0b92379394e444b967a755"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","29ed14e818c5d7d3f768e04ff8b4e3bb"],["/page/3/index.html","84cf0667663f557066ac6d4e70f6f1d5"],["/page/4/index.html","87b407f6b7fde3c9fb9ef3cc09c03fa4"],["/page/5/index.html","7bd4c837b91d886e7aadbfcb342a75e8"],["/page/6/index.html","259c703e873602cb85474e9d57d324f8"],["/page/7/index.html","85ce1d64bb23304eeeff2f94df5ccc60"],["/pages/JavaWeb/AOP/AOP.html","f6ac52c56733bc6293a314dc466640e5"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","1709251f15ec1bcfe8bfb7b0532b7163"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","266795c112289198ae642025533b3389"],["/pages/JavaWeb/事务管理.html","a72e4ae7fd6ebc74a831573eb305d01f"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","ae9dd1023256d171fc9479569b894229"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","5e05c5d5516c825ade7f0dd89791c8f8"],["/pages/JavaWeb/拦截器.html","87dd656a0678dc6f847d709d91c99035"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","71854ef7c95867e56395d564e3f560d4"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/Mysql/count的计数.html","50a23cbf190adf047c51ceeca9ebc772"],["/pages/Mysql/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/pages/Mysql/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/pages/docker/docker.html","2467770ecdae1db32f0e7ba1621a20e2"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","73940042e9800d71d60cb79662c8d281"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","bb84f68c24b9e3842d4b8a95508aa7ae"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","95711f3d2a7886dc4553b95c685635a6"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/uncategorized/所遇到的sql优化方法.html","61f11da782ae8d6c3d9d3ec3ff7d9fc2"],["/pages/uncategorized/队列.html","2cff3da7840d58effca816f5f5e50265"],["/pages/爬虫/分布式爬虫.html","1ee361e000d991174611e679f0b5919c"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","f08004bc489cbbc958d7cbc06b6582d4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","7eff608caf0cbbfd6d642b149a78790d"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","6e2769f784c3246aca5cc7a1baac36f1"],["/pages/算法/二分查找/搜索二维矩阵.html","9a66fca7ffe4293ed9100006f28008fe"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","24f898356ec98b1633a9ecf9e400cece"],["/pages/算法/二叉树/二叉树的最大深度.html","a97c2d9eeb2bcd1abbe707f1adc4920c"],["/pages/算法/二叉树/二叉树的直径.html","487144c836e54d8908e91f5962029d74"],["/pages/算法/二叉树/二叉树的遍历.html","c754a7fcb8ffa66e2645ac1bd10c4471"],["/pages/算法/二叉树/对称二叉树.html","72f34be121731f3311d43808cf5e45cd"],["/pages/算法/二叉树/翻转二叉树.html","0b0a7f7b5d93ca0dab69978e0ae29ec5"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","46d88e40696b062897dfeddc5b64acde"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","0dddb62a215fecba3606149b2888570e"],["/pages/算法/双指针/接雨水.html","71a2d50ff3ddb2a9a06fe974de0d5b51"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","cd4f6ca4304f0786ad630d41ea852a58"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","0601f8abd2602001a5ffaf5f139ac8cc"],["/pages/算法/哈希/hash表理解.html","ed97a26a90e27a5db2fa271b7b2ba24e"],["/pages/算法/哈希/两数之和.html","fd515f967cd38723fb2ff741bedc3b18"],["/pages/算法/哈希/字母异位词分组.html","3aefe3cb5eacf8d8b2d79a6904dc5313"],["/pages/算法/哈希/最长连续序列.html","f404c17409a25c159c80c07ccb8fedad"],["/pages/算法/堆/堆.html","ab4b8fd6e3141fabdf999baf823daa55"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","2b3a1217f2ed6fc369a30ba5a61c024e"],["/pages/算法/子串/和为k的子数组.html","80ade7c21175acfa98bf022515460024"],["/pages/算法/子串/最小覆盖子串.html","5bed5a5c41521521190263752100bf0b"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","2f749936ec15e693e57450cf20a16235"],["/pages/算法/普通数组/最大子数组和.html","a466f57a8d07b2501db5742820a09791"],["/pages/算法/普通数组/缺失的第一个正数.html","b3fc193aae9933743cfa6ab80546822c"],["/pages/算法/普通数组/轮转数组.html","a6faa4e5d87424ea0a63c75ee80f21d7"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","14bd8e40821198ce8fbdcde54182e4d0"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","e50f64318040ca23e43f6a5851401f51"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","ed32363caf8636616c67dbb77278944e"],["/pages/算法/矩阵/搜索二维矩阵 二.html","e46912bb2eb85ed8e1ab6d6c58b7d01d"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","c8fae96b2725a02648c53466979ba80b"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","ad11659f2a06ad599c4454d2f6a3c2fa"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","ddfb10b680fa858356fd3d9aa2ce33f0"],["/pages/算法/贪心算法/划分字母区间.html","737d920776c808c2a1053fe2860a4f56"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","d22a2cda87ee84e85ecb1303fc9eef9d"],["/pages/算法/链表/k个一组翻转链表.html","9df49044e1582d09c22a61f8d2bad56f"],["/pages/算法/链表/两两交换节点.html","9705b284376572a8dbd9346b4033d312"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","c6ed235b605640cba41305edaf3718c9"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","7d55f47e4ebf7047b4bfad94184ad956"],["/pages/算法/链表/反转链表.html","2a90880c14b7625c01a6c28f6a7b0177"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","5075cb13210cfcd0d4b5df0246c7e45b"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","022dfd2b7cb7daabb4c685269592c74a"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","0e53f3f16b25bf488a71b63f72d5d4b0"],["/pages/算法/链表/深度拷贝.html","e6993c1c89ea6ca251fdd45255198003"],["/pages/算法/链表/环形链表.html","a2f6f8a9feeb875694d68a214485c848"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","894368b9422d1d3ae9e2086ae65604ac"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/软件架构/软件架构复习.html","c4bdc1ff191e99244d26c3c702e8d055"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/source/_posts/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/source/_posts/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/source/_posts/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/source/_posts/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/source/_posts/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/source/_posts/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/source/_posts/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/source/_posts/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/source/_posts/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/source/_posts/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/source/_posts/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","491088cc6539b1e74b1968f95a203a4c"],["/tags/AOP/index.html","09eb3b3185b066de988eef04f7ce5836"],["/tags/Bean/index.html","eb56fdca626cee5c7863dfdbf7afc0dd"],["/tags/JavaWeb/index.html","4cd00af272bb1e4c62447879fa149c98"],["/tags/Mysql/index.html","e1a9a0e0d59971c34d7d480aca157ffc"],["/tags/Python/index.html","db4382abd18668e51a6e0efc845e5dfa"],["/tags/docker/index.html","a1617a225a666a224f5d5a3a43511436"],["/tags/flask框架/index.html","a7867efba61d8ef0ada7de37fca20651"],["/tags/index.html","6351d4a4706ba0abcdb080c46f395f1f"],["/tags/mybatis/index.html","5c361823a13ccffc5abd3b8435057622"],["/tags/nginx/index.html","d226848aab5de7dac553f6882f4aeadb"],["/tags/rabbitMQ/index.html","94d18708d5c29a66800c8105c6c356d8"],["/tags/事务/index.html","8e795a749f3c5431ac4fdc823ae386ab"],["/tags/二叉树/index.html","b674247ffbcfb303dc06a583e9496c0b"],["/tags/会话技术/index.html","c1761d9ea98287d26448d1558d41f267"],["/tags/全局异常处理/index.html","5d2d57c9e4df511cd17318189626f741"],["/tags/动态规划/index.html","cd33ac1894d1e2ac37457d2bd95b7a3d"],["/tags/双指针/index.html","d4989185922238e5ac7452c21cdacf60"],["/tags/哈希/index.html","c0e6a2faaa5e8309f431839325be41d9"],["/tags/堆/index.html","ab2476f877ea1f1b98ecdda8cee4a54e"],["/tags/子串/index.html","5f1bbf3d3d2af40acc0a958d6cc4bdfc"],["/tags/拦截器/index.html","a02e18e7ca39eca064d396ca1b16f42d"],["/tags/普通数组/index.html","3e2eac47bc37a45ed513957dd2109875"],["/tags/树/index.html","83298f3abe8e146644cb66fcfdce6a4c"],["/tags/滑动窗口/index.html","c110d44cb7233b560d8a3263f4d166a2"],["/tags/爬虫/index.html","463046802654c08ae0fec250321e3746"],["/tags/矩阵/index.html","20c9fc27efb3a70d8ab2e7aa2d026f3d"],["/tags/算法/index.html","eeda6995a5e2bb2eba7e97d02789aa54"],["/tags/算法/page/2/index.html","90c7a1001fa4fa882355f02b5900e34e"],["/tags/算法/page/3/index.html","95d3bdbbc302c20411309c4be99c97e7"],["/tags/算法/page/4/index.html","4e3bd7f4bf99f37649773d31a5dc3f73"],["/tags/算法/page/5/index.html","6751629a6c33491fb237ccc00cb47212"],["/tags/贪心算法/index.html","a29c9432902a1e8fa68cb233d3a901eb"],["/tags/软件架构/index.html","3d7d0b62c253c116e2a88fb643885236"],["/tags/过滤器/index.html","a4b60dc3c7e98ed7a4a87a25a2e2e051"],["/tags/链表/index.html","2371cb2613cea761e80ff4f0bea3e9c8"],["/tags/链表/page/2/index.html","1980b3a8f29cf9b32cbd3f12e6ffd28d"]];
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
