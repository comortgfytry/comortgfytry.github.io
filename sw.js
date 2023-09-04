/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","077f03ea57e0c0340d56943633121ff7"],["/archives/2023/07/page/2/index.html","34786a3521054d39853c18a5fa3f203c"],["/archives/2023/08/index.html","930d87ea6b52b0677814aa1aa3566055"],["/archives/2023/09/index.html","ce727b3460b8df6921a27b6f8bba863a"],["/archives/2023/index.html","204eacfa2f02c716f37a0b116b5d97c7"],["/archives/2023/page/2/index.html","21598b15e8b21aab90c4363eb8809bae"],["/archives/2023/page/3/index.html","b75d36833143efd1536bbc0b3d5bee27"],["/archives/2023/page/4/index.html","14dabcc287ce488848a78d2152035af5"],["/archives/index.html","eb3a7efb57ad60a9c3a728e824242c47"],["/archives/page/2/index.html","3026bf4d26325fe4deaed395d57b256c"],["/archives/page/3/index.html","53b7d08a08df30ee0a0043399b62688d"],["/archives/page/4/index.html","8ad0f3a93bd188d1744cf9f038b4ed51"],["/categories/JavaWeb/AOP/index.html","736273828baff3d01bf805db20c0cf92"],["/categories/JavaWeb/Bean/index.html","567259094521eedf9c4cfde2d2acd714"],["/categories/JavaWeb/index.html","abc15abc8704eef3d7d4337aacc1fb55"],["/categories/flask框架/index.html","8e1e100a92d1e3f5a969d5dbeebe50b2"],["/categories/index.html","7f35284faae344b0f423a89cd2b8cc5e"],["/categories/爬虫/index.html","6de7e3db4ce8d405cdd06df3a44db3ec"],["/categories/算法/index.html","a9d1f23964571102af4f7a538362c9d6"],["/categories/算法/page/2/index.html","56bfecc945b18a04ceb7d0641f4cb98a"],["/categories/算法/双指针/index.html","c0785711ac2817393f8a0c178e75da56"],["/categories/算法/哈希/index.html","d7249a99f2e9be620d6441496172c394"],["/categories/算法/子串/index.html","03a0ab06972254336fd24e86d143de1c"],["/categories/算法/普通数组/index.html","0937f5d6516d5f6a9d49f8f793de5ac9"],["/categories/算法/滑动窗口/index.html","e3791bdc07d94f060efc4d2ee0977cb9"],["/categories/算法，普通数组/index.html","3af153da3ef4aa19a6aa884a245cbc76"],["/categories/算法，矩阵/index.html","896107f25461a91abf69fcbe91ce8fb4"],["/categories/算法，链表/index.html","c3e5f38222a505ac25fd9e97b2c4a77a"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","da0c00b3f46ddc4e533d1122d5756033"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","102cd6d3eae05fc651ea98809b95e073"],["/page/3/index.html","9fbecf91e14e3ffbb30e1aa1f53e8192"],["/page/4/index.html","7e2d603a38e350c2aa23251da64eaabb"],["/pages/JavaWeb/AOP/AOP.html","fe34e51f5b94aeb77301759dbb3c4c67"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","af22303de33698b996a9bfaf760513a5"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/事务管理.html","de55bc6ff8622528702f0c73458be101"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","e8003b5bcb5eeea35eaafb31035f6c17"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","e62765105f49c7775d20e7b663eb0dcd"],["/pages/JavaWeb/拦截器.html","971d9b4519812603137076d5c733e985"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","f65bcaf8b3c6c1192257995d021781f1"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","061c87ce1ec32eab128be221d43103a6"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/uncategorized/队列.html","d8172e9e9dbf5af91930404052e594c1"],["/pages/爬虫/分布式爬虫.html","58b22bd1fa28c7336113db3242ccc04f"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","15e5d59c56d28e4efa406c8061219e4e"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","720c2893c60f785fbce66e6db176dc9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","cbd5eda8c367af452cb792180d6c40d5"],["/pages/算法/双指针/三数之和.html","d5a9f81889ab465990c9208daba0e054"],["/pages/算法/双指针/接雨水.html","f649a5db75d95c96bb97e081817147b9"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","9c5e9394675c740cdb599443673ff3f1"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","5bee13a5c928ecdcc5dd177d8ef74cbd"],["/pages/算法/哈希/两数之和.html","c72fa4f18dbf22a574ce3ed250c1f491"],["/pages/算法/哈希/字母异位词分组.html","3e5a0fbff8be152d263d35f23938a094"],["/pages/算法/哈希/最长连续序列.html","4755fde7f970a57945d8cb4273c15546"],["/pages/算法/子串/和为k的子数组.html","9b5fa38cd8f05dd3ebddf7d949558b3e"],["/pages/算法/子串/最小覆盖子串.html","9929a039c65bd65fe08a82fe7821ef61"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","bcc8d73e4739d0d84b1d07ab00ed5c6e"],["/pages/算法/普通数组/最大子数组和.html","78f46ccb8c2af9a1d9095571741667da"],["/pages/算法/普通数组/轮转数组.html","e0a4a6abdcfdf0501ea63c95de3d71ba"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","a973b7550161602f967901adf89e4833"],["/pages/算法，普通数组/缺失的第一个正数.html","463616f709008a5fb2c5f964bd6a8fb0"],["/pages/算法，普通数组/除自身以外数组的乘积.html","02393a1f1057183227878ba66e3dd1ba"],["/pages/算法，普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法，矩阵/搜索二维矩阵 二.html","c4ee89231c0b28cb936e02db3dab699d"],["/pages/算法，矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法，矩阵/旋转图像.html","e7d34ee6bec964950e4ad534aec8b405"],["/pages/算法，矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法，矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法，矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法，矩阵/矩阵置零.html","7e4a7e4f7bf053b0d0686d99cabe9a91"],["/pages/算法，矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法，链表/反转链表.html","8f82c5be4a53ec865963c0f58f16e142"],["/pages/算法，链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法，链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法，链表/回文链表.html","fd13705654c930e7d11d3d8cf72a6a47"],["/pages/算法，链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法，链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法，链表/相交链表.html","e40f478cc966ccb6b7f08997e72da44b"],["/pages/算法，链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/sw-register.js","960a857b3256af88cec683b1deebefdc"],["/tags/AOP/index.html","0c098417adb81f4cf6af59053e8e02a6"],["/tags/Bean/index.html","e67538656a0cffd722199cd0149ef157"],["/tags/JavaWeb/index.html","c8236da0ef7b512242659ece5903e7d0"],["/tags/Python/index.html","e113d7386e596fbf90fce4f81714173b"],["/tags/flask框架/index.html","62ded1e83b9fa521453b701fc3c07cfc"],["/tags/index.html","51b015df191f61f7ed922ddddeddd7a5"],["/tags/事务/index.html","72dae5ef359a63418fcc2ba6fa28b063"],["/tags/会话技术/index.html","09ed1e5c106356b0f95f0113b0cdb078"],["/tags/全局异常处理/index.html","879f79e5acd97250007ccbfe1f1a52b0"],["/tags/双指针/index.html","848df820f4c65f6dab714e42730939b3"],["/tags/哈希/index.html","6cfb39b5c5fd94f4d9f1eb264e535707"],["/tags/子串/index.html","604694aeb9459b93aaa1dddb220b41da"],["/tags/拦截器/index.html","ba0bdb1f157392d399739952a7ac62ab"],["/tags/普通数组/index.html","3220efc3ae553ed7ed40bd71fffea197"],["/tags/滑动窗口/index.html","43cf2a69bba355af385fbe33ee451671"],["/tags/爬虫/index.html","a11bad9e0893a4f68de7e6eb2bdf85bd"],["/tags/矩阵/index.html","ed50f3f54d0465ba1e2261fcbbd3dd47"],["/tags/算法/index.html","b457c2a13942998bf13ff28d06769248"],["/tags/算法/page/2/index.html","caaeeb237ae8db0ea8c1a3cee291931d"],["/tags/算法/page/3/index.html","4dbbc300725824c6c9e318f1febe524f"],["/tags/过滤器/index.html","162a7b629b1b34826edcd9dad89239ae"],["/tags/链表/index.html","238b100dbcdb4f0b21a32139a4f22707"]];
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
