/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","e8dfbc6a4423640d8cf1631df44cfd24"],["/archives/2023/07/page/2/index.html","23acd533b9ec935b8742b3314b3a71af"],["/archives/2023/08/index.html","3955241ad43e1c86fbab4167e0618da1"],["/archives/2023/09/index.html","6e2aaf9c39dc872605db9b021786faaf"],["/archives/2023/09/page/2/index.html","77e9d1ca8bb638f5f4f801d640c77c76"],["/archives/2023/index.html","2a07794f15cff65622207000448060ae"],["/archives/2023/page/2/index.html","2f361ce1a5d919a4c2ea23b992e4991d"],["/archives/2023/page/3/index.html","21be2ccaf8c2292303f0923ee9ff11c9"],["/archives/2023/page/4/index.html","9c497ab9fdb20883aa094a6b250daec6"],["/archives/index.html","1a28b7ae8bb9707210ae75e441609047"],["/archives/page/2/index.html","e8eeb05db39547675c3f2ff459635404"],["/archives/page/3/index.html","e3dcb99aab0e403c0110203b8f269b1a"],["/archives/page/4/index.html","0c071c32226b62d8cf3675f1f1b1e6d7"],["/categories/JavaWeb/AOP/index.html","ec4453e90c104d2c9144a2a896127fb0"],["/categories/JavaWeb/Bean/index.html","988722cb329795450447be80cd9110bb"],["/categories/JavaWeb/index.html","c76000dba15db7b8ab2865e339741626"],["/categories/flask框架/index.html","cc6a9ad461d6db6cceeb8d868257b708"],["/categories/index.html","a0f7d2140b1b5a2c3a2a0ff25a552c06"],["/categories/爬虫/index.html","5beddcf46847b9e2753a12b8f89838c0"],["/categories/算法/index.html","1a13acda23235aacfe9d415a8371744f"],["/categories/算法/page/2/index.html","c81f149c2b866704e8ab2ea47fbd8d01"],["/categories/算法/page/3/index.html","207a4310f29051dd9454175d7f3cb0cf"],["/categories/算法/双指针/index.html","a4b10e807aa8c74336894963d4eb2173"],["/categories/算法/哈希/index.html","3f5c7c734959b7150c3c46ed62821656"],["/categories/算法/子串/index.html","fe31dcca6e4aca0178420cc5be8b528e"],["/categories/算法/普通数组/index.html","09c20bd0d0c2364a1e4f443062c65bd0"],["/categories/算法/滑动窗口/index.html","05de2b297b181264936b30ac1a174104"],["/categories/算法/矩阵/index.html","fed18f8856077470d26d330193f4b535"],["/categories/算法/链表/index.html","f6d276854a3341c2ea37cb7e6645dfb6"],["/categories/算法，普通数组/index.html","ae1d92aa21c3eb881114c0fedf13efcc"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e9ab0af0a60c27cdcbc3fdd7ea41f4bb"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","bebdda5e7ca3865da5191ce9855f1e2f"],["/page/3/index.html","d5287443b107302ae71978cbda0ddb40"],["/page/4/index.html","357918d1e0e10d0ed8e9e26e31dc547b"],["/pages/JavaWeb/AOP/AOP.html","995dfcdd038a698fb6ce24fcacb731c9"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","93ba30ea328b746d8170b158d289a4ac"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/事务管理.html","45aa204522f6131a0f2271ebbed123ac"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","f358b507c01f334bbc09d27d2b617a4c"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","32c3fc1d034476b3281c0fd3b199fdc3"],["/pages/JavaWeb/拦截器.html","38fc0b7f2efd069bdf6d8cc8f4283b2e"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","83f26e143dac5c9457523b952144688a"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","c37a5df6799dc03e102fcc92ba4cc3b9"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","bd13a81190a76ab35d702cea3d711bf0"],["/pages/爬虫/分布式爬虫.html","feb674ef3fce96b0d54b753393fc2427"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","b4f4b89e403b402d0e0f59edb3208d2f"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","39ef54fbf68e010661dd350bdbfa67da"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","348522151f1f778f39f77ffec6e516d2"],["/pages/算法/双指针/三数之和.html","adfd6c29fdfd7fb23840b42e2d628dfa"],["/pages/算法/双指针/接雨水.html","ed1d6795ea8b179e5104358209fd6d46"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","b471bdecb83d50369895145e65c941f9"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","a43b923e90a9ccdf8f44f7541c29961e"],["/pages/算法/哈希/两数之和.html","ce96d61c9c5297a230d72450c7b7b4c3"],["/pages/算法/哈希/字母异位词分组.html","1571becee2ade22a51e07438029198c6"],["/pages/算法/哈希/最长连续序列.html","24bed6c2f37c5f668c1cee011fffcd4b"],["/pages/算法/子串/和为k的子数组.html","6d67a191da812647d22dcedc6c91927a"],["/pages/算法/子串/最小覆盖子串.html","c38840d992742ce473b89141aad78597"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","f737e10f175216f3a40d00da4eb63b41"],["/pages/算法/普通数组/最大子数组和.html","6c9dcfc97a68bba69302171c7b3472bb"],["/pages/算法/普通数组/轮转数组.html","7f3952f4f0a7723172fbda47bdfd2e6e"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","7993b3b05242fc4b9df7b06b5a0f9abd"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","a31d9b414246a56cfc1dce3acf84709d"],["/pages/算法/矩阵/搜索二维矩阵 二.html","2c03a2fc15beeaa93a1f0fdabe0b6768"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","e487757b4a881630338f7c6adef29159"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","e69e9cbc8e793390b667f2ce2e705831"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/链表/两两交换节点.html","dcd999a59b7fa76b28f1836d569e92c6"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","c79cde562f6fa70f458fcb513ed797e5"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","6f5a6f256afea66c40ecdd86a5d2d794"],["/pages/算法/链表/反转链表.html","d95236b867ff1c8f2c92950126390312"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","92ed9da4d55368c336ada422340289b7"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","82eca23d295c643249bc07c5b8e8d031"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/环形链表.html","8148c5882bd2f120b75d2053fbff1480"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","727d94ce8a00cbb926e9ecf29f0bc7ab"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/算法，普通数组/缺失的第一个正数.html","43e0121cdac7dbfceeeaf9451a9ef986"],["/sw-register.js","0686147faafaabd15ef2a1f3785a0730"],["/tags/AOP/index.html","4735b164e191189a1e4bfe14eb29a6e2"],["/tags/Bean/index.html","6f5e12384e16e90dd4b3d5605c2f746f"],["/tags/JavaWeb/index.html","dd49256613c4b5141ec130a9ddf0aa92"],["/tags/Python/index.html","169c44dc23a050ae95f7fbbb029c422f"],["/tags/flask框架/index.html","f7fda376ab95d250afdfc67aa5b41729"],["/tags/index.html","cbf53fd3c9fa9e63088c2104f331a634"],["/tags/事务/index.html","55174264fea22b0213ada2ae01d53073"],["/tags/会话技术/index.html","60cf1779a64061fbc5b1b6072059097b"],["/tags/全局异常处理/index.html","18f78634d281cfae4c34d2eb06f45a53"],["/tags/双指针/index.html","973a69b4e303891a079fb905d08ffc78"],["/tags/哈希/index.html","b592a769b8be2a726cf6a78182d514af"],["/tags/子串/index.html","aeeb9a7cdeeaf61aac7054ba30502bcf"],["/tags/拦截器/index.html","55a0785a5eae69fcc1b660b42067f28a"],["/tags/普通数组/index.html","30ad6293ab509dba71291aad0d01a0c4"],["/tags/滑动窗口/index.html","c9fcc85aea472f14e93270b823465d11"],["/tags/爬虫/index.html","c71ab528f1483033a6009de6083737a2"],["/tags/矩阵/index.html","e9e980dd5edaa568ca7d67487e384afb"],["/tags/算法/index.html","0599954c76e19fd78f06a7774193a394"],["/tags/算法/page/2/index.html","797d0fde0477016462a412945906d1fa"],["/tags/算法/page/3/index.html","6f33f4eae7932250d0eb51b393bbedc1"],["/tags/过滤器/index.html","27a0d000ec6fa06d9420808b243e8778"],["/tags/链表/index.html","9ce4549d0acdd4a0c1b0ad30ff8aba5f"]];
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
