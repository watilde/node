'use strict';var cov_1dbfb5fy6k=function(){var path='internal/crypto/diffiehellman.js',hash='4e28c7c8390f6a6938266e43982ccc78cb73539d',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'internal/crypto/diffiehellman.js',statementMap:{'0':{start:{line:3,column:19},end:{line:3,column:36}},'1':{start:{line:4,column:15},end:{line:4,column:41}},'2':{start:{line:5,column:30},end:{line:5,column:60}},'3':{start:{line:9,column:4},end:{line:9,column:35}},'4':{start:{line:14,column:4},end:{line:14,column:29}},'5':{start:{line:19,column:4},end:{line:19,column:39}},'6':{start:{line:21,column:21},end:{line:21,column:22}},'7':{start:{line:24,column:2},end:{line:25,column:77}},'8':{start:{line:25,column:4},end:{line:25,column:77}},'9':{start:{line:27,column:2},end:{line:33,column:3}},'10':{start:{line:30,column:4},end:{line:32,column:45}},'11':{start:{line:35,column:2},end:{line:42,column:3}},'12':{start:{line:36,column:4},end:{line:41,column:5}},'13':{start:{line:38,column:6},end:{line:38,column:30}},'14':{start:{line:39,column:6},end:{line:39,column:30}},'15':{start:{line:40,column:6},end:{line:40,column:26}},'16':{start:{line:44,column:19},end:{line:44,column:39}},'17':{start:{line:45,column:2},end:{line:45,column:40}},'18':{start:{line:46,column:2},end:{line:46,column:40}},'19':{start:{line:48,column:2},end:{line:49,column:46}},'20':{start:{line:49,column:4},end:{line:49,column:46}},'21':{start:{line:51,column:2},end:{line:54,column:46}},'22':{start:{line:52,column:4},end:{line:52,column:29}},'23':{start:{line:53,column:7},end:{line:54,column:46}},'24':{start:{line:54,column:4},end:{line:54,column:46}},'25':{start:{line:56,column:2},end:{line:56,column:58}},'26':{start:{line:57,column:2},end:{line:61,column:5}},'27':{start:{line:66,column:2},end:{line:67,column:40}},'28':{start:{line:67,column:4},end:{line:67,column:40}},'29':{start:{line:68,column:2},end:{line:68,column:47}},'30':{start:{line:69,column:2},end:{line:73,column:5}},'31':{start:{line:77,column:0},end:{line:79,column:19}},'32':{start:{line:82,column:13},end:{line:82,column:40}},'33':{start:{line:83,column:2},end:{line:83,column:46}},'34':{start:{line:84,column:2},end:{line:85,column:35}},'35':{start:{line:85,column:4},end:{line:85,column:35}},'36':{start:{line:86,column:2},end:{line:86,column:14}},'37':{start:{line:90,column:0},end:{line:92,column:20}},'38':{start:{line:95,column:19},end:{line:95,column:39}},'39':{start:{line:96,column:2},end:{line:96,column:28}},'40':{start:{line:97,column:2},end:{line:97,column:30}},'41':{start:{line:98,column:12},end:{line:98,column:57}},'42':{start:{line:99,column:2},end:{line:100,column:31}},'43':{start:{line:100,column:4},end:{line:100,column:31}},'44':{start:{line:101,column:2},end:{line:101,column:13}},'45':{start:{line:105,column:0},end:{line:107,column:15}},'46':{start:{line:110,column:14},end:{line:110,column:37}},'47':{start:{line:111,column:2},end:{line:111,column:46}},'48':{start:{line:112,column:2},end:{line:113,column:37}},'49':{start:{line:113,column:4},end:{line:113,column:37}},'50':{start:{line:114,column:2},end:{line:114,column:15}},'51':{start:{line:118,column:0},end:{line:120,column:19}},'52':{start:{line:123,column:18},end:{line:123,column:45}},'53':{start:{line:124,column:2},end:{line:124,column:46}},'54':{start:{line:125,column:2},end:{line:126,column:45}},'55':{start:{line:126,column:4},end:{line:126,column:45}},'56':{start:{line:127,column:2},end:{line:127,column:19}},'57':{start:{line:131,column:0},end:{line:133,column:19}},'58':{start:{line:136,column:12},end:{line:136,column:39}},'59':{start:{line:137,column:2},end:{line:137,column:46}},'60':{start:{line:138,column:2},end:{line:139,column:33}},'61':{start:{line:139,column:4},end:{line:139,column:33}},'62':{start:{line:140,column:2},end:{line:140,column:13}},'63':{start:{line:144,column:0},end:{line:146,column:20}},'64':{start:{line:149,column:12},end:{line:149,column:40}},'65':{start:{line:150,column:2},end:{line:150,column:46}},'66':{start:{line:151,column:2},end:{line:152,column:33}},'67':{start:{line:152,column:4},end:{line:152,column:33}},'68':{start:{line:153,column:2},end:{line:153,column:13}},'69':{start:{line:157,column:0},end:{line:161,column:2}},'70':{start:{line:158,column:2},end:{line:158,column:46}},'71':{start:{line:159,column:2},end:{line:159,column:50}},'72':{start:{line:160,column:2},end:{line:160,column:14}},'73':{start:{line:164,column:0},end:{line:168,column:2}},'74':{start:{line:165,column:2},end:{line:165,column:46}},'75':{start:{line:166,column:2},end:{line:166,column:51}},'76':{start:{line:167,column:2},end:{line:167,column:14}},'77':{start:{line:172,column:2},end:{line:173,column:27}},'78':{start:{line:173,column:4},end:{line:173,column:27}},'79':{start:{line:175,column:2},end:{line:176,column:74}},'80':{start:{line:176,column:4},end:{line:176,column:74}},'81':{start:{line:178,column:2},end:{line:178,column:34}},'82':{start:{line:181,column:0},end:{line:181,column:69}},'83':{start:{line:182,column:0},end:{line:182,column:69}},'84':{start:{line:183,column:0},end:{line:183,column:67}},'85':{start:{line:184,column:0},end:{line:184,column:69}},'86':{start:{line:186,column:0},end:{line:190,column:2}},'87':{start:{line:187,column:2},end:{line:187,column:30}},'88':{start:{line:189,column:2},end:{line:189,column:45}},'89':{start:{line:192,column:0},end:{line:212,column:2}},'90':{start:{line:194,column:2},end:{line:206,column:3}},'91':{start:{line:195,column:4},end:{line:203,column:75}},'92':{start:{line:196,column:6},end:{line:196,column:38}},'93':{start:{line:197,column:9},end:{line:203,column:75}},'94':{start:{line:198,column:6},end:{line:198,column:34}},'95':{start:{line:200,column:9},end:{line:203,column:75}},'96':{start:{line:201,column:6},end:{line:201,column:40}},'97':{start:{line:203,column:6},end:{line:203,column:75}},'98':{start:{line:205,column:4},end:{line:205,column:38}},'99':{start:{line:207,column:12},end:{line:207,column:40}},'100':{start:{line:208,column:2},end:{line:208,column:46}},'101':{start:{line:209,column:2},end:{line:210,column:33}},'102':{start:{line:210,column:4},end:{line:210,column:33}},'103':{start:{line:211,column:2},end:{line:211,column:13}},'104':{start:{line:214,column:0},end:{line:218,column:2}}},fnMap:{'0':{name:'DiffieHellman',decl:{start:{line:23,column:9},end:{line:23,column:22}},loc:{start:{line:23,column:71},end:{line:62,column:1}},line:23},'1':{name:'DiffieHellmanGroup',decl:{start:{line:65,column:9},end:{line:65,column:27}},loc:{start:{line:65,column:34},end:{line:74,column:1}},line:65},'2':{name:'dhGenerateKeys',decl:{start:{line:81,column:9},end:{line:81,column:23}},loc:{start:{line:81,column:34},end:{line:87,column:1}},line:81},'3':{name:'dhComputeSecret',decl:{start:{line:94,column:9},end:{line:94,column:24}},loc:{start:{line:94,column:45},end:{line:102,column:1}},line:94},'4':{name:'dhGetPrime',decl:{start:{line:109,column:9},end:{line:109,column:19}},loc:{start:{line:109,column:30},end:{line:115,column:1}},line:109},'5':{name:'dhGetGenerator',decl:{start:{line:122,column:9},end:{line:122,column:23}},loc:{start:{line:122,column:34},end:{line:128,column:1}},line:122},'6':{name:'dhGetPublicKey',decl:{start:{line:135,column:9},end:{line:135,column:23}},loc:{start:{line:135,column:34},end:{line:141,column:1}},line:135},'7':{name:'dhGetPrivateKey',decl:{start:{line:148,column:9},end:{line:148,column:24}},loc:{start:{line:148,column:35},end:{line:154,column:1}},line:148},'8':{name:'setPublicKey',decl:{start:{line:157,column:48},end:{line:157,column:60}},loc:{start:{line:157,column:76},end:{line:161,column:1}},line:157},'9':{name:'setPrivateKey',decl:{start:{line:164,column:49},end:{line:164,column:62}},loc:{start:{line:164,column:78},end:{line:168,column:1}},line:164},'10':{name:'ECDH',decl:{start:{line:171,column:9},end:{line:171,column:13}},loc:{start:{line:171,column:21},end:{line:179,column:1}},line:171},'11':{name:'generateKeys',decl:{start:{line:186,column:39},end:{line:186,column:51}},loc:{start:{line:186,column:70},end:{line:190,column:1}},line:186},'12':{name:'getPublicKey',decl:{start:{line:192,column:39},end:{line:192,column:51}},loc:{start:{line:192,column:70},end:{line:212,column:1}},line:192}},branchMap:{'0':{loc:{start:{line:24,column:2},end:{line:25,column:77}},type:'if',locations:[{start:{line:24,column:2},end:{line:25,column:77}},{start:{line:24,column:2},end:{line:25,column:77}}],line:24},'1':{loc:{start:{line:27,column:2},end:{line:33,column:3}},type:'if',locations:[{start:{line:27,column:2},end:{line:33,column:3}},{start:{line:27,column:2},end:{line:33,column:3}}],line:27},'2':{loc:{start:{line:27,column:6},end:{line:29,column:35}},type:'binary-expr',locations:[{start:{line:27,column:6},end:{line:27,column:35}},{start:{line:28,column:6},end:{line:28,column:35}},{start:{line:29,column:6},end:{line:29,column:35}}],line:27},'3':{loc:{start:{line:35,column:2},end:{line:42,column:3}},type:'if',locations:[{start:{line:35,column:2},end:{line:42,column:3}},{start:{line:35,column:2},end:{line:42,column:3}}],line:35},'4':{loc:{start:{line:36,column:4},end:{line:41,column:5}},type:'if',locations:[{start:{line:36,column:4},end:{line:41,column:5}},{start:{line:36,column:4},end:{line:41,column:5}}],line:36},'5':{loc:{start:{line:36,column:8},end:{line:37,column:69}},type:'binary-expr',locations:[{start:{line:36,column:8},end:{line:36,column:39}},{start:{line:37,column:9},end:{line:37,column:40}},{start:{line:37,column:44},end:{line:37,column:68}}],line:36},'6':{loc:{start:{line:45,column:16},end:{line:45,column:39}},type:'binary-expr',locations:[{start:{line:45,column:16},end:{line:45,column:27}},{start:{line:45,column:31},end:{line:45,column:39}}],line:45},'7':{loc:{start:{line:46,column:16},end:{line:46,column:39}},type:'binary-expr',locations:[{start:{line:46,column:16},end:{line:46,column:27}},{start:{line:46,column:31},end:{line:46,column:39}}],line:46},'8':{loc:{start:{line:48,column:2},end:{line:49,column:46}},type:'if',locations:[{start:{line:48,column:2},end:{line:49,column:46}},{start:{line:48,column:2},end:{line:49,column:46}}],line:48},'9':{loc:{start:{line:51,column:2},end:{line:54,column:46}},type:'if',locations:[{start:{line:51,column:2},end:{line:54,column:46}},{start:{line:51,column:2},end:{line:54,column:46}}],line:51},'10':{loc:{start:{line:53,column:7},end:{line:54,column:46}},type:'if',locations:[{start:{line:53,column:7},end:{line:54,column:46}},{start:{line:53,column:7},end:{line:54,column:46}}],line:53},'11':{loc:{start:{line:66,column:2},end:{line:67,column:40}},type:'if',locations:[{start:{line:66,column:2},end:{line:67,column:40}},{start:{line:66,column:2},end:{line:67,column:40}}],line:66},'12':{loc:{start:{line:83,column:13},end:{line:83,column:45}},type:'binary-expr',locations:[{start:{line:83,column:13},end:{line:83,column:21}},{start:{line:83,column:25},end:{line:83,column:45}}],line:83},'13':{loc:{start:{line:84,column:2},end:{line:85,column:35}},type:'if',locations:[{start:{line:84,column:2},end:{line:85,column:35}},{start:{line:84,column:2},end:{line:85,column:35}}],line:84},'14':{loc:{start:{line:84,column:6},end:{line:84,column:39}},type:'binary-expr',locations:[{start:{line:84,column:6},end:{line:84,column:14}},{start:{line:84,column:18},end:{line:84,column:39}}],line:84},'15':{loc:{start:{line:96,column:10},end:{line:96,column:27}},type:'binary-expr',locations:[{start:{line:96,column:10},end:{line:96,column:15}},{start:{line:96,column:19},end:{line:96,column:27}}],line:96},'16':{loc:{start:{line:97,column:11},end:{line:97,column:29}},type:'binary-expr',locations:[{start:{line:97,column:11},end:{line:97,column:17}},{start:{line:97,column:21},end:{line:97,column:29}}],line:97},'17':{loc:{start:{line:99,column:2},end:{line:100,column:31}},type:'if',locations:[{start:{line:99,column:2},end:{line:100,column:31}},{start:{line:99,column:2},end:{line:100,column:31}}],line:99},'18':{loc:{start:{line:99,column:6},end:{line:99,column:35}},type:'binary-expr',locations:[{start:{line:99,column:6},end:{line:99,column:12}},{start:{line:99,column:16},end:{line:99,column:35}}],line:99},'19':{loc:{start:{line:111,column:13},end:{line:111,column:45}},type:'binary-expr',locations:[{start:{line:111,column:13},end:{line:111,column:21}},{start:{line:111,column:25},end:{line:111,column:45}}],line:111},'20':{loc:{start:{line:112,column:2},end:{line:113,column:37}},type:'if',locations:[{start:{line:112,column:2},end:{line:113,column:37}},{start:{line:112,column:2},end:{line:113,column:37}}],line:112},'21':{loc:{start:{line:112,column:6},end:{line:112,column:39}},type:'binary-expr',locations:[{start:{line:112,column:6},end:{line:112,column:14}},{start:{line:112,column:18},end:{line:112,column:39}}],line:112},'22':{loc:{start:{line:124,column:13},end:{line:124,column:45}},type:'binary-expr',locations:[{start:{line:124,column:13},end:{line:124,column:21}},{start:{line:124,column:25},end:{line:124,column:45}}],line:124},'23':{loc:{start:{line:125,column:2},end:{line:126,column:45}},type:'if',locations:[{start:{line:125,column:2},end:{line:126,column:45}},{start:{line:125,column:2},end:{line:126,column:45}}],line:125},'24':{loc:{start:{line:125,column:6},end:{line:125,column:39}},type:'binary-expr',locations:[{start:{line:125,column:6},end:{line:125,column:14}},{start:{line:125,column:18},end:{line:125,column:39}}],line:125},'25':{loc:{start:{line:137,column:13},end:{line:137,column:45}},type:'binary-expr',locations:[{start:{line:137,column:13},end:{line:137,column:21}},{start:{line:137,column:25},end:{line:137,column:45}}],line:137},'26':{loc:{start:{line:138,column:2},end:{line:139,column:33}},type:'if',locations:[{start:{line:138,column:2},end:{line:139,column:33}},{start:{line:138,column:2},end:{line:139,column:33}}],line:138},'27':{loc:{start:{line:138,column:6},end:{line:138,column:39}},type:'binary-expr',locations:[{start:{line:138,column:6},end:{line:138,column:14}},{start:{line:138,column:18},end:{line:138,column:39}}],line:138},'28':{loc:{start:{line:150,column:13},end:{line:150,column:45}},type:'binary-expr',locations:[{start:{line:150,column:13},end:{line:150,column:21}},{start:{line:150,column:25},end:{line:150,column:45}}],line:150},'29':{loc:{start:{line:151,column:2},end:{line:152,column:33}},type:'if',locations:[{start:{line:151,column:2},end:{line:152,column:33}},{start:{line:151,column:2},end:{line:152,column:33}}],line:151},'30':{loc:{start:{line:151,column:6},end:{line:151,column:39}},type:'binary-expr',locations:[{start:{line:151,column:6},end:{line:151,column:14}},{start:{line:151,column:18},end:{line:151,column:39}}],line:151},'31':{loc:{start:{line:158,column:13},end:{line:158,column:45}},type:'binary-expr',locations:[{start:{line:158,column:13},end:{line:158,column:21}},{start:{line:158,column:25},end:{line:158,column:45}}],line:158},'32':{loc:{start:{line:165,column:13},end:{line:165,column:45}},type:'binary-expr',locations:[{start:{line:165,column:13},end:{line:165,column:21}},{start:{line:165,column:25},end:{line:165,column:45}}],line:165},'33':{loc:{start:{line:172,column:2},end:{line:173,column:27}},type:'if',locations:[{start:{line:172,column:2},end:{line:173,column:27}},{start:{line:172,column:2},end:{line:173,column:27}}],line:172},'34':{loc:{start:{line:175,column:2},end:{line:176,column:74}},type:'if',locations:[{start:{line:175,column:2},end:{line:176,column:74}},{start:{line:175,column:2},end:{line:176,column:74}}],line:175},'35':{loc:{start:{line:194,column:2},end:{line:206,column:3}},type:'if',locations:[{start:{line:194,column:2},end:{line:206,column:3}},{start:{line:194,column:2},end:{line:206,column:3}}],line:194},'36':{loc:{start:{line:195,column:4},end:{line:203,column:75}},type:'if',locations:[{start:{line:195,column:4},end:{line:203,column:75}},{start:{line:195,column:4},end:{line:203,column:75}}],line:195},'37':{loc:{start:{line:197,column:9},end:{line:203,column:75}},type:'if',locations:[{start:{line:197,column:9},end:{line:203,column:75}},{start:{line:197,column:9},end:{line:203,column:75}}],line:197},'38':{loc:{start:{line:200,column:9},end:{line:203,column:75}},type:'if',locations:[{start:{line:200,column:9},end:{line:203,column:75}},{start:{line:200,column:9},end:{line:203,column:75}}],line:200},'39':{loc:{start:{line:208,column:13},end:{line:208,column:45}},type:'binary-expr',locations:[{start:{line:208,column:13},end:{line:208,column:21}},{start:{line:208,column:25},end:{line:208,column:45}}],line:208},'40':{loc:{start:{line:209,column:2},end:{line:210,column:33}},type:'if',locations:[{start:{line:209,column:2},end:{line:210,column:33}},{start:{line:209,column:2},end:{line:210,column:33}}],line:209},'41':{loc:{start:{line:209,column:6},end:{line:209,column:39}},type:'binary-expr',locations:[{start:{line:209,column:6},end:{line:209,column:14}},{start:{line:209,column:18},end:{line:209,column:39}}],line:209}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0,'85':0,'86':0,'87':0,'88':0,'89':0,'90':0,'91':0,'92':0,'93':0,'94':0,'95':0,'96':0,'97':0,'98':0,'99':0,'100':0,'101':0,'102':0,'103':0,'104':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0},b:{'0':[0,0],'1':[0,0],'2':[0,0,0],'3':[0,0],'4':[0,0],'5':[0,0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0],'18':[0,0],'19':[0,0],'20':[0,0],'21':[0,0],'22':[0,0],'23':[0,0],'24':[0,0],'25':[0,0],'26':[0,0],'27':[0,0],'28':[0,0],'29':[0,0],'30':[0,0],'31':[0,0],'32':[0,0],'33':[0,0],'34':[0,0],'35':[0,0],'36':[0,0],'37':[0,0],'38':[0,0],'39':[0,0],'40':[0,0],'41':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const{Buffer}=(cov_1dbfb5fy6k.s[0]++,require('buffer'));const errors=(cov_1dbfb5fy6k.s[1]++,require('internal/errors'));const{isArrayBufferView}=(cov_1dbfb5fy6k.s[2]++,require('internal/util/types'));const{getDefaultEncoding,toBuf}=(cov_1dbfb5fy6k.s[3]++,require('internal/crypto/util'));const{DiffieHellman:_DiffieHellman,DiffieHellmanGroup:_DiffieHellmanGroup,ECDH:_ECDH}=(cov_1dbfb5fy6k.s[4]++,process.binding('crypto'));const{POINT_CONVERSION_COMPRESSED,POINT_CONVERSION_HYBRID,POINT_CONVERSION_UNCOMPRESSED}=(cov_1dbfb5fy6k.s[5]++,process.binding('constants').crypto);const DH_GENERATOR=(cov_1dbfb5fy6k.s[6]++,2);function DiffieHellman(sizeOrKey,keyEncoding,generator,genEncoding){cov_1dbfb5fy6k.f[0]++;cov_1dbfb5fy6k.s[7]++;if(!(this instanceof DiffieHellman)){cov_1dbfb5fy6k.b[0][0]++;cov_1dbfb5fy6k.s[8]++;return new DiffieHellman(sizeOrKey,keyEncoding,generator,genEncoding);}else{cov_1dbfb5fy6k.b[0][1]++;}cov_1dbfb5fy6k.s[9]++;if((cov_1dbfb5fy6k.b[2][0]++,typeof sizeOrKey!=='number')&&(cov_1dbfb5fy6k.b[2][1]++,typeof sizeOrKey!=='string')&&(cov_1dbfb5fy6k.b[2][2]++,!isArrayBufferView(sizeOrKey))){cov_1dbfb5fy6k.b[1][0]++;cov_1dbfb5fy6k.s[10]++;throw new errors.TypeError('ERR_INVALID_ARG_TYPE','sizeOrKey',['number','string','Buffer','TypedArray','DataView']);}else{cov_1dbfb5fy6k.b[1][1]++;}cov_1dbfb5fy6k.s[11]++;if(keyEncoding){cov_1dbfb5fy6k.b[3][0]++;cov_1dbfb5fy6k.s[12]++;if((cov_1dbfb5fy6k.b[5][0]++,typeof keyEncoding!=='string')||(cov_1dbfb5fy6k.b[5][1]++,!Buffer.isEncoding(keyEncoding))&&(cov_1dbfb5fy6k.b[5][2]++,keyEncoding!=='buffer')){cov_1dbfb5fy6k.b[4][0]++;cov_1dbfb5fy6k.s[13]++;genEncoding=generator;cov_1dbfb5fy6k.s[14]++;generator=keyEncoding;cov_1dbfb5fy6k.s[15]++;keyEncoding=false;}else{cov_1dbfb5fy6k.b[4][1]++;}}else{cov_1dbfb5fy6k.b[3][1]++;}const encoding=(cov_1dbfb5fy6k.s[16]++,getDefaultEncoding());cov_1dbfb5fy6k.s[17]++;keyEncoding=(cov_1dbfb5fy6k.b[6][0]++,keyEncoding)||(cov_1dbfb5fy6k.b[6][1]++,encoding);cov_1dbfb5fy6k.s[18]++;genEncoding=(cov_1dbfb5fy6k.b[7][0]++,genEncoding)||(cov_1dbfb5fy6k.b[7][1]++,encoding);cov_1dbfb5fy6k.s[19]++;if(typeof sizeOrKey!=='number'){cov_1dbfb5fy6k.b[8][0]++;cov_1dbfb5fy6k.s[20]++;sizeOrKey=toBuf(sizeOrKey,keyEncoding);}else{cov_1dbfb5fy6k.b[8][1]++;}cov_1dbfb5fy6k.s[21]++;if(!generator){cov_1dbfb5fy6k.b[9][0]++;cov_1dbfb5fy6k.s[22]++;generator=DH_GENERATOR;}else{cov_1dbfb5fy6k.b[9][1]++;cov_1dbfb5fy6k.s[23]++;if(typeof generator!=='number'){cov_1dbfb5fy6k.b[10][0]++;cov_1dbfb5fy6k.s[24]++;generator=toBuf(generator,genEncoding);}else{cov_1dbfb5fy6k.b[10][1]++;}}cov_1dbfb5fy6k.s[25]++;this._handle=new _DiffieHellman(sizeOrKey,generator);cov_1dbfb5fy6k.s[26]++;Object.defineProperty(this,'verifyError',{enumerable:true,value:this._handle.verifyError,writable:false});}function DiffieHellmanGroup(name){cov_1dbfb5fy6k.f[1]++;cov_1dbfb5fy6k.s[27]++;if(!(this instanceof DiffieHellmanGroup)){cov_1dbfb5fy6k.b[11][0]++;cov_1dbfb5fy6k.s[28]++;return new DiffieHellmanGroup(name);}else{cov_1dbfb5fy6k.b[11][1]++;}cov_1dbfb5fy6k.s[29]++;this._handle=new _DiffieHellmanGroup(name);cov_1dbfb5fy6k.s[30]++;Object.defineProperty(this,'verifyError',{enumerable:true,value:this._handle.verifyError,writable:false});}cov_1dbfb5fy6k.s[31]++;DiffieHellmanGroup.prototype.generateKeys=DiffieHellman.prototype.generateKeys=dhGenerateKeys;function dhGenerateKeys(encoding){cov_1dbfb5fy6k.f[2]++;var keys=(cov_1dbfb5fy6k.s[32]++,this._handle.generateKeys());cov_1dbfb5fy6k.s[33]++;encoding=(cov_1dbfb5fy6k.b[12][0]++,encoding)||(cov_1dbfb5fy6k.b[12][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[34]++;if((cov_1dbfb5fy6k.b[14][0]++,encoding)&&(cov_1dbfb5fy6k.b[14][1]++,encoding!=='buffer')){cov_1dbfb5fy6k.b[13][0]++;cov_1dbfb5fy6k.s[35]++;keys=keys.toString(encoding);}else{cov_1dbfb5fy6k.b[13][1]++;}cov_1dbfb5fy6k.s[36]++;return keys;}cov_1dbfb5fy6k.s[37]++;DiffieHellmanGroup.prototype.computeSecret=DiffieHellman.prototype.computeSecret=dhComputeSecret;function dhComputeSecret(key,inEnc,outEnc){cov_1dbfb5fy6k.f[3]++;const encoding=(cov_1dbfb5fy6k.s[38]++,getDefaultEncoding());cov_1dbfb5fy6k.s[39]++;inEnc=(cov_1dbfb5fy6k.b[15][0]++,inEnc)||(cov_1dbfb5fy6k.b[15][1]++,encoding);cov_1dbfb5fy6k.s[40]++;outEnc=(cov_1dbfb5fy6k.b[16][0]++,outEnc)||(cov_1dbfb5fy6k.b[16][1]++,encoding);var ret=(cov_1dbfb5fy6k.s[41]++,this._handle.computeSecret(toBuf(key,inEnc)));cov_1dbfb5fy6k.s[42]++;if((cov_1dbfb5fy6k.b[18][0]++,outEnc)&&(cov_1dbfb5fy6k.b[18][1]++,outEnc!=='buffer')){cov_1dbfb5fy6k.b[17][0]++;cov_1dbfb5fy6k.s[43]++;ret=ret.toString(outEnc);}else{cov_1dbfb5fy6k.b[17][1]++;}cov_1dbfb5fy6k.s[44]++;return ret;}cov_1dbfb5fy6k.s[45]++;DiffieHellmanGroup.prototype.getPrime=DiffieHellman.prototype.getPrime=dhGetPrime;function dhGetPrime(encoding){cov_1dbfb5fy6k.f[4]++;var prime=(cov_1dbfb5fy6k.s[46]++,this._handle.getPrime());cov_1dbfb5fy6k.s[47]++;encoding=(cov_1dbfb5fy6k.b[19][0]++,encoding)||(cov_1dbfb5fy6k.b[19][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[48]++;if((cov_1dbfb5fy6k.b[21][0]++,encoding)&&(cov_1dbfb5fy6k.b[21][1]++,encoding!=='buffer')){cov_1dbfb5fy6k.b[20][0]++;cov_1dbfb5fy6k.s[49]++;prime=prime.toString(encoding);}else{cov_1dbfb5fy6k.b[20][1]++;}cov_1dbfb5fy6k.s[50]++;return prime;}cov_1dbfb5fy6k.s[51]++;DiffieHellmanGroup.prototype.getGenerator=DiffieHellman.prototype.getGenerator=dhGetGenerator;function dhGetGenerator(encoding){cov_1dbfb5fy6k.f[5]++;var generator=(cov_1dbfb5fy6k.s[52]++,this._handle.getGenerator());cov_1dbfb5fy6k.s[53]++;encoding=(cov_1dbfb5fy6k.b[22][0]++,encoding)||(cov_1dbfb5fy6k.b[22][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[54]++;if((cov_1dbfb5fy6k.b[24][0]++,encoding)&&(cov_1dbfb5fy6k.b[24][1]++,encoding!=='buffer')){cov_1dbfb5fy6k.b[23][0]++;cov_1dbfb5fy6k.s[55]++;generator=generator.toString(encoding);}else{cov_1dbfb5fy6k.b[23][1]++;}cov_1dbfb5fy6k.s[56]++;return generator;}cov_1dbfb5fy6k.s[57]++;DiffieHellmanGroup.prototype.getPublicKey=DiffieHellman.prototype.getPublicKey=dhGetPublicKey;function dhGetPublicKey(encoding){cov_1dbfb5fy6k.f[6]++;var key=(cov_1dbfb5fy6k.s[58]++,this._handle.getPublicKey());cov_1dbfb5fy6k.s[59]++;encoding=(cov_1dbfb5fy6k.b[25][0]++,encoding)||(cov_1dbfb5fy6k.b[25][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[60]++;if((cov_1dbfb5fy6k.b[27][0]++,encoding)&&(cov_1dbfb5fy6k.b[27][1]++,encoding!=='buffer')){cov_1dbfb5fy6k.b[26][0]++;cov_1dbfb5fy6k.s[61]++;key=key.toString(encoding);}else{cov_1dbfb5fy6k.b[26][1]++;}cov_1dbfb5fy6k.s[62]++;return key;}cov_1dbfb5fy6k.s[63]++;DiffieHellmanGroup.prototype.getPrivateKey=DiffieHellman.prototype.getPrivateKey=dhGetPrivateKey;function dhGetPrivateKey(encoding){cov_1dbfb5fy6k.f[7]++;var key=(cov_1dbfb5fy6k.s[64]++,this._handle.getPrivateKey());cov_1dbfb5fy6k.s[65]++;encoding=(cov_1dbfb5fy6k.b[28][0]++,encoding)||(cov_1dbfb5fy6k.b[28][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[66]++;if((cov_1dbfb5fy6k.b[30][0]++,encoding)&&(cov_1dbfb5fy6k.b[30][1]++,encoding!=='buffer')){cov_1dbfb5fy6k.b[29][0]++;cov_1dbfb5fy6k.s[67]++;key=key.toString(encoding);}else{cov_1dbfb5fy6k.b[29][1]++;}cov_1dbfb5fy6k.s[68]++;return key;}cov_1dbfb5fy6k.s[69]++;DiffieHellman.prototype.setPublicKey=function setPublicKey(key,encoding){cov_1dbfb5fy6k.f[8]++;cov_1dbfb5fy6k.s[70]++;encoding=(cov_1dbfb5fy6k.b[31][0]++,encoding)||(cov_1dbfb5fy6k.b[31][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[71]++;this._handle.setPublicKey(toBuf(key,encoding));cov_1dbfb5fy6k.s[72]++;return this;};cov_1dbfb5fy6k.s[73]++;DiffieHellman.prototype.setPrivateKey=function setPrivateKey(key,encoding){cov_1dbfb5fy6k.f[9]++;cov_1dbfb5fy6k.s[74]++;encoding=(cov_1dbfb5fy6k.b[32][0]++,encoding)||(cov_1dbfb5fy6k.b[32][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[75]++;this._handle.setPrivateKey(toBuf(key,encoding));cov_1dbfb5fy6k.s[76]++;return this;};function ECDH(curve){cov_1dbfb5fy6k.f[10]++;cov_1dbfb5fy6k.s[77]++;if(!(this instanceof ECDH)){cov_1dbfb5fy6k.b[33][0]++;cov_1dbfb5fy6k.s[78]++;return new ECDH(curve);}else{cov_1dbfb5fy6k.b[33][1]++;}cov_1dbfb5fy6k.s[79]++;if(typeof curve!=='string'){cov_1dbfb5fy6k.b[34][0]++;cov_1dbfb5fy6k.s[80]++;throw new errors.TypeError('ERR_INVALID_ARG_TYPE','curve','string');}else{cov_1dbfb5fy6k.b[34][1]++;}cov_1dbfb5fy6k.s[81]++;this._handle=new _ECDH(curve);}cov_1dbfb5fy6k.s[82]++;ECDH.prototype.computeSecret=DiffieHellman.prototype.computeSecret;cov_1dbfb5fy6k.s[83]++;ECDH.prototype.setPrivateKey=DiffieHellman.prototype.setPrivateKey;cov_1dbfb5fy6k.s[84]++;ECDH.prototype.setPublicKey=DiffieHellman.prototype.setPublicKey;cov_1dbfb5fy6k.s[85]++;ECDH.prototype.getPrivateKey=DiffieHellman.prototype.getPrivateKey;cov_1dbfb5fy6k.s[86]++;ECDH.prototype.generateKeys=function generateKeys(encoding,format){cov_1dbfb5fy6k.f[11]++;cov_1dbfb5fy6k.s[87]++;this._handle.generateKeys();cov_1dbfb5fy6k.s[88]++;return this.getPublicKey(encoding,format);};cov_1dbfb5fy6k.s[89]++;ECDH.prototype.getPublicKey=function getPublicKey(encoding,format){cov_1dbfb5fy6k.f[12]++;var f;cov_1dbfb5fy6k.s[90]++;if(format){cov_1dbfb5fy6k.b[35][0]++;cov_1dbfb5fy6k.s[91]++;if(format==='compressed'){cov_1dbfb5fy6k.b[36][0]++;cov_1dbfb5fy6k.s[92]++;f=POINT_CONVERSION_COMPRESSED;}else{cov_1dbfb5fy6k.b[36][1]++;cov_1dbfb5fy6k.s[93]++;if(format==='hybrid'){cov_1dbfb5fy6k.b[37][0]++;cov_1dbfb5fy6k.s[94]++;f=POINT_CONVERSION_HYBRID;}// Default
else{cov_1dbfb5fy6k.b[37][1]++;cov_1dbfb5fy6k.s[95]++;if(format==='uncompressed'){cov_1dbfb5fy6k.b[38][0]++;cov_1dbfb5fy6k.s[96]++;f=POINT_CONVERSION_UNCOMPRESSED;}else{cov_1dbfb5fy6k.b[38][1]++;cov_1dbfb5fy6k.s[97]++;throw new errors.TypeError('ERR_CRYPTO_ECDH_INVALID_FORMAT',format);}}}}else{cov_1dbfb5fy6k.b[35][1]++;cov_1dbfb5fy6k.s[98]++;f=POINT_CONVERSION_UNCOMPRESSED;}var key=(cov_1dbfb5fy6k.s[99]++,this._handle.getPublicKey(f));cov_1dbfb5fy6k.s[100]++;encoding=(cov_1dbfb5fy6k.b[39][0]++,encoding)||(cov_1dbfb5fy6k.b[39][1]++,getDefaultEncoding());cov_1dbfb5fy6k.s[101]++;if((cov_1dbfb5fy6k.b[41][0]++,encoding)&&(cov_1dbfb5fy6k.b[41][1]++,encoding!=='buffer')){cov_1dbfb5fy6k.b[40][0]++;cov_1dbfb5fy6k.s[102]++;key=key.toString(encoding);}else{cov_1dbfb5fy6k.b[40][1]++;}cov_1dbfb5fy6k.s[103]++;return key;};cov_1dbfb5fy6k.s[104]++;module.exports={DiffieHellman,DiffieHellmanGroup,ECDH};