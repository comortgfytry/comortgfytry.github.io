/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","47479a603ef73872ec61ce4b7cdab19c"],["/archives/2023/05/index.html","9a6187c90e9afebbf1cb6ea35f7374ee"],["/archives/2023/06/index.html","a6c99c68aef694bcb133935e79544ca0"],["/archives/2023/07/index.html","21890cd72e5020f9716ba2578d386e08"],["/archives/2023/07/page/2/index.html","e500b1b3518a877b8e07bded937abf6f"],["/archives/2023/08/index.html","3b032bc531deed668cb8f0d56b5efb49"],["/archives/2023/09/index.html","3f60b69c28b7cbf4eb9939780ee60c77"],["/archives/2023/09/page/2/index.html","692e5445b2d9c96884820a153012efa6"],["/archives/2023/10/index.html","12ce4d2d68a4716054bf9f9efd0705e9"],["/archives/2023/11/index.html","65246f88069d3f192171adb1659ee680"],["/archives/2023/12/index.html","eb7cba58535aba8163d6e9d28fa0621f"],["/archives/2023/index.html","f98308f86341b7394ebbf9c7e91949cf"],["/archives/2023/page/2/index.html","2ad595eb92b34fd0c74f7c9b16f7e67d"],["/archives/2023/page/3/index.html","b68d5194c6b834c0f1a3f2de869c71a4"],["/archives/2023/page/4/index.html","1ffdbacb907ffd216db0cecd75fe7dff"],["/archives/2023/page/5/index.html","36c874b48a93bb3c86b57b7c4295bd76"],["/archives/2023/page/6/index.html","c0fe49373a811825604dd40466608a62"],["/archives/2023/page/7/index.html","17dd0ffa8aa462a1cd4c5b03064f23ef"],["/archives/index.html","5bc32db4e4287c982aec4f7b0048e1f6"],["/archives/page/2/index.html","2aa593da6181499f0ab37cb856075974"],["/archives/page/3/index.html","9faa315c123ff60a6605499b96f841a6"],["/archives/page/4/index.html","e492e7475963e887320f25f1152db148"],["/archives/page/5/index.html","5ca4c3bc5775010be5793be4ae8dde83"],["/archives/page/6/index.html","381e9b0b505e4bf1f2a40c107d5faad2"],["/archives/page/7/index.html","a7a2d56f217ea31bc20b70d15b9ffe15"],["/categories/JavaWeb/AOP/index.html","a0f99d2c97c4e668d298c2e733473593"],["/categories/JavaWeb/Bean/index.html","9fabefbef92897acf402f587a198e8a1"],["/categories/JavaWeb/index.html","18ac433c405366222625b9f8903399e0"],["/categories/docker/index.html","ec4c8223d3665f30f1b0fff11b1d9e5b"],["/categories/flask框架/index.html","bb2682b07ff05bd626f7fa7b6f4a75fb"],["/categories/index.html","01ed2481288029ee41a3932d280bf6fb"],["/categories/mybatis/index.html","d5cb3579478a01d262d5331d3b6f9549"],["/categories/rabbitMQ/index.html","d5ff0226d4a83c7a5b1091cecbf4d04e"],["/categories/爬虫/index.html","ca61f24d84739a15013360367202714f"],["/categories/算法/index.html","99c201e87101c8d75f5675190a941079"],["/categories/算法/page/2/index.html","3025e6227fb1c66d5726107a17d226da"],["/categories/算法/page/3/index.html","858ceafe3f1cb210555834bd088677c0"],["/categories/算法/page/4/index.html","bfadc5705c1deb232b22feeb2e75fa64"],["/categories/算法/page/5/index.html","6f61209f2f63a5e24b155df0580b3fbb"],["/categories/算法/二分查找/index.html","b1921310c7a0f3cddacfcc618d6f95b0"],["/categories/算法/二叉树/index.html","230a37d75a510cb555f0db70874e3da3"],["/categories/算法/动态规划/index.html","9eeb399e326aca81cdaef08b1b393934"],["/categories/算法/双指针/index.html","dffb87295d2804293c59814e04ebf569"],["/categories/算法/哈希/index.html","d01bb7cfe3caffaf962d19c1d9825dee"],["/categories/算法/堆/index.html","9d7bb82adb3b1d595682e858e7672077"],["/categories/算法/子串/index.html","c88c962ba346457db167c06950ca9775"],["/categories/算法/普通数组/index.html","b60e0e19a77dffdf1bcc8f7673684194"],["/categories/算法/树/index.html","effc21a7f1e64a23a19aa1f9b31e9b9b"],["/categories/算法/滑动窗口/index.html","368dc8436b33423e60819826a2d3242a"],["/categories/算法/矩阵/index.html","1a20578b87a182732261e45f29bf6758"],["/categories/算法/贪心算法/index.html","4a2587fb86fbb80db2577c31e8db0b76"],["/categories/算法/链表/index.html","a187f40715a37832fd029332bec7fce5"],["/categories/算法/链表/page/2/index.html","8d9d22da7616b06d3c2e78045bd9d05b"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6c26b6093351679ab4feb97a47ac91c1"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","8b3cb4a7465d42e8caf2eb4a389e49d6"],["/page/3/index.html","543448890b896bc4fd5c2d839c1a58b6"],["/page/4/index.html","d23481f7fb1dfbc24928985fe9b299ff"],["/page/5/index.html","77a3938bb7ebc4cef1571df5e77a3c57"],["/page/6/index.html","8358dcba2e4175cfb7fc5a648b7f032c"],["/page/7/index.html","00e6e3a4fd6e9fb522cba4166f8fb00c"],["/pages/JavaWeb/AOP/AOP.html","8cc45cef354d55ab32a39d8129dbbe9c"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","ca79214907813d167c06e0eb2abab456"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","6d98be76ad96cea1e2091c34a3653cb3"],["/pages/JavaWeb/事务管理.html","ed8aa82c33723d36e8deb31ec98c9d13"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","aceeac1425be7ecd01dae43989c74ae2"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","c37393f274da8dba7965f4a5addec425"],["/pages/JavaWeb/拦截器.html","3a391e22bdddd118d81bdd095893f22c"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","977e8458a01701a2be0de6f01c51c329"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/docker/docker.html","205ddaa4e18a144fadb135db66bfb22c"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","3cbc1354727c534b053cf5650f40eec5"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","1ead1f39610a480b11a0f76a6f6e2f8b"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","207572167b764c89e27c19d96d9bc875"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/uncategorized/队列.html","cb37a8d48574f7f0839d5dcfab0e0928"],["/pages/爬虫/分布式爬虫.html","7b376d50f292a1c13f57efb148e51aa8"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","3b2bbbf2536b7e841df2f22dbdb40f32"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","848eb1c03aa651950efd24eb4ad7e1ef"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","6ef094240316271d141bdc4d6efff12d"],["/pages/算法/二分查找/搜索二维矩阵.html","506665792a74115767025654be176c8d"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","ed74366395ccc7b53ad692373bf6ee47"],["/pages/算法/二叉树/二叉树的最大深度.html","3f09e11888072cacc3b07b1bc56f24b9"],["/pages/算法/二叉树/二叉树的直径.html","eaa94711996cc9ca199867fff786b87e"],["/pages/算法/二叉树/二叉树的遍历.html","804db3deee2aa1537b301c7820a1303a"],["/pages/算法/二叉树/对称二叉树.html","2848fc6cd3463e821f0b698516f2e2d5"],["/pages/算法/二叉树/翻转二叉树.html","6a3b87f6875b7e6869965a930df949dc"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","5a4edf48c430eb2ad8338b1dbfa61de8"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","1904e1b20d0a6b5e7090bef6aaf25be2"],["/pages/算法/双指针/接雨水.html","715592e9104ce6b61fcf88e60fbe6191"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","ec98cc25193810e8334998890e12a897"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","0301907bb7f9c9fed1b36c96315a26eb"],["/pages/算法/哈希/hash表理解.html","917cc9f19366d39625c478963843ac42"],["/pages/算法/哈希/两数之和.html","f0130d3f8f22be956d1e26c0b6e6dc22"],["/pages/算法/哈希/字母异位词分组.html","176433ff42df865d2605b22fd22221db"],["/pages/算法/哈希/最长连续序列.html","2e229869f07cbc5ba1016ee4fb7dafbc"],["/pages/算法/堆/堆.html","bb929e6f40c67a146460faabaa0717bf"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","b284bf89726dc88d4a5348ee62c668ec"],["/pages/算法/子串/和为k的子数组.html","b1ea62ebef1bef4986d71c04f802cb06"],["/pages/算法/子串/最小覆盖子串.html","197c3ae825e0085e5953b8cbc9a694da"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","3966be8c28a9150b3f933196da1a7f80"],["/pages/算法/普通数组/最大子数组和.html","40ddbad7e1c4a820735e0ae3a2059602"],["/pages/算法/普通数组/缺失的第一个正数.html","90f1c06508c9def68d90199bb6c419de"],["/pages/算法/普通数组/轮转数组.html","c76292a18fe09c773396d523f6d43ab6"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","843cad8cb663ed976255981f4504d5b3"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","907eda9489daa8d6de9a08e3e58ae894"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","a1c83370d5f447c6282acda706cf7cd1"],["/pages/算法/矩阵/搜索二维矩阵 二.html","0cbba3c36fb7ad69e649f798480ef0a6"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","8f7dd241b197e66047a3dcc232fd19a8"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","17bcd800da455be3f112d20a33f2997e"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","62c8eaea033c2a640b50f9909272685c"],["/pages/算法/贪心算法/划分字母区间.html","241991816a4c3ab888adc9a28577e90e"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","1754c3bb656eeb3f7b37c7b5bd173e0b"],["/pages/算法/链表/k个一组翻转链表.html","1399d01b4bd69b74720619b3319a18d8"],["/pages/算法/链表/两两交换节点.html","0f48fc9fe5663acff8c2578d8d55f70e"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","3db046a7f19f27c147f62e0dc70debc7"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","5c371c3770e5e1125f02c765e4fc1c62"],["/pages/算法/链表/反转链表.html","e77dcc19359dce011610fe8991405f4f"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","95eefc74e9c2f475f6eb80b219e49647"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","e8950bff63b5a7ac6894a90ed7454ef4"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","c7d4faa852009775e055a68c751c26ee"],["/pages/算法/链表/深度拷贝.html","a7499e538762a178767b37b90e6fcc43"],["/pages/算法/链表/环形链表.html","3053d93cff28735dc904f5633d9179b6"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","c1148c89c0d902c007bc2460c8ad7b2d"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/source/_posts/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/source/_posts/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/source/_posts/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/source/_posts/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/source/_posts/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/source/_posts/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/source/_posts/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/source/_posts/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/source/_posts/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/source/_posts/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/source/_posts/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/source/_posts/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/source/_posts/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/source/_posts/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/source/_posts/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/source/_posts/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/source/_posts/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/source/_posts/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/source/_posts/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/source/_posts/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/source/_posts/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/source/_posts/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/source/_posts/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/source/_posts/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/source/_posts/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/source/_posts/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/source/_posts/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/source/_posts/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/source/_posts/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/source/_posts/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/source/_posts/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/source/_posts/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/source/_posts/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/source/_posts/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/source/_posts/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/source/_posts/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/source/_posts/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/source/_posts/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/source/_posts/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/source/_posts/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/source/_posts/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/source/_posts/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/source/_posts/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/source/_posts/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/source/_posts/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/source/_posts/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/source/_posts/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/source/_posts/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/source/_posts/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/source/_posts/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/source/_posts/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/source/_posts/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/source/_posts/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/source/_posts/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/source/_posts/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/source/_posts/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/source/_posts/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/source/_posts/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/source/_posts/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/source/_posts/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/source/_posts/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/source/_posts/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/source/_posts/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/source/_posts/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/source/_posts/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/source/_posts/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/source/_posts/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/source/_posts/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/source/_posts/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/source/_posts/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/source/_posts/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/source/_posts/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/source/_posts/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/source/_posts/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/sw-register.js","535699e19c815f9b844f7229c4baf501"],["/tags/AOP/index.html","ca71715cfe80dd5aff620eb07c0b4c89"],["/tags/Bean/index.html","6d57ea1ed459449dd45a291d74130ae2"],["/tags/JavaWeb/index.html","9ed3e9cbe48c9f6f7379e1fc13bbdefb"],["/tags/Python/index.html","555943a60729e524e6895b8ffa7d1a38"],["/tags/docker/index.html","b695e9b397fab578e9289d35711f47f1"],["/tags/flask框架/index.html","06da26a7b1a1737c5bfd2e42e9610556"],["/tags/index.html","8df43a802f099ccd383516a18deb4fe6"],["/tags/mybatis/index.html","5fae893e4a1b4fb1c95cc7f74abb105b"],["/tags/nginx/index.html","198ee2ae09e3832ca59043fbdf50bd5f"],["/tags/rabbitMQ/index.html","529f466a1814427688e169797149cdbd"],["/tags/事务/index.html","875ea495da759961d5576130404dde96"],["/tags/二叉树/index.html","2cb6cf52677839530ce4731f4d10e4c9"],["/tags/会话技术/index.html","95667ee5915afac24cdea2c819b9f918"],["/tags/全局异常处理/index.html","411ad802f09e769f5be245a3cd51ec63"],["/tags/动态规划/index.html","a5973c6acdd91759ac184930d94c033b"],["/tags/双指针/index.html","5217a2bca5849dc55bdbbea4bba3c2f4"],["/tags/哈希/index.html","e538434eb0c479585a15755e45ecc99d"],["/tags/堆/index.html","6719dd4f37b43ebdd196ed2a926fa298"],["/tags/子串/index.html","6412f5f34ae9200cea40ef189f20ec80"],["/tags/拦截器/index.html","34db8127b013947c7b7416fb093dc86f"],["/tags/普通数组/index.html","c3b8aef37b3a9d48614024f5085bebe7"],["/tags/树/index.html","a2af541a36b274c04a19fc0e809b176d"],["/tags/滑动窗口/index.html","e41f850d7c1d381427e53a2b4f87335a"],["/tags/爬虫/index.html","843a2d1a42282d5031a9de7ea4d08982"],["/tags/矩阵/index.html","50cab2d0177422ea3ec529138b36f08c"],["/tags/算法/index.html","7fa1c690c2cd226e76b804ab9ca9966a"],["/tags/算法/page/2/index.html","1702fdc963db4cd031db661417ed41c4"],["/tags/算法/page/3/index.html","4bc2f238add8bd2b915639e27a817529"],["/tags/算法/page/4/index.html","7dc98a4859a259ae2506230aa26afcb9"],["/tags/算法/page/5/index.html","57f0c4e0af15006892f22328951b7173"],["/tags/贪心算法/index.html","98111b75b7f5d5ddd850121f47a8c66f"],["/tags/过滤器/index.html","4fb0b096c658ddf1409a094882235c78"],["/tags/链表/index.html","1ecf8149670593744e159343bb892a5c"],["/tags/链表/page/2/index.html","3a2703d907b69562214a31413041935b"]];
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
