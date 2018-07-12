goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__25953 = string;
var G__25953__$1 = (((G__25953 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25953)].join(''));
var G__25953__$2 = (((G__25953__$1 == null))?null:encodeURIComponent(G__25953__$1));
if((G__25953__$2 == null)){
return null;
} else {
return G__25953__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__25954 = string;
var G__25954__$1 = (((G__25954 == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25954)].join(''));
if((G__25954__$1 == null)){
return null;
} else {
return decodeURIComponent(G__25954__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__25958 = cljs.core.seq(m);
var G__25958__$1 = (((G__25958 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__25958));
var G__25958__$2 = (((G__25958__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__25958,G__25958__$1){
return (function (p__25959){
var vec__25960 = p__25959;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''))], null);
});})(G__25958,G__25958__$1))
,G__25958__$1));
var G__25958__$3 = (((G__25958__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__25958__$2));
var G__25958__$4 = (((G__25958__$3 == null))?null:cljs.core.flatten(G__25958__$3));
if((G__25958__$4 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__25958__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_(qstr))){
var G__25967 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__25967__$1 = (((G__25967 == null))?null:cljs.core.seq(G__25967));
var G__25967__$2 = (((G__25967__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__25967__$1], 0)));
var G__25967__$3 = (((G__25967__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__25967__$2));
if((G__25967__$3 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__25967__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!((((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http"))))) && (!((((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https"))))))){
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
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(creds),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(creds)?"@":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemerick.url.port_str(self__.protocol,self__.port)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq(self__.query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(self__.anchor)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11998__auto__,k__11999__auto__){
var self__ = this;
var this__11998__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11998__auto____$1,k__11999__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12000__auto__,k25976,else__12001__auto__){
var self__ = this;
var this__12000__auto____$1 = this;
var G__26008 = k25976;
var G__26008__$1 = (((G__26008 instanceof cljs.core.Keyword))?G__26008.fqn:null);
switch (G__26008__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25976,else__12001__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12012__auto__,writer__12013__auto__,opts__12014__auto__){
var self__ = this;
var this__12012__auto____$1 = this;
var pr_pair__12015__auto__ = ((function (this__12012__auto____$1){
return (function (keyval__12016__auto__){
return cljs.core.pr_sequential_writer(writer__12013__auto__,cljs.core.pr_writer,""," ","",opts__12014__auto__,keyval__12016__auto__);
});})(this__12012__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12013__auto__,pr_pair__12015__auto__,"#cemerick.url.URL{",", ","}",opts__12014__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25975){
var self__ = this;
var G__25975__$1 = this;
return (new cljs.core.RecordIter((0),G__25975__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11996__auto__){
var self__ = this;
var this__11996__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11993__auto__){
var self__ = this;
var this__11993__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12002__auto__){
var self__ = this;
var this__12002__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11994__auto__){
var self__ = this;
var this__11994__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = (function (){var fexpr__26018 = ((function (h__4048__auto__,this__11994__auto____$1){
return (function (coll__11995__auto__){
return (-797987557 ^ cljs.core.hash_unordered_coll(coll__11995__auto__));
});})(h__4048__auto__,this__11994__auto____$1))
;
return fexpr__26018(this__11994__auto____$1);
})();
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25977,other25978){
var self__ = this;
var this25977__$1 = this;
return ((!((other25978 == null))) && ((this25977__$1.constructor === other25978.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.protocol,other25978.protocol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.username,other25978.username)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.password,other25978.password)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.host,other25978.host)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.port,other25978.port)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.path,other25978.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.query,other25978.query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.anchor,other25978.anchor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25977__$1.__extmap,other25978.__extmap)));
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12007__auto__,k__12008__auto__){
var self__ = this;
var this__12007__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__12008__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12007__auto____$1),self__.__meta),k__12008__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12008__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12005__auto__,k__12006__auto__,G__25975){
var self__ = this;
var this__12005__auto____$1 = this;
var pred__26042 = cljs.core.keyword_identical_QMARK_;
var expr__26043 = k__12006__auto__;
if(cljs.core.truth_((function (){var G__26045 = new cljs.core.Keyword(null,"protocol","protocol",652470118);
var G__26046 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26045,G__26046) : pred__26042.call(null,G__26045,G__26046));
})())){
return (new cemerick.url.URL(G__25975,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26051 = new cljs.core.Keyword(null,"username","username",1605666410);
var G__26052 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26051,G__26052) : pred__26042.call(null,G__26051,G__26052));
})())){
return (new cemerick.url.URL(self__.protocol,G__25975,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26053 = new cljs.core.Keyword(null,"password","password",417022471);
var G__26054 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26053,G__26054) : pred__26042.call(null,G__26053,G__26054));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,G__25975,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26055 = new cljs.core.Keyword(null,"host","host",-1558485167);
var G__26056 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26055,G__26056) : pred__26042.call(null,G__26055,G__26056));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__25975,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26057 = new cljs.core.Keyword(null,"port","port",1534937262);
var G__26058 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26057,G__26058) : pred__26042.call(null,G__26057,G__26058));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__25975,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26059 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__26060 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26059,G__26060) : pred__26042.call(null,G__26059,G__26060));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__25975,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26061 = new cljs.core.Keyword(null,"query","query",-1288509510);
var G__26062 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26061,G__26062) : pred__26042.call(null,G__26061,G__26062));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__25975,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26063 = new cljs.core.Keyword(null,"anchor","anchor",1549638489);
var G__26064 = expr__26043;
return (pred__26042.cljs$core$IFn$_invoke$arity$2 ? pred__26042.cljs$core$IFn$_invoke$arity$2(G__26063,G__26064) : pred__26042.call(null,G__26063,G__26064));
})())){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__25975,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12006__auto__,G__25975),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12010__auto__){
var self__ = this;
var this__12010__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11997__auto__,G__25975){
var self__ = this;
var this__11997__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__25975,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12003__auto__,entry__12004__auto__){
var self__ = this;
var this__12003__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12004__auto__)){
return cljs.core._assoc(this__12003__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12004__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12004__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12003__auto____$1,entry__12004__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__4227__auto__){
return (new cljs.core.List(null,"cemerick.url/URL",null,(1),null));
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__4227__auto__,writer__4228__auto__){
return cljs.core._write(writer__4228__auto__,"cemerick.url/URL");
});

/**
 * Positional factory function for cemerick.url/URL.
 */
cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

/**
 * Factory function for cemerick.url/URL, taking a map of keywords to field values.
 */
cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__25987){
var extmap__4223__auto__ = (function (){var G__26086 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25987,new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0));
if(cljs.core.record_QMARK_(G__25987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26086);
} else {
return G__26086;
}
})();
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__25987),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__25987),null,cljs.core.not_empty(extmap__4223__auto__),null));
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
var vec__26107 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__3936__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26107,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__3925__auto__ = cljs.core.seq(user);
if(and__3925__auto__){
return user;
} else {
return and__3925__auto__;
}
})(),(function (){var and__3925__auto__ = cljs.core.seq(pass);
if(and__3925__auto__){
return pass;
} else {
return and__3925__auto__;
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
var G__26125 = arguments.length;
switch (G__26125) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4533__auto__ = [];
var len__4518__auto___26129 = arguments.length;
var i__4519__auto___26130 = (0);
while(true){
if((i__4519__auto___26130 < len__4518__auto___26129)){
args_arr__4533__auto__.push((arguments[i__4519__auto___26130]));

var G__26131 = (i__4519__auto___26130 + (1));
i__4519__auto___26130 = G__26131;
continue;
} else {
}
break;
}

var argseq__4534__auto__ = (new cljs.core.IndexedSeq(args_arr__4533__auto__.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4534__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_(url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

/** @this {Function} */
cemerick.url.url.cljs$lang$applyTo = (function (seq26123){
var G__26124 = cljs.core.first(seq26123);
var seq26123__$1 = cljs.core.next(seq26123);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26124,seq26123__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=cemerick.url.js.map
