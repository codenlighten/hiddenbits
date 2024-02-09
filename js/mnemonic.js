var bsvMnemonic = (function (e) {
  var t = {};
  function r(i) {
    if (t[i]) return t[i].exports;
    var n = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 77))
  );
})([
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        })
      : (e.exports = function (e, t) {
          e.super_ = t;
          var r = function () {};
          (r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e);
        });
  },
  function (e, t, r) {
    var i = r(2),
      n = i.Buffer;
    function a(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return n(e, t, r);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (e.exports = i)
      : (a(i, t), (t.Buffer = o)),
      (o.prototype = Object.create(n.prototype)),
      a(n, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return n(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = n(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? i.fill(t, r)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var i = r(80),
        n = r(81),
        a = r(40);
      function o() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, t) {
        if (o() < t) throw new RangeError("Invalid typed array length");
        return (
          c.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = c.prototype)
            : (null === e && (e = new c(t)), (e.length = t)),
          e
        );
      }
      function c(e, t, r) {
        if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
          return new c(e, t, r);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return d(this, e);
        }
        return f(this, e, t, r);
      }
      function f(e, t, r, i) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, i) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (i || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === r && void 0 === i
                  ? new Uint8Array(t)
                  : void 0 === i
                  ? new Uint8Array(t, r)
                  : new Uint8Array(t, r, i);
              c.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = c.prototype)
                : (e = l(e, t));
              return e;
            })(e, t, r, i)
          : "string" == typeof t
          ? (function (e, t, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!c.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var i = 0 | p(t, r),
                n = (e = s(e, i)).write(t, r);
              n !== i && (e = e.slice(0, n));
              return e;
            })(e, t, r)
          : (function (e, t) {
              if (c.isBuffer(t)) {
                var r = 0 | h(t.length);
                return 0 === (e = s(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (i = t.length) != i
                    ? s(e, 0)
                    : l(e, t);
                if ("Buffer" === t.type && a(t.data)) return l(e, t.data);
              }
              var i;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function d(e, t) {
        if ((u(t), (e = s(e, t < 0 ? 0 : 0 | h(t))), !c.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function l(e, t) {
        var r = t.length < 0 ? 0 : 0 | h(t.length);
        e = s(e, r);
        for (var i = 0; i < r; i += 1) e[i] = 255 & t[i];
        return e;
      }
      function h(e) {
        if (e >= o())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              o().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function p(e, t) {
        if (c.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;
        for (var i = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return L(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return F(e).length;
            default:
              if (i) return L(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function b(e, t, r) {
        var i = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return j(this, t, r);
            case "utf8":
            case "utf-8":
              return E(this, t, r);
            case "ascii":
              return z(this, t, r);
            case "latin1":
            case "binary":
              return B(this, t, r);
            case "base64":
              return x(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, t, r);
            default:
              if (i) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (i = !0);
          }
      }
      function m(e, t, r) {
        var i = e[t];
        (e[t] = e[r]), (e[r] = i);
      }
      function g(e, t, r, i, n) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((i = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = n ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (n) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!n) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = c.from(t, i)), c.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, i, n);
        if ("number" == typeof t)
          return (
            (t &= 255),
            c.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? n
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : v(e, [t], r, i, n)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(e, t, r, i, n) {
        var a,
          o = 1,
          s = e.length,
          c = t.length;
        if (
          void 0 !== i &&
          ("ucs2" === (i = String(i).toLowerCase()) ||
            "ucs-2" === i ||
            "utf16le" === i ||
            "utf-16le" === i)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (o = 2), (s /= 2), (c /= 2), (r /= 2);
        }
        function f(e, t) {
          return 1 === o ? e[t] : e.readUInt16BE(t * o);
        }
        if (n) {
          var u = -1;
          for (a = r; a < s; a++)
            if (f(e, a) === f(t, -1 === u ? 0 : a - u)) {
              if ((-1 === u && (u = a), a - u + 1 === c)) return u * o;
            } else -1 !== u && (a -= a - u), (u = -1);
        } else
          for (r + c > s && (r = s - c), a = r; a >= 0; a--) {
            for (var d = !0, l = 0; l < c; l++)
              if (f(e, a + l) !== f(t, l)) {
                d = !1;
                break;
              }
            if (d) return a;
          }
        return -1;
      }
      function y(e, t, r, i) {
        r = Number(r) || 0;
        var n = e.length - r;
        i ? (i = Number(i)) > n && (i = n) : (i = n);
        var a = t.length;
        if (a % 2 != 0) throw new TypeError("Invalid hex string");
        i > a / 2 && (i = a / 2);
        for (var o = 0; o < i; ++o) {
          var s = parseInt(t.substr(2 * o, 2), 16);
          if (isNaN(s)) return o;
          e[r + o] = s;
        }
        return o;
      }
      function w(e, t, r, i) {
        return K(L(t, e.length - r), e, r, i);
      }
      function _(e, t, r, i) {
        return K(
          (function (e) {
            for (var t = [], r = 0; r < e.length; ++r)
              t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          i
        );
      }
      function S(e, t, r, i) {
        return _(e, t, r, i);
      }
      function k(e, t, r, i) {
        return K(F(t), e, r, i);
      }
      function M(e, t, r, i) {
        return K(
          (function (e, t) {
            for (
              var r, i, n, a = [], o = 0;
              o < e.length && !((t -= 2) < 0);
              ++o
            )
              (r = e.charCodeAt(o)),
                (i = r >> 8),
                (n = r % 256),
                a.push(n),
                a.push(i);
            return a;
          })(t, e.length - r),
          e,
          r,
          i
        );
      }
      function x(e, t, r) {
        return 0 === t && r === e.length
          ? i.fromByteArray(e)
          : i.fromByteArray(e.slice(t, r));
      }
      function E(e, t, r) {
        r = Math.min(e.length, r);
        for (var i = [], n = t; n < r; ) {
          var a,
            o,
            s,
            c,
            f = e[n],
            u = null,
            d = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
          if (n + d <= r)
            switch (d) {
              case 1:
                f < 128 && (u = f);
                break;
              case 2:
                128 == (192 & (a = e[n + 1])) &&
                  (c = ((31 & f) << 6) | (63 & a)) > 127 &&
                  (u = c);
                break;
              case 3:
                (a = e[n + 1]),
                  (o = e[n + 2]),
                  128 == (192 & a) &&
                    128 == (192 & o) &&
                    (c = ((15 & f) << 12) | ((63 & a) << 6) | (63 & o)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (u = c);
                break;
              case 4:
                (a = e[n + 1]),
                  (o = e[n + 2]),
                  (s = e[n + 3]),
                  128 == (192 & a) &&
                    128 == (192 & o) &&
                    128 == (192 & s) &&
                    (c =
                      ((15 & f) << 18) |
                      ((63 & a) << 12) |
                      ((63 & o) << 6) |
                      (63 & s)) > 65535 &&
                    c < 1114112 &&
                    (u = c);
            }
          null === u
            ? ((u = 65533), (d = 1))
            : u > 65535 &&
              ((u -= 65536),
              i.push(((u >>> 10) & 1023) | 55296),
              (u = 56320 | (1023 & u))),
            i.push(u),
            (n += d);
        }
        return (function (e) {
          var t = e.length;
          if (t <= A) return String.fromCharCode.apply(String, e);
          var r = "",
            i = 0;
          for (; i < t; )
            r += String.fromCharCode.apply(String, e.slice(i, (i += A)));
          return r;
        })(i);
      }
      (t.Buffer = c),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return c.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (c.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = o()),
        (c.poolSize = 8192),
        (c._augment = function (e) {
          return (e.__proto__ = c.prototype), e;
        }),
        (c.from = function (e, t, r) {
          return f(null, e, t, r);
        }),
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (c.alloc = function (e, t, r) {
          return (function (e, t, r, i) {
            return (
              u(t),
              t <= 0
                ? s(e, t)
                : void 0 !== r
                ? "string" == typeof i
                  ? s(e, t).fill(r, i)
                  : s(e, t).fill(r)
                : s(e, t)
            );
          })(null, e, t, r);
        }),
        (c.allocUnsafe = function (e) {
          return d(null, e);
        }),
        (c.allocUnsafeSlow = function (e) {
          return d(null, e);
        }),
        (c.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (c.compare = function (e, t) {
          if (!c.isBuffer(e) || !c.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var r = e.length, i = t.length, n = 0, a = Math.min(r, i);
            n < a;
            ++n
          )
            if (e[n] !== t[n]) {
              (r = e[n]), (i = t[n]);
              break;
            }
          return r < i ? -1 : i < r ? 1 : 0;
        }),
        (c.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (c.concat = function (e, t) {
          if (!a(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return c.alloc(0);
          var r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var i = c.allocUnsafe(t),
            n = 0;
          for (r = 0; r < e.length; ++r) {
            var o = e[r];
            if (!c.isBuffer(o))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            o.copy(i, n), (n += o.length);
          }
          return i;
        }),
        (c.byteLength = p),
        (c.prototype._isBuffer = !0),
        (c.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) m(this, t, t + 1);
          return this;
        }),
        (c.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            m(this, t, t + 3), m(this, t + 1, t + 2);
          return this;
        }),
        (c.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            m(this, t, t + 7),
              m(this, t + 1, t + 6),
              m(this, t + 2, t + 5),
              m(this, t + 3, t + 4);
          return this;
        }),
        (c.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? E(this, 0, e)
            : b.apply(this, arguments);
        }),
        (c.prototype.equals = function (e) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === c.compare(this, e);
        }),
        (c.prototype.inspect = function () {
          var e = "",
            r = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (c.prototype.compare = function (e, t, r, i, n) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = this.length),
            t < 0 || r > e.length || i < 0 || n > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= n && t >= r) return 0;
          if (i >= n) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          for (
            var a = (n >>>= 0) - (i >>>= 0),
              o = (r >>>= 0) - (t >>>= 0),
              s = Math.min(a, o),
              f = this.slice(i, n),
              u = e.slice(t, r),
              d = 0;
            d < s;
            ++d
          )
            if (f[d] !== u[d]) {
              (a = f[d]), (o = u[d]);
              break;
            }
          return a < o ? -1 : o < a ? 1 : 0;
        }),
        (c.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (c.prototype.indexOf = function (e, t, r) {
          return g(this, e, t, r, !0);
        }),
        (c.prototype.lastIndexOf = function (e, t, r) {
          return g(this, e, t, r, !1);
        }),
        (c.prototype.write = function (e, t, r, i) {
          if (void 0 === t) (i = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (i = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === i && (i = "utf8"))
                : ((i = r), (r = void 0));
          }
          var n = this.length - t;
          if (
            ((void 0 === r || r > n) && (r = n),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          for (var a = !1; ; )
            switch (i) {
              case "hex":
                return y(this, e, t, r);
              case "utf8":
              case "utf-8":
                return w(this, e, t, r);
              case "ascii":
                return _(this, e, t, r);
              case "latin1":
              case "binary":
                return S(this, e, t, r);
              case "base64":
                return k(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return M(this, e, t, r);
              default:
                if (a) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (a = !0);
            }
        }),
        (c.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var A = 4096;
      function z(e, t, r) {
        var i = "";
        r = Math.min(e.length, r);
        for (var n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
        return i;
      }
      function B(e, t, r) {
        var i = "";
        r = Math.min(e.length, r);
        for (var n = t; n < r; ++n) i += String.fromCharCode(e[n]);
        return i;
      }
      function j(e, t, r) {
        var i = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
        for (var n = "", a = t; a < r; ++a) n += N(e[a]);
        return n;
      }
      function I(e, t, r) {
        for (var i = e.slice(t, r), n = "", a = 0; a < i.length; a += 2)
          n += String.fromCharCode(i[a] + 256 * i[a + 1]);
        return n;
      }
      function R(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function C(e, t, r, i, n, a) {
        if (!c.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > n || t < a)
          throw new RangeError('"value" argument is out of bounds');
        if (r + i > e.length) throw new RangeError("Index out of range");
      }
      function q(e, t, r, i) {
        t < 0 && (t = 65535 + t + 1);
        for (var n = 0, a = Math.min(e.length - r, 2); n < a; ++n)
          e[r + n] =
            (t & (255 << (8 * (i ? n : 1 - n)))) >>> (8 * (i ? n : 1 - n));
      }
      function T(e, t, r, i) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var n = 0, a = Math.min(e.length - r, 4); n < a; ++n)
          e[r + n] = (t >>> (8 * (i ? n : 3 - n))) & 255;
      }
      function P(e, t, r, i, n, a) {
        if (r + i > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function O(e, t, r, i, a) {
        return a || P(e, 0, r, 4), n.write(e, t, r, i, 23, 4), r + 4;
      }
      function D(e, t, r, i, a) {
        return a || P(e, 0, r, 8), n.write(e, t, r, i, 52, 8), r + 8;
      }
      (c.prototype.slice = function (e, t) {
        var r,
          i = this.length;
        if (
          ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
          (t = void 0 === t ? i : ~~t) < 0
            ? (t += i) < 0 && (t = 0)
            : t > i && (t = i),
          t < e && (t = e),
          c.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(e, t)).__proto__ = c.prototype;
        else {
          var n = t - e;
          r = new c(n, void 0);
          for (var a = 0; a < n; ++a) r[a] = this[a + e];
        }
        return r;
      }),
        (c.prototype.readUIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || R(e, t, this.length);
          for (var i = this[e], n = 1, a = 0; ++a < t && (n *= 256); )
            i += this[e + a] * n;
          return i;
        }),
        (c.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || R(e, t, this.length);
          for (var i = this[e + --t], n = 1; t > 0 && (n *= 256); )
            i += this[e + --t] * n;
          return i;
        }),
        (c.prototype.readUInt8 = function (e, t) {
          return t || R(e, 1, this.length), this[e];
        }),
        (c.prototype.readUInt16LE = function (e, t) {
          return t || R(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (c.prototype.readUInt16BE = function (e, t) {
          return t || R(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (c.prototype.readUInt32LE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (c.prototype.readUInt32BE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (c.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || R(e, t, this.length);
          for (var i = this[e], n = 1, a = 0; ++a < t && (n *= 256); )
            i += this[e + a] * n;
          return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (c.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || R(e, t, this.length);
          for (var i = t, n = 1, a = this[e + --i]; i > 0 && (n *= 256); )
            a += this[e + --i] * n;
          return a >= (n *= 128) && (a -= Math.pow(2, 8 * t)), a;
        }),
        (c.prototype.readInt8 = function (e, t) {
          return (
            t || R(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (c.prototype.readInt16LE = function (e, t) {
          t || R(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (c.prototype.readInt16BE = function (e, t) {
          t || R(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (c.prototype.readInt32LE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (c.prototype.readInt32BE = function (e, t) {
          return (
            t || R(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (c.prototype.readFloatLE = function (e, t) {
          return t || R(e, 4, this.length), n.read(this, e, !0, 23, 4);
        }),
        (c.prototype.readFloatBE = function (e, t) {
          return t || R(e, 4, this.length), n.read(this, e, !1, 23, 4);
        }),
        (c.prototype.readDoubleLE = function (e, t) {
          return t || R(e, 8, this.length), n.read(this, e, !0, 52, 8);
        }),
        (c.prototype.readDoubleBE = function (e, t) {
          return t || R(e, 8, this.length), n.read(this, e, !1, 52, 8);
        }),
        (c.prototype.writeUIntLE = function (e, t, r, i) {
          ((e = +e), (t |= 0), (r |= 0), i) ||
            C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var n = 1,
            a = 0;
          for (this[t] = 255 & e; ++a < r && (n *= 256); )
            this[t + a] = (e / n) & 255;
          return t + r;
        }),
        (c.prototype.writeUIntBE = function (e, t, r, i) {
          ((e = +e), (t |= 0), (r |= 0), i) ||
            C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var n = r - 1,
            a = 1;
          for (this[t + n] = 255 & e; --n >= 0 && (a *= 256); )
            this[t + n] = (e / a) & 255;
          return t + r;
        }),
        (c.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : q(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : q(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : T(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : T(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeIntLE = function (e, t, r, i) {
          if (((e = +e), (t |= 0), !i)) {
            var n = Math.pow(2, 8 * r - 1);
            C(this, e, t, r, n - 1, -n);
          }
          var a = 0,
            o = 1,
            s = 0;
          for (this[t] = 255 & e; ++a < r && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
              (this[t + a] = (((e / o) >> 0) - s) & 255);
          return t + r;
        }),
        (c.prototype.writeIntBE = function (e, t, r, i) {
          if (((e = +e), (t |= 0), !i)) {
            var n = Math.pow(2, 8 * r - 1);
            C(this, e, t, r, n - 1, -n);
          }
          var a = r - 1,
            o = 1,
            s = 0;
          for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
              (this[t + a] = (((e / o) >> 0) - s) & 255);
          return t + r;
        }),
        (c.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (c.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : q(this, e, t, !0),
            t + 2
          );
        }),
        (c.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : q(this, e, t, !1),
            t + 2
          );
        }),
        (c.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : T(this, e, t, !0),
            t + 4
          );
        }),
        (c.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || C(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : T(this, e, t, !1),
            t + 4
          );
        }),
        (c.prototype.writeFloatLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }),
        (c.prototype.writeFloatBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }),
        (c.prototype.writeDoubleLE = function (e, t, r) {
          return D(this, e, t, !0, r);
        }),
        (c.prototype.writeDoubleBE = function (e, t, r) {
          return D(this, e, t, !1, r);
        }),
        (c.prototype.copy = function (e, t, r, i) {
          if (
            (r || (r = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < r && (i = r),
            i === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            e.length - t < i - r && (i = e.length - t + r);
          var n,
            a = i - r;
          if (this === e && r < t && t < i)
            for (n = a - 1; n >= 0; --n) e[n + t] = this[n + r];
          else if (a < 1e3 || !c.TYPED_ARRAY_SUPPORT)
            for (n = 0; n < a; ++n) e[n + t] = this[n + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
          return a;
        }),
        (c.prototype.fill = function (e, t, r, i) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((i = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((i = r), (r = this.length)),
              1 === e.length)
            ) {
              var n = e.charCodeAt(0);
              n < 256 && (e = n);
            }
            if (void 0 !== i && "string" != typeof i)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !c.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          var a;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (a = t; a < r; ++a) this[a] = e;
          else {
            var o = c.isBuffer(e) ? e : L(new c(e, i).toString()),
              s = o.length;
            for (a = 0; a < r - t; ++a) this[a + t] = o[a % s];
          }
          return this;
        });
      var U = /[^+\/0-9A-Za-z-_]/g;
      function N(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function L(e, t) {
        var r;
        t = t || 1 / 0;
        for (var i = e.length, n = null, a = [], o = 0; o < i; ++o) {
          if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
            if (!n) {
              if (r > 56319) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              if (o + 1 === i) {
                (t -= 3) > -1 && a.push(239, 191, 189);
                continue;
              }
              n = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && a.push(239, 191, 189), (n = r);
              continue;
            }
            r = 65536 + (((n - 55296) << 10) | (r - 56320));
          } else n && (t -= 3) > -1 && a.push(239, 191, 189);
          if (((n = null), r < 128)) {
            if ((t -= 1) < 0) break;
            a.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            a.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            a.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            a.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return a;
      }
      function F(e) {
        return i.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(U, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function K(e, t, r, i) {
        for (var n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n)
          t[n + r] = e[n];
        return n;
      }
    }).call(this, r(7));
  },
  function (e, t, r) {
    (function (e) {
      !(function (e, t) {
        "use strict";
        function i(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }
        function n(e, t) {
          e.super_ = t;
          var r = function () {};
          (r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e);
        }
        function a(e, t, r) {
          if (a.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
              this._init(e || 0, t || 10, r || "be"));
        }
        var o;
        "object" == typeof e ? (e.exports = a) : (t.BN = a),
          (a.BN = a),
          (a.wordSize = 26);
        try {
          o = r(123).Buffer;
        } catch (e) {}
        function s(e, t, r) {
          for (var i = 0, n = Math.min(e.length, r), a = t; a < n; a++) {
            var o = e.charCodeAt(a) - 48;
            (i <<= 4),
              (i |=
                o >= 49 && o <= 54
                  ? o - 49 + 10
                  : o >= 17 && o <= 22
                  ? o - 17 + 10
                  : 15 & o);
          }
          return i;
        }
        function c(e, t, r, i) {
          for (var n = 0, a = Math.min(e.length, r), o = t; o < a; o++) {
            var s = e.charCodeAt(o) - 48;
            (n *= i), (n += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
          }
          return n;
        }
        (a.isBN = function (e) {
          return (
            e instanceof a ||
            (null !== e &&
              "object" == typeof e &&
              e.constructor.wordSize === a.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (a.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
          }),
          (a.min = function (e, t) {
            return e.cmp(t) < 0 ? e : t;
          }),
          (a.prototype._init = function (e, t, r) {
            if ("number" == typeof e) return this._initNumber(e, t, r);
            if ("object" == typeof e) return this._initArray(e, t, r);
            "hex" === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36);
            var n = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && n++,
              16 === t ? this._parseHex(e, n) : this._parseBase(e, t, n),
              "-" === e[0] && (this.negative = 1),
              this.strip(),
              "le" === r && this._initArray(this.toArray(), t, r);
          }),
          (a.prototype._initNumber = function (e, t, r) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), t, r);
          }),
          (a.prototype._initArray = function (e, t, r) {
            if ((i("number" == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var a,
              o,
              s = 0;
            if ("be" === r)
              for (n = e.length - 1, a = 0; n >= 0; n -= 3)
                (o = e[n] | (e[n - 1] << 8) | (e[n - 2] << 16)),
                  (this.words[a] |= (o << s) & 67108863),
                  (this.words[a + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), a++);
            else if ("le" === r)
              for (n = 0, a = 0; n < e.length; n += 3)
                (o = e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)),
                  (this.words[a] |= (o << s) & 67108863),
                  (this.words[a + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), a++);
            return this.strip();
          }),
          (a.prototype._parseHex = function (e, t) {
            (this.length = Math.ceil((e.length - t) / 6)),
              (this.words = new Array(this.length));
            for (var r = 0; r < this.length; r++) this.words[r] = 0;
            var i,
              n,
              a = 0;
            for (r = e.length - 6, i = 0; r >= t; r -= 6)
              (n = s(e, r, r + 6)),
                (this.words[i] |= (n << a) & 67108863),
                (this.words[i + 1] |= (n >>> (26 - a)) & 4194303),
                (a += 24) >= 26 && ((a -= 26), i++);
            r + 6 !== t &&
              ((n = s(e, t, r + 6)),
              (this.words[i] |= (n << a) & 67108863),
              (this.words[i + 1] |= (n >>> (26 - a)) & 4194303)),
              this.strip();
          }),
          (a.prototype._parseBase = function (e, t, r) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
            i--, (n = (n / t) | 0);
            for (
              var a = e.length - r,
                o = a % i,
                s = Math.min(a, a - o) + r,
                f = 0,
                u = r;
              u < s;
              u += i
            )
              (f = c(e, u, u + i, t)),
                this.imuln(n),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== o) {
              var d = 1;
              for (f = c(e, u, e.length, t), u = 0; u < o; u++) d *= t;
              this.imuln(d),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
          }),
          (a.prototype.copy = function (e) {
            e.words = new Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (a.prototype.clone = function () {
            var e = new a(null);
            return this.copy(e), e;
          }),
          (a.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (a.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (a.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (a.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var f = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          u = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          d = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function l(e, t, r) {
          r.negative = t.negative ^ e.negative;
          var i = (e.length + t.length) | 0;
          (r.length = i), (i = (i - 1) | 0);
          var n = 0 | e.words[0],
            a = 0 | t.words[0],
            o = n * a,
            s = 67108863 & o,
            c = (o / 67108864) | 0;
          r.words[0] = s;
          for (var f = 1; f < i; f++) {
            for (
              var u = c >>> 26,
                d = 67108863 & c,
                l = Math.min(f, t.length - 1),
                h = Math.max(0, f - e.length + 1);
              h <= l;
              h++
            ) {
              var p = (f - h) | 0;
              (u +=
                ((o = (n = 0 | e.words[p]) * (a = 0 | t.words[h]) + d) /
                  67108864) |
                0),
                (d = 67108863 & o);
            }
            (r.words[f] = 0 | d), (c = 0 | u);
          }
          return 0 !== c ? (r.words[f] = 0 | c) : r.length--, r.strip();
        }
        (a.prototype.toString = function (e, t) {
          var r;
          if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
            r = "";
            for (var n = 0, a = 0, o = 0; o < this.length; o++) {
              var s = this.words[o],
                c = (16777215 & ((s << n) | a)).toString(16);
              (r =
                0 !== (a = (s >>> (24 - n)) & 16777215) || o !== this.length - 1
                  ? f[6 - c.length] + c + r
                  : c + r),
                (n += 2) >= 26 && ((n -= 26), o--);
            }
            for (0 !== a && (r = a.toString(16) + r); r.length % t != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var l = u[e],
              h = d[e];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(h).toString(e);
              r = (p = p.idivn(h)).isZero() ? b + r : f[l - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % t != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (a.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            );
          }),
          (a.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (a.prototype.toBuffer = function (e, t) {
            return i(void 0 !== o), this.toArrayLike(o, e, t);
          }),
          (a.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
          }),
          (a.prototype.toArrayLike = function (e, t, r) {
            var n = this.byteLength(),
              a = r || Math.max(1, n);
            i(n <= a, "byte array longer than desired length"),
              i(a > 0, "Requested array length <= 0"),
              this.strip();
            var o,
              s,
              c = "le" === t,
              f = new e(a),
              u = this.clone();
            if (c) {
              for (s = 0; !u.isZero(); s++)
                (o = u.andln(255)), u.iushrn(8), (f[s] = o);
              for (; s < a; s++) f[s] = 0;
            } else {
              for (s = 0; s < a - n; s++) f[s] = 0;
              for (s = 0; !u.isZero(); s++)
                (o = u.andln(255)), u.iushrn(8), (f[a - s - 1] = o);
            }
            return f;
          }),
          Math.clz32
            ? (a.prototype._countBits = function (e) {
                return 32 - Math.clz32(e);
              })
            : (a.prototype._countBits = function (e) {
                var t = e,
                  r = 0;
                return (
                  t >= 4096 && ((r += 13), (t >>>= 13)),
                  t >= 64 && ((r += 7), (t >>>= 7)),
                  t >= 8 && ((r += 4), (t >>>= 4)),
                  t >= 2 && ((r += 2), (t >>>= 2)),
                  r + t
                );
              }),
          (a.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
              r = 0;
            return (
              0 == (8191 & t) && ((r += 13), (t >>>= 13)),
              0 == (127 & t) && ((r += 7), (t >>>= 7)),
              0 == (15 & t) && ((r += 4), (t >>>= 4)),
              0 == (3 & t) && ((r += 2), (t >>>= 2)),
              0 == (1 & t) && r++,
              r
            );
          }),
          (a.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              t = this._countBits(e);
            return 26 * (this.length - 1) + t;
          }),
          (a.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
              var r = this._zeroBits(this.words[t]);
              if (((e += r), 26 !== r)) break;
            }
            return e;
          }),
          (a.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (a.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (a.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (a.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (a.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (a.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (a.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++)
              this.words[t] = this.words[t] | e.words[t];
            return this.strip();
          }),
          (a.prototype.ior = function (e) {
            return i(0 == (this.negative | e.negative)), this.iuor(e);
          }),
          (a.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (a.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (a.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] & e.words[r];
            return (this.length = t.length), this.strip();
          }),
          (a.prototype.iand = function (e) {
            return i(0 == (this.negative | e.negative)), this.iuand(e);
          }),
          (a.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (a.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (a.prototype.iuxor = function (e) {
            var t, r;
            this.length > e.length
              ? ((t = this), (r = e))
              : ((t = e), (r = this));
            for (var i = 0; i < r.length; i++)
              this.words[i] = t.words[i] ^ r.words[i];
            if (this !== t)
              for (; i < t.length; i++) this.words[i] = t.words[i];
            return (this.length = t.length), this.strip();
          }),
          (a.prototype.ixor = function (e) {
            return i(0 == (this.negative | e.negative)), this.iuxor(e);
          }),
          (a.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (a.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (a.prototype.inotn = function (e) {
            i("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
              r = e % 26;
            this._expand(t), r > 0 && t--;
            for (var n = 0; n < t; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (a.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (a.prototype.setn = function (e, t) {
            i("number" == typeof e && e >= 0);
            var r = (e / 26) | 0,
              n = e % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = t
                ? this.words[r] | (1 << n)
                : this.words[r] & ~(1 << n)),
              this.strip()
            );
          }),
          (a.prototype.iadd = function (e) {
            var t, r, i;
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (t = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (t = this.isub(e)),
                (e.negative = 1),
                t._normSign()
              );
            this.length > e.length
              ? ((r = this), (i = e))
              : ((r = e), (i = this));
            for (var n = 0, a = 0; a < i.length; a++)
              (t = (0 | r.words[a]) + (0 | i.words[a]) + n),
                (this.words[a] = 67108863 & t),
                (n = t >>> 26);
            for (; 0 !== n && a < r.length; a++)
              (t = (0 | r.words[a]) + n),
                (this.words[a] = 67108863 & t),
                (n = t >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return this;
          }),
          (a.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (a.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var t = this.iadd(e);
              return (e.negative = 1), t._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              i,
              n = this.cmp(e);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((r = this), (i = e)) : ((r = e), (i = this));
            for (var a = 0, o = 0; o < i.length; o++)
              (a = (t = (0 | r.words[o]) - (0 | i.words[o]) + a) >> 26),
                (this.words[o] = 67108863 & t);
            for (; 0 !== a && o < r.length; o++)
              (a = (t = (0 | r.words[o]) + a) >> 26),
                (this.words[o] = 67108863 & t);
            if (0 === a && o < r.length && r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return (
              (this.length = Math.max(this.length, o)),
              r !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (a.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var h = function (e, t, r) {
          var i,
            n,
            a,
            o = e.words,
            s = t.words,
            c = r.words,
            f = 0,
            u = 0 | o[0],
            d = 8191 & u,
            l = u >>> 13,
            h = 0 | o[1],
            p = 8191 & h,
            b = h >>> 13,
            m = 0 | o[2],
            g = 8191 & m,
            v = m >>> 13,
            y = 0 | o[3],
            w = 8191 & y,
            _ = y >>> 13,
            S = 0 | o[4],
            k = 8191 & S,
            M = S >>> 13,
            x = 0 | o[5],
            E = 8191 & x,
            A = x >>> 13,
            z = 0 | o[6],
            B = 8191 & z,
            j = z >>> 13,
            I = 0 | o[7],
            R = 8191 & I,
            C = I >>> 13,
            q = 0 | o[8],
            T = 8191 & q,
            P = q >>> 13,
            O = 0 | o[9],
            D = 8191 & O,
            U = O >>> 13,
            N = 0 | s[0],
            L = 8191 & N,
            F = N >>> 13,
            K = 0 | s[1],
            H = 8191 & K,
            W = K >>> 13,
            Y = 0 | s[2],
            V = 8191 & Y,
            X = Y >>> 13,
            G = 0 | s[3],
            J = 8191 & G,
            Z = G >>> 13,
            $ = 0 | s[4],
            Q = 8191 & $,
            ee = $ >>> 13,
            te = 0 | s[5],
            re = 8191 & te,
            ie = te >>> 13,
            ne = 0 | s[6],
            ae = 8191 & ne,
            oe = ne >>> 13,
            se = 0 | s[7],
            ce = 8191 & se,
            fe = se >>> 13,
            ue = 0 | s[8],
            de = 8191 & ue,
            le = ue >>> 13,
            he = 0 | s[9],
            pe = 8191 & he,
            be = he >>> 13;
          (r.negative = e.negative ^ t.negative), (r.length = 19);
          var me =
            (((f + (i = Math.imul(d, L))) | 0) +
              ((8191 & (n = ((n = Math.imul(d, F)) + Math.imul(l, L)) | 0)) <<
                13)) |
            0;
          (f = ((((a = Math.imul(l, F)) + (n >>> 13)) | 0) + (me >>> 26)) | 0),
            (me &= 67108863),
            (i = Math.imul(p, L)),
            (n = ((n = Math.imul(p, F)) + Math.imul(b, L)) | 0),
            (a = Math.imul(b, F));
          var ge =
            (((f + (i = (i + Math.imul(d, H)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, W)) | 0) + Math.imul(l, H)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, W)) | 0) + (n >>> 13)) | 0) +
              (ge >>> 26)) |
            0),
            (ge &= 67108863),
            (i = Math.imul(g, L)),
            (n = ((n = Math.imul(g, F)) + Math.imul(v, L)) | 0),
            (a = Math.imul(v, F)),
            (i = (i + Math.imul(p, H)) | 0),
            (n = ((n = (n + Math.imul(p, W)) | 0) + Math.imul(b, H)) | 0),
            (a = (a + Math.imul(b, W)) | 0);
          var ve =
            (((f + (i = (i + Math.imul(d, V)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, X)) | 0) + Math.imul(l, V)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, X)) | 0) + (n >>> 13)) | 0) +
              (ve >>> 26)) |
            0),
            (ve &= 67108863),
            (i = Math.imul(w, L)),
            (n = ((n = Math.imul(w, F)) + Math.imul(_, L)) | 0),
            (a = Math.imul(_, F)),
            (i = (i + Math.imul(g, H)) | 0),
            (n = ((n = (n + Math.imul(g, W)) | 0) + Math.imul(v, H)) | 0),
            (a = (a + Math.imul(v, W)) | 0),
            (i = (i + Math.imul(p, V)) | 0),
            (n = ((n = (n + Math.imul(p, X)) | 0) + Math.imul(b, V)) | 0),
            (a = (a + Math.imul(b, X)) | 0);
          var ye =
            (((f + (i = (i + Math.imul(d, J)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, Z)) | 0) + Math.imul(l, J)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, Z)) | 0) + (n >>> 13)) | 0) +
              (ye >>> 26)) |
            0),
            (ye &= 67108863),
            (i = Math.imul(k, L)),
            (n = ((n = Math.imul(k, F)) + Math.imul(M, L)) | 0),
            (a = Math.imul(M, F)),
            (i = (i + Math.imul(w, H)) | 0),
            (n = ((n = (n + Math.imul(w, W)) | 0) + Math.imul(_, H)) | 0),
            (a = (a + Math.imul(_, W)) | 0),
            (i = (i + Math.imul(g, V)) | 0),
            (n = ((n = (n + Math.imul(g, X)) | 0) + Math.imul(v, V)) | 0),
            (a = (a + Math.imul(v, X)) | 0),
            (i = (i + Math.imul(p, J)) | 0),
            (n = ((n = (n + Math.imul(p, Z)) | 0) + Math.imul(b, J)) | 0),
            (a = (a + Math.imul(b, Z)) | 0);
          var we =
            (((f + (i = (i + Math.imul(d, Q)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ee)) | 0) + Math.imul(l, Q)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, ee)) | 0) + (n >>> 13)) | 0) +
              (we >>> 26)) |
            0),
            (we &= 67108863),
            (i = Math.imul(E, L)),
            (n = ((n = Math.imul(E, F)) + Math.imul(A, L)) | 0),
            (a = Math.imul(A, F)),
            (i = (i + Math.imul(k, H)) | 0),
            (n = ((n = (n + Math.imul(k, W)) | 0) + Math.imul(M, H)) | 0),
            (a = (a + Math.imul(M, W)) | 0),
            (i = (i + Math.imul(w, V)) | 0),
            (n = ((n = (n + Math.imul(w, X)) | 0) + Math.imul(_, V)) | 0),
            (a = (a + Math.imul(_, X)) | 0),
            (i = (i + Math.imul(g, J)) | 0),
            (n = ((n = (n + Math.imul(g, Z)) | 0) + Math.imul(v, J)) | 0),
            (a = (a + Math.imul(v, Z)) | 0),
            (i = (i + Math.imul(p, Q)) | 0),
            (n = ((n = (n + Math.imul(p, ee)) | 0) + Math.imul(b, Q)) | 0),
            (a = (a + Math.imul(b, ee)) | 0);
          var _e =
            (((f + (i = (i + Math.imul(d, re)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ie)) | 0) + Math.imul(l, re)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, ie)) | 0) + (n >>> 13)) | 0) +
              (_e >>> 26)) |
            0),
            (_e &= 67108863),
            (i = Math.imul(B, L)),
            (n = ((n = Math.imul(B, F)) + Math.imul(j, L)) | 0),
            (a = Math.imul(j, F)),
            (i = (i + Math.imul(E, H)) | 0),
            (n = ((n = (n + Math.imul(E, W)) | 0) + Math.imul(A, H)) | 0),
            (a = (a + Math.imul(A, W)) | 0),
            (i = (i + Math.imul(k, V)) | 0),
            (n = ((n = (n + Math.imul(k, X)) | 0) + Math.imul(M, V)) | 0),
            (a = (a + Math.imul(M, X)) | 0),
            (i = (i + Math.imul(w, J)) | 0),
            (n = ((n = (n + Math.imul(w, Z)) | 0) + Math.imul(_, J)) | 0),
            (a = (a + Math.imul(_, Z)) | 0),
            (i = (i + Math.imul(g, Q)) | 0),
            (n = ((n = (n + Math.imul(g, ee)) | 0) + Math.imul(v, Q)) | 0),
            (a = (a + Math.imul(v, ee)) | 0),
            (i = (i + Math.imul(p, re)) | 0),
            (n = ((n = (n + Math.imul(p, ie)) | 0) + Math.imul(b, re)) | 0),
            (a = (a + Math.imul(b, ie)) | 0);
          var Se =
            (((f + (i = (i + Math.imul(d, ae)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, oe)) | 0) + Math.imul(l, ae)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, oe)) | 0) + (n >>> 13)) | 0) +
              (Se >>> 26)) |
            0),
            (Se &= 67108863),
            (i = Math.imul(R, L)),
            (n = ((n = Math.imul(R, F)) + Math.imul(C, L)) | 0),
            (a = Math.imul(C, F)),
            (i = (i + Math.imul(B, H)) | 0),
            (n = ((n = (n + Math.imul(B, W)) | 0) + Math.imul(j, H)) | 0),
            (a = (a + Math.imul(j, W)) | 0),
            (i = (i + Math.imul(E, V)) | 0),
            (n = ((n = (n + Math.imul(E, X)) | 0) + Math.imul(A, V)) | 0),
            (a = (a + Math.imul(A, X)) | 0),
            (i = (i + Math.imul(k, J)) | 0),
            (n = ((n = (n + Math.imul(k, Z)) | 0) + Math.imul(M, J)) | 0),
            (a = (a + Math.imul(M, Z)) | 0),
            (i = (i + Math.imul(w, Q)) | 0),
            (n = ((n = (n + Math.imul(w, ee)) | 0) + Math.imul(_, Q)) | 0),
            (a = (a + Math.imul(_, ee)) | 0),
            (i = (i + Math.imul(g, re)) | 0),
            (n = ((n = (n + Math.imul(g, ie)) | 0) + Math.imul(v, re)) | 0),
            (a = (a + Math.imul(v, ie)) | 0),
            (i = (i + Math.imul(p, ae)) | 0),
            (n = ((n = (n + Math.imul(p, oe)) | 0) + Math.imul(b, ae)) | 0),
            (a = (a + Math.imul(b, oe)) | 0);
          var ke =
            (((f + (i = (i + Math.imul(d, ce)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, fe)) | 0) + Math.imul(l, ce)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, fe)) | 0) + (n >>> 13)) | 0) +
              (ke >>> 26)) |
            0),
            (ke &= 67108863),
            (i = Math.imul(T, L)),
            (n = ((n = Math.imul(T, F)) + Math.imul(P, L)) | 0),
            (a = Math.imul(P, F)),
            (i = (i + Math.imul(R, H)) | 0),
            (n = ((n = (n + Math.imul(R, W)) | 0) + Math.imul(C, H)) | 0),
            (a = (a + Math.imul(C, W)) | 0),
            (i = (i + Math.imul(B, V)) | 0),
            (n = ((n = (n + Math.imul(B, X)) | 0) + Math.imul(j, V)) | 0),
            (a = (a + Math.imul(j, X)) | 0),
            (i = (i + Math.imul(E, J)) | 0),
            (n = ((n = (n + Math.imul(E, Z)) | 0) + Math.imul(A, J)) | 0),
            (a = (a + Math.imul(A, Z)) | 0),
            (i = (i + Math.imul(k, Q)) | 0),
            (n = ((n = (n + Math.imul(k, ee)) | 0) + Math.imul(M, Q)) | 0),
            (a = (a + Math.imul(M, ee)) | 0),
            (i = (i + Math.imul(w, re)) | 0),
            (n = ((n = (n + Math.imul(w, ie)) | 0) + Math.imul(_, re)) | 0),
            (a = (a + Math.imul(_, ie)) | 0),
            (i = (i + Math.imul(g, ae)) | 0),
            (n = ((n = (n + Math.imul(g, oe)) | 0) + Math.imul(v, ae)) | 0),
            (a = (a + Math.imul(v, oe)) | 0),
            (i = (i + Math.imul(p, ce)) | 0),
            (n = ((n = (n + Math.imul(p, fe)) | 0) + Math.imul(b, ce)) | 0),
            (a = (a + Math.imul(b, fe)) | 0);
          var Me =
            (((f + (i = (i + Math.imul(d, de)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, le)) | 0) + Math.imul(l, de)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, le)) | 0) + (n >>> 13)) | 0) +
              (Me >>> 26)) |
            0),
            (Me &= 67108863),
            (i = Math.imul(D, L)),
            (n = ((n = Math.imul(D, F)) + Math.imul(U, L)) | 0),
            (a = Math.imul(U, F)),
            (i = (i + Math.imul(T, H)) | 0),
            (n = ((n = (n + Math.imul(T, W)) | 0) + Math.imul(P, H)) | 0),
            (a = (a + Math.imul(P, W)) | 0),
            (i = (i + Math.imul(R, V)) | 0),
            (n = ((n = (n + Math.imul(R, X)) | 0) + Math.imul(C, V)) | 0),
            (a = (a + Math.imul(C, X)) | 0),
            (i = (i + Math.imul(B, J)) | 0),
            (n = ((n = (n + Math.imul(B, Z)) | 0) + Math.imul(j, J)) | 0),
            (a = (a + Math.imul(j, Z)) | 0),
            (i = (i + Math.imul(E, Q)) | 0),
            (n = ((n = (n + Math.imul(E, ee)) | 0) + Math.imul(A, Q)) | 0),
            (a = (a + Math.imul(A, ee)) | 0),
            (i = (i + Math.imul(k, re)) | 0),
            (n = ((n = (n + Math.imul(k, ie)) | 0) + Math.imul(M, re)) | 0),
            (a = (a + Math.imul(M, ie)) | 0),
            (i = (i + Math.imul(w, ae)) | 0),
            (n = ((n = (n + Math.imul(w, oe)) | 0) + Math.imul(_, ae)) | 0),
            (a = (a + Math.imul(_, oe)) | 0),
            (i = (i + Math.imul(g, ce)) | 0),
            (n = ((n = (n + Math.imul(g, fe)) | 0) + Math.imul(v, ce)) | 0),
            (a = (a + Math.imul(v, fe)) | 0),
            (i = (i + Math.imul(p, de)) | 0),
            (n = ((n = (n + Math.imul(p, le)) | 0) + Math.imul(b, de)) | 0),
            (a = (a + Math.imul(b, le)) | 0);
          var xe =
            (((f + (i = (i + Math.imul(d, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, be)) | 0) + Math.imul(l, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(l, be)) | 0) + (n >>> 13)) | 0) +
              (xe >>> 26)) |
            0),
            (xe &= 67108863),
            (i = Math.imul(D, H)),
            (n = ((n = Math.imul(D, W)) + Math.imul(U, H)) | 0),
            (a = Math.imul(U, W)),
            (i = (i + Math.imul(T, V)) | 0),
            (n = ((n = (n + Math.imul(T, X)) | 0) + Math.imul(P, V)) | 0),
            (a = (a + Math.imul(P, X)) | 0),
            (i = (i + Math.imul(R, J)) | 0),
            (n = ((n = (n + Math.imul(R, Z)) | 0) + Math.imul(C, J)) | 0),
            (a = (a + Math.imul(C, Z)) | 0),
            (i = (i + Math.imul(B, Q)) | 0),
            (n = ((n = (n + Math.imul(B, ee)) | 0) + Math.imul(j, Q)) | 0),
            (a = (a + Math.imul(j, ee)) | 0),
            (i = (i + Math.imul(E, re)) | 0),
            (n = ((n = (n + Math.imul(E, ie)) | 0) + Math.imul(A, re)) | 0),
            (a = (a + Math.imul(A, ie)) | 0),
            (i = (i + Math.imul(k, ae)) | 0),
            (n = ((n = (n + Math.imul(k, oe)) | 0) + Math.imul(M, ae)) | 0),
            (a = (a + Math.imul(M, oe)) | 0),
            (i = (i + Math.imul(w, ce)) | 0),
            (n = ((n = (n + Math.imul(w, fe)) | 0) + Math.imul(_, ce)) | 0),
            (a = (a + Math.imul(_, fe)) | 0),
            (i = (i + Math.imul(g, de)) | 0),
            (n = ((n = (n + Math.imul(g, le)) | 0) + Math.imul(v, de)) | 0),
            (a = (a + Math.imul(v, le)) | 0);
          var Ee =
            (((f + (i = (i + Math.imul(p, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, be)) | 0) + Math.imul(b, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(b, be)) | 0) + (n >>> 13)) | 0) +
              (Ee >>> 26)) |
            0),
            (Ee &= 67108863),
            (i = Math.imul(D, V)),
            (n = ((n = Math.imul(D, X)) + Math.imul(U, V)) | 0),
            (a = Math.imul(U, X)),
            (i = (i + Math.imul(T, J)) | 0),
            (n = ((n = (n + Math.imul(T, Z)) | 0) + Math.imul(P, J)) | 0),
            (a = (a + Math.imul(P, Z)) | 0),
            (i = (i + Math.imul(R, Q)) | 0),
            (n = ((n = (n + Math.imul(R, ee)) | 0) + Math.imul(C, Q)) | 0),
            (a = (a + Math.imul(C, ee)) | 0),
            (i = (i + Math.imul(B, re)) | 0),
            (n = ((n = (n + Math.imul(B, ie)) | 0) + Math.imul(j, re)) | 0),
            (a = (a + Math.imul(j, ie)) | 0),
            (i = (i + Math.imul(E, ae)) | 0),
            (n = ((n = (n + Math.imul(E, oe)) | 0) + Math.imul(A, ae)) | 0),
            (a = (a + Math.imul(A, oe)) | 0),
            (i = (i + Math.imul(k, ce)) | 0),
            (n = ((n = (n + Math.imul(k, fe)) | 0) + Math.imul(M, ce)) | 0),
            (a = (a + Math.imul(M, fe)) | 0),
            (i = (i + Math.imul(w, de)) | 0),
            (n = ((n = (n + Math.imul(w, le)) | 0) + Math.imul(_, de)) | 0),
            (a = (a + Math.imul(_, le)) | 0);
          var Ae =
            (((f + (i = (i + Math.imul(g, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(g, be)) | 0) + Math.imul(v, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(v, be)) | 0) + (n >>> 13)) | 0) +
              (Ae >>> 26)) |
            0),
            (Ae &= 67108863),
            (i = Math.imul(D, J)),
            (n = ((n = Math.imul(D, Z)) + Math.imul(U, J)) | 0),
            (a = Math.imul(U, Z)),
            (i = (i + Math.imul(T, Q)) | 0),
            (n = ((n = (n + Math.imul(T, ee)) | 0) + Math.imul(P, Q)) | 0),
            (a = (a + Math.imul(P, ee)) | 0),
            (i = (i + Math.imul(R, re)) | 0),
            (n = ((n = (n + Math.imul(R, ie)) | 0) + Math.imul(C, re)) | 0),
            (a = (a + Math.imul(C, ie)) | 0),
            (i = (i + Math.imul(B, ae)) | 0),
            (n = ((n = (n + Math.imul(B, oe)) | 0) + Math.imul(j, ae)) | 0),
            (a = (a + Math.imul(j, oe)) | 0),
            (i = (i + Math.imul(E, ce)) | 0),
            (n = ((n = (n + Math.imul(E, fe)) | 0) + Math.imul(A, ce)) | 0),
            (a = (a + Math.imul(A, fe)) | 0),
            (i = (i + Math.imul(k, de)) | 0),
            (n = ((n = (n + Math.imul(k, le)) | 0) + Math.imul(M, de)) | 0),
            (a = (a + Math.imul(M, le)) | 0);
          var ze =
            (((f + (i = (i + Math.imul(w, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, be)) | 0) + Math.imul(_, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(_, be)) | 0) + (n >>> 13)) | 0) +
              (ze >>> 26)) |
            0),
            (ze &= 67108863),
            (i = Math.imul(D, Q)),
            (n = ((n = Math.imul(D, ee)) + Math.imul(U, Q)) | 0),
            (a = Math.imul(U, ee)),
            (i = (i + Math.imul(T, re)) | 0),
            (n = ((n = (n + Math.imul(T, ie)) | 0) + Math.imul(P, re)) | 0),
            (a = (a + Math.imul(P, ie)) | 0),
            (i = (i + Math.imul(R, ae)) | 0),
            (n = ((n = (n + Math.imul(R, oe)) | 0) + Math.imul(C, ae)) | 0),
            (a = (a + Math.imul(C, oe)) | 0),
            (i = (i + Math.imul(B, ce)) | 0),
            (n = ((n = (n + Math.imul(B, fe)) | 0) + Math.imul(j, ce)) | 0),
            (a = (a + Math.imul(j, fe)) | 0),
            (i = (i + Math.imul(E, de)) | 0),
            (n = ((n = (n + Math.imul(E, le)) | 0) + Math.imul(A, de)) | 0),
            (a = (a + Math.imul(A, le)) | 0);
          var Be =
            (((f + (i = (i + Math.imul(k, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(k, be)) | 0) + Math.imul(M, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(M, be)) | 0) + (n >>> 13)) | 0) +
              (Be >>> 26)) |
            0),
            (Be &= 67108863),
            (i = Math.imul(D, re)),
            (n = ((n = Math.imul(D, ie)) + Math.imul(U, re)) | 0),
            (a = Math.imul(U, ie)),
            (i = (i + Math.imul(T, ae)) | 0),
            (n = ((n = (n + Math.imul(T, oe)) | 0) + Math.imul(P, ae)) | 0),
            (a = (a + Math.imul(P, oe)) | 0),
            (i = (i + Math.imul(R, ce)) | 0),
            (n = ((n = (n + Math.imul(R, fe)) | 0) + Math.imul(C, ce)) | 0),
            (a = (a + Math.imul(C, fe)) | 0),
            (i = (i + Math.imul(B, de)) | 0),
            (n = ((n = (n + Math.imul(B, le)) | 0) + Math.imul(j, de)) | 0),
            (a = (a + Math.imul(j, le)) | 0);
          var je =
            (((f + (i = (i + Math.imul(E, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(E, be)) | 0) + Math.imul(A, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(A, be)) | 0) + (n >>> 13)) | 0) +
              (je >>> 26)) |
            0),
            (je &= 67108863),
            (i = Math.imul(D, ae)),
            (n = ((n = Math.imul(D, oe)) + Math.imul(U, ae)) | 0),
            (a = Math.imul(U, oe)),
            (i = (i + Math.imul(T, ce)) | 0),
            (n = ((n = (n + Math.imul(T, fe)) | 0) + Math.imul(P, ce)) | 0),
            (a = (a + Math.imul(P, fe)) | 0),
            (i = (i + Math.imul(R, de)) | 0),
            (n = ((n = (n + Math.imul(R, le)) | 0) + Math.imul(C, de)) | 0),
            (a = (a + Math.imul(C, le)) | 0);
          var Ie =
            (((f + (i = (i + Math.imul(B, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, be)) | 0) + Math.imul(j, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(j, be)) | 0) + (n >>> 13)) | 0) +
              (Ie >>> 26)) |
            0),
            (Ie &= 67108863),
            (i = Math.imul(D, ce)),
            (n = ((n = Math.imul(D, fe)) + Math.imul(U, ce)) | 0),
            (a = Math.imul(U, fe)),
            (i = (i + Math.imul(T, de)) | 0),
            (n = ((n = (n + Math.imul(T, le)) | 0) + Math.imul(P, de)) | 0),
            (a = (a + Math.imul(P, le)) | 0);
          var Re =
            (((f + (i = (i + Math.imul(R, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(R, be)) | 0) + Math.imul(C, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(C, be)) | 0) + (n >>> 13)) | 0) +
              (Re >>> 26)) |
            0),
            (Re &= 67108863),
            (i = Math.imul(D, de)),
            (n = ((n = Math.imul(D, le)) + Math.imul(U, de)) | 0),
            (a = Math.imul(U, le));
          var Ce =
            (((f + (i = (i + Math.imul(T, pe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(T, be)) | 0) + Math.imul(P, pe)) | 0)) <<
                13)) |
            0;
          (f =
            ((((a = (a + Math.imul(P, be)) | 0) + (n >>> 13)) | 0) +
              (Ce >>> 26)) |
            0),
            (Ce &= 67108863);
          var qe =
            (((f + (i = Math.imul(D, pe))) | 0) +
              ((8191 & (n = ((n = Math.imul(D, be)) + Math.imul(U, pe)) | 0)) <<
                13)) |
            0;
          return (
            (f =
              ((((a = Math.imul(U, be)) + (n >>> 13)) | 0) + (qe >>> 26)) | 0),
            (qe &= 67108863),
            (c[0] = me),
            (c[1] = ge),
            (c[2] = ve),
            (c[3] = ye),
            (c[4] = we),
            (c[5] = _e),
            (c[6] = Se),
            (c[7] = ke),
            (c[8] = Me),
            (c[9] = xe),
            (c[10] = Ee),
            (c[11] = Ae),
            (c[12] = ze),
            (c[13] = Be),
            (c[14] = je),
            (c[15] = Ie),
            (c[16] = Re),
            (c[17] = Ce),
            (c[18] = qe),
            0 !== f && ((c[19] = f), r.length++),
            r
          );
        };
        function p(e, t, r) {
          return new b().mulp(e, t, r);
        }
        function b(e, t) {
          (this.x = e), (this.y = t);
        }
        Math.imul || (h = l),
          (a.prototype.mulTo = function (e, t) {
            var r = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? h(this, e, t)
              : r < 63
              ? l(this, e, t)
              : r < 1024
              ? (function (e, t, r) {
                  (r.negative = t.negative ^ e.negative),
                    (r.length = e.length + t.length);
                  for (var i = 0, n = 0, a = 0; a < r.length - 1; a++) {
                    var o = n;
                    n = 0;
                    for (
                      var s = 67108863 & i,
                        c = Math.min(a, t.length - 1),
                        f = Math.max(0, a - e.length + 1);
                      f <= c;
                      f++
                    ) {
                      var u = a - f,
                        d = (0 | e.words[u]) * (0 | t.words[f]),
                        l = 67108863 & d;
                      (s = 67108863 & (l = (l + s) | 0)),
                        (n +=
                          (o =
                            ((o = (o + ((d / 67108864) | 0)) | 0) +
                              (l >>> 26)) |
                            0) >>> 26),
                        (o &= 67108863);
                    }
                    (r.words[a] = s), (i = o), (o = n);
                  }
                  return 0 !== i ? (r.words[a] = i) : r.length--, r.strip();
                })(this, e, t)
              : p(this, e, t);
          }),
          (b.prototype.makeRBT = function (e) {
            for (
              var t = new Array(e), r = a.prototype._countBits(e) - 1, i = 0;
              i < e;
              i++
            )
              t[i] = this.revBin(i, r, e);
            return t;
          }),
          (b.prototype.revBin = function (e, t, r) {
            if (0 === e || e === r - 1) return e;
            for (var i = 0, n = 0; n < t; n++)
              (i |= (1 & e) << (t - n - 1)), (e >>= 1);
            return i;
          }),
          (b.prototype.permute = function (e, t, r, i, n, a) {
            for (var o = 0; o < a; o++) (i[o] = t[e[o]]), (n[o] = r[e[o]]);
          }),
          (b.prototype.transform = function (e, t, r, i, n, a) {
            this.permute(a, e, t, r, i, n);
            for (var o = 1; o < n; o <<= 1)
              for (
                var s = o << 1,
                  c = Math.cos((2 * Math.PI) / s),
                  f = Math.sin((2 * Math.PI) / s),
                  u = 0;
                u < n;
                u += s
              )
                for (var d = c, l = f, h = 0; h < o; h++) {
                  var p = r[u + h],
                    b = i[u + h],
                    m = r[u + h + o],
                    g = i[u + h + o],
                    v = d * m - l * g;
                  (g = d * g + l * m),
                    (m = v),
                    (r[u + h] = p + m),
                    (i[u + h] = b + g),
                    (r[u + h + o] = p - m),
                    (i[u + h + o] = b - g),
                    h !== s &&
                      ((v = c * d - f * l), (l = c * l + f * d), (d = v));
                }
          }),
          (b.prototype.guessLen13b = function (e, t) {
            var r = 1 | Math.max(t, e),
              i = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + i);
          }),
          (b.prototype.conjugate = function (e, t, r) {
            if (!(r <= 1))
              for (var i = 0; i < r / 2; i++) {
                var n = e[i];
                (e[i] = e[r - i - 1]),
                  (e[r - i - 1] = n),
                  (n = t[i]),
                  (t[i] = -t[r - i - 1]),
                  (t[r - i - 1] = -n);
              }
          }),
          (b.prototype.normalize13b = function (e, t) {
            for (var r = 0, i = 0; i < t / 2; i++) {
              var n =
                8192 * Math.round(e[2 * i + 1] / t) +
                Math.round(e[2 * i] / t) +
                r;
              (e[i] = 67108863 & n),
                (r = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return e;
          }),
          (b.prototype.convert13b = function (e, t, r, n) {
            for (var a = 0, o = 0; o < t; o++)
              (a += 0 | e[o]),
                (r[2 * o] = 8191 & a),
                (a >>>= 13),
                (r[2 * o + 1] = 8191 & a),
                (a >>>= 13);
            for (o = 2 * t; o < n; ++o) r[o] = 0;
            i(0 === a), i(0 == (-8192 & a));
          }),
          (b.prototype.stub = function (e) {
            for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
            return t;
          }),
          (b.prototype.mulp = function (e, t, r) {
            var i = 2 * this.guessLen13b(e.length, t.length),
              n = this.makeRBT(i),
              a = this.stub(i),
              o = new Array(i),
              s = new Array(i),
              c = new Array(i),
              f = new Array(i),
              u = new Array(i),
              d = new Array(i),
              l = r.words;
            (l.length = i),
              this.convert13b(e.words, e.length, o, i),
              this.convert13b(t.words, t.length, f, i),
              this.transform(o, a, s, c, i, n),
              this.transform(f, a, u, d, i, n);
            for (var h = 0; h < i; h++) {
              var p = s[h] * u[h] - c[h] * d[h];
              (c[h] = s[h] * d[h] + c[h] * u[h]), (s[h] = p);
            }
            return (
              this.conjugate(s, c, i),
              this.transform(s, c, l, a, i, n),
              this.conjugate(l, a, i),
              this.normalize13b(l, i),
              (r.negative = e.negative ^ t.negative),
              (r.length = e.length + t.length),
              r.strip()
            );
          }),
          (a.prototype.mul = function (e) {
            var t = new a(null);
            return (
              (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
            );
          }),
          (a.prototype.mulf = function (e) {
            var t = new a(null);
            return (t.words = new Array(this.length + e.length)), p(this, e, t);
          }),
          (a.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (a.prototype.imuln = function (e) {
            i("number" == typeof e), i(e < 67108864);
            for (var t = 0, r = 0; r < this.length; r++) {
              var n = (0 | this.words[r]) * e,
                a = (67108863 & n) + (67108863 & t);
              (t >>= 26),
                (t += (n / 67108864) | 0),
                (t += a >>> 26),
                (this.words[r] = 67108863 & a);
            }
            return 0 !== t && ((this.words[r] = t), this.length++), this;
          }),
          (a.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (a.prototype.sqr = function () {
            return this.mul(this);
          }),
          (a.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (a.prototype.pow = function (e) {
            var t = (function (e) {
              for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                var i = (r / 26) | 0,
                  n = r % 26;
                t[r] = (e.words[i] & (1 << n)) >>> n;
              }
              return t;
            })(e);
            if (0 === t.length) return new a(1);
            for (
              var r = this, i = 0;
              i < t.length && 0 === t[i];
              i++, r = r.sqr()
            );
            if (++i < t.length)
              for (var n = r.sqr(); i < t.length; i++, n = n.sqr())
                0 !== t[i] && (r = r.mul(n));
            return r;
          }),
          (a.prototype.iushln = function (e) {
            i("number" == typeof e && e >= 0);
            var t,
              r = e % 26,
              n = (e - r) / 26,
              a = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var o = 0;
              for (t = 0; t < this.length; t++) {
                var s = this.words[t] & a,
                  c = ((0 | this.words[t]) - s) << r;
                (this.words[t] = c | o), (o = s >>> (26 - r));
              }
              o && ((this.words[t] = o), this.length++);
            }
            if (0 !== n) {
              for (t = this.length - 1; t >= 0; t--)
                this.words[t + n] = this.words[t];
              for (t = 0; t < n; t++) this.words[t] = 0;
              this.length += n;
            }
            return this.strip();
          }),
          (a.prototype.ishln = function (e) {
            return i(0 === this.negative), this.iushln(e);
          }),
          (a.prototype.iushrn = function (e, t, r) {
            var n;
            i("number" == typeof e && e >= 0),
              (n = t ? (t - (t % 26)) / 26 : 0);
            var a = e % 26,
              o = Math.min((e - a) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> a) << a),
              c = r;
            if (((n -= o), (n = Math.max(0, n)), c)) {
              for (var f = 0; f < o; f++) c.words[f] = this.words[f];
              c.length = o;
            }
            if (0 === o);
            else if (this.length > o)
              for (this.length -= o, f = 0; f < this.length; f++)
                this.words[f] = this.words[f + o];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (f = this.length - 1; f >= 0 && (0 !== u || f >= n); f--) {
              var d = 0 | this.words[f];
              (this.words[f] = (u << (26 - a)) | (d >>> a)), (u = d & s);
            }
            return (
              c && 0 !== u && (c.words[c.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (a.prototype.ishrn = function (e, t, r) {
            return i(0 === this.negative), this.iushrn(e, t, r);
          }),
          (a.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (a.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (a.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (a.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (a.prototype.testn = function (e) {
            i("number" == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26,
              n = 1 << t;
            return !(this.length <= r) && !!(this.words[r] & n);
          }),
          (a.prototype.imaskn = function (e) {
            i("number" == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26;
            if (
              (i(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== t && r++,
              (this.length = Math.min(r, this.length)),
              0 !== t)
            ) {
              var n = 67108863 ^ ((67108863 >>> t) << t);
              this.words[this.length - 1] &= n;
            }
            return this.strip();
          }),
          (a.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (a.prototype.iaddn = function (e) {
            return (
              i("number" == typeof e),
              i(e < 67108864),
              e < 0
                ? this.isubn(-e)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(e),
                    (this.negative = 1),
                    this)
                : this._iaddn(e)
            );
          }),
          (a.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
              (this.words[t] -= 67108864),
                t === this.length - 1
                  ? (this.words[t + 1] = 1)
                  : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
          }),
          (a.prototype.isubn = function (e) {
            if ((i("number" == typeof e), i(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                (this.words[t] += 67108864), (this.words[t + 1] -= 1);
            return this.strip();
          }),
          (a.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (a.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (a.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (a.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (a.prototype._ishlnsubmul = function (e, t, r) {
            var n,
              a,
              o = e.length + r;
            this._expand(o);
            var s = 0;
            for (n = 0; n < e.length; n++) {
              a = (0 | this.words[n + r]) + s;
              var c = (0 | e.words[n]) * t;
              (s = ((a -= 67108863 & c) >> 26) - ((c / 67108864) | 0)),
                (this.words[n + r] = 67108863 & a);
            }
            for (; n < this.length - r; n++)
              (s = (a = (0 | this.words[n + r]) + s) >> 26),
                (this.words[n + r] = 67108863 & a);
            if (0 === s) return this.strip();
            for (i(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (a = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & a);
            return (this.negative = 1), this.strip();
          }),
          (a.prototype._wordDiv = function (e, t) {
            var r = (this.length, e.length),
              i = this.clone(),
              n = e,
              o = 0 | n.words[n.length - 1];
            0 !== (r = 26 - this._countBits(o)) &&
              ((n = n.ushln(r)), i.iushln(r), (o = 0 | n.words[n.length - 1]));
            var s,
              c = i.length - n.length;
            if ("mod" !== t) {
              ((s = new a(null)).length = c + 1),
                (s.words = new Array(s.length));
              for (var f = 0; f < s.length; f++) s.words[f] = 0;
            }
            var u = i.clone()._ishlnsubmul(n, 1, c);
            0 === u.negative && ((i = u), s && (s.words[c] = 1));
            for (var d = c - 1; d >= 0; d--) {
              var l =
                67108864 * (0 | i.words[n.length + d]) +
                (0 | i.words[n.length + d - 1]);
              for (
                l = Math.min((l / o) | 0, 67108863), i._ishlnsubmul(n, l, d);
                0 !== i.negative;

              )
                l--,
                  (i.negative = 0),
                  i._ishlnsubmul(n, 1, d),
                  i.isZero() || (i.negative ^= 1);
              s && (s.words[d] = l);
            }
            return (
              s && s.strip(),
              i.strip(),
              "div" !== t && 0 !== r && i.iushrn(r),
              { div: s || null, mod: i }
            );
          }),
          (a.prototype.divmod = function (e, t, r) {
            return (
              i(!e.isZero()),
              this.isZero()
                ? { div: new a(0), mod: new a(0) }
                : 0 !== this.negative && 0 === e.negative
                ? ((s = this.neg().divmod(e, t)),
                  "mod" !== t && (n = s.div.neg()),
                  "div" !== t &&
                    ((o = s.mod.neg()), r && 0 !== o.negative && o.iadd(e)),
                  { div: n, mod: o })
                : 0 === this.negative && 0 !== e.negative
                ? ((s = this.divmod(e.neg(), t)),
                  "mod" !== t && (n = s.div.neg()),
                  { div: n, mod: s.mod })
                : 0 != (this.negative & e.negative)
                ? ((s = this.neg().divmod(e.neg(), t)),
                  "div" !== t &&
                    ((o = s.mod.neg()), r && 0 !== o.negative && o.isub(e)),
                  { div: s.div, mod: o })
                : e.length > this.length || this.cmp(e) < 0
                ? { div: new a(0), mod: this }
                : 1 === e.length
                ? "div" === t
                  ? { div: this.divn(e.words[0]), mod: null }
                  : "mod" === t
                  ? { div: null, mod: new a(this.modn(e.words[0])) }
                  : {
                      div: this.divn(e.words[0]),
                      mod: new a(this.modn(e.words[0])),
                    }
                : this._wordDiv(e, t)
            );
            var n, o, s;
          }),
          (a.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div;
          }),
          (a.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod;
          }),
          (a.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod;
          }),
          (a.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              i = e.ushrn(1),
              n = e.andln(1),
              a = r.cmp(i);
            return a < 0 || (1 === n && 0 === a)
              ? t.div
              : 0 !== t.div.negative
              ? t.div.isubn(1)
              : t.div.iaddn(1);
          }),
          (a.prototype.modn = function (e) {
            i(e <= 67108863);
            for (var t = (1 << 26) % e, r = 0, n = this.length - 1; n >= 0; n--)
              r = (t * r + (0 | this.words[n])) % e;
            return r;
          }),
          (a.prototype.idivn = function (e) {
            i(e <= 67108863);
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var n = (0 | this.words[r]) + 67108864 * t;
              (this.words[r] = (n / e) | 0), (t = n % e);
            }
            return this.strip();
          }),
          (a.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (a.prototype.egcd = function (e) {
            i(0 === e.negative), i(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var n = new a(1), o = new a(0), s = new a(0), c = new a(1), f = 0;
              t.isEven() && r.isEven();

            )
              t.iushrn(1), r.iushrn(1), ++f;
            for (var u = r.clone(), d = t.clone(); !t.isZero(); ) {
              for (
                var l = 0, h = 1;
                0 == (t.words[0] & h) && l < 26;
                ++l, h <<= 1
              );
              if (l > 0)
                for (t.iushrn(l); l-- > 0; )
                  (n.isOdd() || o.isOdd()) && (n.iadd(u), o.isub(d)),
                    n.iushrn(1),
                    o.iushrn(1);
              for (
                var p = 0, b = 1;
                0 == (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || c.isOdd()) && (s.iadd(u), c.isub(d)),
                    s.iushrn(1),
                    c.iushrn(1);
              t.cmp(r) >= 0
                ? (t.isub(r), n.isub(s), o.isub(c))
                : (r.isub(t), s.isub(n), c.isub(o));
            }
            return { a: s, b: c, gcd: r.iushln(f) };
          }),
          (a.prototype._invmp = function (e) {
            i(0 === e.negative), i(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var n, o = new a(1), s = new a(0), c = r.clone();
              t.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var f = 0, u = 1;
                0 == (t.words[0] & u) && f < 26;
                ++f, u <<= 1
              );
              if (f > 0)
                for (t.iushrn(f); f-- > 0; )
                  o.isOdd() && o.iadd(c), o.iushrn(1);
              for (
                var d = 0, l = 1;
                0 == (r.words[0] & l) && d < 26;
                ++d, l <<= 1
              );
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  s.isOdd() && s.iadd(c), s.iushrn(1);
              t.cmp(r) >= 0 ? (t.isub(r), o.isub(s)) : (r.isub(t), s.isub(o));
            }
            return (n = 0 === t.cmpn(1) ? o : s).cmpn(0) < 0 && n.iadd(e), n;
          }),
          (a.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
              r = e.clone();
            (t.negative = 0), (r.negative = 0);
            for (var i = 0; t.isEven() && r.isEven(); i++)
              t.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; t.isEven(); ) t.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = t.cmp(r);
              if (n < 0) {
                var a = t;
                (t = r), (r = a);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              t.isub(r);
            }
            return r.iushln(i);
          }),
          (a.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (a.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (a.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (a.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (a.prototype.bincn = function (e) {
            i("number" == typeof e);
            var t = e % 26,
              r = (e - t) / 26,
              n = 1 << t;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this;
            for (var a = n, o = r; 0 !== a && o < this.length; o++) {
              var s = 0 | this.words[o];
              (a = (s += a) >>> 26), (s &= 67108863), (this.words[o] = s);
            }
            return 0 !== a && ((this.words[o] = a), this.length++), this;
          }),
          (a.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (a.prototype.cmpn = function (e) {
            var t,
              r = e < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) t = 1;
            else {
              r && (e = -e), i(e <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              t = n === e ? 0 : n < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (a.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (a.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var i = 0 | this.words[r],
                n = 0 | e.words[r];
              if (i !== n) {
                i < n ? (t = -1) : i > n && (t = 1);
                break;
              }
            }
            return t;
          }),
          (a.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (a.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (a.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (a.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (a.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (a.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (a.prototype.lten = function (e) {
            return this.cmpn(e) <= 0;
          }),
          (a.prototype.lte = function (e) {
            return this.cmp(e) <= 0;
          }),
          (a.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (a.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (a.red = function (e) {
            return new S(e);
          }),
          (a.prototype.toRed = function (e) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (a.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (a.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (a.prototype.forceRed = function (e) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            );
          }),
          (a.prototype.redAdd = function (e) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            );
          }),
          (a.prototype.redIAdd = function (e) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            );
          }),
          (a.prototype.redSub = function (e) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            );
          }),
          (a.prototype.redISub = function (e) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            );
          }),
          (a.prototype.redShl = function (e) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            );
          }),
          (a.prototype.redMul = function (e) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (a.prototype.redIMul = function (e) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (a.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (a.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (a.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (a.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (a.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (a.prototype.redPow = function (e) {
            return (
              i(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var m = { k256: null, p224: null, p192: null, p25519: null };
        function g(e, t) {
          (this.name = e),
            (this.p = new a(t, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new a(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function v() {
          g.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function y() {
          g.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function w() {
          g.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function _() {
          g.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function S(e) {
          if ("string" == typeof e) {
            var t = a._prime(e);
            (this.m = t.p), (this.prime = t);
          } else
            i(e.gtn(1), "modulus must be greater than 1"),
              (this.m = e),
              (this.prime = null);
        }
        function k(e) {
          S.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new a(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (g.prototype._tmp = function () {
          var e = new a(null);
          return (e.words = new Array(Math.ceil(this.n / 13))), e;
        }),
          (g.prototype.ireduce = function (e) {
            var t,
              r = e;
            do {
              this.split(r, this.tmp),
                (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (t > this.n);
            var i = t < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === i
                ? ((r.words[0] = 0), (r.length = 1))
                : i > 0
                ? r.isub(this.p)
                : r.strip(),
              r
            );
          }),
          (g.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
          }),
          (g.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          n(v, g),
          (v.prototype.split = function (e, t) {
            for (var r = Math.min(e.length, 9), i = 0; i < r; i++)
              t.words[i] = e.words[i];
            if (((t.length = r), e.length <= 9))
              return (e.words[0] = 0), void (e.length = 1);
            var n = e.words[9];
            for (t.words[t.length++] = 4194303 & n, i = 10; i < e.length; i++) {
              var a = 0 | e.words[i];
              (e.words[i - 10] = ((4194303 & a) << 4) | (n >>> 22)), (n = a);
            }
            (n >>>= 22),
              (e.words[i - 10] = n),
              0 === n && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (v.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var t = 0, r = 0; r < e.length; r++) {
              var i = 0 | e.words[r];
              (t += 977 * i),
                (e.words[r] = 67108863 & t),
                (t = 64 * i + ((t / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          n(y, g),
          n(w, g),
          n(_, g),
          (_.prototype.imulK = function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var i = 19 * (0 | e.words[r]) + t,
                n = 67108863 & i;
              (i >>>= 26), (e.words[r] = n), (t = i);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
          }),
          (a._prime = function (e) {
            if (m[e]) return m[e];
            var t;
            if ("k256" === e) t = new v();
            else if ("p224" === e) t = new y();
            else if ("p192" === e) t = new w();
            else {
              if ("p25519" !== e) throw new Error("Unknown prime " + e);
              t = new _();
            }
            return (m[e] = t), t;
          }),
          (S.prototype._verify1 = function (e) {
            i(0 === e.negative, "red works only with positives"),
              i(e.red, "red works only with red numbers");
          }),
          (S.prototype._verify2 = function (e, t) {
            i(0 == (e.negative | t.negative), "red works only with positives"),
              i(e.red && e.red === t.red, "red works only with red numbers");
          }),
          (S.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (S.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (S.prototype.add = function (e, t) {
            this._verify2(e, t);
            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (S.prototype.iadd = function (e, t) {
            this._verify2(e, t);
            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (S.prototype.sub = function (e, t) {
            this._verify2(e, t);
            var r = e.sub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (S.prototype.isub = function (e, t) {
            this._verify2(e, t);
            var r = e.isub(t);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (S.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
          }),
          (S.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
          }),
          (S.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
          }),
          (S.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (S.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (S.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((i(t % 2 == 1), 3 === t)) {
              var r = this.m.add(new a(1)).iushrn(2);
              return this.pow(e, r);
            }
            for (
              var n = this.m.subn(1), o = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              o++, n.iushrn(1);
            i(!n.isZero());
            var s = new a(1).toRed(this),
              c = s.redNeg(),
              f = this.m.subn(1).iushrn(1),
              u = this.m.bitLength();
            for (
              u = new a(2 * u * u).toRed(this);
              0 !== this.pow(u, f).cmp(c);

            )
              u.redIAdd(c);
            for (
              var d = this.pow(u, n),
                l = this.pow(e, n.addn(1).iushrn(1)),
                h = this.pow(e, n),
                p = o;
              0 !== h.cmp(s);

            ) {
              for (var b = h, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              i(m < p);
              var g = this.pow(d, new a(1).iushln(p - m - 1));
              (l = l.redMul(g)), (d = g.redSqr()), (h = h.redMul(d)), (p = m);
            }
            return l;
          }),
          (S.prototype.invm = function (e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative
              ? ((t.negative = 0), this.imod(t).redNeg())
              : this.imod(t);
          }),
          (S.prototype.pow = function (e, t) {
            if (t.isZero()) return new a(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = new Array(16);
            (r[0] = new a(1).toRed(this)), (r[1] = e);
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
            var n = r[0],
              o = 0,
              s = 0,
              c = t.bitLength() % 26;
            for (0 === c && (c = 26), i = t.length - 1; i >= 0; i--) {
              for (var f = t.words[i], u = c - 1; u >= 0; u--) {
                var d = (f >> u) & 1;
                n !== r[0] && (n = this.sqr(n)),
                  0 !== d || 0 !== o
                    ? ((o <<= 1),
                      (o |= d),
                      (4 === ++s || (0 === i && 0 === u)) &&
                        ((n = this.mul(n, r[o])), (s = 0), (o = 0)))
                    : (s = 0);
              }
              c = 26;
            }
            return n;
          }),
          (S.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
          }),
          (S.prototype.convertFrom = function (e) {
            var t = e.clone();
            return (t.red = null), t;
          }),
          (a.mont = function (e) {
            return new k(e);
          }),
          n(k, S),
          (k.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (k.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
          }),
          (k.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var r = e.imul(t),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              a = n;
            return (
              n.cmp(this.m) >= 0
                ? (a = n.isub(this.m))
                : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (k.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
            var r = e.mul(t),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (k.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })(e, this);
    }).call(this, r(122)(e));
  },
  function (e, t, r) {
    "use strict";
    var i = t;
    (i.version = r(129).version),
      (i.utils = r(130)),
      (i.rand = r(64)),
      (i.curve = r(22)),
      (i.curves = r(135)),
      (i.ec = r(143)),
      (i.eddsa = r(147));
  },
  function (e, t) {
    function r(e, t) {
      if (!e) throw new Error(t || "Assertion failed");
    }
    (e.exports = r),
      (r.equal = function (e, t, r) {
        if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t);
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(5),
      n = r(0);
    function a(e, t) {
      return (
        55296 == (64512 & e.charCodeAt(t)) &&
        !(t < 0 || t + 1 >= e.length) &&
        56320 == (64512 & e.charCodeAt(t + 1))
      );
    }
    function o(e) {
      return (
        ((e >>> 24) |
          ((e >>> 8) & 65280) |
          ((e << 8) & 16711680) |
          ((255 & e) << 24)) >>>
        0
      );
    }
    function s(e) {
      return 1 === e.length ? "0" + e : e;
    }
    function c(e) {
      return 7 === e.length
        ? "0" + e
        : 6 === e.length
        ? "00" + e
        : 5 === e.length
        ? "000" + e
        : 4 === e.length
        ? "0000" + e
        : 3 === e.length
        ? "00000" + e
        : 2 === e.length
        ? "000000" + e
        : 1 === e.length
        ? "0000000" + e
        : e;
    }
    (t.inherits = n),
      (t.toArray = function (e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" == typeof e)
          if (t) {
            if ("hex" === t)
              for (
                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                  (e = "0" + e),
                  n = 0;
                n < e.length;
                n += 2
              )
                r.push(parseInt(e[n] + e[n + 1], 16));
          } else
            for (var i = 0, n = 0; n < e.length; n++) {
              var o = e.charCodeAt(n);
              o < 128
                ? (r[i++] = o)
                : o < 2048
                ? ((r[i++] = (o >> 6) | 192), (r[i++] = (63 & o) | 128))
                : a(e, n)
                ? ((o =
                    65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n))),
                  (r[i++] = (o >> 18) | 240),
                  (r[i++] = ((o >> 12) & 63) | 128),
                  (r[i++] = ((o >> 6) & 63) | 128),
                  (r[i++] = (63 & o) | 128))
                : ((r[i++] = (o >> 12) | 224),
                  (r[i++] = ((o >> 6) & 63) | 128),
                  (r[i++] = (63 & o) | 128));
            }
        else for (n = 0; n < e.length; n++) r[n] = 0 | e[n];
        return r;
      }),
      (t.toHex = function (e) {
        for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
        return t;
      }),
      (t.htonl = o),
      (t.toHex32 = function (e, t) {
        for (var r = "", i = 0; i < e.length; i++) {
          var n = e[i];
          "little" === t && (n = o(n)), (r += c(n.toString(16)));
        }
        return r;
      }),
      (t.zero2 = s),
      (t.zero8 = c),
      (t.join32 = function (e, t, r, n) {
        var a = r - t;
        i(a % 4 == 0);
        for (
          var o = new Array(a / 4), s = 0, c = t;
          s < o.length;
          s++, c += 4
        ) {
          var f;
          (f =
            "big" === n
              ? (e[c] << 24) | (e[c + 1] << 16) | (e[c + 2] << 8) | e[c + 3]
              : (e[c + 3] << 24) | (e[c + 2] << 16) | (e[c + 1] << 8) | e[c]),
            (o[s] = f >>> 0);
        }
        return o;
      }),
      (t.split32 = function (e, t) {
        for (
          var r = new Array(4 * e.length), i = 0, n = 0;
          i < e.length;
          i++, n += 4
        ) {
          var a = e[i];
          "big" === t
            ? ((r[n] = a >>> 24),
              (r[n + 1] = (a >>> 16) & 255),
              (r[n + 2] = (a >>> 8) & 255),
              (r[n + 3] = 255 & a))
            : ((r[n + 3] = a >>> 24),
              (r[n + 2] = (a >>> 16) & 255),
              (r[n + 1] = (a >>> 8) & 255),
              (r[n] = 255 & a));
        }
        return r;
      }),
      (t.rotr32 = function (e, t) {
        return (e >>> t) | (e << (32 - t));
      }),
      (t.rotl32 = function (e, t) {
        return (e << t) | (e >>> (32 - t));
      }),
      (t.sum32 = function (e, t) {
        return (e + t) >>> 0;
      }),
      (t.sum32_3 = function (e, t, r) {
        return (e + t + r) >>> 0;
      }),
      (t.sum32_4 = function (e, t, r, i) {
        return (e + t + r + i) >>> 0;
      }),
      (t.sum32_5 = function (e, t, r, i, n) {
        return (e + t + r + i + n) >>> 0;
      }),
      (t.sum64 = function (e, t, r, i) {
        var n = e[t],
          a = (i + e[t + 1]) >>> 0,
          o = (a < i ? 1 : 0) + r + n;
        (e[t] = o >>> 0), (e[t + 1] = a);
      }),
      (t.sum64_hi = function (e, t, r, i) {
        return (((t + i) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
      }),
      (t.sum64_lo = function (e, t, r, i) {
        return (t + i) >>> 0;
      }),
      (t.sum64_4_hi = function (e, t, r, i, n, a, o, s) {
        var c = 0,
          f = t;
        return (
          (c += (f = (f + i) >>> 0) < t ? 1 : 0),
          (c += (f = (f + a) >>> 0) < a ? 1 : 0),
          (e + r + n + o + (c += (f = (f + s) >>> 0) < s ? 1 : 0)) >>> 0
        );
      }),
      (t.sum64_4_lo = function (e, t, r, i, n, a, o, s) {
        return (t + i + a + s) >>> 0;
      }),
      (t.sum64_5_hi = function (e, t, r, i, n, a, o, s, c, f) {
        var u = 0,
          d = t;
        return (
          (u += (d = (d + i) >>> 0) < t ? 1 : 0),
          (u += (d = (d + a) >>> 0) < a ? 1 : 0),
          (u += (d = (d + s) >>> 0) < s ? 1 : 0),
          (e + r + n + o + c + (u += (d = (d + f) >>> 0) < f ? 1 : 0)) >>> 0
        );
      }),
      (t.sum64_5_lo = function (e, t, r, i, n, a, o, s, c, f) {
        return (t + i + a + s + f) >>> 0;
      }),
      (t.rotr64_hi = function (e, t, r) {
        return ((t << (32 - r)) | (e >>> r)) >>> 0;
      }),
      (t.rotr64_lo = function (e, t, r) {
        return ((e << (32 - r)) | (t >>> r)) >>> 0;
      }),
      (t.shr64_hi = function (e, t, r) {
        return e >>> r;
      }),
      (t.shr64_lo = function (e, t, r) {
        return ((e << (32 - r)) | (t >>> r)) >>> 0;
      });
  },
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t) {
    var r,
      i,
      n = (e.exports = {});
    function a() {
      throw new Error("setTimeout has not been defined");
    }
    function o() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === a || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : a;
      } catch (e) {
        r = a;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        i = o;
      }
    })();
    var c,
      f = [],
      u = !1,
      d = -1;
    function l() {
      u &&
        c &&
        ((u = !1), c.length ? (f = c.concat(f)) : (d = -1), f.length && h());
    }
    function h() {
      if (!u) {
        var e = s(l);
        u = !0;
        for (var t = f.length; t; ) {
          for (c = f, f = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = f.length);
        }
        (c = null),
          (u = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === o || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function p(e, t) {
      (this.fun = e), (this.array = t);
    }
    function b() {}
    (n.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      f.push(new p(e, t)), 1 !== f.length || u || s(h);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (n.title = "browser"),
      (n.browser = !0),
      (n.env = {}),
      (n.argv = []),
      (n.version = ""),
      (n.versions = {}),
      (n.on = b),
      (n.addListener = b),
      (n.once = b),
      (n.off = b),
      (n.removeListener = b),
      (n.removeAllListeners = b),
      (n.emit = b),
      (n.prependListener = b),
      (n.prependOnceListener = b),
      (n.listeners = function (e) {
        return [];
      }),
      (n.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (n.cwd = function () {
        return "/";
      }),
      (n.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (n.umask = function () {
        return 0;
      });
  },
  function (e, t, r) {
    var i = r(1).Buffer,
      n = r(27).Transform,
      a = r(32).StringDecoder;
    function o(e) {
      n.call(this),
        (this.hashMode = "string" == typeof e),
        this.hashMode
          ? (this[e] = this._finalOrDigest)
          : (this.final = this._finalOrDigest),
        this._final && ((this.__final = this._final), (this._final = null)),
        (this._decoder = null),
        (this._encoding = null);
    }
    r(0)(o, n),
      (o.prototype.update = function (e, t, r) {
        "string" == typeof e && (e = i.from(e, t));
        var n = this._update(e);
        return this.hashMode ? this : (r && (n = this._toString(n, r)), n);
      }),
      (o.prototype.setAutoPadding = function () {}),
      (o.prototype.getAuthTag = function () {
        throw new Error("trying to get auth tag in unsupported state");
      }),
      (o.prototype.setAuthTag = function () {
        throw new Error("trying to set auth tag in unsupported state");
      }),
      (o.prototype.setAAD = function () {
        throw new Error("trying to set aad in unsupported state");
      }),
      (o.prototype._transform = function (e, t, r) {
        var i;
        try {
          this.hashMode ? this._update(e) : this.push(this._update(e));
        } catch (e) {
          i = e;
        } finally {
          r(i);
        }
      }),
      (o.prototype._flush = function (e) {
        var t;
        try {
          this.push(this.__final());
        } catch (e) {
          t = e;
        }
        e(t);
      }),
      (o.prototype._finalOrDigest = function (e) {
        var t = this.__final() || i.alloc(0);
        return e && (t = this._toString(t, e, !0)), t;
      }),
      (o.prototype._toString = function (e, t, r) {
        if (
          (this._decoder || ((this._decoder = new a(t)), (this._encoding = t)),
          this._encoding !== t)
        )
          throw new Error("can't switch encodings");
        var i = this._decoder.write(e);
        return r && (i += this._decoder.end()), i;
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var i = r(19),
      n =
        Object.keys ||
        function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return t;
        };
    e.exports = d;
    var a = r(14);
    a.inherits = r(0);
    var o = r(42),
      s = r(31);
    a.inherits(d, o);
    for (var c = n(s.prototype), f = 0; f < c.length; f++) {
      var u = c[f];
      d.prototype[u] || (d.prototype[u] = s.prototype[u]);
    }
    function d(e) {
      if (!(this instanceof d)) return new d(e);
      o.call(this, e),
        s.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", l);
    }
    function l() {
      this.allowHalfOpen || this._writableState.ended || i.nextTick(h, this);
    }
    function h(e) {
      e.end();
    }
    Object.defineProperty(d.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(d.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (d.prototype._destroy = function (e, t) {
        this.push(null), this.end(), i.nextTick(t, e);
      });
  },
  function (e, t, r) {
    "use strict";
    (function (t, i) {
      var n = 65536,
        a = 4294967295;
      var o = r(1).Buffer,
        s = t.crypto || t.msCrypto;
      s && s.getRandomValues
        ? (e.exports = function (e, t) {
            if (e > a) throw new RangeError("requested too many random bytes");
            var r = o.allocUnsafe(e);
            if (e > 0)
              if (e > n)
                for (var c = 0; c < e; c += n)
                  s.getRandomValues(r.slice(c, c + n));
              else s.getRandomValues(r);
            if ("function" == typeof t)
              return i.nextTick(function () {
                t(null, r);
              });
            return r;
          })
        : (e.exports = function () {
            throw new Error(
              "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
            );
          });
    }).call(this, r(7), r(8));
  },
  function (e, t, r) {
    var i = r(1).Buffer;
    function n(e, t) {
      (this._block = i.alloc(e)),
        (this._finalSize = t),
        (this._blockSize = e),
        (this._len = 0);
    }
    (n.prototype.update = function (e, t) {
      "string" == typeof e && ((t = t || "utf8"), (e = i.from(e, t)));
      for (
        var r = this._block,
          n = this._blockSize,
          a = e.length,
          o = this._len,
          s = 0;
        s < a;

      ) {
        for (var c = o % n, f = Math.min(a - s, n - c), u = 0; u < f; u++)
          r[c + u] = e[s + u];
        (s += f), (o += f) % n == 0 && this._update(r);
      }
      return (this._len += a), this;
    }),
      (n.prototype.digest = function (e) {
        var t = this._len % this._blockSize;
        (this._block[t] = 128),
          this._block.fill(0, t + 1),
          t >= this._finalSize &&
            (this._update(this._block), this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
          var i = (4294967295 & r) >>> 0,
            n = (r - i) / 4294967296;
          this._block.writeUInt32BE(n, this._blockSize - 8),
            this._block.writeUInt32BE(i, this._blockSize - 4);
        }
        this._update(this._block);
        var a = this._hash();
        return e ? a.toString(e) : a;
      }),
      (n.prototype._update = function () {
        throw new Error("_update must be implemented by subclass");
      }),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    var i = r(0),
      n = r(26),
      a = r(33),
      o = r(34),
      s = r(9);
    function c(e) {
      s.call(this, "digest"), (this._hash = e);
    }
    i(c, s),
      (c.prototype._update = function (e) {
        this._hash.update(e);
      }),
      (c.prototype._final = function () {
        return this._hash.digest();
      }),
      (e.exports = function (e) {
        return "md5" === (e = e.toLowerCase())
          ? new n()
          : "rmd160" === e || "ripemd160" === e
          ? new a()
          : new c(o(e));
      });
  },
  function (e, t, r) {
    (function (e) {
      function r(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === r(e);
      }),
        (t.isBoolean = function (e) {
          return "boolean" == typeof e;
        }),
        (t.isNull = function (e) {
          return null === e;
        }),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = function (e) {
          return "number" == typeof e;
        }),
        (t.isString = function (e) {
          return "string" == typeof e;
        }),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = function (e) {
          return void 0 === e;
        }),
        (t.isRegExp = function (e) {
          return "[object RegExp]" === r(e);
        }),
        (t.isObject = function (e) {
          return "object" == typeof e && null !== e;
        }),
        (t.isDate = function (e) {
          return "[object Date]" === r(e);
        }),
        (t.isError = function (e) {
          return "[object Error]" === r(e) || e instanceof Error;
        }),
        (t.isFunction = function (e) {
          return "function" == typeof e;
        }),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = e.isBuffer);
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    (function (t) {
      e.exports = function (e, r) {
        for (
          var i = Math.min(e.length, r.length), n = new t(i), a = 0;
          a < i;
          ++a
        )
          n[a] = e[a] ^ r[a];
        return n;
      };
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(5);
    function a() {
      (this.pending = null),
        (this.pendingTotal = 0),
        (this.blockSize = this.constructor.blockSize),
        (this.outSize = this.constructor.outSize),
        (this.hmacStrength = this.constructor.hmacStrength),
        (this.padLength = this.constructor.padLength / 8),
        (this.endian = "big"),
        (this._delta8 = this.blockSize / 8),
        (this._delta32 = this.blockSize / 32);
    }
    (t.BlockHash = a),
      (a.prototype.update = function (e, t) {
        if (
          ((e = i.toArray(e, t)),
          this.pending
            ? (this.pending = this.pending.concat(e))
            : (this.pending = e),
          (this.pendingTotal += e.length),
          this.pending.length >= this._delta8)
        ) {
          var r = (e = this.pending).length % this._delta8;
          (this.pending = e.slice(e.length - r, e.length)),
            0 === this.pending.length && (this.pending = null),
            (e = i.join32(e, 0, e.length - r, this.endian));
          for (var n = 0; n < e.length; n += this._delta32)
            this._update(e, n, n + this._delta32);
        }
        return this;
      }),
      (a.prototype.digest = function (e) {
        return (
          this.update(this._pad()), n(null === this.pending), this._digest(e)
        );
      }),
      (a.prototype._pad = function () {
        var e = this.pendingTotal,
          t = this._delta8,
          r = t - ((e + this.padLength) % t),
          i = new Array(r + this.padLength);
        i[0] = 128;
        for (var n = 1; n < r; n++) i[n] = 0;
        if (((e <<= 3), "big" === this.endian)) {
          for (var a = 8; a < this.padLength; a++) i[n++] = 0;
          (i[n++] = 0),
            (i[n++] = 0),
            (i[n++] = 0),
            (i[n++] = 0),
            (i[n++] = (e >>> 24) & 255),
            (i[n++] = (e >>> 16) & 255),
            (i[n++] = (e >>> 8) & 255),
            (i[n++] = 255 & e);
        } else
          for (
            i[n++] = 255 & e,
              i[n++] = (e >>> 8) & 255,
              i[n++] = (e >>> 16) & 255,
              i[n++] = (e >>> 24) & 255,
              i[n++] = 0,
              i[n++] = 0,
              i[n++] = 0,
              i[n++] = 0,
              a = 8;
            a < this.padLength;
            a++
          )
            i[n++] = 0;
        return i;
      });
  },
  function (e, t, r) {
    var i = t;
    (i.bignum = r(3)),
      (i.define = r(151).define),
      (i.base = r(18)),
      (i.constants = r(70)),
      (i.decoders = r(156)),
      (i.encoders = r(158));
  },
  function (e, t, r) {
    var i = t;
    (i.Reporter = r(153).Reporter),
      (i.DecoderBuffer = r(69).DecoderBuffer),
      (i.EncoderBuffer = r(69).EncoderBuffer),
      (i.Node = r(154));
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      void 0 === t ||
      !t.version ||
      0 === t.version.indexOf("v0.") ||
      (0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
        ? (e.exports = {
            nextTick: function (e, r, i, n) {
              if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var a,
                o,
                s = arguments.length;
              switch (s) {
                case 0:
                case 1:
                  return t.nextTick(e);
                case 2:
                  return t.nextTick(function () {
                    e.call(null, r);
                  });
                case 3:
                  return t.nextTick(function () {
                    e.call(null, r, i);
                  });
                case 4:
                  return t.nextTick(function () {
                    e.call(null, r, i, n);
                  });
                default:
                  for (a = new Array(s - 1), o = 0; o < a.length; )
                    a[o++] = arguments[o];
                  return t.nextTick(function () {
                    e.apply(null, a);
                  });
              }
            },
          })
        : (e.exports = t);
    }).call(this, r(8));
  },
  function (e, t, r) {
    var i = r(1).Buffer;
    function n(e) {
      i.isBuffer(e) || (e = i.from(e));
      for (var t = (e.length / 4) | 0, r = new Array(t), n = 0; n < t; n++)
        r[n] = e.readUInt32BE(4 * n);
      return r;
    }
    function a(e) {
      for (; 0 < e.length; e++) e[0] = 0;
    }
    function o(e, t, r, i, n) {
      for (
        var a,
          o,
          s,
          c,
          f = r[0],
          u = r[1],
          d = r[2],
          l = r[3],
          h = e[0] ^ t[0],
          p = e[1] ^ t[1],
          b = e[2] ^ t[2],
          m = e[3] ^ t[3],
          g = 4,
          v = 1;
        v < n;
        v++
      )
        (a =
          f[h >>> 24] ^
          u[(p >>> 16) & 255] ^
          d[(b >>> 8) & 255] ^
          l[255 & m] ^
          t[g++]),
          (o =
            f[p >>> 24] ^
            u[(b >>> 16) & 255] ^
            d[(m >>> 8) & 255] ^
            l[255 & h] ^
            t[g++]),
          (s =
            f[b >>> 24] ^
            u[(m >>> 16) & 255] ^
            d[(h >>> 8) & 255] ^
            l[255 & p] ^
            t[g++]),
          (c =
            f[m >>> 24] ^
            u[(h >>> 16) & 255] ^
            d[(p >>> 8) & 255] ^
            l[255 & b] ^
            t[g++]),
          (h = a),
          (p = o),
          (b = s),
          (m = c);
      return (
        (a =
          ((i[h >>> 24] << 24) |
            (i[(p >>> 16) & 255] << 16) |
            (i[(b >>> 8) & 255] << 8) |
            i[255 & m]) ^
          t[g++]),
        (o =
          ((i[p >>> 24] << 24) |
            (i[(b >>> 16) & 255] << 16) |
            (i[(m >>> 8) & 255] << 8) |
            i[255 & h]) ^
          t[g++]),
        (s =
          ((i[b >>> 24] << 24) |
            (i[(m >>> 16) & 255] << 16) |
            (i[(h >>> 8) & 255] << 8) |
            i[255 & p]) ^
          t[g++]),
        (c =
          ((i[m >>> 24] << 24) |
            (i[(h >>> 16) & 255] << 16) |
            (i[(p >>> 8) & 255] << 8) |
            i[255 & b]) ^
          t[g++]),
        [(a >>>= 0), (o >>>= 0), (s >>>= 0), (c >>>= 0)]
      );
    }
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
      c = (function () {
        for (var e = new Array(256), t = 0; t < 256; t++)
          e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
        for (
          var r = [],
            i = [],
            n = [[], [], [], []],
            a = [[], [], [], []],
            o = 0,
            s = 0,
            c = 0;
          c < 256;
          ++c
        ) {
          var f = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
          (f = (f >>> 8) ^ (255 & f) ^ 99), (r[o] = f), (i[f] = o);
          var u = e[o],
            d = e[u],
            l = e[d],
            h = (257 * e[f]) ^ (16843008 * f);
          (n[0][o] = (h << 24) | (h >>> 8)),
            (n[1][o] = (h << 16) | (h >>> 16)),
            (n[2][o] = (h << 8) | (h >>> 24)),
            (n[3][o] = h),
            (h = (16843009 * l) ^ (65537 * d) ^ (257 * u) ^ (16843008 * o)),
            (a[0][f] = (h << 24) | (h >>> 8)),
            (a[1][f] = (h << 16) | (h >>> 16)),
            (a[2][f] = (h << 8) | (h >>> 24)),
            (a[3][f] = h),
            0 === o ? (o = s = 1) : ((o = u ^ e[e[e[l ^ u]]]), (s ^= e[e[s]]));
        }
        return { SBOX: r, INV_SBOX: i, SUB_MIX: n, INV_SUB_MIX: a };
      })();
    function f(e) {
      (this._key = n(e)), this._reset();
    }
    (f.blockSize = 16),
      (f.keySize = 32),
      (f.prototype.blockSize = f.blockSize),
      (f.prototype.keySize = f.keySize),
      (f.prototype._reset = function () {
        for (
          var e = this._key,
            t = e.length,
            r = t + 6,
            i = 4 * (r + 1),
            n = [],
            a = 0;
          a < t;
          a++
        )
          n[a] = e[a];
        for (a = t; a < i; a++) {
          var o = n[a - 1];
          a % t == 0
            ? ((o = (o << 8) | (o >>> 24)),
              (o =
                (c.SBOX[o >>> 24] << 24) |
                (c.SBOX[(o >>> 16) & 255] << 16) |
                (c.SBOX[(o >>> 8) & 255] << 8) |
                c.SBOX[255 & o]),
              (o ^= s[(a / t) | 0] << 24))
            : t > 6 &&
              a % t == 4 &&
              (o =
                (c.SBOX[o >>> 24] << 24) |
                (c.SBOX[(o >>> 16) & 255] << 16) |
                (c.SBOX[(o >>> 8) & 255] << 8) |
                c.SBOX[255 & o]),
            (n[a] = n[a - t] ^ o);
        }
        for (var f = [], u = 0; u < i; u++) {
          var d = i - u,
            l = n[d - (u % 4 ? 0 : 4)];
          f[u] =
            u < 4 || d <= 4
              ? l
              : c.INV_SUB_MIX[0][c.SBOX[l >>> 24]] ^
                c.INV_SUB_MIX[1][c.SBOX[(l >>> 16) & 255]] ^
                c.INV_SUB_MIX[2][c.SBOX[(l >>> 8) & 255]] ^
                c.INV_SUB_MIX[3][c.SBOX[255 & l]];
        }
        (this._nRounds = r),
          (this._keySchedule = n),
          (this._invKeySchedule = f);
      }),
      (f.prototype.encryptBlockRaw = function (e) {
        return o(
          (e = n(e)),
          this._keySchedule,
          c.SUB_MIX,
          c.SBOX,
          this._nRounds
        );
      }),
      (f.prototype.encryptBlock = function (e) {
        var t = this.encryptBlockRaw(e),
          r = i.allocUnsafe(16);
        return (
          r.writeUInt32BE(t[0], 0),
          r.writeUInt32BE(t[1], 4),
          r.writeUInt32BE(t[2], 8),
          r.writeUInt32BE(t[3], 12),
          r
        );
      }),
      (f.prototype.decryptBlock = function (e) {
        var t = (e = n(e))[1];
        (e[1] = e[3]), (e[3] = t);
        var r = o(
            e,
            this._invKeySchedule,
            c.INV_SUB_MIX,
            c.INV_SBOX,
            this._nRounds
          ),
          a = i.allocUnsafe(16);
        return (
          a.writeUInt32BE(r[0], 0),
          a.writeUInt32BE(r[3], 4),
          a.writeUInt32BE(r[2], 8),
          a.writeUInt32BE(r[1], 12),
          a
        );
      }),
      (f.prototype.scrub = function () {
        a(this._keySchedule), a(this._invKeySchedule), a(this._key);
      }),
      (e.exports.AES = f);
  },
  function (e, t, r) {
    var i = r(1).Buffer,
      n = r(26);
    e.exports = function (e, t, r, a) {
      if (
        (i.isBuffer(e) || (e = i.from(e, "binary")),
        t && (i.isBuffer(t) || (t = i.from(t, "binary")), 8 !== t.length))
      )
        throw new RangeError("salt should be Buffer with 8 byte length");
      for (
        var o = r / 8, s = i.alloc(o), c = i.alloc(a || 0), f = i.alloc(0);
        o > 0 || a > 0;

      ) {
        var u = new n();
        u.update(f), u.update(e), t && u.update(t), (f = u.digest());
        var d = 0;
        if (o > 0) {
          var l = s.length - o;
          (d = Math.min(o, f.length)), f.copy(s, l, 0, d), (o -= d);
        }
        if (d < f.length && a > 0) {
          var h = c.length - a,
            p = Math.min(a, f.length - d);
          f.copy(c, h, d, d + p), (a -= p);
        }
      }
      return f.fill(0), { key: s, iv: c };
    };
  },
  function (e, t, r) {
    "use strict";
    var i = t;
    (i.base = r(131)),
      (i.short = r(132)),
      (i.mont = r(133)),
      (i.edwards = r(134));
  },
  function (e, t, r) {
    var i = r(150),
      n = r(161),
      a = r(162),
      o = r(36),
      s = r(51),
      c = r(1).Buffer;
    function f(e) {
      var t;
      "object" != typeof e ||
        c.isBuffer(e) ||
        ((t = e.passphrase), (e = e.key)),
        "string" == typeof e && (e = c.from(e));
      var r,
        f,
        u = a(e, t),
        d = u.tag,
        l = u.data;
      switch (d) {
        case "CERTIFICATE":
          f = i.certificate.decode(l, "der").tbsCertificate
            .subjectPublicKeyInfo;
        case "PUBLIC KEY":
          switch (
            (f || (f = i.PublicKey.decode(l, "der")),
            (r = f.algorithm.algorithm.join(".")))
          ) {
            case "1.2.840.113549.1.1.1":
              return i.RSAPublicKey.decode(f.subjectPublicKey.data, "der");
            case "1.2.840.10045.2.1":
              return (
                (f.subjectPrivateKey = f.subjectPublicKey),
                { type: "ec", data: f }
              );
            case "1.2.840.10040.4.1":
              return (
                (f.algorithm.params.pub_key = i.DSAparam.decode(
                  f.subjectPublicKey.data,
                  "der"
                )),
                { type: "dsa", data: f.algorithm.params }
              );
            default:
              throw new Error("unknown key id " + r);
          }
          throw new Error("unknown key type " + d);
        case "ENCRYPTED PRIVATE KEY":
          l = (function (e, t) {
            var r = e.algorithm.decrypt.kde.kdeparams.salt,
              i = parseInt(
                e.algorithm.decrypt.kde.kdeparams.iters.toString(),
                10
              ),
              a = n[e.algorithm.decrypt.cipher.algo.join(".")],
              f = e.algorithm.decrypt.cipher.iv,
              u = e.subjectPrivateKey,
              d = parseInt(a.split("-")[1], 10) / 8,
              l = s.pbkdf2Sync(t, r, i, d, "sha1"),
              h = o.createDecipheriv(a, l, f),
              p = [];
            return p.push(h.update(u)), p.push(h.final()), c.concat(p);
          })((l = i.EncryptedPrivateKey.decode(l, "der")), t);
        case "PRIVATE KEY":
          switch (
            (r = (f = i.PrivateKey.decode(l, "der")).algorithm.algorithm.join(
              "."
            ))
          ) {
            case "1.2.840.113549.1.1.1":
              return i.RSAPrivateKey.decode(f.subjectPrivateKey, "der");
            case "1.2.840.10045.2.1":
              return {
                curve: f.algorithm.curve,
                privateKey: i.ECPrivateKey.decode(f.subjectPrivateKey, "der")
                  .privateKey,
              };
            case "1.2.840.10040.4.1":
              return (
                (f.algorithm.params.priv_key = i.DSAparam.decode(
                  f.subjectPrivateKey,
                  "der"
                )),
                { type: "dsa", params: f.algorithm.params }
              );
            default:
              throw new Error("unknown key id " + r);
          }
          throw new Error("unknown key type " + d);
        case "RSA PUBLIC KEY":
          return i.RSAPublicKey.decode(l, "der");
        case "RSA PRIVATE KEY":
          return i.RSAPrivateKey.decode(l, "der");
        case "DSA PRIVATE KEY":
          return { type: "dsa", params: i.DSAPrivateKey.decode(l, "der") };
        case "EC PRIVATE KEY":
          return {
            curve: (l = i.ECPrivateKey.decode(l, "der")).parameters.value,
            privateKey: l.privateKey,
          };
        default:
          throw new Error("unknown key type " + d);
      }
    }
    (e.exports = f), (f.signature = i.signature);
  },
  function (e, t, r) {
    var i = r(2),
      n = i.Buffer;
    function a(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return n(e, t, r);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (e.exports = i)
      : (a(i, t), (t.Buffer = o)),
      a(n, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return n(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = n(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? i.fill(t, r)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t) {
    e.exports = bsv;
  },
  function (e, t, r) {
    "use strict";
    var i = r(0),
      n = r(41),
      a = r(97).Buffer,
      o = new Array(16);
    function s() {
      n.call(this, 64),
        (this._a = 1732584193),
        (this._b = 4023233417),
        (this._c = 2562383102),
        (this._d = 271733878);
    }
    function c(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function f(e, t, r, i, n, a, o) {
      return (c((e + ((t & r) | (~t & i)) + n + a) | 0, o) + t) | 0;
    }
    function u(e, t, r, i, n, a, o) {
      return (c((e + ((t & i) | (r & ~i)) + n + a) | 0, o) + t) | 0;
    }
    function d(e, t, r, i, n, a, o) {
      return (c((e + (t ^ r ^ i) + n + a) | 0, o) + t) | 0;
    }
    function l(e, t, r, i, n, a, o) {
      return (c((e + (r ^ (t | ~i)) + n + a) | 0, o) + t) | 0;
    }
    i(s, n),
      (s.prototype._update = function () {
        for (var e = o, t = 0; t < 16; ++t)
          e[t] = this._block.readInt32LE(4 * t);
        var r = this._a,
          i = this._b,
          n = this._c,
          a = this._d;
        (r = f(r, i, n, a, e[0], 3614090360, 7)),
          (a = f(a, r, i, n, e[1], 3905402710, 12)),
          (n = f(n, a, r, i, e[2], 606105819, 17)),
          (i = f(i, n, a, r, e[3], 3250441966, 22)),
          (r = f(r, i, n, a, e[4], 4118548399, 7)),
          (a = f(a, r, i, n, e[5], 1200080426, 12)),
          (n = f(n, a, r, i, e[6], 2821735955, 17)),
          (i = f(i, n, a, r, e[7], 4249261313, 22)),
          (r = f(r, i, n, a, e[8], 1770035416, 7)),
          (a = f(a, r, i, n, e[9], 2336552879, 12)),
          (n = f(n, a, r, i, e[10], 4294925233, 17)),
          (i = f(i, n, a, r, e[11], 2304563134, 22)),
          (r = f(r, i, n, a, e[12], 1804603682, 7)),
          (a = f(a, r, i, n, e[13], 4254626195, 12)),
          (n = f(n, a, r, i, e[14], 2792965006, 17)),
          (r = u(
            r,
            (i = f(i, n, a, r, e[15], 1236535329, 22)),
            n,
            a,
            e[1],
            4129170786,
            5
          )),
          (a = u(a, r, i, n, e[6], 3225465664, 9)),
          (n = u(n, a, r, i, e[11], 643717713, 14)),
          (i = u(i, n, a, r, e[0], 3921069994, 20)),
          (r = u(r, i, n, a, e[5], 3593408605, 5)),
          (a = u(a, r, i, n, e[10], 38016083, 9)),
          (n = u(n, a, r, i, e[15], 3634488961, 14)),
          (i = u(i, n, a, r, e[4], 3889429448, 20)),
          (r = u(r, i, n, a, e[9], 568446438, 5)),
          (a = u(a, r, i, n, e[14], 3275163606, 9)),
          (n = u(n, a, r, i, e[3], 4107603335, 14)),
          (i = u(i, n, a, r, e[8], 1163531501, 20)),
          (r = u(r, i, n, a, e[13], 2850285829, 5)),
          (a = u(a, r, i, n, e[2], 4243563512, 9)),
          (n = u(n, a, r, i, e[7], 1735328473, 14)),
          (r = d(
            r,
            (i = u(i, n, a, r, e[12], 2368359562, 20)),
            n,
            a,
            e[5],
            4294588738,
            4
          )),
          (a = d(a, r, i, n, e[8], 2272392833, 11)),
          (n = d(n, a, r, i, e[11], 1839030562, 16)),
          (i = d(i, n, a, r, e[14], 4259657740, 23)),
          (r = d(r, i, n, a, e[1], 2763975236, 4)),
          (a = d(a, r, i, n, e[4], 1272893353, 11)),
          (n = d(n, a, r, i, e[7], 4139469664, 16)),
          (i = d(i, n, a, r, e[10], 3200236656, 23)),
          (r = d(r, i, n, a, e[13], 681279174, 4)),
          (a = d(a, r, i, n, e[0], 3936430074, 11)),
          (n = d(n, a, r, i, e[3], 3572445317, 16)),
          (i = d(i, n, a, r, e[6], 76029189, 23)),
          (r = d(r, i, n, a, e[9], 3654602809, 4)),
          (a = d(a, r, i, n, e[12], 3873151461, 11)),
          (n = d(n, a, r, i, e[15], 530742520, 16)),
          (r = l(
            r,
            (i = d(i, n, a, r, e[2], 3299628645, 23)),
            n,
            a,
            e[0],
            4096336452,
            6
          )),
          (a = l(a, r, i, n, e[7], 1126891415, 10)),
          (n = l(n, a, r, i, e[14], 2878612391, 15)),
          (i = l(i, n, a, r, e[5], 4237533241, 21)),
          (r = l(r, i, n, a, e[12], 1700485571, 6)),
          (a = l(a, r, i, n, e[3], 2399980690, 10)),
          (n = l(n, a, r, i, e[10], 4293915773, 15)),
          (i = l(i, n, a, r, e[1], 2240044497, 21)),
          (r = l(r, i, n, a, e[8], 1873313359, 6)),
          (a = l(a, r, i, n, e[15], 4264355552, 10)),
          (n = l(n, a, r, i, e[6], 2734768916, 15)),
          (i = l(i, n, a, r, e[13], 1309151649, 21)),
          (r = l(r, i, n, a, e[4], 4149444226, 6)),
          (a = l(a, r, i, n, e[11], 3174756917, 10)),
          (n = l(n, a, r, i, e[2], 718787259, 15)),
          (i = l(i, n, a, r, e[9], 3951481745, 21)),
          (this._a = (this._a + r) | 0),
          (this._b = (this._b + i) | 0),
          (this._c = (this._c + n) | 0),
          (this._d = (this._d + a) | 0);
      }),
      (s.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128),
          this._blockOffset > 56 &&
            (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            (this._blockOffset = 0)),
          this._block.fill(0, this._blockOffset, 56),
          this._block.writeUInt32LE(this._length[0], 56),
          this._block.writeUInt32LE(this._length[1], 60),
          this._update();
        var e = a.allocUnsafe(16);
        return (
          e.writeInt32LE(this._a, 0),
          e.writeInt32LE(this._b, 4),
          e.writeInt32LE(this._c, 8),
          e.writeInt32LE(this._d, 12),
          e
        );
      }),
      (e.exports = s);
  },
  function (e, t, r) {
    e.exports = n;
    var i = r(28).EventEmitter;
    function n() {
      i.call(this);
    }
    r(0)(n, i),
      (n.Readable = r(29)),
      (n.Writable = r(93)),
      (n.Duplex = r(94)),
      (n.Transform = r(95)),
      (n.PassThrough = r(96)),
      (n.Stream = n),
      (n.prototype.pipe = function (e, t) {
        var r = this;
        function n(t) {
          e.writable && !1 === e.write(t) && r.pause && r.pause();
        }
        function a() {
          r.readable && r.resume && r.resume();
        }
        r.on("data", n),
          e.on("drain", a),
          e._isStdio ||
            (t && !1 === t.end) ||
            (r.on("end", s), r.on("close", c));
        var o = !1;
        function s() {
          o || ((o = !0), e.end());
        }
        function c() {
          o || ((o = !0), "function" == typeof e.destroy && e.destroy());
        }
        function f(e) {
          if ((u(), 0 === i.listenerCount(this, "error"))) throw e;
        }
        function u() {
          r.removeListener("data", n),
            e.removeListener("drain", a),
            r.removeListener("end", s),
            r.removeListener("close", c),
            r.removeListener("error", f),
            e.removeListener("error", f),
            r.removeListener("end", u),
            r.removeListener("close", u),
            e.removeListener("close", u);
        }
        return (
          r.on("error", f),
          e.on("error", f),
          r.on("end", u),
          r.on("close", u),
          e.on("close", u),
          e.emit("pipe", r),
          e
        );
      });
  },
  function (e, t, r) {
    "use strict";
    var i,
      n = "object" == typeof Reflect ? Reflect : null,
      a =
        n && "function" == typeof n.apply
          ? n.apply
          : function (e, t, r) {
              return Function.prototype.apply.call(e, t, r);
            };
    i =
      n && "function" == typeof n.ownKeys
        ? n.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            );
          }
        : function (e) {
            return Object.getOwnPropertyNames(e);
          };
    var o =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    function s() {
      s.init.call(this);
    }
    (e.exports = s),
      (s.EventEmitter = s),
      (s.prototype._events = void 0),
      (s.prototype._eventsCount = 0),
      (s.prototype._maxListeners = void 0);
    var c = 10;
    function f(e) {
      return void 0 === e._maxListeners
        ? s.defaultMaxListeners
        : e._maxListeners;
    }
    function u(e, t, r, i) {
      var n, a, o, s;
      if ("function" != typeof r)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof r
        );
      if (
        (void 0 === (a = e._events)
          ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== a.newListener &&
              (e.emit("newListener", t, r.listener ? r.listener : r),
              (a = e._events)),
            (o = a[t])),
        void 0 === o)
      )
        (o = a[t] = r), ++e._eventsCount;
      else if (
        ("function" == typeof o
          ? (o = a[t] = i ? [r, o] : [o, r])
          : i
          ? o.unshift(r)
          : o.push(r),
        (n = f(e)) > 0 && o.length > n && !o.warned)
      ) {
        o.warned = !0;
        var c = new Error(
          "Possible EventEmitter memory leak detected. " +
            o.length +
            " " +
            String(t) +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (c.name = "MaxListenersExceededWarning"),
          (c.emitter = e),
          (c.type = t),
          (c.count = o.length),
          (s = c),
          console && console.warn && console.warn(s);
      }
      return e;
    }
    function d() {
      for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);
      this.fired ||
        (this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        a(this.listener, this.target, e));
    }
    function l(e, t, r) {
      var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
        n = d.bind(i);
      return (n.listener = r), (i.wrapFn = n), n;
    }
    function h(e, t, r) {
      var i = e._events;
      if (void 0 === i) return [];
      var n = i[t];
      return void 0 === n
        ? []
        : "function" == typeof n
        ? r
          ? [n.listener || n]
          : [n]
        : r
        ? (function (e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
              t[r] = e[r].listener || e[r];
            return t;
          })(n)
        : b(n, n.length);
    }
    function p(e) {
      var t = this._events;
      if (void 0 !== t) {
        var r = t[e];
        if ("function" == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }
      return 0;
    }
    function b(e, t) {
      for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
      return r;
    }
    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function () {
        return c;
      },
      set: function (e) {
        if ("number" != typeof e || e < 0 || o(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        c = e;
      },
    }),
      (s.init = function () {
        (void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || o(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              "."
          );
        return (this._maxListeners = e), this;
      }),
      (s.prototype.getMaxListeners = function () {
        return f(this);
      }),
      (s.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
        var i = "error" === e,
          n = this._events;
        if (void 0 !== n) i = i && void 0 === n.error;
        else if (!i) return !1;
        if (i) {
          var o;
          if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
          var s = new Error(
            "Unhandled error." + (o ? " (" + o.message + ")" : "")
          );
          throw ((s.context = o), s);
        }
        var c = n[e];
        if (void 0 === c) return !1;
        if ("function" == typeof c) a(c, this, t);
        else {
          var f = c.length,
            u = b(c, f);
          for (r = 0; r < f; ++r) a(u[r], this, t);
        }
        return !0;
      }),
      (s.prototype.addListener = function (e, t) {
        return u(this, e, t, !1);
      }),
      (s.prototype.on = s.prototype.addListener),
      (s.prototype.prependListener = function (e, t) {
        return u(this, e, t, !0);
      }),
      (s.prototype.once = function (e, t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
        return this.on(e, l(this, e, t)), this;
      }),
      (s.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
        return this.prependListener(e, l(this, e, t)), this;
      }),
      (s.prototype.removeListener = function (e, t) {
        var r, i, n, a, o;
        if ("function" != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
        if (void 0 === (i = this._events)) return this;
        if (void 0 === (r = i[e])) return this;
        if (r === t || r.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete i[e],
              i.removeListener &&
                this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
          for (n = -1, a = r.length - 1; a >= 0; a--)
            if (r[a] === t || r[a].listener === t) {
              (o = r[a].listener), (n = a);
              break;
            }
          if (n < 0) return this;
          0 === n
            ? r.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              })(r, n),
            1 === r.length && (i[e] = r[0]),
            void 0 !== i.removeListener &&
              this.emit("removeListener", e, o || t);
        }
        return this;
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.removeAllListeners = function (e) {
        var t, r, i;
        if (void 0 === (r = this._events)) return this;
        if (void 0 === r.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== r[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete r[e]),
            this
          );
        if (0 === arguments.length) {
          var n,
            a = Object.keys(r);
          for (i = 0; i < a.length; ++i)
            "removeListener" !== (n = a[i]) && this.removeAllListeners(n);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = r[e])) this.removeListener(e, t);
        else if (void 0 !== t)
          for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this;
      }),
      (s.prototype.listeners = function (e) {
        return h(this, e, !0);
      }),
      (s.prototype.rawListeners = function (e) {
        return h(this, e, !1);
      }),
      (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : p.call(e, t);
      }),
      (s.prototype.listenerCount = p),
      (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? i(this._events) : [];
      });
  },
  function (e, t, r) {
    ((t = e.exports = r(42)).Stream = t),
      (t.Readable = t),
      (t.Writable = r(31)),
      (t.Duplex = r(10)),
      (t.Transform = r(45)),
      (t.PassThrough = r(92));
  },
  function (e, t, r) {
    var i = r(2),
      n = i.Buffer;
    function a(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return n(e, t, r);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (e.exports = i)
      : (a(i, t), (t.Buffer = o)),
      a(n, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return n(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = n(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? i.fill(t, r)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    "use strict";
    (function (t, i, n) {
      var a = r(19);
      function o(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, r) {
              var i = e.entry;
              e.entry = null;
              for (; i; ) {
                var n = i.callback;
                t.pendingcb--, n(r), (i = i.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      e.exports = v;
      var s,
        c =
          !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
            ? i
            : a.nextTick;
      v.WritableState = g;
      var f = r(14);
      f.inherits = r(0);
      var u = { deprecate: r(90) },
        d = r(43),
        l = r(30).Buffer,
        h = n.Uint8Array || function () {};
      var p,
        b = r(44);
      function m() {}
      function g(e, t) {
        (s = s || r(10)), (e = e || {});
        var i = t instanceof s;
        (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var n = e.highWaterMark,
          f = e.writableHighWaterMark,
          u = this.objectMode ? 16 : 16384;
        (this.highWaterMark = n || 0 === n ? n : i && (f || 0 === f) ? f : u),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var d = !1 === e.decodeStrings;
        (this.decodeStrings = !d),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var r = e._writableState,
                i = r.sync,
                n = r.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(r),
                t)
              )
                !(function (e, t, r, i, n) {
                  --t.pendingcb,
                    r
                      ? (a.nextTick(n, i),
                        a.nextTick(M, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i))
                      : (n(i),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i),
                        M(e, t));
                })(e, r, i, t, n);
              else {
                var o = S(r);
                o ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  _(e, r),
                  i ? c(w, e, r, o, n) : w(e, r, o, n);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this));
      }
      function v(e) {
        if (((s = s || r(10)), !(p.call(v, this) || this instanceof s)))
          return new v(e);
        (this._writableState = new g(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          d.call(this);
      }
      function y(e, t, r, i, n, a, o) {
        (t.writelen = i),
          (t.writecb = o),
          (t.writing = !0),
          (t.sync = !0),
          r ? e._writev(n, t.onwrite) : e._write(n, a, t.onwrite),
          (t.sync = !1);
      }
      function w(e, t, r, i) {
        r ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          i(),
          M(e, t);
      }
      function _(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
          var i = t.bufferedRequestCount,
            n = new Array(i),
            a = t.corkedRequestsFree;
          a.entry = r;
          for (var s = 0, c = !0; r; )
            (n[s] = r), r.isBuf || (c = !1), (r = r.next), (s += 1);
          (n.allBuffers = c),
            y(e, t, !0, t.length, n, "", a.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            a.next
              ? ((t.corkedRequestsFree = a.next), (a.next = null))
              : (t.corkedRequestsFree = new o(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var f = r.chunk,
              u = r.encoding,
              d = r.callback;
            if (
              (y(e, t, !1, t.objectMode ? 1 : f.length, f, u, d),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === r && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = r), (t.bufferProcessing = !1);
      }
      function S(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function k(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && e.emit("error", r),
            (t.prefinished = !0),
            e.emit("prefinish"),
            M(e, t);
        });
      }
      function M(e, t) {
        var r = S(t);
        return (
          r &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), a.nextTick(k, e, t))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          r
        );
      }
      f.inherits(v, d),
        (g.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(g.prototype, "buffer", {
              get: u.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((p = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(v, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!p.call(this, e) ||
                  (this === v && e && e._writableState instanceof g)
                );
              },
            }))
          : (p = function (e) {
              return e instanceof this;
            }),
        (v.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (v.prototype.write = function (e, t, r) {
          var i,
            n = this._writableState,
            o = !1,
            s = !n.objectMode && ((i = e), l.isBuffer(i) || i instanceof h);
          return (
            s &&
              !l.isBuffer(e) &&
              (e = (function (e) {
                return l.from(e);
              })(e)),
            "function" == typeof t && ((r = t), (t = null)),
            s ? (t = "buffer") : t || (t = n.defaultEncoding),
            "function" != typeof r && (r = m),
            n.ended
              ? (function (e, t) {
                  var r = new Error("write after end");
                  e.emit("error", r), a.nextTick(t, r);
                })(this, r)
              : (s ||
                  (function (e, t, r, i) {
                    var n = !0,
                      o = !1;
                    return (
                      null === r
                        ? (o = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof r ||
                          void 0 === r ||
                          t.objectMode ||
                          (o = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      o && (e.emit("error", o), a.nextTick(i, o), (n = !1)),
                      n
                    );
                  })(this, n, e, r)) &&
                (n.pendingcb++,
                (o = (function (e, t, r, i, n, a) {
                  if (!r) {
                    var o = (function (e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = l.from(t, r));
                      return t;
                    })(t, i, n);
                    i !== o && ((r = !0), (n = "buffer"), (i = o));
                  }
                  var s = t.objectMode ? 1 : i.length;
                  t.length += s;
                  var c = t.length < t.highWaterMark;
                  c || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: i,
                      encoding: n,
                      isBuf: r,
                      callback: a,
                      next: null,
                    }),
                      f
                        ? (f.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else y(e, t, !1, s, i, n, a);
                  return c;
                })(this, n, s, e, t, r))),
            o
          );
        }),
        (v.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (v.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              _(this, e));
        }),
        (v.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(v.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (v.prototype._write = function (e, t, r) {
          r(new Error("_write() is not implemented"));
        }),
        (v.prototype._writev = null),
        (v.prototype.end = function (e, t, r) {
          var i = this._writableState;
          "function" == typeof e
            ? ((r = e), (e = null), (t = null))
            : "function" == typeof t && ((r = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              i.finished ||
              (function (e, t, r) {
                (t.ending = !0),
                  M(e, t),
                  r && (t.finished ? a.nextTick(r) : e.once("finish", r));
                (t.ended = !0), (e.writable = !1);
              })(this, i, r);
        }),
        Object.defineProperty(v.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (v.prototype.destroy = b.destroy),
        (v.prototype._undestroy = b.undestroy),
        (v.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    }).call(this, r(8), r(88).setImmediate, r(7));
  },
  function (e, t, r) {
    "use strict";
    var i = r(91).Buffer,
      n =
        i.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function a(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (i.isEncoding === n || !n(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = c), (this.end = f), (t = 4);
          break;
        case "utf8":
          (this.fillLast = s), (t = 4);
          break;
        case "base64":
          (this.text = u), (this.end = d), (t = 3);
          break;
        default:
          return (this.write = l), void (this.end = h);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = i.allocUnsafe(t));
    }
    function o(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function s(e) {
      var t = this.lastTotal - this.lastNeed,
        r = (function (e, t, r) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== r
        ? r
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function c(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString("utf16le", t);
        if (r) {
          var i = r.charCodeAt(r.length - 1);
          if (i >= 55296 && i <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              r.slice(0, -1)
            );
        }
        return r;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function f(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, r);
      }
      return t;
    }
    function u(e, t) {
      var r = (e.length - t) % 3;
      return 0 === r
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - r),
          (this.lastTotal = 3),
          1 === r
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - r));
    }
    function d(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function l(e) {
      return e.toString(this.encoding);
    }
    function h(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = a),
      (a.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, r;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (r = this.lastNeed), (this.lastNeed = 0);
        } else r = 0;
        return r < e.length
          ? t
            ? t + this.text(e, r)
            : this.text(e, r)
          : t || "";
      }),
      (a.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (a.prototype.text = function (e, t) {
        var r = (function (e, t, r) {
          var i = t.length - 1;
          if (i < r) return 0;
          var n = o(t[i]);
          if (n >= 0) return n > 0 && (e.lastNeed = n - 1), n;
          if (--i < r || -2 === n) return 0;
          if ((n = o(t[i])) >= 0) return n > 0 && (e.lastNeed = n - 2), n;
          if (--i < r || -2 === n) return 0;
          if ((n = o(t[i])) >= 0)
            return n > 0 && (2 === n ? (n = 0) : (e.lastNeed = n - 3)), n;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = r;
        var i = e.length - (r - this.lastNeed);
        return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i);
      }),
      (a.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(2).Buffer,
      n = r(0),
      a = r(41),
      o = new Array(16),
      s = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
        6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0,
        6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
        4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
      ],
      c = [
        5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
        13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
        12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
        14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
      ],
      f = [
        11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11,
        9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14,
        8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6,
        5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
      ],
      u = [
        8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
        12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12,
        13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12,
        5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
      ],
      d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
      l = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function h() {
      a.call(this, 64),
        (this._a = 1732584193),
        (this._b = 4023233417),
        (this._c = 2562383102),
        (this._d = 271733878),
        (this._e = 3285377520);
    }
    function p(e, t) {
      return (e << t) | (e >>> (32 - t));
    }
    function b(e, t, r, i, n, a, o, s) {
      return (p((e + (t ^ r ^ i) + a + o) | 0, s) + n) | 0;
    }
    function m(e, t, r, i, n, a, o, s) {
      return (p((e + ((t & r) | (~t & i)) + a + o) | 0, s) + n) | 0;
    }
    function g(e, t, r, i, n, a, o, s) {
      return (p((e + ((t | ~r) ^ i) + a + o) | 0, s) + n) | 0;
    }
    function v(e, t, r, i, n, a, o, s) {
      return (p((e + ((t & i) | (r & ~i)) + a + o) | 0, s) + n) | 0;
    }
    function y(e, t, r, i, n, a, o, s) {
      return (p((e + (t ^ (r | ~i)) + a + o) | 0, s) + n) | 0;
    }
    n(h, a),
      (h.prototype._update = function () {
        for (var e = o, t = 0; t < 16; ++t)
          e[t] = this._block.readInt32LE(4 * t);
        for (
          var r = 0 | this._a,
            i = 0 | this._b,
            n = 0 | this._c,
            a = 0 | this._d,
            h = 0 | this._e,
            w = 0 | this._a,
            _ = 0 | this._b,
            S = 0 | this._c,
            k = 0 | this._d,
            M = 0 | this._e,
            x = 0;
          x < 80;
          x += 1
        ) {
          var E, A;
          x < 16
            ? ((E = b(r, i, n, a, h, e[s[x]], d[0], f[x])),
              (A = y(w, _, S, k, M, e[c[x]], l[0], u[x])))
            : x < 32
            ? ((E = m(r, i, n, a, h, e[s[x]], d[1], f[x])),
              (A = v(w, _, S, k, M, e[c[x]], l[1], u[x])))
            : x < 48
            ? ((E = g(r, i, n, a, h, e[s[x]], d[2], f[x])),
              (A = g(w, _, S, k, M, e[c[x]], l[2], u[x])))
            : x < 64
            ? ((E = v(r, i, n, a, h, e[s[x]], d[3], f[x])),
              (A = m(w, _, S, k, M, e[c[x]], l[3], u[x])))
            : ((E = y(r, i, n, a, h, e[s[x]], d[4], f[x])),
              (A = b(w, _, S, k, M, e[c[x]], l[4], u[x]))),
            (r = h),
            (h = a),
            (a = p(n, 10)),
            (n = i),
            (i = E),
            (w = M),
            (M = k),
            (k = p(S, 10)),
            (S = _),
            (_ = A);
        }
        var z = (this._b + n + k) | 0;
        (this._b = (this._c + a + M) | 0),
          (this._c = (this._d + h + w) | 0),
          (this._d = (this._e + r + _) | 0),
          (this._e = (this._a + i + S) | 0),
          (this._a = z);
      }),
      (h.prototype._digest = function () {
        (this._block[this._blockOffset++] = 128),
          this._blockOffset > 56 &&
            (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            (this._blockOffset = 0)),
          this._block.fill(0, this._blockOffset, 56),
          this._block.writeUInt32LE(this._length[0], 56),
          this._block.writeUInt32LE(this._length[1], 60),
          this._update();
        var e = i.alloc ? i.alloc(20) : new i(20);
        return (
          e.writeInt32LE(this._a, 0),
          e.writeInt32LE(this._b, 4),
          e.writeInt32LE(this._c, 8),
          e.writeInt32LE(this._d, 12),
          e.writeInt32LE(this._e, 16),
          e
        );
      }),
      (e.exports = h);
  },
  function (e, t, r) {
    ((t = e.exports =
      function (e) {
        e = e.toLowerCase();
        var r = t[e];
        if (!r)
          throw new Error(e + " is not supported (we accept pull requests)");
        return new r();
      }).sha = r(98)),
      (t.sha1 = r(99)),
      (t.sha224 = r(100)),
      (t.sha256 = r(46)),
      (t.sha384 = r(101)),
      (t.sha512 = r(47));
  },
  function (e, t, r) {
    "use strict";
    var i = r(5);
    function n(e) {
      (this.options = e),
        (this.type = this.options.type),
        (this.blockSize = 8),
        this._init(),
        (this.buffer = new Array(this.blockSize)),
        (this.bufferOff = 0);
    }
    (e.exports = n),
      (n.prototype._init = function () {}),
      (n.prototype.update = function (e) {
        return 0 === e.length
          ? []
          : "decrypt" === this.type
          ? this._updateDecrypt(e)
          : this._updateEncrypt(e);
      }),
      (n.prototype._buffer = function (e, t) {
        for (
          var r = Math.min(this.buffer.length - this.bufferOff, e.length - t),
            i = 0;
          i < r;
          i++
        )
          this.buffer[this.bufferOff + i] = e[t + i];
        return (this.bufferOff += r), r;
      }),
      (n.prototype._flushBuffer = function (e, t) {
        return (
          this._update(this.buffer, 0, e, t),
          (this.bufferOff = 0),
          this.blockSize
        );
      }),
      (n.prototype._updateEncrypt = function (e) {
        var t = 0,
          r = 0,
          i = ((this.bufferOff + e.length) / this.blockSize) | 0,
          n = new Array(i * this.blockSize);
        0 !== this.bufferOff &&
          ((t += this._buffer(e, t)),
          this.bufferOff === this.buffer.length &&
            (r += this._flushBuffer(n, r)));
        for (
          var a = e.length - ((e.length - t) % this.blockSize);
          t < a;
          t += this.blockSize
        )
          this._update(e, t, n, r), (r += this.blockSize);
        for (; t < e.length; t++, this.bufferOff++)
          this.buffer[this.bufferOff] = e[t];
        return n;
      }),
      (n.prototype._updateDecrypt = function (e) {
        for (
          var t = 0,
            r = 0,
            i = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1,
            n = new Array(i * this.blockSize);
          i > 0;
          i--
        )
          (t += this._buffer(e, t)), (r += this._flushBuffer(n, r));
        return (t += this._buffer(e, t)), n;
      }),
      (n.prototype.final = function (e) {
        var t, r;
        return (
          e && (t = this.update(e)),
          (r =
            "encrypt" === this.type
              ? this._finalEncrypt()
              : this._finalDecrypt()),
          t ? t.concat(r) : r
        );
      }),
      (n.prototype._pad = function (e, t) {
        if (0 === t) return !1;
        for (; t < e.length; ) e[t++] = 0;
        return !0;
      }),
      (n.prototype._finalEncrypt = function () {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var e = new Array(this.blockSize);
        return this._update(this.buffer, 0, e, 0), e;
      }),
      (n.prototype._unpad = function (e) {
        return e;
      }),
      (n.prototype._finalDecrypt = function () {
        i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var e = new Array(this.blockSize);
        return this._flushBuffer(e, 0), this._unpad(e);
      });
  },
  function (e, t, r) {
    var i = r(111),
      n = r(119),
      a = r(59);
    (t.createCipher = t.Cipher = i.createCipher),
      (t.createCipheriv = t.Cipheriv = i.createCipheriv),
      (t.createDecipher = t.Decipher = n.createDecipher),
      (t.createDecipheriv = t.Decipheriv = n.createDecipheriv),
      (t.listCiphers = t.getCiphers =
        function () {
          return Object.keys(a);
        });
  },
  function (e, t, r) {
    var i = {
        ECB: r(112),
        CBC: r(113),
        CFB: r(114),
        CFB8: r(115),
        CFB1: r(116),
        OFB: r(117),
        CTR: r(57),
        GCM: r(57),
      },
      n = r(59);
    for (var a in n) n[a].module = i[n[a].mode];
    e.exports = n;
  },
  function (e, t, r) {
    (function (t) {
      var i = r(3),
        n = r(11);
      function a(e, r) {
        var n = (function (e) {
            var t = o(e);
            return {
              blinder: t
                .toRed(i.mont(e.modulus))
                .redPow(new i(e.publicExponent))
                .fromRed(),
              unblinder: t.invm(e.modulus),
            };
          })(r),
          a = r.modulus.byteLength(),
          s = (i.mont(r.modulus), new i(e).mul(n.blinder).umod(r.modulus)),
          c = s.toRed(i.mont(r.prime1)),
          f = s.toRed(i.mont(r.prime2)),
          u = r.coefficient,
          d = r.prime1,
          l = r.prime2,
          h = c.redPow(r.exponent1),
          p = f.redPow(r.exponent2);
        (h = h.fromRed()), (p = p.fromRed());
        var b = h.isub(p).imul(u).umod(d);
        return (
          b.imul(l),
          p.iadd(b),
          new t(p.imul(n.unblinder).umod(r.modulus).toArray(!1, a))
        );
      }
      function o(e) {
        for (
          var t = e.modulus.byteLength(), r = new i(n(t));
          r.cmp(e.modulus) >= 0 || !r.umod(e.prime1) || !r.umod(e.prime2);

        )
          r = new i(n(t));
        return r;
      }
      (e.exports = a), (a.getr = o);
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    var i = t;
    (i.utils = r(6)),
      (i.common = r(16)),
      (i.sha = r(136)),
      (i.ripemd = r(140)),
      (i.hmac = r(141)),
      (i.sha1 = i.sha.sha1),
      (i.sha256 = i.sha.sha256),
      (i.sha224 = i.sha.sha224),
      (i.sha384 = i.sha.sha384),
      (i.sha512 = i.sha.sha512),
      (i.ripemd160 = i.ripemd.ripemd160);
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t, r) {
    "use strict";
    var i = r(1).Buffer,
      n = r(27).Transform;
    function a(e) {
      n.call(this),
        (this._block = i.allocUnsafe(e)),
        (this._blockSize = e),
        (this._blockOffset = 0),
        (this._length = [0, 0, 0, 0]),
        (this._finalized = !1);
    }
    r(0)(a, n),
      (a.prototype._transform = function (e, t, r) {
        var i = null;
        try {
          this.update(e, t);
        } catch (e) {
          i = e;
        }
        r(i);
      }),
      (a.prototype._flush = function (e) {
        var t = null;
        try {
          this.push(this.digest());
        } catch (e) {
          t = e;
        }
        e(t);
      }),
      (a.prototype.update = function (e, t) {
        if (
          ((function (e, t) {
            if (!i.isBuffer(e) && "string" != typeof e)
              throw new TypeError(t + " must be a string or a buffer");
          })(e, "Data"),
          this._finalized)
        )
          throw new Error("Digest already called");
        i.isBuffer(e) || (e = i.from(e, t));
        for (
          var r = this._block, n = 0;
          this._blockOffset + e.length - n >= this._blockSize;

        ) {
          for (var a = this._blockOffset; a < this._blockSize; )
            r[a++] = e[n++];
          this._update(), (this._blockOffset = 0);
        }
        for (; n < e.length; ) r[this._blockOffset++] = e[n++];
        for (var o = 0, s = 8 * e.length; s > 0; ++o)
          (this._length[o] += s),
            (s = (this._length[o] / 4294967296) | 0) > 0 &&
              (this._length[o] -= 4294967296 * s);
        return this;
      }),
      (a.prototype._update = function () {
        throw new Error("_update is not implemented");
      }),
      (a.prototype.digest = function (e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)),
          this._block.fill(0),
          (this._blockOffset = 0);
        for (var r = 0; r < 4; ++r) this._length[r] = 0;
        return t;
      }),
      (a.prototype._digest = function () {
        throw new Error("_digest is not implemented");
      }),
      (e.exports = a);
  },
  function (e, t, r) {
    "use strict";
    (function (t, i) {
      var n = r(19);
      e.exports = y;
      var a,
        o = r(40);
      y.ReadableState = v;
      r(28).EventEmitter;
      var s = function (e, t) {
          return e.listeners(t).length;
        },
        c = r(43),
        f = r(30).Buffer,
        u = t.Uint8Array || function () {};
      var d = r(14);
      d.inherits = r(0);
      var l = r(85),
        h = void 0;
      h = l && l.debuglog ? l.debuglog("stream") : function () {};
      var p,
        b = r(86),
        m = r(44);
      d.inherits(y, c);
      var g = ["error", "close", "destroy", "pause", "resume"];
      function v(e, t) {
        e = e || {};
        var i = t instanceof (a = a || r(10));
        (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var n = e.highWaterMark,
          o = e.readableHighWaterMark,
          s = this.objectMode ? 16 : 16384;
        (this.highWaterMark = n || 0 === n ? n : i && (o || 0 === o) ? o : s),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new b()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (p || (p = r(32).StringDecoder),
            (this.decoder = new p(e.encoding)),
            (this.encoding = e.encoding));
      }
      function y(e) {
        if (((a = a || r(10)), !(this instanceof y))) return new y(e);
        (this._readableState = new v(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          c.call(this);
      }
      function w(e, t, r, i, n) {
        var a,
          o = e._readableState;
        null === t
          ? ((o.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var r = t.decoder.end();
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length));
              }
              (t.ended = !0), M(e);
            })(e, o))
          : (n ||
              (a = (function (e, t) {
                var r;
                (i = t),
                  f.isBuffer(i) ||
                    i instanceof u ||
                    "string" == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new TypeError("Invalid non-string/buffer chunk"));
                var i;
                return r;
              })(o, t)),
            a
              ? e.emit("error", a)
              : o.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  o.objectMode ||
                  Object.getPrototypeOf(t) === f.prototype ||
                  (t = (function (e) {
                    return f.from(e);
                  })(t)),
                i
                  ? o.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : _(e, o, t, !0)
                  : o.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((o.reading = !1),
                    o.decoder && !r
                      ? ((t = o.decoder.write(t)),
                        o.objectMode || 0 !== t.length
                          ? _(e, o, t, !1)
                          : E(e, o))
                      : _(e, o, t, !1)))
              : i || (o.reading = !1));
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(o);
      }
      function _(e, t, r, i) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", r), e.read(0))
          : ((t.length += t.objectMode ? 1 : r.length),
            i ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && M(e)),
          E(e, t);
      }
      Object.defineProperty(y.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (y.prototype.destroy = m.destroy),
        (y.prototype._undestroy = m.undestroy),
        (y.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (y.prototype.push = function (e, t) {
          var r,
            i = this._readableState;
          return (
            i.objectMode
              ? (r = !0)
              : "string" == typeof e &&
                ((t = t || i.defaultEncoding) !== i.encoding &&
                  ((e = f.from(e, t)), (t = "")),
                (r = !0)),
            w(this, e, t, !1, r)
          );
        }),
        (y.prototype.unshift = function (e) {
          return w(this, e, null, !0, !1);
        }),
        (y.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (y.prototype.setEncoding = function (e) {
          return (
            p || (p = r(32).StringDecoder),
            (this._readableState.decoder = new p(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      var S = 8388608;
      function k(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= S
                    ? (e = S)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function M(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (h("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? n.nextTick(x, e) : x(e));
      }
      function x(e) {
        h("emit readable"), e.emit("readable"), j(e);
      }
      function E(e, t) {
        t.readingMore || ((t.readingMore = !0), n.nextTick(A, e, t));
      }
      function A(e, t) {
        for (
          var r = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (h("maybeReadMore read 0"), e.read(0), r !== t.length);

        )
          r = t.length;
        t.readingMore = !1;
      }
      function z(e) {
        h("readable nexttick read 0"), e.read(0);
      }
      function B(e, t) {
        t.reading || (h("resume read 0"), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit("resume"),
          j(e),
          t.flowing && !t.reading && e.read(0);
      }
      function j(e) {
        var t = e._readableState;
        for (h("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function I(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = (function (e, t, r) {
                  var i;
                  e < t.head.data.length
                    ? ((i = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (i =
                        e === t.head.data.length
                          ? t.shift()
                          : r
                          ? (function (e, t) {
                              var r = t.head,
                                i = 1,
                                n = r.data;
                              e -= n.length;
                              for (; (r = r.next); ) {
                                var a = r.data,
                                  o = e > a.length ? a.length : e;
                                if (
                                  (o === a.length
                                    ? (n += a)
                                    : (n += a.slice(0, e)),
                                  0 === (e -= o))
                                ) {
                                  o === a.length
                                    ? (++i,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = a.slice(o)));
                                  break;
                                }
                                ++i;
                              }
                              return (t.length -= i), n;
                            })(e, t)
                          : (function (e, t) {
                              var r = f.allocUnsafe(e),
                                i = t.head,
                                n = 1;
                              i.data.copy(r), (e -= i.data.length);
                              for (; (i = i.next); ) {
                                var a = i.data,
                                  o = e > a.length ? a.length : e;
                                if (
                                  (a.copy(r, r.length - e, 0, o),
                                  0 === (e -= o))
                                ) {
                                  o === a.length
                                    ? (++n,
                                      i.next
                                        ? (t.head = i.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = i), (i.data = a.slice(o)));
                                  break;
                                }
                                ++n;
                              }
                              return (t.length -= n), r;
                            })(e, t));
                  return i;
                })(e, t.buffer, t.decoder)),
            r);
        var r;
      }
      function R(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), n.nextTick(C, t, e));
      }
      function C(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function q(e, t) {
        for (var r = 0, i = e.length; r < i; r++) if (e[r] === t) return r;
        return -1;
      }
      (y.prototype.read = function (e) {
        h("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          r = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            h("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? R(this) : M(this),
            null
          );
        if (0 === (e = k(e, t)) && t.ended)
          return 0 === t.length && R(this), null;
        var i,
          n = t.needReadable;
        return (
          h("need readable", n),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            h("length less than watermark", (n = !0)),
          t.ended || t.reading
            ? h("reading or ended", (n = !1))
            : n &&
              (h("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = k(r, t))),
          null === (i = e > 0 ? I(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), r !== e && t.ended && R(this)),
          null !== i && this.emit("data", i),
          i
        );
      }),
        (y.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (y.prototype.pipe = function (e, t) {
          var r = this,
            a = this._readableState;
          switch (a.pipesCount) {
            case 0:
              a.pipes = e;
              break;
            case 1:
              a.pipes = [a.pipes, e];
              break;
            default:
              a.pipes.push(e);
          }
          (a.pipesCount += 1), h("pipe count=%d opts=%j", a.pipesCount, t);
          var c =
            (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr ? u : y;
          function f(t, i) {
            h("onunpipe"),
              t === r &&
                i &&
                !1 === i.hasUnpiped &&
                ((i.hasUnpiped = !0),
                h("cleanup"),
                e.removeListener("close", g),
                e.removeListener("finish", v),
                e.removeListener("drain", d),
                e.removeListener("error", m),
                e.removeListener("unpipe", f),
                r.removeListener("end", u),
                r.removeListener("end", y),
                r.removeListener("data", b),
                (l = !0),
                !a.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  d());
          }
          function u() {
            h("onend"), e.end();
          }
          a.endEmitted ? n.nextTick(c) : r.once("end", c), e.on("unpipe", f);
          var d = (function (e) {
            return function () {
              var t = e._readableState;
              h("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && s(e, "data") && ((t.flowing = !0), j(e));
            };
          })(r);
          e.on("drain", d);
          var l = !1;
          var p = !1;
          function b(t) {
            h("ondata"),
              (p = !1),
              !1 !== e.write(t) ||
                p ||
                (((1 === a.pipesCount && a.pipes === e) ||
                  (a.pipesCount > 1 && -1 !== q(a.pipes, e))) &&
                  !l &&
                  (h(
                    "false write response, pause",
                    r._readableState.awaitDrain
                  ),
                  r._readableState.awaitDrain++,
                  (p = !0)),
                r.pause());
          }
          function m(t) {
            h("onerror", t),
              y(),
              e.removeListener("error", m),
              0 === s(e, "error") && e.emit("error", t);
          }
          function g() {
            e.removeListener("finish", v), y();
          }
          function v() {
            h("onfinish"), e.removeListener("close", g), y();
          }
          function y() {
            h("unpipe"), r.unpipe(e);
          }
          return (
            r.on("data", b),
            (function (e, t, r) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, r);
              e._events && e._events[t]
                ? o(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r);
            })(e, "error", m),
            e.once("close", g),
            e.once("finish", v),
            e.emit("pipe", r),
            a.flowing || (h("pipe resume"), r.resume()),
            e
          );
        }),
        (y.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return e && e !== t.pipes
              ? this
              : (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, r),
                this);
          if (!e) {
            var i = t.pipes,
              n = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var a = 0; a < n; a++) i[a].emit("unpipe", this, r);
            return this;
          }
          var o = q(t.pipes, e);
          return -1 === o
            ? this
            : (t.pipes.splice(o, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, r),
              this);
        }),
        (y.prototype.on = function (e, t) {
          var r = c.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var i = this._readableState;
            i.endEmitted ||
              i.readableListening ||
              ((i.readableListening = i.needReadable = !0),
              (i.emittedReadable = !1),
              i.reading ? i.length && M(this) : n.nextTick(z, this));
          }
          return r;
        }),
        (y.prototype.addListener = y.prototype.on),
        (y.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (h("resume"),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), n.nextTick(B, e, t));
              })(this, e)),
            this
          );
        }),
        (y.prototype.pause = function () {
          return (
            h("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (h("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (y.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            i = !1;
          for (var n in (e.on("end", function () {
            if ((h("wrapped end"), r.decoder && !r.ended)) {
              var e = r.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (n) {
            (h("wrapped data"),
            r.decoder && (n = r.decoder.write(n)),
            r.objectMode && null == n) ||
              ((r.objectMode || (n && n.length)) &&
                (t.push(n) || ((i = !0), e.pause())));
          }),
          e))
            void 0 === this[n] &&
              "function" == typeof e[n] &&
              (this[n] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(n));
          for (var a = 0; a < g.length; a++)
            e.on(g[a], this.emit.bind(this, g[a]));
          return (
            (this._read = function (t) {
              h("wrapped _read", t), i && ((i = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(y.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (y._fromList = I);
    }).call(this, r(7), r(8));
  },
  function (e, t, r) {
    e.exports = r(28).EventEmitter;
  },
  function (e, t, r) {
    "use strict";
    var i = r(19);
    function n(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function (e, t) {
        var r = this,
          a = this._readableState && this._readableState.destroyed,
          o = this._writableState && this._writableState.destroyed;
        return a || o
          ? (t
              ? t(e)
              : !e ||
                (this._writableState && this._writableState.errorEmitted) ||
                i.nextTick(n, this, e),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? (i.nextTick(n, r, e),
                  r._writableState && (r._writableState.errorEmitted = !0))
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var i = r(10),
      n = r(14);
    function a(e, t) {
      var r = this._transformState;
      r.transforming = !1;
      var i = r.writecb;
      if (!i)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (r.writechunk = null),
        (r.writecb = null),
        null != t && this.push(t),
        i(e);
      var n = this._readableState;
      (n.reading = !1),
        (n.needReadable || n.length < n.highWaterMark) &&
          this._read(n.highWaterMark);
    }
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      i.call(this, e),
        (this._transformState = {
          afterTransform: a.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", s);
    }
    function s() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function (t, r) {
            c(e, t, r);
          })
        : c(this, null, null);
    }
    function c(e, t, r) {
      if (t) return e.emit("error", t);
      if ((null != r && e.push(r), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (n.inherits = r(0)),
      n.inherits(o, i),
      (o.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          i.prototype.push.call(this, e, t)
        );
      }),
      (o.prototype._transform = function (e, t, r) {
        throw new Error("_transform() is not implemented");
      }),
      (o.prototype._write = function (e, t, r) {
        var i = this._transformState;
        if (
          ((i.writecb = r),
          (i.writechunk = e),
          (i.writeencoding = t),
          !i.transforming)
        ) {
          var n = this._readableState;
          (i.needTransform || n.needReadable || n.length < n.highWaterMark) &&
            this._read(n.highWaterMark);
        }
      }),
      (o.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (o.prototype._destroy = function (e, t) {
        var r = this;
        i.prototype._destroy.call(this, e, function (e) {
          t(e), r.emit("close");
        });
      });
  },
  function (e, t, r) {
    var i = r(0),
      n = r(12),
      a = r(1).Buffer,
      o = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ],
      s = new Array(64);
    function c() {
      this.init(), (this._w = s), n.call(this, 64, 56);
    }
    function f(e, t, r) {
      return r ^ (e & (t ^ r));
    }
    function u(e, t, r) {
      return (e & t) | (r & (e | t));
    }
    function d(e) {
      return (
        ((e >>> 2) | (e << 30)) ^
        ((e >>> 13) | (e << 19)) ^
        ((e >>> 22) | (e << 10))
      );
    }
    function l(e) {
      return (
        ((e >>> 6) | (e << 26)) ^
        ((e >>> 11) | (e << 21)) ^
        ((e >>> 25) | (e << 7))
      );
    }
    function h(e) {
      return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
    }
    i(c, n),
      (c.prototype.init = function () {
        return (
          (this._a = 1779033703),
          (this._b = 3144134277),
          (this._c = 1013904242),
          (this._d = 2773480762),
          (this._e = 1359893119),
          (this._f = 2600822924),
          (this._g = 528734635),
          (this._h = 1541459225),
          this
        );
      }),
      (c.prototype._update = function (e) {
        for (
          var t,
            r = this._w,
            i = 0 | this._a,
            n = 0 | this._b,
            a = 0 | this._c,
            s = 0 | this._d,
            c = 0 | this._e,
            p = 0 | this._f,
            b = 0 | this._g,
            m = 0 | this._h,
            g = 0;
          g < 16;
          ++g
        )
          r[g] = e.readInt32BE(4 * g);
        for (; g < 64; ++g)
          r[g] =
            0 |
            (((((t = r[g - 2]) >>> 17) | (t << 15)) ^
              ((t >>> 19) | (t << 13)) ^
              (t >>> 10)) +
              r[g - 7] +
              h(r[g - 15]) +
              r[g - 16]);
        for (var v = 0; v < 64; ++v) {
          var y = (m + l(c) + f(c, p, b) + o[v] + r[v]) | 0,
            w = (d(i) + u(i, n, a)) | 0;
          (m = b),
            (b = p),
            (p = c),
            (c = (s + y) | 0),
            (s = a),
            (a = n),
            (n = i),
            (i = (y + w) | 0);
        }
        (this._a = (i + this._a) | 0),
          (this._b = (n + this._b) | 0),
          (this._c = (a + this._c) | 0),
          (this._d = (s + this._d) | 0),
          (this._e = (c + this._e) | 0),
          (this._f = (p + this._f) | 0),
          (this._g = (b + this._g) | 0),
          (this._h = (m + this._h) | 0);
      }),
      (c.prototype._hash = function () {
        var e = a.allocUnsafe(32);
        return (
          e.writeInt32BE(this._a, 0),
          e.writeInt32BE(this._b, 4),
          e.writeInt32BE(this._c, 8),
          e.writeInt32BE(this._d, 12),
          e.writeInt32BE(this._e, 16),
          e.writeInt32BE(this._f, 20),
          e.writeInt32BE(this._g, 24),
          e.writeInt32BE(this._h, 28),
          e
        );
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    var i = r(0),
      n = r(12),
      a = r(1).Buffer,
      o = [
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ],
      s = new Array(160);
    function c() {
      this.init(), (this._w = s), n.call(this, 128, 112);
    }
    function f(e, t, r) {
      return r ^ (e & (t ^ r));
    }
    function u(e, t, r) {
      return (e & t) | (r & (e | t));
    }
    function d(e, t) {
      return (
        ((e >>> 28) | (t << 4)) ^
        ((t >>> 2) | (e << 30)) ^
        ((t >>> 7) | (e << 25))
      );
    }
    function l(e, t) {
      return (
        ((e >>> 14) | (t << 18)) ^
        ((e >>> 18) | (t << 14)) ^
        ((t >>> 9) | (e << 23))
      );
    }
    function h(e, t) {
      return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
    }
    function p(e, t) {
      return (
        ((e >>> 1) | (t << 31)) ^
        ((e >>> 8) | (t << 24)) ^
        ((e >>> 7) | (t << 25))
      );
    }
    function b(e, t) {
      return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
    }
    function m(e, t) {
      return (
        ((e >>> 19) | (t << 13)) ^
        ((t >>> 29) | (e << 3)) ^
        ((e >>> 6) | (t << 26))
      );
    }
    function g(e, t) {
      return e >>> 0 < t >>> 0 ? 1 : 0;
    }
    i(c, n),
      (c.prototype.init = function () {
        return (
          (this._ah = 1779033703),
          (this._bh = 3144134277),
          (this._ch = 1013904242),
          (this._dh = 2773480762),
          (this._eh = 1359893119),
          (this._fh = 2600822924),
          (this._gh = 528734635),
          (this._hh = 1541459225),
          (this._al = 4089235720),
          (this._bl = 2227873595),
          (this._cl = 4271175723),
          (this._dl = 1595750129),
          (this._el = 2917565137),
          (this._fl = 725511199),
          (this._gl = 4215389547),
          (this._hl = 327033209),
          this
        );
      }),
      (c.prototype._update = function (e) {
        for (
          var t = this._w,
            r = 0 | this._ah,
            i = 0 | this._bh,
            n = 0 | this._ch,
            a = 0 | this._dh,
            s = 0 | this._eh,
            c = 0 | this._fh,
            v = 0 | this._gh,
            y = 0 | this._hh,
            w = 0 | this._al,
            _ = 0 | this._bl,
            S = 0 | this._cl,
            k = 0 | this._dl,
            M = 0 | this._el,
            x = 0 | this._fl,
            E = 0 | this._gl,
            A = 0 | this._hl,
            z = 0;
          z < 32;
          z += 2
        )
          (t[z] = e.readInt32BE(4 * z)), (t[z + 1] = e.readInt32BE(4 * z + 4));
        for (; z < 160; z += 2) {
          var B = t[z - 30],
            j = t[z - 30 + 1],
            I = h(B, j),
            R = p(j, B),
            C = b((B = t[z - 4]), (j = t[z - 4 + 1])),
            q = m(j, B),
            T = t[z - 14],
            P = t[z - 14 + 1],
            O = t[z - 32],
            D = t[z - 32 + 1],
            U = (R + P) | 0,
            N = (I + T + g(U, R)) | 0;
          (N =
            ((N = (N + C + g((U = (U + q) | 0), q)) | 0) +
              O +
              g((U = (U + D) | 0), D)) |
            0),
            (t[z] = N),
            (t[z + 1] = U);
        }
        for (var L = 0; L < 160; L += 2) {
          (N = t[L]), (U = t[L + 1]);
          var F = u(r, i, n),
            K = u(w, _, S),
            H = d(r, w),
            W = d(w, r),
            Y = l(s, M),
            V = l(M, s),
            X = o[L],
            G = o[L + 1],
            J = f(s, c, v),
            Z = f(M, x, E),
            $ = (A + V) | 0,
            Q = (y + Y + g($, A)) | 0;
          Q =
            ((Q =
              ((Q = (Q + J + g(($ = ($ + Z) | 0), Z)) | 0) +
                X +
                g(($ = ($ + G) | 0), G)) |
              0) +
              N +
              g(($ = ($ + U) | 0), U)) |
            0;
          var ee = (W + K) | 0,
            te = (H + F + g(ee, W)) | 0;
          (y = v),
            (A = E),
            (v = c),
            (E = x),
            (c = s),
            (x = M),
            (s = (a + Q + g((M = (k + $) | 0), k)) | 0),
            (a = n),
            (k = S),
            (n = i),
            (S = _),
            (i = r),
            (_ = w),
            (r = (Q + te + g((w = ($ + ee) | 0), $)) | 0);
        }
        (this._al = (this._al + w) | 0),
          (this._bl = (this._bl + _) | 0),
          (this._cl = (this._cl + S) | 0),
          (this._dl = (this._dl + k) | 0),
          (this._el = (this._el + M) | 0),
          (this._fl = (this._fl + x) | 0),
          (this._gl = (this._gl + E) | 0),
          (this._hl = (this._hl + A) | 0),
          (this._ah = (this._ah + r + g(this._al, w)) | 0),
          (this._bh = (this._bh + i + g(this._bl, _)) | 0),
          (this._ch = (this._ch + n + g(this._cl, S)) | 0),
          (this._dh = (this._dh + a + g(this._dl, k)) | 0),
          (this._eh = (this._eh + s + g(this._el, M)) | 0),
          (this._fh = (this._fh + c + g(this._fl, x)) | 0),
          (this._gh = (this._gh + v + g(this._gl, E)) | 0),
          (this._hh = (this._hh + y + g(this._hl, A)) | 0);
      }),
      (c.prototype._hash = function () {
        var e = a.allocUnsafe(64);
        function t(t, r, i) {
          e.writeInt32BE(t, i), e.writeInt32BE(r, i + 4);
        }
        return (
          t(this._ah, this._al, 0),
          t(this._bh, this._bl, 8),
          t(this._ch, this._cl, 16),
          t(this._dh, this._dl, 24),
          t(this._eh, this._el, 32),
          t(this._fh, this._fl, 40),
          t(this._gh, this._gl, 48),
          t(this._hh, this._hl, 56),
          e
        );
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    "use strict";
    var i = r(0),
      n = r(102),
      a = r(9),
      o = r(1).Buffer,
      s = r(49),
      c = r(33),
      f = r(34),
      u = o.alloc(128);
    function d(e, t) {
      a.call(this, "digest"), "string" == typeof t && (t = o.from(t));
      var r = "sha512" === e || "sha384" === e ? 128 : 64;
      ((this._alg = e), (this._key = t), t.length > r)
        ? (t = ("rmd160" === e ? new c() : f(e)).update(t).digest())
        : t.length < r && (t = o.concat([t, u], r));
      for (
        var i = (this._ipad = o.allocUnsafe(r)),
          n = (this._opad = o.allocUnsafe(r)),
          s = 0;
        s < r;
        s++
      )
        (i[s] = 54 ^ t[s]), (n[s] = 92 ^ t[s]);
      (this._hash = "rmd160" === e ? new c() : f(e)), this._hash.update(i);
    }
    i(d, a),
      (d.prototype._update = function (e) {
        this._hash.update(e);
      }),
      (d.prototype._final = function () {
        var e = this._hash.digest();
        return ("rmd160" === this._alg ? new c() : f(this._alg))
          .update(this._opad)
          .update(e)
          .digest();
      }),
      (e.exports = function (e, t) {
        return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e
          ? new d("rmd160", t)
          : "md5" === e
          ? new n(s, t)
          : new d(e, t);
      });
  },
  function (e, t, r) {
    var i = r(26);
    e.exports = function (e) {
      return new i().update(e).digest();
    };
  },
  function (e) {
    e.exports = {
      sha224WithRSAEncryption: {
        sign: "rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c",
      },
      "RSA-SHA224": {
        sign: "ecdsa/rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c",
      },
      sha256WithRSAEncryption: {
        sign: "rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420",
      },
      "RSA-SHA256": {
        sign: "ecdsa/rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420",
      },
      sha384WithRSAEncryption: {
        sign: "rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430",
      },
      "RSA-SHA384": {
        sign: "ecdsa/rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430",
      },
      sha512WithRSAEncryption: {
        sign: "rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440",
      },
      "RSA-SHA512": {
        sign: "ecdsa/rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440",
      },
      "RSA-SHA1": {
        sign: "rsa",
        hash: "sha1",
        id: "3021300906052b0e03021a05000414",
      },
      "ecdsa-with-SHA1": { sign: "ecdsa", hash: "sha1", id: "" },
      sha256: { sign: "ecdsa", hash: "sha256", id: "" },
      sha224: { sign: "ecdsa", hash: "sha224", id: "" },
      sha384: { sign: "ecdsa", hash: "sha384", id: "" },
      sha512: { sign: "ecdsa", hash: "sha512", id: "" },
      "DSA-SHA": { sign: "dsa", hash: "sha1", id: "" },
      "DSA-SHA1": { sign: "dsa", hash: "sha1", id: "" },
      DSA: { sign: "dsa", hash: "sha1", id: "" },
      "DSA-WITH-SHA224": { sign: "dsa", hash: "sha224", id: "" },
      "DSA-SHA224": { sign: "dsa", hash: "sha224", id: "" },
      "DSA-WITH-SHA256": { sign: "dsa", hash: "sha256", id: "" },
      "DSA-SHA256": { sign: "dsa", hash: "sha256", id: "" },
      "DSA-WITH-SHA384": { sign: "dsa", hash: "sha384", id: "" },
      "DSA-SHA384": { sign: "dsa", hash: "sha384", id: "" },
      "DSA-WITH-SHA512": { sign: "dsa", hash: "sha512", id: "" },
      "DSA-SHA512": { sign: "dsa", hash: "sha512", id: "" },
      "DSA-RIPEMD160": { sign: "dsa", hash: "rmd160", id: "" },
      ripemd160WithRSA: {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414",
      },
      "RSA-RIPEMD160": {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414",
      },
      md5WithRSAEncryption: {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410",
      },
      "RSA-MD5": {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410",
      },
    };
  },
  function (e, t, r) {
    (t.pbkdf2 = r(104)), (t.pbkdf2Sync = r(54));
  },
  function (e, t, r) {
    (function (t) {
      var r = Math.pow(2, 30) - 1;
      function i(e, r) {
        if ("string" != typeof e && !t.isBuffer(e))
          throw new TypeError(r + " must be a buffer or string");
      }
      e.exports = function (e, t, n, a) {
        if ((i(e, "Password"), i(t, "Salt"), "number" != typeof n))
          throw new TypeError("Iterations not a number");
        if (n < 0) throw new TypeError("Bad iterations");
        if ("number" != typeof a)
          throw new TypeError("Key length not a number");
        if (a < 0 || a > r || a != a) throw new TypeError("Bad key length");
      };
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    (function (t) {
      var r;
      t.browser
        ? (r = "utf-8")
        : (r =
            parseInt(t.version.split(".")[0].slice(1), 10) >= 6
              ? "utf-8"
              : "binary");
      e.exports = r;
    }).call(this, r(8));
  },
  function (e, t, r) {
    var i = r(49),
      n = r(33),
      a = r(34),
      o = r(52),
      s = r(53),
      c = r(1).Buffer,
      f = c.alloc(128),
      u = {
        md5: 16,
        sha1: 20,
        sha224: 28,
        sha256: 32,
        sha384: 48,
        sha512: 64,
        rmd160: 20,
        ripemd160: 20,
      };
    function d(e, t, r) {
      var o = (function (e) {
          return "rmd160" === e || "ripemd160" === e
            ? function (e) {
                return new n().update(e).digest();
              }
            : "md5" === e
            ? i
            : function (t) {
                return a(e).update(t).digest();
              };
        })(e),
        s = "sha512" === e || "sha384" === e ? 128 : 64;
      t.length > s ? (t = o(t)) : t.length < s && (t = c.concat([t, f], s));
      for (
        var d = c.allocUnsafe(s + u[e]), l = c.allocUnsafe(s + u[e]), h = 0;
        h < s;
        h++
      )
        (d[h] = 54 ^ t[h]), (l[h] = 92 ^ t[h]);
      var p = c.allocUnsafe(s + r + 4);
      d.copy(p, 0, 0, s),
        (this.ipad1 = p),
        (this.ipad2 = d),
        (this.opad = l),
        (this.alg = e),
        (this.blocksize = s),
        (this.hash = o),
        (this.size = u[e]);
    }
    (d.prototype.run = function (e, t) {
      return (
        e.copy(t, this.blocksize),
        this.hash(t).copy(this.opad, this.blocksize),
        this.hash(this.opad)
      );
    }),
      (e.exports = function (e, t, r, i, n) {
        o(e, t, r, i),
          c.isBuffer(e) || (e = c.from(e, s)),
          c.isBuffer(t) || (t = c.from(t, s));
        var a = new d((n = n || "sha1"), e, t.length),
          f = c.allocUnsafe(i),
          l = c.allocUnsafe(t.length + 4);
        t.copy(l, 0, 0, t.length);
        for (var h = 0, p = u[n], b = Math.ceil(i / p), m = 1; m <= b; m++) {
          l.writeUInt32BE(m, t.length);
          for (var g = a.run(l, a.ipad1), v = g, y = 1; y < r; y++) {
            v = a.run(v, a.ipad2);
            for (var w = 0; w < p; w++) g[w] ^= v[w];
          }
          g.copy(f, h), (h += p);
        }
        return f;
      });
  },
  function (e, t, r) {
    "use strict";
    (t.readUInt32BE = function (e, t) {
      return (
        ((e[0 + t] << 24) | (e[1 + t] << 16) | (e[2 + t] << 8) | e[3 + t]) >>> 0
      );
    }),
      (t.writeUInt32BE = function (e, t, r) {
        (e[0 + r] = t >>> 24),
          (e[1 + r] = (t >>> 16) & 255),
          (e[2 + r] = (t >>> 8) & 255),
          (e[3 + r] = 255 & t);
      }),
      (t.ip = function (e, t, r, i) {
        for (var n = 0, a = 0, o = 6; o >= 0; o -= 2) {
          for (var s = 0; s <= 24; s += 8)
            (n <<= 1), (n |= (t >>> (s + o)) & 1);
          for (s = 0; s <= 24; s += 8) (n <<= 1), (n |= (e >>> (s + o)) & 1);
        }
        for (o = 6; o >= 0; o -= 2) {
          for (s = 1; s <= 25; s += 8) (a <<= 1), (a |= (t >>> (s + o)) & 1);
          for (s = 1; s <= 25; s += 8) (a <<= 1), (a |= (e >>> (s + o)) & 1);
        }
        (r[i + 0] = n >>> 0), (r[i + 1] = a >>> 0);
      }),
      (t.rip = function (e, t, r, i) {
        for (var n = 0, a = 0, o = 0; o < 4; o++)
          for (var s = 24; s >= 0; s -= 8)
            (n <<= 1),
              (n |= (t >>> (s + o)) & 1),
              (n <<= 1),
              (n |= (e >>> (s + o)) & 1);
        for (o = 4; o < 8; o++)
          for (s = 24; s >= 0; s -= 8)
            (a <<= 1),
              (a |= (t >>> (s + o)) & 1),
              (a <<= 1),
              (a |= (e >>> (s + o)) & 1);
        (r[i + 0] = n >>> 0), (r[i + 1] = a >>> 0);
      }),
      (t.pc1 = function (e, t, r, i) {
        for (var n = 0, a = 0, o = 7; o >= 5; o--) {
          for (var s = 0; s <= 24; s += 8) (n <<= 1), (n |= (t >> (s + o)) & 1);
          for (s = 0; s <= 24; s += 8) (n <<= 1), (n |= (e >> (s + o)) & 1);
        }
        for (s = 0; s <= 24; s += 8) (n <<= 1), (n |= (t >> (s + o)) & 1);
        for (o = 1; o <= 3; o++) {
          for (s = 0; s <= 24; s += 8) (a <<= 1), (a |= (t >> (s + o)) & 1);
          for (s = 0; s <= 24; s += 8) (a <<= 1), (a |= (e >> (s + o)) & 1);
        }
        for (s = 0; s <= 24; s += 8) (a <<= 1), (a |= (e >> (s + o)) & 1);
        (r[i + 0] = n >>> 0), (r[i + 1] = a >>> 0);
      }),
      (t.r28shl = function (e, t) {
        return ((e << t) & 268435455) | (e >>> (28 - t));
      });
    var i = [
      14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21,
      1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22,
      3, 10, 14, 6, 20, 27, 24,
    ];
    (t.pc2 = function (e, t, r, n) {
      for (var a = 0, o = 0, s = i.length >>> 1, c = 0; c < s; c++)
        (a <<= 1), (a |= (e >>> i[c]) & 1);
      for (c = s; c < i.length; c++) (o <<= 1), (o |= (t >>> i[c]) & 1);
      (r[n + 0] = a >>> 0), (r[n + 1] = o >>> 0);
    }),
      (t.expand = function (e, t, r) {
        var i = 0,
          n = 0;
        i = ((1 & e) << 5) | (e >>> 27);
        for (var a = 23; a >= 15; a -= 4) (i <<= 6), (i |= (e >>> a) & 63);
        for (a = 11; a >= 3; a -= 4) (n |= (e >>> a) & 63), (n <<= 6);
        (n |= ((31 & e) << 1) | (e >>> 31)),
          (t[r + 0] = i >>> 0),
          (t[r + 1] = n >>> 0);
      });
    var n = [
      14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6,
      12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6,
      9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15,
      3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13,
      10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15,
      13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13,
      0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14,
      11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8,
      0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13,
      8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1,
      12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13,
      8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4,
      2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0,
      9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15,
      6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15,
      2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3,
      11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14,
      4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4,
      0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6,
      1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0,
      8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3,
      11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2,
      11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13,
      0, 15, 3, 3, 5, 5, 6, 8, 11,
    ];
    t.substitute = function (e, t) {
      for (var r = 0, i = 0; i < 4; i++) {
        (r <<= 4), (r |= n[64 * i + ((e >>> (18 - 6 * i)) & 63)]);
      }
      for (i = 0; i < 4; i++) {
        (r <<= 4), (r |= n[256 + 64 * i + ((t >>> (18 - 6 * i)) & 63)]);
      }
      return r >>> 0;
    };
    var a = [
      16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18,
      0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7,
    ];
    (t.permute = function (e) {
      for (var t = 0, r = 0; r < a.length; r++)
        (t <<= 1), (t |= (e >>> a[r]) & 1);
      return t >>> 0;
    }),
      (t.padSplit = function (e, t, r) {
        for (var i = e.toString(2); i.length < t; ) i = "0" + i;
        for (var n = [], a = 0; a < t; a += r) n.push(i.slice(a, a + r));
        return n.join(" ");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(5),
      n = r(0),
      a = r(55),
      o = r(35);
    function s() {
      (this.tmp = new Array(2)), (this.keys = null);
    }
    function c(e) {
      o.call(this, e);
      var t = new s();
      (this._desState = t), this.deriveKeys(t, e.key);
    }
    n(c, o),
      (e.exports = c),
      (c.create = function (e) {
        return new c(e);
      });
    var f = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    (c.prototype.deriveKeys = function (e, t) {
      (e.keys = new Array(32)),
        i.equal(t.length, this.blockSize, "Invalid key length");
      var r = a.readUInt32BE(t, 0),
        n = a.readUInt32BE(t, 4);
      a.pc1(r, n, e.tmp, 0), (r = e.tmp[0]), (n = e.tmp[1]);
      for (var o = 0; o < e.keys.length; o += 2) {
        var s = f[o >>> 1];
        (r = a.r28shl(r, s)), (n = a.r28shl(n, s)), a.pc2(r, n, e.keys, o);
      }
    }),
      (c.prototype._update = function (e, t, r, i) {
        var n = this._desState,
          o = a.readUInt32BE(e, t),
          s = a.readUInt32BE(e, t + 4);
        a.ip(o, s, n.tmp, 0),
          (o = n.tmp[0]),
          (s = n.tmp[1]),
          "encrypt" === this.type
            ? this._encrypt(n, o, s, n.tmp, 0)
            : this._decrypt(n, o, s, n.tmp, 0),
          (o = n.tmp[0]),
          (s = n.tmp[1]),
          a.writeUInt32BE(r, o, i),
          a.writeUInt32BE(r, s, i + 4);
      }),
      (c.prototype._pad = function (e, t) {
        for (var r = e.length - t, i = t; i < e.length; i++) e[i] = r;
        return !0;
      }),
      (c.prototype._unpad = function (e) {
        for (var t = e[e.length - 1], r = e.length - t; r < e.length; r++)
          i.equal(e[r], t);
        return e.slice(0, e.length - t);
      }),
      (c.prototype._encrypt = function (e, t, r, i, n) {
        for (var o = t, s = r, c = 0; c < e.keys.length; c += 2) {
          var f = e.keys[c],
            u = e.keys[c + 1];
          a.expand(s, e.tmp, 0), (f ^= e.tmp[0]), (u ^= e.tmp[1]);
          var d = a.substitute(f, u),
            l = s;
          (s = (o ^ a.permute(d)) >>> 0), (o = l);
        }
        a.rip(s, o, i, n);
      }),
      (c.prototype._decrypt = function (e, t, r, i, n) {
        for (var o = r, s = t, c = e.keys.length - 2; c >= 0; c -= 2) {
          var f = e.keys[c],
            u = e.keys[c + 1];
          a.expand(o, e.tmp, 0), (f ^= e.tmp[0]), (u ^= e.tmp[1]);
          var d = a.substitute(f, u),
            l = o;
          (o = (s ^ a.permute(d)) >>> 0), (s = l);
        }
        a.rip(o, s, i, n);
      });
  },
  function (e, t, r) {
    var i = r(15),
      n = r(1).Buffer,
      a = r(58);
    function o(e) {
      var t = e._cipher.encryptBlockRaw(e._prev);
      return a(e._prev), t;
    }
    t.encrypt = function (e, t) {
      var r = Math.ceil(t.length / 16),
        a = e._cache.length;
      e._cache = n.concat([e._cache, n.allocUnsafe(16 * r)]);
      for (var s = 0; s < r; s++) {
        var c = o(e),
          f = a + 16 * s;
        e._cache.writeUInt32BE(c[0], f + 0),
          e._cache.writeUInt32BE(c[1], f + 4),
          e._cache.writeUInt32BE(c[2], f + 8),
          e._cache.writeUInt32BE(c[3], f + 12);
      }
      var u = e._cache.slice(0, t.length);
      return (e._cache = e._cache.slice(t.length)), i(t, u);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      for (var t, r = e.length; r--; ) {
        if (255 !== (t = e.readUInt8(r))) {
          t++, e.writeUInt8(t, r);
          break;
        }
        e.writeUInt8(0, r);
      }
    };
  },
  function (e) {
    e.exports = {
      "aes-128-ecb": {
        cipher: "AES",
        key: 128,
        iv: 0,
        mode: "ECB",
        type: "block",
      },
      "aes-192-ecb": {
        cipher: "AES",
        key: 192,
        iv: 0,
        mode: "ECB",
        type: "block",
      },
      "aes-256-ecb": {
        cipher: "AES",
        key: 256,
        iv: 0,
        mode: "ECB",
        type: "block",
      },
      "aes-128-cbc": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CBC",
        type: "block",
      },
      "aes-192-cbc": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CBC",
        type: "block",
      },
      "aes-256-cbc": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CBC",
        type: "block",
      },
      aes128: { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" },
      aes192: { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" },
      aes256: { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" },
      "aes-128-cfb": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB",
        type: "stream",
      },
      "aes-192-cfb": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB",
        type: "stream",
      },
      "aes-256-cfb": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB",
        type: "stream",
      },
      "aes-128-cfb8": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB8",
        type: "stream",
      },
      "aes-192-cfb8": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB8",
        type: "stream",
      },
      "aes-256-cfb8": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB8",
        type: "stream",
      },
      "aes-128-cfb1": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CFB1",
        type: "stream",
      },
      "aes-192-cfb1": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CFB1",
        type: "stream",
      },
      "aes-256-cfb1": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CFB1",
        type: "stream",
      },
      "aes-128-ofb": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "OFB",
        type: "stream",
      },
      "aes-192-ofb": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "OFB",
        type: "stream",
      },
      "aes-256-ofb": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "OFB",
        type: "stream",
      },
      "aes-128-ctr": {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CTR",
        type: "stream",
      },
      "aes-192-ctr": {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CTR",
        type: "stream",
      },
      "aes-256-ctr": {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CTR",
        type: "stream",
      },
      "aes-128-gcm": {
        cipher: "AES",
        key: 128,
        iv: 12,
        mode: "GCM",
        type: "auth",
      },
      "aes-192-gcm": {
        cipher: "AES",
        key: 192,
        iv: 12,
        mode: "GCM",
        type: "auth",
      },
      "aes-256-gcm": {
        cipher: "AES",
        key: 256,
        iv: 12,
        mode: "GCM",
        type: "auth",
      },
    };
  },
  function (e, t, r) {
    var i = r(20),
      n = r(1).Buffer,
      a = r(9),
      o = r(0),
      s = r(118),
      c = r(15),
      f = r(58);
    function u(e, t, r, o) {
      a.call(this);
      var c = n.alloc(4, 0);
      this._cipher = new i.AES(t);
      var u = this._cipher.encryptBlock(c);
      (this._ghash = new s(u)),
        (r = (function (e, t, r) {
          if (12 === t.length)
            return (
              (e._finID = n.concat([t, n.from([0, 0, 0, 1])])),
              n.concat([t, n.from([0, 0, 0, 2])])
            );
          var i = new s(r),
            a = t.length,
            o = a % 16;
          i.update(t),
            o && ((o = 16 - o), i.update(n.alloc(o, 0))),
            i.update(n.alloc(8, 0));
          var c = 8 * a,
            u = n.alloc(8);
          u.writeUIntBE(c, 0, 8), i.update(u), (e._finID = i.state);
          var d = n.from(e._finID);
          return f(d), d;
        })(this, r, u)),
        (this._prev = n.from(r)),
        (this._cache = n.allocUnsafe(0)),
        (this._secCache = n.allocUnsafe(0)),
        (this._decrypt = o),
        (this._alen = 0),
        (this._len = 0),
        (this._mode = e),
        (this._authTag = null),
        (this._called = !1);
    }
    o(u, a),
      (u.prototype._update = function (e) {
        if (!this._called && this._alen) {
          var t = 16 - (this._alen % 16);
          t < 16 && ((t = n.alloc(t, 0)), this._ghash.update(t));
        }
        this._called = !0;
        var r = this._mode.encrypt(this, e);
        return (
          this._decrypt ? this._ghash.update(e) : this._ghash.update(r),
          (this._len += e.length),
          r
        );
      }),
      (u.prototype._final = function () {
        if (this._decrypt && !this._authTag)
          throw new Error("Unsupported state or unable to authenticate data");
        var e = c(
          this._ghash.final(8 * this._alen, 8 * this._len),
          this._cipher.encryptBlock(this._finID)
        );
        if (
          this._decrypt &&
          (function (e, t) {
            var r = 0;
            e.length !== t.length && r++;
            for (var i = Math.min(e.length, t.length), n = 0; n < i; ++n)
              r += e[n] ^ t[n];
            return r;
          })(e, this._authTag)
        )
          throw new Error("Unsupported state or unable to authenticate data");
        (this._authTag = e), this._cipher.scrub();
      }),
      (u.prototype.getAuthTag = function () {
        if (this._decrypt || !n.isBuffer(this._authTag))
          throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag;
      }),
      (u.prototype.setAuthTag = function (e) {
        if (!this._decrypt)
          throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = e;
      }),
      (u.prototype.setAAD = function (e) {
        if (this._called)
          throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e), (this._alen += e.length);
      }),
      (e.exports = u);
  },
  function (e, t, r) {
    var i = r(20),
      n = r(1).Buffer,
      a = r(9);
    function o(e, t, r, o) {
      a.call(this),
        (this._cipher = new i.AES(t)),
        (this._prev = n.from(r)),
        (this._cache = n.allocUnsafe(0)),
        (this._secCache = n.allocUnsafe(0)),
        (this._decrypt = o),
        (this._mode = e);
    }
    r(0)(o, a),
      (o.prototype._update = function (e) {
        return this._mode.encrypt(this, e, this._decrypt);
      }),
      (o.prototype._final = function () {
        this._cipher.scrub();
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    var i = r(11);
    (e.exports = v), (v.simpleSieve = m), (v.fermatTest = g);
    var n = r(3),
      a = new n(24),
      o = new (r(63))(),
      s = new n(1),
      c = new n(2),
      f = new n(5),
      u = (new n(16), new n(8), new n(10)),
      d = new n(3),
      l = (new n(7), new n(11)),
      h = new n(4),
      p = (new n(12), null);
    function b() {
      if (null !== p) return p;
      var e = [];
      e[0] = 2;
      for (var t = 1, r = 3; r < 1048576; r += 2) {
        for (
          var i = Math.ceil(Math.sqrt(r)), n = 0;
          n < t && e[n] <= i && r % e[n] != 0;
          n++
        );
        (t !== n && e[n] <= i) || (e[t++] = r);
      }
      return (p = e), e;
    }
    function m(e) {
      for (var t = b(), r = 0; r < t.length; r++)
        if (0 === e.modn(t[r])) return 0 === e.cmpn(t[r]);
      return !0;
    }
    function g(e) {
      var t = n.mont(e);
      return 0 === c.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
    }
    function v(e, t) {
      if (e < 16) return new n(2 === t || 5 === t ? [140, 123] : [140, 39]);
      var r, p;
      for (t = new n(t); ; ) {
        for (r = new n(i(Math.ceil(e / 8))); r.bitLength() > e; ) r.ishrn(1);
        if ((r.isEven() && r.iadd(s), r.testn(1) || r.iadd(c), t.cmp(c))) {
          if (!t.cmp(f)) for (; r.mod(u).cmp(d); ) r.iadd(h);
        } else for (; r.mod(a).cmp(l); ) r.iadd(h);
        if (
          m((p = r.shrn(1))) &&
          m(r) &&
          g(p) &&
          g(r) &&
          o.test(p) &&
          o.test(r)
        )
          return r;
      }
    }
  },
  function (e, t, r) {
    var i = r(3),
      n = r(64);
    function a(e) {
      this.rand = e || new n.Rand();
    }
    (e.exports = a),
      (a.create = function (e) {
        return new a(e);
      }),
      (a.prototype._randbelow = function (e) {
        var t = e.bitLength(),
          r = Math.ceil(t / 8);
        do {
          var n = new i(this.rand.generate(r));
        } while (n.cmp(e) >= 0);
        return n;
      }),
      (a.prototype._randrange = function (e, t) {
        var r = t.sub(e);
        return e.add(this._randbelow(r));
      }),
      (a.prototype.test = function (e, t, r) {
        var n = e.bitLength(),
          a = i.mont(e),
          o = new i(1).toRed(a);
        t || (t = Math.max(1, (n / 48) | 0));
        for (var s = e.subn(1), c = 0; !s.testn(c); c++);
        for (var f = e.shrn(c), u = s.toRed(a); t > 0; t--) {
          var d = this._randrange(new i(2), s);
          r && r(d);
          var l = d.toRed(a).redPow(f);
          if (0 !== l.cmp(o) && 0 !== l.cmp(u)) {
            for (var h = 1; h < c; h++) {
              if (0 === (l = l.redSqr()).cmp(o)) return !1;
              if (0 === l.cmp(u)) break;
            }
            if (h === c) return !1;
          }
        }
        return !0;
      }),
      (a.prototype.getDivisor = function (e, t) {
        var r = e.bitLength(),
          n = i.mont(e),
          a = new i(1).toRed(n);
        t || (t = Math.max(1, (r / 48) | 0));
        for (var o = e.subn(1), s = 0; !o.testn(s); s++);
        for (var c = e.shrn(s), f = o.toRed(n); t > 0; t--) {
          var u = this._randrange(new i(2), o),
            d = e.gcd(u);
          if (0 !== d.cmpn(1)) return d;
          var l = u.toRed(n).redPow(c);
          if (0 !== l.cmp(a) && 0 !== l.cmp(f)) {
            for (var h = 1; h < s; h++) {
              if (0 === (l = l.redSqr()).cmp(a))
                return l.fromRed().subn(1).gcd(e);
              if (0 === l.cmp(f)) break;
            }
            if (h === s) return (l = l.redSqr()).fromRed().subn(1).gcd(e);
          }
        }
        return !1;
      });
  },
  function (e, t, r) {
    var i;
    function n(e) {
      this.rand = e;
    }
    if (
      ((e.exports = function (e) {
        return i || (i = new n(null)), i.generate(e);
      }),
      (e.exports.Rand = n),
      (n.prototype.generate = function (e) {
        return this._rand(e);
      }),
      (n.prototype._rand = function (e) {
        if (this.rand.getBytes) return this.rand.getBytes(e);
        for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
          t[r] = this.rand.getByte();
        return t;
      }),
      "object" == typeof self)
    )
      self.crypto && self.crypto.getRandomValues
        ? (n.prototype._rand = function (e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t), t;
          })
        : self.msCrypto && self.msCrypto.getRandomValues
        ? (n.prototype._rand = function (e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t), t;
          })
        : "object" == typeof window &&
          (n.prototype._rand = function () {
            throw new Error("Not implemented yet");
          });
    else
      try {
        var a = r(124);
        if ("function" != typeof a.randomBytes)
          throw new Error("Not supported");
        n.prototype._rand = function (e) {
          return a.randomBytes(e);
        };
      } catch (e) {}
  },
  function (e, t, r) {
    "use strict";
    var i = t;
    function n(e) {
      return 1 === e.length ? "0" + e : e;
    }
    function a(e) {
      for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));
      return t;
    }
    (i.toArray = function (e, t) {
      if (Array.isArray(e)) return e.slice();
      if (!e) return [];
      var r = [];
      if ("string" != typeof e) {
        for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
        return r;
      }
      if ("hex" === t) {
        (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
        for (i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16));
      } else
        for (i = 0; i < e.length; i++) {
          var n = e.charCodeAt(i),
            a = n >> 8,
            o = 255 & n;
          a ? r.push(a, o) : r.push(o);
        }
      return r;
    }),
      (i.zero2 = n),
      (i.toHex = a),
      (i.encode = function (e, t) {
        return "hex" === t ? a(e) : e;
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(6).rotr32;
    function n(e, t, r) {
      return (e & t) ^ (~e & r);
    }
    function a(e, t, r) {
      return (e & t) ^ (e & r) ^ (t & r);
    }
    function o(e, t, r) {
      return e ^ t ^ r;
    }
    (t.ft_1 = function (e, t, r, i) {
      return 0 === e
        ? n(t, r, i)
        : 1 === e || 3 === e
        ? o(t, r, i)
        : 2 === e
        ? a(t, r, i)
        : void 0;
    }),
      (t.ch32 = n),
      (t.maj32 = a),
      (t.p32 = o),
      (t.s0_256 = function (e) {
        return i(e, 2) ^ i(e, 13) ^ i(e, 22);
      }),
      (t.s1_256 = function (e) {
        return i(e, 6) ^ i(e, 11) ^ i(e, 25);
      }),
      (t.g0_256 = function (e) {
        return i(e, 7) ^ i(e, 18) ^ (e >>> 3);
      }),
      (t.g1_256 = function (e) {
        return i(e, 17) ^ i(e, 19) ^ (e >>> 10);
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(16),
      a = r(66),
      o = r(5),
      s = i.sum32,
      c = i.sum32_4,
      f = i.sum32_5,
      u = a.ch32,
      d = a.maj32,
      l = a.s0_256,
      h = a.s1_256,
      p = a.g0_256,
      b = a.g1_256,
      m = n.BlockHash,
      g = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ];
    function v() {
      if (!(this instanceof v)) return new v();
      m.call(this),
        (this.h = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        (this.k = g),
        (this.W = new Array(64));
    }
    i.inherits(v, m),
      (e.exports = v),
      (v.blockSize = 512),
      (v.outSize = 256),
      (v.hmacStrength = 192),
      (v.padLength = 64),
      (v.prototype._update = function (e, t) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
        for (; i < r.length; i++)
          r[i] = c(b(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
        var n = this.h[0],
          a = this.h[1],
          m = this.h[2],
          g = this.h[3],
          v = this.h[4],
          y = this.h[5],
          w = this.h[6],
          _ = this.h[7];
        for (o(this.k.length === r.length), i = 0; i < r.length; i++) {
          var S = f(_, h(v), u(v, y, w), this.k[i], r[i]),
            k = s(l(n), d(n, a, m));
          (_ = w),
            (w = y),
            (y = v),
            (v = s(g, S)),
            (g = m),
            (m = a),
            (a = n),
            (n = s(S, k));
        }
        (this.h[0] = s(this.h[0], n)),
          (this.h[1] = s(this.h[1], a)),
          (this.h[2] = s(this.h[2], m)),
          (this.h[3] = s(this.h[3], g)),
          (this.h[4] = s(this.h[4], v)),
          (this.h[5] = s(this.h[5], y)),
          (this.h[6] = s(this.h[6], w)),
          (this.h[7] = s(this.h[7], _));
      }),
      (v.prototype._digest = function (e) {
        return "hex" === e
          ? i.toHex32(this.h, "big")
          : i.split32(this.h, "big");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(16),
      a = r(5),
      o = i.rotr64_hi,
      s = i.rotr64_lo,
      c = i.shr64_hi,
      f = i.shr64_lo,
      u = i.sum64,
      d = i.sum64_hi,
      l = i.sum64_lo,
      h = i.sum64_4_hi,
      p = i.sum64_4_lo,
      b = i.sum64_5_hi,
      m = i.sum64_5_lo,
      g = n.BlockHash,
      v = [
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ];
    function y() {
      if (!(this instanceof y)) return new y();
      g.call(this),
        (this.h = [
          1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
          4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
          2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
        ]),
        (this.k = v),
        (this.W = new Array(160));
    }
    function w(e, t, r, i, n) {
      var a = (e & r) ^ (~e & n);
      return a < 0 && (a += 4294967296), a;
    }
    function _(e, t, r, i, n, a) {
      var o = (t & i) ^ (~t & a);
      return o < 0 && (o += 4294967296), o;
    }
    function S(e, t, r, i, n) {
      var a = (e & r) ^ (e & n) ^ (r & n);
      return a < 0 && (a += 4294967296), a;
    }
    function k(e, t, r, i, n, a) {
      var o = (t & i) ^ (t & a) ^ (i & a);
      return o < 0 && (o += 4294967296), o;
    }
    function M(e, t) {
      var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
      return r < 0 && (r += 4294967296), r;
    }
    function x(e, t) {
      var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
      return r < 0 && (r += 4294967296), r;
    }
    function E(e, t) {
      var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
      return r < 0 && (r += 4294967296), r;
    }
    function A(e, t) {
      var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
      return r < 0 && (r += 4294967296), r;
    }
    function z(e, t) {
      var r = o(e, t, 1) ^ o(e, t, 8) ^ c(e, t, 7);
      return r < 0 && (r += 4294967296), r;
    }
    function B(e, t) {
      var r = s(e, t, 1) ^ s(e, t, 8) ^ f(e, t, 7);
      return r < 0 && (r += 4294967296), r;
    }
    function j(e, t) {
      var r = o(e, t, 19) ^ o(t, e, 29) ^ c(e, t, 6);
      return r < 0 && (r += 4294967296), r;
    }
    function I(e, t) {
      var r = s(e, t, 19) ^ s(t, e, 29) ^ f(e, t, 6);
      return r < 0 && (r += 4294967296), r;
    }
    i.inherits(y, g),
      (e.exports = y),
      (y.blockSize = 1024),
      (y.outSize = 512),
      (y.hmacStrength = 192),
      (y.padLength = 128),
      (y.prototype._prepareBlock = function (e, t) {
        for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
        for (; i < r.length; i += 2) {
          var n = j(r[i - 4], r[i - 3]),
            a = I(r[i - 4], r[i - 3]),
            o = r[i - 14],
            s = r[i - 13],
            c = z(r[i - 30], r[i - 29]),
            f = B(r[i - 30], r[i - 29]),
            u = r[i - 32],
            d = r[i - 31];
          (r[i] = h(n, a, o, s, c, f, u, d)),
            (r[i + 1] = p(n, a, o, s, c, f, u, d));
        }
      }),
      (y.prototype._update = function (e, t) {
        this._prepareBlock(e, t);
        var r = this.W,
          i = this.h[0],
          n = this.h[1],
          o = this.h[2],
          s = this.h[3],
          c = this.h[4],
          f = this.h[5],
          h = this.h[6],
          p = this.h[7],
          g = this.h[8],
          v = this.h[9],
          y = this.h[10],
          z = this.h[11],
          B = this.h[12],
          j = this.h[13],
          I = this.h[14],
          R = this.h[15];
        a(this.k.length === r.length);
        for (var C = 0; C < r.length; C += 2) {
          var q = I,
            T = R,
            P = E(g, v),
            O = A(g, v),
            D = w(g, v, y, z, B),
            U = _(g, v, y, z, B, j),
            N = this.k[C],
            L = this.k[C + 1],
            F = r[C],
            K = r[C + 1],
            H = b(q, T, P, O, D, U, N, L, F, K),
            W = m(q, T, P, O, D, U, N, L, F, K);
          (q = M(i, n)),
            (T = x(i, n)),
            (P = S(i, n, o, s, c)),
            (O = k(i, n, o, s, c, f));
          var Y = d(q, T, P, O),
            V = l(q, T, P, O);
          (I = B),
            (R = j),
            (B = y),
            (j = z),
            (y = g),
            (z = v),
            (g = d(h, p, H, W)),
            (v = l(p, p, H, W)),
            (h = c),
            (p = f),
            (c = o),
            (f = s),
            (o = i),
            (s = n),
            (i = d(H, W, Y, V)),
            (n = l(H, W, Y, V));
        }
        u(this.h, 0, i, n),
          u(this.h, 2, o, s),
          u(this.h, 4, c, f),
          u(this.h, 6, h, p),
          u(this.h, 8, g, v),
          u(this.h, 10, y, z),
          u(this.h, 12, B, j),
          u(this.h, 14, I, R);
      }),
      (y.prototype._digest = function (e) {
        return "hex" === e
          ? i.toHex32(this.h, "big")
          : i.split32(this.h, "big");
      });
  },
  function (e, t, r) {
    var i = r(0),
      n = r(18).Reporter,
      a = r(2).Buffer;
    function o(e, t) {
      n.call(this, t),
        a.isBuffer(e)
          ? ((this.base = e), (this.offset = 0), (this.length = e.length))
          : this.error("Input not Buffer");
    }
    function s(e, t) {
      if (Array.isArray(e))
        (this.length = 0),
          (this.value = e.map(function (e) {
            return (
              e instanceof s || (e = new s(e, t)), (this.length += e.length), e
            );
          }, this));
      else if ("number" == typeof e) {
        if (!(0 <= e && e <= 255))
          return t.error("non-byte EncoderBuffer value");
        (this.value = e), (this.length = 1);
      } else if ("string" == typeof e)
        (this.value = e), (this.length = a.byteLength(e));
      else {
        if (!a.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
        (this.value = e), (this.length = e.length);
      }
    }
    i(o, n),
      (t.DecoderBuffer = o),
      (o.prototype.save = function () {
        return { offset: this.offset, reporter: n.prototype.save.call(this) };
      }),
      (o.prototype.restore = function (e) {
        var t = new o(this.base);
        return (
          (t.offset = e.offset),
          (t.length = this.offset),
          (this.offset = e.offset),
          n.prototype.restore.call(this, e.reporter),
          t
        );
      }),
      (o.prototype.isEmpty = function () {
        return this.offset === this.length;
      }),
      (o.prototype.readUInt8 = function (e) {
        return this.offset + 1 <= this.length
          ? this.base.readUInt8(this.offset++, !0)
          : this.error(e || "DecoderBuffer overrun");
      }),
      (o.prototype.skip = function (e, t) {
        if (!(this.offset + e <= this.length))
          return this.error(t || "DecoderBuffer overrun");
        var r = new o(this.base);
        return (
          (r._reporterState = this._reporterState),
          (r.offset = this.offset),
          (r.length = this.offset + e),
          (this.offset += e),
          r
        );
      }),
      (o.prototype.raw = function (e) {
        return this.base.slice(e ? e.offset : this.offset, this.length);
      }),
      (t.EncoderBuffer = s),
      (s.prototype.join = function (e, t) {
        return (
          e || (e = new a(this.length)),
          t || (t = 0),
          0 === this.length
            ? e
            : (Array.isArray(this.value)
                ? this.value.forEach(function (r) {
                    r.join(e, t), (t += r.length);
                  })
                : ("number" == typeof this.value
                    ? (e[t] = this.value)
                    : "string" == typeof this.value
                    ? e.write(this.value, t)
                    : a.isBuffer(this.value) && this.value.copy(e, t),
                  (t += this.length)),
              e)
        );
      });
  },
  function (e, t, r) {
    var i = t;
    (i._reverse = function (e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (r) {
          (0 | r) == r && (r |= 0);
          var i = e[r];
          t[i] = r;
        }),
        t
      );
    }),
      (i.der = r(155));
  },
  function (e, t, r) {
    var i = r(0),
      n = r(17),
      a = n.base,
      o = n.bignum,
      s = n.constants.der;
    function c(e) {
      (this.enc = "der"),
        (this.name = e.name),
        (this.entity = e),
        (this.tree = new f()),
        this.tree._init(e.body);
    }
    function f(e) {
      a.Node.call(this, "der", e);
    }
    function u(e, t) {
      var r = e.readUInt8(t);
      if (e.isError(r)) return r;
      var i = s.tagClass[r >> 6],
        n = 0 == (32 & r);
      if (31 == (31 & r)) {
        var a = r;
        for (r = 0; 128 == (128 & a); ) {
          if (((a = e.readUInt8(t)), e.isError(a))) return a;
          (r <<= 7), (r |= 127 & a);
        }
      } else r &= 31;
      return { cls: i, primitive: n, tag: r, tagStr: s.tag[r] };
    }
    function d(e, t, r) {
      var i = e.readUInt8(r);
      if (e.isError(i)) return i;
      if (!t && 128 === i) return null;
      if (0 == (128 & i)) return i;
      var n = 127 & i;
      if (n > 4) return e.error("length octect is too long");
      i = 0;
      for (var a = 0; a < n; a++) {
        i <<= 8;
        var o = e.readUInt8(r);
        if (e.isError(o)) return o;
        i |= o;
      }
      return i;
    }
    (e.exports = c),
      (c.prototype.decode = function (e, t) {
        return (
          e instanceof a.DecoderBuffer || (e = new a.DecoderBuffer(e, t)),
          this.tree._decode(e, t)
        );
      }),
      i(f, a.Node),
      (f.prototype._peekTag = function (e, t, r) {
        if (e.isEmpty()) return !1;
        var i = e.save(),
          n = u(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(n)
          ? n
          : (e.restore(i),
            n.tag === t || n.tagStr === t || n.tagStr + "of" === t || r);
      }),
      (f.prototype._decodeTag = function (e, t, r) {
        var i = u(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(i)) return i;
        var n = d(e, i.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(n)) return n;
        if (!r && i.tag !== t && i.tagStr !== t && i.tagStr + "of" !== t)
          return e.error('Failed to match tag: "' + t + '"');
        if (i.primitive || null !== n)
          return e.skip(n, 'Failed to match body of: "' + t + '"');
        var a = e.save(),
          o = this._skipUntilEnd(
            e,
            'Failed to skip indefinite length body: "' + this.tag + '"'
          );
        return e.isError(o)
          ? o
          : ((n = e.offset - a.offset),
            e.restore(a),
            e.skip(n, 'Failed to match body of: "' + t + '"'));
      }),
      (f.prototype._skipUntilEnd = function (e, t) {
        for (;;) {
          var r = u(e, t);
          if (e.isError(r)) return r;
          var i,
            n = d(e, r.primitive, t);
          if (e.isError(n)) return n;
          if (
            ((i =
              r.primitive || null !== n ? e.skip(n) : this._skipUntilEnd(e, t)),
            e.isError(i))
          )
            return i;
          if ("end" === r.tagStr) break;
        }
      }),
      (f.prototype._decodeList = function (e, t, r, i) {
        for (var n = []; !e.isEmpty(); ) {
          var a = this._peekTag(e, "end");
          if (e.isError(a)) return a;
          var o = r.decode(e, "der", i);
          if (e.isError(o) && a) break;
          n.push(o);
        }
        return n;
      }),
      (f.prototype._decodeStr = function (e, t) {
        if ("bitstr" === t) {
          var r = e.readUInt8();
          return e.isError(r) ? r : { unused: r, data: e.raw() };
        }
        if ("bmpstr" === t) {
          var i = e.raw();
          if (i.length % 2 == 1)
            return e.error("Decoding of string type: bmpstr length mismatch");
          for (var n = "", a = 0; a < i.length / 2; a++)
            n += String.fromCharCode(i.readUInt16BE(2 * a));
          return n;
        }
        if ("numstr" === t) {
          var o = e.raw().toString("ascii");
          return this._isNumstr(o)
            ? o
            : e.error("Decoding of string type: numstr unsupported characters");
        }
        if ("octstr" === t) return e.raw();
        if ("objDesc" === t) return e.raw();
        if ("printstr" === t) {
          var s = e.raw().toString("ascii");
          return this._isPrintstr(s)
            ? s
            : e.error(
                "Decoding of string type: printstr unsupported characters"
              );
        }
        return /str$/.test(t)
          ? e.raw().toString()
          : e.error("Decoding of string type: " + t + " unsupported");
      }),
      (f.prototype._decodeObjid = function (e, t, r) {
        for (var i, n = [], a = 0; !e.isEmpty(); ) {
          var o = e.readUInt8();
          (a <<= 7), (a |= 127 & o), 0 == (128 & o) && (n.push(a), (a = 0));
        }
        128 & o && n.push(a);
        var s = (n[0] / 40) | 0,
          c = n[0] % 40;
        if (((i = r ? n : [s, c].concat(n.slice(1))), t)) {
          var f = t[i.join(" ")];
          void 0 === f && (f = t[i.join(".")]), void 0 !== f && (i = f);
        }
        return i;
      }),
      (f.prototype._decodeTime = function (e, t) {
        var r = e.raw().toString();
        if ("gentime" === t)
          var i = 0 | r.slice(0, 4),
            n = 0 | r.slice(4, 6),
            a = 0 | r.slice(6, 8),
            o = 0 | r.slice(8, 10),
            s = 0 | r.slice(10, 12),
            c = 0 | r.slice(12, 14);
        else {
          if ("utctime" !== t)
            return e.error("Decoding " + t + " time is not supported yet");
          (i = 0 | r.slice(0, 2)),
            (n = 0 | r.slice(2, 4)),
            (a = 0 | r.slice(4, 6)),
            (o = 0 | r.slice(6, 8)),
            (s = 0 | r.slice(8, 10)),
            (c = 0 | r.slice(10, 12));
          i = i < 70 ? 2e3 + i : 1900 + i;
        }
        return Date.UTC(i, n - 1, a, o, s, c, 0);
      }),
      (f.prototype._decodeNull = function (e) {
        return null;
      }),
      (f.prototype._decodeBool = function (e) {
        var t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t;
      }),
      (f.prototype._decodeInt = function (e, t) {
        var r = e.raw(),
          i = new o(r);
        return t && (i = t[i.toString(10)] || i), i;
      }),
      (f.prototype._use = function (e, t) {
        return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree;
      });
  },
  function (e, t, r) {
    var i = r(0),
      n = r(2).Buffer,
      a = r(17),
      o = a.base,
      s = a.constants.der;
    function c(e) {
      (this.enc = "der"),
        (this.name = e.name),
        (this.entity = e),
        (this.tree = new f()),
        this.tree._init(e.body);
    }
    function f(e) {
      o.Node.call(this, "der", e);
    }
    function u(e) {
      return e < 10 ? "0" + e : e;
    }
    (e.exports = c),
      (c.prototype.encode = function (e, t) {
        return this.tree._encode(e, t).join();
      }),
      i(f, o.Node),
      (f.prototype._encodeComposite = function (e, t, r, i) {
        var a,
          o = (function (e, t, r, i) {
            var n;
            "seqof" === e ? (e = "seq") : "setof" === e && (e = "set");
            if (s.tagByName.hasOwnProperty(e)) n = s.tagByName[e];
            else {
              if ("number" != typeof e || (0 | e) !== e)
                return i.error("Unknown tag: " + e);
              n = e;
            }
            if (n >= 31) return i.error("Multi-octet tag encoding unsupported");
            t || (n |= 32);
            return (n |= s.tagClassByName[r || "universal"] << 6);
          })(e, t, r, this.reporter);
        if (i.length < 128)
          return (
            ((a = new n(2))[0] = o),
            (a[1] = i.length),
            this._createEncoderBuffer([a, i])
          );
        for (var c = 1, f = i.length; f >= 256; f >>= 8) c++;
        ((a = new n(2 + c))[0] = o), (a[1] = 128 | c);
        f = 1 + c;
        for (var u = i.length; u > 0; f--, u >>= 8) a[f] = 255 & u;
        return this._createEncoderBuffer([a, i]);
      }),
      (f.prototype._encodeStr = function (e, t) {
        if ("bitstr" === t)
          return this._createEncoderBuffer([0 | e.unused, e.data]);
        if ("bmpstr" === t) {
          for (var r = new n(2 * e.length), i = 0; i < e.length; i++)
            r.writeUInt16BE(e.charCodeAt(i), 2 * i);
          return this._createEncoderBuffer(r);
        }
        return "numstr" === t
          ? this._isNumstr(e)
            ? this._createEncoderBuffer(e)
            : this.reporter.error(
                "Encoding of string type: numstr supports only digits and space"
              )
          : "printstr" === t
          ? this._isPrintstr(e)
            ? this._createEncoderBuffer(e)
            : this.reporter.error(
                "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
              )
          : /str$/.test(t)
          ? this._createEncoderBuffer(e)
          : "objDesc" === t
          ? this._createEncoderBuffer(e)
          : this.reporter.error(
              "Encoding of string type: " + t + " unsupported"
            );
      }),
      (f.prototype._encodeObjid = function (e, t, r) {
        if ("string" == typeof e) {
          if (!t)
            return this.reporter.error(
              "string objid given, but no values map found"
            );
          if (!t.hasOwnProperty(e))
            return this.reporter.error("objid not found in values map");
          e = t[e].split(/[\s\.]+/g);
          for (var i = 0; i < e.length; i++) e[i] |= 0;
        } else if (Array.isArray(e)) {
          e = e.slice();
          for (i = 0; i < e.length; i++) e[i] |= 0;
        }
        if (!Array.isArray(e))
          return this.reporter.error(
            "objid() should be either array or string, got: " +
              JSON.stringify(e)
          );
        if (!r) {
          if (e[1] >= 40)
            return this.reporter.error("Second objid identifier OOB");
          e.splice(0, 2, 40 * e[0] + e[1]);
        }
        var a = 0;
        for (i = 0; i < e.length; i++) {
          var o = e[i];
          for (a++; o >= 128; o >>= 7) a++;
        }
        var s = new n(a),
          c = s.length - 1;
        for (i = e.length - 1; i >= 0; i--) {
          o = e[i];
          for (s[c--] = 127 & o; (o >>= 7) > 0; ) s[c--] = 128 | (127 & o);
        }
        return this._createEncoderBuffer(s);
      }),
      (f.prototype._encodeTime = function (e, t) {
        var r,
          i = new Date(e);
        return (
          "gentime" === t
            ? (r = [
                u(i.getFullYear()),
                u(i.getUTCMonth() + 1),
                u(i.getUTCDate()),
                u(i.getUTCHours()),
                u(i.getUTCMinutes()),
                u(i.getUTCSeconds()),
                "Z",
              ].join(""))
            : "utctime" === t
            ? (r = [
                u(i.getFullYear() % 100),
                u(i.getUTCMonth() + 1),
                u(i.getUTCDate()),
                u(i.getUTCHours()),
                u(i.getUTCMinutes()),
                u(i.getUTCSeconds()),
                "Z",
              ].join(""))
            : this.reporter.error(
                "Encoding " + t + " time is not supported yet"
              ),
          this._encodeStr(r, "octstr")
        );
      }),
      (f.prototype._encodeNull = function () {
        return this._createEncoderBuffer("");
      }),
      (f.prototype._encodeInt = function (e, t) {
        if ("string" == typeof e) {
          if (!t)
            return this.reporter.error(
              "String int or enum given, but no values map"
            );
          if (!t.hasOwnProperty(e))
            return this.reporter.error(
              "Values map doesn't contain: " + JSON.stringify(e)
            );
          e = t[e];
        }
        if ("number" != typeof e && !n.isBuffer(e)) {
          var r = e.toArray();
          !e.sign && 128 & r[0] && r.unshift(0), (e = new n(r));
        }
        if (n.isBuffer(e)) {
          var i = e.length;
          0 === e.length && i++;
          var a = new n(i);
          return (
            e.copy(a),
            0 === e.length && (a[0] = 0),
            this._createEncoderBuffer(a)
          );
        }
        if (e < 128) return this._createEncoderBuffer(e);
        if (e < 256) return this._createEncoderBuffer([0, e]);
        i = 1;
        for (var o = e; o >= 256; o >>= 8) i++;
        for (o = (a = new Array(i)).length - 1; o >= 0; o--)
          (a[o] = 255 & e), (e >>= 8);
        return 128 & a[0] && a.unshift(0), this._createEncoderBuffer(new n(a));
      }),
      (f.prototype._encodeBool = function (e) {
        return this._createEncoderBuffer(e ? 255 : 0);
      }),
      (f.prototype._use = function (e, t) {
        return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree;
      }),
      (f.prototype._skipDefault = function (e, t, r) {
        var i,
          n = this._baseState;
        if (null === n.default) return !1;
        var a = e.join();
        if (
          (void 0 === n.defaultBuffer &&
            (n.defaultBuffer = this._encodeValue(n.default, t, r).join()),
          a.length !== n.defaultBuffer.length)
        )
          return !1;
        for (i = 0; i < a.length; i++)
          if (a[i] !== n.defaultBuffer[i]) return !1;
        return !0;
      });
  },
  function (e) {
    e.exports = {
      "1.3.132.0.10": "secp256k1",
      "1.3.132.0.33": "p224",
      "1.2.840.10045.3.1.1": "p192",
      "1.2.840.10045.3.1.7": "p256",
      "1.3.132.0.34": "p384",
      "1.3.132.0.35": "p521",
    };
  },
  function (e, t, r) {
    var i = r(13),
      n = r(24).Buffer;
    function a(e) {
      var t = n.allocUnsafe(4);
      return t.writeUInt32BE(e, 0), t;
    }
    e.exports = function (e, t) {
      for (var r, o = n.alloc(0), s = 0; o.length < t; )
        (r = a(s++)),
          (o = n.concat([o, i("sha1").update(e).update(r).digest()]));
      return o.slice(0, t);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var r = e.length, i = -1; ++i < r; ) e[i] ^= t[i];
      return e;
    };
  },
  function (e, t, r) {
    var i = r(3),
      n = r(24).Buffer;
    e.exports = function (e, t) {
      return n.from(
        e
          .toRed(i.mont(t.modulus))
          .redPow(new i(t.publicExponent))
          .fromRed()
          .toArray()
      );
    };
  },
  function (e, t, r) {
    e.exports = r(78);
  },
  function (e, t, r) {
    var i = r(25);
    (i.Mnemonic = r(79)), (e.exports = i.Mnemonic);
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var i = r(25),
        n = i.crypto.BN,
        a = r(82),
        o = i.deps._,
        s = r(83),
        c = r(169),
        f = i.crypto.Hash,
        u = i.crypto.Random,
        d = i.util.preconditions,
        l = function (e, r) {
          if (!(this instanceof l)) return new l(e, r);
          var n, s, f;
          if ((o.isArray(e) && ((r = e), (e = null)), t.isBuffer(e))) f = e;
          else if (o.isString(e)) s = a.nfkd(e);
          else if (o.isNumber(e)) n = e;
          else if (e)
            throw new i.errors.InvalidArgument(
              "data",
              "Must be a Buffer, a string or an integer"
            );
          if (((n = n || 128), (r = r || l._getDictionary(s)), s && !r))
            throw new c.UnknownWordlist(s);
          if (
            ((r = r || l.Words.ENGLISH),
            f && (s = l._entropy2mnemonic(f, r)),
            s && !l.isValid(s, r))
          )
            throw new c.InvalidMnemonic(s);
          if (n % 32 != 0 || n < 128)
            throw new i.errors.InvalidArgument(
              "ENT",
              "Values must be ENT > 128 and ENT % 32 == 0"
            );
          (s = s || l._mnemonic(n, r)),
            Object.defineProperty(this, "wordlist", {
              configurable: !1,
              value: r,
            }),
            Object.defineProperty(this, "phrase", {
              configurable: !1,
              value: s,
            });
        };
      (l.fromRandom = function (e = l.Words.ENGLISH) {
        return new l(e);
      }),
        (l.fromString = function (e, t = l.Words.ENGLISH) {
          return new l(e, t);
        }),
        (l.Words = r(170)),
        (l.isValid = function (e, r) {
          if (((e = a.nfkd(e)), !(r = r || l._getDictionary(e)))) return !1;
          for (var i = e.split(" "), n = "", o = 0; o < i.length; o++) {
            var s = r.indexOf(i[o]);
            if (s < 0) return !1;
            n += ("00000000000" + s.toString(2)).slice(-11);
          }
          var c = n.length / 33,
            f = n.slice(-c),
            u = n.slice(0, n.length - c),
            d = t.alloc(u.length / 8);
          for (o = 0; o < u.length / 8; o++)
            d.writeUInt8(parseInt(n.slice(8 * o, 8 * (o + 1)), 2), o);
          return l._entropyChecksum(d) === f;
        }),
        (l._belongsToWordlist = function (e, t) {
          for (var r = a.nfkd(e).split(" "), i = 0; i < r.length; i++) {
            if (t.indexOf(r[i]) < 0) return !1;
          }
          return !0;
        }),
        (l._getDictionary = function (e) {
          if (!e) return null;
          for (var t = Object.keys(l.Words), r = 0; r < t.length; r++) {
            var i = t[r];
            if (l._belongsToWordlist(e, l.Words[i])) return l.Words[i];
          }
          return null;
        }),
        (l.prototype.toSeed = function (e) {
          return (
            (e = e || ""),
            s(a.nfkd(this.phrase), a.nfkd("mnemonic" + e), 2048, 64)
          );
        }),
        (l.fromSeed = function (e, r) {
          return (
            d.checkArgument(t.isBuffer(e), "seed must be a Buffer."),
            d.checkArgument(
              o.isArray(r) || o.isString(r),
              "wordlist must be a string or an array."
            ),
            new l(e, r)
          );
        }),
        (l.prototype.toHDPrivateKey = function (e, t) {
          var r = this.toSeed(e);
          return i.HDPrivateKey.fromSeed(r, t);
        }),
        (l.prototype.toString = function () {
          return this.phrase;
        }),
        (l.prototype.inspect = function () {
          return "<Mnemonic: " + this.toString() + " >";
        }),
        (l._mnemonic = function (e, t) {
          var r = u.getRandomBuffer(e / 8);
          return l._entropy2mnemonic(r, t);
        }),
        (l._entropy2mnemonic = function (e, t) {
          for (var r = "", i = 0; i < e.length; i++)
            r += ("00000000" + e[i].toString(2)).slice(-8);
          if ((r += l._entropyChecksum(e)).length % 11 != 0)
            throw new c.InvalidEntropy(r);
          var n = [];
          for (i = 0; i < r.length / 11; i++) {
            var a = parseInt(r.slice(11 * i, 11 * (i + 1)), 2);
            n.push(t[a]);
          }
          return t === l.Words.JAPANESE ? n.join("　") : n.join(" ");
        }),
        (l._entropyChecksum = function (e) {
          for (
            var t = f.sha256(e),
              r = (8 * e.length) / 32,
              i = new n(t.toString("hex"), 16).toString(2);
            i.length % 256 != 0;

          )
            i = "0" + i;
          return i.slice(0, r);
        }),
        (l.bsv = i),
        (e.exports = l);
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    "use strict";
    (t.byteLength = function (e) {
      var t = f(e),
        r = t[0],
        i = t[1];
      return (3 * (r + i)) / 4 - i;
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          i = f(e),
          o = i[0],
          s = i[1],
          c = new a(
            (function (e, t, r) {
              return (3 * (t + r)) / 4 - r;
            })(0, o, s)
          ),
          u = 0,
          d = s > 0 ? o - 4 : o;
        for (r = 0; r < d; r += 4)
          (t =
            (n[e.charCodeAt(r)] << 18) |
            (n[e.charCodeAt(r + 1)] << 12) |
            (n[e.charCodeAt(r + 2)] << 6) |
            n[e.charCodeAt(r + 3)]),
            (c[u++] = (t >> 16) & 255),
            (c[u++] = (t >> 8) & 255),
            (c[u++] = 255 & t);
        2 === s &&
          ((t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4)),
          (c[u++] = 255 & t));
        1 === s &&
          ((t =
            (n[e.charCodeAt(r)] << 10) |
            (n[e.charCodeAt(r + 1)] << 4) |
            (n[e.charCodeAt(r + 2)] >> 2)),
          (c[u++] = (t >> 8) & 255),
          (c[u++] = 255 & t));
        return c;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, r = e.length, n = r % 3, a = [], o = 0, s = r - n;
          o < s;
          o += 16383
        )
          a.push(u(e, o, o + 16383 > s ? s : o + 16383));
        1 === n
          ? ((t = e[r - 1]), a.push(i[t >> 2] + i[(t << 4) & 63] + "=="))
          : 2 === n &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            a.push(i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + "="));
        return a.join("");
      });
    for (
      var i = [],
        n = [],
        a = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        c = o.length;
      s < c;
      ++s
    )
      (i[s] = o[s]), (n[o.charCodeAt(s)] = s);
    function f(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
    }
    function u(e, t, r) {
      for (var n, a, o = [], s = t; s < r; s += 3)
        (n =
          ((e[s] << 16) & 16711680) +
          ((e[s + 1] << 8) & 65280) +
          (255 & e[s + 2])),
          o.push(
            i[((a = n) >> 18) & 63] +
              i[(a >> 12) & 63] +
              i[(a >> 6) & 63] +
              i[63 & a]
          );
      return o.join("");
    }
    (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, r, i, n) {
      var a,
        o,
        s = 8 * n - i - 1,
        c = (1 << s) - 1,
        f = c >> 1,
        u = -7,
        d = r ? n - 1 : 0,
        l = r ? -1 : 1,
        h = e[t + d];
      for (
        d += l, a = h & ((1 << -u) - 1), h >>= -u, u += s;
        u > 0;
        a = 256 * a + e[t + d], d += l, u -= 8
      );
      for (
        o = a & ((1 << -u) - 1), a >>= -u, u += i;
        u > 0;
        o = 256 * o + e[t + d], d += l, u -= 8
      );
      if (0 === a) a = 1 - f;
      else {
        if (a === c) return o ? NaN : (1 / 0) * (h ? -1 : 1);
        (o += Math.pow(2, i)), (a -= f);
      }
      return (h ? -1 : 1) * o * Math.pow(2, a - i);
    }),
      (t.write = function (e, t, r, i, n, a) {
        var o,
          s,
          c,
          f = 8 * a - n - 1,
          u = (1 << f) - 1,
          d = u >> 1,
          l = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = i ? 0 : a - 1,
          p = i ? 1 : -1,
          b = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((s = isNaN(t) ? 1 : 0), (o = u))
              : ((o = Math.floor(Math.log(t) / Math.LN2)),
                t * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
                (t += o + d >= 1 ? l / c : l * Math.pow(2, 1 - d)) * c >= 2 &&
                  (o++, (c /= 2)),
                o + d >= u
                  ? ((s = 0), (o = u))
                  : o + d >= 1
                  ? ((s = (t * c - 1) * Math.pow(2, n)), (o += d))
                  : ((s = t * Math.pow(2, d - 1) * Math.pow(2, n)), (o = 0)));
          n >= 8;
          e[r + h] = 255 & s, h += p, s /= 256, n -= 8
        );
        for (
          o = (o << n) | s, f += n;
          f > 0;
          e[r + h] = 255 & o, h += p, o /= 256, f -= 8
        );
        e[r + h - p] |= 128 * b;
      });
  },
  function (e, t, r) {
    !(function (t) {
      "use strict";
      for (
        var r = [null, 0, {}],
          i = 10,
          n = 44032,
          a = 4352,
          o = 4449,
          s = 4519,
          c = 19,
          f = 21,
          u = 28,
          d = f * u,
          l = c * d,
          h = function (e, t) {
            (this.codepoint = e), (this.feature = t);
          },
          p = {},
          b = [],
          m = 0;
        m <= 255;
        ++m
      )
        b[m] = 0;
      var g = [
        function (e, t, i) {
          return t < 60 || (13311 < t && t < 42607) ? new h(t, r) : e(t, i);
        },
        function (e, t, r) {
          var n = p[t];
          return (
            n ||
              ((n = e(t, r)).feature && ++b[(t >> 8) & 255] > i && (p[t] = n)),
            n
          );
        },
        function (e, t, r) {
          return r ? e(t, r) : new h(t, null);
        },
        function (e, t, r) {
          var i;
          if (t < a || (a + c <= t && t < n) || n + l < t) return e(t, r);
          if (a <= t && t < a + c) {
            var p = {},
              b = (t - a) * f;
            for (i = 0; i < f; ++i) p[o + i] = n + u * (i + b);
            return new h(t, [, , p]);
          }
          var m = t - n,
            g = m % u,
            v = [];
          if (0 !== g) v[0] = [n + m - g, s + g];
          else
            for (
              v[0] = [a + Math.floor(m / d), o + Math.floor((m % d) / u)],
                v[2] = {},
                i = 1;
              i < u;
              ++i
            )
              v[2][s + i] = t + i;
          return new h(t, v);
        },
        function (e, t, i) {
          var n = 65280 & t,
            a = (h.udata[n] || {})[t];
          return new h(t, a || r);
        },
      ];
      (h.fromCharCode = g.reduceRight(function (e, t) {
        return function (r, i) {
          return t(e, r, i);
        };
      }, null)),
        (h.isHighSurrogate = function (e) {
          return e >= 55296 && e <= 56319;
        }),
        (h.isLowSurrogate = function (e) {
          return e >= 56320 && e <= 57343;
        }),
        (h.prototype.prepFeature = function () {
          this.feature ||
            (this.feature = h.fromCharCode(this.codepoint, !0).feature);
        }),
        (h.prototype.toString = function () {
          if (this.codepoint < 65536)
            return String.fromCharCode(this.codepoint);
          var e = this.codepoint - 65536;
          return String.fromCharCode(
            Math.floor(e / 1024) + 55296,
            (e % 1024) + 56320
          );
        }),
        (h.prototype.getDecomp = function () {
          return this.prepFeature(), this.feature[0] || null;
        }),
        (h.prototype.isCompatibility = function () {
          return this.prepFeature(), !!this.feature[1] && 256 & this.feature[1];
        }),
        (h.prototype.isExclude = function () {
          return this.prepFeature(), !!this.feature[1] && 512 & this.feature[1];
        }),
        (h.prototype.getCanonicalClass = function () {
          return (
            this.prepFeature(), this.feature[1] ? 255 & this.feature[1] : 0
          );
        }),
        (h.prototype.getComposite = function (e) {
          if ((this.prepFeature(), !this.feature[2])) return null;
          var t = this.feature[2][e.codepoint];
          return t ? h.fromCharCode(t) : null;
        });
      var v = function (e) {
        (this.str = e), (this.cursor = 0);
      };
      v.prototype.next = function () {
        if (this.str && this.cursor < this.str.length) {
          var e,
            t = this.str.charCodeAt(this.cursor++);
          return (
            h.isHighSurrogate(t) &&
              this.cursor < this.str.length &&
              h.isLowSurrogate((e = this.str.charCodeAt(this.cursor))) &&
              ((t = 1024 * (t - 55296) + (e - 56320) + 65536), ++this.cursor),
            h.fromCharCode(t)
          );
        }
        return (this.str = null), null;
      };
      var y = function (e, t) {
        (this.it = e), (this.canonical = t), (this.resBuf = []);
      };
      y.prototype.next = function () {
        if (0 === this.resBuf.length) {
          var e = this.it.next();
          if (!e) return null;
          this.resBuf = (function e(t, r) {
            var i = r.getDecomp();
            if (!i || (t && r.isCompatibility())) return [r];
            for (var n = [], a = 0; a < i.length; ++a) {
              var o = e(t, h.fromCharCode(i[a]));
              n = n.concat(o);
            }
            return n;
          })(this.canonical, e);
        }
        return this.resBuf.shift();
      };
      var w = function (e) {
        (this.it = e), (this.resBuf = []);
      };
      w.prototype.next = function () {
        var e;
        if (0 === this.resBuf.length)
          do {
            var t = this.it.next();
            if (!t) break;
            e = t.getCanonicalClass();
            var r = this.resBuf.length;
            if (0 !== e)
              for (; r > 0; --r) {
                if (this.resBuf[r - 1].getCanonicalClass() <= e) break;
              }
            this.resBuf.splice(r, 0, t);
          } while (0 !== e);
        return this.resBuf.shift();
      };
      var _ = function (e) {
        (this.it = e),
          (this.procBuf = []),
          (this.resBuf = []),
          (this.lastClass = null);
      };
      _.prototype.next = function () {
        for (; 0 === this.resBuf.length; ) {
          var e = this.it.next();
          if (!e) {
            (this.resBuf = this.procBuf), (this.procBuf = []);
            break;
          }
          if (0 === this.procBuf.length)
            (this.lastClass = e.getCanonicalClass()), this.procBuf.push(e);
          else {
            var t = this.procBuf[0].getComposite(e),
              r = e.getCanonicalClass();
            t && (this.lastClass < r || 0 === this.lastClass)
              ? (this.procBuf[0] = t)
              : (0 === r && ((this.resBuf = this.procBuf), (this.procBuf = [])),
                (this.lastClass = r),
                this.procBuf.push(e));
          }
        }
        return this.resBuf.shift();
      };
      var S = function (e, t) {
        for (
          var r,
            i = (function (e, t) {
              switch (e) {
                case "NFD":
                  return new w(new y(new v(t), !0));
                case "NFKD":
                  return new w(new y(new v(t), !1));
                case "NFC":
                  return new _(new w(new y(new v(t), !0)));
                case "NFKC":
                  return new _(new w(new y(new v(t), !1)));
              }
              throw e + " is invalid";
            })(e, t),
            n = "";
          (r = i.next());

        )
          n += r.toString();
        return n;
      };
      h.udata = {
        0: {
          60: [, , { 824: 8814 }],
          61: [, , { 824: 8800 }],
          62: [, , { 824: 8815 }],
          65: [
            ,
            ,
            {
              768: 192,
              769: 193,
              770: 194,
              771: 195,
              772: 256,
              774: 258,
              775: 550,
              776: 196,
              777: 7842,
              778: 197,
              780: 461,
              783: 512,
              785: 514,
              803: 7840,
              805: 7680,
              808: 260,
            },
          ],
          66: [, , { 775: 7682, 803: 7684, 817: 7686 }],
          67: [, , { 769: 262, 770: 264, 775: 266, 780: 268, 807: 199 }],
          68: [
            ,
            ,
            { 775: 7690, 780: 270, 803: 7692, 807: 7696, 813: 7698, 817: 7694 },
          ],
          69: [
            ,
            ,
            {
              768: 200,
              769: 201,
              770: 202,
              771: 7868,
              772: 274,
              774: 276,
              775: 278,
              776: 203,
              777: 7866,
              780: 282,
              783: 516,
              785: 518,
              803: 7864,
              807: 552,
              808: 280,
              813: 7704,
              816: 7706,
            },
          ],
          70: [, , { 775: 7710 }],
          71: [
            ,
            ,
            {
              769: 500,
              770: 284,
              772: 7712,
              774: 286,
              775: 288,
              780: 486,
              807: 290,
            },
          ],
          72: [
            ,
            ,
            {
              770: 292,
              775: 7714,
              776: 7718,
              780: 542,
              803: 7716,
              807: 7720,
              814: 7722,
            },
          ],
          73: [
            ,
            ,
            {
              768: 204,
              769: 205,
              770: 206,
              771: 296,
              772: 298,
              774: 300,
              775: 304,
              776: 207,
              777: 7880,
              780: 463,
              783: 520,
              785: 522,
              803: 7882,
              808: 302,
              816: 7724,
            },
          ],
          74: [, , { 770: 308 }],
          75: [, , { 769: 7728, 780: 488, 803: 7730, 807: 310, 817: 7732 }],
          76: [
            ,
            ,
            { 769: 313, 780: 317, 803: 7734, 807: 315, 813: 7740, 817: 7738 },
          ],
          77: [, , { 769: 7742, 775: 7744, 803: 7746 }],
          78: [
            ,
            ,
            {
              768: 504,
              769: 323,
              771: 209,
              775: 7748,
              780: 327,
              803: 7750,
              807: 325,
              813: 7754,
              817: 7752,
            },
          ],
          79: [
            ,
            ,
            {
              768: 210,
              769: 211,
              770: 212,
              771: 213,
              772: 332,
              774: 334,
              775: 558,
              776: 214,
              777: 7886,
              779: 336,
              780: 465,
              783: 524,
              785: 526,
              795: 416,
              803: 7884,
              808: 490,
            },
          ],
          80: [, , { 769: 7764, 775: 7766 }],
          82: [
            ,
            ,
            {
              769: 340,
              775: 7768,
              780: 344,
              783: 528,
              785: 530,
              803: 7770,
              807: 342,
              817: 7774,
            },
          ],
          83: [
            ,
            ,
            {
              769: 346,
              770: 348,
              775: 7776,
              780: 352,
              803: 7778,
              806: 536,
              807: 350,
            },
          ],
          84: [
            ,
            ,
            {
              775: 7786,
              780: 356,
              803: 7788,
              806: 538,
              807: 354,
              813: 7792,
              817: 7790,
            },
          ],
          85: [
            ,
            ,
            {
              768: 217,
              769: 218,
              770: 219,
              771: 360,
              772: 362,
              774: 364,
              776: 220,
              777: 7910,
              778: 366,
              779: 368,
              780: 467,
              783: 532,
              785: 534,
              795: 431,
              803: 7908,
              804: 7794,
              808: 370,
              813: 7798,
              816: 7796,
            },
          ],
          86: [, , { 771: 7804, 803: 7806 }],
          87: [
            ,
            ,
            { 768: 7808, 769: 7810, 770: 372, 775: 7814, 776: 7812, 803: 7816 },
          ],
          88: [, , { 775: 7818, 776: 7820 }],
          89: [
            ,
            ,
            {
              768: 7922,
              769: 221,
              770: 374,
              771: 7928,
              772: 562,
              775: 7822,
              776: 376,
              777: 7926,
              803: 7924,
            },
          ],
          90: [
            ,
            ,
            { 769: 377, 770: 7824, 775: 379, 780: 381, 803: 7826, 817: 7828 },
          ],
          97: [
            ,
            ,
            {
              768: 224,
              769: 225,
              770: 226,
              771: 227,
              772: 257,
              774: 259,
              775: 551,
              776: 228,
              777: 7843,
              778: 229,
              780: 462,
              783: 513,
              785: 515,
              803: 7841,
              805: 7681,
              808: 261,
            },
          ],
          98: [, , { 775: 7683, 803: 7685, 817: 7687 }],
          99: [, , { 769: 263, 770: 265, 775: 267, 780: 269, 807: 231 }],
          100: [
            ,
            ,
            { 775: 7691, 780: 271, 803: 7693, 807: 7697, 813: 7699, 817: 7695 },
          ],
          101: [
            ,
            ,
            {
              768: 232,
              769: 233,
              770: 234,
              771: 7869,
              772: 275,
              774: 277,
              775: 279,
              776: 235,
              777: 7867,
              780: 283,
              783: 517,
              785: 519,
              803: 7865,
              807: 553,
              808: 281,
              813: 7705,
              816: 7707,
            },
          ],
          102: [, , { 775: 7711 }],
          103: [
            ,
            ,
            {
              769: 501,
              770: 285,
              772: 7713,
              774: 287,
              775: 289,
              780: 487,
              807: 291,
            },
          ],
          104: [
            ,
            ,
            {
              770: 293,
              775: 7715,
              776: 7719,
              780: 543,
              803: 7717,
              807: 7721,
              814: 7723,
              817: 7830,
            },
          ],
          105: [
            ,
            ,
            {
              768: 236,
              769: 237,
              770: 238,
              771: 297,
              772: 299,
              774: 301,
              776: 239,
              777: 7881,
              780: 464,
              783: 521,
              785: 523,
              803: 7883,
              808: 303,
              816: 7725,
            },
          ],
          106: [, , { 770: 309, 780: 496 }],
          107: [, , { 769: 7729, 780: 489, 803: 7731, 807: 311, 817: 7733 }],
          108: [
            ,
            ,
            { 769: 314, 780: 318, 803: 7735, 807: 316, 813: 7741, 817: 7739 },
          ],
          109: [, , { 769: 7743, 775: 7745, 803: 7747 }],
          110: [
            ,
            ,
            {
              768: 505,
              769: 324,
              771: 241,
              775: 7749,
              780: 328,
              803: 7751,
              807: 326,
              813: 7755,
              817: 7753,
            },
          ],
          111: [
            ,
            ,
            {
              768: 242,
              769: 243,
              770: 244,
              771: 245,
              772: 333,
              774: 335,
              775: 559,
              776: 246,
              777: 7887,
              779: 337,
              780: 466,
              783: 525,
              785: 527,
              795: 417,
              803: 7885,
              808: 491,
            },
          ],
          112: [, , { 769: 7765, 775: 7767 }],
          114: [
            ,
            ,
            {
              769: 341,
              775: 7769,
              780: 345,
              783: 529,
              785: 531,
              803: 7771,
              807: 343,
              817: 7775,
            },
          ],
          115: [
            ,
            ,
            {
              769: 347,
              770: 349,
              775: 7777,
              780: 353,
              803: 7779,
              806: 537,
              807: 351,
            },
          ],
          116: [
            ,
            ,
            {
              775: 7787,
              776: 7831,
              780: 357,
              803: 7789,
              806: 539,
              807: 355,
              813: 7793,
              817: 7791,
            },
          ],
          117: [
            ,
            ,
            {
              768: 249,
              769: 250,
              770: 251,
              771: 361,
              772: 363,
              774: 365,
              776: 252,
              777: 7911,
              778: 367,
              779: 369,
              780: 468,
              783: 533,
              785: 535,
              795: 432,
              803: 7909,
              804: 7795,
              808: 371,
              813: 7799,
              816: 7797,
            },
          ],
          118: [, , { 771: 7805, 803: 7807 }],
          119: [
            ,
            ,
            {
              768: 7809,
              769: 7811,
              770: 373,
              775: 7815,
              776: 7813,
              778: 7832,
              803: 7817,
            },
          ],
          120: [, , { 775: 7819, 776: 7821 }],
          121: [
            ,
            ,
            {
              768: 7923,
              769: 253,
              770: 375,
              771: 7929,
              772: 563,
              775: 7823,
              776: 255,
              777: 7927,
              778: 7833,
              803: 7925,
            },
          ],
          122: [
            ,
            ,
            { 769: 378, 770: 7825, 775: 380, 780: 382, 803: 7827, 817: 7829 },
          ],
          160: [[32], 256],
          168: [[32, 776], 256, { 768: 8173, 769: 901, 834: 8129 }],
          170: [[97], 256],
          175: [[32, 772], 256],
          178: [[50], 256],
          179: [[51], 256],
          180: [[32, 769], 256],
          181: [[956], 256],
          184: [[32, 807], 256],
          185: [[49], 256],
          186: [[111], 256],
          188: [[49, 8260, 52], 256],
          189: [[49, 8260, 50], 256],
          190: [[51, 8260, 52], 256],
          192: [[65, 768]],
          193: [[65, 769]],
          194: [[65, 770], , { 768: 7846, 769: 7844, 771: 7850, 777: 7848 }],
          195: [[65, 771]],
          196: [[65, 776], , { 772: 478 }],
          197: [[65, 778], , { 769: 506 }],
          198: [, , { 769: 508, 772: 482 }],
          199: [[67, 807], , { 769: 7688 }],
          200: [[69, 768]],
          201: [[69, 769]],
          202: [[69, 770], , { 768: 7872, 769: 7870, 771: 7876, 777: 7874 }],
          203: [[69, 776]],
          204: [[73, 768]],
          205: [[73, 769]],
          206: [[73, 770]],
          207: [[73, 776], , { 769: 7726 }],
          209: [[78, 771]],
          210: [[79, 768]],
          211: [[79, 769]],
          212: [[79, 770], , { 768: 7890, 769: 7888, 771: 7894, 777: 7892 }],
          213: [[79, 771], , { 769: 7756, 772: 556, 776: 7758 }],
          214: [[79, 776], , { 772: 554 }],
          216: [, , { 769: 510 }],
          217: [[85, 768]],
          218: [[85, 769]],
          219: [[85, 770]],
          220: [[85, 776], , { 768: 475, 769: 471, 772: 469, 780: 473 }],
          221: [[89, 769]],
          224: [[97, 768]],
          225: [[97, 769]],
          226: [[97, 770], , { 768: 7847, 769: 7845, 771: 7851, 777: 7849 }],
          227: [[97, 771]],
          228: [[97, 776], , { 772: 479 }],
          229: [[97, 778], , { 769: 507 }],
          230: [, , { 769: 509, 772: 483 }],
          231: [[99, 807], , { 769: 7689 }],
          232: [[101, 768]],
          233: [[101, 769]],
          234: [[101, 770], , { 768: 7873, 769: 7871, 771: 7877, 777: 7875 }],
          235: [[101, 776]],
          236: [[105, 768]],
          237: [[105, 769]],
          238: [[105, 770]],
          239: [[105, 776], , { 769: 7727 }],
          241: [[110, 771]],
          242: [[111, 768]],
          243: [[111, 769]],
          244: [[111, 770], , { 768: 7891, 769: 7889, 771: 7895, 777: 7893 }],
          245: [[111, 771], , { 769: 7757, 772: 557, 776: 7759 }],
          246: [[111, 776], , { 772: 555 }],
          248: [, , { 769: 511 }],
          249: [[117, 768]],
          250: [[117, 769]],
          251: [[117, 770]],
          252: [[117, 776], , { 768: 476, 769: 472, 772: 470, 780: 474 }],
          253: [[121, 769]],
          255: [[121, 776]],
        },
        256: {
          256: [[65, 772]],
          257: [[97, 772]],
          258: [[65, 774], , { 768: 7856, 769: 7854, 771: 7860, 777: 7858 }],
          259: [[97, 774], , { 768: 7857, 769: 7855, 771: 7861, 777: 7859 }],
          260: [[65, 808]],
          261: [[97, 808]],
          262: [[67, 769]],
          263: [[99, 769]],
          264: [[67, 770]],
          265: [[99, 770]],
          266: [[67, 775]],
          267: [[99, 775]],
          268: [[67, 780]],
          269: [[99, 780]],
          270: [[68, 780]],
          271: [[100, 780]],
          274: [[69, 772], , { 768: 7700, 769: 7702 }],
          275: [[101, 772], , { 768: 7701, 769: 7703 }],
          276: [[69, 774]],
          277: [[101, 774]],
          278: [[69, 775]],
          279: [[101, 775]],
          280: [[69, 808]],
          281: [[101, 808]],
          282: [[69, 780]],
          283: [[101, 780]],
          284: [[71, 770]],
          285: [[103, 770]],
          286: [[71, 774]],
          287: [[103, 774]],
          288: [[71, 775]],
          289: [[103, 775]],
          290: [[71, 807]],
          291: [[103, 807]],
          292: [[72, 770]],
          293: [[104, 770]],
          296: [[73, 771]],
          297: [[105, 771]],
          298: [[73, 772]],
          299: [[105, 772]],
          300: [[73, 774]],
          301: [[105, 774]],
          302: [[73, 808]],
          303: [[105, 808]],
          304: [[73, 775]],
          306: [[73, 74], 256],
          307: [[105, 106], 256],
          308: [[74, 770]],
          309: [[106, 770]],
          310: [[75, 807]],
          311: [[107, 807]],
          313: [[76, 769]],
          314: [[108, 769]],
          315: [[76, 807]],
          316: [[108, 807]],
          317: [[76, 780]],
          318: [[108, 780]],
          319: [[76, 183], 256],
          320: [[108, 183], 256],
          323: [[78, 769]],
          324: [[110, 769]],
          325: [[78, 807]],
          326: [[110, 807]],
          327: [[78, 780]],
          328: [[110, 780]],
          329: [[700, 110], 256],
          332: [[79, 772], , { 768: 7760, 769: 7762 }],
          333: [[111, 772], , { 768: 7761, 769: 7763 }],
          334: [[79, 774]],
          335: [[111, 774]],
          336: [[79, 779]],
          337: [[111, 779]],
          340: [[82, 769]],
          341: [[114, 769]],
          342: [[82, 807]],
          343: [[114, 807]],
          344: [[82, 780]],
          345: [[114, 780]],
          346: [[83, 769], , { 775: 7780 }],
          347: [[115, 769], , { 775: 7781 }],
          348: [[83, 770]],
          349: [[115, 770]],
          350: [[83, 807]],
          351: [[115, 807]],
          352: [[83, 780], , { 775: 7782 }],
          353: [[115, 780], , { 775: 7783 }],
          354: [[84, 807]],
          355: [[116, 807]],
          356: [[84, 780]],
          357: [[116, 780]],
          360: [[85, 771], , { 769: 7800 }],
          361: [[117, 771], , { 769: 7801 }],
          362: [[85, 772], , { 776: 7802 }],
          363: [[117, 772], , { 776: 7803 }],
          364: [[85, 774]],
          365: [[117, 774]],
          366: [[85, 778]],
          367: [[117, 778]],
          368: [[85, 779]],
          369: [[117, 779]],
          370: [[85, 808]],
          371: [[117, 808]],
          372: [[87, 770]],
          373: [[119, 770]],
          374: [[89, 770]],
          375: [[121, 770]],
          376: [[89, 776]],
          377: [[90, 769]],
          378: [[122, 769]],
          379: [[90, 775]],
          380: [[122, 775]],
          381: [[90, 780]],
          382: [[122, 780]],
          383: [[115], 256, { 775: 7835 }],
          416: [
            [79, 795],
            ,
            { 768: 7900, 769: 7898, 771: 7904, 777: 7902, 803: 7906 },
          ],
          417: [
            [111, 795],
            ,
            { 768: 7901, 769: 7899, 771: 7905, 777: 7903, 803: 7907 },
          ],
          431: [
            [85, 795],
            ,
            { 768: 7914, 769: 7912, 771: 7918, 777: 7916, 803: 7920 },
          ],
          432: [
            [117, 795],
            ,
            { 768: 7915, 769: 7913, 771: 7919, 777: 7917, 803: 7921 },
          ],
          439: [, , { 780: 494 }],
          452: [[68, 381], 256],
          453: [[68, 382], 256],
          454: [[100, 382], 256],
          455: [[76, 74], 256],
          456: [[76, 106], 256],
          457: [[108, 106], 256],
          458: [[78, 74], 256],
          459: [[78, 106], 256],
          460: [[110, 106], 256],
          461: [[65, 780]],
          462: [[97, 780]],
          463: [[73, 780]],
          464: [[105, 780]],
          465: [[79, 780]],
          466: [[111, 780]],
          467: [[85, 780]],
          468: [[117, 780]],
          469: [[220, 772]],
          470: [[252, 772]],
          471: [[220, 769]],
          472: [[252, 769]],
          473: [[220, 780]],
          474: [[252, 780]],
          475: [[220, 768]],
          476: [[252, 768]],
          478: [[196, 772]],
          479: [[228, 772]],
          480: [[550, 772]],
          481: [[551, 772]],
          482: [[198, 772]],
          483: [[230, 772]],
          486: [[71, 780]],
          487: [[103, 780]],
          488: [[75, 780]],
          489: [[107, 780]],
          490: [[79, 808], , { 772: 492 }],
          491: [[111, 808], , { 772: 493 }],
          492: [[490, 772]],
          493: [[491, 772]],
          494: [[439, 780]],
          495: [[658, 780]],
          496: [[106, 780]],
          497: [[68, 90], 256],
          498: [[68, 122], 256],
          499: [[100, 122], 256],
          500: [[71, 769]],
          501: [[103, 769]],
          504: [[78, 768]],
          505: [[110, 768]],
          506: [[197, 769]],
          507: [[229, 769]],
          508: [[198, 769]],
          509: [[230, 769]],
          510: [[216, 769]],
          511: [[248, 769]],
          66045: [, 220],
        },
        512: {
          512: [[65, 783]],
          513: [[97, 783]],
          514: [[65, 785]],
          515: [[97, 785]],
          516: [[69, 783]],
          517: [[101, 783]],
          518: [[69, 785]],
          519: [[101, 785]],
          520: [[73, 783]],
          521: [[105, 783]],
          522: [[73, 785]],
          523: [[105, 785]],
          524: [[79, 783]],
          525: [[111, 783]],
          526: [[79, 785]],
          527: [[111, 785]],
          528: [[82, 783]],
          529: [[114, 783]],
          530: [[82, 785]],
          531: [[114, 785]],
          532: [[85, 783]],
          533: [[117, 783]],
          534: [[85, 785]],
          535: [[117, 785]],
          536: [[83, 806]],
          537: [[115, 806]],
          538: [[84, 806]],
          539: [[116, 806]],
          542: [[72, 780]],
          543: [[104, 780]],
          550: [[65, 775], , { 772: 480 }],
          551: [[97, 775], , { 772: 481 }],
          552: [[69, 807], , { 774: 7708 }],
          553: [[101, 807], , { 774: 7709 }],
          554: [[214, 772]],
          555: [[246, 772]],
          556: [[213, 772]],
          557: [[245, 772]],
          558: [[79, 775], , { 772: 560 }],
          559: [[111, 775], , { 772: 561 }],
          560: [[558, 772]],
          561: [[559, 772]],
          562: [[89, 772]],
          563: [[121, 772]],
          658: [, , { 780: 495 }],
          688: [[104], 256],
          689: [[614], 256],
          690: [[106], 256],
          691: [[114], 256],
          692: [[633], 256],
          693: [[635], 256],
          694: [[641], 256],
          695: [[119], 256],
          696: [[121], 256],
          728: [[32, 774], 256],
          729: [[32, 775], 256],
          730: [[32, 778], 256],
          731: [[32, 808], 256],
          732: [[32, 771], 256],
          733: [[32, 779], 256],
          736: [[611], 256],
          737: [[108], 256],
          738: [[115], 256],
          739: [[120], 256],
          740: [[661], 256],
          66272: [, 220],
        },
        768: {
          768: [, 230],
          769: [, 230],
          770: [, 230],
          771: [, 230],
          772: [, 230],
          773: [, 230],
          774: [, 230],
          775: [, 230],
          776: [, 230, { 769: 836 }],
          777: [, 230],
          778: [, 230],
          779: [, 230],
          780: [, 230],
          781: [, 230],
          782: [, 230],
          783: [, 230],
          784: [, 230],
          785: [, 230],
          786: [, 230],
          787: [, 230],
          788: [, 230],
          789: [, 232],
          790: [, 220],
          791: [, 220],
          792: [, 220],
          793: [, 220],
          794: [, 232],
          795: [, 216],
          796: [, 220],
          797: [, 220],
          798: [, 220],
          799: [, 220],
          800: [, 220],
          801: [, 202],
          802: [, 202],
          803: [, 220],
          804: [, 220],
          805: [, 220],
          806: [, 220],
          807: [, 202],
          808: [, 202],
          809: [, 220],
          810: [, 220],
          811: [, 220],
          812: [, 220],
          813: [, 220],
          814: [, 220],
          815: [, 220],
          816: [, 220],
          817: [, 220],
          818: [, 220],
          819: [, 220],
          820: [, 1],
          821: [, 1],
          822: [, 1],
          823: [, 1],
          824: [, 1],
          825: [, 220],
          826: [, 220],
          827: [, 220],
          828: [, 220],
          829: [, 230],
          830: [, 230],
          831: [, 230],
          832: [[768], 230],
          833: [[769], 230],
          834: [, 230],
          835: [[787], 230],
          836: [[776, 769], 230],
          837: [, 240],
          838: [, 230],
          839: [, 220],
          840: [, 220],
          841: [, 220],
          842: [, 230],
          843: [, 230],
          844: [, 230],
          845: [, 220],
          846: [, 220],
          848: [, 230],
          849: [, 230],
          850: [, 230],
          851: [, 220],
          852: [, 220],
          853: [, 220],
          854: [, 220],
          855: [, 230],
          856: [, 232],
          857: [, 220],
          858: [, 220],
          859: [, 230],
          860: [, 233],
          861: [, 234],
          862: [, 234],
          863: [, 233],
          864: [, 234],
          865: [, 234],
          866: [, 233],
          867: [, 230],
          868: [, 230],
          869: [, 230],
          870: [, 230],
          871: [, 230],
          872: [, 230],
          873: [, 230],
          874: [, 230],
          875: [, 230],
          876: [, 230],
          877: [, 230],
          878: [, 230],
          879: [, 230],
          884: [[697]],
          890: [[32, 837], 256],
          894: [[59]],
          900: [[32, 769], 256],
          901: [[168, 769]],
          902: [[913, 769]],
          903: [[183]],
          904: [[917, 769]],
          905: [[919, 769]],
          906: [[921, 769]],
          908: [[927, 769]],
          910: [[933, 769]],
          911: [[937, 769]],
          912: [[970, 769]],
          913: [
            ,
            ,
            {
              768: 8122,
              769: 902,
              772: 8121,
              774: 8120,
              787: 7944,
              788: 7945,
              837: 8124,
            },
          ],
          917: [, , { 768: 8136, 769: 904, 787: 7960, 788: 7961 }],
          919: [, , { 768: 8138, 769: 905, 787: 7976, 788: 7977, 837: 8140 }],
          921: [
            ,
            ,
            {
              768: 8154,
              769: 906,
              772: 8153,
              774: 8152,
              776: 938,
              787: 7992,
              788: 7993,
            },
          ],
          927: [, , { 768: 8184, 769: 908, 787: 8008, 788: 8009 }],
          929: [, , { 788: 8172 }],
          933: [
            ,
            ,
            { 768: 8170, 769: 910, 772: 8169, 774: 8168, 776: 939, 788: 8025 },
          ],
          937: [, , { 768: 8186, 769: 911, 787: 8040, 788: 8041, 837: 8188 }],
          938: [[921, 776]],
          939: [[933, 776]],
          940: [[945, 769], , { 837: 8116 }],
          941: [[949, 769]],
          942: [[951, 769], , { 837: 8132 }],
          943: [[953, 769]],
          944: [[971, 769]],
          945: [
            ,
            ,
            {
              768: 8048,
              769: 940,
              772: 8113,
              774: 8112,
              787: 7936,
              788: 7937,
              834: 8118,
              837: 8115,
            },
          ],
          949: [, , { 768: 8050, 769: 941, 787: 7952, 788: 7953 }],
          951: [
            ,
            ,
            { 768: 8052, 769: 942, 787: 7968, 788: 7969, 834: 8134, 837: 8131 },
          ],
          953: [
            ,
            ,
            {
              768: 8054,
              769: 943,
              772: 8145,
              774: 8144,
              776: 970,
              787: 7984,
              788: 7985,
              834: 8150,
            },
          ],
          959: [, , { 768: 8056, 769: 972, 787: 8e3, 788: 8001 }],
          961: [, , { 787: 8164, 788: 8165 }],
          965: [
            ,
            ,
            {
              768: 8058,
              769: 973,
              772: 8161,
              774: 8160,
              776: 971,
              787: 8016,
              788: 8017,
              834: 8166,
            },
          ],
          969: [
            ,
            ,
            { 768: 8060, 769: 974, 787: 8032, 788: 8033, 834: 8182, 837: 8179 },
          ],
          970: [[953, 776], , { 768: 8146, 769: 912, 834: 8151 }],
          971: [[965, 776], , { 768: 8162, 769: 944, 834: 8167 }],
          972: [[959, 769]],
          973: [[965, 769]],
          974: [[969, 769], , { 837: 8180 }],
          976: [[946], 256],
          977: [[952], 256],
          978: [[933], 256, { 769: 979, 776: 980 }],
          979: [[978, 769]],
          980: [[978, 776]],
          981: [[966], 256],
          982: [[960], 256],
          1008: [[954], 256],
          1009: [[961], 256],
          1010: [[962], 256],
          1012: [[920], 256],
          1013: [[949], 256],
          1017: [[931], 256],
          66422: [, 230],
          66423: [, 230],
          66424: [, 230],
          66425: [, 230],
          66426: [, 230],
        },
        1024: {
          1024: [[1045, 768]],
          1025: [[1045, 776]],
          1027: [[1043, 769]],
          1030: [, , { 776: 1031 }],
          1031: [[1030, 776]],
          1036: [[1050, 769]],
          1037: [[1048, 768]],
          1038: [[1059, 774]],
          1040: [, , { 774: 1232, 776: 1234 }],
          1043: [, , { 769: 1027 }],
          1045: [, , { 768: 1024, 774: 1238, 776: 1025 }],
          1046: [, , { 774: 1217, 776: 1244 }],
          1047: [, , { 776: 1246 }],
          1048: [, , { 768: 1037, 772: 1250, 774: 1049, 776: 1252 }],
          1049: [[1048, 774]],
          1050: [, , { 769: 1036 }],
          1054: [, , { 776: 1254 }],
          1059: [, , { 772: 1262, 774: 1038, 776: 1264, 779: 1266 }],
          1063: [, , { 776: 1268 }],
          1067: [, , { 776: 1272 }],
          1069: [, , { 776: 1260 }],
          1072: [, , { 774: 1233, 776: 1235 }],
          1075: [, , { 769: 1107 }],
          1077: [, , { 768: 1104, 774: 1239, 776: 1105 }],
          1078: [, , { 774: 1218, 776: 1245 }],
          1079: [, , { 776: 1247 }],
          1080: [, , { 768: 1117, 772: 1251, 774: 1081, 776: 1253 }],
          1081: [[1080, 774]],
          1082: [, , { 769: 1116 }],
          1086: [, , { 776: 1255 }],
          1091: [, , { 772: 1263, 774: 1118, 776: 1265, 779: 1267 }],
          1095: [, , { 776: 1269 }],
          1099: [, , { 776: 1273 }],
          1101: [, , { 776: 1261 }],
          1104: [[1077, 768]],
          1105: [[1077, 776]],
          1107: [[1075, 769]],
          1110: [, , { 776: 1111 }],
          1111: [[1110, 776]],
          1116: [[1082, 769]],
          1117: [[1080, 768]],
          1118: [[1091, 774]],
          1140: [, , { 783: 1142 }],
          1141: [, , { 783: 1143 }],
          1142: [[1140, 783]],
          1143: [[1141, 783]],
          1155: [, 230],
          1156: [, 230],
          1157: [, 230],
          1158: [, 230],
          1159: [, 230],
          1217: [[1046, 774]],
          1218: [[1078, 774]],
          1232: [[1040, 774]],
          1233: [[1072, 774]],
          1234: [[1040, 776]],
          1235: [[1072, 776]],
          1238: [[1045, 774]],
          1239: [[1077, 774]],
          1240: [, , { 776: 1242 }],
          1241: [, , { 776: 1243 }],
          1242: [[1240, 776]],
          1243: [[1241, 776]],
          1244: [[1046, 776]],
          1245: [[1078, 776]],
          1246: [[1047, 776]],
          1247: [[1079, 776]],
          1250: [[1048, 772]],
          1251: [[1080, 772]],
          1252: [[1048, 776]],
          1253: [[1080, 776]],
          1254: [[1054, 776]],
          1255: [[1086, 776]],
          1256: [, , { 776: 1258 }],
          1257: [, , { 776: 1259 }],
          1258: [[1256, 776]],
          1259: [[1257, 776]],
          1260: [[1069, 776]],
          1261: [[1101, 776]],
          1262: [[1059, 772]],
          1263: [[1091, 772]],
          1264: [[1059, 776]],
          1265: [[1091, 776]],
          1266: [[1059, 779]],
          1267: [[1091, 779]],
          1268: [[1063, 776]],
          1269: [[1095, 776]],
          1272: [[1067, 776]],
          1273: [[1099, 776]],
        },
        1280: {
          1415: [[1381, 1410], 256],
          1425: [, 220],
          1426: [, 230],
          1427: [, 230],
          1428: [, 230],
          1429: [, 230],
          1430: [, 220],
          1431: [, 230],
          1432: [, 230],
          1433: [, 230],
          1434: [, 222],
          1435: [, 220],
          1436: [, 230],
          1437: [, 230],
          1438: [, 230],
          1439: [, 230],
          1440: [, 230],
          1441: [, 230],
          1442: [, 220],
          1443: [, 220],
          1444: [, 220],
          1445: [, 220],
          1446: [, 220],
          1447: [, 220],
          1448: [, 230],
          1449: [, 230],
          1450: [, 220],
          1451: [, 230],
          1452: [, 230],
          1453: [, 222],
          1454: [, 228],
          1455: [, 230],
          1456: [, 10],
          1457: [, 11],
          1458: [, 12],
          1459: [, 13],
          1460: [, 14],
          1461: [, 15],
          1462: [, 16],
          1463: [, 17],
          1464: [, 18],
          1465: [, 19],
          1466: [, 19],
          1467: [, 20],
          1468: [, 21],
          1469: [, 22],
          1471: [, 23],
          1473: [, 24],
          1474: [, 25],
          1476: [, 230],
          1477: [, 220],
          1479: [, 18],
        },
        1536: {
          1552: [, 230],
          1553: [, 230],
          1554: [, 230],
          1555: [, 230],
          1556: [, 230],
          1557: [, 230],
          1558: [, 230],
          1559: [, 230],
          1560: [, 30],
          1561: [, 31],
          1562: [, 32],
          1570: [[1575, 1619]],
          1571: [[1575, 1620]],
          1572: [[1608, 1620]],
          1573: [[1575, 1621]],
          1574: [[1610, 1620]],
          1575: [, , { 1619: 1570, 1620: 1571, 1621: 1573 }],
          1608: [, , { 1620: 1572 }],
          1610: [, , { 1620: 1574 }],
          1611: [, 27],
          1612: [, 28],
          1613: [, 29],
          1614: [, 30],
          1615: [, 31],
          1616: [, 32],
          1617: [, 33],
          1618: [, 34],
          1619: [, 230],
          1620: [, 230],
          1621: [, 220],
          1622: [, 220],
          1623: [, 230],
          1624: [, 230],
          1625: [, 230],
          1626: [, 230],
          1627: [, 230],
          1628: [, 220],
          1629: [, 230],
          1630: [, 230],
          1631: [, 220],
          1648: [, 35],
          1653: [[1575, 1652], 256],
          1654: [[1608, 1652], 256],
          1655: [[1735, 1652], 256],
          1656: [[1610, 1652], 256],
          1728: [[1749, 1620]],
          1729: [, , { 1620: 1730 }],
          1730: [[1729, 1620]],
          1746: [, , { 1620: 1747 }],
          1747: [[1746, 1620]],
          1749: [, , { 1620: 1728 }],
          1750: [, 230],
          1751: [, 230],
          1752: [, 230],
          1753: [, 230],
          1754: [, 230],
          1755: [, 230],
          1756: [, 230],
          1759: [, 230],
          1760: [, 230],
          1761: [, 230],
          1762: [, 230],
          1763: [, 220],
          1764: [, 230],
          1767: [, 230],
          1768: [, 230],
          1770: [, 220],
          1771: [, 230],
          1772: [, 230],
          1773: [, 220],
        },
        1792: {
          1809: [, 36],
          1840: [, 230],
          1841: [, 220],
          1842: [, 230],
          1843: [, 230],
          1844: [, 220],
          1845: [, 230],
          1846: [, 230],
          1847: [, 220],
          1848: [, 220],
          1849: [, 220],
          1850: [, 230],
          1851: [, 220],
          1852: [, 220],
          1853: [, 230],
          1854: [, 220],
          1855: [, 230],
          1856: [, 230],
          1857: [, 230],
          1858: [, 220],
          1859: [, 230],
          1860: [, 220],
          1861: [, 230],
          1862: [, 220],
          1863: [, 230],
          1864: [, 220],
          1865: [, 230],
          1866: [, 230],
          2027: [, 230],
          2028: [, 230],
          2029: [, 230],
          2030: [, 230],
          2031: [, 230],
          2032: [, 230],
          2033: [, 230],
          2034: [, 220],
          2035: [, 230],
        },
        2048: {
          2070: [, 230],
          2071: [, 230],
          2072: [, 230],
          2073: [, 230],
          2075: [, 230],
          2076: [, 230],
          2077: [, 230],
          2078: [, 230],
          2079: [, 230],
          2080: [, 230],
          2081: [, 230],
          2082: [, 230],
          2083: [, 230],
          2085: [, 230],
          2086: [, 230],
          2087: [, 230],
          2089: [, 230],
          2090: [, 230],
          2091: [, 230],
          2092: [, 230],
          2093: [, 230],
          2137: [, 220],
          2138: [, 220],
          2139: [, 220],
          2276: [, 230],
          2277: [, 230],
          2278: [, 220],
          2279: [, 230],
          2280: [, 230],
          2281: [, 220],
          2282: [, 230],
          2283: [, 230],
          2284: [, 230],
          2285: [, 220],
          2286: [, 220],
          2287: [, 220],
          2288: [, 27],
          2289: [, 28],
          2290: [, 29],
          2291: [, 230],
          2292: [, 230],
          2293: [, 230],
          2294: [, 220],
          2295: [, 230],
          2296: [, 230],
          2297: [, 220],
          2298: [, 220],
          2299: [, 230],
          2300: [, 230],
          2301: [, 230],
          2302: [, 230],
          2303: [, 230],
        },
        2304: {
          2344: [, , { 2364: 2345 }],
          2345: [[2344, 2364]],
          2352: [, , { 2364: 2353 }],
          2353: [[2352, 2364]],
          2355: [, , { 2364: 2356 }],
          2356: [[2355, 2364]],
          2364: [, 7],
          2381: [, 9],
          2385: [, 230],
          2386: [, 220],
          2387: [, 230],
          2388: [, 230],
          2392: [[2325, 2364], 512],
          2393: [[2326, 2364], 512],
          2394: [[2327, 2364], 512],
          2395: [[2332, 2364], 512],
          2396: [[2337, 2364], 512],
          2397: [[2338, 2364], 512],
          2398: [[2347, 2364], 512],
          2399: [[2351, 2364], 512],
          2492: [, 7],
          2503: [, , { 2494: 2507, 2519: 2508 }],
          2507: [[2503, 2494]],
          2508: [[2503, 2519]],
          2509: [, 9],
          2524: [[2465, 2492], 512],
          2525: [[2466, 2492], 512],
          2527: [[2479, 2492], 512],
        },
        2560: {
          2611: [[2610, 2620], 512],
          2614: [[2616, 2620], 512],
          2620: [, 7],
          2637: [, 9],
          2649: [[2582, 2620], 512],
          2650: [[2583, 2620], 512],
          2651: [[2588, 2620], 512],
          2654: [[2603, 2620], 512],
          2748: [, 7],
          2765: [, 9],
          68109: [, 220],
          68111: [, 230],
          68152: [, 230],
          68153: [, 1],
          68154: [, 220],
          68159: [, 9],
          68325: [, 230],
          68326: [, 220],
        },
        2816: {
          2876: [, 7],
          2887: [, , { 2878: 2891, 2902: 2888, 2903: 2892 }],
          2888: [[2887, 2902]],
          2891: [[2887, 2878]],
          2892: [[2887, 2903]],
          2893: [, 9],
          2908: [[2849, 2876], 512],
          2909: [[2850, 2876], 512],
          2962: [, , { 3031: 2964 }],
          2964: [[2962, 3031]],
          3014: [, , { 3006: 3018, 3031: 3020 }],
          3015: [, , { 3006: 3019 }],
          3018: [[3014, 3006]],
          3019: [[3015, 3006]],
          3020: [[3014, 3031]],
          3021: [, 9],
        },
        3072: {
          3142: [, , { 3158: 3144 }],
          3144: [[3142, 3158]],
          3149: [, 9],
          3157: [, 84],
          3158: [, 91],
          3260: [, 7],
          3263: [, , { 3285: 3264 }],
          3264: [[3263, 3285]],
          3270: [, , { 3266: 3274, 3285: 3271, 3286: 3272 }],
          3271: [[3270, 3285]],
          3272: [[3270, 3286]],
          3274: [[3270, 3266], , { 3285: 3275 }],
          3275: [[3274, 3285]],
          3277: [, 9],
        },
        3328: {
          3398: [, , { 3390: 3402, 3415: 3404 }],
          3399: [, , { 3390: 3403 }],
          3402: [[3398, 3390]],
          3403: [[3399, 3390]],
          3404: [[3398, 3415]],
          3405: [, 9],
          3530: [, 9],
          3545: [, , { 3530: 3546, 3535: 3548, 3551: 3550 }],
          3546: [[3545, 3530]],
          3548: [[3545, 3535], , { 3530: 3549 }],
          3549: [[3548, 3530]],
          3550: [[3545, 3551]],
        },
        3584: {
          3635: [[3661, 3634], 256],
          3640: [, 103],
          3641: [, 103],
          3642: [, 9],
          3656: [, 107],
          3657: [, 107],
          3658: [, 107],
          3659: [, 107],
          3763: [[3789, 3762], 256],
          3768: [, 118],
          3769: [, 118],
          3784: [, 122],
          3785: [, 122],
          3786: [, 122],
          3787: [, 122],
          3804: [[3755, 3737], 256],
          3805: [[3755, 3745], 256],
        },
        3840: {
          3852: [[3851], 256],
          3864: [, 220],
          3865: [, 220],
          3893: [, 220],
          3895: [, 220],
          3897: [, 216],
          3907: [[3906, 4023], 512],
          3917: [[3916, 4023], 512],
          3922: [[3921, 4023], 512],
          3927: [[3926, 4023], 512],
          3932: [[3931, 4023], 512],
          3945: [[3904, 4021], 512],
          3953: [, 129],
          3954: [, 130],
          3955: [[3953, 3954], 512],
          3956: [, 132],
          3957: [[3953, 3956], 512],
          3958: [[4018, 3968], 512],
          3959: [[4018, 3969], 256],
          3960: [[4019, 3968], 512],
          3961: [[4019, 3969], 256],
          3962: [, 130],
          3963: [, 130],
          3964: [, 130],
          3965: [, 130],
          3968: [, 130],
          3969: [[3953, 3968], 512],
          3970: [, 230],
          3971: [, 230],
          3972: [, 9],
          3974: [, 230],
          3975: [, 230],
          3987: [[3986, 4023], 512],
          3997: [[3996, 4023], 512],
          4002: [[4001, 4023], 512],
          4007: [[4006, 4023], 512],
          4012: [[4011, 4023], 512],
          4025: [[3984, 4021], 512],
          4038: [, 220],
        },
        4096: {
          4133: [, , { 4142: 4134 }],
          4134: [[4133, 4142]],
          4151: [, 7],
          4153: [, 9],
          4154: [, 9],
          4237: [, 220],
          4348: [[4316], 256],
          69702: [, 9],
          69759: [, 9],
          69785: [, , { 69818: 69786 }],
          69786: [[69785, 69818]],
          69787: [, , { 69818: 69788 }],
          69788: [[69787, 69818]],
          69797: [, , { 69818: 69803 }],
          69803: [[69797, 69818]],
          69817: [, 9],
          69818: [, 7],
        },
        4352: {
          69888: [, 230],
          69889: [, 230],
          69890: [, 230],
          69934: [[69937, 69927]],
          69935: [[69938, 69927]],
          69937: [, , { 69927: 69934 }],
          69938: [, , { 69927: 69935 }],
          69939: [, 9],
          69940: [, 9],
          70003: [, 7],
          70080: [, 9],
        },
        4608: { 70197: [, 9], 70198: [, 7], 70377: [, 7], 70378: [, 9] },
        4864: {
          4957: [, 230],
          4958: [, 230],
          4959: [, 230],
          70460: [, 7],
          70471: [, , { 70462: 70475, 70487: 70476 }],
          70475: [[70471, 70462]],
          70476: [[70471, 70487]],
          70477: [, 9],
          70502: [, 230],
          70503: [, 230],
          70504: [, 230],
          70505: [, 230],
          70506: [, 230],
          70507: [, 230],
          70508: [, 230],
          70512: [, 230],
          70513: [, 230],
          70514: [, 230],
          70515: [, 230],
          70516: [, 230],
        },
        5120: {
          70841: [, , { 70832: 70844, 70842: 70843, 70845: 70846 }],
          70843: [[70841, 70842]],
          70844: [[70841, 70832]],
          70846: [[70841, 70845]],
          70850: [, 9],
          70851: [, 7],
        },
        5376: {
          71096: [, , { 71087: 71098 }],
          71097: [, , { 71087: 71099 }],
          71098: [[71096, 71087]],
          71099: [[71097, 71087]],
          71103: [, 9],
          71104: [, 7],
        },
        5632: { 71231: [, 9], 71350: [, 9], 71351: [, 7] },
        5888: { 5908: [, 9], 5940: [, 9], 6098: [, 9], 6109: [, 230] },
        6144: { 6313: [, 228] },
        6400: { 6457: [, 222], 6458: [, 230], 6459: [, 220] },
        6656: {
          6679: [, 230],
          6680: [, 220],
          6752: [, 9],
          6773: [, 230],
          6774: [, 230],
          6775: [, 230],
          6776: [, 230],
          6777: [, 230],
          6778: [, 230],
          6779: [, 230],
          6780: [, 230],
          6783: [, 220],
          6832: [, 230],
          6833: [, 230],
          6834: [, 230],
          6835: [, 230],
          6836: [, 230],
          6837: [, 220],
          6838: [, 220],
          6839: [, 220],
          6840: [, 220],
          6841: [, 220],
          6842: [, 220],
          6843: [, 230],
          6844: [, 230],
          6845: [, 220],
        },
        6912: {
          6917: [, , { 6965: 6918 }],
          6918: [[6917, 6965]],
          6919: [, , { 6965: 6920 }],
          6920: [[6919, 6965]],
          6921: [, , { 6965: 6922 }],
          6922: [[6921, 6965]],
          6923: [, , { 6965: 6924 }],
          6924: [[6923, 6965]],
          6925: [, , { 6965: 6926 }],
          6926: [[6925, 6965]],
          6929: [, , { 6965: 6930 }],
          6930: [[6929, 6965]],
          6964: [, 7],
          6970: [, , { 6965: 6971 }],
          6971: [[6970, 6965]],
          6972: [, , { 6965: 6973 }],
          6973: [[6972, 6965]],
          6974: [, , { 6965: 6976 }],
          6975: [, , { 6965: 6977 }],
          6976: [[6974, 6965]],
          6977: [[6975, 6965]],
          6978: [, , { 6965: 6979 }],
          6979: [[6978, 6965]],
          6980: [, 9],
          7019: [, 230],
          7020: [, 220],
          7021: [, 230],
          7022: [, 230],
          7023: [, 230],
          7024: [, 230],
          7025: [, 230],
          7026: [, 230],
          7027: [, 230],
          7082: [, 9],
          7083: [, 9],
          7142: [, 7],
          7154: [, 9],
          7155: [, 9],
        },
        7168: {
          7223: [, 7],
          7376: [, 230],
          7377: [, 230],
          7378: [, 230],
          7380: [, 1],
          7381: [, 220],
          7382: [, 220],
          7383: [, 220],
          7384: [, 220],
          7385: [, 220],
          7386: [, 230],
          7387: [, 230],
          7388: [, 220],
          7389: [, 220],
          7390: [, 220],
          7391: [, 220],
          7392: [, 230],
          7394: [, 1],
          7395: [, 1],
          7396: [, 1],
          7397: [, 1],
          7398: [, 1],
          7399: [, 1],
          7400: [, 1],
          7405: [, 220],
          7412: [, 230],
          7416: [, 230],
          7417: [, 230],
        },
        7424: {
          7468: [[65], 256],
          7469: [[198], 256],
          7470: [[66], 256],
          7472: [[68], 256],
          7473: [[69], 256],
          7474: [[398], 256],
          7475: [[71], 256],
          7476: [[72], 256],
          7477: [[73], 256],
          7478: [[74], 256],
          7479: [[75], 256],
          7480: [[76], 256],
          7481: [[77], 256],
          7482: [[78], 256],
          7484: [[79], 256],
          7485: [[546], 256],
          7486: [[80], 256],
          7487: [[82], 256],
          7488: [[84], 256],
          7489: [[85], 256],
          7490: [[87], 256],
          7491: [[97], 256],
          7492: [[592], 256],
          7493: [[593], 256],
          7494: [[7426], 256],
          7495: [[98], 256],
          7496: [[100], 256],
          7497: [[101], 256],
          7498: [[601], 256],
          7499: [[603], 256],
          7500: [[604], 256],
          7501: [[103], 256],
          7503: [[107], 256],
          7504: [[109], 256],
          7505: [[331], 256],
          7506: [[111], 256],
          7507: [[596], 256],
          7508: [[7446], 256],
          7509: [[7447], 256],
          7510: [[112], 256],
          7511: [[116], 256],
          7512: [[117], 256],
          7513: [[7453], 256],
          7514: [[623], 256],
          7515: [[118], 256],
          7516: [[7461], 256],
          7517: [[946], 256],
          7518: [[947], 256],
          7519: [[948], 256],
          7520: [[966], 256],
          7521: [[967], 256],
          7522: [[105], 256],
          7523: [[114], 256],
          7524: [[117], 256],
          7525: [[118], 256],
          7526: [[946], 256],
          7527: [[947], 256],
          7528: [[961], 256],
          7529: [[966], 256],
          7530: [[967], 256],
          7544: [[1085], 256],
          7579: [[594], 256],
          7580: [[99], 256],
          7581: [[597], 256],
          7582: [[240], 256],
          7583: [[604], 256],
          7584: [[102], 256],
          7585: [[607], 256],
          7586: [[609], 256],
          7587: [[613], 256],
          7588: [[616], 256],
          7589: [[617], 256],
          7590: [[618], 256],
          7591: [[7547], 256],
          7592: [[669], 256],
          7593: [[621], 256],
          7594: [[7557], 256],
          7595: [[671], 256],
          7596: [[625], 256],
          7597: [[624], 256],
          7598: [[626], 256],
          7599: [[627], 256],
          7600: [[628], 256],
          7601: [[629], 256],
          7602: [[632], 256],
          7603: [[642], 256],
          7604: [[643], 256],
          7605: [[427], 256],
          7606: [[649], 256],
          7607: [[650], 256],
          7608: [[7452], 256],
          7609: [[651], 256],
          7610: [[652], 256],
          7611: [[122], 256],
          7612: [[656], 256],
          7613: [[657], 256],
          7614: [[658], 256],
          7615: [[952], 256],
          7616: [, 230],
          7617: [, 230],
          7618: [, 220],
          7619: [, 230],
          7620: [, 230],
          7621: [, 230],
          7622: [, 230],
          7623: [, 230],
          7624: [, 230],
          7625: [, 230],
          7626: [, 220],
          7627: [, 230],
          7628: [, 230],
          7629: [, 234],
          7630: [, 214],
          7631: [, 220],
          7632: [, 202],
          7633: [, 230],
          7634: [, 230],
          7635: [, 230],
          7636: [, 230],
          7637: [, 230],
          7638: [, 230],
          7639: [, 230],
          7640: [, 230],
          7641: [, 230],
          7642: [, 230],
          7643: [, 230],
          7644: [, 230],
          7645: [, 230],
          7646: [, 230],
          7647: [, 230],
          7648: [, 230],
          7649: [, 230],
          7650: [, 230],
          7651: [, 230],
          7652: [, 230],
          7653: [, 230],
          7654: [, 230],
          7655: [, 230],
          7656: [, 230],
          7657: [, 230],
          7658: [, 230],
          7659: [, 230],
          7660: [, 230],
          7661: [, 230],
          7662: [, 230],
          7663: [, 230],
          7664: [, 230],
          7665: [, 230],
          7666: [, 230],
          7667: [, 230],
          7668: [, 230],
          7669: [, 230],
          7676: [, 233],
          7677: [, 220],
          7678: [, 230],
          7679: [, 220],
        },
        7680: {
          7680: [[65, 805]],
          7681: [[97, 805]],
          7682: [[66, 775]],
          7683: [[98, 775]],
          7684: [[66, 803]],
          7685: [[98, 803]],
          7686: [[66, 817]],
          7687: [[98, 817]],
          7688: [[199, 769]],
          7689: [[231, 769]],
          7690: [[68, 775]],
          7691: [[100, 775]],
          7692: [[68, 803]],
          7693: [[100, 803]],
          7694: [[68, 817]],
          7695: [[100, 817]],
          7696: [[68, 807]],
          7697: [[100, 807]],
          7698: [[68, 813]],
          7699: [[100, 813]],
          7700: [[274, 768]],
          7701: [[275, 768]],
          7702: [[274, 769]],
          7703: [[275, 769]],
          7704: [[69, 813]],
          7705: [[101, 813]],
          7706: [[69, 816]],
          7707: [[101, 816]],
          7708: [[552, 774]],
          7709: [[553, 774]],
          7710: [[70, 775]],
          7711: [[102, 775]],
          7712: [[71, 772]],
          7713: [[103, 772]],
          7714: [[72, 775]],
          7715: [[104, 775]],
          7716: [[72, 803]],
          7717: [[104, 803]],
          7718: [[72, 776]],
          7719: [[104, 776]],
          7720: [[72, 807]],
          7721: [[104, 807]],
          7722: [[72, 814]],
          7723: [[104, 814]],
          7724: [[73, 816]],
          7725: [[105, 816]],
          7726: [[207, 769]],
          7727: [[239, 769]],
          7728: [[75, 769]],
          7729: [[107, 769]],
          7730: [[75, 803]],
          7731: [[107, 803]],
          7732: [[75, 817]],
          7733: [[107, 817]],
          7734: [[76, 803], , { 772: 7736 }],
          7735: [[108, 803], , { 772: 7737 }],
          7736: [[7734, 772]],
          7737: [[7735, 772]],
          7738: [[76, 817]],
          7739: [[108, 817]],
          7740: [[76, 813]],
          7741: [[108, 813]],
          7742: [[77, 769]],
          7743: [[109, 769]],
          7744: [[77, 775]],
          7745: [[109, 775]],
          7746: [[77, 803]],
          7747: [[109, 803]],
          7748: [[78, 775]],
          7749: [[110, 775]],
          7750: [[78, 803]],
          7751: [[110, 803]],
          7752: [[78, 817]],
          7753: [[110, 817]],
          7754: [[78, 813]],
          7755: [[110, 813]],
          7756: [[213, 769]],
          7757: [[245, 769]],
          7758: [[213, 776]],
          7759: [[245, 776]],
          7760: [[332, 768]],
          7761: [[333, 768]],
          7762: [[332, 769]],
          7763: [[333, 769]],
          7764: [[80, 769]],
          7765: [[112, 769]],
          7766: [[80, 775]],
          7767: [[112, 775]],
          7768: [[82, 775]],
          7769: [[114, 775]],
          7770: [[82, 803], , { 772: 7772 }],
          7771: [[114, 803], , { 772: 7773 }],
          7772: [[7770, 772]],
          7773: [[7771, 772]],
          7774: [[82, 817]],
          7775: [[114, 817]],
          7776: [[83, 775]],
          7777: [[115, 775]],
          7778: [[83, 803], , { 775: 7784 }],
          7779: [[115, 803], , { 775: 7785 }],
          7780: [[346, 775]],
          7781: [[347, 775]],
          7782: [[352, 775]],
          7783: [[353, 775]],
          7784: [[7778, 775]],
          7785: [[7779, 775]],
          7786: [[84, 775]],
          7787: [[116, 775]],
          7788: [[84, 803]],
          7789: [[116, 803]],
          7790: [[84, 817]],
          7791: [[116, 817]],
          7792: [[84, 813]],
          7793: [[116, 813]],
          7794: [[85, 804]],
          7795: [[117, 804]],
          7796: [[85, 816]],
          7797: [[117, 816]],
          7798: [[85, 813]],
          7799: [[117, 813]],
          7800: [[360, 769]],
          7801: [[361, 769]],
          7802: [[362, 776]],
          7803: [[363, 776]],
          7804: [[86, 771]],
          7805: [[118, 771]],
          7806: [[86, 803]],
          7807: [[118, 803]],
          7808: [[87, 768]],
          7809: [[119, 768]],
          7810: [[87, 769]],
          7811: [[119, 769]],
          7812: [[87, 776]],
          7813: [[119, 776]],
          7814: [[87, 775]],
          7815: [[119, 775]],
          7816: [[87, 803]],
          7817: [[119, 803]],
          7818: [[88, 775]],
          7819: [[120, 775]],
          7820: [[88, 776]],
          7821: [[120, 776]],
          7822: [[89, 775]],
          7823: [[121, 775]],
          7824: [[90, 770]],
          7825: [[122, 770]],
          7826: [[90, 803]],
          7827: [[122, 803]],
          7828: [[90, 817]],
          7829: [[122, 817]],
          7830: [[104, 817]],
          7831: [[116, 776]],
          7832: [[119, 778]],
          7833: [[121, 778]],
          7834: [[97, 702], 256],
          7835: [[383, 775]],
          7840: [[65, 803], , { 770: 7852, 774: 7862 }],
          7841: [[97, 803], , { 770: 7853, 774: 7863 }],
          7842: [[65, 777]],
          7843: [[97, 777]],
          7844: [[194, 769]],
          7845: [[226, 769]],
          7846: [[194, 768]],
          7847: [[226, 768]],
          7848: [[194, 777]],
          7849: [[226, 777]],
          7850: [[194, 771]],
          7851: [[226, 771]],
          7852: [[7840, 770]],
          7853: [[7841, 770]],
          7854: [[258, 769]],
          7855: [[259, 769]],
          7856: [[258, 768]],
          7857: [[259, 768]],
          7858: [[258, 777]],
          7859: [[259, 777]],
          7860: [[258, 771]],
          7861: [[259, 771]],
          7862: [[7840, 774]],
          7863: [[7841, 774]],
          7864: [[69, 803], , { 770: 7878 }],
          7865: [[101, 803], , { 770: 7879 }],
          7866: [[69, 777]],
          7867: [[101, 777]],
          7868: [[69, 771]],
          7869: [[101, 771]],
          7870: [[202, 769]],
          7871: [[234, 769]],
          7872: [[202, 768]],
          7873: [[234, 768]],
          7874: [[202, 777]],
          7875: [[234, 777]],
          7876: [[202, 771]],
          7877: [[234, 771]],
          7878: [[7864, 770]],
          7879: [[7865, 770]],
          7880: [[73, 777]],
          7881: [[105, 777]],
          7882: [[73, 803]],
          7883: [[105, 803]],
          7884: [[79, 803], , { 770: 7896 }],
          7885: [[111, 803], , { 770: 7897 }],
          7886: [[79, 777]],
          7887: [[111, 777]],
          7888: [[212, 769]],
          7889: [[244, 769]],
          7890: [[212, 768]],
          7891: [[244, 768]],
          7892: [[212, 777]],
          7893: [[244, 777]],
          7894: [[212, 771]],
          7895: [[244, 771]],
          7896: [[7884, 770]],
          7897: [[7885, 770]],
          7898: [[416, 769]],
          7899: [[417, 769]],
          7900: [[416, 768]],
          7901: [[417, 768]],
          7902: [[416, 777]],
          7903: [[417, 777]],
          7904: [[416, 771]],
          7905: [[417, 771]],
          7906: [[416, 803]],
          7907: [[417, 803]],
          7908: [[85, 803]],
          7909: [[117, 803]],
          7910: [[85, 777]],
          7911: [[117, 777]],
          7912: [[431, 769]],
          7913: [[432, 769]],
          7914: [[431, 768]],
          7915: [[432, 768]],
          7916: [[431, 777]],
          7917: [[432, 777]],
          7918: [[431, 771]],
          7919: [[432, 771]],
          7920: [[431, 803]],
          7921: [[432, 803]],
          7922: [[89, 768]],
          7923: [[121, 768]],
          7924: [[89, 803]],
          7925: [[121, 803]],
          7926: [[89, 777]],
          7927: [[121, 777]],
          7928: [[89, 771]],
          7929: [[121, 771]],
        },
        7936: {
          7936: [[945, 787], , { 768: 7938, 769: 7940, 834: 7942, 837: 8064 }],
          7937: [[945, 788], , { 768: 7939, 769: 7941, 834: 7943, 837: 8065 }],
          7938: [[7936, 768], , { 837: 8066 }],
          7939: [[7937, 768], , { 837: 8067 }],
          7940: [[7936, 769], , { 837: 8068 }],
          7941: [[7937, 769], , { 837: 8069 }],
          7942: [[7936, 834], , { 837: 8070 }],
          7943: [[7937, 834], , { 837: 8071 }],
          7944: [[913, 787], , { 768: 7946, 769: 7948, 834: 7950, 837: 8072 }],
          7945: [[913, 788], , { 768: 7947, 769: 7949, 834: 7951, 837: 8073 }],
          7946: [[7944, 768], , { 837: 8074 }],
          7947: [[7945, 768], , { 837: 8075 }],
          7948: [[7944, 769], , { 837: 8076 }],
          7949: [[7945, 769], , { 837: 8077 }],
          7950: [[7944, 834], , { 837: 8078 }],
          7951: [[7945, 834], , { 837: 8079 }],
          7952: [[949, 787], , { 768: 7954, 769: 7956 }],
          7953: [[949, 788], , { 768: 7955, 769: 7957 }],
          7954: [[7952, 768]],
          7955: [[7953, 768]],
          7956: [[7952, 769]],
          7957: [[7953, 769]],
          7960: [[917, 787], , { 768: 7962, 769: 7964 }],
          7961: [[917, 788], , { 768: 7963, 769: 7965 }],
          7962: [[7960, 768]],
          7963: [[7961, 768]],
          7964: [[7960, 769]],
          7965: [[7961, 769]],
          7968: [[951, 787], , { 768: 7970, 769: 7972, 834: 7974, 837: 8080 }],
          7969: [[951, 788], , { 768: 7971, 769: 7973, 834: 7975, 837: 8081 }],
          7970: [[7968, 768], , { 837: 8082 }],
          7971: [[7969, 768], , { 837: 8083 }],
          7972: [[7968, 769], , { 837: 8084 }],
          7973: [[7969, 769], , { 837: 8085 }],
          7974: [[7968, 834], , { 837: 8086 }],
          7975: [[7969, 834], , { 837: 8087 }],
          7976: [[919, 787], , { 768: 7978, 769: 7980, 834: 7982, 837: 8088 }],
          7977: [[919, 788], , { 768: 7979, 769: 7981, 834: 7983, 837: 8089 }],
          7978: [[7976, 768], , { 837: 8090 }],
          7979: [[7977, 768], , { 837: 8091 }],
          7980: [[7976, 769], , { 837: 8092 }],
          7981: [[7977, 769], , { 837: 8093 }],
          7982: [[7976, 834], , { 837: 8094 }],
          7983: [[7977, 834], , { 837: 8095 }],
          7984: [[953, 787], , { 768: 7986, 769: 7988, 834: 7990 }],
          7985: [[953, 788], , { 768: 7987, 769: 7989, 834: 7991 }],
          7986: [[7984, 768]],
          7987: [[7985, 768]],
          7988: [[7984, 769]],
          7989: [[7985, 769]],
          7990: [[7984, 834]],
          7991: [[7985, 834]],
          7992: [[921, 787], , { 768: 7994, 769: 7996, 834: 7998 }],
          7993: [[921, 788], , { 768: 7995, 769: 7997, 834: 7999 }],
          7994: [[7992, 768]],
          7995: [[7993, 768]],
          7996: [[7992, 769]],
          7997: [[7993, 769]],
          7998: [[7992, 834]],
          7999: [[7993, 834]],
          8e3: [[959, 787], , { 768: 8002, 769: 8004 }],
          8001: [[959, 788], , { 768: 8003, 769: 8005 }],
          8002: [[8e3, 768]],
          8003: [[8001, 768]],
          8004: [[8e3, 769]],
          8005: [[8001, 769]],
          8008: [[927, 787], , { 768: 8010, 769: 8012 }],
          8009: [[927, 788], , { 768: 8011, 769: 8013 }],
          8010: [[8008, 768]],
          8011: [[8009, 768]],
          8012: [[8008, 769]],
          8013: [[8009, 769]],
          8016: [[965, 787], , { 768: 8018, 769: 8020, 834: 8022 }],
          8017: [[965, 788], , { 768: 8019, 769: 8021, 834: 8023 }],
          8018: [[8016, 768]],
          8019: [[8017, 768]],
          8020: [[8016, 769]],
          8021: [[8017, 769]],
          8022: [[8016, 834]],
          8023: [[8017, 834]],
          8025: [[933, 788], , { 768: 8027, 769: 8029, 834: 8031 }],
          8027: [[8025, 768]],
          8029: [[8025, 769]],
          8031: [[8025, 834]],
          8032: [[969, 787], , { 768: 8034, 769: 8036, 834: 8038, 837: 8096 }],
          8033: [[969, 788], , { 768: 8035, 769: 8037, 834: 8039, 837: 8097 }],
          8034: [[8032, 768], , { 837: 8098 }],
          8035: [[8033, 768], , { 837: 8099 }],
          8036: [[8032, 769], , { 837: 8100 }],
          8037: [[8033, 769], , { 837: 8101 }],
          8038: [[8032, 834], , { 837: 8102 }],
          8039: [[8033, 834], , { 837: 8103 }],
          8040: [[937, 787], , { 768: 8042, 769: 8044, 834: 8046, 837: 8104 }],
          8041: [[937, 788], , { 768: 8043, 769: 8045, 834: 8047, 837: 8105 }],
          8042: [[8040, 768], , { 837: 8106 }],
          8043: [[8041, 768], , { 837: 8107 }],
          8044: [[8040, 769], , { 837: 8108 }],
          8045: [[8041, 769], , { 837: 8109 }],
          8046: [[8040, 834], , { 837: 8110 }],
          8047: [[8041, 834], , { 837: 8111 }],
          8048: [[945, 768], , { 837: 8114 }],
          8049: [[940]],
          8050: [[949, 768]],
          8051: [[941]],
          8052: [[951, 768], , { 837: 8130 }],
          8053: [[942]],
          8054: [[953, 768]],
          8055: [[943]],
          8056: [[959, 768]],
          8057: [[972]],
          8058: [[965, 768]],
          8059: [[973]],
          8060: [[969, 768], , { 837: 8178 }],
          8061: [[974]],
          8064: [[7936, 837]],
          8065: [[7937, 837]],
          8066: [[7938, 837]],
          8067: [[7939, 837]],
          8068: [[7940, 837]],
          8069: [[7941, 837]],
          8070: [[7942, 837]],
          8071: [[7943, 837]],
          8072: [[7944, 837]],
          8073: [[7945, 837]],
          8074: [[7946, 837]],
          8075: [[7947, 837]],
          8076: [[7948, 837]],
          8077: [[7949, 837]],
          8078: [[7950, 837]],
          8079: [[7951, 837]],
          8080: [[7968, 837]],
          8081: [[7969, 837]],
          8082: [[7970, 837]],
          8083: [[7971, 837]],
          8084: [[7972, 837]],
          8085: [[7973, 837]],
          8086: [[7974, 837]],
          8087: [[7975, 837]],
          8088: [[7976, 837]],
          8089: [[7977, 837]],
          8090: [[7978, 837]],
          8091: [[7979, 837]],
          8092: [[7980, 837]],
          8093: [[7981, 837]],
          8094: [[7982, 837]],
          8095: [[7983, 837]],
          8096: [[8032, 837]],
          8097: [[8033, 837]],
          8098: [[8034, 837]],
          8099: [[8035, 837]],
          8100: [[8036, 837]],
          8101: [[8037, 837]],
          8102: [[8038, 837]],
          8103: [[8039, 837]],
          8104: [[8040, 837]],
          8105: [[8041, 837]],
          8106: [[8042, 837]],
          8107: [[8043, 837]],
          8108: [[8044, 837]],
          8109: [[8045, 837]],
          8110: [[8046, 837]],
          8111: [[8047, 837]],
          8112: [[945, 774]],
          8113: [[945, 772]],
          8114: [[8048, 837]],
          8115: [[945, 837]],
          8116: [[940, 837]],
          8118: [[945, 834], , { 837: 8119 }],
          8119: [[8118, 837]],
          8120: [[913, 774]],
          8121: [[913, 772]],
          8122: [[913, 768]],
          8123: [[902]],
          8124: [[913, 837]],
          8125: [[32, 787], 256],
          8126: [[953]],
          8127: [[32, 787], 256, { 768: 8141, 769: 8142, 834: 8143 }],
          8128: [[32, 834], 256],
          8129: [[168, 834]],
          8130: [[8052, 837]],
          8131: [[951, 837]],
          8132: [[942, 837]],
          8134: [[951, 834], , { 837: 8135 }],
          8135: [[8134, 837]],
          8136: [[917, 768]],
          8137: [[904]],
          8138: [[919, 768]],
          8139: [[905]],
          8140: [[919, 837]],
          8141: [[8127, 768]],
          8142: [[8127, 769]],
          8143: [[8127, 834]],
          8144: [[953, 774]],
          8145: [[953, 772]],
          8146: [[970, 768]],
          8147: [[912]],
          8150: [[953, 834]],
          8151: [[970, 834]],
          8152: [[921, 774]],
          8153: [[921, 772]],
          8154: [[921, 768]],
          8155: [[906]],
          8157: [[8190, 768]],
          8158: [[8190, 769]],
          8159: [[8190, 834]],
          8160: [[965, 774]],
          8161: [[965, 772]],
          8162: [[971, 768]],
          8163: [[944]],
          8164: [[961, 787]],
          8165: [[961, 788]],
          8166: [[965, 834]],
          8167: [[971, 834]],
          8168: [[933, 774]],
          8169: [[933, 772]],
          8170: [[933, 768]],
          8171: [[910]],
          8172: [[929, 788]],
          8173: [[168, 768]],
          8174: [[901]],
          8175: [[96]],
          8178: [[8060, 837]],
          8179: [[969, 837]],
          8180: [[974, 837]],
          8182: [[969, 834], , { 837: 8183 }],
          8183: [[8182, 837]],
          8184: [[927, 768]],
          8185: [[908]],
          8186: [[937, 768]],
          8187: [[911]],
          8188: [[937, 837]],
          8189: [[180]],
          8190: [[32, 788], 256, { 768: 8157, 769: 8158, 834: 8159 }],
        },
        8192: {
          8192: [[8194]],
          8193: [[8195]],
          8194: [[32], 256],
          8195: [[32], 256],
          8196: [[32], 256],
          8197: [[32], 256],
          8198: [[32], 256],
          8199: [[32], 256],
          8200: [[32], 256],
          8201: [[32], 256],
          8202: [[32], 256],
          8209: [[8208], 256],
          8215: [[32, 819], 256],
          8228: [[46], 256],
          8229: [[46, 46], 256],
          8230: [[46, 46, 46], 256],
          8239: [[32], 256],
          8243: [[8242, 8242], 256],
          8244: [[8242, 8242, 8242], 256],
          8246: [[8245, 8245], 256],
          8247: [[8245, 8245, 8245], 256],
          8252: [[33, 33], 256],
          8254: [[32, 773], 256],
          8263: [[63, 63], 256],
          8264: [[63, 33], 256],
          8265: [[33, 63], 256],
          8279: [[8242, 8242, 8242, 8242], 256],
          8287: [[32], 256],
          8304: [[48], 256],
          8305: [[105], 256],
          8308: [[52], 256],
          8309: [[53], 256],
          8310: [[54], 256],
          8311: [[55], 256],
          8312: [[56], 256],
          8313: [[57], 256],
          8314: [[43], 256],
          8315: [[8722], 256],
          8316: [[61], 256],
          8317: [[40], 256],
          8318: [[41], 256],
          8319: [[110], 256],
          8320: [[48], 256],
          8321: [[49], 256],
          8322: [[50], 256],
          8323: [[51], 256],
          8324: [[52], 256],
          8325: [[53], 256],
          8326: [[54], 256],
          8327: [[55], 256],
          8328: [[56], 256],
          8329: [[57], 256],
          8330: [[43], 256],
          8331: [[8722], 256],
          8332: [[61], 256],
          8333: [[40], 256],
          8334: [[41], 256],
          8336: [[97], 256],
          8337: [[101], 256],
          8338: [[111], 256],
          8339: [[120], 256],
          8340: [[601], 256],
          8341: [[104], 256],
          8342: [[107], 256],
          8343: [[108], 256],
          8344: [[109], 256],
          8345: [[110], 256],
          8346: [[112], 256],
          8347: [[115], 256],
          8348: [[116], 256],
          8360: [[82, 115], 256],
          8400: [, 230],
          8401: [, 230],
          8402: [, 1],
          8403: [, 1],
          8404: [, 230],
          8405: [, 230],
          8406: [, 230],
          8407: [, 230],
          8408: [, 1],
          8409: [, 1],
          8410: [, 1],
          8411: [, 230],
          8412: [, 230],
          8417: [, 230],
          8421: [, 1],
          8422: [, 1],
          8423: [, 230],
          8424: [, 220],
          8425: [, 230],
          8426: [, 1],
          8427: [, 1],
          8428: [, 220],
          8429: [, 220],
          8430: [, 220],
          8431: [, 220],
          8432: [, 230],
        },
        8448: {
          8448: [[97, 47, 99], 256],
          8449: [[97, 47, 115], 256],
          8450: [[67], 256],
          8451: [[176, 67], 256],
          8453: [[99, 47, 111], 256],
          8454: [[99, 47, 117], 256],
          8455: [[400], 256],
          8457: [[176, 70], 256],
          8458: [[103], 256],
          8459: [[72], 256],
          8460: [[72], 256],
          8461: [[72], 256],
          8462: [[104], 256],
          8463: [[295], 256],
          8464: [[73], 256],
          8465: [[73], 256],
          8466: [[76], 256],
          8467: [[108], 256],
          8469: [[78], 256],
          8470: [[78, 111], 256],
          8473: [[80], 256],
          8474: [[81], 256],
          8475: [[82], 256],
          8476: [[82], 256],
          8477: [[82], 256],
          8480: [[83, 77], 256],
          8481: [[84, 69, 76], 256],
          8482: [[84, 77], 256],
          8484: [[90], 256],
          8486: [[937]],
          8488: [[90], 256],
          8490: [[75]],
          8491: [[197]],
          8492: [[66], 256],
          8493: [[67], 256],
          8495: [[101], 256],
          8496: [[69], 256],
          8497: [[70], 256],
          8499: [[77], 256],
          8500: [[111], 256],
          8501: [[1488], 256],
          8502: [[1489], 256],
          8503: [[1490], 256],
          8504: [[1491], 256],
          8505: [[105], 256],
          8507: [[70, 65, 88], 256],
          8508: [[960], 256],
          8509: [[947], 256],
          8510: [[915], 256],
          8511: [[928], 256],
          8512: [[8721], 256],
          8517: [[68], 256],
          8518: [[100], 256],
          8519: [[101], 256],
          8520: [[105], 256],
          8521: [[106], 256],
          8528: [[49, 8260, 55], 256],
          8529: [[49, 8260, 57], 256],
          8530: [[49, 8260, 49, 48], 256],
          8531: [[49, 8260, 51], 256],
          8532: [[50, 8260, 51], 256],
          8533: [[49, 8260, 53], 256],
          8534: [[50, 8260, 53], 256],
          8535: [[51, 8260, 53], 256],
          8536: [[52, 8260, 53], 256],
          8537: [[49, 8260, 54], 256],
          8538: [[53, 8260, 54], 256],
          8539: [[49, 8260, 56], 256],
          8540: [[51, 8260, 56], 256],
          8541: [[53, 8260, 56], 256],
          8542: [[55, 8260, 56], 256],
          8543: [[49, 8260], 256],
          8544: [[73], 256],
          8545: [[73, 73], 256],
          8546: [[73, 73, 73], 256],
          8547: [[73, 86], 256],
          8548: [[86], 256],
          8549: [[86, 73], 256],
          8550: [[86, 73, 73], 256],
          8551: [[86, 73, 73, 73], 256],
          8552: [[73, 88], 256],
          8553: [[88], 256],
          8554: [[88, 73], 256],
          8555: [[88, 73, 73], 256],
          8556: [[76], 256],
          8557: [[67], 256],
          8558: [[68], 256],
          8559: [[77], 256],
          8560: [[105], 256],
          8561: [[105, 105], 256],
          8562: [[105, 105, 105], 256],
          8563: [[105, 118], 256],
          8564: [[118], 256],
          8565: [[118, 105], 256],
          8566: [[118, 105, 105], 256],
          8567: [[118, 105, 105, 105], 256],
          8568: [[105, 120], 256],
          8569: [[120], 256],
          8570: [[120, 105], 256],
          8571: [[120, 105, 105], 256],
          8572: [[108], 256],
          8573: [[99], 256],
          8574: [[100], 256],
          8575: [[109], 256],
          8585: [[48, 8260, 51], 256],
          8592: [, , { 824: 8602 }],
          8594: [, , { 824: 8603 }],
          8596: [, , { 824: 8622 }],
          8602: [[8592, 824]],
          8603: [[8594, 824]],
          8622: [[8596, 824]],
          8653: [[8656, 824]],
          8654: [[8660, 824]],
          8655: [[8658, 824]],
          8656: [, , { 824: 8653 }],
          8658: [, , { 824: 8655 }],
          8660: [, , { 824: 8654 }],
        },
        8704: {
          8707: [, , { 824: 8708 }],
          8708: [[8707, 824]],
          8712: [, , { 824: 8713 }],
          8713: [[8712, 824]],
          8715: [, , { 824: 8716 }],
          8716: [[8715, 824]],
          8739: [, , { 824: 8740 }],
          8740: [[8739, 824]],
          8741: [, , { 824: 8742 }],
          8742: [[8741, 824]],
          8748: [[8747, 8747], 256],
          8749: [[8747, 8747, 8747], 256],
          8751: [[8750, 8750], 256],
          8752: [[8750, 8750, 8750], 256],
          8764: [, , { 824: 8769 }],
          8769: [[8764, 824]],
          8771: [, , { 824: 8772 }],
          8772: [[8771, 824]],
          8773: [, , { 824: 8775 }],
          8775: [[8773, 824]],
          8776: [, , { 824: 8777 }],
          8777: [[8776, 824]],
          8781: [, , { 824: 8813 }],
          8800: [[61, 824]],
          8801: [, , { 824: 8802 }],
          8802: [[8801, 824]],
          8804: [, , { 824: 8816 }],
          8805: [, , { 824: 8817 }],
          8813: [[8781, 824]],
          8814: [[60, 824]],
          8815: [[62, 824]],
          8816: [[8804, 824]],
          8817: [[8805, 824]],
          8818: [, , { 824: 8820 }],
          8819: [, , { 824: 8821 }],
          8820: [[8818, 824]],
          8821: [[8819, 824]],
          8822: [, , { 824: 8824 }],
          8823: [, , { 824: 8825 }],
          8824: [[8822, 824]],
          8825: [[8823, 824]],
          8826: [, , { 824: 8832 }],
          8827: [, , { 824: 8833 }],
          8828: [, , { 824: 8928 }],
          8829: [, , { 824: 8929 }],
          8832: [[8826, 824]],
          8833: [[8827, 824]],
          8834: [, , { 824: 8836 }],
          8835: [, , { 824: 8837 }],
          8836: [[8834, 824]],
          8837: [[8835, 824]],
          8838: [, , { 824: 8840 }],
          8839: [, , { 824: 8841 }],
          8840: [[8838, 824]],
          8841: [[8839, 824]],
          8849: [, , { 824: 8930 }],
          8850: [, , { 824: 8931 }],
          8866: [, , { 824: 8876 }],
          8872: [, , { 824: 8877 }],
          8873: [, , { 824: 8878 }],
          8875: [, , { 824: 8879 }],
          8876: [[8866, 824]],
          8877: [[8872, 824]],
          8878: [[8873, 824]],
          8879: [[8875, 824]],
          8882: [, , { 824: 8938 }],
          8883: [, , { 824: 8939 }],
          8884: [, , { 824: 8940 }],
          8885: [, , { 824: 8941 }],
          8928: [[8828, 824]],
          8929: [[8829, 824]],
          8930: [[8849, 824]],
          8931: [[8850, 824]],
          8938: [[8882, 824]],
          8939: [[8883, 824]],
          8940: [[8884, 824]],
          8941: [[8885, 824]],
        },
        8960: { 9001: [[12296]], 9002: [[12297]] },
        9216: {
          9312: [[49], 256],
          9313: [[50], 256],
          9314: [[51], 256],
          9315: [[52], 256],
          9316: [[53], 256],
          9317: [[54], 256],
          9318: [[55], 256],
          9319: [[56], 256],
          9320: [[57], 256],
          9321: [[49, 48], 256],
          9322: [[49, 49], 256],
          9323: [[49, 50], 256],
          9324: [[49, 51], 256],
          9325: [[49, 52], 256],
          9326: [[49, 53], 256],
          9327: [[49, 54], 256],
          9328: [[49, 55], 256],
          9329: [[49, 56], 256],
          9330: [[49, 57], 256],
          9331: [[50, 48], 256],
          9332: [[40, 49, 41], 256],
          9333: [[40, 50, 41], 256],
          9334: [[40, 51, 41], 256],
          9335: [[40, 52, 41], 256],
          9336: [[40, 53, 41], 256],
          9337: [[40, 54, 41], 256],
          9338: [[40, 55, 41], 256],
          9339: [[40, 56, 41], 256],
          9340: [[40, 57, 41], 256],
          9341: [[40, 49, 48, 41], 256],
          9342: [[40, 49, 49, 41], 256],
          9343: [[40, 49, 50, 41], 256],
          9344: [[40, 49, 51, 41], 256],
          9345: [[40, 49, 52, 41], 256],
          9346: [[40, 49, 53, 41], 256],
          9347: [[40, 49, 54, 41], 256],
          9348: [[40, 49, 55, 41], 256],
          9349: [[40, 49, 56, 41], 256],
          9350: [[40, 49, 57, 41], 256],
          9351: [[40, 50, 48, 41], 256],
          9352: [[49, 46], 256],
          9353: [[50, 46], 256],
          9354: [[51, 46], 256],
          9355: [[52, 46], 256],
          9356: [[53, 46], 256],
          9357: [[54, 46], 256],
          9358: [[55, 46], 256],
          9359: [[56, 46], 256],
          9360: [[57, 46], 256],
          9361: [[49, 48, 46], 256],
          9362: [[49, 49, 46], 256],
          9363: [[49, 50, 46], 256],
          9364: [[49, 51, 46], 256],
          9365: [[49, 52, 46], 256],
          9366: [[49, 53, 46], 256],
          9367: [[49, 54, 46], 256],
          9368: [[49, 55, 46], 256],
          9369: [[49, 56, 46], 256],
          9370: [[49, 57, 46], 256],
          9371: [[50, 48, 46], 256],
          9372: [[40, 97, 41], 256],
          9373: [[40, 98, 41], 256],
          9374: [[40, 99, 41], 256],
          9375: [[40, 100, 41], 256],
          9376: [[40, 101, 41], 256],
          9377: [[40, 102, 41], 256],
          9378: [[40, 103, 41], 256],
          9379: [[40, 104, 41], 256],
          9380: [[40, 105, 41], 256],
          9381: [[40, 106, 41], 256],
          9382: [[40, 107, 41], 256],
          9383: [[40, 108, 41], 256],
          9384: [[40, 109, 41], 256],
          9385: [[40, 110, 41], 256],
          9386: [[40, 111, 41], 256],
          9387: [[40, 112, 41], 256],
          9388: [[40, 113, 41], 256],
          9389: [[40, 114, 41], 256],
          9390: [[40, 115, 41], 256],
          9391: [[40, 116, 41], 256],
          9392: [[40, 117, 41], 256],
          9393: [[40, 118, 41], 256],
          9394: [[40, 119, 41], 256],
          9395: [[40, 120, 41], 256],
          9396: [[40, 121, 41], 256],
          9397: [[40, 122, 41], 256],
          9398: [[65], 256],
          9399: [[66], 256],
          9400: [[67], 256],
          9401: [[68], 256],
          9402: [[69], 256],
          9403: [[70], 256],
          9404: [[71], 256],
          9405: [[72], 256],
          9406: [[73], 256],
          9407: [[74], 256],
          9408: [[75], 256],
          9409: [[76], 256],
          9410: [[77], 256],
          9411: [[78], 256],
          9412: [[79], 256],
          9413: [[80], 256],
          9414: [[81], 256],
          9415: [[82], 256],
          9416: [[83], 256],
          9417: [[84], 256],
          9418: [[85], 256],
          9419: [[86], 256],
          9420: [[87], 256],
          9421: [[88], 256],
          9422: [[89], 256],
          9423: [[90], 256],
          9424: [[97], 256],
          9425: [[98], 256],
          9426: [[99], 256],
          9427: [[100], 256],
          9428: [[101], 256],
          9429: [[102], 256],
          9430: [[103], 256],
          9431: [[104], 256],
          9432: [[105], 256],
          9433: [[106], 256],
          9434: [[107], 256],
          9435: [[108], 256],
          9436: [[109], 256],
          9437: [[110], 256],
          9438: [[111], 256],
          9439: [[112], 256],
          9440: [[113], 256],
          9441: [[114], 256],
          9442: [[115], 256],
          9443: [[116], 256],
          9444: [[117], 256],
          9445: [[118], 256],
          9446: [[119], 256],
          9447: [[120], 256],
          9448: [[121], 256],
          9449: [[122], 256],
          9450: [[48], 256],
        },
        10752: {
          10764: [[8747, 8747, 8747, 8747], 256],
          10868: [[58, 58, 61], 256],
          10869: [[61, 61], 256],
          10870: [[61, 61, 61], 256],
          10972: [[10973, 824], 512],
        },
        11264: {
          11388: [[106], 256],
          11389: [[86], 256],
          11503: [, 230],
          11504: [, 230],
          11505: [, 230],
        },
        11520: {
          11631: [[11617], 256],
          11647: [, 9],
          11744: [, 230],
          11745: [, 230],
          11746: [, 230],
          11747: [, 230],
          11748: [, 230],
          11749: [, 230],
          11750: [, 230],
          11751: [, 230],
          11752: [, 230],
          11753: [, 230],
          11754: [, 230],
          11755: [, 230],
          11756: [, 230],
          11757: [, 230],
          11758: [, 230],
          11759: [, 230],
          11760: [, 230],
          11761: [, 230],
          11762: [, 230],
          11763: [, 230],
          11764: [, 230],
          11765: [, 230],
          11766: [, 230],
          11767: [, 230],
          11768: [, 230],
          11769: [, 230],
          11770: [, 230],
          11771: [, 230],
          11772: [, 230],
          11773: [, 230],
          11774: [, 230],
          11775: [, 230],
        },
        11776: { 11935: [[27597], 256], 12019: [[40863], 256] },
        12032: {
          12032: [[19968], 256],
          12033: [[20008], 256],
          12034: [[20022], 256],
          12035: [[20031], 256],
          12036: [[20057], 256],
          12037: [[20101], 256],
          12038: [[20108], 256],
          12039: [[20128], 256],
          12040: [[20154], 256],
          12041: [[20799], 256],
          12042: [[20837], 256],
          12043: [[20843], 256],
          12044: [[20866], 256],
          12045: [[20886], 256],
          12046: [[20907], 256],
          12047: [[20960], 256],
          12048: [[20981], 256],
          12049: [[20992], 256],
          12050: [[21147], 256],
          12051: [[21241], 256],
          12052: [[21269], 256],
          12053: [[21274], 256],
          12054: [[21304], 256],
          12055: [[21313], 256],
          12056: [[21340], 256],
          12057: [[21353], 256],
          12058: [[21378], 256],
          12059: [[21430], 256],
          12060: [[21448], 256],
          12061: [[21475], 256],
          12062: [[22231], 256],
          12063: [[22303], 256],
          12064: [[22763], 256],
          12065: [[22786], 256],
          12066: [[22794], 256],
          12067: [[22805], 256],
          12068: [[22823], 256],
          12069: [[22899], 256],
          12070: [[23376], 256],
          12071: [[23424], 256],
          12072: [[23544], 256],
          12073: [[23567], 256],
          12074: [[23586], 256],
          12075: [[23608], 256],
          12076: [[23662], 256],
          12077: [[23665], 256],
          12078: [[24027], 256],
          12079: [[24037], 256],
          12080: [[24049], 256],
          12081: [[24062], 256],
          12082: [[24178], 256],
          12083: [[24186], 256],
          12084: [[24191], 256],
          12085: [[24308], 256],
          12086: [[24318], 256],
          12087: [[24331], 256],
          12088: [[24339], 256],
          12089: [[24400], 256],
          12090: [[24417], 256],
          12091: [[24435], 256],
          12092: [[24515], 256],
          12093: [[25096], 256],
          12094: [[25142], 256],
          12095: [[25163], 256],
          12096: [[25903], 256],
          12097: [[25908], 256],
          12098: [[25991], 256],
          12099: [[26007], 256],
          12100: [[26020], 256],
          12101: [[26041], 256],
          12102: [[26080], 256],
          12103: [[26085], 256],
          12104: [[26352], 256],
          12105: [[26376], 256],
          12106: [[26408], 256],
          12107: [[27424], 256],
          12108: [[27490], 256],
          12109: [[27513], 256],
          12110: [[27571], 256],
          12111: [[27595], 256],
          12112: [[27604], 256],
          12113: [[27611], 256],
          12114: [[27663], 256],
          12115: [[27668], 256],
          12116: [[27700], 256],
          12117: [[28779], 256],
          12118: [[29226], 256],
          12119: [[29238], 256],
          12120: [[29243], 256],
          12121: [[29247], 256],
          12122: [[29255], 256],
          12123: [[29273], 256],
          12124: [[29275], 256],
          12125: [[29356], 256],
          12126: [[29572], 256],
          12127: [[29577], 256],
          12128: [[29916], 256],
          12129: [[29926], 256],
          12130: [[29976], 256],
          12131: [[29983], 256],
          12132: [[29992], 256],
          12133: [[3e4], 256],
          12134: [[30091], 256],
          12135: [[30098], 256],
          12136: [[30326], 256],
          12137: [[30333], 256],
          12138: [[30382], 256],
          12139: [[30399], 256],
          12140: [[30446], 256],
          12141: [[30683], 256],
          12142: [[30690], 256],
          12143: [[30707], 256],
          12144: [[31034], 256],
          12145: [[31160], 256],
          12146: [[31166], 256],
          12147: [[31348], 256],
          12148: [[31435], 256],
          12149: [[31481], 256],
          12150: [[31859], 256],
          12151: [[31992], 256],
          12152: [[32566], 256],
          12153: [[32593], 256],
          12154: [[32650], 256],
          12155: [[32701], 256],
          12156: [[32769], 256],
          12157: [[32780], 256],
          12158: [[32786], 256],
          12159: [[32819], 256],
          12160: [[32895], 256],
          12161: [[32905], 256],
          12162: [[33251], 256],
          12163: [[33258], 256],
          12164: [[33267], 256],
          12165: [[33276], 256],
          12166: [[33292], 256],
          12167: [[33307], 256],
          12168: [[33311], 256],
          12169: [[33390], 256],
          12170: [[33394], 256],
          12171: [[33400], 256],
          12172: [[34381], 256],
          12173: [[34411], 256],
          12174: [[34880], 256],
          12175: [[34892], 256],
          12176: [[34915], 256],
          12177: [[35198], 256],
          12178: [[35211], 256],
          12179: [[35282], 256],
          12180: [[35328], 256],
          12181: [[35895], 256],
          12182: [[35910], 256],
          12183: [[35925], 256],
          12184: [[35960], 256],
          12185: [[35997], 256],
          12186: [[36196], 256],
          12187: [[36208], 256],
          12188: [[36275], 256],
          12189: [[36523], 256],
          12190: [[36554], 256],
          12191: [[36763], 256],
          12192: [[36784], 256],
          12193: [[36789], 256],
          12194: [[37009], 256],
          12195: [[37193], 256],
          12196: [[37318], 256],
          12197: [[37324], 256],
          12198: [[37329], 256],
          12199: [[38263], 256],
          12200: [[38272], 256],
          12201: [[38428], 256],
          12202: [[38582], 256],
          12203: [[38585], 256],
          12204: [[38632], 256],
          12205: [[38737], 256],
          12206: [[38750], 256],
          12207: [[38754], 256],
          12208: [[38761], 256],
          12209: [[38859], 256],
          12210: [[38893], 256],
          12211: [[38899], 256],
          12212: [[38913], 256],
          12213: [[39080], 256],
          12214: [[39131], 256],
          12215: [[39135], 256],
          12216: [[39318], 256],
          12217: [[39321], 256],
          12218: [[39340], 256],
          12219: [[39592], 256],
          12220: [[39640], 256],
          12221: [[39647], 256],
          12222: [[39717], 256],
          12223: [[39727], 256],
          12224: [[39730], 256],
          12225: [[39740], 256],
          12226: [[39770], 256],
          12227: [[40165], 256],
          12228: [[40565], 256],
          12229: [[40575], 256],
          12230: [[40613], 256],
          12231: [[40635], 256],
          12232: [[40643], 256],
          12233: [[40653], 256],
          12234: [[40657], 256],
          12235: [[40697], 256],
          12236: [[40701], 256],
          12237: [[40718], 256],
          12238: [[40723], 256],
          12239: [[40736], 256],
          12240: [[40763], 256],
          12241: [[40778], 256],
          12242: [[40786], 256],
          12243: [[40845], 256],
          12244: [[40860], 256],
          12245: [[40864], 256],
        },
        12288: {
          12288: [[32], 256],
          12330: [, 218],
          12331: [, 228],
          12332: [, 232],
          12333: [, 222],
          12334: [, 224],
          12335: [, 224],
          12342: [[12306], 256],
          12344: [[21313], 256],
          12345: [[21316], 256],
          12346: [[21317], 256],
          12358: [, , { 12441: 12436 }],
          12363: [, , { 12441: 12364 }],
          12364: [[12363, 12441]],
          12365: [, , { 12441: 12366 }],
          12366: [[12365, 12441]],
          12367: [, , { 12441: 12368 }],
          12368: [[12367, 12441]],
          12369: [, , { 12441: 12370 }],
          12370: [[12369, 12441]],
          12371: [, , { 12441: 12372 }],
          12372: [[12371, 12441]],
          12373: [, , { 12441: 12374 }],
          12374: [[12373, 12441]],
          12375: [, , { 12441: 12376 }],
          12376: [[12375, 12441]],
          12377: [, , { 12441: 12378 }],
          12378: [[12377, 12441]],
          12379: [, , { 12441: 12380 }],
          12380: [[12379, 12441]],
          12381: [, , { 12441: 12382 }],
          12382: [[12381, 12441]],
          12383: [, , { 12441: 12384 }],
          12384: [[12383, 12441]],
          12385: [, , { 12441: 12386 }],
          12386: [[12385, 12441]],
          12388: [, , { 12441: 12389 }],
          12389: [[12388, 12441]],
          12390: [, , { 12441: 12391 }],
          12391: [[12390, 12441]],
          12392: [, , { 12441: 12393 }],
          12393: [[12392, 12441]],
          12399: [, , { 12441: 12400, 12442: 12401 }],
          12400: [[12399, 12441]],
          12401: [[12399, 12442]],
          12402: [, , { 12441: 12403, 12442: 12404 }],
          12403: [[12402, 12441]],
          12404: [[12402, 12442]],
          12405: [, , { 12441: 12406, 12442: 12407 }],
          12406: [[12405, 12441]],
          12407: [[12405, 12442]],
          12408: [, , { 12441: 12409, 12442: 12410 }],
          12409: [[12408, 12441]],
          12410: [[12408, 12442]],
          12411: [, , { 12441: 12412, 12442: 12413 }],
          12412: [[12411, 12441]],
          12413: [[12411, 12442]],
          12436: [[12358, 12441]],
          12441: [, 8],
          12442: [, 8],
          12443: [[32, 12441], 256],
          12444: [[32, 12442], 256],
          12445: [, , { 12441: 12446 }],
          12446: [[12445, 12441]],
          12447: [[12424, 12426], 256],
          12454: [, , { 12441: 12532 }],
          12459: [, , { 12441: 12460 }],
          12460: [[12459, 12441]],
          12461: [, , { 12441: 12462 }],
          12462: [[12461, 12441]],
          12463: [, , { 12441: 12464 }],
          12464: [[12463, 12441]],
          12465: [, , { 12441: 12466 }],
          12466: [[12465, 12441]],
          12467: [, , { 12441: 12468 }],
          12468: [[12467, 12441]],
          12469: [, , { 12441: 12470 }],
          12470: [[12469, 12441]],
          12471: [, , { 12441: 12472 }],
          12472: [[12471, 12441]],
          12473: [, , { 12441: 12474 }],
          12474: [[12473, 12441]],
          12475: [, , { 12441: 12476 }],
          12476: [[12475, 12441]],
          12477: [, , { 12441: 12478 }],
          12478: [[12477, 12441]],
          12479: [, , { 12441: 12480 }],
          12480: [[12479, 12441]],
          12481: [, , { 12441: 12482 }],
          12482: [[12481, 12441]],
          12484: [, , { 12441: 12485 }],
          12485: [[12484, 12441]],
          12486: [, , { 12441: 12487 }],
          12487: [[12486, 12441]],
          12488: [, , { 12441: 12489 }],
          12489: [[12488, 12441]],
          12495: [, , { 12441: 12496, 12442: 12497 }],
          12496: [[12495, 12441]],
          12497: [[12495, 12442]],
          12498: [, , { 12441: 12499, 12442: 12500 }],
          12499: [[12498, 12441]],
          12500: [[12498, 12442]],
          12501: [, , { 12441: 12502, 12442: 12503 }],
          12502: [[12501, 12441]],
          12503: [[12501, 12442]],
          12504: [, , { 12441: 12505, 12442: 12506 }],
          12505: [[12504, 12441]],
          12506: [[12504, 12442]],
          12507: [, , { 12441: 12508, 12442: 12509 }],
          12508: [[12507, 12441]],
          12509: [[12507, 12442]],
          12527: [, , { 12441: 12535 }],
          12528: [, , { 12441: 12536 }],
          12529: [, , { 12441: 12537 }],
          12530: [, , { 12441: 12538 }],
          12532: [[12454, 12441]],
          12535: [[12527, 12441]],
          12536: [[12528, 12441]],
          12537: [[12529, 12441]],
          12538: [[12530, 12441]],
          12541: [, , { 12441: 12542 }],
          12542: [[12541, 12441]],
          12543: [[12467, 12488], 256],
        },
        12544: {
          12593: [[4352], 256],
          12594: [[4353], 256],
          12595: [[4522], 256],
          12596: [[4354], 256],
          12597: [[4524], 256],
          12598: [[4525], 256],
          12599: [[4355], 256],
          12600: [[4356], 256],
          12601: [[4357], 256],
          12602: [[4528], 256],
          12603: [[4529], 256],
          12604: [[4530], 256],
          12605: [[4531], 256],
          12606: [[4532], 256],
          12607: [[4533], 256],
          12608: [[4378], 256],
          12609: [[4358], 256],
          12610: [[4359], 256],
          12611: [[4360], 256],
          12612: [[4385], 256],
          12613: [[4361], 256],
          12614: [[4362], 256],
          12615: [[4363], 256],
          12616: [[4364], 256],
          12617: [[4365], 256],
          12618: [[4366], 256],
          12619: [[4367], 256],
          12620: [[4368], 256],
          12621: [[4369], 256],
          12622: [[4370], 256],
          12623: [[4449], 256],
          12624: [[4450], 256],
          12625: [[4451], 256],
          12626: [[4452], 256],
          12627: [[4453], 256],
          12628: [[4454], 256],
          12629: [[4455], 256],
          12630: [[4456], 256],
          12631: [[4457], 256],
          12632: [[4458], 256],
          12633: [[4459], 256],
          12634: [[4460], 256],
          12635: [[4461], 256],
          12636: [[4462], 256],
          12637: [[4463], 256],
          12638: [[4464], 256],
          12639: [[4465], 256],
          12640: [[4466], 256],
          12641: [[4467], 256],
          12642: [[4468], 256],
          12643: [[4469], 256],
          12644: [[4448], 256],
          12645: [[4372], 256],
          12646: [[4373], 256],
          12647: [[4551], 256],
          12648: [[4552], 256],
          12649: [[4556], 256],
          12650: [[4558], 256],
          12651: [[4563], 256],
          12652: [[4567], 256],
          12653: [[4569], 256],
          12654: [[4380], 256],
          12655: [[4573], 256],
          12656: [[4575], 256],
          12657: [[4381], 256],
          12658: [[4382], 256],
          12659: [[4384], 256],
          12660: [[4386], 256],
          12661: [[4387], 256],
          12662: [[4391], 256],
          12663: [[4393], 256],
          12664: [[4395], 256],
          12665: [[4396], 256],
          12666: [[4397], 256],
          12667: [[4398], 256],
          12668: [[4399], 256],
          12669: [[4402], 256],
          12670: [[4406], 256],
          12671: [[4416], 256],
          12672: [[4423], 256],
          12673: [[4428], 256],
          12674: [[4593], 256],
          12675: [[4594], 256],
          12676: [[4439], 256],
          12677: [[4440], 256],
          12678: [[4441], 256],
          12679: [[4484], 256],
          12680: [[4485], 256],
          12681: [[4488], 256],
          12682: [[4497], 256],
          12683: [[4498], 256],
          12684: [[4500], 256],
          12685: [[4510], 256],
          12686: [[4513], 256],
          12690: [[19968], 256],
          12691: [[20108], 256],
          12692: [[19977], 256],
          12693: [[22235], 256],
          12694: [[19978], 256],
          12695: [[20013], 256],
          12696: [[19979], 256],
          12697: [[30002], 256],
          12698: [[20057], 256],
          12699: [[19993], 256],
          12700: [[19969], 256],
          12701: [[22825], 256],
          12702: [[22320], 256],
          12703: [[20154], 256],
        },
        12800: {
          12800: [[40, 4352, 41], 256],
          12801: [[40, 4354, 41], 256],
          12802: [[40, 4355, 41], 256],
          12803: [[40, 4357, 41], 256],
          12804: [[40, 4358, 41], 256],
          12805: [[40, 4359, 41], 256],
          12806: [[40, 4361, 41], 256],
          12807: [[40, 4363, 41], 256],
          12808: [[40, 4364, 41], 256],
          12809: [[40, 4366, 41], 256],
          12810: [[40, 4367, 41], 256],
          12811: [[40, 4368, 41], 256],
          12812: [[40, 4369, 41], 256],
          12813: [[40, 4370, 41], 256],
          12814: [[40, 4352, 4449, 41], 256],
          12815: [[40, 4354, 4449, 41], 256],
          12816: [[40, 4355, 4449, 41], 256],
          12817: [[40, 4357, 4449, 41], 256],
          12818: [[40, 4358, 4449, 41], 256],
          12819: [[40, 4359, 4449, 41], 256],
          12820: [[40, 4361, 4449, 41], 256],
          12821: [[40, 4363, 4449, 41], 256],
          12822: [[40, 4364, 4449, 41], 256],
          12823: [[40, 4366, 4449, 41], 256],
          12824: [[40, 4367, 4449, 41], 256],
          12825: [[40, 4368, 4449, 41], 256],
          12826: [[40, 4369, 4449, 41], 256],
          12827: [[40, 4370, 4449, 41], 256],
          12828: [[40, 4364, 4462, 41], 256],
          12829: [[40, 4363, 4457, 4364, 4453, 4523, 41], 256],
          12830: [[40, 4363, 4457, 4370, 4462, 41], 256],
          12832: [[40, 19968, 41], 256],
          12833: [[40, 20108, 41], 256],
          12834: [[40, 19977, 41], 256],
          12835: [[40, 22235, 41], 256],
          12836: [[40, 20116, 41], 256],
          12837: [[40, 20845, 41], 256],
          12838: [[40, 19971, 41], 256],
          12839: [[40, 20843, 41], 256],
          12840: [[40, 20061, 41], 256],
          12841: [[40, 21313, 41], 256],
          12842: [[40, 26376, 41], 256],
          12843: [[40, 28779, 41], 256],
          12844: [[40, 27700, 41], 256],
          12845: [[40, 26408, 41], 256],
          12846: [[40, 37329, 41], 256],
          12847: [[40, 22303, 41], 256],
          12848: [[40, 26085, 41], 256],
          12849: [[40, 26666, 41], 256],
          12850: [[40, 26377, 41], 256],
          12851: [[40, 31038, 41], 256],
          12852: [[40, 21517, 41], 256],
          12853: [[40, 29305, 41], 256],
          12854: [[40, 36001, 41], 256],
          12855: [[40, 31069, 41], 256],
          12856: [[40, 21172, 41], 256],
          12857: [[40, 20195, 41], 256],
          12858: [[40, 21628, 41], 256],
          12859: [[40, 23398, 41], 256],
          12860: [[40, 30435, 41], 256],
          12861: [[40, 20225, 41], 256],
          12862: [[40, 36039, 41], 256],
          12863: [[40, 21332, 41], 256],
          12864: [[40, 31085, 41], 256],
          12865: [[40, 20241, 41], 256],
          12866: [[40, 33258, 41], 256],
          12867: [[40, 33267, 41], 256],
          12868: [[21839], 256],
          12869: [[24188], 256],
          12870: [[25991], 256],
          12871: [[31631], 256],
          12880: [[80, 84, 69], 256],
          12881: [[50, 49], 256],
          12882: [[50, 50], 256],
          12883: [[50, 51], 256],
          12884: [[50, 52], 256],
          12885: [[50, 53], 256],
          12886: [[50, 54], 256],
          12887: [[50, 55], 256],
          12888: [[50, 56], 256],
          12889: [[50, 57], 256],
          12890: [[51, 48], 256],
          12891: [[51, 49], 256],
          12892: [[51, 50], 256],
          12893: [[51, 51], 256],
          12894: [[51, 52], 256],
          12895: [[51, 53], 256],
          12896: [[4352], 256],
          12897: [[4354], 256],
          12898: [[4355], 256],
          12899: [[4357], 256],
          12900: [[4358], 256],
          12901: [[4359], 256],
          12902: [[4361], 256],
          12903: [[4363], 256],
          12904: [[4364], 256],
          12905: [[4366], 256],
          12906: [[4367], 256],
          12907: [[4368], 256],
          12908: [[4369], 256],
          12909: [[4370], 256],
          12910: [[4352, 4449], 256],
          12911: [[4354, 4449], 256],
          12912: [[4355, 4449], 256],
          12913: [[4357, 4449], 256],
          12914: [[4358, 4449], 256],
          12915: [[4359, 4449], 256],
          12916: [[4361, 4449], 256],
          12917: [[4363, 4449], 256],
          12918: [[4364, 4449], 256],
          12919: [[4366, 4449], 256],
          12920: [[4367, 4449], 256],
          12921: [[4368, 4449], 256],
          12922: [[4369, 4449], 256],
          12923: [[4370, 4449], 256],
          12924: [[4366, 4449, 4535, 4352, 4457], 256],
          12925: [[4364, 4462, 4363, 4468], 256],
          12926: [[4363, 4462], 256],
          12928: [[19968], 256],
          12929: [[20108], 256],
          12930: [[19977], 256],
          12931: [[22235], 256],
          12932: [[20116], 256],
          12933: [[20845], 256],
          12934: [[19971], 256],
          12935: [[20843], 256],
          12936: [[20061], 256],
          12937: [[21313], 256],
          12938: [[26376], 256],
          12939: [[28779], 256],
          12940: [[27700], 256],
          12941: [[26408], 256],
          12942: [[37329], 256],
          12943: [[22303], 256],
          12944: [[26085], 256],
          12945: [[26666], 256],
          12946: [[26377], 256],
          12947: [[31038], 256],
          12948: [[21517], 256],
          12949: [[29305], 256],
          12950: [[36001], 256],
          12951: [[31069], 256],
          12952: [[21172], 256],
          12953: [[31192], 256],
          12954: [[30007], 256],
          12955: [[22899], 256],
          12956: [[36969], 256],
          12957: [[20778], 256],
          12958: [[21360], 256],
          12959: [[27880], 256],
          12960: [[38917], 256],
          12961: [[20241], 256],
          12962: [[20889], 256],
          12963: [[27491], 256],
          12964: [[19978], 256],
          12965: [[20013], 256],
          12966: [[19979], 256],
          12967: [[24038], 256],
          12968: [[21491], 256],
          12969: [[21307], 256],
          12970: [[23447], 256],
          12971: [[23398], 256],
          12972: [[30435], 256],
          12973: [[20225], 256],
          12974: [[36039], 256],
          12975: [[21332], 256],
          12976: [[22812], 256],
          12977: [[51, 54], 256],
          12978: [[51, 55], 256],
          12979: [[51, 56], 256],
          12980: [[51, 57], 256],
          12981: [[52, 48], 256],
          12982: [[52, 49], 256],
          12983: [[52, 50], 256],
          12984: [[52, 51], 256],
          12985: [[52, 52], 256],
          12986: [[52, 53], 256],
          12987: [[52, 54], 256],
          12988: [[52, 55], 256],
          12989: [[52, 56], 256],
          12990: [[52, 57], 256],
          12991: [[53, 48], 256],
          12992: [[49, 26376], 256],
          12993: [[50, 26376], 256],
          12994: [[51, 26376], 256],
          12995: [[52, 26376], 256],
          12996: [[53, 26376], 256],
          12997: [[54, 26376], 256],
          12998: [[55, 26376], 256],
          12999: [[56, 26376], 256],
          13e3: [[57, 26376], 256],
          13001: [[49, 48, 26376], 256],
          13002: [[49, 49, 26376], 256],
          13003: [[49, 50, 26376], 256],
          13004: [[72, 103], 256],
          13005: [[101, 114, 103], 256],
          13006: [[101, 86], 256],
          13007: [[76, 84, 68], 256],
          13008: [[12450], 256],
          13009: [[12452], 256],
          13010: [[12454], 256],
          13011: [[12456], 256],
          13012: [[12458], 256],
          13013: [[12459], 256],
          13014: [[12461], 256],
          13015: [[12463], 256],
          13016: [[12465], 256],
          13017: [[12467], 256],
          13018: [[12469], 256],
          13019: [[12471], 256],
          13020: [[12473], 256],
          13021: [[12475], 256],
          13022: [[12477], 256],
          13023: [[12479], 256],
          13024: [[12481], 256],
          13025: [[12484], 256],
          13026: [[12486], 256],
          13027: [[12488], 256],
          13028: [[12490], 256],
          13029: [[12491], 256],
          13030: [[12492], 256],
          13031: [[12493], 256],
          13032: [[12494], 256],
          13033: [[12495], 256],
          13034: [[12498], 256],
          13035: [[12501], 256],
          13036: [[12504], 256],
          13037: [[12507], 256],
          13038: [[12510], 256],
          13039: [[12511], 256],
          13040: [[12512], 256],
          13041: [[12513], 256],
          13042: [[12514], 256],
          13043: [[12516], 256],
          13044: [[12518], 256],
          13045: [[12520], 256],
          13046: [[12521], 256],
          13047: [[12522], 256],
          13048: [[12523], 256],
          13049: [[12524], 256],
          13050: [[12525], 256],
          13051: [[12527], 256],
          13052: [[12528], 256],
          13053: [[12529], 256],
          13054: [[12530], 256],
        },
        13056: {
          13056: [[12450, 12497, 12540, 12488], 256],
          13057: [[12450, 12523, 12501, 12449], 256],
          13058: [[12450, 12531, 12506, 12450], 256],
          13059: [[12450, 12540, 12523], 256],
          13060: [[12452, 12491, 12531, 12464], 256],
          13061: [[12452, 12531, 12481], 256],
          13062: [[12454, 12457, 12531], 256],
          13063: [[12456, 12473, 12463, 12540, 12489], 256],
          13064: [[12456, 12540, 12459, 12540], 256],
          13065: [[12458, 12531, 12473], 256],
          13066: [[12458, 12540, 12512], 256],
          13067: [[12459, 12452, 12522], 256],
          13068: [[12459, 12521, 12483, 12488], 256],
          13069: [[12459, 12525, 12522, 12540], 256],
          13070: [[12460, 12525, 12531], 256],
          13071: [[12460, 12531, 12510], 256],
          13072: [[12462, 12460], 256],
          13073: [[12462, 12491, 12540], 256],
          13074: [[12461, 12517, 12522, 12540], 256],
          13075: [[12462, 12523, 12480, 12540], 256],
          13076: [[12461, 12525], 256],
          13077: [[12461, 12525, 12464, 12521, 12512], 256],
          13078: [[12461, 12525, 12513, 12540, 12488, 12523], 256],
          13079: [[12461, 12525, 12527, 12483, 12488], 256],
          13080: [[12464, 12521, 12512], 256],
          13081: [[12464, 12521, 12512, 12488, 12531], 256],
          13082: [[12463, 12523, 12476, 12452, 12525], 256],
          13083: [[12463, 12525, 12540, 12493], 256],
          13084: [[12465, 12540, 12473], 256],
          13085: [[12467, 12523, 12490], 256],
          13086: [[12467, 12540, 12509], 256],
          13087: [[12469, 12452, 12463, 12523], 256],
          13088: [[12469, 12531, 12481, 12540, 12512], 256],
          13089: [[12471, 12522, 12531, 12464], 256],
          13090: [[12475, 12531, 12481], 256],
          13091: [[12475, 12531, 12488], 256],
          13092: [[12480, 12540, 12473], 256],
          13093: [[12487, 12471], 256],
          13094: [[12489, 12523], 256],
          13095: [[12488, 12531], 256],
          13096: [[12490, 12494], 256],
          13097: [[12494, 12483, 12488], 256],
          13098: [[12495, 12452, 12484], 256],
          13099: [[12497, 12540, 12475, 12531, 12488], 256],
          13100: [[12497, 12540, 12484], 256],
          13101: [[12496, 12540, 12524, 12523], 256],
          13102: [[12500, 12450, 12473, 12488, 12523], 256],
          13103: [[12500, 12463, 12523], 256],
          13104: [[12500, 12467], 256],
          13105: [[12499, 12523], 256],
          13106: [[12501, 12449, 12521, 12483, 12489], 256],
          13107: [[12501, 12451, 12540, 12488], 256],
          13108: [[12502, 12483, 12471, 12455, 12523], 256],
          13109: [[12501, 12521, 12531], 256],
          13110: [[12504, 12463, 12479, 12540, 12523], 256],
          13111: [[12506, 12477], 256],
          13112: [[12506, 12491, 12498], 256],
          13113: [[12504, 12523, 12484], 256],
          13114: [[12506, 12531, 12473], 256],
          13115: [[12506, 12540, 12472], 256],
          13116: [[12505, 12540, 12479], 256],
          13117: [[12509, 12452, 12531, 12488], 256],
          13118: [[12508, 12523, 12488], 256],
          13119: [[12507, 12531], 256],
          13120: [[12509, 12531, 12489], 256],
          13121: [[12507, 12540, 12523], 256],
          13122: [[12507, 12540, 12531], 256],
          13123: [[12510, 12452, 12463, 12525], 256],
          13124: [[12510, 12452, 12523], 256],
          13125: [[12510, 12483, 12495], 256],
          13126: [[12510, 12523, 12463], 256],
          13127: [[12510, 12531, 12471, 12519, 12531], 256],
          13128: [[12511, 12463, 12525, 12531], 256],
          13129: [[12511, 12522], 256],
          13130: [[12511, 12522, 12496, 12540, 12523], 256],
          13131: [[12513, 12460], 256],
          13132: [[12513, 12460, 12488, 12531], 256],
          13133: [[12513, 12540, 12488, 12523], 256],
          13134: [[12516, 12540, 12489], 256],
          13135: [[12516, 12540, 12523], 256],
          13136: [[12518, 12450, 12531], 256],
          13137: [[12522, 12483, 12488, 12523], 256],
          13138: [[12522, 12521], 256],
          13139: [[12523, 12500, 12540], 256],
          13140: [[12523, 12540, 12502, 12523], 256],
          13141: [[12524, 12512], 256],
          13142: [[12524, 12531, 12488, 12466, 12531], 256],
          13143: [[12527, 12483, 12488], 256],
          13144: [[48, 28857], 256],
          13145: [[49, 28857], 256],
          13146: [[50, 28857], 256],
          13147: [[51, 28857], 256],
          13148: [[52, 28857], 256],
          13149: [[53, 28857], 256],
          13150: [[54, 28857], 256],
          13151: [[55, 28857], 256],
          13152: [[56, 28857], 256],
          13153: [[57, 28857], 256],
          13154: [[49, 48, 28857], 256],
          13155: [[49, 49, 28857], 256],
          13156: [[49, 50, 28857], 256],
          13157: [[49, 51, 28857], 256],
          13158: [[49, 52, 28857], 256],
          13159: [[49, 53, 28857], 256],
          13160: [[49, 54, 28857], 256],
          13161: [[49, 55, 28857], 256],
          13162: [[49, 56, 28857], 256],
          13163: [[49, 57, 28857], 256],
          13164: [[50, 48, 28857], 256],
          13165: [[50, 49, 28857], 256],
          13166: [[50, 50, 28857], 256],
          13167: [[50, 51, 28857], 256],
          13168: [[50, 52, 28857], 256],
          13169: [[104, 80, 97], 256],
          13170: [[100, 97], 256],
          13171: [[65, 85], 256],
          13172: [[98, 97, 114], 256],
          13173: [[111, 86], 256],
          13174: [[112, 99], 256],
          13175: [[100, 109], 256],
          13176: [[100, 109, 178], 256],
          13177: [[100, 109, 179], 256],
          13178: [[73, 85], 256],
          13179: [[24179, 25104], 256],
          13180: [[26157, 21644], 256],
          13181: [[22823, 27491], 256],
          13182: [[26126, 27835], 256],
          13183: [[26666, 24335, 20250, 31038], 256],
          13184: [[112, 65], 256],
          13185: [[110, 65], 256],
          13186: [[956, 65], 256],
          13187: [[109, 65], 256],
          13188: [[107, 65], 256],
          13189: [[75, 66], 256],
          13190: [[77, 66], 256],
          13191: [[71, 66], 256],
          13192: [[99, 97, 108], 256],
          13193: [[107, 99, 97, 108], 256],
          13194: [[112, 70], 256],
          13195: [[110, 70], 256],
          13196: [[956, 70], 256],
          13197: [[956, 103], 256],
          13198: [[109, 103], 256],
          13199: [[107, 103], 256],
          13200: [[72, 122], 256],
          13201: [[107, 72, 122], 256],
          13202: [[77, 72, 122], 256],
          13203: [[71, 72, 122], 256],
          13204: [[84, 72, 122], 256],
          13205: [[956, 8467], 256],
          13206: [[109, 8467], 256],
          13207: [[100, 8467], 256],
          13208: [[107, 8467], 256],
          13209: [[102, 109], 256],
          13210: [[110, 109], 256],
          13211: [[956, 109], 256],
          13212: [[109, 109], 256],
          13213: [[99, 109], 256],
          13214: [[107, 109], 256],
          13215: [[109, 109, 178], 256],
          13216: [[99, 109, 178], 256],
          13217: [[109, 178], 256],
          13218: [[107, 109, 178], 256],
          13219: [[109, 109, 179], 256],
          13220: [[99, 109, 179], 256],
          13221: [[109, 179], 256],
          13222: [[107, 109, 179], 256],
          13223: [[109, 8725, 115], 256],
          13224: [[109, 8725, 115, 178], 256],
          13225: [[80, 97], 256],
          13226: [[107, 80, 97], 256],
          13227: [[77, 80, 97], 256],
          13228: [[71, 80, 97], 256],
          13229: [[114, 97, 100], 256],
          13230: [[114, 97, 100, 8725, 115], 256],
          13231: [[114, 97, 100, 8725, 115, 178], 256],
          13232: [[112, 115], 256],
          13233: [[110, 115], 256],
          13234: [[956, 115], 256],
          13235: [[109, 115], 256],
          13236: [[112, 86], 256],
          13237: [[110, 86], 256],
          13238: [[956, 86], 256],
          13239: [[109, 86], 256],
          13240: [[107, 86], 256],
          13241: [[77, 86], 256],
          13242: [[112, 87], 256],
          13243: [[110, 87], 256],
          13244: [[956, 87], 256],
          13245: [[109, 87], 256],
          13246: [[107, 87], 256],
          13247: [[77, 87], 256],
          13248: [[107, 937], 256],
          13249: [[77, 937], 256],
          13250: [[97, 46, 109, 46], 256],
          13251: [[66, 113], 256],
          13252: [[99, 99], 256],
          13253: [[99, 100], 256],
          13254: [[67, 8725, 107, 103], 256],
          13255: [[67, 111, 46], 256],
          13256: [[100, 66], 256],
          13257: [[71, 121], 256],
          13258: [[104, 97], 256],
          13259: [[72, 80], 256],
          13260: [[105, 110], 256],
          13261: [[75, 75], 256],
          13262: [[75, 77], 256],
          13263: [[107, 116], 256],
          13264: [[108, 109], 256],
          13265: [[108, 110], 256],
          13266: [[108, 111, 103], 256],
          13267: [[108, 120], 256],
          13268: [[109, 98], 256],
          13269: [[109, 105, 108], 256],
          13270: [[109, 111, 108], 256],
          13271: [[80, 72], 256],
          13272: [[112, 46, 109, 46], 256],
          13273: [[80, 80, 77], 256],
          13274: [[80, 82], 256],
          13275: [[115, 114], 256],
          13276: [[83, 118], 256],
          13277: [[87, 98], 256],
          13278: [[86, 8725, 109], 256],
          13279: [[65, 8725, 109], 256],
          13280: [[49, 26085], 256],
          13281: [[50, 26085], 256],
          13282: [[51, 26085], 256],
          13283: [[52, 26085], 256],
          13284: [[53, 26085], 256],
          13285: [[54, 26085], 256],
          13286: [[55, 26085], 256],
          13287: [[56, 26085], 256],
          13288: [[57, 26085], 256],
          13289: [[49, 48, 26085], 256],
          13290: [[49, 49, 26085], 256],
          13291: [[49, 50, 26085], 256],
          13292: [[49, 51, 26085], 256],
          13293: [[49, 52, 26085], 256],
          13294: [[49, 53, 26085], 256],
          13295: [[49, 54, 26085], 256],
          13296: [[49, 55, 26085], 256],
          13297: [[49, 56, 26085], 256],
          13298: [[49, 57, 26085], 256],
          13299: [[50, 48, 26085], 256],
          13300: [[50, 49, 26085], 256],
          13301: [[50, 50, 26085], 256],
          13302: [[50, 51, 26085], 256],
          13303: [[50, 52, 26085], 256],
          13304: [[50, 53, 26085], 256],
          13305: [[50, 54, 26085], 256],
          13306: [[50, 55, 26085], 256],
          13307: [[50, 56, 26085], 256],
          13308: [[50, 57, 26085], 256],
          13309: [[51, 48, 26085], 256],
          13310: [[51, 49, 26085], 256],
          13311: [[103, 97, 108], 256],
        },
        27136: {
          92912: [, 1],
          92913: [, 1],
          92914: [, 1],
          92915: [, 1],
          92916: [, 1],
        },
        27392: {
          92976: [, 230],
          92977: [, 230],
          92978: [, 230],
          92979: [, 230],
          92980: [, 230],
          92981: [, 230],
          92982: [, 230],
        },
        42496: {
          42607: [, 230],
          42612: [, 230],
          42613: [, 230],
          42614: [, 230],
          42615: [, 230],
          42616: [, 230],
          42617: [, 230],
          42618: [, 230],
          42619: [, 230],
          42620: [, 230],
          42621: [, 230],
          42652: [[1098], 256],
          42653: [[1100], 256],
          42655: [, 230],
          42736: [, 230],
          42737: [, 230],
        },
        42752: {
          42864: [[42863], 256],
          43e3: [[294], 256],
          43001: [[339], 256],
        },
        43008: {
          43014: [, 9],
          43204: [, 9],
          43232: [, 230],
          43233: [, 230],
          43234: [, 230],
          43235: [, 230],
          43236: [, 230],
          43237: [, 230],
          43238: [, 230],
          43239: [, 230],
          43240: [, 230],
          43241: [, 230],
          43242: [, 230],
          43243: [, 230],
          43244: [, 230],
          43245: [, 230],
          43246: [, 230],
          43247: [, 230],
          43248: [, 230],
          43249: [, 230],
        },
        43264: {
          43307: [, 220],
          43308: [, 220],
          43309: [, 220],
          43347: [, 9],
          43443: [, 7],
          43456: [, 9],
        },
        43520: {
          43696: [, 230],
          43698: [, 230],
          43699: [, 230],
          43700: [, 220],
          43703: [, 230],
          43704: [, 230],
          43710: [, 230],
          43711: [, 230],
          43713: [, 230],
          43766: [, 9],
        },
        43776: {
          43868: [[42791], 256],
          43869: [[43831], 256],
          43870: [[619], 256],
          43871: [[43858], 256],
          44013: [, 9],
        },
        48128: { 113822: [, 1] },
        53504: {
          119134: [[119127, 119141], 512],
          119135: [[119128, 119141], 512],
          119136: [[119135, 119150], 512],
          119137: [[119135, 119151], 512],
          119138: [[119135, 119152], 512],
          119139: [[119135, 119153], 512],
          119140: [[119135, 119154], 512],
          119141: [, 216],
          119142: [, 216],
          119143: [, 1],
          119144: [, 1],
          119145: [, 1],
          119149: [, 226],
          119150: [, 216],
          119151: [, 216],
          119152: [, 216],
          119153: [, 216],
          119154: [, 216],
          119163: [, 220],
          119164: [, 220],
          119165: [, 220],
          119166: [, 220],
          119167: [, 220],
          119168: [, 220],
          119169: [, 220],
          119170: [, 220],
          119173: [, 230],
          119174: [, 230],
          119175: [, 230],
          119176: [, 230],
          119177: [, 230],
          119178: [, 220],
          119179: [, 220],
          119210: [, 230],
          119211: [, 230],
          119212: [, 230],
          119213: [, 230],
          119227: [[119225, 119141], 512],
          119228: [[119226, 119141], 512],
          119229: [[119227, 119150], 512],
          119230: [[119228, 119150], 512],
          119231: [[119227, 119151], 512],
          119232: [[119228, 119151], 512],
        },
        53760: { 119362: [, 230], 119363: [, 230], 119364: [, 230] },
        54272: {
          119808: [[65], 256],
          119809: [[66], 256],
          119810: [[67], 256],
          119811: [[68], 256],
          119812: [[69], 256],
          119813: [[70], 256],
          119814: [[71], 256],
          119815: [[72], 256],
          119816: [[73], 256],
          119817: [[74], 256],
          119818: [[75], 256],
          119819: [[76], 256],
          119820: [[77], 256],
          119821: [[78], 256],
          119822: [[79], 256],
          119823: [[80], 256],
          119824: [[81], 256],
          119825: [[82], 256],
          119826: [[83], 256],
          119827: [[84], 256],
          119828: [[85], 256],
          119829: [[86], 256],
          119830: [[87], 256],
          119831: [[88], 256],
          119832: [[89], 256],
          119833: [[90], 256],
          119834: [[97], 256],
          119835: [[98], 256],
          119836: [[99], 256],
          119837: [[100], 256],
          119838: [[101], 256],
          119839: [[102], 256],
          119840: [[103], 256],
          119841: [[104], 256],
          119842: [[105], 256],
          119843: [[106], 256],
          119844: [[107], 256],
          119845: [[108], 256],
          119846: [[109], 256],
          119847: [[110], 256],
          119848: [[111], 256],
          119849: [[112], 256],
          119850: [[113], 256],
          119851: [[114], 256],
          119852: [[115], 256],
          119853: [[116], 256],
          119854: [[117], 256],
          119855: [[118], 256],
          119856: [[119], 256],
          119857: [[120], 256],
          119858: [[121], 256],
          119859: [[122], 256],
          119860: [[65], 256],
          119861: [[66], 256],
          119862: [[67], 256],
          119863: [[68], 256],
          119864: [[69], 256],
          119865: [[70], 256],
          119866: [[71], 256],
          119867: [[72], 256],
          119868: [[73], 256],
          119869: [[74], 256],
          119870: [[75], 256],
          119871: [[76], 256],
          119872: [[77], 256],
          119873: [[78], 256],
          119874: [[79], 256],
          119875: [[80], 256],
          119876: [[81], 256],
          119877: [[82], 256],
          119878: [[83], 256],
          119879: [[84], 256],
          119880: [[85], 256],
          119881: [[86], 256],
          119882: [[87], 256],
          119883: [[88], 256],
          119884: [[89], 256],
          119885: [[90], 256],
          119886: [[97], 256],
          119887: [[98], 256],
          119888: [[99], 256],
          119889: [[100], 256],
          119890: [[101], 256],
          119891: [[102], 256],
          119892: [[103], 256],
          119894: [[105], 256],
          119895: [[106], 256],
          119896: [[107], 256],
          119897: [[108], 256],
          119898: [[109], 256],
          119899: [[110], 256],
          119900: [[111], 256],
          119901: [[112], 256],
          119902: [[113], 256],
          119903: [[114], 256],
          119904: [[115], 256],
          119905: [[116], 256],
          119906: [[117], 256],
          119907: [[118], 256],
          119908: [[119], 256],
          119909: [[120], 256],
          119910: [[121], 256],
          119911: [[122], 256],
          119912: [[65], 256],
          119913: [[66], 256],
          119914: [[67], 256],
          119915: [[68], 256],
          119916: [[69], 256],
          119917: [[70], 256],
          119918: [[71], 256],
          119919: [[72], 256],
          119920: [[73], 256],
          119921: [[74], 256],
          119922: [[75], 256],
          119923: [[76], 256],
          119924: [[77], 256],
          119925: [[78], 256],
          119926: [[79], 256],
          119927: [[80], 256],
          119928: [[81], 256],
          119929: [[82], 256],
          119930: [[83], 256],
          119931: [[84], 256],
          119932: [[85], 256],
          119933: [[86], 256],
          119934: [[87], 256],
          119935: [[88], 256],
          119936: [[89], 256],
          119937: [[90], 256],
          119938: [[97], 256],
          119939: [[98], 256],
          119940: [[99], 256],
          119941: [[100], 256],
          119942: [[101], 256],
          119943: [[102], 256],
          119944: [[103], 256],
          119945: [[104], 256],
          119946: [[105], 256],
          119947: [[106], 256],
          119948: [[107], 256],
          119949: [[108], 256],
          119950: [[109], 256],
          119951: [[110], 256],
          119952: [[111], 256],
          119953: [[112], 256],
          119954: [[113], 256],
          119955: [[114], 256],
          119956: [[115], 256],
          119957: [[116], 256],
          119958: [[117], 256],
          119959: [[118], 256],
          119960: [[119], 256],
          119961: [[120], 256],
          119962: [[121], 256],
          119963: [[122], 256],
          119964: [[65], 256],
          119966: [[67], 256],
          119967: [[68], 256],
          119970: [[71], 256],
          119973: [[74], 256],
          119974: [[75], 256],
          119977: [[78], 256],
          119978: [[79], 256],
          119979: [[80], 256],
          119980: [[81], 256],
          119982: [[83], 256],
          119983: [[84], 256],
          119984: [[85], 256],
          119985: [[86], 256],
          119986: [[87], 256],
          119987: [[88], 256],
          119988: [[89], 256],
          119989: [[90], 256],
          119990: [[97], 256],
          119991: [[98], 256],
          119992: [[99], 256],
          119993: [[100], 256],
          119995: [[102], 256],
          119997: [[104], 256],
          119998: [[105], 256],
          119999: [[106], 256],
          12e4: [[107], 256],
          120001: [[108], 256],
          120002: [[109], 256],
          120003: [[110], 256],
          120005: [[112], 256],
          120006: [[113], 256],
          120007: [[114], 256],
          120008: [[115], 256],
          120009: [[116], 256],
          120010: [[117], 256],
          120011: [[118], 256],
          120012: [[119], 256],
          120013: [[120], 256],
          120014: [[121], 256],
          120015: [[122], 256],
          120016: [[65], 256],
          120017: [[66], 256],
          120018: [[67], 256],
          120019: [[68], 256],
          120020: [[69], 256],
          120021: [[70], 256],
          120022: [[71], 256],
          120023: [[72], 256],
          120024: [[73], 256],
          120025: [[74], 256],
          120026: [[75], 256],
          120027: [[76], 256],
          120028: [[77], 256],
          120029: [[78], 256],
          120030: [[79], 256],
          120031: [[80], 256],
          120032: [[81], 256],
          120033: [[82], 256],
          120034: [[83], 256],
          120035: [[84], 256],
          120036: [[85], 256],
          120037: [[86], 256],
          120038: [[87], 256],
          120039: [[88], 256],
          120040: [[89], 256],
          120041: [[90], 256],
          120042: [[97], 256],
          120043: [[98], 256],
          120044: [[99], 256],
          120045: [[100], 256],
          120046: [[101], 256],
          120047: [[102], 256],
          120048: [[103], 256],
          120049: [[104], 256],
          120050: [[105], 256],
          120051: [[106], 256],
          120052: [[107], 256],
          120053: [[108], 256],
          120054: [[109], 256],
          120055: [[110], 256],
          120056: [[111], 256],
          120057: [[112], 256],
          120058: [[113], 256],
          120059: [[114], 256],
          120060: [[115], 256],
          120061: [[116], 256],
          120062: [[117], 256],
          120063: [[118], 256],
        },
        54528: {
          120064: [[119], 256],
          120065: [[120], 256],
          120066: [[121], 256],
          120067: [[122], 256],
          120068: [[65], 256],
          120069: [[66], 256],
          120071: [[68], 256],
          120072: [[69], 256],
          120073: [[70], 256],
          120074: [[71], 256],
          120077: [[74], 256],
          120078: [[75], 256],
          120079: [[76], 256],
          120080: [[77], 256],
          120081: [[78], 256],
          120082: [[79], 256],
          120083: [[80], 256],
          120084: [[81], 256],
          120086: [[83], 256],
          120087: [[84], 256],
          120088: [[85], 256],
          120089: [[86], 256],
          120090: [[87], 256],
          120091: [[88], 256],
          120092: [[89], 256],
          120094: [[97], 256],
          120095: [[98], 256],
          120096: [[99], 256],
          120097: [[100], 256],
          120098: [[101], 256],
          120099: [[102], 256],
          120100: [[103], 256],
          120101: [[104], 256],
          120102: [[105], 256],
          120103: [[106], 256],
          120104: [[107], 256],
          120105: [[108], 256],
          120106: [[109], 256],
          120107: [[110], 256],
          120108: [[111], 256],
          120109: [[112], 256],
          120110: [[113], 256],
          120111: [[114], 256],
          120112: [[115], 256],
          120113: [[116], 256],
          120114: [[117], 256],
          120115: [[118], 256],
          120116: [[119], 256],
          120117: [[120], 256],
          120118: [[121], 256],
          120119: [[122], 256],
          120120: [[65], 256],
          120121: [[66], 256],
          120123: [[68], 256],
          120124: [[69], 256],
          120125: [[70], 256],
          120126: [[71], 256],
          120128: [[73], 256],
          120129: [[74], 256],
          120130: [[75], 256],
          120131: [[76], 256],
          120132: [[77], 256],
          120134: [[79], 256],
          120138: [[83], 256],
          120139: [[84], 256],
          120140: [[85], 256],
          120141: [[86], 256],
          120142: [[87], 256],
          120143: [[88], 256],
          120144: [[89], 256],
          120146: [[97], 256],
          120147: [[98], 256],
          120148: [[99], 256],
          120149: [[100], 256],
          120150: [[101], 256],
          120151: [[102], 256],
          120152: [[103], 256],
          120153: [[104], 256],
          120154: [[105], 256],
          120155: [[106], 256],
          120156: [[107], 256],
          120157: [[108], 256],
          120158: [[109], 256],
          120159: [[110], 256],
          120160: [[111], 256],
          120161: [[112], 256],
          120162: [[113], 256],
          120163: [[114], 256],
          120164: [[115], 256],
          120165: [[116], 256],
          120166: [[117], 256],
          120167: [[118], 256],
          120168: [[119], 256],
          120169: [[120], 256],
          120170: [[121], 256],
          120171: [[122], 256],
          120172: [[65], 256],
          120173: [[66], 256],
          120174: [[67], 256],
          120175: [[68], 256],
          120176: [[69], 256],
          120177: [[70], 256],
          120178: [[71], 256],
          120179: [[72], 256],
          120180: [[73], 256],
          120181: [[74], 256],
          120182: [[75], 256],
          120183: [[76], 256],
          120184: [[77], 256],
          120185: [[78], 256],
          120186: [[79], 256],
          120187: [[80], 256],
          120188: [[81], 256],
          120189: [[82], 256],
          120190: [[83], 256],
          120191: [[84], 256],
          120192: [[85], 256],
          120193: [[86], 256],
          120194: [[87], 256],
          120195: [[88], 256],
          120196: [[89], 256],
          120197: [[90], 256],
          120198: [[97], 256],
          120199: [[98], 256],
          120200: [[99], 256],
          120201: [[100], 256],
          120202: [[101], 256],
          120203: [[102], 256],
          120204: [[103], 256],
          120205: [[104], 256],
          120206: [[105], 256],
          120207: [[106], 256],
          120208: [[107], 256],
          120209: [[108], 256],
          120210: [[109], 256],
          120211: [[110], 256],
          120212: [[111], 256],
          120213: [[112], 256],
          120214: [[113], 256],
          120215: [[114], 256],
          120216: [[115], 256],
          120217: [[116], 256],
          120218: [[117], 256],
          120219: [[118], 256],
          120220: [[119], 256],
          120221: [[120], 256],
          120222: [[121], 256],
          120223: [[122], 256],
          120224: [[65], 256],
          120225: [[66], 256],
          120226: [[67], 256],
          120227: [[68], 256],
          120228: [[69], 256],
          120229: [[70], 256],
          120230: [[71], 256],
          120231: [[72], 256],
          120232: [[73], 256],
          120233: [[74], 256],
          120234: [[75], 256],
          120235: [[76], 256],
          120236: [[77], 256],
          120237: [[78], 256],
          120238: [[79], 256],
          120239: [[80], 256],
          120240: [[81], 256],
          120241: [[82], 256],
          120242: [[83], 256],
          120243: [[84], 256],
          120244: [[85], 256],
          120245: [[86], 256],
          120246: [[87], 256],
          120247: [[88], 256],
          120248: [[89], 256],
          120249: [[90], 256],
          120250: [[97], 256],
          120251: [[98], 256],
          120252: [[99], 256],
          120253: [[100], 256],
          120254: [[101], 256],
          120255: [[102], 256],
          120256: [[103], 256],
          120257: [[104], 256],
          120258: [[105], 256],
          120259: [[106], 256],
          120260: [[107], 256],
          120261: [[108], 256],
          120262: [[109], 256],
          120263: [[110], 256],
          120264: [[111], 256],
          120265: [[112], 256],
          120266: [[113], 256],
          120267: [[114], 256],
          120268: [[115], 256],
          120269: [[116], 256],
          120270: [[117], 256],
          120271: [[118], 256],
          120272: [[119], 256],
          120273: [[120], 256],
          120274: [[121], 256],
          120275: [[122], 256],
          120276: [[65], 256],
          120277: [[66], 256],
          120278: [[67], 256],
          120279: [[68], 256],
          120280: [[69], 256],
          120281: [[70], 256],
          120282: [[71], 256],
          120283: [[72], 256],
          120284: [[73], 256],
          120285: [[74], 256],
          120286: [[75], 256],
          120287: [[76], 256],
          120288: [[77], 256],
          120289: [[78], 256],
          120290: [[79], 256],
          120291: [[80], 256],
          120292: [[81], 256],
          120293: [[82], 256],
          120294: [[83], 256],
          120295: [[84], 256],
          120296: [[85], 256],
          120297: [[86], 256],
          120298: [[87], 256],
          120299: [[88], 256],
          120300: [[89], 256],
          120301: [[90], 256],
          120302: [[97], 256],
          120303: [[98], 256],
          120304: [[99], 256],
          120305: [[100], 256],
          120306: [[101], 256],
          120307: [[102], 256],
          120308: [[103], 256],
          120309: [[104], 256],
          120310: [[105], 256],
          120311: [[106], 256],
          120312: [[107], 256],
          120313: [[108], 256],
          120314: [[109], 256],
          120315: [[110], 256],
          120316: [[111], 256],
          120317: [[112], 256],
          120318: [[113], 256],
          120319: [[114], 256],
        },
        54784: {
          120320: [[115], 256],
          120321: [[116], 256],
          120322: [[117], 256],
          120323: [[118], 256],
          120324: [[119], 256],
          120325: [[120], 256],
          120326: [[121], 256],
          120327: [[122], 256],
          120328: [[65], 256],
          120329: [[66], 256],
          120330: [[67], 256],
          120331: [[68], 256],
          120332: [[69], 256],
          120333: [[70], 256],
          120334: [[71], 256],
          120335: [[72], 256],
          120336: [[73], 256],
          120337: [[74], 256],
          120338: [[75], 256],
          120339: [[76], 256],
          120340: [[77], 256],
          120341: [[78], 256],
          120342: [[79], 256],
          120343: [[80], 256],
          120344: [[81], 256],
          120345: [[82], 256],
          120346: [[83], 256],
          120347: [[84], 256],
          120348: [[85], 256],
          120349: [[86], 256],
          120350: [[87], 256],
          120351: [[88], 256],
          120352: [[89], 256],
          120353: [[90], 256],
          120354: [[97], 256],
          120355: [[98], 256],
          120356: [[99], 256],
          120357: [[100], 256],
          120358: [[101], 256],
          120359: [[102], 256],
          120360: [[103], 256],
          120361: [[104], 256],
          120362: [[105], 256],
          120363: [[106], 256],
          120364: [[107], 256],
          120365: [[108], 256],
          120366: [[109], 256],
          120367: [[110], 256],
          120368: [[111], 256],
          120369: [[112], 256],
          120370: [[113], 256],
          120371: [[114], 256],
          120372: [[115], 256],
          120373: [[116], 256],
          120374: [[117], 256],
          120375: [[118], 256],
          120376: [[119], 256],
          120377: [[120], 256],
          120378: [[121], 256],
          120379: [[122], 256],
          120380: [[65], 256],
          120381: [[66], 256],
          120382: [[67], 256],
          120383: [[68], 256],
          120384: [[69], 256],
          120385: [[70], 256],
          120386: [[71], 256],
          120387: [[72], 256],
          120388: [[73], 256],
          120389: [[74], 256],
          120390: [[75], 256],
          120391: [[76], 256],
          120392: [[77], 256],
          120393: [[78], 256],
          120394: [[79], 256],
          120395: [[80], 256],
          120396: [[81], 256],
          120397: [[82], 256],
          120398: [[83], 256],
          120399: [[84], 256],
          120400: [[85], 256],
          120401: [[86], 256],
          120402: [[87], 256],
          120403: [[88], 256],
          120404: [[89], 256],
          120405: [[90], 256],
          120406: [[97], 256],
          120407: [[98], 256],
          120408: [[99], 256],
          120409: [[100], 256],
          120410: [[101], 256],
          120411: [[102], 256],
          120412: [[103], 256],
          120413: [[104], 256],
          120414: [[105], 256],
          120415: [[106], 256],
          120416: [[107], 256],
          120417: [[108], 256],
          120418: [[109], 256],
          120419: [[110], 256],
          120420: [[111], 256],
          120421: [[112], 256],
          120422: [[113], 256],
          120423: [[114], 256],
          120424: [[115], 256],
          120425: [[116], 256],
          120426: [[117], 256],
          120427: [[118], 256],
          120428: [[119], 256],
          120429: [[120], 256],
          120430: [[121], 256],
          120431: [[122], 256],
          120432: [[65], 256],
          120433: [[66], 256],
          120434: [[67], 256],
          120435: [[68], 256],
          120436: [[69], 256],
          120437: [[70], 256],
          120438: [[71], 256],
          120439: [[72], 256],
          120440: [[73], 256],
          120441: [[74], 256],
          120442: [[75], 256],
          120443: [[76], 256],
          120444: [[77], 256],
          120445: [[78], 256],
          120446: [[79], 256],
          120447: [[80], 256],
          120448: [[81], 256],
          120449: [[82], 256],
          120450: [[83], 256],
          120451: [[84], 256],
          120452: [[85], 256],
          120453: [[86], 256],
          120454: [[87], 256],
          120455: [[88], 256],
          120456: [[89], 256],
          120457: [[90], 256],
          120458: [[97], 256],
          120459: [[98], 256],
          120460: [[99], 256],
          120461: [[100], 256],
          120462: [[101], 256],
          120463: [[102], 256],
          120464: [[103], 256],
          120465: [[104], 256],
          120466: [[105], 256],
          120467: [[106], 256],
          120468: [[107], 256],
          120469: [[108], 256],
          120470: [[109], 256],
          120471: [[110], 256],
          120472: [[111], 256],
          120473: [[112], 256],
          120474: [[113], 256],
          120475: [[114], 256],
          120476: [[115], 256],
          120477: [[116], 256],
          120478: [[117], 256],
          120479: [[118], 256],
          120480: [[119], 256],
          120481: [[120], 256],
          120482: [[121], 256],
          120483: [[122], 256],
          120484: [[305], 256],
          120485: [[567], 256],
          120488: [[913], 256],
          120489: [[914], 256],
          120490: [[915], 256],
          120491: [[916], 256],
          120492: [[917], 256],
          120493: [[918], 256],
          120494: [[919], 256],
          120495: [[920], 256],
          120496: [[921], 256],
          120497: [[922], 256],
          120498: [[923], 256],
          120499: [[924], 256],
          120500: [[925], 256],
          120501: [[926], 256],
          120502: [[927], 256],
          120503: [[928], 256],
          120504: [[929], 256],
          120505: [[1012], 256],
          120506: [[931], 256],
          120507: [[932], 256],
          120508: [[933], 256],
          120509: [[934], 256],
          120510: [[935], 256],
          120511: [[936], 256],
          120512: [[937], 256],
          120513: [[8711], 256],
          120514: [[945], 256],
          120515: [[946], 256],
          120516: [[947], 256],
          120517: [[948], 256],
          120518: [[949], 256],
          120519: [[950], 256],
          120520: [[951], 256],
          120521: [[952], 256],
          120522: [[953], 256],
          120523: [[954], 256],
          120524: [[955], 256],
          120525: [[956], 256],
          120526: [[957], 256],
          120527: [[958], 256],
          120528: [[959], 256],
          120529: [[960], 256],
          120530: [[961], 256],
          120531: [[962], 256],
          120532: [[963], 256],
          120533: [[964], 256],
          120534: [[965], 256],
          120535: [[966], 256],
          120536: [[967], 256],
          120537: [[968], 256],
          120538: [[969], 256],
          120539: [[8706], 256],
          120540: [[1013], 256],
          120541: [[977], 256],
          120542: [[1008], 256],
          120543: [[981], 256],
          120544: [[1009], 256],
          120545: [[982], 256],
          120546: [[913], 256],
          120547: [[914], 256],
          120548: [[915], 256],
          120549: [[916], 256],
          120550: [[917], 256],
          120551: [[918], 256],
          120552: [[919], 256],
          120553: [[920], 256],
          120554: [[921], 256],
          120555: [[922], 256],
          120556: [[923], 256],
          120557: [[924], 256],
          120558: [[925], 256],
          120559: [[926], 256],
          120560: [[927], 256],
          120561: [[928], 256],
          120562: [[929], 256],
          120563: [[1012], 256],
          120564: [[931], 256],
          120565: [[932], 256],
          120566: [[933], 256],
          120567: [[934], 256],
          120568: [[935], 256],
          120569: [[936], 256],
          120570: [[937], 256],
          120571: [[8711], 256],
          120572: [[945], 256],
          120573: [[946], 256],
          120574: [[947], 256],
          120575: [[948], 256],
        },
        55040: {
          120576: [[949], 256],
          120577: [[950], 256],
          120578: [[951], 256],
          120579: [[952], 256],
          120580: [[953], 256],
          120581: [[954], 256],
          120582: [[955], 256],
          120583: [[956], 256],
          120584: [[957], 256],
          120585: [[958], 256],
          120586: [[959], 256],
          120587: [[960], 256],
          120588: [[961], 256],
          120589: [[962], 256],
          120590: [[963], 256],
          120591: [[964], 256],
          120592: [[965], 256],
          120593: [[966], 256],
          120594: [[967], 256],
          120595: [[968], 256],
          120596: [[969], 256],
          120597: [[8706], 256],
          120598: [[1013], 256],
          120599: [[977], 256],
          120600: [[1008], 256],
          120601: [[981], 256],
          120602: [[1009], 256],
          120603: [[982], 256],
          120604: [[913], 256],
          120605: [[914], 256],
          120606: [[915], 256],
          120607: [[916], 256],
          120608: [[917], 256],
          120609: [[918], 256],
          120610: [[919], 256],
          120611: [[920], 256],
          120612: [[921], 256],
          120613: [[922], 256],
          120614: [[923], 256],
          120615: [[924], 256],
          120616: [[925], 256],
          120617: [[926], 256],
          120618: [[927], 256],
          120619: [[928], 256],
          120620: [[929], 256],
          120621: [[1012], 256],
          120622: [[931], 256],
          120623: [[932], 256],
          120624: [[933], 256],
          120625: [[934], 256],
          120626: [[935], 256],
          120627: [[936], 256],
          120628: [[937], 256],
          120629: [[8711], 256],
          120630: [[945], 256],
          120631: [[946], 256],
          120632: [[947], 256],
          120633: [[948], 256],
          120634: [[949], 256],
          120635: [[950], 256],
          120636: [[951], 256],
          120637: [[952], 256],
          120638: [[953], 256],
          120639: [[954], 256],
          120640: [[955], 256],
          120641: [[956], 256],
          120642: [[957], 256],
          120643: [[958], 256],
          120644: [[959], 256],
          120645: [[960], 256],
          120646: [[961], 256],
          120647: [[962], 256],
          120648: [[963], 256],
          120649: [[964], 256],
          120650: [[965], 256],
          120651: [[966], 256],
          120652: [[967], 256],
          120653: [[968], 256],
          120654: [[969], 256],
          120655: [[8706], 256],
          120656: [[1013], 256],
          120657: [[977], 256],
          120658: [[1008], 256],
          120659: [[981], 256],
          120660: [[1009], 256],
          120661: [[982], 256],
          120662: [[913], 256],
          120663: [[914], 256],
          120664: [[915], 256],
          120665: [[916], 256],
          120666: [[917], 256],
          120667: [[918], 256],
          120668: [[919], 256],
          120669: [[920], 256],
          120670: [[921], 256],
          120671: [[922], 256],
          120672: [[923], 256],
          120673: [[924], 256],
          120674: [[925], 256],
          120675: [[926], 256],
          120676: [[927], 256],
          120677: [[928], 256],
          120678: [[929], 256],
          120679: [[1012], 256],
          120680: [[931], 256],
          120681: [[932], 256],
          120682: [[933], 256],
          120683: [[934], 256],
          120684: [[935], 256],
          120685: [[936], 256],
          120686: [[937], 256],
          120687: [[8711], 256],
          120688: [[945], 256],
          120689: [[946], 256],
          120690: [[947], 256],
          120691: [[948], 256],
          120692: [[949], 256],
          120693: [[950], 256],
          120694: [[951], 256],
          120695: [[952], 256],
          120696: [[953], 256],
          120697: [[954], 256],
          120698: [[955], 256],
          120699: [[956], 256],
          120700: [[957], 256],
          120701: [[958], 256],
          120702: [[959], 256],
          120703: [[960], 256],
          120704: [[961], 256],
          120705: [[962], 256],
          120706: [[963], 256],
          120707: [[964], 256],
          120708: [[965], 256],
          120709: [[966], 256],
          120710: [[967], 256],
          120711: [[968], 256],
          120712: [[969], 256],
          120713: [[8706], 256],
          120714: [[1013], 256],
          120715: [[977], 256],
          120716: [[1008], 256],
          120717: [[981], 256],
          120718: [[1009], 256],
          120719: [[982], 256],
          120720: [[913], 256],
          120721: [[914], 256],
          120722: [[915], 256],
          120723: [[916], 256],
          120724: [[917], 256],
          120725: [[918], 256],
          120726: [[919], 256],
          120727: [[920], 256],
          120728: [[921], 256],
          120729: [[922], 256],
          120730: [[923], 256],
          120731: [[924], 256],
          120732: [[925], 256],
          120733: [[926], 256],
          120734: [[927], 256],
          120735: [[928], 256],
          120736: [[929], 256],
          120737: [[1012], 256],
          120738: [[931], 256],
          120739: [[932], 256],
          120740: [[933], 256],
          120741: [[934], 256],
          120742: [[935], 256],
          120743: [[936], 256],
          120744: [[937], 256],
          120745: [[8711], 256],
          120746: [[945], 256],
          120747: [[946], 256],
          120748: [[947], 256],
          120749: [[948], 256],
          120750: [[949], 256],
          120751: [[950], 256],
          120752: [[951], 256],
          120753: [[952], 256],
          120754: [[953], 256],
          120755: [[954], 256],
          120756: [[955], 256],
          120757: [[956], 256],
          120758: [[957], 256],
          120759: [[958], 256],
          120760: [[959], 256],
          120761: [[960], 256],
          120762: [[961], 256],
          120763: [[962], 256],
          120764: [[963], 256],
          120765: [[964], 256],
          120766: [[965], 256],
          120767: [[966], 256],
          120768: [[967], 256],
          120769: [[968], 256],
          120770: [[969], 256],
          120771: [[8706], 256],
          120772: [[1013], 256],
          120773: [[977], 256],
          120774: [[1008], 256],
          120775: [[981], 256],
          120776: [[1009], 256],
          120777: [[982], 256],
          120778: [[988], 256],
          120779: [[989], 256],
          120782: [[48], 256],
          120783: [[49], 256],
          120784: [[50], 256],
          120785: [[51], 256],
          120786: [[52], 256],
          120787: [[53], 256],
          120788: [[54], 256],
          120789: [[55], 256],
          120790: [[56], 256],
          120791: [[57], 256],
          120792: [[48], 256],
          120793: [[49], 256],
          120794: [[50], 256],
          120795: [[51], 256],
          120796: [[52], 256],
          120797: [[53], 256],
          120798: [[54], 256],
          120799: [[55], 256],
          120800: [[56], 256],
          120801: [[57], 256],
          120802: [[48], 256],
          120803: [[49], 256],
          120804: [[50], 256],
          120805: [[51], 256],
          120806: [[52], 256],
          120807: [[53], 256],
          120808: [[54], 256],
          120809: [[55], 256],
          120810: [[56], 256],
          120811: [[57], 256],
          120812: [[48], 256],
          120813: [[49], 256],
          120814: [[50], 256],
          120815: [[51], 256],
          120816: [[52], 256],
          120817: [[53], 256],
          120818: [[54], 256],
          120819: [[55], 256],
          120820: [[56], 256],
          120821: [[57], 256],
          120822: [[48], 256],
          120823: [[49], 256],
          120824: [[50], 256],
          120825: [[51], 256],
          120826: [[52], 256],
          120827: [[53], 256],
          120828: [[54], 256],
          120829: [[55], 256],
          120830: [[56], 256],
          120831: [[57], 256],
        },
        59392: {
          125136: [, 220],
          125137: [, 220],
          125138: [, 220],
          125139: [, 220],
          125140: [, 220],
          125141: [, 220],
          125142: [, 220],
        },
        60928: {
          126464: [[1575], 256],
          126465: [[1576], 256],
          126466: [[1580], 256],
          126467: [[1583], 256],
          126469: [[1608], 256],
          126470: [[1586], 256],
          126471: [[1581], 256],
          126472: [[1591], 256],
          126473: [[1610], 256],
          126474: [[1603], 256],
          126475: [[1604], 256],
          126476: [[1605], 256],
          126477: [[1606], 256],
          126478: [[1587], 256],
          126479: [[1593], 256],
          126480: [[1601], 256],
          126481: [[1589], 256],
          126482: [[1602], 256],
          126483: [[1585], 256],
          126484: [[1588], 256],
          126485: [[1578], 256],
          126486: [[1579], 256],
          126487: [[1582], 256],
          126488: [[1584], 256],
          126489: [[1590], 256],
          126490: [[1592], 256],
          126491: [[1594], 256],
          126492: [[1646], 256],
          126493: [[1722], 256],
          126494: [[1697], 256],
          126495: [[1647], 256],
          126497: [[1576], 256],
          126498: [[1580], 256],
          126500: [[1607], 256],
          126503: [[1581], 256],
          126505: [[1610], 256],
          126506: [[1603], 256],
          126507: [[1604], 256],
          126508: [[1605], 256],
          126509: [[1606], 256],
          126510: [[1587], 256],
          126511: [[1593], 256],
          126512: [[1601], 256],
          126513: [[1589], 256],
          126514: [[1602], 256],
          126516: [[1588], 256],
          126517: [[1578], 256],
          126518: [[1579], 256],
          126519: [[1582], 256],
          126521: [[1590], 256],
          126523: [[1594], 256],
          126530: [[1580], 256],
          126535: [[1581], 256],
          126537: [[1610], 256],
          126539: [[1604], 256],
          126541: [[1606], 256],
          126542: [[1587], 256],
          126543: [[1593], 256],
          126545: [[1589], 256],
          126546: [[1602], 256],
          126548: [[1588], 256],
          126551: [[1582], 256],
          126553: [[1590], 256],
          126555: [[1594], 256],
          126557: [[1722], 256],
          126559: [[1647], 256],
          126561: [[1576], 256],
          126562: [[1580], 256],
          126564: [[1607], 256],
          126567: [[1581], 256],
          126568: [[1591], 256],
          126569: [[1610], 256],
          126570: [[1603], 256],
          126572: [[1605], 256],
          126573: [[1606], 256],
          126574: [[1587], 256],
          126575: [[1593], 256],
          126576: [[1601], 256],
          126577: [[1589], 256],
          126578: [[1602], 256],
          126580: [[1588], 256],
          126581: [[1578], 256],
          126582: [[1579], 256],
          126583: [[1582], 256],
          126585: [[1590], 256],
          126586: [[1592], 256],
          126587: [[1594], 256],
          126588: [[1646], 256],
          126590: [[1697], 256],
          126592: [[1575], 256],
          126593: [[1576], 256],
          126594: [[1580], 256],
          126595: [[1583], 256],
          126596: [[1607], 256],
          126597: [[1608], 256],
          126598: [[1586], 256],
          126599: [[1581], 256],
          126600: [[1591], 256],
          126601: [[1610], 256],
          126603: [[1604], 256],
          126604: [[1605], 256],
          126605: [[1606], 256],
          126606: [[1587], 256],
          126607: [[1593], 256],
          126608: [[1601], 256],
          126609: [[1589], 256],
          126610: [[1602], 256],
          126611: [[1585], 256],
          126612: [[1588], 256],
          126613: [[1578], 256],
          126614: [[1579], 256],
          126615: [[1582], 256],
          126616: [[1584], 256],
          126617: [[1590], 256],
          126618: [[1592], 256],
          126619: [[1594], 256],
          126625: [[1576], 256],
          126626: [[1580], 256],
          126627: [[1583], 256],
          126629: [[1608], 256],
          126630: [[1586], 256],
          126631: [[1581], 256],
          126632: [[1591], 256],
          126633: [[1610], 256],
          126635: [[1604], 256],
          126636: [[1605], 256],
          126637: [[1606], 256],
          126638: [[1587], 256],
          126639: [[1593], 256],
          126640: [[1601], 256],
          126641: [[1589], 256],
          126642: [[1602], 256],
          126643: [[1585], 256],
          126644: [[1588], 256],
          126645: [[1578], 256],
          126646: [[1579], 256],
          126647: [[1582], 256],
          126648: [[1584], 256],
          126649: [[1590], 256],
          126650: [[1592], 256],
          126651: [[1594], 256],
        },
        61696: {
          127232: [[48, 46], 256],
          127233: [[48, 44], 256],
          127234: [[49, 44], 256],
          127235: [[50, 44], 256],
          127236: [[51, 44], 256],
          127237: [[52, 44], 256],
          127238: [[53, 44], 256],
          127239: [[54, 44], 256],
          127240: [[55, 44], 256],
          127241: [[56, 44], 256],
          127242: [[57, 44], 256],
          127248: [[40, 65, 41], 256],
          127249: [[40, 66, 41], 256],
          127250: [[40, 67, 41], 256],
          127251: [[40, 68, 41], 256],
          127252: [[40, 69, 41], 256],
          127253: [[40, 70, 41], 256],
          127254: [[40, 71, 41], 256],
          127255: [[40, 72, 41], 256],
          127256: [[40, 73, 41], 256],
          127257: [[40, 74, 41], 256],
          127258: [[40, 75, 41], 256],
          127259: [[40, 76, 41], 256],
          127260: [[40, 77, 41], 256],
          127261: [[40, 78, 41], 256],
          127262: [[40, 79, 41], 256],
          127263: [[40, 80, 41], 256],
          127264: [[40, 81, 41], 256],
          127265: [[40, 82, 41], 256],
          127266: [[40, 83, 41], 256],
          127267: [[40, 84, 41], 256],
          127268: [[40, 85, 41], 256],
          127269: [[40, 86, 41], 256],
          127270: [[40, 87, 41], 256],
          127271: [[40, 88, 41], 256],
          127272: [[40, 89, 41], 256],
          127273: [[40, 90, 41], 256],
          127274: [[12308, 83, 12309], 256],
          127275: [[67], 256],
          127276: [[82], 256],
          127277: [[67, 68], 256],
          127278: [[87, 90], 256],
          127280: [[65], 256],
          127281: [[66], 256],
          127282: [[67], 256],
          127283: [[68], 256],
          127284: [[69], 256],
          127285: [[70], 256],
          127286: [[71], 256],
          127287: [[72], 256],
          127288: [[73], 256],
          127289: [[74], 256],
          127290: [[75], 256],
          127291: [[76], 256],
          127292: [[77], 256],
          127293: [[78], 256],
          127294: [[79], 256],
          127295: [[80], 256],
          127296: [[81], 256],
          127297: [[82], 256],
          127298: [[83], 256],
          127299: [[84], 256],
          127300: [[85], 256],
          127301: [[86], 256],
          127302: [[87], 256],
          127303: [[88], 256],
          127304: [[89], 256],
          127305: [[90], 256],
          127306: [[72, 86], 256],
          127307: [[77, 86], 256],
          127308: [[83, 68], 256],
          127309: [[83, 83], 256],
          127310: [[80, 80, 86], 256],
          127311: [[87, 67], 256],
          127338: [[77, 67], 256],
          127339: [[77, 68], 256],
          127376: [[68, 74], 256],
        },
        61952: {
          127488: [[12411, 12363], 256],
          127489: [[12467, 12467], 256],
          127490: [[12469], 256],
          127504: [[25163], 256],
          127505: [[23383], 256],
          127506: [[21452], 256],
          127507: [[12487], 256],
          127508: [[20108], 256],
          127509: [[22810], 256],
          127510: [[35299], 256],
          127511: [[22825], 256],
          127512: [[20132], 256],
          127513: [[26144], 256],
          127514: [[28961], 256],
          127515: [[26009], 256],
          127516: [[21069], 256],
          127517: [[24460], 256],
          127518: [[20877], 256],
          127519: [[26032], 256],
          127520: [[21021], 256],
          127521: [[32066], 256],
          127522: [[29983], 256],
          127523: [[36009], 256],
          127524: [[22768], 256],
          127525: [[21561], 256],
          127526: [[28436], 256],
          127527: [[25237], 256],
          127528: [[25429], 256],
          127529: [[19968], 256],
          127530: [[19977], 256],
          127531: [[36938], 256],
          127532: [[24038], 256],
          127533: [[20013], 256],
          127534: [[21491], 256],
          127535: [[25351], 256],
          127536: [[36208], 256],
          127537: [[25171], 256],
          127538: [[31105], 256],
          127539: [[31354], 256],
          127540: [[21512], 256],
          127541: [[28288], 256],
          127542: [[26377], 256],
          127543: [[26376], 256],
          127544: [[30003], 256],
          127545: [[21106], 256],
          127546: [[21942], 256],
          127552: [[12308, 26412, 12309], 256],
          127553: [[12308, 19977, 12309], 256],
          127554: [[12308, 20108, 12309], 256],
          127555: [[12308, 23433, 12309], 256],
          127556: [[12308, 28857, 12309], 256],
          127557: [[12308, 25171, 12309], 256],
          127558: [[12308, 30423, 12309], 256],
          127559: [[12308, 21213, 12309], 256],
          127560: [[12308, 25943, 12309], 256],
          127568: [[24471], 256],
          127569: [[21487], 256],
        },
        63488: {
          194560: [[20029]],
          194561: [[20024]],
          194562: [[20033]],
          194563: [[131362]],
          194564: [[20320]],
          194565: [[20398]],
          194566: [[20411]],
          194567: [[20482]],
          194568: [[20602]],
          194569: [[20633]],
          194570: [[20711]],
          194571: [[20687]],
          194572: [[13470]],
          194573: [[132666]],
          194574: [[20813]],
          194575: [[20820]],
          194576: [[20836]],
          194577: [[20855]],
          194578: [[132380]],
          194579: [[13497]],
          194580: [[20839]],
          194581: [[20877]],
          194582: [[132427]],
          194583: [[20887]],
          194584: [[20900]],
          194585: [[20172]],
          194586: [[20908]],
          194587: [[20917]],
          194588: [[168415]],
          194589: [[20981]],
          194590: [[20995]],
          194591: [[13535]],
          194592: [[21051]],
          194593: [[21062]],
          194594: [[21106]],
          194595: [[21111]],
          194596: [[13589]],
          194597: [[21191]],
          194598: [[21193]],
          194599: [[21220]],
          194600: [[21242]],
          194601: [[21253]],
          194602: [[21254]],
          194603: [[21271]],
          194604: [[21321]],
          194605: [[21329]],
          194606: [[21338]],
          194607: [[21363]],
          194608: [[21373]],
          194609: [[21375]],
          194610: [[21375]],
          194611: [[21375]],
          194612: [[133676]],
          194613: [[28784]],
          194614: [[21450]],
          194615: [[21471]],
          194616: [[133987]],
          194617: [[21483]],
          194618: [[21489]],
          194619: [[21510]],
          194620: [[21662]],
          194621: [[21560]],
          194622: [[21576]],
          194623: [[21608]],
          194624: [[21666]],
          194625: [[21750]],
          194626: [[21776]],
          194627: [[21843]],
          194628: [[21859]],
          194629: [[21892]],
          194630: [[21892]],
          194631: [[21913]],
          194632: [[21931]],
          194633: [[21939]],
          194634: [[21954]],
          194635: [[22294]],
          194636: [[22022]],
          194637: [[22295]],
          194638: [[22097]],
          194639: [[22132]],
          194640: [[20999]],
          194641: [[22766]],
          194642: [[22478]],
          194643: [[22516]],
          194644: [[22541]],
          194645: [[22411]],
          194646: [[22578]],
          194647: [[22577]],
          194648: [[22700]],
          194649: [[136420]],
          194650: [[22770]],
          194651: [[22775]],
          194652: [[22790]],
          194653: [[22810]],
          194654: [[22818]],
          194655: [[22882]],
          194656: [[136872]],
          194657: [[136938]],
          194658: [[23020]],
          194659: [[23067]],
          194660: [[23079]],
          194661: [[23e3]],
          194662: [[23142]],
          194663: [[14062]],
          194664: [[14076]],
          194665: [[23304]],
          194666: [[23358]],
          194667: [[23358]],
          194668: [[137672]],
          194669: [[23491]],
          194670: [[23512]],
          194671: [[23527]],
          194672: [[23539]],
          194673: [[138008]],
          194674: [[23551]],
          194675: [[23558]],
          194676: [[24403]],
          194677: [[23586]],
          194678: [[14209]],
          194679: [[23648]],
          194680: [[23662]],
          194681: [[23744]],
          194682: [[23693]],
          194683: [[138724]],
          194684: [[23875]],
          194685: [[138726]],
          194686: [[23918]],
          194687: [[23915]],
          194688: [[23932]],
          194689: [[24033]],
          194690: [[24034]],
          194691: [[14383]],
          194692: [[24061]],
          194693: [[24104]],
          194694: [[24125]],
          194695: [[24169]],
          194696: [[14434]],
          194697: [[139651]],
          194698: [[14460]],
          194699: [[24240]],
          194700: [[24243]],
          194701: [[24246]],
          194702: [[24266]],
          194703: [[172946]],
          194704: [[24318]],
          194705: [[140081]],
          194706: [[140081]],
          194707: [[33281]],
          194708: [[24354]],
          194709: [[24354]],
          194710: [[14535]],
          194711: [[144056]],
          194712: [[156122]],
          194713: [[24418]],
          194714: [[24427]],
          194715: [[14563]],
          194716: [[24474]],
          194717: [[24525]],
          194718: [[24535]],
          194719: [[24569]],
          194720: [[24705]],
          194721: [[14650]],
          194722: [[14620]],
          194723: [[24724]],
          194724: [[141012]],
          194725: [[24775]],
          194726: [[24904]],
          194727: [[24908]],
          194728: [[24910]],
          194729: [[24908]],
          194730: [[24954]],
          194731: [[24974]],
          194732: [[25010]],
          194733: [[24996]],
          194734: [[25007]],
          194735: [[25054]],
          194736: [[25074]],
          194737: [[25078]],
          194738: [[25104]],
          194739: [[25115]],
          194740: [[25181]],
          194741: [[25265]],
          194742: [[25300]],
          194743: [[25424]],
          194744: [[142092]],
          194745: [[25405]],
          194746: [[25340]],
          194747: [[25448]],
          194748: [[25475]],
          194749: [[25572]],
          194750: [[142321]],
          194751: [[25634]],
          194752: [[25541]],
          194753: [[25513]],
          194754: [[14894]],
          194755: [[25705]],
          194756: [[25726]],
          194757: [[25757]],
          194758: [[25719]],
          194759: [[14956]],
          194760: [[25935]],
          194761: [[25964]],
          194762: [[143370]],
          194763: [[26083]],
          194764: [[26360]],
          194765: [[26185]],
          194766: [[15129]],
          194767: [[26257]],
          194768: [[15112]],
          194769: [[15076]],
          194770: [[20882]],
          194771: [[20885]],
          194772: [[26368]],
          194773: [[26268]],
          194774: [[32941]],
          194775: [[17369]],
          194776: [[26391]],
          194777: [[26395]],
          194778: [[26401]],
          194779: [[26462]],
          194780: [[26451]],
          194781: [[144323]],
          194782: [[15177]],
          194783: [[26618]],
          194784: [[26501]],
          194785: [[26706]],
          194786: [[26757]],
          194787: [[144493]],
          194788: [[26766]],
          194789: [[26655]],
          194790: [[26900]],
          194791: [[15261]],
          194792: [[26946]],
          194793: [[27043]],
          194794: [[27114]],
          194795: [[27304]],
          194796: [[145059]],
          194797: [[27355]],
          194798: [[15384]],
          194799: [[27425]],
          194800: [[145575]],
          194801: [[27476]],
          194802: [[15438]],
          194803: [[27506]],
          194804: [[27551]],
          194805: [[27578]],
          194806: [[27579]],
          194807: [[146061]],
          194808: [[138507]],
          194809: [[146170]],
          194810: [[27726]],
          194811: [[146620]],
          194812: [[27839]],
          194813: [[27853]],
          194814: [[27751]],
          194815: [[27926]],
        },
        63744: {
          63744: [[35912]],
          63745: [[26356]],
          63746: [[36554]],
          63747: [[36040]],
          63748: [[28369]],
          63749: [[20018]],
          63750: [[21477]],
          63751: [[40860]],
          63752: [[40860]],
          63753: [[22865]],
          63754: [[37329]],
          63755: [[21895]],
          63756: [[22856]],
          63757: [[25078]],
          63758: [[30313]],
          63759: [[32645]],
          63760: [[34367]],
          63761: [[34746]],
          63762: [[35064]],
          63763: [[37007]],
          63764: [[27138]],
          63765: [[27931]],
          63766: [[28889]],
          63767: [[29662]],
          63768: [[33853]],
          63769: [[37226]],
          63770: [[39409]],
          63771: [[20098]],
          63772: [[21365]],
          63773: [[27396]],
          63774: [[29211]],
          63775: [[34349]],
          63776: [[40478]],
          63777: [[23888]],
          63778: [[28651]],
          63779: [[34253]],
          63780: [[35172]],
          63781: [[25289]],
          63782: [[33240]],
          63783: [[34847]],
          63784: [[24266]],
          63785: [[26391]],
          63786: [[28010]],
          63787: [[29436]],
          63788: [[37070]],
          63789: [[20358]],
          63790: [[20919]],
          63791: [[21214]],
          63792: [[25796]],
          63793: [[27347]],
          63794: [[29200]],
          63795: [[30439]],
          63796: [[32769]],
          63797: [[34310]],
          63798: [[34396]],
          63799: [[36335]],
          63800: [[38706]],
          63801: [[39791]],
          63802: [[40442]],
          63803: [[30860]],
          63804: [[31103]],
          63805: [[32160]],
          63806: [[33737]],
          63807: [[37636]],
          63808: [[40575]],
          63809: [[35542]],
          63810: [[22751]],
          63811: [[24324]],
          63812: [[31840]],
          63813: [[32894]],
          63814: [[29282]],
          63815: [[30922]],
          63816: [[36034]],
          63817: [[38647]],
          63818: [[22744]],
          63819: [[23650]],
          63820: [[27155]],
          63821: [[28122]],
          63822: [[28431]],
          63823: [[32047]],
          63824: [[32311]],
          63825: [[38475]],
          63826: [[21202]],
          63827: [[32907]],
          63828: [[20956]],
          63829: [[20940]],
          63830: [[31260]],
          63831: [[32190]],
          63832: [[33777]],
          63833: [[38517]],
          63834: [[35712]],
          63835: [[25295]],
          63836: [[27138]],
          63837: [[35582]],
          63838: [[20025]],
          63839: [[23527]],
          63840: [[24594]],
          63841: [[29575]],
          63842: [[30064]],
          63843: [[21271]],
          63844: [[30971]],
          63845: [[20415]],
          63846: [[24489]],
          63847: [[19981]],
          63848: [[27852]],
          63849: [[25976]],
          63850: [[32034]],
          63851: [[21443]],
          63852: [[22622]],
          63853: [[30465]],
          63854: [[33865]],
          63855: [[35498]],
          63856: [[27578]],
          63857: [[36784]],
          63858: [[27784]],
          63859: [[25342]],
          63860: [[33509]],
          63861: [[25504]],
          63862: [[30053]],
          63863: [[20142]],
          63864: [[20841]],
          63865: [[20937]],
          63866: [[26753]],
          63867: [[31975]],
          63868: [[33391]],
          63869: [[35538]],
          63870: [[37327]],
          63871: [[21237]],
          63872: [[21570]],
          63873: [[22899]],
          63874: [[24300]],
          63875: [[26053]],
          63876: [[28670]],
          63877: [[31018]],
          63878: [[38317]],
          63879: [[39530]],
          63880: [[40599]],
          63881: [[40654]],
          63882: [[21147]],
          63883: [[26310]],
          63884: [[27511]],
          63885: [[36706]],
          63886: [[24180]],
          63887: [[24976]],
          63888: [[25088]],
          63889: [[25754]],
          63890: [[28451]],
          63891: [[29001]],
          63892: [[29833]],
          63893: [[31178]],
          63894: [[32244]],
          63895: [[32879]],
          63896: [[36646]],
          63897: [[34030]],
          63898: [[36899]],
          63899: [[37706]],
          63900: [[21015]],
          63901: [[21155]],
          63902: [[21693]],
          63903: [[28872]],
          63904: [[35010]],
          63905: [[35498]],
          63906: [[24265]],
          63907: [[24565]],
          63908: [[25467]],
          63909: [[27566]],
          63910: [[31806]],
          63911: [[29557]],
          63912: [[20196]],
          63913: [[22265]],
          63914: [[23527]],
          63915: [[23994]],
          63916: [[24604]],
          63917: [[29618]],
          63918: [[29801]],
          63919: [[32666]],
          63920: [[32838]],
          63921: [[37428]],
          63922: [[38646]],
          63923: [[38728]],
          63924: [[38936]],
          63925: [[20363]],
          63926: [[31150]],
          63927: [[37300]],
          63928: [[38584]],
          63929: [[24801]],
          63930: [[20102]],
          63931: [[20698]],
          63932: [[23534]],
          63933: [[23615]],
          63934: [[26009]],
          63935: [[27138]],
          63936: [[29134]],
          63937: [[30274]],
          63938: [[34044]],
          63939: [[36988]],
          63940: [[40845]],
          63941: [[26248]],
          63942: [[38446]],
          63943: [[21129]],
          63944: [[26491]],
          63945: [[26611]],
          63946: [[27969]],
          63947: [[28316]],
          63948: [[29705]],
          63949: [[30041]],
          63950: [[30827]],
          63951: [[32016]],
          63952: [[39006]],
          63953: [[20845]],
          63954: [[25134]],
          63955: [[38520]],
          63956: [[20523]],
          63957: [[23833]],
          63958: [[28138]],
          63959: [[36650]],
          63960: [[24459]],
          63961: [[24900]],
          63962: [[26647]],
          63963: [[29575]],
          63964: [[38534]],
          63965: [[21033]],
          63966: [[21519]],
          63967: [[23653]],
          63968: [[26131]],
          63969: [[26446]],
          63970: [[26792]],
          63971: [[27877]],
          63972: [[29702]],
          63973: [[30178]],
          63974: [[32633]],
          63975: [[35023]],
          63976: [[35041]],
          63977: [[37324]],
          63978: [[38626]],
          63979: [[21311]],
          63980: [[28346]],
          63981: [[21533]],
          63982: [[29136]],
          63983: [[29848]],
          63984: [[34298]],
          63985: [[38563]],
          63986: [[40023]],
          63987: [[40607]],
          63988: [[26519]],
          63989: [[28107]],
          63990: [[33256]],
          63991: [[31435]],
          63992: [[31520]],
          63993: [[31890]],
          63994: [[29376]],
          63995: [[28825]],
          63996: [[35672]],
          63997: [[20160]],
          63998: [[33590]],
          63999: [[21050]],
          194816: [[27966]],
          194817: [[28023]],
          194818: [[27969]],
          194819: [[28009]],
          194820: [[28024]],
          194821: [[28037]],
          194822: [[146718]],
          194823: [[27956]],
          194824: [[28207]],
          194825: [[28270]],
          194826: [[15667]],
          194827: [[28363]],
          194828: [[28359]],
          194829: [[147153]],
          194830: [[28153]],
          194831: [[28526]],
          194832: [[147294]],
          194833: [[147342]],
          194834: [[28614]],
          194835: [[28729]],
          194836: [[28702]],
          194837: [[28699]],
          194838: [[15766]],
          194839: [[28746]],
          194840: [[28797]],
          194841: [[28791]],
          194842: [[28845]],
          194843: [[132389]],
          194844: [[28997]],
          194845: [[148067]],
          194846: [[29084]],
          194847: [[148395]],
          194848: [[29224]],
          194849: [[29237]],
          194850: [[29264]],
          194851: [[149e3]],
          194852: [[29312]],
          194853: [[29333]],
          194854: [[149301]],
          194855: [[149524]],
          194856: [[29562]],
          194857: [[29579]],
          194858: [[16044]],
          194859: [[29605]],
          194860: [[16056]],
          194861: [[16056]],
          194862: [[29767]],
          194863: [[29788]],
          194864: [[29809]],
          194865: [[29829]],
          194866: [[29898]],
          194867: [[16155]],
          194868: [[29988]],
          194869: [[150582]],
          194870: [[30014]],
          194871: [[150674]],
          194872: [[30064]],
          194873: [[139679]],
          194874: [[30224]],
          194875: [[151457]],
          194876: [[151480]],
          194877: [[151620]],
          194878: [[16380]],
          194879: [[16392]],
          194880: [[30452]],
          194881: [[151795]],
          194882: [[151794]],
          194883: [[151833]],
          194884: [[151859]],
          194885: [[30494]],
          194886: [[30495]],
          194887: [[30495]],
          194888: [[30538]],
          194889: [[16441]],
          194890: [[30603]],
          194891: [[16454]],
          194892: [[16534]],
          194893: [[152605]],
          194894: [[30798]],
          194895: [[30860]],
          194896: [[30924]],
          194897: [[16611]],
          194898: [[153126]],
          194899: [[31062]],
          194900: [[153242]],
          194901: [[153285]],
          194902: [[31119]],
          194903: [[31211]],
          194904: [[16687]],
          194905: [[31296]],
          194906: [[31306]],
          194907: [[31311]],
          194908: [[153980]],
          194909: [[154279]],
          194910: [[154279]],
          194911: [[31470]],
          194912: [[16898]],
          194913: [[154539]],
          194914: [[31686]],
          194915: [[31689]],
          194916: [[16935]],
          194917: [[154752]],
          194918: [[31954]],
          194919: [[17056]],
          194920: [[31976]],
          194921: [[31971]],
          194922: [[32e3]],
          194923: [[155526]],
          194924: [[32099]],
          194925: [[17153]],
          194926: [[32199]],
          194927: [[32258]],
          194928: [[32325]],
          194929: [[17204]],
          194930: [[156200]],
          194931: [[156231]],
          194932: [[17241]],
          194933: [[156377]],
          194934: [[32634]],
          194935: [[156478]],
          194936: [[32661]],
          194937: [[32762]],
          194938: [[32773]],
          194939: [[156890]],
          194940: [[156963]],
          194941: [[32864]],
          194942: [[157096]],
          194943: [[32880]],
          194944: [[144223]],
          194945: [[17365]],
          194946: [[32946]],
          194947: [[33027]],
          194948: [[17419]],
          194949: [[33086]],
          194950: [[23221]],
          194951: [[157607]],
          194952: [[157621]],
          194953: [[144275]],
          194954: [[144284]],
          194955: [[33281]],
          194956: [[33284]],
          194957: [[36766]],
          194958: [[17515]],
          194959: [[33425]],
          194960: [[33419]],
          194961: [[33437]],
          194962: [[21171]],
          194963: [[33457]],
          194964: [[33459]],
          194965: [[33469]],
          194966: [[33510]],
          194967: [[158524]],
          194968: [[33509]],
          194969: [[33565]],
          194970: [[33635]],
          194971: [[33709]],
          194972: [[33571]],
          194973: [[33725]],
          194974: [[33767]],
          194975: [[33879]],
          194976: [[33619]],
          194977: [[33738]],
          194978: [[33740]],
          194979: [[33756]],
          194980: [[158774]],
          194981: [[159083]],
          194982: [[158933]],
          194983: [[17707]],
          194984: [[34033]],
          194985: [[34035]],
          194986: [[34070]],
          194987: [[160714]],
          194988: [[34148]],
          194989: [[159532]],
          194990: [[17757]],
          194991: [[17761]],
          194992: [[159665]],
          194993: [[159954]],
          194994: [[17771]],
          194995: [[34384]],
          194996: [[34396]],
          194997: [[34407]],
          194998: [[34409]],
          194999: [[34473]],
          195e3: [[34440]],
          195001: [[34574]],
          195002: [[34530]],
          195003: [[34681]],
          195004: [[34600]],
          195005: [[34667]],
          195006: [[34694]],
          195007: [[17879]],
          195008: [[34785]],
          195009: [[34817]],
          195010: [[17913]],
          195011: [[34912]],
          195012: [[34915]],
          195013: [[161383]],
          195014: [[35031]],
          195015: [[35038]],
          195016: [[17973]],
          195017: [[35066]],
          195018: [[13499]],
          195019: [[161966]],
          195020: [[162150]],
          195021: [[18110]],
          195022: [[18119]],
          195023: [[35488]],
          195024: [[35565]],
          195025: [[35722]],
          195026: [[35925]],
          195027: [[162984]],
          195028: [[36011]],
          195029: [[36033]],
          195030: [[36123]],
          195031: [[36215]],
          195032: [[163631]],
          195033: [[133124]],
          195034: [[36299]],
          195035: [[36284]],
          195036: [[36336]],
          195037: [[133342]],
          195038: [[36564]],
          195039: [[36664]],
          195040: [[165330]],
          195041: [[165357]],
          195042: [[37012]],
          195043: [[37105]],
          195044: [[37137]],
          195045: [[165678]],
          195046: [[37147]],
          195047: [[37432]],
          195048: [[37591]],
          195049: [[37592]],
          195050: [[37500]],
          195051: [[37881]],
          195052: [[37909]],
          195053: [[166906]],
          195054: [[38283]],
          195055: [[18837]],
          195056: [[38327]],
          195057: [[167287]],
          195058: [[18918]],
          195059: [[38595]],
          195060: [[23986]],
          195061: [[38691]],
          195062: [[168261]],
          195063: [[168474]],
          195064: [[19054]],
          195065: [[19062]],
          195066: [[38880]],
          195067: [[168970]],
          195068: [[19122]],
          195069: [[169110]],
          195070: [[38923]],
          195071: [[38923]],
        },
        64e3: {
          64e3: [[20999]],
          64001: [[24230]],
          64002: [[25299]],
          64003: [[31958]],
          64004: [[23429]],
          64005: [[27934]],
          64006: [[26292]],
          64007: [[36667]],
          64008: [[34892]],
          64009: [[38477]],
          64010: [[35211]],
          64011: [[24275]],
          64012: [[20800]],
          64013: [[21952]],
          64016: [[22618]],
          64018: [[26228]],
          64021: [[20958]],
          64022: [[29482]],
          64023: [[30410]],
          64024: [[31036]],
          64025: [[31070]],
          64026: [[31077]],
          64027: [[31119]],
          64028: [[38742]],
          64029: [[31934]],
          64030: [[32701]],
          64032: [[34322]],
          64034: [[35576]],
          64037: [[36920]],
          64038: [[37117]],
          64042: [[39151]],
          64043: [[39164]],
          64044: [[39208]],
          64045: [[40372]],
          64046: [[37086]],
          64047: [[38583]],
          64048: [[20398]],
          64049: [[20711]],
          64050: [[20813]],
          64051: [[21193]],
          64052: [[21220]],
          64053: [[21329]],
          64054: [[21917]],
          64055: [[22022]],
          64056: [[22120]],
          64057: [[22592]],
          64058: [[22696]],
          64059: [[23652]],
          64060: [[23662]],
          64061: [[24724]],
          64062: [[24936]],
          64063: [[24974]],
          64064: [[25074]],
          64065: [[25935]],
          64066: [[26082]],
          64067: [[26257]],
          64068: [[26757]],
          64069: [[28023]],
          64070: [[28186]],
          64071: [[28450]],
          64072: [[29038]],
          64073: [[29227]],
          64074: [[29730]],
          64075: [[30865]],
          64076: [[31038]],
          64077: [[31049]],
          64078: [[31048]],
          64079: [[31056]],
          64080: [[31062]],
          64081: [[31069]],
          64082: [[31117]],
          64083: [[31118]],
          64084: [[31296]],
          64085: [[31361]],
          64086: [[31680]],
          64087: [[32244]],
          64088: [[32265]],
          64089: [[32321]],
          64090: [[32626]],
          64091: [[32773]],
          64092: [[33261]],
          64093: [[33401]],
          64094: [[33401]],
          64095: [[33879]],
          64096: [[35088]],
          64097: [[35222]],
          64098: [[35585]],
          64099: [[35641]],
          64100: [[36051]],
          64101: [[36104]],
          64102: [[36790]],
          64103: [[36920]],
          64104: [[38627]],
          64105: [[38911]],
          64106: [[38971]],
          64107: [[24693]],
          64108: [[148206]],
          64109: [[33304]],
          64112: [[20006]],
          64113: [[20917]],
          64114: [[20840]],
          64115: [[20352]],
          64116: [[20805]],
          64117: [[20864]],
          64118: [[21191]],
          64119: [[21242]],
          64120: [[21917]],
          64121: [[21845]],
          64122: [[21913]],
          64123: [[21986]],
          64124: [[22618]],
          64125: [[22707]],
          64126: [[22852]],
          64127: [[22868]],
          64128: [[23138]],
          64129: [[23336]],
          64130: [[24274]],
          64131: [[24281]],
          64132: [[24425]],
          64133: [[24493]],
          64134: [[24792]],
          64135: [[24910]],
          64136: [[24840]],
          64137: [[24974]],
          64138: [[24928]],
          64139: [[25074]],
          64140: [[25140]],
          64141: [[25540]],
          64142: [[25628]],
          64143: [[25682]],
          64144: [[25942]],
          64145: [[26228]],
          64146: [[26391]],
          64147: [[26395]],
          64148: [[26454]],
          64149: [[27513]],
          64150: [[27578]],
          64151: [[27969]],
          64152: [[28379]],
          64153: [[28363]],
          64154: [[28450]],
          64155: [[28702]],
          64156: [[29038]],
          64157: [[30631]],
          64158: [[29237]],
          64159: [[29359]],
          64160: [[29482]],
          64161: [[29809]],
          64162: [[29958]],
          64163: [[30011]],
          64164: [[30237]],
          64165: [[30239]],
          64166: [[30410]],
          64167: [[30427]],
          64168: [[30452]],
          64169: [[30538]],
          64170: [[30528]],
          64171: [[30924]],
          64172: [[31409]],
          64173: [[31680]],
          64174: [[31867]],
          64175: [[32091]],
          64176: [[32244]],
          64177: [[32574]],
          64178: [[32773]],
          64179: [[33618]],
          64180: [[33775]],
          64181: [[34681]],
          64182: [[35137]],
          64183: [[35206]],
          64184: [[35222]],
          64185: [[35519]],
          64186: [[35576]],
          64187: [[35531]],
          64188: [[35585]],
          64189: [[35582]],
          64190: [[35565]],
          64191: [[35641]],
          64192: [[35722]],
          64193: [[36104]],
          64194: [[36664]],
          64195: [[36978]],
          64196: [[37273]],
          64197: [[37494]],
          64198: [[38524]],
          64199: [[38627]],
          64200: [[38742]],
          64201: [[38875]],
          64202: [[38911]],
          64203: [[38923]],
          64204: [[38971]],
          64205: [[39698]],
          64206: [[40860]],
          64207: [[141386]],
          64208: [[141380]],
          64209: [[144341]],
          64210: [[15261]],
          64211: [[16408]],
          64212: [[16441]],
          64213: [[152137]],
          64214: [[154832]],
          64215: [[163539]],
          64216: [[40771]],
          64217: [[40846]],
          195072: [[38953]],
          195073: [[169398]],
          195074: [[39138]],
          195075: [[19251]],
          195076: [[39209]],
          195077: [[39335]],
          195078: [[39362]],
          195079: [[39422]],
          195080: [[19406]],
          195081: [[170800]],
          195082: [[39698]],
          195083: [[4e4]],
          195084: [[40189]],
          195085: [[19662]],
          195086: [[19693]],
          195087: [[40295]],
          195088: [[172238]],
          195089: [[19704]],
          195090: [[172293]],
          195091: [[172558]],
          195092: [[172689]],
          195093: [[40635]],
          195094: [[19798]],
          195095: [[40697]],
          195096: [[40702]],
          195097: [[40709]],
          195098: [[40719]],
          195099: [[40726]],
          195100: [[40763]],
          195101: [[173568]],
        },
        64256: {
          64256: [[102, 102], 256],
          64257: [[102, 105], 256],
          64258: [[102, 108], 256],
          64259: [[102, 102, 105], 256],
          64260: [[102, 102, 108], 256],
          64261: [[383, 116], 256],
          64262: [[115, 116], 256],
          64275: [[1396, 1398], 256],
          64276: [[1396, 1381], 256],
          64277: [[1396, 1387], 256],
          64278: [[1406, 1398], 256],
          64279: [[1396, 1389], 256],
          64285: [[1497, 1460], 512],
          64286: [, 26],
          64287: [[1522, 1463], 512],
          64288: [[1506], 256],
          64289: [[1488], 256],
          64290: [[1491], 256],
          64291: [[1492], 256],
          64292: [[1499], 256],
          64293: [[1500], 256],
          64294: [[1501], 256],
          64295: [[1512], 256],
          64296: [[1514], 256],
          64297: [[43], 256],
          64298: [[1513, 1473], 512],
          64299: [[1513, 1474], 512],
          64300: [[64329, 1473], 512],
          64301: [[64329, 1474], 512],
          64302: [[1488, 1463], 512],
          64303: [[1488, 1464], 512],
          64304: [[1488, 1468], 512],
          64305: [[1489, 1468], 512],
          64306: [[1490, 1468], 512],
          64307: [[1491, 1468], 512],
          64308: [[1492, 1468], 512],
          64309: [[1493, 1468], 512],
          64310: [[1494, 1468], 512],
          64312: [[1496, 1468], 512],
          64313: [[1497, 1468], 512],
          64314: [[1498, 1468], 512],
          64315: [[1499, 1468], 512],
          64316: [[1500, 1468], 512],
          64318: [[1502, 1468], 512],
          64320: [[1504, 1468], 512],
          64321: [[1505, 1468], 512],
          64323: [[1507, 1468], 512],
          64324: [[1508, 1468], 512],
          64326: [[1510, 1468], 512],
          64327: [[1511, 1468], 512],
          64328: [[1512, 1468], 512],
          64329: [[1513, 1468], 512],
          64330: [[1514, 1468], 512],
          64331: [[1493, 1465], 512],
          64332: [[1489, 1471], 512],
          64333: [[1499, 1471], 512],
          64334: [[1508, 1471], 512],
          64335: [[1488, 1500], 256],
          64336: [[1649], 256],
          64337: [[1649], 256],
          64338: [[1659], 256],
          64339: [[1659], 256],
          64340: [[1659], 256],
          64341: [[1659], 256],
          64342: [[1662], 256],
          64343: [[1662], 256],
          64344: [[1662], 256],
          64345: [[1662], 256],
          64346: [[1664], 256],
          64347: [[1664], 256],
          64348: [[1664], 256],
          64349: [[1664], 256],
          64350: [[1658], 256],
          64351: [[1658], 256],
          64352: [[1658], 256],
          64353: [[1658], 256],
          64354: [[1663], 256],
          64355: [[1663], 256],
          64356: [[1663], 256],
          64357: [[1663], 256],
          64358: [[1657], 256],
          64359: [[1657], 256],
          64360: [[1657], 256],
          64361: [[1657], 256],
          64362: [[1700], 256],
          64363: [[1700], 256],
          64364: [[1700], 256],
          64365: [[1700], 256],
          64366: [[1702], 256],
          64367: [[1702], 256],
          64368: [[1702], 256],
          64369: [[1702], 256],
          64370: [[1668], 256],
          64371: [[1668], 256],
          64372: [[1668], 256],
          64373: [[1668], 256],
          64374: [[1667], 256],
          64375: [[1667], 256],
          64376: [[1667], 256],
          64377: [[1667], 256],
          64378: [[1670], 256],
          64379: [[1670], 256],
          64380: [[1670], 256],
          64381: [[1670], 256],
          64382: [[1671], 256],
          64383: [[1671], 256],
          64384: [[1671], 256],
          64385: [[1671], 256],
          64386: [[1677], 256],
          64387: [[1677], 256],
          64388: [[1676], 256],
          64389: [[1676], 256],
          64390: [[1678], 256],
          64391: [[1678], 256],
          64392: [[1672], 256],
          64393: [[1672], 256],
          64394: [[1688], 256],
          64395: [[1688], 256],
          64396: [[1681], 256],
          64397: [[1681], 256],
          64398: [[1705], 256],
          64399: [[1705], 256],
          64400: [[1705], 256],
          64401: [[1705], 256],
          64402: [[1711], 256],
          64403: [[1711], 256],
          64404: [[1711], 256],
          64405: [[1711], 256],
          64406: [[1715], 256],
          64407: [[1715], 256],
          64408: [[1715], 256],
          64409: [[1715], 256],
          64410: [[1713], 256],
          64411: [[1713], 256],
          64412: [[1713], 256],
          64413: [[1713], 256],
          64414: [[1722], 256],
          64415: [[1722], 256],
          64416: [[1723], 256],
          64417: [[1723], 256],
          64418: [[1723], 256],
          64419: [[1723], 256],
          64420: [[1728], 256],
          64421: [[1728], 256],
          64422: [[1729], 256],
          64423: [[1729], 256],
          64424: [[1729], 256],
          64425: [[1729], 256],
          64426: [[1726], 256],
          64427: [[1726], 256],
          64428: [[1726], 256],
          64429: [[1726], 256],
          64430: [[1746], 256],
          64431: [[1746], 256],
          64432: [[1747], 256],
          64433: [[1747], 256],
          64467: [[1709], 256],
          64468: [[1709], 256],
          64469: [[1709], 256],
          64470: [[1709], 256],
          64471: [[1735], 256],
          64472: [[1735], 256],
          64473: [[1734], 256],
          64474: [[1734], 256],
          64475: [[1736], 256],
          64476: [[1736], 256],
          64477: [[1655], 256],
          64478: [[1739], 256],
          64479: [[1739], 256],
          64480: [[1733], 256],
          64481: [[1733], 256],
          64482: [[1737], 256],
          64483: [[1737], 256],
          64484: [[1744], 256],
          64485: [[1744], 256],
          64486: [[1744], 256],
          64487: [[1744], 256],
          64488: [[1609], 256],
          64489: [[1609], 256],
          64490: [[1574, 1575], 256],
          64491: [[1574, 1575], 256],
          64492: [[1574, 1749], 256],
          64493: [[1574, 1749], 256],
          64494: [[1574, 1608], 256],
          64495: [[1574, 1608], 256],
          64496: [[1574, 1735], 256],
          64497: [[1574, 1735], 256],
          64498: [[1574, 1734], 256],
          64499: [[1574, 1734], 256],
          64500: [[1574, 1736], 256],
          64501: [[1574, 1736], 256],
          64502: [[1574, 1744], 256],
          64503: [[1574, 1744], 256],
          64504: [[1574, 1744], 256],
          64505: [[1574, 1609], 256],
          64506: [[1574, 1609], 256],
          64507: [[1574, 1609], 256],
          64508: [[1740], 256],
          64509: [[1740], 256],
          64510: [[1740], 256],
          64511: [[1740], 256],
        },
        64512: {
          64512: [[1574, 1580], 256],
          64513: [[1574, 1581], 256],
          64514: [[1574, 1605], 256],
          64515: [[1574, 1609], 256],
          64516: [[1574, 1610], 256],
          64517: [[1576, 1580], 256],
          64518: [[1576, 1581], 256],
          64519: [[1576, 1582], 256],
          64520: [[1576, 1605], 256],
          64521: [[1576, 1609], 256],
          64522: [[1576, 1610], 256],
          64523: [[1578, 1580], 256],
          64524: [[1578, 1581], 256],
          64525: [[1578, 1582], 256],
          64526: [[1578, 1605], 256],
          64527: [[1578, 1609], 256],
          64528: [[1578, 1610], 256],
          64529: [[1579, 1580], 256],
          64530: [[1579, 1605], 256],
          64531: [[1579, 1609], 256],
          64532: [[1579, 1610], 256],
          64533: [[1580, 1581], 256],
          64534: [[1580, 1605], 256],
          64535: [[1581, 1580], 256],
          64536: [[1581, 1605], 256],
          64537: [[1582, 1580], 256],
          64538: [[1582, 1581], 256],
          64539: [[1582, 1605], 256],
          64540: [[1587, 1580], 256],
          64541: [[1587, 1581], 256],
          64542: [[1587, 1582], 256],
          64543: [[1587, 1605], 256],
          64544: [[1589, 1581], 256],
          64545: [[1589, 1605], 256],
          64546: [[1590, 1580], 256],
          64547: [[1590, 1581], 256],
          64548: [[1590, 1582], 256],
          64549: [[1590, 1605], 256],
          64550: [[1591, 1581], 256],
          64551: [[1591, 1605], 256],
          64552: [[1592, 1605], 256],
          64553: [[1593, 1580], 256],
          64554: [[1593, 1605], 256],
          64555: [[1594, 1580], 256],
          64556: [[1594, 1605], 256],
          64557: [[1601, 1580], 256],
          64558: [[1601, 1581], 256],
          64559: [[1601, 1582], 256],
          64560: [[1601, 1605], 256],
          64561: [[1601, 1609], 256],
          64562: [[1601, 1610], 256],
          64563: [[1602, 1581], 256],
          64564: [[1602, 1605], 256],
          64565: [[1602, 1609], 256],
          64566: [[1602, 1610], 256],
          64567: [[1603, 1575], 256],
          64568: [[1603, 1580], 256],
          64569: [[1603, 1581], 256],
          64570: [[1603, 1582], 256],
          64571: [[1603, 1604], 256],
          64572: [[1603, 1605], 256],
          64573: [[1603, 1609], 256],
          64574: [[1603, 1610], 256],
          64575: [[1604, 1580], 256],
          64576: [[1604, 1581], 256],
          64577: [[1604, 1582], 256],
          64578: [[1604, 1605], 256],
          64579: [[1604, 1609], 256],
          64580: [[1604, 1610], 256],
          64581: [[1605, 1580], 256],
          64582: [[1605, 1581], 256],
          64583: [[1605, 1582], 256],
          64584: [[1605, 1605], 256],
          64585: [[1605, 1609], 256],
          64586: [[1605, 1610], 256],
          64587: [[1606, 1580], 256],
          64588: [[1606, 1581], 256],
          64589: [[1606, 1582], 256],
          64590: [[1606, 1605], 256],
          64591: [[1606, 1609], 256],
          64592: [[1606, 1610], 256],
          64593: [[1607, 1580], 256],
          64594: [[1607, 1605], 256],
          64595: [[1607, 1609], 256],
          64596: [[1607, 1610], 256],
          64597: [[1610, 1580], 256],
          64598: [[1610, 1581], 256],
          64599: [[1610, 1582], 256],
          64600: [[1610, 1605], 256],
          64601: [[1610, 1609], 256],
          64602: [[1610, 1610], 256],
          64603: [[1584, 1648], 256],
          64604: [[1585, 1648], 256],
          64605: [[1609, 1648], 256],
          64606: [[32, 1612, 1617], 256],
          64607: [[32, 1613, 1617], 256],
          64608: [[32, 1614, 1617], 256],
          64609: [[32, 1615, 1617], 256],
          64610: [[32, 1616, 1617], 256],
          64611: [[32, 1617, 1648], 256],
          64612: [[1574, 1585], 256],
          64613: [[1574, 1586], 256],
          64614: [[1574, 1605], 256],
          64615: [[1574, 1606], 256],
          64616: [[1574, 1609], 256],
          64617: [[1574, 1610], 256],
          64618: [[1576, 1585], 256],
          64619: [[1576, 1586], 256],
          64620: [[1576, 1605], 256],
          64621: [[1576, 1606], 256],
          64622: [[1576, 1609], 256],
          64623: [[1576, 1610], 256],
          64624: [[1578, 1585], 256],
          64625: [[1578, 1586], 256],
          64626: [[1578, 1605], 256],
          64627: [[1578, 1606], 256],
          64628: [[1578, 1609], 256],
          64629: [[1578, 1610], 256],
          64630: [[1579, 1585], 256],
          64631: [[1579, 1586], 256],
          64632: [[1579, 1605], 256],
          64633: [[1579, 1606], 256],
          64634: [[1579, 1609], 256],
          64635: [[1579, 1610], 256],
          64636: [[1601, 1609], 256],
          64637: [[1601, 1610], 256],
          64638: [[1602, 1609], 256],
          64639: [[1602, 1610], 256],
          64640: [[1603, 1575], 256],
          64641: [[1603, 1604], 256],
          64642: [[1603, 1605], 256],
          64643: [[1603, 1609], 256],
          64644: [[1603, 1610], 256],
          64645: [[1604, 1605], 256],
          64646: [[1604, 1609], 256],
          64647: [[1604, 1610], 256],
          64648: [[1605, 1575], 256],
          64649: [[1605, 1605], 256],
          64650: [[1606, 1585], 256],
          64651: [[1606, 1586], 256],
          64652: [[1606, 1605], 256],
          64653: [[1606, 1606], 256],
          64654: [[1606, 1609], 256],
          64655: [[1606, 1610], 256],
          64656: [[1609, 1648], 256],
          64657: [[1610, 1585], 256],
          64658: [[1610, 1586], 256],
          64659: [[1610, 1605], 256],
          64660: [[1610, 1606], 256],
          64661: [[1610, 1609], 256],
          64662: [[1610, 1610], 256],
          64663: [[1574, 1580], 256],
          64664: [[1574, 1581], 256],
          64665: [[1574, 1582], 256],
          64666: [[1574, 1605], 256],
          64667: [[1574, 1607], 256],
          64668: [[1576, 1580], 256],
          64669: [[1576, 1581], 256],
          64670: [[1576, 1582], 256],
          64671: [[1576, 1605], 256],
          64672: [[1576, 1607], 256],
          64673: [[1578, 1580], 256],
          64674: [[1578, 1581], 256],
          64675: [[1578, 1582], 256],
          64676: [[1578, 1605], 256],
          64677: [[1578, 1607], 256],
          64678: [[1579, 1605], 256],
          64679: [[1580, 1581], 256],
          64680: [[1580, 1605], 256],
          64681: [[1581, 1580], 256],
          64682: [[1581, 1605], 256],
          64683: [[1582, 1580], 256],
          64684: [[1582, 1605], 256],
          64685: [[1587, 1580], 256],
          64686: [[1587, 1581], 256],
          64687: [[1587, 1582], 256],
          64688: [[1587, 1605], 256],
          64689: [[1589, 1581], 256],
          64690: [[1589, 1582], 256],
          64691: [[1589, 1605], 256],
          64692: [[1590, 1580], 256],
          64693: [[1590, 1581], 256],
          64694: [[1590, 1582], 256],
          64695: [[1590, 1605], 256],
          64696: [[1591, 1581], 256],
          64697: [[1592, 1605], 256],
          64698: [[1593, 1580], 256],
          64699: [[1593, 1605], 256],
          64700: [[1594, 1580], 256],
          64701: [[1594, 1605], 256],
          64702: [[1601, 1580], 256],
          64703: [[1601, 1581], 256],
          64704: [[1601, 1582], 256],
          64705: [[1601, 1605], 256],
          64706: [[1602, 1581], 256],
          64707: [[1602, 1605], 256],
          64708: [[1603, 1580], 256],
          64709: [[1603, 1581], 256],
          64710: [[1603, 1582], 256],
          64711: [[1603, 1604], 256],
          64712: [[1603, 1605], 256],
          64713: [[1604, 1580], 256],
          64714: [[1604, 1581], 256],
          64715: [[1604, 1582], 256],
          64716: [[1604, 1605], 256],
          64717: [[1604, 1607], 256],
          64718: [[1605, 1580], 256],
          64719: [[1605, 1581], 256],
          64720: [[1605, 1582], 256],
          64721: [[1605, 1605], 256],
          64722: [[1606, 1580], 256],
          64723: [[1606, 1581], 256],
          64724: [[1606, 1582], 256],
          64725: [[1606, 1605], 256],
          64726: [[1606, 1607], 256],
          64727: [[1607, 1580], 256],
          64728: [[1607, 1605], 256],
          64729: [[1607, 1648], 256],
          64730: [[1610, 1580], 256],
          64731: [[1610, 1581], 256],
          64732: [[1610, 1582], 256],
          64733: [[1610, 1605], 256],
          64734: [[1610, 1607], 256],
          64735: [[1574, 1605], 256],
          64736: [[1574, 1607], 256],
          64737: [[1576, 1605], 256],
          64738: [[1576, 1607], 256],
          64739: [[1578, 1605], 256],
          64740: [[1578, 1607], 256],
          64741: [[1579, 1605], 256],
          64742: [[1579, 1607], 256],
          64743: [[1587, 1605], 256],
          64744: [[1587, 1607], 256],
          64745: [[1588, 1605], 256],
          64746: [[1588, 1607], 256],
          64747: [[1603, 1604], 256],
          64748: [[1603, 1605], 256],
          64749: [[1604, 1605], 256],
          64750: [[1606, 1605], 256],
          64751: [[1606, 1607], 256],
          64752: [[1610, 1605], 256],
          64753: [[1610, 1607], 256],
          64754: [[1600, 1614, 1617], 256],
          64755: [[1600, 1615, 1617], 256],
          64756: [[1600, 1616, 1617], 256],
          64757: [[1591, 1609], 256],
          64758: [[1591, 1610], 256],
          64759: [[1593, 1609], 256],
          64760: [[1593, 1610], 256],
          64761: [[1594, 1609], 256],
          64762: [[1594, 1610], 256],
          64763: [[1587, 1609], 256],
          64764: [[1587, 1610], 256],
          64765: [[1588, 1609], 256],
          64766: [[1588, 1610], 256],
          64767: [[1581, 1609], 256],
        },
        64768: {
          64768: [[1581, 1610], 256],
          64769: [[1580, 1609], 256],
          64770: [[1580, 1610], 256],
          64771: [[1582, 1609], 256],
          64772: [[1582, 1610], 256],
          64773: [[1589, 1609], 256],
          64774: [[1589, 1610], 256],
          64775: [[1590, 1609], 256],
          64776: [[1590, 1610], 256],
          64777: [[1588, 1580], 256],
          64778: [[1588, 1581], 256],
          64779: [[1588, 1582], 256],
          64780: [[1588, 1605], 256],
          64781: [[1588, 1585], 256],
          64782: [[1587, 1585], 256],
          64783: [[1589, 1585], 256],
          64784: [[1590, 1585], 256],
          64785: [[1591, 1609], 256],
          64786: [[1591, 1610], 256],
          64787: [[1593, 1609], 256],
          64788: [[1593, 1610], 256],
          64789: [[1594, 1609], 256],
          64790: [[1594, 1610], 256],
          64791: [[1587, 1609], 256],
          64792: [[1587, 1610], 256],
          64793: [[1588, 1609], 256],
          64794: [[1588, 1610], 256],
          64795: [[1581, 1609], 256],
          64796: [[1581, 1610], 256],
          64797: [[1580, 1609], 256],
          64798: [[1580, 1610], 256],
          64799: [[1582, 1609], 256],
          64800: [[1582, 1610], 256],
          64801: [[1589, 1609], 256],
          64802: [[1589, 1610], 256],
          64803: [[1590, 1609], 256],
          64804: [[1590, 1610], 256],
          64805: [[1588, 1580], 256],
          64806: [[1588, 1581], 256],
          64807: [[1588, 1582], 256],
          64808: [[1588, 1605], 256],
          64809: [[1588, 1585], 256],
          64810: [[1587, 1585], 256],
          64811: [[1589, 1585], 256],
          64812: [[1590, 1585], 256],
          64813: [[1588, 1580], 256],
          64814: [[1588, 1581], 256],
          64815: [[1588, 1582], 256],
          64816: [[1588, 1605], 256],
          64817: [[1587, 1607], 256],
          64818: [[1588, 1607], 256],
          64819: [[1591, 1605], 256],
          64820: [[1587, 1580], 256],
          64821: [[1587, 1581], 256],
          64822: [[1587, 1582], 256],
          64823: [[1588, 1580], 256],
          64824: [[1588, 1581], 256],
          64825: [[1588, 1582], 256],
          64826: [[1591, 1605], 256],
          64827: [[1592, 1605], 256],
          64828: [[1575, 1611], 256],
          64829: [[1575, 1611], 256],
          64848: [[1578, 1580, 1605], 256],
          64849: [[1578, 1581, 1580], 256],
          64850: [[1578, 1581, 1580], 256],
          64851: [[1578, 1581, 1605], 256],
          64852: [[1578, 1582, 1605], 256],
          64853: [[1578, 1605, 1580], 256],
          64854: [[1578, 1605, 1581], 256],
          64855: [[1578, 1605, 1582], 256],
          64856: [[1580, 1605, 1581], 256],
          64857: [[1580, 1605, 1581], 256],
          64858: [[1581, 1605, 1610], 256],
          64859: [[1581, 1605, 1609], 256],
          64860: [[1587, 1581, 1580], 256],
          64861: [[1587, 1580, 1581], 256],
          64862: [[1587, 1580, 1609], 256],
          64863: [[1587, 1605, 1581], 256],
          64864: [[1587, 1605, 1581], 256],
          64865: [[1587, 1605, 1580], 256],
          64866: [[1587, 1605, 1605], 256],
          64867: [[1587, 1605, 1605], 256],
          64868: [[1589, 1581, 1581], 256],
          64869: [[1589, 1581, 1581], 256],
          64870: [[1589, 1605, 1605], 256],
          64871: [[1588, 1581, 1605], 256],
          64872: [[1588, 1581, 1605], 256],
          64873: [[1588, 1580, 1610], 256],
          64874: [[1588, 1605, 1582], 256],
          64875: [[1588, 1605, 1582], 256],
          64876: [[1588, 1605, 1605], 256],
          64877: [[1588, 1605, 1605], 256],
          64878: [[1590, 1581, 1609], 256],
          64879: [[1590, 1582, 1605], 256],
          64880: [[1590, 1582, 1605], 256],
          64881: [[1591, 1605, 1581], 256],
          64882: [[1591, 1605, 1581], 256],
          64883: [[1591, 1605, 1605], 256],
          64884: [[1591, 1605, 1610], 256],
          64885: [[1593, 1580, 1605], 256],
          64886: [[1593, 1605, 1605], 256],
          64887: [[1593, 1605, 1605], 256],
          64888: [[1593, 1605, 1609], 256],
          64889: [[1594, 1605, 1605], 256],
          64890: [[1594, 1605, 1610], 256],
          64891: [[1594, 1605, 1609], 256],
          64892: [[1601, 1582, 1605], 256],
          64893: [[1601, 1582, 1605], 256],
          64894: [[1602, 1605, 1581], 256],
          64895: [[1602, 1605, 1605], 256],
          64896: [[1604, 1581, 1605], 256],
          64897: [[1604, 1581, 1610], 256],
          64898: [[1604, 1581, 1609], 256],
          64899: [[1604, 1580, 1580], 256],
          64900: [[1604, 1580, 1580], 256],
          64901: [[1604, 1582, 1605], 256],
          64902: [[1604, 1582, 1605], 256],
          64903: [[1604, 1605, 1581], 256],
          64904: [[1604, 1605, 1581], 256],
          64905: [[1605, 1581, 1580], 256],
          64906: [[1605, 1581, 1605], 256],
          64907: [[1605, 1581, 1610], 256],
          64908: [[1605, 1580, 1581], 256],
          64909: [[1605, 1580, 1605], 256],
          64910: [[1605, 1582, 1580], 256],
          64911: [[1605, 1582, 1605], 256],
          64914: [[1605, 1580, 1582], 256],
          64915: [[1607, 1605, 1580], 256],
          64916: [[1607, 1605, 1605], 256],
          64917: [[1606, 1581, 1605], 256],
          64918: [[1606, 1581, 1609], 256],
          64919: [[1606, 1580, 1605], 256],
          64920: [[1606, 1580, 1605], 256],
          64921: [[1606, 1580, 1609], 256],
          64922: [[1606, 1605, 1610], 256],
          64923: [[1606, 1605, 1609], 256],
          64924: [[1610, 1605, 1605], 256],
          64925: [[1610, 1605, 1605], 256],
          64926: [[1576, 1582, 1610], 256],
          64927: [[1578, 1580, 1610], 256],
          64928: [[1578, 1580, 1609], 256],
          64929: [[1578, 1582, 1610], 256],
          64930: [[1578, 1582, 1609], 256],
          64931: [[1578, 1605, 1610], 256],
          64932: [[1578, 1605, 1609], 256],
          64933: [[1580, 1605, 1610], 256],
          64934: [[1580, 1581, 1609], 256],
          64935: [[1580, 1605, 1609], 256],
          64936: [[1587, 1582, 1609], 256],
          64937: [[1589, 1581, 1610], 256],
          64938: [[1588, 1581, 1610], 256],
          64939: [[1590, 1581, 1610], 256],
          64940: [[1604, 1580, 1610], 256],
          64941: [[1604, 1605, 1610], 256],
          64942: [[1610, 1581, 1610], 256],
          64943: [[1610, 1580, 1610], 256],
          64944: [[1610, 1605, 1610], 256],
          64945: [[1605, 1605, 1610], 256],
          64946: [[1602, 1605, 1610], 256],
          64947: [[1606, 1581, 1610], 256],
          64948: [[1602, 1605, 1581], 256],
          64949: [[1604, 1581, 1605], 256],
          64950: [[1593, 1605, 1610], 256],
          64951: [[1603, 1605, 1610], 256],
          64952: [[1606, 1580, 1581], 256],
          64953: [[1605, 1582, 1610], 256],
          64954: [[1604, 1580, 1605], 256],
          64955: [[1603, 1605, 1605], 256],
          64956: [[1604, 1580, 1605], 256],
          64957: [[1606, 1580, 1581], 256],
          64958: [[1580, 1581, 1610], 256],
          64959: [[1581, 1580, 1610], 256],
          64960: [[1605, 1580, 1610], 256],
          64961: [[1601, 1605, 1610], 256],
          64962: [[1576, 1581, 1610], 256],
          64963: [[1603, 1605, 1605], 256],
          64964: [[1593, 1580, 1605], 256],
          64965: [[1589, 1605, 1605], 256],
          64966: [[1587, 1582, 1610], 256],
          64967: [[1606, 1580, 1610], 256],
          65008: [[1589, 1604, 1746], 256],
          65009: [[1602, 1604, 1746], 256],
          65010: [[1575, 1604, 1604, 1607], 256],
          65011: [[1575, 1603, 1576, 1585], 256],
          65012: [[1605, 1581, 1605, 1583], 256],
          65013: [[1589, 1604, 1593, 1605], 256],
          65014: [[1585, 1587, 1608, 1604], 256],
          65015: [[1593, 1604, 1610, 1607], 256],
          65016: [[1608, 1587, 1604, 1605], 256],
          65017: [[1589, 1604, 1609], 256],
          65018: [
            [
              1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604,
              1610, 1607, 32, 1608, 1587, 1604, 1605,
            ],
            256,
          ],
          65019: [[1580, 1604, 32, 1580, 1604, 1575, 1604, 1607], 256],
          65020: [[1585, 1740, 1575, 1604], 256],
        },
        65024: {
          65040: [[44], 256],
          65041: [[12289], 256],
          65042: [[12290], 256],
          65043: [[58], 256],
          65044: [[59], 256],
          65045: [[33], 256],
          65046: [[63], 256],
          65047: [[12310], 256],
          65048: [[12311], 256],
          65049: [[8230], 256],
          65056: [, 230],
          65057: [, 230],
          65058: [, 230],
          65059: [, 230],
          65060: [, 230],
          65061: [, 230],
          65062: [, 230],
          65063: [, 220],
          65064: [, 220],
          65065: [, 220],
          65066: [, 220],
          65067: [, 220],
          65068: [, 220],
          65069: [, 220],
          65072: [[8229], 256],
          65073: [[8212], 256],
          65074: [[8211], 256],
          65075: [[95], 256],
          65076: [[95], 256],
          65077: [[40], 256],
          65078: [[41], 256],
          65079: [[123], 256],
          65080: [[125], 256],
          65081: [[12308], 256],
          65082: [[12309], 256],
          65083: [[12304], 256],
          65084: [[12305], 256],
          65085: [[12298], 256],
          65086: [[12299], 256],
          65087: [[12296], 256],
          65088: [[12297], 256],
          65089: [[12300], 256],
          65090: [[12301], 256],
          65091: [[12302], 256],
          65092: [[12303], 256],
          65095: [[91], 256],
          65096: [[93], 256],
          65097: [[8254], 256],
          65098: [[8254], 256],
          65099: [[8254], 256],
          65100: [[8254], 256],
          65101: [[95], 256],
          65102: [[95], 256],
          65103: [[95], 256],
          65104: [[44], 256],
          65105: [[12289], 256],
          65106: [[46], 256],
          65108: [[59], 256],
          65109: [[58], 256],
          65110: [[63], 256],
          65111: [[33], 256],
          65112: [[8212], 256],
          65113: [[40], 256],
          65114: [[41], 256],
          65115: [[123], 256],
          65116: [[125], 256],
          65117: [[12308], 256],
          65118: [[12309], 256],
          65119: [[35], 256],
          65120: [[38], 256],
          65121: [[42], 256],
          65122: [[43], 256],
          65123: [[45], 256],
          65124: [[60], 256],
          65125: [[62], 256],
          65126: [[61], 256],
          65128: [[92], 256],
          65129: [[36], 256],
          65130: [[37], 256],
          65131: [[64], 256],
          65136: [[32, 1611], 256],
          65137: [[1600, 1611], 256],
          65138: [[32, 1612], 256],
          65140: [[32, 1613], 256],
          65142: [[32, 1614], 256],
          65143: [[1600, 1614], 256],
          65144: [[32, 1615], 256],
          65145: [[1600, 1615], 256],
          65146: [[32, 1616], 256],
          65147: [[1600, 1616], 256],
          65148: [[32, 1617], 256],
          65149: [[1600, 1617], 256],
          65150: [[32, 1618], 256],
          65151: [[1600, 1618], 256],
          65152: [[1569], 256],
          65153: [[1570], 256],
          65154: [[1570], 256],
          65155: [[1571], 256],
          65156: [[1571], 256],
          65157: [[1572], 256],
          65158: [[1572], 256],
          65159: [[1573], 256],
          65160: [[1573], 256],
          65161: [[1574], 256],
          65162: [[1574], 256],
          65163: [[1574], 256],
          65164: [[1574], 256],
          65165: [[1575], 256],
          65166: [[1575], 256],
          65167: [[1576], 256],
          65168: [[1576], 256],
          65169: [[1576], 256],
          65170: [[1576], 256],
          65171: [[1577], 256],
          65172: [[1577], 256],
          65173: [[1578], 256],
          65174: [[1578], 256],
          65175: [[1578], 256],
          65176: [[1578], 256],
          65177: [[1579], 256],
          65178: [[1579], 256],
          65179: [[1579], 256],
          65180: [[1579], 256],
          65181: [[1580], 256],
          65182: [[1580], 256],
          65183: [[1580], 256],
          65184: [[1580], 256],
          65185: [[1581], 256],
          65186: [[1581], 256],
          65187: [[1581], 256],
          65188: [[1581], 256],
          65189: [[1582], 256],
          65190: [[1582], 256],
          65191: [[1582], 256],
          65192: [[1582], 256],
          65193: [[1583], 256],
          65194: [[1583], 256],
          65195: [[1584], 256],
          65196: [[1584], 256],
          65197: [[1585], 256],
          65198: [[1585], 256],
          65199: [[1586], 256],
          65200: [[1586], 256],
          65201: [[1587], 256],
          65202: [[1587], 256],
          65203: [[1587], 256],
          65204: [[1587], 256],
          65205: [[1588], 256],
          65206: [[1588], 256],
          65207: [[1588], 256],
          65208: [[1588], 256],
          65209: [[1589], 256],
          65210: [[1589], 256],
          65211: [[1589], 256],
          65212: [[1589], 256],
          65213: [[1590], 256],
          65214: [[1590], 256],
          65215: [[1590], 256],
          65216: [[1590], 256],
          65217: [[1591], 256],
          65218: [[1591], 256],
          65219: [[1591], 256],
          65220: [[1591], 256],
          65221: [[1592], 256],
          65222: [[1592], 256],
          65223: [[1592], 256],
          65224: [[1592], 256],
          65225: [[1593], 256],
          65226: [[1593], 256],
          65227: [[1593], 256],
          65228: [[1593], 256],
          65229: [[1594], 256],
          65230: [[1594], 256],
          65231: [[1594], 256],
          65232: [[1594], 256],
          65233: [[1601], 256],
          65234: [[1601], 256],
          65235: [[1601], 256],
          65236: [[1601], 256],
          65237: [[1602], 256],
          65238: [[1602], 256],
          65239: [[1602], 256],
          65240: [[1602], 256],
          65241: [[1603], 256],
          65242: [[1603], 256],
          65243: [[1603], 256],
          65244: [[1603], 256],
          65245: [[1604], 256],
          65246: [[1604], 256],
          65247: [[1604], 256],
          65248: [[1604], 256],
          65249: [[1605], 256],
          65250: [[1605], 256],
          65251: [[1605], 256],
          65252: [[1605], 256],
          65253: [[1606], 256],
          65254: [[1606], 256],
          65255: [[1606], 256],
          65256: [[1606], 256],
          65257: [[1607], 256],
          65258: [[1607], 256],
          65259: [[1607], 256],
          65260: [[1607], 256],
          65261: [[1608], 256],
          65262: [[1608], 256],
          65263: [[1609], 256],
          65264: [[1609], 256],
          65265: [[1610], 256],
          65266: [[1610], 256],
          65267: [[1610], 256],
          65268: [[1610], 256],
          65269: [[1604, 1570], 256],
          65270: [[1604, 1570], 256],
          65271: [[1604, 1571], 256],
          65272: [[1604, 1571], 256],
          65273: [[1604, 1573], 256],
          65274: [[1604, 1573], 256],
          65275: [[1604, 1575], 256],
          65276: [[1604, 1575], 256],
        },
        65280: {
          65281: [[33], 256],
          65282: [[34], 256],
          65283: [[35], 256],
          65284: [[36], 256],
          65285: [[37], 256],
          65286: [[38], 256],
          65287: [[39], 256],
          65288: [[40], 256],
          65289: [[41], 256],
          65290: [[42], 256],
          65291: [[43], 256],
          65292: [[44], 256],
          65293: [[45], 256],
          65294: [[46], 256],
          65295: [[47], 256],
          65296: [[48], 256],
          65297: [[49], 256],
          65298: [[50], 256],
          65299: [[51], 256],
          65300: [[52], 256],
          65301: [[53], 256],
          65302: [[54], 256],
          65303: [[55], 256],
          65304: [[56], 256],
          65305: [[57], 256],
          65306: [[58], 256],
          65307: [[59], 256],
          65308: [[60], 256],
          65309: [[61], 256],
          65310: [[62], 256],
          65311: [[63], 256],
          65312: [[64], 256],
          65313: [[65], 256],
          65314: [[66], 256],
          65315: [[67], 256],
          65316: [[68], 256],
          65317: [[69], 256],
          65318: [[70], 256],
          65319: [[71], 256],
          65320: [[72], 256],
          65321: [[73], 256],
          65322: [[74], 256],
          65323: [[75], 256],
          65324: [[76], 256],
          65325: [[77], 256],
          65326: [[78], 256],
          65327: [[79], 256],
          65328: [[80], 256],
          65329: [[81], 256],
          65330: [[82], 256],
          65331: [[83], 256],
          65332: [[84], 256],
          65333: [[85], 256],
          65334: [[86], 256],
          65335: [[87], 256],
          65336: [[88], 256],
          65337: [[89], 256],
          65338: [[90], 256],
          65339: [[91], 256],
          65340: [[92], 256],
          65341: [[93], 256],
          65342: [[94], 256],
          65343: [[95], 256],
          65344: [[96], 256],
          65345: [[97], 256],
          65346: [[98], 256],
          65347: [[99], 256],
          65348: [[100], 256],
          65349: [[101], 256],
          65350: [[102], 256],
          65351: [[103], 256],
          65352: [[104], 256],
          65353: [[105], 256],
          65354: [[106], 256],
          65355: [[107], 256],
          65356: [[108], 256],
          65357: [[109], 256],
          65358: [[110], 256],
          65359: [[111], 256],
          65360: [[112], 256],
          65361: [[113], 256],
          65362: [[114], 256],
          65363: [[115], 256],
          65364: [[116], 256],
          65365: [[117], 256],
          65366: [[118], 256],
          65367: [[119], 256],
          65368: [[120], 256],
          65369: [[121], 256],
          65370: [[122], 256],
          65371: [[123], 256],
          65372: [[124], 256],
          65373: [[125], 256],
          65374: [[126], 256],
          65375: [[10629], 256],
          65376: [[10630], 256],
          65377: [[12290], 256],
          65378: [[12300], 256],
          65379: [[12301], 256],
          65380: [[12289], 256],
          65381: [[12539], 256],
          65382: [[12530], 256],
          65383: [[12449], 256],
          65384: [[12451], 256],
          65385: [[12453], 256],
          65386: [[12455], 256],
          65387: [[12457], 256],
          65388: [[12515], 256],
          65389: [[12517], 256],
          65390: [[12519], 256],
          65391: [[12483], 256],
          65392: [[12540], 256],
          65393: [[12450], 256],
          65394: [[12452], 256],
          65395: [[12454], 256],
          65396: [[12456], 256],
          65397: [[12458], 256],
          65398: [[12459], 256],
          65399: [[12461], 256],
          65400: [[12463], 256],
          65401: [[12465], 256],
          65402: [[12467], 256],
          65403: [[12469], 256],
          65404: [[12471], 256],
          65405: [[12473], 256],
          65406: [[12475], 256],
          65407: [[12477], 256],
          65408: [[12479], 256],
          65409: [[12481], 256],
          65410: [[12484], 256],
          65411: [[12486], 256],
          65412: [[12488], 256],
          65413: [[12490], 256],
          65414: [[12491], 256],
          65415: [[12492], 256],
          65416: [[12493], 256],
          65417: [[12494], 256],
          65418: [[12495], 256],
          65419: [[12498], 256],
          65420: [[12501], 256],
          65421: [[12504], 256],
          65422: [[12507], 256],
          65423: [[12510], 256],
          65424: [[12511], 256],
          65425: [[12512], 256],
          65426: [[12513], 256],
          65427: [[12514], 256],
          65428: [[12516], 256],
          65429: [[12518], 256],
          65430: [[12520], 256],
          65431: [[12521], 256],
          65432: [[12522], 256],
          65433: [[12523], 256],
          65434: [[12524], 256],
          65435: [[12525], 256],
          65436: [[12527], 256],
          65437: [[12531], 256],
          65438: [[12441], 256],
          65439: [[12442], 256],
          65440: [[12644], 256],
          65441: [[12593], 256],
          65442: [[12594], 256],
          65443: [[12595], 256],
          65444: [[12596], 256],
          65445: [[12597], 256],
          65446: [[12598], 256],
          65447: [[12599], 256],
          65448: [[12600], 256],
          65449: [[12601], 256],
          65450: [[12602], 256],
          65451: [[12603], 256],
          65452: [[12604], 256],
          65453: [[12605], 256],
          65454: [[12606], 256],
          65455: [[12607], 256],
          65456: [[12608], 256],
          65457: [[12609], 256],
          65458: [[12610], 256],
          65459: [[12611], 256],
          65460: [[12612], 256],
          65461: [[12613], 256],
          65462: [[12614], 256],
          65463: [[12615], 256],
          65464: [[12616], 256],
          65465: [[12617], 256],
          65466: [[12618], 256],
          65467: [[12619], 256],
          65468: [[12620], 256],
          65469: [[12621], 256],
          65470: [[12622], 256],
          65474: [[12623], 256],
          65475: [[12624], 256],
          65476: [[12625], 256],
          65477: [[12626], 256],
          65478: [[12627], 256],
          65479: [[12628], 256],
          65482: [[12629], 256],
          65483: [[12630], 256],
          65484: [[12631], 256],
          65485: [[12632], 256],
          65486: [[12633], 256],
          65487: [[12634], 256],
          65490: [[12635], 256],
          65491: [[12636], 256],
          65492: [[12637], 256],
          65493: [[12638], 256],
          65494: [[12639], 256],
          65495: [[12640], 256],
          65498: [[12641], 256],
          65499: [[12642], 256],
          65500: [[12643], 256],
          65504: [[162], 256],
          65505: [[163], 256],
          65506: [[172], 256],
          65507: [[175], 256],
          65508: [[166], 256],
          65509: [[165], 256],
          65510: [[8361], 256],
          65512: [[9474], 256],
          65513: [[8592], 256],
          65514: [[8593], 256],
          65515: [[8594], 256],
          65516: [[8595], 256],
          65517: [[9632], 256],
          65518: [[9675], 256],
        },
      };
      var k = {
        nfc: function (e) {
          return S("NFC", e);
        },
        nfd: function (e) {
          return S("NFD", e);
        },
        nfkc: function (e) {
          return S("NFKC", e);
        },
        nfkd: function (e) {
          return S("NFKD", e);
        },
      };
      (e.exports = k),
        (k.shimApplied = !1),
        String.prototype.normalize ||
          ((String.prototype.normalize = function (e) {
            var t = "" + this;
            if ("NFC" === (e = void 0 === e ? "NFC" : e)) return k.nfc(t);
            if ("NFD" === e) return k.nfd(t);
            if ("NFKC" === e) return k.nfkc(t);
            if ("NFKD" === e) return k.nfkd(t);
            throw new RangeError("Invalid normalization form: " + e);
          }),
          (k.shimApplied = !0));
    })();
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var i = r(84);
      e.exports = function (e, r, n, a) {
        if (a > 64 * (Math.pow(2, 32) - 1))
          throw Error("Requested key length too long");
        if ("string" != typeof e && !t.isBuffer(e))
          throw new TypeError("key must a string or Buffer");
        if ("string" != typeof r && !t.isBuffer(r))
          throw new TypeError("salt must a string or Buffer");
        "string" == typeof e && (e = t.from(e)),
          "string" == typeof r && (r = t.from(r));
        var o = t.alloc(a),
          s = t.alloc(64),
          c = t.alloc(64),
          f = t.alloc(r.length + 4),
          u = Math.ceil(a / 64),
          d = a - 64 * (u - 1);
        r.copy(f, 0, 0, r.length);
        for (var l = 1; l <= u; l++) {
          (f[r.length + 0] = (l >> 24) & 255),
            (f[r.length + 1] = (l >> 16) & 255),
            (f[r.length + 2] = (l >> 8) & 255),
            (f[r.length + 3] = (l >> 0) & 255),
            (s = i.createHmac("sha512", e).update(f).digest()).copy(
              c,
              0,
              0,
              64
            );
          for (var h = 1; h < n; h++) {
            s = i.createHmac("sha512", e).update(s).digest();
            for (var p = 0; p < 64; p++) c[p] ^= s[p];
          }
          var b = 64 * (l - 1),
            m = l === u ? d : 64;
          c.copy(o, b, 0, m);
        }
        return o;
      };
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    "use strict";
    (t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(11)),
      (t.createHash = t.Hash = r(13)),
      (t.createHmac = t.Hmac = r(48));
    var i = r(103),
      n = Object.keys(i),
      a = [
        "sha1",
        "sha224",
        "sha256",
        "sha384",
        "sha512",
        "md5",
        "rmd160",
      ].concat(n);
    t.getHashes = function () {
      return a;
    };
    var o = r(51);
    (t.pbkdf2 = o.pbkdf2), (t.pbkdf2Sync = o.pbkdf2Sync);
    var s = r(105);
    (t.Cipher = s.Cipher),
      (t.createCipher = s.createCipher),
      (t.Cipheriv = s.Cipheriv),
      (t.createCipheriv = s.createCipheriv),
      (t.Decipher = s.Decipher),
      (t.createDecipher = s.createDecipher),
      (t.Decipheriv = s.Decipheriv),
      (t.createDecipheriv = s.createDecipheriv),
      (t.getCiphers = s.getCiphers),
      (t.listCiphers = s.listCiphers);
    var c = r(121);
    (t.DiffieHellmanGroup = c.DiffieHellmanGroup),
      (t.createDiffieHellmanGroup = c.createDiffieHellmanGroup),
      (t.getDiffieHellman = c.getDiffieHellman),
      (t.createDiffieHellman = c.createDiffieHellman),
      (t.DiffieHellman = c.DiffieHellman);
    var f = r(127);
    (t.createSign = f.createSign),
      (t.Sign = f.Sign),
      (t.createVerify = f.createVerify),
      (t.Verify = f.Verify),
      (t.createECDH = r(164));
    var u = r(165);
    (t.publicEncrypt = u.publicEncrypt),
      (t.privateEncrypt = u.privateEncrypt),
      (t.publicDecrypt = u.publicDecrypt),
      (t.privateDecrypt = u.privateDecrypt);
    var d = r(168);
    (t.randomFill = d.randomFill),
      (t.randomFillSync = d.randomFillSync),
      (t.createCredentials = function () {
        throw new Error(
          [
            "sorry, createCredentials is not implemented yet",
            "we accept pull requests",
            "https://github.com/crypto-browserify/crypto-browserify",
          ].join("\n")
        );
      }),
      (t.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6,
      });
  },
  function (e, t) {},
  function (e, t, r) {
    "use strict";
    var i = r(30).Buffer,
      n = r(87);
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, r = "" + t.data; (t = t.next); )
            r += e + t.data;
          return r;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return i.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var t, r, n, a = i.allocUnsafe(e >>> 0), o = this.head, s = 0;
            o;

          )
            (t = o.data),
              (r = a),
              (n = s),
              t.copy(r, n),
              (s += o.data.length),
              (o = o.next);
          return a;
        }),
        e
      );
    })()),
      n &&
        n.inspect &&
        n.inspect.custom &&
        (e.exports.prototype[n.inspect.custom] = function () {
          var e = n.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        });
  },
  function (e, t) {},
  function (e, t, r) {
    (function (e) {
      var i =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        n = Function.prototype.apply;
      function a(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new a(n.call(setTimeout, i, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new a(n.call(setInterval, i, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (a.prototype.unref = a.prototype.ref = function () {}),
        (a.prototype.close = function () {
          this._clearFn.call(i, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        r(89),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }).call(this, r(7));
  },
  function (e, t, r) {
    (function (e, t) {
      !(function (e, r) {
        "use strict";
        if (!e.setImmediate) {
          var i,
            n,
            a,
            o,
            s,
            c = 1,
            f = {},
            u = !1,
            d = e.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (l = l && l.setTimeout ? l : e),
            "[object process]" === {}.toString.call(e.process)
              ? (i = function (e) {
                  t.nextTick(function () {
                    p(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      r = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = r),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((a = new MessageChannel()).port1.onmessage = function (e) {
                    p(e.data);
                  }),
                  (i = function (e) {
                    a.port2.postMessage(e);
                  }))
                : d && "onreadystatechange" in d.createElement("script")
                ? ((n = d.documentElement),
                  (i = function (e) {
                    var t = d.createElement("script");
                    (t.onreadystatechange = function () {
                      p(e),
                        (t.onreadystatechange = null),
                        n.removeChild(t),
                        (t = null);
                    }),
                      n.appendChild(t);
                  }))
                : (i = function (e) {
                    setTimeout(p, 0, e);
                  })
              : ((o = "setImmediate$" + Math.random() + "$"),
                (s = function (t) {
                  t.source === e &&
                    "string" == typeof t.data &&
                    0 === t.data.indexOf(o) &&
                    p(+t.data.slice(o.length));
                }),
                e.addEventListener
                  ? e.addEventListener("message", s, !1)
                  : e.attachEvent("onmessage", s),
                (i = function (t) {
                  e.postMessage(o + t, "*");
                })),
            (l.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), r = 0;
                r < t.length;
                r++
              )
                t[r] = arguments[r + 1];
              var n = { callback: e, args: t };
              return (f[c] = n), i(c), c++;
            }),
            (l.clearImmediate = h);
        }
        function h(e) {
          delete f[e];
        }
        function p(e) {
          if (u) setTimeout(p, 0, e);
          else {
            var t = f[e];
            if (t) {
              u = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    i = e.args;
                  switch (i.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(i[0]);
                      break;
                    case 2:
                      t(i[0], i[1]);
                      break;
                    case 3:
                      t(i[0], i[1], i[2]);
                      break;
                    default:
                      t.apply(r, i);
                  }
                })(t);
              } finally {
                h(e), (u = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }).call(this, r(7), r(8));
  },
  function (e, t, r) {
    (function (t) {
      function r(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var r = t.localStorage[e];
        return null != r && "true" === String(r).toLowerCase();
      }
      e.exports = function (e, t) {
        if (r("noDeprecation")) return e;
        var i = !1;
        return function () {
          if (!i) {
            if (r("throwDeprecation")) throw new Error(t);
            r("traceDeprecation") ? console.trace(t) : console.warn(t),
              (i = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }).call(this, r(7));
  },
  function (e, t, r) {
    var i = r(2),
      n = i.Buffer;
    function a(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return n(e, t, r);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (e.exports = i)
      : (a(i, t), (t.Buffer = o)),
      a(n, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return n(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = n(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? i.fill(t, r)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = a;
    var i = r(45),
      n = r(14);
    function a(e) {
      if (!(this instanceof a)) return new a(e);
      i.call(this, e);
    }
    (n.inherits = r(0)),
      n.inherits(a, i),
      (a.prototype._transform = function (e, t, r) {
        r(null, e);
      });
  },
  function (e, t, r) {
    e.exports = r(31);
  },
  function (e, t, r) {
    e.exports = r(10);
  },
  function (e, t, r) {
    e.exports = r(29).Transform;
  },
  function (e, t, r) {
    e.exports = r(29).PassThrough;
  },
  function (e, t, r) {
    var i = r(2),
      n = i.Buffer;
    function a(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return n(e, t, r);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (e.exports = i)
      : (a(i, t), (t.Buffer = o)),
      a(n, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return n(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = n(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? i.fill(t, r)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    var i = r(0),
      n = r(12),
      a = r(1).Buffer,
      o = [1518500249, 1859775393, -1894007588, -899497514],
      s = new Array(80);
    function c() {
      this.init(), (this._w = s), n.call(this, 64, 56);
    }
    function f(e) {
      return (e << 30) | (e >>> 2);
    }
    function u(e, t, r, i) {
      return 0 === e
        ? (t & r) | (~t & i)
        : 2 === e
        ? (t & r) | (t & i) | (r & i)
        : t ^ r ^ i;
    }
    i(c, n),
      (c.prototype.init = function () {
        return (
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520),
          this
        );
      }),
      (c.prototype._update = function (e) {
        for (
          var t,
            r = this._w,
            i = 0 | this._a,
            n = 0 | this._b,
            a = 0 | this._c,
            s = 0 | this._d,
            c = 0 | this._e,
            d = 0;
          d < 16;
          ++d
        )
          r[d] = e.readInt32BE(4 * d);
        for (; d < 80; ++d) r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
        for (var l = 0; l < 80; ++l) {
          var h = ~~(l / 20),
            p =
              0 |
              ((((t = i) << 5) | (t >>> 27)) + u(h, n, a, s) + c + r[l] + o[h]);
          (c = s), (s = a), (a = f(n)), (n = i), (i = p);
        }
        (this._a = (i + this._a) | 0),
          (this._b = (n + this._b) | 0),
          (this._c = (a + this._c) | 0),
          (this._d = (s + this._d) | 0),
          (this._e = (c + this._e) | 0);
      }),
      (c.prototype._hash = function () {
        var e = a.allocUnsafe(20);
        return (
          e.writeInt32BE(0 | this._a, 0),
          e.writeInt32BE(0 | this._b, 4),
          e.writeInt32BE(0 | this._c, 8),
          e.writeInt32BE(0 | this._d, 12),
          e.writeInt32BE(0 | this._e, 16),
          e
        );
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    var i = r(0),
      n = r(12),
      a = r(1).Buffer,
      o = [1518500249, 1859775393, -1894007588, -899497514],
      s = new Array(80);
    function c() {
      this.init(), (this._w = s), n.call(this, 64, 56);
    }
    function f(e) {
      return (e << 5) | (e >>> 27);
    }
    function u(e) {
      return (e << 30) | (e >>> 2);
    }
    function d(e, t, r, i) {
      return 0 === e
        ? (t & r) | (~t & i)
        : 2 === e
        ? (t & r) | (t & i) | (r & i)
        : t ^ r ^ i;
    }
    i(c, n),
      (c.prototype.init = function () {
        return (
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520),
          this
        );
      }),
      (c.prototype._update = function (e) {
        for (
          var t,
            r = this._w,
            i = 0 | this._a,
            n = 0 | this._b,
            a = 0 | this._c,
            s = 0 | this._d,
            c = 0 | this._e,
            l = 0;
          l < 16;
          ++l
        )
          r[l] = e.readInt32BE(4 * l);
        for (; l < 80; ++l)
          r[l] =
            ((t = r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16]) << 1) |
            (t >>> 31);
        for (var h = 0; h < 80; ++h) {
          var p = ~~(h / 20),
            b = (f(i) + d(p, n, a, s) + c + r[h] + o[p]) | 0;
          (c = s), (s = a), (a = u(n)), (n = i), (i = b);
        }
        (this._a = (i + this._a) | 0),
          (this._b = (n + this._b) | 0),
          (this._c = (a + this._c) | 0),
          (this._d = (s + this._d) | 0),
          (this._e = (c + this._e) | 0);
      }),
      (c.prototype._hash = function () {
        var e = a.allocUnsafe(20);
        return (
          e.writeInt32BE(0 | this._a, 0),
          e.writeInt32BE(0 | this._b, 4),
          e.writeInt32BE(0 | this._c, 8),
          e.writeInt32BE(0 | this._d, 12),
          e.writeInt32BE(0 | this._e, 16),
          e
        );
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    var i = r(0),
      n = r(46),
      a = r(12),
      o = r(1).Buffer,
      s = new Array(64);
    function c() {
      this.init(), (this._w = s), a.call(this, 64, 56);
    }
    i(c, n),
      (c.prototype.init = function () {
        return (
          (this._a = 3238371032),
          (this._b = 914150663),
          (this._c = 812702999),
          (this._d = 4144912697),
          (this._e = 4290775857),
          (this._f = 1750603025),
          (this._g = 1694076839),
          (this._h = 3204075428),
          this
        );
      }),
      (c.prototype._hash = function () {
        var e = o.allocUnsafe(28);
        return (
          e.writeInt32BE(this._a, 0),
          e.writeInt32BE(this._b, 4),
          e.writeInt32BE(this._c, 8),
          e.writeInt32BE(this._d, 12),
          e.writeInt32BE(this._e, 16),
          e.writeInt32BE(this._f, 20),
          e.writeInt32BE(this._g, 24),
          e
        );
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    var i = r(0),
      n = r(47),
      a = r(12),
      o = r(1).Buffer,
      s = new Array(160);
    function c() {
      this.init(), (this._w = s), a.call(this, 128, 112);
    }
    i(c, n),
      (c.prototype.init = function () {
        return (
          (this._ah = 3418070365),
          (this._bh = 1654270250),
          (this._ch = 2438529370),
          (this._dh = 355462360),
          (this._eh = 1731405415),
          (this._fh = 2394180231),
          (this._gh = 3675008525),
          (this._hh = 1203062813),
          (this._al = 3238371032),
          (this._bl = 914150663),
          (this._cl = 812702999),
          (this._dl = 4144912697),
          (this._el = 4290775857),
          (this._fl = 1750603025),
          (this._gl = 1694076839),
          (this._hl = 3204075428),
          this
        );
      }),
      (c.prototype._hash = function () {
        var e = o.allocUnsafe(48);
        function t(t, r, i) {
          e.writeInt32BE(t, i), e.writeInt32BE(r, i + 4);
        }
        return (
          t(this._ah, this._al, 0),
          t(this._bh, this._bl, 8),
          t(this._ch, this._cl, 16),
          t(this._dh, this._dl, 24),
          t(this._eh, this._el, 32),
          t(this._fh, this._fl, 40),
          e
        );
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    "use strict";
    var i = r(0),
      n = r(1).Buffer,
      a = r(9),
      o = n.alloc(128),
      s = 64;
    function c(e, t) {
      a.call(this, "digest"),
        "string" == typeof t && (t = n.from(t)),
        (this._alg = e),
        (this._key = t),
        t.length > s ? (t = e(t)) : t.length < s && (t = n.concat([t, o], s));
      for (
        var r = (this._ipad = n.allocUnsafe(s)),
          i = (this._opad = n.allocUnsafe(s)),
          c = 0;
        c < s;
        c++
      )
        (r[c] = 54 ^ t[c]), (i[c] = 92 ^ t[c]);
      this._hash = [r];
    }
    i(c, a),
      (c.prototype._update = function (e) {
        this._hash.push(e);
      }),
      (c.prototype._final = function () {
        var e = this._alg(n.concat(this._hash));
        return this._alg(n.concat([this._opad, e]));
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    e.exports = r(50);
  },
  function (e, t, r) {
    (function (t, i) {
      var n,
        a = r(52),
        o = r(53),
        s = r(54),
        c = r(1).Buffer,
        f = t.crypto && t.crypto.subtle,
        u = {
          sha: "SHA-1",
          "sha-1": "SHA-1",
          sha1: "SHA-1",
          sha256: "SHA-256",
          "sha-256": "SHA-256",
          sha384: "SHA-384",
          "sha-384": "SHA-384",
          "sha-512": "SHA-512",
          sha512: "SHA-512",
        },
        d = [];
      function l(e, t, r, i, n) {
        return f
          .importKey("raw", e, { name: "PBKDF2" }, !1, ["deriveBits"])
          .then(function (e) {
            return f.deriveBits(
              { name: "PBKDF2", salt: t, iterations: r, hash: { name: n } },
              e,
              i << 3
            );
          })
          .then(function (e) {
            return c.from(e);
          });
      }
      e.exports = function (e, r, h, p, b, m) {
        "function" == typeof b && ((m = b), (b = void 0));
        var g = u[(b = b || "sha1").toLowerCase()];
        if (!g || "function" != typeof t.Promise)
          return i.nextTick(function () {
            var t;
            try {
              t = s(e, r, h, p, b);
            } catch (e) {
              return m(e);
            }
            m(null, t);
          });
        if ((a(e, r, h, p), "function" != typeof m))
          throw new Error("No callback provided to pbkdf2");
        c.isBuffer(e) || (e = c.from(e, o)),
          c.isBuffer(r) || (r = c.from(r, o)),
          (function (e, t) {
            e.then(
              function (e) {
                i.nextTick(function () {
                  t(null, e);
                });
              },
              function (e) {
                i.nextTick(function () {
                  t(e);
                });
              }
            );
          })(
            (function (e) {
              if (t.process && !t.process.browser) return Promise.resolve(!1);
              if (!f || !f.importKey || !f.deriveBits)
                return Promise.resolve(!1);
              if (void 0 !== d[e]) return d[e];
              var r = l((n = n || c.alloc(8)), n, 10, 128, e)
                .then(function () {
                  return !0;
                })
                .catch(function () {
                  return !1;
                });
              return (d[e] = r), r;
            })(g).then(function (t) {
              return t ? l(e, r, h, p, g) : s(e, r, h, p, b);
            }),
            m
          );
      };
    }).call(this, r(7), r(8));
  },
  function (e, t, r) {
    var i = r(106),
      n = r(36),
      a = r(37),
      o = r(120),
      s = r(21);
    function c(e, t, r) {
      if (((e = e.toLowerCase()), a[e])) return n.createCipheriv(e, t, r);
      if (o[e]) return new i({ key: t, iv: r, mode: e });
      throw new TypeError("invalid suite type");
    }
    function f(e, t, r) {
      if (((e = e.toLowerCase()), a[e])) return n.createDecipheriv(e, t, r);
      if (o[e]) return new i({ key: t, iv: r, mode: e, decrypt: !0 });
      throw new TypeError("invalid suite type");
    }
    (t.createCipher = t.Cipher =
      function (e, t) {
        var r, i;
        if (((e = e.toLowerCase()), a[e])) (r = a[e].key), (i = a[e].iv);
        else {
          if (!o[e]) throw new TypeError("invalid suite type");
          (r = 8 * o[e].key), (i = o[e].iv);
        }
        var n = s(t, !1, r, i);
        return c(e, n.key, n.iv);
      }),
      (t.createCipheriv = t.Cipheriv = c),
      (t.createDecipher = t.Decipher =
        function (e, t) {
          var r, i;
          if (((e = e.toLowerCase()), a[e])) (r = a[e].key), (i = a[e].iv);
          else {
            if (!o[e]) throw new TypeError("invalid suite type");
            (r = 8 * o[e].key), (i = o[e].iv);
          }
          var n = s(t, !1, r, i);
          return f(e, n.key, n.iv);
        }),
      (t.createDecipheriv = t.Decipheriv = f),
      (t.listCiphers = t.getCiphers =
        function () {
          return Object.keys(o).concat(n.getCiphers());
        });
  },
  function (e, t, r) {
    var i = r(9),
      n = r(107),
      a = r(0),
      o = r(110).Buffer,
      s = {
        "des-ede3-cbc": n.CBC.instantiate(n.EDE),
        "des-ede3": n.EDE,
        "des-ede-cbc": n.CBC.instantiate(n.EDE),
        "des-ede": n.EDE,
        "des-cbc": n.CBC.instantiate(n.DES),
        "des-ecb": n.DES,
      };
    function c(e) {
      i.call(this);
      var t,
        r = e.mode.toLowerCase(),
        n = s[r];
      t = e.decrypt ? "decrypt" : "encrypt";
      var a = e.key;
      o.isBuffer(a) || (a = o.from(a)),
        ("des-ede" !== r && "des-ede-cbc" !== r) ||
          (a = o.concat([a, a.slice(0, 8)]));
      var c = e.iv;
      o.isBuffer(c) || (c = o.from(c)),
        (this._des = n.create({ key: a, iv: c, type: t }));
    }
    (s.des = s["des-cbc"]),
      (s.des3 = s["des-ede3-cbc"]),
      (e.exports = c),
      a(c, i),
      (c.prototype._update = function (e) {
        return o.from(this._des.update(e));
      }),
      (c.prototype._final = function () {
        return o.from(this._des.final());
      });
  },
  function (e, t, r) {
    "use strict";
    (t.utils = r(55)),
      (t.Cipher = r(35)),
      (t.DES = r(56)),
      (t.CBC = r(108)),
      (t.EDE = r(109));
  },
  function (e, t, r) {
    "use strict";
    var i = r(5),
      n = r(0),
      a = {};
    function o(e) {
      i.equal(e.length, 8, "Invalid IV length"), (this.iv = new Array(8));
      for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t];
    }
    (t.instantiate = function (e) {
      function t(t) {
        e.call(this, t), this._cbcInit();
      }
      n(t, e);
      for (var r = Object.keys(a), i = 0; i < r.length; i++) {
        var o = r[i];
        t.prototype[o] = a[o];
      }
      return (
        (t.create = function (e) {
          return new t(e);
        }),
        t
      );
    }),
      (a._cbcInit = function () {
        var e = new o(this.options.iv);
        this._cbcState = e;
      }),
      (a._update = function (e, t, r, i) {
        var n = this._cbcState,
          a = this.constructor.super_.prototype,
          o = n.iv;
        if ("encrypt" === this.type) {
          for (var s = 0; s < this.blockSize; s++) o[s] ^= e[t + s];
          a._update.call(this, o, 0, r, i);
          for (s = 0; s < this.blockSize; s++) o[s] = r[i + s];
        } else {
          a._update.call(this, e, t, r, i);
          for (s = 0; s < this.blockSize; s++) r[i + s] ^= o[s];
          for (s = 0; s < this.blockSize; s++) o[s] = e[t + s];
        }
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(5),
      n = r(0),
      a = r(35),
      o = r(56);
    function s(e, t) {
      i.equal(t.length, 24, "Invalid key length");
      var r = t.slice(0, 8),
        n = t.slice(8, 16),
        a = t.slice(16, 24);
      this.ciphers =
        "encrypt" === e
          ? [
              o.create({ type: "encrypt", key: r }),
              o.create({ type: "decrypt", key: n }),
              o.create({ type: "encrypt", key: a }),
            ]
          : [
              o.create({ type: "decrypt", key: a }),
              o.create({ type: "encrypt", key: n }),
              o.create({ type: "decrypt", key: r }),
            ];
    }
    function c(e) {
      a.call(this, e);
      var t = new s(this.type, this.options.key);
      this._edeState = t;
    }
    n(c, a),
      (e.exports = c),
      (c.create = function (e) {
        return new c(e);
      }),
      (c.prototype._update = function (e, t, r, i) {
        var n = this._edeState;
        n.ciphers[0]._update(e, t, r, i),
          n.ciphers[1]._update(r, i, r, i),
          n.ciphers[2]._update(r, i, r, i);
      }),
      (c.prototype._pad = o.prototype._pad),
      (c.prototype._unpad = o.prototype._unpad);
  },
  function (e, t, r) {
    var i = r(2),
      n = i.Buffer;
    function a(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function o(e, t, r) {
      return n(e, t, r);
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
      ? (e.exports = i)
      : (a(i, t), (t.Buffer = o)),
      a(n, o),
      (o.from = function (e, t, r) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return n(e, t, r);
      }),
      (o.alloc = function (e, t, r) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = n(e);
        return (
          void 0 !== t
            ? "string" == typeof r
              ? i.fill(t, r)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (o.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return n(e);
      }),
      (o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t, r) {
    var i = r(37),
      n = r(60),
      a = r(1).Buffer,
      o = r(61),
      s = r(9),
      c = r(20),
      f = r(21);
    function u(e, t, r) {
      s.call(this),
        (this._cache = new l()),
        (this._cipher = new c.AES(t)),
        (this._prev = a.from(r)),
        (this._mode = e),
        (this._autopadding = !0);
    }
    r(0)(u, s),
      (u.prototype._update = function (e) {
        var t, r;
        this._cache.add(e);
        for (var i = []; (t = this._cache.get()); )
          (r = this._mode.encrypt(this, t)), i.push(r);
        return a.concat(i);
      });
    var d = a.alloc(16, 16);
    function l() {
      this.cache = a.allocUnsafe(0);
    }
    function h(e, t, r) {
      var s = i[e.toLowerCase()];
      if (!s) throw new TypeError("invalid suite type");
      if (("string" == typeof t && (t = a.from(t)), t.length !== s.key / 8))
        throw new TypeError("invalid key length " + t.length);
      if (
        ("string" == typeof r && (r = a.from(r)),
        "GCM" !== s.mode && r.length !== s.iv)
      )
        throw new TypeError("invalid iv length " + r.length);
      return "stream" === s.type
        ? new o(s.module, t, r)
        : "auth" === s.type
        ? new n(s.module, t, r)
        : new u(s.module, t, r);
    }
    (u.prototype._final = function () {
      var e = this._cache.flush();
      if (this._autopadding)
        return (e = this._mode.encrypt(this, e)), this._cipher.scrub(), e;
      if (!e.equals(d))
        throw (
          (this._cipher.scrub(), new Error("data not multiple of block length"))
        );
    }),
      (u.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
      }),
      (l.prototype.add = function (e) {
        this.cache = a.concat([this.cache, e]);
      }),
      (l.prototype.get = function () {
        if (this.cache.length > 15) {
          var e = this.cache.slice(0, 16);
          return (this.cache = this.cache.slice(16)), e;
        }
        return null;
      }),
      (l.prototype.flush = function () {
        for (
          var e = 16 - this.cache.length, t = a.allocUnsafe(e), r = -1;
          ++r < e;

        )
          t.writeUInt8(e, r);
        return a.concat([this.cache, t]);
      }),
      (t.createCipheriv = h),
      (t.createCipher = function (e, t) {
        var r = i[e.toLowerCase()];
        if (!r) throw new TypeError("invalid suite type");
        var n = f(t, !1, r.key, r.iv);
        return h(e, n.key, n.iv);
      });
  },
  function (e, t) {
    (t.encrypt = function (e, t) {
      return e._cipher.encryptBlock(t);
    }),
      (t.decrypt = function (e, t) {
        return e._cipher.decryptBlock(t);
      });
  },
  function (e, t, r) {
    var i = r(15);
    (t.encrypt = function (e, t) {
      var r = i(t, e._prev);
      return (e._prev = e._cipher.encryptBlock(r)), e._prev;
    }),
      (t.decrypt = function (e, t) {
        var r = e._prev;
        e._prev = t;
        var n = e._cipher.decryptBlock(t);
        return i(n, r);
      });
  },
  function (e, t, r) {
    var i = r(1).Buffer,
      n = r(15);
    function a(e, t, r) {
      var a = t.length,
        o = n(t, e._cache);
      return (
        (e._cache = e._cache.slice(a)),
        (e._prev = i.concat([e._prev, r ? t : o])),
        o
      );
    }
    t.encrypt = function (e, t, r) {
      for (var n, o = i.allocUnsafe(0); t.length; ) {
        if (
          (0 === e._cache.length &&
            ((e._cache = e._cipher.encryptBlock(e._prev)),
            (e._prev = i.allocUnsafe(0))),
          !(e._cache.length <= t.length))
        ) {
          o = i.concat([o, a(e, t, r)]);
          break;
        }
        (n = e._cache.length),
          (o = i.concat([o, a(e, t.slice(0, n), r)])),
          (t = t.slice(n));
      }
      return o;
    };
  },
  function (e, t, r) {
    var i = r(1).Buffer;
    function n(e, t, r) {
      var n = e._cipher.encryptBlock(e._prev)[0] ^ t;
      return (e._prev = i.concat([e._prev.slice(1), i.from([r ? t : n])])), n;
    }
    t.encrypt = function (e, t, r) {
      for (var a = t.length, o = i.allocUnsafe(a), s = -1; ++s < a; )
        o[s] = n(e, t[s], r);
      return o;
    };
  },
  function (e, t, r) {
    var i = r(1).Buffer;
    function n(e, t, r) {
      for (var i, n, o = -1, s = 0; ++o < 8; )
        (i = t & (1 << (7 - o)) ? 128 : 0),
          (s += (128 & (n = e._cipher.encryptBlock(e._prev)[0] ^ i)) >> o % 8),
          (e._prev = a(e._prev, r ? i : n));
      return s;
    }
    function a(e, t) {
      var r = e.length,
        n = -1,
        a = i.allocUnsafe(e.length);
      for (e = i.concat([e, i.from([t])]); ++n < r; )
        a[n] = (e[n] << 1) | (e[n + 1] >> 7);
      return a;
    }
    t.encrypt = function (e, t, r) {
      for (var a = t.length, o = i.allocUnsafe(a), s = -1; ++s < a; )
        o[s] = n(e, t[s], r);
      return o;
    };
  },
  function (e, t, r) {
    (function (e) {
      var i = r(15);
      function n(e) {
        return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
      }
      t.encrypt = function (t, r) {
        for (; t._cache.length < r.length; )
          t._cache = e.concat([t._cache, n(t)]);
        var a = t._cache.slice(0, r.length);
        return (t._cache = t._cache.slice(r.length)), i(r, a);
      };
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    var i = r(1).Buffer,
      n = i.alloc(16, 0);
    function a(e) {
      var t = i.allocUnsafe(16);
      return (
        t.writeUInt32BE(e[0] >>> 0, 0),
        t.writeUInt32BE(e[1] >>> 0, 4),
        t.writeUInt32BE(e[2] >>> 0, 8),
        t.writeUInt32BE(e[3] >>> 0, 12),
        t
      );
    }
    function o(e) {
      (this.h = e),
        (this.state = i.alloc(16, 0)),
        (this.cache = i.allocUnsafe(0));
    }
    (o.prototype.ghash = function (e) {
      for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t];
      this._multiply();
    }),
      (o.prototype._multiply = function () {
        for (
          var e,
            t,
            r,
            i = [
              (e = this.h).readUInt32BE(0),
              e.readUInt32BE(4),
              e.readUInt32BE(8),
              e.readUInt32BE(12),
            ],
            n = [0, 0, 0, 0],
            o = -1;
          ++o < 128;

        ) {
          for (
            0 != (this.state[~~(o / 8)] & (1 << (7 - (o % 8)))) &&
              ((n[0] ^= i[0]), (n[1] ^= i[1]), (n[2] ^= i[2]), (n[3] ^= i[3])),
              r = 0 != (1 & i[3]),
              t = 3;
            t > 0;
            t--
          )
            i[t] = (i[t] >>> 1) | ((1 & i[t - 1]) << 31);
          (i[0] = i[0] >>> 1), r && (i[0] = i[0] ^ (225 << 24));
        }
        this.state = a(n);
      }),
      (o.prototype.update = function (e) {
        var t;
        for (this.cache = i.concat([this.cache, e]); this.cache.length >= 16; )
          (t = this.cache.slice(0, 16)),
            (this.cache = this.cache.slice(16)),
            this.ghash(t);
      }),
      (o.prototype.final = function (e, t) {
        return (
          this.cache.length && this.ghash(i.concat([this.cache, n], 16)),
          this.ghash(a([0, e, 0, t])),
          this.state
        );
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    var i = r(60),
      n = r(1).Buffer,
      a = r(37),
      o = r(61),
      s = r(9),
      c = r(20),
      f = r(21);
    function u(e, t, r) {
      s.call(this),
        (this._cache = new d()),
        (this._last = void 0),
        (this._cipher = new c.AES(t)),
        (this._prev = n.from(r)),
        (this._mode = e),
        (this._autopadding = !0);
    }
    function d() {
      this.cache = n.allocUnsafe(0);
    }
    function l(e, t, r) {
      var s = a[e.toLowerCase()];
      if (!s) throw new TypeError("invalid suite type");
      if (
        ("string" == typeof r && (r = n.from(r)),
        "GCM" !== s.mode && r.length !== s.iv)
      )
        throw new TypeError("invalid iv length " + r.length);
      if (("string" == typeof t && (t = n.from(t)), t.length !== s.key / 8))
        throw new TypeError("invalid key length " + t.length);
      return "stream" === s.type
        ? new o(s.module, t, r, !0)
        : "auth" === s.type
        ? new i(s.module, t, r, !0)
        : new u(s.module, t, r);
    }
    r(0)(u, s),
      (u.prototype._update = function (e) {
        var t, r;
        this._cache.add(e);
        for (var i = []; (t = this._cache.get(this._autopadding)); )
          (r = this._mode.decrypt(this, t)), i.push(r);
        return n.concat(i);
      }),
      (u.prototype._final = function () {
        var e = this._cache.flush();
        if (this._autopadding)
          return (function (e) {
            var t = e[15];
            if (t < 1 || t > 16) throw new Error("unable to decrypt data");
            var r = -1;
            for (; ++r < t; )
              if (e[r + (16 - t)] !== t)
                throw new Error("unable to decrypt data");
            if (16 === t) return;
            return e.slice(0, 16 - t);
          })(this._mode.decrypt(this, e));
        if (e) throw new Error("data not multiple of block length");
      }),
      (u.prototype.setAutoPadding = function (e) {
        return (this._autopadding = !!e), this;
      }),
      (d.prototype.add = function (e) {
        this.cache = n.concat([this.cache, e]);
      }),
      (d.prototype.get = function (e) {
        var t;
        if (e) {
          if (this.cache.length > 16)
            return (
              (t = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              t
            );
        } else if (this.cache.length >= 16)
          return (
            (t = this.cache.slice(0, 16)),
            (this.cache = this.cache.slice(16)),
            t
          );
        return null;
      }),
      (d.prototype.flush = function () {
        if (this.cache.length) return this.cache;
      }),
      (t.createDecipher = function (e, t) {
        var r = a[e.toLowerCase()];
        if (!r) throw new TypeError("invalid suite type");
        var i = f(t, !1, r.key, r.iv);
        return l(e, i.key, i.iv);
      }),
      (t.createDecipheriv = l);
  },
  function (e, t) {
    (t["des-ecb"] = { key: 8, iv: 0 }),
      (t["des-cbc"] = t.des = { key: 8, iv: 8 }),
      (t["des-ede3-cbc"] = t.des3 = { key: 24, iv: 8 }),
      (t["des-ede3"] = { key: 24, iv: 0 }),
      (t["des-ede-cbc"] = { key: 16, iv: 8 }),
      (t["des-ede"] = { key: 16, iv: 0 });
  },
  function (e, t, r) {
    (function (e) {
      var i = r(62),
        n = r(125),
        a = r(126);
      var o = { binary: !0, hex: !0, base64: !0 };
      (t.DiffieHellmanGroup =
        t.createDiffieHellmanGroup =
        t.getDiffieHellman =
          function (t) {
            var r = new e(n[t].prime, "hex"),
              i = new e(n[t].gen, "hex");
            return new a(r, i);
          }),
        (t.createDiffieHellman = t.DiffieHellman =
          function t(r, n, s, c) {
            return e.isBuffer(n) || void 0 === o[n]
              ? t(r, "binary", n, s)
              : ((n = n || "binary"),
                (c = c || "binary"),
                (s = s || new e([2])),
                e.isBuffer(s) || (s = new e(s, c)),
                "number" == typeof r
                  ? new a(i(r, s), s, !0)
                  : (e.isBuffer(r) || (r = new e(r, n)), new a(r, s, !0)));
          });
    }).call(this, r(2).Buffer);
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {},
  function (e, t) {},
  function (e) {
    e.exports = {
      modp1: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff",
      },
      modp2: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff",
      },
      modp5: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff",
      },
      modp14: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff",
      },
      modp15: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff",
      },
      modp16: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff",
      },
      modp17: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff",
      },
      modp18: {
        gen: "02",
        prime:
          "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff",
      },
    };
  },
  function (e, t, r) {
    (function (t) {
      var i = r(3),
        n = new (r(63))(),
        a = new i(24),
        o = new i(11),
        s = new i(10),
        c = new i(3),
        f = new i(7),
        u = r(62),
        d = r(11);
      function l(e, r) {
        return (
          (r = r || "utf8"),
          t.isBuffer(e) || (e = new t(e, r)),
          (this._pub = new i(e)),
          this
        );
      }
      function h(e, r) {
        return (
          (r = r || "utf8"),
          t.isBuffer(e) || (e = new t(e, r)),
          (this._priv = new i(e)),
          this
        );
      }
      e.exports = b;
      var p = {};
      function b(e, t, r) {
        this.setGenerator(t),
          (this.__prime = new i(e)),
          (this._prime = i.mont(this.__prime)),
          (this._primeLen = e.length),
          (this._pub = void 0),
          (this._priv = void 0),
          (this._primeCode = void 0),
          r
            ? ((this.setPublicKey = l), (this.setPrivateKey = h))
            : (this._primeCode = 8);
      }
      function m(e, r) {
        var i = new t(e.toArray());
        return r ? i.toString(r) : i;
      }
      Object.defineProperty(b.prototype, "verifyError", {
        enumerable: !0,
        get: function () {
          return (
            "number" != typeof this._primeCode &&
              (this._primeCode = (function (e, t) {
                var r = t.toString("hex"),
                  i = [r, e.toString(16)].join("_");
                if (i in p) return p[i];
                var d,
                  l = 0;
                if (
                  e.isEven() ||
                  !u.simpleSieve ||
                  !u.fermatTest(e) ||
                  !n.test(e)
                )
                  return (
                    (l += 1),
                    (l += "02" === r || "05" === r ? 8 : 4),
                    (p[i] = l),
                    l
                  );
                switch ((n.test(e.shrn(1)) || (l += 2), r)) {
                  case "02":
                    e.mod(a).cmp(o) && (l += 8);
                    break;
                  case "05":
                    (d = e.mod(s)).cmp(c) && d.cmp(f) && (l += 8);
                    break;
                  default:
                    l += 4;
                }
                return (p[i] = l), l;
              })(this.__prime, this.__gen)),
            this._primeCode
          );
        },
      }),
        (b.prototype.generateKeys = function () {
          return (
            this._priv || (this._priv = new i(d(this._primeLen))),
            (this._pub = this._gen
              .toRed(this._prime)
              .redPow(this._priv)
              .fromRed()),
            this.getPublicKey()
          );
        }),
        (b.prototype.computeSecret = function (e) {
          var r = (e = (e = new i(e)).toRed(this._prime))
              .redPow(this._priv)
              .fromRed(),
            n = new t(r.toArray()),
            a = this.getPrime();
          if (n.length < a.length) {
            var o = new t(a.length - n.length);
            o.fill(0), (n = t.concat([o, n]));
          }
          return n;
        }),
        (b.prototype.getPublicKey = function (e) {
          return m(this._pub, e);
        }),
        (b.prototype.getPrivateKey = function (e) {
          return m(this._priv, e);
        }),
        (b.prototype.getPrime = function (e) {
          return m(this.__prime, e);
        }),
        (b.prototype.getGenerator = function (e) {
          return m(this._gen, e);
        }),
        (b.prototype.setGenerator = function (e, r) {
          return (
            (r = r || "utf8"),
            t.isBuffer(e) || (e = new t(e, r)),
            (this.__gen = e),
            (this._gen = new i(e)),
            this
          );
        });
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    (function (t) {
      var i = r(13),
        n = r(27),
        a = r(0),
        o = r(128),
        s = r(163),
        c = r(50);
      function f(e) {
        n.Writable.call(this);
        var t = c[e];
        if (!t) throw new Error("Unknown message digest");
        (this._hashType = t.hash),
          (this._hash = i(t.hash)),
          (this._tag = t.id),
          (this._signType = t.sign);
      }
      function u(e) {
        n.Writable.call(this);
        var t = c[e];
        if (!t) throw new Error("Unknown message digest");
        (this._hash = i(t.hash)), (this._tag = t.id), (this._signType = t.sign);
      }
      function d(e) {
        return new f(e);
      }
      function l(e) {
        return new u(e);
      }
      Object.keys(c).forEach(function (e) {
        (c[e].id = new t(c[e].id, "hex")), (c[e.toLowerCase()] = c[e]);
      }),
        a(f, n.Writable),
        (f.prototype._write = function (e, t, r) {
          this._hash.update(e), r();
        }),
        (f.prototype.update = function (e, r) {
          return (
            "string" == typeof e && (e = new t(e, r)),
            this._hash.update(e),
            this
          );
        }),
        (f.prototype.sign = function (e, t) {
          this.end();
          var r = this._hash.digest(),
            i = o(r, e, this._hashType, this._signType, this._tag);
          return t ? i.toString(t) : i;
        }),
        a(u, n.Writable),
        (u.prototype._write = function (e, t, r) {
          this._hash.update(e), r();
        }),
        (u.prototype.update = function (e, r) {
          return (
            "string" == typeof e && (e = new t(e, r)),
            this._hash.update(e),
            this
          );
        }),
        (u.prototype.verify = function (e, r, i) {
          "string" == typeof r && (r = new t(r, i)), this.end();
          var n = this._hash.digest();
          return s(r, n, e, this._signType, this._tag);
        }),
        (e.exports = { Sign: d, Verify: l, createSign: d, createVerify: l });
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    (function (t) {
      var i = r(48),
        n = r(38),
        a = r(4).ec,
        o = r(3),
        s = r(23),
        c = r(73);
      function f(e, r, n, a) {
        if ((e = new t(e.toArray())).length < r.byteLength()) {
          var o = new t(r.byteLength() - e.length);
          o.fill(0), (e = t.concat([o, e]));
        }
        var s = n.length,
          c = (function (e, r) {
            e = (e = u(e, r)).mod(r);
            var i = new t(e.toArray());
            if (i.length < r.byteLength()) {
              var n = new t(r.byteLength() - i.length);
              n.fill(0), (i = t.concat([n, i]));
            }
            return i;
          })(n, r),
          f = new t(s);
        f.fill(1);
        var d = new t(s);
        return (
          d.fill(0),
          (d = i(a, d)
            .update(f)
            .update(new t([0]))
            .update(e)
            .update(c)
            .digest()),
          (f = i(a, d).update(f).digest()),
          {
            k: (d = i(a, d)
              .update(f)
              .update(new t([1]))
              .update(e)
              .update(c)
              .digest()),
            v: (f = i(a, d).update(f).digest()),
          }
        );
      }
      function u(e, t) {
        var r = new o(e),
          i = (e.length << 3) - t.bitLength();
        return i > 0 && r.ishrn(i), r;
      }
      function d(e, r, n) {
        var a, o;
        do {
          for (a = new t(0); 8 * a.length < e.bitLength(); )
            (r.v = i(n, r.k).update(r.v).digest()), (a = t.concat([a, r.v]));
          (o = u(a, e)),
            (r.k = i(n, r.k)
              .update(r.v)
              .update(new t([0]))
              .digest()),
            (r.v = i(n, r.k).update(r.v).digest());
        } while (-1 !== o.cmp(e));
        return o;
      }
      function l(e, t, r, i) {
        return e.toRed(o.mont(r)).redPow(t).fromRed().mod(i);
      }
      (e.exports = function (e, r, i, h, p) {
        var b = s(r);
        if (b.curve) {
          if ("ecdsa" !== h && "ecdsa/rsa" !== h)
            throw new Error("wrong private key type");
          return (function (e, r) {
            var i = c[r.curve.join(".")];
            if (!i) throw new Error("unknown curve " + r.curve.join("."));
            var n = new a(i).keyFromPrivate(r.privateKey).sign(e);
            return new t(n.toDER());
          })(e, b);
        }
        if ("dsa" === b.type) {
          if ("dsa" !== h) throw new Error("wrong private key type");
          return (function (e, r, i) {
            var n,
              a = r.params.priv_key,
              s = r.params.p,
              c = r.params.q,
              h = r.params.g,
              p = new o(0),
              b = u(e, c).mod(c),
              m = !1,
              g = f(a, c, e, i);
            for (; !1 === m; )
              (n = d(c, g, i)),
                (p = l(h, n, s, c)),
                0 ===
                  (m = n
                    .invm(c)
                    .imul(b.add(a.mul(p)))
                    .mod(c)).cmpn(0) && ((m = !1), (p = new o(0)));
            return (function (e, r) {
              (e = e.toArray()),
                (r = r.toArray()),
                128 & e[0] && (e = [0].concat(e));
              128 & r[0] && (r = [0].concat(r));
              var i = [48, e.length + r.length + 4, 2, e.length];
              return (i = i.concat(e, [2, r.length], r)), new t(i);
            })(p, m);
          })(e, b, i);
        }
        if ("rsa" !== h && "ecdsa/rsa" !== h)
          throw new Error("wrong private key type");
        e = t.concat([p, e]);
        for (
          var m = b.modulus.byteLength(), g = [0, 1];
          e.length + g.length + 1 < m;

        )
          g.push(255);
        g.push(0);
        for (var v = -1; ++v < e.length; ) g.push(e[v]);
        return n(g, b);
      }),
        (e.exports.getKey = f),
        (e.exports.makeKey = d);
    }).call(this, r(2).Buffer);
  },
  function (e) {
    e.exports = {
      name: "elliptic",
      version: "6.4.1",
      description: "EC cryptography",
      main: "lib/elliptic.js",
      files: ["lib"],
      scripts: {
        jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
        jshint:
          "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
        lint: "npm run jscs && npm run jshint",
        unit: "istanbul test _mocha --reporter=spec test/index.js",
        test: "npm run lint && npm run unit",
        version: "grunt dist && git add dist/",
      },
      repository: { type: "git", url: "git@github.com:indutny/elliptic" },
      keywords: ["EC", "Elliptic", "curve", "Cryptography"],
      author: "Fedor Indutny <fedor@indutny.com>",
      license: "MIT",
      bugs: { url: "https://github.com/indutny/elliptic/issues" },
      homepage: "https://github.com/indutny/elliptic",
      devDependencies: {
        brfs: "^1.4.3",
        coveralls: "^2.11.3",
        grunt: "^0.4.5",
        "grunt-browserify": "^5.0.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-connect": "^1.0.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-uglify": "^1.0.1",
        "grunt-mocha-istanbul": "^3.0.1",
        "grunt-saucelabs": "^8.6.2",
        istanbul: "^0.4.2",
        jscs: "^2.9.0",
        jshint: "^2.6.0",
        mocha: "^2.1.0",
      },
      dependencies: {
        "bn.js": "^4.4.0",
        brorand: "^1.0.1",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.0",
        inherits: "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.0",
      },
    };
  },
  function (e, t, r) {
    "use strict";
    var i = t,
      n = r(3),
      a = r(5),
      o = r(65);
    (i.assert = a),
      (i.toArray = o.toArray),
      (i.zero2 = o.zero2),
      (i.toHex = o.toHex),
      (i.encode = o.encode),
      (i.getNAF = function (e, t) {
        for (var r = [], i = 1 << (t + 1), n = e.clone(); n.cmpn(1) >= 0; ) {
          var a;
          if (n.isOdd()) {
            var o = n.andln(i - 1);
            (a = o > (i >> 1) - 1 ? (i >> 1) - o : o), n.isubn(a);
          } else a = 0;
          r.push(a);
          for (
            var s = 0 !== n.cmpn(0) && 0 === n.andln(i - 1) ? t + 1 : 1, c = 1;
            c < s;
            c++
          )
            r.push(0);
          n.iushrn(s);
        }
        return r;
      }),
      (i.getJSF = function (e, t) {
        var r = [[], []];
        (e = e.clone()), (t = t.clone());
        for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0; ) {
          var a,
            o,
            s,
            c = (e.andln(3) + i) & 3,
            f = (t.andln(3) + n) & 3;
          if ((3 === c && (c = -1), 3 === f && (f = -1), 0 == (1 & c))) a = 0;
          else
            a =
              (3 !== (s = (e.andln(7) + i) & 7) && 5 !== s) || 2 !== f ? c : -c;
          if ((r[0].push(a), 0 == (1 & f))) o = 0;
          else
            o =
              (3 !== (s = (t.andln(7) + n) & 7) && 5 !== s) || 2 !== c ? f : -f;
          r[1].push(o),
            2 * i === a + 1 && (i = 1 - i),
            2 * n === o + 1 && (n = 1 - n),
            e.iushrn(1),
            t.iushrn(1);
        }
        return r;
      }),
      (i.cachedProperty = function (e, t, r) {
        var i = "_" + t;
        e.prototype[t] = function () {
          return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
        };
      }),
      (i.parseBytes = function (e) {
        return "string" == typeof e ? i.toArray(e, "hex") : e;
      }),
      (i.intFromLE = function (e) {
        return new n(e, "hex", "le");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(3),
      n = r(4).utils,
      a = n.getNAF,
      o = n.getJSF,
      s = n.assert;
    function c(e, t) {
      (this.type = e),
        (this.p = new i(t.p, 16)),
        (this.red = t.prime ? i.red(t.prime) : i.mont(this.p)),
        (this.zero = new i(0).toRed(this.red)),
        (this.one = new i(1).toRed(this.red)),
        (this.two = new i(2).toRed(this.red)),
        (this.n = t.n && new i(t.n, 16)),
        (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
        (this._wnafT1 = new Array(4)),
        (this._wnafT2 = new Array(4)),
        (this._wnafT3 = new Array(4)),
        (this._wnafT4 = new Array(4));
      var r = this.n && this.p.div(this.n);
      !r || r.cmpn(100) > 0
        ? (this.redN = null)
        : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
    }
    function f(e, t) {
      (this.curve = e), (this.type = t), (this.precomputed = null);
    }
    (e.exports = c),
      (c.prototype.point = function () {
        throw new Error("Not implemented");
      }),
      (c.prototype.validate = function () {
        throw new Error("Not implemented");
      }),
      (c.prototype._fixedNafMul = function (e, t) {
        s(e.precomputed);
        var r = e._getDoubles(),
          i = a(t, 1),
          n = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
        n /= 3;
        for (var o = [], c = 0; c < i.length; c += r.step) {
          var f = 0;
          for (t = c + r.step - 1; t >= c; t--) f = (f << 1) + i[t];
          o.push(f);
        }
        for (
          var u = this.jpoint(null, null, null),
            d = this.jpoint(null, null, null),
            l = n;
          l > 0;
          l--
        ) {
          for (c = 0; c < o.length; c++) {
            (f = o[c]) === l
              ? (d = d.mixedAdd(r.points[c]))
              : f === -l && (d = d.mixedAdd(r.points[c].neg()));
          }
          u = u.add(d);
        }
        return u.toP();
      }),
      (c.prototype._wnafMul = function (e, t) {
        var r = 4,
          i = e._getNAFPoints(r);
        r = i.wnd;
        for (
          var n = i.points,
            o = a(t, r),
            c = this.jpoint(null, null, null),
            f = o.length - 1;
          f >= 0;
          f--
        ) {
          for (t = 0; f >= 0 && 0 === o[f]; f--) t++;
          if ((f >= 0 && t++, (c = c.dblp(t)), f < 0)) break;
          var u = o[f];
          s(0 !== u),
            (c =
              "affine" === e.type
                ? u > 0
                  ? c.mixedAdd(n[(u - 1) >> 1])
                  : c.mixedAdd(n[(-u - 1) >> 1].neg())
                : u > 0
                ? c.add(n[(u - 1) >> 1])
                : c.add(n[(-u - 1) >> 1].neg()));
        }
        return "affine" === e.type ? c.toP() : c;
      }),
      (c.prototype._wnafMulAdd = function (e, t, r, i, n) {
        for (
          var s = this._wnafT1,
            c = this._wnafT2,
            f = this._wnafT3,
            u = 0,
            d = 0;
          d < i;
          d++
        ) {
          var l = (x = t[d])._getNAFPoints(e);
          (s[d] = l.wnd), (c[d] = l.points);
        }
        for (d = i - 1; d >= 1; d -= 2) {
          var h = d - 1,
            p = d;
          if (1 === s[h] && 1 === s[p]) {
            var b = [t[h], null, null, t[p]];
            0 === t[h].y.cmp(t[p].y)
              ? ((b[1] = t[h].add(t[p])),
                (b[2] = t[h].toJ().mixedAdd(t[p].neg())))
              : 0 === t[h].y.cmp(t[p].y.redNeg())
              ? ((b[1] = t[h].toJ().mixedAdd(t[p])),
                (b[2] = t[h].add(t[p].neg())))
              : ((b[1] = t[h].toJ().mixedAdd(t[p])),
                (b[2] = t[h].toJ().mixedAdd(t[p].neg())));
            var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              g = o(r[h], r[p]);
            (u = Math.max(g[0].length, u)),
              (f[h] = new Array(u)),
              (f[p] = new Array(u));
            for (var v = 0; v < u; v++) {
              var y = 0 | g[0][v],
                w = 0 | g[1][v];
              (f[h][v] = m[3 * (y + 1) + (w + 1)]), (f[p][v] = 0), (c[h] = b);
            }
          } else
            (f[h] = a(r[h], s[h])),
              (f[p] = a(r[p], s[p])),
              (u = Math.max(f[h].length, u)),
              (u = Math.max(f[p].length, u));
        }
        var _ = this.jpoint(null, null, null),
          S = this._wnafT4;
        for (d = u; d >= 0; d--) {
          for (var k = 0; d >= 0; ) {
            var M = !0;
            for (v = 0; v < i; v++)
              (S[v] = 0 | f[v][d]), 0 !== S[v] && (M = !1);
            if (!M) break;
            k++, d--;
          }
          if ((d >= 0 && k++, (_ = _.dblp(k)), d < 0)) break;
          for (v = 0; v < i; v++) {
            var x,
              E = S[v];
            0 !== E &&
              (E > 0
                ? (x = c[v][(E - 1) >> 1])
                : E < 0 && (x = c[v][(-E - 1) >> 1].neg()),
              (_ = "affine" === x.type ? _.mixedAdd(x) : _.add(x)));
          }
        }
        for (d = 0; d < i; d++) c[d] = null;
        return n ? _ : _.toP();
      }),
      (c.BasePoint = f),
      (f.prototype.eq = function () {
        throw new Error("Not implemented");
      }),
      (f.prototype.validate = function () {
        return this.curve.validate(this);
      }),
      (c.prototype.decodePoint = function (e, t) {
        e = n.toArray(e, t);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
          return (
            6 === e[0]
              ? s(e[e.length - 1] % 2 == 0)
              : 7 === e[0] && s(e[e.length - 1] % 2 == 1),
            this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
          );
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
          return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw new Error("Unknown point format");
      }),
      (f.prototype.encodeCompressed = function (e) {
        return this.encode(e, !0);
      }),
      (f.prototype._encode = function (e) {
        var t = this.curve.p.byteLength(),
          r = this.getX().toArray("be", t);
        return e
          ? [this.getY().isEven() ? 2 : 3].concat(r)
          : [4].concat(r, this.getY().toArray("be", t));
      }),
      (f.prototype.encode = function (e, t) {
        return n.encode(this._encode(t), e);
      }),
      (f.prototype.precompute = function (e) {
        if (this.precomputed) return this;
        var t = { doubles: null, naf: null, beta: null };
        return (
          (t.naf = this._getNAFPoints(8)),
          (t.doubles = this._getDoubles(4, e)),
          (t.beta = this._getBeta()),
          (this.precomputed = t),
          this
        );
      }),
      (f.prototype._hasDoubles = function (e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return (
          !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        );
      }),
      (f.prototype._getDoubles = function (e, t) {
        if (this.precomputed && this.precomputed.doubles)
          return this.precomputed.doubles;
        for (var r = [this], i = this, n = 0; n < t; n += e) {
          for (var a = 0; a < e; a++) i = i.dbl();
          r.push(i);
        }
        return { step: e, points: r };
      }),
      (f.prototype._getNAFPoints = function (e) {
        if (this.precomputed && this.precomputed.naf)
          return this.precomputed.naf;
        for (
          var t = [this],
            r = (1 << e) - 1,
            i = 1 === r ? null : this.dbl(),
            n = 1;
          n < r;
          n++
        )
          t[n] = t[n - 1].add(i);
        return { wnd: e, points: t };
      }),
      (f.prototype._getBeta = function () {
        return null;
      }),
      (f.prototype.dblp = function (e) {
        for (var t = this, r = 0; r < e; r++) t = t.dbl();
        return t;
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(22),
      n = r(4),
      a = r(3),
      o = r(0),
      s = i.base,
      c = n.utils.assert;
    function f(e) {
      s.call(this, "short", e),
        (this.a = new a(e.a, 16).toRed(this.red)),
        (this.b = new a(e.b, 16).toRed(this.red)),
        (this.tinv = this.two.redInvm()),
        (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
        (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
        (this.endo = this._getEndomorphism(e)),
        (this._endoWnafT1 = new Array(4)),
        (this._endoWnafT2 = new Array(4));
    }
    function u(e, t, r, i) {
      s.BasePoint.call(this, e, "affine"),
        null === t && null === r
          ? ((this.x = null), (this.y = null), (this.inf = !0))
          : ((this.x = new a(t, 16)),
            (this.y = new a(r, 16)),
            i &&
              (this.x.forceRed(this.curve.red),
              this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            (this.inf = !1));
    }
    function d(e, t, r, i) {
      s.BasePoint.call(this, e, "jacobian"),
        null === t && null === r && null === i
          ? ((this.x = this.curve.one),
            (this.y = this.curve.one),
            (this.z = new a(0)))
          : ((this.x = new a(t, 16)),
            (this.y = new a(r, 16)),
            (this.z = new a(i, 16))),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        this.z.red || (this.z = this.z.toRed(this.curve.red)),
        (this.zOne = this.z === this.curve.one);
    }
    o(f, s),
      (e.exports = f),
      (f.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var t, r;
          if (e.beta) t = new a(e.beta, 16).toRed(this.red);
          else {
            var i = this._getEndoRoots(this.p);
            t = (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red);
          }
          if (e.lambda) r = new a(e.lambda, 16);
          else {
            var n = this._getEndoRoots(this.n);
            0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))
              ? (r = n[0])
              : ((r = n[1]), c(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
          }
          return {
            beta: t,
            lambda: r,
            basis: e.basis
              ? e.basis.map(function (e) {
                  return { a: new a(e.a, 16), b: new a(e.b, 16) };
                })
              : this._getEndoBasis(r),
          };
        }
      }),
      (f.prototype._getEndoRoots = function (e) {
        var t = e === this.p ? this.red : a.mont(e),
          r = new a(2).toRed(t).redInvm(),
          i = r.redNeg(),
          n = new a(3).toRed(t).redNeg().redSqrt().redMul(r);
        return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()];
      }),
      (f.prototype._getEndoBasis = function (e) {
        for (
          var t,
            r,
            i,
            n,
            o,
            s,
            c,
            f,
            u,
            d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
            l = e,
            h = this.n.clone(),
            p = new a(1),
            b = new a(0),
            m = new a(0),
            g = new a(1),
            v = 0;
          0 !== l.cmpn(0);

        ) {
          var y = h.div(l);
          (f = h.sub(y.mul(l))), (u = m.sub(y.mul(p)));
          var w = g.sub(y.mul(b));
          if (!i && f.cmp(d) < 0)
            (t = c.neg()), (r = p), (i = f.neg()), (n = u);
          else if (i && 2 == ++v) break;
          (c = f), (h = l), (l = f), (m = p), (p = u), (g = b), (b = w);
        }
        (o = f.neg()), (s = u);
        var _ = i.sqr().add(n.sqr());
        return (
          o.sqr().add(s.sqr()).cmp(_) >= 0 && ((o = t), (s = r)),
          i.negative && ((i = i.neg()), (n = n.neg())),
          o.negative && ((o = o.neg()), (s = s.neg())),
          [
            { a: i, b: n },
            { a: o, b: s },
          ]
        );
      }),
      (f.prototype._endoSplit = function (e) {
        var t = this.endo.basis,
          r = t[0],
          i = t[1],
          n = i.b.mul(e).divRound(this.n),
          a = r.b.neg().mul(e).divRound(this.n),
          o = n.mul(r.a),
          s = a.mul(i.a),
          c = n.mul(r.b),
          f = a.mul(i.b);
        return { k1: e.sub(o).sub(s), k2: c.add(f).neg() };
      }),
      (f.prototype.pointFromX = function (e, t) {
        (e = new a(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
          i = r.redSqrt();
        if (0 !== i.redSqr().redSub(r).cmp(this.zero))
          throw new Error("invalid point");
        var n = i.fromRed().isOdd();
        return ((t && !n) || (!t && n)) && (i = i.redNeg()), this.point(e, i);
      }),
      (f.prototype.validate = function (e) {
        if (e.inf) return !0;
        var t = e.x,
          r = e.y,
          i = this.a.redMul(t),
          n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);
        return 0 === r.redSqr().redISub(n).cmpn(0);
      }),
      (f.prototype._endoWnafMulAdd = function (e, t, r) {
        for (
          var i = this._endoWnafT1, n = this._endoWnafT2, a = 0;
          a < e.length;
          a++
        ) {
          var o = this._endoSplit(t[a]),
            s = e[a],
            c = s._getBeta();
          o.k1.negative && (o.k1.ineg(), (s = s.neg(!0))),
            o.k2.negative && (o.k2.ineg(), (c = c.neg(!0))),
            (i[2 * a] = s),
            (i[2 * a + 1] = c),
            (n[2 * a] = o.k1),
            (n[2 * a + 1] = o.k2);
        }
        for (var f = this._wnafMulAdd(1, i, n, 2 * a, r), u = 0; u < 2 * a; u++)
          (i[u] = null), (n[u] = null);
        return f;
      }),
      o(u, s.BasePoint),
      (f.prototype.point = function (e, t, r) {
        return new u(this, e, t, r);
      }),
      (f.prototype.pointFromJSON = function (e, t) {
        return u.fromJSON(this, e, t);
      }),
      (u.prototype._getBeta = function () {
        if (this.curve.endo) {
          var e = this.precomputed;
          if (e && e.beta) return e.beta;
          var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
          if (e) {
            var r = this.curve,
              i = function (e) {
                return r.point(e.x.redMul(r.endo.beta), e.y);
              };
            (e.beta = t),
              (t.precomputed = {
                beta: null,
                naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
                doubles: e.doubles && {
                  step: e.doubles.step,
                  points: e.doubles.points.map(i),
                },
              });
          }
          return t;
        }
      }),
      (u.prototype.toJSON = function () {
        return this.precomputed
          ? [
              this.x,
              this.y,
              this.precomputed && {
                doubles: this.precomputed.doubles && {
                  step: this.precomputed.doubles.step,
                  points: this.precomputed.doubles.points.slice(1),
                },
                naf: this.precomputed.naf && {
                  wnd: this.precomputed.naf.wnd,
                  points: this.precomputed.naf.points.slice(1),
                },
              },
            ]
          : [this.x, this.y];
      }),
      (u.fromJSON = function (e, t, r) {
        "string" == typeof t && (t = JSON.parse(t));
        var i = e.point(t[0], t[1], r);
        if (!t[2]) return i;
        function n(t) {
          return e.point(t[0], t[1], r);
        }
        var a = t[2];
        return (
          (i.precomputed = {
            beta: null,
            doubles: a.doubles && {
              step: a.doubles.step,
              points: [i].concat(a.doubles.points.map(n)),
            },
            naf: a.naf && {
              wnd: a.naf.wnd,
              points: [i].concat(a.naf.points.map(n)),
            },
          }),
          i
        );
      }),
      (u.prototype.inspect = function () {
        return this.isInfinity()
          ? "<EC Point Infinity>"
          : "<EC Point x: " +
              this.x.fromRed().toString(16, 2) +
              " y: " +
              this.y.fromRed().toString(16, 2) +
              ">";
      }),
      (u.prototype.isInfinity = function () {
        return this.inf;
      }),
      (u.prototype.add = function (e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e)) return this.curve.point(null, null);
        if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var r = t.redSqr().redISub(this.x).redISub(e.x),
          i = t.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, i);
      }),
      (u.prototype.dbl = function () {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
          r = this.x.redSqr(),
          i = e.redInvm(),
          n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
          a = n.redSqr().redISub(this.x.redAdd(this.x)),
          o = n.redMul(this.x.redSub(a)).redISub(this.y);
        return this.curve.point(a, o);
      }),
      (u.prototype.getX = function () {
        return this.x.fromRed();
      }),
      (u.prototype.getY = function () {
        return this.y.fromRed();
      }),
      (u.prototype.mul = function (e) {
        return (
          (e = new a(e, 16)),
          this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [e])
            : this.curve._wnafMul(this, e)
        );
      }),
      (u.prototype.mulAdd = function (e, t, r) {
        var i = [this, t],
          n = [e, r];
        return this.curve.endo
          ? this.curve._endoWnafMulAdd(i, n)
          : this.curve._wnafMulAdd(1, i, n, 2);
      }),
      (u.prototype.jmulAdd = function (e, t, r) {
        var i = [this, t],
          n = [e, r];
        return this.curve.endo
          ? this.curve._endoWnafMulAdd(i, n, !0)
          : this.curve._wnafMulAdd(1, i, n, 2, !0);
      }),
      (u.prototype.eq = function (e) {
        return (
          this === e ||
          (this.inf === e.inf &&
            (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
        );
      }),
      (u.prototype.neg = function (e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
          var r = this.precomputed,
            i = function (e) {
              return e.neg();
            };
          t.precomputed = {
            naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(i),
            },
          };
        }
        return t;
      }),
      (u.prototype.toJ = function () {
        return this.inf
          ? this.curve.jpoint(null, null, null)
          : this.curve.jpoint(this.x, this.y, this.curve.one);
      }),
      o(d, s.BasePoint),
      (f.prototype.jpoint = function (e, t, r) {
        return new d(this, e, t, r);
      }),
      (d.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
          t = e.redSqr(),
          r = this.x.redMul(t),
          i = this.y.redMul(t).redMul(e);
        return this.curve.point(r, i);
      }),
      (d.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
      }),
      (d.prototype.add = function (e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
          r = this.z.redSqr(),
          i = this.x.redMul(t),
          n = e.x.redMul(r),
          a = this.y.redMul(t.redMul(e.z)),
          o = e.y.redMul(r.redMul(this.z)),
          s = i.redSub(n),
          c = a.redSub(o);
        if (0 === s.cmpn(0))
          return 0 !== c.cmpn(0)
            ? this.curve.jpoint(null, null, null)
            : this.dbl();
        var f = s.redSqr(),
          u = f.redMul(s),
          d = i.redMul(f),
          l = c.redSqr().redIAdd(u).redISub(d).redISub(d),
          h = c.redMul(d.redISub(l)).redISub(a.redMul(u)),
          p = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(l, h, p);
      }),
      (d.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
          r = this.x,
          i = e.x.redMul(t),
          n = this.y,
          a = e.y.redMul(t).redMul(this.z),
          o = r.redSub(i),
          s = n.redSub(a);
        if (0 === o.cmpn(0))
          return 0 !== s.cmpn(0)
            ? this.curve.jpoint(null, null, null)
            : this.dbl();
        var c = o.redSqr(),
          f = c.redMul(o),
          u = r.redMul(c),
          d = s.redSqr().redIAdd(f).redISub(u).redISub(u),
          l = s.redMul(u.redISub(d)).redISub(n.redMul(f)),
          h = this.z.redMul(o);
        return this.curve.jpoint(d, l, h);
      }),
      (d.prototype.dblp = function (e) {
        if (0 === e) return this;
        if (this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        }
        var i = this.curve.a,
          n = this.curve.tinv,
          a = this.x,
          o = this.y,
          s = this.z,
          c = s.redSqr().redSqr(),
          f = o.redAdd(o);
        for (r = 0; r < e; r++) {
          var u = a.redSqr(),
            d = f.redSqr(),
            l = d.redSqr(),
            h = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(c)),
            p = a.redMul(d),
            b = h.redSqr().redISub(p.redAdd(p)),
            m = p.redISub(b),
            g = h.redMul(m);
          g = g.redIAdd(g).redISub(l);
          var v = f.redMul(s);
          r + 1 < e && (c = c.redMul(l)), (a = b), (s = v), (f = g);
        }
        return this.curve.jpoint(a, f.redMul(n), s);
      }),
      (d.prototype.dbl = function () {
        return this.isInfinity()
          ? this
          : this.curve.zeroA
          ? this._zeroDbl()
          : this.curve.threeA
          ? this._threeDbl()
          : this._dbl();
      }),
      (d.prototype._zeroDbl = function () {
        var e, t, r;
        if (this.zOne) {
          var i = this.x.redSqr(),
            n = this.y.redSqr(),
            a = n.redSqr(),
            o = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
          o = o.redIAdd(o);
          var s = i.redAdd(i).redIAdd(i),
            c = s.redSqr().redISub(o).redISub(o),
            f = a.redIAdd(a);
          (f = (f = f.redIAdd(f)).redIAdd(f)),
            (e = c),
            (t = s.redMul(o.redISub(c)).redISub(f)),
            (r = this.y.redAdd(this.y));
        } else {
          var u = this.x.redSqr(),
            d = this.y.redSqr(),
            l = d.redSqr(),
            h = this.x.redAdd(d).redSqr().redISub(u).redISub(l);
          h = h.redIAdd(h);
          var p = u.redAdd(u).redIAdd(u),
            b = p.redSqr(),
            m = l.redIAdd(l);
          (m = (m = m.redIAdd(m)).redIAdd(m)),
            (e = b.redISub(h).redISub(h)),
            (t = p.redMul(h.redISub(e)).redISub(m)),
            (r = (r = this.y.redMul(this.z)).redIAdd(r));
        }
        return this.curve.jpoint(e, t, r);
      }),
      (d.prototype._threeDbl = function () {
        var e, t, r;
        if (this.zOne) {
          var i = this.x.redSqr(),
            n = this.y.redSqr(),
            a = n.redSqr(),
            o = this.x.redAdd(n).redSqr().redISub(i).redISub(a);
          o = o.redIAdd(o);
          var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
            c = s.redSqr().redISub(o).redISub(o);
          e = c;
          var f = a.redIAdd(a);
          (f = (f = f.redIAdd(f)).redIAdd(f)),
            (t = s.redMul(o.redISub(c)).redISub(f)),
            (r = this.y.redAdd(this.y));
        } else {
          var u = this.z.redSqr(),
            d = this.y.redSqr(),
            l = this.x.redMul(d),
            h = this.x.redSub(u).redMul(this.x.redAdd(u));
          h = h.redAdd(h).redIAdd(h);
          var p = l.redIAdd(l),
            b = (p = p.redIAdd(p)).redAdd(p);
          (e = h.redSqr().redISub(b)),
            (r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u));
          var m = d.redSqr();
          (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
            (t = h.redMul(p.redISub(e)).redISub(m));
        }
        return this.curve.jpoint(e, t, r);
      }),
      (d.prototype._dbl = function () {
        var e = this.curve.a,
          t = this.x,
          r = this.y,
          i = this.z,
          n = i.redSqr().redSqr(),
          a = t.redSqr(),
          o = r.redSqr(),
          s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(n)),
          c = t.redAdd(t),
          f = (c = c.redIAdd(c)).redMul(o),
          u = s.redSqr().redISub(f.redAdd(f)),
          d = f.redISub(u),
          l = o.redSqr();
        l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
        var h = s.redMul(d).redISub(l),
          p = r.redAdd(r).redMul(i);
        return this.curve.jpoint(u, h, p);
      }),
      (d.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
          t = this.y.redSqr(),
          r = this.z.redSqr(),
          i = t.redSqr(),
          n = e.redAdd(e).redIAdd(e),
          a = n.redSqr(),
          o = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
          s = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(
            a
          )).redSqr(),
          c = i.redIAdd(i);
        c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
        var f = n.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(c),
          u = t.redMul(f);
        u = (u = u.redIAdd(u)).redIAdd(u);
        var d = this.x.redMul(s).redISub(u);
        d = (d = d.redIAdd(d)).redIAdd(d);
        var l = this.y.redMul(f.redMul(c.redISub(f)).redISub(o.redMul(s)));
        l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
        var h = this.z.redAdd(o).redSqr().redISub(r).redISub(s);
        return this.curve.jpoint(d, l, h);
      }),
      (d.prototype.mul = function (e, t) {
        return (e = new a(e, t)), this.curve._wnafMul(this, e);
      }),
      (d.prototype.eq = function (e) {
        if ("affine" === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
          r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var i = t.redMul(this.z),
          n = r.redMul(e.z);
        return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0);
      }),
      (d.prototype.eqXToP = function (e) {
        var t = this.z.redSqr(),
          r = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(r)) return !0;
        for (var i = e.clone(), n = this.curve.redN.redMul(t); ; ) {
          if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
          if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
        }
      }),
      (d.prototype.inspect = function () {
        return this.isInfinity()
          ? "<EC JPoint Infinity>"
          : "<EC JPoint x: " +
              this.x.toString(16, 2) +
              " y: " +
              this.y.toString(16, 2) +
              " z: " +
              this.z.toString(16, 2) +
              ">";
      }),
      (d.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(22),
      n = r(3),
      a = r(0),
      o = i.base,
      s = r(4).utils;
    function c(e) {
      o.call(this, "mont", e),
        (this.a = new n(e.a, 16).toRed(this.red)),
        (this.b = new n(e.b, 16).toRed(this.red)),
        (this.i4 = new n(4).toRed(this.red).redInvm()),
        (this.two = new n(2).toRed(this.red)),
        (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
    }
    function f(e, t, r) {
      o.BasePoint.call(this, e, "projective"),
        null === t && null === r
          ? ((this.x = this.curve.one), (this.z = this.curve.zero))
          : ((this.x = new n(t, 16)),
            (this.z = new n(r, 16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)));
    }
    a(c, o),
      (e.exports = c),
      (c.prototype.validate = function (e) {
        var t = e.normalize().x,
          r = t.redSqr(),
          i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
        return 0 === i.redSqrt().redSqr().cmp(i);
      }),
      a(f, o.BasePoint),
      (c.prototype.decodePoint = function (e, t) {
        return this.point(s.toArray(e, t), 1);
      }),
      (c.prototype.point = function (e, t) {
        return new f(this, e, t);
      }),
      (c.prototype.pointFromJSON = function (e) {
        return f.fromJSON(this, e);
      }),
      (f.prototype.precompute = function () {}),
      (f.prototype._encode = function () {
        return this.getX().toArray("be", this.curve.p.byteLength());
      }),
      (f.fromJSON = function (e, t) {
        return new f(e, t[0], t[1] || e.one);
      }),
      (f.prototype.inspect = function () {
        return this.isInfinity()
          ? "<EC Point Infinity>"
          : "<EC Point x: " +
              this.x.fromRed().toString(16, 2) +
              " z: " +
              this.z.fromRed().toString(16, 2) +
              ">";
      }),
      (f.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
      }),
      (f.prototype.dbl = function () {
        var e = this.x.redAdd(this.z).redSqr(),
          t = this.x.redSub(this.z).redSqr(),
          r = e.redSub(t),
          i = e.redMul(t),
          n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(i, n);
      }),
      (f.prototype.add = function () {
        throw new Error("Not supported on Montgomery curve");
      }),
      (f.prototype.diffAdd = function (e, t) {
        var r = this.x.redAdd(this.z),
          i = this.x.redSub(this.z),
          n = e.x.redAdd(e.z),
          a = e.x.redSub(e.z).redMul(r),
          o = n.redMul(i),
          s = t.z.redMul(a.redAdd(o).redSqr()),
          c = t.x.redMul(a.redISub(o).redSqr());
        return this.curve.point(s, c);
      }),
      (f.prototype.mul = function (e) {
        for (
          var t = e.clone(), r = this, i = this.curve.point(null, null), n = [];
          0 !== t.cmpn(0);
          t.iushrn(1)
        )
          n.push(t.andln(1));
        for (var a = n.length - 1; a >= 0; a--)
          0 === n[a]
            ? ((r = r.diffAdd(i, this)), (i = i.dbl()))
            : ((i = r.diffAdd(i, this)), (r = r.dbl()));
        return i;
      }),
      (f.prototype.mulAdd = function () {
        throw new Error("Not supported on Montgomery curve");
      }),
      (f.prototype.jumlAdd = function () {
        throw new Error("Not supported on Montgomery curve");
      }),
      (f.prototype.eq = function (e) {
        return 0 === this.getX().cmp(e.getX());
      }),
      (f.prototype.normalize = function () {
        return (
          (this.x = this.x.redMul(this.z.redInvm())),
          (this.z = this.curve.one),
          this
        );
      }),
      (f.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(22),
      n = r(4),
      a = r(3),
      o = r(0),
      s = i.base,
      c = n.utils.assert;
    function f(e) {
      (this.twisted = 1 != (0 | e.a)),
        (this.mOneA = this.twisted && -1 == (0 | e.a)),
        (this.extended = this.mOneA),
        s.call(this, "edwards", e),
        (this.a = new a(e.a, 16).umod(this.red.m)),
        (this.a = this.a.toRed(this.red)),
        (this.c = new a(e.c, 16).toRed(this.red)),
        (this.c2 = this.c.redSqr()),
        (this.d = new a(e.d, 16).toRed(this.red)),
        (this.dd = this.d.redAdd(this.d)),
        c(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
        (this.oneC = 1 == (0 | e.c));
    }
    function u(e, t, r, i, n) {
      s.BasePoint.call(this, e, "projective"),
        null === t && null === r && null === i
          ? ((this.x = this.curve.zero),
            (this.y = this.curve.one),
            (this.z = this.curve.one),
            (this.t = this.curve.zero),
            (this.zOne = !0))
          : ((this.x = new a(t, 16)),
            (this.y = new a(r, 16)),
            (this.z = i ? new a(i, 16) : this.curve.one),
            (this.t = n && new a(n, 16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
            (this.zOne = this.z === this.curve.one),
            this.curve.extended &&
              !this.t &&
              ((this.t = this.x.redMul(this.y)),
              this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
    }
    o(f, s),
      (e.exports = f),
      (f.prototype._mulA = function (e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e);
      }),
      (f.prototype._mulC = function (e) {
        return this.oneC ? e : this.c.redMul(e);
      }),
      (f.prototype.jpoint = function (e, t, r, i) {
        return this.point(e, t, r, i);
      }),
      (f.prototype.pointFromX = function (e, t) {
        (e = new a(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr(),
          i = this.c2.redSub(this.a.redMul(r)),
          n = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
          o = i.redMul(n.redInvm()),
          s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero))
          throw new Error("invalid point");
        var c = s.fromRed().isOdd();
        return ((t && !c) || (!t && c)) && (s = s.redNeg()), this.point(e, s);
      }),
      (f.prototype.pointFromY = function (e, t) {
        (e = new a(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr(),
          i = r.redSub(this.c2),
          n = r.redMul(this.d).redMul(this.c2).redSub(this.a),
          o = i.redMul(n.redInvm());
        if (0 === o.cmp(this.zero)) {
          if (t) throw new Error("invalid point");
          return this.point(this.zero, e);
        }
        var s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero))
          throw new Error("invalid point");
        return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e);
      }),
      (f.prototype.validate = function (e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
          r = e.y.redSqr(),
          i = t.redMul(this.a).redAdd(r),
          n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
        return 0 === i.cmp(n);
      }),
      o(u, s.BasePoint),
      (f.prototype.pointFromJSON = function (e) {
        return u.fromJSON(this, e);
      }),
      (f.prototype.point = function (e, t, r, i) {
        return new u(this, e, t, r, i);
      }),
      (u.fromJSON = function (e, t) {
        return new u(e, t[0], t[1], t[2]);
      }),
      (u.prototype.inspect = function () {
        return this.isInfinity()
          ? "<EC Point Infinity>"
          : "<EC Point x: " +
              this.x.fromRed().toString(16, 2) +
              " y: " +
              this.y.fromRed().toString(16, 2) +
              " z: " +
              this.z.fromRed().toString(16, 2) +
              ">";
      }),
      (u.prototype.isInfinity = function () {
        return (
          0 === this.x.cmpn(0) &&
          (0 === this.y.cmp(this.z) ||
            (this.zOne && 0 === this.y.cmp(this.curve.c)))
        );
      }),
      (u.prototype._extDbl = function () {
        var e = this.x.redSqr(),
          t = this.y.redSqr(),
          r = this.z.redSqr();
        r = r.redIAdd(r);
        var i = this.curve._mulA(e),
          n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
          a = i.redAdd(t),
          o = a.redSub(r),
          s = i.redSub(t),
          c = n.redMul(o),
          f = a.redMul(s),
          u = n.redMul(s),
          d = o.redMul(a);
        return this.curve.point(c, f, d, u);
      }),
      (u.prototype._projDbl = function () {
        var e,
          t,
          r,
          i = this.x.redAdd(this.y).redSqr(),
          n = this.x.redSqr(),
          a = this.y.redSqr();
        if (this.curve.twisted) {
          var o = (f = this.curve._mulA(n)).redAdd(a);
          if (this.zOne)
            (e = i.redSub(n).redSub(a).redMul(o.redSub(this.curve.two))),
              (t = o.redMul(f.redSub(a))),
              (r = o.redSqr().redSub(o).redSub(o));
          else {
            var s = this.z.redSqr(),
              c = o.redSub(s).redISub(s);
            (e = i.redSub(n).redISub(a).redMul(c)),
              (t = o.redMul(f.redSub(a))),
              (r = o.redMul(c));
          }
        } else {
          var f = n.redAdd(a);
          (s = this.curve._mulC(this.z).redSqr()), (c = f.redSub(s).redSub(s));
          (e = this.curve._mulC(i.redISub(f)).redMul(c)),
            (t = this.curve._mulC(f).redMul(n.redISub(a))),
            (r = f.redMul(c));
        }
        return this.curve.point(e, t, r);
      }),
      (u.prototype.dbl = function () {
        return this.isInfinity()
          ? this
          : this.curve.extended
          ? this._extDbl()
          : this._projDbl();
      }),
      (u.prototype._extAdd = function (e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
          r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
          i = this.t.redMul(this.curve.dd).redMul(e.t),
          n = this.z.redMul(e.z.redAdd(e.z)),
          a = r.redSub(t),
          o = n.redSub(i),
          s = n.redAdd(i),
          c = r.redAdd(t),
          f = a.redMul(o),
          u = s.redMul(c),
          d = a.redMul(c),
          l = o.redMul(s);
        return this.curve.point(f, u, l, d);
      }),
      (u.prototype._projAdd = function (e) {
        var t,
          r,
          i = this.z.redMul(e.z),
          n = i.redSqr(),
          a = this.x.redMul(e.x),
          o = this.y.redMul(e.y),
          s = this.curve.d.redMul(a).redMul(o),
          c = n.redSub(s),
          f = n.redAdd(s),
          u = this.x
            .redAdd(this.y)
            .redMul(e.x.redAdd(e.y))
            .redISub(a)
            .redISub(o),
          d = i.redMul(c).redMul(u);
        return (
          this.curve.twisted
            ? ((t = i.redMul(f).redMul(o.redSub(this.curve._mulA(a)))),
              (r = c.redMul(f)))
            : ((t = i.redMul(f).redMul(o.redSub(a))),
              (r = this.curve._mulC(c).redMul(f))),
          this.curve.point(d, t, r)
        );
      }),
      (u.prototype.add = function (e) {
        return this.isInfinity()
          ? e
          : e.isInfinity()
          ? this
          : this.curve.extended
          ? this._extAdd(e)
          : this._projAdd(e);
      }),
      (u.prototype.mul = function (e) {
        return this._hasDoubles(e)
          ? this.curve._fixedNafMul(this, e)
          : this.curve._wnafMul(this, e);
      }),
      (u.prototype.mulAdd = function (e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
      }),
      (u.prototype.jmulAdd = function (e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
      }),
      (u.prototype.normalize = function () {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return (
          (this.x = this.x.redMul(e)),
          (this.y = this.y.redMul(e)),
          this.t && (this.t = this.t.redMul(e)),
          (this.z = this.curve.one),
          (this.zOne = !0),
          this
        );
      }),
      (u.prototype.neg = function () {
        return this.curve.point(
          this.x.redNeg(),
          this.y,
          this.z,
          this.t && this.t.redNeg()
        );
      }),
      (u.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
      }),
      (u.prototype.getY = function () {
        return this.normalize(), this.y.fromRed();
      }),
      (u.prototype.eq = function (e) {
        return (
          this === e ||
          (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
        );
      }),
      (u.prototype.eqXToP = function (e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var r = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
          if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
          if ((t.redIAdd(i), 0 === this.x.cmp(t))) return !0;
        }
      }),
      (u.prototype.toP = u.prototype.normalize),
      (u.prototype.mixedAdd = u.prototype.add);
  },
  function (e, t, r) {
    "use strict";
    var i,
      n = t,
      a = r(39),
      o = r(4),
      s = o.utils.assert;
    function c(e) {
      "short" === e.type
        ? (this.curve = new o.curve.short(e))
        : "edwards" === e.type
        ? (this.curve = new o.curve.edwards(e))
        : (this.curve = new o.curve.mont(e)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = e.hash),
        s(this.g.validate(), "Invalid curve"),
        s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    function f(e, t) {
      Object.defineProperty(n, e, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var r = new c(t);
          return (
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
            }),
            r
          );
        },
      });
    }
    (n.PresetCurve = c),
      f("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: a.sha256,
        gRed: !1,
        g: [
          "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
          "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
        ],
      }),
      f("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: a.sha256,
        gRed: !1,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
        ],
      }),
      f("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: a.sha256,
        gRed: !1,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      f("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: a.sha384,
        gRed: !1,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
        ],
      }),
      f("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: a.sha512,
        gRed: !1,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
        ],
      }),
      f("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: a.sha256,
        gRed: !1,
        g: ["9"],
      }),
      f("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: a.sha256,
        gRed: !1,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          "6666666666666666666666666666666666666666666666666666666666666658",
        ],
      });
    try {
      i = r(142);
    } catch (e) {
      i = void 0;
    }
    f("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: a.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda:
        "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3",
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15",
        },
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        i,
      ],
    });
  },
  function (e, t, r) {
    "use strict";
    (t.sha1 = r(137)),
      (t.sha224 = r(138)),
      (t.sha256 = r(67)),
      (t.sha384 = r(139)),
      (t.sha512 = r(68));
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(16),
      a = r(66),
      o = i.rotl32,
      s = i.sum32,
      c = i.sum32_5,
      f = a.ft_1,
      u = n.BlockHash,
      d = [1518500249, 1859775393, 2400959708, 3395469782];
    function l() {
      if (!(this instanceof l)) return new l();
      u.call(this),
        (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
        (this.W = new Array(80));
    }
    i.inherits(l, u),
      (e.exports = l),
      (l.blockSize = 512),
      (l.outSize = 160),
      (l.hmacStrength = 80),
      (l.padLength = 64),
      (l.prototype._update = function (e, t) {
        for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
        for (; i < r.length; i++)
          r[i] = o(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
        var n = this.h[0],
          a = this.h[1],
          u = this.h[2],
          l = this.h[3],
          h = this.h[4];
        for (i = 0; i < r.length; i++) {
          var p = ~~(i / 20),
            b = c(o(n, 5), f(p, a, u, l), h, r[i], d[p]);
          (h = l), (l = u), (u = o(a, 30)), (a = n), (n = b);
        }
        (this.h[0] = s(this.h[0], n)),
          (this.h[1] = s(this.h[1], a)),
          (this.h[2] = s(this.h[2], u)),
          (this.h[3] = s(this.h[3], l)),
          (this.h[4] = s(this.h[4], h));
      }),
      (l.prototype._digest = function (e) {
        return "hex" === e
          ? i.toHex32(this.h, "big")
          : i.split32(this.h, "big");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(67);
    function a() {
      if (!(this instanceof a)) return new a();
      n.call(this),
        (this.h = [
          3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
          1694076839, 3204075428,
        ]);
    }
    i.inherits(a, n),
      (e.exports = a),
      (a.blockSize = 512),
      (a.outSize = 224),
      (a.hmacStrength = 192),
      (a.padLength = 64),
      (a.prototype._digest = function (e) {
        return "hex" === e
          ? i.toHex32(this.h.slice(0, 7), "big")
          : i.split32(this.h.slice(0, 7), "big");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(68);
    function a() {
      if (!(this instanceof a)) return new a();
      n.call(this),
        (this.h = [
          3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
          355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
          3675008525, 1694076839, 1203062813, 3204075428,
        ]);
    }
    i.inherits(a, n),
      (e.exports = a),
      (a.blockSize = 1024),
      (a.outSize = 384),
      (a.hmacStrength = 192),
      (a.padLength = 128),
      (a.prototype._digest = function (e) {
        return "hex" === e
          ? i.toHex32(this.h.slice(0, 12), "big")
          : i.split32(this.h.slice(0, 12), "big");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(16),
      a = i.rotl32,
      o = i.sum32,
      s = i.sum32_3,
      c = i.sum32_4,
      f = n.BlockHash;
    function u() {
      if (!(this instanceof u)) return new u();
      f.call(this),
        (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
        (this.endian = "little");
    }
    function d(e, t, r, i) {
      return e <= 15
        ? t ^ r ^ i
        : e <= 31
        ? (t & r) | (~t & i)
        : e <= 47
        ? (t | ~r) ^ i
        : e <= 63
        ? (t & i) | (r & ~i)
        : t ^ (r | ~i);
    }
    function l(e) {
      return e <= 15
        ? 0
        : e <= 31
        ? 1518500249
        : e <= 47
        ? 1859775393
        : e <= 63
        ? 2400959708
        : 2840853838;
    }
    function h(e) {
      return e <= 15
        ? 1352829926
        : e <= 31
        ? 1548603684
        : e <= 47
        ? 1836072691
        : e <= 63
        ? 2053994217
        : 0;
    }
    i.inherits(u, f),
      (t.ripemd160 = u),
      (u.blockSize = 512),
      (u.outSize = 160),
      (u.hmacStrength = 192),
      (u.padLength = 64),
      (u.prototype._update = function (e, t) {
        for (
          var r = this.h[0],
            i = this.h[1],
            n = this.h[2],
            f = this.h[3],
            u = this.h[4],
            v = r,
            y = i,
            w = n,
            _ = f,
            S = u,
            k = 0;
          k < 80;
          k++
        ) {
          var M = o(a(c(r, d(k, i, n, f), e[p[k] + t], l(k)), m[k]), u);
          (r = u),
            (u = f),
            (f = a(n, 10)),
            (n = i),
            (i = M),
            (M = o(a(c(v, d(79 - k, y, w, _), e[b[k] + t], h(k)), g[k]), S)),
            (v = S),
            (S = _),
            (_ = a(w, 10)),
            (w = y),
            (y = M);
        }
        (M = s(this.h[1], n, _)),
          (this.h[1] = s(this.h[2], f, S)),
          (this.h[2] = s(this.h[3], u, v)),
          (this.h[3] = s(this.h[4], r, y)),
          (this.h[4] = s(this.h[0], i, w)),
          (this.h[0] = M);
      }),
      (u.prototype._digest = function (e) {
        return "hex" === e
          ? i.toHex32(this.h, "little")
          : i.split32(this.h, "little");
      });
    var p = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
        6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0,
        6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
        4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
      ],
      b = [
        5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
        13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
        12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
        14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
      ],
      m = [
        11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11,
        9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14,
        8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6,
        5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
      ],
      g = [
        8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
        12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12,
        13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12,
        5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
      ];
  },
  function (e, t, r) {
    "use strict";
    var i = r(6),
      n = r(5);
    function a(e, t, r) {
      if (!(this instanceof a)) return new a(e, t, r);
      (this.Hash = e),
        (this.blockSize = e.blockSize / 8),
        (this.outSize = e.outSize / 8),
        (this.inner = null),
        (this.outer = null),
        this._init(i.toArray(t, r));
    }
    (e.exports = a),
      (a.prototype._init = function (e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
          n(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++) e.push(0);
        for (t = 0; t < e.length; t++) e[t] ^= 54;
        for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
          e[t] ^= 106;
        this.outer = new this.Hash().update(e);
      }),
      (a.prototype.update = function (e, t) {
        return this.inner.update(e, t), this;
      }),
      (a.prototype.digest = function (e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e);
      });
  },
  function (e, t) {
    e.exports = {
      doubles: {
        step: 4,
        points: [
          [
            "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
            "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
          ],
          [
            "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
            "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
          ],
          [
            "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
            "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
          ],
          [
            "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
            "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
          ],
          [
            "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
            "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
          ],
          [
            "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
            "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
          ],
          [
            "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
            "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
          ],
          [
            "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
            "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
          ],
          [
            "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
            "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
          ],
          [
            "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
            "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
          ],
          [
            "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
            "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
          ],
          [
            "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
            "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
          ],
          [
            "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
            "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
          ],
          [
            "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
            "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
          ],
          [
            "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
            "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
          ],
          [
            "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
            "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
          ],
          [
            "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
            "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
          ],
          [
            "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
            "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
          ],
          [
            "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
            "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
          ],
          [
            "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
            "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
          ],
          [
            "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
            "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
          ],
          [
            "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
            "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
          ],
          [
            "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
            "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
          ],
          [
            "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
            "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
          ],
          [
            "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
            "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
          ],
          [
            "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
            "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
          ],
          [
            "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
            "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
          ],
          [
            "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
            "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
          ],
          [
            "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
            "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
          ],
          [
            "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
            "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
          ],
          [
            "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
            "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
          ],
          [
            "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
            "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
          ],
          [
            "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
            "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
          ],
          [
            "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
            "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
          ],
          [
            "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
            "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
          ],
          [
            "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
            "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
          ],
          [
            "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
            "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
          ],
          [
            "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
            "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
          ],
          [
            "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
            "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
          ],
          [
            "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
            "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
          ],
          [
            "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
            "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
          ],
          [
            "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
            "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
          ],
          [
            "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
            "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
          ],
          [
            "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
            "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
          ],
          [
            "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
            "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
          ],
          [
            "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
            "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
          ],
          [
            "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
            "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
          ],
          [
            "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
            "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
          ],
          [
            "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
            "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
          ],
          [
            "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
            "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
          ],
          [
            "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
            "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
          ],
          [
            "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
            "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
          ],
          [
            "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
            "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
          ],
          [
            "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
            "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
          ],
          [
            "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
            "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
          ],
          [
            "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
            "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
          ],
          [
            "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
            "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
          ],
          [
            "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
            "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
          ],
          [
            "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
            "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
          ],
          [
            "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
            "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
          ],
          [
            "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
            "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
          ],
          [
            "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
            "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
          ],
          [
            "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
            "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
          ],
          [
            "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
            "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
          ],
          [
            "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
            "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
          ],
        ],
      },
      naf: {
        wnd: 7,
        points: [
          [
            "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
            "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
          ],
          [
            "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
            "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
          ],
          [
            "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
            "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
          ],
          [
            "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
            "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
          ],
          [
            "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
            "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
          ],
          [
            "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
            "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
          ],
          [
            "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
            "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
          ],
          [
            "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
            "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
          ],
          [
            "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
            "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
          ],
          [
            "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
            "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
          ],
          [
            "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
            "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
          ],
          [
            "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
            "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
          ],
          [
            "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
            "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
          ],
          [
            "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
            "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
          ],
          [
            "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
            "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
          ],
          [
            "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
            "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
          ],
          [
            "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
            "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
          ],
          [
            "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
            "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
          ],
          [
            "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
            "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
          ],
          [
            "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
            "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
          ],
          [
            "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
            "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
          ],
          [
            "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
            "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
          ],
          [
            "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
            "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
          ],
          [
            "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
            "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
          ],
          [
            "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
            "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
          ],
          [
            "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
            "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
          ],
          [
            "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
            "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
          ],
          [
            "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
            "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
          ],
          [
            "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
            "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
          ],
          [
            "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
            "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
          ],
          [
            "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
            "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
          ],
          [
            "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
            "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
          ],
          [
            "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
            "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
          ],
          [
            "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
            "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
          ],
          [
            "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
            "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
          ],
          [
            "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
            "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
          ],
          [
            "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
            "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
          ],
          [
            "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
            "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
          ],
          [
            "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
            "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
          ],
          [
            "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
            "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
          ],
          [
            "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
            "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
          ],
          [
            "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
            "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
          ],
          [
            "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
            "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
          ],
          [
            "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
            "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
          ],
          [
            "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
            "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
          ],
          [
            "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
            "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
          ],
          [
            "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
            "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
          ],
          [
            "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
            "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
          ],
          [
            "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
            "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
          ],
          [
            "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
            "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
          ],
          [
            "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
            "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
          ],
          [
            "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
            "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
          ],
          [
            "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
            "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
          ],
          [
            "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
            "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
          ],
          [
            "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
            "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
          ],
          [
            "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
            "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
          ],
          [
            "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
            "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
          ],
          [
            "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
            "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
          ],
          [
            "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
            "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
          ],
          [
            "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
            "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
          ],
          [
            "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
            "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
          ],
          [
            "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
            "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
          ],
          [
            "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
            "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
          ],
          [
            "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
            "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
          ],
          [
            "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
            "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
          ],
          [
            "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
            "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
          ],
          [
            "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
            "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
          ],
          [
            "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
            "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
          ],
          [
            "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
            "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
          ],
          [
            "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
            "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
          ],
          [
            "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
            "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
          ],
          [
            "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
            "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
          ],
          [
            "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
            "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
          ],
          [
            "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
            "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
          ],
          [
            "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
            "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
          ],
          [
            "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
            "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
          ],
          [
            "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
            "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
          ],
          [
            "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
            "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
          ],
          [
            "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
            "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
          ],
          [
            "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
            "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
          ],
          [
            "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
            "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
          ],
          [
            "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
            "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
          ],
          [
            "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
            "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
          ],
          [
            "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
            "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
          ],
          [
            "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
            "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
          ],
          [
            "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
            "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
          ],
          [
            "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
            "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
          ],
          [
            "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
            "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
          ],
          [
            "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
            "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
          ],
          [
            "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
            "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
          ],
          [
            "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
            "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
          ],
          [
            "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
            "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
          ],
          [
            "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
            "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
          ],
          [
            "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
            "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
          ],
          [
            "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
            "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
          ],
          [
            "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
            "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
          ],
          [
            "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
            "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
          ],
          [
            "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
            "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
          ],
          [
            "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
            "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
          ],
          [
            "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
            "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
          ],
          [
            "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
            "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
          ],
          [
            "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
            "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
          ],
          [
            "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
            "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
          ],
          [
            "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
            "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
          ],
          [
            "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
            "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
          ],
          [
            "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
            "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
          ],
          [
            "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
            "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
          ],
          [
            "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
            "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
          ],
          [
            "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
            "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
          ],
          [
            "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
            "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
          ],
          [
            "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
            "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
          ],
          [
            "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
            "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
          ],
          [
            "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
            "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
          ],
          [
            "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
            "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
          ],
          [
            "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
            "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
          ],
          [
            "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
            "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
          ],
          [
            "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
            "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
          ],
          [
            "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
            "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
          ],
          [
            "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
            "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
          ],
          [
            "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
            "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
          ],
          [
            "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
            "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
          ],
          [
            "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
            "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
          ],
          [
            "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
            "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
          ],
          [
            "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
            "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
          ],
          [
            "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
            "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
          ],
          [
            "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
            "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
          ],
          [
            "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
            "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
          ],
        ],
      },
    };
  },
  function (e, t, r) {
    "use strict";
    var i = r(3),
      n = r(144),
      a = r(4),
      o = a.utils.assert,
      s = r(145),
      c = r(146);
    function f(e) {
      if (!(this instanceof f)) return new f(e);
      "string" == typeof e &&
        (o(a.curves.hasOwnProperty(e), "Unknown curve " + e),
        (e = a.curves[e])),
        e instanceof a.curves.PresetCurve && (e = { curve: e }),
        (this.curve = e.curve.curve),
        (this.n = this.curve.n),
        (this.nh = this.n.ushrn(1)),
        (this.g = this.curve.g),
        (this.g = e.curve.g),
        this.g.precompute(e.curve.n.bitLength() + 1),
        (this.hash = e.hash || e.curve.hash);
    }
    (e.exports = f),
      (f.prototype.keyPair = function (e) {
        return new s(this, e);
      }),
      (f.prototype.keyFromPrivate = function (e, t) {
        return s.fromPrivate(this, e, t);
      }),
      (f.prototype.keyFromPublic = function (e, t) {
        return s.fromPublic(this, e, t);
      }),
      (f.prototype.genKeyPair = function (e) {
        e || (e = {});
        for (
          var t = new n({
              hash: this.hash,
              pers: e.pers,
              persEnc: e.persEnc || "utf8",
              entropy: e.entropy || a.rand(this.hash.hmacStrength),
              entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
              nonce: this.n.toArray(),
            }),
            r = this.n.byteLength(),
            o = this.n.sub(new i(2));
          ;

        ) {
          var s = new i(t.generate(r));
          if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
        }
      }),
      (f.prototype._truncateToN = function (e, t) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return (
          r > 0 && (e = e.ushrn(r)),
          !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        );
      }),
      (f.prototype.sign = function (e, t, r, a) {
        "object" == typeof r && ((a = r), (r = null)),
          a || (a = {}),
          (t = this.keyFromPrivate(t, r)),
          (e = this._truncateToN(new i(e, 16)));
        for (
          var o = this.n.byteLength(),
            s = t.getPrivate().toArray("be", o),
            f = e.toArray("be", o),
            u = new n({
              hash: this.hash,
              entropy: s,
              nonce: f,
              pers: a.pers,
              persEnc: a.persEnc || "utf8",
            }),
            d = this.n.sub(new i(1)),
            l = 0;
          ;
          l++
        ) {
          var h = a.k ? a.k(l) : new i(u.generate(this.n.byteLength()));
          if (!((h = this._truncateToN(h, !0)).cmpn(1) <= 0 || h.cmp(d) >= 0)) {
            var p = this.g.mul(h);
            if (!p.isInfinity()) {
              var b = p.getX(),
                m = b.umod(this.n);
              if (0 !== m.cmpn(0)) {
                var g = h.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                  var v = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);
                  return (
                    a.canonical &&
                      g.cmp(this.nh) > 0 &&
                      ((g = this.n.sub(g)), (v ^= 1)),
                    new c({ r: m, s: g, recoveryParam: v })
                  );
                }
              }
            }
          }
        }
      }),
      (f.prototype.verify = function (e, t, r, n) {
        (e = this._truncateToN(new i(e, 16))), (r = this.keyFromPublic(r, n));
        var a = (t = new c(t, "hex")).r,
          o = t.s;
        if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
        var s,
          f = o.invm(this.n),
          u = f.mul(e).umod(this.n),
          d = f.mul(a).umod(this.n);
        return this.curve._maxwellTrick
          ? !(s = this.g.jmulAdd(u, r.getPublic(), d)).isInfinity() &&
              s.eqXToP(a)
          : !(s = this.g.mulAdd(u, r.getPublic(), d)).isInfinity() &&
              0 === s.getX().umod(this.n).cmp(a);
      }),
      (f.prototype.recoverPubKey = function (e, t, r, n) {
        o((3 & r) === r, "The recovery param is more than two bits"),
          (t = new c(t, n));
        var a = this.n,
          s = new i(e),
          f = t.r,
          u = t.s,
          d = 1 & r,
          l = r >> 1;
        if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
          throw new Error("Unable to find sencond key candinate");
        f = l
          ? this.curve.pointFromX(f.add(this.curve.n), d)
          : this.curve.pointFromX(f, d);
        var h = t.r.invm(a),
          p = a.sub(s).mul(h).umod(a),
          b = u.mul(h).umod(a);
        return this.g.mulAdd(p, f, b);
      }),
      (f.prototype.getKeyRecoveryParam = function (e, t, r, i) {
        if (null !== (t = new c(t, i)).recoveryParam) return t.recoveryParam;
        for (var n = 0; n < 4; n++) {
          var a;
          try {
            a = this.recoverPubKey(e, t, n);
          } catch (e) {
            continue;
          }
          if (a.eq(r)) return n;
        }
        throw new Error("Unable to find valid recovery factor");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(39),
      n = r(65),
      a = r(5);
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      (this.hash = e.hash),
        (this.predResist = !!e.predResist),
        (this.outLen = this.hash.outSize),
        (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
        (this._reseed = null),
        (this.reseedInterval = null),
        (this.K = null),
        (this.V = null);
      var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
        r = n.toArray(e.nonce, e.nonceEnc || "hex"),
        i = n.toArray(e.pers, e.persEnc || "hex");
      a(
        t.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      ),
        this._init(t, r, i);
    }
    (e.exports = o),
      (o.prototype._init = function (e, t, r) {
        var i = e.concat(t).concat(r);
        (this.K = new Array(this.outLen / 8)),
          (this.V = new Array(this.outLen / 8));
        for (var n = 0; n < this.V.length; n++)
          (this.K[n] = 0), (this.V[n] = 1);
        this._update(i),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
      (o.prototype._hmac = function () {
        return new i.hmac(this.hash, this.K);
      }),
      (o.prototype._update = function (e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)),
          (this.K = t.digest()),
          (this.V = this._hmac().update(this.V).digest()),
          e &&
            ((this.K = this._hmac()
              .update(this.V)
              .update([1])
              .update(e)
              .digest()),
            (this.V = this._hmac().update(this.V).digest()));
      }),
      (o.prototype.reseed = function (e, t, r, i) {
        "string" != typeof t && ((i = r), (r = t), (t = null)),
          (e = n.toArray(e, t)),
          (r = n.toArray(r, i)),
          a(
            e.length >= this.minEntropy / 8,
            "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
          ),
          this._update(e.concat(r || [])),
          (this._reseed = 1);
      }),
      (o.prototype.generate = function (e, t, r, i) {
        if (this._reseed > this.reseedInterval)
          throw new Error("Reseed is required");
        "string" != typeof t && ((i = r), (r = t), (t = null)),
          r && ((r = n.toArray(r, i || "hex")), this._update(r));
        for (var a = []; a.length < e; )
          (this.V = this._hmac().update(this.V).digest()),
            (a = a.concat(this.V));
        var o = a.slice(0, e);
        return this._update(r), this._reseed++, n.encode(o, t);
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(3),
      n = r(4).utils.assert;
    function a(e, t) {
      (this.ec = e),
        (this.priv = null),
        (this.pub = null),
        t.priv && this._importPrivate(t.priv, t.privEnc),
        t.pub && this._importPublic(t.pub, t.pubEnc);
    }
    (e.exports = a),
      (a.fromPublic = function (e, t, r) {
        return t instanceof a ? t : new a(e, { pub: t, pubEnc: r });
      }),
      (a.fromPrivate = function (e, t, r) {
        return t instanceof a ? t : new a(e, { priv: t, privEnc: r });
      }),
      (a.prototype.validate = function () {
        var e = this.getPublic();
        return e.isInfinity()
          ? { result: !1, reason: "Invalid public key" }
          : e.validate()
          ? e.mul(this.ec.curve.n).isInfinity()
            ? { result: !0, reason: null }
            : { result: !1, reason: "Public key * N != O" }
          : { result: !1, reason: "Public key is not a point" };
      }),
      (a.prototype.getPublic = function (e, t) {
        return (
          "string" == typeof e && ((t = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          t ? this.pub.encode(t, e) : this.pub
        );
      }),
      (a.prototype.getPrivate = function (e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv;
      }),
      (a.prototype._importPrivate = function (e, t) {
        (this.priv = new i(e, t || 16)),
          (this.priv = this.priv.umod(this.ec.curve.n));
      }),
      (a.prototype._importPublic = function (e, t) {
        if (e.x || e.y)
          return (
            "mont" === this.ec.curve.type
              ? n(e.x, "Need x coordinate")
              : ("short" !== this.ec.curve.type &&
                  "edwards" !== this.ec.curve.type) ||
                n(e.x && e.y, "Need both x and y coordinate"),
            void (this.pub = this.ec.curve.point(e.x, e.y))
          );
        this.pub = this.ec.curve.decodePoint(e, t);
      }),
      (a.prototype.derive = function (e) {
        return e.mul(this.priv).getX();
      }),
      (a.prototype.sign = function (e, t, r) {
        return this.ec.sign(e, this, t, r);
      }),
      (a.prototype.verify = function (e, t) {
        return this.ec.verify(e, t, this);
      }),
      (a.prototype.inspect = function () {
        return (
          "<Key priv: " +
          (this.priv && this.priv.toString(16, 2)) +
          " pub: " +
          (this.pub && this.pub.inspect()) +
          " >"
        );
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(3),
      n = r(4).utils,
      a = n.assert;
    function o(e, t) {
      if (e instanceof o) return e;
      this._importDER(e, t) ||
        (a(e.r && e.s, "Signature without r or s"),
        (this.r = new i(e.r, 16)),
        (this.s = new i(e.s, 16)),
        void 0 === e.recoveryParam
          ? (this.recoveryParam = null)
          : (this.recoveryParam = e.recoveryParam));
    }
    function s() {
      this.place = 0;
    }
    function c(e, t) {
      var r = e[t.place++];
      if (!(128 & r)) return r;
      for (var i = 15 & r, n = 0, a = 0, o = t.place; a < i; a++, o++)
        (n <<= 8), (n |= e[o]);
      return (t.place = o), n;
    }
    function f(e) {
      for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
        t++;
      return 0 === t ? e : e.slice(t);
    }
    function u(e, t) {
      if (t < 128) e.push(t);
      else {
        var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
        for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
        e.push(t);
      }
    }
    (e.exports = o),
      (o.prototype._importDER = function (e, t) {
        e = n.toArray(e, t);
        var r = new s();
        if (48 !== e[r.place++]) return !1;
        if (c(e, r) + r.place !== e.length) return !1;
        if (2 !== e[r.place++]) return !1;
        var a = c(e, r),
          o = e.slice(r.place, a + r.place);
        if (((r.place += a), 2 !== e[r.place++])) return !1;
        var f = c(e, r);
        if (e.length !== f + r.place) return !1;
        var u = e.slice(r.place, f + r.place);
        return (
          0 === o[0] && 128 & o[1] && (o = o.slice(1)),
          0 === u[0] && 128 & u[1] && (u = u.slice(1)),
          (this.r = new i(o)),
          (this.s = new i(u)),
          (this.recoveryParam = null),
          !0
        );
      }),
      (o.prototype.toDER = function (e) {
        var t = this.r.toArray(),
          r = this.s.toArray();
        for (
          128 & t[0] && (t = [0].concat(t)),
            128 & r[0] && (r = [0].concat(r)),
            t = f(t),
            r = f(r);
          !(r[0] || 128 & r[1]);

        )
          r = r.slice(1);
        var i = [2];
        u(i, t.length), (i = i.concat(t)).push(2), u(i, r.length);
        var a = i.concat(r),
          o = [48];
        return u(o, a.length), (o = o.concat(a)), n.encode(o, e);
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(39),
      n = r(4),
      a = n.utils,
      o = a.assert,
      s = a.parseBytes,
      c = r(148),
      f = r(149);
    function u(e) {
      if (
        (o("ed25519" === e, "only tested with ed25519 so far"),
        !(this instanceof u))
      )
        return new u(e);
      e = n.curves[e].curve;
      (this.curve = e),
        (this.g = e.g),
        this.g.precompute(e.n.bitLength() + 1),
        (this.pointClass = e.point().constructor),
        (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
        (this.hash = i.sha512);
    }
    (e.exports = u),
      (u.prototype.sign = function (e, t) {
        e = s(e);
        var r = this.keyFromSecret(t),
          i = this.hashInt(r.messagePrefix(), e),
          n = this.g.mul(i),
          a = this.encodePoint(n),
          o = this.hashInt(a, r.pubBytes(), e).mul(r.priv()),
          c = i.add(o).umod(this.curve.n);
        return this.makeSignature({ R: n, S: c, Rencoded: a });
      }),
      (u.prototype.verify = function (e, t, r) {
        (e = s(e)), (t = this.makeSignature(t));
        var i = this.keyFromPublic(r),
          n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
          a = this.g.mul(t.S());
        return t.R().add(i.pub().mul(n)).eq(a);
      }),
      (u.prototype.hashInt = function () {
        for (var e = this.hash(), t = 0; t < arguments.length; t++)
          e.update(arguments[t]);
        return a.intFromLE(e.digest()).umod(this.curve.n);
      }),
      (u.prototype.keyFromPublic = function (e) {
        return c.fromPublic(this, e);
      }),
      (u.prototype.keyFromSecret = function (e) {
        return c.fromSecret(this, e);
      }),
      (u.prototype.makeSignature = function (e) {
        return e instanceof f ? e : new f(this, e);
      }),
      (u.prototype.encodePoint = function (e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t;
      }),
      (u.prototype.decodePoint = function (e) {
        var t = (e = a.parseBytes(e)).length - 1,
          r = e.slice(0, t).concat(-129 & e[t]),
          i = 0 != (128 & e[t]),
          n = a.intFromLE(r);
        return this.curve.pointFromY(n, i);
      }),
      (u.prototype.encodeInt = function (e) {
        return e.toArray("le", this.encodingLength);
      }),
      (u.prototype.decodeInt = function (e) {
        return a.intFromLE(e);
      }),
      (u.prototype.isPoint = function (e) {
        return e instanceof this.pointClass;
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(4).utils,
      n = i.assert,
      a = i.parseBytes,
      o = i.cachedProperty;
    function s(e, t) {
      (this.eddsa = e),
        (this._secret = a(t.secret)),
        e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = a(t.pub));
    }
    (s.fromPublic = function (e, t) {
      return t instanceof s ? t : new s(e, { pub: t });
    }),
      (s.fromSecret = function (e, t) {
        return t instanceof s ? t : new s(e, { secret: t });
      }),
      (s.prototype.secret = function () {
        return this._secret;
      }),
      o(s, "pubBytes", function () {
        return this.eddsa.encodePoint(this.pub());
      }),
      o(s, "pub", function () {
        return this._pubBytes
          ? this.eddsa.decodePoint(this._pubBytes)
          : this.eddsa.g.mul(this.priv());
      }),
      o(s, "privBytes", function () {
        var e = this.eddsa,
          t = this.hash(),
          r = e.encodingLength - 1,
          i = t.slice(0, e.encodingLength);
        return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i;
      }),
      o(s, "priv", function () {
        return this.eddsa.decodeInt(this.privBytes());
      }),
      o(s, "hash", function () {
        return this.eddsa.hash().update(this.secret()).digest();
      }),
      o(s, "messagePrefix", function () {
        return this.hash().slice(this.eddsa.encodingLength);
      }),
      (s.prototype.sign = function (e) {
        return (
          n(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
        );
      }),
      (s.prototype.verify = function (e, t) {
        return this.eddsa.verify(e, t, this);
      }),
      (s.prototype.getSecret = function (e) {
        return (
          n(this._secret, "KeyPair is public only"), i.encode(this.secret(), e)
        );
      }),
      (s.prototype.getPublic = function (e) {
        return i.encode(this.pubBytes(), e);
      }),
      (e.exports = s);
  },
  function (e, t, r) {
    "use strict";
    var i = r(3),
      n = r(4).utils,
      a = n.assert,
      o = n.cachedProperty,
      s = n.parseBytes;
    function c(e, t) {
      (this.eddsa = e),
        "object" != typeof t && (t = s(t)),
        Array.isArray(t) &&
          (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength),
          }),
        a(t.R && t.S, "Signature without R or S"),
        e.isPoint(t.R) && (this._R = t.R),
        t.S instanceof i && (this._S = t.S),
        (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
        (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
    }
    o(c, "S", function () {
      return this.eddsa.decodeInt(this.Sencoded());
    }),
      o(c, "R", function () {
        return this.eddsa.decodePoint(this.Rencoded());
      }),
      o(c, "Rencoded", function () {
        return this.eddsa.encodePoint(this.R());
      }),
      o(c, "Sencoded", function () {
        return this.eddsa.encodeInt(this.S());
      }),
      (c.prototype.toBytes = function () {
        return this.Rencoded().concat(this.Sencoded());
      }),
      (c.prototype.toHex = function () {
        return n.encode(this.toBytes(), "hex").toUpperCase();
      }),
      (e.exports = c);
  },
  function (e, t, r) {
    "use strict";
    var i = r(17);
    t.certificate = r(160);
    var n = i.define("RSAPrivateKey", function () {
      this.seq().obj(
        this.key("version").int(),
        this.key("modulus").int(),
        this.key("publicExponent").int(),
        this.key("privateExponent").int(),
        this.key("prime1").int(),
        this.key("prime2").int(),
        this.key("exponent1").int(),
        this.key("exponent2").int(),
        this.key("coefficient").int()
      );
    });
    t.RSAPrivateKey = n;
    var a = i.define("RSAPublicKey", function () {
      this.seq().obj(
        this.key("modulus").int(),
        this.key("publicExponent").int()
      );
    });
    t.RSAPublicKey = a;
    var o = i.define("SubjectPublicKeyInfo", function () {
      this.seq().obj(
        this.key("algorithm").use(s),
        this.key("subjectPublicKey").bitstr()
      );
    });
    t.PublicKey = o;
    var s = i.define("AlgorithmIdentifier", function () {
        this.seq().obj(
          this.key("algorithm").objid(),
          this.key("none").null_().optional(),
          this.key("curve").objid().optional(),
          this.key("params")
            .seq()
            .obj(this.key("p").int(), this.key("q").int(), this.key("g").int())
            .optional()
        );
      }),
      c = i.define("PrivateKeyInfo", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("algorithm").use(s),
          this.key("subjectPrivateKey").octstr()
        );
      });
    t.PrivateKey = c;
    var f = i.define("EncryptedPrivateKeyInfo", function () {
      this.seq().obj(
        this.key("algorithm")
          .seq()
          .obj(
            this.key("id").objid(),
            this.key("decrypt")
              .seq()
              .obj(
                this.key("kde")
                  .seq()
                  .obj(
                    this.key("id").objid(),
                    this.key("kdeparams")
                      .seq()
                      .obj(this.key("salt").octstr(), this.key("iters").int())
                  ),
                this.key("cipher")
                  .seq()
                  .obj(this.key("algo").objid(), this.key("iv").octstr())
              )
          ),
        this.key("subjectPrivateKey").octstr()
      );
    });
    t.EncryptedPrivateKey = f;
    var u = i.define("DSAPrivateKey", function () {
      this.seq().obj(
        this.key("version").int(),
        this.key("p").int(),
        this.key("q").int(),
        this.key("g").int(),
        this.key("pub_key").int(),
        this.key("priv_key").int()
      );
    });
    (t.DSAPrivateKey = u),
      (t.DSAparam = i.define("DSAparam", function () {
        this.int();
      }));
    var d = i.define("ECPrivateKey", function () {
      this.seq().obj(
        this.key("version").int(),
        this.key("privateKey").octstr(),
        this.key("parameters").optional().explicit(0).use(l),
        this.key("publicKey").optional().explicit(1).bitstr()
      );
    });
    t.ECPrivateKey = d;
    var l = i.define("ECParameters", function () {
      this.choice({ namedCurve: this.objid() });
    });
    t.signature = i.define("signature", function () {
      this.seq().obj(this.key("r").int(), this.key("s").int());
    });
  },
  function (e, t, r) {
    var i = r(17),
      n = r(0);
    function a(e, t) {
      (this.name = e),
        (this.body = t),
        (this.decoders = {}),
        (this.encoders = {});
    }
    (t.define = function (e, t) {
      return new a(e, t);
    }),
      (a.prototype._createNamed = function (e) {
        var t;
        try {
          t = r(152).runInThisContext(
            "(function " +
              this.name +
              "(entity) {\n  this._initNamed(entity);\n})"
          );
        } catch (e) {
          t = function (e) {
            this._initNamed(e);
          };
        }
        return (
          n(t, e),
          (t.prototype._initNamed = function (t) {
            e.call(this, t);
          }),
          new t(this)
        );
      }),
      (a.prototype._getDecoder = function (e) {
        return (
          (e = e || "der"),
          this.decoders.hasOwnProperty(e) ||
            (this.decoders[e] = this._createNamed(i.decoders[e])),
          this.decoders[e]
        );
      }),
      (a.prototype.decode = function (e, t, r) {
        return this._getDecoder(t).decode(e, r);
      }),
      (a.prototype._getEncoder = function (e) {
        return (
          (e = e || "der"),
          this.encoders.hasOwnProperty(e) ||
            (this.encoders[e] = this._createNamed(i.encoders[e])),
          this.encoders[e]
        );
      }),
      (a.prototype.encode = function (e, t, r) {
        return this._getEncoder(t).encode(e, r);
      });
  },
  function (module, exports) {
    var indexOf = function (e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var r = 0; r < e.length; r++) if (e[r] === t) return r;
        return -1;
      },
      Object_keys = function (e) {
        if (Object.keys) return Object.keys(e);
        var t = [];
        for (var r in e) t.push(r);
        return t;
      },
      forEach = function (e, t) {
        if (e.forEach) return e.forEach(t);
        for (var r = 0; r < e.length; r++) t(e[r], r, e);
      },
      defineProp = (function () {
        try {
          return (
            Object.defineProperty({}, "_", {}),
            function (e, t, r) {
              Object.defineProperty(e, t, {
                writable: !0,
                enumerable: !1,
                configurable: !0,
                value: r,
              });
            }
          );
        } catch (e) {
          return function (e, t, r) {
            e[t] = r;
          };
        }
      })(),
      globals = [
        "Array",
        "Boolean",
        "Date",
        "Error",
        "EvalError",
        "Function",
        "Infinity",
        "JSON",
        "Math",
        "NaN",
        "Number",
        "Object",
        "RangeError",
        "ReferenceError",
        "RegExp",
        "String",
        "SyntaxError",
        "TypeError",
        "URIError",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "eval",
        "isFinite",
        "isNaN",
        "parseFloat",
        "parseInt",
        "undefined",
        "unescape",
      ];
    function Context() {}
    Context.prototype = {};
    var Script = (exports.Script = function (e) {
      if (!(this instanceof Script)) return new Script(e);
      this.code = e;
    });
    (Script.prototype.runInContext = function (e) {
      if (!(e instanceof Context))
        throw new TypeError("needs a 'context' argument.");
      var t = document.createElement("iframe");
      t.style || (t.style = {}),
        (t.style.display = "none"),
        document.body.appendChild(t);
      var r = t.contentWindow,
        i = r.eval,
        n = r.execScript;
      !i && n && (n.call(r, "null"), (i = r.eval)),
        forEach(Object_keys(e), function (t) {
          r[t] = e[t];
        }),
        forEach(globals, function (t) {
          e[t] && (r[t] = e[t]);
        });
      var a = Object_keys(r),
        o = i.call(r, this.code);
      return (
        forEach(Object_keys(r), function (t) {
          (t in e || -1 === indexOf(a, t)) && (e[t] = r[t]);
        }),
        forEach(globals, function (t) {
          t in e || defineProp(e, t, r[t]);
        }),
        document.body.removeChild(t),
        o
      );
    }),
      (Script.prototype.runInThisContext = function () {
        return eval(this.code);
      }),
      (Script.prototype.runInNewContext = function (e) {
        var t = Script.createContext(e),
          r = this.runInContext(t);
        return (
          e &&
            forEach(Object_keys(t), function (r) {
              e[r] = t[r];
            }),
          r
        );
      }),
      forEach(Object_keys(Script.prototype), function (e) {
        exports[e] = Script[e] = function (t) {
          var r = Script(t);
          return r[e].apply(r, [].slice.call(arguments, 1));
        };
      }),
      (exports.isContext = function (e) {
        return e instanceof Context;
      }),
      (exports.createScript = function (e) {
        return exports.Script(e);
      }),
      (exports.createContext = Script.createContext =
        function (e) {
          var t = new Context();
          return (
            "object" == typeof e &&
              forEach(Object_keys(e), function (r) {
                t[r] = e[r];
              }),
            t
          );
        });
  },
  function (e, t, r) {
    var i = r(0);
    function n(e) {
      this._reporterState = {
        obj: null,
        path: [],
        options: e || {},
        errors: [],
      };
    }
    function a(e, t) {
      (this.path = e), this.rethrow(t);
    }
    (t.Reporter = n),
      (n.prototype.isError = function (e) {
        return e instanceof a;
      }),
      (n.prototype.save = function () {
        var e = this._reporterState;
        return { obj: e.obj, pathLen: e.path.length };
      }),
      (n.prototype.restore = function (e) {
        var t = this._reporterState;
        (t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen));
      }),
      (n.prototype.enterKey = function (e) {
        return this._reporterState.path.push(e);
      }),
      (n.prototype.exitKey = function (e) {
        var t = this._reporterState;
        t.path = t.path.slice(0, e - 1);
      }),
      (n.prototype.leaveKey = function (e, t, r) {
        var i = this._reporterState;
        this.exitKey(e), null !== i.obj && (i.obj[t] = r);
      }),
      (n.prototype.path = function () {
        return this._reporterState.path.join("/");
      }),
      (n.prototype.enterObject = function () {
        var e = this._reporterState,
          t = e.obj;
        return (e.obj = {}), t;
      }),
      (n.prototype.leaveObject = function (e) {
        var t = this._reporterState,
          r = t.obj;
        return (t.obj = e), r;
      }),
      (n.prototype.error = function (e) {
        var t,
          r = this._reporterState,
          i = e instanceof a;
        if (
          ((t = i
            ? e
            : new a(
                r.path
                  .map(function (e) {
                    return "[" + JSON.stringify(e) + "]";
                  })
                  .join(""),
                e.message || e,
                e.stack
              )),
          !r.options.partial)
        )
          throw t;
        return i || r.errors.push(t), t;
      }),
      (n.prototype.wrapResult = function (e) {
        var t = this._reporterState;
        return t.options.partial
          ? { result: this.isError(e) ? null : e, errors: t.errors }
          : e;
      }),
      i(a, Error),
      (a.prototype.rethrow = function (e) {
        if (
          ((this.message = e + " at: " + (this.path || "(shallow)")),
          Error.captureStackTrace && Error.captureStackTrace(this, a),
          !this.stack)
        )
          try {
            throw new Error(this.message);
          } catch (e) {
            this.stack = e.stack;
          }
        return this;
      });
  },
  function (e, t, r) {
    var i = r(18).Reporter,
      n = r(18).EncoderBuffer,
      a = r(18).DecoderBuffer,
      o = r(5),
      s = [
        "seq",
        "seqof",
        "set",
        "setof",
        "objid",
        "bool",
        "gentime",
        "utctime",
        "null_",
        "enum",
        "int",
        "objDesc",
        "bitstr",
        "bmpstr",
        "charstr",
        "genstr",
        "graphstr",
        "ia5str",
        "iso646str",
        "numstr",
        "octstr",
        "printstr",
        "t61str",
        "unistr",
        "utf8str",
        "videostr",
      ],
      c = [
        "key",
        "obj",
        "use",
        "optional",
        "explicit",
        "implicit",
        "def",
        "choice",
        "any",
        "contains",
      ].concat(s);
    function f(e, t) {
      var r = {};
      (this._baseState = r),
        (r.enc = e),
        (r.parent = t || null),
        (r.children = null),
        (r.tag = null),
        (r.args = null),
        (r.reverseArgs = null),
        (r.choice = null),
        (r.optional = !1),
        (r.any = !1),
        (r.obj = !1),
        (r.use = null),
        (r.useDecoder = null),
        (r.key = null),
        (r.default = null),
        (r.explicit = null),
        (r.implicit = null),
        (r.contains = null),
        r.parent || ((r.children = []), this._wrap());
    }
    e.exports = f;
    var u = [
      "enc",
      "parent",
      "children",
      "tag",
      "args",
      "reverseArgs",
      "choice",
      "optional",
      "any",
      "obj",
      "use",
      "alteredUse",
      "key",
      "default",
      "explicit",
      "implicit",
      "contains",
    ];
    (f.prototype.clone = function () {
      var e = this._baseState,
        t = {};
      u.forEach(function (r) {
        t[r] = e[r];
      });
      var r = new this.constructor(t.parent);
      return (r._baseState = t), r;
    }),
      (f.prototype._wrap = function () {
        var e = this._baseState;
        c.forEach(function (t) {
          this[t] = function () {
            var r = new this.constructor(this);
            return e.children.push(r), r[t].apply(r, arguments);
          };
        }, this);
      }),
      (f.prototype._init = function (e) {
        var t = this._baseState;
        o(null === t.parent),
          e.call(this),
          (t.children = t.children.filter(function (e) {
            return e._baseState.parent === this;
          }, this)),
          o.equal(t.children.length, 1, "Root node can have only one child");
      }),
      (f.prototype._useArgs = function (e) {
        var t = this._baseState,
          r = e.filter(function (e) {
            return e instanceof this.constructor;
          }, this);
        (e = e.filter(function (e) {
          return !(e instanceof this.constructor);
        }, this)),
          0 !== r.length &&
            (o(null === t.children),
            (t.children = r),
            r.forEach(function (e) {
              e._baseState.parent = this;
            }, this)),
          0 !== e.length &&
            (o(null === t.args),
            (t.args = e),
            (t.reverseArgs = e.map(function (e) {
              if ("object" != typeof e || e.constructor !== Object) return e;
              var t = {};
              return (
                Object.keys(e).forEach(function (r) {
                  r == (0 | r) && (r |= 0);
                  var i = e[r];
                  t[i] = r;
                }),
                t
              );
            })));
      }),
      [
        "_peekTag",
        "_decodeTag",
        "_use",
        "_decodeStr",
        "_decodeObjid",
        "_decodeTime",
        "_decodeNull",
        "_decodeInt",
        "_decodeBool",
        "_decodeList",
        "_encodeComposite",
        "_encodeStr",
        "_encodeObjid",
        "_encodeTime",
        "_encodeNull",
        "_encodeInt",
        "_encodeBool",
      ].forEach(function (e) {
        f.prototype[e] = function () {
          var t = this._baseState;
          throw new Error(e + " not implemented for encoding: " + t.enc);
        };
      }),
      s.forEach(function (e) {
        f.prototype[e] = function () {
          var t = this._baseState,
            r = Array.prototype.slice.call(arguments);
          return o(null === t.tag), (t.tag = e), this._useArgs(r), this;
        };
      }),
      (f.prototype.use = function (e) {
        o(e);
        var t = this._baseState;
        return o(null === t.use), (t.use = e), this;
      }),
      (f.prototype.optional = function () {
        return (this._baseState.optional = !0), this;
      }),
      (f.prototype.def = function (e) {
        var t = this._baseState;
        return o(null === t.default), (t.default = e), (t.optional = !0), this;
      }),
      (f.prototype.explicit = function (e) {
        var t = this._baseState;
        return (
          o(null === t.explicit && null === t.implicit), (t.explicit = e), this
        );
      }),
      (f.prototype.implicit = function (e) {
        var t = this._baseState;
        return (
          o(null === t.explicit && null === t.implicit), (t.implicit = e), this
        );
      }),
      (f.prototype.obj = function () {
        var e = this._baseState,
          t = Array.prototype.slice.call(arguments);
        return (e.obj = !0), 0 !== t.length && this._useArgs(t), this;
      }),
      (f.prototype.key = function (e) {
        var t = this._baseState;
        return o(null === t.key), (t.key = e), this;
      }),
      (f.prototype.any = function () {
        return (this._baseState.any = !0), this;
      }),
      (f.prototype.choice = function (e) {
        var t = this._baseState;
        return (
          o(null === t.choice),
          (t.choice = e),
          this._useArgs(
            Object.keys(e).map(function (t) {
              return e[t];
            })
          ),
          this
        );
      }),
      (f.prototype.contains = function (e) {
        var t = this._baseState;
        return o(null === t.use), (t.contains = e), this;
      }),
      (f.prototype._decode = function (e, t) {
        var r = this._baseState;
        if (null === r.parent) return e.wrapResult(r.children[0]._decode(e, t));
        var i,
          n = r.default,
          o = !0,
          s = null;
        if ((null !== r.key && (s = e.enterKey(r.key)), r.optional)) {
          var c = null;
          if (
            (null !== r.explicit
              ? (c = r.explicit)
              : null !== r.implicit
              ? (c = r.implicit)
              : null !== r.tag && (c = r.tag),
            null !== c || r.any)
          ) {
            if (((o = this._peekTag(e, c, r.any)), e.isError(o))) return o;
          } else {
            var f = e.save();
            try {
              null === r.choice
                ? this._decodeGeneric(r.tag, e, t)
                : this._decodeChoice(e, t),
                (o = !0);
            } catch (e) {
              o = !1;
            }
            e.restore(f);
          }
        }
        if ((r.obj && o && (i = e.enterObject()), o)) {
          if (null !== r.explicit) {
            var u = this._decodeTag(e, r.explicit);
            if (e.isError(u)) return u;
            e = u;
          }
          var d = e.offset;
          if (null === r.use && null === r.choice) {
            if (r.any) f = e.save();
            var l = this._decodeTag(
              e,
              null !== r.implicit ? r.implicit : r.tag,
              r.any
            );
            if (e.isError(l)) return l;
            r.any ? (n = e.raw(f)) : (e = l);
          }
          if (
            (t &&
              t.track &&
              null !== r.tag &&
              t.track(e.path(), d, e.length, "tagged"),
            t &&
              t.track &&
              null !== r.tag &&
              t.track(e.path(), e.offset, e.length, "content"),
            (n = r.any
              ? n
              : null === r.choice
              ? this._decodeGeneric(r.tag, e, t)
              : this._decodeChoice(e, t)),
            e.isError(n))
          )
            return n;
          if (
            (r.any ||
              null !== r.choice ||
              null === r.children ||
              r.children.forEach(function (r) {
                r._decode(e, t);
              }),
            r.contains && ("octstr" === r.tag || "bitstr" === r.tag))
          ) {
            var h = new a(n);
            n = this._getUse(r.contains, e._reporterState.obj)._decode(h, t);
          }
        }
        return (
          r.obj && o && (n = e.leaveObject(i)),
          null === r.key || (null === n && !0 !== o)
            ? null !== s && e.exitKey(s)
            : e.leaveKey(s, r.key, n),
          n
        );
      }),
      (f.prototype._decodeGeneric = function (e, t, r) {
        var i = this._baseState;
        return "seq" === e || "set" === e
          ? null
          : "seqof" === e || "setof" === e
          ? this._decodeList(t, e, i.args[0], r)
          : /str$/.test(e)
          ? this._decodeStr(t, e, r)
          : "objid" === e && i.args
          ? this._decodeObjid(t, i.args[0], i.args[1], r)
          : "objid" === e
          ? this._decodeObjid(t, null, null, r)
          : "gentime" === e || "utctime" === e
          ? this._decodeTime(t, e, r)
          : "null_" === e
          ? this._decodeNull(t, r)
          : "bool" === e
          ? this._decodeBool(t, r)
          : "objDesc" === e
          ? this._decodeStr(t, e, r)
          : "int" === e || "enum" === e
          ? this._decodeInt(t, i.args && i.args[0], r)
          : null !== i.use
          ? this._getUse(i.use, t._reporterState.obj)._decode(t, r)
          : t.error("unknown tag: " + e);
      }),
      (f.prototype._getUse = function (e, t) {
        var r = this._baseState;
        return (
          (r.useDecoder = this._use(e, t)),
          o(null === r.useDecoder._baseState.parent),
          (r.useDecoder = r.useDecoder._baseState.children[0]),
          r.implicit !== r.useDecoder._baseState.implicit &&
            ((r.useDecoder = r.useDecoder.clone()),
            (r.useDecoder._baseState.implicit = r.implicit)),
          r.useDecoder
        );
      }),
      (f.prototype._decodeChoice = function (e, t) {
        var r = this._baseState,
          i = null,
          n = !1;
        return (
          Object.keys(r.choice).some(function (a) {
            var o = e.save(),
              s = r.choice[a];
            try {
              var c = s._decode(e, t);
              if (e.isError(c)) return !1;
              (i = { type: a, value: c }), (n = !0);
            } catch (t) {
              return e.restore(o), !1;
            }
            return !0;
          }, this),
          n ? i : e.error("Choice not matched")
        );
      }),
      (f.prototype._createEncoderBuffer = function (e) {
        return new n(e, this.reporter);
      }),
      (f.prototype._encode = function (e, t, r) {
        var i = this._baseState;
        if (null === i.default || i.default !== e) {
          var n = this._encodeValue(e, t, r);
          if (void 0 !== n && !this._skipDefault(n, t, r)) return n;
        }
      }),
      (f.prototype._encodeValue = function (e, t, r) {
        var n = this._baseState;
        if (null === n.parent) return n.children[0]._encode(e, t || new i());
        var a = null;
        if (((this.reporter = t), n.optional && void 0 === e)) {
          if (null === n.default) return;
          e = n.default;
        }
        var o = null,
          s = !1;
        if (n.any) a = this._createEncoderBuffer(e);
        else if (n.choice) a = this._encodeChoice(e, t);
        else if (n.contains)
          (o = this._getUse(n.contains, r)._encode(e, t)), (s = !0);
        else if (n.children)
          (o = n.children
            .map(function (r) {
              if ("null_" === r._baseState.tag) return r._encode(null, t, e);
              if (null === r._baseState.key)
                return t.error("Child should have a key");
              var i = t.enterKey(r._baseState.key);
              if ("object" != typeof e)
                return t.error("Child expected, but input is not object");
              var n = r._encode(e[r._baseState.key], t, e);
              return t.leaveKey(i), n;
            }, this)
            .filter(function (e) {
              return e;
            })),
            (o = this._createEncoderBuffer(o));
        else if ("seqof" === n.tag || "setof" === n.tag) {
          if (!n.args || 1 !== n.args.length)
            return t.error("Too many args for : " + n.tag);
          if (!Array.isArray(e))
            return t.error("seqof/setof, but data is not Array");
          var c = this.clone();
          (c._baseState.implicit = null),
            (o = this._createEncoderBuffer(
              e.map(function (r) {
                var i = this._baseState;
                return this._getUse(i.args[0], e)._encode(r, t);
              }, c)
            ));
        } else
          null !== n.use
            ? (a = this._getUse(n.use, r)._encode(e, t))
            : ((o = this._encodePrimitive(n.tag, e)), (s = !0));
        if (!n.any && null === n.choice) {
          var f = null !== n.implicit ? n.implicit : n.tag,
            u = null === n.implicit ? "universal" : "context";
          null === f
            ? null === n.use && t.error("Tag could be omitted only for .use()")
            : null === n.use && (a = this._encodeComposite(f, s, u, o));
        }
        return (
          null !== n.explicit &&
            (a = this._encodeComposite(n.explicit, !1, "context", a)),
          a
        );
      }),
      (f.prototype._encodeChoice = function (e, t) {
        var r = this._baseState,
          i = r.choice[e.type];
        return (
          i ||
            o(
              !1,
              e.type + " not found in " + JSON.stringify(Object.keys(r.choice))
            ),
          i._encode(e.value, t)
        );
      }),
      (f.prototype._encodePrimitive = function (e, t) {
        var r = this._baseState;
        if (/str$/.test(e)) return this._encodeStr(t, e);
        if ("objid" === e && r.args)
          return this._encodeObjid(t, r.reverseArgs[0], r.args[1]);
        if ("objid" === e) return this._encodeObjid(t, null, null);
        if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
        if ("null_" === e) return this._encodeNull();
        if ("int" === e || "enum" === e)
          return this._encodeInt(t, r.args && r.reverseArgs[0]);
        if ("bool" === e) return this._encodeBool(t);
        if ("objDesc" === e) return this._encodeStr(t, e);
        throw new Error("Unsupported tag: " + e);
      }),
      (f.prototype._isNumstr = function (e) {
        return /^[0-9 ]*$/.test(e);
      }),
      (f.prototype._isPrintstr = function (e) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e);
      });
  },
  function (e, t, r) {
    var i = r(70);
    (t.tagClass = {
      0: "universal",
      1: "application",
      2: "context",
      3: "private",
    }),
      (t.tagClassByName = i._reverse(t.tagClass)),
      (t.tag = {
        0: "end",
        1: "bool",
        2: "int",
        3: "bitstr",
        4: "octstr",
        5: "null_",
        6: "objid",
        7: "objDesc",
        8: "external",
        9: "real",
        10: "enum",
        11: "embed",
        12: "utf8str",
        13: "relativeOid",
        16: "seq",
        17: "set",
        18: "numstr",
        19: "printstr",
        20: "t61str",
        21: "videostr",
        22: "ia5str",
        23: "utctime",
        24: "gentime",
        25: "graphstr",
        26: "iso646str",
        27: "genstr",
        28: "unistr",
        29: "charstr",
        30: "bmpstr",
      }),
      (t.tagByName = i._reverse(t.tag));
  },
  function (e, t, r) {
    var i = t;
    (i.der = r(71)), (i.pem = r(157));
  },
  function (e, t, r) {
    var i = r(0),
      n = r(2).Buffer,
      a = r(71);
    function o(e) {
      a.call(this, e), (this.enc = "pem");
    }
    i(o, a),
      (e.exports = o),
      (o.prototype.decode = function (e, t) {
        for (
          var r = e.toString().split(/[\r\n]+/g),
            i = t.label.toUpperCase(),
            o = /^-----(BEGIN|END) ([^-]+)-----$/,
            s = -1,
            c = -1,
            f = 0;
          f < r.length;
          f++
        ) {
          var u = r[f].match(o);
          if (null !== u && u[2] === i) {
            if (-1 !== s) {
              if ("END" !== u[1]) break;
              c = f;
              break;
            }
            if ("BEGIN" !== u[1]) break;
            s = f;
          }
        }
        if (-1 === s || -1 === c)
          throw new Error("PEM section not found for: " + i);
        var d = r.slice(s + 1, c).join("");
        d.replace(/[^a-z0-9\+\/=]+/gi, "");
        var l = new n(d, "base64");
        return a.prototype.decode.call(this, l, t);
      });
  },
  function (e, t, r) {
    var i = t;
    (i.der = r(72)), (i.pem = r(159));
  },
  function (e, t, r) {
    var i = r(0),
      n = r(72);
    function a(e) {
      n.call(this, e), (this.enc = "pem");
    }
    i(a, n),
      (e.exports = a),
      (a.prototype.encode = function (e, t) {
        for (
          var r = n.prototype.encode.call(this, e).toString("base64"),
            i = ["-----BEGIN " + t.label + "-----"],
            a = 0;
          a < r.length;
          a += 64
        )
          i.push(r.slice(a, a + 64));
        return i.push("-----END " + t.label + "-----"), i.join("\n");
      });
  },
  function (e, t, r) {
    "use strict";
    var i = r(17),
      n = i.define("Time", function () {
        this.choice({ utcTime: this.utctime(), generalTime: this.gentime() });
      }),
      a = i.define("AttributeTypeValue", function () {
        this.seq().obj(this.key("type").objid(), this.key("value").any());
      }),
      o = i.define("AlgorithmIdentifier", function () {
        this.seq().obj(
          this.key("algorithm").objid(),
          this.key("parameters").optional(),
          this.key("curve").objid().optional()
        );
      }),
      s = i.define("SubjectPublicKeyInfo", function () {
        this.seq().obj(
          this.key("algorithm").use(o),
          this.key("subjectPublicKey").bitstr()
        );
      }),
      c = i.define("RelativeDistinguishedName", function () {
        this.setof(a);
      }),
      f = i.define("RDNSequence", function () {
        this.seqof(c);
      }),
      u = i.define("Name", function () {
        this.choice({ rdnSequence: this.use(f) });
      }),
      d = i.define("Validity", function () {
        this.seq().obj(
          this.key("notBefore").use(n),
          this.key("notAfter").use(n)
        );
      }),
      l = i.define("Extension", function () {
        this.seq().obj(
          this.key("extnID").objid(),
          this.key("critical").bool().def(!1),
          this.key("extnValue").octstr()
        );
      }),
      h = i.define("TBSCertificate", function () {
        this.seq().obj(
          this.key("version").explicit(0).int().optional(),
          this.key("serialNumber").int(),
          this.key("signature").use(o),
          this.key("issuer").use(u),
          this.key("validity").use(d),
          this.key("subject").use(u),
          this.key("subjectPublicKeyInfo").use(s),
          this.key("issuerUniqueID").implicit(1).bitstr().optional(),
          this.key("subjectUniqueID").implicit(2).bitstr().optional(),
          this.key("extensions").explicit(3).seqof(l).optional()
        );
      }),
      p = i.define("X509Certificate", function () {
        this.seq().obj(
          this.key("tbsCertificate").use(h),
          this.key("signatureAlgorithm").use(o),
          this.key("signatureValue").bitstr()
        );
      });
    e.exports = p;
  },
  function (e) {
    e.exports = {
      "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
      "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
      "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
      "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
      "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
      "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
      "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
      "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
      "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
      "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
      "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
      "2.16.840.1.101.3.4.1.44": "aes-256-cfb",
    };
  },
  function (e, t, r) {
    var i =
        /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
      n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
      a =
        /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
      o = r(21),
      s = r(36),
      c = r(1).Buffer;
    e.exports = function (e, t) {
      var r,
        f = e.toString(),
        u = f.match(i);
      if (u) {
        var d = "aes" + u[1],
          l = c.from(u[2], "hex"),
          h = c.from(u[3].replace(/[\r\n]/g, ""), "base64"),
          p = o(t, l.slice(0, 8), parseInt(u[1], 10)).key,
          b = [],
          m = s.createDecipheriv(d, p, l);
        b.push(m.update(h)), b.push(m.final()), (r = c.concat(b));
      } else {
        var g = f.match(a);
        r = new c(g[2].replace(/[\r\n]/g, ""), "base64");
      }
      return { tag: f.match(n)[1], data: r };
    };
  },
  function (e, t, r) {
    (function (t) {
      var i = r(3),
        n = r(4).ec,
        a = r(23),
        o = r(73);
      function s(e, t) {
        if (e.cmpn(0) <= 0) throw new Error("invalid sig");
        if (e.cmp(t) >= t) throw new Error("invalid sig");
      }
      e.exports = function (e, r, c, f, u) {
        var d = a(c);
        if ("ec" === d.type) {
          if ("ecdsa" !== f && "ecdsa/rsa" !== f)
            throw new Error("wrong public key type");
          return (function (e, t, r) {
            var i = o[r.data.algorithm.curve.join(".")];
            if (!i)
              throw new Error(
                "unknown curve " + r.data.algorithm.curve.join(".")
              );
            var a = new n(i),
              s = r.data.subjectPrivateKey.data;
            return a.verify(t, e, s);
          })(e, r, d);
        }
        if ("dsa" === d.type) {
          if ("dsa" !== f) throw new Error("wrong public key type");
          return (function (e, t, r) {
            var n = r.data.p,
              o = r.data.q,
              c = r.data.g,
              f = r.data.pub_key,
              u = a.signature.decode(e, "der"),
              d = u.s,
              l = u.r;
            s(d, o), s(l, o);
            var h = i.mont(n),
              p = d.invm(o);
            return (
              0 ===
              c
                .toRed(h)
                .redPow(new i(t).mul(p).mod(o))
                .fromRed()
                .mul(f.toRed(h).redPow(l.mul(p).mod(o)).fromRed())
                .mod(n)
                .mod(o)
                .cmp(l)
            );
          })(e, r, d);
        }
        if ("rsa" !== f && "ecdsa/rsa" !== f)
          throw new Error("wrong public key type");
        r = t.concat([u, r]);
        for (
          var l = d.modulus.byteLength(), h = [1], p = 0;
          r.length + h.length + 2 < l;

        )
          h.push(255), p++;
        h.push(0);
        for (var b = -1; ++b < r.length; ) h.push(r[b]);
        h = new t(h);
        var m = i.mont(d.modulus);
        (e = (e = new i(e).toRed(m)).redPow(new i(d.publicExponent))),
          (e = new t(e.fromRed().toArray()));
        var g = p < 8 ? 1 : 0;
        for (
          l = Math.min(e.length, h.length),
            e.length !== h.length && (g = 1),
            b = -1;
          ++b < l;

        )
          g |= e[b] ^ h[b];
        return 0 === g;
      };
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    (function (t) {
      var i = r(4),
        n = r(3);
      e.exports = function (e) {
        return new o(e);
      };
      var a = {
        secp256k1: { name: "secp256k1", byteLength: 32 },
        secp224r1: { name: "p224", byteLength: 28 },
        prime256v1: { name: "p256", byteLength: 32 },
        prime192v1: { name: "p192", byteLength: 24 },
        ed25519: { name: "ed25519", byteLength: 32 },
        secp384r1: { name: "p384", byteLength: 48 },
        secp521r1: { name: "p521", byteLength: 66 },
      };
      function o(e) {
        (this.curveType = a[e]),
          this.curveType || (this.curveType = { name: e }),
          (this.curve = new i.ec(this.curveType.name)),
          (this.keys = void 0);
      }
      function s(e, r, i) {
        Array.isArray(e) || (e = e.toArray());
        var n = new t(e);
        if (i && n.length < i) {
          var a = new t(i - n.length);
          a.fill(0), (n = t.concat([a, n]));
        }
        return r ? n.toString(r) : n;
      }
      (a.p224 = a.secp224r1),
        (a.p256 = a.secp256r1 = a.prime256v1),
        (a.p192 = a.secp192r1 = a.prime192v1),
        (a.p384 = a.secp384r1),
        (a.p521 = a.secp521r1),
        (o.prototype.generateKeys = function (e, t) {
          return (this.keys = this.curve.genKeyPair()), this.getPublicKey(e, t);
        }),
        (o.prototype.computeSecret = function (e, r, i) {
          return (
            (r = r || "utf8"),
            t.isBuffer(e) || (e = new t(e, r)),
            s(
              this.curve
                .keyFromPublic(e)
                .getPublic()
                .mul(this.keys.getPrivate())
                .getX(),
              i,
              this.curveType.byteLength
            )
          );
        }),
        (o.prototype.getPublicKey = function (e, t) {
          var r = this.keys.getPublic("compressed" === t, !0);
          return (
            "hybrid" === t && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
            s(r, e)
          );
        }),
        (o.prototype.getPrivateKey = function (e) {
          return s(this.keys.getPrivate(), e);
        }),
        (o.prototype.setPublicKey = function (e, r) {
          return (
            (r = r || "utf8"),
            t.isBuffer(e) || (e = new t(e, r)),
            this.keys._importPublic(e),
            this
          );
        }),
        (o.prototype.setPrivateKey = function (e, r) {
          (r = r || "utf8"), t.isBuffer(e) || (e = new t(e, r));
          var i = new n(e);
          return (
            (i = i.toString(16)),
            (this.keys = this.curve.genKeyPair()),
            this.keys._importPrivate(i),
            this
          );
        });
    }).call(this, r(2).Buffer);
  },
  function (e, t, r) {
    (t.publicEncrypt = r(166)),
      (t.privateDecrypt = r(167)),
      (t.privateEncrypt = function (e, r) {
        return t.publicEncrypt(e, r, !0);
      }),
      (t.publicDecrypt = function (e, r) {
        return t.privateDecrypt(e, r, !0);
      });
  },
  function (e, t, r) {
    var i = r(23),
      n = r(11),
      a = r(13),
      o = r(74),
      s = r(75),
      c = r(3),
      f = r(76),
      u = r(38),
      d = r(24).Buffer;
    e.exports = function (e, t, r) {
      var l;
      l = e.padding ? e.padding : r ? 1 : 4;
      var h,
        p = i(e);
      if (4 === l)
        h = (function (e, t) {
          var r = e.modulus.byteLength(),
            i = t.length,
            f = a("sha1").update(d.alloc(0)).digest(),
            u = f.length,
            l = 2 * u;
          if (i > r - l - 2) throw new Error("message too long");
          var h = d.alloc(r - i - l - 2),
            p = r - u - 1,
            b = n(u),
            m = s(d.concat([f, h, d.alloc(1, 1), t], p), o(b, p)),
            g = s(b, o(m, u));
          return new c(d.concat([d.alloc(1), g, m], r));
        })(p, t);
      else if (1 === l)
        h = (function (e, t, r) {
          var i,
            a = t.length,
            o = e.modulus.byteLength();
          if (a > o - 11) throw new Error("message too long");
          i = r
            ? d.alloc(o - a - 3, 255)
            : (function (e) {
                var t,
                  r = d.allocUnsafe(e),
                  i = 0,
                  a = n(2 * e),
                  o = 0;
                for (; i < e; )
                  o === a.length && ((a = n(2 * e)), (o = 0)),
                    (t = a[o++]) && (r[i++] = t);
                return r;
              })(o - a - 3);
          return new c(d.concat([d.from([0, r ? 1 : 2]), i, d.alloc(1), t], o));
        })(p, t, r);
      else {
        if (3 !== l) throw new Error("unknown padding");
        if ((h = new c(t)).cmp(p.modulus) >= 0)
          throw new Error("data too long for modulus");
      }
      return r ? u(h, p) : f(h, p);
    };
  },
  function (e, t, r) {
    var i = r(23),
      n = r(74),
      a = r(75),
      o = r(3),
      s = r(38),
      c = r(13),
      f = r(76),
      u = r(24).Buffer;
    e.exports = function (e, t, r) {
      var d;
      d = e.padding ? e.padding : r ? 1 : 4;
      var l,
        h = i(e),
        p = h.modulus.byteLength();
      if (t.length > p || new o(t).cmp(h.modulus) >= 0)
        throw new Error("decryption error");
      l = r ? f(new o(t), h) : s(t, h);
      var b = u.alloc(p - l.length);
      if (((l = u.concat([b, l], p)), 4 === d))
        return (function (e, t) {
          var r = e.modulus.byteLength(),
            i = c("sha1").update(u.alloc(0)).digest(),
            o = i.length;
          if (0 !== t[0]) throw new Error("decryption error");
          var s = t.slice(1, o + 1),
            f = t.slice(o + 1),
            d = a(s, n(f, o)),
            l = a(f, n(d, r - o - 1));
          if (
            (function (e, t) {
              (e = u.from(e)), (t = u.from(t));
              var r = 0,
                i = e.length;
              e.length !== t.length &&
                (r++, (i = Math.min(e.length, t.length)));
              var n = -1;
              for (; ++n < i; ) r += e[n] ^ t[n];
              return r;
            })(i, l.slice(0, o))
          )
            throw new Error("decryption error");
          var h = o;
          for (; 0 === l[h]; ) h++;
          if (1 !== l[h++]) throw new Error("decryption error");
          return l.slice(h);
        })(h, l);
      if (1 === d)
        return (function (e, t, r) {
          var i = t.slice(0, 2),
            n = 2,
            a = 0;
          for (; 0 !== t[n++]; )
            if (n >= t.length) {
              a++;
              break;
            }
          var o = t.slice(2, n - 1);
          (("0002" !== i.toString("hex") && !r) ||
            ("0001" !== i.toString("hex") && r)) &&
            a++;
          o.length < 8 && a++;
          if (a) throw new Error("decryption error");
          return t.slice(n);
        })(0, l, r);
      if (3 === d) return l;
      throw new Error("unknown padding");
    };
  },
  function (e, t, r) {
    "use strict";
    (function (e, i) {
      function n() {
        throw new Error(
          "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11"
        );
      }
      var a = r(1),
        o = r(11),
        s = a.Buffer,
        c = a.kMaxLength,
        f = e.crypto || e.msCrypto,
        u = Math.pow(2, 32) - 1;
      function d(e, t) {
        if ("number" != typeof e || e != e)
          throw new TypeError("offset must be a number");
        if (e > u || e < 0) throw new TypeError("offset must be a uint32");
        if (e > c || e > t) throw new RangeError("offset out of range");
      }
      function l(e, t, r) {
        if ("number" != typeof e || e != e)
          throw new TypeError("size must be a number");
        if (e > u || e < 0) throw new TypeError("size must be a uint32");
        if (e + t > r || e > c) throw new RangeError("buffer too small");
      }
      function h(e, t, r, n) {
        if (i.browser) {
          var a = e.buffer,
            s = new Uint8Array(a, t, r);
          return (
            f.getRandomValues(s),
            n
              ? void i.nextTick(function () {
                  n(null, e);
                })
              : e
          );
        }
        if (!n) return o(r).copy(e, t), e;
        o(r, function (r, i) {
          if (r) return n(r);
          i.copy(e, t), n(null, e);
        });
      }
      (f && f.getRandomValues) || !i.browser
        ? ((t.randomFill = function (t, r, i, n) {
            if (!(s.isBuffer(t) || t instanceof e.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              );
            if ("function" == typeof r) (n = r), (r = 0), (i = t.length);
            else if ("function" == typeof i) (n = i), (i = t.length - r);
            else if ("function" != typeof n)
              throw new TypeError('"cb" argument must be a function');
            return d(r, t.length), l(i, r, t.length), h(t, r, i, n);
          }),
          (t.randomFillSync = function (t, r, i) {
            void 0 === r && (r = 0);
            if (!(s.isBuffer(t) || t instanceof e.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              );
            d(r, t.length), void 0 === i && (i = t.length - r);
            return l(i, r, t.length), h(t, r, i);
          }))
        : ((t.randomFill = n), (t.randomFillSync = n));
    }).call(this, r(7), r(8));
  },
  function (e, t, r) {
    "use strict";
    e.exports = r(25).errors.extend({
      name: "Mnemonic",
      message: "Internal Error on bsv-mnemonic module {0}",
      errors: [
        {
          name: "InvalidEntropy",
          message: "Entropy length must be an even multiple of 11 bits: {0}",
        },
        {
          name: "UnknownWordlist",
          message: "Could not detect the used word list: {0}",
        },
        { name: "InvalidMnemonic", message: "Mnemonic string is invalid: {0}" },
      ],
    });
  },
  function (e, t, r) {
    e.exports = {
      CHINESE: r(171),
      ENGLISH: r(172),
      FRENCH: r(173),
      ITALIAN: r(174),
      JAPANESE: r(175),
      SPANISH: r(176),
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = [
      "的",
      "一",
      "是",
      "在",
      "不",
      "了",
      "有",
      "和",
      "人",
      "这",
      "中",
      "大",
      "为",
      "上",
      "个",
      "国",
      "我",
      "以",
      "要",
      "他",
      "时",
      "来",
      "用",
      "们",
      "生",
      "到",
      "作",
      "地",
      "于",
      "出",
      "就",
      "分",
      "对",
      "成",
      "会",
      "可",
      "主",
      "发",
      "年",
      "动",
      "同",
      "工",
      "也",
      "能",
      "下",
      "过",
      "子",
      "说",
      "产",
      "种",
      "面",
      "而",
      "方",
      "后",
      "多",
      "定",
      "行",
      "学",
      "法",
      "所",
      "民",
      "得",
      "经",
      "十",
      "三",
      "之",
      "进",
      "着",
      "等",
      "部",
      "度",
      "家",
      "电",
      "力",
      "里",
      "如",
      "水",
      "化",
      "高",
      "自",
      "二",
      "理",
      "起",
      "小",
      "物",
      "现",
      "实",
      "加",
      "量",
      "都",
      "两",
      "体",
      "制",
      "机",
      "当",
      "使",
      "点",
      "从",
      "业",
      "本",
      "去",
      "把",
      "性",
      "好",
      "应",
      "开",
      "它",
      "合",
      "还",
      "因",
      "由",
      "其",
      "些",
      "然",
      "前",
      "外",
      "天",
      "政",
      "四",
      "日",
      "那",
      "社",
      "义",
      "事",
      "平",
      "形",
      "相",
      "全",
      "表",
      "间",
      "样",
      "与",
      "关",
      "各",
      "重",
      "新",
      "线",
      "内",
      "数",
      "正",
      "心",
      "反",
      "你",
      "明",
      "看",
      "原",
      "又",
      "么",
      "利",
      "比",
      "或",
      "但",
      "质",
      "气",
      "第",
      "向",
      "道",
      "命",
      "此",
      "变",
      "条",
      "只",
      "没",
      "结",
      "解",
      "问",
      "意",
      "建",
      "月",
      "公",
      "无",
      "系",
      "军",
      "很",
      "情",
      "者",
      "最",
      "立",
      "代",
      "想",
      "已",
      "通",
      "并",
      "提",
      "直",
      "题",
      "党",
      "程",
      "展",
      "五",
      "果",
      "料",
      "象",
      "员",
      "革",
      "位",
      "入",
      "常",
      "文",
      "总",
      "次",
      "品",
      "式",
      "活",
      "设",
      "及",
      "管",
      "特",
      "件",
      "长",
      "求",
      "老",
      "头",
      "基",
      "资",
      "边",
      "流",
      "路",
      "级",
      "少",
      "图",
      "山",
      "统",
      "接",
      "知",
      "较",
      "将",
      "组",
      "见",
      "计",
      "别",
      "她",
      "手",
      "角",
      "期",
      "根",
      "论",
      "运",
      "农",
      "指",
      "几",
      "九",
      "区",
      "强",
      "放",
      "决",
      "西",
      "被",
      "干",
      "做",
      "必",
      "战",
      "先",
      "回",
      "则",
      "任",
      "取",
      "据",
      "处",
      "队",
      "南",
      "给",
      "色",
      "光",
      "门",
      "即",
      "保",
      "治",
      "北",
      "造",
      "百",
      "规",
      "热",
      "领",
      "七",
      "海",
      "口",
      "东",
      "导",
      "器",
      "压",
      "志",
      "世",
      "金",
      "增",
      "争",
      "济",
      "阶",
      "油",
      "思",
      "术",
      "极",
      "交",
      "受",
      "联",
      "什",
      "认",
      "六",
      "共",
      "权",
      "收",
      "证",
      "改",
      "清",
      "美",
      "再",
      "采",
      "转",
      "更",
      "单",
      "风",
      "切",
      "打",
      "白",
      "教",
      "速",
      "花",
      "带",
      "安",
      "场",
      "身",
      "车",
      "例",
      "真",
      "务",
      "具",
      "万",
      "每",
      "目",
      "至",
      "达",
      "走",
      "积",
      "示",
      "议",
      "声",
      "报",
      "斗",
      "完",
      "类",
      "八",
      "离",
      "华",
      "名",
      "确",
      "才",
      "科",
      "张",
      "信",
      "马",
      "节",
      "话",
      "米",
      "整",
      "空",
      "元",
      "况",
      "今",
      "集",
      "温",
      "传",
      "土",
      "许",
      "步",
      "群",
      "广",
      "石",
      "记",
      "需",
      "段",
      "研",
      "界",
      "拉",
      "林",
      "律",
      "叫",
      "且",
      "究",
      "观",
      "越",
      "织",
      "装",
      "影",
      "算",
      "低",
      "持",
      "音",
      "众",
      "书",
      "布",
      "复",
      "容",
      "儿",
      "须",
      "际",
      "商",
      "非",
      "验",
      "连",
      "断",
      "深",
      "难",
      "近",
      "矿",
      "千",
      "周",
      "委",
      "素",
      "技",
      "备",
      "半",
      "办",
      "青",
      "省",
      "列",
      "习",
      "响",
      "约",
      "支",
      "般",
      "史",
      "感",
      "劳",
      "便",
      "团",
      "往",
      "酸",
      "历",
      "市",
      "克",
      "何",
      "除",
      "消",
      "构",
      "府",
      "称",
      "太",
      "准",
      "精",
      "值",
      "号",
      "率",
      "族",
      "维",
      "划",
      "选",
      "标",
      "写",
      "存",
      "候",
      "毛",
      "亲",
      "快",
      "效",
      "斯",
      "院",
      "查",
      "江",
      "型",
      "眼",
      "王",
      "按",
      "格",
      "养",
      "易",
      "置",
      "派",
      "层",
      "片",
      "始",
      "却",
      "专",
      "状",
      "育",
      "厂",
      "京",
      "识",
      "适",
      "属",
      "圆",
      "包",
      "火",
      "住",
      "调",
      "满",
      "县",
      "局",
      "照",
      "参",
      "红",
      "细",
      "引",
      "听",
      "该",
      "铁",
      "价",
      "严",
      "首",
      "底",
      "液",
      "官",
      "德",
      "随",
      "病",
      "苏",
      "失",
      "尔",
      "死",
      "讲",
      "配",
      "女",
      "黄",
      "推",
      "显",
      "谈",
      "罪",
      "神",
      "艺",
      "呢",
      "席",
      "含",
      "企",
      "望",
      "密",
      "批",
      "营",
      "项",
      "防",
      "举",
      "球",
      "英",
      "氧",
      "势",
      "告",
      "李",
      "台",
      "落",
      "木",
      "帮",
      "轮",
      "破",
      "亚",
      "师",
      "围",
      "注",
      "远",
      "字",
      "材",
      "排",
      "供",
      "河",
      "态",
      "封",
      "另",
      "施",
      "减",
      "树",
      "溶",
      "怎",
      "止",
      "案",
      "言",
      "士",
      "均",
      "武",
      "固",
      "叶",
      "鱼",
      "波",
      "视",
      "仅",
      "费",
      "紧",
      "爱",
      "左",
      "章",
      "早",
      "朝",
      "害",
      "续",
      "轻",
      "服",
      "试",
      "食",
      "充",
      "兵",
      "源",
      "判",
      "护",
      "司",
      "足",
      "某",
      "练",
      "差",
      "致",
      "板",
      "田",
      "降",
      "黑",
      "犯",
      "负",
      "击",
      "范",
      "继",
      "兴",
      "似",
      "余",
      "坚",
      "曲",
      "输",
      "修",
      "故",
      "城",
      "夫",
      "够",
      "送",
      "笔",
      "船",
      "占",
      "右",
      "财",
      "吃",
      "富",
      "春",
      "职",
      "觉",
      "汉",
      "画",
      "功",
      "巴",
      "跟",
      "虽",
      "杂",
      "飞",
      "检",
      "吸",
      "助",
      "升",
      "阳",
      "互",
      "初",
      "创",
      "抗",
      "考",
      "投",
      "坏",
      "策",
      "古",
      "径",
      "换",
      "未",
      "跑",
      "留",
      "钢",
      "曾",
      "端",
      "责",
      "站",
      "简",
      "述",
      "钱",
      "副",
      "尽",
      "帝",
      "射",
      "草",
      "冲",
      "承",
      "独",
      "令",
      "限",
      "阿",
      "宣",
      "环",
      "双",
      "请",
      "超",
      "微",
      "让",
      "控",
      "州",
      "良",
      "轴",
      "找",
      "否",
      "纪",
      "益",
      "依",
      "优",
      "顶",
      "础",
      "载",
      "倒",
      "房",
      "突",
      "坐",
      "粉",
      "敌",
      "略",
      "客",
      "袁",
      "冷",
      "胜",
      "绝",
      "析",
      "块",
      "剂",
      "测",
      "丝",
      "协",
      "诉",
      "念",
      "陈",
      "仍",
      "罗",
      "盐",
      "友",
      "洋",
      "错",
      "苦",
      "夜",
      "刑",
      "移",
      "频",
      "逐",
      "靠",
      "混",
      "母",
      "短",
      "皮",
      "终",
      "聚",
      "汽",
      "村",
      "云",
      "哪",
      "既",
      "距",
      "卫",
      "停",
      "烈",
      "央",
      "察",
      "烧",
      "迅",
      "境",
      "若",
      "印",
      "洲",
      "刻",
      "括",
      "激",
      "孔",
      "搞",
      "甚",
      "室",
      "待",
      "核",
      "校",
      "散",
      "侵",
      "吧",
      "甲",
      "游",
      "久",
      "菜",
      "味",
      "旧",
      "模",
      "湖",
      "货",
      "损",
      "预",
      "阻",
      "毫",
      "普",
      "稳",
      "乙",
      "妈",
      "植",
      "息",
      "扩",
      "银",
      "语",
      "挥",
      "酒",
      "守",
      "拿",
      "序",
      "纸",
      "医",
      "缺",
      "雨",
      "吗",
      "针",
      "刘",
      "啊",
      "急",
      "唱",
      "误",
      "训",
      "愿",
      "审",
      "附",
      "获",
      "茶",
      "鲜",
      "粮",
      "斤",
      "孩",
      "脱",
      "硫",
      "肥",
      "善",
      "龙",
      "演",
      "父",
      "渐",
      "血",
      "欢",
      "械",
      "掌",
      "歌",
      "沙",
      "刚",
      "攻",
      "谓",
      "盾",
      "讨",
      "晚",
      "粒",
      "乱",
      "燃",
      "矛",
      "乎",
      "杀",
      "药",
      "宁",
      "鲁",
      "贵",
      "钟",
      "煤",
      "读",
      "班",
      "伯",
      "香",
      "介",
      "迫",
      "句",
      "丰",
      "培",
      "握",
      "兰",
      "担",
      "弦",
      "蛋",
      "沉",
      "假",
      "穿",
      "执",
      "答",
      "乐",
      "谁",
      "顺",
      "烟",
      "缩",
      "征",
      "脸",
      "喜",
      "松",
      "脚",
      "困",
      "异",
      "免",
      "背",
      "星",
      "福",
      "买",
      "染",
      "井",
      "概",
      "慢",
      "怕",
      "磁",
      "倍",
      "祖",
      "皇",
      "促",
      "静",
      "补",
      "评",
      "翻",
      "肉",
      "践",
      "尼",
      "衣",
      "宽",
      "扬",
      "棉",
      "希",
      "伤",
      "操",
      "垂",
      "秋",
      "宜",
      "氢",
      "套",
      "督",
      "振",
      "架",
      "亮",
      "末",
      "宪",
      "庆",
      "编",
      "牛",
      "触",
      "映",
      "雷",
      "销",
      "诗",
      "座",
      "居",
      "抓",
      "裂",
      "胞",
      "呼",
      "娘",
      "景",
      "威",
      "绿",
      "晶",
      "厚",
      "盟",
      "衡",
      "鸡",
      "孙",
      "延",
      "危",
      "胶",
      "屋",
      "乡",
      "临",
      "陆",
      "顾",
      "掉",
      "呀",
      "灯",
      "岁",
      "措",
      "束",
      "耐",
      "剧",
      "玉",
      "赵",
      "跳",
      "哥",
      "季",
      "课",
      "凯",
      "胡",
      "额",
      "款",
      "绍",
      "卷",
      "齐",
      "伟",
      "蒸",
      "殖",
      "永",
      "宗",
      "苗",
      "川",
      "炉",
      "岩",
      "弱",
      "零",
      "杨",
      "奏",
      "沿",
      "露",
      "杆",
      "探",
      "滑",
      "镇",
      "饭",
      "浓",
      "航",
      "怀",
      "赶",
      "库",
      "夺",
      "伊",
      "灵",
      "税",
      "途",
      "灭",
      "赛",
      "归",
      "召",
      "鼓",
      "播",
      "盘",
      "裁",
      "险",
      "康",
      "唯",
      "录",
      "菌",
      "纯",
      "借",
      "糖",
      "盖",
      "横",
      "符",
      "私",
      "努",
      "堂",
      "域",
      "枪",
      "润",
      "幅",
      "哈",
      "竟",
      "熟",
      "虫",
      "泽",
      "脑",
      "壤",
      "碳",
      "欧",
      "遍",
      "侧",
      "寨",
      "敢",
      "彻",
      "虑",
      "斜",
      "薄",
      "庭",
      "纳",
      "弹",
      "饲",
      "伸",
      "折",
      "麦",
      "湿",
      "暗",
      "荷",
      "瓦",
      "塞",
      "床",
      "筑",
      "恶",
      "户",
      "访",
      "塔",
      "奇",
      "透",
      "梁",
      "刀",
      "旋",
      "迹",
      "卡",
      "氯",
      "遇",
      "份",
      "毒",
      "泥",
      "退",
      "洗",
      "摆",
      "灰",
      "彩",
      "卖",
      "耗",
      "夏",
      "择",
      "忙",
      "铜",
      "献",
      "硬",
      "予",
      "繁",
      "圈",
      "雪",
      "函",
      "亦",
      "抽",
      "篇",
      "阵",
      "阴",
      "丁",
      "尺",
      "追",
      "堆",
      "雄",
      "迎",
      "泛",
      "爸",
      "楼",
      "避",
      "谋",
      "吨",
      "野",
      "猪",
      "旗",
      "累",
      "偏",
      "典",
      "馆",
      "索",
      "秦",
      "脂",
      "潮",
      "爷",
      "豆",
      "忽",
      "托",
      "惊",
      "塑",
      "遗",
      "愈",
      "朱",
      "替",
      "纤",
      "粗",
      "倾",
      "尚",
      "痛",
      "楚",
      "谢",
      "奋",
      "购",
      "磨",
      "君",
      "池",
      "旁",
      "碎",
      "骨",
      "监",
      "捕",
      "弟",
      "暴",
      "割",
      "贯",
      "殊",
      "释",
      "词",
      "亡",
      "壁",
      "顿",
      "宝",
      "午",
      "尘",
      "闻",
      "揭",
      "炮",
      "残",
      "冬",
      "桥",
      "妇",
      "警",
      "综",
      "招",
      "吴",
      "付",
      "浮",
      "遭",
      "徐",
      "您",
      "摇",
      "谷",
      "赞",
      "箱",
      "隔",
      "订",
      "男",
      "吹",
      "园",
      "纷",
      "唐",
      "败",
      "宋",
      "玻",
      "巨",
      "耕",
      "坦",
      "荣",
      "闭",
      "湾",
      "键",
      "凡",
      "驻",
      "锅",
      "救",
      "恩",
      "剥",
      "凝",
      "碱",
      "齿",
      "截",
      "炼",
      "麻",
      "纺",
      "禁",
      "废",
      "盛",
      "版",
      "缓",
      "净",
      "睛",
      "昌",
      "婚",
      "涉",
      "筒",
      "嘴",
      "插",
      "岸",
      "朗",
      "庄",
      "街",
      "藏",
      "姑",
      "贸",
      "腐",
      "奴",
      "啦",
      "惯",
      "乘",
      "伙",
      "恢",
      "匀",
      "纱",
      "扎",
      "辩",
      "耳",
      "彪",
      "臣",
      "亿",
      "璃",
      "抵",
      "脉",
      "秀",
      "萨",
      "俄",
      "网",
      "舞",
      "店",
      "喷",
      "纵",
      "寸",
      "汗",
      "挂",
      "洪",
      "贺",
      "闪",
      "柬",
      "爆",
      "烯",
      "津",
      "稻",
      "墙",
      "软",
      "勇",
      "像",
      "滚",
      "厘",
      "蒙",
      "芳",
      "肯",
      "坡",
      "柱",
      "荡",
      "腿",
      "仪",
      "旅",
      "尾",
      "轧",
      "冰",
      "贡",
      "登",
      "黎",
      "削",
      "钻",
      "勒",
      "逃",
      "障",
      "氨",
      "郭",
      "峰",
      "币",
      "港",
      "伏",
      "轨",
      "亩",
      "毕",
      "擦",
      "莫",
      "刺",
      "浪",
      "秘",
      "援",
      "株",
      "健",
      "售",
      "股",
      "岛",
      "甘",
      "泡",
      "睡",
      "童",
      "铸",
      "汤",
      "阀",
      "休",
      "汇",
      "舍",
      "牧",
      "绕",
      "炸",
      "哲",
      "磷",
      "绩",
      "朋",
      "淡",
      "尖",
      "启",
      "陷",
      "柴",
      "呈",
      "徒",
      "颜",
      "泪",
      "稍",
      "忘",
      "泵",
      "蓝",
      "拖",
      "洞",
      "授",
      "镜",
      "辛",
      "壮",
      "锋",
      "贫",
      "虚",
      "弯",
      "摩",
      "泰",
      "幼",
      "廷",
      "尊",
      "窗",
      "纲",
      "弄",
      "隶",
      "疑",
      "氏",
      "宫",
      "姐",
      "震",
      "瑞",
      "怪",
      "尤",
      "琴",
      "循",
      "描",
      "膜",
      "违",
      "夹",
      "腰",
      "缘",
      "珠",
      "穷",
      "森",
      "枝",
      "竹",
      "沟",
      "催",
      "绳",
      "忆",
      "邦",
      "剩",
      "幸",
      "浆",
      "栏",
      "拥",
      "牙",
      "贮",
      "礼",
      "滤",
      "钠",
      "纹",
      "罢",
      "拍",
      "咱",
      "喊",
      "袖",
      "埃",
      "勤",
      "罚",
      "焦",
      "潜",
      "伍",
      "墨",
      "欲",
      "缝",
      "姓",
      "刊",
      "饱",
      "仿",
      "奖",
      "铝",
      "鬼",
      "丽",
      "跨",
      "默",
      "挖",
      "链",
      "扫",
      "喝",
      "袋",
      "炭",
      "污",
      "幕",
      "诸",
      "弧",
      "励",
      "梅",
      "奶",
      "洁",
      "灾",
      "舟",
      "鉴",
      "苯",
      "讼",
      "抱",
      "毁",
      "懂",
      "寒",
      "智",
      "埔",
      "寄",
      "届",
      "跃",
      "渡",
      "挑",
      "丹",
      "艰",
      "贝",
      "碰",
      "拔",
      "爹",
      "戴",
      "码",
      "梦",
      "芽",
      "熔",
      "赤",
      "渔",
      "哭",
      "敬",
      "颗",
      "奔",
      "铅",
      "仲",
      "虎",
      "稀",
      "妹",
      "乏",
      "珍",
      "申",
      "桌",
      "遵",
      "允",
      "隆",
      "螺",
      "仓",
      "魏",
      "锐",
      "晓",
      "氮",
      "兼",
      "隐",
      "碍",
      "赫",
      "拨",
      "忠",
      "肃",
      "缸",
      "牵",
      "抢",
      "博",
      "巧",
      "壳",
      "兄",
      "杜",
      "讯",
      "诚",
      "碧",
      "祥",
      "柯",
      "页",
      "巡",
      "矩",
      "悲",
      "灌",
      "龄",
      "伦",
      "票",
      "寻",
      "桂",
      "铺",
      "圣",
      "恐",
      "恰",
      "郑",
      "趣",
      "抬",
      "荒",
      "腾",
      "贴",
      "柔",
      "滴",
      "猛",
      "阔",
      "辆",
      "妻",
      "填",
      "撤",
      "储",
      "签",
      "闹",
      "扰",
      "紫",
      "砂",
      "递",
      "戏",
      "吊",
      "陶",
      "伐",
      "喂",
      "疗",
      "瓶",
      "婆",
      "抚",
      "臂",
      "摸",
      "忍",
      "虾",
      "蜡",
      "邻",
      "胸",
      "巩",
      "挤",
      "偶",
      "弃",
      "槽",
      "劲",
      "乳",
      "邓",
      "吉",
      "仁",
      "烂",
      "砖",
      "租",
      "乌",
      "舰",
      "伴",
      "瓜",
      "浅",
      "丙",
      "暂",
      "燥",
      "橡",
      "柳",
      "迷",
      "暖",
      "牌",
      "秧",
      "胆",
      "详",
      "簧",
      "踏",
      "瓷",
      "谱",
      "呆",
      "宾",
      "糊",
      "洛",
      "辉",
      "愤",
      "竞",
      "隙",
      "怒",
      "粘",
      "乃",
      "绪",
      "肩",
      "籍",
      "敏",
      "涂",
      "熙",
      "皆",
      "侦",
      "悬",
      "掘",
      "享",
      "纠",
      "醒",
      "狂",
      "锁",
      "淀",
      "恨",
      "牲",
      "霸",
      "爬",
      "赏",
      "逆",
      "玩",
      "陵",
      "祝",
      "秒",
      "浙",
      "貌",
      "役",
      "彼",
      "悉",
      "鸭",
      "趋",
      "凤",
      "晨",
      "畜",
      "辈",
      "秩",
      "卵",
      "署",
      "梯",
      "炎",
      "滩",
      "棋",
      "驱",
      "筛",
      "峡",
      "冒",
      "啥",
      "寿",
      "译",
      "浸",
      "泉",
      "帽",
      "迟",
      "硅",
      "疆",
      "贷",
      "漏",
      "稿",
      "冠",
      "嫩",
      "胁",
      "芯",
      "牢",
      "叛",
      "蚀",
      "奥",
      "鸣",
      "岭",
      "羊",
      "凭",
      "串",
      "塘",
      "绘",
      "酵",
      "融",
      "盆",
      "锡",
      "庙",
      "筹",
      "冻",
      "辅",
      "摄",
      "袭",
      "筋",
      "拒",
      "僚",
      "旱",
      "钾",
      "鸟",
      "漆",
      "沈",
      "眉",
      "疏",
      "添",
      "棒",
      "穗",
      "硝",
      "韩",
      "逼",
      "扭",
      "侨",
      "凉",
      "挺",
      "碗",
      "栽",
      "炒",
      "杯",
      "患",
      "馏",
      "劝",
      "豪",
      "辽",
      "勃",
      "鸿",
      "旦",
      "吏",
      "拜",
      "狗",
      "埋",
      "辊",
      "掩",
      "饮",
      "搬",
      "骂",
      "辞",
      "勾",
      "扣",
      "估",
      "蒋",
      "绒",
      "雾",
      "丈",
      "朵",
      "姆",
      "拟",
      "宇",
      "辑",
      "陕",
      "雕",
      "偿",
      "蓄",
      "崇",
      "剪",
      "倡",
      "厅",
      "咬",
      "驶",
      "薯",
      "刷",
      "斥",
      "番",
      "赋",
      "奉",
      "佛",
      "浇",
      "漫",
      "曼",
      "扇",
      "钙",
      "桃",
      "扶",
      "仔",
      "返",
      "俗",
      "亏",
      "腔",
      "鞋",
      "棱",
      "覆",
      "框",
      "悄",
      "叔",
      "撞",
      "骗",
      "勘",
      "旺",
      "沸",
      "孤",
      "吐",
      "孟",
      "渠",
      "屈",
      "疾",
      "妙",
      "惜",
      "仰",
      "狠",
      "胀",
      "谐",
      "抛",
      "霉",
      "桑",
      "岗",
      "嘛",
      "衰",
      "盗",
      "渗",
      "脏",
      "赖",
      "涌",
      "甜",
      "曹",
      "阅",
      "肌",
      "哩",
      "厉",
      "烃",
      "纬",
      "毅",
      "昨",
      "伪",
      "症",
      "煮",
      "叹",
      "钉",
      "搭",
      "茎",
      "笼",
      "酷",
      "偷",
      "弓",
      "锥",
      "恒",
      "杰",
      "坑",
      "鼻",
      "翼",
      "纶",
      "叙",
      "狱",
      "逮",
      "罐",
      "络",
      "棚",
      "抑",
      "膨",
      "蔬",
      "寺",
      "骤",
      "穆",
      "冶",
      "枯",
      "册",
      "尸",
      "凸",
      "绅",
      "坯",
      "牺",
      "焰",
      "轰",
      "欣",
      "晋",
      "瘦",
      "御",
      "锭",
      "锦",
      "丧",
      "旬",
      "锻",
      "垄",
      "搜",
      "扑",
      "邀",
      "亭",
      "酯",
      "迈",
      "舒",
      "脆",
      "酶",
      "闲",
      "忧",
      "酚",
      "顽",
      "羽",
      "涨",
      "卸",
      "仗",
      "陪",
      "辟",
      "惩",
      "杭",
      "姚",
      "肚",
      "捉",
      "飘",
      "漂",
      "昆",
      "欺",
      "吾",
      "郎",
      "烷",
      "汁",
      "呵",
      "饰",
      "萧",
      "雅",
      "邮",
      "迁",
      "燕",
      "撒",
      "姻",
      "赴",
      "宴",
      "烦",
      "债",
      "帐",
      "斑",
      "铃",
      "旨",
      "醇",
      "董",
      "饼",
      "雏",
      "姿",
      "拌",
      "傅",
      "腹",
      "妥",
      "揉",
      "贤",
      "拆",
      "歪",
      "葡",
      "胺",
      "丢",
      "浩",
      "徽",
      "昂",
      "垫",
      "挡",
      "览",
      "贪",
      "慰",
      "缴",
      "汪",
      "慌",
      "冯",
      "诺",
      "姜",
      "谊",
      "凶",
      "劣",
      "诬",
      "耀",
      "昏",
      "躺",
      "盈",
      "骑",
      "乔",
      "溪",
      "丛",
      "卢",
      "抹",
      "闷",
      "咨",
      "刮",
      "驾",
      "缆",
      "悟",
      "摘",
      "铒",
      "掷",
      "颇",
      "幻",
      "柄",
      "惠",
      "惨",
      "佳",
      "仇",
      "腊",
      "窝",
      "涤",
      "剑",
      "瞧",
      "堡",
      "泼",
      "葱",
      "罩",
      "霍",
      "捞",
      "胎",
      "苍",
      "滨",
      "俩",
      "捅",
      "湘",
      "砍",
      "霞",
      "邵",
      "萄",
      "疯",
      "淮",
      "遂",
      "熊",
      "粪",
      "烘",
      "宿",
      "档",
      "戈",
      "驳",
      "嫂",
      "裕",
      "徙",
      "箭",
      "捐",
      "肠",
      "撑",
      "晒",
      "辨",
      "殿",
      "莲",
      "摊",
      "搅",
      "酱",
      "屏",
      "疫",
      "哀",
      "蔡",
      "堵",
      "沫",
      "皱",
      "畅",
      "叠",
      "阁",
      "莱",
      "敲",
      "辖",
      "钩",
      "痕",
      "坝",
      "巷",
      "饿",
      "祸",
      "丘",
      "玄",
      "溜",
      "曰",
      "逻",
      "彭",
      "尝",
      "卿",
      "妨",
      "艇",
      "吞",
      "韦",
      "怨",
      "矮",
      "歇",
    ];
  },
  function (e, t, r) {
    "use strict";
    e.exports = [
      "abandon",
      "ability",
      "able",
      "about",
      "above",
      "absent",
      "absorb",
      "abstract",
      "absurd",
      "abuse",
      "access",
      "accident",
      "account",
      "accuse",
      "achieve",
      "acid",
      "acoustic",
      "acquire",
      "across",
      "act",
      "action",
      "actor",
      "actress",
      "actual",
      "adapt",
      "add",
      "addict",
      "address",
      "adjust",
      "admit",
      "adult",
      "advance",
      "advice",
      "aerobic",
      "affair",
      "afford",
      "afraid",
      "again",
      "age",
      "agent",
      "agree",
      "ahead",
      "aim",
      "air",
      "airport",
      "aisle",
      "alarm",
      "album",
      "alcohol",
      "alert",
      "alien",
      "all",
      "alley",
      "allow",
      "almost",
      "alone",
      "alpha",
      "already",
      "also",
      "alter",
      "always",
      "amateur",
      "amazing",
      "among",
      "amount",
      "amused",
      "analyst",
      "anchor",
      "ancient",
      "anger",
      "angle",
      "angry",
      "animal",
      "ankle",
      "announce",
      "annual",
      "another",
      "answer",
      "antenna",
      "antique",
      "anxiety",
      "any",
      "apart",
      "apology",
      "appear",
      "apple",
      "approve",
      "april",
      "arch",
      "arctic",
      "area",
      "arena",
      "argue",
      "arm",
      "armed",
      "armor",
      "army",
      "around",
      "arrange",
      "arrest",
      "arrive",
      "arrow",
      "art",
      "artefact",
      "artist",
      "artwork",
      "ask",
      "aspect",
      "assault",
      "asset",
      "assist",
      "assume",
      "asthma",
      "athlete",
      "atom",
      "attack",
      "attend",
      "attitude",
      "attract",
      "auction",
      "audit",
      "august",
      "aunt",
      "author",
      "auto",
      "autumn",
      "average",
      "avocado",
      "avoid",
      "awake",
      "aware",
      "away",
      "awesome",
      "awful",
      "awkward",
      "axis",
      "baby",
      "bachelor",
      "bacon",
      "badge",
      "bag",
      "balance",
      "balcony",
      "ball",
      "bamboo",
      "banana",
      "banner",
      "bar",
      "barely",
      "bargain",
      "barrel",
      "base",
      "basic",
      "basket",
      "battle",
      "beach",
      "bean",
      "beauty",
      "because",
      "become",
      "beef",
      "before",
      "begin",
      "behave",
      "behind",
      "believe",
      "below",
      "belt",
      "bench",
      "benefit",
      "best",
      "betray",
      "better",
      "between",
      "beyond",
      "bicycle",
      "bid",
      "bike",
      "bind",
      "biology",
      "bird",
      "birth",
      "bitter",
      "black",
      "blade",
      "blame",
      "blanket",
      "blast",
      "bleak",
      "bless",
      "blind",
      "blood",
      "blossom",
      "blouse",
      "blue",
      "blur",
      "blush",
      "board",
      "boat",
      "body",
      "boil",
      "bomb",
      "bone",
      "bonus",
      "book",
      "boost",
      "border",
      "boring",
      "borrow",
      "boss",
      "bottom",
      "bounce",
      "box",
      "boy",
      "bracket",
      "brain",
      "brand",
      "brass",
      "brave",
      "bread",
      "breeze",
      "brick",
      "bridge",
      "brief",
      "bright",
      "bring",
      "brisk",
      "broccoli",
      "broken",
      "bronze",
      "broom",
      "brother",
      "brown",
      "brush",
      "bubble",
      "buddy",
      "budget",
      "buffalo",
      "build",
      "bulb",
      "bulk",
      "bullet",
      "bundle",
      "bunker",
      "burden",
      "burger",
      "burst",
      "bus",
      "business",
      "busy",
      "butter",
      "buyer",
      "buzz",
      "cabbage",
      "cabin",
      "cable",
      "cactus",
      "cage",
      "cake",
      "call",
      "calm",
      "camera",
      "camp",
      "can",
      "canal",
      "cancel",
      "candy",
      "cannon",
      "canoe",
      "canvas",
      "canyon",
      "capable",
      "capital",
      "captain",
      "car",
      "carbon",
      "card",
      "cargo",
      "carpet",
      "carry",
      "cart",
      "case",
      "cash",
      "casino",
      "castle",
      "casual",
      "cat",
      "catalog",
      "catch",
      "category",
      "cattle",
      "caught",
      "cause",
      "caution",
      "cave",
      "ceiling",
      "celery",
      "cement",
      "census",
      "century",
      "cereal",
      "certain",
      "chair",
      "chalk",
      "champion",
      "change",
      "chaos",
      "chapter",
      "charge",
      "chase",
      "chat",
      "cheap",
      "check",
      "cheese",
      "chef",
      "cherry",
      "chest",
      "chicken",
      "chief",
      "child",
      "chimney",
      "choice",
      "choose",
      "chronic",
      "chuckle",
      "chunk",
      "churn",
      "cigar",
      "cinnamon",
      "circle",
      "citizen",
      "city",
      "civil",
      "claim",
      "clap",
      "clarify",
      "claw",
      "clay",
      "clean",
      "clerk",
      "clever",
      "click",
      "client",
      "cliff",
      "climb",
      "clinic",
      "clip",
      "clock",
      "clog",
      "close",
      "cloth",
      "cloud",
      "clown",
      "club",
      "clump",
      "cluster",
      "clutch",
      "coach",
      "coast",
      "coconut",
      "code",
      "coffee",
      "coil",
      "coin",
      "collect",
      "color",
      "column",
      "combine",
      "come",
      "comfort",
      "comic",
      "common",
      "company",
      "concert",
      "conduct",
      "confirm",
      "congress",
      "connect",
      "consider",
      "control",
      "convince",
      "cook",
      "cool",
      "copper",
      "copy",
      "coral",
      "core",
      "corn",
      "correct",
      "cost",
      "cotton",
      "couch",
      "country",
      "couple",
      "course",
      "cousin",
      "cover",
      "coyote",
      "crack",
      "cradle",
      "craft",
      "cram",
      "crane",
      "crash",
      "crater",
      "crawl",
      "crazy",
      "cream",
      "credit",
      "creek",
      "crew",
      "cricket",
      "crime",
      "crisp",
      "critic",
      "crop",
      "cross",
      "crouch",
      "crowd",
      "crucial",
      "cruel",
      "cruise",
      "crumble",
      "crunch",
      "crush",
      "cry",
      "crystal",
      "cube",
      "culture",
      "cup",
      "cupboard",
      "curious",
      "current",
      "curtain",
      "curve",
      "cushion",
      "custom",
      "cute",
      "cycle",
      "dad",
      "damage",
      "damp",
      "dance",
      "danger",
      "daring",
      "dash",
      "daughter",
      "dawn",
      "day",
      "deal",
      "debate",
      "debris",
      "decade",
      "december",
      "decide",
      "decline",
      "decorate",
      "decrease",
      "deer",
      "defense",
      "define",
      "defy",
      "degree",
      "delay",
      "deliver",
      "demand",
      "demise",
      "denial",
      "dentist",
      "deny",
      "depart",
      "depend",
      "deposit",
      "depth",
      "deputy",
      "derive",
      "describe",
      "desert",
      "design",
      "desk",
      "despair",
      "destroy",
      "detail",
      "detect",
      "develop",
      "device",
      "devote",
      "diagram",
      "dial",
      "diamond",
      "diary",
      "dice",
      "diesel",
      "diet",
      "differ",
      "digital",
      "dignity",
      "dilemma",
      "dinner",
      "dinosaur",
      "direct",
      "dirt",
      "disagree",
      "discover",
      "disease",
      "dish",
      "dismiss",
      "disorder",
      "display",
      "distance",
      "divert",
      "divide",
      "divorce",
      "dizzy",
      "doctor",
      "document",
      "dog",
      "doll",
      "dolphin",
      "domain",
      "donate",
      "donkey",
      "donor",
      "door",
      "dose",
      "double",
      "dove",
      "draft",
      "dragon",
      "drama",
      "drastic",
      "draw",
      "dream",
      "dress",
      "drift",
      "drill",
      "drink",
      "drip",
      "drive",
      "drop",
      "drum",
      "dry",
      "duck",
      "dumb",
      "dune",
      "during",
      "dust",
      "dutch",
      "duty",
      "dwarf",
      "dynamic",
      "eager",
      "eagle",
      "early",
      "earn",
      "earth",
      "easily",
      "east",
      "easy",
      "echo",
      "ecology",
      "economy",
      "edge",
      "edit",
      "educate",
      "effort",
      "egg",
      "eight",
      "either",
      "elbow",
      "elder",
      "electric",
      "elegant",
      "element",
      "elephant",
      "elevator",
      "elite",
      "else",
      "embark",
      "embody",
      "embrace",
      "emerge",
      "emotion",
      "employ",
      "empower",
      "empty",
      "enable",
      "enact",
      "end",
      "endless",
      "endorse",
      "enemy",
      "energy",
      "enforce",
      "engage",
      "engine",
      "enhance",
      "enjoy",
      "enlist",
      "enough",
      "enrich",
      "enroll",
      "ensure",
      "enter",
      "entire",
      "entry",
      "envelope",
      "episode",
      "equal",
      "equip",
      "era",
      "erase",
      "erode",
      "erosion",
      "error",
      "erupt",
      "escape",
      "essay",
      "essence",
      "estate",
      "eternal",
      "ethics",
      "evidence",
      "evil",
      "evoke",
      "evolve",
      "exact",
      "example",
      "excess",
      "exchange",
      "excite",
      "exclude",
      "excuse",
      "execute",
      "exercise",
      "exhaust",
      "exhibit",
      "exile",
      "exist",
      "exit",
      "exotic",
      "expand",
      "expect",
      "expire",
      "explain",
      "expose",
      "express",
      "extend",
      "extra",
      "eye",
      "eyebrow",
      "fabric",
      "face",
      "faculty",
      "fade",
      "faint",
      "faith",
      "fall",
      "false",
      "fame",
      "family",
      "famous",
      "fan",
      "fancy",
      "fantasy",
      "farm",
      "fashion",
      "fat",
      "fatal",
      "father",
      "fatigue",
      "fault",
      "favorite",
      "feature",
      "february",
      "federal",
      "fee",
      "feed",
      "feel",
      "female",
      "fence",
      "festival",
      "fetch",
      "fever",
      "few",
      "fiber",
      "fiction",
      "field",
      "figure",
      "file",
      "film",
      "filter",
      "final",
      "find",
      "fine",
      "finger",
      "finish",
      "fire",
      "firm",
      "first",
      "fiscal",
      "fish",
      "fit",
      "fitness",
      "fix",
      "flag",
      "flame",
      "flash",
      "flat",
      "flavor",
      "flee",
      "flight",
      "flip",
      "float",
      "flock",
      "floor",
      "flower",
      "fluid",
      "flush",
      "fly",
      "foam",
      "focus",
      "fog",
      "foil",
      "fold",
      "follow",
      "food",
      "foot",
      "force",
      "forest",
      "forget",
      "fork",
      "fortune",
      "forum",
      "forward",
      "fossil",
      "foster",
      "found",
      "fox",
      "fragile",
      "frame",
      "frequent",
      "fresh",
      "friend",
      "fringe",
      "frog",
      "front",
      "frost",
      "frown",
      "frozen",
      "fruit",
      "fuel",
      "fun",
      "funny",
      "furnace",
      "fury",
      "future",
      "gadget",
      "gain",
      "galaxy",
      "gallery",
      "game",
      "gap",
      "garage",
      "garbage",
      "garden",
      "garlic",
      "garment",
      "gas",
      "gasp",
      "gate",
      "gather",
      "gauge",
      "gaze",
      "general",
      "genius",
      "genre",
      "gentle",
      "genuine",
      "gesture",
      "ghost",
      "giant",
      "gift",
      "giggle",
      "ginger",
      "giraffe",
      "girl",
      "give",
      "glad",
      "glance",
      "glare",
      "glass",
      "glide",
      "glimpse",
      "globe",
      "gloom",
      "glory",
      "glove",
      "glow",
      "glue",
      "goat",
      "goddess",
      "gold",
      "good",
      "goose",
      "gorilla",
      "gospel",
      "gossip",
      "govern",
      "gown",
      "grab",
      "grace",
      "grain",
      "grant",
      "grape",
      "grass",
      "gravity",
      "great",
      "green",
      "grid",
      "grief",
      "grit",
      "grocery",
      "group",
      "grow",
      "grunt",
      "guard",
      "guess",
      "guide",
      "guilt",
      "guitar",
      "gun",
      "gym",
      "habit",
      "hair",
      "half",
      "hammer",
      "hamster",
      "hand",
      "happy",
      "harbor",
      "hard",
      "harsh",
      "harvest",
      "hat",
      "have",
      "hawk",
      "hazard",
      "head",
      "health",
      "heart",
      "heavy",
      "hedgehog",
      "height",
      "hello",
      "helmet",
      "help",
      "hen",
      "hero",
      "hidden",
      "high",
      "hill",
      "hint",
      "hip",
      "hire",
      "history",
      "hobby",
      "hockey",
      "hold",
      "hole",
      "holiday",
      "hollow",
      "home",
      "honey",
      "hood",
      "hope",
      "horn",
      "horror",
      "horse",
      "hospital",
      "host",
      "hotel",
      "hour",
      "hover",
      "hub",
      "huge",
      "human",
      "humble",
      "humor",
      "hundred",
      "hungry",
      "hunt",
      "hurdle",
      "hurry",
      "hurt",
      "husband",
      "hybrid",
      "ice",
      "icon",
      "idea",
      "identify",
      "idle",
      "ignore",
      "ill",
      "illegal",
      "illness",
      "image",
      "imitate",
      "immense",
      "immune",
      "impact",
      "impose",
      "improve",
      "impulse",
      "inch",
      "include",
      "income",
      "increase",
      "index",
      "indicate",
      "indoor",
      "industry",
      "infant",
      "inflict",
      "inform",
      "inhale",
      "inherit",
      "initial",
      "inject",
      "injury",
      "inmate",
      "inner",
      "innocent",
      "input",
      "inquiry",
      "insane",
      "insect",
      "inside",
      "inspire",
      "install",
      "intact",
      "interest",
      "into",
      "invest",
      "invite",
      "involve",
      "iron",
      "island",
      "isolate",
      "issue",
      "item",
      "ivory",
      "jacket",
      "jaguar",
      "jar",
      "jazz",
      "jealous",
      "jeans",
      "jelly",
      "jewel",
      "job",
      "join",
      "joke",
      "journey",
      "joy",
      "judge",
      "juice",
      "jump",
      "jungle",
      "junior",
      "junk",
      "just",
      "kangaroo",
      "keen",
      "keep",
      "ketchup",
      "key",
      "kick",
      "kid",
      "kidney",
      "kind",
      "kingdom",
      "kiss",
      "kit",
      "kitchen",
      "kite",
      "kitten",
      "kiwi",
      "knee",
      "knife",
      "knock",
      "know",
      "lab",
      "label",
      "labor",
      "ladder",
      "lady",
      "lake",
      "lamp",
      "language",
      "laptop",
      "large",
      "later",
      "latin",
      "laugh",
      "laundry",
      "lava",
      "law",
      "lawn",
      "lawsuit",
      "layer",
      "lazy",
      "leader",
      "leaf",
      "learn",
      "leave",
      "lecture",
      "left",
      "leg",
      "legal",
      "legend",
      "leisure",
      "lemon",
      "lend",
      "length",
      "lens",
      "leopard",
      "lesson",
      "letter",
      "level",
      "liar",
      "liberty",
      "library",
      "license",
      "life",
      "lift",
      "light",
      "like",
      "limb",
      "limit",
      "link",
      "lion",
      "liquid",
      "list",
      "little",
      "live",
      "lizard",
      "load",
      "loan",
      "lobster",
      "local",
      "lock",
      "logic",
      "lonely",
      "long",
      "loop",
      "lottery",
      "loud",
      "lounge",
      "love",
      "loyal",
      "lucky",
      "luggage",
      "lumber",
      "lunar",
      "lunch",
      "luxury",
      "lyrics",
      "machine",
      "mad",
      "magic",
      "magnet",
      "maid",
      "mail",
      "main",
      "major",
      "make",
      "mammal",
      "man",
      "manage",
      "mandate",
      "mango",
      "mansion",
      "manual",
      "maple",
      "marble",
      "march",
      "margin",
      "marine",
      "market",
      "marriage",
      "mask",
      "mass",
      "master",
      "match",
      "material",
      "math",
      "matrix",
      "matter",
      "maximum",
      "maze",
      "meadow",
      "mean",
      "measure",
      "meat",
      "mechanic",
      "medal",
      "media",
      "melody",
      "melt",
      "member",
      "memory",
      "mention",
      "menu",
      "mercy",
      "merge",
      "merit",
      "merry",
      "mesh",
      "message",
      "metal",
      "method",
      "middle",
      "midnight",
      "milk",
      "million",
      "mimic",
      "mind",
      "minimum",
      "minor",
      "minute",
      "miracle",
      "mirror",
      "misery",
      "miss",
      "mistake",
      "mix",
      "mixed",
      "mixture",
      "mobile",
      "model",
      "modify",
      "mom",
      "moment",
      "monitor",
      "monkey",
      "monster",
      "month",
      "moon",
      "moral",
      "more",
      "morning",
      "mosquito",
      "mother",
      "motion",
      "motor",
      "mountain",
      "mouse",
      "move",
      "movie",
      "much",
      "muffin",
      "mule",
      "multiply",
      "muscle",
      "museum",
      "mushroom",
      "music",
      "must",
      "mutual",
      "myself",
      "mystery",
      "myth",
      "naive",
      "name",
      "napkin",
      "narrow",
      "nasty",
      "nation",
      "nature",
      "near",
      "neck",
      "need",
      "negative",
      "neglect",
      "neither",
      "nephew",
      "nerve",
      "nest",
      "net",
      "network",
      "neutral",
      "never",
      "news",
      "next",
      "nice",
      "night",
      "noble",
      "noise",
      "nominee",
      "noodle",
      "normal",
      "north",
      "nose",
      "notable",
      "note",
      "nothing",
      "notice",
      "novel",
      "now",
      "nuclear",
      "number",
      "nurse",
      "nut",
      "oak",
      "obey",
      "object",
      "oblige",
      "obscure",
      "observe",
      "obtain",
      "obvious",
      "occur",
      "ocean",
      "october",
      "odor",
      "off",
      "offer",
      "office",
      "often",
      "oil",
      "okay",
      "old",
      "olive",
      "olympic",
      "omit",
      "once",
      "one",
      "onion",
      "online",
      "only",
      "open",
      "opera",
      "opinion",
      "oppose",
      "option",
      "orange",
      "orbit",
      "orchard",
      "order",
      "ordinary",
      "organ",
      "orient",
      "original",
      "orphan",
      "ostrich",
      "other",
      "outdoor",
      "outer",
      "output",
      "outside",
      "oval",
      "oven",
      "over",
      "own",
      "owner",
      "oxygen",
      "oyster",
      "ozone",
      "pact",
      "paddle",
      "page",
      "pair",
      "palace",
      "palm",
      "panda",
      "panel",
      "panic",
      "panther",
      "paper",
      "parade",
      "parent",
      "park",
      "parrot",
      "party",
      "pass",
      "patch",
      "path",
      "patient",
      "patrol",
      "pattern",
      "pause",
      "pave",
      "payment",
      "peace",
      "peanut",
      "pear",
      "peasant",
      "pelican",
      "pen",
      "penalty",
      "pencil",
      "people",
      "pepper",
      "perfect",
      "permit",
      "person",
      "pet",
      "phone",
      "photo",
      "phrase",
      "physical",
      "piano",
      "picnic",
      "picture",
      "piece",
      "pig",
      "pigeon",
      "pill",
      "pilot",
      "pink",
      "pioneer",
      "pipe",
      "pistol",
      "pitch",
      "pizza",
      "place",
      "planet",
      "plastic",
      "plate",
      "play",
      "please",
      "pledge",
      "pluck",
      "plug",
      "plunge",
      "poem",
      "poet",
      "point",
      "polar",
      "pole",
      "police",
      "pond",
      "pony",
      "pool",
      "popular",
      "portion",
      "position",
      "possible",
      "post",
      "potato",
      "pottery",
      "poverty",
      "powder",
      "power",
      "practice",
      "praise",
      "predict",
      "prefer",
      "prepare",
      "present",
      "pretty",
      "prevent",
      "price",
      "pride",
      "primary",
      "print",
      "priority",
      "prison",
      "private",
      "prize",
      "problem",
      "process",
      "produce",
      "profit",
      "program",
      "project",
      "promote",
      "proof",
      "property",
      "prosper",
      "protect",
      "proud",
      "provide",
      "public",
      "pudding",
      "pull",
      "pulp",
      "pulse",
      "pumpkin",
      "punch",
      "pupil",
      "puppy",
      "purchase",
      "purity",
      "purpose",
      "purse",
      "push",
      "put",
      "puzzle",
      "pyramid",
      "quality",
      "quantum",
      "quarter",
      "question",
      "quick",
      "quit",
      "quiz",
      "quote",
      "rabbit",
      "raccoon",
      "race",
      "rack",
      "radar",
      "radio",
      "rail",
      "rain",
      "raise",
      "rally",
      "ramp",
      "ranch",
      "random",
      "range",
      "rapid",
      "rare",
      "rate",
      "rather",
      "raven",
      "raw",
      "razor",
      "ready",
      "real",
      "reason",
      "rebel",
      "rebuild",
      "recall",
      "receive",
      "recipe",
      "record",
      "recycle",
      "reduce",
      "reflect",
      "reform",
      "refuse",
      "region",
      "regret",
      "regular",
      "reject",
      "relax",
      "release",
      "relief",
      "rely",
      "remain",
      "remember",
      "remind",
      "remove",
      "render",
      "renew",
      "rent",
      "reopen",
      "repair",
      "repeat",
      "replace",
      "report",
      "require",
      "rescue",
      "resemble",
      "resist",
      "resource",
      "response",
      "result",
      "retire",
      "retreat",
      "return",
      "reunion",
      "reveal",
      "review",
      "reward",
      "rhythm",
      "rib",
      "ribbon",
      "rice",
      "rich",
      "ride",
      "ridge",
      "rifle",
      "right",
      "rigid",
      "ring",
      "riot",
      "ripple",
      "risk",
      "ritual",
      "rival",
      "river",
      "road",
      "roast",
      "robot",
      "robust",
      "rocket",
      "romance",
      "roof",
      "rookie",
      "room",
      "rose",
      "rotate",
      "rough",
      "round",
      "route",
      "royal",
      "rubber",
      "rude",
      "rug",
      "rule",
      "run",
      "runway",
      "rural",
      "sad",
      "saddle",
      "sadness",
      "safe",
      "sail",
      "salad",
      "salmon",
      "salon",
      "salt",
      "salute",
      "same",
      "sample",
      "sand",
      "satisfy",
      "satoshi",
      "sauce",
      "sausage",
      "save",
      "say",
      "scale",
      "scan",
      "scare",
      "scatter",
      "scene",
      "scheme",
      "school",
      "science",
      "scissors",
      "scorpion",
      "scout",
      "scrap",
      "screen",
      "script",
      "scrub",
      "sea",
      "search",
      "season",
      "seat",
      "second",
      "secret",
      "section",
      "security",
      "seed",
      "seek",
      "segment",
      "select",
      "sell",
      "seminar",
      "senior",
      "sense",
      "sentence",
      "series",
      "service",
      "session",
      "settle",
      "setup",
      "seven",
      "shadow",
      "shaft",
      "shallow",
      "share",
      "shed",
      "shell",
      "sheriff",
      "shield",
      "shift",
      "shine",
      "ship",
      "shiver",
      "shock",
      "shoe",
      "shoot",
      "shop",
      "short",
      "shoulder",
      "shove",
      "shrimp",
      "shrug",
      "shuffle",
      "shy",
      "sibling",
      "sick",
      "side",
      "siege",
      "sight",
      "sign",
      "silent",
      "silk",
      "silly",
      "silver",
      "similar",
      "simple",
      "since",
      "sing",
      "siren",
      "sister",
      "situate",
      "six",
      "size",
      "skate",
      "sketch",
      "ski",
      "skill",
      "skin",
      "skirt",
      "skull",
      "slab",
      "slam",
      "sleep",
      "slender",
      "slice",
      "slide",
      "slight",
      "slim",
      "slogan",
      "slot",
      "slow",
      "slush",
      "small",
      "smart",
      "smile",
      "smoke",
      "smooth",
      "snack",
      "snake",
      "snap",
      "sniff",
      "snow",
      "soap",
      "soccer",
      "social",
      "sock",
      "soda",
      "soft",
      "solar",
      "soldier",
      "solid",
      "solution",
      "solve",
      "someone",
      "song",
      "soon",
      "sorry",
      "sort",
      "soul",
      "sound",
      "soup",
      "source",
      "south",
      "space",
      "spare",
      "spatial",
      "spawn",
      "speak",
      "special",
      "speed",
      "spell",
      "spend",
      "sphere",
      "spice",
      "spider",
      "spike",
      "spin",
      "spirit",
      "split",
      "spoil",
      "sponsor",
      "spoon",
      "sport",
      "spot",
      "spray",
      "spread",
      "spring",
      "spy",
      "square",
      "squeeze",
      "squirrel",
      "stable",
      "stadium",
      "staff",
      "stage",
      "stairs",
      "stamp",
      "stand",
      "start",
      "state",
      "stay",
      "steak",
      "steel",
      "stem",
      "step",
      "stereo",
      "stick",
      "still",
      "sting",
      "stock",
      "stomach",
      "stone",
      "stool",
      "story",
      "stove",
      "strategy",
      "street",
      "strike",
      "strong",
      "struggle",
      "student",
      "stuff",
      "stumble",
      "style",
      "subject",
      "submit",
      "subway",
      "success",
      "such",
      "sudden",
      "suffer",
      "sugar",
      "suggest",
      "suit",
      "summer",
      "sun",
      "sunny",
      "sunset",
      "super",
      "supply",
      "supreme",
      "sure",
      "surface",
      "surge",
      "surprise",
      "surround",
      "survey",
      "suspect",
      "sustain",
      "swallow",
      "swamp",
      "swap",
      "swarm",
      "swear",
      "sweet",
      "swift",
      "swim",
      "swing",
      "switch",
      "sword",
      "symbol",
      "symptom",
      "syrup",
      "system",
      "table",
      "tackle",
      "tag",
      "tail",
      "talent",
      "talk",
      "tank",
      "tape",
      "target",
      "task",
      "taste",
      "tattoo",
      "taxi",
      "teach",
      "team",
      "tell",
      "ten",
      "tenant",
      "tennis",
      "tent",
      "term",
      "test",
      "text",
      "thank",
      "that",
      "theme",
      "then",
      "theory",
      "there",
      "they",
      "thing",
      "this",
      "thought",
      "three",
      "thrive",
      "throw",
      "thumb",
      "thunder",
      "ticket",
      "tide",
      "tiger",
      "tilt",
      "timber",
      "time",
      "tiny",
      "tip",
      "tired",
      "tissue",
      "title",
      "toast",
      "tobacco",
      "today",
      "toddler",
      "toe",
      "together",
      "toilet",
      "token",
      "tomato",
      "tomorrow",
      "tone",
      "tongue",
      "tonight",
      "tool",
      "tooth",
      "top",
      "topic",
      "topple",
      "torch",
      "tornado",
      "tortoise",
      "toss",
      "total",
      "tourist",
      "toward",
      "tower",
      "town",
      "toy",
      "track",
      "trade",
      "traffic",
      "tragic",
      "train",
      "transfer",
      "trap",
      "trash",
      "travel",
      "tray",
      "treat",
      "tree",
      "trend",
      "trial",
      "tribe",
      "trick",
      "trigger",
      "trim",
      "trip",
      "trophy",
      "trouble",
      "truck",
      "true",
      "truly",
      "trumpet",
      "trust",
      "truth",
      "try",
      "tube",
      "tuition",
      "tumble",
      "tuna",
      "tunnel",
      "turkey",
      "turn",
      "turtle",
      "twelve",
      "twenty",
      "twice",
      "twin",
      "twist",
      "two",
      "type",
      "typical",
      "ugly",
      "umbrella",
      "unable",
      "unaware",
      "uncle",
      "uncover",
      "under",
      "undo",
      "unfair",
      "unfold",
      "unhappy",
      "uniform",
      "unique",
      "unit",
      "universe",
      "unknown",
      "unlock",
      "until",
      "unusual",
      "unveil",
      "update",
      "upgrade",
      "uphold",
      "upon",
      "upper",
      "upset",
      "urban",
      "urge",
      "usage",
      "use",
      "used",
      "useful",
      "useless",
      "usual",
      "utility",
      "vacant",
      "vacuum",
      "vague",
      "valid",
      "valley",
      "valve",
      "van",
      "vanish",
      "vapor",
      "various",
      "vast",
      "vault",
      "vehicle",
      "velvet",
      "vendor",
      "venture",
      "venue",
      "verb",
      "verify",
      "version",
      "very",
      "vessel",
      "veteran",
      "viable",
      "vibrant",
      "vicious",
      "victory",
      "video",
      "view",
      "village",
      "vintage",
      "violin",
      "virtual",
      "virus",
      "visa",
      "visit",
      "visual",
      "vital",
      "vivid",
      "vocal",
      "voice",
      "void",
      "volcano",
      "volume",
      "vote",
      "voyage",
      "wage",
      "wagon",
      "wait",
      "walk",
      "wall",
      "walnut",
      "want",
      "warfare",
      "warm",
      "warrior",
      "wash",
      "wasp",
      "waste",
      "water",
      "wave",
      "way",
      "wealth",
      "weapon",
      "wear",
      "weasel",
      "weather",
      "web",
      "wedding",
      "weekend",
      "weird",
      "welcome",
      "west",
      "wet",
      "whale",
      "what",
      "wheat",
      "wheel",
      "when",
      "where",
      "whip",
      "whisper",
      "wide",
      "width",
      "wife",
      "wild",
      "will",
      "win",
      "window",
      "wine",
      "wing",
      "wink",
      "winner",
      "winter",
      "wire",
      "wisdom",
      "wise",
      "wish",
      "witness",
      "wolf",
      "woman",
      "wonder",
      "wood",
      "wool",
      "word",
      "work",
      "world",
      "worry",
      "worth",
      "wrap",
      "wreck",
      "wrestle",
      "wrist",
      "write",
      "wrong",
      "yard",
      "year",
      "yellow",
      "you",
      "young",
      "youth",
      "zebra",
      "zero",
      "zone",
      "zoo",
    ];
  },
  function (e, t) {
    e.exports = [
      "abaisser",
      "abandon",
      "abdiquer",
      "abeille",
      "abolir",
      "aborder",
      "aboutir",
      "aboyer",
      "abrasif",
      "abreuver",
      "abriter",
      "abroger",
      "abrupt",
      "absence",
      "absolu",
      "absurde",
      "abusif",
      "abyssal",
      "académie",
      "acajou",
      "acarien",
      "accabler",
      "accepter",
      "acclamer",
      "accolade",
      "accroche",
      "accuser",
      "acerbe",
      "achat",
      "acheter",
      "aciduler",
      "acier",
      "acompte",
      "acquérir",
      "acronyme",
      "acteur",
      "actif",
      "actuel",
      "adepte",
      "adéquat",
      "adhésif",
      "adjectif",
      "adjuger",
      "admettre",
      "admirer",
      "adopter",
      "adorer",
      "adoucir",
      "adresse",
      "adroit",
      "adulte",
      "adverbe",
      "aérer",
      "aéronef",
      "affaire",
      "affecter",
      "affiche",
      "affreux",
      "affubler",
      "agacer",
      "agencer",
      "agile",
      "agiter",
      "agrafer",
      "agréable",
      "agrume",
      "aider",
      "aiguille",
      "ailier",
      "aimable",
      "aisance",
      "ajouter",
      "ajuster",
      "alarmer",
      "alchimie",
      "alerte",
      "algèbre",
      "algue",
      "aliéner",
      "aliment",
      "alléger",
      "alliage",
      "allouer",
      "allumer",
      "alourdir",
      "alpaga",
      "altesse",
      "alvéole",
      "amateur",
      "ambigu",
      "ambre",
      "aménager",
      "amertume",
      "amidon",
      "amiral",
      "amorcer",
      "amour",
      "amovible",
      "amphibie",
      "ampleur",
      "amusant",
      "analyse",
      "anaphore",
      "anarchie",
      "anatomie",
      "ancien",
      "anéantir",
      "angle",
      "angoisse",
      "anguleux",
      "animal",
      "annexer",
      "annonce",
      "annuel",
      "anodin",
      "anomalie",
      "anonyme",
      "anormal",
      "antenne",
      "antidote",
      "anxieux",
      "apaiser",
      "apéritif",
      "aplanir",
      "apologie",
      "appareil",
      "appeler",
      "apporter",
      "appuyer",
      "aquarium",
      "aqueduc",
      "arbitre",
      "arbuste",
      "ardeur",
      "ardoise",
      "argent",
      "arlequin",
      "armature",
      "armement",
      "armoire",
      "armure",
      "arpenter",
      "arracher",
      "arriver",
      "arroser",
      "arsenic",
      "artériel",
      "article",
      "aspect",
      "asphalte",
      "aspirer",
      "assaut",
      "asservir",
      "assiette",
      "associer",
      "assurer",
      "asticot",
      "astre",
      "astuce",
      "atelier",
      "atome",
      "atrium",
      "atroce",
      "attaque",
      "attentif",
      "attirer",
      "attraper",
      "aubaine",
      "auberge",
      "audace",
      "audible",
      "augurer",
      "aurore",
      "automne",
      "autruche",
      "avaler",
      "avancer",
      "avarice",
      "avenir",
      "averse",
      "aveugle",
      "aviateur",
      "avide",
      "avion",
      "aviser",
      "avoine",
      "avouer",
      "avril",
      "axial",
      "axiome",
      "badge",
      "bafouer",
      "bagage",
      "baguette",
      "baignade",
      "balancer",
      "balcon",
      "baleine",
      "balisage",
      "bambin",
      "bancaire",
      "bandage",
      "banlieue",
      "bannière",
      "banquier",
      "barbier",
      "baril",
      "baron",
      "barque",
      "barrage",
      "bassin",
      "bastion",
      "bataille",
      "bateau",
      "batterie",
      "baudrier",
      "bavarder",
      "belette",
      "bélier",
      "belote",
      "bénéfice",
      "berceau",
      "berger",
      "berline",
      "bermuda",
      "besace",
      "besogne",
      "bétail",
      "beurre",
      "biberon",
      "bicycle",
      "bidule",
      "bijou",
      "bilan",
      "bilingue",
      "billard",
      "binaire",
      "biologie",
      "biopsie",
      "biotype",
      "biscuit",
      "bison",
      "bistouri",
      "bitume",
      "bizarre",
      "blafard",
      "blague",
      "blanchir",
      "blessant",
      "blinder",
      "blond",
      "bloquer",
      "blouson",
      "bobard",
      "bobine",
      "boire",
      "boiser",
      "bolide",
      "bonbon",
      "bondir",
      "bonheur",
      "bonifier",
      "bonus",
      "bordure",
      "borne",
      "botte",
      "boucle",
      "boueux",
      "bougie",
      "boulon",
      "bouquin",
      "bourse",
      "boussole",
      "boutique",
      "boxeur",
      "branche",
      "brasier",
      "brave",
      "brebis",
      "brèche",
      "breuvage",
      "bricoler",
      "brigade",
      "brillant",
      "brioche",
      "brique",
      "brochure",
      "broder",
      "bronzer",
      "brousse",
      "broyeur",
      "brume",
      "brusque",
      "brutal",
      "bruyant",
      "buffle",
      "buisson",
      "bulletin",
      "bureau",
      "burin",
      "bustier",
      "butiner",
      "butoir",
      "buvable",
      "buvette",
      "cabanon",
      "cabine",
      "cachette",
      "cadeau",
      "cadre",
      "caféine",
      "caillou",
      "caisson",
      "calculer",
      "calepin",
      "calibre",
      "calmer",
      "calomnie",
      "calvaire",
      "camarade",
      "caméra",
      "camion",
      "campagne",
      "canal",
      "caneton",
      "canon",
      "cantine",
      "canular",
      "capable",
      "caporal",
      "caprice",
      "capsule",
      "capter",
      "capuche",
      "carabine",
      "carbone",
      "caresser",
      "caribou",
      "carnage",
      "carotte",
      "carreau",
      "carton",
      "cascade",
      "casier",
      "casque",
      "cassure",
      "causer",
      "caution",
      "cavalier",
      "caverne",
      "caviar",
      "cédille",
      "ceinture",
      "céleste",
      "cellule",
      "cendrier",
      "censurer",
      "central",
      "cercle",
      "cérébral",
      "cerise",
      "cerner",
      "cerveau",
      "cesser",
      "chagrin",
      "chaise",
      "chaleur",
      "chambre",
      "chance",
      "chapitre",
      "charbon",
      "chasseur",
      "chaton",
      "chausson",
      "chavirer",
      "chemise",
      "chenille",
      "chéquier",
      "chercher",
      "cheval",
      "chien",
      "chiffre",
      "chignon",
      "chimère",
      "chiot",
      "chlorure",
      "chocolat",
      "choisir",
      "chose",
      "chouette",
      "chrome",
      "chute",
      "cigare",
      "cigogne",
      "cimenter",
      "cinéma",
      "cintrer",
      "circuler",
      "cirer",
      "cirque",
      "citerne",
      "citoyen",
      "citron",
      "civil",
      "clairon",
      "clameur",
      "claquer",
      "classe",
      "clavier",
      "client",
      "cligner",
      "climat",
      "clivage",
      "cloche",
      "clonage",
      "cloporte",
      "cobalt",
      "cobra",
      "cocasse",
      "cocotier",
      "coder",
      "codifier",
      "coffre",
      "cogner",
      "cohésion",
      "coiffer",
      "coincer",
      "colère",
      "colibri",
      "colline",
      "colmater",
      "colonel",
      "combat",
      "comédie",
      "commande",
      "compact",
      "concert",
      "conduire",
      "confier",
      "congeler",
      "connoter",
      "consonne",
      "contact",
      "convexe",
      "copain",
      "copie",
      "corail",
      "corbeau",
      "cordage",
      "corniche",
      "corpus",
      "correct",
      "cortège",
      "cosmique",
      "costume",
      "coton",
      "coude",
      "coupure",
      "courage",
      "couteau",
      "couvrir",
      "coyote",
      "crabe",
      "crainte",
      "cravate",
      "crayon",
      "créature",
      "créditer",
      "crémeux",
      "creuser",
      "crevette",
      "cribler",
      "crier",
      "cristal",
      "critère",
      "croire",
      "croquer",
      "crotale",
      "crucial",
      "cruel",
      "crypter",
      "cubique",
      "cueillir",
      "cuillère",
      "cuisine",
      "cuivre",
      "culminer",
      "cultiver",
      "cumuler",
      "cupide",
      "curatif",
      "curseur",
      "cyanure",
      "cycle",
      "cylindre",
      "cynique",
      "daigner",
      "damier",
      "danger",
      "danseur",
      "dauphin",
      "débattre",
      "débiter",
      "déborder",
      "débrider",
      "débutant",
      "décaler",
      "décembre",
      "déchirer",
      "décider",
      "déclarer",
      "décorer",
      "décrire",
      "décupler",
      "dédale",
      "déductif",
      "déesse",
      "défensif",
      "défiler",
      "défrayer",
      "dégager",
      "dégivrer",
      "déglutir",
      "dégrafer",
      "déjeuner",
      "délice",
      "déloger",
      "demander",
      "demeurer",
      "démolir",
      "dénicher",
      "dénouer",
      "dentelle",
      "dénuder",
      "départ",
      "dépenser",
      "déphaser",
      "déplacer",
      "déposer",
      "déranger",
      "dérober",
      "désastre",
      "descente",
      "désert",
      "désigner",
      "désobéir",
      "dessiner",
      "destrier",
      "détacher",
      "détester",
      "détourer",
      "détresse",
      "devancer",
      "devenir",
      "deviner",
      "devoir",
      "diable",
      "dialogue",
      "diamant",
      "dicter",
      "différer",
      "digérer",
      "digital",
      "digne",
      "diluer",
      "dimanche",
      "diminuer",
      "dioxyde",
      "directif",
      "diriger",
      "discuter",
      "disposer",
      "dissiper",
      "distance",
      "divertir",
      "diviser",
      "docile",
      "docteur",
      "dogme",
      "doigt",
      "domaine",
      "domicile",
      "dompter",
      "donateur",
      "donjon",
      "donner",
      "dopamine",
      "dortoir",
      "dorure",
      "dosage",
      "doseur",
      "dossier",
      "dotation",
      "douanier",
      "double",
      "douceur",
      "douter",
      "doyen",
      "dragon",
      "draper",
      "dresser",
      "dribbler",
      "droiture",
      "duperie",
      "duplexe",
      "durable",
      "durcir",
      "dynastie",
      "éblouir",
      "écarter",
      "écharpe",
      "échelle",
      "éclairer",
      "éclipse",
      "éclore",
      "écluse",
      "école",
      "économie",
      "écorce",
      "écouter",
      "écraser",
      "écrémer",
      "écrivain",
      "écrou",
      "écume",
      "écureuil",
      "édifier",
      "éduquer",
      "effacer",
      "effectif",
      "effigie",
      "effort",
      "effrayer",
      "effusion",
      "égaliser",
      "égarer",
      "éjecter",
      "élaborer",
      "élargir",
      "électron",
      "élégant",
      "éléphant",
      "élève",
      "éligible",
      "élitisme",
      "éloge",
      "élucider",
      "éluder",
      "emballer",
      "embellir",
      "embryon",
      "émeraude",
      "émission",
      "emmener",
      "émotion",
      "émouvoir",
      "empereur",
      "employer",
      "emporter",
      "emprise",
      "émulsion",
      "encadrer",
      "enchère",
      "enclave",
      "encoche",
      "endiguer",
      "endosser",
      "endroit",
      "enduire",
      "énergie",
      "enfance",
      "enfermer",
      "enfouir",
      "engager",
      "engin",
      "englober",
      "énigme",
      "enjamber",
      "enjeu",
      "enlever",
      "ennemi",
      "ennuyeux",
      "enrichir",
      "enrobage",
      "enseigne",
      "entasser",
      "entendre",
      "entier",
      "entourer",
      "entraver",
      "énumérer",
      "envahir",
      "enviable",
      "envoyer",
      "enzyme",
      "éolien",
      "épaissir",
      "épargne",
      "épatant",
      "épaule",
      "épicerie",
      "épidémie",
      "épier",
      "épilogue",
      "épine",
      "épisode",
      "épitaphe",
      "époque",
      "épreuve",
      "éprouver",
      "épuisant",
      "équerre",
      "équipe",
      "ériger",
      "érosion",
      "erreur",
      "éruption",
      "escalier",
      "espadon",
      "espèce",
      "espiègle",
      "espoir",
      "esprit",
      "esquiver",
      "essayer",
      "essence",
      "essieu",
      "essorer",
      "estime",
      "estomac",
      "estrade",
      "étagère",
      "étaler",
      "étanche",
      "étatique",
      "éteindre",
      "étendoir",
      "éternel",
      "éthanol",
      "éthique",
      "ethnie",
      "étirer",
      "étoffer",
      "étoile",
      "étonnant",
      "étourdir",
      "étrange",
      "étroit",
      "étude",
      "euphorie",
      "évaluer",
      "évasion",
      "éventail",
      "évidence",
      "éviter",
      "évolutif",
      "évoquer",
      "exact",
      "exagérer",
      "exaucer",
      "exceller",
      "excitant",
      "exclusif",
      "excuse",
      "exécuter",
      "exemple",
      "exercer",
      "exhaler",
      "exhorter",
      "exigence",
      "exiler",
      "exister",
      "exotique",
      "expédier",
      "explorer",
      "exposer",
      "exprimer",
      "exquis",
      "extensif",
      "extraire",
      "exulter",
      "fable",
      "fabuleux",
      "facette",
      "facile",
      "facture",
      "faiblir",
      "falaise",
      "fameux",
      "famille",
      "farceur",
      "farfelu",
      "farine",
      "farouche",
      "fasciner",
      "fatal",
      "fatigue",
      "faucon",
      "fautif",
      "faveur",
      "favori",
      "fébrile",
      "féconder",
      "fédérer",
      "félin",
      "femme",
      "fémur",
      "fendoir",
      "féodal",
      "fermer",
      "féroce",
      "ferveur",
      "festival",
      "feuille",
      "feutre",
      "février",
      "fiasco",
      "ficeler",
      "fictif",
      "fidèle",
      "figure",
      "filature",
      "filetage",
      "filière",
      "filleul",
      "filmer",
      "filou",
      "filtrer",
      "financer",
      "finir",
      "fiole",
      "firme",
      "fissure",
      "fixer",
      "flairer",
      "flamme",
      "flasque",
      "flatteur",
      "fléau",
      "flèche",
      "fleur",
      "flexion",
      "flocon",
      "flore",
      "fluctuer",
      "fluide",
      "fluvial",
      "folie",
      "fonderie",
      "fongible",
      "fontaine",
      "forcer",
      "forgeron",
      "formuler",
      "fortune",
      "fossile",
      "foudre",
      "fougère",
      "fouiller",
      "foulure",
      "fourmi",
      "fragile",
      "fraise",
      "franchir",
      "frapper",
      "frayeur",
      "frégate",
      "freiner",
      "frelon",
      "frémir",
      "frénésie",
      "frère",
      "friable",
      "friction",
      "frisson",
      "frivole",
      "froid",
      "fromage",
      "frontal",
      "frotter",
      "fruit",
      "fugitif",
      "fuite",
      "fureur",
      "furieux",
      "furtif",
      "fusion",
      "futur",
      "gagner",
      "galaxie",
      "galerie",
      "gambader",
      "garantir",
      "gardien",
      "garnir",
      "garrigue",
      "gazelle",
      "gazon",
      "géant",
      "gélatine",
      "gélule",
      "gendarme",
      "général",
      "génie",
      "genou",
      "gentil",
      "géologie",
      "géomètre",
      "géranium",
      "germe",
      "gestuel",
      "geyser",
      "gibier",
      "gicler",
      "girafe",
      "givre",
      "glace",
      "glaive",
      "glisser",
      "globe",
      "gloire",
      "glorieux",
      "golfeur",
      "gomme",
      "gonfler",
      "gorge",
      "gorille",
      "goudron",
      "gouffre",
      "goulot",
      "goupille",
      "gourmand",
      "goutte",
      "graduel",
      "graffiti",
      "graine",
      "grand",
      "grappin",
      "gratuit",
      "gravir",
      "grenat",
      "griffure",
      "griller",
      "grimper",
      "grogner",
      "gronder",
      "grotte",
      "groupe",
      "gruger",
      "grutier",
      "gruyère",
      "guépard",
      "guerrier",
      "guide",
      "guimauve",
      "guitare",
      "gustatif",
      "gymnaste",
      "gyrostat",
      "habitude",
      "hachoir",
      "halte",
      "hameau",
      "hangar",
      "hanneton",
      "haricot",
      "harmonie",
      "harpon",
      "hasard",
      "hélium",
      "hématome",
      "herbe",
      "hérisson",
      "hermine",
      "héron",
      "hésiter",
      "heureux",
      "hiberner",
      "hibou",
      "hilarant",
      "histoire",
      "hiver",
      "homard",
      "hommage",
      "homogène",
      "honneur",
      "honorer",
      "honteux",
      "horde",
      "horizon",
      "horloge",
      "hormone",
      "horrible",
      "houleux",
      "housse",
      "hublot",
      "huileux",
      "humain",
      "humble",
      "humide",
      "humour",
      "hurler",
      "hydromel",
      "hygiène",
      "hymne",
      "hypnose",
      "idylle",
      "ignorer",
      "iguane",
      "illicite",
      "illusion",
      "image",
      "imbiber",
      "imiter",
      "immense",
      "immobile",
      "immuable",
      "impact",
      "impérial",
      "implorer",
      "imposer",
      "imprimer",
      "imputer",
      "incarner",
      "incendie",
      "incident",
      "incliner",
      "incolore",
      "indexer",
      "indice",
      "inductif",
      "inédit",
      "ineptie",
      "inexact",
      "infini",
      "infliger",
      "informer",
      "infusion",
      "ingérer",
      "inhaler",
      "inhiber",
      "injecter",
      "injure",
      "innocent",
      "inoculer",
      "inonder",
      "inscrire",
      "insecte",
      "insigne",
      "insolite",
      "inspirer",
      "instinct",
      "insulter",
      "intact",
      "intense",
      "intime",
      "intrigue",
      "intuitif",
      "inutile",
      "invasion",
      "inventer",
      "inviter",
      "invoquer",
      "ironique",
      "irradier",
      "irréel",
      "irriter",
      "isoler",
      "ivoire",
      "ivresse",
      "jaguar",
      "jaillir",
      "jambe",
      "janvier",
      "jardin",
      "jauger",
      "jaune",
      "javelot",
      "jetable",
      "jeton",
      "jeudi",
      "jeunesse",
      "joindre",
      "joncher",
      "jongler",
      "joueur",
      "jouissif",
      "journal",
      "jovial",
      "joyau",
      "joyeux",
      "jubiler",
      "jugement",
      "junior",
      "jupon",
      "juriste",
      "justice",
      "juteux",
      "juvénile",
      "kayak",
      "kimono",
      "kiosque",
      "label",
      "labial",
      "labourer",
      "lacérer",
      "lactose",
      "lagune",
      "laine",
      "laisser",
      "laitier",
      "lambeau",
      "lamelle",
      "lampe",
      "lanceur",
      "langage",
      "lanterne",
      "lapin",
      "largeur",
      "larme",
      "laurier",
      "lavabo",
      "lavoir",
      "lecture",
      "légal",
      "léger",
      "légume",
      "lessive",
      "lettre",
      "levier",
      "lexique",
      "lézard",
      "liasse",
      "libérer",
      "libre",
      "licence",
      "licorne",
      "liège",
      "lièvre",
      "ligature",
      "ligoter",
      "ligue",
      "limer",
      "limite",
      "limonade",
      "limpide",
      "linéaire",
      "lingot",
      "lionceau",
      "liquide",
      "lisière",
      "lister",
      "lithium",
      "litige",
      "littoral",
      "livreur",
      "logique",
      "lointain",
      "loisir",
      "lombric",
      "loterie",
      "louer",
      "lourd",
      "loutre",
      "louve",
      "loyal",
      "lubie",
      "lucide",
      "lucratif",
      "lueur",
      "lugubre",
      "luisant",
      "lumière",
      "lunaire",
      "lundi",
      "luron",
      "lutter",
      "luxueux",
      "machine",
      "magasin",
      "magenta",
      "magique",
      "maigre",
      "maillon",
      "maintien",
      "mairie",
      "maison",
      "majorer",
      "malaxer",
      "maléfice",
      "malheur",
      "malice",
      "mallette",
      "mammouth",
      "mandater",
      "maniable",
      "manquant",
      "manteau",
      "manuel",
      "marathon",
      "marbre",
      "marchand",
      "mardi",
      "maritime",
      "marqueur",
      "marron",
      "marteler",
      "mascotte",
      "massif",
      "matériel",
      "matière",
      "matraque",
      "maudire",
      "maussade",
      "mauve",
      "maximal",
      "méchant",
      "méconnu",
      "médaille",
      "médecin",
      "méditer",
      "méduse",
      "meilleur",
      "mélange",
      "mélodie",
      "membre",
      "mémoire",
      "menacer",
      "mener",
      "menhir",
      "mensonge",
      "mentor",
      "mercredi",
      "mérite",
      "merle",
      "messager",
      "mesure",
      "métal",
      "météore",
      "méthode",
      "métier",
      "meuble",
      "miauler",
      "microbe",
      "miette",
      "mignon",
      "migrer",
      "milieu",
      "million",
      "mimique",
      "mince",
      "minéral",
      "minimal",
      "minorer",
      "minute",
      "miracle",
      "miroiter",
      "missile",
      "mixte",
      "mobile",
      "moderne",
      "moelleux",
      "mondial",
      "moniteur",
      "monnaie",
      "monotone",
      "monstre",
      "montagne",
      "monument",
      "moqueur",
      "morceau",
      "morsure",
      "mortier",
      "moteur",
      "motif",
      "mouche",
      "moufle",
      "moulin",
      "mousson",
      "mouton",
      "mouvant",
      "multiple",
      "munition",
      "muraille",
      "murène",
      "murmure",
      "muscle",
      "muséum",
      "musicien",
      "mutation",
      "muter",
      "mutuel",
      "myriade",
      "myrtille",
      "mystère",
      "mythique",
      "nageur",
      "nappe",
      "narquois",
      "narrer",
      "natation",
      "nation",
      "nature",
      "naufrage",
      "nautique",
      "navire",
      "nébuleux",
      "nectar",
      "néfaste",
      "négation",
      "négliger",
      "négocier",
      "neige",
      "nerveux",
      "nettoyer",
      "neurone",
      "neutron",
      "neveu",
      "niche",
      "nickel",
      "nitrate",
      "niveau",
      "noble",
      "nocif",
      "nocturne",
      "noirceur",
      "noisette",
      "nomade",
      "nombreux",
      "nommer",
      "normatif",
      "notable",
      "notifier",
      "notoire",
      "nourrir",
      "nouveau",
      "novateur",
      "novembre",
      "novice",
      "nuage",
      "nuancer",
      "nuire",
      "nuisible",
      "numéro",
      "nuptial",
      "nuque",
      "nutritif",
      "obéir",
      "objectif",
      "obliger",
      "obscur",
      "observer",
      "obstacle",
      "obtenir",
      "obturer",
      "occasion",
      "occuper",
      "océan",
      "octobre",
      "octroyer",
      "octupler",
      "oculaire",
      "odeur",
      "odorant",
      "offenser",
      "officier",
      "offrir",
      "ogive",
      "oiseau",
      "oisillon",
      "olfactif",
      "olivier",
      "ombrage",
      "omettre",
      "onctueux",
      "onduler",
      "onéreux",
      "onirique",
      "opale",
      "opaque",
      "opérer",
      "opinion",
      "opportun",
      "opprimer",
      "opter",
      "optique",
      "orageux",
      "orange",
      "orbite",
      "ordonner",
      "oreille",
      "organe",
      "orgueil",
      "orifice",
      "ornement",
      "orque",
      "ortie",
      "osciller",
      "osmose",
      "ossature",
      "otarie",
      "ouragan",
      "ourson",
      "outil",
      "outrager",
      "ouvrage",
      "ovation",
      "oxyde",
      "oxygène",
      "ozone",
      "paisible",
      "palace",
      "palmarès",
      "palourde",
      "palper",
      "panache",
      "panda",
      "pangolin",
      "paniquer",
      "panneau",
      "panorama",
      "pantalon",
      "papaye",
      "papier",
      "papoter",
      "papyrus",
      "paradoxe",
      "parcelle",
      "paresse",
      "parfumer",
      "parler",
      "parole",
      "parrain",
      "parsemer",
      "partager",
      "parure",
      "parvenir",
      "passion",
      "pastèque",
      "paternel",
      "patience",
      "patron",
      "pavillon",
      "pavoiser",
      "payer",
      "paysage",
      "peigne",
      "peintre",
      "pelage",
      "pélican",
      "pelle",
      "pelouse",
      "peluche",
      "pendule",
      "pénétrer",
      "pénible",
      "pensif",
      "pénurie",
      "pépite",
      "péplum",
      "perdrix",
      "perforer",
      "période",
      "permuter",
      "perplexe",
      "persil",
      "perte",
      "peser",
      "pétale",
      "petit",
      "pétrir",
      "peuple",
      "pharaon",
      "phobie",
      "phoque",
      "photon",
      "phrase",
      "physique",
      "piano",
      "pictural",
      "pièce",
      "pierre",
      "pieuvre",
      "pilote",
      "pinceau",
      "pipette",
      "piquer",
      "pirogue",
      "piscine",
      "piston",
      "pivoter",
      "pixel",
      "pizza",
      "placard",
      "plafond",
      "plaisir",
      "planer",
      "plaque",
      "plastron",
      "plateau",
      "pleurer",
      "plexus",
      "pliage",
      "plomb",
      "plonger",
      "pluie",
      "plumage",
      "pochette",
      "poésie",
      "poète",
      "pointe",
      "poirier",
      "poisson",
      "poivre",
      "polaire",
      "policier",
      "pollen",
      "polygone",
      "pommade",
      "pompier",
      "ponctuel",
      "pondérer",
      "poney",
      "portique",
      "position",
      "posséder",
      "posture",
      "potager",
      "poteau",
      "potion",
      "pouce",
      "poulain",
      "poumon",
      "pourpre",
      "poussin",
      "pouvoir",
      "prairie",
      "pratique",
      "précieux",
      "prédire",
      "préfixe",
      "prélude",
      "prénom",
      "présence",
      "prétexte",
      "prévoir",
      "primitif",
      "prince",
      "prison",
      "priver",
      "problème",
      "procéder",
      "prodige",
      "profond",
      "progrès",
      "proie",
      "projeter",
      "prologue",
      "promener",
      "propre",
      "prospère",
      "protéger",
      "prouesse",
      "proverbe",
      "prudence",
      "pruneau",
      "psychose",
      "public",
      "puceron",
      "puiser",
      "pulpe",
      "pulsar",
      "punaise",
      "punitif",
      "pupitre",
      "purifier",
      "puzzle",
      "pyramide",
      "quasar",
      "querelle",
      "question",
      "quiétude",
      "quitter",
      "quotient",
      "racine",
      "raconter",
      "radieux",
      "ragondin",
      "raideur",
      "raisin",
      "ralentir",
      "rallonge",
      "ramasser",
      "rapide",
      "rasage",
      "ratisser",
      "ravager",
      "ravin",
      "rayonner",
      "réactif",
      "réagir",
      "réaliser",
      "réanimer",
      "recevoir",
      "réciter",
      "réclamer",
      "récolter",
      "recruter",
      "reculer",
      "recycler",
      "rédiger",
      "redouter",
      "refaire",
      "réflexe",
      "réformer",
      "refrain",
      "refuge",
      "régalien",
      "région",
      "réglage",
      "régulier",
      "réitérer",
      "rejeter",
      "rejouer",
      "relatif",
      "relever",
      "relief",
      "remarque",
      "remède",
      "remise",
      "remonter",
      "remplir",
      "remuer",
      "renard",
      "renfort",
      "renifler",
      "renoncer",
      "rentrer",
      "renvoi",
      "replier",
      "reporter",
      "reprise",
      "reptile",
      "requin",
      "réserve",
      "résineux",
      "résoudre",
      "respect",
      "rester",
      "résultat",
      "rétablir",
      "retenir",
      "réticule",
      "retomber",
      "retracer",
      "réunion",
      "réussir",
      "revanche",
      "revivre",
      "révolte",
      "révulsif",
      "richesse",
      "rideau",
      "rieur",
      "rigide",
      "rigoler",
      "rincer",
      "riposter",
      "risible",
      "risque",
      "rituel",
      "rival",
      "rivière",
      "rocheux",
      "romance",
      "rompre",
      "ronce",
      "rondin",
      "roseau",
      "rosier",
      "rotatif",
      "rotor",
      "rotule",
      "rouge",
      "rouille",
      "rouleau",
      "routine",
      "royaume",
      "ruban",
      "rubis",
      "ruche",
      "ruelle",
      "rugueux",
      "ruiner",
      "ruisseau",
      "ruser",
      "rustique",
      "rythme",
      "sabler",
      "saboter",
      "sabre",
      "sacoche",
      "safari",
      "sagesse",
      "saisir",
      "salade",
      "salive",
      "salon",
      "saluer",
      "samedi",
      "sanction",
      "sanglier",
      "sarcasme",
      "sardine",
      "saturer",
      "saugrenu",
      "saumon",
      "sauter",
      "sauvage",
      "savant",
      "savonner",
      "scalpel",
      "scandale",
      "scélérat",
      "scénario",
      "sceptre",
      "schéma",
      "science",
      "scinder",
      "score",
      "scrutin",
      "sculpter",
      "séance",
      "sécable",
      "sécher",
      "secouer",
      "sécréter",
      "sédatif",
      "séduire",
      "seigneur",
      "séjour",
      "sélectif",
      "semaine",
      "sembler",
      "semence",
      "séminal",
      "sénateur",
      "sensible",
      "sentence",
      "séparer",
      "séquence",
      "serein",
      "sergent",
      "sérieux",
      "serrure",
      "sérum",
      "service",
      "sésame",
      "sévir",
      "sevrage",
      "sextuple",
      "sidéral",
      "siècle",
      "siéger",
      "siffler",
      "sigle",
      "signal",
      "silence",
      "silicium",
      "simple",
      "sincère",
      "sinistre",
      "siphon",
      "sirop",
      "sismique",
      "situer",
      "skier",
      "social",
      "socle",
      "sodium",
      "soigneux",
      "soldat",
      "soleil",
      "solitude",
      "soluble",
      "sombre",
      "sommeil",
      "somnoler",
      "sonde",
      "songeur",
      "sonnette",
      "sonore",
      "sorcier",
      "sortir",
      "sosie",
      "sottise",
      "soucieux",
      "soudure",
      "souffle",
      "soulever",
      "soupape",
      "source",
      "soutirer",
      "souvenir",
      "spacieux",
      "spatial",
      "spécial",
      "sphère",
      "spiral",
      "stable",
      "station",
      "sternum",
      "stimulus",
      "stipuler",
      "strict",
      "studieux",
      "stupeur",
      "styliste",
      "sublime",
      "substrat",
      "subtil",
      "subvenir",
      "succès",
      "sucre",
      "suffixe",
      "suggérer",
      "suiveur",
      "sulfate",
      "superbe",
      "supplier",
      "surface",
      "suricate",
      "surmener",
      "surprise",
      "sursaut",
      "survie",
      "suspect",
      "syllabe",
      "symbole",
      "symétrie",
      "synapse",
      "syntaxe",
      "système",
      "tabac",
      "tablier",
      "tactile",
      "tailler",
      "talent",
      "talisman",
      "talonner",
      "tambour",
      "tamiser",
      "tangible",
      "tapis",
      "taquiner",
      "tarder",
      "tarif",
      "tartine",
      "tasse",
      "tatami",
      "tatouage",
      "taupe",
      "taureau",
      "taxer",
      "témoin",
      "temporel",
      "tenaille",
      "tendre",
      "teneur",
      "tenir",
      "tension",
      "terminer",
      "terne",
      "terrible",
      "tétine",
      "texte",
      "thème",
      "théorie",
      "thérapie",
      "thorax",
      "tibia",
      "tiède",
      "timide",
      "tirelire",
      "tiroir",
      "tissu",
      "titane",
      "titre",
      "tituber",
      "toboggan",
      "tolérant",
      "tomate",
      "tonique",
      "tonneau",
      "toponyme",
      "torche",
      "tordre",
      "tornade",
      "torpille",
      "torrent",
      "torse",
      "tortue",
      "totem",
      "toucher",
      "tournage",
      "tousser",
      "toxine",
      "traction",
      "trafic",
      "tragique",
      "trahir",
      "train",
      "trancher",
      "travail",
      "trèfle",
      "tremper",
      "trésor",
      "treuil",
      "triage",
      "tribunal",
      "tricoter",
      "trilogie",
      "triomphe",
      "tripler",
      "triturer",
      "trivial",
      "trombone",
      "tronc",
      "tropical",
      "troupeau",
      "tuile",
      "tulipe",
      "tumulte",
      "tunnel",
      "turbine",
      "tuteur",
      "tutoyer",
      "tuyau",
      "tympan",
      "typhon",
      "typique",
      "tyran",
      "ubuesque",
      "ultime",
      "ultrason",
      "unanime",
      "unifier",
      "union",
      "unique",
      "unitaire",
      "univers",
      "uranium",
      "urbain",
      "urticant",
      "usage",
      "usine",
      "usuel",
      "usure",
      "utile",
      "utopie",
      "vacarme",
      "vaccin",
      "vagabond",
      "vague",
      "vaillant",
      "vaincre",
      "vaisseau",
      "valable",
      "valise",
      "vallon",
      "valve",
      "vampire",
      "vanille",
      "vapeur",
      "varier",
      "vaseux",
      "vassal",
      "vaste",
      "vecteur",
      "vedette",
      "végétal",
      "véhicule",
      "veinard",
      "véloce",
      "vendredi",
      "vénérer",
      "venger",
      "venimeux",
      "ventouse",
      "verdure",
      "vérin",
      "vernir",
      "verrou",
      "verser",
      "vertu",
      "veston",
      "vétéran",
      "vétuste",
      "vexant",
      "vexer",
      "viaduc",
      "viande",
      "victoire",
      "vidange",
      "vidéo",
      "vignette",
      "vigueur",
      "vilain",
      "village",
      "vinaigre",
      "violon",
      "vipère",
      "virement",
      "virtuose",
      "virus",
      "visage",
      "viseur",
      "vision",
      "visqueux",
      "visuel",
      "vital",
      "vitesse",
      "viticole",
      "vitrine",
      "vivace",
      "vivipare",
      "vocation",
      "voguer",
      "voile",
      "voisin",
      "voiture",
      "volaille",
      "volcan",
      "voltiger",
      "volume",
      "vorace",
      "vortex",
      "voter",
      "vouloir",
      "voyage",
      "voyelle",
      "wagon",
      "xénon",
      "yacht",
      "zèbre",
      "zénith",
      "zeste",
      "zoologie",
    ];
  },
  function (e, t, r) {
    "use strict";
    e.exports = [
      "abaco",
      "abbaglio",
      "abbinato",
      "abete",
      "abisso",
      "abolire",
      "abrasivo",
      "abrogato",
      "accadere",
      "accenno",
      "accusato",
      "acetone",
      "achille",
      "acido",
      "acqua",
      "acre",
      "acrilico",
      "acrobata",
      "acuto",
      "adagio",
      "addebito",
      "addome",
      "adeguato",
      "aderire",
      "adipe",
      "adottare",
      "adulare",
      "affabile",
      "affetto",
      "affisso",
      "affranto",
      "aforisma",
      "afoso",
      "africano",
      "agave",
      "agente",
      "agevole",
      "aggancio",
      "agire",
      "agitare",
      "agonismo",
      "agricolo",
      "agrumeto",
      "aguzzo",
      "alabarda",
      "alato",
      "albatro",
      "alberato",
      "albo",
      "albume",
      "alce",
      "alcolico",
      "alettone",
      "alfa",
      "algebra",
      "aliante",
      "alibi",
      "alimento",
      "allagato",
      "allegro",
      "allievo",
      "allodola",
      "allusivo",
      "almeno",
      "alogeno",
      "alpaca",
      "alpestre",
      "altalena",
      "alterno",
      "alticcio",
      "altrove",
      "alunno",
      "alveolo",
      "alzare",
      "amalgama",
      "amanita",
      "amarena",
      "ambito",
      "ambrato",
      "ameba",
      "america",
      "ametista",
      "amico",
      "ammasso",
      "ammenda",
      "ammirare",
      "ammonito",
      "amore",
      "ampio",
      "ampliare",
      "amuleto",
      "anacardo",
      "anagrafe",
      "analista",
      "anarchia",
      "anatra",
      "anca",
      "ancella",
      "ancora",
      "andare",
      "andrea",
      "anello",
      "angelo",
      "angolare",
      "angusto",
      "anima",
      "annegare",
      "annidato",
      "anno",
      "annuncio",
      "anonimo",
      "anticipo",
      "anzi",
      "apatico",
      "apertura",
      "apode",
      "apparire",
      "appetito",
      "appoggio",
      "approdo",
      "appunto",
      "aprile",
      "arabica",
      "arachide",
      "aragosta",
      "araldica",
      "arancio",
      "aratura",
      "arazzo",
      "arbitro",
      "archivio",
      "ardito",
      "arenile",
      "argento",
      "argine",
      "arguto",
      "aria",
      "armonia",
      "arnese",
      "arredato",
      "arringa",
      "arrosto",
      "arsenico",
      "arso",
      "artefice",
      "arzillo",
      "asciutto",
      "ascolto",
      "asepsi",
      "asettico",
      "asfalto",
      "asino",
      "asola",
      "aspirato",
      "aspro",
      "assaggio",
      "asse",
      "assoluto",
      "assurdo",
      "asta",
      "astenuto",
      "astice",
      "astratto",
      "atavico",
      "ateismo",
      "atomico",
      "atono",
      "attesa",
      "attivare",
      "attorno",
      "attrito",
      "attuale",
      "ausilio",
      "austria",
      "autista",
      "autonomo",
      "autunno",
      "avanzato",
      "avere",
      "avvenire",
      "avviso",
      "avvolgere",
      "azione",
      "azoto",
      "azzimo",
      "azzurro",
      "babele",
      "baccano",
      "bacino",
      "baco",
      "badessa",
      "badilata",
      "bagnato",
      "baita",
      "balcone",
      "baldo",
      "balena",
      "ballata",
      "balzano",
      "bambino",
      "bandire",
      "baraonda",
      "barbaro",
      "barca",
      "baritono",
      "barlume",
      "barocco",
      "basilico",
      "basso",
      "batosta",
      "battuto",
      "baule",
      "bava",
      "bavosa",
      "becco",
      "beffa",
      "belgio",
      "belva",
      "benda",
      "benevole",
      "benigno",
      "benzina",
      "bere",
      "berlina",
      "beta",
      "bibita",
      "bici",
      "bidone",
      "bifido",
      "biga",
      "bilancia",
      "bimbo",
      "binocolo",
      "biologo",
      "bipede",
      "bipolare",
      "birbante",
      "birra",
      "biscotto",
      "bisesto",
      "bisnonno",
      "bisonte",
      "bisturi",
      "bizzarro",
      "blando",
      "blatta",
      "bollito",
      "bonifico",
      "bordo",
      "bosco",
      "botanico",
      "bottino",
      "bozzolo",
      "braccio",
      "bradipo",
      "brama",
      "branca",
      "bravura",
      "bretella",
      "brevetto",
      "brezza",
      "briglia",
      "brillante",
      "brindare",
      "broccolo",
      "brodo",
      "bronzina",
      "brullo",
      "bruno",
      "bubbone",
      "buca",
      "budino",
      "buffone",
      "buio",
      "bulbo",
      "buono",
      "burlone",
      "burrasca",
      "bussola",
      "busta",
      "cadetto",
      "caduco",
      "calamaro",
      "calcolo",
      "calesse",
      "calibro",
      "calmo",
      "caloria",
      "cambusa",
      "camerata",
      "camicia",
      "cammino",
      "camola",
      "campale",
      "canapa",
      "candela",
      "cane",
      "canino",
      "canotto",
      "cantina",
      "capace",
      "capello",
      "capitolo",
      "capogiro",
      "cappero",
      "capra",
      "capsula",
      "carapace",
      "carcassa",
      "cardo",
      "carisma",
      "carovana",
      "carretto",
      "cartolina",
      "casaccio",
      "cascata",
      "caserma",
      "caso",
      "cassone",
      "castello",
      "casuale",
      "catasta",
      "catena",
      "catrame",
      "cauto",
      "cavillo",
      "cedibile",
      "cedrata",
      "cefalo",
      "celebre",
      "cellulare",
      "cena",
      "cenone",
      "centesimo",
      "ceramica",
      "cercare",
      "certo",
      "cerume",
      "cervello",
      "cesoia",
      "cespo",
      "ceto",
      "chela",
      "chiaro",
      "chicca",
      "chiedere",
      "chimera",
      "china",
      "chirurgo",
      "chitarra",
      "ciao",
      "ciclismo",
      "cifrare",
      "cigno",
      "cilindro",
      "ciottolo",
      "circa",
      "cirrosi",
      "citrico",
      "cittadino",
      "ciuffo",
      "civetta",
      "civile",
      "classico",
      "clinica",
      "cloro",
      "cocco",
      "codardo",
      "codice",
      "coerente",
      "cognome",
      "collare",
      "colmato",
      "colore",
      "colposo",
      "coltivato",
      "colza",
      "coma",
      "cometa",
      "commando",
      "comodo",
      "computer",
      "comune",
      "conciso",
      "condurre",
      "conferma",
      "congelare",
      "coniuge",
      "connesso",
      "conoscere",
      "consumo",
      "continuo",
      "convegno",
      "coperto",
      "copione",
      "coppia",
      "copricapo",
      "corazza",
      "cordata",
      "coricato",
      "cornice",
      "corolla",
      "corpo",
      "corredo",
      "corsia",
      "cortese",
      "cosmico",
      "costante",
      "cottura",
      "covato",
      "cratere",
      "cravatta",
      "creato",
      "credere",
      "cremoso",
      "crescita",
      "creta",
      "criceto",
      "crinale",
      "crisi",
      "critico",
      "croce",
      "cronaca",
      "crostata",
      "cruciale",
      "crusca",
      "cucire",
      "cuculo",
      "cugino",
      "cullato",
      "cupola",
      "curatore",
      "cursore",
      "curvo",
      "cuscino",
      "custode",
      "dado",
      "daino",
      "dalmata",
      "damerino",
      "daniela",
      "dannoso",
      "danzare",
      "datato",
      "davanti",
      "davvero",
      "debutto",
      "decennio",
      "deciso",
      "declino",
      "decollo",
      "decreto",
      "dedicato",
      "definito",
      "deforme",
      "degno",
      "delegare",
      "delfino",
      "delirio",
      "delta",
      "demenza",
      "denotato",
      "dentro",
      "deposito",
      "derapata",
      "derivare",
      "deroga",
      "descritto",
      "deserto",
      "desiderio",
      "desumere",
      "detersivo",
      "devoto",
      "diametro",
      "dicembre",
      "diedro",
      "difeso",
      "diffuso",
      "digerire",
      "digitale",
      "diluvio",
      "dinamico",
      "dinnanzi",
      "dipinto",
      "diploma",
      "dipolo",
      "diradare",
      "dire",
      "dirotto",
      "dirupo",
      "disagio",
      "discreto",
      "disfare",
      "disgelo",
      "disposto",
      "distanza",
      "disumano",
      "dito",
      "divano",
      "divelto",
      "dividere",
      "divorato",
      "doblone",
      "docente",
      "doganale",
      "dogma",
      "dolce",
      "domato",
      "domenica",
      "dominare",
      "dondolo",
      "dono",
      "dormire",
      "dote",
      "dottore",
      "dovuto",
      "dozzina",
      "drago",
      "druido",
      "dubbio",
      "dubitare",
      "ducale",
      "duna",
      "duomo",
      "duplice",
      "duraturo",
      "ebano",
      "eccesso",
      "ecco",
      "eclissi",
      "economia",
      "edera",
      "edicola",
      "edile",
      "editoria",
      "educare",
      "egemonia",
      "egli",
      "egoismo",
      "egregio",
      "elaborato",
      "elargire",
      "elegante",
      "elencato",
      "eletto",
      "elevare",
      "elfico",
      "elica",
      "elmo",
      "elsa",
      "eluso",
      "emanato",
      "emblema",
      "emesso",
      "emiro",
      "emotivo",
      "emozione",
      "empirico",
      "emulo",
      "endemico",
      "enduro",
      "energia",
      "enfasi",
      "enoteca",
      "entrare",
      "enzima",
      "epatite",
      "epilogo",
      "episodio",
      "epocale",
      "eppure",
      "equatore",
      "erario",
      "erba",
      "erboso",
      "erede",
      "eremita",
      "erigere",
      "ermetico",
      "eroe",
      "erosivo",
      "errante",
      "esagono",
      "esame",
      "esanime",
      "esaudire",
      "esca",
      "esempio",
      "esercito",
      "esibito",
      "esigente",
      "esistere",
      "esito",
      "esofago",
      "esortato",
      "esoso",
      "espanso",
      "espresso",
      "essenza",
      "esso",
      "esteso",
      "estimare",
      "estonia",
      "estroso",
      "esultare",
      "etilico",
      "etnico",
      "etrusco",
      "etto",
      "euclideo",
      "europa",
      "evaso",
      "evidenza",
      "evitato",
      "evoluto",
      "evviva",
      "fabbrica",
      "faccenda",
      "fachiro",
      "falco",
      "famiglia",
      "fanale",
      "fanfara",
      "fango",
      "fantasma",
      "fare",
      "farfalla",
      "farinoso",
      "farmaco",
      "fascia",
      "fastoso",
      "fasullo",
      "faticare",
      "fato",
      "favoloso",
      "febbre",
      "fecola",
      "fede",
      "fegato",
      "felpa",
      "feltro",
      "femmina",
      "fendere",
      "fenomeno",
      "fermento",
      "ferro",
      "fertile",
      "fessura",
      "festivo",
      "fetta",
      "feudo",
      "fiaba",
      "fiducia",
      "fifa",
      "figurato",
      "filo",
      "finanza",
      "finestra",
      "finire",
      "fiore",
      "fiscale",
      "fisico",
      "fiume",
      "flacone",
      "flamenco",
      "flebo",
      "flemma",
      "florido",
      "fluente",
      "fluoro",
      "fobico",
      "focaccia",
      "focoso",
      "foderato",
      "foglio",
      "folata",
      "folclore",
      "folgore",
      "fondente",
      "fonetico",
      "fonia",
      "fontana",
      "forbito",
      "forchetta",
      "foresta",
      "formica",
      "fornaio",
      "foro",
      "fortezza",
      "forzare",
      "fosfato",
      "fosso",
      "fracasso",
      "frana",
      "frassino",
      "fratello",
      "freccetta",
      "frenata",
      "fresco",
      "frigo",
      "frollino",
      "fronde",
      "frugale",
      "frutta",
      "fucilata",
      "fucsia",
      "fuggente",
      "fulmine",
      "fulvo",
      "fumante",
      "fumetto",
      "fumoso",
      "fune",
      "funzione",
      "fuoco",
      "furbo",
      "furgone",
      "furore",
      "fuso",
      "futile",
      "gabbiano",
      "gaffe",
      "galateo",
      "gallina",
      "galoppo",
      "gambero",
      "gamma",
      "garanzia",
      "garbo",
      "garofano",
      "garzone",
      "gasdotto",
      "gasolio",
      "gastrico",
      "gatto",
      "gaudio",
      "gazebo",
      "gazzella",
      "geco",
      "gelatina",
      "gelso",
      "gemello",
      "gemmato",
      "gene",
      "genitore",
      "gennaio",
      "genotipo",
      "gergo",
      "ghepardo",
      "ghiaccio",
      "ghisa",
      "giallo",
      "gilda",
      "ginepro",
      "giocare",
      "gioiello",
      "giorno",
      "giove",
      "girato",
      "girone",
      "gittata",
      "giudizio",
      "giurato",
      "giusto",
      "globulo",
      "glutine",
      "gnomo",
      "gobba",
      "golf",
      "gomito",
      "gommone",
      "gonfio",
      "gonna",
      "governo",
      "gracile",
      "grado",
      "grafico",
      "grammo",
      "grande",
      "grattare",
      "gravoso",
      "grazia",
      "greca",
      "gregge",
      "grifone",
      "grigio",
      "grinza",
      "grotta",
      "gruppo",
      "guadagno",
      "guaio",
      "guanto",
      "guardare",
      "gufo",
      "guidare",
      "ibernato",
      "icona",
      "identico",
      "idillio",
      "idolo",
      "idra",
      "idrico",
      "idrogeno",
      "igiene",
      "ignaro",
      "ignorato",
      "ilare",
      "illeso",
      "illogico",
      "illudere",
      "imballo",
      "imbevuto",
      "imbocco",
      "imbuto",
      "immane",
      "immerso",
      "immolato",
      "impacco",
      "impeto",
      "impiego",
      "importo",
      "impronta",
      "inalare",
      "inarcare",
      "inattivo",
      "incanto",
      "incendio",
      "inchino",
      "incisivo",
      "incluso",
      "incontro",
      "incrocio",
      "incubo",
      "indagine",
      "india",
      "indole",
      "inedito",
      "infatti",
      "infilare",
      "inflitto",
      "ingaggio",
      "ingegno",
      "inglese",
      "ingordo",
      "ingrosso",
      "innesco",
      "inodore",
      "inoltrare",
      "inondato",
      "insano",
      "insetto",
      "insieme",
      "insonnia",
      "insulina",
      "intasato",
      "intero",
      "intonaco",
      "intuito",
      "inumidire",
      "invalido",
      "invece",
      "invito",
      "iperbole",
      "ipnotico",
      "ipotesi",
      "ippica",
      "iride",
      "irlanda",
      "ironico",
      "irrigato",
      "irrorare",
      "isolato",
      "isotopo",
      "isterico",
      "istituto",
      "istrice",
      "italia",
      "iterare",
      "labbro",
      "labirinto",
      "lacca",
      "lacerato",
      "lacrima",
      "lacuna",
      "laddove",
      "lago",
      "lampo",
      "lancetta",
      "lanterna",
      "lardoso",
      "larga",
      "laringe",
      "lastra",
      "latenza",
      "latino",
      "lattuga",
      "lavagna",
      "lavoro",
      "legale",
      "leggero",
      "lembo",
      "lentezza",
      "lenza",
      "leone",
      "lepre",
      "lesivo",
      "lessato",
      "lesto",
      "letterale",
      "leva",
      "levigato",
      "libero",
      "lido",
      "lievito",
      "lilla",
      "limatura",
      "limitare",
      "limpido",
      "lineare",
      "lingua",
      "liquido",
      "lira",
      "lirica",
      "lisca",
      "lite",
      "litigio",
      "livrea",
      "locanda",
      "lode",
      "logica",
      "lombare",
      "londra",
      "longevo",
      "loquace",
      "lorenzo",
      "loto",
      "lotteria",
      "luce",
      "lucidato",
      "lumaca",
      "luminoso",
      "lungo",
      "lupo",
      "luppolo",
      "lusinga",
      "lusso",
      "lutto",
      "macabro",
      "macchina",
      "macero",
      "macinato",
      "madama",
      "magico",
      "maglia",
      "magnete",
      "magro",
      "maiolica",
      "malafede",
      "malgrado",
      "malinteso",
      "malsano",
      "malto",
      "malumore",
      "mana",
      "mancia",
      "mandorla",
      "mangiare",
      "manifesto",
      "mannaro",
      "manovra",
      "mansarda",
      "mantide",
      "manubrio",
      "mappa",
      "maratona",
      "marcire",
      "maretta",
      "marmo",
      "marsupio",
      "maschera",
      "massaia",
      "mastino",
      "materasso",
      "matricola",
      "mattone",
      "maturo",
      "mazurca",
      "meandro",
      "meccanico",
      "mecenate",
      "medesimo",
      "meditare",
      "mega",
      "melassa",
      "melis",
      "melodia",
      "meninge",
      "meno",
      "mensola",
      "mercurio",
      "merenda",
      "merlo",
      "meschino",
      "mese",
      "messere",
      "mestolo",
      "metallo",
      "metodo",
      "mettere",
      "miagolare",
      "mica",
      "micelio",
      "michele",
      "microbo",
      "midollo",
      "miele",
      "migliore",
      "milano",
      "milite",
      "mimosa",
      "minerale",
      "mini",
      "minore",
      "mirino",
      "mirtillo",
      "miscela",
      "missiva",
      "misto",
      "misurare",
      "mitezza",
      "mitigare",
      "mitra",
      "mittente",
      "mnemonico",
      "modello",
      "modifica",
      "modulo",
      "mogano",
      "mogio",
      "mole",
      "molosso",
      "monastero",
      "monco",
      "mondina",
      "monetario",
      "monile",
      "monotono",
      "monsone",
      "montato",
      "monviso",
      "mora",
      "mordere",
      "morsicato",
      "mostro",
      "motivato",
      "motosega",
      "motto",
      "movenza",
      "movimento",
      "mozzo",
      "mucca",
      "mucosa",
      "muffa",
      "mughetto",
      "mugnaio",
      "mulatto",
      "mulinello",
      "multiplo",
      "mummia",
      "munto",
      "muovere",
      "murale",
      "musa",
      "muscolo",
      "musica",
      "mutevole",
      "muto",
      "nababbo",
      "nafta",
      "nanometro",
      "narciso",
      "narice",
      "narrato",
      "nascere",
      "nastrare",
      "naturale",
      "nautica",
      "naviglio",
      "nebulosa",
      "necrosi",
      "negativo",
      "negozio",
      "nemmeno",
      "neofita",
      "neretto",
      "nervo",
      "nessuno",
      "nettuno",
      "neutrale",
      "neve",
      "nevrotico",
      "nicchia",
      "ninfa",
      "nitido",
      "nobile",
      "nocivo",
      "nodo",
      "nome",
      "nomina",
      "nordico",
      "normale",
      "norvegese",
      "nostrano",
      "notare",
      "notizia",
      "notturno",
      "novella",
      "nucleo",
      "nulla",
      "numero",
      "nuovo",
      "nutrire",
      "nuvola",
      "nuziale",
      "oasi",
      "obbedire",
      "obbligo",
      "obelisco",
      "oblio",
      "obolo",
      "obsoleto",
      "occasione",
      "occhio",
      "occidente",
      "occorrere",
      "occultare",
      "ocra",
      "oculato",
      "odierno",
      "odorare",
      "offerta",
      "offrire",
      "offuscato",
      "oggetto",
      "oggi",
      "ognuno",
      "olandese",
      "olfatto",
      "oliato",
      "oliva",
      "ologramma",
      "oltre",
      "omaggio",
      "ombelico",
      "ombra",
      "omega",
      "omissione",
      "ondoso",
      "onere",
      "onice",
      "onnivoro",
      "onorevole",
      "onta",
      "operato",
      "opinione",
      "opposto",
      "oracolo",
      "orafo",
      "ordine",
      "orecchino",
      "orefice",
      "orfano",
      "organico",
      "origine",
      "orizzonte",
      "orma",
      "ormeggio",
      "ornativo",
      "orologio",
      "orrendo",
      "orribile",
      "ortensia",
      "ortica",
      "orzata",
      "orzo",
      "osare",
      "oscurare",
      "osmosi",
      "ospedale",
      "ospite",
      "ossa",
      "ossidare",
      "ostacolo",
      "oste",
      "otite",
      "otre",
      "ottagono",
      "ottimo",
      "ottobre",
      "ovale",
      "ovest",
      "ovino",
      "oviparo",
      "ovocito",
      "ovunque",
      "ovviare",
      "ozio",
      "pacchetto",
      "pace",
      "pacifico",
      "padella",
      "padrone",
      "paese",
      "paga",
      "pagina",
      "palazzina",
      "palesare",
      "pallido",
      "palo",
      "palude",
      "pandoro",
      "pannello",
      "paolo",
      "paonazzo",
      "paprica",
      "parabola",
      "parcella",
      "parere",
      "pargolo",
      "pari",
      "parlato",
      "parola",
      "partire",
      "parvenza",
      "parziale",
      "passivo",
      "pasticca",
      "patacca",
      "patologia",
      "pattume",
      "pavone",
      "peccato",
      "pedalare",
      "pedonale",
      "peggio",
      "peloso",
      "penare",
      "pendice",
      "penisola",
      "pennuto",
      "penombra",
      "pensare",
      "pentola",
      "pepe",
      "pepita",
      "perbene",
      "percorso",
      "perdonato",
      "perforare",
      "pergamena",
      "periodo",
      "permesso",
      "perno",
      "perplesso",
      "persuaso",
      "pertugio",
      "pervaso",
      "pesatore",
      "pesista",
      "peso",
      "pestifero",
      "petalo",
      "pettine",
      "petulante",
      "pezzo",
      "piacere",
      "pianta",
      "piattino",
      "piccino",
      "picozza",
      "piega",
      "pietra",
      "piffero",
      "pigiama",
      "pigolio",
      "pigro",
      "pila",
      "pilifero",
      "pillola",
      "pilota",
      "pimpante",
      "pineta",
      "pinna",
      "pinolo",
      "pioggia",
      "piombo",
      "piramide",
      "piretico",
      "pirite",
      "pirolisi",
      "pitone",
      "pizzico",
      "placebo",
      "planare",
      "plasma",
      "platano",
      "plenario",
      "pochezza",
      "poderoso",
      "podismo",
      "poesia",
      "poggiare",
      "polenta",
      "poligono",
      "pollice",
      "polmonite",
      "polpetta",
      "polso",
      "poltrona",
      "polvere",
      "pomice",
      "pomodoro",
      "ponte",
      "popoloso",
      "porfido",
      "poroso",
      "porpora",
      "porre",
      "portata",
      "posa",
      "positivo",
      "possesso",
      "postulato",
      "potassio",
      "potere",
      "pranzo",
      "prassi",
      "pratica",
      "precluso",
      "predica",
      "prefisso",
      "pregiato",
      "prelievo",
      "premere",
      "prenotare",
      "preparato",
      "presenza",
      "pretesto",
      "prevalso",
      "prima",
      "principe",
      "privato",
      "problema",
      "procura",
      "produrre",
      "profumo",
      "progetto",
      "prolunga",
      "promessa",
      "pronome",
      "proposta",
      "proroga",
      "proteso",
      "prova",
      "prudente",
      "prugna",
      "prurito",
      "psiche",
      "pubblico",
      "pudica",
      "pugilato",
      "pugno",
      "pulce",
      "pulito",
      "pulsante",
      "puntare",
      "pupazzo",
      "pupilla",
      "puro",
      "quadro",
      "qualcosa",
      "quasi",
      "querela",
      "quota",
      "raccolto",
      "raddoppio",
      "radicale",
      "radunato",
      "raffica",
      "ragazzo",
      "ragione",
      "ragno",
      "ramarro",
      "ramingo",
      "ramo",
      "randagio",
      "rantolare",
      "rapato",
      "rapina",
      "rappreso",
      "rasatura",
      "raschiato",
      "rasente",
      "rassegna",
      "rastrello",
      "rata",
      "ravveduto",
      "reale",
      "recepire",
      "recinto",
      "recluta",
      "recondito",
      "recupero",
      "reddito",
      "redimere",
      "regalato",
      "registro",
      "regola",
      "regresso",
      "relazione",
      "remare",
      "remoto",
      "renna",
      "replica",
      "reprimere",
      "reputare",
      "resa",
      "residente",
      "responso",
      "restauro",
      "rete",
      "retina",
      "retorica",
      "rettifica",
      "revocato",
      "riassunto",
      "ribadire",
      "ribelle",
      "ribrezzo",
      "ricarica",
      "ricco",
      "ricevere",
      "riciclato",
      "ricordo",
      "ricreduto",
      "ridicolo",
      "ridurre",
      "rifasare",
      "riflesso",
      "riforma",
      "rifugio",
      "rigare",
      "rigettato",
      "righello",
      "rilassato",
      "rilevato",
      "rimanere",
      "rimbalzo",
      "rimedio",
      "rimorchio",
      "rinascita",
      "rincaro",
      "rinforzo",
      "rinnovo",
      "rinomato",
      "rinsavito",
      "rintocco",
      "rinuncia",
      "rinvenire",
      "riparato",
      "ripetuto",
      "ripieno",
      "riportare",
      "ripresa",
      "ripulire",
      "risata",
      "rischio",
      "riserva",
      "risibile",
      "riso",
      "rispetto",
      "ristoro",
      "risultato",
      "risvolto",
      "ritardo",
      "ritegno",
      "ritmico",
      "ritrovo",
      "riunione",
      "riva",
      "riverso",
      "rivincita",
      "rivolto",
      "rizoma",
      "roba",
      "robotico",
      "robusto",
      "roccia",
      "roco",
      "rodaggio",
      "rodere",
      "roditore",
      "rogito",
      "rollio",
      "romantico",
      "rompere",
      "ronzio",
      "rosolare",
      "rospo",
      "rotante",
      "rotondo",
      "rotula",
      "rovescio",
      "rubizzo",
      "rubrica",
      "ruga",
      "rullino",
      "rumine",
      "rumoroso",
      "ruolo",
      "rupe",
      "russare",
      "rustico",
      "sabato",
      "sabbiare",
      "sabotato",
      "sagoma",
      "salasso",
      "saldatura",
      "salgemma",
      "salivare",
      "salmone",
      "salone",
      "saltare",
      "saluto",
      "salvo",
      "sapere",
      "sapido",
      "saporito",
      "saraceno",
      "sarcasmo",
      "sarto",
      "sassoso",
      "satellite",
      "satira",
      "satollo",
      "saturno",
      "savana",
      "savio",
      "saziato",
      "sbadiglio",
      "sbalzo",
      "sbancato",
      "sbarra",
      "sbattere",
      "sbavare",
      "sbendare",
      "sbirciare",
      "sbloccato",
      "sbocciato",
      "sbrinare",
      "sbruffone",
      "sbuffare",
      "scabroso",
      "scadenza",
      "scala",
      "scambiare",
      "scandalo",
      "scapola",
      "scarso",
      "scatenare",
      "scavato",
      "scelto",
      "scenico",
      "scettro",
      "scheda",
      "schiena",
      "sciarpa",
      "scienza",
      "scindere",
      "scippo",
      "sciroppo",
      "scivolo",
      "sclerare",
      "scodella",
      "scolpito",
      "scomparto",
      "sconforto",
      "scoprire",
      "scorta",
      "scossone",
      "scozzese",
      "scriba",
      "scrollare",
      "scrutinio",
      "scuderia",
      "scultore",
      "scuola",
      "scuro",
      "scusare",
      "sdebitare",
      "sdoganare",
      "seccatura",
      "secondo",
      "sedano",
      "seggiola",
      "segnalato",
      "segregato",
      "seguito",
      "selciato",
      "selettivo",
      "sella",
      "selvaggio",
      "semaforo",
      "sembrare",
      "seme",
      "seminato",
      "sempre",
      "senso",
      "sentire",
      "sepolto",
      "sequenza",
      "serata",
      "serbato",
      "sereno",
      "serio",
      "serpente",
      "serraglio",
      "servire",
      "sestina",
      "setola",
      "settimana",
      "sfacelo",
      "sfaldare",
      "sfamato",
      "sfarzoso",
      "sfaticato",
      "sfera",
      "sfida",
      "sfilato",
      "sfinge",
      "sfocato",
      "sfoderare",
      "sfogo",
      "sfoltire",
      "sforzato",
      "sfratto",
      "sfruttato",
      "sfuggito",
      "sfumare",
      "sfuso",
      "sgabello",
      "sgarbato",
      "sgonfiare",
      "sgorbio",
      "sgrassato",
      "sguardo",
      "sibilo",
      "siccome",
      "sierra",
      "sigla",
      "signore",
      "silenzio",
      "sillaba",
      "simbolo",
      "simpatico",
      "simulato",
      "sinfonia",
      "singolo",
      "sinistro",
      "sino",
      "sintesi",
      "sinusoide",
      "sipario",
      "sisma",
      "sistole",
      "situato",
      "slitta",
      "slogatura",
      "sloveno",
      "smarrito",
      "smemorato",
      "smentito",
      "smeraldo",
      "smilzo",
      "smontare",
      "smottato",
      "smussato",
      "snellire",
      "snervato",
      "snodo",
      "sobbalzo",
      "sobrio",
      "soccorso",
      "sociale",
      "sodale",
      "soffitto",
      "sogno",
      "soldato",
      "solenne",
      "solido",
      "sollazzo",
      "solo",
      "solubile",
      "solvente",
      "somatico",
      "somma",
      "sonda",
      "sonetto",
      "sonnifero",
      "sopire",
      "soppeso",
      "sopra",
      "sorgere",
      "sorpasso",
      "sorriso",
      "sorso",
      "sorteggio",
      "sorvolato",
      "sospiro",
      "sosta",
      "sottile",
      "spada",
      "spalla",
      "spargere",
      "spatola",
      "spavento",
      "spazzola",
      "specie",
      "spedire",
      "spegnere",
      "spelatura",
      "speranza",
      "spessore",
      "spettrale",
      "spezzato",
      "spia",
      "spigoloso",
      "spillato",
      "spinoso",
      "spirale",
      "splendido",
      "sportivo",
      "sposo",
      "spranga",
      "sprecare",
      "spronato",
      "spruzzo",
      "spuntino",
      "squillo",
      "sradicare",
      "srotolato",
      "stabile",
      "stacco",
      "staffa",
      "stagnare",
      "stampato",
      "stantio",
      "starnuto",
      "stasera",
      "statuto",
      "stelo",
      "steppa",
      "sterzo",
      "stiletto",
      "stima",
      "stirpe",
      "stivale",
      "stizzoso",
      "stonato",
      "storico",
      "strappo",
      "stregato",
      "stridulo",
      "strozzare",
      "strutto",
      "stuccare",
      "stufo",
      "stupendo",
      "subentro",
      "succoso",
      "sudore",
      "suggerito",
      "sugo",
      "sultano",
      "suonare",
      "superbo",
      "supporto",
      "surgelato",
      "surrogato",
      "sussurro",
      "sutura",
      "svagare",
      "svedese",
      "sveglio",
      "svelare",
      "svenuto",
      "svezia",
      "sviluppo",
      "svista",
      "svizzera",
      "svolta",
      "svuotare",
      "tabacco",
      "tabulato",
      "tacciare",
      "taciturno",
      "tale",
      "talismano",
      "tampone",
      "tannino",
      "tara",
      "tardivo",
      "targato",
      "tariffa",
      "tarpare",
      "tartaruga",
      "tasto",
      "tattico",
      "taverna",
      "tavolata",
      "tazza",
      "teca",
      "tecnico",
      "telefono",
      "temerario",
      "tempo",
      "temuto",
      "tendone",
      "tenero",
      "tensione",
      "tentacolo",
      "teorema",
      "terme",
      "terrazzo",
      "terzetto",
      "tesi",
      "tesserato",
      "testato",
      "tetro",
      "tettoia",
      "tifare",
      "tigella",
      "timbro",
      "tinto",
      "tipico",
      "tipografo",
      "tiraggio",
      "tiro",
      "titanio",
      "titolo",
      "titubante",
      "tizio",
      "tizzone",
      "toccare",
      "tollerare",
      "tolto",
      "tombola",
      "tomo",
      "tonfo",
      "tonsilla",
      "topazio",
      "topologia",
      "toppa",
      "torba",
      "tornare",
      "torrone",
      "tortora",
      "toscano",
      "tossire",
      "tostatura",
      "totano",
      "trabocco",
      "trachea",
      "trafila",
      "tragedia",
      "tralcio",
      "tramonto",
      "transito",
      "trapano",
      "trarre",
      "trasloco",
      "trattato",
      "trave",
      "treccia",
      "tremolio",
      "trespolo",
      "tributo",
      "tricheco",
      "trifoglio",
      "trillo",
      "trincea",
      "trio",
      "tristezza",
      "triturato",
      "trivella",
      "tromba",
      "trono",
      "troppo",
      "trottola",
      "trovare",
      "truccato",
      "tubatura",
      "tuffato",
      "tulipano",
      "tumulto",
      "tunisia",
      "turbare",
      "turchino",
      "tuta",
      "tutela",
      "ubicato",
      "uccello",
      "uccisore",
      "udire",
      "uditivo",
      "uffa",
      "ufficio",
      "uguale",
      "ulisse",
      "ultimato",
      "umano",
      "umile",
      "umorismo",
      "uncinetto",
      "ungere",
      "ungherese",
      "unicorno",
      "unificato",
      "unisono",
      "unitario",
      "unte",
      "uovo",
      "upupa",
      "uragano",
      "urgenza",
      "urlo",
      "usanza",
      "usato",
      "uscito",
      "usignolo",
      "usuraio",
      "utensile",
      "utilizzo",
      "utopia",
      "vacante",
      "vaccinato",
      "vagabondo",
      "vagliato",
      "valanga",
      "valgo",
      "valico",
      "valletta",
      "valoroso",
      "valutare",
      "valvola",
      "vampata",
      "vangare",
      "vanitoso",
      "vano",
      "vantaggio",
      "vanvera",
      "vapore",
      "varano",
      "varcato",
      "variante",
      "vasca",
      "vedetta",
      "vedova",
      "veduto",
      "vegetale",
      "veicolo",
      "velcro",
      "velina",
      "velluto",
      "veloce",
      "venato",
      "vendemmia",
      "vento",
      "verace",
      "verbale",
      "vergogna",
      "verifica",
      "vero",
      "verruca",
      "verticale",
      "vescica",
      "vessillo",
      "vestale",
      "veterano",
      "vetrina",
      "vetusto",
      "viandante",
      "vibrante",
      "vicenda",
      "vichingo",
      "vicinanza",
      "vidimare",
      "vigilia",
      "vigneto",
      "vigore",
      "vile",
      "villano",
      "vimini",
      "vincitore",
      "viola",
      "vipera",
      "virgola",
      "virologo",
      "virulento",
      "viscoso",
      "visione",
      "vispo",
      "vissuto",
      "visura",
      "vita",
      "vitello",
      "vittima",
      "vivanda",
      "vivido",
      "viziare",
      "voce",
      "voga",
      "volatile",
      "volere",
      "volpe",
      "voragine",
      "vulcano",
      "zampogna",
      "zanna",
      "zappato",
      "zattera",
      "zavorra",
      "zefiro",
      "zelante",
      "zelo",
      "zenzero",
      "zerbino",
      "zibetto",
      "zinco",
      "zircone",
      "zitto",
      "zolla",
      "zotico",
      "zucchero",
      "zufolo",
      "zulu",
      "zuppa",
    ];
  },
  function (e, t, r) {
    "use strict";
    e.exports = [
      "あいこくしん",
      "あいさつ",
      "あいだ",
      "あおぞら",
      "あかちゃん",
      "あきる",
      "あけがた",
      "あける",
      "あこがれる",
      "あさい",
      "あさひ",
      "あしあと",
      "あじわう",
      "あずかる",
      "あずき",
      "あそぶ",
      "あたえる",
      "あたためる",
      "あたりまえ",
      "あたる",
      "あつい",
      "あつかう",
      "あっしゅく",
      "あつまり",
      "あつめる",
      "あてな",
      "あてはまる",
      "あひる",
      "あぶら",
      "あぶる",
      "あふれる",
      "あまい",
      "あまど",
      "あまやかす",
      "あまり",
      "あみもの",
      "あめりか",
      "あやまる",
      "あゆむ",
      "あらいぐま",
      "あらし",
      "あらすじ",
      "あらためる",
      "あらゆる",
      "あらわす",
      "ありがとう",
      "あわせる",
      "あわてる",
      "あんい",
      "あんがい",
      "あんこ",
      "あんぜん",
      "あんてい",
      "あんない",
      "あんまり",
      "いいだす",
      "いおん",
      "いがい",
      "いがく",
      "いきおい",
      "いきなり",
      "いきもの",
      "いきる",
      "いくじ",
      "いくぶん",
      "いけばな",
      "いけん",
      "いこう",
      "いこく",
      "いこつ",
      "いさましい",
      "いさん",
      "いしき",
      "いじゅう",
      "いじょう",
      "いじわる",
      "いずみ",
      "いずれ",
      "いせい",
      "いせえび",
      "いせかい",
      "いせき",
      "いぜん",
      "いそうろう",
      "いそがしい",
      "いだい",
      "いだく",
      "いたずら",
      "いたみ",
      "いたりあ",
      "いちおう",
      "いちじ",
      "いちど",
      "いちば",
      "いちぶ",
      "いちりゅう",
      "いつか",
      "いっしゅん",
      "いっせい",
      "いっそう",
      "いったん",
      "いっち",
      "いってい",
      "いっぽう",
      "いてざ",
      "いてん",
      "いどう",
      "いとこ",
      "いない",
      "いなか",
      "いねむり",
      "いのち",
      "いのる",
      "いはつ",
      "いばる",
      "いはん",
      "いびき",
      "いひん",
      "いふく",
      "いへん",
      "いほう",
      "いみん",
      "いもうと",
      "いもたれ",
      "いもり",
      "いやがる",
      "いやす",
      "いよかん",
      "いよく",
      "いらい",
      "いらすと",
      "いりぐち",
      "いりょう",
      "いれい",
      "いれもの",
      "いれる",
      "いろえんぴつ",
      "いわい",
      "いわう",
      "いわかん",
      "いわば",
      "いわゆる",
      "いんげんまめ",
      "いんさつ",
      "いんしょう",
      "いんよう",
      "うえき",
      "うえる",
      "うおざ",
      "うがい",
      "うかぶ",
      "うかべる",
      "うきわ",
      "うくらいな",
      "うくれれ",
      "うけたまわる",
      "うけつけ",
      "うけとる",
      "うけもつ",
      "うける",
      "うごかす",
      "うごく",
      "うこん",
      "うさぎ",
      "うしなう",
      "うしろがみ",
      "うすい",
      "うすぎ",
      "うすぐらい",
      "うすめる",
      "うせつ",
      "うちあわせ",
      "うちがわ",
      "うちき",
      "うちゅう",
      "うっかり",
      "うつくしい",
      "うったえる",
      "うつる",
      "うどん",
      "うなぎ",
      "うなじ",
      "うなずく",
      "うなる",
      "うねる",
      "うのう",
      "うぶげ",
      "うぶごえ",
      "うまれる",
      "うめる",
      "うもう",
      "うやまう",
      "うよく",
      "うらがえす",
      "うらぐち",
      "うらない",
      "うりあげ",
      "うりきれ",
      "うるさい",
      "うれしい",
      "うれゆき",
      "うれる",
      "うろこ",
      "うわき",
      "うわさ",
      "うんこう",
      "うんちん",
      "うんてん",
      "うんどう",
      "えいえん",
      "えいが",
      "えいきょう",
      "えいご",
      "えいせい",
      "えいぶん",
      "えいよう",
      "えいわ",
      "えおり",
      "えがお",
      "えがく",
      "えきたい",
      "えくせる",
      "えしゃく",
      "えすて",
      "えつらん",
      "えのぐ",
      "えほうまき",
      "えほん",
      "えまき",
      "えもじ",
      "えもの",
      "えらい",
      "えらぶ",
      "えりあ",
      "えんえん",
      "えんかい",
      "えんぎ",
      "えんげき",
      "えんしゅう",
      "えんぜつ",
      "えんそく",
      "えんちょう",
      "えんとつ",
      "おいかける",
      "おいこす",
      "おいしい",
      "おいつく",
      "おうえん",
      "おうさま",
      "おうじ",
      "おうせつ",
      "おうたい",
      "おうふく",
      "おうべい",
      "おうよう",
      "おえる",
      "おおい",
      "おおう",
      "おおどおり",
      "おおや",
      "おおよそ",
      "おかえり",
      "おかず",
      "おがむ",
      "おかわり",
      "おぎなう",
      "おきる",
      "おくさま",
      "おくじょう",
      "おくりがな",
      "おくる",
      "おくれる",
      "おこす",
      "おこなう",
      "おこる",
      "おさえる",
      "おさない",
      "おさめる",
      "おしいれ",
      "おしえる",
      "おじぎ",
      "おじさん",
      "おしゃれ",
      "おそらく",
      "おそわる",
      "おたがい",
      "おたく",
      "おだやか",
      "おちつく",
      "おっと",
      "おつり",
      "おでかけ",
      "おとしもの",
      "おとなしい",
      "おどり",
      "おどろかす",
      "おばさん",
      "おまいり",
      "おめでとう",
      "おもいで",
      "おもう",
      "おもたい",
      "おもちゃ",
      "おやつ",
      "おやゆび",
      "およぼす",
      "おらんだ",
      "おろす",
      "おんがく",
      "おんけい",
      "おんしゃ",
      "おんせん",
      "おんだん",
      "おんちゅう",
      "おんどけい",
      "かあつ",
      "かいが",
      "がいき",
      "がいけん",
      "がいこう",
      "かいさつ",
      "かいしゃ",
      "かいすいよく",
      "かいぜん",
      "かいぞうど",
      "かいつう",
      "かいてん",
      "かいとう",
      "かいふく",
      "がいへき",
      "かいほう",
      "かいよう",
      "がいらい",
      "かいわ",
      "かえる",
      "かおり",
      "かかえる",
      "かがく",
      "かがし",
      "かがみ",
      "かくご",
      "かくとく",
      "かざる",
      "がぞう",
      "かたい",
      "かたち",
      "がちょう",
      "がっきゅう",
      "がっこう",
      "がっさん",
      "がっしょう",
      "かなざわし",
      "かのう",
      "がはく",
      "かぶか",
      "かほう",
      "かほご",
      "かまう",
      "かまぼこ",
      "かめれおん",
      "かゆい",
      "かようび",
      "からい",
      "かるい",
      "かろう",
      "かわく",
      "かわら",
      "がんか",
      "かんけい",
      "かんこう",
      "かんしゃ",
      "かんそう",
      "かんたん",
      "かんち",
      "がんばる",
      "きあい",
      "きあつ",
      "きいろ",
      "ぎいん",
      "きうい",
      "きうん",
      "きえる",
      "きおう",
      "きおく",
      "きおち",
      "きおん",
      "きかい",
      "きかく",
      "きかんしゃ",
      "ききて",
      "きくばり",
      "きくらげ",
      "きけんせい",
      "きこう",
      "きこえる",
      "きこく",
      "きさい",
      "きさく",
      "きさま",
      "きさらぎ",
      "ぎじかがく",
      "ぎしき",
      "ぎじたいけん",
      "ぎじにってい",
      "ぎじゅつしゃ",
      "きすう",
      "きせい",
      "きせき",
      "きせつ",
      "きそう",
      "きぞく",
      "きぞん",
      "きたえる",
      "きちょう",
      "きつえん",
      "ぎっちり",
      "きつつき",
      "きつね",
      "きてい",
      "きどう",
      "きどく",
      "きない",
      "きなが",
      "きなこ",
      "きぬごし",
      "きねん",
      "きのう",
      "きのした",
      "きはく",
      "きびしい",
      "きひん",
      "きふく",
      "きぶん",
      "きぼう",
      "きほん",
      "きまる",
      "きみつ",
      "きむずかしい",
      "きめる",
      "きもだめし",
      "きもち",
      "きもの",
      "きゃく",
      "きやく",
      "ぎゅうにく",
      "きよう",
      "きょうりゅう",
      "きらい",
      "きらく",
      "きりん",
      "きれい",
      "きれつ",
      "きろく",
      "ぎろん",
      "きわめる",
      "ぎんいろ",
      "きんかくじ",
      "きんじょ",
      "きんようび",
      "ぐあい",
      "くいず",
      "くうかん",
      "くうき",
      "くうぐん",
      "くうこう",
      "ぐうせい",
      "くうそう",
      "ぐうたら",
      "くうふく",
      "くうぼ",
      "くかん",
      "くきょう",
      "くげん",
      "ぐこう",
      "くさい",
      "くさき",
      "くさばな",
      "くさる",
      "くしゃみ",
      "くしょう",
      "くすのき",
      "くすりゆび",
      "くせげ",
      "くせん",
      "ぐたいてき",
      "くださる",
      "くたびれる",
      "くちこみ",
      "くちさき",
      "くつした",
      "ぐっすり",
      "くつろぐ",
      "くとうてん",
      "くどく",
      "くなん",
      "くねくね",
      "くのう",
      "くふう",
      "くみあわせ",
      "くみたてる",
      "くめる",
      "くやくしょ",
      "くらす",
      "くらべる",
      "くるま",
      "くれる",
      "くろう",
      "くわしい",
      "ぐんかん",
      "ぐんしょく",
      "ぐんたい",
      "ぐんて",
      "けあな",
      "けいかく",
      "けいけん",
      "けいこ",
      "けいさつ",
      "げいじゅつ",
      "けいたい",
      "げいのうじん",
      "けいれき",
      "けいろ",
      "けおとす",
      "けおりもの",
      "げきか",
      "げきげん",
      "げきだん",
      "げきちん",
      "げきとつ",
      "げきは",
      "げきやく",
      "げこう",
      "げこくじょう",
      "げざい",
      "けさき",
      "げざん",
      "けしき",
      "けしごむ",
      "けしょう",
      "げすと",
      "けたば",
      "けちゃっぷ",
      "けちらす",
      "けつあつ",
      "けつい",
      "けつえき",
      "けっこん",
      "けつじょ",
      "けっせき",
      "けってい",
      "けつまつ",
      "げつようび",
      "げつれい",
      "けつろん",
      "げどく",
      "けとばす",
      "けとる",
      "けなげ",
      "けなす",
      "けなみ",
      "けぬき",
      "げねつ",
      "けねん",
      "けはい",
      "げひん",
      "けぶかい",
      "げぼく",
      "けまり",
      "けみかる",
      "けむし",
      "けむり",
      "けもの",
      "けらい",
      "けろけろ",
      "けわしい",
      "けんい",
      "けんえつ",
      "けんお",
      "けんか",
      "げんき",
      "けんげん",
      "けんこう",
      "けんさく",
      "けんしゅう",
      "けんすう",
      "げんそう",
      "けんちく",
      "けんてい",
      "けんとう",
      "けんない",
      "けんにん",
      "げんぶつ",
      "けんま",
      "けんみん",
      "けんめい",
      "けんらん",
      "けんり",
      "こあくま",
      "こいぬ",
      "こいびと",
      "ごうい",
      "こうえん",
      "こうおん",
      "こうかん",
      "ごうきゅう",
      "ごうけい",
      "こうこう",
      "こうさい",
      "こうじ",
      "こうすい",
      "ごうせい",
      "こうそく",
      "こうたい",
      "こうちゃ",
      "こうつう",
      "こうてい",
      "こうどう",
      "こうない",
      "こうはい",
      "ごうほう",
      "ごうまん",
      "こうもく",
      "こうりつ",
      "こえる",
      "こおり",
      "ごかい",
      "ごがつ",
      "ごかん",
      "こくご",
      "こくさい",
      "こくとう",
      "こくない",
      "こくはく",
      "こぐま",
      "こけい",
      "こける",
      "ここのか",
      "こころ",
      "こさめ",
      "こしつ",
      "こすう",
      "こせい",
      "こせき",
      "こぜん",
      "こそだて",
      "こたい",
      "こたえる",
      "こたつ",
      "こちょう",
      "こっか",
      "こつこつ",
      "こつばん",
      "こつぶ",
      "こてい",
      "こてん",
      "ことがら",
      "ことし",
      "ことば",
      "ことり",
      "こなごな",
      "こねこね",
      "このまま",
      "このみ",
      "このよ",
      "ごはん",
      "こひつじ",
      "こふう",
      "こふん",
      "こぼれる",
      "ごまあぶら",
      "こまかい",
      "ごますり",
      "こまつな",
      "こまる",
      "こむぎこ",
      "こもじ",
      "こもち",
      "こもの",
      "こもん",
      "こやく",
      "こやま",
      "こゆう",
      "こゆび",
      "こよい",
      "こよう",
      "こりる",
      "これくしょん",
      "ころっけ",
      "こわもて",
      "こわれる",
      "こんいん",
      "こんかい",
      "こんき",
      "こんしゅう",
      "こんすい",
      "こんだて",
      "こんとん",
      "こんなん",
      "こんびに",
      "こんぽん",
      "こんまけ",
      "こんや",
      "こんれい",
      "こんわく",
      "ざいえき",
      "さいかい",
      "さいきん",
      "ざいげん",
      "ざいこ",
      "さいしょ",
      "さいせい",
      "ざいたく",
      "ざいちゅう",
      "さいてき",
      "ざいりょう",
      "さうな",
      "さかいし",
      "さがす",
      "さかな",
      "さかみち",
      "さがる",
      "さぎょう",
      "さくし",
      "さくひん",
      "さくら",
      "さこく",
      "さこつ",
      "さずかる",
      "ざせき",
      "さたん",
      "さつえい",
      "ざつおん",
      "ざっか",
      "ざつがく",
      "さっきょく",
      "ざっし",
      "さつじん",
      "ざっそう",
      "さつたば",
      "さつまいも",
      "さてい",
      "さといも",
      "さとう",
      "さとおや",
      "さとし",
      "さとる",
      "さのう",
      "さばく",
      "さびしい",
      "さべつ",
      "さほう",
      "さほど",
      "さます",
      "さみしい",
      "さみだれ",
      "さむけ",
      "さめる",
      "さやえんどう",
      "さゆう",
      "さよう",
      "さよく",
      "さらだ",
      "ざるそば",
      "さわやか",
      "さわる",
      "さんいん",
      "さんか",
      "さんきゃく",
      "さんこう",
      "さんさい",
      "ざんしょ",
      "さんすう",
      "さんせい",
      "さんそ",
      "さんち",
      "さんま",
      "さんみ",
      "さんらん",
      "しあい",
      "しあげ",
      "しあさって",
      "しあわせ",
      "しいく",
      "しいん",
      "しうち",
      "しえい",
      "しおけ",
      "しかい",
      "しかく",
      "じかん",
      "しごと",
      "しすう",
      "じだい",
      "したうけ",
      "したぎ",
      "したて",
      "したみ",
      "しちょう",
      "しちりん",
      "しっかり",
      "しつじ",
      "しつもん",
      "してい",
      "してき",
      "してつ",
      "じてん",
      "じどう",
      "しなぎれ",
      "しなもの",
      "しなん",
      "しねま",
      "しねん",
      "しのぐ",
      "しのぶ",
      "しはい",
      "しばかり",
      "しはつ",
      "しはらい",
      "しはん",
      "しひょう",
      "しふく",
      "じぶん",
      "しへい",
      "しほう",
      "しほん",
      "しまう",
      "しまる",
      "しみん",
      "しむける",
      "じむしょ",
      "しめい",
      "しめる",
      "しもん",
      "しゃいん",
      "しゃうん",
      "しゃおん",
      "じゃがいも",
      "しやくしょ",
      "しゃくほう",
      "しゃけん",
      "しゃこ",
      "しゃざい",
      "しゃしん",
      "しゃせん",
      "しゃそう",
      "しゃたい",
      "しゃちょう",
      "しゃっきん",
      "じゃま",
      "しゃりん",
      "しゃれい",
      "じゆう",
      "じゅうしょ",
      "しゅくはく",
      "じゅしん",
      "しゅっせき",
      "しゅみ",
      "しゅらば",
      "じゅんばん",
      "しょうかい",
      "しょくたく",
      "しょっけん",
      "しょどう",
      "しょもつ",
      "しらせる",
      "しらべる",
      "しんか",
      "しんこう",
      "じんじゃ",
      "しんせいじ",
      "しんちく",
      "しんりん",
      "すあげ",
      "すあし",
      "すあな",
      "ずあん",
      "すいえい",
      "すいか",
      "すいとう",
      "ずいぶん",
      "すいようび",
      "すうがく",
      "すうじつ",
      "すうせん",
      "すおどり",
      "すきま",
      "すくう",
      "すくない",
      "すける",
      "すごい",
      "すこし",
      "ずさん",
      "すずしい",
      "すすむ",
      "すすめる",
      "すっかり",
      "ずっしり",
      "ずっと",
      "すてき",
      "すてる",
      "すねる",
      "すのこ",
      "すはだ",
      "すばらしい",
      "ずひょう",
      "ずぶぬれ",
      "すぶり",
      "すふれ",
      "すべて",
      "すべる",
      "ずほう",
      "すぼん",
      "すまい",
      "すめし",
      "すもう",
      "すやき",
      "すらすら",
      "するめ",
      "すれちがう",
      "すろっと",
      "すわる",
      "すんぜん",
      "すんぽう",
      "せあぶら",
      "せいかつ",
      "せいげん",
      "せいじ",
      "せいよう",
      "せおう",
      "せかいかん",
      "せきにん",
      "せきむ",
      "せきゆ",
      "せきらんうん",
      "せけん",
      "せこう",
      "せすじ",
      "せたい",
      "せたけ",
      "せっかく",
      "せっきゃく",
      "ぜっく",
      "せっけん",
      "せっこつ",
      "せっさたくま",
      "せつぞく",
      "せつだん",
      "せつでん",
      "せっぱん",
      "せつび",
      "せつぶん",
      "せつめい",
      "せつりつ",
      "せなか",
      "せのび",
      "せはば",
      "せびろ",
      "せぼね",
      "せまい",
      "せまる",
      "せめる",
      "せもたれ",
      "せりふ",
      "ぜんあく",
      "せんい",
      "せんえい",
      "せんか",
      "せんきょ",
      "せんく",
      "せんげん",
      "ぜんご",
      "せんさい",
      "せんしゅ",
      "せんすい",
      "せんせい",
      "せんぞ",
      "せんたく",
      "せんちょう",
      "せんてい",
      "せんとう",
      "せんぬき",
      "せんねん",
      "せんぱい",
      "ぜんぶ",
      "ぜんぽう",
      "せんむ",
      "せんめんじょ",
      "せんもん",
      "せんやく",
      "せんゆう",
      "せんよう",
      "ぜんら",
      "ぜんりゃく",
      "せんれい",
      "せんろ",
      "そあく",
      "そいとげる",
      "そいね",
      "そうがんきょう",
      "そうき",
      "そうご",
      "そうしん",
      "そうだん",
      "そうなん",
      "そうび",
      "そうめん",
      "そうり",
      "そえもの",
      "そえん",
      "そがい",
      "そげき",
      "そこう",
      "そこそこ",
      "そざい",
      "そしな",
      "そせい",
      "そせん",
      "そそぐ",
      "そだてる",
      "そつう",
      "そつえん",
      "そっかん",
      "そつぎょう",
      "そっけつ",
      "そっこう",
      "そっせん",
      "そっと",
      "そとがわ",
      "そとづら",
      "そなえる",
      "そなた",
      "そふぼ",
      "そぼく",
      "そぼろ",
      "そまつ",
      "そまる",
      "そむく",
      "そむりえ",
      "そめる",
      "そもそも",
      "そよかぜ",
      "そらまめ",
      "そろう",
      "そんかい",
      "そんけい",
      "そんざい",
      "そんしつ",
      "そんぞく",
      "そんちょう",
      "ぞんび",
      "ぞんぶん",
      "そんみん",
      "たあい",
      "たいいん",
      "たいうん",
      "たいえき",
      "たいおう",
      "だいがく",
      "たいき",
      "たいぐう",
      "たいけん",
      "たいこ",
      "たいざい",
      "だいじょうぶ",
      "だいすき",
      "たいせつ",
      "たいそう",
      "だいたい",
      "たいちょう",
      "たいてい",
      "だいどころ",
      "たいない",
      "たいねつ",
      "たいのう",
      "たいはん",
      "だいひょう",
      "たいふう",
      "たいへん",
      "たいほ",
      "たいまつばな",
      "たいみんぐ",
      "たいむ",
      "たいめん",
      "たいやき",
      "たいよう",
      "たいら",
      "たいりょく",
      "たいる",
      "たいわん",
      "たうえ",
      "たえる",
      "たおす",
      "たおる",
      "たおれる",
      "たかい",
      "たかね",
      "たきび",
      "たくさん",
      "たこく",
      "たこやき",
      "たさい",
      "たしざん",
      "だじゃれ",
      "たすける",
      "たずさわる",
      "たそがれ",
      "たたかう",
      "たたく",
      "ただしい",
      "たたみ",
      "たちばな",
      "だっかい",
      "だっきゃく",
      "だっこ",
      "だっしゅつ",
      "だったい",
      "たてる",
      "たとえる",
      "たなばた",
      "たにん",
      "たぬき",
      "たのしみ",
      "たはつ",
      "たぶん",
      "たべる",
      "たぼう",
      "たまご",
      "たまる",
      "だむる",
      "ためいき",
      "ためす",
      "ためる",
      "たもつ",
      "たやすい",
      "たよる",
      "たらす",
      "たりきほんがん",
      "たりょう",
      "たりる",
      "たると",
      "たれる",
      "たれんと",
      "たろっと",
      "たわむれる",
      "だんあつ",
      "たんい",
      "たんおん",
      "たんか",
      "たんき",
      "たんけん",
      "たんご",
      "たんさん",
      "たんじょうび",
      "だんせい",
      "たんそく",
      "たんたい",
      "だんち",
      "たんてい",
      "たんとう",
      "だんな",
      "たんにん",
      "だんねつ",
      "たんのう",
      "たんぴん",
      "だんぼう",
      "たんまつ",
      "たんめい",
      "だんれつ",
      "だんろ",
      "だんわ",
      "ちあい",
      "ちあん",
      "ちいき",
      "ちいさい",
      "ちえん",
      "ちかい",
      "ちから",
      "ちきゅう",
      "ちきん",
      "ちけいず",
      "ちけん",
      "ちこく",
      "ちさい",
      "ちしき",
      "ちしりょう",
      "ちせい",
      "ちそう",
      "ちたい",
      "ちたん",
      "ちちおや",
      "ちつじょ",
      "ちてき",
      "ちてん",
      "ちぬき",
      "ちぬり",
      "ちのう",
      "ちひょう",
      "ちへいせん",
      "ちほう",
      "ちまた",
      "ちみつ",
      "ちみどろ",
      "ちめいど",
      "ちゃんこなべ",
      "ちゅうい",
      "ちゆりょく",
      "ちょうし",
      "ちょさくけん",
      "ちらし",
      "ちらみ",
      "ちりがみ",
      "ちりょう",
      "ちるど",
      "ちわわ",
      "ちんたい",
      "ちんもく",
      "ついか",
      "ついたち",
      "つうか",
      "つうじょう",
      "つうはん",
      "つうわ",
      "つかう",
      "つかれる",
      "つくね",
      "つくる",
      "つけね",
      "つける",
      "つごう",
      "つたえる",
      "つづく",
      "つつじ",
      "つつむ",
      "つとめる",
      "つながる",
      "つなみ",
      "つねづね",
      "つのる",
      "つぶす",
      "つまらない",
      "つまる",
      "つみき",
      "つめたい",
      "つもり",
      "つもる",
      "つよい",
      "つるぼ",
      "つるみく",
      "つわもの",
      "つわり",
      "てあし",
      "てあて",
      "てあみ",
      "ていおん",
      "ていか",
      "ていき",
      "ていけい",
      "ていこく",
      "ていさつ",
      "ていし",
      "ていせい",
      "ていたい",
      "ていど",
      "ていねい",
      "ていひょう",
      "ていへん",
      "ていぼう",
      "てうち",
      "ておくれ",
      "てきとう",
      "てくび",
      "でこぼこ",
      "てさぎょう",
      "てさげ",
      "てすり",
      "てそう",
      "てちがい",
      "てちょう",
      "てつがく",
      "てつづき",
      "でっぱ",
      "てつぼう",
      "てつや",
      "でぬかえ",
      "てぬき",
      "てぬぐい",
      "てのひら",
      "てはい",
      "てぶくろ",
      "てふだ",
      "てほどき",
      "てほん",
      "てまえ",
      "てまきずし",
      "てみじか",
      "てみやげ",
      "てらす",
      "てれび",
      "てわけ",
      "てわたし",
      "でんあつ",
      "てんいん",
      "てんかい",
      "てんき",
      "てんぐ",
      "てんけん",
      "てんごく",
      "てんさい",
      "てんし",
      "てんすう",
      "でんち",
      "てんてき",
      "てんとう",
      "てんない",
      "てんぷら",
      "てんぼうだい",
      "てんめつ",
      "てんらんかい",
      "でんりょく",
      "でんわ",
      "どあい",
      "といれ",
      "どうかん",
      "とうきゅう",
      "どうぐ",
      "とうし",
      "とうむぎ",
      "とおい",
      "とおか",
      "とおく",
      "とおす",
      "とおる",
      "とかい",
      "とかす",
      "ときおり",
      "ときどき",
      "とくい",
      "とくしゅう",
      "とくてん",
      "とくに",
      "とくべつ",
      "とけい",
      "とける",
      "とこや",
      "とさか",
      "としょかん",
      "とそう",
      "とたん",
      "とちゅう",
      "とっきゅう",
      "とっくん",
      "とつぜん",
      "とつにゅう",
      "とどける",
      "ととのえる",
      "とない",
      "となえる",
      "となり",
      "とのさま",
      "とばす",
      "どぶがわ",
      "とほう",
      "とまる",
      "とめる",
      "ともだち",
      "ともる",
      "どようび",
      "とらえる",
      "とんかつ",
      "どんぶり",
      "ないかく",
      "ないこう",
      "ないしょ",
      "ないす",
      "ないせん",
      "ないそう",
      "なおす",
      "ながい",
      "なくす",
      "なげる",
      "なこうど",
      "なさけ",
      "なたでここ",
      "なっとう",
      "なつやすみ",
      "ななおし",
      "なにごと",
      "なにもの",
      "なにわ",
      "なのか",
      "なふだ",
      "なまいき",
      "なまえ",
      "なまみ",
      "なみだ",
      "なめらか",
      "なめる",
      "なやむ",
      "ならう",
      "ならび",
      "ならぶ",
      "なれる",
      "なわとび",
      "なわばり",
      "にあう",
      "にいがた",
      "にうけ",
      "におい",
      "にかい",
      "にがて",
      "にきび",
      "にくしみ",
      "にくまん",
      "にげる",
      "にさんかたんそ",
      "にしき",
      "にせもの",
      "にちじょう",
      "にちようび",
      "にっか",
      "にっき",
      "にっけい",
      "にっこう",
      "にっさん",
      "にっしょく",
      "にっすう",
      "にっせき",
      "にってい",
      "になう",
      "にほん",
      "にまめ",
      "にもつ",
      "にやり",
      "にゅういん",
      "にりんしゃ",
      "にわとり",
      "にんい",
      "にんか",
      "にんき",
      "にんげん",
      "にんしき",
      "にんずう",
      "にんそう",
      "にんたい",
      "にんち",
      "にんてい",
      "にんにく",
      "にんぷ",
      "にんまり",
      "にんむ",
      "にんめい",
      "にんよう",
      "ぬいくぎ",
      "ぬかす",
      "ぬぐいとる",
      "ぬぐう",
      "ぬくもり",
      "ぬすむ",
      "ぬまえび",
      "ぬめり",
      "ぬらす",
      "ぬんちゃく",
      "ねあげ",
      "ねいき",
      "ねいる",
      "ねいろ",
      "ねぐせ",
      "ねくたい",
      "ねくら",
      "ねこぜ",
      "ねこむ",
      "ねさげ",
      "ねすごす",
      "ねそべる",
      "ねだん",
      "ねつい",
      "ねっしん",
      "ねつぞう",
      "ねったいぎょ",
      "ねぶそく",
      "ねふだ",
      "ねぼう",
      "ねほりはほり",
      "ねまき",
      "ねまわし",
      "ねみみ",
      "ねむい",
      "ねむたい",
      "ねもと",
      "ねらう",
      "ねわざ",
      "ねんいり",
      "ねんおし",
      "ねんかん",
      "ねんきん",
      "ねんぐ",
      "ねんざ",
      "ねんし",
      "ねんちゃく",
      "ねんど",
      "ねんぴ",
      "ねんぶつ",
      "ねんまつ",
      "ねんりょう",
      "ねんれい",
      "のいず",
      "のおづま",
      "のがす",
      "のきなみ",
      "のこぎり",
      "のこす",
      "のこる",
      "のせる",
      "のぞく",
      "のぞむ",
      "のたまう",
      "のちほど",
      "のっく",
      "のばす",
      "のはら",
      "のべる",
      "のぼる",
      "のみもの",
      "のやま",
      "のらいぬ",
      "のらねこ",
      "のりもの",
      "のりゆき",
      "のれん",
      "のんき",
      "ばあい",
      "はあく",
      "ばあさん",
      "ばいか",
      "ばいく",
      "はいけん",
      "はいご",
      "はいしん",
      "はいすい",
      "はいせん",
      "はいそう",
      "はいち",
      "ばいばい",
      "はいれつ",
      "はえる",
      "はおる",
      "はかい",
      "ばかり",
      "はかる",
      "はくしゅ",
      "はけん",
      "はこぶ",
      "はさみ",
      "はさん",
      "はしご",
      "ばしょ",
      "はしる",
      "はせる",
      "ぱそこん",
      "はそん",
      "はたん",
      "はちみつ",
      "はつおん",
      "はっかく",
      "はづき",
      "はっきり",
      "はっくつ",
      "はっけん",
      "はっこう",
      "はっさん",
      "はっしん",
      "はったつ",
      "はっちゅう",
      "はってん",
      "はっぴょう",
      "はっぽう",
      "はなす",
      "はなび",
      "はにかむ",
      "はぶらし",
      "はみがき",
      "はむかう",
      "はめつ",
      "はやい",
      "はやし",
      "はらう",
      "はろうぃん",
      "はわい",
      "はんい",
      "はんえい",
      "はんおん",
      "はんかく",
      "はんきょう",
      "ばんぐみ",
      "はんこ",
      "はんしゃ",
      "はんすう",
      "はんだん",
      "ぱんち",
      "ぱんつ",
      "はんてい",
      "はんとし",
      "はんのう",
      "はんぱ",
      "はんぶん",
      "はんぺん",
      "はんぼうき",
      "はんめい",
      "はんらん",
      "はんろん",
      "ひいき",
      "ひうん",
      "ひえる",
      "ひかく",
      "ひかり",
      "ひかる",
      "ひかん",
      "ひくい",
      "ひけつ",
      "ひこうき",
      "ひこく",
      "ひさい",
      "ひさしぶり",
      "ひさん",
      "びじゅつかん",
      "ひしょ",
      "ひそか",
      "ひそむ",
      "ひたむき",
      "ひだり",
      "ひたる",
      "ひつぎ",
      "ひっこし",
      "ひっし",
      "ひつじゅひん",
      "ひっす",
      "ひつぜん",
      "ぴったり",
      "ぴっちり",
      "ひつよう",
      "ひてい",
      "ひとごみ",
      "ひなまつり",
      "ひなん",
      "ひねる",
      "ひはん",
      "ひびく",
      "ひひょう",
      "ひほう",
      "ひまわり",
      "ひまん",
      "ひみつ",
      "ひめい",
      "ひめじし",
      "ひやけ",
      "ひやす",
      "ひよう",
      "びょうき",
      "ひらがな",
      "ひらく",
      "ひりつ",
      "ひりょう",
      "ひるま",
      "ひるやすみ",
      "ひれい",
      "ひろい",
      "ひろう",
      "ひろき",
      "ひろゆき",
      "ひんかく",
      "ひんけつ",
      "ひんこん",
      "ひんしゅ",
      "ひんそう",
      "ぴんち",
      "ひんぱん",
      "びんぼう",
      "ふあん",
      "ふいうち",
      "ふうけい",
      "ふうせん",
      "ぷうたろう",
      "ふうとう",
      "ふうふ",
      "ふえる",
      "ふおん",
      "ふかい",
      "ふきん",
      "ふくざつ",
      "ふくぶくろ",
      "ふこう",
      "ふさい",
      "ふしぎ",
      "ふじみ",
      "ふすま",
      "ふせい",
      "ふせぐ",
      "ふそく",
      "ぶたにく",
      "ふたん",
      "ふちょう",
      "ふつう",
      "ふつか",
      "ふっかつ",
      "ふっき",
      "ふっこく",
      "ぶどう",
      "ふとる",
      "ふとん",
      "ふのう",
      "ふはい",
      "ふひょう",
      "ふへん",
      "ふまん",
      "ふみん",
      "ふめつ",
      "ふめん",
      "ふよう",
      "ふりこ",
      "ふりる",
      "ふるい",
      "ふんいき",
      "ぶんがく",
      "ぶんぐ",
      "ふんしつ",
      "ぶんせき",
      "ふんそう",
      "ぶんぽう",
      "へいあん",
      "へいおん",
      "へいがい",
      "へいき",
      "へいげん",
      "へいこう",
      "へいさ",
      "へいしゃ",
      "へいせつ",
      "へいそ",
      "へいたく",
      "へいてん",
      "へいねつ",
      "へいわ",
      "へきが",
      "へこむ",
      "べにいろ",
      "べにしょうが",
      "へらす",
      "へんかん",
      "べんきょう",
      "べんごし",
      "へんさい",
      "へんたい",
      "べんり",
      "ほあん",
      "ほいく",
      "ぼうぎょ",
      "ほうこく",
      "ほうそう",
      "ほうほう",
      "ほうもん",
      "ほうりつ",
      "ほえる",
      "ほおん",
      "ほかん",
      "ほきょう",
      "ぼきん",
      "ほくろ",
      "ほけつ",
      "ほけん",
      "ほこう",
      "ほこる",
      "ほしい",
      "ほしつ",
      "ほしゅ",
      "ほしょう",
      "ほせい",
      "ほそい",
      "ほそく",
      "ほたて",
      "ほたる",
      "ぽちぶくろ",
      "ほっきょく",
      "ほっさ",
      "ほったん",
      "ほとんど",
      "ほめる",
      "ほんい",
      "ほんき",
      "ほんけ",
      "ほんしつ",
      "ほんやく",
      "まいにち",
      "まかい",
      "まかせる",
      "まがる",
      "まける",
      "まこと",
      "まさつ",
      "まじめ",
      "ますく",
      "まぜる",
      "まつり",
      "まとめ",
      "まなぶ",
      "まぬけ",
      "まねく",
      "まほう",
      "まもる",
      "まゆげ",
      "まよう",
      "まろやか",
      "まわす",
      "まわり",
      "まわる",
      "まんが",
      "まんきつ",
      "まんぞく",
      "まんなか",
      "みいら",
      "みうち",
      "みえる",
      "みがく",
      "みかた",
      "みかん",
      "みけん",
      "みこん",
      "みじかい",
      "みすい",
      "みすえる",
      "みせる",
      "みっか",
      "みつかる",
      "みつける",
      "みてい",
      "みとめる",
      "みなと",
      "みなみかさい",
      "みねらる",
      "みのう",
      "みのがす",
      "みほん",
      "みもと",
      "みやげ",
      "みらい",
      "みりょく",
      "みわく",
      "みんか",
      "みんぞく",
      "むいか",
      "むえき",
      "むえん",
      "むかい",
      "むかう",
      "むかえ",
      "むかし",
      "むぎちゃ",
      "むける",
      "むげん",
      "むさぼる",
      "むしあつい",
      "むしば",
      "むじゅん",
      "むしろ",
      "むすう",
      "むすこ",
      "むすぶ",
      "むすめ",
      "むせる",
      "むせん",
      "むちゅう",
      "むなしい",
      "むのう",
      "むやみ",
      "むよう",
      "むらさき",
      "むりょう",
      "むろん",
      "めいあん",
      "めいうん",
      "めいえん",
      "めいかく",
      "めいきょく",
      "めいさい",
      "めいし",
      "めいそう",
      "めいぶつ",
      "めいれい",
      "めいわく",
      "めぐまれる",
      "めざす",
      "めした",
      "めずらしい",
      "めだつ",
      "めまい",
      "めやす",
      "めんきょ",
      "めんせき",
      "めんどう",
      "もうしあげる",
      "もうどうけん",
      "もえる",
      "もくし",
      "もくてき",
      "もくようび",
      "もちろん",
      "もどる",
      "もらう",
      "もんく",
      "もんだい",
      "やおや",
      "やける",
      "やさい",
      "やさしい",
      "やすい",
      "やすたろう",
      "やすみ",
      "やせる",
      "やそう",
      "やたい",
      "やちん",
      "やっと",
      "やっぱり",
      "やぶる",
      "やめる",
      "ややこしい",
      "やよい",
      "やわらかい",
      "ゆうき",
      "ゆうびんきょく",
      "ゆうべ",
      "ゆうめい",
      "ゆけつ",
      "ゆしゅつ",
      "ゆせん",
      "ゆそう",
      "ゆたか",
      "ゆちゃく",
      "ゆでる",
      "ゆにゅう",
      "ゆびわ",
      "ゆらい",
      "ゆれる",
      "ようい",
      "ようか",
      "ようきゅう",
      "ようじ",
      "ようす",
      "ようちえん",
      "よかぜ",
      "よかん",
      "よきん",
      "よくせい",
      "よくぼう",
      "よけい",
      "よごれる",
      "よさん",
      "よしゅう",
      "よそう",
      "よそく",
      "よっか",
      "よてい",
      "よどがわく",
      "よねつ",
      "よやく",
      "よゆう",
      "よろこぶ",
      "よろしい",
      "らいう",
      "らくがき",
      "らくご",
      "らくさつ",
      "らくだ",
      "らしんばん",
      "らせん",
      "らぞく",
      "らたい",
      "らっか",
      "られつ",
      "りえき",
      "りかい",
      "りきさく",
      "りきせつ",
      "りくぐん",
      "りくつ",
      "りけん",
      "りこう",
      "りせい",
      "りそう",
      "りそく",
      "りてん",
      "りねん",
      "りゆう",
      "りゅうがく",
      "りよう",
      "りょうり",
      "りょかん",
      "りょくちゃ",
      "りょこう",
      "りりく",
      "りれき",
      "りろん",
      "りんご",
      "るいけい",
      "るいさい",
      "るいじ",
      "るいせき",
      "るすばん",
      "るりがわら",
      "れいかん",
      "れいぎ",
      "れいせい",
      "れいぞうこ",
      "れいとう",
      "れいぼう",
      "れきし",
      "れきだい",
      "れんあい",
      "れんけい",
      "れんこん",
      "れんさい",
      "れんしゅう",
      "れんぞく",
      "れんらく",
      "ろうか",
      "ろうご",
      "ろうじん",
      "ろうそく",
      "ろくが",
      "ろこつ",
      "ろじうら",
      "ろしゅつ",
      "ろせん",
      "ろてん",
      "ろめん",
      "ろれつ",
      "ろんぎ",
      "ろんぱ",
      "ろんぶん",
      "ろんり",
      "わかす",
      "わかめ",
      "わかやま",
      "わかれる",
      "わしつ",
      "わじまし",
      "わすれもの",
      "わらう",
      "われる",
    ];
  },
  function (e, t, r) {
    "use strict";
    e.exports = [
      "ábaco",
      "abdomen",
      "abeja",
      "abierto",
      "abogado",
      "abono",
      "aborto",
      "abrazo",
      "abrir",
      "abuelo",
      "abuso",
      "acabar",
      "academia",
      "acceso",
      "acción",
      "aceite",
      "acelga",
      "acento",
      "aceptar",
      "ácido",
      "aclarar",
      "acné",
      "acoger",
      "acoso",
      "activo",
      "acto",
      "actriz",
      "actuar",
      "acudir",
      "acuerdo",
      "acusar",
      "adicto",
      "admitir",
      "adoptar",
      "adorno",
      "aduana",
      "adulto",
      "aéreo",
      "afectar",
      "afición",
      "afinar",
      "afirmar",
      "ágil",
      "agitar",
      "agonía",
      "agosto",
      "agotar",
      "agregar",
      "agrio",
      "agua",
      "agudo",
      "águila",
      "aguja",
      "ahogo",
      "ahorro",
      "aire",
      "aislar",
      "ajedrez",
      "ajeno",
      "ajuste",
      "alacrán",
      "alambre",
      "alarma",
      "alba",
      "álbum",
      "alcalde",
      "aldea",
      "alegre",
      "alejar",
      "alerta",
      "aleta",
      "alfiler",
      "alga",
      "algodón",
      "aliado",
      "aliento",
      "alivio",
      "alma",
      "almeja",
      "almíbar",
      "altar",
      "alteza",
      "altivo",
      "alto",
      "altura",
      "alumno",
      "alzar",
      "amable",
      "amante",
      "amapola",
      "amargo",
      "amasar",
      "ámbar",
      "ámbito",
      "ameno",
      "amigo",
      "amistad",
      "amor",
      "amparo",
      "amplio",
      "ancho",
      "anciano",
      "ancla",
      "andar",
      "andén",
      "anemia",
      "ángulo",
      "anillo",
      "ánimo",
      "anís",
      "anotar",
      "antena",
      "antiguo",
      "antojo",
      "anual",
      "anular",
      "anuncio",
      "añadir",
      "añejo",
      "año",
      "apagar",
      "aparato",
      "apetito",
      "apio",
      "aplicar",
      "apodo",
      "aporte",
      "apoyo",
      "aprender",
      "aprobar",
      "apuesta",
      "apuro",
      "arado",
      "araña",
      "arar",
      "árbitro",
      "árbol",
      "arbusto",
      "archivo",
      "arco",
      "arder",
      "ardilla",
      "arduo",
      "área",
      "árido",
      "aries",
      "armonía",
      "arnés",
      "aroma",
      "arpa",
      "arpón",
      "arreglo",
      "arroz",
      "arruga",
      "arte",
      "artista",
      "asa",
      "asado",
      "asalto",
      "ascenso",
      "asegurar",
      "aseo",
      "asesor",
      "asiento",
      "asilo",
      "asistir",
      "asno",
      "asombro",
      "áspero",
      "astilla",
      "astro",
      "astuto",
      "asumir",
      "asunto",
      "atajo",
      "ataque",
      "atar",
      "atento",
      "ateo",
      "ático",
      "atleta",
      "átomo",
      "atraer",
      "atroz",
      "atún",
      "audaz",
      "audio",
      "auge",
      "aula",
      "aumento",
      "ausente",
      "autor",
      "aval",
      "avance",
      "avaro",
      "ave",
      "avellana",
      "avena",
      "avestruz",
      "avión",
      "aviso",
      "ayer",
      "ayuda",
      "ayuno",
      "azafrán",
      "azar",
      "azote",
      "azúcar",
      "azufre",
      "azul",
      "baba",
      "babor",
      "bache",
      "bahía",
      "baile",
      "bajar",
      "balanza",
      "balcón",
      "balde",
      "bambú",
      "banco",
      "banda",
      "baño",
      "barba",
      "barco",
      "barniz",
      "barro",
      "báscula",
      "bastón",
      "basura",
      "batalla",
      "batería",
      "batir",
      "batuta",
      "baúl",
      "bazar",
      "bebé",
      "bebida",
      "bello",
      "besar",
      "beso",
      "bestia",
      "bicho",
      "bien",
      "bingo",
      "blanco",
      "bloque",
      "blusa",
      "boa",
      "bobina",
      "bobo",
      "boca",
      "bocina",
      "boda",
      "bodega",
      "boina",
      "bola",
      "bolero",
      "bolsa",
      "bomba",
      "bondad",
      "bonito",
      "bono",
      "bonsái",
      "borde",
      "borrar",
      "bosque",
      "bote",
      "botín",
      "bóveda",
      "bozal",
      "bravo",
      "brazo",
      "brecha",
      "breve",
      "brillo",
      "brinco",
      "brisa",
      "broca",
      "broma",
      "bronce",
      "brote",
      "bruja",
      "brusco",
      "bruto",
      "buceo",
      "bucle",
      "bueno",
      "buey",
      "bufanda",
      "bufón",
      "búho",
      "buitre",
      "bulto",
      "burbuja",
      "burla",
      "burro",
      "buscar",
      "butaca",
      "buzón",
      "caballo",
      "cabeza",
      "cabina",
      "cabra",
      "cacao",
      "cadáver",
      "cadena",
      "caer",
      "café",
      "caída",
      "caimán",
      "caja",
      "cajón",
      "cal",
      "calamar",
      "calcio",
      "caldo",
      "calidad",
      "calle",
      "calma",
      "calor",
      "calvo",
      "cama",
      "cambio",
      "camello",
      "camino",
      "campo",
      "cáncer",
      "candil",
      "canela",
      "canguro",
      "canica",
      "canto",
      "caña",
      "cañón",
      "caoba",
      "caos",
      "capaz",
      "capitán",
      "capote",
      "captar",
      "capucha",
      "cara",
      "carbón",
      "cárcel",
      "careta",
      "carga",
      "cariño",
      "carne",
      "carpeta",
      "carro",
      "carta",
      "casa",
      "casco",
      "casero",
      "caspa",
      "castor",
      "catorce",
      "catre",
      "caudal",
      "causa",
      "cazo",
      "cebolla",
      "ceder",
      "cedro",
      "celda",
      "célebre",
      "celoso",
      "célula",
      "cemento",
      "ceniza",
      "centro",
      "cerca",
      "cerdo",
      "cereza",
      "cero",
      "cerrar",
      "certeza",
      "césped",
      "cetro",
      "chacal",
      "chaleco",
      "champú",
      "chancla",
      "chapa",
      "charla",
      "chico",
      "chiste",
      "chivo",
      "choque",
      "choza",
      "chuleta",
      "chupar",
      "ciclón",
      "ciego",
      "cielo",
      "cien",
      "cierto",
      "cifra",
      "cigarro",
      "cima",
      "cinco",
      "cine",
      "cinta",
      "ciprés",
      "circo",
      "ciruela",
      "cisne",
      "cita",
      "ciudad",
      "clamor",
      "clan",
      "claro",
      "clase",
      "clave",
      "cliente",
      "clima",
      "clínica",
      "cobre",
      "cocción",
      "cochino",
      "cocina",
      "coco",
      "código",
      "codo",
      "cofre",
      "coger",
      "cohete",
      "cojín",
      "cojo",
      "cola",
      "colcha",
      "colegio",
      "colgar",
      "colina",
      "collar",
      "colmo",
      "columna",
      "combate",
      "comer",
      "comida",
      "cómodo",
      "compra",
      "conde",
      "conejo",
      "conga",
      "conocer",
      "consejo",
      "contar",
      "copa",
      "copia",
      "corazón",
      "corbata",
      "corcho",
      "cordón",
      "corona",
      "correr",
      "coser",
      "cosmos",
      "costa",
      "cráneo",
      "cráter",
      "crear",
      "crecer",
      "creído",
      "crema",
      "cría",
      "crimen",
      "cripta",
      "crisis",
      "cromo",
      "crónica",
      "croqueta",
      "crudo",
      "cruz",
      "cuadro",
      "cuarto",
      "cuatro",
      "cubo",
      "cubrir",
      "cuchara",
      "cuello",
      "cuento",
      "cuerda",
      "cuesta",
      "cueva",
      "cuidar",
      "culebra",
      "culpa",
      "culto",
      "cumbre",
      "cumplir",
      "cuna",
      "cuneta",
      "cuota",
      "cupón",
      "cúpula",
      "curar",
      "curioso",
      "curso",
      "curva",
      "cutis",
      "dama",
      "danza",
      "dar",
      "dardo",
      "dátil",
      "deber",
      "débil",
      "década",
      "decir",
      "dedo",
      "defensa",
      "definir",
      "dejar",
      "delfín",
      "delgado",
      "delito",
      "demora",
      "denso",
      "dental",
      "deporte",
      "derecho",
      "derrota",
      "desayuno",
      "deseo",
      "desfile",
      "desnudo",
      "destino",
      "desvío",
      "detalle",
      "detener",
      "deuda",
      "día",
      "diablo",
      "diadema",
      "diamante",
      "diana",
      "diario",
      "dibujo",
      "dictar",
      "diente",
      "dieta",
      "diez",
      "difícil",
      "digno",
      "dilema",
      "diluir",
      "dinero",
      "directo",
      "dirigir",
      "disco",
      "diseño",
      "disfraz",
      "diva",
      "divino",
      "doble",
      "doce",
      "dolor",
      "domingo",
      "don",
      "donar",
      "dorado",
      "dormir",
      "dorso",
      "dos",
      "dosis",
      "dragón",
      "droga",
      "ducha",
      "duda",
      "duelo",
      "dueño",
      "dulce",
      "dúo",
      "duque",
      "durar",
      "dureza",
      "duro",
      "ébano",
      "ebrio",
      "echar",
      "eco",
      "ecuador",
      "edad",
      "edición",
      "edificio",
      "editor",
      "educar",
      "efecto",
      "eficaz",
      "eje",
      "ejemplo",
      "elefante",
      "elegir",
      "elemento",
      "elevar",
      "elipse",
      "élite",
      "elixir",
      "elogio",
      "eludir",
      "embudo",
      "emitir",
      "emoción",
      "empate",
      "empeño",
      "empleo",
      "empresa",
      "enano",
      "encargo",
      "enchufe",
      "encía",
      "enemigo",
      "enero",
      "enfado",
      "enfermo",
      "engaño",
      "enigma",
      "enlace",
      "enorme",
      "enredo",
      "ensayo",
      "enseñar",
      "entero",
      "entrar",
      "envase",
      "envío",
      "época",
      "equipo",
      "erizo",
      "escala",
      "escena",
      "escolar",
      "escribir",
      "escudo",
      "esencia",
      "esfera",
      "esfuerzo",
      "espada",
      "espejo",
      "espía",
      "esposa",
      "espuma",
      "esquí",
      "estar",
      "este",
      "estilo",
      "estufa",
      "etapa",
      "eterno",
      "ética",
      "etnia",
      "evadir",
      "evaluar",
      "evento",
      "evitar",
      "exacto",
      "examen",
      "exceso",
      "excusa",
      "exento",
      "exigir",
      "exilio",
      "existir",
      "éxito",
      "experto",
      "explicar",
      "exponer",
      "extremo",
      "fábrica",
      "fábula",
      "fachada",
      "fácil",
      "factor",
      "faena",
      "faja",
      "falda",
      "fallo",
      "falso",
      "faltar",
      "fama",
      "familia",
      "famoso",
      "faraón",
      "farmacia",
      "farol",
      "farsa",
      "fase",
      "fatiga",
      "fauna",
      "favor",
      "fax",
      "febrero",
      "fecha",
      "feliz",
      "feo",
      "feria",
      "feroz",
      "fértil",
      "fervor",
      "festín",
      "fiable",
      "fianza",
      "fiar",
      "fibra",
      "ficción",
      "ficha",
      "fideo",
      "fiebre",
      "fiel",
      "fiera",
      "fiesta",
      "figura",
      "fijar",
      "fijo",
      "fila",
      "filete",
      "filial",
      "filtro",
      "fin",
      "finca",
      "fingir",
      "finito",
      "firma",
      "flaco",
      "flauta",
      "flecha",
      "flor",
      "flota",
      "fluir",
      "flujo",
      "flúor",
      "fobia",
      "foca",
      "fogata",
      "fogón",
      "folio",
      "folleto",
      "fondo",
      "forma",
      "forro",
      "fortuna",
      "forzar",
      "fosa",
      "foto",
      "fracaso",
      "frágil",
      "franja",
      "frase",
      "fraude",
      "freír",
      "freno",
      "fresa",
      "frío",
      "frito",
      "fruta",
      "fuego",
      "fuente",
      "fuerza",
      "fuga",
      "fumar",
      "función",
      "funda",
      "furgón",
      "furia",
      "fusil",
      "fútbol",
      "futuro",
      "gacela",
      "gafas",
      "gaita",
      "gajo",
      "gala",
      "galería",
      "gallo",
      "gamba",
      "ganar",
      "gancho",
      "ganga",
      "ganso",
      "garaje",
      "garza",
      "gasolina",
      "gastar",
      "gato",
      "gavilán",
      "gemelo",
      "gemir",
      "gen",
      "género",
      "genio",
      "gente",
      "geranio",
      "gerente",
      "germen",
      "gesto",
      "gigante",
      "gimnasio",
      "girar",
      "giro",
      "glaciar",
      "globo",
      "gloria",
      "gol",
      "golfo",
      "goloso",
      "golpe",
      "goma",
      "gordo",
      "gorila",
      "gorra",
      "gota",
      "goteo",
      "gozar",
      "grada",
      "gráfico",
      "grano",
      "grasa",
      "gratis",
      "grave",
      "grieta",
      "grillo",
      "gripe",
      "gris",
      "grito",
      "grosor",
      "grúa",
      "grueso",
      "grumo",
      "grupo",
      "guante",
      "guapo",
      "guardia",
      "guerra",
      "guía",
      "guiño",
      "guion",
      "guiso",
      "guitarra",
      "gusano",
      "gustar",
      "haber",
      "hábil",
      "hablar",
      "hacer",
      "hacha",
      "hada",
      "hallar",
      "hamaca",
      "harina",
      "haz",
      "hazaña",
      "hebilla",
      "hebra",
      "hecho",
      "helado",
      "helio",
      "hembra",
      "herir",
      "hermano",
      "héroe",
      "hervir",
      "hielo",
      "hierro",
      "hígado",
      "higiene",
      "hijo",
      "himno",
      "historia",
      "hocico",
      "hogar",
      "hoguera",
      "hoja",
      "hombre",
      "hongo",
      "honor",
      "honra",
      "hora",
      "hormiga",
      "horno",
      "hostil",
      "hoyo",
      "hueco",
      "huelga",
      "huerta",
      "hueso",
      "huevo",
      "huida",
      "huir",
      "humano",
      "húmedo",
      "humilde",
      "humo",
      "hundir",
      "huracán",
      "hurto",
      "icono",
      "ideal",
      "idioma",
      "ídolo",
      "iglesia",
      "iglú",
      "igual",
      "ilegal",
      "ilusión",
      "imagen",
      "imán",
      "imitar",
      "impar",
      "imperio",
      "imponer",
      "impulso",
      "incapaz",
      "índice",
      "inerte",
      "infiel",
      "informe",
      "ingenio",
      "inicio",
      "inmenso",
      "inmune",
      "innato",
      "insecto",
      "instante",
      "interés",
      "íntimo",
      "intuir",
      "inútil",
      "invierno",
      "ira",
      "iris",
      "ironía",
      "isla",
      "islote",
      "jabalí",
      "jabón",
      "jamón",
      "jarabe",
      "jardín",
      "jarra",
      "jaula",
      "jazmín",
      "jefe",
      "jeringa",
      "jinete",
      "jornada",
      "joroba",
      "joven",
      "joya",
      "juerga",
      "jueves",
      "juez",
      "jugador",
      "jugo",
      "juguete",
      "juicio",
      "junco",
      "jungla",
      "junio",
      "juntar",
      "júpiter",
      "jurar",
      "justo",
      "juvenil",
      "juzgar",
      "kilo",
      "koala",
      "labio",
      "lacio",
      "lacra",
      "lado",
      "ladrón",
      "lagarto",
      "lágrima",
      "laguna",
      "laico",
      "lamer",
      "lámina",
      "lámpara",
      "lana",
      "lancha",
      "langosta",
      "lanza",
      "lápiz",
      "largo",
      "larva",
      "lástima",
      "lata",
      "látex",
      "latir",
      "laurel",
      "lavar",
      "lazo",
      "leal",
      "lección",
      "leche",
      "lector",
      "leer",
      "legión",
      "legumbre",
      "lejano",
      "lengua",
      "lento",
      "leña",
      "león",
      "leopardo",
      "lesión",
      "letal",
      "letra",
      "leve",
      "leyenda",
      "libertad",
      "libro",
      "licor",
      "líder",
      "lidiar",
      "lienzo",
      "liga",
      "ligero",
      "lima",
      "límite",
      "limón",
      "limpio",
      "lince",
      "lindo",
      "línea",
      "lingote",
      "lino",
      "linterna",
      "líquido",
      "liso",
      "lista",
      "litera",
      "litio",
      "litro",
      "llaga",
      "llama",
      "llanto",
      "llave",
      "llegar",
      "llenar",
      "llevar",
      "llorar",
      "llover",
      "lluvia",
      "lobo",
      "loción",
      "loco",
      "locura",
      "lógica",
      "logro",
      "lombriz",
      "lomo",
      "lonja",
      "lote",
      "lucha",
      "lucir",
      "lugar",
      "lujo",
      "luna",
      "lunes",
      "lupa",
      "lustro",
      "luto",
      "luz",
      "maceta",
      "macho",
      "madera",
      "madre",
      "maduro",
      "maestro",
      "mafia",
      "magia",
      "mago",
      "maíz",
      "maldad",
      "maleta",
      "malla",
      "malo",
      "mamá",
      "mambo",
      "mamut",
      "manco",
      "mando",
      "manejar",
      "manga",
      "maniquí",
      "manjar",
      "mano",
      "manso",
      "manta",
      "mañana",
      "mapa",
      "máquina",
      "mar",
      "marco",
      "marea",
      "marfil",
      "margen",
      "marido",
      "mármol",
      "marrón",
      "martes",
      "marzo",
      "masa",
      "máscara",
      "masivo",
      "matar",
      "materia",
      "matiz",
      "matriz",
      "máximo",
      "mayor",
      "mazorca",
      "mecha",
      "medalla",
      "medio",
      "médula",
      "mejilla",
      "mejor",
      "melena",
      "melón",
      "memoria",
      "menor",
      "mensaje",
      "mente",
      "menú",
      "mercado",
      "merengue",
      "mérito",
      "mes",
      "mesón",
      "meta",
      "meter",
      "método",
      "metro",
      "mezcla",
      "miedo",
      "miel",
      "miembro",
      "miga",
      "mil",
      "milagro",
      "militar",
      "millón",
      "mimo",
      "mina",
      "minero",
      "mínimo",
      "minuto",
      "miope",
      "mirar",
      "misa",
      "miseria",
      "misil",
      "mismo",
      "mitad",
      "mito",
      "mochila",
      "moción",
      "moda",
      "modelo",
      "moho",
      "mojar",
      "molde",
      "moler",
      "molino",
      "momento",
      "momia",
      "monarca",
      "moneda",
      "monja",
      "monto",
      "moño",
      "morada",
      "morder",
      "moreno",
      "morir",
      "morro",
      "morsa",
      "mortal",
      "mosca",
      "mostrar",
      "motivo",
      "mover",
      "móvil",
      "mozo",
      "mucho",
      "mudar",
      "mueble",
      "muela",
      "muerte",
      "muestra",
      "mugre",
      "mujer",
      "mula",
      "muleta",
      "multa",
      "mundo",
      "muñeca",
      "mural",
      "muro",
      "músculo",
      "museo",
      "musgo",
      "música",
      "muslo",
      "nácar",
      "nación",
      "nadar",
      "naipe",
      "naranja",
      "nariz",
      "narrar",
      "nasal",
      "natal",
      "nativo",
      "natural",
      "náusea",
      "naval",
      "nave",
      "navidad",
      "necio",
      "néctar",
      "negar",
      "negocio",
      "negro",
      "neón",
      "nervio",
      "neto",
      "neutro",
      "nevar",
      "nevera",
      "nicho",
      "nido",
      "niebla",
      "nieto",
      "niñez",
      "niño",
      "nítido",
      "nivel",
      "nobleza",
      "noche",
      "nómina",
      "noria",
      "norma",
      "norte",
      "nota",
      "noticia",
      "novato",
      "novela",
      "novio",
      "nube",
      "nuca",
      "núcleo",
      "nudillo",
      "nudo",
      "nuera",
      "nueve",
      "nuez",
      "nulo",
      "número",
      "nutria",
      "oasis",
      "obeso",
      "obispo",
      "objeto",
      "obra",
      "obrero",
      "observar",
      "obtener",
      "obvio",
      "oca",
      "ocaso",
      "océano",
      "ochenta",
      "ocho",
      "ocio",
      "ocre",
      "octavo",
      "octubre",
      "oculto",
      "ocupar",
      "ocurrir",
      "odiar",
      "odio",
      "odisea",
      "oeste",
      "ofensa",
      "oferta",
      "oficio",
      "ofrecer",
      "ogro",
      "oído",
      "oír",
      "ojo",
      "ola",
      "oleada",
      "olfato",
      "olivo",
      "olla",
      "olmo",
      "olor",
      "olvido",
      "ombligo",
      "onda",
      "onza",
      "opaco",
      "opción",
      "ópera",
      "opinar",
      "oponer",
      "optar",
      "óptica",
      "opuesto",
      "oración",
      "orador",
      "oral",
      "órbita",
      "orca",
      "orden",
      "oreja",
      "órgano",
      "orgía",
      "orgullo",
      "oriente",
      "origen",
      "orilla",
      "oro",
      "orquesta",
      "oruga",
      "osadía",
      "oscuro",
      "osezno",
      "oso",
      "ostra",
      "otoño",
      "otro",
      "oveja",
      "óvulo",
      "óxido",
      "oxígeno",
      "oyente",
      "ozono",
      "pacto",
      "padre",
      "paella",
      "página",
      "pago",
      "país",
      "pájaro",
      "palabra",
      "palco",
      "paleta",
      "pálido",
      "palma",
      "paloma",
      "palpar",
      "pan",
      "panal",
      "pánico",
      "pantera",
      "pañuelo",
      "papá",
      "papel",
      "papilla",
      "paquete",
      "parar",
      "parcela",
      "pared",
      "parir",
      "paro",
      "párpado",
      "parque",
      "párrafo",
      "parte",
      "pasar",
      "paseo",
      "pasión",
      "paso",
      "pasta",
      "pata",
      "patio",
      "patria",
      "pausa",
      "pauta",
      "pavo",
      "payaso",
      "peatón",
      "pecado",
      "pecera",
      "pecho",
      "pedal",
      "pedir",
      "pegar",
      "peine",
      "pelar",
      "peldaño",
      "pelea",
      "peligro",
      "pellejo",
      "pelo",
      "peluca",
      "pena",
      "pensar",
      "peñón",
      "peón",
      "peor",
      "pepino",
      "pequeño",
      "pera",
      "percha",
      "perder",
      "pereza",
      "perfil",
      "perico",
      "perla",
      "permiso",
      "perro",
      "persona",
      "pesa",
      "pesca",
      "pésimo",
      "pestaña",
      "pétalo",
      "petróleo",
      "pez",
      "pezuña",
      "picar",
      "pichón",
      "pie",
      "piedra",
      "pierna",
      "pieza",
      "pijama",
      "pilar",
      "piloto",
      "pimienta",
      "pino",
      "pintor",
      "pinza",
      "piña",
      "piojo",
      "pipa",
      "pirata",
      "pisar",
      "piscina",
      "piso",
      "pista",
      "pitón",
      "pizca",
      "placa",
      "plan",
      "plata",
      "playa",
      "plaza",
      "pleito",
      "pleno",
      "plomo",
      "pluma",
      "plural",
      "pobre",
      "poco",
      "poder",
      "podio",
      "poema",
      "poesía",
      "poeta",
      "polen",
      "policía",
      "pollo",
      "polvo",
      "pomada",
      "pomelo",
      "pomo",
      "pompa",
      "poner",
      "porción",
      "portal",
      "posada",
      "poseer",
      "posible",
      "poste",
      "potencia",
      "potro",
      "pozo",
      "prado",
      "precoz",
      "pregunta",
      "premio",
      "prensa",
      "preso",
      "previo",
      "primo",
      "príncipe",
      "prisión",
      "privar",
      "proa",
      "probar",
      "proceso",
      "producto",
      "proeza",
      "profesor",
      "programa",
      "prole",
      "promesa",
      "pronto",
      "propio",
      "próximo",
      "prueba",
      "público",
      "puchero",
      "pudor",
      "pueblo",
      "puerta",
      "puesto",
      "pulga",
      "pulir",
      "pulmón",
      "pulpo",
      "pulso",
      "puma",
      "punto",
      "puñal",
      "puño",
      "pupa",
      "pupila",
      "puré",
      "quedar",
      "queja",
      "quemar",
      "querer",
      "queso",
      "quieto",
      "química",
      "quince",
      "quitar",
      "rábano",
      "rabia",
      "rabo",
      "ración",
      "radical",
      "raíz",
      "rama",
      "rampa",
      "rancho",
      "rango",
      "rapaz",
      "rápido",
      "rapto",
      "rasgo",
      "raspa",
      "rato",
      "rayo",
      "raza",
      "razón",
      "reacción",
      "realidad",
      "rebaño",
      "rebote",
      "recaer",
      "receta",
      "rechazo",
      "recoger",
      "recreo",
      "recto",
      "recurso",
      "red",
      "redondo",
      "reducir",
      "reflejo",
      "reforma",
      "refrán",
      "refugio",
      "regalo",
      "regir",
      "regla",
      "regreso",
      "rehén",
      "reino",
      "reír",
      "reja",
      "relato",
      "relevo",
      "relieve",
      "relleno",
      "reloj",
      "remar",
      "remedio",
      "remo",
      "rencor",
      "rendir",
      "renta",
      "reparto",
      "repetir",
      "reposo",
      "reptil",
      "res",
      "rescate",
      "resina",
      "respeto",
      "resto",
      "resumen",
      "retiro",
      "retorno",
      "retrato",
      "reunir",
      "revés",
      "revista",
      "rey",
      "rezar",
      "rico",
      "riego",
      "rienda",
      "riesgo",
      "rifa",
      "rígido",
      "rigor",
      "rincón",
      "riñón",
      "río",
      "riqueza",
      "risa",
      "ritmo",
      "rito",
      "rizo",
      "roble",
      "roce",
      "rociar",
      "rodar",
      "rodeo",
      "rodilla",
      "roer",
      "rojizo",
      "rojo",
      "romero",
      "romper",
      "ron",
      "ronco",
      "ronda",
      "ropa",
      "ropero",
      "rosa",
      "rosca",
      "rostro",
      "rotar",
      "rubí",
      "rubor",
      "rudo",
      "rueda",
      "rugir",
      "ruido",
      "ruina",
      "ruleta",
      "rulo",
      "rumbo",
      "rumor",
      "ruptura",
      "ruta",
      "rutina",
      "sábado",
      "saber",
      "sabio",
      "sable",
      "sacar",
      "sagaz",
      "sagrado",
      "sala",
      "saldo",
      "salero",
      "salir",
      "salmón",
      "salón",
      "salsa",
      "salto",
      "salud",
      "salvar",
      "samba",
      "sanción",
      "sandía",
      "sanear",
      "sangre",
      "sanidad",
      "sano",
      "santo",
      "sapo",
      "saque",
      "sardina",
      "sartén",
      "sastre",
      "satán",
      "sauna",
      "saxofón",
      "sección",
      "seco",
      "secreto",
      "secta",
      "sed",
      "seguir",
      "seis",
      "sello",
      "selva",
      "semana",
      "semilla",
      "senda",
      "sensor",
      "señal",
      "señor",
      "separar",
      "sepia",
      "sequía",
      "ser",
      "serie",
      "sermón",
      "servir",
      "sesenta",
      "sesión",
      "seta",
      "setenta",
      "severo",
      "sexo",
      "sexto",
      "sidra",
      "siesta",
      "siete",
      "siglo",
      "signo",
      "sílaba",
      "silbar",
      "silencio",
      "silla",
      "símbolo",
      "simio",
      "sirena",
      "sistema",
      "sitio",
      "situar",
      "sobre",
      "socio",
      "sodio",
      "sol",
      "solapa",
      "soldado",
      "soledad",
      "sólido",
      "soltar",
      "solución",
      "sombra",
      "sondeo",
      "sonido",
      "sonoro",
      "sonrisa",
      "sopa",
      "soplar",
      "soporte",
      "sordo",
      "sorpresa",
      "sorteo",
      "sostén",
      "sótano",
      "suave",
      "subir",
      "suceso",
      "sudor",
      "suegra",
      "suelo",
      "sueño",
      "suerte",
      "sufrir",
      "sujeto",
      "sultán",
      "sumar",
      "superar",
      "suplir",
      "suponer",
      "supremo",
      "sur",
      "surco",
      "sureño",
      "surgir",
      "susto",
      "sutil",
      "tabaco",
      "tabique",
      "tabla",
      "tabú",
      "taco",
      "tacto",
      "tajo",
      "talar",
      "talco",
      "talento",
      "talla",
      "talón",
      "tamaño",
      "tambor",
      "tango",
      "tanque",
      "tapa",
      "tapete",
      "tapia",
      "tapón",
      "taquilla",
      "tarde",
      "tarea",
      "tarifa",
      "tarjeta",
      "tarot",
      "tarro",
      "tarta",
      "tatuaje",
      "tauro",
      "taza",
      "tazón",
      "teatro",
      "techo",
      "tecla",
      "técnica",
      "tejado",
      "tejer",
      "tejido",
      "tela",
      "teléfono",
      "tema",
      "temor",
      "templo",
      "tenaz",
      "tender",
      "tener",
      "tenis",
      "tenso",
      "teoría",
      "terapia",
      "terco",
      "término",
      "ternura",
      "terror",
      "tesis",
      "tesoro",
      "testigo",
      "tetera",
      "texto",
      "tez",
      "tibio",
      "tiburón",
      "tiempo",
      "tienda",
      "tierra",
      "tieso",
      "tigre",
      "tijera",
      "tilde",
      "timbre",
      "tímido",
      "timo",
      "tinta",
      "tío",
      "típico",
      "tipo",
      "tira",
      "tirón",
      "titán",
      "títere",
      "título",
      "tiza",
      "toalla",
      "tobillo",
      "tocar",
      "tocino",
      "todo",
      "toga",
      "toldo",
      "tomar",
      "tono",
      "tonto",
      "topar",
      "tope",
      "toque",
      "tórax",
      "torero",
      "tormenta",
      "torneo",
      "toro",
      "torpedo",
      "torre",
      "torso",
      "tortuga",
      "tos",
      "tosco",
      "toser",
      "tóxico",
      "trabajo",
      "tractor",
      "traer",
      "tráfico",
      "trago",
      "traje",
      "tramo",
      "trance",
      "trato",
      "trauma",
      "trazar",
      "trébol",
      "tregua",
      "treinta",
      "tren",
      "trepar",
      "tres",
      "tribu",
      "trigo",
      "tripa",
      "triste",
      "triunfo",
      "trofeo",
      "trompa",
      "tronco",
      "tropa",
      "trote",
      "trozo",
      "truco",
      "trueno",
      "trufa",
      "tubería",
      "tubo",
      "tuerto",
      "tumba",
      "tumor",
      "túnel",
      "túnica",
      "turbina",
      "turismo",
      "turno",
      "tutor",
      "ubicar",
      "úlcera",
      "umbral",
      "unidad",
      "unir",
      "universo",
      "uno",
      "untar",
      "uña",
      "urbano",
      "urbe",
      "urgente",
      "urna",
      "usar",
      "usuario",
      "útil",
      "utopía",
      "uva",
      "vaca",
      "vacío",
      "vacuna",
      "vagar",
      "vago",
      "vaina",
      "vajilla",
      "vale",
      "válido",
      "valle",
      "valor",
      "válvula",
      "vampiro",
      "vara",
      "variar",
      "varón",
      "vaso",
      "vecino",
      "vector",
      "vehículo",
      "veinte",
      "vejez",
      "vela",
      "velero",
      "veloz",
      "vena",
      "vencer",
      "venda",
      "veneno",
      "vengar",
      "venir",
      "venta",
      "venus",
      "ver",
      "verano",
      "verbo",
      "verde",
      "vereda",
      "verja",
      "verso",
      "verter",
      "vía",
      "viaje",
      "vibrar",
      "vicio",
      "víctima",
      "vida",
      "vídeo",
      "vidrio",
      "viejo",
      "viernes",
      "vigor",
      "vil",
      "villa",
      "vinagre",
      "vino",
      "viñedo",
      "violín",
      "viral",
      "virgo",
      "virtud",
      "visor",
      "víspera",
      "vista",
      "vitamina",
      "viudo",
      "vivaz",
      "vivero",
      "vivir",
      "vivo",
      "volcán",
      "volumen",
      "volver",
      "voraz",
      "votar",
      "voto",
      "voz",
      "vuelo",
      "vulgar",
      "yacer",
      "yate",
      "yegua",
      "yema",
      "yerno",
      "yeso",
      "yodo",
      "yoga",
      "yogur",
      "zafiro",
      "zanja",
      "zapato",
      "zarza",
      "zona",
      "zorro",
      "zumo",
      "zurdo",
    ];
  },
]);
