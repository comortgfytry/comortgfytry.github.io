/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2023/01/index.html","f380c55407f7e72f076bd24bda3bb0ad"],["/archives/2023/05/index.html","dbe49a8cd1c89930a8400d795334dbc6"],["/archives/2023/06/index.html","23467aca415c49ddd3a30f59f6cf4a91"],["/archives/2023/07/index.html","0062547561316255962b485bf440d999"],["/archives/2023/07/page/2/index.html","60c423fea80faa6c3173a80a43648b4a"],["/archives/2023/08/index.html","b7eaeb87e4119457ae45225718fc9cda"],["/archives/2023/09/index.html","2db7c00727385d34e53289d3a90d4a01"],["/archives/2023/09/page/2/index.html","304652a053aa57452737864009da39f2"],["/archives/2023/11/index.html","e24d5e19208b7a7a2729d661714a566d"],["/archives/2023/12/index.html","488aa36ccc954d2d603b6a2a7b2669b5"],["/archives/2023/index.html","0958b2fe462e3d2d79fb53979712f94b"],["/archives/2023/page/2/index.html","a26c485b197931c2e721dcb430afbeb6"],["/archives/2023/page/3/index.html","1c8786891ef8ddb1792296d54f627a95"],["/archives/2023/page/4/index.html","87cf2d03310e99f2b8c093d2b1ce4785"],["/archives/2023/page/5/index.html","44c812b27b30b4b87aea8e55d72813ee"],["/archives/2023/page/6/index.html","8a9c61900c3c3076fddb48a4dbeaec55"],["/archives/2023/page/7/index.html","349d774e05f56062ad5e0e2a3e39fe75"],["/archives/2024/01/index.html","db536cc76491046a9b53bf113c9b8b25"],["/archives/2024/index.html","375be3dfe375676f054d024ba95075d9"],["/archives/index.html","d3badb1b5f6739c967b99366b7471bb7"],["/archives/page/2/index.html","781644a37dfda403f5bb5836daeedf06"],["/archives/page/3/index.html","2f4f0617e3f1edf556cde3c8eb573f9e"],["/archives/page/4/index.html","f4887cce9a077d350475e224d97ffe92"],["/archives/page/5/index.html","86b959da5b2ab24a724aaf38e9ebc5d6"],["/archives/page/6/index.html","520e289ac5793b794c479a268df22a17"],["/archives/page/7/index.html","dc6239efce1bfb79ff3b2762f9041291"],["/categories/JavaWeb/AOP/index.html","fd23853de05c51599fda19b7a4ba4e14"],["/categories/JavaWeb/Bean/index.html","38d8a7141e980f5d28dd589602bb327d"],["/categories/JavaWeb/index.html","9966315e8e13d347edfc3a5398ddb628"],["/categories/Mysql/index.html","5c60611bfed0cfb109aa69bb91ac7b7a"],["/categories/RPC框架/index.html","983f225ca0b6f4d1b1ad88a5c13f86d7"],["/categories/docker/index.html","8232614ac06d62407eff1e2872e41b61"],["/categories/flask框架/index.html","3598a938b26eb6270d19c90a2394510c"],["/categories/index.html","73fa26926d48cd639868d0ee03213157"],["/categories/mybatis/index.html","2fae285e7d294fd7a5d83270823ffdcb"],["/categories/rabbitMQ/index.html","d8314e112a5d4497ea2a349a5fd3ae03"],["/categories/爬虫/index.html","7f67e7cec49a1f34cba684e730525b3a"],["/categories/算法/index.html","8a5f2e4652aa229daac6d341a470561b"],["/categories/算法/page/2/index.html","982111e3c326a6bd3ee1361445928da1"],["/categories/算法/page/3/index.html","22722a546a936638b50cda939c358c2b"],["/categories/算法/page/4/index.html","34ffc4355f026f55d03720be680d1276"],["/categories/算法/page/5/index.html","f08ac8fc8ca7b71763a10b4f0eb9c7fa"],["/categories/算法/二分查找/index.html","734723d6bef174fe5ffff286f9757c84"],["/categories/算法/二叉树/index.html","3728dfd542791d66bbf0bd52cd7cf23a"],["/categories/算法/动态规划/index.html","0abc1b54c67439f8cab1320ce2b2d6dd"],["/categories/算法/双指针/index.html","9d740a7648ec390fa2ebed037d6c0b8b"],["/categories/算法/哈希/index.html","a81bcad85552e24933376fc4983efeb1"],["/categories/算法/堆/index.html","2b7b79be683621285a77d6db841444fa"],["/categories/算法/子串/index.html","c3dde69e43453c04e971d7f3b3c0bdbf"],["/categories/算法/普通数组/index.html","4945cae6398f955f4a336849456904ef"],["/categories/算法/树/index.html","0796150f456e676ab71a6e1a38b2089d"],["/categories/算法/滑动窗口/index.html","4c717851df0ff2f064a39a1b807cfc91"],["/categories/算法/矩阵/index.html","930257c1f837faa6794bc3cb29c8f929"],["/categories/算法/贪心算法/index.html","bcfed4bb99e9d79e50ded5ae1db5d693"],["/categories/算法/链表/index.html","95b5c000af1edaa98a9a002fa993bf0b"],["/categories/算法/链表/page/2/index.html","7efab72f9d87b19464842ff53420845f"],["/categories/软件架构/index.html","c100e2f910cc787e293cf9c6ec6e0c0f"],["/css/index.css","02e89529c5555d7e64b0f7f8ec83230f"],["/css/mycss.css","e446946a8154a01c3d16c35eee382ec9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.jpg","72505d27f39ee2be56f6a396bf886ae1"],["/img/background.jpg","3a1b064634c237d0b213438d340aab84"],["/img/bbg.jpg","edf992cdac6cd80808c11d84f63e9139"],["/img/bg.jpg","f4fd7823bd16ea19cf6467f195deb81e"],["/img/favicon.png","549e154d0efcdf5ea2d5668ef75ac0d6"],["/img/forhome.jpg","408b98c12b46ed03ad160a7c4866ef71"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6835687a3fd0dd443fac298ab7346172"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","cbf7340912549391c3af1b4daaa046fa"],["/page/3/index.html","d9090586c59b6d2d2cabf6f04d90d80c"],["/page/4/index.html","4181c469fded2f3d3be69de73f8f1939"],["/page/5/index.html","e1761a2b95b2cf88f39eadbb9557a6da"],["/page/6/index.html","38eb987bbdd348c30963a9d4dccdbabd"],["/page/7/index.html","20ac6b10bc085fa9e33e3a0aabbb14cf"],["/pages/JavaWeb/AOP/AOP.html","db285e9573a09683897c1fd74b1e0c0d"],["/pages/JavaWeb/AOP/AOP/image.png","7b9cb2b93149fb3744cc158d2deaa63e"],["/pages/JavaWeb/AOP/AOP/image1.png","13e4a7870e4925f196c72cffa9931cca"],["/pages/JavaWeb/AOP/AOP/image10.png","b278906800d82fb86a160b76b693cc28"],["/pages/JavaWeb/AOP/AOP/image2.png","b21ba666dd297410b98cb5651203e66b"],["/pages/JavaWeb/AOP/AOP/image3.png","048ba9b8789e4a6866fbf7db421776a6"],["/pages/JavaWeb/AOP/AOP/image4.png","622fe38e0f61bd640b68c39d65b8cc2e"],["/pages/JavaWeb/AOP/AOP/image5.png","12b7b6f0425946ab6fe5aa5f7f661d08"],["/pages/JavaWeb/AOP/AOP/image6.png","9065872e7c6af89358cc8436dc75a753"],["/pages/JavaWeb/AOP/AOP/image7.png","5a22d48c679563cbfd588629eb63bee8"],["/pages/JavaWeb/AOP/AOP/image8.png","7f8f567cad095d767afc2ee92b221ff0"],["/pages/JavaWeb/AOP/AOP/image9.png","a250bd85283a69df55332f3f22e48be7"],["/pages/JavaWeb/Bean/Bean对象.html","3010a46ab5e32afed7ecd9c2829d2de3"],["/pages/JavaWeb/Bean/Bean对象/image.png","1a7f8c2334297b63282f697f3b1fafd2"],["/pages/JavaWeb/nginx.html","fb113ae035e8ff36f6643cfcbc6bde5c"],["/pages/JavaWeb/事务管理.html","744170567ae891a3bf8c7b794509d3c7"],["/pages/JavaWeb/事务管理/image.png","e883ccdda6253b3793608e793e4a6fe9"],["/pages/JavaWeb/会话技术.html","3b923a897186bc673671ee21b7904286"],["/pages/JavaWeb/会话技术/image.png","b493e99266a6becf86f76cdb86243989"],["/pages/JavaWeb/会话技术/image1.png","523bd487d7c19f2938d86758ebfd11d4"],["/pages/JavaWeb/会话技术/image2.png","9bdb748e6163671b0e169d001ce6cb46"],["/pages/JavaWeb/会话技术/image3.png","a823281902dccd0e5eb8e4b397526ba1"],["/pages/JavaWeb/会话技术/image4.png","42912fbc93cfac17611cb3b7a2f7f4a0"],["/pages/JavaWeb/会话技术/image5.png","b590b96c5edbfa4bdfa6fe1503239ecb"],["/pages/JavaWeb/全局异常处理器.html","701642f8aadac6d35d56638701e4801f"],["/pages/JavaWeb/拦截器.html","e209145cbf06abe1087f065c5f58f459"],["/pages/JavaWeb/拦截器/image.png","bcf882a21ceae8f3d1776e871f424e8c"],["/pages/JavaWeb/拦截器/image1.png","3a530c3ce31ba0fbaf083d3a9a17a956"],["/pages/JavaWeb/过滤器.html","5ae4ae0baed39cb760bff30493d66ce0"],["/pages/JavaWeb/过滤器/image.png","d6ca0da07354da4b72e95ee440171abb"],["/pages/JavaWeb/过滤器/image1.png","5ef9c814256afd98c44c4f73a06454f4"],["/pages/JavaWeb/过滤器/image2.png","a4ec12a97f4b809283c382fff92f52de"],["/pages/JavaWeb/过滤器/image3.png","77fc897a997a66dca50e2ad9979dba38"],["/pages/JavaWeb/过滤器/image4.png","a9e27e89268631291b9c3c4c2c3fa033"],["/pages/JavaWeb/过滤器/image5.png","2e4d7c9923e264dadcf1f7f7453d0c9b"],["/pages/JavaWeb/过滤器/image6.png","05cec35540edb2d80ab7b24096340508"],["/pages/JavaWeb/过滤器/image7.png","da6ed499162996ea87445646720cc804"],["/pages/Mysql/count的计数.html","8ab09f56f95a49757e08c62e375d759b"],["/pages/Mysql/count的计数/image.png","7df46e119340d8547fad0bd6457e861c"],["/pages/Mysql/count的计数/image1.png","01260c6d8cb6362dc74932b2e0eda302"],["/pages/RPC框架/服务远程调用(RestTemplate、Feign、Dubbo).html","cdb42af9c384814dce11f997ff19d831"],["/pages/docker/docker.html","5f6fe74b48a029d3ce3650549567fb3e"],["/pages/docker/docker/image.png","dea833e3a1a184498d44ea3300cef9fe"],["/pages/docker/docker/image1.png","6ff3ba07aa002a054053f493b2c47090"],["/pages/flask框架/flask入门使用.html","8750ceab15fd4a7a284ca9f9aa7a8ca8"],["/pages/flask框架/flask入门使用/image.png","5b50a99cdc4e987bb221c172159fb829"],["/pages/flask框架/flask入门使用/image1.png","2c7cfcbf5810a50995284fa55a459168"],["/pages/flask框架/flask入门使用/image2.png","c0598492b80a9ac04770e8127a8117e7"],["/pages/flask框架/flask入门使用/image3.png","763819c55c9d8a205f212db6ea108930"],["/pages/mybatis/mybatis.html","0e6b8587159c10384dd3578f0b6ff941"],["/pages/mybatis/mybatis/image.png","126d67353db5861f25318f95150ba8da"],["/pages/mybatis/mybatis/image1.png","a6488446767e608d60a2a366a4e68853"],["/pages/mybatis/mybatis/image2.png","bc5fb9b5c9916ce9f033ca8ebf5fea75"],["/pages/mybatis/mybatis/image3.png","2b128778dbe1e348a54b7a6e5109dd54"],["/pages/mybatis/mybatis/image4.png","7bf9b8236c10455e0db0ff1f10053cd4"],["/pages/mybatis/mybatis/image5.png","f3762257fb87fd10e3cab14578e6e755"],["/pages/mybatis/mybatis/image6.png","97dcf6084e24707961cd9b23ddeb1ba4"],["/pages/mybatis/mybatis/image7.png","4db07dcc3a1efe88fa57a121c2db338d"],["/pages/rabbitMQ/rabbitMQ.html","2da3b207a87af6e02eb30ef533594513"],["/pages/rabbitMQ/rabbitMQ/image.png","8bd465b51c9c1c9a8488b5685b2db362"],["/pages/爬虫/分布式爬虫.html","4e0aa4e9534aa8901586c09d6b380519"],["/pages/爬虫/爬虫一：简单静态网页的爬取.html","9cffc8ccde4eccb8706ef161a4f9135b"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image.png","22208267fde6bc76f295f10b899341c4"],["/pages/爬虫/爬虫一：简单静态网页的爬取/image1.png","101253d598e7c13aa287c176a75af4b9"],["/pages/爬虫/爬虫二：动态网页的爬取.html","b827d6b165368fbc6af47a51365a84e1"],["/pages/爬虫/爬虫二：动态网页的爬取/image.png","2be83dc867aa64b0d2fdf56f5968d836"],["/pages/爬虫/爬虫二：动态网页的爬取/image1.png","e6b2458154654cf2158da94053196600"],["/pages/爬虫/爬虫二：动态网页的爬取/image2.png","224482b7d871d0d6449f6c8ac0a1fc74"],["/pages/爬虫/爬虫二：动态网页的爬取/image3.png","55220f9cf9a0ad819377843f6d195c68"],["/pages/爬虫/爬虫二：动态网页的爬取/image4.png","a016fc57b9a67100d6e9f7049b8d5703"],["/pages/爬虫/爬虫二：动态网页的爬取/image5.png","00be2e4b2287a68c25b890a0482dae60"],["/pages/爬虫/爬虫二：动态网页的爬取/image6.png","68021b02f40942e487343effd2451d11"],["/pages/爬虫/爬虫二：动态网页的爬取/image7.png","04875668dff5070c16aa7eaf62093f9e"],["/pages/爬虫/爬虫二：动态网页的爬取/image8.png","21121feb4c6823024dce50388bc38966"],["/pages/爬虫/爬虫二：动态网页的爬取/image9.png","fa6728f351de8262001617020f914174"],["/pages/爬虫/爬虫常见问题总结.html","6fb91c067d80b21e14457adaf90f576c"],["/pages/算法/二分查找/搜索二维矩阵.html","1da0e81bc1a2b8bc9a7d3462e001d798"],["/pages/算法/二分查找/搜索二维矩阵/image.png","9ff868409ef410c2595a4baef4159bf7"],["/pages/算法/二分查找/搜索插入位置.html","35250b5a398941fa3cd5f5ed7c3e96f7"],["/pages/算法/二叉树/二叉树的最大深度.html","623959c1e00fbc0e9ac409fcb8ed2c49"],["/pages/算法/二叉树/二叉树的直径.html","a27b2564ef1f6788cae490366d49e32b"],["/pages/算法/二叉树/二叉树的遍历.html","c356aa3daffa520f7b6c738580c5bfe9"],["/pages/算法/二叉树/对称二叉树.html","3313b62b9c00966bc97dd7107130b13a"],["/pages/算法/二叉树/翻转二叉树.html","5d6e83af1fcb00b7b78d95fedae0ef7f"],["/pages/算法/二叉树/翻转二叉树/image.png","e9834a04bdf2537564fba6f41443064b"],["/pages/算法/动态规划/打家劫舍.html","8e324eb7fc092a4646583c938eae4bbf"],["/pages/算法/动态规划/打家劫舍/image.jpg","ab52d7149437d01ef2c9aff9f62ea023"],["/pages/算法/双指针/三数之和.html","f8cfff6b7279d9580ef71a98df6fe8d2"],["/pages/算法/双指针/接雨水.html","3237bcca10376128fc485865a7472c9b"],["/pages/算法/双指针/接雨水/image.png","a0b5725179e8d2e8540134afe72860be"],["/pages/算法/双指针/盛最多水的容器.html","59dee7007549e4fa400085f5fe8fb79e"],["/pages/算法/双指针/盛最多水的容器/image.jpg","9daebb6ebbdb925763fbd31e9a7aa329"],["/pages/算法/双指针/移动零.html","450cf49b5564c37137a2d699576674fe"],["/pages/算法/哈希/hash表理解.html","8d2044e691ad3b4b290e478317664844"],["/pages/算法/哈希/两数之和.html","fdc16a3dd912fead8422bc5e79132fc2"],["/pages/算法/哈希/字母异位词分组.html","3b2e1bd716fdb2552d489b7a9e9ff90b"],["/pages/算法/哈希/最长连续序列.html","d5a7d0dcb137c47e24be533dffaa4d93"],["/pages/算法/堆/堆.html","7adb675b4ec84cc131d3e176bb09ebb6"],["/pages/算法/堆/堆/image.jpg","73aabec3d88ace68e477e94bc83e39df"],["/pages/算法/堆/数组中的第K个最大元素.html","44541d0c2f08fc51b0c00e9290c27318"],["/pages/算法/子串/和为k的子数组.html","225f558435771d008e050b5dbf1a9d98"],["/pages/算法/子串/最小覆盖子串.html","8fc8cb418b3fb934a01003281513f96b"],["/pages/算法/子串/最小覆盖子串/image.png","9749f0a2167e26e4ef692aed4cf11c7c"],["/pages/算法/子串/滑动窗口最大值.html","ab16ec623cbe7df01586c93e51034cc4"],["/pages/算法/普通数组/最大子数组和.html","07ba2c4e525221c72861af160f6b07cd"],["/pages/算法/普通数组/缺失的第一个正数.html","995cf741b75740039768f5b65e7a3441"],["/pages/算法/普通数组/轮转数组.html","085f1c5d5ce2060ccdfd8a42d683b949"],["/pages/算法/普通数组/轮转数组/image.png","68a691c36df3cd2eece8a3019debe564"],["/pages/算法/普通数组/轮转数组/image1.png","f0de38adef46ee999e3294afd6e16b39"],["/pages/算法/普通数组/除自身以外数组的乘积.html","f531af8d85f07c183e69146c937984fa"],["/pages/算法/普通数组/除自身以外数组的乘积/image.png","280ef71e062a1241700f0a538d6a296d"],["/pages/算法/树/几种特殊二叉树.html","4ab6f32a0d06fa4a9933f8cd6559c4ef"],["/pages/算法/树/几种特殊二叉树/image.png","17ab731e14279a9da27291cdf7ff851e"],["/pages/算法/树/几种特殊二叉树/image1.png","2067b6eac6492bf580a870729fa27929"],["/pages/算法/树/几种特殊二叉树/image2.png","85a9bd75febb9fbe4860639070479fd4"],["/pages/算法/树/几种特殊二叉树/image3.png","0062237f218727f55342300c823c8c32"],["/pages/算法/滑动窗口/找出字符串中所有的字符异位词.html","fb76a500beb97c52a887496958bb14ca"],["/pages/算法/矩阵/搜索二维矩阵 二.html","655b3225db6e336cab3f8fcaa79600be"],["/pages/算法/矩阵/搜索二维矩阵 二/image.png","4955296f12688705c94931f471a98273"],["/pages/算法/矩阵/旋转图像.html","8f57a3296cd2869bc9ba9342e4344623"],["/pages/算法/矩阵/旋转图像/image.png","ed2e770e54d1557c3421006d0bc2133b"],["/pages/算法/矩阵/旋转图像/image1.png","323a3405ff2425a4b08714440830734e"],["/pages/算法/矩阵/旋转图像/image2.png","de4690a4baf158f9dd62a5bd9282327d"],["/pages/算法/矩阵/矩阵置零.html","c92f04c9f26a7aae0970898b2ba973ef"],["/pages/算法/矩阵/矩阵置零/image.png","6dcce1a3e5ef32ec283253d9e201b6f1"],["/pages/算法/贪心算法/买股票的最佳时机.html","2c19aeb7fadf1d03991a45f8880e59cb"],["/pages/算法/贪心算法/划分字母区间.html","922b0f072a01a4770cb21c8cf974b4fd"],["/pages/算法/贪心算法/划分字母区间/image.jpg","9f992c064c08ecdccddae516c2f6886c"],["/pages/算法/贪心算法/跳跃游戏.html","97eceda88db9ba14320abc329f771bb5"],["/pages/算法/链表/k个一组翻转链表.html","7398b63bfe0bcd2654d2cc32b888fd1a"],["/pages/算法/链表/两两交换节点.html","4dbd59dbe2f416ec3fd99d9e28a82f3d"],["/pages/算法/链表/两两交换节点/image.png","bda8c874d3536beeb0e6a87ba1b2e08d"],["/pages/算法/链表/两数相加.html","2d7d31645d439bc7b213c677d72900f1"],["/pages/算法/链表/两数相加/image.png","f66b2663ae3d6a71882e1cbd5de37fd3"],["/pages/算法/链表/删除链表的倒数第N个节点.html","be20b2760a721872d82a1978f6a22771"],["/pages/算法/链表/反转链表.html","b7bc3fcac2412e1ca1d472cfb3191c44"],["/pages/算法/链表/反转链表/iamge1.png","c85ac230ad62e4bddb1a63649cc54298"],["/pages/算法/链表/反转链表/image.png","26fa42a5cebc9be0480381b58b587146"],["/pages/算法/链表/合并有序链表.html","3bd91a985183d29c0b02e35e7e3ce551"],["/pages/算法/链表/合并有序链表/image.png","180f99c620d0483ada0221371d96b28f"],["/pages/算法/链表/回文链表.html","71f385eadf99881cffef82901e1e4221"],["/pages/算法/链表/回文链表/image.png","82d3b8bab0435e0075e9ac94081b9ac9"],["/pages/算法/链表/回文链表/image1.png","3c50eda6f734a0f947468ae1da33d0ae"],["/pages/算法/链表/排序链表.html","06dfc885e432c5913443a7155de9e4c8"],["/pages/算法/链表/深度拷贝.html","707c851c796b15115b03717116473360"],["/pages/算法/链表/环形链表.html","9ef8398ba688dcc7767308eac8733b9f"],["/pages/算法/链表/环形链表/image.png","99e84168d419511b02c0edc32f05d95f"],["/pages/算法/链表/环形链表/image1.png","a535697bf087357fe5f3168430d07682"],["/pages/算法/链表/环形链表/image2.png","8c04e5a4a094a92ec89324731c41e2a3"],["/pages/算法/链表/相交链表.html","1685c2dcc4afbbccd61b6581457a6666"],["/pages/算法/链表/相交链表/image.png","cc7514a5d036c1a347afc964dd5a31a6"],["/pages/软件架构/软件架构复习.html","db89b47c7b1fb9321bfb94b494ee7ca6"],["/sw-register.js","8f311c66cb3f975230d12f453851afd9"],["/tags/AOP/index.html","119404b7f6301834443936199bcf0389"],["/tags/Bean/index.html","dd432ec866bc81dfcdb321548036370c"],["/tags/JavaWeb/index.html","405973ebd2e62fa99d3850589acbf431"],["/tags/Mysql/index.html","a535235c801fc6d2cfc7520366a0763e"],["/tags/Python/index.html","2393e653a862183a4a52e1191de38b89"],["/tags/docker/index.html","3f385a9ad0390477936e4f396c8ca10c"],["/tags/flask框架/index.html","795f0f26801201c1af46c1dd29018c26"],["/tags/index.html","2c16bf3968fc420ad27d9953523e1082"],["/tags/java/index.html","d6150c839d91f04ad37e2a4c4d62c72b"],["/tags/mybatis/index.html","8bf086f2cb43af57515647a98d6af259"],["/tags/nginx/index.html","6072936dc71ef65037204075f80a3a02"],["/tags/rabbitMQ/index.html","b5a5e40cecbedd5aa70df7ab7cbc42ae"],["/tags/rpc/index.html","b096014c23afbf3d6bc2863eb9650321"],["/tags/事务/index.html","0fb774f7a55b31e7b529e18bec4439b0"],["/tags/二叉树/index.html","2fdcf26b537e7d9041e2081a2ac30799"],["/tags/会话技术/index.html","5d5f2ad9b237200f4695cc05ac617133"],["/tags/全局异常处理/index.html","b29dd065c13bfdd538a940c880d13ef0"],["/tags/动态规划/index.html","a9a5d2d9ae476d304db2c93f1d4fa626"],["/tags/双指针/index.html","84384a832328505530cc8c3352b4df24"],["/tags/哈希/index.html","0c0fa08acd81cae2bc7d40fe246b7800"],["/tags/堆/index.html","e7303c780694d9a920ef2d4f7acc6025"],["/tags/子串/index.html","33a157e72f976b8d9ada382d6928d78d"],["/tags/拦截器/index.html","3e580ae7c282b24427993246940baf64"],["/tags/普通数组/index.html","0363eec090fb02eea6a19cb011230b58"],["/tags/树/index.html","61d69f1b551226f1be7a9ae02dece6d3"],["/tags/滑动窗口/index.html","0b766f4db2f841de1beb7d6521414361"],["/tags/爬虫/index.html","6e8dd492509266a66de1d4fafae0e0d4"],["/tags/矩阵/index.html","24c6b007833045c09973838c170cd5b6"],["/tags/算法/index.html","53ac8c67bda1ff0457db351939b21c97"],["/tags/算法/page/2/index.html","ea5d1dad2eadddb0512907f8cbee67d6"],["/tags/算法/page/3/index.html","02274402f3f7f89324936b141bf0d4d7"],["/tags/算法/page/4/index.html","30c47eb8e4329c4ee1734877a4f93d05"],["/tags/算法/page/5/index.html","1542d958c2d9b3252c84ecf6ce7e6dce"],["/tags/贪心算法/index.html","63c317758f49d9c9d6e1e47b0d9e7f11"],["/tags/软件架构/index.html","72b23672568e44e4c3f2d6b64eaee273"],["/tags/过滤器/index.html","81c0a999215d57236caf9bfa3b82da63"],["/tags/链表/index.html","c842ec0c36ce729a3f38b6ff33a03380"],["/tags/链表/page/2/index.html","8d00558345faf455151dd53fa7e08287"]];
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
