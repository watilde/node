'use strict';// Example:
// C=US\nST=CA\nL=SF\nO=Joyent\nOU=Node.js\nCN=ca1\nemailAddress=ry@clouds.org
var cov_leamyzsyc=function(){var path='internal/tls.js',hash='7519b7e274c21a208cccb4b80040be939e9c935c',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'internal/tls.js',statementMap:{'0':{start:{line:6,column:12},end:{line:6,column:31}},'1':{start:{line:7,column:14},end:{line:7,column:27}},'2':{start:{line:8,column:2},end:{line:22,column:3}},'3':{start:{line:9,column:19},end:{line:9,column:40}},'4':{start:{line:10,column:4},end:{line:21,column:5}},'5':{start:{line:11,column:16},end:{line:11,column:43}},'6':{start:{line:12,column:18},end:{line:12,column:46}},'7':{start:{line:13,column:6},end:{line:20,column:7}},'8':{start:{line:14,column:8},end:{line:16,column:9}},'9':{start:{line:15,column:10},end:{line:15,column:32}},'10':{start:{line:17,column:8},end:{line:17,column:29}},'11':{start:{line:19,column:8},end:{line:19,column:25}},'12':{start:{line:23,column:2},end:{line:23,column:13}},'13':{start:{line:26,column:0},end:{line:28,column:2}}},fnMap:{'0':{name:'parseCertString',decl:{start:{line:5,column:9},end:{line:5,column:24}},loc:{start:{line:5,column:28},end:{line:24,column:1}},line:5}},branchMap:{'0':{loc:{start:{line:10,column:4},end:{line:21,column:5}},type:'if',locations:[{start:{line:10,column:4},end:{line:21,column:5}},{start:{line:10,column:4},end:{line:21,column:5}}],line:10},'1':{loc:{start:{line:13,column:6},end:{line:20,column:7}},type:'if',locations:[{start:{line:13,column:6},end:{line:20,column:7}},{start:{line:13,column:6},end:{line:20,column:7}}],line:13},'2':{loc:{start:{line:14,column:8},end:{line:16,column:9}},type:'if',locations:[{start:{line:14,column:8},end:{line:16,column:9}},{start:{line:14,column:8},end:{line:16,column:9}}],line:14}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function parseCertString(s){cov_leamyzsyc.f[0]++;var out=(cov_leamyzsyc.s[0]++,Object.create(null));var parts=(cov_leamyzsyc.s[1]++,s.split('\n'));cov_leamyzsyc.s[2]++;for(var i=0,len=parts.length;i<len;i++){var sepIndex=(cov_leamyzsyc.s[3]++,parts[i].indexOf('='));cov_leamyzsyc.s[4]++;if(sepIndex>0){cov_leamyzsyc.b[0][0]++;var key=(cov_leamyzsyc.s[5]++,parts[i].slice(0,sepIndex));var value=(cov_leamyzsyc.s[6]++,parts[i].slice(sepIndex+1));cov_leamyzsyc.s[7]++;if(key in out){cov_leamyzsyc.b[1][0]++;cov_leamyzsyc.s[8]++;if(!Array.isArray(out[key])){cov_leamyzsyc.b[2][0]++;cov_leamyzsyc.s[9]++;out[key]=[out[key]];}else{cov_leamyzsyc.b[2][1]++;}cov_leamyzsyc.s[10]++;out[key].push(value);}else{cov_leamyzsyc.b[1][1]++;cov_leamyzsyc.s[11]++;out[key]=value;}}else{cov_leamyzsyc.b[0][1]++;}}cov_leamyzsyc.s[12]++;return out;}cov_leamyzsyc.s[13]++;module.exports={parseCertString};