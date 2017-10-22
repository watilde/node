// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';var cov_2l24ndctgc=function(){var path='_stream_transform.js',hash='b026ef4b778849ccfa501d79136e8fa5cab6de8f',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'_stream_transform.js',statementMap:{'0':{start:{line:66,column:0},end:{line:66,column:27}},'1':{start:{line:67,column:15},end:{line:67,column:41}},'2':{start:{line:68,column:15},end:{line:68,column:40}},'3':{start:{line:69,column:13},end:{line:69,column:28}},'4':{start:{line:70,column:0},end:{line:70,column:33}},'5':{start:{line:74,column:11},end:{line:74,column:31}},'6':{start:{line:75,column:2},end:{line:75,column:26}},'7':{start:{line:77,column:11},end:{line:77,column:21}},'8':{start:{line:79,column:2},end:{line:81,column:3}},'9':{start:{line:80,column:4},end:{line:80,column:73}},'10':{start:{line:83,column:2},end:{line:83,column:23}},'11':{start:{line:84,column:2},end:{line:84,column:20}},'12':{start:{line:86,column:2},end:{line:87,column:20}},'13':{start:{line:87,column:4},end:{line:87,column:20}},'14':{start:{line:89,column:2},end:{line:89,column:9}},'15':{start:{line:91,column:11},end:{line:91,column:30}},'16':{start:{line:92,column:2},end:{line:92,column:21}},'17':{start:{line:93,column:2},end:{line:95,column:3}},'18':{start:{line:94,column:4},end:{line:94,column:33}},'19':{start:{line:100,column:2},end:{line:101,column:34}},'20':{start:{line:101,column:4},end:{line:101,column:34}},'21':{start:{line:103,column:2},end:{line:103,column:29}},'22':{start:{line:105,column:2},end:{line:112,column:4}},'23':{start:{line:115,column:2},end:{line:115,column:42}},'24':{start:{line:120,column:2},end:{line:120,column:35}},'25':{start:{line:122,column:2},end:{line:128,column:3}},'26':{start:{line:123,column:4},end:{line:124,column:42}},'27':{start:{line:124,column:6},end:{line:124,column:42}},'28':{start:{line:126,column:4},end:{line:127,column:34}},'29':{start:{line:127,column:6},end:{line:127,column:34}},'30':{start:{line:131,column:2},end:{line:131,column:34}},'31':{start:{line:135,column:2},end:{line:141,column:3}},'32':{start:{line:136,column:4},end:{line:138,column:7}},'33':{start:{line:137,column:6},end:{line:137,column:27}},'34':{start:{line:140,column:4},end:{line:140,column:27}},'35':{start:{line:144,column:0},end:{line:147,column:2}},'36':{start:{line:145,column:2},end:{line:145,column:45}},'37':{start:{line:146,column:2},end:{line:146,column:59}},'38':{start:{line:159,column:0},end:{line:161,column:2}},'39':{start:{line:160,column:2},end:{line:160,column:69}},'40':{start:{line:163,column:0},end:{line:175,column:2}},'41':{start:{line:164,column:11},end:{line:164,column:31}},'42':{start:{line:165,column:2},end:{line:165,column:18}},'43':{start:{line:166,column:2},end:{line:166,column:24}},'44':{start:{line:167,column:2},end:{line:167,column:30}},'45':{start:{line:168,column:2},end:{line:174,column:3}},'46':{start:{line:169,column:13},end:{line:169,column:32}},'47':{start:{line:170,column:4},end:{line:173,column:35}},'48':{start:{line:173,column:6},end:{line:173,column:35}},'49':{start:{line:180,column:0},end:{line:191,column:2}},'50':{start:{line:181,column:11},end:{line:181,column:31}},'51':{start:{line:183,column:2},end:{line:190,column:3}},'52':{start:{line:184,column:4},end:{line:184,column:27}},'53':{start:{line:185,column:4},end:{line:185,column:72}},'54':{start:{line:189,column:4},end:{line:189,column:28}},'55':{start:{line:194,column:0},end:{line:199,column:2}},'56':{start:{line:195,column:2},end:{line:198,column:5}},'57':{start:{line:196,column:4},end:{line:196,column:13}},'58':{start:{line:197,column:4},end:{line:197,column:23}},'59':{start:{line:203,column:2},end:{line:204,column:36}},'60':{start:{line:204,column:4},end:{line:204,column:36}},'61':{start:{line:206,column:2},end:{line:207,column:22}},'62':{start:{line:207,column:4},end:{line:207,column:22}},'63':{start:{line:212,column:2},end:{line:213,column:58}},'64':{start:{line:213,column:4},end:{line:213,column:58}},'65':{start:{line:215,column:2},end:{line:216,column:65}},'66':{start:{line:216,column:4},end:{line:216,column:65}},'67':{start:{line:217,column:2},end:{line:217,column:27}}},fnMap:{'0':{name:'afterTransform',decl:{start:{line:73,column:9},end:{line:73,column:23}},loc:{start:{line:73,column:34},end:{line:96,column:1}},line:73},'1':{name:'Transform',decl:{start:{line:99,column:9},end:{line:99,column:18}},loc:{start:{line:99,column:28},end:{line:132,column:1}},line:99},'2':{name:'prefinish',decl:{start:{line:134,column:9},end:{line:134,column:18}},loc:{start:{line:134,column:21},end:{line:142,column:1}},line:134},'3':{name:'(anonymous_3)',decl:{start:{line:136,column:16},end:{line:136,column:17}},loc:{start:{line:136,column:30},end:{line:138,column:5}},line:136},'4':{name:'(anonymous_4)',decl:{start:{line:144,column:27},end:{line:144,column:28}},loc:{start:{line:144,column:53},end:{line:147,column:1}},line:144},'5':{name:'(anonymous_5)',decl:{start:{line:159,column:33},end:{line:159,column:34}},loc:{start:{line:159,column:63},end:{line:161,column:1}},line:159},'6':{name:'(anonymous_6)',decl:{start:{line:163,column:29},end:{line:163,column:30}},loc:{start:{line:163,column:59},end:{line:175,column:1}},line:163},'7':{name:'(anonymous_7)',decl:{start:{line:180,column:28},end:{line:180,column:29}},loc:{start:{line:180,column:40},end:{line:191,column:1}},line:180},'8':{name:'(anonymous_8)',decl:{start:{line:194,column:31},end:{line:194,column:32}},loc:{start:{line:194,column:49},end:{line:199,column:1}},line:194},'9':{name:'(anonymous_9)',decl:{start:{line:195,column:44},end:{line:195,column:45}},loc:{start:{line:195,column:54},end:{line:198,column:3}},line:195},'10':{name:'done',decl:{start:{line:202,column:9},end:{line:202,column:13}},loc:{start:{line:202,column:32},end:{line:218,column:1}},line:202}},branchMap:{'0':{loc:{start:{line:79,column:2},end:{line:81,column:3}},type:'if',locations:[{start:{line:79,column:2},end:{line:81,column:3}},{start:{line:79,column:2},end:{line:81,column:3}}],line:79},'1':{loc:{start:{line:86,column:2},end:{line:87,column:20}},type:'if',locations:[{start:{line:86,column:2},end:{line:87,column:20}},{start:{line:86,column:2},end:{line:87,column:20}}],line:86},'2':{loc:{start:{line:93,column:2},end:{line:95,column:3}},type:'if',locations:[{start:{line:93,column:2},end:{line:95,column:3}},{start:{line:93,column:2},end:{line:95,column:3}}],line:93},'3':{loc:{start:{line:93,column:6},end:{line:93,column:53}},type:'binary-expr',locations:[{start:{line:93,column:6},end:{line:93,column:21}},{start:{line:93,column:25},end:{line:93,column:53}}],line:93},'4':{loc:{start:{line:100,column:2},end:{line:101,column:34}},type:'if',locations:[{start:{line:100,column:2},end:{line:101,column:34}},{start:{line:100,column:2},end:{line:101,column:34}}],line:100},'5':{loc:{start:{line:122,column:2},end:{line:128,column:3}},type:'if',locations:[{start:{line:122,column:2},end:{line:128,column:3}},{start:{line:122,column:2},end:{line:128,column:3}}],line:122},'6':{loc:{start:{line:123,column:4},end:{line:124,column:42}},type:'if',locations:[{start:{line:123,column:4},end:{line:124,column:42}},{start:{line:123,column:4},end:{line:124,column:42}}],line:123},'7':{loc:{start:{line:126,column:4},end:{line:127,column:34}},type:'if',locations:[{start:{line:126,column:4},end:{line:127,column:34}},{start:{line:126,column:4},end:{line:127,column:34}}],line:126},'8':{loc:{start:{line:135,column:2},end:{line:141,column:3}},type:'if',locations:[{start:{line:135,column:2},end:{line:141,column:3}},{start:{line:135,column:2},end:{line:141,column:3}}],line:135},'9':{loc:{start:{line:168,column:2},end:{line:174,column:3}},type:'if',locations:[{start:{line:168,column:2},end:{line:174,column:3}},{start:{line:168,column:2},end:{line:174,column:3}}],line:168},'10':{loc:{start:{line:170,column:4},end:{line:173,column:35}},type:'if',locations:[{start:{line:170,column:4},end:{line:173,column:35}},{start:{line:170,column:4},end:{line:173,column:35}}],line:170},'11':{loc:{start:{line:170,column:8},end:{line:172,column:36}},type:'binary-expr',locations:[{start:{line:170,column:8},end:{line:170,column:24}},{start:{line:171,column:8},end:{line:171,column:23}},{start:{line:172,column:8},end:{line:172,column:36}}],line:170},'12':{loc:{start:{line:183,column:2},end:{line:190,column:3}},type:'if',locations:[{start:{line:183,column:2},end:{line:190,column:3}},{start:{line:183,column:2},end:{line:190,column:3}}],line:183},'13':{loc:{start:{line:183,column:6},end:{line:183,column:62}},type:'binary-expr',locations:[{start:{line:183,column:6},end:{line:183,column:28}},{start:{line:183,column:32},end:{line:183,column:42}},{start:{line:183,column:46},end:{line:183,column:62}}],line:183},'14':{loc:{start:{line:203,column:2},end:{line:204,column:36}},type:'if',locations:[{start:{line:203,column:2},end:{line:204,column:36}},{start:{line:203,column:2},end:{line:204,column:36}}],line:203},'15':{loc:{start:{line:206,column:2},end:{line:207,column:22}},type:'if',locations:[{start:{line:206,column:2},end:{line:207,column:22}},{start:{line:206,column:2},end:{line:207,column:22}}],line:206},'16':{loc:{start:{line:212,column:2},end:{line:213,column:58}},type:'if',locations:[{start:{line:212,column:2},end:{line:213,column:58}},{start:{line:212,column:2},end:{line:213,column:58}}],line:212},'17':{loc:{start:{line:215,column:2},end:{line:216,column:65}},type:'if',locations:[{start:{line:215,column:2},end:{line:216,column:65}},{start:{line:215,column:2},end:{line:216,column:65}}],line:215}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0,0],'12':[0,0],'13':[0,0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2l24ndctgc.s[0]++;module.exports=Transform;const errors=(cov_2l24ndctgc.s[1]++,require('internal/errors'));const Duplex=(cov_2l24ndctgc.s[2]++,require('_stream_duplex'));const util=(cov_2l24ndctgc.s[3]++,require('util'));cov_2l24ndctgc.s[4]++;util.inherits(Transform,Duplex);function afterTransform(er,data){cov_2l24ndctgc.f[0]++;var ts=(cov_2l24ndctgc.s[5]++,this._transformState);cov_2l24ndctgc.s[6]++;ts.transforming=false;var cb=(cov_2l24ndctgc.s[7]++,ts.writecb);cov_2l24ndctgc.s[8]++;if(cb===null){cov_2l24ndctgc.b[0][0]++;cov_2l24ndctgc.s[9]++;return this.emit('error',new errors.Error('ERR_MULTIPLE_CALLBACK'));}else{cov_2l24ndctgc.b[0][1]++;}cov_2l24ndctgc.s[10]++;ts.writechunk=null;cov_2l24ndctgc.s[11]++;ts.writecb=null;cov_2l24ndctgc.s[12]++;if(data!=null)// single equals check for both `null` and `undefined`
{cov_2l24ndctgc.b[1][0]++;cov_2l24ndctgc.s[13]++;this.push(data);}else{cov_2l24ndctgc.b[1][1]++;}cov_2l24ndctgc.s[14]++;cb(er);var rs=(cov_2l24ndctgc.s[15]++,this._readableState);cov_2l24ndctgc.s[16]++;rs.reading=false;cov_2l24ndctgc.s[17]++;if((cov_2l24ndctgc.b[3][0]++,rs.needReadable)||(cov_2l24ndctgc.b[3][1]++,rs.length<rs.highWaterMark)){cov_2l24ndctgc.b[2][0]++;cov_2l24ndctgc.s[18]++;this._read(rs.highWaterMark);}else{cov_2l24ndctgc.b[2][1]++;}}function Transform(options){cov_2l24ndctgc.f[1]++;cov_2l24ndctgc.s[19]++;if(!(this instanceof Transform)){cov_2l24ndctgc.b[4][0]++;cov_2l24ndctgc.s[20]++;return new Transform(options);}else{cov_2l24ndctgc.b[4][1]++;}cov_2l24ndctgc.s[21]++;Duplex.call(this,options);cov_2l24ndctgc.s[22]++;this._transformState={afterTransform:afterTransform.bind(this),needTransform:false,transforming:false,writecb:null,writechunk:null,writeencoding:null};// start out asking for a readable event once data is transformed.
cov_2l24ndctgc.s[23]++;this._readableState.needReadable=true;// we have implemented the _read method, and done the other things
// that Readable wants before the first _read call, so unset the
// sync guard flag.
cov_2l24ndctgc.s[24]++;this._readableState.sync=false;cov_2l24ndctgc.s[25]++;if(options){cov_2l24ndctgc.b[5][0]++;cov_2l24ndctgc.s[26]++;if(typeof options.transform==='function'){cov_2l24ndctgc.b[6][0]++;cov_2l24ndctgc.s[27]++;this._transform=options.transform;}else{cov_2l24ndctgc.b[6][1]++;}cov_2l24ndctgc.s[28]++;if(typeof options.flush==='function'){cov_2l24ndctgc.b[7][0]++;cov_2l24ndctgc.s[29]++;this._flush=options.flush;}else{cov_2l24ndctgc.b[7][1]++;}}else{cov_2l24ndctgc.b[5][1]++;}// When the writable side finishes, then flush out anything remaining.
cov_2l24ndctgc.s[30]++;this.on('prefinish',prefinish);}function prefinish(){cov_2l24ndctgc.f[2]++;cov_2l24ndctgc.s[31]++;if(typeof this._flush==='function'){cov_2l24ndctgc.b[8][0]++;cov_2l24ndctgc.s[32]++;this._flush((er,data)=>{cov_2l24ndctgc.f[3]++;cov_2l24ndctgc.s[33]++;done(this,er,data);});}else{cov_2l24ndctgc.b[8][1]++;cov_2l24ndctgc.s[34]++;done(this,null,null);}}cov_2l24ndctgc.s[35]++;Transform.prototype.push=function(chunk,encoding){cov_2l24ndctgc.f[4]++;cov_2l24ndctgc.s[36]++;this._transformState.needTransform=false;cov_2l24ndctgc.s[37]++;return Duplex.prototype.push.call(this,chunk,encoding);};// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
cov_2l24ndctgc.s[38]++;Transform.prototype._transform=function(chunk,encoding,cb){cov_2l24ndctgc.f[5]++;cov_2l24ndctgc.s[39]++;throw new errors.Error('ERR_METHOD_NOT_IMPLEMENTED','_transform');};cov_2l24ndctgc.s[40]++;Transform.prototype._write=function(chunk,encoding,cb){cov_2l24ndctgc.f[6]++;var ts=(cov_2l24ndctgc.s[41]++,this._transformState);cov_2l24ndctgc.s[42]++;ts.writecb=cb;cov_2l24ndctgc.s[43]++;ts.writechunk=chunk;cov_2l24ndctgc.s[44]++;ts.writeencoding=encoding;cov_2l24ndctgc.s[45]++;if(!ts.transforming){cov_2l24ndctgc.b[9][0]++;var rs=(cov_2l24ndctgc.s[46]++,this._readableState);cov_2l24ndctgc.s[47]++;if((cov_2l24ndctgc.b[11][0]++,ts.needTransform)||(cov_2l24ndctgc.b[11][1]++,rs.needReadable)||(cov_2l24ndctgc.b[11][2]++,rs.length<rs.highWaterMark)){cov_2l24ndctgc.b[10][0]++;cov_2l24ndctgc.s[48]++;this._read(rs.highWaterMark);}else{cov_2l24ndctgc.b[10][1]++;}}else{cov_2l24ndctgc.b[9][1]++;}};// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
cov_2l24ndctgc.s[49]++;Transform.prototype._read=function(n){cov_2l24ndctgc.f[7]++;var ts=(cov_2l24ndctgc.s[50]++,this._transformState);cov_2l24ndctgc.s[51]++;if((cov_2l24ndctgc.b[13][0]++,ts.writechunk!==null)&&(cov_2l24ndctgc.b[13][1]++,ts.writecb)&&(cov_2l24ndctgc.b[13][2]++,!ts.transforming)){cov_2l24ndctgc.b[12][0]++;cov_2l24ndctgc.s[52]++;ts.transforming=true;cov_2l24ndctgc.s[53]++;this._transform(ts.writechunk,ts.writeencoding,ts.afterTransform);}else{cov_2l24ndctgc.b[12][1]++;cov_2l24ndctgc.s[54]++;// mark that we need a transform, so that any data that comes in
// will get processed, now that we've asked for it.
ts.needTransform=true;}};cov_2l24ndctgc.s[55]++;Transform.prototype._destroy=function(err,cb){cov_2l24ndctgc.f[8]++;cov_2l24ndctgc.s[56]++;Duplex.prototype._destroy.call(this,err,err2=>{cov_2l24ndctgc.f[9]++;cov_2l24ndctgc.s[57]++;cb(err2);cov_2l24ndctgc.s[58]++;this.emit('close');});};function done(stream,er,data){cov_2l24ndctgc.f[10]++;cov_2l24ndctgc.s[59]++;if(er){cov_2l24ndctgc.b[14][0]++;cov_2l24ndctgc.s[60]++;return stream.emit('error',er);}else{cov_2l24ndctgc.b[14][1]++;}cov_2l24ndctgc.s[61]++;if(data!=null)// single equals check for both `null` and `undefined`
{cov_2l24ndctgc.b[15][0]++;cov_2l24ndctgc.s[62]++;stream.push(data);}else{cov_2l24ndctgc.b[15][1]++;}// TODO(BridgeAR): Write a test for these two error cases
// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
cov_2l24ndctgc.s[63]++;if(stream._writableState.length){cov_2l24ndctgc.b[16][0]++;cov_2l24ndctgc.s[64]++;throw new errors.Error('ERR_TRANSFORM_WITH_LENGTH_0');}else{cov_2l24ndctgc.b[16][1]++;}cov_2l24ndctgc.s[65]++;if(stream._transformState.transforming){cov_2l24ndctgc.b[17][0]++;cov_2l24ndctgc.s[66]++;throw new errors.Error('ERR_TRANSFORM_ALREADY_TRANSFORMING');}else{cov_2l24ndctgc.b[17][1]++;}cov_2l24ndctgc.s[67]++;return stream.push(null);}