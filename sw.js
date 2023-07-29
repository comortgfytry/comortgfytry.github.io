/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/07/index.html","96f45d50507c531b2bcb6369d72759f9"],["/archives/2023/07/page/2/index.html","72192be3745ded9c5544cf59f6ce83df"],["/archives/2023/index.html","c8e1259cc3128c52850f0f928621b308"],["/archives/2023/page/2/index.html","a4e554548e64491954d1f5ef4677173a"],["/archives/index.html","e18843691214ab9bd5bcc69c91ba2d16"],["/archives/page/2/index.html","5b9c88719e29c67f18932e333c1ccdc3"],["/categories/JavaWeb/index.html","fe1760562306a7e7410fe2cb331004de"],["/categories/flask框架/index.html","916b40f3b976a328f5f28b8e3db68b4c"],["/categories/index.html","107fe2edef407bfb8a1b3546de1996b9"],["/categories/爬虫/index.html","14e911ce73227d3e84100e578f225710"],["/categories/算法/index.html","26831db483ebda67a5764c16d3925ab1"],["/categories/算法/双指针/index.html","d5c5d3feff11884be64b78bdd64c6c5d"],["/categories/算法/哈希/index.html","923174dcc25df415daa5194b82c084c1"],["/categories/算法/字串/index.html","778fb04c641df5d812ca5e925216b3d3"],["/categories/算法/滑动窗口/index.html","9c76cbdedae3a38bf725d70fdcc68c21"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","df7a1d16b9d144850aa820c1b6f3d8e3"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","bb41e5ad267ea39160d4f9a677889fbd"],["/pages/JavaWeb/事务管理.html","bd1b5830939a3a9bbdd05466ef73cf33"],["/pages/JavaWeb/会话技术.html","ea09cfd0f7d0bb0a9f0c0b3630348e9a"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","7cf76a9db735360de0eaf514b19ac39d"],["/pages/JavaWeb/拦截器.html","00f17f031f49a3ce7b00c8b700b49fd4"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","849d3322a45bf4733b9fc1d292d7f639"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/flask框架/flask入门使用.html","acb17c02e6cbbd61d56a01f0017e00ba"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/爬虫/分布式爬虫.html","09e418656a81bda1923e1f8cc13c1b2e"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","fbcb5c124604d185b6de1c6ed153381e"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","12e0d6e844f3eb797b426497a3783b69"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","d1fad7b7d935ae58f5f1163dc1147500"],["/pages/算法/双指针/三数之和.html","d4cc5e668b07b1fef82a73dbbc788dfd"],["/pages/算法/双指针/接雨水.html","bcb311466ac0aafbdc893acce3e8e0b9"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","bf874a1f9ca421d2ec1b523473b9c3fc"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","bfa8ae7a7bf4bfa21cc814ed69a0eed8"],["/pages/算法/哈希/两数之和.html","07fc81f5b65aeebaec570092706210b7"],["/pages/算法/哈希/字母异位词分组.html","d7c21e99f5a2cabc1c8abbc45ad92907"],["/pages/算法/哈希/最长连续序列.html","81a88d7673b27d8ea8a0290e5f6cb1fc"],["/pages/算法/字串/和为k的子数组.html","41e3695c3d84faf24bb7c75e6f6f8006"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","1ff2db107d76961c0246de234532dc05"],["/sw-register.js","1f7a965e3a7f04b3c4580460a22bb0f1"],["/tags/JavaWeb/index.html","75096cbde33a6ef3a0319230e8c70f72"],["/tags/Python/index.html","d92da4b56a033e3c111059842932abce"],["/tags/flask框架/index.html","1220bc8358b128259a46708f82fa7686"],["/tags/index.html","c03473a0a27d4bfd065b220b0e07a39c"],["/tags/事务/index.html","3d533b4ce9edbc41a109e595b2e24f47"],["/tags/会话技术/index.html","cd8c3f19b8926e2718b1ff98ce8b2a4f"],["/tags/全局异常处理/index.html","c5543a8cd48804780c514698c988c841"],["/tags/双指针/index.html","e0963dfca09753d3de8942b74d07d59a"],["/tags/哈希/index.html","5d2905a2678aa53ed861a303ef778cf6"],["/tags/字串/index.html","a198cf6a7e962572e83dfb3b55c228a6"],["/tags/拦截器/index.html","7eae12b431274c7e7a9f2cec56c1da57"],["/tags/滑动窗口/index.html","ccbd9bee53e3cc8ae55769b7a7bddf2c"],["/tags/爬虫/index.html","499703fb3ccf27a292326122435185ed"],["/tags/算法/index.html","1b3c620330a280521fa58ba0c713b54b"],["/tags/过滤器/index.html","fb8f8b8bf00070b9db48192c6fd7e769"]];
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
