(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/email.validator.directive */ "./src/app/directives/email.validator.directive.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.routing */ "./src/app/account/account.routing.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _account_routing__WEBPACK_IMPORTED_MODULE_6__["routing"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"], _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginComponent"]],
            providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationFormComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'facebook-login', component: _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginComponent"] }
]);


/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col\" style=\"text-align:center\">\r\n    <a *ngIf=\"!isRequesting\" href=\"javascript:void(0)\" (click)=\"launchFbLogin()\"> <img class=\"img-fluid\" src=\"/assets/facebook-login.png\" /></a>\r\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n    <div *ngIf=\"failed\" class=\"alert alert-danger\" role=\"alert\">\r\n      <p><strong>Oops!</strong> Your facebook login failed.</p>\r\n      <ul>\r\n        <li>Error: {{error}}</li>\r\n        <li>Description: {{errorDescription}}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmFjZWJvb2stbG9naW4vZmFjZWJvb2stbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.ts ***!
  \********************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        if (window.addEventListener) {
            window.addEventListener('message', this.handleMessage.bind(this), false);
        }
        else {
            window.attachEvent('onmessage', this.handleMessage.bind(this));
        }
    }
    FacebookLoginComponent.prototype.launchFbLogin = function () {
        // tslint:disable-next-line:max-line-length
        this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=312472109343376&display=popup&redirect_uri=https://trvlblg.azurewebsites.net/facebook-auth.html&scope=email', null, 'width=600,height=400');
    };
    FacebookLoginComponent.prototype.handleMessage = function (event) {
        var _this = this;
        var message = event;
        // Only trust messages from the below origin.
        if (message.origin !== 'https://trvlblg.azurewebsites.net')
            return;
        this.authWindow.close();
        var result = JSON.parse(message.data);
        if (!result.status) {
            this.failed = true;
            this.error = result.error;
            this.errorDescription = result.errorDescription;
        }
        else {
            this.failed = false;
            this.isRequesting = true;
            this.userService.facebookLogin(result.accessToken)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) {
                _this.failed = true;
                _this.error = error;
            });
        }
    };
    FacebookLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.component.html */ "./src/app/account/facebook-login/facebook-login.component.html"),
            styles: [__webpack_require__(/*! ./facebook-login.component.scss */ "./src/app/account/facebook-login/facebook-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\" class=\"animated fadeInLeftBig\">\r\n  <div class=\"container\">\r\n    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n      <strong>All set!</strong> Please signin with your account\r\n    </div>\r\n  <h1>S I G N</h1>\r\n  <div class=\"alert\">\r\n    <strong [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">*Please enter a valid email</strong>\r\n  </div>\r\n       <label for=\"email\">Email</label>\r\n       <input  type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\r\n\r\n    <p>\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">S I G N - I N</button>\r\n      <br>\r\n      <br>  \r\n      OR \r\n      <br>\r\n      <br> \r\n      <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/register\">\r\n        S I G N - U P\r\n      </button> \r\n    </p>\r\n    <p>\r\n    </p>\r\n    \r\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n        \r\n    <hr>\r\n      <app-facebook-login></app-facebook-login>\r\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n      <strong>Oops!</strong> {{errors}}\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-user-alert {\n  padding-top: 0px; }\n\n.text-danger {\n  color: #dc3545 !important;\n  font-size: 100%; }\n\nform {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 74px;\n  margin-bottom: 45px;\n  color: #f1f1f1; }\n\n.div.container {\n  margin: 68px;\n  padding: 150px;\n  width: 600px; }\n\n.container {\n  padding: 70px;\n  width: 100%; }\n\nlabel {\n  display: inline-block;\n  margin-top: 3px;\n  margin-bottom: 10px; }\n\ndiv {\n  margin-bottom: 0px;\n  border-radius: 15px;\n  background-color: #212529;\n  padding: 20px; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\ninput[type=text], select {\n  font-size: 20px;\n  width: 100%;\n  padding: 0.25em;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\ninput[type=password] {\n  font-size: 20px;\n  width: 100%;\n  padding: 0.25em;\n  border: 2px solid #999;\n  /* 2 animations: shake, and glow red */\n  -webkit-animation-name: shake, glow-red;\n          animation-name: shake, glow-red;\n  -webkit-animation-duration: 0.7s, 0.35s;\n          animation-duration: 0.7s, 0.35s;\n  -webkit-animation-iteration-count: 1, 2;\n          animation-iteration-count: 1, 2; }\n\n@-webkit-keyframes shake {\n  0%, 20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(8px);\n            transform: translateX(8px); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translateX(-8px);\n            transform: translateX(-8px); } }\n\n@keyframes shake {\n  0%, 20%, 40%, 60%, 80% {\n    -webkit-transform: translateX(8px);\n            transform: translateX(8px); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translateX(-8px);\n            transform: translateX(-8px); } }\n\n@-webkit-keyframes glow-red {\n  50% {\n    border-color: indianred; } }\n\n@keyframes glow-red {\n  50% {\n    border-color: indianred; } }\n\nh1 {\n  color: #f1f1f1;\n  width: auto;\n  text-align: center;\n  margin-bottom: 0px; }\n\np {\n  margin-bottom: 15px;\n  margin-top: 20px;\n  text-align: center; }\n\nbutton[type=button] {\n  margin-left: auto; }\n\nbutton[type=submit] {\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xc0LDQtNC80ZbQvVxcRGVza3RvcFxcZ2l0aHViXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGFjY291bnRcXGxvZ2luLWZvcm1cXGxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkFBd0I7RUFDeEIsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSwwQ0FBeUM7RUFDekMsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixlQUFjLEVBRWY7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYztFQUNkLGFBQVksRUFDYjs7QUFDRDtFQUNFLGNBQWE7RUFDYixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLDBCQUF3QjtFQUV4QixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSwwQkFBeUI7RUFDekIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsdUJBQXNCLEVBQ3ZCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsZ0JBQWU7RUFDZix1QkFBc0I7RUFDdEIsdUNBQXVDO0VBQ3ZDLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0Isd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQix3Q0FBK0I7VUFBL0IsZ0NBQStCLEVBbUJoQzs7QUFsQkM7RUFDRTtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQTtFQUU1Qjs7Ozs7SUFLRSxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQUEsRUFBQTs7QUFUL0I7RUFDRTtJQUNFLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFBQTtFQUU1Qjs7Ozs7SUFLRSxvQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQUEsRUFBQTs7QUFJL0I7RUFDRTtJQUNFLHdCQUF1QixFQUFBLEVBQUE7O0FBRjNCO0VBQ0U7SUFDRSx3QkFBdUIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLGVBQWE7RUFDYixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ25COztBQUNEO0VBRUUsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LXVzZXItYWxlcnQge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLnRleHQtZGFuZ2VyIHtcclxuICBjb2xvcjogI2RjMzU0NSFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbmZvcm17XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogNzRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDQsIDE1LCAwLjU1NSkgXHJcbn1cclxuLmRpdi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiA2OHB4O1xyXG4gIHBhZGRpbmc6IDE1MHB4O1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmxhYmVse1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5kaXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzIxMjUyOTtcclxuICAvLyBib3JkZXI6IDhweCBzb2xpZCAjMzcxOTY2O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgbWFyZ2luOiAwcHggMHB4IDhweCAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaW5wdXRbdHlwZT1wYXNzd29yZF0sIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC4yNWVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XHJcbiAgLyogMiBhbmltYXRpb25zOiBzaGFrZSwgYW5kIGdsb3cgcmVkICovXHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlLCBnbG93LXJlZDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuN3MsIDAuMzVzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEsIDI7XHJcbiAgQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgICAwJSwgMjAlLCA0MCUsIDYwJSwgODAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgICB9XHJcbiAgICAxMCUsXHJcbiAgICAzMCUsXHJcbiAgICA1MCUsXHJcbiAgICA3MCUsXHJcbiAgICA5MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZ2xvdy1yZWQge1xyXG4gICAgNTAlIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmgxe1xyXG4gIGNvbG9yOiNmMWYxZjE7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5we1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uW3R5cGUgPSBidXR0b25de1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5idXR0b25bdHlwZSA9IHN1Ym1pdF17XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/account/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\" class=\"animated fadeInLeftBig\">\r\n    <div class=\"container\">\r\n        <h1>Register</h1>\r\n        <p>Please fill in this form to create an account.</p>\r\n        <p>OR</p>\r\n        <p><app-facebook-login></app-facebook-login></p>\r\n        <hr>\r\n  <!-- Enter firstName part-->\r\n      <label for=\"first-name\"><b>First name</b></label>\r\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Your first name\" name=\"firstName\" tmFocus ngModel>\r\n    \r\n  <!-- Enter lastName part -->\r\n      <label for=\"last-name\"><b>Last name</b></label>\r\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Your last name\" name=\"lastName\" ngModel>\r\n    \r\n  <!-- Enter email -->\r\n    <div class=\"alert\">\r\n       <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">*Please enter a valid email</small>\r\n    </div> \r\n      <label for=\"email\"><b>Email</b></label>\r\n      <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel #email=\"ngModel\">\r\n  \r\n  <!-- password part -->\r\n      <label for=\"password\"><b>Password</b></label>\r\n      <input id=\"password\" type=\"password\" class=\"form-control\"name=\"password\" placeholder=\"Password\" ngModel>\r\n    \r\n  <!-- Choose country -->\r\n      <label for=\"country\"><b>Country</b></label>\r\n      <input type=\"text\" class=\"form-control\" id=\"location\"  name=\"location\" ngModel placeholder=\"Location\" ngModel>\r\n          \r\n      <hr>\r\n      <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n  \r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\r\n  \r\n      <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n  \r\n    </div>\r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Oops!</strong> {{errors}}\r\n      </div>\r\n  \r\n  </form>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 73px;\n  margin-bottom: 3px;\n  color: #f1f1f1; }\n\n.container {\n  padding: 15px;\n  width: 100%; }\n\ndiv {\n  border-radius: 15px;\n  background-color: #31312f;\n  padding: 0px; }\n\ndiv.alert {\n  margin-bottom: 0px; }\n\n.text-danger {\n  font-size: 100%;\n  color: #dc3545 !important; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\na {\n  color: dodgerblue; }\n\ninput {\n  margin-left: 10px; }\n\ninput[type=text], input[type=password], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\nlabel {\n  margin-bottom: 0px; }\n\nh1 {\n  text-align: center; }\n\np {\n  margin-bottom: 3px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3RyYXRpb24tZm9ybS9DOlxcVXNlcnNcXNCw0LTQvNGW0L1cXERlc2t0b3BcXGdpdGh1YlxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxhY2NvdW50XFxyZWdpc3RyYXRpb24tZm9ybVxccmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBeUM7RUFDekMsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixlQUFjLEVBRWY7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsWUFBVyxFQUVaOztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUV6QixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDBCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxtQkFDRixFQUFDOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0cmF0aW9uLWZvcm0vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDczcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDQsIDE1LCAwLjU1NSkgXHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuZGl2IHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMmY7XHJcbiAgLy8gYm9yZGVyOiA4cHggc29saWQgIzM3MTk2NjtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuZGl2LmFsZXJ0e1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4udGV4dC1kYW5nZXJ7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxufVxyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcbmlucHV0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDBweCAwcHggOHB4IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5sYWJlbHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHhcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucHtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/account/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n  min-height: 200%;\n  max-height: 200%;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFzQsNC00LzRltC9XFxEZXNrdG9wXFxnaXRodWJcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ3BCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDIwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.model = {};
    }
    AppComponent.prototype.onSubmit = function () {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate-xhr.backend */ "./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _trips_trips_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trips/trips.module */ "./src/app/trips/trips.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* App Root */



/* Account Imports */

/* Dashboard Imports */




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            ],
            imports: [
                _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _trips_trips_module__WEBPACK_IMPORTED_MODULE_13__["TripsModule"]
            ],
            providers: [_shared_utils_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_3__["XHRBackend"],
                    useClass: _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__["AuthenticateXHRBackend"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _trips_triplist_triplist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trips/triplist/triplist.component */ "./src/app/trips/triplist/triplist.component.ts");



var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'trips', component: _trips_triplist_triplist_component__WEBPACK_IMPORTED_MODULE_2__["TriplistComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/*!*********************************************!*\
  !*** ./src/app/authenticate-xhr.backend.ts ***!
  \*********************************************/
/*! exports provided: AuthenticateXHRBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateXHRBackend", function() { return AuthenticateXHRBackend; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["XSRFStrategy"]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(_angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");





var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'dashboard',
        component: _root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
        ]
    }
]);


/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-3\">\r\n    <p>{{homeDetails?.message}}</p>\r\n    <p><strong>Name:</strong> {{homeDetails?.firstName}} {{homeDetails?.lastName}}</p>\r\n    <p *ngIf=\"homeDetails?.location\"><strong>Location:</strong> {{homeDetails?.location}}</p>\r\n    <p *ngIf=\"homeDetails?.locale\"><strong>Locale:</strong> {{homeDetails?.locale}}</p>\r\n    <p *ngIf=\"homeDetails?.gender\"><strong>Gender:</strong> {{homeDetails?.gender}}</p>\r\n    <p *ngIf=\"homeDetails?.facebookId\"><strong>Facebook Id:</strong> {{homeDetails?.facebookId}}</p>\r\n    <div *ngIf=\"homeDetails?.pictureUrl\"><img src=\"{{homeDetails?.pictureUrl}}\" /></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getHomeDetails()
            .subscribe(function (homeDetails) {
            _this.homeDetails = homeDetails;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar\">\r\n    <ul class=\"nav nav-pills flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/settings\">Settings</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Sidebar\r\n */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n.sidebar .nav {\n  margin-bottom: 20px; }\n.sidebar .nav-item {\n  width: 100%; }\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n.sidebar .nav-link {\n  border-radius: 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3QvQzpcXFVzZXJzXFzQsNC00LzRltC9XFxEZXNrdG9wXFxnaXRodWJcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxyb290XFxyb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUg7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxVQUFTO0VBQ1QsUUFBTztFQUNQLGNBQWE7RUFDYixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFBRSw4REFBOEQ7RUFDaEYsNkJBQTRCLEVBQzdCO0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7QUFFRDtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsZUFBYyxFQUNmO0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogU2lkZWJhclxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtaXRlbSArIC5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/root/root.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    DashboardService.prototype.getHomeDetails = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/dashboard/home", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], DashboardService);
    return DashboardService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  settings works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/email.validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidator = EmailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: myFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFocus", function() { return myFocus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[tmFocus]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-basic\">\r\n    <footer>\r\n        <div class=\"social\"><a href=\"https://twitter.com/travel\"><i class=\"fab fa-twitter-square\"></i></a><a href=\"https://www.instagram.com/travelandleisure/\"><i class=\"fab fa-instagram\"></i></a><a href=\"https://www.snapchat.com/add/cailinoneil\"><i class=\"fab fa-snapchat-square\"></i></a><a href=\"https://www.facebook.com/TripandTravelBlog/\"><i class=\"fab fa-facebook-square\"></i></a></div>\r\n        <ul class=\"list-inline\">\r\n            <li class=\"list-inline-item\"><a href=\"#\">Home</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"#\">Services</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"#\">About</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"#\">Privacy Policy</a></li>\r\n        </ul>\r\n        <p class=\"copyright\">Traveling Blog © 2018</p>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-basic {\n  position: relative;\n  margin: 0;\n  padding: 25px;\n  background-color: #050505d2;\n  color: #ffffff;\n  clear: both; }\n\n.footer-basic ul {\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  font-size: 18px;\n  line-height: 1.6;\n  margin-bottom: 0; }\n\n.footer-basic li {\n  padding: 0 10px; }\n\n.footer-basic ul a {\n  color: inherit;\n  text-decoration: none;\n  opacity: 0.8; }\n\n.footer-basic ul a:hover {\n  opacity: 1; }\n\n.footer-basic .social {\n  text-align: center;\n  padding-bottom: 25px; }\n\n.footer-basic .social > a {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin: 0 8px;\n  color: inherit;\n  opacity: 0.75; }\n\n.footer-basic .social > a:hover {\n  opacity: 0.9; }\n\n.footer-basic .copyright {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 13px;\n  color: #aaa;\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xc0LDQtNC80ZbQvVxcRGVza3RvcFxcZ2l0aHViXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxjQUFhO0VBQ2IsNEJBQTBCO0VBQzFCLGVBQWE7RUFDYixZQUFVLEVBQ1Y7O0FBRUY7RUFDRSxXQUFTO0VBQ1QsaUJBQWU7RUFDZixtQkFBaUI7RUFDakIsZ0JBQWM7RUFDZCxpQkFBZTtFQUNmLGlCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsZ0JBQWMsRUFDZjs7QUFFRDtFQUNFLGVBQWE7RUFDYixzQkFBb0I7RUFDcEIsYUFBVyxFQUNaOztBQUVEO0VBQ0UsV0FBUyxFQUNWOztBQUVEO0VBQ0UsbUJBQWlCO0VBQ2pCLHFCQUFtQixFQUNwQjs7QUFFRDtFQUNFLGdCQUFjO0VBQ2QsWUFBVTtFQUNWLGFBQVc7RUFDWCxrQkFBZ0I7RUFDaEIsc0JBQW9CO0VBQ3BCLG1CQUFpQjtFQUNqQixtQkFBaUI7RUFDakIsdUJBQXFCO0VBQ3JCLGNBQVk7RUFDWixlQUFhO0VBQ2IsY0FBWSxFQUNiOztBQUVEO0VBQ0UsYUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWU7RUFDZixtQkFBaUI7RUFDakIsZ0JBQWM7RUFDZCxZQUFVO0VBQ1YsaUJBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1iYXNpYyB7XHJcbiAgLy9wYWRkaW5nOjMwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDUwNTA1ZDI7XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxuICBjbGVhcjpib3RoO1xyXG4gfVxyXG5cclxuLmZvb3Rlci1iYXNpYyB1bCB7XHJcbiAgcGFkZGluZzowO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6MThweDtcclxuICBsaW5lLWhlaWdodDoxLjY7XHJcbiAgbWFyZ2luLWJvdHRvbTowO1xyXG59XHJcblxyXG4uZm9vdGVyLWJhc2ljIGxpIHtcclxuICBwYWRkaW5nOjAgMTBweDtcclxufVxyXG5cclxuLmZvb3Rlci1iYXNpYyB1bCBhIHtcclxuICBjb2xvcjppbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIG9wYWNpdHk6MC44O1xyXG59XHJcblxyXG4uZm9vdGVyLWJhc2ljIHVsIGE6aG92ZXIge1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLmZvb3Rlci1iYXNpYyAuc29jaWFsIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbToyNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWJhc2ljIC5zb2NpYWwgPiBhIHtcclxuICBmb250LXNpemU6MjRweDtcclxuICB3aWR0aDo0MHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gIG1hcmdpbjowIDhweDtcclxuICBjb2xvcjppbmhlcml0O1xyXG4gIG9wYWNpdHk6MC43NTtcclxufVxyXG5cclxuLmZvb3Rlci1iYXNpYyAuc29jaWFsID4gYTpob3ZlciB7XHJcbiAgb3BhY2l0eTowLjk7XHJcbn1cclxuXHJcbi5mb290ZXItYmFzaWMgLmNvcHlyaWdodCB7XHJcbiAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtc2l6ZToxM3B4O1xyXG4gIGNvbG9yOiNhYWE7XHJcbiAgbWFyZ2luLWJvdHRvbTowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <!-- Logo -->\r\n    <a class=\"navbar-brand mb-0 h1\" href=\"#\">\r\n      <img src=\"assets\\logo.png\" width=\"45\" height=\"45\" class=\"d-inline-block align-top\" alt=\"\">TravelingBlog</a>\r\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- end logo -->\r\n\r\n    <!-- Navigation components -->\r\n    <!-- Home - Guide - Trips buttons -->\r\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav nav1 mr-auto\">\r\n        <li>\r\n          <a class=\"nav-link\" href=\"#\">Home</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" href=\"#\">Guids</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" routerLink=\"/trips\">Trips</a>\r\n          </li>\r\n      </ul>\r\n      <nav class=\"navbar-nav navbar-left\" action=\"\">\r\n        <form class=\"form-inline my-1 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n          </form>\r\n        </nav>\r\n\r\n<!-- Right navbar before sign -->\r\n      <ul *ngIf=\"!status\" class=\"navbar-nav ml-auto\">\r\n        <li>\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n            <a class=\"btn btn-info btn-sm\" href=\"#\"  routerLink=\"/login\">SIGN-IN</a>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n            <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/register\">SIGN-UP</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n<!-- Right navbar after sign -->\r\n      <ul *ngIf=\"status\" class=\"navbar-nav ml-auto\">\r\n        <li >\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n              <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/dashboard\">My Page</a>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n              <a class=\"btn btn-info btn-sm \"(click)=\"logout()\" href=\"#\">SIGN OUT</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-right {\n  padding-right: 40px; }\n\n.form-group {\n  padding: 10px; }\n\n.color-blue {\n  color: #0080c5; }\n\n.color-red {\n  color: #FF0000; }\n\n.error-message {\n  font-size: 10px; }\n\n.nav1 {\n  margin-right: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xc0LDQtNC80ZbQvVxcRGVza3RvcFxcZ2l0aHViXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWMsb0JBQW1CLEVBQUc7O0FBQ3BDO0VBQVksY0FBYSxFQUFHOztBQUM1QjtFQUFhLGVBQWMsRUFBRzs7QUFDOUI7RUFBWSxlQUFjLEVBQUc7O0FBQzdCO0VBQWdCLGdCQUFlLEVBQUc7O0FBQ2xDO0VBRUksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItcmlnaHR7cGFkZGluZy1yaWdodDogNDBweDt9XHJcbi5mb3JtLWdyb3Vwe3BhZGRpbmc6IDEwcHg7fVxyXG4uY29sb3ItYmx1ZSB7Y29sb3I6ICMwMDgwYzU7fVxyXG4uY29sb3ItcmVkIHtjb2xvcjogI0ZGMDAwMDt9XHJcbi5lcnJvci1tZXNzYWdlIHtmb250LXNpemU6IDEwcHg7fVxyXG4ubmF2MXtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"carousel-item active\" style=\"background-image: url('assets/images/carousel-img/7.jpg')\">\r\n\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3 class=\"display-4\">Travels inspire us to adventure</h3>\r\n          <p class=\"lead\">Why us? Our travel blog will help you in organizing a wonderful trip for you.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/4.jpg')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3 class=\"display-4\">Wanna share emotions with other travellers?</h3>\r\n          <p class=\"lead\">Create a trip and tell everything about your journey. Don`t forget to add photo,\r\n            descriptions!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/5.jpg')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3 class=\"display-4\">Let`s start! </h3>\r\n          <p class=\"lead\">Discover the world with us! Read blogs, get inspired and plan your trip!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</header>\r\n\r\n\r\n<aside id=\"testimonials\" class=\"text-center\" data-enllax-ratio=\".2\" tabindex=\"-1\" style=\"background-position: center 34px;\">\r\n  <div class=\"section-heading\">\r\n    <h2 class=\"section-title\">Our experienced blogs!</h2>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <blockquote class=\" testimonial classic\">\r\n        <img src=\"assets/images/user-img/user-1.jpg\" alt=\"User\"/>\r\n        <h3>England - why not?</h3>\r\n        <q>Brits love to sip, slurp and gulp down tea while occasionally dunking a digestive in there too.\r\n          Among the three ghosts said to haunt Athelhampton House, one of them is an ape.\r\n          An interesting fact is that French was the official language of England for about 300 years.</q>\r\n        <p>Julie Fan - Happy Customer</p>\r\n      </blockquote>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <blockquote class=\"testimonial classic\">\r\n        <img src=\"assets/images/user-img/user-3.jpg\" alt=\"User\" />\r\n        <h3>\"Like Spain, I am bound to the past.\"</h3>\r\n        <q>It’s like a dream to come to Spain and stay for a couple of years and get somebody to teach me Spanish\r\n          music.\r\n          I have seen dawn and sunset on moors and windy hills coming in solemn beauty like slow old tunes of Spain.\r\n        </q>\r\n        <p>Thomas Doe </p>\r\n      </blockquote>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\">\r\n      <blockquote class=\"testimonial classic\">\r\n        <img src=\"assets/images/user-img/user-2.jpg\" alt=\"User\" />\r\n        <h3>Trip to the Netherland</h3>\r\n        <q>Yep, a country so small you can drive through it from its Northern- to its Southern-tip (the largest\r\n          distance)\r\n          in just about two hours if you don’t hit any heavy traffic.\r\n          Somehow the Dutch still manage to crank out enough food to “Feed the World” with so little space! I liked it!</q>\r\n        <p>Roslyn Doe</p>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n\r\n</aside>\r\n\r\n<section id=\"portfolios\" class=\"section-padding\">\r\n  <div class=\"container\">\r\n    <h2 class=\"section-title\" data-wow-delay=\"0.4s\">Countries and places which inspire</h2>\r\n    <div class=\"row\">\r\n      <div id=\"portfolio\" class=\"row\" data-wow-delay=\"0.4s\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\r\n          <div class=\"portfolio-item\">\r\n            <div class=\"shot-item\">\r\n              <img src=\"assets/images/block-img/1.jpg\" alt=\"\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"icons\">\r\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/1.jpg\">\r\n                    <i class=\"icon-preview\"></i>\r\n                  </a>\r\n                  <a class=\"link\" href=\"#\">\r\n                    <i class=\"icon-link\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print\">\r\n          <div class=\"portfolio-item\">\r\n            <div class=\"shot-item\">\r\n              <img src=\"assets/images/block-img/2.jpg\" alt=\"\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"icons\">\r\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/2.jpg\">\r\n                    <i class=\"icon-preview\"></i>\r\n                  </a>\r\n                  <a class=\"link\" href=\"#\">\r\n                    <i class=\"icon-link\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\r\n          <div class=\"portfolio-item\">\r\n            <div class=\"shot-item\">\r\n              <img src=\"assets/images/block-img/3.jpg\" alt=\"\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"icons\">\r\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/3.jpg\">\r\n                    <i class=\"icon-preview\"></i>\r\n                  </a>\r\n                  <a class=\"link\" href=\"#\">\r\n                    <i class=\"icon-link\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design\">\r\n          <div class=\"portfolio-item\">\r\n            <div class=\"shot-item\">\r\n              <img src=\"assets/images/block-img/4.jpg\" alt=\"\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"icons\">\r\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/4.jpg\">\r\n                    <i class=\"icon-preview\"></i>\r\n                  </a>\r\n                  <a class=\"link\" href=\"#\">\r\n                    <i class=\"icon-link\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\r\n          <div class=\"portfolio-item\">\r\n            <div class=\"shot-item\">\r\n              <img src=\"assets/images/block-img/5.jpg\" alt=\"\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"icons\">\r\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/5.jpg\">\r\n                    <i class=\"icon-preview\"></i>\r\n                  </a>\r\n                  <a class=\"link\" href=\"#\">\r\n                    <i class=\"icon-link\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design\">\r\n          <div class=\"portfolio-item\">\r\n            <div class=\"shot-item\">\r\n              <img src=\"assets/images/block-img/6.jpg\" alt=\"\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"icons\">\r\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/6.jpg\">\r\n                    <i class=\"icon-preview\"></i>\r\n                  </a>\r\n                  <a class=\"link\" href=\"#\">\r\n                    <i class=\"icon-link\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<form>\r\n  <div class=\"button-section\">\r\n    <h3>Let`s register and start your advantures!</h3>\r\n    <input class=\"registrationButton\" type=\"button\" value=\"Register\" onclick=\"window.location.href='/register'\" />\r\n    <br>\r\n    <br>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  height: 65vh;\n  min-height: 500px;\n  background: no-repeat center center scroll;\n  background-size: cover; }\n\n.ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  background-color: #333; }\n\n.active {\n  background-color: #4CAF50; }\n\nli {\n  float: left; }\n\nli a {\n  display: block;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none; }\n\nli a:hover {\n  background-color: #111; }\n\n.btn {\n  color: #4CAF50;\n  margin: 8px;\n  float: right; }\n\n.div.button-section {\n  position: fixed; }\n\n.button-section {\n  text-align: center; }\n\n.container {\n  margin-top: 10px; }\n\ndiv#footer {\n  padding: 10px;\n  color: white;\n  background-color: black; }\n\n.col-3 {\n  width: 33.33%; }\n\n.section-heading {\n  padding: 0 0 15px 0; }\n\n.row {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.row-1 {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -45px;\n  margin-right: -45px; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.testimonial {\n  padding: 15px; }\n\nblockquote {\n  position: relative; }\n\n.testimonial img {\n  max-height: 250px;\n  border-radius: 300em; }\n\n.testimonial footer {\n  padding-top: 12px; }\n\n.testimonial.classic img {\n  display: inline-block;\n  margin-bottom: 25px; }\n\n.testimonial.classic q {\n  display: block; }\n\n.testimonial.classic footer:before {\n  display: block;\n  content: \"\";\n  width: 30px;\n  height: 4px;\n  margin: 10px auto 15px auto; }\n\n.text-center {\n  text-align: center; }\n\np {\n  margin-top: 25px;\n  margin-bottom: 1rem; }\n\n.registrationButton {\n  background-color: #4CAF50;\n  color: black;\n  font-size: 20px;\n  border: 2px solid black;\n  width: 30%;\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer; }\n\n.registrationButton:hover {\n  color: #ffff00;\n  background: #000;\n  border: 0px solid #fff; }\n\n.portfolio {\n  visibility: visible; }\n\n.section-title {\n  text-align: center; }\n\n#portfolios .mix {\n  padding: 10px; }\n\n.col-md-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n#portfolios .portfolio-item .shot-item {\n  margin: 0px; }\n\n.shot-item {\n  margin-right: 15px;\n  border-radius: 4px;\n  background: #fff;\n  position: relative; }\n\n.shot-item img {\n  width: 100%; }\n\n.shot-item .overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 180, 217, 0.6);\n  opacity: 0; }\n\n.icon-eye:before {\n  content: \"\\e087\"; }\n\n.overlay {\n  opacity: 0; }\n\n.overlay .icons i {\n  height: 42px;\n  width: 42px;\n  line-height: 42px;\n  color: #00b4d9;\n  left: 50%;\n  margin-left: -24px;\n  margin-top: -24px;\n  top: 50%;\n  position: absolute;\n  z-index: 2;\n  cursor: pointer;\n  text-align: center;\n  font-size: 20px;\n  background: #fff;\n  border-radius: 4px; }\n\n.overlay .preview {\n  position: absolute;\n  left: 45%;\n  top: 50%;\n  color: #fff; }\n\n.overlay .link {\n  position: absolute;\n  left: 60%;\n  margin-left: 10px;\n  top: 50%;\n  color: #fff; }\n\n.shot-item:hover .overlay {\n  opacity: 1; }\n\n.icon {\n  width: 50px;\n  height: 60px; }\n\n.lead {\n  text-align: center;\n  color: ghostwhite;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXNCw0LTQvNGW0L1cXERlc2t0b3BcXGdpdGh1YlxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQiwyQ0FBMEM7RUFJMUMsdUJBQXNCLEVBQ3JCOztBQUVEO0VBQ0Esc0JBQXFCO0VBQ3JCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWix1QkFBc0IsRUFDckI7O0FBRUY7RUFDQywwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDQSxZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDcEI7O0FBRUQ7RUFDQSx1QkFBc0IsRUFDckI7O0FBRUQ7RUFDQSxlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVksRUFDWDs7QUFFRDtFQUNBLGdCQUNBLEVBQUM7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDQSxpQkFBZ0IsRUFDZjs7QUFFRDtFQUNBLGNBQWE7RUFDYixhQUFZO0VBQ1osd0JBQXVCLEVBQ3RCOztBQUVEO0VBQ0EsY0FBYSxFQUNaOztBQUVEO0VBQ0Esb0JBQW1CLEVBQ2xCOztBQUVEO0VBQ0EseUJBQXdCO0VBQ3hCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNsQjs7QUFFRDtFQUNBLHlCQUF3QjtFQUN4QixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDbEI7O0FBRUQ7RUFDQSxZQUFXO0VBQ1gsZUFBYztFQUNkLFlBQVcsRUFDVjs7QUFFRDtFQUNBLGNBQWEsRUFDWjs7QUFFRDtFQUNBLG1CQUFrQixFQUNqQjs7QUFFRDtFQUNBLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFDbkI7O0FBRUQ7RUFDQSxrQkFBaUIsRUFDaEI7O0FBRUQ7RUFDQSxzQkFBcUI7RUFDckIsb0JBQW1CLEVBQ2xCOztBQUVEO0VBQ0EsZUFBYyxFQUNiOztBQUVEO0VBQ0EsZUFBYztFQUNkLFlBQVc7RUFDWCxZQUFXO0VBQ1gsWUFBVztFQUNYLDRCQUEyQixFQUMxQjs7QUFFRDtFQUNBLG1CQUFrQixFQUNqQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDQSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLFdBQVU7RUFDVixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDZDs7QUFFRDtFQUNBLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsdUJBQXNCLEVBQ3JCOztBQUVEO0VBQ0Esb0JBQW1CLEVBQ2xCOztBQUNEO0VBQ0EsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0EsY0FBYSxFQUNaOztBQUVEO0VBQ0EscUJBQW9CO0VBQ3BCLHNCQUNBLEVBQUM7O0FBRUQ7RUFDQSxZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDakI7O0FBRUQ7RUFDQSxZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixRQUFPO0VBQ1AsT0FBTTtFQUNOLG1DQUFrQztFQUNsQyxXQUFVLEVBQ1Q7O0FBRUQ7RUFDQSxpQkFBZ0IsRUFDZjs7QUFFRDtFQUNBLFdBQVUsRUFDVDs7QUFFRDtFQUNBLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDakI7O0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQ1Y7O0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsWUFBVyxFQUNWOztBQUVEO0VBQ0EsV0FBVSxFQUNUOztBQUVEO0VBQ0EsWUFBVztFQUNYLGFBQVksRUFDWDs7QUFFRDtFQUNBLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDY1dmg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICB9ICBcclxuICBcclxuIC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbn1cclxuXHJcbmxpIHtcclxuZmxvYXQ6IGxlZnQ7IFxyXG59XHJcblxyXG5saSBhIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucGFkZGluZzogMTRweCAxNnB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG59XHJcblxyXG4uYnRuIHtcclxuY29sb3I6ICM0Q0FGNTA7XHJcbm1hcmdpbjogOHB4O1xyXG5mbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5kaXYuYnV0dG9uLXNlY3Rpb24ge1xyXG5wb3NpdGlvbjogZml4ZWRcclxufVxyXG5cclxuLmJ1dHRvbi1zZWN0aW9ue1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmRpdiNmb290ZXIge1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29sLTMge1xyXG53aWR0aDogMzMuMzMlO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIHtcclxucGFkZGluZzogMCAwIDE1cHggMDtcclxufVxyXG5cclxuLnJvdyB7XHJcbnBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5tYXJnaW4tbGVmdDogLTE1cHg7XHJcbm1hcmdpbi1yaWdodDogLTE1cHg7IFxyXG59XHJcblxyXG4ucm93LTF7XHJcbnBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5tYXJnaW4tbGVmdDogLTQ1cHg7XHJcbm1hcmdpbi1yaWdodDogLTQ1cHg7XHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5jbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIHtcclxucGFkZGluZzogMTVweDtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIGltZyB7XHJcbm1heC1oZWlnaHQ6IDI1MHB4O1xyXG5ib3JkZXItcmFkaXVzOiAzMDBlbTtcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsIGZvb3RlciB7XHJcbnBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcblxyXG4udGVzdGltb25pYWwuY2xhc3NpYyBpbWcge1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbm1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC5jbGFzc2ljIHEge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgZm9vdGVyOmJlZm9yZSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5jb250ZW50OiBcIlwiO1xyXG53aWR0aDogMzBweDtcclxuaGVpZ2h0OiA0cHg7XHJcbm1hcmdpbjogMTBweCBhdXRvIDE1cHggYXV0bztcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbkJ1dHRvbntcclxuYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuY29sb3I6IGJsYWNrO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG53aWR0aDogMzAlO1xyXG5ib3JkZXI6IG5vbmU7XHJcbnBhZGRpbmc6IDE1cHggMzJweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxubWFyZ2luOiA0cHggMnB4O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb25CdXR0b246aG92ZXJ7XHJcbmNvbG9yOiAjZmZmZjAwO1xyXG5iYWNrZ3JvdW5kOiAjMDAwO1xyXG5ib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4ucG9ydGZvbGlve1xyXG52aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5zZWN0aW9uLXRpdGxle1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNwb3J0Zm9saW9zIC5taXgge1xyXG5wYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29sLW1kLTR7XHJcbmZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG5tYXgtd2lkdGg6IDMzLjMzMzMzMyVcclxufVxyXG5cclxuI3BvcnRmb2xpb3MgLnBvcnRmb2xpby1pdGVtIC5zaG90LWl0ZW0ge1xyXG5tYXJnaW46IDBweDtcclxufVxyXG5cclxuLnNob3QtaXRlbSB7XHJcbm1hcmdpbi1yaWdodDogMTVweDtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5iYWNrZ3JvdW5kOiAjZmZmO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaG90LWl0ZW0gaW1nIHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaG90LWl0ZW0gLm92ZXJsYXkge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmxlZnQ6IDA7XHJcbnRvcDogMDtcclxuYmFja2dyb3VuZDogcmdiYSgwLCAxODAsIDIxNywgMC42KTtcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxuLmljb24tZXllOmJlZm9yZSB7XHJcbmNvbnRlbnQ6IFwiXFxlMDg3XCI7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxuLm92ZXJsYXkgLmljb25zIGkge1xyXG5oZWlnaHQ6IDQycHg7XHJcbndpZHRoOiA0MnB4O1xyXG5saW5lLWhlaWdodDogNDJweDtcclxuY29sb3I6ICMwMGI0ZDk7XHJcbmxlZnQ6IDUwJTtcclxubWFyZ2luLWxlZnQ6IC0yNHB4O1xyXG5tYXJnaW4tdG9wOiAtMjRweDtcclxudG9wOiA1MCU7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuei1pbmRleDogMjtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuYmFja2dyb3VuZDogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSAucHJldmlldyB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogNDUlO1xyXG50b3A6IDUwJTtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5vdmVybGF5IC5saW5rIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiA2MCU7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG50b3A6IDUwJTtcclxuY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zaG90LWl0ZW06aG92ZXIgLm92ZXJsYXkge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbndpZHRoOiA1MHB4O1xyXG5oZWlnaHQ6IDYwcHg7XHJcbn1cclxuIFxyXG4ubGVhZCB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6IGdob3N0d2hpdGU7XHJcbmZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/*!***********************************!*\
  !*** ./src/app/rxjs-operators.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators








/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/focus.directive */ "./src/app/directives/focus.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            exports: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Add the RxJS Observable operators we need in this app.

var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, location) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, location: location });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + "/api/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/api/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ accessToken: accessToken });
        return this.http
            .post(this.baseUrl + '/api/externalauth/facebook', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], UserService);
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/config.service.ts ***!
  \************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'https://localhost:44360';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\r\n  <div class=\"double-bounce1\"></div>\r\n  <div class=\"double-bounce2\"></div>\r\n</div> \r\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXNCw0LTQvNGW0L1cXERlc2t0b3BcXGdpdGh1YlxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCx1REFBc0Q7RUFDdEQsK0NBQThDLEVBQy9DOztBQUVEO0VBQ0UsK0JBQThCO0VBQzlCLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFO0lBQ0UsNEJBQTZCLEVBQUE7RUFHL0I7SUFDRSw0QkFBNkIsRUFBQSxFQUFBOztBQUlqQztFQUNFO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBO0VBRy9CO0lBQ0Usb0JBQXFCO0lBQ3JCLDRCQUE2QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxufVxyXG5cclxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZG91YmxlLWJvdW5jZTIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/trips/fulltrip/fulltrip.component.html":
/*!********************************************************!*\
  !*** ./src/app/trips/fulltrip/fulltrip.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fulltrip works!\n</p>\n"

/***/ }),

/***/ "./src/app/trips/fulltrip/fulltrip.component.scss":
/*!********************************************************!*\
  !*** ./src/app/trips/fulltrip/fulltrip.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXBzL2Z1bGx0cmlwL2Z1bGx0cmlwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/trips/fulltrip/fulltrip.component.ts":
/*!******************************************************!*\
  !*** ./src/app/trips/fulltrip/fulltrip.component.ts ***!
  \******************************************************/
/*! exports provided: FulltripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FulltripComponent", function() { return FulltripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FulltripComponent = (function () {
    function FulltripComponent() {
    }
    FulltripComponent.prototype.ngOnInit = function () {
    };
    FulltripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fulltrip',
            template: __webpack_require__(/*! ./fulltrip.component.html */ "./src/app/trips/fulltrip/fulltrip.component.html"),
            styles: [__webpack_require__(/*! ./fulltrip.component.scss */ "./src/app/trips/fulltrip/fulltrip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FulltripComponent);
    return FulltripComponent;
}());



/***/ }),

/***/ "./src/app/trips/models/trip.ts":
/*!**************************************!*\
  !*** ./src/app/trips/models/trip.ts ***!
  \**************************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
var Trip = (function () {
    function Trip() {
    }
    return Trip;
}());



/***/ }),

/***/ "./src/app/trips/trip.service.ts":
/*!***************************************!*\
  !*** ./src/app/trips/trip.service.ts ***!
  \***************************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rxjs-operators */ "./src/app/rxjs-operators.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripService = (function (_super) {
    __extends(TripService, _super);
    function TripService(httpClient, configService) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.configService = configService;
        _this.apiUrl = '';
        _this.baseUrl = '/api/trip';
        _this.apiUrl = _this.configService.getApiURI();
        return _this;
    }
    TripService.prototype.getTrips = function (page) {
        var headers = this.getHeaders();
        return this.httpClient.get("" + this.apiUrl + this.baseUrl + "?page=" + page, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripService.prototype.getTrip = function (id) {
        var headers = this.getHeaders();
        return this.httpClient.get("" + this.apiUrl + this.baseUrl + "/" + id, { headers: headers }).
            map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripService.prototype.createTrip = function (trip) {
        var headers = this.getHeaders();
        return this.httpClient.post("" + this.apiUrl + this.baseUrl, trip, { headers: headers })
            .map(function (Response) { return Response.json(); })
            .catch(this.handleError);
    };
    TripService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return headers;
    };
    TripService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], TripService);
    return TripService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/trips/triplist/triplist.component.html":
/*!********************************************************!*\
  !*** ./src/app/trips/triplist/triplist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner [isRunning]=\"!trips\"></app-spinner>\n<!-- | paginate: { id:'server', itemsPerPage: 10, currentPage: page ,totalItems:11}-->\n<body>  \n  <div class=\"toBeCentered\" *ngFor=\"let trip of trips\">\n      <article class=\"post\">\n          <header >\n              <div class=\"title\">\n                  <h2><a href=\"#\">{{trip.name}}</a></h2>\n                </div>\n              <div class=\"meta\">\n                  <a href=\"#\" class=\"author\"><span class=\"name\">{{trip.user.firstName}} {{trip.user.lastName}}</span><img src=\"{{trip.user.pictureUrl}}\" alt=\"\" /></a>\n              </div>\n          </header>\n          <p>{{trip.description}}</p>\n          <footer>\n              <ul class=\"actions\">\n                  <li><a href=\"#\" class=\"button large\">Continue Reading</a></li>\n              </ul>\n              <ul class=\"stats\">\n                  <li><a href=\"#\">General</a></li>\n                  <li><a href=\"#\" class=\"icon fa-heart\">28</a></li>\n                  <li><a href=\"#\" class=\"icon fa-comment\">128</a></li>\n              </ul>\n          </footer>\n      </article>      \n  </div>\n  <!--<pagination-controls (pageChange)=\"getPage($event)\" id=\"server\"></pagination-controls>-->\n</body>"

/***/ }),

/***/ "./src/app/trips/triplist/triplist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/trips/triplist/triplist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900\");/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:'FontAwesome';src:url('fontawesome-webfont.eot?v=4.7.0');src:url('fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),url('fontawesome-webfont.woff2?v=4.7.0') format('woff2'),url('fontawesome-webfont.woff?v=4.7.0') format('woff'),url('fontawesome-webfont.ttf?v=4.7.0') format('truetype'),url('fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-remove:before,.fa-close:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-gear:before,.fa-cog:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-rotate-right:before,.fa-repeat:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-gears:before,.fa-cogs:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-feed:before,.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-save:before,.fa-floppy-o:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-unsorted:before,.fa-sort:before{content:\"\\f0dc\"}.fa-sort-down:before,.fa-sort-desc:before{content:\"\\f0dd\"}.fa-sort-up:before,.fa-sort-asc:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-legal:before,.fa-gavel:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-flash:before,.fa-bolt:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-paste:before,.fa-clipboard:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-unlink:before,.fa-chain-broken:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\f150\"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\f151\"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\f152\"}.fa-euro:before,.fa-eur:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-rupee:before,.fa-inr:before{content:\"\\f156\"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\f157\"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\f158\"}.fa-won:before,.fa-krw:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-turkish-lira:before,.fa-try:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:\"\\f19c\"}.fa-mortar-board:before,.fa-graduation-cap:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:\"\\f1c5\"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:\"\\f1c6\"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-ge:before,.fa-empire:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-send:before,.fa-paper-plane:before{content:\"\\f1d8\"}.fa-send-o:before,.fa-paper-plane-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-genderless:before{content:\"\\f22d\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-hotel:before,.fa-bed:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.fa-yc:before,.fa-y-combinator:before{content:\"\\f23b\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-opencart:before{content:\"\\f23d\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:\"\\f240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\f242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\f244\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-sticky-note-o:before{content:\"\\f24a\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-clone:before{content:\"\\f24d\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-hourglass-o:before{content:\"\\f250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\f251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\f255\"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:\"\\f256\"}.fa-hand-scissors-o:before{content:\"\\f257\"}.fa-hand-lizard-o:before{content:\"\\f258\"}.fa-hand-spock-o:before{content:\"\\f259\"}.fa-hand-pointer-o:before{content:\"\\f25a\"}.fa-hand-peace-o:before{content:\"\\f25b\"}.fa-trademark:before{content:\"\\f25c\"}.fa-registered:before{content:\"\\f25d\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-safari:before{content:\"\\f267\"}.fa-chrome:before{content:\"\\f268\"}.fa-firefox:before{content:\"\\f269\"}.fa-opera:before{content:\"\\f26a\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-tv:before,.fa-television:before{content:\"\\f26c\"}.fa-contao:before{content:\"\\f26d\"}.fa-500px:before{content:\"\\f26e\"}.fa-amazon:before{content:\"\\f270\"}.fa-calendar-plus-o:before{content:\"\\f271\"}.fa-calendar-minus-o:before{content:\"\\f272\"}.fa-calendar-times-o:before{content:\"\\f273\"}.fa-calendar-check-o:before{content:\"\\f274\"}.fa-industry:before{content:\"\\f275\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-map-o:before{content:\"\\f278\"}.fa-map:before{content:\"\\f279\"}.fa-commenting:before{content:\"\\f27a\"}.fa-commenting-o:before{content:\"\\f27b\"}.fa-houzz:before{content:\"\\f27c\"}.fa-vimeo:before{content:\"\\f27d\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-fonticons:before{content:\"\\f280\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-edge:before{content:\"\\f282\"}.fa-credit-card-alt:before{content:\"\\f283\"}.fa-codiepie:before{content:\"\\f284\"}.fa-modx:before{content:\"\\f285\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-usb:before{content:\"\\f287\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-scribd:before{content:\"\\f28a\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-pause-circle-o:before{content:\"\\f28c\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stop-circle-o:before{content:\"\\f28e\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-hashtag:before{content:\"\\f292\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-percent:before{content:\"\\f295\"}.fa-gitlab:before{content:\"\\f296\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpforms:before{content:\"\\f298\"}.fa-envira:before{content:\"\\f299\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-wheelchair-alt:before{content:\"\\f29b\"}.fa-question-circle-o:before{content:\"\\f29c\"}.fa-blind:before{content:\"\\f29d\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-volume-control-phone:before{content:\"\\f2a0\"}.fa-braille:before{content:\"\\f2a1\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:\"\\f2a4\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-signing:before,.fa-sign-language:before{content:\"\\f2a7\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\f2b3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\f2b4\"}.fa-handshake-o:before{content:\"\\f2b5\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-o:before{content:\"\\f2b7\"}.fa-linode:before{content:\"\\f2b8\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-book-o:before{content:\"\\f2ba\"}.fa-vcard:before,.fa-address-card:before{content:\"\\f2bb\"}.fa-vcard-o:before,.fa-address-card-o:before{content:\"\\f2bc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-circle-o:before{content:\"\\f2be\"}.fa-user-o:before{content:\"\\f2c0\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\f2c2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\f2c3\"}.fa-quora:before{content:\"\\f2c4\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-shower:before{content:\"\\f2cc\"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:\"\\f2cd\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\f2d3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\f2d4\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-grav:before{content:\"\\f2d6\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-eercast:before{content:\"\\f2da\"}.fa-microchip:before{content:\"\\f2db\"}.fa-snowflake-o:before{content:\"\\f2dc\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-meetup:before{content:\"\\f2e0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}/*s\r\n\tFuture Imperfect by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n*/html, body, div, span, applet, object,\niframe, h1, h2, h3, h4, h5, h6, p, blockquote,\npre, a, abbr, acronym, address, big, cite,\ncode, del, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var, b,\nu, i, center, dl, dt, dd, ol, ul, li, fieldset,\nform, label, legend, table, caption, tbody,\ntfoot, thead, tr, th, td, article, aside,\ncanvas, details, embed, figure, figcaption,\nfooter, header, hgroup, menu, nav, output, ruby,\nsection, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-decoration: none; }.toBeCentered {\n  width: 59%;\n  margin-top: 3em;\n  margin-right: auto;\n  margin-left: auto; }article, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }body {\n  line-height: 1; }ol, ul {\n  list-style: none; }blockquote, q {\n  quotes: none; }blockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }table {\n  border-collapse: collapse;\n  border-spacing: 0; }body {\n  -webkit-text-size-adjust: none; }mark {\n  background-color: transparent;\n  color: inherit; }input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }input, select, textarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none; }/* Basic */@-ms-viewport {\n  width: device-width; }body {\n  -ms-overflow-style: scrollbar; }@media screen and (max-width: 480px) {\n  html, body {\n    min-width: 320px; } }html {\n  box-sizing: border-box; }*, *:before, *:after {\n  box-sizing: inherit; }body {\n  background: #f4f4f4; }body.is-preload *, body.is-preload *:before, body.is-preload *:after {\n  -webkit-animation: none !important;\n  animation: none !important;\n  transition: none !important; }/* Type */body, input, select, textarea {\n  color: #646464;\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-size: 14pt;\n  font-weight: 400;\n  line-height: 1.75; }@media screen and (max-width: 1680px) {\n  body, input, select, textarea {\n    font-size: 12pt; } }@media screen and (max-width: 1280px) {\n  body, input, select, textarea {\n    font-size: 12pt; } }@media screen and (max-width: 980px) {\n  body, input, select, textarea {\n    font-size: 12pt; } }@media screen and (max-width: 736px) {\n  body, input, select, textarea {\n    font-size: 12pt; } }@media screen and (max-width: 480px) {\n  body, input, select, textarea {\n    font-size: 12pt; } }a {\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px rgba(160, 160, 160, 0.65);\n  color: inherit;\n  text-decoration: none; }a:before {\n  transition: color 0.2s ease; }a:hover {\n  border-bottom-color: transparent;\n  color: #2ebaae !important;\n  text-decoration: none; }a:hover:before {\n  color: #2ebaae !important; }strong, b {\n  color: #3c3b3b;\n  font-weight: 700; }em, i {\n  font-style: italic; }p {\n  margin: 0 0 2em 0; }h1, h2, h3, h4, h5, h6 {\n  color: #3c3b3b;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-weight: 800;\n  letter-spacing: 0.25em;\n  line-height: 1.65;\n  margin: 0 0 1em 0;\n  text-transform: uppercase;\n  text-decoration: none; }h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  color: inherit;\n  border-bottom: 0; }h2 {\n  font-size: 1.1em; }h3 {\n  font-size: 0.9em; }h4 {\n  font-size: 0.7em; }h5 {\n  font-size: 0.7em; }h6 {\n  font-size: 0.7em; }sub {\n  font-size: 0.8em;\n  position: relative;\n  top: 0.5em; }sup {\n  font-size: 0.8em;\n  position: relative;\n  top: -0.5em; }blockquote {\n  border-left: solid 4px rgba(160, 160, 160, 0.3);\n  font-style: italic;\n  margin: 0 0 2em 0;\n  padding: 0.5em 0 0.5em 2em; }code {\n  background: rgba(160, 160, 160, 0.075);\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9em;\n  margin: 0 0.25em;\n  padding: 0.25em 0.65em; }pre {\n  -webkit-overflow-scrolling: touch;\n  font-family: \"Courier New\", monospace;\n  font-size: 0.9em;\n  margin: 0 0 2em 0; }pre code {\n  display: block;\n  line-height: 1.75em;\n  padding: 1em 1.5em;\n  overflow-x: auto; }hr {\n  border: 0;\n  border-bottom: solid 1px rgba(160, 160, 160, 0.3);\n  margin: 2em 0; }hr.major {\n  margin: 3em 0; }.align-left {\n  text-align: left; }.align-center {\n  text-align: center; }.align-right {\n  text-align: right; }/* Row */.row {\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  align-items: stretch; }.row > * {\n  box-sizing: border-box; }.row.gtr-uniform > * > :last-child {\n  margin-bottom: 0; }.row.aln-left {\n  justify-content: flex-start; }.row.aln-center {\n  justify-content: center; }.row.aln-right {\n  justify-content: flex-end; }.row.aln-top {\n  align-items: flex-start; }.row.aln-middle {\n  align-items: center; }.row.aln-bottom {\n  align-items: flex-end; }.row > .imp {\n  order: -1; }.row > .col-1 {\n  width: 8.3333333333%; }.row > .off-1 {\n  margin-left: 8.3333333333%; }.row > .col-2 {\n  width: 16.6666666667%; }.row > .off-2 {\n  margin-left: 16.6666666667%; }.row > .col-3 {\n  width: 25%; }.row > .off-3 {\n  margin-left: 25%; }.row > .col-4 {\n  width: 33.3333333333%; }.row > .off-4 {\n  margin-left: 33.3333333333%; }.row > .col-5 {\n  width: 41.6666666667%; }.row > .off-5 {\n  margin-left: 41.6666666667%; }.row > .col-6 {\n  width: 50%; }.row > .off-6 {\n  margin-left: 50%; }.row > .col-7 {\n  width: 58.3333333333%; }.row > .off-7 {\n  margin-left: 58.3333333333%; }.row > .col-8 {\n  width: 66.6666666667%; }.row > .off-8 {\n  margin-left: 66.6666666667%; }.row > .col-9 {\n  width: 75%; }.row > .off-9 {\n  margin-left: 75%; }.row > .col-10 {\n  width: 83.3333333333%; }.row > .off-10 {\n  margin-left: 83.3333333333%; }.row > .col-11 {\n  width: 91.6666666667%; }.row > .off-11 {\n  margin-left: 91.6666666667%; }.row > .col-12 {\n  width: 100%; }.row > .off-12 {\n  margin-left: 100%; }.row.gtr-0 {\n  margin-top: 0;\n  margin-left: 0em; }.row.gtr-0 > * {\n  padding: 0 0 0 0em; }.row.gtr-0.gtr-uniform {\n  margin-top: 0em; }.row.gtr-0.gtr-uniform > * {\n  padding-top: 0em; }.row.gtr-25 {\n  margin-top: 0;\n  margin-left: -0.25em; }.row.gtr-25 > * {\n  padding: 0 0 0 0.25em; }.row.gtr-25.gtr-uniform {\n  margin-top: -0.25em; }.row.gtr-25.gtr-uniform > * {\n  padding-top: 0.25em; }.row.gtr-50 {\n  margin-top: 0;\n  margin-left: -0.5em; }.row.gtr-50 > * {\n  padding: 0 0 0 0.5em; }.row.gtr-50.gtr-uniform {\n  margin-top: -0.5em; }.row.gtr-50.gtr-uniform > * {\n  padding-top: 0.5em; }.row {\n  margin-top: 0;\n  margin-left: -1em; }.row > * {\n  padding: 0 0 0 1em; }.row.gtr-uniform {\n  margin-top: -1em; }.row.gtr-uniform > * {\n  padding-top: 1em; }.row.gtr-150 {\n  margin-top: 0;\n  margin-left: -1.5em; }.row.gtr-150 > * {\n  padding: 0 0 0 1.5em; }.row.gtr-150.gtr-uniform {\n  margin-top: -1.5em; }.row.gtr-150.gtr-uniform > * {\n  padding-top: 1.5em; }.row.gtr-200 {\n  margin-top: 0;\n  margin-left: -2em; }.row.gtr-200 > * {\n  padding: 0 0 0 2em; }.row.gtr-200.gtr-uniform {\n  margin-top: -2em; }.row.gtr-200.gtr-uniform > * {\n  padding-top: 2em; }@media screen and (max-width: 1680px) {\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    align-items: stretch; }\n  .row > * {\n    box-sizing: border-box; }\n  .row.gtr-uniform > * > :last-child {\n    margin-bottom: 0; }\n  .row.aln-left {\n    justify-content: flex-start; }\n  .row.aln-center {\n    justify-content: center; }\n  .row.aln-right {\n    justify-content: flex-end; }\n  .row.aln-top {\n    align-items: flex-start; }\n  .row.aln-middle {\n    align-items: center; }\n  .row.aln-bottom {\n    align-items: flex-end; }\n  .row > .imp-xlarge {\n    order: -1; }\n  .row > .col-1-xlarge {\n    width: 8.3333333333%; }\n  .row > .off-1-xlarge {\n    margin-left: 8.3333333333%; }\n  .row > .col-2-xlarge {\n    width: 16.6666666667%; }\n  .row > .off-2-xlarge {\n    margin-left: 16.6666666667%; }\n  .row > .col-3-xlarge {\n    width: 25%; }\n  .row > .off-3-xlarge {\n    margin-left: 25%; }\n  .row > .col-4-xlarge {\n    width: 33.3333333333%; }\n  .row > .off-4-xlarge {\n    margin-left: 33.3333333333%; }\n  .row > .col-5-xlarge {\n    width: 41.6666666667%; }\n  .row > .off-5-xlarge {\n    margin-left: 41.6666666667%; }\n  .row > .col-6-xlarge {\n    width: 50%; }\n  .row > .off-6-xlarge {\n    margin-left: 50%; }\n  .row > .col-7-xlarge {\n    width: 58.3333333333%; }\n  .row > .off-7-xlarge {\n    margin-left: 58.3333333333%; }\n  .row > .col-8-xlarge {\n    width: 66.6666666667%; }\n  .row > .off-8-xlarge {\n    margin-left: 66.6666666667%; }\n  .row > .col-9-xlarge {\n    width: 75%; }\n  .row > .off-9-xlarge {\n    margin-left: 75%; }\n  .row > .col-10-xlarge {\n    width: 83.3333333333%; }\n  .row > .off-10-xlarge {\n    margin-left: 83.3333333333%; }\n  .row > .col-11-xlarge {\n    width: 91.6666666667%; }\n  .row > .off-11-xlarge {\n    margin-left: 91.6666666667%; }\n  .row > .col-12-xlarge {\n    width: 100%; }\n  .row > .off-12-xlarge {\n    margin-left: 100%; }\n  .row.gtr-0 {\n    margin-top: 0;\n    margin-left: 0em; }\n  .row.gtr-0 > * {\n    padding: 0 0 0 0em; }\n  .row.gtr-0.gtr-uniform {\n    margin-top: 0em; }\n  .row.gtr-0.gtr-uniform > * {\n    padding-top: 0em; }\n  .row.gtr-25 {\n    margin-top: 0;\n    margin-left: -0.25em; }\n  .row.gtr-25 > * {\n    padding: 0 0 0 0.25em; }\n  .row.gtr-25.gtr-uniform {\n    margin-top: -0.25em; }\n  .row.gtr-25.gtr-uniform > * {\n    padding-top: 0.25em; }\n  .row.gtr-50 {\n    margin-top: 0;\n    margin-left: -0.5em; }\n  .row.gtr-50 > * {\n    padding: 0 0 0 0.5em; }\n  .row.gtr-50.gtr-uniform {\n    margin-top: -0.5em; }\n  .row.gtr-50.gtr-uniform > * {\n    padding-top: 0.5em; }\n  .row {\n    margin-top: 0;\n    margin-left: -1em; }\n  .row > * {\n    padding: 0 0 0 1em; }\n  .row.gtr-uniform {\n    margin-top: -1em; }\n  .row.gtr-uniform > * {\n    padding-top: 1em; }\n  .row.gtr-150 {\n    margin-top: 0;\n    margin-left: -1.5em; }\n  .row.gtr-150 > * {\n    padding: 0 0 0 1.5em; }\n  .row.gtr-150.gtr-uniform {\n    margin-top: -1.5em; }\n  .row.gtr-150.gtr-uniform > * {\n    padding-top: 1.5em; }\n  .row.gtr-200 {\n    margin-top: 0;\n    margin-left: -2em; }\n  .row.gtr-200 > * {\n    padding: 0 0 0 2em; }\n  .row.gtr-200.gtr-uniform {\n    margin-top: -2em; }\n  .row.gtr-200.gtr-uniform > * {\n    padding-top: 2em; } }@media screen and (max-width: 1280px) {\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    align-items: stretch; }\n  .row > * {\n    box-sizing: border-box; }\n  .row.gtr-uniform > * > :last-child {\n    margin-bottom: 0; }\n  .row.aln-left {\n    justify-content: flex-start; }\n  .row.aln-center {\n    justify-content: center; }\n  .row.aln-right {\n    justify-content: flex-end; }\n  .row.aln-top {\n    align-items: flex-start; }\n  .row.aln-middle {\n    align-items: center; }\n  .row.aln-bottom {\n    align-items: flex-end; }\n  .row > .imp-large {\n    order: -1; }\n  .row > .col-1-large {\n    width: 8.3333333333%; }\n  .row > .off-1-large {\n    margin-left: 8.3333333333%; }\n  .row > .col-2-large {\n    width: 16.6666666667%; }\n  .row > .off-2-large {\n    margin-left: 16.6666666667%; }\n  .row > .col-3-large {\n    width: 25%; }\n  .row > .off-3-large {\n    margin-left: 25%; }\n  .row > .col-4-large {\n    width: 33.3333333333%; }\n  .row > .off-4-large {\n    margin-left: 33.3333333333%; }\n  .row > .col-5-large {\n    width: 41.6666666667%; }\n  .row > .off-5-large {\n    margin-left: 41.6666666667%; }\n  .row > .col-6-large {\n    width: 50%; }\n  .row > .off-6-large {\n    margin-left: 50%; }\n  .row > .col-7-large {\n    width: 58.3333333333%; }\n  .row > .off-7-large {\n    margin-left: 58.3333333333%; }\n  .row > .col-8-large {\n    width: 66.6666666667%; }\n  .row > .off-8-large {\n    margin-left: 66.6666666667%; }\n  .row > .col-9-large {\n    width: 75%; }\n  .row > .off-9-large {\n    margin-left: 75%; }\n  .row > .col-10-large {\n    width: 83.3333333333%; }\n  .row > .off-10-large {\n    margin-left: 83.3333333333%; }\n  .row > .col-11-large {\n    width: 91.6666666667%; }\n  .row > .off-11-large {\n    margin-left: 91.6666666667%; }\n  .row > .col-12-large {\n    width: 100%; }\n  .row > .off-12-large {\n    margin-left: 100%; }\n  .row.gtr-0 {\n    margin-top: 0;\n    margin-left: 0em; }\n  .row.gtr-0 > * {\n    padding: 0 0 0 0em; }\n  .row.gtr-0.gtr-uniform {\n    margin-top: 0em; }\n  .row.gtr-0.gtr-uniform > * {\n    padding-top: 0em; }\n  .row.gtr-25 {\n    margin-top: 0;\n    margin-left: -0.25em; }\n  .row.gtr-25 > * {\n    padding: 0 0 0 0.25em; }\n  .row.gtr-25.gtr-uniform {\n    margin-top: -0.25em; }\n  .row.gtr-25.gtr-uniform > * {\n    padding-top: 0.25em; }\n  .row.gtr-50 {\n    margin-top: 0;\n    margin-left: -0.5em; }\n  .row.gtr-50 > * {\n    padding: 0 0 0 0.5em; }\n  .row.gtr-50.gtr-uniform {\n    margin-top: -0.5em; }\n  .row.gtr-50.gtr-uniform > * {\n    padding-top: 0.5em; }\n  .row {\n    margin-top: 0;\n    margin-left: -1em; }\n  .row > * {\n    padding: 0 0 0 1em; }\n  .row.gtr-uniform {\n    margin-top: -1em; }\n  .row.gtr-uniform > * {\n    padding-top: 1em; }\n  .row.gtr-150 {\n    margin-top: 0;\n    margin-left: -1.5em; }\n  .row.gtr-150 > * {\n    padding: 0 0 0 1.5em; }\n  .row.gtr-150.gtr-uniform {\n    margin-top: -1.5em; }\n  .row.gtr-150.gtr-uniform > * {\n    padding-top: 1.5em; }\n  .row.gtr-200 {\n    margin-top: 0;\n    margin-left: -2em; }\n  .row.gtr-200 > * {\n    padding: 0 0 0 2em; }\n  .row.gtr-200.gtr-uniform {\n    margin-top: -2em; }\n  .row.gtr-200.gtr-uniform > * {\n    padding-top: 2em; } }@media screen and (max-width: 980px) {\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    align-items: stretch; }\n  .row > * {\n    box-sizing: border-box; }\n  .row.gtr-uniform > * > :last-child {\n    margin-bottom: 0; }\n  .row.aln-left {\n    justify-content: flex-start; }\n  .row.aln-center {\n    justify-content: center; }\n  .row.aln-right {\n    justify-content: flex-end; }\n  .row.aln-top {\n    align-items: flex-start; }\n  .row.aln-middle {\n    align-items: center; }\n  .row.aln-bottom {\n    align-items: flex-end; }\n  .row > .imp-medium {\n    order: -1; }\n  .row > .col-1-medium {\n    width: 8.3333333333%; }\n  .row > .off-1-medium {\n    margin-left: 8.3333333333%; }\n  .row > .col-2-medium {\n    width: 16.6666666667%; }\n  .row > .off-2-medium {\n    margin-left: 16.6666666667%; }\n  .row > .col-3-medium {\n    width: 25%; }\n  .row > .off-3-medium {\n    margin-left: 25%; }\n  .row > .col-4-medium {\n    width: 33.3333333333%; }\n  .row > .off-4-medium {\n    margin-left: 33.3333333333%; }\n  .row > .col-5-medium {\n    width: 41.6666666667%; }\n  .row > .off-5-medium {\n    margin-left: 41.6666666667%; }\n  .row > .col-6-medium {\n    width: 50%; }\n  .row > .off-6-medium {\n    margin-left: 50%; }\n  .row > .col-7-medium {\n    width: 58.3333333333%; }\n  .row > .off-7-medium {\n    margin-left: 58.3333333333%; }\n  .row > .col-8-medium {\n    width: 66.6666666667%; }\n  .row > .off-8-medium {\n    margin-left: 66.6666666667%; }\n  .row > .col-9-medium {\n    width: 75%; }\n  .row > .off-9-medium {\n    margin-left: 75%; }\n  .row > .col-10-medium {\n    width: 83.3333333333%; }\n  .row > .off-10-medium {\n    margin-left: 83.3333333333%; }\n  .row > .col-11-medium {\n    width: 91.6666666667%; }\n  .row > .off-11-medium {\n    margin-left: 91.6666666667%; }\n  .row > .col-12-medium {\n    width: 100%; }\n  .row > .off-12-medium {\n    margin-left: 100%; }\n  .row.gtr-0 {\n    margin-top: 0;\n    margin-left: 0em; }\n  .row.gtr-0 > * {\n    padding: 0 0 0 0em; }\n  .row.gtr-0.gtr-uniform {\n    margin-top: 0em; }\n  .row.gtr-0.gtr-uniform > * {\n    padding-top: 0em; }\n  .row.gtr-25 {\n    margin-top: 0;\n    margin-left: -0.25em; }\n  .row.gtr-25 > * {\n    padding: 0 0 0 0.25em; }\n  .row.gtr-25.gtr-uniform {\n    margin-top: -0.25em; }\n  .row.gtr-25.gtr-uniform > * {\n    padding-top: 0.25em; }\n  .row.gtr-50 {\n    margin-top: 0;\n    margin-left: -0.5em; }\n  .row.gtr-50 > * {\n    padding: 0 0 0 0.5em; }\n  .row.gtr-50.gtr-uniform {\n    margin-top: -0.5em; }\n  .row.gtr-50.gtr-uniform > * {\n    padding-top: 0.5em; }\n  .row {\n    margin-top: 0;\n    margin-left: -1em; }\n  .row > * {\n    padding: 0 0 0 1em; }\n  .row.gtr-uniform {\n    margin-top: -1em; }\n  .row.gtr-uniform > * {\n    padding-top: 1em; }\n  .row.gtr-150 {\n    margin-top: 0;\n    margin-left: -1.5em; }\n  .row.gtr-150 > * {\n    padding: 0 0 0 1.5em; }\n  .row.gtr-150.gtr-uniform {\n    margin-top: -1.5em; }\n  .row.gtr-150.gtr-uniform > * {\n    padding-top: 1.5em; }\n  .row.gtr-200 {\n    margin-top: 0;\n    margin-left: -2em; }\n  .row.gtr-200 > * {\n    padding: 0 0 0 2em; }\n  .row.gtr-200.gtr-uniform {\n    margin-top: -2em; }\n  .row.gtr-200.gtr-uniform > * {\n    padding-top: 2em; } }@media screen and (max-width: 736px) {\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    align-items: stretch; }\n  .row > * {\n    box-sizing: border-box; }\n  .row.gtr-uniform > * > :last-child {\n    margin-bottom: 0; }\n  .row.aln-left {\n    justify-content: flex-start; }\n  .row.aln-center {\n    justify-content: center; }\n  .row.aln-right {\n    justify-content: flex-end; }\n  .row.aln-top {\n    align-items: flex-start; }\n  .row.aln-middle {\n    align-items: center; }\n  .row.aln-bottom {\n    align-items: flex-end; }\n  .row > .imp-small {\n    order: -1; }\n  .row > .col-1-small {\n    width: 8.3333333333%; }\n  .row > .off-1-small {\n    margin-left: 8.3333333333%; }\n  .row > .col-2-small {\n    width: 16.6666666667%; }\n  .row > .off-2-small {\n    margin-left: 16.6666666667%; }\n  .row > .col-3-small {\n    width: 25%; }\n  .row > .off-3-small {\n    margin-left: 25%; }\n  .row > .col-4-small {\n    width: 33.3333333333%; }\n  .row > .off-4-small {\n    margin-left: 33.3333333333%; }\n  .row > .col-5-small {\n    width: 41.6666666667%; }\n  .row > .off-5-small {\n    margin-left: 41.6666666667%; }\n  .row > .col-6-small {\n    width: 50%; }\n  .row > .off-6-small {\n    margin-left: 50%; }\n  .row > .col-7-small {\n    width: 58.3333333333%; }\n  .row > .off-7-small {\n    margin-left: 58.3333333333%; }\n  .row > .col-8-small {\n    width: 66.6666666667%; }\n  .row > .off-8-small {\n    margin-left: 66.6666666667%; }\n  .row > .col-9-small {\n    width: 75%; }\n  .row > .off-9-small {\n    margin-left: 75%; }\n  .row > .col-10-small {\n    width: 83.3333333333%; }\n  .row > .off-10-small {\n    margin-left: 83.3333333333%; }\n  .row > .col-11-small {\n    width: 91.6666666667%; }\n  .row > .off-11-small {\n    margin-left: 91.6666666667%; }\n  .row > .col-12-small {\n    width: 100%; }\n  .row > .off-12-small {\n    margin-left: 100%; }\n  .row.gtr-0 {\n    margin-top: 0;\n    margin-left: 0em; }\n  .row.gtr-0 > * {\n    padding: 0 0 0 0em; }\n  .row.gtr-0.gtr-uniform {\n    margin-top: 0em; }\n  .row.gtr-0.gtr-uniform > * {\n    padding-top: 0em; }\n  .row.gtr-25 {\n    margin-top: 0;\n    margin-left: -0.25em; }\n  .row.gtr-25 > * {\n    padding: 0 0 0 0.25em; }\n  .row.gtr-25.gtr-uniform {\n    margin-top: -0.25em; }\n  .row.gtr-25.gtr-uniform > * {\n    padding-top: 0.25em; }\n  .row.gtr-50 {\n    margin-top: 0;\n    margin-left: -0.5em; }\n  .row.gtr-50 > * {\n    padding: 0 0 0 0.5em; }\n  .row.gtr-50.gtr-uniform {\n    margin-top: -0.5em; }\n  .row.gtr-50.gtr-uniform > * {\n    padding-top: 0.5em; }\n  .row {\n    margin-top: 0;\n    margin-left: -1em; }\n  .row > * {\n    padding: 0 0 0 1em; }\n  .row.gtr-uniform {\n    margin-top: -1em; }\n  .row.gtr-uniform > * {\n    padding-top: 1em; }\n  .row.gtr-150 {\n    margin-top: 0;\n    margin-left: -1.5em; }\n  .row.gtr-150 > * {\n    padding: 0 0 0 1.5em; }\n  .row.gtr-150.gtr-uniform {\n    margin-top: -1.5em; }\n  .row.gtr-150.gtr-uniform > * {\n    padding-top: 1.5em; }\n  .row.gtr-200 {\n    margin-top: 0;\n    margin-left: -2em; }\n  .row.gtr-200 > * {\n    padding: 0 0 0 2em; }\n  .row.gtr-200.gtr-uniform {\n    margin-top: -2em; }\n  .row.gtr-200.gtr-uniform > * {\n    padding-top: 2em; } }@media screen and (max-width: 480px) {\n  .row {\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    align-items: stretch; }\n  .row > * {\n    box-sizing: border-box; }\n  .row.gtr-uniform > * > :last-child {\n    margin-bottom: 0; }\n  .row.aln-left {\n    justify-content: flex-start; }\n  .row.aln-center {\n    justify-content: center; }\n  .row.aln-right {\n    justify-content: flex-end; }\n  .row.aln-top {\n    align-items: flex-start; }\n  .row.aln-middle {\n    align-items: center; }\n  .row.aln-bottom {\n    align-items: flex-end; }\n  .row > .imp-xsmall {\n    order: -1; }\n  .row > .col-1-xsmall {\n    width: 8.3333333333%; }\n  .row > .off-1-xsmall {\n    margin-left: 8.3333333333%; }\n  .row > .col-2-xsmall {\n    width: 16.6666666667%; }\n  .row > .off-2-xsmall {\n    margin-left: 16.6666666667%; }\n  .row > .col-3-xsmall {\n    width: 25%; }\n  .row > .off-3-xsmall {\n    margin-left: 25%; }\n  .row > .col-4-xsmall {\n    width: 33.3333333333%; }\n  .row > .off-4-xsmall {\n    margin-left: 33.3333333333%; }\n  .row > .col-5-xsmall {\n    width: 41.6666666667%; }\n  .row > .off-5-xsmall {\n    margin-left: 41.6666666667%; }\n  .row > .col-6-xsmall {\n    width: 50%; }\n  .row > .off-6-xsmall {\n    margin-left: 50%; }\n  .row > .col-7-xsmall {\n    width: 58.3333333333%; }\n  .row > .off-7-xsmall {\n    margin-left: 58.3333333333%; }\n  .row > .col-8-xsmall {\n    width: 66.6666666667%; }\n  .row > .off-8-xsmall {\n    margin-left: 66.6666666667%; }\n  .row > .col-9-xsmall {\n    width: 75%; }\n  .row > .off-9-xsmall {\n    margin-left: 75%; }\n  .row > .col-10-xsmall {\n    width: 83.3333333333%; }\n  .row > .off-10-xsmall {\n    margin-left: 83.3333333333%; }\n  .row > .col-11-xsmall {\n    width: 91.6666666667%; }\n  .row > .off-11-xsmall {\n    margin-left: 91.6666666667%; }\n  .row > .col-12-xsmall {\n    width: 100%; }\n  .row > .off-12-xsmall {\n    margin-left: 100%; }\n  .row.gtr-0 {\n    margin-top: 0;\n    margin-left: 0em; }\n  .row.gtr-0 > * {\n    padding: 0 0 0 0em; }\n  .row.gtr-0.gtr-uniform {\n    margin-top: 0em; }\n  .row.gtr-0.gtr-uniform > * {\n    padding-top: 0em; }\n  .row.gtr-25 {\n    margin-top: 0;\n    margin-left: -0.25em; }\n  .row.gtr-25 > * {\n    padding: 0 0 0 0.25em; }\n  .row.gtr-25.gtr-uniform {\n    margin-top: -0.25em; }\n  .row.gtr-25.gtr-uniform > * {\n    padding-top: 0.25em; }\n  .row.gtr-50 {\n    margin-top: 0;\n    margin-left: -0.5em; }\n  .row.gtr-50 > * {\n    padding: 0 0 0 0.5em; }\n  .row.gtr-50.gtr-uniform {\n    margin-top: -0.5em; }\n  .row.gtr-50.gtr-uniform > * {\n    padding-top: 0.5em; }\n  .row {\n    margin-top: 0;\n    margin-left: -1em; }\n  .row > * {\n    padding: 0 0 0 1em; }\n  .row.gtr-uniform {\n    margin-top: -1em; }\n  .row.gtr-uniform > * {\n    padding-top: 1em; }\n  .row.gtr-150 {\n    margin-top: 0;\n    margin-left: -1.5em; }\n  .row.gtr-150 > * {\n    padding: 0 0 0 1.5em; }\n  .row.gtr-150.gtr-uniform {\n    margin-top: -1.5em; }\n  .row.gtr-150.gtr-uniform > * {\n    padding-top: 1.5em; }\n  .row.gtr-200 {\n    margin-top: 0;\n    margin-left: -2em; }\n  .row.gtr-200 > * {\n    padding: 0 0 0 2em; }\n  .row.gtr-200.gtr-uniform {\n    margin-top: -2em; }\n  .row.gtr-200.gtr-uniform > * {\n    padding-top: 2em; } }/* Author */.author {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: row;\n  flex-direction: row;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  -moz-justify-content: -moz-flex-end;\n  -ms-justify-content: -ms-flex-end;\n  justify-content: flex-end;\n  border-bottom: 0;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.6em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  white-space: nowrap; }.author .name {\n  transition: border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px rgba(160, 160, 160, 0.65);\n  display: block;\n  margin: 0 1.5em 0 0;\n  text-decoration: none; }.author img {\n  border-radius: 100%;\n  display: block;\n  width: 4em; }.author:hover .name {\n  border-bottom-color: transparent; }/* Blurb */.blurb h2 {\n  font-size: 0.8em;\n  margin: 0 0 1.5em 0; }.blurb h3 {\n  font-size: 0.7em; }.blurb p {\n  font-size: 0.9em; }/* Box */.box {\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  margin-bottom: 2em;\n  padding: 1.5em; }.box > :last-child,\n.box > :last-child > :last-child,\n.box > :last-child > :last-child > :last-child {\n  margin-bottom: 0; }.box.alt {\n  border: 0;\n  border-radius: 0;\n  padding: 0; }/* Button */input[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"],\nbutton,\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;\n  background-color: transparent;\n  border: 0;\n  box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);\n  color: #3c3b3b !important;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.6em;\n  font-weight: 800;\n  height: 4.8125em;\n  letter-spacing: 0.25em;\n  line-height: 4.8125em;\n  padding: 0 2.5em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap; }input[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\nbutton:hover,\n.button:hover {\n  box-shadow: inset 0 0 0 1px #2ebaae;\n  color: #2ebaae !important; }input[type=\"submit\"]:hover:active,\ninput[type=\"reset\"]:hover:active,\ninput[type=\"button\"]:hover:active,\nbutton:hover:active,\n.button:hover:active {\n  background-color: rgba(46, 186, 174, 0.05); }input[type=\"submit\"]:before, input[type=\"submit\"]:after,\ninput[type=\"reset\"]:before,\ninput[type=\"reset\"]:after,\ninput[type=\"button\"]:before,\ninput[type=\"button\"]:after,\nbutton:before,\nbutton:after,\n.button:before,\n.button:after {\n  color: #aaaaaa;\n  position: relative; }input[type=\"submit\"]:before,\ninput[type=\"reset\"]:before,\ninput[type=\"button\"]:before,\nbutton:before,\n.button:before {\n  left: -1em;\n  padding: 0 0 0 0.75em; }input[type=\"submit\"]:after,\ninput[type=\"reset\"]:after,\ninput[type=\"button\"]:after,\nbutton:after,\n.button:after {\n  left: 1em;\n  padding: 0 0.75em 0 0; }input[type=\"submit\"].fit,\ninput[type=\"reset\"].fit,\ninput[type=\"button\"].fit,\nbutton.fit,\n.button.fit {\n  width: 100%; }input[type=\"submit\"].large,\ninput[type=\"reset\"].large,\ninput[type=\"button\"].large,\nbutton.large,\n.button.large {\n  font-size: 0.7em;\n  padding: 0 3em;\n  text-decoration: none; }input[type=\"submit\"].small,\ninput[type=\"reset\"].small,\ninput[type=\"button\"].small,\nbutton.small,\n.button.small {\n  font-size: 0.5em; }input[type=\"submit\"].disabled, input[type=\"submit\"]:disabled,\ninput[type=\"reset\"].disabled,\ninput[type=\"reset\"]:disabled,\ninput[type=\"button\"].disabled,\ninput[type=\"button\"]:disabled,\nbutton.disabled,\nbutton:disabled,\n.button.disabled,\n.button:disabled {\n  pointer-events: none;\n  color: rgba(160, 160, 160, 0.3) !important; }input[type=\"submit\"].disabled:before, input[type=\"submit\"]:disabled:before,\ninput[type=\"reset\"].disabled:before,\ninput[type=\"reset\"]:disabled:before,\ninput[type=\"button\"].disabled:before,\ninput[type=\"button\"]:disabled:before,\nbutton.disabled:before,\nbutton:disabled:before,\n.button.disabled:before,\n.button:disabled:before {\n  color: rgba(160, 160, 160, 0.3) !important; }/* Form */form {\n  margin: 0 0 2em 0; }form.search {\n  text-decoration: none;\n  position: relative; }form.search:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important; }form.search:before {\n  color: #aaaaaa;\n  content: '\\f002';\n  display: block;\n  height: 2.75em;\n  left: 0;\n  line-height: 2.75em;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 2.5em; }form.search > input:first-child {\n  padding-left: 2.5em; }label {\n  color: #3c3b3b;\n  display: block;\n  font-size: 0.9em;\n  font-weight: 700;\n  margin: 0 0 1em 0; }input[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\ninput[type=\"tel\"],\nselect,\ntextarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  background: rgba(160, 160, 160, 0.075);\n  border: none;\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  border-radius: 0;\n  color: inherit;\n  display: block;\n  outline: 0;\n  padding: 0 1em;\n  text-decoration: none;\n  width: 100%; }input[type=\"text\"]:invalid,\ninput[type=\"password\"]:invalid,\ninput[type=\"email\"]:invalid,\ninput[type=\"tel\"]:invalid,\nselect:invalid,\ntextarea:invalid {\n  box-shadow: none; }input[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ninput[type=\"email\"]:focus,\ninput[type=\"tel\"]:focus,\nselect:focus,\ntextarea:focus {\n  border-color: #2ebaae;\n  box-shadow: inset 0 0 0 1px #2ebaae; }.select-wrapper {\n  text-decoration: none;\n  display: block;\n  position: relative; }.select-wrapper:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important; }.select-wrapper:before {\n  color: rgba(160, 160, 160, 0.3);\n  content: '\\f078';\n  display: block;\n  height: 2.75em;\n  line-height: 2.75em;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 2.75em; }.select-wrapper select::-ms-expand {\n  display: none; }select {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(160, 160, 160, 0.3)' /%3E%3C/svg%3E\");\n  background-size: 1.25rem;\n  background-repeat: no-repeat;\n  background-position: calc(100% - 1rem) center;\n  height: 2.75em;\n  padding-right: 2.75em;\n  text-overflow: ellipsis; }select option {\n  color: #3c3b3b;\n  background: #ffffff; }select:focus::-ms-value {\n  background-color: transparent; }select::-ms-expand {\n  display: none; }input[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\nselect {\n  height: 2.75em; }textarea {\n  padding: 0.75em 1em; }input[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  display: block;\n  float: left;\n  margin-right: -2em;\n  opacity: 0;\n  width: 1em;\n  z-index: -1; }input[type=\"checkbox\"] + label,\ninput[type=\"radio\"] + label {\n  text-decoration: none;\n  color: #646464;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1em;\n  font-weight: 400;\n  padding-left: 2.4em;\n  padding-right: 0.75em;\n  position: relative; }input[type=\"checkbox\"] + label:before,\ninput[type=\"radio\"] + label:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important; }input[type=\"checkbox\"] + label:before,\ninput[type=\"radio\"] + label:before {\n  background: rgba(160, 160, 160, 0.075);\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  content: '';\n  display: inline-block;\n  height: 1.65em;\n  left: 0;\n  line-height: 1.58125em;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 1.65em; }input[type=\"checkbox\"]:checked + label:before,\ninput[type=\"radio\"]:checked + label:before {\n  background: #3c3b3b;\n  border-color: #3c3b3b;\n  color: #ffffff;\n  content: '\\f00c'; }input[type=\"checkbox\"]:focus + label:before,\ninput[type=\"radio\"]:focus + label:before {\n  border-color: #2ebaae;\n  box-shadow: 0 0 0 1px #2ebaae; }input[type=\"radio\"] + label:before {\n  border-radius: 100%; }::-webkit-input-placeholder {\n  color: #aaaaaa !important;\n  opacity: 1.0; }:-moz-placeholder {\n  color: #aaaaaa !important;\n  opacity: 1.0; }::-moz-placeholder {\n  color: #aaaaaa !important;\n  opacity: 1.0; }:-ms-input-placeholder {\n  color: #aaaaaa !important;\n  opacity: 1.0; }/* Icon */.icon {\n  text-decoration: none;\n  border-bottom: none;\n  position: relative; }.icon:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important; }.icon > .label {\n  display: none; }.icon.suffix:before {\n  float: right; }/* List */ol {\n  list-style: decimal;\n  margin: 0 0 2em 0;\n  padding-left: 1.25em; }ol li {\n  padding-left: 0.25em; }ul {\n  list-style: disc;\n  margin: 0 0 2em 0;\n  padding-left: 1em; }ul li {\n  padding-left: 0.5em; }ul.alt {\n  list-style: none;\n  padding-left: 0; }ul.alt li {\n  border-top: solid 1px rgba(160, 160, 160, 0.3);\n  padding: 0.5em 0; }ul.alt li:first-child {\n  border-top: 0;\n  padding-top: 0; }dl {\n  margin: 0 0 2em 0; }dl dt {\n  display: block;\n  font-weight: 700;\n  margin: 0 0 1em 0; }dl dd {\n  margin-left: 2em; }/* Actions */ul.actions {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  cursor: default;\n  list-style: none;\n  margin-left: -1em;\n  padding-left: 0; }ul.actions li {\n  padding: 0 0 0 1em;\n  vertical-align: middle; }ul.actions.special {\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  margin-left: 0; }ul.actions.special li:first-child {\n  padding-left: 0; }ul.actions.stacked {\n  -moz-flex-direction: column;\n  flex-direction: column;\n  margin-left: 0; }ul.actions.stacked li {\n  padding: 1.3em 0 0 0; }ul.actions.stacked li:first-child {\n  padding-top: 0; }ul.actions.fit {\n  width: calc(100% + 1em); }ul.actions.fit li {\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  flex-grow: 1;\n  -ms-flex-shrink: 1;\n  flex-shrink: 1;\n  width: 100%; }ul.actions.fit li > * {\n  width: 100%; }ul.actions.fit.stacked {\n  width: 100%; }@media screen and (max-width: 480px) {\n  ul.actions:not(.fixed) {\n    -moz-flex-direction: column;\n    flex-direction: column;\n    margin-left: 0;\n    width: 100% !important; }\n  ul.actions:not(.fixed) li {\n    -moz-flex-grow: 1;\n    -ms-flex-grow: 1;\n    flex-grow: 1;\n    -ms-flex-shrink: 1;\n    flex-shrink: 1;\n    padding: 1em 0 0 0;\n    text-align: center;\n    width: 100%; }\n  ul.actions:not(.fixed) li > * {\n    width: 100%; }\n  ul.actions:not(.fixed) li:first-child {\n    padding-top: 0; }\n  ul.actions:not(.fixed) li input[type=\"submit\"],\n  ul.actions:not(.fixed) li input[type=\"reset\"],\n  ul.actions:not(.fixed) li input[type=\"button\"],\n  ul.actions:not(.fixed) li button,\n  ul.actions:not(.fixed) li .button {\n    width: 100%; }\n  ul.actions:not(.fixed) li input[type=\"submit\"].icon:before,\n  ul.actions:not(.fixed) li input[type=\"reset\"].icon:before,\n  ul.actions:not(.fixed) li input[type=\"button\"].icon:before,\n  ul.actions:not(.fixed) li button.icon:before,\n  ul.actions:not(.fixed) li .button.icon:before {\n    margin-left: -0.5em; } }/* Icons */ul.icons {\n  cursor: default;\n  list-style: none;\n  padding-left: 0; }ul.icons li {\n  display: inline-block;\n  padding: 0 1em 0 0; }ul.icons li:last-child {\n  padding-right: 0; }ul.icons li > * {\n  text-decoration: none;\n  border: 0; }ul.icons li > *:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important; }ul.icons li > * .label {\n  display: none; }/* Posts */ul.posts {\n  list-style: none;\n  padding: 0; }ul.posts li {\n  border-top: dotted 1px rgba(160, 160, 160, 0.3);\n  margin: 1.5em 0 0 0;\n  padding: 1.5em 0 0 0; }ul.posts li:first-child {\n  border-top: 0;\n  margin-top: 0;\n  padding-top: 0; }ul.posts article {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-align-items: -moz-flex-start;\n  -ms-align-items: -ms-flex-start;\n  align-items: flex-start;\n  -moz-flex-direction: row-reverse;\n  flex-direction: row-reverse; }ul.posts article .image {\n  display: block;\n  margin-right: 1.5em;\n  min-width: 4em;\n  width: 4em; }ul.posts article .image img {\n  width: 100%; }ul.posts article header {\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  flex-grow: 1;\n  -ms-flex: 1; }ul.posts article header h3 {\n  font-size: 0.7em;\n  margin-top: 0.125em; }ul.posts article header .published {\n  display: block;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.6em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  margin: -0.625em 0 1.7em 0;\n  text-transform: uppercase; }ul.posts article header > :last-child {\n  margin-bottom: 0; }/* Mini Post */.mini-post {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n  background: #ffffff;\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  margin: 0 0 2em 0; }.mini-post .image {\n  overflow: hidden;\n  width: 100%; }.mini-post .image img {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  width: 100%; }.mini-post .image:hover img {\n  -webkit-transform: scale(1.05);\n  transform: scale(1.05); }.mini-post header {\n  padding: 1.25em 4.25em 0.1em 1.25em;\n  min-height: 4em;\n  position: relative;\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  flex-grow: 1; }.mini-post header h3 {\n  font-size: 0.7em; }.mini-post header .published {\n  display: block;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.6em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  margin: -0.625em 0 1.7em 0;\n  text-transform: uppercase; }.mini-post header .author {\n  position: absolute;\n  right: 2em;\n  top: 2em; }.mini-posts {\n  margin: 0 0 2em 0; }@media screen and (max-width: 1280px) {\n  .mini-posts {\n    display: -moz-flex;\n    display: -ms-flex;\n    display: flex;\n    flex-wrap: wrap;\n    width: calc(100% + 2em); }\n  .mini-posts > * {\n    margin: 2em 2em 0 0;\n    width: calc(50% - 2em); }\n  .mini-posts > :nth-child(-n + 2) {\n    margin-top: 0; } }@media screen and (max-width: 480px) {\n  .mini-posts {\n    display: block;\n    width: 100%; }\n  .mini-posts > * {\n    margin: 0 0 2em 0;\n    width: 100%; } }/* Post */.post {\n  padding: 3em 3em 1.3em 3em;\n  background: #ffffff;\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  margin: 0 0 0 0;\n  position: relative; }.post > header {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  border-bottom: solid 1px rgba(160, 160, 160, 0.3);\n  left: -3em;\n  margin: -3em 0 1.3em 0;\n  position: relative;\n  width: calc(100% + 6em); }.post > header .title {\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  flex-grow: 1;\n  -ms-flex: 1;\n  padding: 0.8em 3em 1.3em 3em; }.post > header .title h2 {\n  font-weight: 900;\n  font-size: 1.5em; }.post > header .title > :last-child {\n  margin-bottom: 0; }.post > header .meta {\n  padding: 1.3em 3em 1.3em 3em;\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\n  min-width: 17em;\n  text-align: right;\n  width: 17em; }.post > header .meta > * {\n  margin: 0 0 1em 0; }.post > header .meta > :last-child {\n  margin-bottom: 0; }.post > header .meta .published {\n  color: #3c3b3b;\n  display: block;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.7em;\n  font-weight: 800;\n  letter-spacing: 0.25em;\n  margin-top: 0.4em;\n  text-transform: uppercase;\n  white-space: nowrap; }.post > a.image.featured {\n  overflow: hidden; }.post > a.image.featured img {\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out; }.post > a.image.featured:hover img {\n  -webkit-transform: scale(1.05);\n  transform: scale(1.05); }.post > footer {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center; }.post > footer .actions {\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  flex-grow: 1; }.post > footer .stats {\n  cursor: default;\n  list-style: none;\n  padding: 0; }.post > footer .stats li {\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\n  display: inline-block;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.6em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  line-height: 1;\n  margin: 0 0 0 2em;\n  padding: 0 0 0 2em;\n  text-transform: uppercase; }.post > footer .stats li:first-child {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0; }.post > footer .stats li .icon {\n  border-bottom: 0; }.post > footer .stats li .icon:before {\n  color: rgba(160, 160, 160, 0.3);\n  margin-right: 0.75em; }@media screen and (max-width: 980px) {\n  .post {\n    border-left: 0;\n    border-right: 0;\n    left: -3em;\n    width: calc(100% + (3em * 2)); }\n  .post > header {\n    -moz-flex-direction: column;\n    flex-direction: column;\n    padding: 3.75em 3em 1.25em 3em;\n    border-left: 0; }\n  .post > header .title {\n    -ms-flex: 0 1 auto;\n    margin: 0 0 2em 0;\n    padding: 0;\n    text-align: center; }\n  .post > header .meta {\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    display: -moz-flex;\n    display: -ms-flex;\n    display: flex;\n    -moz-justify-content: center;\n    -ms-justify-content: center;\n    justify-content: center;\n    border-left: 0;\n    margin: 0 0 2em 0;\n    padding-top: 0;\n    padding: 0;\n    text-align: left;\n    width: 100%; }\n  .post > header .meta > * {\n    border-left: solid 1px rgba(160, 160, 160, 0.3);\n    margin-left: 2em;\n    padding-left: 2em; }\n  .post > header .meta > :first-child {\n    border-left: 0;\n    margin-left: 0;\n    padding-left: 0; }\n  .post > header .meta .published {\n    margin-bottom: 0;\n    margin-top: 0; }\n  .post > header .meta .author {\n    -moz-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n    margin-bottom: 0; }\n  .post > header .meta .author .name {\n    margin: 0 0 0 1.5em; }\n  .post > header .meta .author img {\n    width: 3.5em; } }@media screen and (max-width: 736px) {\n  .post {\n    padding: 1.5em 1.5em 0.1em 1.5em;\n    left: -1.5em;\n    margin: 0 0 2em 0;\n    width: calc(100% + (1.5em * 2)); }\n  .post > header {\n    padding: 3em 1.5em 0.5em 1.5em;\n    left: -1.5em;\n    margin: -1.5em 0 1.5em 0;\n    width: calc(100% + 3em); }\n  .post > header .title h2 {\n    font-size: 1.1em; } }@media screen and (max-width: 480px) {\n  .post > header .meta {\n    -moz-align-items: center;\n    -ms-align-items: center;\n    align-items: center;\n    -moz-flex-direction: column;\n    flex-direction: column; }\n  .post > header .meta > * {\n    border-left: 0;\n    margin: 1em 0 0 0;\n    padding-left: 0; }\n  .post > header .meta .author .name {\n    display: none; }\n  .post > .image.featured {\n    margin-left: -1.5em;\n    margin-top: calc(-1.5em - 1px);\n    width: calc(100% + 3em); }\n  .post > footer {\n    -moz-align-items: -moz-stretch;\n    -ms-align-items: -ms-stretch;\n    align-items: stretch;\n    -moz-flex-direction: column-reverse;\n    flex-direction: column-reverse; }\n  .post > footer .stats {\n    text-align: center; }\n  .post > footer .stats li {\n    margin: 0 0 0 1.25em;\n    padding: 0 0 0 1.25em; } }/* Section/Article */section.special, article.special {\n  text-align: center; }header p {\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.7em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  line-height: 2.5;\n  margin-top: -1em;\n  text-transform: uppercase; }/* Table */.table-wrapper {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto; }table {\n  margin: 0 0 2em 0;\n  width: 100%; }table tbody tr {\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  border-left: 0;\n  border-right: 0; }table tbody tr:nth-child(2n + 1) {\n  background-color: rgba(160, 160, 160, 0.075); }table td {\n  padding: 0.75em 0.75em; }table th {\n  color: #3c3b3b;\n  font-size: 0.9em;\n  font-weight: 700;\n  padding: 0 0.75em 0.75em 0.75em;\n  text-align: left; }table thead {\n  border-bottom: solid 2px rgba(160, 160, 160, 0.3); }table tfoot {\n  border-top: solid 2px rgba(160, 160, 160, 0.3); }table.alt {\n  border-collapse: separate; }table.alt tbody tr td {\n  border: solid 1px rgba(160, 160, 160, 0.3);\n  border-left-width: 0;\n  border-top-width: 0; }table.alt tbody tr td:first-child {\n  border-left-width: 1px; }table.alt tbody tr:first-child td {\n  border-top-width: 1px; }table.alt thead {\n  border-bottom: 0; }table.alt tfoot {\n  border-top: 0; }/* Header */body {\n  padding-top: 1.4em; }#header {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  justify-content: space-between;\n  background-color: #ffffff;\n  border-bottom: solid 1px rgba(160, 160, 160, 0.3);\n  height: 3.5em;\n  left: 0;\n  line-height: 3.5em;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10000; }#header a {\n  color: inherit;\n  text-decoration: none; }#header ul {\n  list-style: none;\n  margin: 0;\n  padding-left: 0; }#header ul li {\n  display: inline-block;\n  padding-left: 0; }#header h1 {\n  height: inherit;\n  line-height: inherit;\n  padding: 0 0 0 1.5em;\n  white-space: nowrap; }#header h1 a {\n  font-size: 0.7em; }#header .links {\n  -moz-flex: 1;\n  flex: 1;\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\n  height: inherit;\n  line-height: inherit;\n  margin-left: 1.5em;\n  overflow: hidden;\n  padding-left: 1.5em; }#header .links ul li {\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\n  line-height: 1;\n  margin-left: 1em;\n  padding-left: 1em; }#header .links ul li:first-child {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0; }#header .links ul li a {\n  border-bottom: 0;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.7em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  text-transform: uppercase; }#header .main {\n  height: inherit;\n  line-height: inherit;\n  text-align: right; }#header .main ul {\n  height: inherit;\n  line-height: inherit; }#header .main ul li {\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\n  height: inherit;\n  line-height: inherit;\n  white-space: nowrap; }#header .main ul li > * {\n  display: block;\n  float: left; }#header .main ul li > a {\n  text-decoration: none;\n  border-bottom: 0;\n  color: #aaaaaa;\n  overflow: hidden;\n  position: relative;\n  text-indent: 4em;\n  width: 4em; }#header .main ul li > a:before {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important; }#header .main ul li > a:before {\n  display: block;\n  height: inherit;\n  left: 0;\n  line-height: inherit;\n  position: absolute;\n  text-align: center;\n  text-indent: 0;\n  top: 0;\n  width: inherit; }#header form {\n  margin: 0; }#header form input {\n  display: inline-block;\n  height: 2.5em;\n  position: relative;\n  top: -2px;\n  vertical-align: middle; }#header #search {\n  transition: all 0.5s ease;\n  max-width: 0;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  white-space: nowrap; }#header #search input {\n  width: 12em; }#header #search.visible {\n  max-width: 12.5em;\n  opacity: 1;\n  padding: 0 0.5em 0 0; }@media screen and (max-width: 980px) {\n  #header .links {\n    display: none; } }@media screen and (max-width: 736px) {\n  #header {\n    height: 2.75em;\n    line-height: 2.75em; }\n  #header h1 {\n    padding: 0 0 0 1em; }\n  #header .main .search {\n    display: none; } }/* Wrapper */#wrapper {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: flex;\n  -moz-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n  transition: opacity 0.5s ease;\n  margin: 0 auto;\n  max-width: 100%;\n  opacity: 1;\n  padding: 4.5em;\n  width: 90em; }body.is-menu-visible #wrapper {\n  opacity: 0.15; }@media screen and (max-width: 1680px) {\n  #wrapper {\n    padding: 3em; } }@media screen and (max-width: 1280px) {\n  #wrapper {\n    display: block; } }@media screen and (max-width: 736px) {\n  #wrapper {\n    padding: 1.5em; } }body.single #wrapper {\n  display: block; }/* Main */#main {\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  flex-grow: 1;\n  -ms-flex: 1;\n  width: 100%; }/* Sidebar */#sidebar {\n  margin-right: 3em;\n  min-width: 22em;\n  width: 22em; }#sidebar > * {\n  border-top: solid 1px rgba(160, 160, 160, 0.3);\n  margin: 3em 0 0 0;\n  padding: 3em 0 0 0; }#sidebar > :first-child {\n  border-top: 0;\n  margin-top: 0;\n  padding-top: 0; }@media screen and (max-width: 1280px) {\n  #sidebar {\n    border-top: solid 1px rgba(160, 160, 160, 0.3);\n    margin: 3em 0 0 0;\n    min-width: 0;\n    padding: 3em 0 0 0;\n    width: 100%;\n    overflow-x: hidden; } }/* Intro */#intro .logo {\n  border-bottom: 0;\n  display: inline-block;\n  margin: 0 0 1em 0;\n  overflow: hidden;\n  position: relative;\n  width: 4em; }#intro .logo:before {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' preserveAspectRatio='none' zoomAndPan='disable'%3E%3Cpolygon points='0,0 100,0 100,25 50,0 0,25' style='fill:%23f4f4f4' /%3E%3Cpolygon points='0,100 100,100 100,75 50,100 0,75' style='fill:%23f4f4f4' /%3E%3C/svg%3E\");\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  content: '';\n  display: block;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%; }#intro .logo img {\n  display: block;\n  margin-left: -0.25em;\n  width: 4.5em; }#intro header h2 {\n  font-size: 2em;\n  font-weight: 900; }#intro header p {\n  font-size: 0.8em; }@media screen and (max-width: 1280px) {\n  #intro {\n    margin: 0 0 3em 0;\n    text-align: center; }\n  #intro header h2 {\n    font-size: 2em; }\n  #intro header p {\n    font-size: 0.7em; } }@media screen and (max-width: 736px) {\n  #intro {\n    margin: 0 0 1.5em 0;\n    padding: 1.25em 0; }\n  #intro > :last-child {\n    margin-bottom: 0; }\n  #intro .logo {\n    margin: 0 0 0.5em 0; }\n  #intro header h2 {\n    font-size: 1.25em; }\n  #intro header > :last-child {\n    margin-bottom: 0; } }/* Footer */#footer .icons {\n  color: #aaaaaa; }#footer .copyright {\n  color: #aaaaaa;\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.5em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  text-transform: uppercase; }body.single #footer {\n  text-align: center; }/* Menu */#menu {\n  -webkit-transform: translateX(25em);\n  transform: translateX(25em);\n  transition: visibility 0.5s, -webkit-transform 0.5s ease;\n  transition: transform 0.5s ease, visibility 0.5s;\n  transition: transform 0.5s ease, visibility 0.5s, -webkit-transform 0.5s ease;\n  -webkit-overflow-scrolling: touch;\n  background: #ffffff;\n  border-left: solid 1px rgba(160, 160, 160, 0.3);\n  box-shadow: none;\n  height: 100%;\n  max-width: 80%;\n  overflow-y: auto;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  width: 25em;\n  z-index: 10002; }#menu > * {\n  border-top: solid 1px rgba(160, 160, 160, 0.3);\n  padding: 3em; }#menu > * > :last-child {\n  margin-bottom: 0; }#menu > :first-child {\n  border-top: 0; }#menu .links {\n  list-style: none;\n  padding: 0; }#menu .links > li {\n  border: 0;\n  border-top: dotted 1px rgba(160, 160, 160, 0.3);\n  margin: 1.5em 0 0 0;\n  padding: 1.5em 0 0 0; }#menu .links > li a {\n  display: block;\n  border-bottom: 0; }#menu .links > li a h3 {\n  transition: color 0.2s ease;\n  font-size: 0.7em; }#menu .links > li a p {\n  font-family: \"Raleway\", Helvetica, sans-serif;\n  font-size: 0.6em;\n  font-weight: 400;\n  letter-spacing: 0.25em;\n  margin-bottom: 0;\n  text-decoration: none;\n  text-transform: uppercase; }#menu .links > li a:hover h3 {\n  color: #2ebaae; }#menu .links > li:first-child {\n  border-top: 0;\n  margin-top: 0;\n  padding-top: 0; }body.is-menu-visible #menu {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  visibility: visible; }@media screen and (max-width: 736px) {\n  #menu > * {\n    padding: 1.5em; } }.tripscomp {\n  margin-top: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcHMvdHJpcGxpc3QvQzpcXFVzZXJzXFzQsNC00LzRltC9XFxEZXNrdG9wXFxnaXRodWJcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcdHJpcHNcXHRyaXBsaXN0XFx0cmlwbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvZm9udC1hd2Vzb21lLTQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUdBQVksQUNEWjs7O0dBR0csV0FBVywwQkFBMEIsMkNBQW9ELGdVQUE2VyxtQkFBbUIsaUJBQWlCLENBQUMsSUFBSSxxQkFBcUIsNkNBQTZDLGtCQUFrQixvQkFBb0IsbUNBQW1DLGlDQUFpQyxDQUFDLE9BQU8sdUJBQXVCLGtCQUFrQixtQkFBbUIsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLG1CQUFtQixpQkFBaUIsQ0FBQyxPQUFPLGVBQWUseUJBQXlCLG9CQUFvQixDQUFDLFVBQVUsaUJBQWlCLENBQUMsT0FBTyxrQkFBa0IsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCLENBQUMsYUFBYSxrQkFBa0IsQ0FBQyxXQUFXLHlCQUF5Qix3QkFBd0Isa0JBQWtCLENBQUMsY0FBYyxVQUFVLENBQUMsZUFBZSxXQUFXLENBQUMsaUJBQWlCLGlCQUFpQixDQUFDLGtCQUFrQixnQkFBZ0IsQ0FBQyxZQUFZLFdBQVcsQ0FBQyxXQUFXLFVBQVUsQ0FBQyxjQUFjLGlCQUFpQixDQUFDLGVBQWUsZ0JBQWdCLENBQUMsU0FBUyw2Q0FBNkMsb0NBQW9DLENBQUMsVUFBVSwrQ0FBK0Msc0NBQXNDLENBQUMsMkJBQTJCLEdBQUcsK0JBQStCLHNCQUFzQixDQUFDLEtBQUssaUNBQWlDLHdCQUF3QixDQUFDLENBQUMsbUJBQW1CLEdBQUcsK0JBQStCLHNCQUFzQixD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LEVBQ2hCLEFBRUE7RUFJQyw0QkFBMkI7RUFDM0IsaUJBQWdCLEVBQ2hCLEFBRUQ7RUFDQyw4Q0FBNkM7RUFDN0MsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQiwwQkFBeUIsRUFDekIsQUFFRDtFQUNDLGVBQWMsRUFDZCxBQUVGO0VBQ0MsY0FBYTtFQUNiLGNBQWE7RUFDYixlQUFjLEVBQ2QsQUFFSDtFQUVDLGlDQUFnQztFQUVoQyx5QkFBd0I7RUFDeEIsb0JBQW1CLEVBQ25CLEFBRUQ7RUFFQztJQUNDLGVBQWMsRUFDZCxFQUFBLEFBR0o7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC90cmlwcy90cmlwbGlzdC90cmlwbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnQtYXdlc29tZS00LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybzo0MDAsNzAwfFJhbGV3YXk6NDAwLDgwMCw5MDBcIik7XHJcblxyXG4vKnNcclxuXHRGdXR1cmUgSW1wZXJmZWN0IGJ5IEhUTUw1IFVQXHJcblx0aHRtbDV1cC5uZXQgfCBAYWpsa25cclxuXHRGcmVlIGZvciBwZXJzb25hbCBhbmQgY29tbWVyY2lhbCB1c2UgdW5kZXIgdGhlIENDQSAzLjAgbGljZW5zZSAoaHRtbDV1cC5uZXQvbGljZW5zZSlcclxuKi9cclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsXHJcbmlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSxcclxucHJlLCBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsXHJcbmNvZGUsIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhciwgYixcclxudSwgaSwgY2VudGVyLCBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLCBmaWVsZHNldCxcclxuZm9ybSwgbGFiZWwsIGxlZ2VuZCwgdGFibGUsIGNhcHRpb24sIHRib2R5LFxyXG50Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIGFydGljbGUsIGFzaWRlLFxyXG5jYW52YXMsIGRldGFpbHMsIGVtYmVkLCBmaWd1cmUsIGZpZ2NhcHRpb24sXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LFxyXG5zZWN0aW9uLCBzdW1tYXJ5LCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi50b0JlQ2VudGVyZWRcclxue1xyXG5cdHdpZHRoOiA1OSU7XHJcblx0bWFyZ2luLXRvcDogM2VtO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZSwgcSB7XHJcblx0cXVvdGVzOiBub25lO1xyXG59XHJcblxyXG5cdGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdGNvbnRlbnQ6IG5vbmU7XHJcblx0fVxyXG5cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxufVxyXG5cclxubWFyayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuXHRib3JkZXI6IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyogQmFzaWMgKi9cclxuXHJcblx0QC1tcy12aWV3cG9ydCB7XHJcblx0XHR3aWR0aDogZGV2aWNlLXdpZHRoO1xyXG5cdH1cclxuXHJcblx0Ym9keSB7XHJcblx0XHQtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG5cdFx0aHRtbCwgYm9keSB7XHJcblx0XHRcdG1pbi13aWR0aDogMzIwcHg7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0aHRtbCB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0KiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG5cdFx0Ym94LXNpemluZzogaW5oZXJpdDtcclxuXHR9XHJcblxyXG5cdGJvZHkge1xyXG5cdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHR9XHJcblxyXG5cdFx0Ym9keS5pcy1wcmVsb2FkICosIGJvZHkuaXMtcHJlbG9hZCAqOmJlZm9yZSwgYm9keS5pcy1wcmVsb2FkICo6YWZ0ZXIge1xyXG5cdFx0XHQtbW96LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtd2Via2l0LWFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbXMtYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHQtbW96LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdC1tcy10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcbi8qIFR5cGUgKi9cclxuXHJcblx0Ym9keSwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xyXG5cdFx0Y29sb3I6ICM2NDY0NjQ7XHJcblx0XHRmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB0O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG5cdH1cclxuXHJcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHRcdGJvZHksIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG5cdFx0XHRib2R5LCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcblxyXG5cdFx0XHRib2R5LCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0XHRib2R5LCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG5cdFx0XHRib2R5LCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRhIHtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlO1xyXG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjY1KTtcclxuXHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcblx0XHRhOmJlZm9yZSB7XHJcblx0XHRcdC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdFx0LW1zLXRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdFx0dHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGE6aG92ZXIge1xyXG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Y29sb3I6ICMyZWJhYWUgIWltcG9ydGFudDtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0YTpob3ZlcjpiZWZvcmUge1xyXG5cdFx0XHRcdGNvbG9yOiAjMmViYWFlICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0c3Ryb25nLCBiIHtcclxuXHRcdGNvbG9yOiAjM2MzYjNiO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR9XHJcblxyXG5cdGVtLCBpIHtcclxuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHR9XHJcblxyXG5cdHAge1xyXG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0fVxyXG5cclxuXHRoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuXHRcdGNvbG9yOiAjM2MzYjNiO1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcblx0XHRoMSBhLCBoMiBhLCBoMyBhLCBoNCBhLCBoNSBhLCBoNiBhIHtcclxuXHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMS4xZW07XHJcblx0fVxyXG5cclxuXHRoMyB7XHJcblx0XHRmb250LXNpemU6IDAuOWVtO1xyXG5cdH1cclxuXHJcblx0aDQge1xyXG5cdFx0Zm9udC1zaXplOiAwLjdlbTtcclxuXHR9XHJcblxyXG5cdGg1IHtcclxuXHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0fVxyXG5cclxuXHRoNiB7XHJcblx0XHRmb250LXNpemU6IDAuN2VtO1xyXG5cdH1cclxuXHJcblx0c3ViIHtcclxuXHRcdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IDAuNWVtO1xyXG5cdH1cclxuXHJcblx0c3VwIHtcclxuXHRcdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IC0wLjVlbTtcclxuXHR9XHJcblxyXG5cdGJsb2NrcXVvdGUge1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDRweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcclxuXHRcdHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMmVtO1xyXG5cdH1cclxuXHJcblx0Y29kZSB7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMDc1KTtcclxuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuXHRcdGZvbnQtc2l6ZTogMC45ZW07XHJcblx0XHRtYXJnaW46IDAgMC4yNWVtO1xyXG5cdFx0cGFkZGluZzogMC4yNWVtIDAuNjVlbTtcclxuXHR9XHJcblxyXG5cdHByZSB7XHJcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblx0XHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XHJcblx0XHRmb250LXNpemU6IDAuOWVtO1xyXG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0fVxyXG5cclxuXHRcdHByZSBjb2RlIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxLjc1ZW07XHJcblx0XHRcdHBhZGRpbmc6IDFlbSAxLjVlbTtcclxuXHRcdFx0b3ZlcmZsb3cteDogYXV0bztcclxuXHRcdH1cclxuXHJcblx0aHIge1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdG1hcmdpbjogMmVtIDA7XHJcblx0fVxyXG5cclxuXHRcdGhyLm1ham9yIHtcclxuXHRcdFx0bWFyZ2luOiAzZW0gMDtcclxuXHRcdH1cclxuXHJcblx0LmFsaWduLWxlZnQge1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR9XHJcblxyXG5cdC5hbGlnbi1jZW50ZXIge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmFsaWduLXJpZ2h0IHtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdH1cclxuXHJcbi8qIFJvdyAqL1xyXG5cclxuXHQucm93IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0fVxyXG5cclxuXHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93Lmd0ci11bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LmFsbi1sZWZ0IHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cuYWxuLWNlbnRlciB7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cuYWxuLXJpZ2h0IHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LmFsbi10b3Age1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93LmFsbi1taWRkbGUge1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cuYWxuLWJvdHRvbSB7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLmltcCB7XHJcblx0XHRcdG9yZGVyOiAtMTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLmNvbC0xIHtcclxuXHRcdFx0d2lkdGg6IDguMzMzMzMzMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5vZmYtMSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cgPiAuY29sLTIge1xyXG5cdFx0XHR3aWR0aDogMTYuNjY2NjY2NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5vZmYtMiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLmNvbC0zIHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLm9mZi0zIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1JTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLmNvbC00IHtcclxuXHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cgPiAub2ZmLTQge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5jb2wtNSB7XHJcblx0XHRcdHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLm9mZi01IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cgPiAuY29sLTYge1xyXG5cdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cgPiAub2ZmLTYge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNTAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cgPiAuY29sLTcge1xyXG5cdFx0XHR3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5vZmYtNyB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLmNvbC04IHtcclxuXHRcdFx0d2lkdGg6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cgPiAub2ZmLTgge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5jb2wtOSB7XHJcblx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5vZmYtOSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA3NSU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5jb2wtMTAge1xyXG5cdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5vZmYtMTAge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5jb2wtMTEge1xyXG5cdFx0XHR3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5vZmYtMTEge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHR9XHJcblxyXG5cdFx0LnJvdyA+IC5jb2wtMTIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQucm93ID4gLm9mZi0xMiB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5yb3cuZ3RyLTAge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMGVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0LnJvdy5ndHItMCA+ICoge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDBlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMGVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdC5yb3cuZ3RyLTI1IHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjI1ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0XHQucm93Lmd0ci0yNSA+ICoge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuMjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdC5yb3cuZ3RyLTUwIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5yb3cuZ3RyLTUwID4gKiB7XHJcblx0XHRcdFx0cGFkZGluZzogMCAwIDAgMC41ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMC41ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0LnJvdyB7XHJcblx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0LnJvdyA+ICoge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdy5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogLTFlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHQucm93Lmd0ci0xNTAge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTEuNWVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0LnJvdy5ndHItMTUwID4gKiB7XHJcblx0XHRcdFx0cGFkZGluZzogMCAwIDAgMS41ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogLTEuNWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHQucm93Lmd0ci0yMDAge1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTJlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5yb3cuZ3RyLTIwMCA+ICoge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDJlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAtMmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XHJcblxyXG5cdFx0XHQucm93IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci11bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1sZWZ0IHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWNlbnRlciB7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLXJpZ2h0IHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi10b3Age1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1taWRkbGUge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWJvdHRvbSB7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmltcC14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0b3JkZXI6IC0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMS14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xLXhsYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTIteGxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTIteGxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTMteGxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0zLXhsYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNC14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNC14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNS14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNS14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNi14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTYteGxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC03LXhsYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi03LXhsYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC04LXhsYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi04LXhsYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC05LXhsYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtOS14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEwLXhsYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xMC14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMTEteGxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTExLXhsYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0xMi14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xMi14bGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0wIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMGVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0wID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDBlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItMjUge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC4yNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yNSA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjI1ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMC4yNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC4yNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTUwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci01MCA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93ID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTE1MCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xLjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjVlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0yMDAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yMDAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG5cclxuXHRcdFx0LnJvdyB7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gKiB7XHJcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5hbG4tbGVmdCB7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1jZW50ZXIge1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1yaWdodCB7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5hbG4tdG9wIHtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5hbG4tbWlkZGxlIHtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1ib3R0b20ge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5pbXAtbGFyZ2Uge1xyXG5cdFx0XHRcdFx0b3JkZXI6IC0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMS1sYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEtbGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0yLWxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTItbGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMy1sYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMjUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMy1sYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNC1sYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi00LWxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTUtbGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNS1sYXJnZSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC02LWxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi02LWxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC03LWxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTctbGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtOC1sYXJnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi04LWxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTktbGFyZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTktbGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEwLWxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEwLWxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTExLWxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTExLWxhcmdlIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEyLWxhcmdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMTItbGFyZ2Uge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0wIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMGVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0wID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDBlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItMjUge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC4yNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yNSA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjI1ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMC4yNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC4yNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTUwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci01MCA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93ID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTE1MCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xLjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjVlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0yMDAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yMDAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcblxyXG5cdFx0XHQucm93IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci11bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1sZWZ0IHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWNlbnRlciB7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLXJpZ2h0IHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi10b3Age1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1taWRkbGUge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWJvdHRvbSB7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmltcC1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0b3JkZXI6IC0xO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMS1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xLW1lZGl1bSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTItbWVkaXVtIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTItbWVkaXVtIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTMtbWVkaXVtIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0zLW1lZGl1bSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMjUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNC1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNC1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNS1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNS1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNi1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTYtbWVkaXVtIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC03LW1lZGl1bSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi03LW1lZGl1bSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC04LW1lZGl1bSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi04LW1lZGl1bSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC05LW1lZGl1bSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtOS1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDc1JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEwLW1lZGl1bSB7XHJcblx0XHRcdFx0XHR3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xMC1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMTEtbWVkaXVtIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTExLW1lZGl1bSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0xMi1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xMi1tZWRpdW0ge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0wIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMGVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0wID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDBlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItMjUge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC4yNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yNSA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjI1ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMC4yNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMjUuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC4yNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTUwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci01MCA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci01MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDAuNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93ID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTE1MCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xLjVlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0xLjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTE1MC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxLjVlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0yMDAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yMDAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0yZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yMDAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0XHQucm93IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci11bmlmb3JtID4gKiA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1sZWZ0IHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWNlbnRlciB7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLXJpZ2h0IHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi10b3Age1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93LmFsbi1taWRkbGUge1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWJvdHRvbSB7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmltcC1zbWFsbCB7XHJcblx0XHRcdFx0XHRvcmRlcjogLTE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0xLXNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMS1zbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTItc21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMi1zbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0zLXNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyNSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0zLXNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC00LXNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTQtc21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtNS1zbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi01LXNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTYtc21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTYtc21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTctc21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNy1zbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC04LXNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTgtc21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtOS1zbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogNzUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtOS1zbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNzUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMTAtc21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMTAtc21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMTEtc21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMTEtc21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMTItc21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi0xMi1zbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDBlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0yNSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTI1ID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuMjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjI1ZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItNTAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC41ZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItMTUwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTEuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0xNTAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMS41ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTIwMCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0yZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMCA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAyZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcblx0XHRcdC5yb3cge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+ICoge1xyXG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0gPiAqID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLWxlZnQge1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5hbG4tY2VudGVyIHtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5hbG4tcmlnaHQge1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLXRvcCB7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuYWxuLW1pZGRsZSB7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5hbG4tYm90dG9tIHtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuaW1wLXhzbWFsbCB7XHJcblx0XHRcdFx0XHRvcmRlcjogLTE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0xLXhzbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEteHNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMi14c21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMi14c21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMy14c21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTMteHNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyNSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC00LXhzbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi00LXhzbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC01LXhzbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi01LXhzbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC02LXhzbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtNi14c21hbGwge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDUwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTcteHNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTcteHNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTgteHNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTgteHNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTkteHNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA3NSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLm9mZi05LXhzbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNzUlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5jb2wtMTAteHNtYWxsIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEwLXhzbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93ID4gLmNvbC0xMS14c21hbGwge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDkxLjY2NjY2NjY2NjclO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyA+IC5vZmYtMTEteHNtYWxsIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NjY3JTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAuY29sLTEyLXhzbWFsbCB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cgPiAub2ZmLTEyLXhzbWFsbCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTAuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0wLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDBlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucm93Lmd0ci0yNSB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTI1ID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuMjVlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC0wLjI1ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucm93Lmd0ci0yNS5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwLjI1ZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItNTAge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwID4gKiB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTUwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTAuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItNTAuZ3RyLXVuaWZvcm0gPiAqIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMC41ZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdyB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0xZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLXVuaWZvcm0ge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAtMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnJvdy5ndHItMTUwIHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTEuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucm93Lmd0ci0xNTAgPiAqIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMS41ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTEuNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnJvdy5ndHItMTUwLmd0ci11bmlmb3JtID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEuNWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5yb3cuZ3RyLTIwMCB7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0yZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5yb3cuZ3RyLTIwMCA+ICoge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAgMCAyZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnJvdy5ndHItMjAwLmd0ci11bmlmb3JtIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLTJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yb3cuZ3RyLTIwMC5ndHItdW5pZm9ybSA+ICoge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG4vKiBBdXRob3IgKi9cclxuXHJcblx0LmF1dGhvciB7XHJcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHQtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQtbW96LWp1c3RpZnktY29udGVudDogLW1vei1mbGV4LWVuZDtcclxuXHRcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAtd2Via2l0LWZsZXgtZW5kO1xyXG5cdFx0LW1zLWp1c3RpZnktY29udGVudDogLW1zLWZsZXgtZW5kO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHRmb250LWZhbWlseTogXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRcdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcclxuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdH1cclxuXHJcblx0XHQuYXV0aG9yIC5uYW1lIHtcclxuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdFx0LW1zLXRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogZG90dGVkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNjUpO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwIDEuNWVtIDAgMDtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5hdXRob3IgaW1nIHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdHdpZHRoOiA0ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LmF1dGhvcjpob3ZlciAubmFtZSB7XHJcblx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0fVxyXG5cclxuLyogQmx1cmIgKi9cclxuXHJcblx0LmJsdXJiIGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0XHRtYXJnaW46IDAgMCAxLjVlbSAwO1xyXG5cdH1cclxuXHJcblx0LmJsdXJiIGgzIHtcclxuXHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0fVxyXG5cclxuXHQuYmx1cmIgcCB7XHJcblx0XHRmb250LXNpemU6IDAuOWVtO1xyXG5cdH1cclxuXHJcbi8qIEJveCAqL1xyXG5cclxuXHQuYm94IHtcclxuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDJlbTtcclxuXHRcdHBhZGRpbmc6IDEuNWVtO1xyXG5cdH1cclxuXHJcblx0XHQuYm94ID4gOmxhc3QtY2hpbGQsXHJcblx0XHQuYm94ID4gOmxhc3QtY2hpbGQgPiA6bGFzdC1jaGlsZCxcclxuXHRcdC5ib3ggPiA6bGFzdC1jaGlsZCA+IDpsYXN0LWNoaWxkID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5ib3guYWx0IHtcclxuXHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0fVxyXG5cclxuLyogQnV0dG9uICovXHJcblxyXG5cdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcblx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5cdGlucHV0W3R5cGU9XCJidXR0b25cIl0sXHJcblx0YnV0dG9uLFxyXG5cdC5idXR0b24ge1xyXG5cdFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRhcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XHJcblx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdGNvbG9yOiAjM2MzYjNiICFpbXBvcnRhbnQ7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRmb250LWZhbWlseTogXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRcdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdFx0aGVpZ2h0OiA0LjgxMjVlbTtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XHJcblx0XHRsaW5lLWhlaWdodDogNC44MTI1ZW07XHJcblx0XHRwYWRkaW5nOiAwIDIuNWVtO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0fVxyXG5cclxuXHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl06aG92ZXIsXHJcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxyXG5cdFx0YnV0dG9uOmhvdmVyLFxyXG5cdFx0LmJ1dHRvbjpob3ZlciB7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMmViYWFlO1xyXG5cdFx0XHRjb2xvcjogIzJlYmFhZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcjphY3RpdmUsXHJcblx0XHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXTpob3ZlcjphY3RpdmUsXHJcblx0XHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl06aG92ZXI6YWN0aXZlLFxyXG5cdFx0XHRidXR0b246aG92ZXI6YWN0aXZlLFxyXG5cdFx0XHQuYnV0dG9uOmhvdmVyOmFjdGl2ZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgMTg2LCAxNzQsIDAuMDUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpiZWZvcmUsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWZ0ZXIsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl06YmVmb3JlLFxyXG5cdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdOmFmdGVyLFxyXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXTpiZWZvcmUsXHJcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmFmdGVyLFxyXG5cdFx0YnV0dG9uOmJlZm9yZSxcclxuXHRcdGJ1dHRvbjphZnRlcixcclxuXHRcdC5idXR0b246YmVmb3JlLFxyXG5cdFx0LmJ1dHRvbjphZnRlciB7XHJcblx0XHRcdGNvbG9yOiAjYWFhYWFhO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpiZWZvcmUsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl06YmVmb3JlLFxyXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXTpiZWZvcmUsXHJcblx0XHRidXR0b246YmVmb3JlLFxyXG5cdFx0LmJ1dHRvbjpiZWZvcmUge1xyXG5cdFx0XHRsZWZ0OiAtMWVtO1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAgMCAwLjc1ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXTphZnRlcixcclxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXTphZnRlcixcclxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl06YWZ0ZXIsXHJcblx0XHRidXR0b246YWZ0ZXIsXHJcblx0XHQuYnV0dG9uOmFmdGVyIHtcclxuXHRcdFx0bGVmdDogMWVtO1xyXG5cdFx0XHRwYWRkaW5nOiAwIDAuNzVlbSAwIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5maXQsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uZml0LFxyXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5maXQsXHJcblx0XHRidXR0b24uZml0LFxyXG5cdFx0LmJ1dHRvbi5maXQge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPVwic3VibWl0XCJdLmxhcmdlLFxyXG5cdFx0aW5wdXRbdHlwZT1cInJlc2V0XCJdLmxhcmdlLFxyXG5cdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXS5sYXJnZSxcclxuXHRcdGJ1dHRvbi5sYXJnZSxcclxuXHRcdC5idXR0b24ubGFyZ2Uge1xyXG5cdFx0XHRmb250LXNpemU6IDAuN2VtO1xyXG5cdFx0XHRwYWRkaW5nOiAwIDNlbTtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uc21hbGwsXHJcblx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uc21hbGwsXHJcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLnNtYWxsLFxyXG5cdFx0YnV0dG9uLnNtYWxsLFxyXG5cdFx0LmJ1dHRvbi5zbWFsbCB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMC41ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5kaXNhYmxlZCwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZCxcclxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXS5kaXNhYmxlZCxcclxuXHRcdGlucHV0W3R5cGU9XCJyZXNldFwiXTpkaXNhYmxlZCxcclxuXHRcdGlucHV0W3R5cGU9XCJidXR0b25cIl0uZGlzYWJsZWQsXHJcblx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmRpc2FibGVkLFxyXG5cdFx0YnV0dG9uLmRpc2FibGVkLFxyXG5cdFx0YnV0dG9uOmRpc2FibGVkLFxyXG5cdFx0LmJ1dHRvbi5kaXNhYmxlZCxcclxuXHRcdC5idXR0b246ZGlzYWJsZWQge1xyXG5cdFx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRcdFx0Y29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0aW5wdXRbdHlwZT1cInN1Ym1pdFwiXS5kaXNhYmxlZDpiZWZvcmUsIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06ZGlzYWJsZWQ6YmVmb3JlLFxyXG5cdFx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl0uZGlzYWJsZWQ6YmVmb3JlLFxyXG5cdFx0XHRpbnB1dFt0eXBlPVwicmVzZXRcIl06ZGlzYWJsZWQ6YmVmb3JlLFxyXG5cdFx0XHRpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmRpc2FibGVkOmJlZm9yZSxcclxuXHRcdFx0aW5wdXRbdHlwZT1cImJ1dHRvblwiXTpkaXNhYmxlZDpiZWZvcmUsXHJcblx0XHRcdGJ1dHRvbi5kaXNhYmxlZDpiZWZvcmUsXHJcblx0XHRcdGJ1dHRvbjpkaXNhYmxlZDpiZWZvcmUsXHJcblx0XHRcdC5idXR0b24uZGlzYWJsZWQ6YmVmb3JlLFxyXG5cdFx0XHQuYnV0dG9uOmRpc2FibGVkOmJlZm9yZSB7XHJcblx0XHRcdFx0Y29sb3I6IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG4vKiBGb3JtICovXHJcblxyXG5cdGZvcm0ge1xyXG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0fVxyXG5cclxuXHRcdGZvcm0uc2VhcmNoIHtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR9XHJcblxyXG5cdFx0XHRmb3JtLnNlYXJjaDpiZWZvcmUge1xyXG5cdFx0XHRcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcblx0XHRcdFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcm0uc2VhcmNoOmJlZm9yZSB7XHJcblx0XHRcdFx0Y29sb3I6ICNhYWFhYWE7XHJcblx0XHRcdFx0Y29udGVudDogJ1xcZjAwMic7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0aGVpZ2h0OiAyLjc1ZW07XHJcblx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMi43NWVtO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdHdpZHRoOiAyLjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9ybS5zZWFyY2ggPiBpbnB1dDpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAyLjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRsYWJlbCB7XHJcblx0XHRjb2xvcjogIzNjM2IzYjtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOiAwLjllbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcclxuXHR9XHJcblxyXG5cdGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5cdGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuXHRpbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcblx0aW5wdXRbdHlwZT1cInRlbFwiXSxcclxuXHRzZWxlY3QsXHJcblx0dGV4dGFyZWEge1xyXG5cdFx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0LW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0XHRhcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjA3NSk7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG91dGxpbmU6IDA7XHJcblx0XHRwYWRkaW5nOiAwIDFlbTtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPVwidGV4dFwiXTppbnZhbGlkLFxyXG5cdFx0aW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmludmFsaWQsXHJcblx0XHRpbnB1dFt0eXBlPVwiZW1haWxcIl06aW52YWxpZCxcclxuXHRcdGlucHV0W3R5cGU9XCJ0ZWxcIl06aW52YWxpZCxcclxuXHRcdHNlbGVjdDppbnZhbGlkLFxyXG5cdFx0dGV4dGFyZWE6aW52YWxpZCB7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcblx0XHRpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMsXHJcblx0XHRpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXHJcblx0XHRpbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzLFxyXG5cdFx0c2VsZWN0OmZvY3VzLFxyXG5cdFx0dGV4dGFyZWE6Zm9jdXMge1xyXG5cdFx0XHRib3JkZXItY29sb3I6ICMyZWJhYWU7XHJcblx0XHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMmViYWFlO1xyXG5cdFx0fVxyXG5cclxuXHQuc2VsZWN0LXdyYXBwZXIge1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHRcdC5zZWxlY3Qtd3JhcHBlcjpiZWZvcmUge1xyXG5cdFx0XHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cdFx0XHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LnNlbGVjdC13cmFwcGVyOmJlZm9yZSB7XHJcblx0XHRcdGNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdGNvbnRlbnQ6ICdcXGYwNzgnO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0aGVpZ2h0OiAyLjc1ZW07XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyLjc1ZW07XHJcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0d2lkdGg6IDIuNzVlbTtcclxuXHRcdH1cclxuXHJcblx0XHQuc2VsZWN0LXdyYXBwZXIgc2VsZWN0OjotbXMtZXhwYW5kIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHJcblx0c2VsZWN0IHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQwJyBoZWlnaHQ9JzQwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyB2aWV3Qm94PScwIDAgNDAgNDAnJTNFJTNDcGF0aCBkPSdNOS40LDEyLjNsMTAuNCwxMC40bDEwLjQtMTAuNGMwLjItMC4yLDAuNS0wLjQsMC45LTAuNGMwLjMsMCwwLjYsMC4xLDAuOSwwLjRsMy4zLDMuM2MwLjIsMC4yLDAuNCwwLjUsMC40LDAuOSBjMCwwLjQtMC4xLDAuNi0wLjQsMC45TDIwLjcsMzEuOWMtMC4yLDAuMi0wLjUsMC40LTAuOSwwLjRjLTAuMywwLTAuNi0wLjEtMC45LTAuNEw0LjMsMTcuM2MtMC4yLTAuMi0wLjQtMC41LTAuNC0wLjkgYzAtMC40LDAuMS0wLjYsMC40LTAuOWwzLjMtMy4zYzAuMi0wLjIsMC41LTAuNCwwLjktMC40UzkuMSwxMi4xLDkuNCwxMi4zeicgZmlsbD0ncmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpJyAvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogMS4yNXJlbTtcclxuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxcmVtKSBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDIuNzVlbTtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIuNzVlbTtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdH1cclxuXHJcblx0XHRzZWxlY3Qgb3B0aW9uIHtcclxuXHRcdFx0Y29sb3I6ICMzYzNiM2I7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZWN0OmZvY3VzOjotbXMtdmFsdWUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdH1cclxuXHJcblx0XHRzZWxlY3Q6Oi1tcy1leHBhbmQge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuXHRpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcblx0aW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5cdHNlbGVjdCB7XHJcblx0XHRoZWlnaHQ6IDIuNzVlbTtcclxuXHR9XHJcblxyXG5cdHRleHRhcmVhIHtcclxuXHRcdHBhZGRpbmc6IDAuNzVlbSAxZW07XHJcblx0fVxyXG5cclxuXHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcblx0aW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuXHRcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdC1tcy1hcHBlYXJhbmNlOiBub25lO1xyXG5cdFx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IC0yZW07XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0d2lkdGg6IDFlbTtcclxuXHRcdHotaW5kZXg6IC0xO1xyXG5cdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCxcclxuXHRcdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRjb2xvcjogIzY0NjQ2NDtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDIuNGVtO1xyXG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdH1cclxuXHJcblx0XHRcdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOmJlZm9yZSxcclxuXHRcdFx0aW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWw6YmVmb3JlIHtcclxuXHRcdFx0XHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cdFx0XHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuXHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUsXHJcblx0XHRcdGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsOmJlZm9yZSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjA3NSk7XHJcblx0XHRcdFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRoZWlnaHQ6IDEuNjVlbTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU4MTI1ZW07XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0d2lkdGg6IDEuNjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG5cdFx0aW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjM2MzYjNiO1xyXG5cdFx0XHRib3JkZXItY29sb3I6ICMzYzNiM2I7XHJcblx0XHRcdGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0XHRjb250ZW50OiAnXFxmMDBjJztcclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXHJcblx0XHRpbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMgKyBsYWJlbDpiZWZvcmUge1xyXG5cdFx0XHRib3JkZXItY29sb3I6ICMyZWJhYWU7XHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMmViYWFlO1xyXG5cdFx0fVxyXG5cclxuXHRpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbDpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHR9XHJcblxyXG5cdDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogI2FhYWFhYSAhaW1wb3J0YW50O1xyXG5cdFx0b3BhY2l0eTogMS4wO1xyXG5cdH1cclxuXHJcblx0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICNhYWFhYWEgIWltcG9ydGFudDtcclxuXHRcdG9wYWNpdHk6IDEuMDtcclxuXHR9XHJcblxyXG5cdDo6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogI2FhYWFhYSAhaW1wb3J0YW50O1xyXG5cdFx0b3BhY2l0eTogMS4wO1xyXG5cdH1cclxuXHJcblx0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogI2FhYWFhYSAhaW1wb3J0YW50O1xyXG5cdFx0b3BhY2l0eTogMS4wO1xyXG5cdH1cclxuXHJcbi8qIEljb24gKi9cclxuXHJcblx0Lmljb24ge1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdFx0Lmljb246YmVmb3JlIHtcclxuXHRcdFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHRcdFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuXHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5pY29uID4gLmxhYmVsIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHJcblx0XHQuaWNvbi5zdWZmaXg6YmVmb3JlIHtcclxuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0fVxyXG4vKiBMaXN0ICovXHJcblxyXG5cdG9sIHtcclxuXHRcdGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMS4yNWVtO1xyXG5cdH1cclxuXHJcblx0XHRvbCBsaSB7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMC4yNWVtO1xyXG5cdFx0fVxyXG5cclxuXHR1bCB7XHJcblx0XHRsaXN0LXN0eWxlOiBkaXNjO1xyXG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHR9XHJcblxyXG5cdFx0dWwgbGkge1xyXG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdHVsLmFsdCB7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLmFsdCBsaSB7XHJcblx0XHRcdFx0Ym9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVsLmFsdCBsaTpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAwO1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRkbCB7XHJcblx0XHRtYXJnaW46IDAgMCAyZW0gMDtcclxuXHR9XHJcblxyXG5cdFx0ZGwgZHQge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0bWFyZ2luOiAwIDAgMWVtIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGwgZGQge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMmVtO1xyXG5cdFx0fVxyXG5cclxuLyogQWN0aW9ucyAqL1xyXG5cclxuXHR1bC5hY3Rpb25zIHtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGN1cnNvcjogZGVmYXVsdDtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRtYXJnaW4tbGVmdDogLTFlbTtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHR9XHJcblxyXG5cdFx0dWwuYWN0aW9ucyBsaSB7XHJcblx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdH1cclxuXHJcblx0XHR1bC5hY3Rpb25zLnNwZWNpYWwge1xyXG5cdFx0XHQtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zLnNwZWNpYWwgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdHVsLmFjdGlvbnMuc3RhY2tlZCB7XHJcblx0XHRcdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zLnN0YWNrZWQgbGkge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEuM2VtIDAgMCAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVsLmFjdGlvbnMuc3RhY2tlZCBsaTpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0dWwuYWN0aW9ucy5maXQge1xyXG5cdFx0XHR3aWR0aDogY2FsYygxMDAlICsgMWVtKTtcclxuXHRcdH1cclxuXHJcblx0XHRcdHVsLmFjdGlvbnMuZml0IGxpIHtcclxuXHRcdFx0XHQtbW96LWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHQtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHQtbXMtZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHQtbW96LWZsZXgtc2hyaW5rOiAxO1xyXG5cdFx0XHRcdC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcblx0XHRcdFx0LW1zLWZsZXgtc2hyaW5rOiAxO1xyXG5cdFx0XHRcdGZsZXgtc2hyaW5rOiAxO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVsLmFjdGlvbnMuZml0IGxpID4gKiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zLmZpdC5zdGFja2VkIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG5cdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIHtcclxuXHRcdFx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIHtcclxuXHRcdFx0XHRcdC1tb3otZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdFx0LXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0XHQtbXMtZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdFx0LW1vei1mbGV4LXNocmluazogMTtcclxuXHRcdFx0XHRcdC13ZWJraXQtZmxleC1zaHJpbms6IDE7XHJcblx0XHRcdFx0XHQtbXMtZmxleC1zaHJpbms6IDE7XHJcblx0XHRcdFx0XHRmbGV4LXNocmluazogMTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDFlbSAwIDAgMDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpID4gKiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sXHJcblx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcclxuXHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgYnV0dG9uLFxyXG5cdFx0XHRcdFx0dWwuYWN0aW9uczpub3QoLmZpeGVkKSBsaSAuYnV0dG9uIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0uaWNvbjpiZWZvcmUsXHJcblx0XHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgaW5wdXRbdHlwZT1cInJlc2V0XCJdLmljb246YmVmb3JlLFxyXG5cdFx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIGlucHV0W3R5cGU9XCJidXR0b25cIl0uaWNvbjpiZWZvcmUsXHJcblx0XHRcdFx0XHRcdHVsLmFjdGlvbnM6bm90KC5maXhlZCkgbGkgYnV0dG9uLmljb246YmVmb3JlLFxyXG5cdFx0XHRcdFx0XHR1bC5hY3Rpb25zOm5vdCguZml4ZWQpIGxpIC5idXR0b24uaWNvbjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG4vKiBJY29ucyAqL1xyXG5cclxuXHR1bC5pY29ucyB7XHJcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdH1cclxuXHJcblx0XHR1bC5pY29ucyBsaSB7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0cGFkZGluZzogMCAxZW0gMCAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0dWwuaWNvbnMgbGk6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dWwuaWNvbnMgbGkgPiAqIHtcclxuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0Ym9yZGVyOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVsLmljb25zIGxpID4gKjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHRcdFx0XHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG5cdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR1bC5pY29ucyBsaSA+ICogLmxhYmVsIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuLyogUG9zdHMgKi9cclxuXHJcblx0dWwucG9zdHMge1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0fVxyXG5cclxuXHRcdHVsLnBvc3RzIGxpIHtcclxuXHRcdFx0Ym9yZGVyLXRvcDogZG90dGVkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdG1hcmdpbjogMS41ZW0gMCAwIDA7XHJcblx0XHRcdHBhZGRpbmc6IDEuNWVtIDAgMCAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0dWwucG9zdHMgbGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdGJvcmRlci10b3A6IDA7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdHVsLnBvc3RzIGFydGljbGUge1xyXG5cdFx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdC1tb3otYWxpZ24taXRlbXM6IC1tb3otZmxleC1zdGFydDtcclxuXHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogLXdlYmtpdC1mbGV4LXN0YXJ0O1xyXG5cdFx0XHQtbXMtYWxpZ24taXRlbXM6IC1tcy1mbGV4LXN0YXJ0O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdFx0LW1vei1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0XHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR1bC5wb3N0cyBhcnRpY2xlIC5pbWFnZSB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDRlbTtcclxuXHRcdFx0XHR3aWR0aDogNGVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVsLnBvc3RzIGFydGljbGUgLmltYWdlIGltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR1bC5wb3N0cyBhcnRpY2xlIGhlYWRlciB7XHJcblx0XHRcdFx0LW1vei1mbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0LW1zLWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHRmbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0LW1zLWZsZXg6IDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0dWwucG9zdHMgYXJ0aWNsZSBoZWFkZXIgaDMge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdlbTtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuMTI1ZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR1bC5wb3N0cyBhcnRpY2xlIGhlYWRlciAucHVibGlzaGVkIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDAuNmVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XHJcblx0XHRcdFx0XHRtYXJnaW46IC0wLjYyNWVtIDAgMS43ZW0gMDtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR1bC5wb3N0cyBhcnRpY2xlIGhlYWRlciA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuLyogTWluaSBQb3N0ICovXHJcblxyXG5cdC5taW5pLXBvc3Qge1xyXG5cdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0fVxyXG5cclxuXHRcdC5taW5pLXBvc3QgLmltYWdlIHtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQubWluaS1wb3N0IC5pbWFnZSBpbWcge1xyXG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuXHRcdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm1pbmktcG9zdCAuaW1hZ2U6aG92ZXIgaW1nIHtcclxuXHRcdFx0XHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0XHRcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHQubWluaS1wb3N0IGhlYWRlciB7XHJcblx0XHRcdHBhZGRpbmc6IDEuMjVlbSA0LjI1ZW0gMC4xZW0gMS4yNWVtIDtcclxuXHRcdFx0bWluLWhlaWdodDogNGVtO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdC1tb3otZmxleC1ncm93OiAxO1xyXG5cdFx0XHQtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0LW1zLWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0Lm1pbmktcG9zdCBoZWFkZXIgaDMge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5taW5pLXBvc3QgaGVhZGVyIC5wdWJsaXNoZWQge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xyXG5cdFx0XHRcdG1hcmdpbjogLTAuNjI1ZW0gMCAxLjdlbSAwO1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5taW5pLXBvc3QgaGVhZGVyIC5hdXRob3Ige1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRyaWdodDogMmVtO1xyXG5cdFx0XHRcdHRvcDogMmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdC5taW5pLXBvc3RzIHtcclxuXHRcdG1hcmdpbjogMCAwIDJlbSAwO1xyXG5cdH1cclxuXHJcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuXHJcblx0XHRcdC5taW5pLXBvc3RzIHtcclxuXHRcdFx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSArIDJlbSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1pbmktcG9zdHMgPiAqIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMmVtIDJlbSAwIDA7XHJcblx0XHRcdFx0XHR3aWR0aDogY2FsYyg1MCUgLSAyZW0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1pbmktcG9zdHMgPiA6bnRoLWNoaWxkKC1uICsgMikge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG5cdFx0XHQubWluaS1wb3N0cyB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1pbmktcG9zdHMgPiAqIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDJlbSAwO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcbi8qIFBvc3QgKi9cclxuXHJcblx0LnBvc3Qge1xyXG5cdFx0cGFkZGluZzogM2VtIDNlbSAxLjNlbSAzZW0gO1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdG1hcmdpbjogMCAwIDAgMDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblxyXG5cdFx0LnBvc3QgPiBoZWFkZXIge1xyXG5cdFx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdGxlZnQ6IC0zZW07XHJcblx0XHRcdG1hcmdpbjogLTNlbSAwIDEuM2VtIDA7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSArIDZlbSk7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQucG9zdCA+IGhlYWRlciAudGl0bGUge1xyXG5cdFx0XHRcdC1tb3otZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdC1tcy1mbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdC1tcy1mbGV4OiAxO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAuOGVtIDNlbSAxLjNlbSAzZW07XHRcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnBvc3QgPiBoZWFkZXIgLnRpdGxlIGgyIHtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA5MDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNWVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnBvc3QgPiBoZWFkZXIgLnRpdGxlID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQucG9zdCA+IGhlYWRlciAubWV0YSB7XHJcblx0XHRcdFx0cGFkZGluZzogMS4zZW0gM2VtIDEuM2VtIDNlbSA7XHJcblx0XHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdFx0bWluLXdpZHRoOiAxN2VtO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHRcdHdpZHRoOiAxN2VtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhID4gKiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAxZW0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhIC5wdWJsaXNoZWQge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMzYzNiM2I7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMC40ZW07XHJcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0LnBvc3QgPiBhLmltYWdlLmZlYXR1cmVkIHtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5wb3N0ID4gYS5pbWFnZS5mZWF0dXJlZCBpbWcge1xyXG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuXHRcdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnBvc3QgPiBhLmltYWdlLmZlYXR1cmVkOmhvdmVyIGltZyB7XHJcblx0XHRcdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHRcdFx0XHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0LnBvc3QgPiBmb290ZXIge1xyXG5cdFx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdFx0ZGlzcGxheTogLW1zLWZsZXg7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRcdC5wb3N0ID4gZm9vdGVyIC5hY3Rpb25zIHtcclxuXHRcdFx0XHQtbW96LWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHQtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHQtbXMtZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnBvc3QgPiBmb290ZXIgLnN0YXRzIHtcclxuXHRcdFx0XHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3N0ID4gZm9vdGVyIC5zdGF0cyBsaSB7XHJcblx0XHRcdFx0XHRib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAwLjZlbTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAwIDJlbTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDJlbTtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5wb3N0ID4gZm9vdGVyIC5zdGF0cyBsaTpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5wb3N0ID4gZm9vdGVyIC5zdGF0cyBsaSAuaWNvbiB7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucG9zdCA+IGZvb3RlciAuc3RhdHMgbGkgLmljb246YmVmb3JlIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMC43NWVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuXHJcblx0XHRcdC5wb3N0IHtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogMDtcclxuXHRcdFx0XHRib3JkZXItcmlnaHQ6IDA7XHJcblx0XHRcdFx0bGVmdDogLTNlbTtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlICsgKDNlbSAqIDIpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucG9zdCA+IGhlYWRlciB7XHJcblx0XHRcdFx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAzLjc1ZW0gM2VtIDEuMjVlbSAzZW0gO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC50aXRsZSB7XHJcblx0XHRcdFx0XHRcdC1tcy1mbGV4OiAwIDEgYXV0bztcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucG9zdCA+IGhlYWRlciAubWV0YSB7XHJcblx0XHRcdFx0XHRcdC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogLW1vei1mbGV4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHQtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHQtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItbGVmdDogMDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhID4gKiB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDJlbTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnBvc3QgPiBoZWFkZXIgLm1ldGEgPiA6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnBvc3QgPiBoZWFkZXIgLm1ldGEgLnB1Ymxpc2hlZCB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucG9zdCA+IGhlYWRlciAubWV0YSAuYXV0aG9yIHtcclxuXHRcdFx0XHRcdFx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRcdFx0XHRcdFx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRcdFx0XHRcdFx0XHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhIC5hdXRob3IgLm5hbWUge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIDAgMCAxLjVlbTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhIC5hdXRob3IgaW1nIHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAzLjVlbTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XHJcblxyXG5cdFx0XHQucG9zdCB7XHJcblx0XHRcdFx0cGFkZGluZzogMS41ZW0gMS41ZW0gMC4xZW0gMS41ZW0gO1xyXG5cdFx0XHRcdGxlZnQ6IC0xLjVlbTtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAyZW0gMDtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlICsgKDEuNWVtICogMikpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3N0ID4gaGVhZGVyIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDNlbSAxLjVlbSAwLjVlbSAxLjVlbSA7XHJcblx0XHRcdFx0XHRsZWZ0OiAtMS41ZW07XHJcblx0XHRcdFx0XHRtYXJnaW46IC0xLjVlbSAwIDEuNWVtIDA7XHJcblx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlICsgM2VtKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnBvc3QgPiBoZWFkZXIgLnRpdGxlIGgyIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcblx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhIHtcclxuXHRcdFx0XHQtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wb3N0ID4gaGVhZGVyIC5tZXRhID4gKiB7XHJcblx0XHRcdFx0XHRib3JkZXItbGVmdDogMDtcclxuXHRcdFx0XHRcdG1hcmdpbjogMWVtIDAgMCAwO1xyXG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnBvc3QgPiBoZWFkZXIgLm1ldGEgLmF1dGhvciAubmFtZSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC5wb3N0ID4gLmltYWdlLmZlYXR1cmVkIHtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogLTEuNWVtO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IGNhbGMoLTEuNWVtIC0gMXB4KTtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlICsgM2VtKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnBvc3QgPiBmb290ZXIge1xyXG5cdFx0XHRcdC1tb3otYWxpZ24taXRlbXM6IC1tb3otc3RyZXRjaDtcclxuXHRcdFx0XHQtd2Via2l0LWFsaWduLWl0ZW1zOiAtd2Via2l0LXN0cmV0Y2g7XHJcblx0XHRcdFx0LW1zLWFsaWduLWl0ZW1zOiAtbXMtc3RyZXRjaDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdFx0XHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHRcdFx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHRcdFx0XHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucG9zdCA+IGZvb3RlciAuc3RhdHMge1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucG9zdCA+IGZvb3RlciAuc3RhdHMgbGkge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMCAwIDEuMjVlbTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAwIDAgMS4yNWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcbi8qIFNlY3Rpb24vQXJ0aWNsZSAqL1xyXG5cclxuXHRzZWN0aW9uLnNwZWNpYWwsIGFydGljbGUuc3BlY2lhbCB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRoZWFkZXIgcCB7XHJcblx0XHRmb250LWZhbWlseTogXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyLjU7XHJcblx0XHRtYXJnaW4tdG9wOiAtMWVtO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR9XHJcblxyXG4vKiBUYWJsZSAqL1xyXG5cclxuXHQudGFibGUtd3JhcHBlciB7XHJcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0dGFibGUge1xyXG5cdFx0bWFyZ2luOiAwIDAgMmVtIDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdFx0dGFibGUgdGJvZHkgdHIge1xyXG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRib3JkZXItcmlnaHQ6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoMm4gKyAxKSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjA3NSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR0YWJsZSB0ZCB7XHJcblx0XHRcdHBhZGRpbmc6IDAuNzVlbSAwLjc1ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0dGFibGUgdGgge1xyXG5cdFx0XHRjb2xvcjogIzNjM2IzYjtcclxuXHRcdFx0Zm9udC1zaXplOiAwLjllbTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRcdFx0cGFkZGluZzogMCAwLjc1ZW0gMC43NWVtIDAuNzVlbTtcclxuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdH1cclxuXHJcblx0XHR0YWJsZSB0aGVhZCB7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDJweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGFibGUgdGZvb3Qge1xyXG5cdFx0XHRib3JkZXItdG9wOiBzb2xpZCAycHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRhYmxlLmFsdCB7XHJcblx0XHRcdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5hbHQgdGJvZHkgdHIgdGQge1xyXG5cdFx0XHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdFx0XHRib3JkZXItbGVmdC13aWR0aDogMDtcclxuXHRcdFx0XHRib3JkZXItdG9wLXdpZHRoOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRhYmxlLmFsdCB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcblx0XHRcdFx0XHRib3JkZXItbGVmdC13aWR0aDogMXB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdHRhYmxlLmFsdCB0Ym9keSB0cjpmaXJzdC1jaGlsZCB0ZCB7XHJcblx0XHRcdFx0Ym9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YWJsZS5hbHQgdGhlYWQge1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRhYmxlLmFsdCB0Zm9vdCB7XHJcblx0XHRcdFx0Ym9yZGVyLXRvcDogMDtcclxuXHRcdFx0fVxyXG5cclxuLyogSGVhZGVyICovXHJcblxyXG5cdGJvZHkge1xyXG5cdFx0cGFkZGluZy10b3A6IDEuNGVtO1xyXG5cdH1cclxuXHJcblx0I2hlYWRlciB7XHJcblx0XHRkaXNwbGF5OiAtbW96LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0XHRkaXNwbGF5OiAtbXMtZmxleDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQtbW96LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0LW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0aGVpZ2h0OiAzLjVlbTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRsaW5lLWhlaWdodDogMy41ZW07XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHotaW5kZXg6IDEwMDAwO1xyXG5cdH1cclxuXHJcblx0XHQjaGVhZGVyIGEge1xyXG5cdFx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0fVxyXG5cclxuXHRcdCNoZWFkZXIgdWwge1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdH1cclxuXHJcblx0XHRcdCNoZWFkZXIgdWwgbGkge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHQjaGVhZGVyIGgxIHtcclxuXHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHRcdFx0cGFkZGluZzogMCAwIDAgMS41ZW07XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQjaGVhZGVyIGgxIGEge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHQjaGVhZGVyIC5saW5rcyB7XHJcblx0XHRcdC1tb3otZmxleDogMTtcclxuXHRcdFx0LXdlYmtpdC1mbGV4OiAxO1xyXG5cdFx0XHQtbXMtZmxleDogMTtcclxuXHRcdFx0ZmxleDogMTtcclxuXHRcdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRcdGhlaWdodDogaW5oZXJpdDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAxLjVlbTtcclxuXHRcdH1cclxuXHJcblx0XHRcdCNoZWFkZXIgLmxpbmtzIHVsIGxpIHtcclxuXHRcdFx0XHRib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0XHRtYXJnaW4tbGVmdDogMWVtO1xyXG5cdFx0XHRcdHBhZGRpbmctbGVmdDogMWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNoZWFkZXIgLmxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdGJvcmRlci1sZWZ0OiAwO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyIC5saW5rcyB1bCBsaSBhIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogXCJSYWxld2F5XCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMjVlbTtcclxuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdCNoZWFkZXIgLm1haW4ge1xyXG5cdFx0XHRoZWlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdH1cclxuXHJcblx0XHRcdCNoZWFkZXIgLm1haW4gdWwge1xyXG5cdFx0XHRcdGhlaWdodDogaW5oZXJpdDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyIC5tYWluIHVsIGxpIHtcclxuXHRcdFx0XHRcdGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBpbmhlcml0O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQjaGVhZGVyIC5tYWluIHVsIGxpID4gKiB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQjaGVhZGVyIC5tYWluIHVsIGxpID4gYSB7XHJcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNhYWFhYWE7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0dGV4dC1pbmRlbnQ6IDRlbTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDRlbTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdCNoZWFkZXIgLm1haW4gdWwgbGkgPiBhOmJlZm9yZSB7XHJcblx0XHRcdFx0XHRcdFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuXHRcdFx0XHRcdFx0XHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0I2hlYWRlciAubWFpbiB1bCBsaSA+IGE6YmVmb3JlIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtaW5kZW50OiAwO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogaW5oZXJpdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdCNoZWFkZXIgZm9ybSB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHJcblx0XHRcdCNoZWFkZXIgZm9ybSBpbnB1dCB7XHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdGhlaWdodDogMi41ZW07XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHRvcDogLTJweDtcclxuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0I2hlYWRlciAjc2VhcmNoIHtcclxuXHRcdFx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblx0XHRcdC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDA7XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQjaGVhZGVyICNzZWFyY2ggaW5wdXQge1xyXG5cdFx0XHRcdHdpZHRoOiAxMmVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQjaGVhZGVyICNzZWFyY2gudmlzaWJsZSB7XHJcblx0XHRcdFx0bWF4LXdpZHRoOiAxMi41ZW07XHJcblx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDAuNWVtIDAgMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcblxyXG5cdFx0XHQjaGVhZGVyIC5saW5rcyB7XHJcblx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xyXG5cclxuXHRcdFx0I2hlYWRlciB7XHJcblx0XHRcdFx0aGVpZ2h0OiAyLjc1ZW07XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIuNzVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHQjaGVhZGVyIGgxIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMCAwIDFlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNoZWFkZXIgLm1haW4gLnNlYXJjaCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG4vKiBXcmFwcGVyICovXHJcblxyXG5cdCN3cmFwcGVyIHtcclxuXHRcdGRpc3BsYXk6IC1tb3otZmxleDtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdGRpc3BsYXk6IC1tcy1mbGV4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC1tb3otZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0XHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcblx0XHQtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdHBhZGRpbmc6IDQuNWVtO1xyXG5cdFx0d2lkdGg6IDkwZW07XHJcblx0fVxyXG5cclxuXHRcdGJvZHkuaXMtbWVudS12aXNpYmxlICN3cmFwcGVyIHtcclxuXHRcdFx0b3BhY2l0eTogMC4xNTtcclxuXHRcdH1cclxuXHJcblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcblx0XHRcdCN3cmFwcGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAzZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG5cdFx0XHQjd3JhcHBlciB7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuXHJcblx0XHRcdCN3cmFwcGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxLjVlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRib2R5LnNpbmdsZSAjd3JhcHBlciB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cclxuLyogTWFpbiAqL1xyXG5cclxuXHQjbWFpbiB7XHJcblx0XHQtbW96LWZsZXgtZ3JvdzogMTtcclxuXHRcdC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG5cdFx0LW1zLWZsZXgtZ3JvdzogMTtcclxuXHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdC1tcy1mbGV4OiAxO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuLyogU2lkZWJhciAqL1xyXG5cclxuXHQjc2lkZWJhciB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDNlbTtcclxuXHRcdG1pbi13aWR0aDogMjJlbTtcclxuXHRcdHdpZHRoOiAyMmVtO1xyXG5cdH1cclxuXHJcblx0XHQjc2lkZWJhciA+ICoge1xyXG5cdFx0XHRib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0XHRtYXJnaW46IDNlbSAwIDAgMDtcclxuXHRcdFx0cGFkZGluZzogM2VtIDAgMCAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdCNzaWRlYmFyID4gOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMDtcclxuXHRcdFx0bWFyZ2luLXRvcDogMDtcclxuXHRcdFx0cGFkZGluZy10b3A6IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG5cdFx0XHQjc2lkZWJhciB7XHJcblx0XHRcdFx0Ym9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdFx0XHRtYXJnaW46IDNlbSAwIDAgMDtcclxuXHRcdFx0XHRtaW4td2lkdGg6IDA7XHJcblx0XHRcdFx0cGFkZGluZzogM2VtIDAgMCAwO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcbi8qIEludHJvICovXHJcblxyXG5cdCNpbnRybyAubG9nbyB7XHJcblx0XHRib3JkZXItYm90dG9tOiAwO1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDRlbTtcclxuXHR9XHJcblxyXG5cdFx0I2ludHJvIC5sb2dvOmJlZm9yZSB7XHJcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEwMHB4JyBoZWlnaHQ9JzEwMHB4JyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgem9vbUFuZFBhbj0nZGlzYWJsZSclM0UlM0Nwb2x5Z29uIHBvaW50cz0nMCwwIDEwMCwwIDEwMCwyNSA1MCwwIDAsMjUnIHN0eWxlPSdmaWxsOiUyM2Y0ZjRmNCcgLyUzRSUzQ3BvbHlnb24gcG9pbnRzPScwLDEwMCAxMDAsMTAwIDEwMCw3NSA1MCwxMDAgMCw3NScgc3R5bGU9J2ZpbGw6JTIzZjRmNGY0JyAvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcblx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCNpbnRybyAubG9nbyBpbWcge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0wLjI1ZW07XHJcblx0XHRcdHdpZHRoOiA0LjVlbTtcclxuXHRcdH1cclxuXHJcblx0I2ludHJvIGhlYWRlciBoMiB7XHJcblx0XHRmb250LXNpemU6IDJlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA5MDA7XHJcblx0fVxyXG5cclxuXHQjaW50cm8gaGVhZGVyIHAge1xyXG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG5cclxuXHRcdCNpbnRybyB7XHJcblx0XHRcdG1hcmdpbjogMCAwIDNlbSAwO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQjaW50cm8gaGVhZGVyIGgyIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDJlbTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0I2ludHJvIGhlYWRlciBwIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDAuN2VtO1xyXG5cdFx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuXHJcblx0XHQjaW50cm8ge1xyXG5cdFx0XHRtYXJnaW46IDAgMCAxLjVlbSAwO1xyXG5cdFx0XHRwYWRkaW5nOiAxLjI1ZW0gMDtcclxuXHRcdH1cclxuXHJcblx0XHRcdCNpbnRybyA+IDpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQjaW50cm8gLmxvZ28ge1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCNpbnRybyBoZWFkZXIgaDIge1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4yNWVtO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQjaW50cm8gaGVhZGVyID4gOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdH1cclxuXHJcblx0fVxyXG5cclxuLyogRm9vdGVyICovXHJcblxyXG5cdCNmb290ZXIgLmljb25zIHtcclxuXHRcdGNvbG9yOiAjYWFhYWFhO1xyXG5cdH1cclxuXHJcblx0I2Zvb3RlciAuY29weXJpZ2h0IHtcclxuXHRcdGNvbG9yOiAjYWFhYWFhO1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0XHRmb250LXNpemU6IDAuNWVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdH1cclxuXHJcblx0Ym9keS5zaW5nbGUgI2Zvb3RlciB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuLyogTWVudSAqL1xyXG5cclxuXHQjbWVudSB7XHJcblx0XHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNWVtKTtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1ZW0pO1xyXG5cdFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNWVtKTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNWVtKTtcclxuXHRcdC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzO1xyXG5cdFx0LW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXM7XHJcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMyk7XHJcblx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWF4LXdpZHRoOiA4MCU7XHJcblx0XHRvdmVyZmxvdy15OiBhdXRvO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHR3aWR0aDogMjVlbTtcclxuXHRcdHotaW5kZXg6IDEwMDAyO1xyXG5cdH1cclxuXHJcblx0XHQjbWVudSA+ICoge1xyXG5cdFx0XHRib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjMpO1xyXG5cdFx0XHRwYWRkaW5nOiAzZW07XHJcblx0XHR9XHJcblxyXG5cdFx0XHQjbWVudSA+ICogPiA6bGFzdC1jaGlsZCB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdCNtZW51ID4gOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0Ym9yZGVyLXRvcDogMDtcclxuXHRcdH1cclxuXHJcblx0XHQjbWVudSAubGlua3Mge1xyXG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0I21lbnUgLmxpbmtzID4gbGkge1xyXG5cdFx0XHRcdGJvcmRlcjogMDtcclxuXHRcdFx0XHRib3JkZXItdG9wOiBkb3R0ZWQgMXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC4zKTtcclxuXHRcdFx0XHRtYXJnaW46IDEuNWVtIDAgMCAwO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEuNWVtIDAgMCAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNtZW51IC5saW5rcyA+IGxpIGEge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQjbWVudSAubGlua3MgPiBsaSBhIGgzIHtcclxuXHRcdFx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcblx0XHRcdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG5cdFx0XHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC43ZW07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0I21lbnUgLmxpbmtzID4gbGkgYSBwIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC42ZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQjbWVudSAubGlua3MgPiBsaSBhOmhvdmVyIGgzIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMyZWJhYWU7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCNtZW51IC5saW5rcyA+IGxpOmZpcnN0LWNoaWxkIHtcclxuXHRcdFx0XHRcdGJvcmRlci10b3A6IDA7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xyXG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdGJvZHkuaXMtbWVudS12aXNpYmxlICNtZW51IHtcclxuXHRcdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdFx0XHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcclxuXHJcblx0XHRcdCNtZW51ID4gKiB7XHJcblx0XHRcdFx0cGFkZGluZzogMS41ZW07XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcbi50cmlwc2NvbXB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59IiwiLyohXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxuICovQGZvbnQtZmFjZXtmb250LWZhbWlseTonRm9udEF3ZXNvbWUnO3NyYzp1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjAnKTtzcmM6dXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD8jaWVmaXgmdj00LjcuMCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSx1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjI/dj00LjcuMCcpIGZvcm1hdCgnd29mZjInKSx1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZj92PTQuNy4wJykgZm9ybWF0KCd3b2ZmJyksdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LnR0Zj92PTQuNy4wJykgZm9ybWF0KCd0cnVldHlwZScpLHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj00LjcuMCNmb250YXdlc29tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbH0uZmF7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udDpub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7Zm9udC1zaXplOmluaGVyaXQ7dGV4dC1yZW5kZXJpbmc6YXV0bzstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uZmEtbGd7Zm9udC1zaXplOjEuMzMzMzMzMzNlbTtsaW5lLWhlaWdodDouNzVlbTt2ZXJ0aWNhbC1hbGlnbjotMTUlfS5mYS0yeHtmb250LXNpemU6MmVtfS5mYS0zeHtmb250LXNpemU6M2VtfS5mYS00eHtmb250LXNpemU6NGVtfS5mYS01eHtmb250LXNpemU6NWVtfS5mYS1md3t3aWR0aDoxLjI4NTcxNDI5ZW07dGV4dC1hbGlnbjpjZW50ZXJ9LmZhLXVse3BhZGRpbmctbGVmdDowO21hcmdpbi1sZWZ0OjIuMTQyODU3MTRlbTtsaXN0LXN0eWxlLXR5cGU6bm9uZX0uZmEtdWw+bGl7cG9zaXRpb246cmVsYXRpdmV9LmZhLWxpe3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTIuMTQyODU3MTRlbTt3aWR0aDoyLjE0Mjg1NzE0ZW07dG9wOi4xNDI4NTcxNGVtO3RleHQtYWxpZ246Y2VudGVyfS5mYS1saS5mYS1sZ3tsZWZ0Oi0xLjg1NzE0Mjg2ZW19LmZhLWJvcmRlcntwYWRkaW5nOi4yZW0gLjI1ZW0gLjE1ZW07Ym9yZGVyOnNvbGlkIC4wOGVtICNlZWU7Ym9yZGVyLXJhZGl1czouMWVtfS5mYS1wdWxsLWxlZnR7ZmxvYXQ6bGVmdH0uZmEtcHVsbC1yaWdodHtmbG9hdDpyaWdodH0uZmEuZmEtcHVsbC1sZWZ0e21hcmdpbi1yaWdodDouM2VtfS5mYS5mYS1wdWxsLXJpZ2h0e21hcmdpbi1sZWZ0Oi4zZW19LnB1bGwtcmlnaHR7ZmxvYXQ6cmlnaHR9LnB1bGwtbGVmdHtmbG9hdDpsZWZ0fS5mYS5wdWxsLWxlZnR7bWFyZ2luLXJpZ2h0Oi4zZW19LmZhLnB1bGwtcmlnaHR7bWFyZ2luLWxlZnQ6LjNlbX0uZmEtc3Bpbnstd2Via2l0LWFuaW1hdGlvbjpmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjthbmltYXRpb246ZmEtc3BpbiAycyBpbmZpbml0ZSBsaW5lYXJ9LmZhLXB1bHNley13ZWJraXQtYW5pbWF0aW9uOmZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7YW5pbWF0aW9uOmZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCl9QC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fUBrZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19LmZhLXJvdGF0ZS05MHstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcIjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX0uZmEtcm90YXRlLTE4MHstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcIjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uZmEtcm90YXRlLTI3MHstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcIjstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0uZmEtZmxpcC1ob3Jpem9udGFsey1tcy1maWx0ZXI6XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcIjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7dHJhbnNmb3JtOnNjYWxlKC0xLCAxKX0uZmEtZmxpcC12ZXJ0aWNhbHstbXMtZmlsdGVyOlwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXCI7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwgLTEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSwgLTEpO3RyYW5zZm9ybTpzY2FsZSgxLCAtMSl9OnJvb3QgLmZhLXJvdGF0ZS05MCw6cm9vdCAuZmEtcm90YXRlLTE4MCw6cm9vdCAuZmEtcm90YXRlLTI3MCw6cm9vdCAuZmEtZmxpcC1ob3Jpem9udGFsLDpyb290IC5mYS1mbGlwLXZlcnRpY2Fse2ZpbHRlcjpub25lfS5mYS1zdGFja3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyZW07aGVpZ2h0OjJlbTtsaW5lLWhlaWdodDoyZW07dmVydGljYWwtYWxpZ246bWlkZGxlfS5mYS1zdGFjay0xeCwuZmEtc3RhY2stMnh7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9LmZhLXN0YWNrLTF4e2xpbmUtaGVpZ2h0OmluaGVyaXR9LmZhLXN0YWNrLTJ4e2ZvbnQtc2l6ZToyZW19LmZhLWludmVyc2V7Y29sb3I6I2ZmZn0uZmEtZ2xhc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDBcIn0uZmEtbXVzaWM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDFcIn0uZmEtc2VhcmNoOmJlZm9yZXtjb250ZW50OlwiXFxmMDAyXCJ9LmZhLWVudmVsb3BlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDNcIn0uZmEtaGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDRcIn0uZmEtc3RhcjpiZWZvcmV7Y29udGVudDpcIlxcZjAwNVwifS5mYS1zdGFyLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMDZcIn0uZmEtdXNlcjpiZWZvcmV7Y29udGVudDpcIlxcZjAwN1wifS5mYS1maWxtOmJlZm9yZXtjb250ZW50OlwiXFxmMDA4XCJ9LmZhLXRoLWxhcmdlOmJlZm9yZXtjb250ZW50OlwiXFxmMDA5XCJ9LmZhLXRoOmJlZm9yZXtjb250ZW50OlwiXFxmMDBhXCJ9LmZhLXRoLWxpc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGJcIn0uZmEtY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMGNcIn0uZmEtcmVtb3ZlOmJlZm9yZSwuZmEtY2xvc2U6YmVmb3JlLC5mYS10aW1lczpiZWZvcmV7Y29udGVudDpcIlxcZjAwZFwifS5mYS1zZWFyY2gtcGx1czpiZWZvcmV7Y29udGVudDpcIlxcZjAwZVwifS5mYS1zZWFyY2gtbWludXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTBcIn0uZmEtcG93ZXItb2ZmOmJlZm9yZXtjb250ZW50OlwiXFxmMDExXCJ9LmZhLXNpZ25hbDpiZWZvcmV7Y29udGVudDpcIlxcZjAxMlwifS5mYS1nZWFyOmJlZm9yZSwuZmEtY29nOmJlZm9yZXtjb250ZW50OlwiXFxmMDEzXCJ9LmZhLXRyYXNoLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTRcIn0uZmEtaG9tZTpiZWZvcmV7Y29udGVudDpcIlxcZjAxNVwifS5mYS1maWxlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMTZcIn0uZmEtY2xvY2stbzpiZWZvcmV7Y29udGVudDpcIlxcZjAxN1wifS5mYS1yb2FkOmJlZm9yZXtjb250ZW50OlwiXFxmMDE4XCJ9LmZhLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlwiXFxmMDE5XCJ9LmZhLWFycm93LWNpcmNsZS1vLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMWFcIn0uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMWJcIn0uZmEtaW5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMWNcIn0uZmEtcGxheS1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjAxZFwifS5mYS1yb3RhdGUtcmlnaHQ6YmVmb3JlLC5mYS1yZXBlYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMWVcIn0uZmEtcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcIlxcZjAyMVwifS5mYS1saXN0LWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjAyMlwifS5mYS1sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxmMDIzXCJ9LmZhLWZsYWc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjRcIn0uZmEtaGVhZHBob25lczpiZWZvcmV7Y29udGVudDpcIlxcZjAyNVwifS5mYS12b2x1bWUtb2ZmOmJlZm9yZXtjb250ZW50OlwiXFxmMDI2XCJ9LmZhLXZvbHVtZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMDI3XCJ9LmZhLXZvbHVtZS11cDpiZWZvcmV7Y29udGVudDpcIlxcZjAyOFwifS5mYS1xcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMjlcIn0uZmEtYmFyY29kZTpiZWZvcmV7Y29udGVudDpcIlxcZjAyYVwifS5mYS10YWc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMmJcIn0uZmEtdGFnczpiZWZvcmV7Y29udGVudDpcIlxcZjAyY1wifS5mYS1ib29rOmJlZm9yZXtjb250ZW50OlwiXFxmMDJkXCJ9LmZhLWJvb2ttYXJrOmJlZm9yZXtjb250ZW50OlwiXFxmMDJlXCJ9LmZhLXByaW50OmJlZm9yZXtjb250ZW50OlwiXFxmMDJmXCJ9LmZhLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcZjAzMFwifS5mYS1mb250OmJlZm9yZXtjb250ZW50OlwiXFxmMDMxXCJ9LmZhLWJvbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzJcIn0uZmEtaXRhbGljOmJlZm9yZXtjb250ZW50OlwiXFxmMDMzXCJ9LmZhLXRleHQtaGVpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMDM0XCJ9LmZhLXRleHQtd2lkdGg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzVcIn0uZmEtYWxpZ24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjAzNlwifS5mYS1hbGlnbi1jZW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzdcIn0uZmEtYWxpZ24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwMzhcIn0uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIlxcZjAzOVwifS5mYS1saXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMDNhXCJ9LmZhLWRlZGVudDpiZWZvcmUsLmZhLW91dGRlbnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwM2JcIn0uZmEtaW5kZW50OmJlZm9yZXtjb250ZW50OlwiXFxmMDNjXCJ9LmZhLXZpZGVvLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcIlxcZjAzZFwifS5mYS1waG90bzpiZWZvcmUsLmZhLWltYWdlOmJlZm9yZSwuZmEtcGljdHVyZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDNlXCJ9LmZhLXBlbmNpbDpiZWZvcmV7Y29udGVudDpcIlxcZjA0MFwifS5mYS1tYXAtbWFya2VyOmJlZm9yZXtjb250ZW50OlwiXFxmMDQxXCJ9LmZhLWFkanVzdDpiZWZvcmV7Y29udGVudDpcIlxcZjA0MlwifS5mYS10aW50OmJlZm9yZXtjb250ZW50OlwiXFxmMDQzXCJ9LmZhLWVkaXQ6YmVmb3JlLC5mYS1wZW5jaWwtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDRcIn0uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDVcIn0uZmEtY2hlY2stc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDZcIn0uZmEtYXJyb3dzOmJlZm9yZXtjb250ZW50OlwiXFxmMDQ3XCJ9LmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNDhcIn0uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA0OVwifS5mYS1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA0YVwifS5mYS1wbGF5OmJlZm9yZXtjb250ZW50OlwiXFxmMDRiXCJ9LmZhLXBhdXNlOmJlZm9yZXtjb250ZW50OlwiXFxmMDRjXCJ9LmZhLXN0b3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNGRcIn0uZmEtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIlxcZjA0ZVwifS5mYS1mYXN0LWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTBcIn0uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMDUxXCJ9LmZhLWVqZWN0OmJlZm9yZXtjb250ZW50OlwiXFxmMDUyXCJ9LmZhLWNoZXZyb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjA1M1wifS5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMDU0XCJ9LmZhLXBsdXMtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDU1XCJ9LmZhLW1pbnVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA1NlwifS5mYS10aW1lcy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNTdcIn0uZmEtY2hlY2stY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDU4XCJ9LmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA1OVwifS5mYS1pbmZvLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjA1YVwifS5mYS1jcm9zc2hhaXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMDViXCJ9LmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDVjXCJ9LmZhLWNoZWNrLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDVkXCJ9LmZhLWJhbjpiZWZvcmV7Y29udGVudDpcIlxcZjA1ZVwifS5mYS1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDYwXCJ9LmZhLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMDYxXCJ9LmZhLWFycm93LXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMDYyXCJ9LmZhLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNjNcIn0uZmEtbWFpbC1mb3J3YXJkOmJlZm9yZSwuZmEtc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNjRcIn0uZmEtZXhwYW5kOmJlZm9yZXtjb250ZW50OlwiXFxmMDY1XCJ9LmZhLWNvbXByZXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMDY2XCJ9LmZhLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNjdcIn0uZmEtbWludXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNjhcIn0uZmEtYXN0ZXJpc2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNjlcIn0uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDZhXCJ9LmZhLWdpZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNmJcIn0uZmEtbGVhZjpiZWZvcmV7Y29udGVudDpcIlxcZjA2Y1wifS5mYS1maXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMDZkXCJ9LmZhLWV5ZTpiZWZvcmV7Y29udGVudDpcIlxcZjA2ZVwifS5mYS1leWUtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwNzBcIn0uZmEtd2FybmluZzpiZWZvcmUsLmZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMDcxXCJ9LmZhLXBsYW5lOmJlZm9yZXtjb250ZW50OlwiXFxmMDcyXCJ9LmZhLWNhbGVuZGFyOmJlZm9yZXtjb250ZW50OlwiXFxmMDczXCJ9LmZhLXJhbmRvbTpiZWZvcmV7Y29udGVudDpcIlxcZjA3NFwifS5mYS1jb21tZW50OmJlZm9yZXtjb250ZW50OlwiXFxmMDc1XCJ9LmZhLW1hZ25ldDpiZWZvcmV7Y29udGVudDpcIlxcZjA3NlwifS5mYS1jaGV2cm9uLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMDc3XCJ9LmZhLWNoZXZyb24tZG93bjpiZWZvcmV7Y29udGVudDpcIlxcZjA3OFwifS5mYS1yZXR3ZWV0OmJlZm9yZXtjb250ZW50OlwiXFxmMDc5XCJ9LmZhLXNob3BwaW5nLWNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwN2FcIn0uZmEtZm9sZGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMDdiXCJ9LmZhLWZvbGRlci1vcGVuOmJlZm9yZXtjb250ZW50OlwiXFxmMDdjXCJ9LmZhLWFycm93cy12OmJlZm9yZXtjb250ZW50OlwiXFxmMDdkXCJ9LmZhLWFycm93cy1oOmJlZm9yZXtjb250ZW50OlwiXFxmMDdlXCJ9LmZhLWJhci1jaGFydC1vOmJlZm9yZSwuZmEtYmFyLWNoYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMDgwXCJ9LmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMDgxXCJ9LmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA4MlwifS5mYS1jYW1lcmEtcmV0cm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwODNcIn0uZmEta2V5OmJlZm9yZXtjb250ZW50OlwiXFxmMDg0XCJ9LmZhLWdlYXJzOmJlZm9yZSwuZmEtY29nczpiZWZvcmV7Y29udGVudDpcIlxcZjA4NVwifS5mYS1jb21tZW50czpiZWZvcmV7Y29udGVudDpcIlxcZjA4NlwifS5mYS10aHVtYnMtby11cDpiZWZvcmV7Y29udGVudDpcIlxcZjA4N1wifS5mYS10aHVtYnMtby1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMDg4XCJ9LmZhLXN0YXItaGFsZjpiZWZvcmV7Y29udGVudDpcIlxcZjA4OVwifS5mYS1oZWFydC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDhhXCJ9LmZhLXNpZ24tb3V0OmJlZm9yZXtjb250ZW50OlwiXFxmMDhiXCJ9LmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA4Y1wifS5mYS10aHVtYi10YWNrOmJlZm9yZXtjb250ZW50OlwiXFxmMDhkXCJ9LmZhLWV4dGVybmFsLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOGVcIn0uZmEtc2lnbi1pbjpiZWZvcmV7Y29udGVudDpcIlxcZjA5MFwifS5mYS10cm9waHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTFcIn0uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA5MlwifS5mYS11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOTNcIn0uZmEtbGVtb24tbzpiZWZvcmV7Y29udGVudDpcIlxcZjA5NFwifS5mYS1waG9uZTpiZWZvcmV7Y29udGVudDpcIlxcZjA5NVwifS5mYS1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjA5NlwifS5mYS1ib29rbWFyay1vOmJlZm9yZXtjb250ZW50OlwiXFxmMDk3XCJ9LmZhLXBob25lLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjA5OFwifS5mYS10d2l0dGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMDk5XCJ9LmZhLWZhY2Vib29rLWY6YmVmb3JlLC5mYS1mYWNlYm9vazpiZWZvcmV7Y29udGVudDpcIlxcZjA5YVwifS5mYS1naXRodWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOWJcIn0uZmEtdW5sb2NrOmJlZm9yZXtjb250ZW50OlwiXFxmMDljXCJ9LmZhLWNyZWRpdC1jYXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMDlkXCJ9LmZhLWZlZWQ6YmVmb3JlLC5mYS1yc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwOWVcIn0uZmEtaGRkLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTBcIn0uZmEtYnVsbGhvcm46YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTFcIn0uZmEtYmVsbDpiZWZvcmV7Y29udGVudDpcIlxcZjBmM1wifS5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmV7Y29udGVudDpcIlxcZjBhM1wifS5mYS1oYW5kLW8tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTRcIn0uZmEtaGFuZC1vLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYTVcIn0uZmEtaGFuZC1vLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMGE2XCJ9LmZhLWhhbmQtby1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMGE3XCJ9LmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMGE4XCJ9LmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjBhOVwifS5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYWFcIn0uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYWJcIn0uZmEtZ2xvYmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYWNcIn0uZmEtd3JlbmNoOmJlZm9yZXtjb250ZW50OlwiXFxmMGFkXCJ9LmZhLXRhc2tzOmJlZm9yZXtjb250ZW50OlwiXFxmMGFlXCJ9LmZhLWZpbHRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjBiMFwifS5mYS1icmllZmNhc2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYjFcIn0uZmEtYXJyb3dzLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjBiMlwifS5mYS1ncm91cDpiZWZvcmUsLmZhLXVzZXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMGMwXCJ9LmZhLWNoYWluOmJlZm9yZSwuZmEtbGluazpiZWZvcmV7Y29udGVudDpcIlxcZjBjMVwifS5mYS1jbG91ZDpiZWZvcmV7Y29udGVudDpcIlxcZjBjMlwifS5mYS1mbGFzazpiZWZvcmV7Y29udGVudDpcIlxcZjBjM1wifS5mYS1jdXQ6YmVmb3JlLC5mYS1zY2lzc29yczpiZWZvcmV7Y29udGVudDpcIlxcZjBjNFwifS5mYS1jb3B5OmJlZm9yZSwuZmEtZmlsZXMtbzpiZWZvcmV7Y29udGVudDpcIlxcZjBjNVwifS5mYS1wYXBlcmNsaXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzZcIn0uZmEtc2F2ZTpiZWZvcmUsLmZhLWZsb3BweS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMGM3XCJ9LmZhLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjBjOFwifS5mYS1uYXZpY29uOmJlZm9yZSwuZmEtcmVvcmRlcjpiZWZvcmUsLmZhLWJhcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwYzlcIn0uZmEtbGlzdC11bDpiZWZvcmV7Y29udGVudDpcIlxcZjBjYVwifS5mYS1saXN0LW9sOmJlZm9yZXtjb250ZW50OlwiXFxmMGNiXCJ9LmZhLXN0cmlrZXRocm91Z2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwY2NcIn0uZmEtdW5kZXJsaW5lOmJlZm9yZXtjb250ZW50OlwiXFxmMGNkXCJ9LmZhLXRhYmxlOmJlZm9yZXtjb250ZW50OlwiXFxmMGNlXCJ9LmZhLW1hZ2ljOmJlZm9yZXtjb250ZW50OlwiXFxmMGQwXCJ9LmZhLXRydWNrOmJlZm9yZXtjb250ZW50OlwiXFxmMGQxXCJ9LmZhLXBpbnRlcmVzdDpiZWZvcmV7Y29udGVudDpcIlxcZjBkMlwifS5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMGQzXCJ9LmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjBkNFwifS5mYS1nb29nbGUtcGx1czpiZWZvcmV7Y29udGVudDpcIlxcZjBkNVwifS5mYS1tb25leTpiZWZvcmV7Y29udGVudDpcIlxcZjBkNlwifS5mYS1jYXJldC1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMGQ3XCJ9LmZhLWNhcmV0LXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMGQ4XCJ9LmZhLWNhcmV0LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZDlcIn0uZmEtY2FyZXQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGFcIn0uZmEtY29sdW1uczpiZWZvcmV7Y29udGVudDpcIlxcZjBkYlwifS5mYS11bnNvcnRlZDpiZWZvcmUsLmZhLXNvcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZGNcIn0uZmEtc29ydC1kb3duOmJlZm9yZSwuZmEtc29ydC1kZXNjOmJlZm9yZXtjb250ZW50OlwiXFxmMGRkXCJ9LmZhLXNvcnQtdXA6YmVmb3JlLC5mYS1zb3J0LWFzYzpiZWZvcmV7Y29udGVudDpcIlxcZjBkZVwifS5mYS1lbnZlbG9wZTpiZWZvcmV7Y29udGVudDpcIlxcZjBlMFwifS5mYS1saW5rZWRpbjpiZWZvcmV7Y29udGVudDpcIlxcZjBlMVwifS5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsLmZhLXVuZG86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZTJcIn0uZmEtbGVnYWw6YmVmb3JlLC5mYS1nYXZlbDpiZWZvcmV7Y29udGVudDpcIlxcZjBlM1wifS5mYS1kYXNoYm9hcmQ6YmVmb3JlLC5mYS10YWNob21ldGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMGU0XCJ9LmZhLWNvbW1lbnQtbzpiZWZvcmV7Y29udGVudDpcIlxcZjBlNVwifS5mYS1jb21tZW50cy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMGU2XCJ9LmZhLWZsYXNoOmJlZm9yZSwuZmEtYm9sdDpiZWZvcmV7Y29udGVudDpcIlxcZjBlN1wifS5mYS1zaXRlbWFwOmJlZm9yZXtjb250ZW50OlwiXFxmMGU4XCJ9LmZhLXVtYnJlbGxhOmJlZm9yZXtjb250ZW50OlwiXFxmMGU5XCJ9LmZhLXBhc3RlOmJlZm9yZSwuZmEtY2xpcGJvYXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMGVhXCJ9LmZhLWxpZ2h0YnVsYi1vOmJlZm9yZXtjb250ZW50OlwiXFxmMGViXCJ9LmZhLWV4Y2hhbmdlOmJlZm9yZXtjb250ZW50OlwiXFxmMGVjXCJ9LmZhLWNsb3VkLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlwiXFxmMGVkXCJ9LmZhLWNsb3VkLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcIlxcZjBlZVwifS5mYS11c2VyLW1kOmJlZm9yZXtjb250ZW50OlwiXFxmMGYwXCJ9LmZhLXN0ZXRob3Njb3BlOmJlZm9yZXtjb250ZW50OlwiXFxmMGYxXCJ9LmZhLXN1aXRjYXNlOmJlZm9yZXtjb250ZW50OlwiXFxmMGYyXCJ9LmZhLWJlbGwtbzpiZWZvcmV7Y29udGVudDpcIlxcZjBhMlwifS5mYS1jb2ZmZWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZjRcIn0uZmEtY3V0bGVyeTpiZWZvcmV7Y29udGVudDpcIlxcZjBmNVwifS5mYS1maWxlLXRleHQtbzpiZWZvcmV7Y29udGVudDpcIlxcZjBmNlwifS5mYS1idWlsZGluZy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMGY3XCJ9LmZhLWhvc3BpdGFsLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYwZjhcIn0uZmEtYW1idWxhbmNlOmJlZm9yZXtjb250ZW50OlwiXFxmMGY5XCJ9LmZhLW1lZGtpdDpiZWZvcmV7Y29udGVudDpcIlxcZjBmYVwifS5mYS1maWdodGVyLWpldDpiZWZvcmV7Y29udGVudDpcIlxcZjBmYlwifS5mYS1iZWVyOmJlZm9yZXtjb250ZW50OlwiXFxmMGZjXCJ9LmZhLWgtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMGZkXCJ9LmZhLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMGZlXCJ9LmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTAwXCJ9LmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjEwMVwifS5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDJcIn0uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDNcIn0uZmEtYW5nbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjEwNFwifS5mYS1hbmdsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjEwNVwifS5mYS1hbmdsZS11cDpiZWZvcmV7Y29udGVudDpcIlxcZjEwNlwifS5mYS1hbmdsZS1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTA3XCJ9LmZhLWRlc2t0b3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMDhcIn0uZmEtbGFwdG9wOmJlZm9yZXtjb250ZW50OlwiXFxmMTA5XCJ9LmZhLXRhYmxldDpiZWZvcmV7Y29udGVudDpcIlxcZjEwYVwifS5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLC5mYS1tb2JpbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMGJcIn0uZmEtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMGNcIn0uZmEtcXVvdGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjEwZFwifS5mYS1xdW90ZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjEwZVwifS5mYS1zcGlubmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMTEwXCJ9LmZhLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjExMVwifS5mYS1tYWlsLXJlcGx5OmJlZm9yZSwuZmEtcmVwbHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMTJcIn0uZmEtZ2l0aHViLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjExM1wifS5mYS1mb2xkZXItbzpiZWZvcmV7Y29udGVudDpcIlxcZjExNFwifS5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTE1XCJ9LmZhLXNtaWxlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMThcIn0uZmEtZnJvd24tbzpiZWZvcmV7Y29udGVudDpcIlxcZjExOVwifS5mYS1tZWgtbzpiZWZvcmV7Y29udGVudDpcIlxcZjExYVwifS5mYS1nYW1lcGFkOmJlZm9yZXtjb250ZW50OlwiXFxmMTFiXCJ9LmZhLWtleWJvYXJkLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMWNcIn0uZmEtZmxhZy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTFkXCJ9LmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZXtjb250ZW50OlwiXFxmMTFlXCJ9LmZhLXRlcm1pbmFsOmJlZm9yZXtjb250ZW50OlwiXFxmMTIwXCJ9LmZhLWNvZGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjFcIn0uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLC5mYS1yZXBseS1hbGw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjJcIn0uZmEtc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSwuZmEtc3Rhci1oYWxmLWZ1bGw6YmVmb3JlLC5mYS1zdGFyLWhhbGYtbzpiZWZvcmV7Y29udGVudDpcIlxcZjEyM1wifS5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcZjEyNFwifS5mYS1jcm9wOmJlZm9yZXtjb250ZW50OlwiXFxmMTI1XCJ9LmZhLWNvZGUtZm9yazpiZWZvcmV7Y29udGVudDpcIlxcZjEyNlwifS5mYS11bmxpbms6YmVmb3JlLC5mYS1jaGFpbi1icm9rZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjdcIn0uZmEtcXVlc3Rpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMjhcIn0uZmEtaW5mbzpiZWZvcmV7Y29udGVudDpcIlxcZjEyOVwifS5mYS1leGNsYW1hdGlvbjpiZWZvcmV7Y29udGVudDpcIlxcZjEyYVwifS5mYS1zdXBlcnNjcmlwdDpiZWZvcmV7Y29udGVudDpcIlxcZjEyYlwifS5mYS1zdWJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMmNcIn0uZmEtZXJhc2VyOmJlZm9yZXtjb250ZW50OlwiXFxmMTJkXCJ9LmZhLXB1enpsZS1waWVjZTpiZWZvcmV7Y29udGVudDpcIlxcZjEyZVwifS5mYS1taWNyb3Bob25lOmJlZm9yZXtjb250ZW50OlwiXFxmMTMwXCJ9LmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzFcIn0uZmEtc2hpZWxkOmJlZm9yZXtjb250ZW50OlwiXFxmMTMyXCJ9LmZhLWNhbGVuZGFyLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzNcIn0uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxMzRcIn0uZmEtcm9ja2V0OmJlZm9yZXtjb250ZW50OlwiXFxmMTM1XCJ9LmZhLW1heGNkbjpiZWZvcmV7Y29udGVudDpcIlxcZjEzNlwifS5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50OlwiXFxmMTM3XCJ9LmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMTM4XCJ9LmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTM5XCJ9LmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxM2FcIn0uZmEtaHRtbDU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxM2JcIn0uZmEtY3NzMzpiZWZvcmV7Y29udGVudDpcIlxcZjEzY1wifS5mYS1hbmNob3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxM2RcIn0uZmEtdW5sb2NrLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjEzZVwifS5mYS1idWxsc2V5ZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0MFwifS5mYS1lbGxpcHNpcy1oOmJlZm9yZXtjb250ZW50OlwiXFxmMTQxXCJ9LmZhLWVsbGlwc2lzLXY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDJcIn0uZmEtcnNzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0M1wifS5mYS1wbGF5LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjE0NFwifS5mYS10aWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDVcIn0uZmEtbWludXMtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTQ2XCJ9LmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTQ3XCJ9LmZhLWxldmVsLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTQ4XCJ9LmZhLWxldmVsLWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNDlcIn0uZmEtY2hlY2stc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTRhXCJ9LmZhLXBlbmNpbC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNGJcIn0uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNGNcIn0uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTRkXCJ9LmZhLWNvbXBhc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNGVcIn0uZmEtdG9nZ2xlLWRvd246YmVmb3JlLC5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTUwXCJ9LmZhLXRvZ2dsZS11cDpiZWZvcmUsLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTUxXCJ9LmZhLXRvZ2dsZS1yaWdodDpiZWZvcmUsLmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZXtjb250ZW50OlwiXFxmMTUyXCJ9LmZhLWV1cm86YmVmb3JlLC5mYS1ldXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTNcIn0uZmEtZ2JwOmJlZm9yZXtjb250ZW50OlwiXFxmMTU0XCJ9LmZhLWRvbGxhcjpiZWZvcmUsLmZhLXVzZDpiZWZvcmV7Y29udGVudDpcIlxcZjE1NVwifS5mYS1ydXBlZTpiZWZvcmUsLmZhLWlucjpiZWZvcmV7Y29udGVudDpcIlxcZjE1NlwifS5mYS1jbnk6YmVmb3JlLC5mYS1ybWI6YmVmb3JlLC5mYS15ZW46YmVmb3JlLC5mYS1qcHk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNTdcIn0uZmEtcnVibGU6YmVmb3JlLC5mYS1yb3VibGU6YmVmb3JlLC5mYS1ydWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNThcIn0uZmEtd29uOmJlZm9yZSwuZmEta3J3OmJlZm9yZXtjb250ZW50OlwiXFxmMTU5XCJ9LmZhLWJpdGNvaW46YmVmb3JlLC5mYS1idGM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNWFcIn0uZmEtZmlsZTpiZWZvcmV7Y29udGVudDpcIlxcZjE1YlwifS5mYS1maWxlLXRleHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNWNcIn0uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNWRcIn0uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZXtjb250ZW50OlwiXFxmMTVlXCJ9LmZhLXNvcnQtYW1vdW50LWFzYzpiZWZvcmV7Y29udGVudDpcIlxcZjE2MFwifS5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZXtjb250ZW50OlwiXFxmMTYxXCJ9LmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjJcIn0uZmEtc29ydC1udW1lcmljLWRlc2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjNcIn0uZmEtdGh1bWJzLXVwOmJlZm9yZXtjb250ZW50OlwiXFxmMTY0XCJ9LmZhLXRodW1icy1kb3duOmJlZm9yZXtjb250ZW50OlwiXFxmMTY1XCJ9LmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTY2XCJ9LmZhLXlvdXR1YmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNjdcIn0uZmEteGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjE2OFwifS5mYS14aW5nLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE2OVwifS5mYS15b3V0dWJlLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNmFcIn0uZmEtZHJvcGJveDpiZWZvcmV7Y29udGVudDpcIlxcZjE2YlwifS5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmV7Y29udGVudDpcIlxcZjE2Y1wifS5mYS1pbnN0YWdyYW06YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNmRcIn0uZmEtZmxpY2tyOmJlZm9yZXtjb250ZW50OlwiXFxmMTZlXCJ9LmZhLWFkbjpiZWZvcmV7Y29udGVudDpcIlxcZjE3MFwifS5mYS1iaXRidWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzFcIn0uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE3MlwifS5mYS10dW1ibHI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzNcIn0uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE3NFwifS5mYS1sb25nLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzVcIn0uZmEtbG9uZy1hcnJvdy11cDpiZWZvcmV7Y29udGVudDpcIlxcZjE3NlwifS5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxNzdcIn0uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcIlxcZjE3OFwifS5mYS1hcHBsZTpiZWZvcmV7Y29udGVudDpcIlxcZjE3OVwifS5mYS13aW5kb3dzOmJlZm9yZXtjb250ZW50OlwiXFxmMTdhXCJ9LmZhLWFuZHJvaWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxN2JcIn0uZmEtbGludXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxN2NcIn0uZmEtZHJpYmJibGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxN2RcIn0uZmEtc2t5cGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxN2VcIn0uZmEtZm91cnNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjE4MFwifS5mYS10cmVsbG86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODFcIn0uZmEtZmVtYWxlOmJlZm9yZXtjb250ZW50OlwiXFxmMTgyXCJ9LmZhLW1hbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODNcIn0uZmEtZ2l0dGlwOmJlZm9yZSwuZmEtZ3JhdGlwYXk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODRcIn0uZmEtc3VuLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODVcIn0uZmEtbW9vbi1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTg2XCJ9LmZhLWFyY2hpdmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxODdcIn0uZmEtYnVnOmJlZm9yZXtjb250ZW50OlwiXFxmMTg4XCJ9LmZhLXZrOmJlZm9yZXtjb250ZW50OlwiXFxmMTg5XCJ9LmZhLXdlaWJvOmJlZm9yZXtjb250ZW50OlwiXFxmMThhXCJ9LmZhLXJlbnJlbjpiZWZvcmV7Y29udGVudDpcIlxcZjE4YlwifS5mYS1wYWdlbGluZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOGNcIn0uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOGRcIn0uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOGVcIn0uZmEtYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmV7Y29udGVudDpcIlxcZjE5MFwifS5mYS10b2dnbGUtbGVmdDpiZWZvcmUsLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOTFcIn0uZmEtZG90LWNpcmNsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTkyXCJ9LmZhLXdoZWVsY2hhaXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOTNcIn0uZmEtdmltZW8tc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTk0XCJ9LmZhLXR1cmtpc2gtbGlyYTpiZWZvcmUsLmZhLXRyeTpiZWZvcmV7Y29udGVudDpcIlxcZjE5NVwifS5mYS1wbHVzLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMTk2XCJ9LmZhLXNwYWNlLXNodXR0bGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOTdcIn0uZmEtc2xhY2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOThcIn0uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMTk5XCJ9LmZhLXdvcmRwcmVzczpiZWZvcmV7Y29udGVudDpcIlxcZjE5YVwifS5mYS1vcGVuaWQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxOWJcIn0uZmEtaW5zdGl0dXRpb246YmVmb3JlLC5mYS1iYW5rOmJlZm9yZSwuZmEtdW5pdmVyc2l0eTpiZWZvcmV7Y29udGVudDpcIlxcZjE5Y1wifS5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLC5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmV7Y29udGVudDpcIlxcZjE5ZFwifS5mYS15YWhvbzpiZWZvcmV7Y29udGVudDpcIlxcZjE5ZVwifS5mYS1nb29nbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTBcIn0uZmEtcmVkZGl0OmJlZm9yZXtjb250ZW50OlwiXFxmMWExXCJ9LmZhLXJlZGRpdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTJcIn0uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMWEzXCJ9LmZhLXN0dW1ibGV1cG9uOmJlZm9yZXtjb250ZW50OlwiXFxmMWE0XCJ9LmZhLWRlbGljaW91czpiZWZvcmV7Y29udGVudDpcIlxcZjFhNVwifS5mYS1kaWdnOmJlZm9yZXtjb250ZW50OlwiXFxmMWE2XCJ9LmZhLXBpZWQtcGlwZXItcHA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYTdcIn0uZmEtcGllZC1waXBlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYThcIn0uZmEtZHJ1cGFsOmJlZm9yZXtjb250ZW50OlwiXFxmMWE5XCJ9LmZhLWpvb21sYTpiZWZvcmV7Y29udGVudDpcIlxcZjFhYVwifS5mYS1sYW5ndWFnZTpiZWZvcmV7Y29udGVudDpcIlxcZjFhYlwifS5mYS1mYXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWNcIn0uZmEtYnVpbGRpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWRcIn0uZmEtY2hpbGQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYWVcIn0uZmEtcGF3OmJlZm9yZXtjb250ZW50OlwiXFxmMWIwXCJ9LmZhLXNwb29uOmJlZm9yZXtjb250ZW50OlwiXFxmMWIxXCJ9LmZhLWN1YmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjJcIn0uZmEtY3ViZXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjNcIn0uZmEtYmVoYW5jZTpiZWZvcmV7Y29udGVudDpcIlxcZjFiNFwifS5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFiNVwifS5mYS1zdGVhbTpiZWZvcmV7Y29udGVudDpcIlxcZjFiNlwifS5mYS1zdGVhbS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYjdcIn0uZmEtcmVjeWNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjFiOFwifS5mYS1hdXRvbW9iaWxlOmJlZm9yZSwuZmEtY2FyOmJlZm9yZXtjb250ZW50OlwiXFxmMWI5XCJ9LmZhLWNhYjpiZWZvcmUsLmZhLXRheGk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYmFcIn0uZmEtdHJlZTpiZWZvcmV7Y29udGVudDpcIlxcZjFiYlwifS5mYS1zcG90aWZ5OmJlZm9yZXtjb250ZW50OlwiXFxmMWJjXCJ9LmZhLWRldmlhbnRhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYmRcIn0uZmEtc291bmRjbG91ZDpiZWZvcmV7Y29udGVudDpcIlxcZjFiZVwifS5mYS1kYXRhYmFzZTpiZWZvcmV7Y29udGVudDpcIlxcZjFjMFwifS5mYS1maWxlLXBkZi1vOmJlZm9yZXtjb250ZW50OlwiXFxmMWMxXCJ9LmZhLWZpbGUtd29yZC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMWMyXCJ9LmZhLWZpbGUtZXhjZWwtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjM1wifS5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjNFwifS5mYS1maWxlLXBob3RvLW86YmVmb3JlLC5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsLmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjNVwifS5mYS1maWxlLXppcC1vOmJlZm9yZSwuZmEtZmlsZS1hcmNoaXZlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxYzZcIn0uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSwuZmEtZmlsZS1hdWRpby1vOmJlZm9yZXtjb250ZW50OlwiXFxmMWM3XCJ9LmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjOFwifS5mYS1maWxlLWNvZGUtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFjOVwifS5mYS12aW5lOmJlZm9yZXtjb250ZW50OlwiXFxmMWNhXCJ9LmZhLWNvZGVwZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxY2JcIn0uZmEtanNmaWRkbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxY2NcIn0uZmEtbGlmZS1ib3V5OmJlZm9yZSwuZmEtbGlmZS1idW95OmJlZm9yZSwuZmEtbGlmZS1zYXZlcjpiZWZvcmUsLmZhLXN1cHBvcnQ6YmVmb3JlLC5mYS1saWZlLXJpbmc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxY2RcIn0uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxY2VcIn0uZmEtcmE6YmVmb3JlLC5mYS1yZXNpc3RhbmNlOmJlZm9yZSwuZmEtcmViZWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDBcIn0uZmEtZ2U6YmVmb3JlLC5mYS1lbXBpcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDFcIn0uZmEtZ2l0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFkMlwifS5mYS1naXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDNcIn0uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsLmZhLXljLXNxdWFyZTpiZWZvcmUsLmZhLWhhY2tlci1uZXdzOmJlZm9yZXtjb250ZW50OlwiXFxmMWQ0XCJ9LmZhLXRlbmNlbnQtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDVcIn0uZmEtcXE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZDZcIn0uZmEtd2VjaGF0OmJlZm9yZSwuZmEtd2VpeGluOmJlZm9yZXtjb250ZW50OlwiXFxmMWQ3XCJ9LmZhLXNlbmQ6YmVmb3JlLC5mYS1wYXBlci1wbGFuZTpiZWZvcmV7Y29udGVudDpcIlxcZjFkOFwifS5mYS1zZW5kLW86YmVmb3JlLC5mYS1wYXBlci1wbGFuZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMWQ5XCJ9LmZhLWhpc3Rvcnk6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZGFcIn0uZmEtY2lyY2xlLXRoaW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZGJcIn0uZmEtaGVhZGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMWRjXCJ9LmZhLXBhcmFncmFwaDpiZWZvcmV7Y29udGVudDpcIlxcZjFkZFwifS5mYS1zbGlkZXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMWRlXCJ9LmZhLXNoYXJlLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjFlMFwifS5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMWUxXCJ9LmZhLWJvbWI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTJcIn0uZmEtc29jY2VyLWJhbGwtbzpiZWZvcmUsLmZhLWZ1dGJvbC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMWUzXCJ9LmZhLXR0eTpiZWZvcmV7Y29udGVudDpcIlxcZjFlNFwifS5mYS1iaW5vY3VsYXJzOmJlZm9yZXtjb250ZW50OlwiXFxmMWU1XCJ9LmZhLXBsdWc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZTZcIn0uZmEtc2xpZGVzaGFyZTpiZWZvcmV7Y29udGVudDpcIlxcZjFlN1wifS5mYS10d2l0Y2g6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZThcIn0uZmEteWVscDpiZWZvcmV7Y29udGVudDpcIlxcZjFlOVwifS5mYS1uZXdzcGFwZXItbzpiZWZvcmV7Y29udGVudDpcIlxcZjFlYVwifS5mYS13aWZpOmJlZm9yZXtjb250ZW50OlwiXFxmMWViXCJ9LmZhLWNhbGN1bGF0b3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZWNcIn0uZmEtcGF5cGFsOmJlZm9yZXtjb250ZW50OlwiXFxmMWVkXCJ9LmZhLWdvb2dsZS13YWxsZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZWVcIn0uZmEtY2MtdmlzYTpiZWZvcmV7Y29udGVudDpcIlxcZjFmMFwifS5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZXtjb250ZW50OlwiXFxmMWYxXCJ9LmZhLWNjLWRpc2NvdmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMWYyXCJ9LmZhLWNjLWFtZXg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjNcIn0uZmEtY2MtcGF5cGFsOmJlZm9yZXtjb250ZW50OlwiXFxmMWY0XCJ9LmZhLWNjLXN0cmlwZTpiZWZvcmV7Y29udGVudDpcIlxcZjFmNVwifS5mYS1iZWxsLXNsYXNoOmJlZm9yZXtjb250ZW50OlwiXFxmMWY2XCJ9LmZhLWJlbGwtc2xhc2gtbzpiZWZvcmV7Y29udGVudDpcIlxcZjFmN1wifS5mYS10cmFzaDpiZWZvcmV7Y29udGVudDpcIlxcZjFmOFwifS5mYS1jb3B5cmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZjlcIn0uZmEtYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZmFcIn0uZmEtZXllZHJvcHBlcjpiZWZvcmV7Y29udGVudDpcIlxcZjFmYlwifS5mYS1wYWludC1icnVzaDpiZWZvcmV7Y29udGVudDpcIlxcZjFmY1wifS5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZXtjb250ZW50OlwiXFxmMWZkXCJ9LmZhLWFyZWEtY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYxZmVcIn0uZmEtcGllLWNoYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMjAwXCJ9LmZhLWxpbmUtY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDFcIn0uZmEtbGFzdGZtOmJlZm9yZXtjb250ZW50OlwiXFxmMjAyXCJ9LmZhLWxhc3RmbS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDNcIn0uZmEtdG9nZ2xlLW9mZjpiZWZvcmV7Y29udGVudDpcIlxcZjIwNFwifS5mYS10b2dnbGUtb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDVcIn0uZmEtYmljeWNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjIwNlwifS5mYS1idXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDdcIn0uZmEtaW94aG9zdDpiZWZvcmV7Y29udGVudDpcIlxcZjIwOFwifS5mYS1hbmdlbGxpc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMDlcIn0uZmEtY2M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMGFcIn0uZmEtc2hla2VsOmJlZm9yZSwuZmEtc2hlcWVsOmJlZm9yZSwuZmEtaWxzOmJlZm9yZXtjb250ZW50OlwiXFxmMjBiXCJ9LmZhLW1lYW5wYXRoOmJlZm9yZXtjb250ZW50OlwiXFxmMjBjXCJ9LmZhLWJ1eXNlbGxhZHM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMGRcIn0uZmEtY29ubmVjdGRldmVsb3A6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMGVcIn0uZmEtZGFzaGN1YmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTBcIn0uZmEtZm9ydW1iZWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTFcIn0uZmEtbGVhbnB1YjpiZWZvcmV7Y29udGVudDpcIlxcZjIxMlwifS5mYS1zZWxsc3k6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMTNcIn0uZmEtc2hpcnRzaW5idWxrOmJlZm9yZXtjb250ZW50OlwiXFxmMjE0XCJ9LmZhLXNpbXBseWJ1aWx0OmJlZm9yZXtjb250ZW50OlwiXFxmMjE1XCJ9LmZhLXNreWF0bGFzOmJlZm9yZXtjb250ZW50OlwiXFxmMjE2XCJ9LmZhLWNhcnQtcGx1czpiZWZvcmV7Y29udGVudDpcIlxcZjIxN1wifS5mYS1jYXJ0LWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMThcIn0uZmEtZGlhbW9uZDpiZWZvcmV7Y29udGVudDpcIlxcZjIxOVwifS5mYS1zaGlwOmJlZm9yZXtjb250ZW50OlwiXFxmMjFhXCJ9LmZhLXVzZXItc2VjcmV0OmJlZm9yZXtjb250ZW50OlwiXFxmMjFiXCJ9LmZhLW1vdG9yY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMWNcIn0uZmEtc3RyZWV0LXZpZXc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMWRcIn0uZmEtaGVhcnRiZWF0OmJlZm9yZXtjb250ZW50OlwiXFxmMjFlXCJ9LmZhLXZlbnVzOmJlZm9yZXtjb250ZW50OlwiXFxmMjIxXCJ9LmZhLW1hcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjJcIn0uZmEtbWVyY3VyeTpiZWZvcmV7Y29udGVudDpcIlxcZjIyM1wifS5mYS1pbnRlcnNleDpiZWZvcmUsLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjI0XCJ9LmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmV7Y29udGVudDpcIlxcZjIyNVwifS5mYS12ZW51cy1kb3VibGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjZcIn0uZmEtbWFycy1kb3VibGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMjdcIn0uZmEtdmVudXMtbWFyczpiZWZvcmV7Y29udGVudDpcIlxcZjIyOFwifS5mYS1tYXJzLXN0cm9rZTpiZWZvcmV7Y29udGVudDpcIlxcZjIyOVwifS5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZXtjb250ZW50OlwiXFxmMjJhXCJ9LmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMmJcIn0uZmEtbmV1dGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjJjXCJ9LmZhLWdlbmRlcmxlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMmRcIn0uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzBcIn0uZmEtcGludGVyZXN0LXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzFcIn0uZmEtd2hhdHNhcHA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzJcIn0uZmEtc2VydmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjMzXCJ9LmZhLXVzZXItcGx1czpiZWZvcmV7Y29udGVudDpcIlxcZjIzNFwifS5mYS11c2VyLXRpbWVzOmJlZm9yZXtjb250ZW50OlwiXFxmMjM1XCJ9LmZhLWhvdGVsOmJlZm9yZSwuZmEtYmVkOmJlZm9yZXtjb250ZW50OlwiXFxmMjM2XCJ9LmZhLXZpYWNvaW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzdcIn0uZmEtdHJhaW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYyMzhcIn0uZmEtc3Vid2F5OmJlZm9yZXtjb250ZW50OlwiXFxmMjM5XCJ9LmZhLW1lZGl1bTpiZWZvcmV7Y29udGVudDpcIlxcZjIzYVwifS5mYS15YzpiZWZvcmUsLmZhLXktY29tYmluYXRvcjpiZWZvcmV7Y29udGVudDpcIlxcZjIzYlwifS5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjNjXCJ9LmZhLW9wZW5jYXJ0OmJlZm9yZXtjb250ZW50OlwiXFxmMjNkXCJ9LmZhLWV4cGVkaXRlZHNzbDpiZWZvcmV7Y29udGVudDpcIlxcZjIzZVwifS5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLC5mYS1iYXR0ZXJ5OmJlZm9yZSwuZmEtYmF0dGVyeS1mdWxsOmJlZm9yZXtjb250ZW50OlwiXFxmMjQwXCJ9LmZhLWJhdHRlcnktMzpiZWZvcmUsLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDFcIn0uZmEtYmF0dGVyeS0yOmJlZm9yZSwuZmEtYmF0dGVyeS1oYWxmOmJlZm9yZXtjb250ZW50OlwiXFxmMjQyXCJ9LmZhLWJhdHRlcnktMTpiZWZvcmUsLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcIlxcZjI0M1wifS5mYS1iYXR0ZXJ5LTA6YmVmb3JlLC5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZXtjb250ZW50OlwiXFxmMjQ0XCJ9LmZhLW1vdXNlLXBvaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDVcIn0uZmEtaS1jdXJzb3I6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNDZcIn0uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ3XCJ9LmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ4XCJ9LmZhLXN0aWNreS1ub3RlOmJlZm9yZXtjb250ZW50OlwiXFxmMjQ5XCJ9LmZhLXN0aWNreS1ub3RlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNGFcIn0uZmEtY2MtamNiOmJlZm9yZXtjb250ZW50OlwiXFxmMjRiXCJ9LmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZXtjb250ZW50OlwiXFxmMjRjXCJ9LmZhLWNsb25lOmJlZm9yZXtjb250ZW50OlwiXFxmMjRkXCJ9LmZhLWJhbGFuY2Utc2NhbGU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNGVcIn0uZmEtaG91cmdsYXNzLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTBcIn0uZmEtaG91cmdsYXNzLTE6YmVmb3JlLC5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTFcIn0uZmEtaG91cmdsYXNzLTI6YmVmb3JlLC5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmV7Y29udGVudDpcIlxcZjI1MlwifS5mYS1ob3VyZ2xhc3MtMzpiZWZvcmUsLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTNcIn0uZmEtaG91cmdsYXNzOmJlZm9yZXtjb250ZW50OlwiXFxmMjU0XCJ9LmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSwuZmEtaGFuZC1yb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTVcIn0uZmEtaGFuZC1zdG9wLW86YmVmb3JlLC5mYS1oYW5kLXBhcGVyLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNTZcIn0uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjU3XCJ9LmZhLWhhbmQtbGl6YXJkLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNThcIn0uZmEtaGFuZC1zcG9jay1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjU5XCJ9LmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjVhXCJ9LmZhLWhhbmQtcGVhY2UtbzpiZWZvcmV7Y29udGVudDpcIlxcZjI1YlwifS5mYS10cmFkZW1hcms6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNWNcIn0uZmEtcmVnaXN0ZXJlZDpiZWZvcmV7Y29udGVudDpcIlxcZjI1ZFwifS5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZXtjb250ZW50OlwiXFxmMjVlXCJ9LmZhLWdnOmJlZm9yZXtjb250ZW50OlwiXFxmMjYwXCJ9LmZhLWdnLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIlxcZjI2MVwifS5mYS10cmlwYWR2aXNvcjpiZWZvcmV7Y29udGVudDpcIlxcZjI2MlwifS5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZXtjb250ZW50OlwiXFxmMjYzXCJ9LmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMjY0XCJ9LmZhLWdldC1wb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjVcIn0uZmEtd2lraXBlZGlhLXc6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNjZcIn0uZmEtc2FmYXJpOmJlZm9yZXtjb250ZW50OlwiXFxmMjY3XCJ9LmZhLWNocm9tZTpiZWZvcmV7Y29udGVudDpcIlxcZjI2OFwifS5mYS1maXJlZm94OmJlZm9yZXtjb250ZW50OlwiXFxmMjY5XCJ9LmZhLW9wZXJhOmJlZm9yZXtjb250ZW50OlwiXFxmMjZhXCJ9LmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjZiXCJ9LmZhLXR2OmJlZm9yZSwuZmEtdGVsZXZpc2lvbjpiZWZvcmV7Y29udGVudDpcIlxcZjI2Y1wifS5mYS1jb250YW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNmRcIn0uZmEtNTAwcHg6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNmVcIn0uZmEtYW1hem9uOmJlZm9yZXtjb250ZW50OlwiXFxmMjcwXCJ9LmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmV7Y29udGVudDpcIlxcZjI3MVwifS5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjcyXCJ9LmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNzNcIn0uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmV7Y29udGVudDpcIlxcZjI3NFwifS5mYS1pbmR1c3RyeTpiZWZvcmV7Y29udGVudDpcIlxcZjI3NVwifS5mYS1tYXAtcGluOmJlZm9yZXtjb250ZW50OlwiXFxmMjc2XCJ9LmZhLW1hcC1zaWduczpiZWZvcmV7Y29udGVudDpcIlxcZjI3N1wifS5mYS1tYXAtbzpiZWZvcmV7Y29udGVudDpcIlxcZjI3OFwifS5mYS1tYXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyNzlcIn0uZmEtY29tbWVudGluZzpiZWZvcmV7Y29udGVudDpcIlxcZjI3YVwifS5mYS1jb21tZW50aW5nLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2JcIn0uZmEtaG91eno6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2NcIn0uZmEtdmltZW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyN2RcIn0uZmEtYmxhY2stdGllOmJlZm9yZXtjb250ZW50OlwiXFxmMjdlXCJ9LmZhLWZvbnRpY29uczpiZWZvcmV7Y29udGVudDpcIlxcZjI4MFwifS5mYS1yZWRkaXQtYWxpZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODFcIn0uZmEtZWRnZTpiZWZvcmV7Y29udGVudDpcIlxcZjI4MlwifS5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODNcIn0uZmEtY29kaWVwaWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODRcIn0uZmEtbW9keDpiZWZvcmV7Y29udGVudDpcIlxcZjI4NVwifS5mYS1mb3J0LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyODZcIn0uZmEtdXNiOmJlZm9yZXtjb250ZW50OlwiXFxmMjg3XCJ9LmZhLXByb2R1Y3QtaHVudDpiZWZvcmV7Y29udGVudDpcIlxcZjI4OFwifS5mYS1taXhjbG91ZDpiZWZvcmV7Y29udGVudDpcIlxcZjI4OVwifS5mYS1zY3JpYmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOGFcIn0uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjhiXCJ9LmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMjhjXCJ9LmZhLXN0b3AtY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMjhkXCJ9LmZhLXN0b3AtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOGVcIn0uZmEtc2hvcHBpbmctYmFnOmJlZm9yZXtjb250ZW50OlwiXFxmMjkwXCJ9LmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmV7Y29udGVudDpcIlxcZjI5MVwifS5mYS1oYXNodGFnOmJlZm9yZXtjb250ZW50OlwiXFxmMjkyXCJ9LmZhLWJsdWV0b290aDpiZWZvcmV7Y29udGVudDpcIlxcZjI5M1wifS5mYS1ibHVldG9vdGgtYjpiZWZvcmV7Y29udGVudDpcIlxcZjI5NFwifS5mYS1wZXJjZW50OmJlZm9yZXtjb250ZW50OlwiXFxmMjk1XCJ9LmZhLWdpdGxhYjpiZWZvcmV7Y29udGVudDpcIlxcZjI5NlwifS5mYS13cGJlZ2lubmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMjk3XCJ9LmZhLXdwZm9ybXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOThcIn0uZmEtZW52aXJhOmJlZm9yZXtjb250ZW50OlwiXFxmMjk5XCJ9LmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWFcIn0uZmEtd2hlZWxjaGFpci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWJcIn0uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWNcIn0uZmEtYmxpbmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWRcIn0uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyOWVcIn0uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTBcIn0uZmEtYnJhaWxsZTpiZWZvcmV7Y29udGVudDpcIlxcZjJhMVwifS5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYTJcIn0uZmEtYXNsLWludGVycHJldGluZzpiZWZvcmUsLmZhLWFtZXJpY2FuLXNpZ24tbGFuZ3VhZ2UtaW50ZXJwcmV0aW5nOmJlZm9yZXtjb250ZW50OlwiXFxmMmEzXCJ9LmZhLWRlYWZuZXNzOmJlZm9yZSwuZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZSwuZmEtZGVhZjpiZWZvcmV7Y29udGVudDpcIlxcZjJhNFwifS5mYS1nbGlkZTpiZWZvcmV7Y29udGVudDpcIlxcZjJhNVwifS5mYS1nbGlkZS1nOmJlZm9yZXtjb250ZW50OlwiXFxmMmE2XCJ9LmZhLXNpZ25pbmc6YmVmb3JlLC5mYS1zaWduLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50OlwiXFxmMmE3XCJ9LmZhLWxvdy12aXNpb246YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYThcIn0uZmEtdmlhZGVvOmJlZm9yZXtjb250ZW50OlwiXFxmMmE5XCJ9LmZhLXZpYWRlby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWFcIn0uZmEtc25hcGNoYXQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWJcIn0uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWNcIn0uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZXtjb250ZW50OlwiXFxmMmFkXCJ9LmZhLXBpZWQtcGlwZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYWVcIn0uZmEtZmlyc3Qtb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjBcIn0uZmEteW9hc3Q6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjFcIn0uZmEtdGhlbWVpc2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMmIyXCJ9LmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsLmZhLWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZXtjb250ZW50OlwiXFxmMmIzXCJ9LmZhLWZhOmJlZm9yZSwuZmEtZm9udC1hd2Vzb21lOmJlZm9yZXtjb250ZW50OlwiXFxmMmI0XCJ9LmZhLWhhbmRzaGFrZS1vOmJlZm9yZXtjb250ZW50OlwiXFxmMmI1XCJ9LmZhLWVudmVsb3BlLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjZcIn0uZmEtZW52ZWxvcGUtb3Blbi1vOmJlZm9yZXtjb250ZW50OlwiXFxmMmI3XCJ9LmZhLWxpbm9kZTpiZWZvcmV7Y29udGVudDpcIlxcZjJiOFwifS5mYS1hZGRyZXNzLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYjlcIn0uZmEtYWRkcmVzcy1ib29rLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYmFcIn0uZmEtdmNhcmQ6YmVmb3JlLC5mYS1hZGRyZXNzLWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYmJcIn0uZmEtdmNhcmQtbzpiZWZvcmUsLmZhLWFkZHJlc3MtY2FyZC1vOmJlZm9yZXtjb250ZW50OlwiXFxmMmJjXCJ9LmZhLXVzZXItY2lyY2xlOmJlZm9yZXtjb250ZW50OlwiXFxmMmJkXCJ9LmZhLXVzZXItY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYmVcIn0uZmEtdXNlci1vOmJlZm9yZXtjb250ZW50OlwiXFxmMmMwXCJ9LmZhLWlkLWJhZGdlOmJlZm9yZXtjb250ZW50OlwiXFxmMmMxXCJ9LmZhLWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsLmZhLWlkLWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzJcIn0uZmEtZHJpdmVycy1saWNlbnNlLW86YmVmb3JlLC5mYS1pZC1jYXJkLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzNcIn0uZmEtcXVvcmE6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzRcIn0uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzVcIn0uZmEtdGVsZWdyYW06YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzZcIn0uZmEtdGhlcm1vbWV0ZXItNDpiZWZvcmUsLmZhLXRoZXJtb21ldGVyOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmV7Y29udGVudDpcIlxcZjJjN1wifS5mYS10aGVybW9tZXRlci0zOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzhcIn0uZmEtdGhlcm1vbWV0ZXItMjpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyYzlcIn0uZmEtdGhlcm1vbWV0ZXItMTpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyY2FcIn0uZmEtdGhlcm1vbWV0ZXItMDpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZXtjb250ZW50OlwiXFxmMmNiXCJ9LmZhLXNob3dlcjpiZWZvcmV7Y29udGVudDpcIlxcZjJjY1wifS5mYS1iYXRodHViOmJlZm9yZSwuZmEtczE1OmJlZm9yZSwuZmEtYmF0aDpiZWZvcmV7Y29udGVudDpcIlxcZjJjZFwifS5mYS1wb2RjYXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMmNlXCJ9LmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmV7Y29udGVudDpcIlxcZjJkMFwifS5mYS13aW5kb3ctbWluaW1pemU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDFcIn0uZmEtd2luZG93LXJlc3RvcmU6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDJcIn0uZmEtdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSwuZmEtd2luZG93LWNsb3NlOmJlZm9yZXtjb250ZW50OlwiXFxmMmQzXCJ9LmZhLXRpbWVzLXJlY3RhbmdsZS1vOmJlZm9yZSwuZmEtd2luZG93LWNsb3NlLW86YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDRcIn0uZmEtYmFuZGNhbXA6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDVcIn0uZmEtZ3JhdjpiZWZvcmV7Y29udGVudDpcIlxcZjJkNlwifS5mYS1ldHN5OmJlZm9yZXtjb250ZW50OlwiXFxmMmQ3XCJ9LmZhLWltZGI6YmVmb3Jle2NvbnRlbnQ6XCJcXGYyZDhcIn0uZmEtcmF2ZWxyeTpiZWZvcmV7Y29udGVudDpcIlxcZjJkOVwifS5mYS1lZXJjYXN0OmJlZm9yZXtjb250ZW50OlwiXFxmMmRhXCJ9LmZhLW1pY3JvY2hpcDpiZWZvcmV7Y29udGVudDpcIlxcZjJkYlwifS5mYS1zbm93Zmxha2UtbzpiZWZvcmV7Y29udGVudDpcIlxcZjJkY1wifS5mYS1zdXBlcnBvd2VyczpiZWZvcmV7Y29udGVudDpcIlxcZjJkZFwifS5mYS13cGV4cGxvcmVyOmJlZm9yZXtjb250ZW50OlwiXFxmMmRlXCJ9LmZhLW1lZXR1cDpiZWZvcmV7Y29udGVudDpcIlxcZjJlMFwifS5zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsIDAsIDAsIDApO2JvcmRlcjowfS5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsLnNyLW9ubHktZm9jdXNhYmxlOmZvY3Vze3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDphdXRvO2hlaWdodDphdXRvO21hcmdpbjowO292ZXJmbG93OnZpc2libGU7Y2xpcDphdXRvfVxuIl19 */"

/***/ }),

/***/ "./src/app/trips/triplist/triplist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/trips/triplist/triplist.component.ts ***!
  \******************************************************/
/*! exports provided: TriplistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriplistComponent", function() { return TriplistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _trip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trip.service */ "./src/app/trips/trip.service.ts");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/trip */ "./src/app/trips/models/trip.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TriplistComponent = (function () {
    function TriplistComponent(tripService) {
        this.tripService = tripService;
        this.trips = [];
        this.trip = new _models_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"]();
        this.page = 1;
        this.isEmpty = false;
    }
    TriplistComponent.prototype.ngOnInit = function () {
        this.loadTrips();
    };
    TriplistComponent.prototype.loadTrips = function () {
        var _this = this;
        this.tripService.getTrips(this.page)
            .subscribe(function (resp) { return _this.onSuccess(resp); });
    };
    TriplistComponent.prototype.onscroll = function () {
        if (this.bottomReached() && !this.isEmpty) {
            this.page += 1;
            this.loadTrips();
        }
    };
    TriplistComponent.prototype.bottomReached = function () {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    };
    TriplistComponent.prototype.onSuccess = function (res) {
        var _this = this;
        console.log(res);
        if (res != undefined && res.length != 0) {
            res.forEach(function (item) {
                _this.trips.push(item);
            });
        }
        else {
            this.isEmpty = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TriplistComponent.prototype, "onscroll", null);
    TriplistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-triplist',
            template: __webpack_require__(/*! ./triplist.component.html */ "./src/app/trips/triplist/triplist.component.html"),
            styles: [__webpack_require__(/*! ./triplist.component.scss */ "./src/app/trips/triplist/triplist.component.scss")]
        }),
        __metadata("design:paramtypes", [_trip_service__WEBPACK_IMPORTED_MODULE_1__["TripService"]])
    ], TriplistComponent);
    return TriplistComponent;
}());



/***/ }),

/***/ "./src/app/trips/trips.module.ts":
/*!***************************************!*\
  !*** ./src/app/trips/trips.module.ts ***!
  \***************************************/
/*! exports provided: TripsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsModule", function() { return TripsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _triplist_triplist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triplist/triplist.component */ "./src/app/trips/triplist/triplist.component.ts");
/* harmony import */ var _fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fulltrip/fulltrip.component */ "./src/app/trips/fulltrip/fulltrip.component.ts");
/* harmony import */ var _trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trip.service */ "./src/app/trips/trip.service.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TripsModule = (function () {
    function TripsModule() {
    }
    TripsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_triplist_triplist_component__WEBPACK_IMPORTED_MODULE_2__["TriplistComponent"], _fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_3__["FulltripComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ],
            exports: [_triplist_triplist_component__WEBPACK_IMPORTED_MODULE_2__["TriplistComponent"], _fulltrip_fulltrip_component__WEBPACK_IMPORTED_MODULE_3__["FulltripComponent"]],
            providers: [_trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"]]
        })
    ], TripsModule);
    return TripsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\адмін\Desktop\github\TravelingBlog\TravelingBlog.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map