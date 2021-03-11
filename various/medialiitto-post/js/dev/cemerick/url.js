// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__18102 = string;
var G__18102__$1 = (((G__18102 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18102));
var G__18102__$2 = (((G__18102__$1 == null))?null:encodeURIComponent(G__18102__$1));
if((G__18102__$2 == null)){
return null;
} else {
return G__18102__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__18103 = string;
var G__18103__$1 = (((G__18103 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18103));
if((G__18103__$1 == null)){
return null;
} else {
return decodeURIComponent(G__18103__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__18104 = cljs.core.seq(m);
var G__18104__$1 = (((G__18104 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__18104));
var G__18104__$2 = (((G__18104__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18105){
var vec__18106 = p__18105;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18106,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))], null);
}),G__18104__$1));
var G__18104__$3 = (((G__18104__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__18104__$2));
var G__18104__$4 = (((G__18104__$3 == null))?null:cljs.core.flatten(G__18104__$3));
if((G__18104__$4 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__18104__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if((!(clojure.string.blank_QMARK_(qstr)))){
var G__18109 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__18109__$1 = (((G__18109 == null))?null:cljs.core.seq(G__18109));
var G__18109__$2 = (((G__18109__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__18109__$1], 0)));
var G__18109__$3 = (((G__18109__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__18109__$2));
if((G__18109__$3 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__18109__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && ((!((((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))))) && ((!((((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https")))))))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol),"://",creds,(cljs.core.truth_(creds)?"@":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host),cemerick.url.port_str(self__.protocol,self__.port),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path),((cljs.core.seq(self__.query))?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null),(cljs.core.truth_(self__.anchor)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)].join(''):null)].join('');
}));

(cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k18111,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__18115 = k18111;
var G__18115__$1 = (((G__18115 instanceof cljs.core.Keyword))?G__18115.fqn:null);
switch (G__18115__$1) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18111,else__4383__auto__);

}
}));

(cemerick.url.URL.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__18116){
var vec__18117 = p__18116;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cemerick.url.URL{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$protocol,self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$username,self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$password,self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$host,self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$port,self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$query,self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$anchor,self__.anchor],null))], null),self__.__extmap));
}));

(cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18110){
var self__ = this;
var G__18110__$1 = this;
return (new cljs.core.RecordIter((0),G__18110__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol,cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$anchor], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
}));

(cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__18120 = (function (coll__4377__auto__){
return (-797987557 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__18120(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18112,other18113){
var self__ = this;
var this18112__$1 = this;
return (((!((other18113 == null)))) && ((this18112__$1.constructor === other18113.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.protocol,other18113.protocol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.username,other18113.username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.password,other18113.password)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.host,other18113.host)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.port,other18113.port)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.path,other18113.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.query,other18113.query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.anchor,other18113.anchor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18112__$1.__extmap,other18113.__extmap)));
}));

(cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$protocol,null,cljs.core.cst$kw$password,null,cljs.core.cst$kw$username,null,cljs.core.cst$kw$port,null,cljs.core.cst$kw$host,null,cljs.core.cst$kw$anchor,null,cljs.core.cst$kw$query,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__18110){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__18121 = cljs.core.keyword_identical_QMARK_;
var expr__18122 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__18124 = cljs.core.cst$kw$protocol;
var G__18125 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18124,G__18125) : pred__18121.call(null,G__18124,G__18125));
})())){
return (new cemerick.url.URL(G__18110,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18126 = cljs.core.cst$kw$username;
var G__18127 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18126,G__18127) : pred__18121.call(null,G__18126,G__18127));
})())){
return (new cemerick.url.URL(self__.protocol,G__18110,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18128 = cljs.core.cst$kw$password;
var G__18129 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18128,G__18129) : pred__18121.call(null,G__18128,G__18129));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,G__18110,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18130 = cljs.core.cst$kw$host;
var G__18131 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18130,G__18131) : pred__18121.call(null,G__18130,G__18131));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__18110,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18132 = cljs.core.cst$kw$port;
var G__18133 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18132,G__18133) : pred__18121.call(null,G__18132,G__18133));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__18110,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18134 = cljs.core.cst$kw$path;
var G__18135 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18134,G__18135) : pred__18121.call(null,G__18134,G__18135));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__18110,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18136 = cljs.core.cst$kw$query;
var G__18137 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18136,G__18137) : pred__18121.call(null,G__18136,G__18137));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__18110,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18138 = cljs.core.cst$kw$anchor;
var G__18139 = expr__18122;
return (pred__18121.cljs$core$IFn$_invoke$arity$2 ? pred__18121.cljs$core$IFn$_invoke$arity$2(G__18138,G__18139) : pred__18121.call(null,G__18138,G__18139));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__18110,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__18110),null));
}
}
}
}
}
}
}
}
}));

(cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$protocol,self__.protocol,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$username,self__.username,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$password,self__.password,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$host,self__.host,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$port,self__.port,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$query,self__.query,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$anchor,self__.anchor,null))], null),self__.__extmap));
}));

(cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__18110){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__18110,self__.__extmap,self__.__hash));
}));

(cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$protocol,cljs.core.cst$sym$username,cljs.core.cst$sym$password,cljs.core.cst$sym$host,cljs.core.cst$sym$port,cljs.core.cst$sym$path,cljs.core.cst$sym$query,cljs.core.cst$sym$anchor], null);
}));

(cemerick.url.URL.cljs$lang$type = true);

(cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cemerick.url/URL",null,(1),null));
}));

(cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cemerick.url/URL");
}));

/**
 * Positional factory function for cemerick.url/URL.
 */
cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

/**
 * Factory function for cemerick.url/URL, taking a map of keywords to field values.
 */
cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__18114){
var extmap__4419__auto__ = (function (){var G__18140 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18114,cljs.core.cst$kw$protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$username,cljs.core.cst$kw$password,cljs.core.cst$kw$host,cljs.core.cst$kw$port,cljs.core.cst$kw$path,cljs.core.cst$kw$query,cljs.core.cst$kw$anchor], 0));
if(cljs.core.record_QMARK_(G__18114)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18140);
} else {
return G__18140;
}
})();
return (new cemerick.url.URL(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$password.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$port.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$1(G__18114),cljs.core.cst$kw$anchor.cljs$core$IFn$_invoke$arity$1(G__18114),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__18142 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__4126__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18142,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__4115__auto__ = cljs.core.seq(user);
if(and__4115__auto__){
return user;
} else {
return and__4115__auto__;
}
})(),(function (){var and__4115__auto__ = cljs.core.seq(pass);
if(and__4115__auto__){
return pass;
} else {
return and__4115__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var G__18148 = arguments.length;
switch (G__18148) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___18150 = arguments.length;
var i__4737__auto___18151 = (0);
while(true){
if((i__4737__auto___18151 < len__4736__auto___18150)){
args_arr__4757__auto__.push((arguments[i__4737__auto___18151]));

var G__18152 = (i__4737__auto___18151 + (1));
i__4737__auto___18151 = G__18152;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_(url);
}
}));

(cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,cljs.core.cst$kw$path,pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,base_url__$1.path,path_segments)));
}));

/** @this {Function} */
(cemerick.url.url.cljs$lang$applyTo = (function (seq18146){
var G__18147 = cljs.core.first(seq18146);
var seq18146__$1 = cljs.core.next(seq18146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18147,seq18146__$1);
}));

(cemerick.url.url.cljs$lang$maxFixedArity = (1));

