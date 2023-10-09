/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","88c2cf59d4885697ab69cc62e112b147"],["/archives/2023/07/page/2/index.html","70e93d1535290b861afb19506f6a4e61"],["/archives/2023/08/index.html","5a8abcb88eee43c8ab4ffa93fe16b4b1"],["/archives/2023/09/index.html","18b7dbec12e2043f97f291f76ab9ad21"],["/archives/2023/09/page/2/index.html","3e4d75ab6f12553d852d4bc9e666ed58"],["/archives/2023/10/index.html","d387667b97c9e852145af7f4b84095a4"],["/archives/2023/index.html","048c300273f8a8a2e6f7ac92e43d5de2"],["/archives/2023/page/2/index.html","9d26e45ae734e14739190b40b50691f7"],["/archives/2023/page/3/index.html","0da2d0aaac7a2a9e9cee500f3dd19b5a"],["/archives/2023/page/4/index.html","a2a10887d3ba8227c56726dcb0808f2f"],["/archives/2023/page/5/index.html","54c3080b818eae354ef99638f948264d"],["/archives/index.html","4e71e62d1d938d05afae891c41916a2d"],["/archives/page/2/index.html","b80f9919243aa606ad4d296598ee52df"],["/archives/page/3/index.html","90c46f5e8fb73fe918c19df12652d0da"],["/archives/page/4/index.html","5e8738f13ad4f1a7974816448ee9e6da"],["/archives/page/5/index.html","3ab40e24e1c7a053bd3963c5fe84fd67"],["/categories/JavaWeb/AOP/index.html","65460c73ebf7faaddf2b76be4471dd22"],["/categories/JavaWeb/Bean/index.html","6dad1ae98b72168da865175f2010513f"],["/categories/JavaWeb/index.html","ce529fd147f7649e49c90ea240333141"],["/categories/flask框架/index.html","9e23ea7b2861833c87e24157c7806a45"],["/categories/index.html","f589ab4533cf7a8c847c29099a069e49"],["/categories/爬虫/index.html","c0879a9450ecabd4b2859da04800a57a"],["/categories/算法/index.html","2acd190c5e5d0da324ced3a1579c033c"],["/categories/算法/page/2/index.html","42f8538f20ad24c68c6a4ab3bf9dedea"],["/categories/算法/page/3/index.html","5781432e87db45b4dabb793312b3917f"],["/categories/算法/page/4/index.html","69b6fb1cdd76a7a5df9ee3118c4aa37a"],["/categories/算法/二叉树/index.html","0c394e5e87f43ef5c7014a8ea129586c"],["/categories/算法/双指针/index.html","133b4fa939b153546aef8c6631b60457"],["/categories/算法/哈希/index.html","52d3447adcbbfa2950f4df2f0e6fd1d1"],["/categories/算法/子串/index.html","29c332b96c5cb2499cc53b0f02fc0957"],["/categories/算法/普通数组/index.html","b22a3dd729042e96326060e70e071a69"],["/categories/算法/滑动窗口/index.html","8c78ba6dd465b0fb5b35f901e9664dc3"],["/categories/算法/矩阵/index.html","0a1e406b5f229192bb037838c393633a"],["/categories/算法/链表/index.html","e2eb93dfdc13f271a9be6a8a4a2568c5"],["/categories/算法/链表/page/2/index.html","d032d11a7c6facccaa2ce921b2705e53"],["/categories/算法，普通数组/index.html","6690f891c5a9ede9fe6466beb643b322"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8038b6bbbf3eef454602f684f3d89945"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","0424c8c5f605579136ddb066f4c2b71e"],["/page/3/index.html","9d2b27c0115ac5ad094692923d99f2ce"],["/page/4/index.html","86b43ff6131307658b388c65b6b523ef"],["/page/5/index.html","27aa4344caa100b1818e4c25cd7780cd"],["/pages/JavaWeb/AOP/AOP.html","0d8035ac2d57d4e467cf99e98e3e3699"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","3ab696688137ce880d0316df5a4cb38a"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/事务管理.html","026a8aa0c326ab8fc6ce583e56be3893"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","d090f5e0e678d8bd2fafeabc517a2c8b"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","f619f9e3925bc0e971454631d72e2b17"],["/pages/JavaWeb/拦截器.html","bb5e2535f58a57346d70c3083875caf5"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","bb410ee6fe13a2083fddbac4409cd010"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","9baebd8121bded803e50e530d5ab05cb"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","164cbc0ce778f66ff62fddb4528ac49c"],["/pages/爬虫/分布式爬虫.html","87e101c6021a7d19e5b80d6bc18b81ac"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","e4e1c7eafb80068af316d409003ebcc2"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","4340ca11d932cb60c857605dc866a193"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","2a4592e55dace327075d2e17389e5184"],["/pages/算法/二叉树/二叉树的最大深度.html","f6120b9989e4fa0280e24493991949cd"],["/pages/算法/二叉树/二叉树的直径.html","f4ae43c4e006aa07adf372bd9e7e155f"],["/pages/算法/二叉树/二叉树的遍历.html","58613592aa2e0dfd0be5100cc78abec3"],["/pages/算法/二叉树/对称二叉树.html","e85a4b50f2948a0e62cd436e08c53915"],["/pages/算法/二叉树/翻转二叉树.html","626262a863451f64b0fb6bee65dd63a6"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/双指针/三数之和.html","1f42e92c4398ac94f9478a711ab43d89"],["/pages/算法/双指针/接雨水.html","a31609762fdd9277f31ea65496e3af44"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","0c0feb6c78af89a2ba053a6821f6b5f4"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","2b64bceee4cf41677d8f586d8774d991"],["/pages/算法/哈希/两数之和.html","83e2af26557d8c91ee6783ae9ee9d2cd"],["/pages/算法/哈希/字母异位词分组.html","b9e1a1960b9bda4919dfe00d8fc8b3ca"],["/pages/算法/哈希/最长连续序列.html","0aa950bae471462fb941745bedd28eed"],["/pages/算法/子串/和为k的子数组.html","08516dc6cd8c40bcc612a5ba6825a814"],["/pages/算法/子串/最小覆盖子串.html","873d1c525162d8a2fe6d8fd933fd56e2"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","21ac2c1f65fd9684ac87d37366bb9110"],["/pages/算法/普通数组/最大子数组和.html","54c294a1e3799b597cdb9dbe46c80d5f"],["/pages/算法/普通数组/轮转数组.html","b75a1fe326900627ee76b6daee2c2057"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","0c22b310f3b3ac320d3c29d1c0d3c8f5"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","dd5d6412b3ff8017504770321dc53e14"],["/pages/算法/矩阵/搜索二维矩阵 二.html","489ddf701e80e4e6fca749526cd80af0"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","b1c6e067f8cda96e3cb54521b76a78e1"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","629c3325d668ea88c610a775578461be"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/链表/k个一组翻转链表.html","375d126be0edc103a408087dac72aefd"],["/pages/算法/链表/两两交换节点.html","ad770b360991be84acd01e00af9470d5"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","34fd5d0852d0ed6c3c88f17490a86ef5"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","babf24b608641cd16e8f8774f888edff"],["/pages/算法/链表/反转链表.html","0aff3ffce542093e3263a99c478f01ba"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","59f6506dbf23bf23131c7e7a916a6325"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","b4bb5afd6b9e9419022d0aeb0479ee82"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","0517067efc1436a5dc16ded057fb3f8c"],["/pages/算法/链表/深度拷贝.html","3981facc825927aa6a04f986074fcc74"],["/pages/算法/链表/环形链表.html","66b672f559423745bc66ebaee9337b96"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","cec45849bc8be74c09d47f08eb1996f4"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/算法，普通数组/缺失的第一个正数.html","d6cb5d3469a4717bf1f103f3b1a88f95"],["/sw-register.js","9a021656217537d6669233d22096eabc"],["/tags/AOP/index.html","b30746be0d3ffcdc795f45dfdd4ecf4d"],["/tags/Bean/index.html","c5dd02eb48224027655cc661ed3fded8"],["/tags/JavaWeb/index.html","feb402f079dee3e768e621c2cf4b9a84"],["/tags/Python/index.html","077e1151e7d3c3d6fccd980881deb725"],["/tags/flask框架/index.html","c4269a7651e0c0b345360102e2330141"],["/tags/index.html","357a61feb1ffc91bc2f91e654f1001b9"],["/tags/事务/index.html","a45a9aa5f0194707102216eb5cbe337b"],["/tags/二叉树/index.html","2bd7acfb993e6da4cba65b7cea94c55e"],["/tags/会话技术/index.html","2b5affa96039b7a1cf74270a2baf2d64"],["/tags/全局异常处理/index.html","64dc1df038156f187bae36b979f27210"],["/tags/双指针/index.html","f4a803eff76887ed36d7828a5c573865"],["/tags/哈希/index.html","778e24f26680161a8ff19a2d320c3042"],["/tags/子串/index.html","c2b9c8ef5f33252cfa4da382298c9e8e"],["/tags/拦截器/index.html","b7673e95f4e6fdf854e37413c4d06d02"],["/tags/普通数组/index.html","99f32c224a94db7e4af7324210b89582"],["/tags/滑动窗口/index.html","ac2e56a451d9ff27d39c15c617a0b70f"],["/tags/爬虫/index.html","c38ce4a47f12479235223469c6e88612"],["/tags/矩阵/index.html","f7abef02b905d26c416b21850997ce5f"],["/tags/算法/index.html","35609582c7066fa20986153e2cbb3653"],["/tags/算法/page/2/index.html","2dacded379c464f3db765b7f1fa75061"],["/tags/算法/page/3/index.html","ebceb0c60cc0c1d37d8897a73016cfff"],["/tags/算法/page/4/index.html","8b0eac971025616e9cff714f246fe0ae"],["/tags/过滤器/index.html","36fbbc2f91326c45dd43cd570fcf5a26"],["/tags/链表/index.html","2f97e04a2f6f0699d36a1ab74ba67618"],["/tags/链表/page/2/index.html","7bc0e15fac5e4176bfbdf6c77be5e77f"]];
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
