goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32474 = (function (f,blockable,meta32475){
this.f = f;
this.blockable = blockable;
this.meta32475 = meta32475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32476,meta32475__$1){
var self__ = this;
var _32476__$1 = this;
return (new cljs.core.async.t_cljs$core$async32474(self__.f,self__.blockable,meta32475__$1));
});

cljs.core.async.t_cljs$core$async32474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32476){
var self__ = this;
var _32476__$1 = this;
return self__.meta32475;
});

cljs.core.async.t_cljs$core$async32474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32475","meta32475",-410943688,null)], null);
});

cljs.core.async.t_cljs$core$async32474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32474";

cljs.core.async.t_cljs$core$async32474.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async32474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32474.
 */
cljs.core.async.__GT_t_cljs$core$async32474 = (function cljs$core$async$__GT_t_cljs$core$async32474(f__$1,blockable__$1,meta32475){
return (new cljs.core.async.t_cljs$core$async32474(f__$1,blockable__$1,meta32475));
});

}

return (new cljs.core.async.t_cljs$core$async32474(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32521 = arguments.length;
switch (G__32521) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32531 = arguments.length;
switch (G__32531) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32548 = arguments.length;
switch (G__32548) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32560 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32560) : fn1.call(null,val_32560));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32560,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32560) : fn1.call(null,val_32560));
});})(val_32560,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32565 = arguments.length;
switch (G__32565) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4395__auto___32588 = n;
var x_32589 = (0);
while(true){
if((x_32589 < n__4395__auto___32588)){
(a[x_32589] = (0));

var G__32590 = (x_32589 + (1));
x_32589 = G__32590;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__32592 = (i + (1));
i = G__32592;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32593 = (function (flag,meta32594){
this.flag = flag;
this.meta32594 = meta32594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32595,meta32594__$1){
var self__ = this;
var _32595__$1 = this;
return (new cljs.core.async.t_cljs$core$async32593(self__.flag,meta32594__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32595){
var self__ = this;
var _32595__$1 = this;
return self__.meta32594;
});})(flag))
;

cljs.core.async.t_cljs$core$async32593.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32593.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32594","meta32594",1324354976,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32593";

cljs.core.async.t_cljs$core$async32593.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async32593");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32593.
 */
cljs.core.async.__GT_t_cljs$core$async32593 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32593(flag__$1,meta32594){
return (new cljs.core.async.t_cljs$core$async32593(flag__$1,meta32594));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32593(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32601 = (function (flag,cb,meta32602){
this.flag = flag;
this.cb = cb;
this.meta32602 = meta32602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32603,meta32602__$1){
var self__ = this;
var _32603__$1 = this;
return (new cljs.core.async.t_cljs$core$async32601(self__.flag,self__.cb,meta32602__$1));
});

cljs.core.async.t_cljs$core$async32601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32603){
var self__ = this;
var _32603__$1 = this;
return self__.meta32602;
});

cljs.core.async.t_cljs$core$async32601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async32601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32602","meta32602",-70307808,null)], null);
});

cljs.core.async.t_cljs$core$async32601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32601";

cljs.core.async.t_cljs$core$async32601.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async32601");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32601.
 */
cljs.core.async.__GT_t_cljs$core$async32601 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32601(flag__$1,cb__$1,meta32602){
return (new cljs.core.async.t_cljs$core$async32601(flag__$1,cb__$1,meta32602));
});

}

return (new cljs.core.async.t_cljs$core$async32601(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32610_SHARP_){
var G__32612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32610_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32612) : fret.call(null,G__32612));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32611_SHARP_){
var G__32613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32611_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32613) : fret.call(null,G__32613));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32615 = (i + (1));
i = G__32615;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3936__auto__ = ret;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4521__auto__ = [];
var len__4518__auto___32624 = arguments.length;
var i__4519__auto___32625 = (0);
while(true){
if((i__4519__auto___32625 < len__4518__auto___32624)){
args__4521__auto__.push((arguments[i__4519__auto___32625]));

var G__32626 = (i__4519__auto___32625 + (1));
i__4519__auto___32625 = G__32626;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32620){
var map__32621 = p__32620;
var map__32621__$1 = ((((!((map__32621 == null)))?(((((map__32621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32621):map__32621);
var opts = map__32621__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32616){
var G__32617 = cljs.core.first(seq32616);
var seq32616__$1 = cljs.core.next(seq32616);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32617,seq32616__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32631 = arguments.length;
switch (G__32631) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32322__auto___32705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___32705){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___32705){
return (function (state_32675){
var state_val_32676 = (state_32675[(1)]);
if((state_val_32676 === (7))){
var inst_32671 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32682_32706 = state_32675__$1;
(statearr_32682_32706[(2)] = inst_32671);

(statearr_32682_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (1))){
var state_32675__$1 = state_32675;
var statearr_32683_32711 = state_32675__$1;
(statearr_32683_32711[(2)] = null);

(statearr_32683_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (4))){
var inst_32654 = (state_32675[(7)]);
var inst_32654__$1 = (state_32675[(2)]);
var inst_32655 = (inst_32654__$1 == null);
var state_32675__$1 = (function (){var statearr_32684 = state_32675;
(statearr_32684[(7)] = inst_32654__$1);

return statearr_32684;
})();
if(cljs.core.truth_(inst_32655)){
var statearr_32685_32712 = state_32675__$1;
(statearr_32685_32712[(1)] = (5));

} else {
var statearr_32686_32719 = state_32675__$1;
(statearr_32686_32719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (13))){
var state_32675__$1 = state_32675;
var statearr_32687_32723 = state_32675__$1;
(statearr_32687_32723[(2)] = null);

(statearr_32687_32723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (6))){
var inst_32654 = (state_32675[(7)]);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32675__$1,(11),to,inst_32654);
} else {
if((state_val_32676 === (3))){
var inst_32673 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32675__$1,inst_32673);
} else {
if((state_val_32676 === (12))){
var state_32675__$1 = state_32675;
var statearr_32688_32733 = state_32675__$1;
(statearr_32688_32733[(2)] = null);

(statearr_32688_32733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (2))){
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32675__$1,(4),from);
} else {
if((state_val_32676 === (11))){
var inst_32664 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
if(cljs.core.truth_(inst_32664)){
var statearr_32689_32739 = state_32675__$1;
(statearr_32689_32739[(1)] = (12));

} else {
var statearr_32690_32744 = state_32675__$1;
(statearr_32690_32744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (9))){
var state_32675__$1 = state_32675;
var statearr_32691_32747 = state_32675__$1;
(statearr_32691_32747[(2)] = null);

(statearr_32691_32747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (5))){
var state_32675__$1 = state_32675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32692_32754 = state_32675__$1;
(statearr_32692_32754[(1)] = (8));

} else {
var statearr_32693_32759 = state_32675__$1;
(statearr_32693_32759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (14))){
var inst_32669 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32697_32764 = state_32675__$1;
(statearr_32697_32764[(2)] = inst_32669);

(statearr_32697_32764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (10))){
var inst_32661 = (state_32675[(2)]);
var state_32675__$1 = state_32675;
var statearr_32698_32771 = state_32675__$1;
(statearr_32698_32771[(2)] = inst_32661);

(statearr_32698_32771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32676 === (8))){
var inst_32658 = cljs.core.async.close_BANG_(to);
var state_32675__$1 = state_32675;
var statearr_32699_32778 = state_32675__$1;
(statearr_32699_32778[(2)] = inst_32658);

(statearr_32699_32778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___32705))
;
return ((function (switch__32247__auto__,c__32322__auto___32705){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_32700 = [null,null,null,null,null,null,null,null];
(statearr_32700[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_32700[(1)] = (1));

return statearr_32700;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_32675){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_32675);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e32701){if((e32701 instanceof Object)){
var ex__32251__auto__ = e32701;
var statearr_32702_32794 = state_32675;
(statearr_32702_32794[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32795 = state_32675;
state_32675 = G__32795;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___32705))
})();
var state__32324__auto__ = (function (){var statearr_32703 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_32703[(6)] = c__32322__auto___32705);

return statearr_32703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___32705))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__32798){
var vec__32799 = p__32798;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32799,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32799,(1),null);
var job = vec__32799;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32322__auto___32977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___32977,res,vec__32799,v,p,job,jobs,results){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___32977,res,vec__32799,v,p,job,jobs,results){
return (function (state_32808){
var state_val_32809 = (state_32808[(1)]);
if((state_val_32809 === (1))){
var state_32808__$1 = state_32808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32808__$1,(2),res,v);
} else {
if((state_val_32809 === (2))){
var inst_32803 = (state_32808[(2)]);
var inst_32805 = cljs.core.async.close_BANG_(res);
var state_32808__$1 = (function (){var statearr_32811 = state_32808;
(statearr_32811[(7)] = inst_32803);

return statearr_32811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32808__$1,inst_32805);
} else {
return null;
}
}
});})(c__32322__auto___32977,res,vec__32799,v,p,job,jobs,results))
;
return ((function (switch__32247__auto__,c__32322__auto___32977,res,vec__32799,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0 = (function (){
var statearr_32813 = [null,null,null,null,null,null,null,null];
(statearr_32813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__);

(statearr_32813[(1)] = (1));

return statearr_32813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1 = (function (state_32808){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_32808);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e32814){if((e32814 instanceof Object)){
var ex__32251__auto__ = e32814;
var statearr_32815_32978 = state_32808;
(statearr_32815_32978[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32979 = state_32808;
state_32808 = G__32979;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = function(state_32808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1.call(this,state_32808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___32977,res,vec__32799,v,p,job,jobs,results))
})();
var state__32324__auto__ = (function (){var statearr_32816 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_32816[(6)] = c__32322__auto___32977);

return statearr_32816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___32977,res,vec__32799,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32817){
var vec__32818 = p__32817;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32818,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32818,(1),null);
var job = vec__32818;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4395__auto___32980 = n;
var __32981 = (0);
while(true){
if((__32981 < n__4395__auto___32980)){
var G__32821_32982 = type;
var G__32821_32983__$1 = (((G__32821_32982 instanceof cljs.core.Keyword))?G__32821_32982.fqn:null);
switch (G__32821_32983__$1) {
case "compute":
var c__32322__auto___32985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32981,c__32322__auto___32985,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (__32981,c__32322__auto___32985,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async){
return (function (state_32837){
var state_val_32838 = (state_32837[(1)]);
if((state_val_32838 === (1))){
var state_32837__$1 = state_32837;
var statearr_32839_32986 = state_32837__$1;
(statearr_32839_32986[(2)] = null);

(statearr_32839_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (2))){
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32837__$1,(4),jobs);
} else {
if((state_val_32838 === (3))){
var inst_32835 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32837__$1,inst_32835);
} else {
if((state_val_32838 === (4))){
var inst_32827 = (state_32837[(2)]);
var inst_32828 = process(inst_32827);
var state_32837__$1 = state_32837;
if(cljs.core.truth_(inst_32828)){
var statearr_32840_32987 = state_32837__$1;
(statearr_32840_32987[(1)] = (5));

} else {
var statearr_32841_32988 = state_32837__$1;
(statearr_32841_32988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (5))){
var state_32837__$1 = state_32837;
var statearr_32842_32989 = state_32837__$1;
(statearr_32842_32989[(2)] = null);

(statearr_32842_32989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (6))){
var state_32837__$1 = state_32837;
var statearr_32843_32990 = state_32837__$1;
(statearr_32843_32990[(2)] = null);

(statearr_32843_32990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (7))){
var inst_32833 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32844_32991 = state_32837__$1;
(statearr_32844_32991[(2)] = inst_32833);

(statearr_32844_32991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32981,c__32322__auto___32985,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async))
;
return ((function (__32981,switch__32247__auto__,c__32322__auto___32985,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0 = (function (){
var statearr_32845 = [null,null,null,null,null,null,null];
(statearr_32845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__);

(statearr_32845[(1)] = (1));

return statearr_32845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1 = (function (state_32837){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_32837);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e32846){if((e32846 instanceof Object)){
var ex__32251__auto__ = e32846;
var statearr_32847_32992 = state_32837;
(statearr_32847_32992[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32993 = state_32837;
state_32837 = G__32993;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = function(state_32837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1.call(this,state_32837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__;
})()
;})(__32981,switch__32247__auto__,c__32322__auto___32985,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async))
})();
var state__32324__auto__ = (function (){var statearr_32848 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_32848[(6)] = c__32322__auto___32985);

return statearr_32848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(__32981,c__32322__auto___32985,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async))
);


break;
case "async":
var c__32322__auto___32994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32981,c__32322__auto___32994,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (__32981,c__32322__auto___32994,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async){
return (function (state_32861){
var state_val_32862 = (state_32861[(1)]);
if((state_val_32862 === (1))){
var state_32861__$1 = state_32861;
var statearr_32863_32995 = state_32861__$1;
(statearr_32863_32995[(2)] = null);

(statearr_32863_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (2))){
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32861__$1,(4),jobs);
} else {
if((state_val_32862 === (3))){
var inst_32859 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32861__$1,inst_32859);
} else {
if((state_val_32862 === (4))){
var inst_32851 = (state_32861[(2)]);
var inst_32852 = async(inst_32851);
var state_32861__$1 = state_32861;
if(cljs.core.truth_(inst_32852)){
var statearr_32864_32996 = state_32861__$1;
(statearr_32864_32996[(1)] = (5));

} else {
var statearr_32865_32997 = state_32861__$1;
(statearr_32865_32997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (5))){
var state_32861__$1 = state_32861;
var statearr_32866_32998 = state_32861__$1;
(statearr_32866_32998[(2)] = null);

(statearr_32866_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (6))){
var state_32861__$1 = state_32861;
var statearr_32867_32999 = state_32861__$1;
(statearr_32867_32999[(2)] = null);

(statearr_32867_32999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (7))){
var inst_32857 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32868_33000 = state_32861__$1;
(statearr_32868_33000[(2)] = inst_32857);

(statearr_32868_33000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32981,c__32322__auto___32994,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async))
;
return ((function (__32981,switch__32247__auto__,c__32322__auto___32994,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0 = (function (){
var statearr_32869 = [null,null,null,null,null,null,null];
(statearr_32869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__);

(statearr_32869[(1)] = (1));

return statearr_32869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1 = (function (state_32861){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_32861);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e32870){if((e32870 instanceof Object)){
var ex__32251__auto__ = e32870;
var statearr_32871_33001 = state_32861;
(statearr_32871_33001[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33002 = state_32861;
state_32861 = G__33002;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = function(state_32861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1.call(this,state_32861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__;
})()
;})(__32981,switch__32247__auto__,c__32322__auto___32994,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async))
})();
var state__32324__auto__ = (function (){var statearr_32872 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_32872[(6)] = c__32322__auto___32994);

return statearr_32872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(__32981,c__32322__auto___32994,G__32821_32982,G__32821_32983__$1,n__4395__auto___32980,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32821_32983__$1)].join('')));

}

var G__33003 = (__32981 + (1));
__32981 = G__33003;
continue;
} else {
}
break;
}

var c__32322__auto___33004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___33004,jobs,results,process,async){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___33004,jobs,results,process,async){
return (function (state_32894){
var state_val_32895 = (state_32894[(1)]);
if((state_val_32895 === (1))){
var state_32894__$1 = state_32894;
var statearr_32896_33005 = state_32894__$1;
(statearr_32896_33005[(2)] = null);

(statearr_32896_33005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (2))){
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32894__$1,(4),from);
} else {
if((state_val_32895 === (3))){
var inst_32892 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32894__$1,inst_32892);
} else {
if((state_val_32895 === (4))){
var inst_32875 = (state_32894[(7)]);
var inst_32875__$1 = (state_32894[(2)]);
var inst_32876 = (inst_32875__$1 == null);
var state_32894__$1 = (function (){var statearr_32897 = state_32894;
(statearr_32897[(7)] = inst_32875__$1);

return statearr_32897;
})();
if(cljs.core.truth_(inst_32876)){
var statearr_32898_33006 = state_32894__$1;
(statearr_32898_33006[(1)] = (5));

} else {
var statearr_32899_33007 = state_32894__$1;
(statearr_32899_33007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (5))){
var inst_32878 = cljs.core.async.close_BANG_(jobs);
var state_32894__$1 = state_32894;
var statearr_32900_33008 = state_32894__$1;
(statearr_32900_33008[(2)] = inst_32878);

(statearr_32900_33008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (6))){
var inst_32875 = (state_32894[(7)]);
var inst_32880 = (state_32894[(8)]);
var inst_32880__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32882 = [inst_32875,inst_32880__$1];
var inst_32883 = (new cljs.core.PersistentVector(null,2,(5),inst_32881,inst_32882,null));
var state_32894__$1 = (function (){var statearr_32901 = state_32894;
(statearr_32901[(8)] = inst_32880__$1);

return statearr_32901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32894__$1,(8),jobs,inst_32883);
} else {
if((state_val_32895 === (7))){
var inst_32890 = (state_32894[(2)]);
var state_32894__$1 = state_32894;
var statearr_32902_33009 = state_32894__$1;
(statearr_32902_33009[(2)] = inst_32890);

(statearr_32902_33009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32895 === (8))){
var inst_32880 = (state_32894[(8)]);
var inst_32885 = (state_32894[(2)]);
var state_32894__$1 = (function (){var statearr_32903 = state_32894;
(statearr_32903[(9)] = inst_32885);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32894__$1,(9),results,inst_32880);
} else {
if((state_val_32895 === (9))){
var inst_32887 = (state_32894[(2)]);
var state_32894__$1 = (function (){var statearr_32904 = state_32894;
(statearr_32904[(10)] = inst_32887);

return statearr_32904;
})();
var statearr_32905_33010 = state_32894__$1;
(statearr_32905_33010[(2)] = null);

(statearr_32905_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___33004,jobs,results,process,async))
;
return ((function (switch__32247__auto__,c__32322__auto___33004,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0 = (function (){
var statearr_32906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__);

(statearr_32906[(1)] = (1));

return statearr_32906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1 = (function (state_32894){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_32894);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e32907){if((e32907 instanceof Object)){
var ex__32251__auto__ = e32907;
var statearr_32908_33011 = state_32894;
(statearr_32908_33011[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33012 = state_32894;
state_32894 = G__33012;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = function(state_32894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1.call(this,state_32894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___33004,jobs,results,process,async))
})();
var state__32324__auto__ = (function (){var statearr_32909 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_32909[(6)] = c__32322__auto___33004);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___33004,jobs,results,process,async))
);


var c__32322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto__,jobs,results,process,async){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto__,jobs,results,process,async){
return (function (state_32947){
var state_val_32948 = (state_32947[(1)]);
if((state_val_32948 === (7))){
var inst_32943 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32949_33013 = state_32947__$1;
(statearr_32949_33013[(2)] = inst_32943);

(statearr_32949_33013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (20))){
var state_32947__$1 = state_32947;
var statearr_32950_33014 = state_32947__$1;
(statearr_32950_33014[(2)] = null);

(statearr_32950_33014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (1))){
var state_32947__$1 = state_32947;
var statearr_32951_33015 = state_32947__$1;
(statearr_32951_33015[(2)] = null);

(statearr_32951_33015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (4))){
var inst_32912 = (state_32947[(7)]);
var inst_32912__$1 = (state_32947[(2)]);
var inst_32913 = (inst_32912__$1 == null);
var state_32947__$1 = (function (){var statearr_32952 = state_32947;
(statearr_32952[(7)] = inst_32912__$1);

return statearr_32952;
})();
if(cljs.core.truth_(inst_32913)){
var statearr_32953_33016 = state_32947__$1;
(statearr_32953_33016[(1)] = (5));

} else {
var statearr_32954_33017 = state_32947__$1;
(statearr_32954_33017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (15))){
var inst_32925 = (state_32947[(8)]);
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32947__$1,(18),to,inst_32925);
} else {
if((state_val_32948 === (21))){
var inst_32938 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32955_33018 = state_32947__$1;
(statearr_32955_33018[(2)] = inst_32938);

(statearr_32955_33018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (13))){
var inst_32940 = (state_32947[(2)]);
var state_32947__$1 = (function (){var statearr_32956 = state_32947;
(statearr_32956[(9)] = inst_32940);

return statearr_32956;
})();
var statearr_32957_33019 = state_32947__$1;
(statearr_32957_33019[(2)] = null);

(statearr_32957_33019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (6))){
var inst_32912 = (state_32947[(7)]);
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32947__$1,(11),inst_32912);
} else {
if((state_val_32948 === (17))){
var inst_32933 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
if(cljs.core.truth_(inst_32933)){
var statearr_32958_33020 = state_32947__$1;
(statearr_32958_33020[(1)] = (19));

} else {
var statearr_32959_33021 = state_32947__$1;
(statearr_32959_33021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (3))){
var inst_32945 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32947__$1,inst_32945);
} else {
if((state_val_32948 === (12))){
var inst_32922 = (state_32947[(10)]);
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32947__$1,(14),inst_32922);
} else {
if((state_val_32948 === (2))){
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32947__$1,(4),results);
} else {
if((state_val_32948 === (19))){
var state_32947__$1 = state_32947;
var statearr_32960_33022 = state_32947__$1;
(statearr_32960_33022[(2)] = null);

(statearr_32960_33022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (11))){
var inst_32922 = (state_32947[(2)]);
var state_32947__$1 = (function (){var statearr_32961 = state_32947;
(statearr_32961[(10)] = inst_32922);

return statearr_32961;
})();
var statearr_32962_33023 = state_32947__$1;
(statearr_32962_33023[(2)] = null);

(statearr_32962_33023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (9))){
var state_32947__$1 = state_32947;
var statearr_32963_33024 = state_32947__$1;
(statearr_32963_33024[(2)] = null);

(statearr_32963_33024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (5))){
var state_32947__$1 = state_32947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32964_33025 = state_32947__$1;
(statearr_32964_33025[(1)] = (8));

} else {
var statearr_32965_33026 = state_32947__$1;
(statearr_32965_33026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (14))){
var inst_32925 = (state_32947[(8)]);
var inst_32927 = (state_32947[(11)]);
var inst_32925__$1 = (state_32947[(2)]);
var inst_32926 = (inst_32925__$1 == null);
var inst_32927__$1 = cljs.core.not(inst_32926);
var state_32947__$1 = (function (){var statearr_32966 = state_32947;
(statearr_32966[(8)] = inst_32925__$1);

(statearr_32966[(11)] = inst_32927__$1);

return statearr_32966;
})();
if(inst_32927__$1){
var statearr_32967_33027 = state_32947__$1;
(statearr_32967_33027[(1)] = (15));

} else {
var statearr_32968_33028 = state_32947__$1;
(statearr_32968_33028[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (16))){
var inst_32927 = (state_32947[(11)]);
var state_32947__$1 = state_32947;
var statearr_32969_33029 = state_32947__$1;
(statearr_32969_33029[(2)] = inst_32927);

(statearr_32969_33029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (10))){
var inst_32919 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32970_33030 = state_32947__$1;
(statearr_32970_33030[(2)] = inst_32919);

(statearr_32970_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (18))){
var inst_32930 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32971_33031 = state_32947__$1;
(statearr_32971_33031[(2)] = inst_32930);

(statearr_32971_33031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (8))){
var inst_32916 = cljs.core.async.close_BANG_(to);
var state_32947__$1 = state_32947;
var statearr_32972_33032 = state_32947__$1;
(statearr_32972_33032[(2)] = inst_32916);

(statearr_32972_33032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto__,jobs,results,process,async))
;
return ((function (switch__32247__auto__,c__32322__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0 = (function (){
var statearr_32973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__);

(statearr_32973[(1)] = (1));

return statearr_32973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1 = (function (state_32947){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_32947);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e32974){if((e32974 instanceof Object)){
var ex__32251__auto__ = e32974;
var statearr_32975_33033 = state_32947;
(statearr_32975_33033[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33034 = state_32947;
state_32947 = G__33034;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__ = function(state_32947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1.call(this,state_32947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32248__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto__,jobs,results,process,async))
})();
var state__32324__auto__ = (function (){var statearr_32976 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_32976[(6)] = c__32322__auto__);

return statearr_32976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto__,jobs,results,process,async))
);

return c__32322__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33036 = arguments.length;
switch (G__33036) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33042 = arguments.length;
switch (G__33042) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32322__auto___33091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___33091,tc,fc){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___33091,tc,fc){
return (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (7))){
var inst_33064 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33070_33092 = state_33068__$1;
(statearr_33070_33092[(2)] = inst_33064);

(statearr_33070_33092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (1))){
var state_33068__$1 = state_33068;
var statearr_33071_33093 = state_33068__$1;
(statearr_33071_33093[(2)] = null);

(statearr_33071_33093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (4))){
var inst_33045 = (state_33068[(7)]);
var inst_33045__$1 = (state_33068[(2)]);
var inst_33046 = (inst_33045__$1 == null);
var state_33068__$1 = (function (){var statearr_33072 = state_33068;
(statearr_33072[(7)] = inst_33045__$1);

return statearr_33072;
})();
if(cljs.core.truth_(inst_33046)){
var statearr_33073_33094 = state_33068__$1;
(statearr_33073_33094[(1)] = (5));

} else {
var statearr_33074_33095 = state_33068__$1;
(statearr_33074_33095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (13))){
var state_33068__$1 = state_33068;
var statearr_33075_33096 = state_33068__$1;
(statearr_33075_33096[(2)] = null);

(statearr_33075_33096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (6))){
var inst_33045 = (state_33068[(7)]);
var inst_33051 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33045) : p.call(null,inst_33045));
var state_33068__$1 = state_33068;
if(cljs.core.truth_(inst_33051)){
var statearr_33076_33097 = state_33068__$1;
(statearr_33076_33097[(1)] = (9));

} else {
var statearr_33077_33098 = state_33068__$1;
(statearr_33077_33098[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (3))){
var inst_33066 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33068__$1,inst_33066);
} else {
if((state_val_33069 === (12))){
var state_33068__$1 = state_33068;
var statearr_33078_33099 = state_33068__$1;
(statearr_33078_33099[(2)] = null);

(statearr_33078_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (2))){
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33068__$1,(4),ch);
} else {
if((state_val_33069 === (11))){
var inst_33045 = (state_33068[(7)]);
var inst_33055 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33068__$1,(8),inst_33055,inst_33045);
} else {
if((state_val_33069 === (9))){
var state_33068__$1 = state_33068;
var statearr_33079_33100 = state_33068__$1;
(statearr_33079_33100[(2)] = tc);

(statearr_33079_33100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (5))){
var inst_33048 = cljs.core.async.close_BANG_(tc);
var inst_33049 = cljs.core.async.close_BANG_(fc);
var state_33068__$1 = (function (){var statearr_33080 = state_33068;
(statearr_33080[(8)] = inst_33048);

return statearr_33080;
})();
var statearr_33081_33101 = state_33068__$1;
(statearr_33081_33101[(2)] = inst_33049);

(statearr_33081_33101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (14))){
var inst_33062 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
var statearr_33082_33102 = state_33068__$1;
(statearr_33082_33102[(2)] = inst_33062);

(statearr_33082_33102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (10))){
var state_33068__$1 = state_33068;
var statearr_33083_33103 = state_33068__$1;
(statearr_33083_33103[(2)] = fc);

(statearr_33083_33103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33069 === (8))){
var inst_33057 = (state_33068[(2)]);
var state_33068__$1 = state_33068;
if(cljs.core.truth_(inst_33057)){
var statearr_33084_33104 = state_33068__$1;
(statearr_33084_33104[(1)] = (12));

} else {
var statearr_33085_33105 = state_33068__$1;
(statearr_33085_33105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___33091,tc,fc))
;
return ((function (switch__32247__auto__,c__32322__auto___33091,tc,fc){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_33086 = [null,null,null,null,null,null,null,null,null];
(statearr_33086[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_33086[(1)] = (1));

return statearr_33086;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_33068){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33068);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33087){if((e33087 instanceof Object)){
var ex__32251__auto__ = e33087;
var statearr_33088_33106 = state_33068;
(statearr_33088_33106[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33107 = state_33068;
state_33068 = G__33107;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___33091,tc,fc))
})();
var state__32324__auto__ = (function (){var statearr_33089 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33089[(6)] = c__32322__auto___33091);

return statearr_33089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___33091,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto__){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto__){
return (function (state_33128){
var state_val_33129 = (state_33128[(1)]);
if((state_val_33129 === (7))){
var inst_33124 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33130_33148 = state_33128__$1;
(statearr_33130_33148[(2)] = inst_33124);

(statearr_33130_33148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (1))){
var inst_33108 = init;
var state_33128__$1 = (function (){var statearr_33131 = state_33128;
(statearr_33131[(7)] = inst_33108);

return statearr_33131;
})();
var statearr_33132_33149 = state_33128__$1;
(statearr_33132_33149[(2)] = null);

(statearr_33132_33149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (4))){
var inst_33111 = (state_33128[(8)]);
var inst_33111__$1 = (state_33128[(2)]);
var inst_33112 = (inst_33111__$1 == null);
var state_33128__$1 = (function (){var statearr_33133 = state_33128;
(statearr_33133[(8)] = inst_33111__$1);

return statearr_33133;
})();
if(cljs.core.truth_(inst_33112)){
var statearr_33134_33150 = state_33128__$1;
(statearr_33134_33150[(1)] = (5));

} else {
var statearr_33135_33151 = state_33128__$1;
(statearr_33135_33151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (6))){
var inst_33115 = (state_33128[(9)]);
var inst_33111 = (state_33128[(8)]);
var inst_33108 = (state_33128[(7)]);
var inst_33115__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33108,inst_33111) : f.call(null,inst_33108,inst_33111));
var inst_33116 = cljs.core.reduced_QMARK_(inst_33115__$1);
var state_33128__$1 = (function (){var statearr_33136 = state_33128;
(statearr_33136[(9)] = inst_33115__$1);

return statearr_33136;
})();
if(inst_33116){
var statearr_33137_33152 = state_33128__$1;
(statearr_33137_33152[(1)] = (8));

} else {
var statearr_33138_33153 = state_33128__$1;
(statearr_33138_33153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (3))){
var inst_33126 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33128__$1,inst_33126);
} else {
if((state_val_33129 === (2))){
var state_33128__$1 = state_33128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33128__$1,(4),ch);
} else {
if((state_val_33129 === (9))){
var inst_33115 = (state_33128[(9)]);
var inst_33108 = inst_33115;
var state_33128__$1 = (function (){var statearr_33139 = state_33128;
(statearr_33139[(7)] = inst_33108);

return statearr_33139;
})();
var statearr_33140_33154 = state_33128__$1;
(statearr_33140_33154[(2)] = null);

(statearr_33140_33154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (5))){
var inst_33108 = (state_33128[(7)]);
var state_33128__$1 = state_33128;
var statearr_33141_33155 = state_33128__$1;
(statearr_33141_33155[(2)] = inst_33108);

(statearr_33141_33155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (10))){
var inst_33122 = (state_33128[(2)]);
var state_33128__$1 = state_33128;
var statearr_33142_33156 = state_33128__$1;
(statearr_33142_33156[(2)] = inst_33122);

(statearr_33142_33156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33129 === (8))){
var inst_33115 = (state_33128[(9)]);
var inst_33118 = cljs.core.deref(inst_33115);
var state_33128__$1 = state_33128;
var statearr_33143_33157 = state_33128__$1;
(statearr_33143_33157[(2)] = inst_33118);

(statearr_33143_33157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto__))
;
return ((function (switch__32247__auto__,c__32322__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32248__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32248__auto____0 = (function (){
var statearr_33144 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33144[(0)] = cljs$core$async$reduce_$_state_machine__32248__auto__);

(statearr_33144[(1)] = (1));

return statearr_33144;
});
var cljs$core$async$reduce_$_state_machine__32248__auto____1 = (function (state_33128){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33128);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33145){if((e33145 instanceof Object)){
var ex__32251__auto__ = e33145;
var statearr_33146_33158 = state_33128;
(statearr_33146_33158[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33159 = state_33128;
state_33128 = G__33159;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32248__auto__ = function(state_33128){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32248__auto____1.call(this,state_33128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32248__auto____0;
cljs$core$async$reduce_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32248__auto____1;
return cljs$core$async$reduce_$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto__))
})();
var state__32324__auto__ = (function (){var statearr_33147 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33147[(6)] = c__32322__auto__);

return statearr_33147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto__))
);

return c__32322__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto__,f__$1){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto__,f__$1){
return (function (state_33165){
var state_val_33166 = (state_33165[(1)]);
if((state_val_33166 === (1))){
var inst_33160 = cljs.core.async.reduce(f__$1,init,ch);
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33165__$1,(2),inst_33160);
} else {
if((state_val_33166 === (2))){
var inst_33162 = (state_33165[(2)]);
var inst_33163 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33162) : f__$1.call(null,inst_33162));
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33165__$1,inst_33163);
} else {
return null;
}
}
});})(c__32322__auto__,f__$1))
;
return ((function (switch__32247__auto__,c__32322__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32248__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32248__auto____0 = (function (){
var statearr_33167 = [null,null,null,null,null,null,null];
(statearr_33167[(0)] = cljs$core$async$transduce_$_state_machine__32248__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var cljs$core$async$transduce_$_state_machine__32248__auto____1 = (function (state_33165){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33165);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33168){if((e33168 instanceof Object)){
var ex__32251__auto__ = e33168;
var statearr_33169_33171 = state_33165;
(statearr_33169_33171[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33172 = state_33165;
state_33165 = G__33172;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32248__auto__ = function(state_33165){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32248__auto____1.call(this,state_33165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32248__auto____0;
cljs$core$async$transduce_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32248__auto____1;
return cljs$core$async$transduce_$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto__,f__$1))
})();
var state__32324__auto__ = (function (){var statearr_33170 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33170[(6)] = c__32322__auto__);

return statearr_33170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto__,f__$1))
);

return c__32322__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto__){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto__){
return (function (state_33199){
var state_val_33200 = (state_33199[(1)]);
if((state_val_33200 === (7))){
var inst_33181 = (state_33199[(2)]);
var state_33199__$1 = state_33199;
var statearr_33201_33222 = state_33199__$1;
(statearr_33201_33222[(2)] = inst_33181);

(statearr_33201_33222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (1))){
var inst_33175 = cljs.core.seq(coll);
var inst_33176 = inst_33175;
var state_33199__$1 = (function (){var statearr_33202 = state_33199;
(statearr_33202[(7)] = inst_33176);

return statearr_33202;
})();
var statearr_33203_33223 = state_33199__$1;
(statearr_33203_33223[(2)] = null);

(statearr_33203_33223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (4))){
var inst_33176 = (state_33199[(7)]);
var inst_33179 = cljs.core.first(inst_33176);
var state_33199__$1 = state_33199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33199__$1,(7),ch,inst_33179);
} else {
if((state_val_33200 === (13))){
var inst_33193 = (state_33199[(2)]);
var state_33199__$1 = state_33199;
var statearr_33204_33224 = state_33199__$1;
(statearr_33204_33224[(2)] = inst_33193);

(statearr_33204_33224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (6))){
var inst_33184 = (state_33199[(2)]);
var state_33199__$1 = state_33199;
if(cljs.core.truth_(inst_33184)){
var statearr_33205_33225 = state_33199__$1;
(statearr_33205_33225[(1)] = (8));

} else {
var statearr_33206_33226 = state_33199__$1;
(statearr_33206_33226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (3))){
var inst_33197 = (state_33199[(2)]);
var state_33199__$1 = state_33199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33199__$1,inst_33197);
} else {
if((state_val_33200 === (12))){
var state_33199__$1 = state_33199;
var statearr_33207_33227 = state_33199__$1;
(statearr_33207_33227[(2)] = null);

(statearr_33207_33227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (2))){
var inst_33176 = (state_33199[(7)]);
var state_33199__$1 = state_33199;
if(cljs.core.truth_(inst_33176)){
var statearr_33208_33228 = state_33199__$1;
(statearr_33208_33228[(1)] = (4));

} else {
var statearr_33209_33229 = state_33199__$1;
(statearr_33209_33229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (11))){
var inst_33190 = cljs.core.async.close_BANG_(ch);
var state_33199__$1 = state_33199;
var statearr_33210_33230 = state_33199__$1;
(statearr_33210_33230[(2)] = inst_33190);

(statearr_33210_33230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (9))){
var state_33199__$1 = state_33199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33211_33231 = state_33199__$1;
(statearr_33211_33231[(1)] = (11));

} else {
var statearr_33212_33232 = state_33199__$1;
(statearr_33212_33232[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (5))){
var inst_33176 = (state_33199[(7)]);
var state_33199__$1 = state_33199;
var statearr_33213_33233 = state_33199__$1;
(statearr_33213_33233[(2)] = inst_33176);

(statearr_33213_33233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (10))){
var inst_33195 = (state_33199[(2)]);
var state_33199__$1 = state_33199;
var statearr_33214_33234 = state_33199__$1;
(statearr_33214_33234[(2)] = inst_33195);

(statearr_33214_33234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33200 === (8))){
var inst_33176 = (state_33199[(7)]);
var inst_33186 = cljs.core.next(inst_33176);
var inst_33176__$1 = inst_33186;
var state_33199__$1 = (function (){var statearr_33215 = state_33199;
(statearr_33215[(7)] = inst_33176__$1);

return statearr_33215;
})();
var statearr_33216_33235 = state_33199__$1;
(statearr_33216_33235[(2)] = null);

(statearr_33216_33235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto__))
;
return ((function (switch__32247__auto__,c__32322__auto__){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_33217 = [null,null,null,null,null,null,null,null];
(statearr_33217[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_33217[(1)] = (1));

return statearr_33217;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_33199){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33199);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33218){if((e33218 instanceof Object)){
var ex__32251__auto__ = e33218;
var statearr_33219_33236 = state_33199;
(statearr_33219_33236[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33237 = state_33199;
state_33199 = G__33237;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_33199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_33199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto__))
})();
var state__32324__auto__ = (function (){var statearr_33220 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33220[(6)] = c__32322__auto__);

return statearr_33220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto__))
);

return c__32322__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4230__auto__ = (((_ == null))?null:_);
var m__4231__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4231__auto__.call(null,_));
} else {
var m__4231__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4231__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4231__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4231__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4231__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto__.call(null,m,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto__.call(null,m));
} else {
var m__4231__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33238 = (function (ch,cs,meta33239){
this.ch = ch;
this.cs = cs;
this.meta33239 = meta33239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33240,meta33239__$1){
var self__ = this;
var _33240__$1 = this;
return (new cljs.core.async.t_cljs$core$async33238(self__.ch,self__.cs,meta33239__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33240){
var self__ = this;
var _33240__$1 = this;
return self__.meta33239;
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33239","meta33239",-105543651,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33238";

cljs.core.async.t_cljs$core$async33238.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async33238");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33238.
 */
cljs.core.async.__GT_t_cljs$core$async33238 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33238(ch__$1,cs__$1,meta33239){
return (new cljs.core.async.t_cljs$core$async33238(ch__$1,cs__$1,meta33239));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33238(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32322__auto___33460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___33460,cs,m,dchan,dctr,done){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___33460,cs,m,dchan,dctr,done){
return (function (state_33375){
var state_val_33376 = (state_33375[(1)]);
if((state_val_33376 === (7))){
var inst_33371 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33377_33461 = state_33375__$1;
(statearr_33377_33461[(2)] = inst_33371);

(statearr_33377_33461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (20))){
var inst_33274 = (state_33375[(7)]);
var inst_33286 = cljs.core.first(inst_33274);
var inst_33287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33286,(0),null);
var inst_33288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33286,(1),null);
var state_33375__$1 = (function (){var statearr_33378 = state_33375;
(statearr_33378[(8)] = inst_33287);

return statearr_33378;
})();
if(cljs.core.truth_(inst_33288)){
var statearr_33379_33462 = state_33375__$1;
(statearr_33379_33462[(1)] = (22));

} else {
var statearr_33380_33463 = state_33375__$1;
(statearr_33380_33463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (27))){
var inst_33318 = (state_33375[(9)]);
var inst_33323 = (state_33375[(10)]);
var inst_33316 = (state_33375[(11)]);
var inst_33243 = (state_33375[(12)]);
var inst_33323__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33316,inst_33318);
var inst_33324 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33323__$1,inst_33243,done);
var state_33375__$1 = (function (){var statearr_33381 = state_33375;
(statearr_33381[(10)] = inst_33323__$1);

return statearr_33381;
})();
if(cljs.core.truth_(inst_33324)){
var statearr_33382_33464 = state_33375__$1;
(statearr_33382_33464[(1)] = (30));

} else {
var statearr_33383_33465 = state_33375__$1;
(statearr_33383_33465[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (1))){
var state_33375__$1 = state_33375;
var statearr_33384_33466 = state_33375__$1;
(statearr_33384_33466[(2)] = null);

(statearr_33384_33466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (24))){
var inst_33274 = (state_33375[(7)]);
var inst_33293 = (state_33375[(2)]);
var inst_33294 = cljs.core.next(inst_33274);
var inst_33252 = inst_33294;
var inst_33253 = null;
var inst_33254 = (0);
var inst_33255 = (0);
var state_33375__$1 = (function (){var statearr_33385 = state_33375;
(statearr_33385[(13)] = inst_33255);

(statearr_33385[(14)] = inst_33254);

(statearr_33385[(15)] = inst_33253);

(statearr_33385[(16)] = inst_33252);

(statearr_33385[(17)] = inst_33293);

return statearr_33385;
})();
var statearr_33386_33467 = state_33375__$1;
(statearr_33386_33467[(2)] = null);

(statearr_33386_33467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (39))){
var state_33375__$1 = state_33375;
var statearr_33390_33468 = state_33375__$1;
(statearr_33390_33468[(2)] = null);

(statearr_33390_33468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (4))){
var inst_33243 = (state_33375[(12)]);
var inst_33243__$1 = (state_33375[(2)]);
var inst_33244 = (inst_33243__$1 == null);
var state_33375__$1 = (function (){var statearr_33391 = state_33375;
(statearr_33391[(12)] = inst_33243__$1);

return statearr_33391;
})();
if(cljs.core.truth_(inst_33244)){
var statearr_33392_33469 = state_33375__$1;
(statearr_33392_33469[(1)] = (5));

} else {
var statearr_33393_33470 = state_33375__$1;
(statearr_33393_33470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (15))){
var inst_33255 = (state_33375[(13)]);
var inst_33254 = (state_33375[(14)]);
var inst_33253 = (state_33375[(15)]);
var inst_33252 = (state_33375[(16)]);
var inst_33270 = (state_33375[(2)]);
var inst_33271 = (inst_33255 + (1));
var tmp33387 = inst_33254;
var tmp33388 = inst_33253;
var tmp33389 = inst_33252;
var inst_33252__$1 = tmp33389;
var inst_33253__$1 = tmp33388;
var inst_33254__$1 = tmp33387;
var inst_33255__$1 = inst_33271;
var state_33375__$1 = (function (){var statearr_33394 = state_33375;
(statearr_33394[(13)] = inst_33255__$1);

(statearr_33394[(18)] = inst_33270);

(statearr_33394[(14)] = inst_33254__$1);

(statearr_33394[(15)] = inst_33253__$1);

(statearr_33394[(16)] = inst_33252__$1);

return statearr_33394;
})();
var statearr_33395_33471 = state_33375__$1;
(statearr_33395_33471[(2)] = null);

(statearr_33395_33471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (21))){
var inst_33297 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33399_33472 = state_33375__$1;
(statearr_33399_33472[(2)] = inst_33297);

(statearr_33399_33472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (31))){
var inst_33323 = (state_33375[(10)]);
var inst_33327 = done(null);
var inst_33328 = cljs.core.async.untap_STAR_(m,inst_33323);
var state_33375__$1 = (function (){var statearr_33400 = state_33375;
(statearr_33400[(19)] = inst_33327);

return statearr_33400;
})();
var statearr_33401_33473 = state_33375__$1;
(statearr_33401_33473[(2)] = inst_33328);

(statearr_33401_33473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (32))){
var inst_33317 = (state_33375[(20)]);
var inst_33318 = (state_33375[(9)]);
var inst_33315 = (state_33375[(21)]);
var inst_33316 = (state_33375[(11)]);
var inst_33330 = (state_33375[(2)]);
var inst_33331 = (inst_33318 + (1));
var tmp33396 = inst_33317;
var tmp33397 = inst_33315;
var tmp33398 = inst_33316;
var inst_33315__$1 = tmp33397;
var inst_33316__$1 = tmp33398;
var inst_33317__$1 = tmp33396;
var inst_33318__$1 = inst_33331;
var state_33375__$1 = (function (){var statearr_33402 = state_33375;
(statearr_33402[(20)] = inst_33317__$1);

(statearr_33402[(9)] = inst_33318__$1);

(statearr_33402[(22)] = inst_33330);

(statearr_33402[(21)] = inst_33315__$1);

(statearr_33402[(11)] = inst_33316__$1);

return statearr_33402;
})();
var statearr_33403_33474 = state_33375__$1;
(statearr_33403_33474[(2)] = null);

(statearr_33403_33474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (40))){
var inst_33343 = (state_33375[(23)]);
var inst_33347 = done(null);
var inst_33348 = cljs.core.async.untap_STAR_(m,inst_33343);
var state_33375__$1 = (function (){var statearr_33404 = state_33375;
(statearr_33404[(24)] = inst_33347);

return statearr_33404;
})();
var statearr_33405_33475 = state_33375__$1;
(statearr_33405_33475[(2)] = inst_33348);

(statearr_33405_33475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (33))){
var inst_33334 = (state_33375[(25)]);
var inst_33336 = cljs.core.chunked_seq_QMARK_(inst_33334);
var state_33375__$1 = state_33375;
if(inst_33336){
var statearr_33406_33476 = state_33375__$1;
(statearr_33406_33476[(1)] = (36));

} else {
var statearr_33407_33477 = state_33375__$1;
(statearr_33407_33477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (13))){
var inst_33264 = (state_33375[(26)]);
var inst_33267 = cljs.core.async.close_BANG_(inst_33264);
var state_33375__$1 = state_33375;
var statearr_33408_33478 = state_33375__$1;
(statearr_33408_33478[(2)] = inst_33267);

(statearr_33408_33478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (22))){
var inst_33287 = (state_33375[(8)]);
var inst_33290 = cljs.core.async.close_BANG_(inst_33287);
var state_33375__$1 = state_33375;
var statearr_33409_33479 = state_33375__$1;
(statearr_33409_33479[(2)] = inst_33290);

(statearr_33409_33479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (36))){
var inst_33334 = (state_33375[(25)]);
var inst_33338 = cljs.core.chunk_first(inst_33334);
var inst_33339 = cljs.core.chunk_rest(inst_33334);
var inst_33340 = cljs.core.count(inst_33338);
var inst_33315 = inst_33339;
var inst_33316 = inst_33338;
var inst_33317 = inst_33340;
var inst_33318 = (0);
var state_33375__$1 = (function (){var statearr_33410 = state_33375;
(statearr_33410[(20)] = inst_33317);

(statearr_33410[(9)] = inst_33318);

(statearr_33410[(21)] = inst_33315);

(statearr_33410[(11)] = inst_33316);

return statearr_33410;
})();
var statearr_33411_33480 = state_33375__$1;
(statearr_33411_33480[(2)] = null);

(statearr_33411_33480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (41))){
var inst_33334 = (state_33375[(25)]);
var inst_33350 = (state_33375[(2)]);
var inst_33351 = cljs.core.next(inst_33334);
var inst_33315 = inst_33351;
var inst_33316 = null;
var inst_33317 = (0);
var inst_33318 = (0);
var state_33375__$1 = (function (){var statearr_33412 = state_33375;
(statearr_33412[(20)] = inst_33317);

(statearr_33412[(27)] = inst_33350);

(statearr_33412[(9)] = inst_33318);

(statearr_33412[(21)] = inst_33315);

(statearr_33412[(11)] = inst_33316);

return statearr_33412;
})();
var statearr_33413_33481 = state_33375__$1;
(statearr_33413_33481[(2)] = null);

(statearr_33413_33481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (43))){
var state_33375__$1 = state_33375;
var statearr_33414_33482 = state_33375__$1;
(statearr_33414_33482[(2)] = null);

(statearr_33414_33482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (29))){
var inst_33359 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33415_33483 = state_33375__$1;
(statearr_33415_33483[(2)] = inst_33359);

(statearr_33415_33483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (44))){
var inst_33368 = (state_33375[(2)]);
var state_33375__$1 = (function (){var statearr_33416 = state_33375;
(statearr_33416[(28)] = inst_33368);

return statearr_33416;
})();
var statearr_33417_33484 = state_33375__$1;
(statearr_33417_33484[(2)] = null);

(statearr_33417_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (6))){
var inst_33307 = (state_33375[(29)]);
var inst_33306 = cljs.core.deref(cs);
var inst_33307__$1 = cljs.core.keys(inst_33306);
var inst_33308 = cljs.core.count(inst_33307__$1);
var inst_33309 = cljs.core.reset_BANG_(dctr,inst_33308);
var inst_33314 = cljs.core.seq(inst_33307__$1);
var inst_33315 = inst_33314;
var inst_33316 = null;
var inst_33317 = (0);
var inst_33318 = (0);
var state_33375__$1 = (function (){var statearr_33418 = state_33375;
(statearr_33418[(20)] = inst_33317);

(statearr_33418[(30)] = inst_33309);

(statearr_33418[(9)] = inst_33318);

(statearr_33418[(29)] = inst_33307__$1);

(statearr_33418[(21)] = inst_33315);

(statearr_33418[(11)] = inst_33316);

return statearr_33418;
})();
var statearr_33419_33485 = state_33375__$1;
(statearr_33419_33485[(2)] = null);

(statearr_33419_33485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (28))){
var inst_33334 = (state_33375[(25)]);
var inst_33315 = (state_33375[(21)]);
var inst_33334__$1 = cljs.core.seq(inst_33315);
var state_33375__$1 = (function (){var statearr_33420 = state_33375;
(statearr_33420[(25)] = inst_33334__$1);

return statearr_33420;
})();
if(inst_33334__$1){
var statearr_33421_33486 = state_33375__$1;
(statearr_33421_33486[(1)] = (33));

} else {
var statearr_33422_33487 = state_33375__$1;
(statearr_33422_33487[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (25))){
var inst_33317 = (state_33375[(20)]);
var inst_33318 = (state_33375[(9)]);
var inst_33320 = (inst_33318 < inst_33317);
var inst_33321 = inst_33320;
var state_33375__$1 = state_33375;
if(cljs.core.truth_(inst_33321)){
var statearr_33423_33488 = state_33375__$1;
(statearr_33423_33488[(1)] = (27));

} else {
var statearr_33424_33489 = state_33375__$1;
(statearr_33424_33489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (34))){
var state_33375__$1 = state_33375;
var statearr_33425_33490 = state_33375__$1;
(statearr_33425_33490[(2)] = null);

(statearr_33425_33490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (17))){
var state_33375__$1 = state_33375;
var statearr_33426_33491 = state_33375__$1;
(statearr_33426_33491[(2)] = null);

(statearr_33426_33491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (3))){
var inst_33373 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33375__$1,inst_33373);
} else {
if((state_val_33376 === (12))){
var inst_33302 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33427_33492 = state_33375__$1;
(statearr_33427_33492[(2)] = inst_33302);

(statearr_33427_33492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (2))){
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33375__$1,(4),ch);
} else {
if((state_val_33376 === (23))){
var state_33375__$1 = state_33375;
var statearr_33428_33493 = state_33375__$1;
(statearr_33428_33493[(2)] = null);

(statearr_33428_33493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (35))){
var inst_33357 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33429_33494 = state_33375__$1;
(statearr_33429_33494[(2)] = inst_33357);

(statearr_33429_33494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (19))){
var inst_33274 = (state_33375[(7)]);
var inst_33278 = cljs.core.chunk_first(inst_33274);
var inst_33279 = cljs.core.chunk_rest(inst_33274);
var inst_33280 = cljs.core.count(inst_33278);
var inst_33252 = inst_33279;
var inst_33253 = inst_33278;
var inst_33254 = inst_33280;
var inst_33255 = (0);
var state_33375__$1 = (function (){var statearr_33430 = state_33375;
(statearr_33430[(13)] = inst_33255);

(statearr_33430[(14)] = inst_33254);

(statearr_33430[(15)] = inst_33253);

(statearr_33430[(16)] = inst_33252);

return statearr_33430;
})();
var statearr_33431_33495 = state_33375__$1;
(statearr_33431_33495[(2)] = null);

(statearr_33431_33495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (11))){
var inst_33274 = (state_33375[(7)]);
var inst_33252 = (state_33375[(16)]);
var inst_33274__$1 = cljs.core.seq(inst_33252);
var state_33375__$1 = (function (){var statearr_33432 = state_33375;
(statearr_33432[(7)] = inst_33274__$1);

return statearr_33432;
})();
if(inst_33274__$1){
var statearr_33433_33496 = state_33375__$1;
(statearr_33433_33496[(1)] = (16));

} else {
var statearr_33434_33497 = state_33375__$1;
(statearr_33434_33497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (9))){
var inst_33304 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33435_33498 = state_33375__$1;
(statearr_33435_33498[(2)] = inst_33304);

(statearr_33435_33498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (5))){
var inst_33250 = cljs.core.deref(cs);
var inst_33251 = cljs.core.seq(inst_33250);
var inst_33252 = inst_33251;
var inst_33253 = null;
var inst_33254 = (0);
var inst_33255 = (0);
var state_33375__$1 = (function (){var statearr_33436 = state_33375;
(statearr_33436[(13)] = inst_33255);

(statearr_33436[(14)] = inst_33254);

(statearr_33436[(15)] = inst_33253);

(statearr_33436[(16)] = inst_33252);

return statearr_33436;
})();
var statearr_33437_33499 = state_33375__$1;
(statearr_33437_33499[(2)] = null);

(statearr_33437_33499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (14))){
var state_33375__$1 = state_33375;
var statearr_33438_33500 = state_33375__$1;
(statearr_33438_33500[(2)] = null);

(statearr_33438_33500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (45))){
var inst_33365 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33439_33501 = state_33375__$1;
(statearr_33439_33501[(2)] = inst_33365);

(statearr_33439_33501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (26))){
var inst_33307 = (state_33375[(29)]);
var inst_33361 = (state_33375[(2)]);
var inst_33362 = cljs.core.seq(inst_33307);
var state_33375__$1 = (function (){var statearr_33440 = state_33375;
(statearr_33440[(31)] = inst_33361);

return statearr_33440;
})();
if(inst_33362){
var statearr_33441_33502 = state_33375__$1;
(statearr_33441_33502[(1)] = (42));

} else {
var statearr_33442_33503 = state_33375__$1;
(statearr_33442_33503[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (16))){
var inst_33274 = (state_33375[(7)]);
var inst_33276 = cljs.core.chunked_seq_QMARK_(inst_33274);
var state_33375__$1 = state_33375;
if(inst_33276){
var statearr_33443_33504 = state_33375__$1;
(statearr_33443_33504[(1)] = (19));

} else {
var statearr_33444_33505 = state_33375__$1;
(statearr_33444_33505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (38))){
var inst_33354 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33445_33506 = state_33375__$1;
(statearr_33445_33506[(2)] = inst_33354);

(statearr_33445_33506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (30))){
var state_33375__$1 = state_33375;
var statearr_33446_33507 = state_33375__$1;
(statearr_33446_33507[(2)] = null);

(statearr_33446_33507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (10))){
var inst_33255 = (state_33375[(13)]);
var inst_33253 = (state_33375[(15)]);
var inst_33263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33253,inst_33255);
var inst_33264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33263,(0),null);
var inst_33265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33263,(1),null);
var state_33375__$1 = (function (){var statearr_33447 = state_33375;
(statearr_33447[(26)] = inst_33264);

return statearr_33447;
})();
if(cljs.core.truth_(inst_33265)){
var statearr_33448_33508 = state_33375__$1;
(statearr_33448_33508[(1)] = (13));

} else {
var statearr_33449_33509 = state_33375__$1;
(statearr_33449_33509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (18))){
var inst_33300 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33450_33510 = state_33375__$1;
(statearr_33450_33510[(2)] = inst_33300);

(statearr_33450_33510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (42))){
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33375__$1,(45),dchan);
} else {
if((state_val_33376 === (37))){
var inst_33334 = (state_33375[(25)]);
var inst_33243 = (state_33375[(12)]);
var inst_33343 = (state_33375[(23)]);
var inst_33343__$1 = cljs.core.first(inst_33334);
var inst_33344 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33343__$1,inst_33243,done);
var state_33375__$1 = (function (){var statearr_33451 = state_33375;
(statearr_33451[(23)] = inst_33343__$1);

return statearr_33451;
})();
if(cljs.core.truth_(inst_33344)){
var statearr_33452_33511 = state_33375__$1;
(statearr_33452_33511[(1)] = (39));

} else {
var statearr_33453_33512 = state_33375__$1;
(statearr_33453_33512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (8))){
var inst_33255 = (state_33375[(13)]);
var inst_33254 = (state_33375[(14)]);
var inst_33257 = (inst_33255 < inst_33254);
var inst_33258 = inst_33257;
var state_33375__$1 = state_33375;
if(cljs.core.truth_(inst_33258)){
var statearr_33454_33513 = state_33375__$1;
(statearr_33454_33513[(1)] = (10));

} else {
var statearr_33455_33514 = state_33375__$1;
(statearr_33455_33514[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___33460,cs,m,dchan,dctr,done))
;
return ((function (switch__32247__auto__,c__32322__auto___33460,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32248__auto__ = null;
var cljs$core$async$mult_$_state_machine__32248__auto____0 = (function (){
var statearr_33456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33456[(0)] = cljs$core$async$mult_$_state_machine__32248__auto__);

(statearr_33456[(1)] = (1));

return statearr_33456;
});
var cljs$core$async$mult_$_state_machine__32248__auto____1 = (function (state_33375){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33375);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33457){if((e33457 instanceof Object)){
var ex__32251__auto__ = e33457;
var statearr_33458_33515 = state_33375;
(statearr_33458_33515[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_33375;
state_33375 = G__33516;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32248__auto__ = function(state_33375){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32248__auto____1.call(this,state_33375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32248__auto____0;
cljs$core$async$mult_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32248__auto____1;
return cljs$core$async$mult_$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___33460,cs,m,dchan,dctr,done))
})();
var state__32324__auto__ = (function (){var statearr_33459 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33459[(6)] = c__32322__auto___33460);

return statearr_33459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___33460,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33518 = arguments.length;
switch (G__33518) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto__.call(null,m,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto__.call(null,m,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto__.call(null,m));
} else {
var m__4231__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4231__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4231__auto__.call(null,m,state_map));
} else {
var m__4231__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4231__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4230__auto__ = (((m == null))?null:m);
var m__4231__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4231__auto__.call(null,m,mode));
} else {
var m__4231__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4231__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4521__auto__ = [];
var len__4518__auto___33530 = arguments.length;
var i__4519__auto___33531 = (0);
while(true){
if((i__4519__auto___33531 < len__4518__auto___33530)){
args__4521__auto__.push((arguments[i__4519__auto___33531]));

var G__33532 = (i__4519__auto___33531 + (1));
i__4519__auto___33531 = G__33532;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((3) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4522__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33524){
var map__33525 = p__33524;
var map__33525__$1 = ((((!((map__33525 == null)))?(((((map__33525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33525):map__33525);
var opts = map__33525__$1;
var statearr_33527_33533 = state;
(statearr_33527_33533[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__33525,map__33525__$1,opts){
return (function (val){
var statearr_33528_33534 = state;
(statearr_33528_33534[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33525,map__33525__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_33529_33535 = state;
(statearr_33529_33535[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33520){
var G__33521 = cljs.core.first(seq33520);
var seq33520__$1 = cljs.core.next(seq33520);
var G__33522 = cljs.core.first(seq33520__$1);
var seq33520__$2 = cljs.core.next(seq33520__$1);
var G__33523 = cljs.core.first(seq33520__$2);
var seq33520__$3 = cljs.core.next(seq33520__$2);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33521,G__33522,G__33523,seq33520__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33536 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33537){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33537 = meta33537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33538,meta33537__$1){
var self__ = this;
var _33538__$1 = this;
return (new cljs.core.async.t_cljs$core$async33536(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33538){
var self__ = this;
var _33538__$1 = this;
return self__.meta33537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33537","meta33537",-1533601650,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33536";

cljs.core.async.t_cljs$core$async33536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async33536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33536.
 */
cljs.core.async.__GT_t_cljs$core$async33536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33536(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33537){
return (new cljs.core.async.t_cljs$core$async33536(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33536(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32322__auto___33700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___33700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___33700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33640){
var state_val_33641 = (state_33640[(1)]);
if((state_val_33641 === (7))){
var inst_33555 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33642_33701 = state_33640__$1;
(statearr_33642_33701[(2)] = inst_33555);

(statearr_33642_33701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (20))){
var inst_33567 = (state_33640[(7)]);
var state_33640__$1 = state_33640;
var statearr_33643_33702 = state_33640__$1;
(statearr_33643_33702[(2)] = inst_33567);

(statearr_33643_33702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (27))){
var state_33640__$1 = state_33640;
var statearr_33644_33703 = state_33640__$1;
(statearr_33644_33703[(2)] = null);

(statearr_33644_33703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (1))){
var inst_33542 = (state_33640[(8)]);
var inst_33542__$1 = calc_state();
var inst_33544 = (inst_33542__$1 == null);
var inst_33545 = cljs.core.not(inst_33544);
var state_33640__$1 = (function (){var statearr_33645 = state_33640;
(statearr_33645[(8)] = inst_33542__$1);

return statearr_33645;
})();
if(inst_33545){
var statearr_33646_33704 = state_33640__$1;
(statearr_33646_33704[(1)] = (2));

} else {
var statearr_33647_33705 = state_33640__$1;
(statearr_33647_33705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (24))){
var inst_33614 = (state_33640[(9)]);
var inst_33591 = (state_33640[(10)]);
var inst_33600 = (state_33640[(11)]);
var inst_33614__$1 = (inst_33591.cljs$core$IFn$_invoke$arity$1 ? inst_33591.cljs$core$IFn$_invoke$arity$1(inst_33600) : inst_33591.call(null,inst_33600));
var state_33640__$1 = (function (){var statearr_33648 = state_33640;
(statearr_33648[(9)] = inst_33614__$1);

return statearr_33648;
})();
if(cljs.core.truth_(inst_33614__$1)){
var statearr_33649_33706 = state_33640__$1;
(statearr_33649_33706[(1)] = (29));

} else {
var statearr_33650_33707 = state_33640__$1;
(statearr_33650_33707[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (4))){
var inst_33558 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33558)){
var statearr_33651_33708 = state_33640__$1;
(statearr_33651_33708[(1)] = (8));

} else {
var statearr_33652_33709 = state_33640__$1;
(statearr_33652_33709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (15))){
var inst_33585 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33585)){
var statearr_33653_33710 = state_33640__$1;
(statearr_33653_33710[(1)] = (19));

} else {
var statearr_33654_33711 = state_33640__$1;
(statearr_33654_33711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (21))){
var inst_33590 = (state_33640[(12)]);
var inst_33590__$1 = (state_33640[(2)]);
var inst_33591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33590__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33590__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33590__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33640__$1 = (function (){var statearr_33655 = state_33640;
(statearr_33655[(10)] = inst_33591);

(statearr_33655[(13)] = inst_33592);

(statearr_33655[(12)] = inst_33590__$1);

return statearr_33655;
})();
return cljs.core.async.ioc_alts_BANG_(state_33640__$1,(22),inst_33593);
} else {
if((state_val_33641 === (31))){
var inst_33622 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33622)){
var statearr_33656_33712 = state_33640__$1;
(statearr_33656_33712[(1)] = (32));

} else {
var statearr_33657_33713 = state_33640__$1;
(statearr_33657_33713[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (32))){
var inst_33599 = (state_33640[(14)]);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33640__$1,(35),out,inst_33599);
} else {
if((state_val_33641 === (33))){
var inst_33590 = (state_33640[(12)]);
var inst_33567 = inst_33590;
var state_33640__$1 = (function (){var statearr_33658 = state_33640;
(statearr_33658[(7)] = inst_33567);

return statearr_33658;
})();
var statearr_33659_33714 = state_33640__$1;
(statearr_33659_33714[(2)] = null);

(statearr_33659_33714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (13))){
var inst_33567 = (state_33640[(7)]);
var inst_33574 = inst_33567.cljs$lang$protocol_mask$partition0$;
var inst_33575 = (inst_33574 & (64));
var inst_33576 = inst_33567.cljs$core$ISeq$;
var inst_33577 = (cljs.core.PROTOCOL_SENTINEL === inst_33576);
var inst_33578 = ((inst_33575) || (inst_33577));
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33578)){
var statearr_33660_33715 = state_33640__$1;
(statearr_33660_33715[(1)] = (16));

} else {
var statearr_33661_33716 = state_33640__$1;
(statearr_33661_33716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (22))){
var inst_33600 = (state_33640[(11)]);
var inst_33599 = (state_33640[(14)]);
var inst_33598 = (state_33640[(2)]);
var inst_33599__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33598,(0),null);
var inst_33600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33598,(1),null);
var inst_33601 = (inst_33599__$1 == null);
var inst_33602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33600__$1,change);
var inst_33603 = ((inst_33601) || (inst_33602));
var state_33640__$1 = (function (){var statearr_33662 = state_33640;
(statearr_33662[(11)] = inst_33600__$1);

(statearr_33662[(14)] = inst_33599__$1);

return statearr_33662;
})();
if(cljs.core.truth_(inst_33603)){
var statearr_33663_33717 = state_33640__$1;
(statearr_33663_33717[(1)] = (23));

} else {
var statearr_33664_33718 = state_33640__$1;
(statearr_33664_33718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (36))){
var inst_33590 = (state_33640[(12)]);
var inst_33567 = inst_33590;
var state_33640__$1 = (function (){var statearr_33665 = state_33640;
(statearr_33665[(7)] = inst_33567);

return statearr_33665;
})();
var statearr_33666_33719 = state_33640__$1;
(statearr_33666_33719[(2)] = null);

(statearr_33666_33719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (29))){
var inst_33614 = (state_33640[(9)]);
var state_33640__$1 = state_33640;
var statearr_33667_33720 = state_33640__$1;
(statearr_33667_33720[(2)] = inst_33614);

(statearr_33667_33720[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (6))){
var state_33640__$1 = state_33640;
var statearr_33668_33721 = state_33640__$1;
(statearr_33668_33721[(2)] = false);

(statearr_33668_33721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (28))){
var inst_33610 = (state_33640[(2)]);
var inst_33611 = calc_state();
var inst_33567 = inst_33611;
var state_33640__$1 = (function (){var statearr_33669 = state_33640;
(statearr_33669[(15)] = inst_33610);

(statearr_33669[(7)] = inst_33567);

return statearr_33669;
})();
var statearr_33670_33722 = state_33640__$1;
(statearr_33670_33722[(2)] = null);

(statearr_33670_33722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (25))){
var inst_33636 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33671_33723 = state_33640__$1;
(statearr_33671_33723[(2)] = inst_33636);

(statearr_33671_33723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (34))){
var inst_33634 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33672_33724 = state_33640__$1;
(statearr_33672_33724[(2)] = inst_33634);

(statearr_33672_33724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (17))){
var state_33640__$1 = state_33640;
var statearr_33673_33725 = state_33640__$1;
(statearr_33673_33725[(2)] = false);

(statearr_33673_33725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (3))){
var state_33640__$1 = state_33640;
var statearr_33674_33726 = state_33640__$1;
(statearr_33674_33726[(2)] = false);

(statearr_33674_33726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (12))){
var inst_33638 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33640__$1,inst_33638);
} else {
if((state_val_33641 === (2))){
var inst_33542 = (state_33640[(8)]);
var inst_33547 = inst_33542.cljs$lang$protocol_mask$partition0$;
var inst_33548 = (inst_33547 & (64));
var inst_33549 = inst_33542.cljs$core$ISeq$;
var inst_33550 = (cljs.core.PROTOCOL_SENTINEL === inst_33549);
var inst_33551 = ((inst_33548) || (inst_33550));
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33551)){
var statearr_33675_33727 = state_33640__$1;
(statearr_33675_33727[(1)] = (5));

} else {
var statearr_33676_33728 = state_33640__$1;
(statearr_33676_33728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (23))){
var inst_33599 = (state_33640[(14)]);
var inst_33605 = (inst_33599 == null);
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33605)){
var statearr_33677_33729 = state_33640__$1;
(statearr_33677_33729[(1)] = (26));

} else {
var statearr_33678_33730 = state_33640__$1;
(statearr_33678_33730[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (35))){
var inst_33625 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
if(cljs.core.truth_(inst_33625)){
var statearr_33679_33731 = state_33640__$1;
(statearr_33679_33731[(1)] = (36));

} else {
var statearr_33680_33732 = state_33640__$1;
(statearr_33680_33732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (19))){
var inst_33567 = (state_33640[(7)]);
var inst_33587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33567);
var state_33640__$1 = state_33640;
var statearr_33681_33733 = state_33640__$1;
(statearr_33681_33733[(2)] = inst_33587);

(statearr_33681_33733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (11))){
var inst_33567 = (state_33640[(7)]);
var inst_33571 = (inst_33567 == null);
var inst_33572 = cljs.core.not(inst_33571);
var state_33640__$1 = state_33640;
if(inst_33572){
var statearr_33682_33734 = state_33640__$1;
(statearr_33682_33734[(1)] = (13));

} else {
var statearr_33683_33735 = state_33640__$1;
(statearr_33683_33735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (9))){
var inst_33542 = (state_33640[(8)]);
var state_33640__$1 = state_33640;
var statearr_33684_33736 = state_33640__$1;
(statearr_33684_33736[(2)] = inst_33542);

(statearr_33684_33736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (5))){
var state_33640__$1 = state_33640;
var statearr_33685_33737 = state_33640__$1;
(statearr_33685_33737[(2)] = true);

(statearr_33685_33737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (14))){
var state_33640__$1 = state_33640;
var statearr_33686_33738 = state_33640__$1;
(statearr_33686_33738[(2)] = false);

(statearr_33686_33738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (26))){
var inst_33600 = (state_33640[(11)]);
var inst_33607 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33600);
var state_33640__$1 = state_33640;
var statearr_33687_33739 = state_33640__$1;
(statearr_33687_33739[(2)] = inst_33607);

(statearr_33687_33739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (16))){
var state_33640__$1 = state_33640;
var statearr_33688_33740 = state_33640__$1;
(statearr_33688_33740[(2)] = true);

(statearr_33688_33740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (38))){
var inst_33630 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33689_33741 = state_33640__$1;
(statearr_33689_33741[(2)] = inst_33630);

(statearr_33689_33741[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (30))){
var inst_33591 = (state_33640[(10)]);
var inst_33592 = (state_33640[(13)]);
var inst_33600 = (state_33640[(11)]);
var inst_33617 = cljs.core.empty_QMARK_(inst_33591);
var inst_33618 = (inst_33592.cljs$core$IFn$_invoke$arity$1 ? inst_33592.cljs$core$IFn$_invoke$arity$1(inst_33600) : inst_33592.call(null,inst_33600));
var inst_33619 = cljs.core.not(inst_33618);
var inst_33620 = ((inst_33617) && (inst_33619));
var state_33640__$1 = state_33640;
var statearr_33690_33742 = state_33640__$1;
(statearr_33690_33742[(2)] = inst_33620);

(statearr_33690_33742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (10))){
var inst_33542 = (state_33640[(8)]);
var inst_33563 = (state_33640[(2)]);
var inst_33564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33563,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33563,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33563,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33567 = inst_33542;
var state_33640__$1 = (function (){var statearr_33691 = state_33640;
(statearr_33691[(16)] = inst_33564);

(statearr_33691[(17)] = inst_33565);

(statearr_33691[(7)] = inst_33567);

(statearr_33691[(18)] = inst_33566);

return statearr_33691;
})();
var statearr_33692_33743 = state_33640__$1;
(statearr_33692_33743[(2)] = null);

(statearr_33692_33743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (18))){
var inst_33582 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33693_33744 = state_33640__$1;
(statearr_33693_33744[(2)] = inst_33582);

(statearr_33693_33744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (37))){
var state_33640__$1 = state_33640;
var statearr_33694_33745 = state_33640__$1;
(statearr_33694_33745[(2)] = null);

(statearr_33694_33745[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (8))){
var inst_33542 = (state_33640[(8)]);
var inst_33560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33542);
var state_33640__$1 = state_33640;
var statearr_33695_33746 = state_33640__$1;
(statearr_33695_33746[(2)] = inst_33560);

(statearr_33695_33746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___33700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32247__auto__,c__32322__auto___33700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32248__auto__ = null;
var cljs$core$async$mix_$_state_machine__32248__auto____0 = (function (){
var statearr_33696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33696[(0)] = cljs$core$async$mix_$_state_machine__32248__auto__);

(statearr_33696[(1)] = (1));

return statearr_33696;
});
var cljs$core$async$mix_$_state_machine__32248__auto____1 = (function (state_33640){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33640);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33697){if((e33697 instanceof Object)){
var ex__32251__auto__ = e33697;
var statearr_33698_33747 = state_33640;
(statearr_33698_33747[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33748 = state_33640;
state_33640 = G__33748;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32248__auto__ = function(state_33640){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32248__auto____1.call(this,state_33640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32248__auto____0;
cljs$core$async$mix_$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32248__auto____1;
return cljs$core$async$mix_$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___33700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32324__auto__ = (function (){var statearr_33699 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33699[(6)] = c__32322__auto___33700);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___33700,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4231__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4231__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4231__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4231__auto__.call(null,p,v,ch));
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4231__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33750 = arguments.length;
switch (G__33750) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4231__auto__.call(null,p));
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4231__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4230__auto__ = (((p == null))?null:p);
var m__4231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4230__auto__)]);
if(!((m__4231__auto__ == null))){
return (m__4231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4231__auto__.call(null,p,v));
} else {
var m__4231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4231__auto____$1 == null))){
return (m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4231__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4231__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33754 = arguments.length;
switch (G__33754) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3936__auto__,mults){
return (function (p1__33752_SHARP_){
if(cljs.core.truth_((p1__33752_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33752_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33752_SHARP_.call(null,topic)))){
return p1__33752_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33752_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33755 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33756){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33756 = meta33756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33757,meta33756__$1){
var self__ = this;
var _33757__$1 = this;
return (new cljs.core.async.t_cljs$core$async33755(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33756__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33757){
var self__ = this;
var _33757__$1 = this;
return self__.meta33756;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33756","meta33756",-1196861232,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33755";

cljs.core.async.t_cljs$core$async33755.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async33755");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33755.
 */
cljs.core.async.__GT_t_cljs$core$async33755 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33756){
return (new cljs.core.async.t_cljs$core$async33755(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33756));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33755(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32322__auto___33875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___33875,mults,ensure_mult,p){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___33875,mults,ensure_mult,p){
return (function (state_33829){
var state_val_33830 = (state_33829[(1)]);
if((state_val_33830 === (7))){
var inst_33825 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33831_33876 = state_33829__$1;
(statearr_33831_33876[(2)] = inst_33825);

(statearr_33831_33876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (20))){
var state_33829__$1 = state_33829;
var statearr_33832_33877 = state_33829__$1;
(statearr_33832_33877[(2)] = null);

(statearr_33832_33877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (1))){
var state_33829__$1 = state_33829;
var statearr_33833_33878 = state_33829__$1;
(statearr_33833_33878[(2)] = null);

(statearr_33833_33878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (24))){
var inst_33808 = (state_33829[(7)]);
var inst_33817 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33808);
var state_33829__$1 = state_33829;
var statearr_33834_33879 = state_33829__$1;
(statearr_33834_33879[(2)] = inst_33817);

(statearr_33834_33879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (4))){
var inst_33760 = (state_33829[(8)]);
var inst_33760__$1 = (state_33829[(2)]);
var inst_33761 = (inst_33760__$1 == null);
var state_33829__$1 = (function (){var statearr_33835 = state_33829;
(statearr_33835[(8)] = inst_33760__$1);

return statearr_33835;
})();
if(cljs.core.truth_(inst_33761)){
var statearr_33836_33880 = state_33829__$1;
(statearr_33836_33880[(1)] = (5));

} else {
var statearr_33837_33881 = state_33829__$1;
(statearr_33837_33881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (15))){
var inst_33802 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33838_33882 = state_33829__$1;
(statearr_33838_33882[(2)] = inst_33802);

(statearr_33838_33882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (21))){
var inst_33822 = (state_33829[(2)]);
var state_33829__$1 = (function (){var statearr_33839 = state_33829;
(statearr_33839[(9)] = inst_33822);

return statearr_33839;
})();
var statearr_33840_33883 = state_33829__$1;
(statearr_33840_33883[(2)] = null);

(statearr_33840_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (13))){
var inst_33784 = (state_33829[(10)]);
var inst_33786 = cljs.core.chunked_seq_QMARK_(inst_33784);
var state_33829__$1 = state_33829;
if(inst_33786){
var statearr_33841_33884 = state_33829__$1;
(statearr_33841_33884[(1)] = (16));

} else {
var statearr_33842_33885 = state_33829__$1;
(statearr_33842_33885[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (22))){
var inst_33814 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
if(cljs.core.truth_(inst_33814)){
var statearr_33843_33886 = state_33829__$1;
(statearr_33843_33886[(1)] = (23));

} else {
var statearr_33844_33887 = state_33829__$1;
(statearr_33844_33887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (6))){
var inst_33760 = (state_33829[(8)]);
var inst_33808 = (state_33829[(7)]);
var inst_33810 = (state_33829[(11)]);
var inst_33808__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33760) : topic_fn.call(null,inst_33760));
var inst_33809 = cljs.core.deref(mults);
var inst_33810__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33809,inst_33808__$1);
var state_33829__$1 = (function (){var statearr_33845 = state_33829;
(statearr_33845[(7)] = inst_33808__$1);

(statearr_33845[(11)] = inst_33810__$1);

return statearr_33845;
})();
if(cljs.core.truth_(inst_33810__$1)){
var statearr_33846_33888 = state_33829__$1;
(statearr_33846_33888[(1)] = (19));

} else {
var statearr_33847_33889 = state_33829__$1;
(statearr_33847_33889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (25))){
var inst_33819 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33848_33890 = state_33829__$1;
(statearr_33848_33890[(2)] = inst_33819);

(statearr_33848_33890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (17))){
var inst_33784 = (state_33829[(10)]);
var inst_33793 = cljs.core.first(inst_33784);
var inst_33794 = cljs.core.async.muxch_STAR_(inst_33793);
var inst_33795 = cljs.core.async.close_BANG_(inst_33794);
var inst_33796 = cljs.core.next(inst_33784);
var inst_33770 = inst_33796;
var inst_33771 = null;
var inst_33772 = (0);
var inst_33773 = (0);
var state_33829__$1 = (function (){var statearr_33849 = state_33829;
(statearr_33849[(12)] = inst_33770);

(statearr_33849[(13)] = inst_33773);

(statearr_33849[(14)] = inst_33772);

(statearr_33849[(15)] = inst_33795);

(statearr_33849[(16)] = inst_33771);

return statearr_33849;
})();
var statearr_33850_33891 = state_33829__$1;
(statearr_33850_33891[(2)] = null);

(statearr_33850_33891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (3))){
var inst_33827 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33829__$1,inst_33827);
} else {
if((state_val_33830 === (12))){
var inst_33804 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33851_33892 = state_33829__$1;
(statearr_33851_33892[(2)] = inst_33804);

(statearr_33851_33892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (2))){
var state_33829__$1 = state_33829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33829__$1,(4),ch);
} else {
if((state_val_33830 === (23))){
var state_33829__$1 = state_33829;
var statearr_33852_33893 = state_33829__$1;
(statearr_33852_33893[(2)] = null);

(statearr_33852_33893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (19))){
var inst_33760 = (state_33829[(8)]);
var inst_33810 = (state_33829[(11)]);
var inst_33812 = cljs.core.async.muxch_STAR_(inst_33810);
var state_33829__$1 = state_33829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33829__$1,(22),inst_33812,inst_33760);
} else {
if((state_val_33830 === (11))){
var inst_33770 = (state_33829[(12)]);
var inst_33784 = (state_33829[(10)]);
var inst_33784__$1 = cljs.core.seq(inst_33770);
var state_33829__$1 = (function (){var statearr_33853 = state_33829;
(statearr_33853[(10)] = inst_33784__$1);

return statearr_33853;
})();
if(inst_33784__$1){
var statearr_33854_33894 = state_33829__$1;
(statearr_33854_33894[(1)] = (13));

} else {
var statearr_33855_33895 = state_33829__$1;
(statearr_33855_33895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (9))){
var inst_33806 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33856_33896 = state_33829__$1;
(statearr_33856_33896[(2)] = inst_33806);

(statearr_33856_33896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (5))){
var inst_33767 = cljs.core.deref(mults);
var inst_33768 = cljs.core.vals(inst_33767);
var inst_33769 = cljs.core.seq(inst_33768);
var inst_33770 = inst_33769;
var inst_33771 = null;
var inst_33772 = (0);
var inst_33773 = (0);
var state_33829__$1 = (function (){var statearr_33857 = state_33829;
(statearr_33857[(12)] = inst_33770);

(statearr_33857[(13)] = inst_33773);

(statearr_33857[(14)] = inst_33772);

(statearr_33857[(16)] = inst_33771);

return statearr_33857;
})();
var statearr_33858_33897 = state_33829__$1;
(statearr_33858_33897[(2)] = null);

(statearr_33858_33897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (14))){
var state_33829__$1 = state_33829;
var statearr_33862_33898 = state_33829__$1;
(statearr_33862_33898[(2)] = null);

(statearr_33862_33898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (16))){
var inst_33784 = (state_33829[(10)]);
var inst_33788 = cljs.core.chunk_first(inst_33784);
var inst_33789 = cljs.core.chunk_rest(inst_33784);
var inst_33790 = cljs.core.count(inst_33788);
var inst_33770 = inst_33789;
var inst_33771 = inst_33788;
var inst_33772 = inst_33790;
var inst_33773 = (0);
var state_33829__$1 = (function (){var statearr_33863 = state_33829;
(statearr_33863[(12)] = inst_33770);

(statearr_33863[(13)] = inst_33773);

(statearr_33863[(14)] = inst_33772);

(statearr_33863[(16)] = inst_33771);

return statearr_33863;
})();
var statearr_33864_33899 = state_33829__$1;
(statearr_33864_33899[(2)] = null);

(statearr_33864_33899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (10))){
var inst_33770 = (state_33829[(12)]);
var inst_33773 = (state_33829[(13)]);
var inst_33772 = (state_33829[(14)]);
var inst_33771 = (state_33829[(16)]);
var inst_33778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33771,inst_33773);
var inst_33779 = cljs.core.async.muxch_STAR_(inst_33778);
var inst_33780 = cljs.core.async.close_BANG_(inst_33779);
var inst_33781 = (inst_33773 + (1));
var tmp33859 = inst_33770;
var tmp33860 = inst_33772;
var tmp33861 = inst_33771;
var inst_33770__$1 = tmp33859;
var inst_33771__$1 = tmp33861;
var inst_33772__$1 = tmp33860;
var inst_33773__$1 = inst_33781;
var state_33829__$1 = (function (){var statearr_33865 = state_33829;
(statearr_33865[(12)] = inst_33770__$1);

(statearr_33865[(13)] = inst_33773__$1);

(statearr_33865[(17)] = inst_33780);

(statearr_33865[(14)] = inst_33772__$1);

(statearr_33865[(16)] = inst_33771__$1);

return statearr_33865;
})();
var statearr_33866_33900 = state_33829__$1;
(statearr_33866_33900[(2)] = null);

(statearr_33866_33900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (18))){
var inst_33799 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33867_33901 = state_33829__$1;
(statearr_33867_33901[(2)] = inst_33799);

(statearr_33867_33901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (8))){
var inst_33773 = (state_33829[(13)]);
var inst_33772 = (state_33829[(14)]);
var inst_33775 = (inst_33773 < inst_33772);
var inst_33776 = inst_33775;
var state_33829__$1 = state_33829;
if(cljs.core.truth_(inst_33776)){
var statearr_33868_33902 = state_33829__$1;
(statearr_33868_33902[(1)] = (10));

} else {
var statearr_33869_33903 = state_33829__$1;
(statearr_33869_33903[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___33875,mults,ensure_mult,p))
;
return ((function (switch__32247__auto__,c__32322__auto___33875,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_33870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33870[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_33870[(1)] = (1));

return statearr_33870;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_33829){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33829);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33871){if((e33871 instanceof Object)){
var ex__32251__auto__ = e33871;
var statearr_33872_33904 = state_33829;
(statearr_33872_33904[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33871;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33905 = state_33829;
state_33829 = G__33905;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_33829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_33829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___33875,mults,ensure_mult,p))
})();
var state__32324__auto__ = (function (){var statearr_33873 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33873[(6)] = c__32322__auto___33875);

return statearr_33873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___33875,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33907 = arguments.length;
switch (G__33907) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33910 = arguments.length;
switch (G__33910) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33913 = arguments.length;
switch (G__33913) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32322__auto___33980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___33980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___33980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (7))){
var state_33952__$1 = state_33952;
var statearr_33954_33981 = state_33952__$1;
(statearr_33954_33981[(2)] = null);

(statearr_33954_33981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (1))){
var state_33952__$1 = state_33952;
var statearr_33955_33982 = state_33952__$1;
(statearr_33955_33982[(2)] = null);

(statearr_33955_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (4))){
var inst_33916 = (state_33952[(7)]);
var inst_33918 = (inst_33916 < cnt);
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33918)){
var statearr_33956_33983 = state_33952__$1;
(statearr_33956_33983[(1)] = (6));

} else {
var statearr_33957_33984 = state_33952__$1;
(statearr_33957_33984[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (15))){
var inst_33948 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33958_33985 = state_33952__$1;
(statearr_33958_33985[(2)] = inst_33948);

(statearr_33958_33985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (13))){
var inst_33941 = cljs.core.async.close_BANG_(out);
var state_33952__$1 = state_33952;
var statearr_33959_33986 = state_33952__$1;
(statearr_33959_33986[(2)] = inst_33941);

(statearr_33959_33986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (6))){
var state_33952__$1 = state_33952;
var statearr_33960_33987 = state_33952__$1;
(statearr_33960_33987[(2)] = null);

(statearr_33960_33987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (3))){
var inst_33950 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33952__$1,inst_33950);
} else {
if((state_val_33953 === (12))){
var inst_33938 = (state_33952[(8)]);
var inst_33938__$1 = (state_33952[(2)]);
var inst_33939 = cljs.core.some(cljs.core.nil_QMARK_,inst_33938__$1);
var state_33952__$1 = (function (){var statearr_33961 = state_33952;
(statearr_33961[(8)] = inst_33938__$1);

return statearr_33961;
})();
if(cljs.core.truth_(inst_33939)){
var statearr_33962_33988 = state_33952__$1;
(statearr_33962_33988[(1)] = (13));

} else {
var statearr_33963_33989 = state_33952__$1;
(statearr_33963_33989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (2))){
var inst_33915 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33916 = (0);
var state_33952__$1 = (function (){var statearr_33964 = state_33952;
(statearr_33964[(7)] = inst_33916);

(statearr_33964[(9)] = inst_33915);

return statearr_33964;
})();
var statearr_33965_33990 = state_33952__$1;
(statearr_33965_33990[(2)] = null);

(statearr_33965_33990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (11))){
var inst_33916 = (state_33952[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33952,(10),Object,null,(9));
var inst_33925 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33916) : chs__$1.call(null,inst_33916));
var inst_33926 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33916) : done.call(null,inst_33916));
var inst_33927 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33925,inst_33926);
var state_33952__$1 = state_33952;
var statearr_33966_33991 = state_33952__$1;
(statearr_33966_33991[(2)] = inst_33927);


cljs.core.async.impl.ioc_helpers.process_exception(state_33952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (9))){
var inst_33916 = (state_33952[(7)]);
var inst_33929 = (state_33952[(2)]);
var inst_33930 = (inst_33916 + (1));
var inst_33916__$1 = inst_33930;
var state_33952__$1 = (function (){var statearr_33967 = state_33952;
(statearr_33967[(10)] = inst_33929);

(statearr_33967[(7)] = inst_33916__$1);

return statearr_33967;
})();
var statearr_33968_33992 = state_33952__$1;
(statearr_33968_33992[(2)] = null);

(statearr_33968_33992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (5))){
var inst_33936 = (state_33952[(2)]);
var state_33952__$1 = (function (){var statearr_33969 = state_33952;
(statearr_33969[(11)] = inst_33936);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33952__$1,(12),dchan);
} else {
if((state_val_33953 === (14))){
var inst_33938 = (state_33952[(8)]);
var inst_33943 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33938);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33952__$1,(16),out,inst_33943);
} else {
if((state_val_33953 === (16))){
var inst_33945 = (state_33952[(2)]);
var state_33952__$1 = (function (){var statearr_33970 = state_33952;
(statearr_33970[(12)] = inst_33945);

return statearr_33970;
})();
var statearr_33971_33993 = state_33952__$1;
(statearr_33971_33993[(2)] = null);

(statearr_33971_33993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (10))){
var inst_33920 = (state_33952[(2)]);
var inst_33921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33952__$1 = (function (){var statearr_33972 = state_33952;
(statearr_33972[(13)] = inst_33920);

return statearr_33972;
})();
var statearr_33973_33994 = state_33952__$1;
(statearr_33973_33994[(2)] = inst_33921);


cljs.core.async.impl.ioc_helpers.process_exception(state_33952__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (8))){
var inst_33934 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33974_33995 = state_33952__$1;
(statearr_33974_33995[(2)] = inst_33934);

(statearr_33974_33995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___33980,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32247__auto__,c__32322__auto___33980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_33975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33975[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_33975[(1)] = (1));

return statearr_33975;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_33952){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_33952);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e33976){if((e33976 instanceof Object)){
var ex__32251__auto__ = e33976;
var statearr_33977_33996 = state_33952;
(statearr_33977_33996[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33997 = state_33952;
state_33952 = G__33997;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___33980,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32324__auto__ = (function (){var statearr_33978 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_33978[(6)] = c__32322__auto___33980);

return statearr_33978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___33980,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34000 = arguments.length;
switch (G__34000) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32322__auto___34054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___34054,out){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___34054,out){
return (function (state_34032){
var state_val_34033 = (state_34032[(1)]);
if((state_val_34033 === (7))){
var inst_34012 = (state_34032[(7)]);
var inst_34011 = (state_34032[(8)]);
var inst_34011__$1 = (state_34032[(2)]);
var inst_34012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34011__$1,(0),null);
var inst_34013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34011__$1,(1),null);
var inst_34014 = (inst_34012__$1 == null);
var state_34032__$1 = (function (){var statearr_34034 = state_34032;
(statearr_34034[(7)] = inst_34012__$1);

(statearr_34034[(8)] = inst_34011__$1);

(statearr_34034[(9)] = inst_34013);

return statearr_34034;
})();
if(cljs.core.truth_(inst_34014)){
var statearr_34035_34055 = state_34032__$1;
(statearr_34035_34055[(1)] = (8));

} else {
var statearr_34036_34056 = state_34032__$1;
(statearr_34036_34056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (1))){
var inst_34001 = cljs.core.vec(chs);
var inst_34002 = inst_34001;
var state_34032__$1 = (function (){var statearr_34037 = state_34032;
(statearr_34037[(10)] = inst_34002);

return statearr_34037;
})();
var statearr_34038_34057 = state_34032__$1;
(statearr_34038_34057[(2)] = null);

(statearr_34038_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (4))){
var inst_34002 = (state_34032[(10)]);
var state_34032__$1 = state_34032;
return cljs.core.async.ioc_alts_BANG_(state_34032__$1,(7),inst_34002);
} else {
if((state_val_34033 === (6))){
var inst_34028 = (state_34032[(2)]);
var state_34032__$1 = state_34032;
var statearr_34039_34058 = state_34032__$1;
(statearr_34039_34058[(2)] = inst_34028);

(statearr_34039_34058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (3))){
var inst_34030 = (state_34032[(2)]);
var state_34032__$1 = state_34032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34032__$1,inst_34030);
} else {
if((state_val_34033 === (2))){
var inst_34002 = (state_34032[(10)]);
var inst_34004 = cljs.core.count(inst_34002);
var inst_34005 = (inst_34004 > (0));
var state_34032__$1 = state_34032;
if(cljs.core.truth_(inst_34005)){
var statearr_34041_34059 = state_34032__$1;
(statearr_34041_34059[(1)] = (4));

} else {
var statearr_34042_34060 = state_34032__$1;
(statearr_34042_34060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (11))){
var inst_34002 = (state_34032[(10)]);
var inst_34021 = (state_34032[(2)]);
var tmp34040 = inst_34002;
var inst_34002__$1 = tmp34040;
var state_34032__$1 = (function (){var statearr_34043 = state_34032;
(statearr_34043[(10)] = inst_34002__$1);

(statearr_34043[(11)] = inst_34021);

return statearr_34043;
})();
var statearr_34044_34061 = state_34032__$1;
(statearr_34044_34061[(2)] = null);

(statearr_34044_34061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (9))){
var inst_34012 = (state_34032[(7)]);
var state_34032__$1 = state_34032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34032__$1,(11),out,inst_34012);
} else {
if((state_val_34033 === (5))){
var inst_34026 = cljs.core.async.close_BANG_(out);
var state_34032__$1 = state_34032;
var statearr_34045_34062 = state_34032__$1;
(statearr_34045_34062[(2)] = inst_34026);

(statearr_34045_34062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (10))){
var inst_34024 = (state_34032[(2)]);
var state_34032__$1 = state_34032;
var statearr_34046_34063 = state_34032__$1;
(statearr_34046_34063[(2)] = inst_34024);

(statearr_34046_34063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34033 === (8))){
var inst_34012 = (state_34032[(7)]);
var inst_34002 = (state_34032[(10)]);
var inst_34011 = (state_34032[(8)]);
var inst_34013 = (state_34032[(9)]);
var inst_34016 = (function (){var cs = inst_34002;
var vec__34007 = inst_34011;
var v = inst_34012;
var c = inst_34013;
return ((function (cs,vec__34007,v,c,inst_34012,inst_34002,inst_34011,inst_34013,state_val_34033,c__32322__auto___34054,out){
return (function (p1__33998_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33998_SHARP_);
});
;})(cs,vec__34007,v,c,inst_34012,inst_34002,inst_34011,inst_34013,state_val_34033,c__32322__auto___34054,out))
})();
var inst_34017 = cljs.core.filterv(inst_34016,inst_34002);
var inst_34002__$1 = inst_34017;
var state_34032__$1 = (function (){var statearr_34047 = state_34032;
(statearr_34047[(10)] = inst_34002__$1);

return statearr_34047;
})();
var statearr_34048_34064 = state_34032__$1;
(statearr_34048_34064[(2)] = null);

(statearr_34048_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___34054,out))
;
return ((function (switch__32247__auto__,c__32322__auto___34054,out){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_34049 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34049[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_34049[(1)] = (1));

return statearr_34049;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_34032){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34032);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34050){if((e34050 instanceof Object)){
var ex__32251__auto__ = e34050;
var statearr_34051_34065 = state_34032;
(statearr_34051_34065[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34066 = state_34032;
state_34032 = G__34066;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_34032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_34032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___34054,out))
})();
var state__32324__auto__ = (function (){var statearr_34052 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34052[(6)] = c__32322__auto___34054);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___34054,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34068 = arguments.length;
switch (G__34068) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32322__auto___34113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___34113,out){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___34113,out){
return (function (state_34092){
var state_val_34093 = (state_34092[(1)]);
if((state_val_34093 === (7))){
var inst_34074 = (state_34092[(7)]);
var inst_34074__$1 = (state_34092[(2)]);
var inst_34075 = (inst_34074__$1 == null);
var inst_34076 = cljs.core.not(inst_34075);
var state_34092__$1 = (function (){var statearr_34094 = state_34092;
(statearr_34094[(7)] = inst_34074__$1);

return statearr_34094;
})();
if(inst_34076){
var statearr_34095_34114 = state_34092__$1;
(statearr_34095_34114[(1)] = (8));

} else {
var statearr_34096_34115 = state_34092__$1;
(statearr_34096_34115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (1))){
var inst_34069 = (0);
var state_34092__$1 = (function (){var statearr_34097 = state_34092;
(statearr_34097[(8)] = inst_34069);

return statearr_34097;
})();
var statearr_34098_34116 = state_34092__$1;
(statearr_34098_34116[(2)] = null);

(statearr_34098_34116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (4))){
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34092__$1,(7),ch);
} else {
if((state_val_34093 === (6))){
var inst_34087 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34099_34117 = state_34092__$1;
(statearr_34099_34117[(2)] = inst_34087);

(statearr_34099_34117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (3))){
var inst_34089 = (state_34092[(2)]);
var inst_34090 = cljs.core.async.close_BANG_(out);
var state_34092__$1 = (function (){var statearr_34100 = state_34092;
(statearr_34100[(9)] = inst_34089);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34092__$1,inst_34090);
} else {
if((state_val_34093 === (2))){
var inst_34069 = (state_34092[(8)]);
var inst_34071 = (inst_34069 < n);
var state_34092__$1 = state_34092;
if(cljs.core.truth_(inst_34071)){
var statearr_34101_34118 = state_34092__$1;
(statearr_34101_34118[(1)] = (4));

} else {
var statearr_34102_34119 = state_34092__$1;
(statearr_34102_34119[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (11))){
var inst_34069 = (state_34092[(8)]);
var inst_34079 = (state_34092[(2)]);
var inst_34080 = (inst_34069 + (1));
var inst_34069__$1 = inst_34080;
var state_34092__$1 = (function (){var statearr_34103 = state_34092;
(statearr_34103[(10)] = inst_34079);

(statearr_34103[(8)] = inst_34069__$1);

return statearr_34103;
})();
var statearr_34104_34120 = state_34092__$1;
(statearr_34104_34120[(2)] = null);

(statearr_34104_34120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (9))){
var state_34092__$1 = state_34092;
var statearr_34105_34121 = state_34092__$1;
(statearr_34105_34121[(2)] = null);

(statearr_34105_34121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (5))){
var state_34092__$1 = state_34092;
var statearr_34106_34122 = state_34092__$1;
(statearr_34106_34122[(2)] = null);

(statearr_34106_34122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (10))){
var inst_34084 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34107_34123 = state_34092__$1;
(statearr_34107_34123[(2)] = inst_34084);

(statearr_34107_34123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (8))){
var inst_34074 = (state_34092[(7)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34092__$1,(11),out,inst_34074);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___34113,out))
;
return ((function (switch__32247__auto__,c__32322__auto___34113,out){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_34108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34108[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_34108[(1)] = (1));

return statearr_34108;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_34092){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34092);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34109){if((e34109 instanceof Object)){
var ex__32251__auto__ = e34109;
var statearr_34110_34124 = state_34092;
(statearr_34110_34124[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34125 = state_34092;
state_34092 = G__34125;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_34092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_34092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___34113,out))
})();
var state__32324__auto__ = (function (){var statearr_34111 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34111[(6)] = c__32322__auto___34113);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___34113,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34127 = (function (f,ch,meta34128){
this.f = f;
this.ch = ch;
this.meta34128 = meta34128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34129,meta34128__$1){
var self__ = this;
var _34129__$1 = this;
return (new cljs.core.async.t_cljs$core$async34127(self__.f,self__.ch,meta34128__$1));
});

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34129){
var self__ = this;
var _34129__$1 = this;
return self__.meta34128;
});

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34130 = (function (f,ch,meta34128,_,fn1,meta34131){
this.f = f;
this.ch = ch;
this.meta34128 = meta34128;
this._ = _;
this.fn1 = fn1;
this.meta34131 = meta34131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34132,meta34131__$1){
var self__ = this;
var _34132__$1 = this;
return (new cljs.core.async.t_cljs$core$async34130(self__.f,self__.ch,self__.meta34128,self__._,self__.fn1,meta34131__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34132){
var self__ = this;
var _34132__$1 = this;
return self__.meta34131;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34126_SHARP_){
var G__34133 = (((p1__34126_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34126_SHARP_) : self__.f.call(null,p1__34126_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34133) : f1.call(null,G__34133));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34130.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34128","meta34128",1103295078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34127","cljs.core.async/t_cljs$core$async34127",1617983749,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34131","meta34131",-1368441011,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34130";

cljs.core.async.t_cljs$core$async34130.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async34130");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34130.
 */
cljs.core.async.__GT_t_cljs$core$async34130 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34130(f__$1,ch__$1,meta34128__$1,___$2,fn1__$1,meta34131){
return (new cljs.core.async.t_cljs$core$async34130(f__$1,ch__$1,meta34128__$1,___$2,fn1__$1,meta34131));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34130(self__.f,self__.ch,self__.meta34128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34134 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34134) : self__.f.call(null,G__34134));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34128","meta34128",1103295078,null)], null);
});

cljs.core.async.t_cljs$core$async34127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34127";

cljs.core.async.t_cljs$core$async34127.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async34127");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34127.
 */
cljs.core.async.__GT_t_cljs$core$async34127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34127(f__$1,ch__$1,meta34128){
return (new cljs.core.async.t_cljs$core$async34127(f__$1,ch__$1,meta34128));
});

}

return (new cljs.core.async.t_cljs$core$async34127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34135 = (function (f,ch,meta34136){
this.f = f;
this.ch = ch;
this.meta34136 = meta34136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34137,meta34136__$1){
var self__ = this;
var _34137__$1 = this;
return (new cljs.core.async.t_cljs$core$async34135(self__.f,self__.ch,meta34136__$1));
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34137){
var self__ = this;
var _34137__$1 = this;
return self__.meta34136;
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34136","meta34136",-1189709418,null)], null);
});

cljs.core.async.t_cljs$core$async34135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34135";

cljs.core.async.t_cljs$core$async34135.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async34135");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34135.
 */
cljs.core.async.__GT_t_cljs$core$async34135 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34135(f__$1,ch__$1,meta34136){
return (new cljs.core.async.t_cljs$core$async34135(f__$1,ch__$1,meta34136));
});

}

return (new cljs.core.async.t_cljs$core$async34135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34138 = (function (p,ch,meta34139){
this.p = p;
this.ch = ch;
this.meta34139 = meta34139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34140,meta34139__$1){
var self__ = this;
var _34140__$1 = this;
return (new cljs.core.async.t_cljs$core$async34138(self__.p,self__.ch,meta34139__$1));
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34140){
var self__ = this;
var _34140__$1 = this;
return self__.meta34139;
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34139","meta34139",-994751288,null)], null);
});

cljs.core.async.t_cljs$core$async34138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34138";

cljs.core.async.t_cljs$core$async34138.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write(writer__4180__auto__,"cljs.core.async/t_cljs$core$async34138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34138.
 */
cljs.core.async.__GT_t_cljs$core$async34138 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34138(p__$1,ch__$1,meta34139){
return (new cljs.core.async.t_cljs$core$async34138(p__$1,ch__$1,meta34139));
});

}

return (new cljs.core.async.t_cljs$core$async34138(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34142 = arguments.length;
switch (G__34142) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32322__auto___34182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___34182,out){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___34182,out){
return (function (state_34163){
var state_val_34164 = (state_34163[(1)]);
if((state_val_34164 === (7))){
var inst_34159 = (state_34163[(2)]);
var state_34163__$1 = state_34163;
var statearr_34165_34183 = state_34163__$1;
(statearr_34165_34183[(2)] = inst_34159);

(statearr_34165_34183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (1))){
var state_34163__$1 = state_34163;
var statearr_34166_34184 = state_34163__$1;
(statearr_34166_34184[(2)] = null);

(statearr_34166_34184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (4))){
var inst_34145 = (state_34163[(7)]);
var inst_34145__$1 = (state_34163[(2)]);
var inst_34146 = (inst_34145__$1 == null);
var state_34163__$1 = (function (){var statearr_34167 = state_34163;
(statearr_34167[(7)] = inst_34145__$1);

return statearr_34167;
})();
if(cljs.core.truth_(inst_34146)){
var statearr_34168_34185 = state_34163__$1;
(statearr_34168_34185[(1)] = (5));

} else {
var statearr_34169_34186 = state_34163__$1;
(statearr_34169_34186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (6))){
var inst_34145 = (state_34163[(7)]);
var inst_34150 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34145) : p.call(null,inst_34145));
var state_34163__$1 = state_34163;
if(cljs.core.truth_(inst_34150)){
var statearr_34170_34187 = state_34163__$1;
(statearr_34170_34187[(1)] = (8));

} else {
var statearr_34171_34188 = state_34163__$1;
(statearr_34171_34188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (3))){
var inst_34161 = (state_34163[(2)]);
var state_34163__$1 = state_34163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34163__$1,inst_34161);
} else {
if((state_val_34164 === (2))){
var state_34163__$1 = state_34163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34163__$1,(4),ch);
} else {
if((state_val_34164 === (11))){
var inst_34153 = (state_34163[(2)]);
var state_34163__$1 = state_34163;
var statearr_34172_34189 = state_34163__$1;
(statearr_34172_34189[(2)] = inst_34153);

(statearr_34172_34189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (9))){
var state_34163__$1 = state_34163;
var statearr_34173_34190 = state_34163__$1;
(statearr_34173_34190[(2)] = null);

(statearr_34173_34190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (5))){
var inst_34148 = cljs.core.async.close_BANG_(out);
var state_34163__$1 = state_34163;
var statearr_34174_34191 = state_34163__$1;
(statearr_34174_34191[(2)] = inst_34148);

(statearr_34174_34191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (10))){
var inst_34156 = (state_34163[(2)]);
var state_34163__$1 = (function (){var statearr_34175 = state_34163;
(statearr_34175[(8)] = inst_34156);

return statearr_34175;
})();
var statearr_34176_34192 = state_34163__$1;
(statearr_34176_34192[(2)] = null);

(statearr_34176_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34164 === (8))){
var inst_34145 = (state_34163[(7)]);
var state_34163__$1 = state_34163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34163__$1,(11),out,inst_34145);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___34182,out))
;
return ((function (switch__32247__auto__,c__32322__auto___34182,out){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_34177 = [null,null,null,null,null,null,null,null,null];
(statearr_34177[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_34177[(1)] = (1));

return statearr_34177;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_34163){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34163);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34178){if((e34178 instanceof Object)){
var ex__32251__auto__ = e34178;
var statearr_34179_34193 = state_34163;
(statearr_34179_34193[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_34163;
state_34163 = G__34194;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_34163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_34163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___34182,out))
})();
var state__32324__auto__ = (function (){var statearr_34180 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34180[(6)] = c__32322__auto___34182);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___34182,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34196 = arguments.length;
switch (G__34196) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32322__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto__){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto__){
return (function (state_34259){
var state_val_34260 = (state_34259[(1)]);
if((state_val_34260 === (7))){
var inst_34255 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34261_34299 = state_34259__$1;
(statearr_34261_34299[(2)] = inst_34255);

(statearr_34261_34299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (20))){
var inst_34225 = (state_34259[(7)]);
var inst_34236 = (state_34259[(2)]);
var inst_34237 = cljs.core.next(inst_34225);
var inst_34211 = inst_34237;
var inst_34212 = null;
var inst_34213 = (0);
var inst_34214 = (0);
var state_34259__$1 = (function (){var statearr_34262 = state_34259;
(statearr_34262[(8)] = inst_34211);

(statearr_34262[(9)] = inst_34236);

(statearr_34262[(10)] = inst_34213);

(statearr_34262[(11)] = inst_34212);

(statearr_34262[(12)] = inst_34214);

return statearr_34262;
})();
var statearr_34263_34300 = state_34259__$1;
(statearr_34263_34300[(2)] = null);

(statearr_34263_34300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (1))){
var state_34259__$1 = state_34259;
var statearr_34264_34301 = state_34259__$1;
(statearr_34264_34301[(2)] = null);

(statearr_34264_34301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (4))){
var inst_34200 = (state_34259[(13)]);
var inst_34200__$1 = (state_34259[(2)]);
var inst_34201 = (inst_34200__$1 == null);
var state_34259__$1 = (function (){var statearr_34265 = state_34259;
(statearr_34265[(13)] = inst_34200__$1);

return statearr_34265;
})();
if(cljs.core.truth_(inst_34201)){
var statearr_34266_34302 = state_34259__$1;
(statearr_34266_34302[(1)] = (5));

} else {
var statearr_34267_34303 = state_34259__$1;
(statearr_34267_34303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (15))){
var state_34259__$1 = state_34259;
var statearr_34271_34304 = state_34259__$1;
(statearr_34271_34304[(2)] = null);

(statearr_34271_34304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (21))){
var state_34259__$1 = state_34259;
var statearr_34272_34305 = state_34259__$1;
(statearr_34272_34305[(2)] = null);

(statearr_34272_34305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (13))){
var inst_34211 = (state_34259[(8)]);
var inst_34213 = (state_34259[(10)]);
var inst_34212 = (state_34259[(11)]);
var inst_34214 = (state_34259[(12)]);
var inst_34221 = (state_34259[(2)]);
var inst_34222 = (inst_34214 + (1));
var tmp34268 = inst_34211;
var tmp34269 = inst_34213;
var tmp34270 = inst_34212;
var inst_34211__$1 = tmp34268;
var inst_34212__$1 = tmp34270;
var inst_34213__$1 = tmp34269;
var inst_34214__$1 = inst_34222;
var state_34259__$1 = (function (){var statearr_34273 = state_34259;
(statearr_34273[(14)] = inst_34221);

(statearr_34273[(8)] = inst_34211__$1);

(statearr_34273[(10)] = inst_34213__$1);

(statearr_34273[(11)] = inst_34212__$1);

(statearr_34273[(12)] = inst_34214__$1);

return statearr_34273;
})();
var statearr_34274_34306 = state_34259__$1;
(statearr_34274_34306[(2)] = null);

(statearr_34274_34306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (22))){
var state_34259__$1 = state_34259;
var statearr_34275_34307 = state_34259__$1;
(statearr_34275_34307[(2)] = null);

(statearr_34275_34307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (6))){
var inst_34200 = (state_34259[(13)]);
var inst_34209 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34200) : f.call(null,inst_34200));
var inst_34210 = cljs.core.seq(inst_34209);
var inst_34211 = inst_34210;
var inst_34212 = null;
var inst_34213 = (0);
var inst_34214 = (0);
var state_34259__$1 = (function (){var statearr_34276 = state_34259;
(statearr_34276[(8)] = inst_34211);

(statearr_34276[(10)] = inst_34213);

(statearr_34276[(11)] = inst_34212);

(statearr_34276[(12)] = inst_34214);

return statearr_34276;
})();
var statearr_34277_34308 = state_34259__$1;
(statearr_34277_34308[(2)] = null);

(statearr_34277_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (17))){
var inst_34225 = (state_34259[(7)]);
var inst_34229 = cljs.core.chunk_first(inst_34225);
var inst_34230 = cljs.core.chunk_rest(inst_34225);
var inst_34231 = cljs.core.count(inst_34229);
var inst_34211 = inst_34230;
var inst_34212 = inst_34229;
var inst_34213 = inst_34231;
var inst_34214 = (0);
var state_34259__$1 = (function (){var statearr_34278 = state_34259;
(statearr_34278[(8)] = inst_34211);

(statearr_34278[(10)] = inst_34213);

(statearr_34278[(11)] = inst_34212);

(statearr_34278[(12)] = inst_34214);

return statearr_34278;
})();
var statearr_34279_34309 = state_34259__$1;
(statearr_34279_34309[(2)] = null);

(statearr_34279_34309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (3))){
var inst_34257 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34259__$1,inst_34257);
} else {
if((state_val_34260 === (12))){
var inst_34245 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34280_34310 = state_34259__$1;
(statearr_34280_34310[(2)] = inst_34245);

(statearr_34280_34310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (2))){
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34259__$1,(4),in$);
} else {
if((state_val_34260 === (23))){
var inst_34253 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34281_34311 = state_34259__$1;
(statearr_34281_34311[(2)] = inst_34253);

(statearr_34281_34311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (19))){
var inst_34240 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34282_34312 = state_34259__$1;
(statearr_34282_34312[(2)] = inst_34240);

(statearr_34282_34312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (11))){
var inst_34211 = (state_34259[(8)]);
var inst_34225 = (state_34259[(7)]);
var inst_34225__$1 = cljs.core.seq(inst_34211);
var state_34259__$1 = (function (){var statearr_34283 = state_34259;
(statearr_34283[(7)] = inst_34225__$1);

return statearr_34283;
})();
if(inst_34225__$1){
var statearr_34284_34313 = state_34259__$1;
(statearr_34284_34313[(1)] = (14));

} else {
var statearr_34285_34314 = state_34259__$1;
(statearr_34285_34314[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (9))){
var inst_34247 = (state_34259[(2)]);
var inst_34248 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34259__$1 = (function (){var statearr_34286 = state_34259;
(statearr_34286[(15)] = inst_34247);

return statearr_34286;
})();
if(cljs.core.truth_(inst_34248)){
var statearr_34287_34315 = state_34259__$1;
(statearr_34287_34315[(1)] = (21));

} else {
var statearr_34288_34316 = state_34259__$1;
(statearr_34288_34316[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (5))){
var inst_34203 = cljs.core.async.close_BANG_(out);
var state_34259__$1 = state_34259;
var statearr_34289_34317 = state_34259__$1;
(statearr_34289_34317[(2)] = inst_34203);

(statearr_34289_34317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (14))){
var inst_34225 = (state_34259[(7)]);
var inst_34227 = cljs.core.chunked_seq_QMARK_(inst_34225);
var state_34259__$1 = state_34259;
if(inst_34227){
var statearr_34290_34318 = state_34259__$1;
(statearr_34290_34318[(1)] = (17));

} else {
var statearr_34291_34319 = state_34259__$1;
(statearr_34291_34319[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (16))){
var inst_34243 = (state_34259[(2)]);
var state_34259__$1 = state_34259;
var statearr_34292_34320 = state_34259__$1;
(statearr_34292_34320[(2)] = inst_34243);

(statearr_34292_34320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34260 === (10))){
var inst_34212 = (state_34259[(11)]);
var inst_34214 = (state_34259[(12)]);
var inst_34219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34212,inst_34214);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34259__$1,(13),out,inst_34219);
} else {
if((state_val_34260 === (18))){
var inst_34225 = (state_34259[(7)]);
var inst_34234 = cljs.core.first(inst_34225);
var state_34259__$1 = state_34259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34259__$1,(20),out,inst_34234);
} else {
if((state_val_34260 === (8))){
var inst_34213 = (state_34259[(10)]);
var inst_34214 = (state_34259[(12)]);
var inst_34216 = (inst_34214 < inst_34213);
var inst_34217 = inst_34216;
var state_34259__$1 = state_34259;
if(cljs.core.truth_(inst_34217)){
var statearr_34293_34321 = state_34259__$1;
(statearr_34293_34321[(1)] = (10));

} else {
var statearr_34294_34322 = state_34259__$1;
(statearr_34294_34322[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto__))
;
return ((function (switch__32247__auto__,c__32322__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32248__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32248__auto____0 = (function (){
var statearr_34295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32248__auto__);

(statearr_34295[(1)] = (1));

return statearr_34295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32248__auto____1 = (function (state_34259){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34259);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34296){if((e34296 instanceof Object)){
var ex__32251__auto__ = e34296;
var statearr_34297_34323 = state_34259;
(statearr_34297_34323[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34324 = state_34259;
state_34259 = G__34324;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32248__auto__ = function(state_34259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32248__auto____1.call(this,state_34259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32248__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32248__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto__))
})();
var state__32324__auto__ = (function (){var statearr_34298 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34298[(6)] = c__32322__auto__);

return statearr_34298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto__))
);

return c__32322__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34326 = arguments.length;
switch (G__34326) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34329 = arguments.length;
switch (G__34329) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34332 = arguments.length;
switch (G__34332) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32322__auto___34379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___34379,out){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___34379,out){
return (function (state_34356){
var state_val_34357 = (state_34356[(1)]);
if((state_val_34357 === (7))){
var inst_34351 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34358_34380 = state_34356__$1;
(statearr_34358_34380[(2)] = inst_34351);

(statearr_34358_34380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (1))){
var inst_34333 = null;
var state_34356__$1 = (function (){var statearr_34359 = state_34356;
(statearr_34359[(7)] = inst_34333);

return statearr_34359;
})();
var statearr_34360_34381 = state_34356__$1;
(statearr_34360_34381[(2)] = null);

(statearr_34360_34381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (4))){
var inst_34336 = (state_34356[(8)]);
var inst_34336__$1 = (state_34356[(2)]);
var inst_34337 = (inst_34336__$1 == null);
var inst_34338 = cljs.core.not(inst_34337);
var state_34356__$1 = (function (){var statearr_34361 = state_34356;
(statearr_34361[(8)] = inst_34336__$1);

return statearr_34361;
})();
if(inst_34338){
var statearr_34362_34382 = state_34356__$1;
(statearr_34362_34382[(1)] = (5));

} else {
var statearr_34363_34383 = state_34356__$1;
(statearr_34363_34383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (6))){
var state_34356__$1 = state_34356;
var statearr_34364_34384 = state_34356__$1;
(statearr_34364_34384[(2)] = null);

(statearr_34364_34384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (3))){
var inst_34353 = (state_34356[(2)]);
var inst_34354 = cljs.core.async.close_BANG_(out);
var state_34356__$1 = (function (){var statearr_34365 = state_34356;
(statearr_34365[(9)] = inst_34353);

return statearr_34365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34356__$1,inst_34354);
} else {
if((state_val_34357 === (2))){
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34356__$1,(4),ch);
} else {
if((state_val_34357 === (11))){
var inst_34336 = (state_34356[(8)]);
var inst_34345 = (state_34356[(2)]);
var inst_34333 = inst_34336;
var state_34356__$1 = (function (){var statearr_34366 = state_34356;
(statearr_34366[(10)] = inst_34345);

(statearr_34366[(7)] = inst_34333);

return statearr_34366;
})();
var statearr_34367_34385 = state_34356__$1;
(statearr_34367_34385[(2)] = null);

(statearr_34367_34385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (9))){
var inst_34336 = (state_34356[(8)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34356__$1,(11),out,inst_34336);
} else {
if((state_val_34357 === (5))){
var inst_34336 = (state_34356[(8)]);
var inst_34333 = (state_34356[(7)]);
var inst_34340 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34336,inst_34333);
var state_34356__$1 = state_34356;
if(inst_34340){
var statearr_34369_34386 = state_34356__$1;
(statearr_34369_34386[(1)] = (8));

} else {
var statearr_34370_34387 = state_34356__$1;
(statearr_34370_34387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (10))){
var inst_34348 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34371_34388 = state_34356__$1;
(statearr_34371_34388[(2)] = inst_34348);

(statearr_34371_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (8))){
var inst_34333 = (state_34356[(7)]);
var tmp34368 = inst_34333;
var inst_34333__$1 = tmp34368;
var state_34356__$1 = (function (){var statearr_34372 = state_34356;
(statearr_34372[(7)] = inst_34333__$1);

return statearr_34372;
})();
var statearr_34373_34389 = state_34356__$1;
(statearr_34373_34389[(2)] = null);

(statearr_34373_34389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___34379,out))
;
return ((function (switch__32247__auto__,c__32322__auto___34379,out){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_34374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34374[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_34374[(1)] = (1));

return statearr_34374;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_34356){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34356);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34375){if((e34375 instanceof Object)){
var ex__32251__auto__ = e34375;
var statearr_34376_34390 = state_34356;
(statearr_34376_34390[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34391 = state_34356;
state_34356 = G__34391;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_34356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_34356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___34379,out))
})();
var state__32324__auto__ = (function (){var statearr_34377 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34377[(6)] = c__32322__auto___34379);

return statearr_34377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___34379,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34393 = arguments.length;
switch (G__34393) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32322__auto___34459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___34459,out){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___34459,out){
return (function (state_34431){
var state_val_34432 = (state_34431[(1)]);
if((state_val_34432 === (7))){
var inst_34427 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34433_34460 = state_34431__$1;
(statearr_34433_34460[(2)] = inst_34427);

(statearr_34433_34460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (1))){
var inst_34394 = (new Array(n));
var inst_34395 = inst_34394;
var inst_34396 = (0);
var state_34431__$1 = (function (){var statearr_34434 = state_34431;
(statearr_34434[(7)] = inst_34395);

(statearr_34434[(8)] = inst_34396);

return statearr_34434;
})();
var statearr_34435_34461 = state_34431__$1;
(statearr_34435_34461[(2)] = null);

(statearr_34435_34461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (4))){
var inst_34399 = (state_34431[(9)]);
var inst_34399__$1 = (state_34431[(2)]);
var inst_34400 = (inst_34399__$1 == null);
var inst_34401 = cljs.core.not(inst_34400);
var state_34431__$1 = (function (){var statearr_34436 = state_34431;
(statearr_34436[(9)] = inst_34399__$1);

return statearr_34436;
})();
if(inst_34401){
var statearr_34437_34462 = state_34431__$1;
(statearr_34437_34462[(1)] = (5));

} else {
var statearr_34438_34463 = state_34431__$1;
(statearr_34438_34463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (15))){
var inst_34421 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34439_34464 = state_34431__$1;
(statearr_34439_34464[(2)] = inst_34421);

(statearr_34439_34464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (13))){
var state_34431__$1 = state_34431;
var statearr_34440_34465 = state_34431__$1;
(statearr_34440_34465[(2)] = null);

(statearr_34440_34465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (6))){
var inst_34396 = (state_34431[(8)]);
var inst_34417 = (inst_34396 > (0));
var state_34431__$1 = state_34431;
if(cljs.core.truth_(inst_34417)){
var statearr_34441_34466 = state_34431__$1;
(statearr_34441_34466[(1)] = (12));

} else {
var statearr_34442_34467 = state_34431__$1;
(statearr_34442_34467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (3))){
var inst_34429 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34431__$1,inst_34429);
} else {
if((state_val_34432 === (12))){
var inst_34395 = (state_34431[(7)]);
var inst_34419 = cljs.core.vec(inst_34395);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34431__$1,(15),out,inst_34419);
} else {
if((state_val_34432 === (2))){
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34431__$1,(4),ch);
} else {
if((state_val_34432 === (11))){
var inst_34411 = (state_34431[(2)]);
var inst_34412 = (new Array(n));
var inst_34395 = inst_34412;
var inst_34396 = (0);
var state_34431__$1 = (function (){var statearr_34443 = state_34431;
(statearr_34443[(10)] = inst_34411);

(statearr_34443[(7)] = inst_34395);

(statearr_34443[(8)] = inst_34396);

return statearr_34443;
})();
var statearr_34444_34468 = state_34431__$1;
(statearr_34444_34468[(2)] = null);

(statearr_34444_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (9))){
var inst_34395 = (state_34431[(7)]);
var inst_34409 = cljs.core.vec(inst_34395);
var state_34431__$1 = state_34431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34431__$1,(11),out,inst_34409);
} else {
if((state_val_34432 === (5))){
var inst_34395 = (state_34431[(7)]);
var inst_34396 = (state_34431[(8)]);
var inst_34399 = (state_34431[(9)]);
var inst_34404 = (state_34431[(11)]);
var inst_34403 = (inst_34395[inst_34396] = inst_34399);
var inst_34404__$1 = (inst_34396 + (1));
var inst_34405 = (inst_34404__$1 < n);
var state_34431__$1 = (function (){var statearr_34445 = state_34431;
(statearr_34445[(12)] = inst_34403);

(statearr_34445[(11)] = inst_34404__$1);

return statearr_34445;
})();
if(cljs.core.truth_(inst_34405)){
var statearr_34446_34469 = state_34431__$1;
(statearr_34446_34469[(1)] = (8));

} else {
var statearr_34447_34470 = state_34431__$1;
(statearr_34447_34470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (14))){
var inst_34424 = (state_34431[(2)]);
var inst_34425 = cljs.core.async.close_BANG_(out);
var state_34431__$1 = (function (){var statearr_34449 = state_34431;
(statearr_34449[(13)] = inst_34424);

return statearr_34449;
})();
var statearr_34450_34471 = state_34431__$1;
(statearr_34450_34471[(2)] = inst_34425);

(statearr_34450_34471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (10))){
var inst_34415 = (state_34431[(2)]);
var state_34431__$1 = state_34431;
var statearr_34451_34472 = state_34431__$1;
(statearr_34451_34472[(2)] = inst_34415);

(statearr_34451_34472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34432 === (8))){
var inst_34395 = (state_34431[(7)]);
var inst_34404 = (state_34431[(11)]);
var tmp34448 = inst_34395;
var inst_34395__$1 = tmp34448;
var inst_34396 = inst_34404;
var state_34431__$1 = (function (){var statearr_34452 = state_34431;
(statearr_34452[(7)] = inst_34395__$1);

(statearr_34452[(8)] = inst_34396);

return statearr_34452;
})();
var statearr_34453_34473 = state_34431__$1;
(statearr_34453_34473[(2)] = null);

(statearr_34453_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___34459,out))
;
return ((function (switch__32247__auto__,c__32322__auto___34459,out){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_34454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34454[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_34454[(1)] = (1));

return statearr_34454;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_34431){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34431);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object)){
var ex__32251__auto__ = e34455;
var statearr_34456_34474 = state_34431;
(statearr_34456_34474[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34475 = state_34431;
state_34431 = G__34475;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_34431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_34431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___34459,out))
})();
var state__32324__auto__ = (function (){var statearr_34457 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34457[(6)] = c__32322__auto___34459);

return statearr_34457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___34459,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34477 = arguments.length;
switch (G__34477) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32322__auto___34547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32322__auto___34547,out){
return (function (){
var f__32323__auto__ = (function (){var switch__32247__auto__ = ((function (c__32322__auto___34547,out){
return (function (state_34519){
var state_val_34520 = (state_34519[(1)]);
if((state_val_34520 === (7))){
var inst_34515 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34521_34548 = state_34519__$1;
(statearr_34521_34548[(2)] = inst_34515);

(statearr_34521_34548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (1))){
var inst_34478 = [];
var inst_34479 = inst_34478;
var inst_34480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34519__$1 = (function (){var statearr_34522 = state_34519;
(statearr_34522[(7)] = inst_34479);

(statearr_34522[(8)] = inst_34480);

return statearr_34522;
})();
var statearr_34523_34549 = state_34519__$1;
(statearr_34523_34549[(2)] = null);

(statearr_34523_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (4))){
var inst_34483 = (state_34519[(9)]);
var inst_34483__$1 = (state_34519[(2)]);
var inst_34484 = (inst_34483__$1 == null);
var inst_34485 = cljs.core.not(inst_34484);
var state_34519__$1 = (function (){var statearr_34524 = state_34519;
(statearr_34524[(9)] = inst_34483__$1);

return statearr_34524;
})();
if(inst_34485){
var statearr_34525_34550 = state_34519__$1;
(statearr_34525_34550[(1)] = (5));

} else {
var statearr_34526_34551 = state_34519__$1;
(statearr_34526_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (15))){
var inst_34509 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34527_34552 = state_34519__$1;
(statearr_34527_34552[(2)] = inst_34509);

(statearr_34527_34552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (13))){
var state_34519__$1 = state_34519;
var statearr_34528_34553 = state_34519__$1;
(statearr_34528_34553[(2)] = null);

(statearr_34528_34553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (6))){
var inst_34479 = (state_34519[(7)]);
var inst_34504 = inst_34479.length;
var inst_34505 = (inst_34504 > (0));
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34505)){
var statearr_34529_34554 = state_34519__$1;
(statearr_34529_34554[(1)] = (12));

} else {
var statearr_34530_34555 = state_34519__$1;
(statearr_34530_34555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (3))){
var inst_34517 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34519__$1,inst_34517);
} else {
if((state_val_34520 === (12))){
var inst_34479 = (state_34519[(7)]);
var inst_34507 = cljs.core.vec(inst_34479);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34519__$1,(15),out,inst_34507);
} else {
if((state_val_34520 === (2))){
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34519__$1,(4),ch);
} else {
if((state_val_34520 === (11))){
var inst_34483 = (state_34519[(9)]);
var inst_34487 = (state_34519[(10)]);
var inst_34497 = (state_34519[(2)]);
var inst_34498 = [];
var inst_34499 = inst_34498.push(inst_34483);
var inst_34479 = inst_34498;
var inst_34480 = inst_34487;
var state_34519__$1 = (function (){var statearr_34531 = state_34519;
(statearr_34531[(11)] = inst_34499);

(statearr_34531[(12)] = inst_34497);

(statearr_34531[(7)] = inst_34479);

(statearr_34531[(8)] = inst_34480);

return statearr_34531;
})();
var statearr_34532_34556 = state_34519__$1;
(statearr_34532_34556[(2)] = null);

(statearr_34532_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (9))){
var inst_34479 = (state_34519[(7)]);
var inst_34495 = cljs.core.vec(inst_34479);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34519__$1,(11),out,inst_34495);
} else {
if((state_val_34520 === (5))){
var inst_34483 = (state_34519[(9)]);
var inst_34487 = (state_34519[(10)]);
var inst_34480 = (state_34519[(8)]);
var inst_34487__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34483) : f.call(null,inst_34483));
var inst_34488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34487__$1,inst_34480);
var inst_34489 = cljs.core.keyword_identical_QMARK_(inst_34480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34490 = ((inst_34488) || (inst_34489));
var state_34519__$1 = (function (){var statearr_34533 = state_34519;
(statearr_34533[(10)] = inst_34487__$1);

return statearr_34533;
})();
if(cljs.core.truth_(inst_34490)){
var statearr_34534_34557 = state_34519__$1;
(statearr_34534_34557[(1)] = (8));

} else {
var statearr_34535_34558 = state_34519__$1;
(statearr_34535_34558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (14))){
var inst_34512 = (state_34519[(2)]);
var inst_34513 = cljs.core.async.close_BANG_(out);
var state_34519__$1 = (function (){var statearr_34537 = state_34519;
(statearr_34537[(13)] = inst_34512);

return statearr_34537;
})();
var statearr_34538_34559 = state_34519__$1;
(statearr_34538_34559[(2)] = inst_34513);

(statearr_34538_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (10))){
var inst_34502 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34539_34560 = state_34519__$1;
(statearr_34539_34560[(2)] = inst_34502);

(statearr_34539_34560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (8))){
var inst_34479 = (state_34519[(7)]);
var inst_34483 = (state_34519[(9)]);
var inst_34487 = (state_34519[(10)]);
var inst_34492 = inst_34479.push(inst_34483);
var tmp34536 = inst_34479;
var inst_34479__$1 = tmp34536;
var inst_34480 = inst_34487;
var state_34519__$1 = (function (){var statearr_34540 = state_34519;
(statearr_34540[(7)] = inst_34479__$1);

(statearr_34540[(14)] = inst_34492);

(statearr_34540[(8)] = inst_34480);

return statearr_34540;
})();
var statearr_34541_34561 = state_34519__$1;
(statearr_34541_34561[(2)] = null);

(statearr_34541_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32322__auto___34547,out))
;
return ((function (switch__32247__auto__,c__32322__auto___34547,out){
return (function() {
var cljs$core$async$state_machine__32248__auto__ = null;
var cljs$core$async$state_machine__32248__auto____0 = (function (){
var statearr_34542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34542[(0)] = cljs$core$async$state_machine__32248__auto__);

(statearr_34542[(1)] = (1));

return statearr_34542;
});
var cljs$core$async$state_machine__32248__auto____1 = (function (state_34519){
while(true){
var ret_value__32249__auto__ = (function (){try{while(true){
var result__32250__auto__ = switch__32247__auto__(state_34519);
if(cljs.core.keyword_identical_QMARK_(result__32250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32250__auto__;
}
break;
}
}catch (e34543){if((e34543 instanceof Object)){
var ex__32251__auto__ = e34543;
var statearr_34544_34562 = state_34519;
(statearr_34544_34562[(5)] = ex__32251__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_34519;
state_34519 = G__34563;
continue;
} else {
return ret_value__32249__auto__;
}
break;
}
});
cljs$core$async$state_machine__32248__auto__ = function(state_34519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32248__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32248__auto____1.call(this,state_34519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32248__auto____0;
cljs$core$async$state_machine__32248__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32248__auto____1;
return cljs$core$async$state_machine__32248__auto__;
})()
;})(switch__32247__auto__,c__32322__auto___34547,out))
})();
var state__32324__auto__ = (function (){var statearr_34545 = (f__32323__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32323__auto__.cljs$core$IFn$_invoke$arity$0() : f__32323__auto__.call(null));
(statearr_34545[(6)] = c__32322__auto___34547);

return statearr_34545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32324__auto__);
});})(c__32322__auto___34547,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
