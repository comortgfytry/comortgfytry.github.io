/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","93d08623024b78aba711420959fef88d"],["/archives/2023/07/page/2/index.html","606901c89442476344b0e373240c39d1"],["/archives/2023/08/index.html","2b005a7f54c66bccd6ec3f40073bc3b1"],["/archives/2023/09/index.html","5a9ab7673d3d466e0ac97909e323fa6e"],["/archives/2023/09/page/2/index.html","194172c0df0133e9a53ec1eaa15dcd4e"],["/archives/2023/10/index.html","d387667b97c9e852145af7f4b84095a4"],["/archives/2023/index.html","0c1c3af27f0bd45ab350ca108b7d56b6"],["/archives/2023/page/2/index.html","833480c69e57e4e9cc7d3ace511ee796"],["/archives/2023/page/3/index.html","86fcefbab41590b2f044cdaefd92a087"],["/archives/2023/page/4/index.html","eec5ac83af4e9931b67d3661f71314f5"],["/archives/2023/page/5/index.html","032a010685f1c882349f012805c314b8"],["/archives/index.html","ea4816688381df012eedea4a340e533c"],["/archives/page/2/index.html","ea268474bbfbe1bdb58bcf2a5ca67a25"],["/archives/page/3/index.html","6f0004926a8fe6ba1aa590251a418eb1"],["/archives/page/4/index.html","372ca1845a87e39e55195e5f0beb72db"],["/archives/page/5/index.html","8e4998707fd339b3023641711a67b34a"],["/categories/JavaWeb/AOP/index.html","8cefaf8354fd822349d3a42e947a9890"],["/categories/JavaWeb/Bean/index.html","0affec2f00c6c5d91b067677fe6a9c12"],["/categories/JavaWeb/index.html","3c36cf24404970f3b2e31d5f9de14ee6"],["/categories/flask框架/index.html","827df64b11aacf5d611bbe16bc783728"],["/categories/index.html","4f9e3b6071d6db046e0fa7e27d914da8"],["/categories/爬虫/index.html","b55e94dd19edabe08e1d1628658a5fbb"],["/categories/算法/index.html","40f2b1fbc1575f9c4166f7addc285614"],["/categories/算法/page/2/index.html","30ffc5094582dc07c875d8d90d56989e"],["/categories/算法/page/3/index.html","1b96cde0b6a9a23f876875dd474816d0"],["/categories/算法/page/4/index.html","b818951154509d750364954f25410dce"],["/categories/算法/二叉树/index.html","29d12c850efbc6ec90621e4cac87307b"],["/categories/算法/双指针/index.html","22499816794e9766abd1483d1a986dfa"],["/categories/算法/哈希/index.html","2ff30abf876588ac7c68d5d23ff0f4f2"],["/categories/算法/子串/index.html","1924638237463aaa30cfa97644fa562c"],["/categories/算法/普通数组/index.html","a70b6c726da1a3f263d293e46ddec721"],["/categories/算法/滑动窗口/index.html","b59844c39769876f71e442613980265c"],["/categories/算法/矩阵/index.html","2daf87b5b9279ccdedeb99eb88365e17"],["/categories/算法/链表/index.html","7a69eab4517e759f205a01ad263f6816"],["/categories/算法/链表/page/2/index.html","9876b21f8d6549539f1db34953e5997f"],["/categories/算法，普通数组/index.html","b5446cf9cc0674bd08a08918d261991e"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f22658f99a4484ce00fc3df35c9cf107"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","19b4a0144666d7b9423b1e22f1a2e23a"],["/page/3/index.html","51303e9b8769611f0c9319a4fb34ca77"],["/page/4/index.html","dd03ddbe6045ee4b5e0e26dfac129e74"],["/page/5/index.html","f2187bad80160dd442841f824d54b7eb"],["/pages/JavaWeb/AOP/AOP.html","693b2e5ff6fd423e5b5d2411203df30f"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","4572281c8dd98945eddd098b621da60f"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/事务管理.html","026a8aa0c326ab8fc6ce583e56be3893"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","d090f5e0e678d8bd2fafeabc517a2c8b"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","f619f9e3925bc0e971454631d72e2b17"],["/pages/JavaWeb/拦截器.html","bb5e2535f58a57346d70c3083875caf5"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","bb410ee6fe13a2083fddbac4409cd010"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","9baebd8121bded803e50e530d5ab05cb"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","164cbc0ce778f66ff62fddb4528ac49c"],["/pages/爬虫/分布式爬虫.html","87e101c6021a7d19e5b80d6bc18b81ac"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","e4e1c7eafb80068af316d409003ebcc2"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","4340ca11d932cb60c857605dc866a193"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","2a4592e55dace327075d2e17389e5184"],["/pages/算法/二叉树/二叉树的最大深度.html","e359db64ab706da03053281f8bb7f018"],["/pages/算法/二叉树/二叉树的直径.html","77344eb30a923200ff33488ca701ff9c"],["/pages/算法/二叉树/二叉树的遍历.html","15f525899fbd6d9427906175ca01853d"],["/pages/算法/二叉树/对称二叉树.html","ec6d5119eb3f13795c457fa33e1aad3e"],["/pages/算法/二叉树/翻转二叉树.html","afeb701a95481e45cce5d32af2e3e0b6"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/双指针/三数之和.html","1f42e92c4398ac94f9478a711ab43d89"],["/pages/算法/双指针/接雨水.html","a31609762fdd9277f31ea65496e3af44"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","0c0feb6c78af89a2ba053a6821f6b5f4"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","2b64bceee4cf41677d8f586d8774d991"],["/pages/算法/哈希/两数之和.html","83e2af26557d8c91ee6783ae9ee9d2cd"],["/pages/算法/哈希/字母异位词分组.html","b9e1a1960b9bda4919dfe00d8fc8b3ca"],["/pages/算法/哈希/最长连续序列.html","0aa950bae471462fb941745bedd28eed"],["/pages/算法/子串/和为k的子数组.html","08516dc6cd8c40bcc612a5ba6825a814"],["/pages/算法/子串/最小覆盖子串.html","873d1c525162d8a2fe6d8fd933fd56e2"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","21ac2c1f65fd9684ac87d37366bb9110"],["/pages/算法/普通数组/最大子数组和.html","54c294a1e3799b597cdb9dbe46c80d5f"],["/pages/算法/普通数组/轮转数组.html","b75a1fe326900627ee76b6daee2c2057"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","0c22b310f3b3ac320d3c29d1c0d3c8f5"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","dd5d6412b3ff8017504770321dc53e14"],["/pages/算法/矩阵/搜索二维矩阵 二.html","489ddf701e80e4e6fca749526cd80af0"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","b1c6e067f8cda96e3cb54521b76a78e1"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","629c3325d668ea88c610a775578461be"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/链表/k个一组翻转链表.html","0af6720cc562d226cc1c38253b71c019"],["/pages/算法/链表/两两交换节点.html","a62feaebb573e1119cdea299deceb560"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","34fd5d0852d0ed6c3c88f17490a86ef5"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","dd6bf69995450dbffceae9216e4b6dc3"],["/pages/算法/链表/反转链表.html","0aff3ffce542093e3263a99c478f01ba"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","59f6506dbf23bf23131c7e7a916a6325"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","b4bb5afd6b9e9419022d0aeb0479ee82"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","39e1927f3a0ecd357e8bbcddaa52121f"],["/pages/算法/链表/深度拷贝.html","450e0c2e21f961d4c6d8fed51529dbb9"],["/pages/算法/链表/环形链表.html","66b672f559423745bc66ebaee9337b96"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","cec45849bc8be74c09d47f08eb1996f4"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/算法，普通数组/缺失的第一个正数.html","d6cb5d3469a4717bf1f103f3b1a88f95"],["/sw-register.js","36bc6fbd3e8f6b9867ad6b42065ca659"],["/tags/AOP/index.html","c18df1f11a699c0fc19e6e6c3da3fb85"],["/tags/Bean/index.html","09a3e2ac22cd3c4f7efe4c7ca881f449"],["/tags/JavaWeb/index.html","a5b8106c27848a7a3099928b6bde663b"],["/tags/Python/index.html","54cda7828987e959c77e72ee6807408b"],["/tags/flask框架/index.html","baa02ad416d8aa315e8403b0aa2d6b0d"],["/tags/index.html","1a40a345dd7abf457dbc11336252d246"],["/tags/事务/index.html","b1a1f0e496a8cf8418c1c521739390b4"],["/tags/二叉树/index.html","e3359b3bbbc55ccac8169c7f613a1d20"],["/tags/会话技术/index.html","af2858447cfb36286ead60d8ad15a161"],["/tags/全局异常处理/index.html","8b312474cadf59fd47404037da03fabb"],["/tags/双指针/index.html","bd55a3ad67ce154346b51792b89b717b"],["/tags/哈希/index.html","0efbf299275be9ec1693257f8fe2f607"],["/tags/子串/index.html","5509bcb2aebbdd6c9e39b30f0368e00a"],["/tags/拦截器/index.html","33aaccd6cbd8a4225db2de1fcdd65146"],["/tags/普通数组/index.html","cb7412dbc63dd6c586fb76766844eec0"],["/tags/滑动窗口/index.html","544eb326cf5030b9f1661e178016af8f"],["/tags/爬虫/index.html","5859181d7c6c129769a6cd281847d33f"],["/tags/矩阵/index.html","a206532092e34701890d481c460c7fd7"],["/tags/算法/index.html","29a5498af568f73452896352edc97e1d"],["/tags/算法/page/2/index.html","4f61dc6b1b8628061279164179f82a86"],["/tags/算法/page/3/index.html","8b8f95c7ebe481f80078c3cd6b8dddcc"],["/tags/算法/page/4/index.html","69cce9377648d3a1d8cfc288407cfe29"],["/tags/过滤器/index.html","66d5ed6ee1ed68cbaf5296072214be57"],["/tags/链表/index.html","02664fe6251f709f60db21baf34c153d"],["/tags/链表/page/2/index.html","bfc4989bcb2c766adbacb6a44079bd43"]];
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
