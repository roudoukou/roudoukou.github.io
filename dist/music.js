
// 关于页, 忽略不实例化
if (!window.location.href.includes('https://xiamu.icu/about/') && !window.location.href.includes('http://localhost:4000/about/')) {
    initAPlayer();  
}

;;
function initAPlayer() {

    let musicList = [
        {
            "title": "神のまにまに",
            "author": "初音ミク / 鏡音リン / GUMI / れるりり",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=32431066&auth=f133cfff54c2424783c204e74fb740f1cfd37f24",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=7886796906969685&auth=926939ea6cd371ea66ad6f47002efb4ed823e36c",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=32431066&auth=a227dc4f56b99de36a4b1bb5b97b62b633fd20e7"
        },
        {
            "title": "ただ声一つ",
            "author": "ロクデナシ",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1945796091&auth=18b9c667e3907668077c4f2a2c8cd0905475af74",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951168158985163&auth=397636bf688c5cf553da3d2094c2ca8557ae544f",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1945796091&auth=a43a19a2c982ca2cc9a33c3703cd39c75e305b92"
        },
        {
            "title": "你曾是少年",
            "author": "焦迈奇",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1368371706&auth=9a17158206f4aabac9d84f967734df6ed026f000",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164107576105&auth=b3e2b893188e30205b51818edb44222bacb3fbd9",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1368371706&auth=c5899e0e9627cd8814f47bb384a569ddd00f38d9"
        },
        {
            "title": "光るなら",
            "author": "Goose house",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=30798034&auth=0916ea9de54dd9deb5686e3f78ec1b96fed98f13",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=7834020348181215&auth=1f898f16d5a0b55a80dbe6e9ceb6ced24303eaeb",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=30798034&auth=d813f79fb15638c0ce513cdf4efdbb5b5d1639f2"
        },
        {
            "title": "可愛くてごめん (feat. かぴ)",
            "author": "HoneyWorks / かぴ",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1969519579&auth=adb9c46bba83ffaedd4eeff5d73bb7919e0e5c65",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951167745817208&auth=e51c8032dd24d4ceab2237675caa49e7f6685684",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1969519579&auth=8090769f8f2bf3756c8c3ee01b681d5d299d70e3"
        },
        {
            "title": "願い～あの頃のキミへ～",
            "author": "當山みれい",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=488388942&auth=bd36baf5dcdc696ca09d29371782abed086efe20",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165946337053&auth=53a485d6caa20bc7b8cd23550c6720e2b7fbd9ef",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=488388942&auth=9c12911d1d74dd6c2410e3cf44f0266519f73d4f"
        },
        {
            "title": "勾指起誓",
            "author": "洛天依Official / ilem",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1345872140&auth=967c4299895a8448ef7e51d7ddeccf75afb801f4",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169676463967&auth=74661644f492560fad4bb9e4d141b367629d5850",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1345872140&auth=5dc92adf4cad5b33986a38392a3d25e3d6063785"
        },
        {
            "title": "好きだから。",
            "author": "『ユイカ』",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1856722728&auth=4e1ddd351784aaf9d2228b775c05e7327b5b6553",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951166125448895&auth=ef136aa6832544f0acbdad272079e0371270ded0",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1856722728&auth=dcf1d3a177586ab7fd1431e1ef1e140f22906938"
        },
        {
            "title": "じゃあね、またね。",
            "author": "りりあ。",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1942407010&auth=a08eca6e092bc34856b839a432293aba88fa7fb8",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951167351265028&auth=c849cdffb740da7eeec22abcfc633ccd7f923af6",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1942407010&auth=91bcc9fcd60a62afdb9a7a08abb2c0f0121e056f"
        },
        {
            "title": "无论你多怪异我还是会喜欢你",
            "author": "周子言",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=559735259&auth=e27cb95913b146b02e5b91cd8ae85b8004078407",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163293563258&auth=e9e1d1f1e84ab0e9c1b3cb6ae55307f2ab7b080e",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=559735259&auth=68570c836d3f4a4e8686fcac2165cce05b72015c"
        },
        {
            "title": "起风了",
            "author": "买辣椒也用券",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1330348068&auth=ae463ffa59b0c1be18fe552e7ad80d6b779d9223",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163699673355&auth=203979f0540464286450b47d29f94b1b8f1e602a",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1330348068&auth=a45e8b4c9a036ac35766c450f36197d42fa330c9"
        },
        {
            "title": "晚夜微雨问海棠",
            "author": "镜予歌 / 陈亦洺 / 喧笑",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1456673752&auth=7cfc7f6cdea082e3e7aada3d6dfe6026f6921f45",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165073688416&auth=7c81bffe7f2f4638978d083c21165c80d541c30d",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1456673752&auth=fe922e006a3c398b0ca8b130d2429e6c91513163"
        },
        {
            "title": "山楂树之恋",
            "author": "程佳佳",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1381755293&auth=6c58a0b3cee9c4bb3578af962353bb1fff885ac2",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164260611202&auth=05d98adc4bb3c6c0bb0b9ac6a0a25c7b19d91854",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1381755293&auth=306cfaddb5cb5b9080f9011d7d15be959ffb25b1"
        },
        {
            "title": "我们俩",
            "author": "郭顶",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=85571&auth=c07b95f7fdbd8ac7a543a8c1ed048feb68617168",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951170514277229&auth=2f52811761ee01ff41d4fe0dcc2aea6620d2b7a5",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=85571&auth=66de884c26a3355e6835c070bc183c87051afe9a"
        },
        {
            "title": "阿拉斯加海湾",
            "author": "蓝心羽",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1500569811&auth=4f6399898b1b0da54490c33a3fac54c45d811d06",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951169385715334&auth=c3eb71ab7b7dce00aaeab6371bb35d8d6d07c4b0",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1500569811&auth=f6e04e98b230c2b61984b9cb770575a62dd9b054"
        },
        {
            "title": "我还年轻 我还年轻",
            "author": "张叶蕾",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1296893537&auth=403dae7c867028794501f377714f437ab25e2896",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164590805849&auth=32d385cff61f7071cc0983a875b2107262612f19",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1296893537&auth=1c42c3c2cde7ad55b47fab2a16c5201d86f1a72e"
        },
        {
            "title": "心似烟火",
            "author": "陈壹千",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1399112638&auth=588ad85f58adca51bb052a3d601deaf29175a2f8",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164447654929&auth=3794f8dd9ca2560a9b00a33015c319a61adb726a",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1399112638&auth=26b42a4523957c826d926aae7096a15dd94f5a26"
        },
        {
            "title": "错位时空",
            "author": "艾辰",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1808492017&auth=a8bc2f1286cc4592c91bcdde0f8e97bd0a69a794",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165595770076&auth=e91478e342c997fd8d8e1781420a9930ed950402",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1808492017&auth=f7e84e8653fdfd5075deca5cc48c26c80573862e"
        },
        {
            "title": "房间-新版",
            "author": "刘瑞琦",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=562598081&auth=2aa23bf238cf0a15c575ba777751f449965e2095",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163302871673&auth=ec41aed8277d700f41a5ae853bf6579f28e0c357",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=562598081&auth=09229566561a7f50044f708cc9f49fa9813c6703"
        },
        {
            "title": "普通女孩",
            "author": "宇宝.",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1406709943&auth=8a0e7003d0a4e20c200ea9c8cf0d759be72c1efa",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164517956919&auth=a54743159f474dc10c18c1f47bb5c30c988ce92b",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1406709943&auth=cf08717490adc1b8643a21bfe41af7182d3cd016"
        },
        {
            "title": "如果的事",
            "author": "Superluckyqi",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1363078221&auth=b3470ea4dfcc10f1e1bf61235203bc08ea3b6bd1",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164436801441&auth=4a2865ca6a2224c483ade84b190844557501f2fe",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1363078221&auth=6e24046cb89319805030ff408d7c56f225f35f89"
        },
        {
            "title": "万有引力",
            "author": "F*yy",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1425626819&auth=5a80660edcd0a73b8b731064037007f7cd1e7c4f",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164984873532&auth=3811e43d5fd77b8f08ee5dbb0718313f335792fc",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1425626819&auth=d519c2c286ace7f6228fbfb9fbaa177eccaa5392"
        },
        {
            "title": "爱，存在",
            "author": "卢卢快闭嘴",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1460682363&auth=dc4ccc2aaccf9b90ac571f50aad95189e03539bf",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165115661793&auth=5c884bd7fcd94011233f7111ce14d75b6c8eb225",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1460682363&auth=82aa30a29ff890cac050c3c379a0f13c6d058b4c"
        },
        {
            "title": "暖暖",
            "author": "窜天猴少女组 / 丸子菇凉 / 康妮 / 柿崽",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1336866429&auth=889184cde32ff5b75810958dad269cea31ed1e00",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163807615724&auth=e1e73cd2ac1f8f9773a068876e7504eebdc6c0c7",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1336866429&auth=e6cf7a34cb848ff4ee1c7842b9e894a0b1c28007"
        },
        {
            "title": "不普通的普通女孩",
            "author": "蜡笔小心",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1462410538&auth=d832b3606fea483139ad66fb0a3b70e13e60007a",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165134719601&auth=12b0fa43459590b4b7035bf8c6f28ea5d5aaa020",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1462410538&auth=6f481e3467d7105aff25bc015f7f569eb7ec934c"
        },
        {
            "title": "四季予你",
            "author": "程响",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1807537867&auth=38fd2cdb4c7f7c0e3f3d3eaddeada86728bd18e0",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951168817344792&auth=9e98775f0ee64edcbe2a1ba7fa4ef77e11e19535",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1807537867&auth=5168973d55e9219a013937759f041f868b8e761c"
        },
        {
            "title": "一直很安静",
            "author": "阿桑",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=5260494&auth=ddc59eac236f061a7edbc97d2efb886412163a7d",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=1727332767246198&auth=ee7179c094bf5d1ae831babd5643967954f64d5f",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=5260494&auth=2f3e522732d735b8c45dfd0d3d80b4f40bdfc31c"
        },
        {
            "title": "One day",
            "author": "SWAGGER",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1473214690&auth=fc66aa32c48dd09b35ae7f49670bf5a921f37a27",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165260394122&auth=49a718d3a2052140f4e3c32d9a1f765d5e616b40",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1473214690&auth=5a5974a200884523b8cba4c41d09733b5dd492c0"
        },
        {
            "title": "Shutterbug",
            "author": "Glenna",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=428203132&auth=d55c42de3803cd5d2fd69ef01f2b71d01d095976",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=1419469526399516&auth=4ff19b729688ceb9f83c48c4a0285b4e261e7ac9",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=428203132&auth=075e7324d79e971b23e882766124099068e9e97c"
        },
        {
            "title": "April Encounter",
            "author": "很美味",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=551400874&auth=ca631ea316504b23a702beac425802d274e175ad",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163243188849&auth=1bec9115feaa10c6338fad822f2e3629b0b4cedb",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=551400874&auth=0758aaf573fa4f3eb3d1e3b447730edafb9a34e4"
        },
        {
            "title": "形容",
            "author": "沈以诚",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1336856864&auth=26d3955b292cc8adc75a8bd550139edc57d74b5e",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163957708692&auth=4d58c9077bc302e092597246ac57b547970fb2e0",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1336856864&auth=d21642ecf812aeadfda2c8c38115c0bac7a9bdb6"
        },
        {
            "title": "化身孤岛的鲸",
            "author": "周深",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1465313631&auth=84238ad72b2ee2d2b97ed2ca6d5413113d5e5fd2",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951165165805968&auth=848242e63a8ffae0009e1e8024c665118bb69af4",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1465313631&auth=7131ab9fe25f06bf3a098f3cd9962e4ed8c15f05"
        },
        {
            "title": "失眠飞行",
            "author": "接个吻，开一枪 / 沈以诚 / 薛黛霏",
            "url": "https://api.i-meto.com/meting/api?server=netease&type=url&id=1365898499&auth=101eac85cc578cafbc5db98feb18e070f99cfbe4",
            "pic": "https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951164083996255&auth=416daaf356b863ebb05dfac634f9149d51cef576",
            "lrc": "https://api.i-meto.com/meting/api?server=netease&type=lrc&id=1365898499&auth=1be2f508af34166e208dbaad6ad9bc58a872bf48"
        }
    ]
    
    let defaultList = [
        {
            name: '最近在聽的歌',
            artist: '星茶会',
            url: '/music/星茶会.mp3',
            cover: '/img/avatar.png',
        },
        {
            name: '最近在聽的歌',
            artist: 'Fullmetal Alchemist Brotherhood',
            url: '/music/Fullmetal-Alchemist-Brotherhood.mp3',
            cover: '/img/avatar.png',
        }
    ]

    let audioList = [];
    defaultList.forEach(item => {
        audioList.push({
            name: item.name,
            artist: item.artist,
            url: item.url,
            cover: '/img/avatar1.jpg'
        });
    });

    musicList.forEach(item => {
        audioList.push({
            name: item.title, 
            artist: item.author,
            url: item.url,
            cover: item.pic
        });
    });

    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        mini: true,
        autoplay: false,
        loop: 'all',
        volume: 0.7,
        listFolded: true,
        listMaxHeight: '250px',
        audio: audioList
    });
}





