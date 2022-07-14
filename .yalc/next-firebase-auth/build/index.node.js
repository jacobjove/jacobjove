/*! For license information please see index.node.js.LICENSE.txt */
(() => {
  var e = {
      108: (e, t, r) => {
        var n = r(464),
          i = r(84);
        function o() {
          return new Date().getTime();
        }
        var s,
          u = Array.prototype.slice,
          a = {};
        s =
          "undefined" != typeof global && global.console
            ? global.console
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
                  a[e] = o();
                },
                "time",
              ],
              [
                function (e) {
                  var t = a[e];
                  if (!t) throw new Error("No such label: " + e);
                  delete a[e];
                  var r = o() - t;
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
                    i.ok(!1, n.format.apply(null, t));
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
          i = r(815),
          o = r(685),
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
                  (this.keys = new i(r)))
                : r.constructor && "Keygrip" === r.constructor.name
                ? (n('"keys" argument; provide using options {"keys": keygrip}'), (this.keys = r))
                : ((this.keys = Array.isArray(r.keys) ? new i(r.keys) : r.keys),
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
            i,
            o,
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
            if (((i = n[1]), !t || !c)) return i;
            if ((o = this.get(f))) {
              if (((u = e + "=" + i), !this.keys))
                throw new Error(".keys required for signed cookies");
              if (!((a = this.keys.index(u, o)) < 0))
                return a && this.set(f, this.keys.sign(u), { signed: !1 }), i;
              this.set(f, null, { path: "/", signed: !1 });
            }
          }
        }),
          (f.prototype.set = function (e, t, r) {
            var i = this.response,
              s = this.request,
              u = i.getHeader("Set-Cookie") || [],
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
              (i.set ? o.OutgoingMessage.prototype.setHeader : i.setHeader).call(
                i,
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
          i = {
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
          o = {
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
          return n.isMemo(e) ? s : u[e.$$typeof] || i;
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
              var i = p(r);
              i && i !== d && e(t, i, n);
            }
            var s = c(r);
            h && (s = s.concat(h(r)));
            for (var u = a(t), g = a(r), y = 0; y < s.length; ++y) {
              var b = s[y];
              if (!(o[b] || (n && n[b]) || (g && g[b]) || (u && u[b]))) {
                var m = l(r, b);
                try {
                  f(t, b, m);
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
        const i = r(238),
          o = r(665),
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
              const i = n.write(e, t);
              return i !== r && (n = n.slice(0, i)), n;
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
          const i = (function (e) {
            if (f.isBuffer(e)) {
              const t = 0 | g(e.length),
                r = a(t);
              return 0 === r.length || e.copy(r, 0, 0, t), r;
            }
            return void 0 !== e.length
              ? "number" != typeof e.length || X(e.length)
                ? a(0)
                : p(e)
              : "Buffer" === e.type && Array.isArray(e.data)
              ? p(e.data)
              : void 0;
          })(e);
          if (i) return i;
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
          let i = !1;
          for (;;)
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return r;
              case "utf8":
              case "utf-8":
                return J(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r;
              case "hex":
                return r >>> 1;
              case "base64":
                return G(e).length;
              default:
                if (i) return n ? -1 : J(e).length;
                (t = ("" + t).toLowerCase()), (i = !0);
            }
        }
        function b(e, t, r) {
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
                return R(this, t, r);
              case "ascii":
                return S(this, t, r);
              case "latin1":
              case "binary":
                return P(this, t, r);
              case "base64":
                return U(this, t, r);
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
        function m(e, t, r) {
          const n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        function w(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if (
            ("string" == typeof r
              ? ((n = r), (r = 0))
              : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            X((r = +r)) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if (("string" == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
            return 0 === t.length ? -1 : v(e, t, r, n, i);
          if ("number" == typeof t)
            return (
              (t &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : v(e, [t], r, n, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function v(e, t, r, n, i) {
          let o,
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
          if (i) {
            let n = -1;
            for (o = r; o < u; o++)
              if (f(e, o) === f(t, -1 === n ? 0 : o - n)) {
                if ((-1 === n && (n = o), o - n + 1 === a)) return n * s;
              } else -1 !== n && (o -= o - n), (n = -1);
          } else
            for (r + a > u && (r = u - a), o = r; o >= 0; o--) {
              let r = !0;
              for (let n = 0; n < a; n++)
                if (f(e, o + n) !== f(t, n)) {
                  r = !1;
                  break;
                }
              if (r) return o;
            }
          return -1;
        }
        function E(e, t, r, n) {
          r = Number(r) || 0;
          const i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : (n = i);
          const o = t.length;
          let s;
          for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
            const n = parseInt(t.substr(2 * s, 2), 16);
            if (X(n)) return s;
            e[r + s] = n;
          }
          return s;
        }
        function O(e, t, r, n) {
          return W(J(t, e.length - r), e, r, n);
        }
        function A(e, t, r, n) {
          return W(
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
        function k(e, t, r, n) {
          return W(G(t), e, r, n);
        }
        function T(e, t, r, n) {
          return W(
            (function (e, t) {
              let r, n, i;
              const o = [];
              for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
                (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
              return o;
            })(t, e.length - r),
            e,
            r,
            n
          );
        }
        function U(e, t, r) {
          return 0 === t && r === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, r));
        }
        function R(e, t, r) {
          r = Math.min(e.length, r);
          const n = [];
          let i = t;
          for (; i < r; ) {
            const t = e[i];
            let o = null,
              s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (i + s <= r) {
              let r, n, u, a;
              switch (s) {
                case 1:
                  t < 128 && (o = t);
                  break;
                case 2:
                  (r = e[i + 1]),
                    128 == (192 & r) && ((a = ((31 & t) << 6) | (63 & r)), a > 127 && (o = a));
                  break;
                case 3:
                  (r = e[i + 1]),
                    (n = e[i + 2]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      ((a = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                      a > 2047 && (a < 55296 || a > 57343) && (o = a));
                  break;
                case 4:
                  (r = e[i + 1]),
                    (n = e[i + 2]),
                    (u = e[i + 3]),
                    128 == (192 & r) &&
                      128 == (192 & n) &&
                      128 == (192 & u) &&
                      ((a = ((15 & t) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & u)),
                      a > 65535 && a < 1114112 && (o = a));
              }
            }
            null === o
              ? ((o = 65533), (s = 1))
              : o > 65535 &&
                ((o -= 65536), n.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))),
              n.push(o),
              (i += s);
          }
          return (function (e) {
            const t = e.length;
            if (t <= I) return String.fromCharCode.apply(String, e);
            let r = "",
              n = 0;
            for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += I)));
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
            for (let i = 0, o = Math.min(r, n); i < o; ++i)
              if (e[i] !== t[i]) {
                (r = e[i]), (n = t[i]);
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
            let i = 0;
            for (r = 0; r < e.length; ++r) {
              let t = e[r];
              if (Y(t, Uint8Array))
                i + t.length > n.length
                  ? (f.isBuffer(t) || (t = f.from(t)), t.copy(n, i))
                  : Uint8Array.prototype.set.call(n, t, i);
              else {
                if (!f.isBuffer(t))
                  throw new TypeError('"list" argument must be an Array of Buffers');
                t.copy(n, i);
              }
              i += t.length;
            }
            return n;
          }),
          (f.byteLength = y),
          (f.prototype._isBuffer = !0),
          (f.prototype.swap16 = function () {
            const e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) m(this, t, t + 1);
            return this;
          }),
          (f.prototype.swap32 = function () {
            const e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
            return this;
          }),
          (f.prototype.swap64 = function () {
            const e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8)
              m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this;
          }),
          (f.prototype.toString = function () {
            const e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : b.apply(this, arguments);
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
          (f.prototype.compare = function (e, t, r, n, i) {
            if ((Y(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)))
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof e
              );
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            let o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (t >>>= 0);
            const u = Math.min(o, s),
              a = this.slice(n, i),
              c = e.slice(t, r);
            for (let e = 0; e < u; ++e)
              if (a[e] !== c[e]) {
                (o = a[e]), (s = c[e]);
                break;
              }
            return o < s ? -1 : s < o ? 1 : 0;
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
            const i = this.length - t;
            if (
              ((void 0 === r || r > i) && (r = i),
              (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            let o = !1;
            for (;;)
              switch (n) {
                case "hex":
                  return E(this, e, t, r);
                case "utf8":
                case "utf-8":
                  return O(this, e, t, r);
                case "ascii":
                case "latin1":
                case "binary":
                  return A(this, e, t, r);
                case "base64":
                  return k(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return T(this, e, t, r);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + n);
                  (n = ("" + n).toLowerCase()), (o = !0);
              }
          }),
          (f.prototype.toJSON = function () {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          });
        const I = 4096;
        function S(e, t, r) {
          let n = "";
          r = Math.min(e.length, r);
          for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function P(e, t, r) {
          let n = "";
          r = Math.min(e.length, r);
          for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function B(e, t, r) {
          const n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          let i = "";
          for (let n = t; n < r; ++n) i += Z[e[n]];
          return i;
        }
        function x(e, t, r) {
          const n = e.slice(t, r);
          let i = "";
          for (let e = 0; e < n.length - 1; e += 2) i += String.fromCharCode(n[e] + 256 * n[e + 1]);
          return i;
        }
        function j(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
        }
        function L(e, t, r, n, i, o) {
          if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function C(e, t, r, n, i) {
          F(t, n, i, e, r, 7);
          let o = Number(t & BigInt(4294967295));
          (e[r++] = o), (o >>= 8), (e[r++] = o), (o >>= 8), (e[r++] = o), (o >>= 8), (e[r++] = o);
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
        function _(e, t, r, n, i) {
          F(t, n, i, e, r, 7);
          let o = Number(t & BigInt(4294967295));
          (e[r + 7] = o),
            (o >>= 8),
            (e[r + 6] = o),
            (o >>= 8),
            (e[r + 5] = o),
            (o >>= 8),
            (e[r + 4] = o);
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
        function D(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function N(e, t, r, n, i) {
          return (t = +t), (r >>>= 0), i || D(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4;
        }
        function q(e, t, r, n, i) {
          return (t = +t), (r >>>= 0), i || D(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8;
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
              (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
              let n = this[e],
                i = 1,
                o = 0;
              for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
              return n;
            }),
          (f.prototype.readUintBE = f.prototype.readUIntBE =
            function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
              let n = this[e + --t],
                i = 1;
              for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
              return n;
            }),
          (f.prototype.readUint8 = f.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || j(e, 1, this.length), this[e];
            }),
          (f.prototype.readUint16LE = f.prototype.readUInt16LE =
            function (e, t) {
              return (e >>>= 0), t || j(e, 2, this.length), this[e] | (this[e + 1] << 8);
            }),
          (f.prototype.readUint16BE = f.prototype.readUInt16BE =
            function (e, t) {
              return (e >>>= 0), t || j(e, 2, this.length), (this[e] << 8) | this[e + 1];
            }),
          (f.prototype.readUint32LE = f.prototype.readUInt32LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || j(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
              );
            }),
          (f.prototype.readUint32BE = f.prototype.readUInt32BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || j(e, 4, this.length),
                16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
          (f.prototype.readBigUInt64LE = Q(function (e) {
            M((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
            const n = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              i = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
            return BigInt(n) + (BigInt(i) << BigInt(32));
          })),
          (f.prototype.readBigUInt64BE = Q(function (e) {
            M((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
            const n = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(i);
          })),
          (f.prototype.readIntLE = function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
            let n = this[e],
              i = 1,
              o = 0;
            for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
            return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
          }),
          (f.prototype.readIntBE = function (e, t, r) {
            (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
            let n = t,
              i = 1,
              o = this[e + --n];
            for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
            return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
          }),
          (f.prototype.readInt8 = function (e, t) {
            return (
              (e >>>= 0),
              t || j(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (f.prototype.readInt16LE = function (e, t) {
            (e >>>= 0), t || j(e, 2, this.length);
            const r = this[e] | (this[e + 1] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt16BE = function (e, t) {
            (e >>>= 0), t || j(e, 2, this.length);
            const r = this[e + 1] | (this[e] << 8);
            return 32768 & r ? 4294901760 | r : r;
          }),
          (f.prototype.readInt32LE = function (e, t) {
            return (
              (e >>>= 0),
              t || j(e, 4, this.length),
              this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
            );
          }),
          (f.prototype.readInt32BE = function (e, t) {
            return (
              (e >>>= 0),
              t || j(e, 4, this.length),
              (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
            );
          }),
          (f.prototype.readBigInt64LE = Q(function (e) {
            M((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
            const n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
            );
          })),
          (f.prototype.readBigInt64BE = Q(function (e) {
            M((e >>>= 0), "offset");
            const t = this[e],
              r = this[e + 7];
            (void 0 !== t && void 0 !== r) || K(e, this.length - 8);
            const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r)
            );
          })),
          (f.prototype.readFloatLE = function (e, t) {
            return (e >>>= 0), t || j(e, 4, this.length), o.read(this, e, !0, 23, 4);
          }),
          (f.prototype.readFloatBE = function (e, t) {
            return (e >>>= 0), t || j(e, 4, this.length), o.read(this, e, !1, 23, 4);
          }),
          (f.prototype.readDoubleLE = function (e, t) {
            return (e >>>= 0), t || j(e, 8, this.length), o.read(this, e, !0, 52, 8);
          }),
          (f.prototype.readDoubleBE = function (e, t) {
            return (e >>>= 0), t || j(e, 8, this.length), o.read(this, e, !1, 52, 8);
          }),
          (f.prototype.writeUintLE = f.prototype.writeUIntLE =
            function (e, t, r, n) {
              (e = +e), (t >>>= 0), (r >>>= 0), n || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
              let i = 1,
                o = 0;
              for (this[t] = 255 & e; ++o < r && (i *= 256); ) this[t + o] = (e / i) & 255;
              return t + r;
            }),
          (f.prototype.writeUintBE = f.prototype.writeUIntBE =
            function (e, t, r, n) {
              (e = +e), (t >>>= 0), (r >>>= 0), n || L(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
              let i = r - 1,
                o = 1;
              for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = (e / o) & 255;
              return t + r;
            }),
          (f.prototype.writeUint8 = f.prototype.writeUInt8 =
            function (e, t, r) {
              return (
                (e = +e), (t >>>= 0), r || L(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1
              );
            }),
          (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
            function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || L(this, e, t, 2, 65535, 0),
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
                r || L(this, e, t, 2, 65535, 0),
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
                r || L(this, e, t, 4, 4294967295, 0),
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
                r || L(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
          (f.prototype.writeBigUInt64LE = Q(function (e, t = 0) {
            return C(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (f.prototype.writeBigUInt64BE = Q(function (e, t = 0) {
            return _(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (f.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              L(this, e, t, r, n - 1, -n);
            }
            let i = 0,
              o = 1,
              s = 0;
            for (this[t] = 255 & e; ++i < r && (o *= 256); )
              e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
                (this[t + i] = (((e / o) >> 0) - s) & 255);
            return t + r;
          }),
          (f.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t >>>= 0), !n)) {
              const n = Math.pow(2, 8 * r - 1);
              L(this, e, t, r, n - 1, -n);
            }
            let i = r - 1,
              o = 1,
              s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
                (this[t + i] = (((e / o) >> 0) - s) & 255);
            return t + r;
          }),
          (f.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || L(this, e, t, 1, 127, -128),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (f.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || L(this, e, t, 2, 32767, -32768),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
          (f.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || L(this, e, t, 2, 32767, -32768),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
          (f.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || L(this, e, t, 4, 2147483647, -2147483648),
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
              r || L(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
          (f.prototype.writeBigInt64LE = Q(function (e, t = 0) {
            return C(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })),
          (f.prototype.writeBigInt64BE = Q(function (e, t = 0) {
            return _(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
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
            const i = n - r;
            return (
              this === e && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, r, n)
                : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
              i
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
            let i;
            if (
              ((t >>>= 0),
              (r = void 0 === r ? this.length : r >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (i = t; i < r; ++i) this[i] = e;
            else {
              const o = f.isBuffer(e) ? e : f.from(e, n),
                s = o.length;
              if (0 === s)
                throw new TypeError('The value "' + e + '" is invalid for argument "value"');
              for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
            }
            return this;
          });
        const $ = {};
        function H(e, t, r) {
          $[e] = class extends r {
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
        function z(e) {
          let t = "",
            r = e.length;
          const n = "-" === e[0] ? 1 : 0;
          for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
          return `${e.slice(0, r)}${t}`;
        }
        function F(e, t, r, n, i, o) {
          if (e > r || e < t) {
            const n = "bigint" == typeof t ? "n" : "";
            let i;
            throw (
              ((i =
                o > 3
                  ? 0 === t || t === BigInt(0)
                    ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                    : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}`
                  : `>= ${t}${n} and <= ${r}${n}`),
              new $.ERR_OUT_OF_RANGE("value", i, e))
            );
          }
          !(function (e, t, r) {
            M(t, "offset"), (void 0 !== e[t] && void 0 !== e[t + r]) || K(t, e.length - (r + 1));
          })(n, i, o);
        }
        function M(e, t) {
          if ("number" != typeof e) throw new $.ERR_INVALID_ARG_TYPE(t, "number", e);
        }
        function K(e, t, r) {
          if (Math.floor(e) !== e)
            throw (M(e, r), new $.ERR_OUT_OF_RANGE(r || "offset", "an integer", e));
          if (t < 0) throw new $.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new $.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
        }
        H(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (e) {
            return e
              ? `${e} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          H(
            "ERR_INVALID_ARG_TYPE",
            function (e, t) {
              return `The "${e}" argument must be of type number. Received type ${typeof t}`;
            },
            TypeError
          ),
          H(
            "ERR_OUT_OF_RANGE",
            function (e, t, r) {
              let n = `The value of "${e}" is out of range.`,
                i = r;
              return (
                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                  ? (i = z(String(r)))
                  : "bigint" == typeof r &&
                    ((i = String(r)),
                    (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = z(i)),
                    (i += "n")),
                (n += ` It must be ${t}. Received ${i}`),
                n
              );
            },
            RangeError
          );
        const V = /[^+/0-9A-Za-z-_]/g;
        function J(e, t) {
          let r;
          t = t || 1 / 0;
          const n = e.length;
          let i = null;
          const o = [];
          for (let s = 0; s < n; ++s) {
            if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                continue;
              }
              r = 65536 + (((i - 55296) << 10) | (r - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              o.push((r >> 6) | 192, (63 & r) | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(
                (r >> 18) | 240,
                ((r >> 12) & 63) | 128,
                ((r >> 6) & 63) | 128,
                (63 & r) | 128
              );
            }
          }
          return o;
        }
        function G(e) {
          return i.toByteArray(
            (function (e) {
              if ((e = (e = e.split("=")[0]).trim().replace(V, "")).length < 2) return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function W(e, t, r, n) {
          let i;
          for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
          return i;
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
        function X(e) {
          return e != e;
        }
        const Z = (function () {
          const e = "0123456789abcdef",
            t = new Array(256);
          for (let r = 0; r < 16; ++r) {
            const n = 16 * r;
            for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
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
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === i || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
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
            t = "function" == typeof setTimeout ? setTimeout : i;
          } catch (e) {
            t = i;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (e) {
            r = o;
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
                if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
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
      84: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      238: (e) => {
        "use strict";
        e.exports = require("base64-js");
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
      815: (e) => {
        "use strict";
        e.exports = require("keygrip");
      },
      469: (e) => {
        "use strict";
        e.exports = require("react-is");
      },
      464: (e) => {
        "use strict";
        e.exports = require("util");
      },
      685: (e) => {
        "use strict";
        e.exports = require("http");
      },
    },
    t = {};
  function r(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t));
  var n = {};
  (() => {
    "use strict";
    r.d(n, { default: () => Pe });
    const e = require("@babel/runtime/helpers/defineProperty");
    var t = r.n(e);
    const i = require("@babel/runtime/helpers/objectWithoutProperties");
    var o = r.n(i);
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
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? d(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var y = 12096e5,
      b = {
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
      m = (e) => {
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
          i = n && n.length && (!n.filter || n.filter((e) => void 0 !== e).length);
        return (
          s()
            ? (e.firebaseAdminInitConfig &&
                e.firebaseAdminInitConfig.credential &&
                e.firebaseAdminInitConfig.credential.privateKey &&
                t.push(
                  'The "firebaseAdminInitConfig" private key setting should not be available on the client side.'
                ),
              i && t.push('The "cookies.keys" setting should not be available on the client side.'))
            : (e.cookies.name ||
                t.push('The "cookies.name" setting is required on the server side.'),
              e.cookies.signed &&
                !i &&
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
        var { cookies: t = {} } = e,
          r = o()(e, p),
          n = g(g(g({}, b), r), {}, { cookies: g(g({}, b.cookies), t) }),
          { isValid: i, errors: s } = m(n);
        if (!i) throw new Error("Invalid next-firebase-auth options: ".concat(s.join(" ")));
        h = n;
      },
      E = () => {
        if (!h) throw new Error("next-firebase-auth must be initialized before rendering.");
        return h;
      };
    const O = require("react");
    var A = r.n(O);
    const k = require("next/router");
    var T = r(679),
      U = r.n(T),
      R = (0, O.createContext)();
    const I = require("@babel/runtime/helpers/asyncToGenerator");
    var S = r.n(I),
      P = [
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
            P.includes(r) || (t[r] = e[r]);
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
    function j(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? x(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : x(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    const L = function () {
      var {
          firebaseUserClientSDK: e,
          firebaseUserAdminSDK: t,
          serializedAuthUser: n,
          clientInitialized: i = !1,
          token: o = null,
          claims: u,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = [e, t, n].reduce((e, t) => (t ? e + 1 : e), 0);
      if (a > 1)
        throw new Error(
          'createAuthUser cannot receive more than one of the following properties: "firebaseUserClientSDK", "firebaseUserAdminSDK", "serializedAuthUser"'
        );
      if (i && (t || n))
        throw new Error(
          'The "clientInitialized" value can only be true when called with the "firebaseUserClientSDK" property or no user.'
        );
      if (u && (t || n))
        throw new Error(
          'The "claims" value can only be set in conjunction with the "firebaseUserClientSDK" property.'
        );
      if (o && !t)
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
          var e = S()(function* () {
            return null;
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        b = (function () {
          var e = S()(function* () {});
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        m = null;
      if (e) {
        if (s()) {
          var { getApp: w } = r(324),
            { getAuth: v, signOut: E } = r(610);
          b = (function () {
            var e = S()(function* () {
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
            var t = S()(function* (t) {
              return e.getIdToken(t);
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          })()),
          (m = null);
      } else if (t)
        (f = B(t)),
          (c = t.uid),
          (h = t.email),
          (l = t.email_verified),
          (p = t.phone_number),
          (d = t.name),
          (g = t.picture),
          (y = (function () {
            var e = S()(function* () {
              return o;
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (m = o);
      else if (n) {
        var O = JSON.parse(n);
        (f = O.claims),
          (c = O.id),
          (h = O.email),
          (l = O.emailVerified),
          (p = O.phoneNumber),
          (d = O.displayName),
          (g = O.photoURL),
          (y = (function () {
            var e = S()(function* () {
              return O._token || null;
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (m = O._token);
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
        clientInitialized: i,
        firebaseUser: e || null,
        signOut: b,
        serialize: function () {
          var { includeToken: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return JSON.stringify(
            j(
              {
                id: c,
                claims: f,
                email: h,
                emailVerified: l,
                phoneNumber: p,
                displayName: d,
                photoURL: g,
                clientInitialized: i,
              },
              e && { _token: m }
            )
          );
        },
      };
    };
    var C = r(324),
      _ = r(610);
    function D(e, t) {
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
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? D(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : D(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var q = (function () {
        var e = S()(function* (e) {
          var t,
            {
              loginAPIEndpoint: r,
              logoutAPIEndpoint: n,
              onLoginRequestError: i,
              onLogoutRequestError: o,
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
              if (!i) throw a;
              yield i(a);
            }
          } else if (!(t = yield fetch(n, { method: "POST", credentials: "include" })).ok) {
            var f = yield t.json(),
              c = new Error(
                "Received "
                  .concat(t.status, " response from logout API endpoint: ")
                  .concat(JSON.stringify(f))
              );
            if (!o) throw c;
            yield o(c);
          }
          return t;
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      $ = (function () {
        var e = S()(function* (e) {
          var { tokenChangedHandler: t } = E(),
            r = L({ firebaseUserClientSDK: e, clientInitialized: !0 });
          return t ? t(r) : q(r);
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    const H = () => {
        var [e, t] = (0, O.useState)({ user: void 0, claims: {}, initialized: !1 }),
          [r, n] = (0, O.useState)(!1);
        return (
          (0, O.useEffect)(() => {
            var e = !1,
              r = (function () {
                var r = S()(function* (r) {
                  c("Firebase ID token changed. Firebase user:", r), n(!1);
                  var i = {};
                  if (r) {
                    var o = yield (0, _.getIdTokenResult)(r);
                    i = B(o.claims);
                  }
                  t({ user: r, claims: i, initialized: !0 }),
                    c("Starting auth API request via tokenChangedHandler."),
                    yield $(r),
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
              i = (0, _.onIdTokenChanged)((0, _.getAuth)((0, C.getApp)()), r);
            return () => {
              i(), (e = !0);
            };
          }, []),
          N(N({}, e), {}, { authRequestCompleted: r })
        );
      },
      z = {
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
    function M(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? F(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : F(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var K = { basePath: !0, permanent: !1 },
      V = (e) => {
        var { ctx: t, AuthUser: r, redirectDestination: n } = e;
        if ("function" == typeof n) {
          var i = n({ ctx: t, AuthUser: r });
          return V({ ctx: t, AuthUser: r, redirectDestination: i });
        }
        return "string" == typeof n
          ? M(M({}, K), {}, { destination: n })
          : "object" == typeof n
          ? M(M({}, K), n)
          : null;
      },
      J = (e) => {
        var { redirectConfigName: t, redirectURL: r, ctx: n, AuthUser: i } = e;
        return ((e, t) => {
          if (!t || ("string" != typeof t && !("destination" in t)))
            throw new Error(
              'The "'.concat(
                e,
                '" must be set to a non-empty string, an object literal containing "destination", or a function that returns either.'
              )
            );
          return t;
        })(t, V({ ctx: n, AuthUser: i, redirectDestination: r || E()[t] }));
      },
      G = (e) => {
        var { redirectURL: t, AuthUser: r, ctx: n } = e;
        return J({ redirectConfigName: "authPageURL", redirectURL: t, AuthUser: r, ctx: n });
      },
      W = (e) => {
        var { redirectURL: t, AuthUser: r, ctx: n } = e;
        return J({ redirectConfigName: "appPageURL", redirectURL: t, AuthUser: r, ctx: n });
      },
      Y = ["AuthUserSerialized"];
    function X() {
      var { firebaseClientInitConfig: e, firebaseAuthEmulatorHost: t } = E();
      if (!(0, C.getApps)().length) {
        if (!e)
          throw new Error(
            'If not initializing the Firebase JS SDK elsewhere, you must provide "firebaseClientInitConfig" to next-firebase-auth.'
          );
        (0, C.initializeApp)(e);
      }
      t && (0, _.connectAuthEmulator)((0, _.getAuth)((0, C.getApp)()), "http://".concat(t));
    }
    var Z = r(933),
      Q = r.n(Z),
      ee = r(85).Buffer,
      te = (e) => {
        var t = ee.from(e, "base64").toString("utf8");
        return JSON.parse(t);
      },
      re = (e) => {
        var t = JSON.stringify(e);
        return ee.from(t).toString("base64");
      },
      ne = function (e) {
        var { req: t, res: r } = e,
          { keys: n, secure: i } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = Q()(t, r, { keys: n, secure: i });
        return o;
      },
      ie = function (e, t) {
        var { req: r, res: n } = t,
          {
            keys: i,
            secure: o,
            signed: s,
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (s && !i)
          throw new Error('The "keys" value must be provided when using signed cookies.');
        var u = ne({ req: r, res: n }, { keys: i, secure: o }),
          a = u.get(e, { signed: s });
        return a ? te(a) : void 0;
      },
      oe = function (e, t, r) {
        var { req: n, res: i } = r,
          {
            keys: o,
            domain: s,
            httpOnly: u,
            maxAge: a,
            overwrite: f,
            path: c,
            sameSite: h,
            secure: l,
            signed: p,
          } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (p && !o)
          throw new Error('The "keys" value must be provided when using signed cookies.');
        var d = ne({ req: n, res: i }, { keys: o, secure: l }),
          g = null == t ? void 0 : re(t);
        d.set(e, g, {
          domain: s,
          httpOnly: u,
          maxAge: a,
          overwrite: f,
          path: c,
          sameSite: h,
          secure: l,
          signed: p,
        });
      },
      se = (e, t, r) => {
        oe(e, void 0, t, r);
      },
      ue = () => E().cookies.name,
      ae = () => {
        var e = ue();
        return "".concat(e, ".AuthUser");
      },
      fe = () => {
        var e = ue();
        return "".concat(e, ".AuthUserTokens");
      },
      ce = (e) => {
        var { req: t, res: r } = e,
          { keys: n, secure: i, signed: o } = E().cookies,
          s = ie(fe(), { req: t, res: r }, { keys: n, secure: i, signed: o });
        return s ? JSON.parse(s) : null;
      };
    const he = {
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          f(!0 === e.debug), v(e), s() && X();
        },
        withAuthUser: function () {
          var {
            whenAuthed: e = z.RENDER,
            whenUnauthedBeforeInit: t = z.RENDER,
            whenUnauthedAfterInit: r = z.RENDER,
            whenAuthedBeforeRedirect: n = z.RETURN_NULL,
            appPageURL: i = null,
            authPageURL: u = null,
            LoaderComponent: a = null,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (f) => {
            var h = (h) => {
              var { AuthUserSerialized: l } = h,
                p = o()(h, Y),
                d = (0, O.useMemo)(() => L({ serializedAuthUser: l }), [l]),
                { user: g, claims: y, initialized: b, authRequestCompleted: m } = H(),
                w = (0, O.useMemo)(
                  () => L({ firebaseUserClientSDK: g, clientInitialized: b, claims: y }),
                  [g, b, y]
                ),
                v = b ? w : d,
                E = !!v.id,
                T = v.clientInitialized,
                U = E && e === z.REDIRECT_TO_APP,
                I = U && s && m,
                S = !E && ((!T && t === z.REDIRECT_TO_LOGIN) || (T && r === z.REDIRECT_TO_LOGIN)),
                P = S && s && (t === z.REDIRECT_TO_LOGIN || m),
                B = (0, k.useRouter)(),
                x = (0, O.useCallback)(
                  (e) => {
                    var { basePath: t, destination: r } = e;
                    !1 === t ? window.location.replace(r) : B.replace(r);
                  },
                  [B]
                ),
                j = (0, O.useCallback)(() => {
                  c("Redirecting to app.");
                  var e = W({ AuthUser: v, redirectURL: i });
                  x(e);
                }, [v, x]),
                C = (0, O.useCallback)(() => {
                  c("Redirecting to login.");
                  var e = G({ AuthUser: v, redirectURL: u });
                  x(e);
                }, [v, x]);
              (0, O.useEffect)(() => {
                s() && (I ? j() : P && C());
              }, [I, P, j, C]);
              var _,
                D = a ? A().createElement(a, null) : null,
                N = A().createElement(R.Provider, { value: v }, A().createElement(f, p));
              return (
                (_ = U
                  ? n === z.RENDER
                    ? N
                    : n === z.SHOW_LOADER
                    ? D
                    : null
                  : S
                  ? t === z.RETURN_NULL
                    ? null
                    : t === z.SHOW_LOADER
                    ? D
                    : N
                  : E || m
                  ? N
                  : t === z.SHOW_LOADER
                  ? D
                  : t === z.RETURN_NULL
                  ? null
                  : N),
                c("AuthUser set to:", v),
                _
              );
            };
            return (h.displayName = "WithAuthUserHOC"), U()(h, f), h;
          };
        },
        useAuthUser: () => {
          var e = (0, O.useContext)(R);
          if (!e)
            throw new Error(
              "When using `useAuthUser`, the page must be wrapped in `withAuthUser`."
            );
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
        getAuthUserTokensFromCookie: ce,
        verifyIdToken: () => {
          throw new Error('"verifyIdToken" can only be called server-side.');
        },
        AuthAction: z,
        getFirebaseAdmin: () => {
          throw new Error('"getFirebaseAdmin" can only be called server-side.');
        },
      },
      le = require("firebase-admin");
    function pe(e, t) {
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
    function de(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? pe(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : pe(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    const ge = () => {
      if (!le.apps.length) {
        var { firebaseAdminInitConfig: e, useFirebaseAdminDefaultCredential: t } = E();
        if (!e && !t)
          throw new Error(
            'Missing firebase-admin credentials in next-firebase-auth. Set "firebaseAdminInitConfig", "useFirebaseAdminDefaultCredential", or initialize firebase-admin yourself.'
          );
        le.initializeApp(
          de(
            de({}, e),
            {},
            {
              credential: t
                ? le.credential.applicationDefault()
                : le.credential.cert(de({}, e.credential)),
            }
          )
        );
      }
      return le;
    };
    var ye = r(155),
      be = () =>
        ye.env.FIREBASE_AUTH_EMULATOR_HOST
          ? "http://".concat(ye.env.FIREBASE_AUTH_EMULATOR_HOST, "/")
          : "https://",
      me = () => E().firebaseClientInitConfig.apiKey,
      we = (function () {
        var e = S()(function* (e) {
          if (!e) throw new Error('The "refreshToken" argument is required.');
          var t = me(),
            r = "".concat(be(), "securetoken.googleapis.com/v1/token?key=").concat(t),
            n = yield fetch(r, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: "grant_type=refresh_token&refresh_token=".concat(e),
            }),
            i = yield n.json();
          if (!n.ok) throw new Error("Problem refreshing token: ".concat(JSON.stringify(i)));
          return i.id_token;
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      ve = (function () {
        var e = S()(function* (e) {
          var t,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = e,
            i = ge(),
            { onTokenRefreshError: o, onVerifyTokenError: s } = E();
          try {
            t = yield i.auth().verifyIdToken(e);
          } catch (e) {
            switch (e.code) {
              case "auth/invalid-user-token":
              case "auth/user-token-expired":
              case "auth/user-disabled":
                (n = null), (t = null);
                break;
              case "auth/id-token-expired":
              case "auth/argument-error":
                if (r) {
                  var u = !1;
                  try {
                    n = yield we(r);
                  } catch (e) {
                    (u = !0), yield o(e);
                  }
                  if (!u)
                    try {
                      t = yield i.auth().verifyIdToken(n);
                    } catch (e) {
                      yield s(e);
                    }
                  u && ((n = null), (t = null));
                } else (n = null), (t = null);
                break;
              default:
                (n = null), (t = null), yield s(e);
            }
          }
          var a = L({ firebaseUserAdminSDK: t, token: n });
          return a;
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Ee = (function () {
        var e = S()(function* (e) {
          var t = yield ve(e),
            r = ge(),
            n = yield r.auth().createCustomToken(t.id),
            i = me(),
            o = ""
              .concat(be(), "identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=")
              .concat(i),
            s = yield fetch(o, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token: n, returnSecureToken: !0 }),
            }),
            u = yield s.json();
          if (!s.ok) throw new Error("Problem getting a refresh token: ".concat(JSON.stringify(u)));
          var { idToken: a, refreshToken: f } = u;
          return { idToken: a, refreshToken: f, AuthUser: t };
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    const Oe = (function () {
        var e = S()(function* (e, t) {
          if (!e.headers || !e.headers.authorization)
            throw new Error("The request is missing an Authorization header value");
          var r = e.headers.authorization,
            { idToken: n, refreshToken: i, AuthUser: o } = yield Ee(r),
            s = ((e) => {
              var {
                domain: t,
                httpOnly: r,
                keys: n,
                maxAge: i,
                overwrite: o,
                path: s,
                sameSite: u,
                secure: a,
                signed: f,
              } = e;
              return {
                domain: t,
                httpOnly: r,
                keys: n,
                maxAge: i,
                overwrite: o,
                path: s,
                sameSite: u,
                secure: a,
                signed: f,
              };
            })(E().cookies);
          return (
            oe(fe(), JSON.stringify({ idToken: n, refreshToken: i }), { req: e, res: t }, s),
            oe(ae(), o.serialize({ includeToken: !1 }), { req: e, res: t }, s),
            { idToken: n, refreshToken: i, AuthUser: o }
          );
        });
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })(),
      Ae = (function () {
        var e = S()(function* (e, t) {
          var r = ((e) => {
            var {
              domain: t,
              httpOnly: r,
              keys: n,
              maxAge: i,
              overwrite: o,
              path: s,
              sameSite: u,
              secure: a,
              signed: f,
            } = e;
            return {
              domain: t,
              httpOnly: r,
              keys: n,
              maxAge: i,
              overwrite: o,
              path: s,
              sameSite: u,
              secure: a,
              signed: f,
            };
          })(E().cookies);
          se(fe(), { req: e, res: t }, r), se(ae(), { req: e, res: t }, r);
        });
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })();
    function ke(e, t) {
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
    function Te(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? ke(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ke(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var Ue = (function () {
      var e = S()(function* (e) {
        var t,
          { useToken: r = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { req: n, res: i } = e,
          { keys: o, secure: s, signed: u } = E().cookies;
        if (r) {
          var { idToken: a, refreshToken: f } = ce({ req: n, res: i });
          t = a ? yield ve(a, f) : L();
        } else {
          if (!u) throw new Error("Cookies must be signed when using withAuthUserSSR.");
          var c = ie(ae(), { req: n, res: i }, { keys: o, secure: s, signed: u });
          t = L({ serializedAuthUser: c });
        }
        return t;
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
    const Re = function () {
      var {
          whenAuthed: e = z.RENDER,
          whenUnauthed: t = z.RENDER,
          appPageURL: r = null,
          authPageURL: n = null,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { useToken: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return (o) =>
        (function () {
          var s = S()(function* (s) {
            var u = yield Ue(s, { useToken: i }),
              a = u.serialize();
            if (!u.id && t === z.REDIRECT_TO_LOGIN)
              return { redirect: G({ ctx: s, AuthUser: u, redirectURL: n }) };
            if (u.id && e === z.REDIRECT_TO_APP)
              return { redirect: W({ ctx: s, AuthUser: u, redirectURL: r }) };
            var f = { props: { AuthUserSerialized: a } };
            if (o) {
              s.AuthUser = u;
              var c = (yield o(s)) || {};
              c &&
                (c.props
                  ? ((f = Te({}, c)).props.AuthUserSerialized = a)
                  : (c.notFound || c.redirect) && (f = Te({}, c)));
            }
            return f;
          });
          return function (e) {
            return s.apply(this, arguments);
          };
        })();
    };
    function Ie(e, t) {
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
    function Se(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? Ie(Object(n), !0).forEach(function (r) {
              t()(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ie(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    const Pe = Se(
      Se({}, he),
      {},
      {
        init: (e) => he.init(e),
        getAuthUserTokenSSR: Ue,
        withAuthUserSSR: (e) => Re(e, { useToken: !1 }),
        withAuthUserTokenSSR: (e) => Re(e, { useToken: !0 }),
        setAuthCookies: Oe,
        unsetAuthCookies: Ae,
        verifyIdToken: ve,
        getFirebaseAdmin: () => ge(),
      }
    );
  })(),
    (module.exports = n.default);
})();
