'use strict';var cov_21md9uzvn2=function(){var path='internal/util/types.js',hash='f3ed59e7768a9457e5f0b26a707569eb22a6a069',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'internal/util/types.js',statementMap:{'0':{start:{line:3,column:21},end:{line:3,column:34}},'1':{start:{line:11,column:2},end:{line:11,column:65}},'2':{start:{line:11,column:31},end:{line:11,column:64}},'3':{start:{line:14,column:28},end:{line:14,column:71}},'4':{start:{line:17,column:4},end:{line:19,column:62}},'5':{start:{line:22,column:26},end:{line:22,column:44}},'6':{start:{line:25,column:2},end:{line:25,column:58}},'7':{start:{line:29,column:2},end:{line:29,column:61}},'8':{start:{line:32,column:0},end:{line:36,column:2}}},fnMap:{'0':{name:'uncurryThis',decl:{start:{line:10,column:9},end:{line:10,column:20}},loc:{start:{line:10,column:27},end:{line:12,column:1}},line:10},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:9},end:{line:11,column:10}},loc:{start:{line:11,column:31},end:{line:11,column:64}},line:11},'2':{name:'isTypedArray',decl:{start:{line:24,column:9},end:{line:24,column:21}},loc:{start:{line:24,column:29},end:{line:26,column:1}},line:24},'3':{name:'isUint8Array',decl:{start:{line:28,column:9},end:{line:28,column:21}},loc:{start:{line:28,column:29},end:{line:30,column:1}},line:28}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0},f:{'0':0,'1':0,'2':0,'3':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const ReflectApply=(cov_21md9uzvn2.s[0]++,Reflect.apply);// This function is borrowed from the function with the same name on V8 Extras'
// `utils` object. V8 implements Reflect.apply very efficiently in conjunction
// with the spread syntax, such that no additional special case is needed for
// function calls w/o arguments.
// Refs: https://github.com/v8/v8/blob/d6ead37d265d7215cf9c5f768f279e21bd170212/src/js/prologue.js#L152-L156
function uncurryThis(func){cov_21md9uzvn2.f[0]++;cov_21md9uzvn2.s[1]++;return(thisArg,...args)=>{cov_21md9uzvn2.f[1]++;cov_21md9uzvn2.s[2]++;return ReflectApply(func,thisArg,args);};}const TypedArrayPrototype=(cov_21md9uzvn2.s[3]++,Object.getPrototypeOf(Uint8Array.prototype));const TypedArrayProto_toStringTag=(cov_21md9uzvn2.s[4]++,uncurryThis(Object.getOwnPropertyDescriptor(TypedArrayPrototype,Symbol.toStringTag).get));// Cached to make sure no userland code can tamper with it.
const isArrayBufferView=(cov_21md9uzvn2.s[5]++,ArrayBuffer.isView);function isTypedArray(value){cov_21md9uzvn2.f[2]++;cov_21md9uzvn2.s[6]++;return TypedArrayProto_toStringTag(value)!==undefined;}function isUint8Array(value){cov_21md9uzvn2.f[3]++;cov_21md9uzvn2.s[7]++;return TypedArrayProto_toStringTag(value)==='Uint8Array';}cov_21md9uzvn2.s[8]++;module.exports={isArrayBufferView,isTypedArray,isUint8Array};