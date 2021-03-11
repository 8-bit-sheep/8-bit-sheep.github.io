// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15417 = arguments.length;
switch (G__15417) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15418 = (function (f,blockable,meta15419){
this.f = f;
this.blockable = blockable;
this.meta15419 = meta15419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15420,meta15419__$1){
var self__ = this;
var _15420__$1 = this;
return (new cljs.core.async.t_cljs$core$async15418(self__.f,self__.blockable,meta15419__$1));
}));

(cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15420){
var self__ = this;
var _15420__$1 = this;
return self__.meta15419;
}));

(cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15419], null);
}));

(cljs.core.async.t_cljs$core$async15418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15418");

(cljs.core.async.t_cljs$core$async15418.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15418.
 */
cljs.core.async.__GT_t_cljs$core$async15418 = (function cljs$core$async$__GT_t_cljs$core$async15418(f__$1,blockable__$1,meta15419){
return (new cljs.core.async.t_cljs$core$async15418(f__$1,blockable__$1,meta15419));
});

}

return (new cljs.core.async.t_cljs$core$async15418(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
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
var G__15424 = arguments.length;
switch (G__15424) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15427 = arguments.length;
switch (G__15427) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__15430 = arguments.length;
switch (G__15430) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15432 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15432) : fn1.call(null,val_15432));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15432) : fn1.call(null,val_15432));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15434 = arguments.length;
switch (G__15434) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___15436 = n;
var x_15437 = (0);
while(true){
if((x_15437 < n__4613__auto___15436)){
(a[x_15437] = x_15437);

var G__15438 = (x_15437 + (1));
x_15437 = G__15438;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15439 = (function (flag,meta15440){
this.flag = flag;
this.meta15440 = meta15440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15441,meta15440__$1){
var self__ = this;
var _15441__$1 = this;
return (new cljs.core.async.t_cljs$core$async15439(self__.flag,meta15440__$1));
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15441){
var self__ = this;
var _15441__$1 = this;
return self__.meta15440;
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15440], null);
}));

(cljs.core.async.t_cljs$core$async15439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15439");

(cljs.core.async.t_cljs$core$async15439.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15439.
 */
cljs.core.async.__GT_t_cljs$core$async15439 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15439(flag__$1,meta15440){
return (new cljs.core.async.t_cljs$core$async15439(flag__$1,meta15440));
});

}

return (new cljs.core.async.t_cljs$core$async15439(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15442 = (function (flag,cb,meta15443){
this.flag = flag;
this.cb = cb;
this.meta15443 = meta15443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15444,meta15443__$1){
var self__ = this;
var _15444__$1 = this;
return (new cljs.core.async.t_cljs$core$async15442(self__.flag,self__.cb,meta15443__$1));
}));

(cljs.core.async.t_cljs$core$async15442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15444){
var self__ = this;
var _15444__$1 = this;
return self__.meta15443;
}));

(cljs.core.async.t_cljs$core$async15442.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15442.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15443], null);
}));

(cljs.core.async.t_cljs$core$async15442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15442");

(cljs.core.async.t_cljs$core$async15442.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15442.
 */
cljs.core.async.__GT_t_cljs$core$async15442 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15442(flag__$1,cb__$1,meta15443){
return (new cljs.core.async.t_cljs$core$async15442(flag__$1,cb__$1,meta15443));
});

}

return (new cljs.core.async.t_cljs$core$async15442(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15445_SHARP_){
var G__15447 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15445_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15447) : fret.call(null,G__15447));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15446_SHARP_){
var G__15448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15446_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15448) : fret.call(null,G__15448));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15449 = (i + (1));
i = G__15449;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__4742__auto__ = [];
var len__4736__auto___15455 = arguments.length;
var i__4737__auto___15456 = (0);
while(true){
if((i__4737__auto___15456 < len__4736__auto___15455)){
args__4742__auto__.push((arguments[i__4737__auto___15456]));

var G__15457 = (i__4737__auto___15456 + (1));
i__4737__auto___15456 = G__15457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15452){
var map__15453 = p__15452;
var map__15453__$1 = (((((!((map__15453 == null))))?(((((map__15453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15453):map__15453);
var opts = map__15453__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15450){
var G__15451 = cljs.core.first(seq15450);
var seq15450__$1 = cljs.core.next(seq15450);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15451,seq15450__$1);
}));

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
var G__15459 = arguments.length;
switch (G__15459) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13423__auto___15506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15483){
var state_val_15484 = (state_15483[(1)]);
if((state_val_15484 === (7))){
var inst_15479 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15485_15507 = state_15483__$1;
(statearr_15485_15507[(2)] = inst_15479);

(statearr_15485_15507[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (1))){
var state_15483__$1 = state_15483;
var statearr_15486_15508 = state_15483__$1;
(statearr_15486_15508[(2)] = null);

(statearr_15486_15508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (4))){
var inst_15462 = (state_15483[(7)]);
var inst_15462__$1 = (state_15483[(2)]);
var inst_15463 = (inst_15462__$1 == null);
var state_15483__$1 = (function (){var statearr_15487 = state_15483;
(statearr_15487[(7)] = inst_15462__$1);

return statearr_15487;
})();
if(cljs.core.truth_(inst_15463)){
var statearr_15488_15509 = state_15483__$1;
(statearr_15488_15509[(1)] = (5));

} else {
var statearr_15489_15510 = state_15483__$1;
(statearr_15489_15510[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (13))){
var state_15483__$1 = state_15483;
var statearr_15490_15511 = state_15483__$1;
(statearr_15490_15511[(2)] = null);

(statearr_15490_15511[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (6))){
var inst_15462 = (state_15483[(7)]);
var state_15483__$1 = state_15483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15483__$1,(11),to,inst_15462);
} else {
if((state_val_15484 === (3))){
var inst_15481 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15483__$1,inst_15481);
} else {
if((state_val_15484 === (12))){
var state_15483__$1 = state_15483;
var statearr_15491_15512 = state_15483__$1;
(statearr_15491_15512[(2)] = null);

(statearr_15491_15512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (2))){
var state_15483__$1 = state_15483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15483__$1,(4),from);
} else {
if((state_val_15484 === (11))){
var inst_15472 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
if(cljs.core.truth_(inst_15472)){
var statearr_15492_15513 = state_15483__$1;
(statearr_15492_15513[(1)] = (12));

} else {
var statearr_15493_15514 = state_15483__$1;
(statearr_15493_15514[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (9))){
var state_15483__$1 = state_15483;
var statearr_15494_15515 = state_15483__$1;
(statearr_15494_15515[(2)] = null);

(statearr_15494_15515[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (5))){
var state_15483__$1 = state_15483;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15495_15516 = state_15483__$1;
(statearr_15495_15516[(1)] = (8));

} else {
var statearr_15496_15517 = state_15483__$1;
(statearr_15496_15517[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (14))){
var inst_15477 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15497_15518 = state_15483__$1;
(statearr_15497_15518[(2)] = inst_15477);

(statearr_15497_15518[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (10))){
var inst_15469 = (state_15483[(2)]);
var state_15483__$1 = state_15483;
var statearr_15498_15519 = state_15483__$1;
(statearr_15498_15519[(2)] = inst_15469);

(statearr_15498_15519[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15484 === (8))){
var inst_15466 = cljs.core.async.close_BANG_(to);
var state_15483__$1 = state_15483;
var statearr_15499_15520 = state_15483__$1;
(statearr_15499_15520[(2)] = inst_15466);

(statearr_15499_15520[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_15500 = [null,null,null,null,null,null,null,null];
(statearr_15500[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_15500[(1)] = (1));

return statearr_15500;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_15483){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15483);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15501){var ex__13300__auto__ = e15501;
var statearr_15502_15521 = state_15483;
(statearr_15502_15521[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15483[(4)]))){
var statearr_15503_15522 = state_15483;
(statearr_15503_15522[(1)] = cljs.core.first((state_15483[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15523 = state_15483;
state_15483 = G__15523;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_15483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_15483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15504 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15504[(6)] = c__13423__auto___15506);

return statearr_15504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__15524){
var vec__15525 = p__15524;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15525,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15525,(1),null);
var job = vec__15525;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13423__auto___15701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15532){
var state_val_15533 = (state_15532[(1)]);
if((state_val_15533 === (1))){
var state_15532__$1 = state_15532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15532__$1,(2),res,v);
} else {
if((state_val_15533 === (2))){
var inst_15529 = (state_15532[(2)]);
var inst_15530 = cljs.core.async.close_BANG_(res);
var state_15532__$1 = (function (){var statearr_15534 = state_15532;
(statearr_15534[(7)] = inst_15529);

return statearr_15534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15532__$1,inst_15530);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0 = (function (){
var statearr_15535 = [null,null,null,null,null,null,null,null];
(statearr_15535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__);

(statearr_15535[(1)] = (1));

return statearr_15535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1 = (function (state_15532){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15532);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15536){var ex__13300__auto__ = e15536;
var statearr_15537_15702 = state_15532;
(statearr_15537_15702[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15532[(4)]))){
var statearr_15538_15703 = state_15532;
(statearr_15538_15703[(1)] = cljs.core.first((state_15532[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15704 = state_15532;
state_15532 = G__15704;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = function(state_15532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1.call(this,state_15532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15539 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15539[(6)] = c__13423__auto___15701);

return statearr_15539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15540){
var vec__15541 = p__15540;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541,(1),null);
var job = vec__15541;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___15705 = n;
var __15706 = (0);
while(true){
if((__15706 < n__4613__auto___15705)){
var G__15544_15707 = type;
var G__15544_15708__$1 = (((G__15544_15707 instanceof cljs.core.Keyword))?G__15544_15707.fqn:null);
switch (G__15544_15708__$1) {
case "compute":
var c__13423__auto___15710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15706,c__13423__auto___15710,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async){
return (function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = ((function (__15706,c__13423__auto___15710,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async){
return (function (state_15557){
var state_val_15558 = (state_15557[(1)]);
if((state_val_15558 === (1))){
var state_15557__$1 = state_15557;
var statearr_15559_15711 = state_15557__$1;
(statearr_15559_15711[(2)] = null);

(statearr_15559_15711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15558 === (2))){
var state_15557__$1 = state_15557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15557__$1,(4),jobs);
} else {
if((state_val_15558 === (3))){
var inst_15555 = (state_15557[(2)]);
var state_15557__$1 = state_15557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15557__$1,inst_15555);
} else {
if((state_val_15558 === (4))){
var inst_15547 = (state_15557[(2)]);
var inst_15548 = process(inst_15547);
var state_15557__$1 = state_15557;
if(cljs.core.truth_(inst_15548)){
var statearr_15560_15712 = state_15557__$1;
(statearr_15560_15712[(1)] = (5));

} else {
var statearr_15561_15713 = state_15557__$1;
(statearr_15561_15713[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15558 === (5))){
var state_15557__$1 = state_15557;
var statearr_15562_15714 = state_15557__$1;
(statearr_15562_15714[(2)] = null);

(statearr_15562_15714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15558 === (6))){
var state_15557__$1 = state_15557;
var statearr_15563_15715 = state_15557__$1;
(statearr_15563_15715[(2)] = null);

(statearr_15563_15715[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15558 === (7))){
var inst_15553 = (state_15557[(2)]);
var state_15557__$1 = state_15557;
var statearr_15564_15716 = state_15557__$1;
(statearr_15564_15716[(2)] = inst_15553);

(statearr_15564_15716[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15706,c__13423__auto___15710,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async))
;
return ((function (__15706,switch__13296__auto__,c__13423__auto___15710,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0 = (function (){
var statearr_15565 = [null,null,null,null,null,null,null];
(statearr_15565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__);

(statearr_15565[(1)] = (1));

return statearr_15565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1 = (function (state_15557){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15557);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15566){var ex__13300__auto__ = e15566;
var statearr_15567_15717 = state_15557;
(statearr_15567_15717[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15557[(4)]))){
var statearr_15568_15718 = state_15557;
(statearr_15568_15718[(1)] = cljs.core.first((state_15557[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15719 = state_15557;
state_15557 = G__15719;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = function(state_15557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1.call(this,state_15557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__;
})()
;})(__15706,switch__13296__auto__,c__13423__auto___15710,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async))
})();
var state__13425__auto__ = (function (){var statearr_15569 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15569[(6)] = c__13423__auto___15710);

return statearr_15569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
});})(__15706,c__13423__auto___15710,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async))
);


break;
case "async":
var c__13423__auto___15720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15706,c__13423__auto___15720,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async){
return (function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = ((function (__15706,c__13423__auto___15720,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async){
return (function (state_15582){
var state_val_15583 = (state_15582[(1)]);
if((state_val_15583 === (1))){
var state_15582__$1 = state_15582;
var statearr_15584_15721 = state_15582__$1;
(statearr_15584_15721[(2)] = null);

(statearr_15584_15721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15583 === (2))){
var state_15582__$1 = state_15582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15582__$1,(4),jobs);
} else {
if((state_val_15583 === (3))){
var inst_15580 = (state_15582[(2)]);
var state_15582__$1 = state_15582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15582__$1,inst_15580);
} else {
if((state_val_15583 === (4))){
var inst_15572 = (state_15582[(2)]);
var inst_15573 = async(inst_15572);
var state_15582__$1 = state_15582;
if(cljs.core.truth_(inst_15573)){
var statearr_15585_15722 = state_15582__$1;
(statearr_15585_15722[(1)] = (5));

} else {
var statearr_15586_15723 = state_15582__$1;
(statearr_15586_15723[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15583 === (5))){
var state_15582__$1 = state_15582;
var statearr_15587_15724 = state_15582__$1;
(statearr_15587_15724[(2)] = null);

(statearr_15587_15724[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15583 === (6))){
var state_15582__$1 = state_15582;
var statearr_15588_15725 = state_15582__$1;
(statearr_15588_15725[(2)] = null);

(statearr_15588_15725[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15583 === (7))){
var inst_15578 = (state_15582[(2)]);
var state_15582__$1 = state_15582;
var statearr_15589_15726 = state_15582__$1;
(statearr_15589_15726[(2)] = inst_15578);

(statearr_15589_15726[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15706,c__13423__auto___15720,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async))
;
return ((function (__15706,switch__13296__auto__,c__13423__auto___15720,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0 = (function (){
var statearr_15590 = [null,null,null,null,null,null,null];
(statearr_15590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__);

(statearr_15590[(1)] = (1));

return statearr_15590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1 = (function (state_15582){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15582);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15591){var ex__13300__auto__ = e15591;
var statearr_15592_15727 = state_15582;
(statearr_15592_15727[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15582[(4)]))){
var statearr_15593_15728 = state_15582;
(statearr_15593_15728[(1)] = cljs.core.first((state_15582[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15729 = state_15582;
state_15582 = G__15729;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = function(state_15582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1.call(this,state_15582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__;
})()
;})(__15706,switch__13296__auto__,c__13423__auto___15720,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async))
})();
var state__13425__auto__ = (function (){var statearr_15594 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15594[(6)] = c__13423__auto___15720);

return statearr_15594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
});})(__15706,c__13423__auto___15720,G__15544_15707,G__15544_15708__$1,n__4613__auto___15705,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15544_15708__$1)].join('')));

}

var G__15730 = (__15706 + (1));
__15706 = G__15730;
continue;
} else {
}
break;
}

var c__13423__auto___15731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15616){
var state_val_15617 = (state_15616[(1)]);
if((state_val_15617 === (7))){
var inst_15612 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
var statearr_15618_15732 = state_15616__$1;
(statearr_15618_15732[(2)] = inst_15612);

(statearr_15618_15732[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (1))){
var state_15616__$1 = state_15616;
var statearr_15619_15733 = state_15616__$1;
(statearr_15619_15733[(2)] = null);

(statearr_15619_15733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (4))){
var inst_15597 = (state_15616[(7)]);
var inst_15597__$1 = (state_15616[(2)]);
var inst_15598 = (inst_15597__$1 == null);
var state_15616__$1 = (function (){var statearr_15620 = state_15616;
(statearr_15620[(7)] = inst_15597__$1);

return statearr_15620;
})();
if(cljs.core.truth_(inst_15598)){
var statearr_15621_15734 = state_15616__$1;
(statearr_15621_15734[(1)] = (5));

} else {
var statearr_15622_15735 = state_15616__$1;
(statearr_15622_15735[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (6))){
var inst_15597 = (state_15616[(7)]);
var inst_15602 = (state_15616[(8)]);
var inst_15602__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15604 = [inst_15597,inst_15602__$1];
var inst_15605 = (new cljs.core.PersistentVector(null,2,(5),inst_15603,inst_15604,null));
var state_15616__$1 = (function (){var statearr_15623 = state_15616;
(statearr_15623[(8)] = inst_15602__$1);

return statearr_15623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15616__$1,(8),jobs,inst_15605);
} else {
if((state_val_15617 === (3))){
var inst_15614 = (state_15616[(2)]);
var state_15616__$1 = state_15616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15616__$1,inst_15614);
} else {
if((state_val_15617 === (2))){
var state_15616__$1 = state_15616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15616__$1,(4),from);
} else {
if((state_val_15617 === (9))){
var inst_15609 = (state_15616[(2)]);
var state_15616__$1 = (function (){var statearr_15624 = state_15616;
(statearr_15624[(9)] = inst_15609);

return statearr_15624;
})();
var statearr_15625_15736 = state_15616__$1;
(statearr_15625_15736[(2)] = null);

(statearr_15625_15736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (5))){
var inst_15600 = cljs.core.async.close_BANG_(jobs);
var state_15616__$1 = state_15616;
var statearr_15626_15737 = state_15616__$1;
(statearr_15626_15737[(2)] = inst_15600);

(statearr_15626_15737[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15617 === (8))){
var inst_15602 = (state_15616[(8)]);
var inst_15607 = (state_15616[(2)]);
var state_15616__$1 = (function (){var statearr_15627 = state_15616;
(statearr_15627[(10)] = inst_15607);

return statearr_15627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15616__$1,(9),results,inst_15602);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0 = (function (){
var statearr_15628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__);

(statearr_15628[(1)] = (1));

return statearr_15628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1 = (function (state_15616){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15616);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15629){var ex__13300__auto__ = e15629;
var statearr_15630_15738 = state_15616;
(statearr_15630_15738[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15616[(4)]))){
var statearr_15631_15739 = state_15616;
(statearr_15631_15739[(1)] = cljs.core.first((state_15616[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15740 = state_15616;
state_15616 = G__15740;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = function(state_15616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1.call(this,state_15616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15632 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15632[(6)] = c__13423__auto___15731);

return statearr_15632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


var c__13423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15670){
var state_val_15671 = (state_15670[(1)]);
if((state_val_15671 === (7))){
var inst_15666 = (state_15670[(2)]);
var state_15670__$1 = state_15670;
var statearr_15672_15741 = state_15670__$1;
(statearr_15672_15741[(2)] = inst_15666);

(statearr_15672_15741[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (20))){
var state_15670__$1 = state_15670;
var statearr_15673_15742 = state_15670__$1;
(statearr_15673_15742[(2)] = null);

(statearr_15673_15742[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (1))){
var state_15670__$1 = state_15670;
var statearr_15674_15743 = state_15670__$1;
(statearr_15674_15743[(2)] = null);

(statearr_15674_15743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (4))){
var inst_15635 = (state_15670[(7)]);
var inst_15635__$1 = (state_15670[(2)]);
var inst_15636 = (inst_15635__$1 == null);
var state_15670__$1 = (function (){var statearr_15675 = state_15670;
(statearr_15675[(7)] = inst_15635__$1);

return statearr_15675;
})();
if(cljs.core.truth_(inst_15636)){
var statearr_15676_15744 = state_15670__$1;
(statearr_15676_15744[(1)] = (5));

} else {
var statearr_15677_15745 = state_15670__$1;
(statearr_15677_15745[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (15))){
var inst_15648 = (state_15670[(8)]);
var state_15670__$1 = state_15670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15670__$1,(18),to,inst_15648);
} else {
if((state_val_15671 === (21))){
var inst_15661 = (state_15670[(2)]);
var state_15670__$1 = state_15670;
var statearr_15678_15746 = state_15670__$1;
(statearr_15678_15746[(2)] = inst_15661);

(statearr_15678_15746[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (13))){
var inst_15663 = (state_15670[(2)]);
var state_15670__$1 = (function (){var statearr_15679 = state_15670;
(statearr_15679[(9)] = inst_15663);

return statearr_15679;
})();
var statearr_15680_15747 = state_15670__$1;
(statearr_15680_15747[(2)] = null);

(statearr_15680_15747[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (6))){
var inst_15635 = (state_15670[(7)]);
var state_15670__$1 = state_15670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15670__$1,(11),inst_15635);
} else {
if((state_val_15671 === (17))){
var inst_15656 = (state_15670[(2)]);
var state_15670__$1 = state_15670;
if(cljs.core.truth_(inst_15656)){
var statearr_15681_15748 = state_15670__$1;
(statearr_15681_15748[(1)] = (19));

} else {
var statearr_15682_15749 = state_15670__$1;
(statearr_15682_15749[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (3))){
var inst_15668 = (state_15670[(2)]);
var state_15670__$1 = state_15670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15670__$1,inst_15668);
} else {
if((state_val_15671 === (12))){
var inst_15645 = (state_15670[(10)]);
var state_15670__$1 = state_15670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15670__$1,(14),inst_15645);
} else {
if((state_val_15671 === (2))){
var state_15670__$1 = state_15670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15670__$1,(4),results);
} else {
if((state_val_15671 === (19))){
var state_15670__$1 = state_15670;
var statearr_15683_15750 = state_15670__$1;
(statearr_15683_15750[(2)] = null);

(statearr_15683_15750[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (11))){
var inst_15645 = (state_15670[(2)]);
var state_15670__$1 = (function (){var statearr_15684 = state_15670;
(statearr_15684[(10)] = inst_15645);

return statearr_15684;
})();
var statearr_15685_15751 = state_15670__$1;
(statearr_15685_15751[(2)] = null);

(statearr_15685_15751[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (9))){
var state_15670__$1 = state_15670;
var statearr_15686_15752 = state_15670__$1;
(statearr_15686_15752[(2)] = null);

(statearr_15686_15752[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (5))){
var state_15670__$1 = state_15670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15687_15753 = state_15670__$1;
(statearr_15687_15753[(1)] = (8));

} else {
var statearr_15688_15754 = state_15670__$1;
(statearr_15688_15754[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (14))){
var inst_15648 = (state_15670[(8)]);
var inst_15648__$1 = (state_15670[(2)]);
var inst_15649 = (inst_15648__$1 == null);
var inst_15650 = cljs.core.not(inst_15649);
var state_15670__$1 = (function (){var statearr_15689 = state_15670;
(statearr_15689[(8)] = inst_15648__$1);

return statearr_15689;
})();
if(inst_15650){
var statearr_15690_15755 = state_15670__$1;
(statearr_15690_15755[(1)] = (15));

} else {
var statearr_15691_15756 = state_15670__$1;
(statearr_15691_15756[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (16))){
var state_15670__$1 = state_15670;
var statearr_15692_15757 = state_15670__$1;
(statearr_15692_15757[(2)] = false);

(statearr_15692_15757[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (10))){
var inst_15642 = (state_15670[(2)]);
var state_15670__$1 = state_15670;
var statearr_15693_15758 = state_15670__$1;
(statearr_15693_15758[(2)] = inst_15642);

(statearr_15693_15758[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (18))){
var inst_15653 = (state_15670[(2)]);
var state_15670__$1 = state_15670;
var statearr_15694_15759 = state_15670__$1;
(statearr_15694_15759[(2)] = inst_15653);

(statearr_15694_15759[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15671 === (8))){
var inst_15639 = cljs.core.async.close_BANG_(to);
var state_15670__$1 = state_15670;
var statearr_15695_15760 = state_15670__$1;
(statearr_15695_15760[(2)] = inst_15639);

(statearr_15695_15760[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0 = (function (){
var statearr_15696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__);

(statearr_15696[(1)] = (1));

return statearr_15696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1 = (function (state_15670){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15670);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15697){var ex__13300__auto__ = e15697;
var statearr_15698_15761 = state_15670;
(statearr_15698_15761[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15670[(4)]))){
var statearr_15699_15762 = state_15670;
(statearr_15699_15762[(1)] = cljs.core.first((state_15670[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15763 = state_15670;
state_15670 = G__15763;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__ = function(state_15670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1.call(this,state_15670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13297__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15700 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15700[(6)] = c__13423__auto__);

return statearr_15700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

return c__13423__auto__;
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
var G__15765 = arguments.length;
switch (G__15765) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15768 = arguments.length;
switch (G__15768) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15771 = arguments.length;
switch (G__15771) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13423__auto___15821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15797){
var state_val_15798 = (state_15797[(1)]);
if((state_val_15798 === (7))){
var inst_15793 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
var statearr_15799_15822 = state_15797__$1;
(statearr_15799_15822[(2)] = inst_15793);

(statearr_15799_15822[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (1))){
var state_15797__$1 = state_15797;
var statearr_15800_15823 = state_15797__$1;
(statearr_15800_15823[(2)] = null);

(statearr_15800_15823[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (4))){
var inst_15774 = (state_15797[(7)]);
var inst_15774__$1 = (state_15797[(2)]);
var inst_15775 = (inst_15774__$1 == null);
var state_15797__$1 = (function (){var statearr_15801 = state_15797;
(statearr_15801[(7)] = inst_15774__$1);

return statearr_15801;
})();
if(cljs.core.truth_(inst_15775)){
var statearr_15802_15824 = state_15797__$1;
(statearr_15802_15824[(1)] = (5));

} else {
var statearr_15803_15825 = state_15797__$1;
(statearr_15803_15825[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (13))){
var state_15797__$1 = state_15797;
var statearr_15804_15826 = state_15797__$1;
(statearr_15804_15826[(2)] = null);

(statearr_15804_15826[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (6))){
var inst_15774 = (state_15797[(7)]);
var inst_15780 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15774) : p.call(null,inst_15774));
var state_15797__$1 = state_15797;
if(cljs.core.truth_(inst_15780)){
var statearr_15805_15827 = state_15797__$1;
(statearr_15805_15827[(1)] = (9));

} else {
var statearr_15806_15828 = state_15797__$1;
(statearr_15806_15828[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (3))){
var inst_15795 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15797__$1,inst_15795);
} else {
if((state_val_15798 === (12))){
var state_15797__$1 = state_15797;
var statearr_15807_15829 = state_15797__$1;
(statearr_15807_15829[(2)] = null);

(statearr_15807_15829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (2))){
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15797__$1,(4),ch);
} else {
if((state_val_15798 === (11))){
var inst_15774 = (state_15797[(7)]);
var inst_15784 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15797__$1,(8),inst_15784,inst_15774);
} else {
if((state_val_15798 === (9))){
var state_15797__$1 = state_15797;
var statearr_15808_15830 = state_15797__$1;
(statearr_15808_15830[(2)] = tc);

(statearr_15808_15830[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (5))){
var inst_15777 = cljs.core.async.close_BANG_(tc);
var inst_15778 = cljs.core.async.close_BANG_(fc);
var state_15797__$1 = (function (){var statearr_15809 = state_15797;
(statearr_15809[(8)] = inst_15777);

return statearr_15809;
})();
var statearr_15810_15831 = state_15797__$1;
(statearr_15810_15831[(2)] = inst_15778);

(statearr_15810_15831[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (14))){
var inst_15791 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
var statearr_15811_15832 = state_15797__$1;
(statearr_15811_15832[(2)] = inst_15791);

(statearr_15811_15832[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (10))){
var state_15797__$1 = state_15797;
var statearr_15812_15833 = state_15797__$1;
(statearr_15812_15833[(2)] = fc);

(statearr_15812_15833[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15798 === (8))){
var inst_15786 = (state_15797[(2)]);
var state_15797__$1 = state_15797;
if(cljs.core.truth_(inst_15786)){
var statearr_15813_15834 = state_15797__$1;
(statearr_15813_15834[(1)] = (12));

} else {
var statearr_15814_15835 = state_15797__$1;
(statearr_15814_15835[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_15815 = [null,null,null,null,null,null,null,null,null];
(statearr_15815[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_15815[(1)] = (1));

return statearr_15815;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_15797){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15797);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15816){var ex__13300__auto__ = e15816;
var statearr_15817_15836 = state_15797;
(statearr_15817_15836[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15797[(4)]))){
var statearr_15818_15837 = state_15797;
(statearr_15818_15837[(1)] = cljs.core.first((state_15797[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15838 = state_15797;
state_15797 = G__15838;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_15797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_15797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15819 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15819[(6)] = c__13423__auto___15821);

return statearr_15819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15860){
var state_val_15861 = (state_15860[(1)]);
if((state_val_15861 === (7))){
var inst_15856 = (state_15860[(2)]);
var state_15860__$1 = state_15860;
var statearr_15862_15881 = state_15860__$1;
(statearr_15862_15881[(2)] = inst_15856);

(statearr_15862_15881[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (1))){
var inst_15839 = init;
var inst_15840 = inst_15839;
var state_15860__$1 = (function (){var statearr_15863 = state_15860;
(statearr_15863[(7)] = inst_15840);

return statearr_15863;
})();
var statearr_15864_15882 = state_15860__$1;
(statearr_15864_15882[(2)] = null);

(statearr_15864_15882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (4))){
var inst_15843 = (state_15860[(8)]);
var inst_15843__$1 = (state_15860[(2)]);
var inst_15844 = (inst_15843__$1 == null);
var state_15860__$1 = (function (){var statearr_15865 = state_15860;
(statearr_15865[(8)] = inst_15843__$1);

return statearr_15865;
})();
if(cljs.core.truth_(inst_15844)){
var statearr_15866_15883 = state_15860__$1;
(statearr_15866_15883[(1)] = (5));

} else {
var statearr_15867_15884 = state_15860__$1;
(statearr_15867_15884[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (6))){
var inst_15847 = (state_15860[(9)]);
var inst_15843 = (state_15860[(8)]);
var inst_15840 = (state_15860[(7)]);
var inst_15847__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15840,inst_15843) : f.call(null,inst_15840,inst_15843));
var inst_15848 = cljs.core.reduced_QMARK_(inst_15847__$1);
var state_15860__$1 = (function (){var statearr_15868 = state_15860;
(statearr_15868[(9)] = inst_15847__$1);

return statearr_15868;
})();
if(inst_15848){
var statearr_15869_15885 = state_15860__$1;
(statearr_15869_15885[(1)] = (8));

} else {
var statearr_15870_15886 = state_15860__$1;
(statearr_15870_15886[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (3))){
var inst_15858 = (state_15860[(2)]);
var state_15860__$1 = state_15860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15860__$1,inst_15858);
} else {
if((state_val_15861 === (2))){
var state_15860__$1 = state_15860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15860__$1,(4),ch);
} else {
if((state_val_15861 === (9))){
var inst_15847 = (state_15860[(9)]);
var inst_15840 = inst_15847;
var state_15860__$1 = (function (){var statearr_15871 = state_15860;
(statearr_15871[(7)] = inst_15840);

return statearr_15871;
})();
var statearr_15872_15887 = state_15860__$1;
(statearr_15872_15887[(2)] = null);

(statearr_15872_15887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (5))){
var inst_15840 = (state_15860[(7)]);
var state_15860__$1 = state_15860;
var statearr_15873_15888 = state_15860__$1;
(statearr_15873_15888[(2)] = inst_15840);

(statearr_15873_15888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (10))){
var inst_15854 = (state_15860[(2)]);
var state_15860__$1 = state_15860;
var statearr_15874_15889 = state_15860__$1;
(statearr_15874_15889[(2)] = inst_15854);

(statearr_15874_15889[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15861 === (8))){
var inst_15847 = (state_15860[(9)]);
var inst_15850 = cljs.core.deref(inst_15847);
var state_15860__$1 = state_15860;
var statearr_15875_15890 = state_15860__$1;
(statearr_15875_15890[(2)] = inst_15850);

(statearr_15875_15890[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13297__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13297__auto____0 = (function (){
var statearr_15876 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15876[(0)] = cljs$core$async$reduce_$_state_machine__13297__auto__);

(statearr_15876[(1)] = (1));

return statearr_15876;
});
var cljs$core$async$reduce_$_state_machine__13297__auto____1 = (function (state_15860){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15860);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15877){var ex__13300__auto__ = e15877;
var statearr_15878_15891 = state_15860;
(statearr_15878_15891[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15860[(4)]))){
var statearr_15879_15892 = state_15860;
(statearr_15879_15892[(1)] = cljs.core.first((state_15860[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15893 = state_15860;
state_15860 = G__15893;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13297__auto__ = function(state_15860){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13297__auto____1.call(this,state_15860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13297__auto____0;
cljs$core$async$reduce_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13297__auto____1;
return cljs$core$async$reduce_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15880 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15880[(6)] = c__13423__auto__);

return statearr_15880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

return c__13423__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15899){
var state_val_15900 = (state_15899[(1)]);
if((state_val_15900 === (1))){
var inst_15894 = cljs.core.async.reduce(f__$1,init,ch);
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15899__$1,(2),inst_15894);
} else {
if((state_val_15900 === (2))){
var inst_15896 = (state_15899[(2)]);
var inst_15897 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15896) : f__$1.call(null,inst_15896));
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15899__$1,inst_15897);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13297__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13297__auto____0 = (function (){
var statearr_15901 = [null,null,null,null,null,null,null];
(statearr_15901[(0)] = cljs$core$async$transduce_$_state_machine__13297__auto__);

(statearr_15901[(1)] = (1));

return statearr_15901;
});
var cljs$core$async$transduce_$_state_machine__13297__auto____1 = (function (state_15899){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15899);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15902){var ex__13300__auto__ = e15902;
var statearr_15903_15906 = state_15899;
(statearr_15903_15906[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15899[(4)]))){
var statearr_15904_15907 = state_15899;
(statearr_15904_15907[(1)] = cljs.core.first((state_15899[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15908 = state_15899;
state_15899 = G__15908;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13297__auto__ = function(state_15899){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13297__auto____1.call(this,state_15899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13297__auto____0;
cljs$core$async$transduce_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13297__auto____1;
return cljs$core$async$transduce_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15905 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15905[(6)] = c__13423__auto__);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

return c__13423__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15910 = arguments.length;
switch (G__15910) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_15935){
var state_val_15936 = (state_15935[(1)]);
if((state_val_15936 === (7))){
var inst_15917 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15937_15959 = state_15935__$1;
(statearr_15937_15959[(2)] = inst_15917);

(statearr_15937_15959[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (1))){
var inst_15911 = cljs.core.seq(coll);
var inst_15912 = inst_15911;
var state_15935__$1 = (function (){var statearr_15938 = state_15935;
(statearr_15938[(7)] = inst_15912);

return statearr_15938;
})();
var statearr_15939_15960 = state_15935__$1;
(statearr_15939_15960[(2)] = null);

(statearr_15939_15960[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (4))){
var inst_15912 = (state_15935[(7)]);
var inst_15915 = cljs.core.first(inst_15912);
var state_15935__$1 = state_15935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15935__$1,(7),ch,inst_15915);
} else {
if((state_val_15936 === (13))){
var inst_15929 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15940_15961 = state_15935__$1;
(statearr_15940_15961[(2)] = inst_15929);

(statearr_15940_15961[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (6))){
var inst_15920 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
if(cljs.core.truth_(inst_15920)){
var statearr_15941_15962 = state_15935__$1;
(statearr_15941_15962[(1)] = (8));

} else {
var statearr_15942_15963 = state_15935__$1;
(statearr_15942_15963[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (3))){
var inst_15933 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15935__$1,inst_15933);
} else {
if((state_val_15936 === (12))){
var state_15935__$1 = state_15935;
var statearr_15943_15964 = state_15935__$1;
(statearr_15943_15964[(2)] = null);

(statearr_15943_15964[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (2))){
var inst_15912 = (state_15935[(7)]);
var state_15935__$1 = state_15935;
if(cljs.core.truth_(inst_15912)){
var statearr_15944_15965 = state_15935__$1;
(statearr_15944_15965[(1)] = (4));

} else {
var statearr_15945_15966 = state_15935__$1;
(statearr_15945_15966[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (11))){
var inst_15926 = cljs.core.async.close_BANG_(ch);
var state_15935__$1 = state_15935;
var statearr_15946_15967 = state_15935__$1;
(statearr_15946_15967[(2)] = inst_15926);

(statearr_15946_15967[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (9))){
var state_15935__$1 = state_15935;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15947_15968 = state_15935__$1;
(statearr_15947_15968[(1)] = (11));

} else {
var statearr_15948_15969 = state_15935__$1;
(statearr_15948_15969[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (5))){
var inst_15912 = (state_15935[(7)]);
var state_15935__$1 = state_15935;
var statearr_15949_15970 = state_15935__$1;
(statearr_15949_15970[(2)] = inst_15912);

(statearr_15949_15970[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (10))){
var inst_15931 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15950_15971 = state_15935__$1;
(statearr_15950_15971[(2)] = inst_15931);

(statearr_15950_15971[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15936 === (8))){
var inst_15912 = (state_15935[(7)]);
var inst_15922 = cljs.core.next(inst_15912);
var inst_15912__$1 = inst_15922;
var state_15935__$1 = (function (){var statearr_15951 = state_15935;
(statearr_15951[(7)] = inst_15912__$1);

return statearr_15951;
})();
var statearr_15952_15972 = state_15935__$1;
(statearr_15952_15972[(2)] = null);

(statearr_15952_15972[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_15953 = [null,null,null,null,null,null,null,null];
(statearr_15953[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_15953[(1)] = (1));

return statearr_15953;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_15935){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_15935);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e15954){var ex__13300__auto__ = e15954;
var statearr_15955_15973 = state_15935;
(statearr_15955_15973[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_15935[(4)]))){
var statearr_15956_15974 = state_15935;
(statearr_15956_15974[(1)] = cljs.core.first((state_15935[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__15975 = state_15935;
state_15935 = G__15975;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_15935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_15935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_15957 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_15957[(6)] = c__13423__auto__);

return statearr_15957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

return c__13423__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15977 = arguments.length;
switch (G__15977) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15979 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15979(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15980 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15980(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15981 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15981(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15982 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15982(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15983 = (function (ch,cs,meta15984){
this.ch = ch;
this.cs = cs;
this.meta15984 = meta15984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15985,meta15984__$1){
var self__ = this;
var _15985__$1 = this;
return (new cljs.core.async.t_cljs$core$async15983(self__.ch,self__.cs,meta15984__$1));
}));

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15985){
var self__ = this;
var _15985__$1 = this;
return self__.meta15984;
}));

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15984], null);
}));

(cljs.core.async.t_cljs$core$async15983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15983");

(cljs.core.async.t_cljs$core$async15983.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async15983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15983.
 */
cljs.core.async.__GT_t_cljs$core$async15983 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15983(ch__$1,cs__$1,meta15984){
return (new cljs.core.async.t_cljs$core$async15983(ch__$1,cs__$1,meta15984));
});

}

return (new cljs.core.async.t_cljs$core$async15983(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13423__auto___16202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16118){
var state_val_16119 = (state_16118[(1)]);
if((state_val_16119 === (7))){
var inst_16114 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16120_16203 = state_16118__$1;
(statearr_16120_16203[(2)] = inst_16114);

(statearr_16120_16203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (20))){
var inst_16019 = (state_16118[(7)]);
var inst_16031 = cljs.core.first(inst_16019);
var inst_16032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16031,(0),null);
var inst_16033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16031,(1),null);
var state_16118__$1 = (function (){var statearr_16121 = state_16118;
(statearr_16121[(8)] = inst_16032);

return statearr_16121;
})();
if(cljs.core.truth_(inst_16033)){
var statearr_16122_16204 = state_16118__$1;
(statearr_16122_16204[(1)] = (22));

} else {
var statearr_16123_16205 = state_16118__$1;
(statearr_16123_16205[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (27))){
var inst_16061 = (state_16118[(9)]);
var inst_15988 = (state_16118[(10)]);
var inst_16068 = (state_16118[(11)]);
var inst_16063 = (state_16118[(12)]);
var inst_16068__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16061,inst_16063);
var inst_16069 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16068__$1,inst_15988,done);
var state_16118__$1 = (function (){var statearr_16124 = state_16118;
(statearr_16124[(11)] = inst_16068__$1);

return statearr_16124;
})();
if(cljs.core.truth_(inst_16069)){
var statearr_16125_16206 = state_16118__$1;
(statearr_16125_16206[(1)] = (30));

} else {
var statearr_16126_16207 = state_16118__$1;
(statearr_16126_16207[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (1))){
var state_16118__$1 = state_16118;
var statearr_16127_16208 = state_16118__$1;
(statearr_16127_16208[(2)] = null);

(statearr_16127_16208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (24))){
var inst_16019 = (state_16118[(7)]);
var inst_16038 = (state_16118[(2)]);
var inst_16039 = cljs.core.next(inst_16019);
var inst_15997 = inst_16039;
var inst_15998 = null;
var inst_15999 = (0);
var inst_16000 = (0);
var state_16118__$1 = (function (){var statearr_16128 = state_16118;
(statearr_16128[(13)] = inst_15999);

(statearr_16128[(14)] = inst_16038);

(statearr_16128[(15)] = inst_16000);

(statearr_16128[(16)] = inst_15997);

(statearr_16128[(17)] = inst_15998);

return statearr_16128;
})();
var statearr_16129_16209 = state_16118__$1;
(statearr_16129_16209[(2)] = null);

(statearr_16129_16209[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (39))){
var state_16118__$1 = state_16118;
var statearr_16133_16210 = state_16118__$1;
(statearr_16133_16210[(2)] = null);

(statearr_16133_16210[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (4))){
var inst_15988 = (state_16118[(10)]);
var inst_15988__$1 = (state_16118[(2)]);
var inst_15989 = (inst_15988__$1 == null);
var state_16118__$1 = (function (){var statearr_16134 = state_16118;
(statearr_16134[(10)] = inst_15988__$1);

return statearr_16134;
})();
if(cljs.core.truth_(inst_15989)){
var statearr_16135_16211 = state_16118__$1;
(statearr_16135_16211[(1)] = (5));

} else {
var statearr_16136_16212 = state_16118__$1;
(statearr_16136_16212[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (15))){
var inst_15999 = (state_16118[(13)]);
var inst_16000 = (state_16118[(15)]);
var inst_15997 = (state_16118[(16)]);
var inst_15998 = (state_16118[(17)]);
var inst_16015 = (state_16118[(2)]);
var inst_16016 = (inst_16000 + (1));
var tmp16130 = inst_15999;
var tmp16131 = inst_15997;
var tmp16132 = inst_15998;
var inst_15997__$1 = tmp16131;
var inst_15998__$1 = tmp16132;
var inst_15999__$1 = tmp16130;
var inst_16000__$1 = inst_16016;
var state_16118__$1 = (function (){var statearr_16137 = state_16118;
(statearr_16137[(13)] = inst_15999__$1);

(statearr_16137[(15)] = inst_16000__$1);

(statearr_16137[(16)] = inst_15997__$1);

(statearr_16137[(17)] = inst_15998__$1);

(statearr_16137[(18)] = inst_16015);

return statearr_16137;
})();
var statearr_16138_16213 = state_16118__$1;
(statearr_16138_16213[(2)] = null);

(statearr_16138_16213[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (21))){
var inst_16042 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16142_16214 = state_16118__$1;
(statearr_16142_16214[(2)] = inst_16042);

(statearr_16142_16214[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (31))){
var inst_16068 = (state_16118[(11)]);
var inst_16072 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16068);
var state_16118__$1 = state_16118;
var statearr_16143_16215 = state_16118__$1;
(statearr_16143_16215[(2)] = inst_16072);

(statearr_16143_16215[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (32))){
var inst_16062 = (state_16118[(19)]);
var inst_16061 = (state_16118[(9)]);
var inst_16063 = (state_16118[(12)]);
var inst_16060 = (state_16118[(20)]);
var inst_16074 = (state_16118[(2)]);
var inst_16075 = (inst_16063 + (1));
var tmp16139 = inst_16062;
var tmp16140 = inst_16061;
var tmp16141 = inst_16060;
var inst_16060__$1 = tmp16141;
var inst_16061__$1 = tmp16140;
var inst_16062__$1 = tmp16139;
var inst_16063__$1 = inst_16075;
var state_16118__$1 = (function (){var statearr_16144 = state_16118;
(statearr_16144[(19)] = inst_16062__$1);

(statearr_16144[(9)] = inst_16061__$1);

(statearr_16144[(21)] = inst_16074);

(statearr_16144[(12)] = inst_16063__$1);

(statearr_16144[(20)] = inst_16060__$1);

return statearr_16144;
})();
var statearr_16145_16216 = state_16118__$1;
(statearr_16145_16216[(2)] = null);

(statearr_16145_16216[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (40))){
var inst_16087 = (state_16118[(22)]);
var inst_16091 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16087);
var state_16118__$1 = state_16118;
var statearr_16146_16217 = state_16118__$1;
(statearr_16146_16217[(2)] = inst_16091);

(statearr_16146_16217[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (33))){
var inst_16078 = (state_16118[(23)]);
var inst_16080 = cljs.core.chunked_seq_QMARK_(inst_16078);
var state_16118__$1 = state_16118;
if(inst_16080){
var statearr_16147_16218 = state_16118__$1;
(statearr_16147_16218[(1)] = (36));

} else {
var statearr_16148_16219 = state_16118__$1;
(statearr_16148_16219[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (13))){
var inst_16009 = (state_16118[(24)]);
var inst_16012 = cljs.core.async.close_BANG_(inst_16009);
var state_16118__$1 = state_16118;
var statearr_16149_16220 = state_16118__$1;
(statearr_16149_16220[(2)] = inst_16012);

(statearr_16149_16220[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (22))){
var inst_16032 = (state_16118[(8)]);
var inst_16035 = cljs.core.async.close_BANG_(inst_16032);
var state_16118__$1 = state_16118;
var statearr_16150_16221 = state_16118__$1;
(statearr_16150_16221[(2)] = inst_16035);

(statearr_16150_16221[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (36))){
var inst_16078 = (state_16118[(23)]);
var inst_16082 = cljs.core.chunk_first(inst_16078);
var inst_16083 = cljs.core.chunk_rest(inst_16078);
var inst_16084 = cljs.core.count(inst_16082);
var inst_16060 = inst_16083;
var inst_16061 = inst_16082;
var inst_16062 = inst_16084;
var inst_16063 = (0);
var state_16118__$1 = (function (){var statearr_16151 = state_16118;
(statearr_16151[(19)] = inst_16062);

(statearr_16151[(9)] = inst_16061);

(statearr_16151[(12)] = inst_16063);

(statearr_16151[(20)] = inst_16060);

return statearr_16151;
})();
var statearr_16152_16222 = state_16118__$1;
(statearr_16152_16222[(2)] = null);

(statearr_16152_16222[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (41))){
var inst_16078 = (state_16118[(23)]);
var inst_16093 = (state_16118[(2)]);
var inst_16094 = cljs.core.next(inst_16078);
var inst_16060 = inst_16094;
var inst_16061 = null;
var inst_16062 = (0);
var inst_16063 = (0);
var state_16118__$1 = (function (){var statearr_16153 = state_16118;
(statearr_16153[(19)] = inst_16062);

(statearr_16153[(25)] = inst_16093);

(statearr_16153[(9)] = inst_16061);

(statearr_16153[(12)] = inst_16063);

(statearr_16153[(20)] = inst_16060);

return statearr_16153;
})();
var statearr_16154_16223 = state_16118__$1;
(statearr_16154_16223[(2)] = null);

(statearr_16154_16223[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (43))){
var state_16118__$1 = state_16118;
var statearr_16155_16224 = state_16118__$1;
(statearr_16155_16224[(2)] = null);

(statearr_16155_16224[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (29))){
var inst_16102 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16156_16225 = state_16118__$1;
(statearr_16156_16225[(2)] = inst_16102);

(statearr_16156_16225[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (44))){
var inst_16111 = (state_16118[(2)]);
var state_16118__$1 = (function (){var statearr_16157 = state_16118;
(statearr_16157[(26)] = inst_16111);

return statearr_16157;
})();
var statearr_16158_16226 = state_16118__$1;
(statearr_16158_16226[(2)] = null);

(statearr_16158_16226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (6))){
var inst_16052 = (state_16118[(27)]);
var inst_16051 = cljs.core.deref(cs);
var inst_16052__$1 = cljs.core.keys(inst_16051);
var inst_16053 = cljs.core.count(inst_16052__$1);
var inst_16054 = cljs.core.reset_BANG_(dctr,inst_16053);
var inst_16059 = cljs.core.seq(inst_16052__$1);
var inst_16060 = inst_16059;
var inst_16061 = null;
var inst_16062 = (0);
var inst_16063 = (0);
var state_16118__$1 = (function (){var statearr_16159 = state_16118;
(statearr_16159[(19)] = inst_16062);

(statearr_16159[(9)] = inst_16061);

(statearr_16159[(12)] = inst_16063);

(statearr_16159[(27)] = inst_16052__$1);

(statearr_16159[(20)] = inst_16060);

(statearr_16159[(28)] = inst_16054);

return statearr_16159;
})();
var statearr_16160_16227 = state_16118__$1;
(statearr_16160_16227[(2)] = null);

(statearr_16160_16227[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (28))){
var inst_16078 = (state_16118[(23)]);
var inst_16060 = (state_16118[(20)]);
var inst_16078__$1 = cljs.core.seq(inst_16060);
var state_16118__$1 = (function (){var statearr_16161 = state_16118;
(statearr_16161[(23)] = inst_16078__$1);

return statearr_16161;
})();
if(inst_16078__$1){
var statearr_16162_16228 = state_16118__$1;
(statearr_16162_16228[(1)] = (33));

} else {
var statearr_16163_16229 = state_16118__$1;
(statearr_16163_16229[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (25))){
var inst_16062 = (state_16118[(19)]);
var inst_16063 = (state_16118[(12)]);
var inst_16065 = (inst_16063 < inst_16062);
var inst_16066 = inst_16065;
var state_16118__$1 = state_16118;
if(cljs.core.truth_(inst_16066)){
var statearr_16164_16230 = state_16118__$1;
(statearr_16164_16230[(1)] = (27));

} else {
var statearr_16165_16231 = state_16118__$1;
(statearr_16165_16231[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (34))){
var state_16118__$1 = state_16118;
var statearr_16166_16232 = state_16118__$1;
(statearr_16166_16232[(2)] = null);

(statearr_16166_16232[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (17))){
var state_16118__$1 = state_16118;
var statearr_16167_16233 = state_16118__$1;
(statearr_16167_16233[(2)] = null);

(statearr_16167_16233[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (3))){
var inst_16116 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16118__$1,inst_16116);
} else {
if((state_val_16119 === (12))){
var inst_16047 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16168_16234 = state_16118__$1;
(statearr_16168_16234[(2)] = inst_16047);

(statearr_16168_16234[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (2))){
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16118__$1,(4),ch);
} else {
if((state_val_16119 === (23))){
var state_16118__$1 = state_16118;
var statearr_16169_16235 = state_16118__$1;
(statearr_16169_16235[(2)] = null);

(statearr_16169_16235[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (35))){
var inst_16100 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16170_16236 = state_16118__$1;
(statearr_16170_16236[(2)] = inst_16100);

(statearr_16170_16236[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (19))){
var inst_16019 = (state_16118[(7)]);
var inst_16023 = cljs.core.chunk_first(inst_16019);
var inst_16024 = cljs.core.chunk_rest(inst_16019);
var inst_16025 = cljs.core.count(inst_16023);
var inst_15997 = inst_16024;
var inst_15998 = inst_16023;
var inst_15999 = inst_16025;
var inst_16000 = (0);
var state_16118__$1 = (function (){var statearr_16171 = state_16118;
(statearr_16171[(13)] = inst_15999);

(statearr_16171[(15)] = inst_16000);

(statearr_16171[(16)] = inst_15997);

(statearr_16171[(17)] = inst_15998);

return statearr_16171;
})();
var statearr_16172_16237 = state_16118__$1;
(statearr_16172_16237[(2)] = null);

(statearr_16172_16237[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (11))){
var inst_16019 = (state_16118[(7)]);
var inst_15997 = (state_16118[(16)]);
var inst_16019__$1 = cljs.core.seq(inst_15997);
var state_16118__$1 = (function (){var statearr_16173 = state_16118;
(statearr_16173[(7)] = inst_16019__$1);

return statearr_16173;
})();
if(inst_16019__$1){
var statearr_16174_16238 = state_16118__$1;
(statearr_16174_16238[(1)] = (16));

} else {
var statearr_16175_16239 = state_16118__$1;
(statearr_16175_16239[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (9))){
var inst_16049 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16176_16240 = state_16118__$1;
(statearr_16176_16240[(2)] = inst_16049);

(statearr_16176_16240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (5))){
var inst_15995 = cljs.core.deref(cs);
var inst_15996 = cljs.core.seq(inst_15995);
var inst_15997 = inst_15996;
var inst_15998 = null;
var inst_15999 = (0);
var inst_16000 = (0);
var state_16118__$1 = (function (){var statearr_16177 = state_16118;
(statearr_16177[(13)] = inst_15999);

(statearr_16177[(15)] = inst_16000);

(statearr_16177[(16)] = inst_15997);

(statearr_16177[(17)] = inst_15998);

return statearr_16177;
})();
var statearr_16178_16241 = state_16118__$1;
(statearr_16178_16241[(2)] = null);

(statearr_16178_16241[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (14))){
var state_16118__$1 = state_16118;
var statearr_16179_16242 = state_16118__$1;
(statearr_16179_16242[(2)] = null);

(statearr_16179_16242[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (45))){
var inst_16108 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16180_16243 = state_16118__$1;
(statearr_16180_16243[(2)] = inst_16108);

(statearr_16180_16243[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (26))){
var inst_16052 = (state_16118[(27)]);
var inst_16104 = (state_16118[(2)]);
var inst_16105 = cljs.core.seq(inst_16052);
var state_16118__$1 = (function (){var statearr_16181 = state_16118;
(statearr_16181[(29)] = inst_16104);

return statearr_16181;
})();
if(inst_16105){
var statearr_16182_16244 = state_16118__$1;
(statearr_16182_16244[(1)] = (42));

} else {
var statearr_16183_16245 = state_16118__$1;
(statearr_16183_16245[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (16))){
var inst_16019 = (state_16118[(7)]);
var inst_16021 = cljs.core.chunked_seq_QMARK_(inst_16019);
var state_16118__$1 = state_16118;
if(inst_16021){
var statearr_16184_16246 = state_16118__$1;
(statearr_16184_16246[(1)] = (19));

} else {
var statearr_16185_16247 = state_16118__$1;
(statearr_16185_16247[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (38))){
var inst_16097 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16186_16248 = state_16118__$1;
(statearr_16186_16248[(2)] = inst_16097);

(statearr_16186_16248[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (30))){
var state_16118__$1 = state_16118;
var statearr_16187_16249 = state_16118__$1;
(statearr_16187_16249[(2)] = null);

(statearr_16187_16249[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (10))){
var inst_16000 = (state_16118[(15)]);
var inst_15998 = (state_16118[(17)]);
var inst_16008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15998,inst_16000);
var inst_16009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16008,(0),null);
var inst_16010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16008,(1),null);
var state_16118__$1 = (function (){var statearr_16188 = state_16118;
(statearr_16188[(24)] = inst_16009);

return statearr_16188;
})();
if(cljs.core.truth_(inst_16010)){
var statearr_16189_16250 = state_16118__$1;
(statearr_16189_16250[(1)] = (13));

} else {
var statearr_16190_16251 = state_16118__$1;
(statearr_16190_16251[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (18))){
var inst_16045 = (state_16118[(2)]);
var state_16118__$1 = state_16118;
var statearr_16191_16252 = state_16118__$1;
(statearr_16191_16252[(2)] = inst_16045);

(statearr_16191_16252[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (42))){
var state_16118__$1 = state_16118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16118__$1,(45),dchan);
} else {
if((state_val_16119 === (37))){
var inst_16087 = (state_16118[(22)]);
var inst_16078 = (state_16118[(23)]);
var inst_15988 = (state_16118[(10)]);
var inst_16087__$1 = cljs.core.first(inst_16078);
var inst_16088 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16087__$1,inst_15988,done);
var state_16118__$1 = (function (){var statearr_16192 = state_16118;
(statearr_16192[(22)] = inst_16087__$1);

return statearr_16192;
})();
if(cljs.core.truth_(inst_16088)){
var statearr_16193_16253 = state_16118__$1;
(statearr_16193_16253[(1)] = (39));

} else {
var statearr_16194_16254 = state_16118__$1;
(statearr_16194_16254[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16119 === (8))){
var inst_15999 = (state_16118[(13)]);
var inst_16000 = (state_16118[(15)]);
var inst_16002 = (inst_16000 < inst_15999);
var inst_16003 = inst_16002;
var state_16118__$1 = state_16118;
if(cljs.core.truth_(inst_16003)){
var statearr_16195_16255 = state_16118__$1;
(statearr_16195_16255[(1)] = (10));

} else {
var statearr_16196_16256 = state_16118__$1;
(statearr_16196_16256[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__13297__auto__ = null;
var cljs$core$async$mult_$_state_machine__13297__auto____0 = (function (){
var statearr_16197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16197[(0)] = cljs$core$async$mult_$_state_machine__13297__auto__);

(statearr_16197[(1)] = (1));

return statearr_16197;
});
var cljs$core$async$mult_$_state_machine__13297__auto____1 = (function (state_16118){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16118);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16198){var ex__13300__auto__ = e16198;
var statearr_16199_16257 = state_16118;
(statearr_16199_16257[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16118[(4)]))){
var statearr_16200_16258 = state_16118;
(statearr_16200_16258[(1)] = cljs.core.first((state_16118[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16259 = state_16118;
state_16118 = G__16259;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13297__auto__ = function(state_16118){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13297__auto____1.call(this,state_16118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13297__auto____0;
cljs$core$async$mult_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13297__auto____1;
return cljs$core$async$mult_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16201 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16201[(6)] = c__13423__auto___16202);

return statearr_16201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16261 = arguments.length;
switch (G__16261) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_16263 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16263(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16264 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16264(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16265 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16265(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16266 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16266(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16267 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16267(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16278 = arguments.length;
var i__4737__auto___16279 = (0);
while(true){
if((i__4737__auto___16279 < len__4736__auto___16278)){
args__4742__auto__.push((arguments[i__4737__auto___16279]));

var G__16280 = (i__4737__auto___16279 + (1));
i__4737__auto___16279 = G__16280;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16272){
var map__16273 = p__16272;
var map__16273__$1 = (((((!((map__16273 == null))))?(((((map__16273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16273):map__16273);
var opts = map__16273__$1;
var statearr_16275_16281 = state;
(statearr_16275_16281[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16276_16282 = state;
(statearr_16276_16282[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_16277_16283 = state;
(statearr_16277_16283[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16268){
var G__16269 = cljs.core.first(seq16268);
var seq16268__$1 = cljs.core.next(seq16268);
var G__16270 = cljs.core.first(seq16268__$1);
var seq16268__$2 = cljs.core.next(seq16268__$1);
var G__16271 = cljs.core.first(seq16268__$2);
var seq16268__$3 = cljs.core.next(seq16268__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16269,G__16270,G__16271,seq16268__$3);
}));

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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16284 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16285){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16285 = meta16285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16286,meta16285__$1){
var self__ = this;
var _16286__$1 = this;
return (new cljs.core.async.t_cljs$core$async16284(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16285__$1));
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16286){
var self__ = this;
var _16286__$1 = this;
return self__.meta16285;
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16284.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16285], null);
}));

(cljs.core.async.t_cljs$core$async16284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16284");

(cljs.core.async.t_cljs$core$async16284.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16284.
 */
cljs.core.async.__GT_t_cljs$core$async16284 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16284(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16285){
return (new cljs.core.async.t_cljs$core$async16284(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16285));
});

}

return (new cljs.core.async.t_cljs$core$async16284(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13423__auto___16449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16388){
var state_val_16389 = (state_16388[(1)]);
if((state_val_16389 === (7))){
var inst_16303 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16390_16450 = state_16388__$1;
(statearr_16390_16450[(2)] = inst_16303);

(statearr_16390_16450[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (20))){
var inst_16315 = (state_16388[(7)]);
var state_16388__$1 = state_16388;
var statearr_16391_16451 = state_16388__$1;
(statearr_16391_16451[(2)] = inst_16315);

(statearr_16391_16451[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (27))){
var state_16388__$1 = state_16388;
var statearr_16392_16452 = state_16388__$1;
(statearr_16392_16452[(2)] = null);

(statearr_16392_16452[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (1))){
var inst_16290 = (state_16388[(8)]);
var inst_16290__$1 = calc_state();
var inst_16292 = (inst_16290__$1 == null);
var inst_16293 = cljs.core.not(inst_16292);
var state_16388__$1 = (function (){var statearr_16393 = state_16388;
(statearr_16393[(8)] = inst_16290__$1);

return statearr_16393;
})();
if(inst_16293){
var statearr_16394_16453 = state_16388__$1;
(statearr_16394_16453[(1)] = (2));

} else {
var statearr_16395_16454 = state_16388__$1;
(statearr_16395_16454[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (24))){
var inst_16362 = (state_16388[(9)]);
var inst_16339 = (state_16388[(10)]);
var inst_16348 = (state_16388[(11)]);
var inst_16362__$1 = (inst_16339.cljs$core$IFn$_invoke$arity$1 ? inst_16339.cljs$core$IFn$_invoke$arity$1(inst_16348) : inst_16339.call(null,inst_16348));
var state_16388__$1 = (function (){var statearr_16396 = state_16388;
(statearr_16396[(9)] = inst_16362__$1);

return statearr_16396;
})();
if(cljs.core.truth_(inst_16362__$1)){
var statearr_16397_16455 = state_16388__$1;
(statearr_16397_16455[(1)] = (29));

} else {
var statearr_16398_16456 = state_16388__$1;
(statearr_16398_16456[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (4))){
var inst_16306 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16306)){
var statearr_16399_16457 = state_16388__$1;
(statearr_16399_16457[(1)] = (8));

} else {
var statearr_16400_16458 = state_16388__$1;
(statearr_16400_16458[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (15))){
var inst_16333 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16333)){
var statearr_16401_16459 = state_16388__$1;
(statearr_16401_16459[(1)] = (19));

} else {
var statearr_16402_16460 = state_16388__$1;
(statearr_16402_16460[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (21))){
var inst_16338 = (state_16388[(12)]);
var inst_16338__$1 = (state_16388[(2)]);
var inst_16339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16338__$1,cljs.core.cst$kw$solos);
var inst_16340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16338__$1,cljs.core.cst$kw$mutes);
var inst_16341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16338__$1,cljs.core.cst$kw$reads);
var state_16388__$1 = (function (){var statearr_16403 = state_16388;
(statearr_16403[(12)] = inst_16338__$1);

(statearr_16403[(13)] = inst_16340);

(statearr_16403[(10)] = inst_16339);

return statearr_16403;
})();
return cljs.core.async.ioc_alts_BANG_(state_16388__$1,(22),inst_16341);
} else {
if((state_val_16389 === (31))){
var inst_16370 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16370)){
var statearr_16404_16461 = state_16388__$1;
(statearr_16404_16461[(1)] = (32));

} else {
var statearr_16405_16462 = state_16388__$1;
(statearr_16405_16462[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (32))){
var inst_16347 = (state_16388[(14)]);
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16388__$1,(35),out,inst_16347);
} else {
if((state_val_16389 === (33))){
var inst_16338 = (state_16388[(12)]);
var inst_16315 = inst_16338;
var state_16388__$1 = (function (){var statearr_16406 = state_16388;
(statearr_16406[(7)] = inst_16315);

return statearr_16406;
})();
var statearr_16407_16463 = state_16388__$1;
(statearr_16407_16463[(2)] = null);

(statearr_16407_16463[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (13))){
var inst_16315 = (state_16388[(7)]);
var inst_16322 = inst_16315.cljs$lang$protocol_mask$partition0$;
var inst_16323 = (inst_16322 & (64));
var inst_16324 = inst_16315.cljs$core$ISeq$;
var inst_16325 = (cljs.core.PROTOCOL_SENTINEL === inst_16324);
var inst_16326 = ((inst_16323) || (inst_16325));
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16326)){
var statearr_16408_16464 = state_16388__$1;
(statearr_16408_16464[(1)] = (16));

} else {
var statearr_16409_16465 = state_16388__$1;
(statearr_16409_16465[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (22))){
var inst_16347 = (state_16388[(14)]);
var inst_16348 = (state_16388[(11)]);
var inst_16346 = (state_16388[(2)]);
var inst_16347__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16346,(0),null);
var inst_16348__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16346,(1),null);
var inst_16349 = (inst_16347__$1 == null);
var inst_16350 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16348__$1,change);
var inst_16351 = ((inst_16349) || (inst_16350));
var state_16388__$1 = (function (){var statearr_16410 = state_16388;
(statearr_16410[(14)] = inst_16347__$1);

(statearr_16410[(11)] = inst_16348__$1);

return statearr_16410;
})();
if(cljs.core.truth_(inst_16351)){
var statearr_16411_16466 = state_16388__$1;
(statearr_16411_16466[(1)] = (23));

} else {
var statearr_16412_16467 = state_16388__$1;
(statearr_16412_16467[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (36))){
var inst_16338 = (state_16388[(12)]);
var inst_16315 = inst_16338;
var state_16388__$1 = (function (){var statearr_16413 = state_16388;
(statearr_16413[(7)] = inst_16315);

return statearr_16413;
})();
var statearr_16414_16468 = state_16388__$1;
(statearr_16414_16468[(2)] = null);

(statearr_16414_16468[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (29))){
var inst_16362 = (state_16388[(9)]);
var state_16388__$1 = state_16388;
var statearr_16415_16469 = state_16388__$1;
(statearr_16415_16469[(2)] = inst_16362);

(statearr_16415_16469[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (6))){
var state_16388__$1 = state_16388;
var statearr_16416_16470 = state_16388__$1;
(statearr_16416_16470[(2)] = false);

(statearr_16416_16470[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (28))){
var inst_16358 = (state_16388[(2)]);
var inst_16359 = calc_state();
var inst_16315 = inst_16359;
var state_16388__$1 = (function (){var statearr_16417 = state_16388;
(statearr_16417[(7)] = inst_16315);

(statearr_16417[(15)] = inst_16358);

return statearr_16417;
})();
var statearr_16418_16471 = state_16388__$1;
(statearr_16418_16471[(2)] = null);

(statearr_16418_16471[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (25))){
var inst_16384 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16419_16472 = state_16388__$1;
(statearr_16419_16472[(2)] = inst_16384);

(statearr_16419_16472[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (34))){
var inst_16382 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16420_16473 = state_16388__$1;
(statearr_16420_16473[(2)] = inst_16382);

(statearr_16420_16473[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (17))){
var state_16388__$1 = state_16388;
var statearr_16421_16474 = state_16388__$1;
(statearr_16421_16474[(2)] = false);

(statearr_16421_16474[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (3))){
var state_16388__$1 = state_16388;
var statearr_16422_16475 = state_16388__$1;
(statearr_16422_16475[(2)] = false);

(statearr_16422_16475[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (12))){
var inst_16386 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16388__$1,inst_16386);
} else {
if((state_val_16389 === (2))){
var inst_16290 = (state_16388[(8)]);
var inst_16295 = inst_16290.cljs$lang$protocol_mask$partition0$;
var inst_16296 = (inst_16295 & (64));
var inst_16297 = inst_16290.cljs$core$ISeq$;
var inst_16298 = (cljs.core.PROTOCOL_SENTINEL === inst_16297);
var inst_16299 = ((inst_16296) || (inst_16298));
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16299)){
var statearr_16423_16476 = state_16388__$1;
(statearr_16423_16476[(1)] = (5));

} else {
var statearr_16424_16477 = state_16388__$1;
(statearr_16424_16477[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (23))){
var inst_16347 = (state_16388[(14)]);
var inst_16353 = (inst_16347 == null);
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16353)){
var statearr_16425_16478 = state_16388__$1;
(statearr_16425_16478[(1)] = (26));

} else {
var statearr_16426_16479 = state_16388__$1;
(statearr_16426_16479[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (35))){
var inst_16373 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
if(cljs.core.truth_(inst_16373)){
var statearr_16427_16480 = state_16388__$1;
(statearr_16427_16480[(1)] = (36));

} else {
var statearr_16428_16481 = state_16388__$1;
(statearr_16428_16481[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (19))){
var inst_16315 = (state_16388[(7)]);
var inst_16335 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16315);
var state_16388__$1 = state_16388;
var statearr_16429_16482 = state_16388__$1;
(statearr_16429_16482[(2)] = inst_16335);

(statearr_16429_16482[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (11))){
var inst_16315 = (state_16388[(7)]);
var inst_16319 = (inst_16315 == null);
var inst_16320 = cljs.core.not(inst_16319);
var state_16388__$1 = state_16388;
if(inst_16320){
var statearr_16430_16483 = state_16388__$1;
(statearr_16430_16483[(1)] = (13));

} else {
var statearr_16431_16484 = state_16388__$1;
(statearr_16431_16484[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (9))){
var inst_16290 = (state_16388[(8)]);
var state_16388__$1 = state_16388;
var statearr_16432_16485 = state_16388__$1;
(statearr_16432_16485[(2)] = inst_16290);

(statearr_16432_16485[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (5))){
var state_16388__$1 = state_16388;
var statearr_16433_16486 = state_16388__$1;
(statearr_16433_16486[(2)] = true);

(statearr_16433_16486[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (14))){
var state_16388__$1 = state_16388;
var statearr_16434_16487 = state_16388__$1;
(statearr_16434_16487[(2)] = false);

(statearr_16434_16487[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (26))){
var inst_16348 = (state_16388[(11)]);
var inst_16355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16348);
var state_16388__$1 = state_16388;
var statearr_16435_16488 = state_16388__$1;
(statearr_16435_16488[(2)] = inst_16355);

(statearr_16435_16488[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (16))){
var state_16388__$1 = state_16388;
var statearr_16436_16489 = state_16388__$1;
(statearr_16436_16489[(2)] = true);

(statearr_16436_16489[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (38))){
var inst_16378 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16437_16490 = state_16388__$1;
(statearr_16437_16490[(2)] = inst_16378);

(statearr_16437_16490[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (30))){
var inst_16340 = (state_16388[(13)]);
var inst_16339 = (state_16388[(10)]);
var inst_16348 = (state_16388[(11)]);
var inst_16365 = cljs.core.empty_QMARK_(inst_16339);
var inst_16366 = (inst_16340.cljs$core$IFn$_invoke$arity$1 ? inst_16340.cljs$core$IFn$_invoke$arity$1(inst_16348) : inst_16340.call(null,inst_16348));
var inst_16367 = cljs.core.not(inst_16366);
var inst_16368 = ((inst_16365) && (inst_16367));
var state_16388__$1 = state_16388;
var statearr_16438_16491 = state_16388__$1;
(statearr_16438_16491[(2)] = inst_16368);

(statearr_16438_16491[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (10))){
var inst_16290 = (state_16388[(8)]);
var inst_16311 = (state_16388[(2)]);
var inst_16312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16311,cljs.core.cst$kw$solos);
var inst_16313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16311,cljs.core.cst$kw$mutes);
var inst_16314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16311,cljs.core.cst$kw$reads);
var inst_16315 = inst_16290;
var state_16388__$1 = (function (){var statearr_16439 = state_16388;
(statearr_16439[(7)] = inst_16315);

(statearr_16439[(16)] = inst_16314);

(statearr_16439[(17)] = inst_16312);

(statearr_16439[(18)] = inst_16313);

return statearr_16439;
})();
var statearr_16440_16492 = state_16388__$1;
(statearr_16440_16492[(2)] = null);

(statearr_16440_16492[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (18))){
var inst_16330 = (state_16388[(2)]);
var state_16388__$1 = state_16388;
var statearr_16441_16493 = state_16388__$1;
(statearr_16441_16493[(2)] = inst_16330);

(statearr_16441_16493[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (37))){
var state_16388__$1 = state_16388;
var statearr_16442_16494 = state_16388__$1;
(statearr_16442_16494[(2)] = null);

(statearr_16442_16494[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16389 === (8))){
var inst_16290 = (state_16388[(8)]);
var inst_16308 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16290);
var state_16388__$1 = state_16388;
var statearr_16443_16495 = state_16388__$1;
(statearr_16443_16495[(2)] = inst_16308);

(statearr_16443_16495[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__13297__auto__ = null;
var cljs$core$async$mix_$_state_machine__13297__auto____0 = (function (){
var statearr_16444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16444[(0)] = cljs$core$async$mix_$_state_machine__13297__auto__);

(statearr_16444[(1)] = (1));

return statearr_16444;
});
var cljs$core$async$mix_$_state_machine__13297__auto____1 = (function (state_16388){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16388);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16445){var ex__13300__auto__ = e16445;
var statearr_16446_16496 = state_16388;
(statearr_16446_16496[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16388[(4)]))){
var statearr_16447_16497 = state_16388;
(statearr_16447_16497[(1)] = cljs.core.first((state_16388[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16498 = state_16388;
state_16388 = G__16498;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13297__auto__ = function(state_16388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13297__auto____1.call(this,state_16388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13297__auto____0;
cljs$core$async$mix_$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13297__auto____1;
return cljs$core$async$mix_$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16448 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16448[(6)] = c__13423__auto___16449);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_16501 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16501(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16502 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16502(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16503 = (function() {
var G__16504 = null;
var G__16504__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16504__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16504 = function(p,v){
switch(arguments.length){
case 1:
return G__16504__1.call(this,p);
case 2:
return G__16504__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16504.cljs$core$IFn$_invoke$arity$1 = G__16504__1;
G__16504.cljs$core$IFn$_invoke$arity$2 = G__16504__2;
return G__16504;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16500 = arguments.length;
switch (G__16500) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16503.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16503.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__16508 = arguments.length;
switch (G__16508) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16506_SHARP_){
if(cljs.core.truth_((p1__16506_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16506_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16506_SHARP_.call(null,topic)))){
return p1__16506_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16506_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16510 = meta16510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16511,meta16510__$1){
var self__ = this;
var _16511__$1 = this;
return (new cljs.core.async.t_cljs$core$async16509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16510__$1));
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16511){
var self__ = this;
var _16511__$1 = this;
return self__.meta16510;
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16510], null);
}));

(cljs.core.async.t_cljs$core$async16509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16509");

(cljs.core.async.t_cljs$core$async16509.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16509.
 */
cljs.core.async.__GT_t_cljs$core$async16509 = (function cljs$core$async$__GT_t_cljs$core$async16509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16510){
return (new cljs.core.async.t_cljs$core$async16509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16510));
});

}

return (new cljs.core.async.t_cljs$core$async16509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13423__auto___16630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16583){
var state_val_16584 = (state_16583[(1)]);
if((state_val_16584 === (7))){
var inst_16579 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
var statearr_16585_16631 = state_16583__$1;
(statearr_16585_16631[(2)] = inst_16579);

(statearr_16585_16631[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (20))){
var state_16583__$1 = state_16583;
var statearr_16586_16632 = state_16583__$1;
(statearr_16586_16632[(2)] = null);

(statearr_16586_16632[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (1))){
var state_16583__$1 = state_16583;
var statearr_16587_16633 = state_16583__$1;
(statearr_16587_16633[(2)] = null);

(statearr_16587_16633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (24))){
var inst_16562 = (state_16583[(7)]);
var inst_16571 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16562);
var state_16583__$1 = state_16583;
var statearr_16588_16634 = state_16583__$1;
(statearr_16588_16634[(2)] = inst_16571);

(statearr_16588_16634[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (4))){
var inst_16514 = (state_16583[(8)]);
var inst_16514__$1 = (state_16583[(2)]);
var inst_16515 = (inst_16514__$1 == null);
var state_16583__$1 = (function (){var statearr_16589 = state_16583;
(statearr_16589[(8)] = inst_16514__$1);

return statearr_16589;
})();
if(cljs.core.truth_(inst_16515)){
var statearr_16590_16635 = state_16583__$1;
(statearr_16590_16635[(1)] = (5));

} else {
var statearr_16591_16636 = state_16583__$1;
(statearr_16591_16636[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (15))){
var inst_16556 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
var statearr_16592_16637 = state_16583__$1;
(statearr_16592_16637[(2)] = inst_16556);

(statearr_16592_16637[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (21))){
var inst_16576 = (state_16583[(2)]);
var state_16583__$1 = (function (){var statearr_16593 = state_16583;
(statearr_16593[(9)] = inst_16576);

return statearr_16593;
})();
var statearr_16594_16638 = state_16583__$1;
(statearr_16594_16638[(2)] = null);

(statearr_16594_16638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (13))){
var inst_16538 = (state_16583[(10)]);
var inst_16540 = cljs.core.chunked_seq_QMARK_(inst_16538);
var state_16583__$1 = state_16583;
if(inst_16540){
var statearr_16595_16639 = state_16583__$1;
(statearr_16595_16639[(1)] = (16));

} else {
var statearr_16596_16640 = state_16583__$1;
(statearr_16596_16640[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (22))){
var inst_16568 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
if(cljs.core.truth_(inst_16568)){
var statearr_16597_16641 = state_16583__$1;
(statearr_16597_16641[(1)] = (23));

} else {
var statearr_16598_16642 = state_16583__$1;
(statearr_16598_16642[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (6))){
var inst_16562 = (state_16583[(7)]);
var inst_16564 = (state_16583[(11)]);
var inst_16514 = (state_16583[(8)]);
var inst_16562__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16514) : topic_fn.call(null,inst_16514));
var inst_16563 = cljs.core.deref(mults);
var inst_16564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16563,inst_16562__$1);
var state_16583__$1 = (function (){var statearr_16599 = state_16583;
(statearr_16599[(7)] = inst_16562__$1);

(statearr_16599[(11)] = inst_16564__$1);

return statearr_16599;
})();
if(cljs.core.truth_(inst_16564__$1)){
var statearr_16600_16643 = state_16583__$1;
(statearr_16600_16643[(1)] = (19));

} else {
var statearr_16601_16644 = state_16583__$1;
(statearr_16601_16644[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (25))){
var inst_16573 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
var statearr_16602_16645 = state_16583__$1;
(statearr_16602_16645[(2)] = inst_16573);

(statearr_16602_16645[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (17))){
var inst_16538 = (state_16583[(10)]);
var inst_16547 = cljs.core.first(inst_16538);
var inst_16548 = cljs.core.async.muxch_STAR_(inst_16547);
var inst_16549 = cljs.core.async.close_BANG_(inst_16548);
var inst_16550 = cljs.core.next(inst_16538);
var inst_16524 = inst_16550;
var inst_16525 = null;
var inst_16526 = (0);
var inst_16527 = (0);
var state_16583__$1 = (function (){var statearr_16603 = state_16583;
(statearr_16603[(12)] = inst_16527);

(statearr_16603[(13)] = inst_16524);

(statearr_16603[(14)] = inst_16526);

(statearr_16603[(15)] = inst_16549);

(statearr_16603[(16)] = inst_16525);

return statearr_16603;
})();
var statearr_16604_16646 = state_16583__$1;
(statearr_16604_16646[(2)] = null);

(statearr_16604_16646[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (3))){
var inst_16581 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16583__$1,inst_16581);
} else {
if((state_val_16584 === (12))){
var inst_16558 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
var statearr_16605_16647 = state_16583__$1;
(statearr_16605_16647[(2)] = inst_16558);

(statearr_16605_16647[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (2))){
var state_16583__$1 = state_16583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16583__$1,(4),ch);
} else {
if((state_val_16584 === (23))){
var state_16583__$1 = state_16583;
var statearr_16606_16648 = state_16583__$1;
(statearr_16606_16648[(2)] = null);

(statearr_16606_16648[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (19))){
var inst_16564 = (state_16583[(11)]);
var inst_16514 = (state_16583[(8)]);
var inst_16566 = cljs.core.async.muxch_STAR_(inst_16564);
var state_16583__$1 = state_16583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16583__$1,(22),inst_16566,inst_16514);
} else {
if((state_val_16584 === (11))){
var inst_16538 = (state_16583[(10)]);
var inst_16524 = (state_16583[(13)]);
var inst_16538__$1 = cljs.core.seq(inst_16524);
var state_16583__$1 = (function (){var statearr_16607 = state_16583;
(statearr_16607[(10)] = inst_16538__$1);

return statearr_16607;
})();
if(inst_16538__$1){
var statearr_16608_16649 = state_16583__$1;
(statearr_16608_16649[(1)] = (13));

} else {
var statearr_16609_16650 = state_16583__$1;
(statearr_16609_16650[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (9))){
var inst_16560 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
var statearr_16610_16651 = state_16583__$1;
(statearr_16610_16651[(2)] = inst_16560);

(statearr_16610_16651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (5))){
var inst_16521 = cljs.core.deref(mults);
var inst_16522 = cljs.core.vals(inst_16521);
var inst_16523 = cljs.core.seq(inst_16522);
var inst_16524 = inst_16523;
var inst_16525 = null;
var inst_16526 = (0);
var inst_16527 = (0);
var state_16583__$1 = (function (){var statearr_16611 = state_16583;
(statearr_16611[(12)] = inst_16527);

(statearr_16611[(13)] = inst_16524);

(statearr_16611[(14)] = inst_16526);

(statearr_16611[(16)] = inst_16525);

return statearr_16611;
})();
var statearr_16612_16652 = state_16583__$1;
(statearr_16612_16652[(2)] = null);

(statearr_16612_16652[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (14))){
var state_16583__$1 = state_16583;
var statearr_16616_16653 = state_16583__$1;
(statearr_16616_16653[(2)] = null);

(statearr_16616_16653[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (16))){
var inst_16538 = (state_16583[(10)]);
var inst_16542 = cljs.core.chunk_first(inst_16538);
var inst_16543 = cljs.core.chunk_rest(inst_16538);
var inst_16544 = cljs.core.count(inst_16542);
var inst_16524 = inst_16543;
var inst_16525 = inst_16542;
var inst_16526 = inst_16544;
var inst_16527 = (0);
var state_16583__$1 = (function (){var statearr_16617 = state_16583;
(statearr_16617[(12)] = inst_16527);

(statearr_16617[(13)] = inst_16524);

(statearr_16617[(14)] = inst_16526);

(statearr_16617[(16)] = inst_16525);

return statearr_16617;
})();
var statearr_16618_16654 = state_16583__$1;
(statearr_16618_16654[(2)] = null);

(statearr_16618_16654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (10))){
var inst_16527 = (state_16583[(12)]);
var inst_16524 = (state_16583[(13)]);
var inst_16526 = (state_16583[(14)]);
var inst_16525 = (state_16583[(16)]);
var inst_16532 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16525,inst_16527);
var inst_16533 = cljs.core.async.muxch_STAR_(inst_16532);
var inst_16534 = cljs.core.async.close_BANG_(inst_16533);
var inst_16535 = (inst_16527 + (1));
var tmp16613 = inst_16524;
var tmp16614 = inst_16526;
var tmp16615 = inst_16525;
var inst_16524__$1 = tmp16613;
var inst_16525__$1 = tmp16615;
var inst_16526__$1 = tmp16614;
var inst_16527__$1 = inst_16535;
var state_16583__$1 = (function (){var statearr_16619 = state_16583;
(statearr_16619[(12)] = inst_16527__$1);

(statearr_16619[(13)] = inst_16524__$1);

(statearr_16619[(14)] = inst_16526__$1);

(statearr_16619[(17)] = inst_16534);

(statearr_16619[(16)] = inst_16525__$1);

return statearr_16619;
})();
var statearr_16620_16655 = state_16583__$1;
(statearr_16620_16655[(2)] = null);

(statearr_16620_16655[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (18))){
var inst_16553 = (state_16583[(2)]);
var state_16583__$1 = state_16583;
var statearr_16621_16656 = state_16583__$1;
(statearr_16621_16656[(2)] = inst_16553);

(statearr_16621_16656[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16584 === (8))){
var inst_16527 = (state_16583[(12)]);
var inst_16526 = (state_16583[(14)]);
var inst_16529 = (inst_16527 < inst_16526);
var inst_16530 = inst_16529;
var state_16583__$1 = state_16583;
if(cljs.core.truth_(inst_16530)){
var statearr_16622_16657 = state_16583__$1;
(statearr_16622_16657[(1)] = (10));

} else {
var statearr_16623_16658 = state_16583__$1;
(statearr_16623_16658[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_16624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16624[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_16624[(1)] = (1));

return statearr_16624;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_16583){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16583);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16625){var ex__13300__auto__ = e16625;
var statearr_16626_16659 = state_16583;
(statearr_16626_16659[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16583[(4)]))){
var statearr_16627_16660 = state_16583;
(statearr_16627_16660[(1)] = cljs.core.first((state_16583[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16661 = state_16583;
state_16583 = G__16661;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_16583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_16583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16628 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16628[(6)] = c__13423__auto___16630);

return statearr_16628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16663 = arguments.length;
switch (G__16663) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__16666 = arguments.length;
switch (G__16666) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16669 = arguments.length;
switch (G__16669) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13423__auto___16747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16712){
var state_val_16713 = (state_16712[(1)]);
if((state_val_16713 === (7))){
var state_16712__$1 = state_16712;
var statearr_16714_16748 = state_16712__$1;
(statearr_16714_16748[(2)] = null);

(statearr_16714_16748[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (1))){
var state_16712__$1 = state_16712;
var statearr_16715_16749 = state_16712__$1;
(statearr_16715_16749[(2)] = null);

(statearr_16715_16749[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (4))){
var inst_16672 = (state_16712[(7)]);
var inst_16673 = (state_16712[(8)]);
var inst_16675 = (inst_16673 < inst_16672);
var state_16712__$1 = state_16712;
if(cljs.core.truth_(inst_16675)){
var statearr_16716_16750 = state_16712__$1;
(statearr_16716_16750[(1)] = (6));

} else {
var statearr_16717_16751 = state_16712__$1;
(statearr_16717_16751[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (15))){
var inst_16698 = (state_16712[(9)]);
var inst_16703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16698);
var state_16712__$1 = state_16712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16712__$1,(17),out,inst_16703);
} else {
if((state_val_16713 === (13))){
var inst_16698 = (state_16712[(9)]);
var inst_16698__$1 = (state_16712[(2)]);
var inst_16699 = cljs.core.some(cljs.core.nil_QMARK_,inst_16698__$1);
var state_16712__$1 = (function (){var statearr_16718 = state_16712;
(statearr_16718[(9)] = inst_16698__$1);

return statearr_16718;
})();
if(cljs.core.truth_(inst_16699)){
var statearr_16719_16752 = state_16712__$1;
(statearr_16719_16752[(1)] = (14));

} else {
var statearr_16720_16753 = state_16712__$1;
(statearr_16720_16753[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (6))){
var state_16712__$1 = state_16712;
var statearr_16721_16754 = state_16712__$1;
(statearr_16721_16754[(2)] = null);

(statearr_16721_16754[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (17))){
var inst_16705 = (state_16712[(2)]);
var state_16712__$1 = (function (){var statearr_16723 = state_16712;
(statearr_16723[(10)] = inst_16705);

return statearr_16723;
})();
var statearr_16724_16755 = state_16712__$1;
(statearr_16724_16755[(2)] = null);

(statearr_16724_16755[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (3))){
var inst_16710 = (state_16712[(2)]);
var state_16712__$1 = state_16712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16712__$1,inst_16710);
} else {
if((state_val_16713 === (12))){
var _ = (function (){var statearr_16725 = state_16712;
(statearr_16725[(4)] = cljs.core.rest((state_16712[(4)])));

return statearr_16725;
})();
var state_16712__$1 = state_16712;
var ex16722 = (state_16712__$1[(2)]);
var statearr_16726_16756 = state_16712__$1;
(statearr_16726_16756[(5)] = ex16722);


if((ex16722 instanceof Object)){
var statearr_16727_16757 = state_16712__$1;
(statearr_16727_16757[(1)] = (11));

(statearr_16727_16757[(5)] = null);

} else {
throw ex16722;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (2))){
var inst_16671 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16672 = cnt;
var inst_16673 = (0);
var state_16712__$1 = (function (){var statearr_16728 = state_16712;
(statearr_16728[(7)] = inst_16672);

(statearr_16728[(8)] = inst_16673);

(statearr_16728[(11)] = inst_16671);

return statearr_16728;
})();
var statearr_16729_16758 = state_16712__$1;
(statearr_16729_16758[(2)] = null);

(statearr_16729_16758[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (11))){
var inst_16677 = (state_16712[(2)]);
var inst_16678 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16712__$1 = (function (){var statearr_16730 = state_16712;
(statearr_16730[(12)] = inst_16677);

return statearr_16730;
})();
var statearr_16731_16759 = state_16712__$1;
(statearr_16731_16759[(2)] = inst_16678);

(statearr_16731_16759[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (9))){
var inst_16673 = (state_16712[(8)]);
var _ = (function (){var statearr_16732 = state_16712;
(statearr_16732[(4)] = cljs.core.cons((12),(state_16712[(4)])));

return statearr_16732;
})();
var inst_16684 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16673) : chs__$1.call(null,inst_16673));
var inst_16685 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16673) : done.call(null,inst_16673));
var inst_16686 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16684,inst_16685);
var ___$1 = (function (){var statearr_16733 = state_16712;
(statearr_16733[(4)] = cljs.core.rest((state_16712[(4)])));

return statearr_16733;
})();
var state_16712__$1 = state_16712;
var statearr_16734_16760 = state_16712__$1;
(statearr_16734_16760[(2)] = inst_16686);

(statearr_16734_16760[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (5))){
var inst_16696 = (state_16712[(2)]);
var state_16712__$1 = (function (){var statearr_16735 = state_16712;
(statearr_16735[(13)] = inst_16696);

return statearr_16735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16712__$1,(13),dchan);
} else {
if((state_val_16713 === (14))){
var inst_16701 = cljs.core.async.close_BANG_(out);
var state_16712__$1 = state_16712;
var statearr_16736_16761 = state_16712__$1;
(statearr_16736_16761[(2)] = inst_16701);

(statearr_16736_16761[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (16))){
var inst_16708 = (state_16712[(2)]);
var state_16712__$1 = state_16712;
var statearr_16737_16762 = state_16712__$1;
(statearr_16737_16762[(2)] = inst_16708);

(statearr_16737_16762[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (10))){
var inst_16673 = (state_16712[(8)]);
var inst_16689 = (state_16712[(2)]);
var inst_16690 = (inst_16673 + (1));
var inst_16673__$1 = inst_16690;
var state_16712__$1 = (function (){var statearr_16738 = state_16712;
(statearr_16738[(8)] = inst_16673__$1);

(statearr_16738[(14)] = inst_16689);

return statearr_16738;
})();
var statearr_16739_16763 = state_16712__$1;
(statearr_16739_16763[(2)] = null);

(statearr_16739_16763[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16713 === (8))){
var inst_16694 = (state_16712[(2)]);
var state_16712__$1 = state_16712;
var statearr_16740_16764 = state_16712__$1;
(statearr_16740_16764[(2)] = inst_16694);

(statearr_16740_16764[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_16741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16741[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_16741[(1)] = (1));

return statearr_16741;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_16712){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16712);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16742){var ex__13300__auto__ = e16742;
var statearr_16743_16765 = state_16712;
(statearr_16743_16765[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16712[(4)]))){
var statearr_16744_16766 = state_16712;
(statearr_16744_16766[(1)] = cljs.core.first((state_16712[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16767 = state_16712;
state_16712 = G__16767;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_16712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_16712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16745 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16745[(6)] = c__13423__auto___16747);

return statearr_16745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16770 = arguments.length;
switch (G__16770) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13423__auto___16825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16802){
var state_val_16803 = (state_16802[(1)]);
if((state_val_16803 === (7))){
var inst_16782 = (state_16802[(7)]);
var inst_16781 = (state_16802[(8)]);
var inst_16781__$1 = (state_16802[(2)]);
var inst_16782__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16781__$1,(0),null);
var inst_16783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16781__$1,(1),null);
var inst_16784 = (inst_16782__$1 == null);
var state_16802__$1 = (function (){var statearr_16804 = state_16802;
(statearr_16804[(9)] = inst_16783);

(statearr_16804[(7)] = inst_16782__$1);

(statearr_16804[(8)] = inst_16781__$1);

return statearr_16804;
})();
if(cljs.core.truth_(inst_16784)){
var statearr_16805_16826 = state_16802__$1;
(statearr_16805_16826[(1)] = (8));

} else {
var statearr_16806_16827 = state_16802__$1;
(statearr_16806_16827[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (1))){
var inst_16771 = cljs.core.vec(chs);
var inst_16772 = inst_16771;
var state_16802__$1 = (function (){var statearr_16807 = state_16802;
(statearr_16807[(10)] = inst_16772);

return statearr_16807;
})();
var statearr_16808_16828 = state_16802__$1;
(statearr_16808_16828[(2)] = null);

(statearr_16808_16828[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (4))){
var inst_16772 = (state_16802[(10)]);
var state_16802__$1 = state_16802;
return cljs.core.async.ioc_alts_BANG_(state_16802__$1,(7),inst_16772);
} else {
if((state_val_16803 === (6))){
var inst_16798 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16809_16829 = state_16802__$1;
(statearr_16809_16829[(2)] = inst_16798);

(statearr_16809_16829[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (3))){
var inst_16800 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16802__$1,inst_16800);
} else {
if((state_val_16803 === (2))){
var inst_16772 = (state_16802[(10)]);
var inst_16774 = cljs.core.count(inst_16772);
var inst_16775 = (inst_16774 > (0));
var state_16802__$1 = state_16802;
if(cljs.core.truth_(inst_16775)){
var statearr_16811_16830 = state_16802__$1;
(statearr_16811_16830[(1)] = (4));

} else {
var statearr_16812_16831 = state_16802__$1;
(statearr_16812_16831[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (11))){
var inst_16772 = (state_16802[(10)]);
var inst_16791 = (state_16802[(2)]);
var tmp16810 = inst_16772;
var inst_16772__$1 = tmp16810;
var state_16802__$1 = (function (){var statearr_16813 = state_16802;
(statearr_16813[(10)] = inst_16772__$1);

(statearr_16813[(11)] = inst_16791);

return statearr_16813;
})();
var statearr_16814_16832 = state_16802__$1;
(statearr_16814_16832[(2)] = null);

(statearr_16814_16832[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (9))){
var inst_16782 = (state_16802[(7)]);
var state_16802__$1 = state_16802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16802__$1,(11),out,inst_16782);
} else {
if((state_val_16803 === (5))){
var inst_16796 = cljs.core.async.close_BANG_(out);
var state_16802__$1 = state_16802;
var statearr_16815_16833 = state_16802__$1;
(statearr_16815_16833[(2)] = inst_16796);

(statearr_16815_16833[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (10))){
var inst_16794 = (state_16802[(2)]);
var state_16802__$1 = state_16802;
var statearr_16816_16834 = state_16802__$1;
(statearr_16816_16834[(2)] = inst_16794);

(statearr_16816_16834[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16803 === (8))){
var inst_16783 = (state_16802[(9)]);
var inst_16772 = (state_16802[(10)]);
var inst_16782 = (state_16802[(7)]);
var inst_16781 = (state_16802[(8)]);
var inst_16786 = (function (){var cs = inst_16772;
var vec__16777 = inst_16781;
var v = inst_16782;
var c = inst_16783;
return (function (p1__16768_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16768_SHARP_);
});
})();
var inst_16787 = cljs.core.filterv(inst_16786,inst_16772);
var inst_16772__$1 = inst_16787;
var state_16802__$1 = (function (){var statearr_16817 = state_16802;
(statearr_16817[(10)] = inst_16772__$1);

return statearr_16817;
})();
var statearr_16818_16835 = state_16802__$1;
(statearr_16818_16835[(2)] = null);

(statearr_16818_16835[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_16819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16819[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_16819[(1)] = (1));

return statearr_16819;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_16802){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16802);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16820){var ex__13300__auto__ = e16820;
var statearr_16821_16836 = state_16802;
(statearr_16821_16836[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16802[(4)]))){
var statearr_16822_16837 = state_16802;
(statearr_16822_16837[(1)] = cljs.core.first((state_16802[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16838 = state_16802;
state_16802 = G__16838;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_16802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_16802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16823 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16823[(6)] = c__13423__auto___16825);

return statearr_16823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__16840 = arguments.length;
switch (G__16840) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13423__auto___16886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16864){
var state_val_16865 = (state_16864[(1)]);
if((state_val_16865 === (7))){
var inst_16846 = (state_16864[(7)]);
var inst_16846__$1 = (state_16864[(2)]);
var inst_16847 = (inst_16846__$1 == null);
var inst_16848 = cljs.core.not(inst_16847);
var state_16864__$1 = (function (){var statearr_16866 = state_16864;
(statearr_16866[(7)] = inst_16846__$1);

return statearr_16866;
})();
if(inst_16848){
var statearr_16867_16887 = state_16864__$1;
(statearr_16867_16887[(1)] = (8));

} else {
var statearr_16868_16888 = state_16864__$1;
(statearr_16868_16888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (1))){
var inst_16841 = (0);
var state_16864__$1 = (function (){var statearr_16869 = state_16864;
(statearr_16869[(8)] = inst_16841);

return statearr_16869;
})();
var statearr_16870_16889 = state_16864__$1;
(statearr_16870_16889[(2)] = null);

(statearr_16870_16889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (4))){
var state_16864__$1 = state_16864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16864__$1,(7),ch);
} else {
if((state_val_16865 === (6))){
var inst_16859 = (state_16864[(2)]);
var state_16864__$1 = state_16864;
var statearr_16871_16890 = state_16864__$1;
(statearr_16871_16890[(2)] = inst_16859);

(statearr_16871_16890[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (3))){
var inst_16861 = (state_16864[(2)]);
var inst_16862 = cljs.core.async.close_BANG_(out);
var state_16864__$1 = (function (){var statearr_16872 = state_16864;
(statearr_16872[(9)] = inst_16861);

return statearr_16872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16864__$1,inst_16862);
} else {
if((state_val_16865 === (2))){
var inst_16841 = (state_16864[(8)]);
var inst_16843 = (inst_16841 < n);
var state_16864__$1 = state_16864;
if(cljs.core.truth_(inst_16843)){
var statearr_16873_16891 = state_16864__$1;
(statearr_16873_16891[(1)] = (4));

} else {
var statearr_16874_16892 = state_16864__$1;
(statearr_16874_16892[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (11))){
var inst_16841 = (state_16864[(8)]);
var inst_16851 = (state_16864[(2)]);
var inst_16852 = (inst_16841 + (1));
var inst_16841__$1 = inst_16852;
var state_16864__$1 = (function (){var statearr_16875 = state_16864;
(statearr_16875[(8)] = inst_16841__$1);

(statearr_16875[(10)] = inst_16851);

return statearr_16875;
})();
var statearr_16876_16893 = state_16864__$1;
(statearr_16876_16893[(2)] = null);

(statearr_16876_16893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (9))){
var state_16864__$1 = state_16864;
var statearr_16877_16894 = state_16864__$1;
(statearr_16877_16894[(2)] = null);

(statearr_16877_16894[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (5))){
var state_16864__$1 = state_16864;
var statearr_16878_16895 = state_16864__$1;
(statearr_16878_16895[(2)] = null);

(statearr_16878_16895[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (10))){
var inst_16856 = (state_16864[(2)]);
var state_16864__$1 = state_16864;
var statearr_16879_16896 = state_16864__$1;
(statearr_16879_16896[(2)] = inst_16856);

(statearr_16879_16896[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16865 === (8))){
var inst_16846 = (state_16864[(7)]);
var state_16864__$1 = state_16864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16864__$1,(11),out,inst_16846);
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_16880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16880[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_16880[(1)] = (1));

return statearr_16880;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_16864){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16864);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16881){var ex__13300__auto__ = e16881;
var statearr_16882_16897 = state_16864;
(statearr_16882_16897[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16864[(4)]))){
var statearr_16883_16898 = state_16864;
(statearr_16883_16898[(1)] = cljs.core.first((state_16864[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16899 = state_16864;
state_16864 = G__16899;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_16864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_16864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16884 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16884[(6)] = c__13423__auto___16886);

return statearr_16884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16901 = (function (f,ch,meta16902){
this.f = f;
this.ch = ch;
this.meta16902 = meta16902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16903,meta16902__$1){
var self__ = this;
var _16903__$1 = this;
return (new cljs.core.async.t_cljs$core$async16901(self__.f,self__.ch,meta16902__$1));
}));

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16903){
var self__ = this;
var _16903__$1 = this;
return self__.meta16902;
}));

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16904 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16904 = (function (f,ch,meta16902,_,fn1,meta16905){
this.f = f;
this.ch = ch;
this.meta16902 = meta16902;
this._ = _;
this.fn1 = fn1;
this.meta16905 = meta16905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16906,meta16905__$1){
var self__ = this;
var _16906__$1 = this;
return (new cljs.core.async.t_cljs$core$async16904(self__.f,self__.ch,self__.meta16902,self__._,self__.fn1,meta16905__$1));
}));

(cljs.core.async.t_cljs$core$async16904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16906){
var self__ = this;
var _16906__$1 = this;
return self__.meta16905;
}));

(cljs.core.async.t_cljs$core$async16904.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16900_SHARP_){
var G__16907 = (((p1__16900_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16900_SHARP_) : self__.f.call(null,p1__16900_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16907) : f1.call(null,G__16907));
});
}));

(cljs.core.async.t_cljs$core$async16904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16902,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16901], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16905], null);
}));

(cljs.core.async.t_cljs$core$async16904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16904");

(cljs.core.async.t_cljs$core$async16904.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16904.
 */
cljs.core.async.__GT_t_cljs$core$async16904 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16904(f__$1,ch__$1,meta16902__$1,___$2,fn1__$1,meta16905){
return (new cljs.core.async.t_cljs$core$async16904(f__$1,ch__$1,meta16902__$1,___$2,fn1__$1,meta16905));
});

}

return (new cljs.core.async.t_cljs$core$async16904(self__.f,self__.ch,self__.meta16902,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16908 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16908) : self__.f.call(null,G__16908));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16902], null);
}));

(cljs.core.async.t_cljs$core$async16901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16901");

(cljs.core.async.t_cljs$core$async16901.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16901.
 */
cljs.core.async.__GT_t_cljs$core$async16901 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16901(f__$1,ch__$1,meta16902){
return (new cljs.core.async.t_cljs$core$async16901(f__$1,ch__$1,meta16902));
});

}

return (new cljs.core.async.t_cljs$core$async16901(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16909 = (function (f,ch,meta16910){
this.f = f;
this.ch = ch;
this.meta16910 = meta16910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16911,meta16910__$1){
var self__ = this;
var _16911__$1 = this;
return (new cljs.core.async.t_cljs$core$async16909(self__.f,self__.ch,meta16910__$1));
}));

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16911){
var self__ = this;
var _16911__$1 = this;
return self__.meta16910;
}));

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16910], null);
}));

(cljs.core.async.t_cljs$core$async16909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16909");

(cljs.core.async.t_cljs$core$async16909.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16909.
 */
cljs.core.async.__GT_t_cljs$core$async16909 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16909(f__$1,ch__$1,meta16910){
return (new cljs.core.async.t_cljs$core$async16909(f__$1,ch__$1,meta16910));
});

}

return (new cljs.core.async.t_cljs$core$async16909(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16912 = (function (p,ch,meta16913){
this.p = p;
this.ch = ch;
this.meta16913 = meta16913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16914,meta16913__$1){
var self__ = this;
var _16914__$1 = this;
return (new cljs.core.async.t_cljs$core$async16912(self__.p,self__.ch,meta16913__$1));
}));

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16914){
var self__ = this;
var _16914__$1 = this;
return self__.meta16913;
}));

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16913], null);
}));

(cljs.core.async.t_cljs$core$async16912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16912");

(cljs.core.async.t_cljs$core$async16912.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async16912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16912.
 */
cljs.core.async.__GT_t_cljs$core$async16912 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16912(p__$1,ch__$1,meta16913){
return (new cljs.core.async.t_cljs$core$async16912(p__$1,ch__$1,meta16913));
});

}

return (new cljs.core.async.t_cljs$core$async16912(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16916 = arguments.length;
switch (G__16916) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13423__auto___16957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_16937){
var state_val_16938 = (state_16937[(1)]);
if((state_val_16938 === (7))){
var inst_16933 = (state_16937[(2)]);
var state_16937__$1 = state_16937;
var statearr_16939_16958 = state_16937__$1;
(statearr_16939_16958[(2)] = inst_16933);

(statearr_16939_16958[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (1))){
var state_16937__$1 = state_16937;
var statearr_16940_16959 = state_16937__$1;
(statearr_16940_16959[(2)] = null);

(statearr_16940_16959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (4))){
var inst_16919 = (state_16937[(7)]);
var inst_16919__$1 = (state_16937[(2)]);
var inst_16920 = (inst_16919__$1 == null);
var state_16937__$1 = (function (){var statearr_16941 = state_16937;
(statearr_16941[(7)] = inst_16919__$1);

return statearr_16941;
})();
if(cljs.core.truth_(inst_16920)){
var statearr_16942_16960 = state_16937__$1;
(statearr_16942_16960[(1)] = (5));

} else {
var statearr_16943_16961 = state_16937__$1;
(statearr_16943_16961[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (6))){
var inst_16919 = (state_16937[(7)]);
var inst_16924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16919) : p.call(null,inst_16919));
var state_16937__$1 = state_16937;
if(cljs.core.truth_(inst_16924)){
var statearr_16944_16962 = state_16937__$1;
(statearr_16944_16962[(1)] = (8));

} else {
var statearr_16945_16963 = state_16937__$1;
(statearr_16945_16963[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (3))){
var inst_16935 = (state_16937[(2)]);
var state_16937__$1 = state_16937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16937__$1,inst_16935);
} else {
if((state_val_16938 === (2))){
var state_16937__$1 = state_16937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16937__$1,(4),ch);
} else {
if((state_val_16938 === (11))){
var inst_16927 = (state_16937[(2)]);
var state_16937__$1 = state_16937;
var statearr_16946_16964 = state_16937__$1;
(statearr_16946_16964[(2)] = inst_16927);

(statearr_16946_16964[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (9))){
var state_16937__$1 = state_16937;
var statearr_16947_16965 = state_16937__$1;
(statearr_16947_16965[(2)] = null);

(statearr_16947_16965[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (5))){
var inst_16922 = cljs.core.async.close_BANG_(out);
var state_16937__$1 = state_16937;
var statearr_16948_16966 = state_16937__$1;
(statearr_16948_16966[(2)] = inst_16922);

(statearr_16948_16966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (10))){
var inst_16930 = (state_16937[(2)]);
var state_16937__$1 = (function (){var statearr_16949 = state_16937;
(statearr_16949[(8)] = inst_16930);

return statearr_16949;
})();
var statearr_16950_16967 = state_16937__$1;
(statearr_16950_16967[(2)] = null);

(statearr_16950_16967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16938 === (8))){
var inst_16919 = (state_16937[(7)]);
var state_16937__$1 = state_16937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16937__$1,(11),out,inst_16919);
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_16951 = [null,null,null,null,null,null,null,null,null];
(statearr_16951[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_16951[(1)] = (1));

return statearr_16951;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_16937){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_16937);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e16952){var ex__13300__auto__ = e16952;
var statearr_16953_16968 = state_16937;
(statearr_16953_16968[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_16937[(4)]))){
var statearr_16954_16969 = state_16937;
(statearr_16954_16969[(1)] = cljs.core.first((state_16937[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__16970 = state_16937;
state_16937 = G__16970;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_16937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_16937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_16955 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_16955[(6)] = c__13423__auto___16957);

return statearr_16955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16972 = arguments.length;
switch (G__16972) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13423__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_17035){
var state_val_17036 = (state_17035[(1)]);
if((state_val_17036 === (7))){
var inst_17031 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17037_17076 = state_17035__$1;
(statearr_17037_17076[(2)] = inst_17031);

(statearr_17037_17076[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (20))){
var inst_17001 = (state_17035[(7)]);
var inst_17012 = (state_17035[(2)]);
var inst_17013 = cljs.core.next(inst_17001);
var inst_16987 = inst_17013;
var inst_16988 = null;
var inst_16989 = (0);
var inst_16990 = (0);
var state_17035__$1 = (function (){var statearr_17038 = state_17035;
(statearr_17038[(8)] = inst_16989);

(statearr_17038[(9)] = inst_16988);

(statearr_17038[(10)] = inst_17012);

(statearr_17038[(11)] = inst_16990);

(statearr_17038[(12)] = inst_16987);

return statearr_17038;
})();
var statearr_17039_17077 = state_17035__$1;
(statearr_17039_17077[(2)] = null);

(statearr_17039_17077[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (1))){
var state_17035__$1 = state_17035;
var statearr_17040_17078 = state_17035__$1;
(statearr_17040_17078[(2)] = null);

(statearr_17040_17078[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (4))){
var inst_16976 = (state_17035[(13)]);
var inst_16976__$1 = (state_17035[(2)]);
var inst_16977 = (inst_16976__$1 == null);
var state_17035__$1 = (function (){var statearr_17041 = state_17035;
(statearr_17041[(13)] = inst_16976__$1);

return statearr_17041;
})();
if(cljs.core.truth_(inst_16977)){
var statearr_17042_17079 = state_17035__$1;
(statearr_17042_17079[(1)] = (5));

} else {
var statearr_17043_17080 = state_17035__$1;
(statearr_17043_17080[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (15))){
var state_17035__$1 = state_17035;
var statearr_17047_17081 = state_17035__$1;
(statearr_17047_17081[(2)] = null);

(statearr_17047_17081[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (21))){
var state_17035__$1 = state_17035;
var statearr_17048_17082 = state_17035__$1;
(statearr_17048_17082[(2)] = null);

(statearr_17048_17082[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (13))){
var inst_16989 = (state_17035[(8)]);
var inst_16988 = (state_17035[(9)]);
var inst_16990 = (state_17035[(11)]);
var inst_16987 = (state_17035[(12)]);
var inst_16997 = (state_17035[(2)]);
var inst_16998 = (inst_16990 + (1));
var tmp17044 = inst_16989;
var tmp17045 = inst_16988;
var tmp17046 = inst_16987;
var inst_16987__$1 = tmp17046;
var inst_16988__$1 = tmp17045;
var inst_16989__$1 = tmp17044;
var inst_16990__$1 = inst_16998;
var state_17035__$1 = (function (){var statearr_17049 = state_17035;
(statearr_17049[(8)] = inst_16989__$1);

(statearr_17049[(14)] = inst_16997);

(statearr_17049[(9)] = inst_16988__$1);

(statearr_17049[(11)] = inst_16990__$1);

(statearr_17049[(12)] = inst_16987__$1);

return statearr_17049;
})();
var statearr_17050_17083 = state_17035__$1;
(statearr_17050_17083[(2)] = null);

(statearr_17050_17083[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (22))){
var state_17035__$1 = state_17035;
var statearr_17051_17084 = state_17035__$1;
(statearr_17051_17084[(2)] = null);

(statearr_17051_17084[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (6))){
var inst_16976 = (state_17035[(13)]);
var inst_16985 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16976) : f.call(null,inst_16976));
var inst_16986 = cljs.core.seq(inst_16985);
var inst_16987 = inst_16986;
var inst_16988 = null;
var inst_16989 = (0);
var inst_16990 = (0);
var state_17035__$1 = (function (){var statearr_17052 = state_17035;
(statearr_17052[(8)] = inst_16989);

(statearr_17052[(9)] = inst_16988);

(statearr_17052[(11)] = inst_16990);

(statearr_17052[(12)] = inst_16987);

return statearr_17052;
})();
var statearr_17053_17085 = state_17035__$1;
(statearr_17053_17085[(2)] = null);

(statearr_17053_17085[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (17))){
var inst_17001 = (state_17035[(7)]);
var inst_17005 = cljs.core.chunk_first(inst_17001);
var inst_17006 = cljs.core.chunk_rest(inst_17001);
var inst_17007 = cljs.core.count(inst_17005);
var inst_16987 = inst_17006;
var inst_16988 = inst_17005;
var inst_16989 = inst_17007;
var inst_16990 = (0);
var state_17035__$1 = (function (){var statearr_17054 = state_17035;
(statearr_17054[(8)] = inst_16989);

(statearr_17054[(9)] = inst_16988);

(statearr_17054[(11)] = inst_16990);

(statearr_17054[(12)] = inst_16987);

return statearr_17054;
})();
var statearr_17055_17086 = state_17035__$1;
(statearr_17055_17086[(2)] = null);

(statearr_17055_17086[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (3))){
var inst_17033 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17035__$1,inst_17033);
} else {
if((state_val_17036 === (12))){
var inst_17021 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17056_17087 = state_17035__$1;
(statearr_17056_17087[(2)] = inst_17021);

(statearr_17056_17087[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (2))){
var state_17035__$1 = state_17035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17035__$1,(4),in$);
} else {
if((state_val_17036 === (23))){
var inst_17029 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17057_17088 = state_17035__$1;
(statearr_17057_17088[(2)] = inst_17029);

(statearr_17057_17088[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (19))){
var inst_17016 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17058_17089 = state_17035__$1;
(statearr_17058_17089[(2)] = inst_17016);

(statearr_17058_17089[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (11))){
var inst_17001 = (state_17035[(7)]);
var inst_16987 = (state_17035[(12)]);
var inst_17001__$1 = cljs.core.seq(inst_16987);
var state_17035__$1 = (function (){var statearr_17059 = state_17035;
(statearr_17059[(7)] = inst_17001__$1);

return statearr_17059;
})();
if(inst_17001__$1){
var statearr_17060_17090 = state_17035__$1;
(statearr_17060_17090[(1)] = (14));

} else {
var statearr_17061_17091 = state_17035__$1;
(statearr_17061_17091[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (9))){
var inst_17023 = (state_17035[(2)]);
var inst_17024 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17035__$1 = (function (){var statearr_17062 = state_17035;
(statearr_17062[(15)] = inst_17023);

return statearr_17062;
})();
if(cljs.core.truth_(inst_17024)){
var statearr_17063_17092 = state_17035__$1;
(statearr_17063_17092[(1)] = (21));

} else {
var statearr_17064_17093 = state_17035__$1;
(statearr_17064_17093[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (5))){
var inst_16979 = cljs.core.async.close_BANG_(out);
var state_17035__$1 = state_17035;
var statearr_17065_17094 = state_17035__$1;
(statearr_17065_17094[(2)] = inst_16979);

(statearr_17065_17094[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (14))){
var inst_17001 = (state_17035[(7)]);
var inst_17003 = cljs.core.chunked_seq_QMARK_(inst_17001);
var state_17035__$1 = state_17035;
if(inst_17003){
var statearr_17066_17095 = state_17035__$1;
(statearr_17066_17095[(1)] = (17));

} else {
var statearr_17067_17096 = state_17035__$1;
(statearr_17067_17096[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (16))){
var inst_17019 = (state_17035[(2)]);
var state_17035__$1 = state_17035;
var statearr_17068_17097 = state_17035__$1;
(statearr_17068_17097[(2)] = inst_17019);

(statearr_17068_17097[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17036 === (10))){
var inst_16988 = (state_17035[(9)]);
var inst_16990 = (state_17035[(11)]);
var inst_16995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16988,inst_16990);
var state_17035__$1 = state_17035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17035__$1,(13),out,inst_16995);
} else {
if((state_val_17036 === (18))){
var inst_17001 = (state_17035[(7)]);
var inst_17010 = cljs.core.first(inst_17001);
var state_17035__$1 = state_17035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17035__$1,(20),out,inst_17010);
} else {
if((state_val_17036 === (8))){
var inst_16989 = (state_17035[(8)]);
var inst_16990 = (state_17035[(11)]);
var inst_16992 = (inst_16990 < inst_16989);
var inst_16993 = inst_16992;
var state_17035__$1 = state_17035;
if(cljs.core.truth_(inst_16993)){
var statearr_17069_17098 = state_17035__$1;
(statearr_17069_17098[(1)] = (10));

} else {
var statearr_17070_17099 = state_17035__$1;
(statearr_17070_17099[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13297__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13297__auto____0 = (function (){
var statearr_17071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17071[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13297__auto__);

(statearr_17071[(1)] = (1));

return statearr_17071;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13297__auto____1 = (function (state_17035){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_17035);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e17072){var ex__13300__auto__ = e17072;
var statearr_17073_17100 = state_17035;
(statearr_17073_17100[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_17035[(4)]))){
var statearr_17074_17101 = state_17035;
(statearr_17074_17101[(1)] = cljs.core.first((state_17035[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__17102 = state_17035;
state_17035 = G__17102;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13297__auto__ = function(state_17035){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13297__auto____1.call(this,state_17035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13297__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13297__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_17075 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_17075[(6)] = c__13423__auto__);

return statearr_17075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));

return c__13423__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17104 = arguments.length;
switch (G__17104) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17107 = arguments.length;
switch (G__17107) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17110 = arguments.length;
switch (G__17110) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13423__auto___17158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_17134){
var state_val_17135 = (state_17134[(1)]);
if((state_val_17135 === (7))){
var inst_17129 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17136_17159 = state_17134__$1;
(statearr_17136_17159[(2)] = inst_17129);

(statearr_17136_17159[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (1))){
var inst_17111 = null;
var state_17134__$1 = (function (){var statearr_17137 = state_17134;
(statearr_17137[(7)] = inst_17111);

return statearr_17137;
})();
var statearr_17138_17160 = state_17134__$1;
(statearr_17138_17160[(2)] = null);

(statearr_17138_17160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (4))){
var inst_17114 = (state_17134[(8)]);
var inst_17114__$1 = (state_17134[(2)]);
var inst_17115 = (inst_17114__$1 == null);
var inst_17116 = cljs.core.not(inst_17115);
var state_17134__$1 = (function (){var statearr_17139 = state_17134;
(statearr_17139[(8)] = inst_17114__$1);

return statearr_17139;
})();
if(inst_17116){
var statearr_17140_17161 = state_17134__$1;
(statearr_17140_17161[(1)] = (5));

} else {
var statearr_17141_17162 = state_17134__$1;
(statearr_17141_17162[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (6))){
var state_17134__$1 = state_17134;
var statearr_17142_17163 = state_17134__$1;
(statearr_17142_17163[(2)] = null);

(statearr_17142_17163[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (3))){
var inst_17131 = (state_17134[(2)]);
var inst_17132 = cljs.core.async.close_BANG_(out);
var state_17134__$1 = (function (){var statearr_17143 = state_17134;
(statearr_17143[(9)] = inst_17131);

return statearr_17143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17134__$1,inst_17132);
} else {
if((state_val_17135 === (2))){
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17134__$1,(4),ch);
} else {
if((state_val_17135 === (11))){
var inst_17114 = (state_17134[(8)]);
var inst_17123 = (state_17134[(2)]);
var inst_17111 = inst_17114;
var state_17134__$1 = (function (){var statearr_17144 = state_17134;
(statearr_17144[(7)] = inst_17111);

(statearr_17144[(10)] = inst_17123);

return statearr_17144;
})();
var statearr_17145_17164 = state_17134__$1;
(statearr_17145_17164[(2)] = null);

(statearr_17145_17164[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (9))){
var inst_17114 = (state_17134[(8)]);
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17134__$1,(11),out,inst_17114);
} else {
if((state_val_17135 === (5))){
var inst_17111 = (state_17134[(7)]);
var inst_17114 = (state_17134[(8)]);
var inst_17118 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17114,inst_17111);
var state_17134__$1 = state_17134;
if(inst_17118){
var statearr_17147_17165 = state_17134__$1;
(statearr_17147_17165[(1)] = (8));

} else {
var statearr_17148_17166 = state_17134__$1;
(statearr_17148_17166[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (10))){
var inst_17126 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17149_17167 = state_17134__$1;
(statearr_17149_17167[(2)] = inst_17126);

(statearr_17149_17167[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17135 === (8))){
var inst_17111 = (state_17134[(7)]);
var tmp17146 = inst_17111;
var inst_17111__$1 = tmp17146;
var state_17134__$1 = (function (){var statearr_17150 = state_17134;
(statearr_17150[(7)] = inst_17111__$1);

return statearr_17150;
})();
var statearr_17151_17168 = state_17134__$1;
(statearr_17151_17168[(2)] = null);

(statearr_17151_17168[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_17152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17152[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_17152[(1)] = (1));

return statearr_17152;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_17134){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_17134);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e17153){var ex__13300__auto__ = e17153;
var statearr_17154_17169 = state_17134;
(statearr_17154_17169[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_17134[(4)]))){
var statearr_17155_17170 = state_17134;
(statearr_17155_17170[(1)] = cljs.core.first((state_17134[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__17171 = state_17134;
state_17134 = G__17171;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_17134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_17134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_17156 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_17156[(6)] = c__13423__auto___17158);

return statearr_17156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17173 = arguments.length;
switch (G__17173) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13423__auto___17240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_17211){
var state_val_17212 = (state_17211[(1)]);
if((state_val_17212 === (7))){
var inst_17207 = (state_17211[(2)]);
var state_17211__$1 = state_17211;
var statearr_17213_17241 = state_17211__$1;
(statearr_17213_17241[(2)] = inst_17207);

(statearr_17213_17241[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (1))){
var inst_17174 = (new Array(n));
var inst_17175 = inst_17174;
var inst_17176 = (0);
var state_17211__$1 = (function (){var statearr_17214 = state_17211;
(statearr_17214[(7)] = inst_17175);

(statearr_17214[(8)] = inst_17176);

return statearr_17214;
})();
var statearr_17215_17242 = state_17211__$1;
(statearr_17215_17242[(2)] = null);

(statearr_17215_17242[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (4))){
var inst_17179 = (state_17211[(9)]);
var inst_17179__$1 = (state_17211[(2)]);
var inst_17180 = (inst_17179__$1 == null);
var inst_17181 = cljs.core.not(inst_17180);
var state_17211__$1 = (function (){var statearr_17216 = state_17211;
(statearr_17216[(9)] = inst_17179__$1);

return statearr_17216;
})();
if(inst_17181){
var statearr_17217_17243 = state_17211__$1;
(statearr_17217_17243[(1)] = (5));

} else {
var statearr_17218_17244 = state_17211__$1;
(statearr_17218_17244[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (15))){
var inst_17201 = (state_17211[(2)]);
var state_17211__$1 = state_17211;
var statearr_17219_17245 = state_17211__$1;
(statearr_17219_17245[(2)] = inst_17201);

(statearr_17219_17245[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (13))){
var state_17211__$1 = state_17211;
var statearr_17220_17246 = state_17211__$1;
(statearr_17220_17246[(2)] = null);

(statearr_17220_17246[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (6))){
var inst_17176 = (state_17211[(8)]);
var inst_17197 = (inst_17176 > (0));
var state_17211__$1 = state_17211;
if(cljs.core.truth_(inst_17197)){
var statearr_17221_17247 = state_17211__$1;
(statearr_17221_17247[(1)] = (12));

} else {
var statearr_17222_17248 = state_17211__$1;
(statearr_17222_17248[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (3))){
var inst_17209 = (state_17211[(2)]);
var state_17211__$1 = state_17211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17211__$1,inst_17209);
} else {
if((state_val_17212 === (12))){
var inst_17175 = (state_17211[(7)]);
var inst_17199 = cljs.core.vec(inst_17175);
var state_17211__$1 = state_17211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17211__$1,(15),out,inst_17199);
} else {
if((state_val_17212 === (2))){
var state_17211__$1 = state_17211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17211__$1,(4),ch);
} else {
if((state_val_17212 === (11))){
var inst_17191 = (state_17211[(2)]);
var inst_17192 = (new Array(n));
var inst_17175 = inst_17192;
var inst_17176 = (0);
var state_17211__$1 = (function (){var statearr_17223 = state_17211;
(statearr_17223[(7)] = inst_17175);

(statearr_17223[(8)] = inst_17176);

(statearr_17223[(10)] = inst_17191);

return statearr_17223;
})();
var statearr_17224_17249 = state_17211__$1;
(statearr_17224_17249[(2)] = null);

(statearr_17224_17249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (9))){
var inst_17175 = (state_17211[(7)]);
var inst_17189 = cljs.core.vec(inst_17175);
var state_17211__$1 = state_17211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17211__$1,(11),out,inst_17189);
} else {
if((state_val_17212 === (5))){
var inst_17175 = (state_17211[(7)]);
var inst_17176 = (state_17211[(8)]);
var inst_17184 = (state_17211[(11)]);
var inst_17179 = (state_17211[(9)]);
var inst_17183 = (inst_17175[inst_17176] = inst_17179);
var inst_17184__$1 = (inst_17176 + (1));
var inst_17185 = (inst_17184__$1 < n);
var state_17211__$1 = (function (){var statearr_17225 = state_17211;
(statearr_17225[(12)] = inst_17183);

(statearr_17225[(11)] = inst_17184__$1);

return statearr_17225;
})();
if(cljs.core.truth_(inst_17185)){
var statearr_17226_17250 = state_17211__$1;
(statearr_17226_17250[(1)] = (8));

} else {
var statearr_17227_17251 = state_17211__$1;
(statearr_17227_17251[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (14))){
var inst_17204 = (state_17211[(2)]);
var inst_17205 = cljs.core.async.close_BANG_(out);
var state_17211__$1 = (function (){var statearr_17229 = state_17211;
(statearr_17229[(13)] = inst_17204);

return statearr_17229;
})();
var statearr_17230_17252 = state_17211__$1;
(statearr_17230_17252[(2)] = inst_17205);

(statearr_17230_17252[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (10))){
var inst_17195 = (state_17211[(2)]);
var state_17211__$1 = state_17211;
var statearr_17231_17253 = state_17211__$1;
(statearr_17231_17253[(2)] = inst_17195);

(statearr_17231_17253[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17212 === (8))){
var inst_17175 = (state_17211[(7)]);
var inst_17184 = (state_17211[(11)]);
var tmp17228 = inst_17175;
var inst_17175__$1 = tmp17228;
var inst_17176 = inst_17184;
var state_17211__$1 = (function (){var statearr_17232 = state_17211;
(statearr_17232[(7)] = inst_17175__$1);

(statearr_17232[(8)] = inst_17176);

return statearr_17232;
})();
var statearr_17233_17254 = state_17211__$1;
(statearr_17233_17254[(2)] = null);

(statearr_17233_17254[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_17234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17234[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_17234[(1)] = (1));

return statearr_17234;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_17211){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_17211);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e17235){var ex__13300__auto__ = e17235;
var statearr_17236_17255 = state_17211;
(statearr_17236_17255[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_17211[(4)]))){
var statearr_17237_17256 = state_17211;
(statearr_17237_17256[(1)] = cljs.core.first((state_17211[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__17257 = state_17211;
state_17211 = G__17257;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_17211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_17211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_17238 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_17238[(6)] = c__13423__auto___17240);

return statearr_17238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17259 = arguments.length;
switch (G__17259) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13423__auto___17330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13424__auto__ = (function (){var switch__13296__auto__ = (function (state_17301){
var state_val_17302 = (state_17301[(1)]);
if((state_val_17302 === (7))){
var inst_17297 = (state_17301[(2)]);
var state_17301__$1 = state_17301;
var statearr_17303_17331 = state_17301__$1;
(statearr_17303_17331[(2)] = inst_17297);

(statearr_17303_17331[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (1))){
var inst_17260 = [];
var inst_17261 = inst_17260;
var inst_17262 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17301__$1 = (function (){var statearr_17304 = state_17301;
(statearr_17304[(7)] = inst_17261);

(statearr_17304[(8)] = inst_17262);

return statearr_17304;
})();
var statearr_17305_17332 = state_17301__$1;
(statearr_17305_17332[(2)] = null);

(statearr_17305_17332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (4))){
var inst_17265 = (state_17301[(9)]);
var inst_17265__$1 = (state_17301[(2)]);
var inst_17266 = (inst_17265__$1 == null);
var inst_17267 = cljs.core.not(inst_17266);
var state_17301__$1 = (function (){var statearr_17306 = state_17301;
(statearr_17306[(9)] = inst_17265__$1);

return statearr_17306;
})();
if(inst_17267){
var statearr_17307_17333 = state_17301__$1;
(statearr_17307_17333[(1)] = (5));

} else {
var statearr_17308_17334 = state_17301__$1;
(statearr_17308_17334[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (15))){
var inst_17291 = (state_17301[(2)]);
var state_17301__$1 = state_17301;
var statearr_17309_17335 = state_17301__$1;
(statearr_17309_17335[(2)] = inst_17291);

(statearr_17309_17335[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (13))){
var state_17301__$1 = state_17301;
var statearr_17310_17336 = state_17301__$1;
(statearr_17310_17336[(2)] = null);

(statearr_17310_17336[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (6))){
var inst_17261 = (state_17301[(7)]);
var inst_17286 = inst_17261.length;
var inst_17287 = (inst_17286 > (0));
var state_17301__$1 = state_17301;
if(cljs.core.truth_(inst_17287)){
var statearr_17311_17337 = state_17301__$1;
(statearr_17311_17337[(1)] = (12));

} else {
var statearr_17312_17338 = state_17301__$1;
(statearr_17312_17338[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (3))){
var inst_17299 = (state_17301[(2)]);
var state_17301__$1 = state_17301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17301__$1,inst_17299);
} else {
if((state_val_17302 === (12))){
var inst_17261 = (state_17301[(7)]);
var inst_17289 = cljs.core.vec(inst_17261);
var state_17301__$1 = state_17301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17301__$1,(15),out,inst_17289);
} else {
if((state_val_17302 === (2))){
var state_17301__$1 = state_17301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17301__$1,(4),ch);
} else {
if((state_val_17302 === (11))){
var inst_17265 = (state_17301[(9)]);
var inst_17269 = (state_17301[(10)]);
var inst_17279 = (state_17301[(2)]);
var inst_17280 = [];
var inst_17281 = inst_17280.push(inst_17265);
var inst_17261 = inst_17280;
var inst_17262 = inst_17269;
var state_17301__$1 = (function (){var statearr_17313 = state_17301;
(statearr_17313[(11)] = inst_17279);

(statearr_17313[(7)] = inst_17261);

(statearr_17313[(8)] = inst_17262);

(statearr_17313[(12)] = inst_17281);

return statearr_17313;
})();
var statearr_17314_17339 = state_17301__$1;
(statearr_17314_17339[(2)] = null);

(statearr_17314_17339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (9))){
var inst_17261 = (state_17301[(7)]);
var inst_17277 = cljs.core.vec(inst_17261);
var state_17301__$1 = state_17301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17301__$1,(11),out,inst_17277);
} else {
if((state_val_17302 === (5))){
var inst_17262 = (state_17301[(8)]);
var inst_17265 = (state_17301[(9)]);
var inst_17269 = (state_17301[(10)]);
var inst_17269__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17265) : f.call(null,inst_17265));
var inst_17270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17269__$1,inst_17262);
var inst_17271 = cljs.core.keyword_identical_QMARK_(inst_17262,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17272 = ((inst_17270) || (inst_17271));
var state_17301__$1 = (function (){var statearr_17315 = state_17301;
(statearr_17315[(10)] = inst_17269__$1);

return statearr_17315;
})();
if(cljs.core.truth_(inst_17272)){
var statearr_17316_17340 = state_17301__$1;
(statearr_17316_17340[(1)] = (8));

} else {
var statearr_17317_17341 = state_17301__$1;
(statearr_17317_17341[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (14))){
var inst_17294 = (state_17301[(2)]);
var inst_17295 = cljs.core.async.close_BANG_(out);
var state_17301__$1 = (function (){var statearr_17319 = state_17301;
(statearr_17319[(13)] = inst_17294);

return statearr_17319;
})();
var statearr_17320_17342 = state_17301__$1;
(statearr_17320_17342[(2)] = inst_17295);

(statearr_17320_17342[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (10))){
var inst_17284 = (state_17301[(2)]);
var state_17301__$1 = state_17301;
var statearr_17321_17343 = state_17301__$1;
(statearr_17321_17343[(2)] = inst_17284);

(statearr_17321_17343[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17302 === (8))){
var inst_17261 = (state_17301[(7)]);
var inst_17265 = (state_17301[(9)]);
var inst_17269 = (state_17301[(10)]);
var inst_17274 = inst_17261.push(inst_17265);
var tmp17318 = inst_17261;
var inst_17261__$1 = tmp17318;
var inst_17262 = inst_17269;
var state_17301__$1 = (function (){var statearr_17322 = state_17301;
(statearr_17322[(14)] = inst_17274);

(statearr_17322[(7)] = inst_17261__$1);

(statearr_17322[(8)] = inst_17262);

return statearr_17322;
})();
var statearr_17323_17344 = state_17301__$1;
(statearr_17323_17344[(2)] = null);

(statearr_17323_17344[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__13297__auto__ = null;
var cljs$core$async$state_machine__13297__auto____0 = (function (){
var statearr_17324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17324[(0)] = cljs$core$async$state_machine__13297__auto__);

(statearr_17324[(1)] = (1));

return statearr_17324;
});
var cljs$core$async$state_machine__13297__auto____1 = (function (state_17301){
while(true){
var ret_value__13298__auto__ = (function (){try{while(true){
var result__13299__auto__ = switch__13296__auto__(state_17301);
if(cljs.core.keyword_identical_QMARK_(result__13299__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13299__auto__;
}
break;
}
}catch (e17325){var ex__13300__auto__ = e17325;
var statearr_17326_17345 = state_17301;
(statearr_17326_17345[(2)] = ex__13300__auto__);


if(cljs.core.seq((state_17301[(4)]))){
var statearr_17327_17346 = state_17301;
(statearr_17327_17346[(1)] = cljs.core.first((state_17301[(4)])));

} else {
throw ex__13300__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13298__auto__,cljs.core.cst$kw$recur)){
var G__17347 = state_17301;
state_17301 = G__17347;
continue;
} else {
return ret_value__13298__auto__;
}
break;
}
});
cljs$core$async$state_machine__13297__auto__ = function(state_17301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13297__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13297__auto____1.call(this,state_17301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13297__auto____0;
cljs$core$async$state_machine__13297__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13297__auto____1;
return cljs$core$async$state_machine__13297__auto__;
})()
})();
var state__13425__auto__ = (function (){var statearr_17328 = (f__13424__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13424__auto__.cljs$core$IFn$_invoke$arity$0() : f__13424__auto__.call(null));
(statearr_17328[(6)] = c__13423__auto___17330);

return statearr_17328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13425__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

