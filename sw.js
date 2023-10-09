/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","02cb0eda400ea12b9153f1ae75318651"],["/archives/2023/07/page/2/index.html","4accb3c12af57baa714ee44df10083d2"],["/archives/2023/08/index.html","0f36b0c6145eaccf7c42047ffb1df468"],["/archives/2023/09/index.html","909007578a87647734433277f6aadcfc"],["/archives/2023/09/page/2/index.html","d9ec415ed9dbefc31f231ce375c2f7b6"],["/archives/2023/10/index.html","d387667b97c9e852145af7f4b84095a4"],["/archives/2023/index.html","cf76e76ac9eaf09f5510395f7f5248a9"],["/archives/2023/page/2/index.html","24a37e72c091981d606e594063db8646"],["/archives/2023/page/3/index.html","cc2bedff00b57aaad466980128a712c6"],["/archives/2023/page/4/index.html","38f98d73b74bd2b03328f386a2b2969d"],["/archives/2023/page/5/index.html","f6db094ec370daf5c5103d65d7920826"],["/archives/index.html","28091cdb926370d6e86c87c3f5ac3c79"],["/archives/page/2/index.html","7330dd3f92039bb6418719ec3d36fc07"],["/archives/page/3/index.html","9f4727cdb180f63693f175a5ab7b6731"],["/archives/page/4/index.html","35ef334ebcbb1cd4c51dc5e735629fe4"],["/archives/page/5/index.html","aa1d740d5314dd7dc8e24991122da4db"],["/categories/JavaWeb/AOP/index.html","2e765d726b378e35d5b072a4647b2750"],["/categories/JavaWeb/Bean/index.html","1d38bae74eccf10c865db8bd40718606"],["/categories/JavaWeb/index.html","e145a11aa6d7e6825614472f042ea8c0"],["/categories/flask框架/index.html","971111cc57916c2522e9f9fe45325bcb"],["/categories/index.html","d2c9c7573676f9fa5ecdd15613b5671b"],["/categories/爬虫/index.html","8f94ec7d1cacb9cc67b83d4d0e9196fb"],["/categories/算法/index.html","5c51bd69ff593010d348fc2b6d3401f8"],["/categories/算法/page/2/index.html","ca4d544d10cc1b92c0b94b52390c243c"],["/categories/算法/page/3/index.html","146e29bf3cadb504179fa994c0bcbdfe"],["/categories/算法/page/4/index.html","f5512587ed06c4924087df8447decdc0"],["/categories/算法/二叉树/index.html","26bd47836e156b09e60d2b32ebf51d41"],["/categories/算法/双指针/index.html","12d1e39375651a975e3ceff4f240c195"],["/categories/算法/哈希/index.html","02a7104e45097fbde80ba452972837a2"],["/categories/算法/子串/index.html","e089a1eb7a3c5f52b038046c87c90bc8"],["/categories/算法/普通数组/index.html","505aacb86c80db89473c648dfa07b9c2"],["/categories/算法/滑动窗口/index.html","73d0e1ab10f52b10a990d0f9008bbc9a"],["/categories/算法/矩阵/index.html","fdd3286ce8a8d3884f300cb456190dc2"],["/categories/算法/链表/index.html","56a6e191ccf101a81e9a4cbe5ed8363d"],["/categories/算法/链表/page/2/index.html","d27e425540f044da89ebfb3177adfc77"],["/categories/算法，普通数组/index.html","11210d14d5cb408361c8842a76da0c1b"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6b9fc53d73c4bfd6c30847d22ec67181"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","1d0233610a61c33da6a31773dfdff934"],["/page/3/index.html","3a985bdc85d5f2e914fcee15a1852622"],["/page/4/index.html","3a0ea4bedb08f058bdcf08bed172289a"],["/page/5/index.html","43c0dfa67bffe97c1cc41566a6d7523c"],["/pages/JavaWeb/AOP/AOP.html","076d6620b8f255fcacae7f7dd876817e"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","572c62db0a19016839b8cd6c41baee5a"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/事务管理.html","026a8aa0c326ab8fc6ce583e56be3893"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","d090f5e0e678d8bd2fafeabc517a2c8b"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","f619f9e3925bc0e971454631d72e2b17"],["/pages/JavaWeb/拦截器.html","bb5e2535f58a57346d70c3083875caf5"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","bb410ee6fe13a2083fddbac4409cd010"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","9baebd8121bded803e50e530d5ab05cb"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","164cbc0ce778f66ff62fddb4528ac49c"],["/pages/爬虫/分布式爬虫.html","87e101c6021a7d19e5b80d6bc18b81ac"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","e4e1c7eafb80068af316d409003ebcc2"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","4340ca11d932cb60c857605dc866a193"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","2a4592e55dace327075d2e17389e5184"],["/pages/算法/二叉树/二叉树的最大深度.html","52a46b6de2aef39145f70266b2ed6d65"],["/pages/算法/二叉树/二叉树的直径.html","e4aab4786ff66e17af086419f8f31002"],["/pages/算法/二叉树/二叉树的遍历.html","42c11d7622ef38314ea695e16c184701"],["/pages/算法/二叉树/对称二叉树.html","119eb650384a0e7b4699c6c05b3adaeb"],["/pages/算法/二叉树/翻转二叉树.html","918bca8a8193e6c73a0091e02e0962f7"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/双指针/三数之和.html","1f42e92c4398ac94f9478a711ab43d89"],["/pages/算法/双指针/接雨水.html","a31609762fdd9277f31ea65496e3af44"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","0c0feb6c78af89a2ba053a6821f6b5f4"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","2b64bceee4cf41677d8f586d8774d991"],["/pages/算法/哈希/两数之和.html","83e2af26557d8c91ee6783ae9ee9d2cd"],["/pages/算法/哈希/字母异位词分组.html","b9e1a1960b9bda4919dfe00d8fc8b3ca"],["/pages/算法/哈希/最长连续序列.html","0aa950bae471462fb941745bedd28eed"],["/pages/算法/子串/和为k的子数组.html","08516dc6cd8c40bcc612a5ba6825a814"],["/pages/算法/子串/最小覆盖子串.html","873d1c525162d8a2fe6d8fd933fd56e2"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","21ac2c1f65fd9684ac87d37366bb9110"],["/pages/算法/普通数组/最大子数组和.html","54c294a1e3799b597cdb9dbe46c80d5f"],["/pages/算法/普通数组/轮转数组.html","b75a1fe326900627ee76b6daee2c2057"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","0c22b310f3b3ac320d3c29d1c0d3c8f5"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","dd5d6412b3ff8017504770321dc53e14"],["/pages/算法/矩阵/搜索二维矩阵 二.html","489ddf701e80e4e6fca749526cd80af0"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","b1c6e067f8cda96e3cb54521b76a78e1"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","629c3325d668ea88c610a775578461be"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/链表/k个一组翻转链表.html","545380fe8b840ec2b478a3a74b8707f2"],["/pages/算法/链表/两两交换节点.html","f016aadcfd3c51d9092abca6ee083029"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","34fd5d0852d0ed6c3c88f17490a86ef5"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","10c0f409ddbae9fee8b2fd6c0d102370"],["/pages/算法/链表/反转链表.html","0aff3ffce542093e3263a99c478f01ba"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","59f6506dbf23bf23131c7e7a916a6325"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","b4bb5afd6b9e9419022d0aeb0479ee82"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","e1c94c568b597b6230be1b9f36e69ded"],["/pages/算法/链表/深度拷贝.html","9eecc9d5515663e1ecf16f47538e5ab7"],["/pages/算法/链表/环形链表.html","66b672f559423745bc66ebaee9337b96"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","cec45849bc8be74c09d47f08eb1996f4"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/算法，普通数组/缺失的第一个正数.html","d6cb5d3469a4717bf1f103f3b1a88f95"],["/sw-register.js","cd305d7aab32c20543a5070b7b657998"],["/tags/AOP/index.html","0322b3cf8b502801854147537187abc2"],["/tags/Bean/index.html","b5c61cc297ecc98c1d750ca8e908cc90"],["/tags/JavaWeb/index.html","8601467c05f91c80b769ca2862dcfcf6"],["/tags/Python/index.html","e9e24485beb26cb6e9f4c64dfd95c3d9"],["/tags/flask框架/index.html","5501fd2d13e0e3f22907fb4cef1a50fc"],["/tags/index.html","acf276017512a6778629fa7836ea94e3"],["/tags/事务/index.html","ceb467d11e0625ef84e39b5c66b5d6c3"],["/tags/二叉树/index.html","8edd6472f3e96364da95c95564f3838b"],["/tags/会话技术/index.html","095cda32a682d3c363bb3d360cce43eb"],["/tags/全局异常处理/index.html","bab63613364d2ad1cdc19878b7b67454"],["/tags/双指针/index.html","01b1b4d46af8cf49f71b075e80c2b087"],["/tags/哈希/index.html","4f8991ff835ab291d6aab96086f6af93"],["/tags/子串/index.html","3c61015094a3c3b6f226512794dbc091"],["/tags/拦截器/index.html","a6f849a8a69b4dca5a73f6ed89b7eea3"],["/tags/普通数组/index.html","d949442a6505db8d1cc51c4d7f1a7ba7"],["/tags/滑动窗口/index.html","c261ee0ae069208b44f0a01896bfce78"],["/tags/爬虫/index.html","6100c3ba7e41b0756811f796a6cc047c"],["/tags/矩阵/index.html","298b99eafc48ce51f54aebfa6c88d3d4"],["/tags/算法/index.html","6f3336b68991c8dea0db939c9c39c721"],["/tags/算法/page/2/index.html","b8d55c4b9bc2b53b2c645a4184a15c38"],["/tags/算法/page/3/index.html","a5bd89aa953547413ec3fd1104c4d126"],["/tags/算法/page/4/index.html","11cf6a8371face349b069682c9a0e39c"],["/tags/过滤器/index.html","1a8c1231ff95bd6c7dbdcf2069bab558"],["/tags/链表/index.html","939f82e7e860c5507008a656e7575498"],["/tags/链表/page/2/index.html","fec4585627a46f4d766ae07a5e948c35"]];
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
