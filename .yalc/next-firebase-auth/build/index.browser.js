/*! For license information please see index.browser.js.LICENSE.txt */
(() => {
  var e = {
      108: (e, t, r) => {
        var n = r(464),
          o = r(84);
        function i() {
          return new Date().getTime();
        }
        var s,
          u = Array.prototype.slice,
          a = {};
        s =
          void 0 !== r.g && r.g.console
            ? r.g.console
            : "undefined" != typeof window && window.console
            ? window.console
            : {};
        for (
          var f = [
              [function () {}, "log"],
              [
                function () {
                  s.log.apply(s, arguments);
                },
                "info",
              ],
              [
                function () {
                  s.log.apply(s, arguments);
                },
                "warn",
              ],
              [
                function () {
                  s.warn.apply(s, arguments);
                },
                "error",
              ],
              [
                function (e) {
                  a[e] = i();
                },
                "time",
              ],
              [
                function (e) {
                  var t = a[e];
                  if (!t) throw new Error("No such label: " + e);
                  delete a[e];
                  var r = i() - t;
                  s.log(e + ": " + r + "ms");
                },
                "timeEnd",
              ],
              [
                function () {
                  var e = new Error();
                  (e.name = "Trace"),
                    (e.message = n.format.apply(null, arguments)),
                    s.error(e.stack);
                },
                "trace",
              ],
              [
                function (e) {
                  s.log(n.inspect(e) + "\n");
                },
                "dir",
              ],
              [
                function (e) {
                  if (!e) {
                    var t = u.call(arguments, 1);
                    o.ok(!1, n.format.apply(null, t));
                  }
                },
                "assert",
              ],
            ],
            c = 0;
          c < f.length;
          c++
        ) {
          var h = f[c],
            l = h[0],
            p = h[1];
          s[p] || (s[p] = l);
        }
        e.exports = s;
      },
      933: (e, t, r) => {
        "use strict";
        var n = r(352)("cookies"),
          o = r(815),
          i = r(501),
          s = {},
          u = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
          a = /^(?:lax|none|strict)$/i;
        function f(e, t, r) {
          if (!(this instanceof f)) return new f(e, t, r);
          (this.secure = void 0),
            (this.request = e),
            (this.response = t),
            r &&
              (Array.isArray(r)
                ? (n('"keys" argument; provide using options {"keys": [...]}'),
                  (this.keys = new o(r)))
                : r.constructor && "Keygrip" === r.constructor.name
                ? (n('"keys" argument; provide using options {"keys": keygrip}'), (this.keys = r))
                : ((this.keys = Array.isArray(r.keys) ? new o(r.keys) : r.keys),
                  (this.secure = r.secure)));
        }
        function c(e, t, r) {
          if (!u.test(e)) throw new TypeError("argument name is invalid");
          if (t && !u.test(t)) throw new TypeError("argument value is invalid");
          for (var e in ((this.name = e), (this.value = t || ""), r)) this[e] = r[e];
          if (
            (this.value || ((this.expires = new Date(0)), (this.maxAge = null)),
            this.path && !u.test(this.path))
          )
            throw new TypeError("option path is invalid");
          if (this.domain && !u.test(this.domain)) throw new TypeError("option domain is invalid");
          if (this.sameSite && !0 !== this.sameSite && !a.test(this.sameSite))
            throw new TypeError("option sameSite is invalid");
        }
        function h(e, t) {
          if (t.overwrite)
            for (var r = e.length - 1; r >= 0; r--)
              0 === e[r].indexOf(t.name + "=") && e.splice(r, 1);
          e.push(t.toHeader());
        }
        (f.prototype.get = function (e, t) {
          var r,
            n,
            o,
            i,
            u,
            a,
            f = e + ".sig",
            c = t && void 0 !== t.signed ? t.signed : !!this.keys;
          if (
            (r = this.request.headers.cookie) &&
            ((n = r.match(
              (function (e) {
                return s[e]
                  ? s[e]
                  : (s[e] = new RegExp(
                      "(?:^|;) *" + e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "=([^;]*)"
                    ));
              })(e)
            )),
            n)
          ) {
            if (((o = n[1]), !t || !c)) return o;
            if ((i = this.get(f))) {
              if (((u = e + "=" + o), !this.keys))
                throw new Error(".keys required for signed cookies");
              if (!((a = this.keys.index(u, i)) < 0))
                return a && this.set(f, this.keys.sign(u), { signed: !1 }), o;
              this.set(f, null, { path: "/", signed: !1 });
            }
          }
        }),
          (f.prototype.set = function (e, t, r) {
            var o = this.response,
              s = this.request,
              u = o.getHeader("Set-Cookie") || [],
              a =
                void 0 !== this.secure
                  ? !!this.secure
                  : "https" === s.protocol || s.connection.encrypted,
              f = new c(e, t, r),
              l = r && void 0 !== r.signed ? r.signed : !!this.keys;
            if (("string" == typeof u && (u = [u]), !a && r && r.secure))
              throw new Error("Cannot send secure cookie over unencrypted connection");
            if (
              ((f.secure = r && void 0 !== r.secure ? r.secure : a),
              r &&
                "secureProxy" in r &&
                (n(
                  '"secureProxy" option; use "secure" option, provide "secure" to constructor if needed'
                ),
                (f.secure = r.secureProxy)),
              h(u, f),
              r && l)
            ) {
              if (!this.keys) throw new Error(".keys required for signed cookies");
              (f.value = this.keys.sign(f.toString())), (f.name += ".sig"), h(u, f);
            }
            return (
              (o.set ? i.OutgoingMessage.prototype.setHeader : o.setHeader).call(
                o,
                "Set-Cookie",
                u
              ),
              this
            );
          }),
          (c.prototype.path = "/"),
          (c.prototype.expires = void 0),
          (c.prototype.domain = void 0),
          (c.prototype.httpOnly = !0),
          (c.prototype.sameSite = !1),
          (c.prototype.secure = !1),
          (c.prototype.overwrite = !1),
          (c.prototype.toString = function () {
            return this.name + "=" + this.value;
          }),
          (c.prototype.toHeader = function () {
            var e = this.toString();
            return (
              this.maxAge && (this.expires = new Date(Date.now() + this.maxAge)),
              this.path && (e += "; path=" + this.path),
              this.expires && (e += "; expires=" + this.expires.toUTCString()),
              this.domain && (e += "; domain=" + this.domain),
              this.sameSite &&
                (e +=
                  "; samesite=" + (!0 === this.sameSite ? "strict" : this.sameSite.toLowerCase())),
              this.secure && (e += "; secure"),
              this.httpOnly && (e += "; httponly"),
              e
            );
          }),
          Object.defineProperty(c.prototype, "maxage", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return this.maxAge;
            },
            set: function (e) {
              return (this.maxAge = e);
            },
          }),
          n.property(c.prototype, "maxage", '"maxage"; use "maxAge" instead'),
          (f.connect = f.express =
            function (e) {
              return function (t, r, n) {
                (t.cookies = r.cookies = new f(t, r, { keys: e })), n();
              };
            }),
          (f.Cookie = c),
          (e.exports = f);
      },
      679: (e, t, r) => {
        "use strict";
        var n = r(469),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          s = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          u = {};
        function a(e) {
          return n.isMemo(e) ? s : u[e.$$typeof] || o;
        }
        (u[n.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (u[n.Memo] = s);
        var f = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          h = Object.getOwnPropertySymbols,
          l = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          d = Object.prototype;
        e.exports = function e(t, r, n) {
          if ("string" != typeof r) {
            if (d) {
              var o = p(r);
              o && o !== d && e(t, o, n);
            }
            var s = c(r);
            h && (s = s.concat(h(r)));
            for (var u = a(t), g = a(r), y = 0; y < s.length; ++y) {
              var m = s[y];
              if (!(i[m] || (n && n[m]) || (g && g[m]) || (u && u[m]))) {
                var b = l(r, m);
                try {
                  f(t, m, b);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      85: (e, t, r) => {
        "use strict";
        var n = r(108);
        const o = r(238),
          i = r(665),
          s =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (t.Buffer = f),
          (t.SlowBuffer = function (e) {
            return +e != e && (e = 0), f.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50);
        const u = 2147483647;
        function a(e) {
          if (e > u) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          const t = new Uint8Array(e);
          return Object.setPrototypeOf(t, f.prototype), t;
        }
        function f(e, t, r) {
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return l(e);
          }
          return c(e, t, r);
        }
        function c(e, t, r) {
          if ("string" == typeof e)
            return (function (e, t) {
              if ((("string" == typeof t && "" !== t) || (t = "utf8"), !f.isEncoding(t)))
                throw new TypeError("Unknown encoding: " + t);
              const r = 0 | y(e, t);
              let n = a(r);
              const o = n.write(e, t);
              return o !== r && (n = n.slice(0, o)), n;
            })(e, t);
          if (ArrayBuffer.isView(e))
            return (function (e) {
              if (Y(e, Uint8Array)) {
                const t = new Uint8Array(e);
                return d(t.buffer, t.byteOffset, t.byteLength);
              }
              return p(e);
            })(e);
          if (null == e)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e
            );
          if (Y(e, ArrayBuffer) || (e && Y(e.buffer, ArrayBuffer))) return d(e, t, r);
          if (
            "undefined" != typeof SharedArrayBuffer &&
            (Y(e, SharedArrayBuffer) || (e && Y(e.buffer, SharedArrayBuffer)))
          )
            return d(e, t, r);
          if ("number" == typeof e)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          const n = e.valueOf && e.valueOf();
          if (null != n && n !== e) return f.from(n, t, r);
          const o = (function (e) {
            if (f.isBuffer(e)) {
              const t = 0 | g(e.length),
                r = a(t);
              return 0 === r.length || e.copy(r, 0, 0, t), r;
            }
            return void 0 !== e.length
              ? "number" != typeof e.length || J(e.length)
                ? a(0)
                : p(e)
              : "Buffer" === e.type && Array.isArray(e.data)
              ? p(e.data)
              : void 0;
          })(e);
          if (o) return o;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof e[Symbol.toPrimitive]
          )
            return f.from(e[Symbol.toPrimitive]("string"), t, r);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        }
        function h(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
          if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        }
        function l(e) {
          return h(e), a(e < 0 ? 0 : 0 | g(e));
        }
        function p(e) {
          const t = e.length < 0 ? 0 : 0 | g(e.length),
            r = a(t);
          for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
          return r;
        }
        function d(e, t, r) {
          if (t < 0 || e.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (e.byteLength < t + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let n;
          return (
            (n =
              void 0 === t && void 0 === r
                ? new Uint8Array(e)
                : void 0 === r
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, r)),
            Object.setPrototypeOf(n, f.prototype),
            n
          );
        }
        function g(e) {
          if (e >= u)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes"
            );
          return 0 | e;
        }
        function y(e, t) {
          if (f.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || Y(e, ArrayBuffer)) return e.byteLength;
          if ("string" != typeof e)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof e
            );
          const r = e.length,
            n = arguments.length > 2 && !0 === arguments[2];
          if (!n && 0 === r) return 0;
          let o = !1;
          for (;;)
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
                return V(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return W(e).length;
              default:
                if (o) return n ? -1 : V(e).length;
                (t = ("" + t).toLowerCase()), (o = !0);
            }
        }
        function m(e, t, r) {
          let n = !1;
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
          if ((r >>>= 0) <= (t >>>= 0)) return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return B(this, t, r);
              case "utf8":
              case "utf-8":
                return I(this, t, r);
              case "ascii":
                return U(this, t, r);
              case "latin1":
              case "binary":
                return S(this, t, r);
              case "base64":
                return R(this, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return x(this, t, r);
              default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (n = !0);
            }
        }
        function b(e, t, r) {
          const n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function w(e, t, r, n, o) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            J((r = +r)) && (r = o ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (o) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!o) return -1;
            r = 0;
          }
          if (("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
            return 0 === t.length ? -1 : v(e, t, r, n, o);
          if ("number" == typeof t)
            return (
              (t &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? o
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : v(e, [t], r, n, o)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function v(e, t, r, n, o) {
          let i,
            s = 1,
            u = e.length,
            a = t.length;
          if (
            void 0 !== n &&
            ("ucs2" === (n = String(n).toLowerCase()) ||
              "ucs-2" === n ||
              "utf16le" === n ||
              "utf-16le" === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (s = 2), (u /= 2), (a /= 2), (r /= 2);
          }
          function f(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          if (o) {
            let n = -1;
            for (i = r; i < u; i++)
              if (f(e, i) === f(t, -1 === n ? 0 : i - n)) {
                if ((-1 === n && (n = i), i - n + 1 === a)) return n * s;
              } else -1 !== n && (i -= i - n), (n = -1);
          } else
            for (r + a > u && (r = u - a), i = r; i >= 0; i--) {
              let r = !0;
              for (let n = 0; n < a; n++)
                if (f(e, i + n) !== f(t, n)) {
                  r = !1;
                  break;
                }
              if (r) return i;
            }
          return -1;
        }
        function E(e, t, r, n) {
          r = Number(r) || 0;
          const o = e.length - r;
          n ? (n = Number(n)) > o && (n = o) : (n = o);
          const i = t.length;
          let s;
          for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
            const n = parseInt(t.substr(2 * s, 2), 16);
            if (J(n)) return s;
            e[r + s] = n;
          }
          return s;
        }
        function T(e, t, r, n) {
          return X(V(t, e.length - r), e, r, n);
        }
        function A(e, t, r, n) {
          return X(
            (function (e) {
              const t = [];
              for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
              return t;
            })(t),
            e,
            r,
            n
          );
        }
        function O(e, t, r, n) {
          return X(W(t), e, r, n);
        }
        function _(e, t, r, n) {
          return X(
            (function (e, t) {
              let r, n, o;
              const i = [];
              for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
                (r = e.charCodeAt(s)), (n = r >> 8), (o = r % 256), i.push(o), i.push(n);
              return i;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function R(e, t, r) {
          return 0 === t && r === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, r));
        }
        function I(e, t, r) {
          r = Math.min(e.length, r);
          const n = [];
          let o = t;
          for (; o < r; ) {
            const t = e[o];
            let i = null,
              s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (o + s <= r) {
              let r, n, u, a;
              switch (s) {
                case 1:
                  t < 128 && (i = t);
                  break;
                case 2:
                  (r = e[o + 1]),
                    128 == (192 & r) && ((a = ((31 & t) << 6) | (63 & r)), a > 127 && (i = a));
                  break;
                case 3:
                  (r = e[o + 1]),
                    (n = e[o + 2]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      ((a = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                      a > 2047 && (a < 55296 || a > 57343) && (i = a));
                  break;
                case 4:
                  (r = e[o + 1]),
                    (n = e[o + 2]),
                    (u = e[o + 3]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      128 == (192 & u) &&
                      ((a = ((15 & t) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & u)),
                      a > 65535 && a < 1114112 && (i = a));
              }
            }
            null === i
              ? ((i = 65533), (s = 1))
              : i > 65535 &&
                ((i -= 65536), n.push(((i >>> 10) & 1023) | 55296), (i = 56320 | (1023 & i))),
              n.push(i),
              (o += s);
          }
          return (function (e) {
            const t = e.length;
            if (t <= k) return String.fromCharCode.apply(String, e);
            let r = "",
              n = 0;
            for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += k)));
            return r;
          })(n);
        }
        (t.kMaxLength = u),
          (f.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const e = new Uint8Array(1),
                t = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(e, t),
                42 === e.foo()
              );
            } catch (e) {
              return !1;
            }
          })()),
          f.TYPED_ARRAY_SUPPORT ||
            void 0 === n ||
            "function" != typeof n.error ||
            n.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(f.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (f.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(f.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (f.isBuffer(this)) return this.byteOffset;
            },
          }),
          (f.poolSize = 8192),
          (f.from = function (e, t, r) {
            return c(e, t, r);
          }),
          Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(f, Uint8Array),
          (f.alloc = function (e, t, r) {
            return (function (e, t, r) {
              return (
                h(e),
                e <= 0
                  ? a(e)
                  : void 0 !== t
                  ? "string" == typeof r
                    ? a(e).fill(t, r)
                    : a(e).fill(t)
                  : a(e)
              );
            })(e, t, r);
          }),
          (f.allocUnsafe = function (e) {
            return l(e);
          }),
          (f.allocUnsafeSlow = function (e) {
            return l(e);
          }),
          (f.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== f.prototype;
          }),
          (f.compare = function (e, t) {
            if (
              (Y(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
              Y(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
              !f.isBuffer(e) || !f.isBuffer(t))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (e === t) return 0;
            let r = e.length,
              n = t.length;
            for (let o = 0, i = Math.min(r, n); o < i; ++o)
              if (e[o] !== t[o]) {
                (r = e[o]), (n = t[o]);
                break;
              }
            return r < n ? -1 : n < r ? 1 : 0;
          }),
          (f.isEncoding = function (e) {
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
          (f.concat = function (e, t) {
            if (!Array.isArray(e))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return f.alloc(0);
            let r;
            if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            const n = f.allocUnsafe(t);
            let o = 0;
            for (r = 0; r < e.length; ++r) {
              let t = e[r];
              if (Y(t, Uint8Array))
                o + t.length > n.length
                  ? (f.isBuffer(t) || (t = f.from(t)), t.copy(n, o))
                  : Uint8Array.prototype.set.call(n, t, o);
              else {
                if (!f.isBuffer(t))
                  throw new TypeError('"list" argument must be an Array of Buffers');
                t.copy(n, o);
              }
              o += t.length;
            }
            return n;
          }),
          (f.byteLength = y),
          (f.prototype._isBuffer = !0),
          (f.prototype.swap16 = function () {
            const e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) b(this, t, t + 1);
            return this;
          }),
          (f.prototype.swap32 = function () {
            const e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
            return this;
          }),
          (f.prototype.swap64 = function () {
            const e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8)
              b(this, t, t + 7),
                b(this, t + 1, t + 6),
                b(this, t + 2, t + 5),
                b(this, t + 3, t + 4);
            return this;
          }),
          (f.prototype.toString = function () {
            const e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : m.apply(this, arguments);
          }),
          (f.prototype.toLocaleString = f.prototype.toString),
          (f.prototype.equals = function (e) {
            if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === f.compare(this, e);
          }),
          (f.prototype.inspect = function () {
            let e = "";
            const r = t.INSPECT_MAX_BYTES;
            return (
              (e = this.toString("hex", 0, r)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > r && (e += " ... "),
              "<Buffer " + e + ">"
            );
          }),
          s && (f.prototype[s] = f.prototype.inspect),
          (f.prototype.compare = function (e, t, r, n, o) {
            if ((Y(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof e
              );
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = this.length),
              t < 0 || r > e.length || n < 0 || o > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= o && t >= r) return 0;
            if (n >= o) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            let i = (o >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (t >>>= 0);
            const u = Math.min(i, s),
              a = this.slice(n, o),
              c = e.slice(t, r);
            for (let e = 0; e < u; ++e)
              if (a[e] !== c[e]) {
                (i = a[e]), (s = c[e]);
                break;
              }
            return i < s ? -1 : s < i ? 1 : 0;
          }),
          (f.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }),
          (f.prototype.indexOf = function (e, t, r) {
            return w(this, e, t, r, !0);
          }),
          (f.prototype.lastIndexOf = function (e, t, r) {
            return w(this, e, t, r, !1);
          }),
          (f.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
            else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t >>>= 0),
                isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
            }
            const o = this.length - t;
            if (
              ((void 0 === r || r > o) && (r = o),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            let i = !1;
            for (;;)
              switch (n) {
                case "hex":
                  return E(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return T(this, e, t, r);
                case "ascii":
                case "latin1":
                case "binary":
                  return A(this, e, t, r);
                case "base64":
                  return O(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return _(this, e, t, r);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (i = !0);
              }
          }),
          (f.prototype.toJSON = function () {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        const k = 4096;
        function U(e, t, r) {
          let n = "";
          r = Math.min(e.length, r);
          for (let o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
          return n;
        }
        function S(e, t, r) {
          let n = "";
          r = Math.min(e.length, r);
          for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
          return n;
        }
        function B(e, t, r) {
          const n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          let o = "";
          for (let n = t; n < r; ++n) o += Z[e[n]];
          return o;
        }
        function x(e, t, r) {
          const n = e.slice(t, r);
          let o = "";
          for (let e = 0; e < n.length - 1; e += 2) o += String.fromCharCode(n[e] + 256 * n[e + 1]);
          return o;
        }
        function C(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
        }
        function P(e, t, r, n, o, i) {
          if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function L(e, t, r, n, o) {
          F(t, n, o, e, r, 7);
          let i = Number(t & BigInt(4294967295));
          (e[r++] = i), (i >>= 8), (e[r++] = i), (i >>= 8), (e[r++] = i), (i >>= 8), (e[r++] = i);
          let s = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (
            (e[r++] = s),
            (s >>= 8),
            (e[r++] = s),
            (s >>= 8),
            (e[r++] = s),
            (s >>= 8),
            (e[r++] = s),
            r
          );
        }
        function D(e, t, r, n, o) {
          F(t, n, o, e, r, 7);
          let i = Number(t & BigInt(4294967295));
          (e[r + 7] = i),
            (i >>= 8),
            (e[r + 6] = i),
            (i >>= 8),
            (e[r + 5] = i),
            (i >>= 8),
            (e[r + 4] = i);
          let s = Number((t >> BigInt(32)) & BigInt(4294967295));
          return (
            (e[r + 3] = s),
            (s >>= 8),
            (e[r + 2] = s),
            (s >>= 8),
            (e[r + 1] = s),
            (s >>= 8),
            (e[r] = s),
            r + 8
          );
        }
        function j(e, t, r, n, o, i) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function N(e, t, r, n, o) {
          return (t = +t), (r >>>= 0), o || j(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
        }
        function q(e, t, r, n, o) {
          return (t = +t), (r >>>= 0), o || j(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
        }
        (f.prototype.slice = function (e, t) {
          const r = this.length;
          (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
          const n = this.subarray(e, t);
          return Object.setPrototypeOf(n, f.prototype), n;
        }),
          (f.prototype.readUintLE = f.prototype.readUIntLE =
            function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
              let n = this[e],
                o = 1,
                i = 0;
              for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
              return n;
            }),
          (f.prototype.readUintBE = f.prototype.readUIntBE =
            function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
              let n = this[e + --t],
                o = 1;
              for (; t > 0 && (o *= 256); ) n += this[e + --t] * o;
              return n;
            }),
          (f.prototype.readUint8 = f.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || C(e, 1, this.length), this[e];
            }),
          (f.prototype.readUint16LE = f.prototype.readUInt16LE =
            function (e, t) {
              return (e >>>= 0), t || C(e, 2, this.length), this[e] | (this[e + 1] << 8);
            }),
          (f.prototype.readUint16BE = f.prototype.readUInt16BE =
            function (e, t) {
              return (e >>>= 0), t || C(e, 2, this.length), (this[e] << 8) | this[e + 1];
            }),
          (f.prototype.readUint32LE = f.prototype.readUInt32LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || C(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
              );
            }),
          (f.prototype.readUint32BE = f.prototype.readUInt32BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || C(e, 4, this.length),
                16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
          (f.prototype.readBigUInt64LE = Q(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || G(e, this.length - 8);
            const n = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              o = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
            return BigInt(n) + (BigInt(o) << BigInt(32));
          })),
          (f.prototype.readBigUInt64BE = Q(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || G(e, this.length - 8);
            const n = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              o = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(o);
          })),
          (f.prototype.readIntLE = function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
            let n = this[e],
              o = 1,
              i = 0;
            for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
            return (o *= 128), n >= o && (n -= Math.pow(2, 8 * t)), n;
          }),
          (f.prototype.readIntBE = function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || C(e, t, this.length);
            let n = t,
              o = 1,
              i = this[e + --n];
            for (; n > 0 && (o *= 256); ) i += this[e + --n] * o;
            return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i;
          }),
          (f.prototype.readInt8 = function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (f.prototype.readInt16LE = function (e, t) {
            (e >>>= 0), t || C(e, 2, this.length);
            const r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt16BE = function (e, t) {
            (e >>>= 0), t || C(e, 2, this.length);
            const r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt32LE = function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 4, this.length),
              this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
            );
          }),
          (f.prototype.readInt32BE = function (e, t) {
            return (
              (e >>>= 0),
              t || C(e, 4, this.length),
              (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
            );
          }),
          (f.prototype.readBigInt64LE = Q(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || G(e, this.length - 8);
            const n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
            );
          })),
          (f.prototype.readBigInt64BE = Q(function (e) {
            z((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || G(e, this.length - 8);
            const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r)
            );
          })),
          (f.prototype.readFloatLE = function (e, t) {
            return (e >>>= 0), t || C(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (f.prototype.readFloatBE = function (e, t) {
            return (e >>>= 0), t || C(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (f.prototype.readDoubleLE = function (e, t) {
            return (e >>>= 0), t || C(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (f.prototype.readDoubleBE = function (e, t) {
            return (e >>>= 0), t || C(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (f.prototype.writeUintLE = f.prototype.writeUIntLE =
            function (e, t, r, n) {
              (e = +e), (t >>>= 0), (r >>>= 0), n || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
              let o = 1,
                i = 0;
              for (this[t] = 255 & e; ++i < r && (o *= 256); ) this[t + i] = (e / o) & 255;
              return t + r;
            }),
          (f.prototype.writeUintBE = f.prototype.writeUIntBE =
            function (e, t, r, n) {
              (e = +e), (t >>>= 0), (r >>>= 0), n || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
              let o = r - 1,
                i = 1;
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); ) this[t + o] = (e / i) & 255;
              return t + r;
            }),
          (f.prototype.writeUint8 = f.prototype.writeUInt8 =
            function (e, t, r) {
              return (
                (e = +e), (t >>>= 0), r || P(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1
              );
            }),
          (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 2, 65535, 0),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
          (f.prototype.writeUint16BE = f.prototype.writeUInt16BE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 2, 65535, 0),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
          (f.prototype.writeUint32LE = f.prototype.writeUInt32LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 4, 4294967295, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              );
            }),
          (f.prototype.writeUint32BE = f.prototype.writeUInt32BE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || P(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
          (f.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
            return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (f.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
            return D(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (f.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              P(this, e, t, r, n - 1, -n);
            }
            let o = 0,
              i = 1,
              s = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                (this[t + o] = (((e / i) >> 0) - s) & 255);
            return t + r;
          }),
          (f.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              P(this, e, t, r, n - 1, -n);
            }
            let o = r - 1,
              i = 1,
              s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                (this[t + o] = (((e / i) >> 0) - s) & 255);
            return t + r;
          }),
          (f.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || P(this, e, t, 1, 127, -128),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (f.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || P(this, e, t, 2, 32767, -32768),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
          (f.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || P(this, e, t, 2, 32767, -32768),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
          (f.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || P(this, e, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24),
              t + 4
            );
          }),
          (f.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || P(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
          (f.prototype.writeBigInt64LE = Q(function (e, t = 0) {
            return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })),
          (f.prototype.writeBigInt64BE = Q(function (e, t = 0) {
            return D(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })),
          (f.prototype.writeFloatLE = function (e, t, r) {
            return N(this, e, t, !0, r);
          }),
          (f.prototype.writeFloatBE = function (e, t, r) {
            return N(this, e, t, !1, r);
          }),
          (f.prototype.writeDoubleLE = function (e, t, r) {
            return q(this, e, t, !0, r);
          }),
          (f.prototype.writeDoubleBE = function (e, t, r) {
            return q(this, e, t, !1, r);
          }),
          (f.prototype.copy = function (e, t, r, n) {
            if (!f.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              n > 0 && n < r && (n = r),
              n === r)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            const o = n - r;
            return (
              this === e && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, r, n)
                : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
              o
            );
          }),
          (f.prototype.fill = function (e, t, r, n) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : "string" == typeof r && ((n = r), (r = this.length)),
                void 0 !== n && "string" != typeof n)
              )
                throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !f.isEncoding(n))
                throw new TypeError("Unknown encoding: " + n);
              if (1 === e.length) {
                const t = e.charCodeAt(0);
                (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
              }
            } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < r)
              throw new RangeError("Out of range index");
            if (r <= t) return this;
            let o;
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (o = t; o < r; ++o) this[o] = e;
            else {
              const i = f.isBuffer(e) ? e : f.from(e, n),
                s = i.length;
              if (0 === s)
                throw new TypeError('The value "' + e + '" is invalid for argument "value"');
              for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
            }
            return this;
          });
        const H = {};
        function M(e, t, r) {
          H[e] = class extends r {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: t.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${e}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return e;
            }
            set code(e) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${e}]: ${this.message}`;
            }
          };
        }
        function $(e) {
          let t = "",
            r = e.length;
          const n = "-" === e[0] ? 1 : 0;
          for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
          return `${e.slice(0, r)}${t}`;
        }
        function F(e, t, r, n, o, i) {
          if (e > r || e < t) {
            const n = "bigint" == typeof t ? "n" : "";
            let o;
            throw (
              ((o =
                i > 3
                  ? 0 === t || t === BigInt(0)
                    ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
                    : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${8 * (i + 1) - 1}${n}`
                  : `>= ${t}${n} and <= ${r}${n}`),
              new H.ERR_OUT_OF_RANGE("value", o, e))
            );
          }
          !(function (e, t, r) {
            z(t, "offset"), (void 0 !== e[t] && void 0 !== e[t + r]) || G(t, e.length - (r + 1));
          })(n, o, i);
        }
        function z(e, t) {
          if ("number" != typeof e) throw new H.ERR_INVALID_ARG_TYPE(t, "number", e);
        }
        function G(e, t, r) {
          if (Math.floor(e) !== e)
            throw (z(e, r), new H.ERR_OUT_OF_RANGE(r || "offset", "an integer", e));
          if (t < 0) throw new H.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new H.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
        }
        M(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (e) {
            return e
              ? `${e} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          M(
            "ERR_INVALID_ARG_TYPE",
            function (e, t) {
              return `The "${e}" argument must be of type number. Received type ${typeof t}`;
            },
            TypeError
          ),
          M(
            "ERR_OUT_OF_RANGE",
            function (e, t, r) {
              let n = `The value of "${e}" is out of range.`,
                o = r;
              return (
                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                  ? (o = $(String(r)))
                  : "bigint" == typeof r &&
                    ((o = String(r)),
                    (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = $(o)),
                    (o += "n")),
                (n += ` It must be ${t}. Received ${o}`),
                n
              );
            },
            RangeError
          );
        const K = /[^+/0-9A-Za-z-_]/g;
        function V(e, t) {
          let r;
          t = t || 1 / 0;
          const n = e.length;
          let o = null;
          const i = [];
          for (let s = 0; s < n; ++s) {
            if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
              if (!o) {
                if (r > 56319) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (t -= 3) > -1 && i.push(239, 191, 189);
                  continue;
                }
                o = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
                continue;
              }
              r = 65536 + (((o - 55296) << 10) | (r - 56320));
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (((o = null), r < 128)) {
              if ((t -= 1) < 0) break;
              i.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              i.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              i.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return i;
        }
        function W(e) {
          return o.toByteArray(
            (function (e) {
              if ((e = (e = e.split("=")[0]).trim().replace(K, "")).length < 2) return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function X(e, t, r, n) {
          let o;
          for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
          return o;
        }
        function Y(e, t) {
          return (
            e instanceof t ||
            (null != e &&
              null != e.constructor &&
              null != e.constructor.name &&
              e.constructor.name === t.name)
          );
        }
        function J(e) {
          return e != e;
        }
        const Z = (function () {
          const e = "0123456789abcdef",
            t = new Array(256);
          for (let r = 0; r < 16; ++r) {
            const n = 16 * r;
            for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
          }
          return t;
        })();
        function Q(e) {
          return "undefined" == typeof BigInt ? ee : e;
        }
        function ee() {
          throw new Error("BigInt not supported");
        }
      },
      155: (e) => {
        var t,
          r,
          n = (e.exports = {});
        function o() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === o || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (r) {
            try {
              return t.call(null, e, 0);
            } catch (r) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : o;
          } catch (e) {
            t = o;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : i;
          } catch (e) {
            r = i;
          }
        })();
        var u,
          a = [],
          f = !1,
          c = -1;
        function h() {
          f && u && ((f = !1), u.length ? (a = u.concat(a)) : (c = -1), a.length && l());
        }
        function l() {
          if (!f) {
            var e = s(h);
            f = !0;
            for (var t = a.length; t; ) {
              for (u = a, a = []; ++c < t; ) u && u[c].run();
              (c = -1), (t = a.length);
            }
            (u = null),
              (f = !1),
              (function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                try {
                  r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              })(e);
          }
        }
        function p(e, t) {
          (this.fun = e), (this.array = t);
        }
        function d() {}
        (n.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          a.push(new p(e, t)), 1 !== a.length || f || s(l);
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
          (n.on = d),
          (n.addListener = d),
          (n.once = d),
          (n.off = d),
          (n.removeListener = d),
          (n.removeAllListeners = d),
          (n.emit = d),
          (n.prependListener = d),
          (n.prependOnceListener = d),
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
      501: (e, t, r) => {
        var n = r(989),
          o = r(676),
          i = r(170),
          s = r(405),
          u = r(269),
          a = t;
        (a.request = function (e, t) {
          e = "string" == typeof e ? u.parse(e) : i(e);
          var o = -1 === r.g.location.protocol.search(/^https?:$/) ? "http:" : "",
            s = e.protocol || o,
            a = e.hostname || e.host,
            f = e.port,
            c = e.path || "/";
          a && -1 !== a.indexOf(":") && (a = "[" + a + "]"),
            (e.url = (a ? s + "//" + a : "") + (f ? ":" + f : "") + c),
            (e.method = (e.method || "GET").toUpperCase()),
            (e.headers = e.headers || {});
          var h = new n(e);
          return t && h.on("response", t), h;
        }),
          (a.get = function (e, t) {
            var r = a.request(e, t);
            return r.end(), r;
          }),
          (a.ClientRequest = n),
          (a.IncomingMessage = o.IncomingMessage),
          (a.Agent = function () {}),
          (a.Agent.defaultMaxSockets = 4),
          (a.globalAgent = new a.Agent()),
          (a.STATUS_CODES = s),
          (a.METHODS = [
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "REPORT",
            "SEARCH",
            "SUBSCRIBE",
            "TRACE",
            "UNLOCK",
            "UNSUBSCRIBE",
          ]);
      },
      725: (e, t, r) => {
        var n;
        function o() {
          if (void 0 !== n) return n;
          if (r.g.XMLHttpRequest) {
            n = new r.g.XMLHttpRequest();
            try {
              n.open("GET", r.g.XDomainRequest ? "/" : "https://example.com");
            } catch (e) {
              n = null;
            }
          } else n = null;
          return n;
        }
        function i(e) {
          var t = o();
          if (!t) return !1;
          try {
            return (t.responseType = e), t.responseType === e;
          } catch (e) {}
          return !1;
        }
        function s(e) {
          return "function" == typeof e;
        }
        (t.fetch = s(r.g.fetch) && s(r.g.ReadableStream)),
          (t.writableStream = s(r.g.WritableStream)),
          (t.abortController = s(r.g.AbortController)),
          (t.arraybuffer = t.fetch || i("arraybuffer")),
          (t.msstream = !t.fetch && i("ms-stream")),
          (t.mozchunkedarraybuffer = !t.fetch && i("moz-chunked-arraybuffer")),
          (t.overrideMimeType = t.fetch || (!!o() && s(o().overrideMimeType))),
          (n = null);
      },
      989: (e, t, r) => {
        var n = r(85).Buffer,
          o = r(155),
          i = r(725),
          s = r(766),
          u = r(676),
          a = r(248),
          f = u.IncomingMessage,
          c = u.readyStates,
          h = (e.exports = function (e) {
            var t,
              r = this;
            a.Writable.call(r),
              (r._opts = e),
              (r._body = []),
              (r._headers = {}),
              e.auth && r.setHeader("Authorization", "Basic " + n.from(e.auth).toString("base64")),
              Object.keys(e.headers).forEach(function (t) {
                r.setHeader(t, e.headers[t]);
              });
            var o = !0;
            if ("disable-fetch" === e.mode || ("requestTimeout" in e && !i.abortController))
              (o = !1), (t = !0);
            else if ("prefer-streaming" === e.mode) t = !1;
            else if ("allow-wrong-content-type" === e.mode) t = !i.overrideMimeType;
            else {
              if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode)
                throw new Error("Invalid value for opts.mode");
              t = !0;
            }
            (r._mode = (function (e, t) {
              return i.fetch && t
                ? "fetch"
                : i.mozchunkedarraybuffer
                ? "moz-chunked-arraybuffer"
                : i.msstream
                ? "ms-stream"
                : i.arraybuffer && e
                ? "arraybuffer"
                : "text";
            })(t, o)),
              (r._fetchTimer = null),
              (r._socketTimeout = null),
              (r._socketTimer = null),
              r.on("finish", function () {
                r._onFinish();
              });
          });
        s(h, a.Writable),
          (h.prototype.setHeader = function (e, t) {
            var r = e.toLowerCase();
            -1 === l.indexOf(r) && (this._headers[r] = { name: e, value: t });
          }),
          (h.prototype.getHeader = function (e) {
            var t = this._headers[e.toLowerCase()];
            return t ? t.value : null;
          }),
          (h.prototype.removeHeader = function (e) {
            delete this._headers[e.toLowerCase()];
          }),
          (h.prototype._onFinish = function () {
            var e = this;
            if (!e._destroyed) {
              var t = e._opts;
              "timeout" in t && 0 !== t.timeout && e.setTimeout(t.timeout);
              var n = e._headers,
                s = null;
              "GET" !== t.method &&
                "HEAD" !== t.method &&
                (s = new Blob(e._body, { type: (n["content-type"] || {}).value || "" }));
              var u = [];
              if (
                (Object.keys(n).forEach(function (e) {
                  var t = n[e].name,
                    r = n[e].value;
                  Array.isArray(r)
                    ? r.forEach(function (e) {
                        u.push([t, e]);
                      })
                    : u.push([t, r]);
                }),
                "fetch" === e._mode)
              ) {
                var a = null;
                if (i.abortController) {
                  var f = new AbortController();
                  (a = f.signal),
                    (e._fetchAbortController = f),
                    "requestTimeout" in t &&
                      0 !== t.requestTimeout &&
                      (e._fetchTimer = r.g.setTimeout(function () {
                        e.emit("requestTimeout"),
                          e._fetchAbortController && e._fetchAbortController.abort();
                      }, t.requestTimeout));
                }
                r.g
                  .fetch(e._opts.url, {
                    method: e._opts.method,
                    headers: u,
                    body: s || void 0,
                    mode: "cors",
                    credentials: t.withCredentials ? "include" : "same-origin",
                    signal: a,
                  })
                  .then(
                    function (t) {
                      (e._fetchResponse = t), e._resetTimers(!1), e._connect();
                    },
                    function (t) {
                      e._resetTimers(!0), e._destroyed || e.emit("error", t);
                    }
                  );
              } else {
                var h = (e._xhr = new r.g.XMLHttpRequest());
                try {
                  h.open(e._opts.method, e._opts.url, !0);
                } catch (t) {
                  return void o.nextTick(function () {
                    e.emit("error", t);
                  });
                }
                "responseType" in h && (h.responseType = e._mode),
                  "withCredentials" in h && (h.withCredentials = !!t.withCredentials),
                  "text" === e._mode &&
                    "overrideMimeType" in h &&
                    h.overrideMimeType("text/plain; charset=x-user-defined"),
                  "requestTimeout" in t &&
                    ((h.timeout = t.requestTimeout),
                    (h.ontimeout = function () {
                      e.emit("requestTimeout");
                    })),
                  u.forEach(function (e) {
                    h.setRequestHeader(e[0], e[1]);
                  }),
                  (e._response = null),
                  (h.onreadystatechange = function () {
                    switch (h.readyState) {
                      case c.LOADING:
                      case c.DONE:
                        e._onXHRProgress();
                    }
                  }),
                  "moz-chunked-arraybuffer" === e._mode &&
                    (h.onprogress = function () {
                      e._onXHRProgress();
                    }),
                  (h.onerror = function () {
                    e._destroyed || (e._resetTimers(!0), e.emit("error", new Error("XHR error")));
                  });
                try {
                  h.send(s);
                } catch (t) {
                  return void o.nextTick(function () {
                    e.emit("error", t);
                  });
                }
              }
            }
          }),
          (h.prototype._onXHRProgress = function () {
            var e = this;
            e._resetTimers(!1),
              (function (e) {
                try {
                  var t = e.status;
                  return null !== t && 0 !== t;
                } catch (e) {
                  return !1;
                }
              })(e._xhr) &&
                !e._destroyed &&
                (e._response || e._connect(), e._response._onXHRProgress(e._resetTimers.bind(e)));
          }),
          (h.prototype._connect = function () {
            var e = this;
            e._destroyed ||
              ((e._response = new f(e._xhr, e._fetchResponse, e._mode, e._resetTimers.bind(e))),
              e._response.on("error", function (t) {
                e.emit("error", t);
              }),
              e.emit("response", e._response));
          }),
          (h.prototype._write = function (e, t, r) {
            this._body.push(e), r();
          }),
          (h.prototype._resetTimers = function (e) {
            var t = this;
            r.g.clearTimeout(t._socketTimer),
              (t._socketTimer = null),
              e
                ? (r.g.clearTimeout(t._fetchTimer), (t._fetchTimer = null))
                : t._socketTimeout &&
                  (t._socketTimer = r.g.setTimeout(function () {
                    t.emit("timeout");
                  }, t._socketTimeout));
          }),
          (h.prototype.abort = h.prototype.destroy =
            function (e) {
              var t = this;
              (t._destroyed = !0),
                t._resetTimers(!0),
                t._response && (t._response._destroyed = !0),
                t._xhr
                  ? t._xhr.abort()
                  : t._fetchAbortController && t._fetchAbortController.abort(),
                e && t.emit("error", e);
            }),
          (h.prototype.end = function (e, t, r) {
            "function" == typeof e && ((r = e), (e = void 0)),
              a.Writable.prototype.end.call(this, e, t, r);
          }),
          (h.prototype.setTimeout = function (e, t) {
            var r = this;
            t && r.once("timeout", t), (r._socketTimeout = e), r._resetTimers(!1);
          }),
          (h.prototype.flushHeaders = function () {}),
          (h.prototype.setNoDelay = function () {}),
          (h.prototype.setSocketKeepAlive = function () {});
        var l = [
          "accept-charset",
          "accept-encoding",
          "access-control-request-headers",
          "access-control-request-method",
          "connection",
          "content-length",
          "cookie",
          "cookie2",
          "date",
          "dnt",
          "expect",
          "host",
          "keep-alive",
          "origin",
          "referer",
          "te",
          "trailer",
          "transfer-encoding",
          "upgrade",
          "via",
        ];
      },
      676: (e, t, r) => {
        var n = r(155),
          o = r(85).Buffer,
          i = r(725),
          s = r(766),
          u = r(248),
          a = (t.readyStates = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 }),
          f = (t.IncomingMessage = function (e, t, r, s) {
            var a = this;
            if (
              (u.Readable.call(a),
              (a._mode = r),
              (a.headers = {}),
              (a.rawHeaders = []),
              (a.trailers = {}),
              (a.rawTrailers = []),
              a.on("end", function () {
                n.nextTick(function () {
                  a.emit("close");
                });
              }),
              "fetch" === r)
            ) {
              if (
                ((a._fetchResponse = t),
                (a.url = t.url),
                (a.statusCode = t.status),
                (a.statusMessage = t.statusText),
                t.headers.forEach(function (e, t) {
                  (a.headers[t.toLowerCase()] = e), a.rawHeaders.push(t, e);
                }),
                i.writableStream)
              ) {
                var f = new WritableStream({
                  write: function (e) {
                    return (
                      s(!1),
                      new Promise(function (t, r) {
                        a._destroyed ? r() : a.push(o.from(e)) ? t() : (a._resumeFetch = t);
                      })
                    );
                  },
                  close: function () {
                    s(!0), a._destroyed || a.push(null);
                  },
                  abort: function (e) {
                    s(!0), a._destroyed || a.emit("error", e);
                  },
                });
                try {
                  return void t.body.pipeTo(f).catch(function (e) {
                    s(!0), a._destroyed || a.emit("error", e);
                  });
                } catch (e) {}
              }
              var c = t.body.getReader();
              !(function e() {
                c.read()
                  .then(function (t) {
                    a._destroyed ||
                      (s(t.done), t.done ? a.push(null) : (a.push(o.from(t.value)), e()));
                  })
                  .catch(function (e) {
                    s(!0), a._destroyed || a.emit("error", e);
                  });
              })();
            } else if (
              ((a._xhr = e),
              (a._pos = 0),
              (a.url = e.responseURL),
              (a.statusCode = e.status),
              (a.statusMessage = e.statusText),
              e
                .getAllResponseHeaders()
                .split(/\r?\n/)
                .forEach(function (e) {
                  var t = e.match(/^([^:]+):\s*(.*)/);
                  if (t) {
                    var r = t[1].toLowerCase();
                    "set-cookie" === r
                      ? (void 0 === a.headers[r] && (a.headers[r] = []), a.headers[r].push(t[2]))
                      : void 0 !== a.headers[r]
                      ? (a.headers[r] += ", " + t[2])
                      : (a.headers[r] = t[2]),
                      a.rawHeaders.push(t[1], t[2]);
                  }
                }),
              (a._charset = "x-user-defined"),
              !i.overrideMimeType)
            ) {
              var h = a.rawHeaders["mime-type"];
              if (h) {
                var l = h.match(/;\s*charset=([^;])(;|$)/);
                l && (a._charset = l[1].toLowerCase());
              }
              a._charset || (a._charset = "utf-8");
            }
          });
        s(f, u.Readable),
          (f.prototype._read = function () {
            var e = this._resumeFetch;
            e && ((this._resumeFetch = null), e());
          }),
          (f.prototype._onXHRProgress = function (e) {
            var t = this,
              n = t._xhr,
              i = null;
            switch (t._mode) {
              case "text":
                if ((i = n.responseText).length > t._pos) {
                  var s = i.substr(t._pos);
                  if ("x-user-defined" === t._charset) {
                    for (var u = o.alloc(s.length), f = 0; f < s.length; f++)
                      u[f] = 255 & s.charCodeAt(f);
                    t.push(u);
                  } else t.push(s, t._charset);
                  t._pos = i.length;
                }
                break;
              case "arraybuffer":
                if (n.readyState !== a.DONE || !n.response) break;
                (i = n.response), t.push(o.from(new Uint8Array(i)));
                break;
              case "moz-chunked-arraybuffer":
                if (((i = n.response), n.readyState !== a.LOADING || !i)) break;
                t.push(o.from(new Uint8Array(i)));
                break;
              case "ms-stream":
                if (((i = n.response), n.readyState !== a.LOADING)) break;
                var c = new r.g.MSStreamReader();
                (c.onprogress = function () {
                  c.result.byteLength > t._pos &&
                    (t.push(o.from(new Uint8Array(c.result.slice(t._pos)))),
                    (t._pos = c.result.byteLength));
                }),
                  (c.onload = function () {
                    e(!0), t.push(null);
                  }),
                  c.readAsArrayBuffer(i);
            }
            t._xhr.readyState === a.DONE && "ms-stream" !== t._mode && (e(!0), t.push(null));
          });
      },
      84: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      238: (e) => {
        "use strict";
        e.exports = require("base64-js");
      },
      405: (e) => {
        "use strict";
        e.exports = require("builtin-status-codes");
      },
      352: (e) => {
        "use strict";
        e.exports = require("depd");
      },
      324: (e) => {
        "use strict";
        e.exports = require("firebase/app");
      },
      610: (e) => {
        "use strict";
        e.exports = require("firebase/auth");
      },
      665: (e) => {
        "use strict";
        e.exports = require("ieee754");
      },
      766: (e) => {
        "use strict";
        e.exports = require("inherits");
      },
      815: (e) => {
        "use strict";
        e.exports = require("keygrip");
      },
      469: (e) => {
        "use strict";
        e.exports = require("react-is");
      },
      248: (e) => {
        "use strict";
        e.exports = require("readable-stream");
      },
      269: (e) => {
        "use strict";
        e.exports = require("url");
      },
      464: (e) => {
        "use strict";
        e.exports = require("util");
      },
      170: (e) => {
        "use strict";
        e.exports = require("xtend");
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var n = {};
  (() => {
    "use strict";
    r.d(n, { default: () => ne });
    const e = require("@babel/runtime/helpers/objectWithoutProperties");
    var t = r.n(e);
    const o = require("@babel/runtime/helpers/defineProperty");
    var i = r.n(o);
    const s = () => "undefined" != typeof window;
    var u = r(108),
      a = !1,
      f = (e) => {
        a = e;
      };
    const c = function () {
      if (a) {
        for (
          var e = s()
              ? [
                  "%cnext-firebase-auth",
                  "background: #ffa000; color: #fff; border-radius: 2px; padding: 2px 6px",
                ]
              : ["next-firebase-auth:"],
            t = arguments.length,
            r = new Array(t),
            n = 0;
          n < t;
          n++
        )
          r[n] = arguments[n];
        u.log(...e, ...r);
      }
    };
    var h,
      l = r(155),
      p = ["cookies"];
    function d(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(r), !0).forEach(function (t) {
              i()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : d(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var y = 12096e5,
      m = {
        debug: !1,
        loginAPIEndpoint: void 0,
        logoutAPIEndpoint: void 0,
        onLoginRequestError: void 0,
        onLogoutRequestError: void 0,
        tokenChangedHandler: void 0,
        onVerifyTokenError: () => {},
        onTokenRefreshError: () => {},
        authPageURL: void 0,
        appPageURL: void 0,
        firebaseAdminInitConfig: void 0,
        firebaseClientInitConfig: void 0,
        firebaseAuthEmulatorHost: void 0,
        cookies: {
          name: void 0,
          keys: void 0,
          domain: void 0,
          httpOnly: !0,
          maxAge: 6048e5,
          overwrite: !0,
          path: "/",
          sameSite: "strict",
          secure: !0,
          signed: !0,
        },
      },
      b = (e) => {
        var t = [];
        e.tokenChangedHandler
          ? (e.loginAPIEndpoint &&
              t.push(
                'The "loginAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'
              ),
            e.logoutAPIEndpoint &&
              t.push(
                'The "logoutAPIEndpoint" setting should not be set if you are using a "tokenChangedHandler".'
              ),
            e.onLoginRequestError &&
              t.push(
                'The "onLoginRequestError" setting should not be set if you are using a "tokenChangedHandler".'
              ),
            e.onLogoutRequestError &&
              t.push(
                'The "onLogoutRequestError" setting should not be set if you are using a "tokenChangedHandler".'
              ))
          : (e.loginAPIEndpoint || t.push('The "loginAPIEndpoint" setting is required.'),
            e.logoutAPIEndpoint || t.push('The "logoutAPIEndpoint" setting is required.')),
          (e.firebaseClientInitConfig && e.firebaseClientInitConfig.apiKey) ||
            t.push('The "firebaseClientInitConfig.apiKey" value is required.'),
          e.firebaseAuthEmulatorHost &&
            e.firebaseAuthEmulatorHost.startsWith("http") &&
            t.push(
              "The firebaseAuthEmulatorHost should be set without a prefix (e.g., localhost:9099)"
            );
        var r = ["function", "undefined"];
        r.indexOf(typeof e.onVerifyTokenError) < 0 &&
          t.push(
            'Invalid next-firebase-auth options: The "onVerifyTokenError" setting must be a function.'
          ),
          r.indexOf(typeof e.onTokenRefreshError) < 0 &&
            t.push(
              'Invalid next-firebase-auth options: The "onTokenRefreshError" setting must be a function.'
            ),
          r.indexOf(typeof e.onLoginRequestError) < 0 &&
            t.push(
              'Invalid next-firebase-auth options: The "onLoginRequestError" setting must be a function.'
            ),
          r.indexOf(typeof e.onLogoutRequestError) < 0 &&
            t.push(
              'Invalid next-firebase-auth options: The "onLogoutRequestError" setting must be a function.'
            );
        var { keys: n } = e.cookies,
          o = n && n.length && (!n.filter || n.filter((e) => void 0 !== e).length);
        return (
          s()
            ? (e.firebaseAdminInitConfig &&
                e.firebaseAdminInitConfig.credential &&
                e.firebaseAdminInitConfig.credential.privateKey &&
                t.push(
                  'The "firebaseAdminInitConfig" private key setting should not be available on the client side.'
                ),
              o && t.push('The "cookies.keys" setting should not be available on the client side.'))
            : (e.cookies.name ||
                t.push('The "cookies.name" setting is required on the server side.'),
              e.cookies.signed &&
                !o &&
                t.push('The "cookies.keys" setting must be set if "cookies.signed" is true.'),
              e.firebaseAuthEmulatorHost &&
                (l.env.FIREBASE_AUTH_EMULATOR_HOST
                  ? l.env.FIREBASE_AUTH_EMULATOR_HOST !== e.firebaseAuthEmulatorHost &&
                    t.push(
                      'The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be the same as the host set in the config'
                    )
                  : t.push(
                      'The "FIREBASE_AUTH_EMULATOR_HOST" environment variable should be set if you are using the "firebaseAuthEmulatorHost" option'
                    )),
              e.cookies.maxAge > y &&
                t.push(
                  'The "cookies.maxAge" setting must be less than two weeks ('.concat(y, " ms).")
                )),
          { isValid: 0 === t.length, errors: t }
        );
      },
      w = (e) =>
        g(
          g({}, e),
          {},
          { cookies: g(g({}, e.cookies), {}, { keys: ["hidden"] }) },
          e.firebaseAdminInitConfig && {
            firebaseAdminInitConfig: g(
              g({}, e.firebaseAdminInitConfig),
              e.firebaseAdminInitConfig.credential && {
                credential: g(
                  g({}, e.firebaseAdminInitConfig.credential),
                  {},
                  { privateKey: "hidden", clientEmail: "hidden" }
                ),
              }
            ),
          }
        ),
      v = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        c("Setting config with provided value:", w(e));
        var { cookies: r = {} } = e,
          n = t()(e, p),
          o = g(g(g({}, m), n), {}, { cookies: g(g({}, m.cookies), r) }),
          { isValid: i, errors: s } = b(o);
        if (!i) throw new Error("Invalid next-firebase-auth options: ".concat(s.join(" ")));
        h = o;
      },
      E = () => {
        if (!h) throw new Error("next-firebase-auth must be initialized before rendering.");
        return h;
      };
    const T = require("react");
    var A = r.n(T);
    const O = require("next/router");
    var _ = r(679),
      R = r.n(_),
      I = (0, T.createContext)();
    const k = require("@babel/runtime/helpers/asyncToGenerator");
    var U = r.n(k),
      S = [
        "aud",
        "auth_time",
        "email",
        "email_verified",
        "exp",
        "firebase",
        "iat",
        "iss",
        "name",
        "phone_number",
        "picture",
        "sub",
        "uid",
        "user_id",
      ],
      B = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = {};
        return (
          Object.keys(e).forEach((r) => {
            S.includes(r) || (t[r] = e[r]);
          }),
          t
        );
      };
    function x(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function C(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? x(Object(r), !0).forEach(function (t) {
              i()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : x(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    const P = function () {
      var {
          firebaseUserClientSDK: e,
          firebaseUserAdminSDK: t,
          serializedAuthUser: n,
          clientInitialized: o = !1,
          token: i = null,
          claims: u,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = [e, t, n].reduce((e, t) => (t ? e + 1 : e), 0);
      if (a > 1)
        throw new Error(
          'createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"'
        );
      if (o && (t || n))
        throw new Error(
          'The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.'
        );
      if (u && (t || n))
        throw new Error(
          'The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.'
        );
      if (i && !t)
        throw new Error(
          'The "token" value can only be set if the "firebaseUserAdminSDK" property is defined.'
        );
      var f = {},
        c = null,
        h = null,
        l = !1,
        p = null,
        d = null,
        g = null,
        y = (function () {
          var e = U()(function* () {
            return null;
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m = (function () {
          var e = U()(function* () {});
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        b = null;
      if (e) {
        if (s()) {
          var { getApp: w } = r(324),
            { getAuth: v, signOut: E } = r(610);
          m = (function () {
            var e = U()(function* () {
              return E(v(w()));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        }
        (f = B(u)),
          (c = e.uid),
          (h = e.email),
          (l = e.emailVerified),
          (p = e.phoneNumber),
          (d = e.displayName),
          (g = e.photoURL),
          (y = (function () {
            var t = U()(function* (t) {
              return e.getIdToken(t);
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          })()),
          (b = null);
      } else if (t)
        (f = B(t)),
          (c = t.uid),
          (h = t.email),
          (l = t.email_verified),
          (p = t.phone_number),
          (d = t.name),
          (g = t.picture),
          (y = (function () {
            var e = U()(function* () {
              return i;
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (b = i);
      else if (n) {
        var T = JSON.parse(n);
        (f = T.claims),
          (c = T.id),
          (h = T.email),
          (l = T.emailVerified),
          (p = T.phoneNumber),
          (d = T.displayName),
          (g = T.photoURL),
          (y = (function () {
            var e = U()(function* () {
              return T._token || null;
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (b = T._token);
      }
      return {
        id: c,
        email: h,
        emailVerified: l,
        phoneNumber: p,
        displayName: d,
        photoURL: g,
        claims: f,
        getIdToken: y,
        clientInitialized: o,
        firebaseUser: e || null,
        signOut: m,
        serialize: function () {
          var { includeToken: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return JSON.stringify(
            C(
              {
                id: c,
                claims: f,
                email: h,
                emailVerified: l,
                phoneNumber: p,
                displayName: d,
                photoURL: g,
                clientInitialized: o,
              },
              e && { _token: b }
            )
          );
        },
      };
    };
    var L = r(324),
      D = r(610);
    function j(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function N(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? j(Object(r), !0).forEach(function (t) {
              i()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : j(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var q = (function () {
        var e = U()(function* (e) {
          var t,
            {
              loginAPIEndpoint: r,
              logoutAPIEndpoint: n,
              onLoginRequestError: o,
              onLogoutRequestError: i,
            } = E();
          if (e.id) {
            var s = yield e.getIdToken();
            if (
              !(t = yield fetch(r, {
                method: "POST",
                headers: { Authorization: s },
                credentials: "include",
              })).ok
            ) {
              var u = yield t.json(),
                a = new Error(
                  "Received "
                    .concat(t.status, " response from login API endpoint: ")
                    .concat(JSON.stringify(u))
                );
              if (!o) throw a;
              yield o(a);
            }
          } else if (!(t = yield fetch(n, { method: "POST", credentials: "include" })).ok) {
            var f = yield t.json(),
              c = new Error(
                "Received "
                  .concat(t.status, " response from logout API endpoint: ")
                  .concat(JSON.stringify(f))
              );
            if (!i) throw c;
            yield i(c);
          }
          return t;
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      H = (function () {
        var e = U()(function* (e) {
          var { tokenChangedHandler: t } = E(),
            r = P({ firebaseUserClientSDK: e, clientInitialized: !0 });
          return t ? t(r) : q(r);
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    const M = () => {
        var [e, t] = (0, T.useState)({ user: void 0, claims: {}, initialized: !1 }),
          [r, n] = (0, T.useState)(!1);
        return (
          (0, T.useEffect)(() => {
            var e = !1,
              r = (function () {
                var r = U()(function* (r) {
                  c("Firebase ID token changed. Firebase user:", r), n(!1);
                  var o = {};
                  if (r) {
                    var i = yield (0, D.getIdTokenResult)(r);
                    o = B(i.claims);
                  }
                  t({ user: r, claims: o, initialized: !0 }),
                    c("Starting auth API request via tokenChangedHandler."),
                    yield H(r),
                    e
                      ? c(
                          "Component unmounted before completing auth API request via tokenChangedHandler."
                        )
                      : (n(!0), c("Completed auth API request via tokenChangedHandler."));
                });
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
              o = (0, D.onIdTokenChanged)((0, D.getAuth)((0, L.getApp)()), r);
            return () => {
              o(), (e = !0);
            };
          }, []),
          N(N({}, e), {}, { authRequestCompleted: r })
        );
      },
      $ = {
        RENDER: "render",
        SHOW_LOADER: "showLoader",
        RETURN_NULL: "returnNull",
        REDIRECT_TO_LOGIN: "redirectToLogin",
        REDIRECT_TO_APP: "redirectToApp",
      };
    function F(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function z(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? F(Object(r), !0).forEach(function (t) {
              i()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : F(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var G = { basePath: !0, permanent: !1 },
      K = (e) => {
        var { ctx: t, AuthUser: r, redirectDestination: n } = e;
        if ("function" == typeof n) {
          var o = n({ ctx: t, AuthUser: r });
          return K({ ctx: t, AuthUser: r, redirectDestination: o });
        }
        return "string" == typeof n
          ? z(z({}, G), {}, { destination: n })
          : "object" == typeof n
          ? z(z({}, G), n)
          : null;
      },
      V = (e) => {
        var { redirectConfigName: t, redirectURL: r, ctx: n, AuthUser: o } = e;
        return ((e, t) => {
          if (!t || ("string" != typeof t && !("destination" in t)))
            throw new Error(
              'The "'.concat(
                e,
                '" must be set to a non-empty string, an object literal containing "destination", or a function that returns either.'
              )
            );
          return t;
        })(t, K({ ctx: n, AuthUser: o, redirectDestination: r || E()[t] }));
      },
      W = (e) => {
        var { redirectURL: t, AuthUser: r, ctx: n } = e;
        return V({ redirectConfigName: "authPageURL", redirectURL: t, AuthUser: r, ctx: n });
      },
      X = (e) => {
        var { redirectURL: t, AuthUser: r, ctx: n } = e;
        return V({ redirectConfigName: "appPageURL", redirectURL: t, AuthUser: r, ctx: n });
      },
      Y = ["AuthUserSerialized"];
    function J() {
      var { firebaseClientInitConfig: e, firebaseAuthEmulatorHost: t } = E();
      if (!(0, L.getApps)().length) {
        if (!e)
          throw new Error(
            'If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.'
          );
        (0, L.initializeApp)(e);
      }
      t && (0, D.connectAuthEmulator)((0, D.getAuth)((0, L.getApp)()), "http://".concat(t));
    }
    var Z = r(933),
      Q = r.n(Z),
      ee = r(85).Buffer,
      te = (e) => {
        var t = ee.from(e, "base64").toString("utf8");
        return JSON.parse(t);
      },
      re = function (e) {
        var { req: t, res: r } = e,
          { keys: n, secure: o } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = Q()(t, r, { keys: n, secure: o });
        return i;
      };
    const ne = {
      init: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        f(!0 === e.debug), v(e), s() && J();
      },
      withAuthUser: function () {
        var {
          whenAuthed: e = $.RENDER,
          whenUnauthedBeforeInit: r = $.RENDER,
          whenUnauthedAfterInit: n = $.RENDER,
          whenAuthedBeforeRedirect: o = $.RETURN_NULL,
          appPageURL: i = null,
          authPageURL: u = null,
          LoaderComponent: a = null,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (f) => {
          var h = (h) => {
            var { AuthUserSerialized: l } = h,
              p = t()(h, Y),
              d = (0, T.useMemo)(() => P({ serializedAuthUser: l }), [l]),
              { user: g, claims: y, initialized: m, authRequestCompleted: b } = M(),
              w = (0, T.useMemo)(
                () => P({ firebaseUserClientSDK: g, clientInitialized: m, claims: y }),
                [g, m, y]
              ),
              v = m ? w : d,
              E = !!v.id,
              _ = v.clientInitialized,
              R = E && e === $.REDIRECT_TO_APP,
              k = R && s && b,
              U = !E && ((!_ && r === $.REDIRECT_TO_LOGIN) || (_ && n === $.REDIRECT_TO_LOGIN)),
              S = U && s && (r === $.REDIRECT_TO_LOGIN || b),
              B = (0, O.useRouter)(),
              x = (0, T.useCallback)(
                (e) => {
                  var { basePath: t, destination: r } = e;
                  !1 === t ? window.location.replace(r) : B.replace(r);
                },
                [B]
              ),
              C = (0, T.useCallback)(() => {
                c("Redirecting to app.");
                var e = X({ AuthUser: v, redirectURL: i });
                x(e);
              }, [v, x]),
              L = (0, T.useCallback)(() => {
                c("Redirecting to login.");
                var e = W({ AuthUser: v, redirectURL: u });
                x(e);
              }, [v, x]);
            (0, T.useEffect)(() => {
              s() && (k ? C() : S && L());
            }, [k, S, C, L]);
            var D,
              j = a ? A().createElement(a, null) : null,
              N = A().createElement(I.Provider, { value: v }, A().createElement(f, p));
            return (
              (D = R
                ? o === $.RENDER
                  ? N
                  : o === $.SHOW_LOADER
                  ? j
                  : null
                : U
                ? r === $.RETURN_NULL
                  ? null
                  : r === $.SHOW_LOADER
                  ? j
                  : N
                : E || b
                ? N
                : r === $.SHOW_LOADER
                ? j
                : r === $.RETURN_NULL
                ? null
                : N),
              c("AuthUser set to:", v),
              D
            );
          };
          return (h.displayName = "WithAuthUserHOC"), R()(h, f), h;
        };
      },
      useAuthUser: () => {
        var e = (0, T.useContext)(I);
        if (!e)
          throw new Error("When using `useAuthUser`, the page must be wrapped in `withAuthUser`.");
        return e;
      },
      getAuthUserTokenSSR: () => {
        throw new Error('"getAuthUserTokenSSR" can only be called server-side.');
      },
      withAuthUserSSR: () => {
        throw new Error('"withAuthUserSSR" can only be called server-side.');
      },
      withAuthUserTokenSSR: () => {
        throw new Error('"withAuthUserTokenSSR" can only be called server-side.');
      },
      setAuthCookies: () => {
        throw new Error('"setAuthCookies" can only be called server-side.');
      },
      unsetAuthCookies: () => {
        throw new Error('"unsetAuthCookies" can only be called server-side.');
      },
      getAuthUserTokensFromCookie: (e) => {
        var t,
          { req: r, res: n } = e,
          { keys: o, secure: i, signed: s } = E().cookies,
          u = (function (e, t) {
            var { req: r, res: n } = t,
              {
                keys: o,
                secure: i,
                signed: s,
              } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (s && !o)
              throw new Error('The "keys" value must be provided when using signed cookies.');
            var u = re({ req: r, res: n }, { keys: o, secure: i }).get(e, { signed: s });
            return u ? te(u) : void 0;
          })(
            ((t = E().cookies.name), "".concat(t, ".AuthUserTokens")),
            { req: r, res: n },
            { keys: o, secure: i, signed: s }
          );
        return u ? JSON.parse(u) : null;
      },
      verifyIdToken: () => {
        throw new Error('"verifyIdToken" can only be called server-side.');
      },
      AuthAction: $,
      getFirebaseAdmin: () => {
        throw new Error('"getFirebaseAdmin" can only be called server-side.');
      },
    };
  })(),
    (module.exports = n.default);
})();
