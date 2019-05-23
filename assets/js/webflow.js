/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
  function e(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  var n = {};
  e.m = t, e.c = n, e.d = function (t, n, i) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(n, "a", n), n
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e(e.s = 3)
}([function (t, e, n) {
  function i(t) {
    u.env() && (v(t.design) && d.on("__wf_design", t.design), v(t.preview) && d.on("__wf_preview", t.preview)), v(t.destroy) && d.on("__wf_destroy", t.destroy), t.ready && v(t.ready) && function (t) {
      if (g) return void t.ready();
      if (m.contains(l, t.ready)) return;
      l.push(t.ready)
    }(t)
  }

  function r(t) {
    v(t.design) && d.off("__wf_design", t.design), v(t.preview) && d.off("__wf_preview", t.preview), v(t.destroy) && d.off("__wf_destroy", t.destroy), t.ready && v(t.ready) && function (t) {
      l = m.filter(l, function (e) {
        return e !== t.ready
      })
    }(t)
  }

  function o(t, e) {
    var n = [],
      i = {};
    return i.up = m.throttle(function (t) {
      m.each(n, function (e) {
        e(t)
      })
    }), t && e && t.on(e, i.up), i.on = function (t) {
      "function" == typeof t && (m.contains(n, t) || n.push(t))
    }, i.off = function (t) {
      n = arguments.length ? m.filter(n, function (e) {
        return e !== t
      }) : []
    }, i
  }

  function a(t) {
    v(t) && t()
  }

  function s() {
    E && (E.reject(), d.off("load", E.resolve)), E = new h.Deferred, d.on("load", E.resolve)
  }
  var u = {},
    c = {},
    l = [],
    f = window.Webflow || [],
    h = window.jQuery,
    d = h(window),
    p = h(document),
    v = h.isFunction,
    m = u._ = n(5),
    w = n(1) && h.tram,
    g = !1,
    b = !1;
  w.config.hideBackface = !1, w.config.keepInherited = !0, u.define = function (t, e, n) {
    c[t] && r(c[t]);
    var o = c[t] = e(h, m, n) || {};
    return i(o), o
  }, u.require = function (t) {
    return c[t]
  }, u.push = function (t) {
    g ? v(t) && t() : f.push(t)
  }, u.env = function (t) {
    var e = window.__wf_design,
      n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
  };
  var y = navigator.userAgent.toLowerCase(),
    x = u.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    _ = u.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
    k = u.env.ios = /(ipod|iphone|ipad)/.test(y);
  u.env.safari = /safari/.test(y) && !_ && !k;
  var T;
  x && p.on("touchstart mousedown", function (t) {
    T = t.target
  }), u.validClick = x ? function (t) {
    return t === T || h.contains(t, T)
  } : function () {
    return !0
  };
  var O = "resize.webflow orientationchange.webflow load.webflow";
  u.resize = o(d, O), u.scroll = o(d, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), u.redraw = o(), u.location = function (t) {
    window.location = t
  }, u.env() && (u.location = function () {}), u.ready = function () {
    g = !0, b ? (b = !1, m.each(c, i)) : m.each(l, a), m.each(f, a), u.resize.up()
  };
  var E;
  u.load = function (t) {
    E.then(t)
  }, u.destroy = function (t) {
    t = t || {}, b = !0, d.triggerHandler("__wf_destroy"), null != t.domready && (g = t.domready), m.each(c, r), u.resize.off(), u.scroll.off(), u.redraw.off(), l = [], f = [], "pending" === E.state() && s()
  }, h(u.ready), s(), t.exports = window.Webflow = u
}, function (t, e) {
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  window.tram = function (t) {
    function e(t, e) {
      return (new I.Bare).init(t, e)
    }

    function i(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase()
      })
    }

    function r(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
    }

    function a() {}

    function s(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var i = n;
      return G.test(t) || !Z.test(t) ? i = parseInt(t, 10) : Z.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : n
    }

    function u(t) {
      X.debug && window && window.console.warn(t)
    }
    var c = function (t, e, i) {
        function r(t) {
          return "object" == (void 0 === t ? "undefined" : n(t))
        }

        function o(t) {
          return "function" == typeof t
        }

        function a() {}

        function s(n, u) {
          function c() {
            var t = new l;
            return o(t.init) && t.init.apply(t, arguments), t
          }

          function l() {}
          u === i && (u = n, n = Object), c.Bare = l;
          var f, h = a[t] = n[t],
            d = l[t] = c[t] = new a;
          return d.constructor = c, c.mixin = function (e) {
            return l[t] = c[t] = s(c, e)[t], c
          }, c.open = function (t) {
            if (f = {}, o(t) ? f = t.call(c, d, h, c, n) : r(t) && (f = t), r(f))
              for (var i in f) e.call(f, i) && (d[i] = f[i]);
            return o(d.init) || (d.init = n), c
          }, c.open(u)
        }
        return s
      }("prototype", {}.hasOwnProperty),
      l = {
        ease: ["ease", function (t, e, n, i) {
          var r = (t /= i) * t,
            o = r * t;
          return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
        }],
        "ease-in": ["ease-in", function (t, e, n, i) {
          var r = (t /= i) * t,
            o = r * t;
          return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
        }],
        "ease-out": ["ease-out", function (t, e, n, i) {
          var r = (t /= i) * t,
            o = r * t;
          return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
        }],
        "ease-in-out": ["ease-in-out", function (t, e, n, i) {
          var r = (t /= i) * t,
            o = r * t;
          return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
        }],
        linear: ["linear", function (t, e, n, i) {
          return n * t / i + e
        }],
        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, i) {
          return n * (t /= i) * t + e
        }],
        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, i) {
          return -n * (t /= i) * (t - 2) + e
        }],
        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }],
        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, i) {
          return n * (t /= i) * t * t + e
        }],
        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, i) {
          return n * ((t = t / i - 1) * t * t + 1) + e
        }],
        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
        }],
        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, i) {
          return n * (t /= i) * t * t * t + e
        }],
        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, i) {
          return -n * ((t = t / i - 1) * t * t * t - 1) + e
        }],
        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
        }],
        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, i) {
          return n * (t /= i) * t * t * t * t + e
        }],
        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, i) {
          return n * ((t = t / i - 1) * t * t * t * t + 1) + e
        }],
        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }],
        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, i) {
          return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
        }],
        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, i) {
          return n * Math.sin(t / i * (Math.PI / 2)) + e
        }],
        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, i) {
          return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
        }],
        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, i) {
          return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
        }],
        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, i) {
          return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
        }],
        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, i) {
          return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
        }],
        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, i) {
          return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
        }],
        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, i) {
          return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
        }],
        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, i) {
          return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }],
        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, i, r) {
          return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
        }],
        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, i, r) {
          return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
        }],
        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, i, r) {
          return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
        }]
      },
      f = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      },
      h = document,
      d = window,
      p = "bkwld-tram",
      v = /[\-\.0-9]/g,
      m = /[A-Z]/,
      w = /^(rgb|#)/,
      g = /(em|cm|mm|in|pt|pc|px)$/,
      b = /(em|cm|mm|in|pt|pc|px|%)$/,
      y = /(deg|rad|turn)$/,
      x = /(all|none) 0s ease 0s/,
      _ = /^(width|height)$/,
      k = " ",
      T = h.createElement("a"),
      O = ["Webkit", "Moz", "O", "ms"],
      E = ["-webkit-", "-moz-", "-o-", "-ms-"],
      z = function (t) {
        if (t in T.style) return {
          dom: t,
          css: t
        };
        var e, n, i = "",
          r = t.split("-");
        for (e = 0; e < r.length; e++) i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
        for (e = 0; e < O.length; e++)
          if ((n = O[e] + i) in T.style) return {
            dom: n,
            css: E[e] + t
          }
      },
      M = e.support = {
        bind: Function.prototype.bind,
        transform: z("transform"),
        transition: z("transition"),
        backface: z("backface-visibility"),
        timing: z("transition-timing-function")
      };
    if (M.transition) {
      var A = M.timing.dom;
      if (T.style[A] = l["ease-in-back"][0], !T.style[A])
        for (var j in f) l[j][0] = f[j]
    }
    var q = e.frame = function () {
        var t = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
        return t && M.bind ? t.bind(d) : function (t) {
          d.setTimeout(t, 16)
        }
      }(),
      $ = e.now = function () {
        var t = d.performance,
          e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
        return e && M.bind ? e.bind(t) : Date.now || function () {
          return +new Date
        }
      }(),
      S = c(function (e) {
        function r(t, e) {
          var n = function (t) {
              for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                var r = t[e];
                r && i.push(r)
              }
              return i
            }(("" + t).split(k)),
            i = n[0];
          e = e || {};
          var r = U[i];
          if (!r) return u("Unsupported property: " + i);
          if (!e.weak || !this.props[i]) {
            var o = r[0],
              a = this.props[i];
            return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
          }
        }

        function o(t, e, i) {
          if (t) {
            var o = void 0 === t ? "undefined" : n(t);
            if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new N({
              duration: t,
              context: this,
              complete: a
            }), void(this.active = !0);
            if ("string" == o && e) {
              switch (t) {
                case "hide":
                  l.call(this);
                  break;
                case "stop":
                  c.call(this);
                  break;
                case "redraw":
                  f.call(this);
                  break;
                default:
                  r.call(this, t, i && i[1])
              }
              return a.call(this)
            }
            if ("function" == o) return void t.call(this, this);
            if ("object" == o) {
              var u = 0;
              d.call(this, t, function (t, e) {
                t.span > u && (u = t.span), t.stop(), t.animate(e)
              }, function (t) {
                "wait" in t && (u = s(t.wait, 0))
              }), h.call(this), u > 0 && (this.timer = new N({
                duration: u,
                context: this
              }), this.active = !0, e && (this.timer.complete = a));
              var p = this,
                v = !1,
                m = {};
              q(function () {
                d.call(p, t, function (t) {
                  t.active && (v = !0, m[t.name] = t.nextStyle)
                }), v && p.$el.css(m)
              })
            }
          }
        }

        function a() {
          if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
            var t = this.queue.shift();
            o.call(this, t.options, !0, t.args)
          }
        }

        function c(t) {
          this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
          var e;
          "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, d.call(this, e, v), h.call(this)
        }

        function l() {
          c.call(this), this.el.style.display = "none"
        }

        function f() {
          this.el.offsetHeight
        }

        function h() {
          var t, e, n = [];
          this.upstream && n.push(this.upstream);
          for (t in this.props)(e = this.props[t]).active && n.push(e.string);
          n = n.join(","), this.style !== n && (this.style = n, this.el.style[M.transition.dom] = n)
        }

        function d(t, e, n) {
          var o, a, s, u, c = e !== v,
            l = {};
          for (o in t) s = t[o], o in Y ? (l.transform || (l.transform = {}), l.transform[o] = s) : (m.test(o) && (o = i(o)), o in U ? l[o] = s : (u || (u = {}), u[o] = s));
          for (o in l) {
            if (s = l[o], !(a = this.props[o])) {
              if (!c) continue;
              a = r.call(this, o)
            }
            e.call(this, a, s)
          }
          n && u && n.call(this, u)
        }

        function v(t) {
          t.stop()
        }

        function w(t, e) {
          t.set(e)
        }

        function g(t) {
          this.$el.css(t)
        }

        function b(t, n) {
          e[t] = function () {
            return this.children ? function (t, e) {
              var n, i = this.children.length;
              for (n = 0; i > n; n++) t.apply(this.children[n], e);
              return this
            }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
          }
        }
        e.init = function (e) {
          if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
            var n = W(this.el, "transition");
            n && !x.test(n) && (this.upstream = n)
          }
          M.backface && X.hideBackface && P(this.el, M.backface.css, "hidden")
        }, b("add", r), b("start", o), b("wait", function (t) {
          t = s(t, 0), this.active ? this.queue.push({
            options: t
          }) : (this.timer = new N({
            duration: t,
            context: this,
            complete: a
          }), this.active = !0)
        }), b("then", function (t) {
          return this.active ? (this.queue.push({
            options: t,
            args: arguments
          }), void(this.timer.complete = a)) : u("No active transition timer. Use start() or wait() before then().")
        }), b("next", a), b("stop", c), b("set", function (t) {
          c.call(this, t), d.call(this, t, w, g)
        }), b("show", function (t) {
          "string" != typeof t && (t = "block"), this.el.style.display = t
        }), b("hide", l), b("redraw", f), b("destroy", function () {
          c.call(this), t.removeData(this.el, p), this.$el = this.el = null
        })
      }),
      I = c(S, function (e) {
        function n(e, n) {
          var i = t.data(e, p) || t.data(e, p, new S.Bare);
          return i.el || i.init(e), n ? i.start(n) : i
        }
        e.init = function (e, i) {
          var r = t(e);
          if (!r.length) return this;
          if (1 === r.length) return n(r[0], i);
          var o = [];
          return r.each(function (t, e) {
            o.push(n(e, i))
          }), this.children = o, this
        }
      }),
      L = c(function (t) {
        function e() {
          var t = this.get();
          this.update("auto");
          var e = this.get();
          return this.update(t), e
        }
        var i = 500,
          r = "ease",
          a = 0;
        t.init = function (t, e, n, o) {
          this.$el = t, this.el = t[0];
          var u = e[0];
          n[2] && (u = n[2]), H[u] && (u = H[u]), this.name = u, this.type = n[1], this.duration = s(e[1], this.duration, i), this.ease = function (t, e, n) {
            return void 0 !== e && (n = e), t in l ? t : n
          }(e[2], this.ease, r), this.delay = s(e[3], this.delay, a), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = o.unit || this.unit || X.defaultUnit, this.angle = o.angle || this.angle || X.defaultAngle, X.fallback || o.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + k + this.duration + "ms" + ("ease" != this.ease ? k + l[this.ease][0] : "") + (this.delay ? k + this.delay + "ms" : ""))
        }, t.set = function (t) {
          t = this.convert(t, this.type), this.update(t), this.redraw()
        }, t.transition = function (t) {
          this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
        }, t.fallback = function (t) {
          var n = this.el.style[this.name] || this.convert(this.get(), this.type);
          t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new B({
            from: n,
            to: t,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.get = function () {
          return W(this.el, this.name)
        }, t.update = function (t) {
          P(this.el, this.name, t)
        }, t.stop = function () {
          (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, P(this.el, this.name, this.get()));
          var t = this.tween;
          t && t.context && t.destroy()
        }, t.convert = function (t, e) {
          if ("auto" == t && this.auto) return t;
          var i, r = "number" == typeof t,
            a = "string" == typeof t;
          switch (e) {
            case "number":
              if (r) return t;
              if (a && "" === t.replace(v, "")) return +t;
              i = "number(unitless)";
              break;
            case w:
              if (a) {
                if ("" === t && this.original) return this.original;
                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : function (t) {
                  var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                  return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }(t)
              }
              i = "hex or rgb string";
              break;
            case g:
              if (r) return t + this.unit;
              if (a && e.test(t)) return t;
              i = "number(px) or string(unit)";
              break;
            case b:
              if (r) return t + this.unit;
              if (a && e.test(t)) return t;
              i = "number(px) or string(unit or %)";
              break;
            case y:
              if (r) return t + this.angle;
              if (a && e.test(t)) return t;
              i = "number(deg) or string(angle)";
              break;
            case "unitless":
              if (r) return t;
              if (a && b.test(t)) return t;
              i = "number(unitless) or string(unit or %)"
          }
          return function (t, e) {
            u("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
          }(i, t), t
        }, t.redraw = function () {
          this.el.offsetHeight
        }
      }),
      R = c(L, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w))
        }
      }),
      C = c(L, function (t, e) {
        t.init = function () {
          e.init.apply(this, arguments), this.animate = this.fallback
        }, t.get = function () {
          return this.$el[this.name]()
        }, t.update = function (t) {
          this.$el[this.name](t)
        }
      }),
      D = c(L, function (t, e) {
        function n(t, e) {
          var n, i, r, o, a;
          for (n in t) r = (o = Y[n])[0], i = o[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r)
        }
        t.init = function () {
          e.init.apply(this, arguments), this.current || (this.current = {}, Y.perspective && X.perspective && (this.current.perspective = X.perspective, P(this.el, this.name, this.style(this.current)), this.redraw()))
        }, t.set = function (t) {
          n.call(this, t, function (t, e) {
            this.current[t] = e
          }), P(this.el, this.name, this.style(this.current)), this.redraw()
        }, t.transition = function (t) {
          var e = this.values(t);
          this.tween = new F({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease
          });
          var n, i = {};
          for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
          this.active = !0, this.nextStyle = this.style(i)
        }, t.fallback = function (t) {
          var e = this.values(t);
          this.tween = new F({
            current: this.current,
            values: e,
            duration: this.duration,
            delay: this.delay,
            ease: this.ease,
            update: this.update,
            context: this
          })
        }, t.update = function () {
          P(this.el, this.name, this.style(this.current))
        }, t.style = function (t) {
          var e, n = "";
          for (e in t) n += e + "(" + t[e] + ") ";
          return n
        }, t.values = function (t) {
          var e, i = {};
          return n.call(this, t, function (t, n, r) {
            i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
          }), i
        }
      }),
      B = c(function (e) {
        function n() {
          var t, e, i, r = s.length;
          if (r)
            for (q(n), e = $(), t = r; t--;)(i = s[t]) && i.render(e)
        }
        var i = {
          ease: l.ease[1],
          from: 0,
          to: 1
        };
        e.init = function (t) {
          this.duration = t.duration || 0, this.delay = t.delay || 0;
          var e = t.ease || i.ease;
          l[e] && (e = l[e][1]), "function" != typeof e && (e = i.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
          var n = t.from,
            r = t.to;
          void 0 === n && (n = i.from), void 0 === r && (r = i.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n), this.value = this.begin + this.unit, this.start = $(), !1 !== t.autoplay && this.play()
        }, e.play = function () {
          this.active || (this.start || (this.start = $()), this.active = !0, function (t) {
            1 === s.push(t) && q(n)
          }(this))
        }, e.stop = function () {
          this.active && (this.active = !1, function (e) {
            var n, i = t.inArray(e, s);
            i >= 0 && (n = s.slice(i + 1), s.length = i, n.length && (s = s.concat(n)))
          }(this))
        }, e.render = function (t) {
          var e, n = t - this.start;
          if (this.delay) {
            if (n <= this.delay) return;
            n -= this.delay
          }
          if (n < this.duration) {
            var i = this.ease(n, 0, 1, this.duration);
            return e = this.startRGB ? function (t, e, n) {
              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
            }(this.startRGB, this.endRGB, i) : function (t) {
              return Math.round(t * c) / c
            }(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
          }
          e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
        }, e.format = function (t, e) {
          if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = r(e), this.endRGB = r(t), this.endHex = t, this.begin = 0, void(this.change = 1);
          if (!this.unit) {
            var n = e.replace(v, "");
            n !== t.replace(v, "") && function (t, e, n) {
              u("Units do not match [" + t + "]: " + e + ", " + n)
            }("tween", e, t), this.unit = n
          }
          e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
        }, e.destroy = function () {
          this.stop(), this.context = null, this.ease = this.update = this.complete = a
        };
        var s = [],
          c = 1e3
      }),
      N = c(B, function (t) {
        t.init = function (t) {
          this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
        }, t.render = function (t) {
          t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
        }
      }),
      F = c(B, function (t, e) {
        t.init = function (t) {
          this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
          var e, n;
          for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new B({
            name: e,
            from: this.current[e],
            to: n,
            duration: t.duration,
            delay: t.delay,
            ease: t.ease,
            autoplay: !1
          }));
          this.play()
        }, t.render = function (t) {
          var e, n, i = !1;
          for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, i = !0);
          return i ? void(this.update && this.update.call(this.context)) : this.destroy()
        }, t.destroy = function () {
          if (e.destroy.call(this), this.tweens) {
            var t;
            for (t = this.tweens.length; t--;) this.tweens[t].destroy();
            this.tweens = null, this.current = null
          }
        }
      }),
      X = e.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !M.transition,
        agentTests: []
      };
    e.fallback = function (t) {
      if (!M.transition) return X.fallback = !0;
      X.agentTests.push("(" + t + ")");
      var e = new RegExp(X.agentTests.join("|"), "i");
      X.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new B(t)
    }, e.delay = function (t, e, n) {
      return new N({
        complete: e,
        duration: t,
        context: n
      })
    }, t.fn.tram = function (t) {
      return e.call(null, this, t)
    };
    var P = t.style,
      W = t.css,
      H = {
        transform: M.transform && M.transform.css
      },
      U = {
        color: [R, w],
        background: [R, w, "background-color"],
        "outline-color": [R, w],
        "border-color": [R, w],
        "border-top-color": [R, w],
        "border-right-color": [R, w],
        "border-bottom-color": [R, w],
        "border-left-color": [R, w],
        "border-width": [L, g],
        "border-top-width": [L, g],
        "border-right-width": [L, g],
        "border-bottom-width": [L, g],
        "border-left-width": [L, g],
        "border-spacing": [L, g],
        "letter-spacing": [L, g],
        margin: [L, g],
        "margin-top": [L, g],
        "margin-right": [L, g],
        "margin-bottom": [L, g],
        "margin-left": [L, g],
        padding: [L, g],
        "padding-top": [L, g],
        "padding-right": [L, g],
        "padding-bottom": [L, g],
        "padding-left": [L, g],
        "outline-width": [L, g],
        opacity: [L, "number"],
        top: [L, b],
        right: [L, b],
        bottom: [L, b],
        left: [L, b],
        "font-size": [L, b],
        "text-indent": [L, b],
        "word-spacing": [L, b],
        width: [L, b],
        "min-width": [L, b],
        "max-width": [L, b],
        height: [L, b],
        "min-height": [L, b],
        "max-height": [L, b],
        "line-height": [L, "unitless"],
        "scroll-top": [C, "number", "scrollTop"],
        "scroll-left": [C, "number", "scrollLeft"]
      },
      Y = {};
    M.transform && (U.transform = [D], Y = {
      x: [b, "translateX"],
      y: [b, "translateY"],
      rotate: [y],
      rotateX: [y],
      rotateY: [y],
      scale: ["number"],
      scaleX: ["number"],
      scaleY: ["number"],
      skew: [y],
      skewX: [y],
      skewY: [y]
    }), M.transform && M.backface && (Y.z = [b, "translateZ"], Y.rotateZ = [y], Y.scaleZ = ["number"], Y.perspective = [g]);
    var G = /ms/,
      Z = /s|\./;
    return t.tram = e
  }(window.jQuery)
}, function (t, e, n) {
  "use strict";
  var i = window.jQuery,
    r = {},
    o = [],
    a = {
      reset: function (t, e) {
        e.__wf_intro = null
      },
      intro: function (t, e) {
        e.__wf_intro || (e.__wf_intro = !0, i(e).triggerHandler(r.types.INTRO))
      },
      outro: function (t, e) {
        e.__wf_intro && (e.__wf_intro = null, i(e).triggerHandler(r.types.OUTRO))
      }
    };
  r.triggers = {}, r.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, r.init = function () {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1])
    }
    o = [], i.extend(r.triggers, a)
  }, r.async = function () {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (r.triggers[t] = function (t, n) {
        o.push([e, n])
      })
    }
  }, r.async(), t.exports = r
}, function (t, e, n) {
  n(4), n(6), n(8), n(9), n(10), n(11), t.exports = n(13)
}, function (t, e, n) {
  var i = n(0);
  i.define("brand", t.exports = function (t) {
    function e() {
      var t = a.children(s),
        e = t.length && t.get(0) === n,
        r = i.env("editor");
      e ? r && t.remove() : (t.length && t.remove(), r || a.append(n))
    }
    var n, r = {},
      o = t("html"),
      a = t("body"),
      s = ".w-webflow-badge",
      u = window.location,
      c = /PhantomJS/i.test(navigator.userAgent);
    return r.ready = function () {
      var i = o.attr("data-wf-status"),
        r = o.attr("data-wf-domain") || "";
      /\.webflow\.io$/i.test(r) && u.hostname !== r && (i = !0), i && !c && (n = n || function () {
        var e = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          n = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({
            marginRight: "8px",
            width: "16px"
          }),
          i = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");
        return e.append(n, i), e[0]
      }(), e(), setTimeout(e, 500))
    }, r
  })
}, function (t, e, n) {
  var i = window.$,
    r = n(1) && i.tram;
  /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
  t.exports = function () {
    var t = {};
    t.VERSION = "1.6.0-Webflow";
    var e = {},
      n = Array.prototype,
      i = Object.prototype,
      o = Function.prototype,
      a = (n.push, n.slice),
      s = (n.concat, i.toString, i.hasOwnProperty),
      u = n.forEach,
      c = n.map,
      l = (n.reduce, n.reduceRight, n.filter),
      f = (n.every, n.some),
      h = n.indexOf,
      d = (n.lastIndexOf, Array.isArray, Object.keys),
      p = (o.bind, t.each = t.forEach = function (n, i, r) {
        if (null == n) return n;
        if (u && n.forEach === u) n.forEach(i, r);
        else if (n.length === +n.length) {
          for (var o = 0, a = n.length; o < a; o++)
            if (i.call(r, n[o], o, n) === e) return
        } else {
          var s = t.keys(n);
          for (o = 0, a = s.length; o < a; o++)
            if (i.call(r, n[s[o]], s[o], n) === e) return
        }
        return n
      });
    t.map = t.collect = function (t, e, n) {
      var i = [];
      return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function (t, r, o) {
        i.push(e.call(n, t, r, o))
      }), i)
    }, t.find = t.detect = function (t, e, n) {
      var i;
      return v(t, function (t, r, o) {
        if (e.call(n, t, r, o)) return i = t, !0
      }), i
    }, t.filter = t.select = function (t, e, n) {
      var i = [];
      return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function (t, r, o) {
        e.call(n, t, r, o) && i.push(t)
      }), i)
    };
    var v = t.some = t.any = function (n, i, r) {
      i || (i = t.identity);
      var o = !1;
      return null == n ? o : f && n.some === f ? n.some(i, r) : (p(n, function (t, n, a) {
        if (o || (o = i.call(r, t, n, a))) return e
      }), !!o)
    };
    t.contains = t.include = function (t, e) {
      return null != t && (h && t.indexOf === h ? -1 != t.indexOf(e) : v(t, function (t) {
        return t === e
      }))
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
    }, t.throttle = function (t) {
      var e, n, i;
      return function () {
        e || (e = !0, n = arguments, i = this, r.frame(function () {
          e = !1, t.apply(i, n)
        }))
      }
    }, t.debounce = function (e, n, i) {
      var r, o, a, s, u, c = function c() {
        var l = t.now() - s;
        l < n ? r = setTimeout(c, n - l) : (r = null, i || (u = e.apply(a, o), a = o = null))
      };
      return function () {
        a = this, o = arguments, s = t.now();
        var l = i && !r;
        return r || (r = setTimeout(c, n)), l && (u = e.apply(a, o), a = o = null), u
      }
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;
      for (var n = 1, i = arguments.length; n < i; n++) {
        var r = arguments[n];
        for (var o in r) void 0 === e[o] && (e[o] = r[o])
      }
      return e
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (d) return d(e);
      var n = [];
      for (var i in e) t.has(e, i) && n.push(i);
      return n
    }, t.has = function (t, e) {
      return s.call(t, e)
    }, t.isObject = function (t) {
      return t === Object(t)
    }, t.now = Date.now || function () {
      return (new Date).getTime()
    }, t.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var m = /(.)^/,
      w = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      g = /\\|'|\r|\n|\u2028|\u2029/g,
      b = function (t) {
        return "\\" + w[t]
      };
    return t.template = function (e, n, i) {
      !n && i && (n = i), n = t.defaults({}, n, t.templateSettings);
      var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g"),
        o = 0,
        a = "__p+='";
      e.replace(r, function (t, n, i, r, s) {
        return a += e.slice(o, s).replace(g, b), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        var s = new Function(n.variable || "obj", "_", a)
      } catch (t) {
        throw t.source = a, t
      }
      var u = function (e) {
          return s.call(this, e, t)
        },
        c = n.variable || "obj";
      return u.source = "function(" + c + "){\n" + a + "}", u
    }, t
  }()
}, function (t, e, n) {
  var i = n(0);
  i.define("forms", t.exports = function (t, e) {
    function r(e, n) {
      var i = t(n),
        r = t.data(n, b);
      r || (r = t.data(n, b, {
        form: i
      })), o(r);
      var a = i.closest("div.w-form");
      r.done = a.find("> .w-form-done"), r.fail = a.find("> .w-form-fail");
      var s = r.action = i.attr("action");
      r.handler = null, r.redirect = i.attr("data-redirect"), T.test(s) ? r.handler = c : s || (p ? r.handler = u : O())
    }

    function o(t) {
      var e = t.btn = t.form.find(':input[type="submit"]');
      t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
    }

    function a(t) {
      var e = t.btn,
        n = t.wait;
      e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
    }

    function s(e, n) {
      var i = null;
      return n = n || {}, e.find(':input:not([type="submit"])').each(function (r, o) {
        var a = t(o),
          s = a.attr("type"),
          u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1),
          c = a.val();
        if ("checkbox" === s && (c = a.is(":checked")), "radio" === s) {
          if (null === n[u] || "string" == typeof n[u]) return;
          c = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
        }
        "string" == typeof c && (c = t.trim(c)), n[u] = c, i = i || function (t, e, n, i) {
          var r = null;
          "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") && (i ? (y.test(n) || y.test(t.attr("type"))) && (x.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n);
          return r
        }(a, s, u, c)
      }), i
    }

    function u(e) {
      o(e);
      var n = e.form,
        r = {
          name: n.attr("data-name") || n.attr("name") || "Untitled Form",
          source: w.href,
          test: i.env(),
          fields: {},
          dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
        };
      f(e);
      var u = s(n, r.fields);
      if (u) return _(u);
      if (a(e), p) {
        var c = "https://webflow.com/api/v1/form/" + p;
        g && c.indexOf("https://webflow.com") >= 0 && (c = c.replace("https://webflow.com", "http://formdata.webflow.com")), t.ajax({
          url: c,
          type: "POST",
          data: r,
          dataType: "json",
          crossDomain: !0
        }).done(function () {
          e.success = !0, l(e)
        }).fail(function () {
          l(e)
        })
      } else l(e)
    }

    function c(n) {
      o(n);
      var i = n.form,
        r = {};
      if (!/^https/.test(w.href) || /^https/.test(n.action)) {
        f(n);
        var u = s(i, r);
        if (u) return _(u);
        a(n);
        var c;
        e.each(r, function (t, e) {
          y.test(e) && (r.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (c = t), /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
        }), c && !r.FNAME && (c = c.split(" "), r.FNAME = c[0], r.LNAME = r.LNAME || c[1]);
        var h = n.action.replace("/post?", "/post-json?") + "&c=?",
          d = h.indexOf("u=") + 2;
        d = h.substring(d, h.indexOf("&", d));
        var p = h.indexOf("id=") + 3;
        p = h.substring(p, h.indexOf("&", p)), r["b_" + d + "_" + p] = "", t.ajax({
          url: h,
          data: r,
          dataType: "jsonp"
        }).done(function (t) {
          n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), l(n)
        }).fail(function () {
          l(n)
        })
      } else i.attr("method", "post")
    }

    function l(t) {
      var e = t.form,
        n = t.redirect,
        r = t.success;
      r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), o(t))
    }

    function f(t) {
      t.evt && t.evt.preventDefault(), t.evt = null
    }
    var h = {};
    n(7);
    var d, p, v, m = t(document),
      w = window.location,
      g = window.XDomainRequest && !window.atob,
      b = ".w-form",
      y = /e(-)?mail/i,
      x = /^\S+@\S+$/,
      _ = window.alert,
      k = i.env(),
      T = /list-manage[1-9]?.com/i,
      O = e.debounce(function () {
        _("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
      }, 100);
    return h.ready = h.design = h.preview = function () {
      p = t("html").attr("data-wf-site"), (d = t(b + " form")).length && d.each(r), k || v || (v = !0, m.on("submit", b + " form", function (e) {
        var n = t.data(this, b);
        n.handler && (n.evt = e, n.handler(n))
      }))
    }, h
  })
}, function (t, e) {
  /*!
   * jQuery-ajaxTransport-XDomainRequest - v1.0.3
   * 2014-12-16 WEBFLOW - Removed UMD wrapper
   * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
   * Copyright (c) 2014 Jason Moon (@JSONMOON)
   * @license MIT (/blob/master/LICENSE.txt)
   */
  t.exports = function (t) {
    if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
      var e = /^https?:\/\//i,
        n = /^get|post$/i,
        i = new RegExp("^" + location.protocol, "i");
      t.ajaxTransport("* text html xml json", function (r, o, a) {
        if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
          var s = null;
          return {
            send: function (e, n) {
              var i = "",
                a = (o.dataType || "").toLowerCase();
              s = new XDomainRequest, /^\d+$/.test(o.timeout) && (s.timeout = o.timeout), s.ontimeout = function () {
                n(500, "timeout")
              }, s.onload = function () {
                var e = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType,
                  i = {
                    code: 200,
                    message: "success"
                  },
                  r = {
                    text: s.responseText
                  };
                try {
                  if ("html" === a || /text\/html/i.test(s.contentType)) r.html = s.responseText;
                  else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType)) try {
                    r.json = t.parseJSON(s.responseText)
                  } catch (t) {
                    i.code = 500, i.message = "parseerror"
                  } else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                    var o = new ActiveXObject("Microsoft.XMLDOM");
                    o.async = !1;
                    try {
                      o.loadXML(s.responseText)
                    } catch (t) {
                      o = void 0
                    }
                    if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw i.code = 500, i.message = "parseerror", "Invalid XML: " + s.responseText;
                    r.xml = o
                  }
                } catch (t) {
                  throw t
                } finally {
                  n(i.code, i.message, r, e)
                }
              }, s.onprogress = function () {}, s.onerror = function () {
                n(500, "error", {
                  text: s.responseText
                })
              }, o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)), s.open(r.type, r.url), s.send(i)
            },
            abort: function () {
              s && s.abort()
            }
          }
        }
      })
    }
  }(window.jQuery)
}, function (t, e, n) {
  var i = n(0),
    r = n(2);
  i.define("ix", t.exports = function (t, e) {
    function n(t) {
      t && (O = {}, e.each(t, function (t) {
        O[t.slug] = t.value
      }), o())
    }

    function o() {
      ! function () {
        var e = t("[data-ix]");
        if (!e.length) return;
        e.each(u), e.each(a), E.length && (i.scroll.on(c), setTimeout(c, 1));
        z.length && i.load(l);
        M.length && setTimeout(f, A)
      }(), r.init(), i.redraw.up()
    }

    function a(n, o) {
      var a = t(o),
        u = a.attr("data-ix"),
        c = O[u];
      if (c) {
        var l = c.triggers;
        l && (m.style(a, c.style), e.each(l, function (t) {
          function e() {
            h(t, a, {
              group: "A"
            })
          }

          function n() {
            h(t, a, {
              group: "B"
            })
          }
          var o = {},
            u = t.type,
            c = t.stepsB && t.stepsB.length;
          if ("load" !== u) {
            if ("click" === u) return a.on("click" + g, function (e) {
              i.validClick(e.currentTarget) && ("#" === a.attr("href") && e.preventDefault(), h(t, a, {
                group: o.clicked ? "B" : "A"
              }), c && (o.clicked = !o.clicked))
            }), void(T = T.add(a));
            if ("hover" === u) return a.on("mouseenter" + g, e), a.on("mouseleave" + g, n), void(T = T.add(a));
            if ("scroll" !== u) {
              var l = j[u];
              if (l) {
                var f = a.closest(l);
                return f.on(r.types.INTRO, e).on(r.types.OUTRO, n), void(T = T.add(f))
              }
            } else E.push({
              el: a,
              trigger: t,
              state: {
                active: !1
              },
              offsetTop: s(t.offsetTop),
              offsetBot: s(t.offsetBot)
            })
          } else t.preload && !x ? z.push(e) : M.push(e)
        }))
      }
    }

    function s(t) {
      if (!t) return 0;
      t = String(t);
      var e = parseInt(t, 10);
      return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
    }

    function u(e, n) {
      t(n).off(g)
    }

    function c() {
      for (var t = w.scrollTop(), e = w.height(), n = E.length, i = 0; i < n; i++) {
        var r = E[i],
          o = r.el,
          a = r.trigger,
          s = a.stepsB && a.stepsB.length,
          u = r.state,
          c = o.offset().top,
          l = o.outerHeight(),
          f = r.offsetTop,
          d = r.offsetBot;
        f < 1 && f > 0 && (f *= e), d < 1 && d > 0 && (d *= e);
        var p = c + l - f >= t && c + d <= t + e;
        p !== u.active && ((!1 !== p || s) && (u.active = p, h(a, o, {
          group: p ? "A" : "B"
        })))
      }
    }

    function l() {
      for (var t = z.length, e = 0; e < t; e++) z[e]()
    }

    function f() {
      for (var t = M.length, e = 0; e < t; e++) M[e]()
    }

    function h(e, n, r, o) {
      function a() {
        if (l) return h(e, n, r, !0);
        "auto" === w.width && m.set({
          width: "auto"
        }), "auto" === w.height && m.set({
          height: "auto"
        }), s && s()
      }
      var s = (r = r || {}).done,
        u = e.preserve3d;
      if (!p || r.force) {
        var c = r.group || "A",
          l = e["loop" + c],
          f = e["steps" + c];
        if (f && f.length) {
          if (f.length < 2 && (l = !1), !o) {
            var v = e.selector;
            v && (n = e.descend ? n.find(v) : e.siblings ? n.siblings(v) : t(v), x && n.attr("data-ix-affect", 1)), _ && n.addClass("w-ix-emptyfix"), u && n.css("transform-style", "preserve-3d")
          }
          for (var m = b(n), w = {
              omit3d: !u
            }, g = 0; g < f.length; g++) ! function (t, e, n) {
            var r = "add",
              o = "start";
            n.start && (r = o = "then");
            var a = e.transition;
            if (a) {
              a = a.split(",");
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                t[r](u)
              }
            }
            var c = d(e, n) || {};
            null != c.width && (n.width = c.width);
            null != c.height && (n.height = c.height);
            if (null == a) {
              n.start ? t.then(function () {
                var e = this.queue;
                this.set(c), c.display && (t.redraw(), i.redraw.up()), this.queue = e, this.next()
              }) : (t.set(c), c.display && (t.redraw(), i.redraw.up()));
              var l = c.wait;
              null != l && (t.wait(l), n.start = !0)
            } else {
              if (c.display) {
                var f = c.display;
                delete c.display, n.start ? t.then(function () {
                  var t = this.queue;
                  this.set({
                    display: f
                  }).redraw(), i.redraw.up(), this.queue = t, this.next()
                }) : (t.set({
                  display: f
                }).redraw(), i.redraw.up())
              }
              t[o](c), n.start = !0
            }
          }(m, f[g], w);
          w.start ? m.then(a) : a()
        }
      }
    }

    function d(t, e) {
      var n = e && e.omit3d,
        i = {},
        r = !1;
      for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (i[o] = t[o], r = !0);
      return r ? i : null
    }
    var p, v, m = {},
      w = t(window),
      g = ".w-ix",
      b = t.tram,
      y = i.env,
      x = y(),
      _ = y.chrome && y.chrome < 35,
      k = "none 0s ease 0s",
      T = t(),
      O = {},
      E = [],
      z = [],
      M = [],
      A = 1,
      j = {
        tabs: ".w-tab-link, .w-tab-pane",
        dropdown: ".w-dropdown",
        slider: ".w-slide",
        navbar: ".w-nav"
      };
    return m.init = function (t) {
      setTimeout(function () {
        n(t)
      }, 1)
    }, m.preview = function () {
      p = !1, A = 100, setTimeout(function () {
        n(window.__wf_ix)
      }, 1)
    }, m.design = function () {
      p = !0, m.destroy()
    }, m.destroy = function () {
      v = !0, T.each(u), i.scroll.off(c), r.async(), E = [], z = [], M = []
    }, m.ready = function () {
      if (x) return y("design") ? m.design() : m.preview();
      O && v && (v = !1, o())
    }, m.run = h, m.style = x ? function (e, n) {
      var i = b(e);
      if (!t.isEmptyObject(n)) {
        e.css("transition", "");
        var r = e.css("transition");
        r === k && (r = i.upstream = null), i.upstream = k, i.set(d(n)), i.upstream = r
      }
    } : function (t, e) {
      b(t).set(d(e))
    }, m
  })
}, function (t, e, n) {
  var i = n(0);
  i.define("links", t.exports = function (t, e) {
    function n() {
      var t = c.scrollTop(),
        n = c.height();
      e.each(a, function (e) {
        var i = e.link,
          o = e.sec,
          a = o.offset().top,
          s = o.outerHeight(),
          u = .5 * n,
          c = o.is(":visible") && a + s - u >= t && a + u <= t + n;
        e.active !== c && (e.active = c, r(i, d, c))
      })
    }

    function r(t, e, n) {
      var i = t.hasClass(e);
      n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
    }
    var o, a, s, u = {},
      c = t(window),
      l = i.env(),
      f = window.location,
      h = document.createElement("a"),
      d = "w--current",
      p = /^#[\w:.-]+$/,
      v = /index\.(html|php)$/,
      m = /\/$/;
    return u.ready = u.design = u.preview = function () {
      o = l && i.env("design"), s = i.env("slug") || f.pathname || "", i.scroll.off(n), a = [];
      for (var e = document.links, u = 0; u < e.length; ++u) ! function (e) {
        var n = o && e.getAttribute("href-disabled") || e.getAttribute("href");
        if (h.href = n, !(n.indexOf(":") >= 0)) {
          var i = t(e);
          if (0 === n.indexOf("#") && p.test(n)) {
            var u = t(n);
            u.length && a.push({
              link: i,
              sec: u,
              active: !1
            })
          } else if ("#" !== n) {
            var c = h.href === f.href || n === s || v.test(n) && m.test(s);
            r(i, d, c)
          }
        }
      }(e[u]);
      a.length && (i.scroll.on(n), n())
    }, u
  })
}, function (t, e, n) {
  var i = n(0);
  i.define("scroll", t.exports = function (t) {
    function e(e, n) {
      if (s.test(e)) {
        var u = t("#" + e);
        if (u.length) {
          if (n && (n.preventDefault(), n.stopPropagation()), o.hash !== e && a && a.pushState && (!i.env.chrome || "file:" !== o.protocol)) {
            (a.state && a.state.hash) !== e && a.pushState({
              hash: e
            }, "", "#" + e)
          }
          var c = i.env("editor") ? ".w-editor-body" : "body",
            l = t("header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"),
            f = "fixed" === l.css("position") ? l.outerHeight() : 0;
          r.setTimeout(function () {
            ! function (e, n) {
              var i = t(r).scrollTop(),
                o = e.offset().top - n;
              if ("mid" === e.data("scroll")) {
                var a = t(r).height() - n,
                  s = e.outerHeight();
                s < a && (o -= Math.round((a - s) / 2))
              }
              var u = 1;
              t("body").add(e).each(function () {
                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                !isNaN(e) && (0 === e || e > 0) && (u = e)
              }), Date.now || (Date.now = function () {
                return (new Date).getTime()
              });
              var c = Date.now(),
                l = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function (t) {
                  r.setTimeout(t, 15)
                },
                f = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * u;
              ! function t() {
                var e = Date.now() - c;
                r.scroll(0, function (t, e, n, i) {
                  if (n > i) return e;
                  return t + (e - t) * function (t) {
                    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                  }(n / i)
                }(i, o, e, f)), e <= f && l(t)
              }()
            }(u, f)
          }, n ? 0 : 300)
        }
      }
    }
    var n = t(document),
      r = window,
      o = r.location,
      a = function () {
        try {
          return Boolean(r.frameElement)
        } catch (t) {
          return !0
        }
      }() ? null : r.history,
      s = /^[a-zA-Z0-9][\w:.-]*$/;
    return {
      ready: function () {
        o.hash && e(o.hash.substring(1));
        var r = o.href.split("#")[0];
        n.on("click", "a", function (n) {
          if (!(i.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link")))
            if ("#" !== this.getAttribute("href")) {
              var o = this.href.split("#"),
                a = o[0] === r ? o[1] : null;
              a && e(a, n)
            } else n.preventDefault()
        })
      }
    }
  })
}, function (t, e, n) {
  var i = n(0),
    r = n(12);
  i.define("slider", t.exports = function (t, e) {
    function n() {
      (g = T.find(E)).length && (g.filter(":visible").each(s), x = null, y || (o(), i.resize.on(a), i.redraw.on(_.redraw)))
    }

    function o() {
      i.resize.off(a), i.redraw.off(_.redraw)
    }

    function a() {
      g.filter(":visible").each(m)
    }

    function s(e, n) {
      var i = t(n),
        r = t.data(n, E);
      if (r || (r = t.data(n, E, {
          index: 0,
          depth: 1,
          el: i,
          config: {}
        })), r.mask = i.children(".w-slider-mask"), r.left = i.children(".w-slider-arrow-left"), r.right = i.children(".w-slider-arrow-right"), r.nav = i.children(".w-slider-nav"), r.slides = r.mask.children(".w-slide"), r.slides.each(M.reset), x && (r.maskWidth = 0), !k.support.transform) return r.left.hide(), r.right.hide(), r.nav.hide(), void(y = !0);
      r.el.off(E), r.left.off(E), r.right.off(E), r.nav.off(E), u(r), b ? (r.el.on("setting" + E, p(r)), d(r), r.hasTimer = !1) : (r.el.on("swipe" + E, p(r)), r.left.on("tap" + E, l(r)), r.right.on("tap" + E, f(r)), r.config.autoplay && !r.hasTimer && (r.hasTimer = !0, r.timerCount = 1, h(r))), r.nav.on("tap" + E, "> div", p(r)), O || r.mask.contents().filter(function () {
        return 3 === this.nodeType
      }).remove(), m(e, n)
    }

    function u(t) {
      var e = {};
      e.crossOver = 0, e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
      var n = t.el.attr("data-duration");
      if (e.duration = null != n ? parseInt(n, 10) : 500, c(t.el.attr("data-infinite")) && (e.infinite = !0), c(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), c(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), c(t.el.attr("data-autoplay"))) {
        e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
        var i = "mousedown" + E + " touchstart" + E;
        b || t.el.off(i).one(i, function () {
          d(t)
        })
      }
      var r = t.right.width();
      e.edge = r ? r + 40 : 100, t.config = e
    }

    function c(t) {
      return "1" === t || "true" === t
    }

    function l(t) {
      return function () {
        v(t, {
          index: t.index - 1,
          vector: -1
        })
      }
    }

    function f(t) {
      return function () {
        v(t, {
          index: t.index + 1,
          vector: 1
        })
      }
    }

    function h(t) {
      d(t);
      var e = t.config,
        n = e.timerMax;
      n && t.timerCount++ > n || (t.timerId = window.setTimeout(function () {
        null == t.timerId || b || (f(t)(), h(t))
      }, e.delay))
    }

    function d(t) {
      window.clearTimeout(t.timerId), t.timerId = null
    }

    function p(r) {
      return function (o, a) {
        a = a || {};
        var s = r.config;
        if (b && "setting" === o.type) {
          if ("prev" === a.select) return l(r)();
          if ("next" === a.select) return f(r)();
          if (u(r), w(r), null == a.select) return;
          ! function (i, r) {
            var o = null;
            r === i.slides.length && (n(), w(i)), e.each(i.anchors, function (e, n) {
              t(e.els).each(function (e, i) {
                t(i).index() === r && (o = n)
              })
            }), null != o && v(i, {
              index: o,
              immediate: !0
            })
          }(r, a.select)
        } else if ("swipe" !== o.type) r.nav.has(o.target).length && v(r, {
          index: t(o.target).index()
        });
        else {
          if (s.disableSwipe) return;
          if (i.env("editor")) return;
          if ("left" === a.direction) return f(r)();
          if ("right" === a.direction) return l(r)()
        }
      }
    }

    function v(e, n) {
      function i() {
        h = t(o[e.index].els), p = e.slides.not(h), "slide" !== v && (f.visibility = "hidden"), k(p).set(f)
      }
      n = n || {};
      var r = e.config,
        o = e.anchors;
      e.previous = e.index;
      var a = n.index,
        s = {};
      a < 0 ? (a = o.length - 1, r.infinite && (s.x = -e.endX, s.from = 0, s.to = o[0].width)) : a >= o.length && (a = 0, r.infinite && (s.x = o[o.length - 1].width, s.from = -o[o.length - 1].x, s.to = s.from - s.x)), e.index = a;
      var u = e.nav.children().eq(e.index).addClass("w-active");
      e.nav.children().not(u).removeClass("w-active"), r.hideArrows && (e.index === o.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
      var c = e.offsetX || 0,
        l = e.offsetX = -o[e.index].x,
        f = {
          x: l,
          opacity: 1,
          visibility: ""
        },
        h = t(o[e.index].els),
        d = t(o[e.previous] && o[e.previous].els),
        p = e.slides.not(h),
        v = r.animation,
        m = r.easing,
        w = Math.round(r.duration),
        g = n.vector || (e.index > e.previous ? 1 : -1),
        y = "opacity " + w + "ms " + m,
        _ = "transform " + w + "ms " + m;
      if (b || (h.each(M.intro), p.each(M.outro)), n.immediate && !x) return k(h).set(f), void i();
      if (e.index !== e.previous) {
        if ("cross" === v) {
          var T = Math.round(w - w * r.crossOver),
            O = Math.round(w - T);
          return y = "opacity " + T + "ms " + m, k(d).set({
            visibility: ""
          }).add(y).start({
            opacity: 0
          }), void k(h).set({
            visibility: "",
            x: l,
            opacity: 0,
            zIndex: e.depth++
          }).add(y).wait(O).then({
            opacity: 1
          }).then(i)
        }
        return "fade" === v ? (k(d).set({
          visibility: ""
        }).stop(), void k(h).set({
          visibility: "",
          x: l,
          opacity: 0,
          zIndex: e.depth++
        }).add(y).start({
          opacity: 1
        }).then(i)) : "over" === v ? (f = {
          x: e.endX
        }, k(d).set({
          visibility: ""
        }).stop(), void k(h).set({
          visibility: "",
          zIndex: e.depth++,
          x: l + o[e.index].width * g
        }).add(_).start({
          x: l
        }).then(i)) : void(r.infinite && s.x ? (k(e.slides.not(d)).set({
          visibility: "",
          x: s.x
        }).add(_).start({
          x: l
        }), k(d).set({
          visibility: "",
          x: s.from
        }).add(_).start({
          x: s.to
        }), e.shifted = d) : (r.infinite && e.shifted && (k(e.shifted).set({
          visibility: "",
          x: c
        }), e.shifted = null), k(e.slides).set({
          visibility: ""
        }).add(_).start({
          x: l
        })))
      }
    }

    function m(e, n) {
      var i = t.data(n, E);
      if (i) return function (t) {
        var e = t.mask.width();
        if (t.maskWidth !== e) return t.maskWidth = e, !0;
        return !1
      }(i) ? w(i) : void(b && function (e) {
        var n = 0;
        if (e.slides.each(function (e, i) {
            n += t(i).outerWidth(!0)
          }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
        return !1
      }(i) && w(i))
    }

    function w(e) {
      var n = 1,
        i = 0,
        r = 0,
        o = 0,
        a = e.maskWidth,
        s = a - e.config.edge;
      s < 0 && (s = 0), e.anchors = [{
        els: [],
        x: 0,
        width: 0
      }], e.slides.each(function (u, c) {
        r - i > s && (n++, i += a, e.anchors[n - 1] = {
          els: [],
          x: r,
          width: 0
        }), o = t(c).outerWidth(!0), r += o, e.anchors[n - 1].width += o, e.anchors[n - 1].els.push(c)
      }), e.endX = r, b && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
        var n, i = [],
          r = e.el.attr("data-nav-spacing");
        r && (r = parseFloat(r) + "px");
        for (var o = 0; o < e.pages; o++) n = t(z), e.nav.hasClass("w-num") && n.text(o + 1), null != r && n.css({
          "margin-left": r,
          "margin-right": r
        }), i.push(n);
        e.nav.empty().append(i)
      }(e));
      var u = e.index;
      u >= n && (u = n - 1), v(e, {
        immediate: !0,
        index: u
      })
    }
    var g, b, y, x, _ = {},
      k = t.tram,
      T = t(document),
      O = i.env(),
      E = ".w-slider",
      z = '<div class="w-slider-dot" data-wf-ignore />',
      M = r.triggers;
    return _.ready = function () {
      b = i.env("design"), n()
    }, _.design = function () {
      b = !0, n()
    }, _.preview = function () {
      b = !1, n()
    }, _.redraw = function () {
      x = !0, n()
    }, _.destroy = o, _
  })
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
  }
  var r = n(2),
    o = window.jQuery,
    a = {},
    s = {
      reset: function (t, e) {
        r.triggers.reset(t, e)
      },
      intro: function (t, e) {
        r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
      },
      outro: function (t, e) {
        r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
      }
    };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, s), t.exports = a
}, function (t, e, n) {
  n(0).define("touch", t.exports = function (t) {
    function e(e, n, i) {
      var r = t.Event(e, {
        originalEvent: n
      });
      t(n.target).trigger(r, i)
    }
    var n = {},
      i = !document.addEventListener,
      r = window.getSelection;
    return i && (t.event.special.tap = {
      bindType: "click",
      delegateType: "click"
    }), n.init = function (n) {
      return i ? null : (n = "string" == typeof n ? t(n).get(0) : n) ? new function (t) {
        function n(t) {
          var e = t.touches;
          e && e.length > 1 || (l = !0, f = !1, e ? (h = !0, s = e[0].clientX, u = e[0].clientY) : (s = t.clientX, u = t.clientY), c = s)
        }

        function i(t) {
          if (l) {
            if (h && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
            var n = t.touches,
              i = n ? n[0].clientX : t.clientX,
              o = n ? n[0].clientY : t.clientY,
              p = i - c;
            c = i, Math.abs(p) > d && r && "" === String(r()) && (e("swipe", t, {
              direction: p > 0 ? "right" : "left"
            }), a()), (Math.abs(i - s) > 10 || Math.abs(o - u) > 10) && (f = !0)
          }
        }

        function o(t) {
          if (l) {
            if (l = !1, h && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(h = !1);
            f || e("tap", t)
          }
        }

        function a() {
          l = !1
        }
        var s, u, c, l = !1,
          f = !1,
          h = !1,
          d = Math.min(Math.round(.04 * window.innerWidth), 40);
        t.addEventListener("touchstart", n, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", n, !1), t.addEventListener("mousemove", i, !1), t.addEventListener("mouseup", o, !1), t.addEventListener("mouseout", a, !1), this.destroy = function () {
          t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", i, !1), t.removeEventListener("touchend", o, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", n, !1), t.removeEventListener("mousemove", i, !1), t.removeEventListener("mouseup", o, !1), t.removeEventListener("mouseout", a, !1), t = null
        }
      }(n) : null
    }, n.instance = n.init(document), n
  })
}]);


/*Webflow init*/
Webflow.require('ix').init([{
  "slug": "hero-scroll",
  "name": "Hero Scroll",
  "value": {
    "style": {},
    "triggers": [{
      "type": "scroll",
      "offsetTop": "80%",
      "stepsA": [{
        "opacity": 1,
        "transition": "transform 1s ease 0, opacity 200 ease 0"
      }],
      "stepsB": [{
        "opacity": 0,
        "transition": "opacity 1s ease 0"
      }]
    }]
  }
},
{
  "slug": "link-line-hover",
  "name": "Link Line - Hover",
  "value": {
    "style": {},
    "triggers": [{
      "type": "hover",
      "selector": ".link__bar",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 200ms ease-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }, {
        "transition": "transform 200 ease-in 0",
        "x": "100%",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": [{
        "x": "-110%",
        "y": "0px",
        "z": "0px"
      }]
    }]
  }
},
{
  "slug": "mobile-open-menu",
  "name": "Mobile - Open Menu",
  "value": {
    "style": {},
    "triggers": [{
      "type": "click",
      "selector": ".nav__list",
      "stepsA": [{
        "display": "block",
        "opacity": 1,
        "transition": "opacity 200 ease 0"
      }],
      "stepsB": [{
        "opacity": 0,
        "transition": "opacity 400ms ease-out 0"
      }, {
        "display": "none"
      }]
    }, {
      "type": "click",
      "selector": ".menu-icn__topbar",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 200 ease 0",
        "x": "0px",
        "y": "1.15em",
        "z": "0px",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "45deg"
      }],
      "stepsB": [{
        "transition": "transform 200 ease 0",
        "x": "0px",
        "y": "0.75em",
        "z": "0px",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "0deg"
      }]
    }, {
      "type": "click",
      "selector": ".menu-icn__botbar",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 200 ease 0",
        "x": "0px",
        "y": "1em",
        "z": "0px",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "-45deg"
      }],
      "stepsB": [{
        "transition": "transform 200 ease 0",
        "x": "0px",
        "y": "1.25em",
        "z": "0px",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "0deg"
      }]
    }]
  }
},
{
  "slug": "mobile-show-menu-label",
  "name": "Mobile - Show Menu Label",
  "value": {
    "style": {
      "x": "0px",
      "y": "-100%",
      "z": "0px"
    },
    "triggers": [{
      "type": "load",
      "preload": true,
      "loopA": true,
      "stepsA": [{
        "wait": "3s"
      }, {
        "transition": "transform 800ms ease-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }, {
        "wait": "600ms"
      }, {
        "transition": "transform 800ms ease 0, width 200 ease 0",
        "x": "0px",
        "y": "100%",
        "z": "0px"
      }, {
        "x": "0px",
        "y": "-100%",
        "z": "0px"
      }, {
        "wait": "3s"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "idea-blob",
  "name": "IDEA - Blob",
  "value": {
    "style": {
      "opacity": 0,
      "scaleX": 0.01,
      "scaleY": 0.01,
      "scaleZ": 1
    },
    "triggers": []
  }
},
{
  "slug": "idea-opacity-0",
  "name": "IDEA - Opacity 0",
  "value": {
    "style": {
      "opacity": 0
    },
    "triggers": []
  }
},
{
  "slug": "ia-mask-image",
  "name": "IA - Mask Image",
  "value": {
    "style": {
      "opacity": 0,
      "scaleX": 0.8,
      "scaleY": 0.8,
      "scaleZ": 1
    },
    "triggers": []
  }
},
{
  "slug": "idea-mask",
  "name": "IDEA - Mask",
  "value": {
    "style": {
      "scaleX": 1.1,
      "scaleY": 1.1,
      "scaleZ": 1,
    },
    "triggers": []
  }
},
{
  "slug": "idea-overflow-hidden",
  "name": "IDEA - Overflow Hidden",
  "value": {
    "style": {
      "x": "0px",
      "y": "280%",
      "z": "0px"
    },
    "triggers": []
  }
},
{
  "slug": "ia-heart",
  "name": "IA - Heart",
  "value": {
    "style": {
      "x": "0px",
      "y": "150%",
      "z": "0px"
    },
    "triggers": [{
      "type": "hover",
      "preload": true,
      "loopA": true,
      "stepsA": [{
        "transition": "transform 200 ease 0",
        "scaleX": 1.1,
        "scaleY": 1.1,
        "scaleZ": 1
      }, {
        "transition": "transform 200 ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }, {
        "transition": "transform 200 ease 0",
        "scaleX": 1.1,
        "scaleY": 1.1,
        "scaleZ": 1
      }, {
        "transition": "transform 200 ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }, {
        "wait": "500ms"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "ia-no-width",
  "name": "IA - No Width",
  "value": {
    "style": {
      "scaleX": 0.01,
      "scaleY": 1,
      "scaleZ": 1
    },
    "triggers": []
  }
},
{
  "slug": "onload-homepage",
  "name": "OnLoad - Homepage",
  "value": {
    "style": {},
    "triggers": [{
      "type": "load",
      "selector": ".home_banner",
      "preload": true,
      "stepsA": [{
        "wait": "1s"
      }, {
        "opacity": 1,
        "transition": "opacity 800ms ease-in-out 0"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".banner-scroll",
      "preload": true,
      "stepsA": [{
        "wait": "1s"
      }, {
        "opacity": 1,
        "transition": "opacity 800ms ease-in-out 0"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".b-hero__mail",
      "preload": true,
      "stepsA": [{
        "wait": "1s"
      }, {
        "opacity": 1,
        "transition": "opacity 800ms ease-in-out 0"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".b-hero__label",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2s"
      }, {
        "transition": "transform 600ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".hero__date-c",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2s"
      }, {
        "transition": "transform 600ms ease-in-out 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".banner-hide__title",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2.1s"
      }, {
        "transition": "transform 1000ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    },
    {
      "type": "load",
      "selector": ".banner-hide__subtitle",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2.5s"
      }, {
        "transition": "transform 1000ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    },
    {
      "type": "load",
      "selector": ".fs-body-small",
      "descend": true,
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2.2s"
      }, {
        "transition": "transform 400ms ease-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onload-work",
  "name": "OnLoad - Work",
  "value": {
    "style": {},
    "triggers": [{
      "type": "load",
      "selector": ".b-hero__label",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "1s"
      }, {
        "transition": "transform 400ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".b-hero__heart",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "1s"
      }, {
        "transition": "transform 400ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onload-company",
  "name": "OnLoad - Company",
  "value": {
    "style": {},
    "triggers": [{
      "type": "load",
      "selector": ".top-sub__txt",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "1s"
      }, {
        "transition": "transform 400ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".hero__date-c",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2s"
      }, {
        "transition": "transform 400ms ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".b-hero__label",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2s"
      }, {
        "transition": "transform 400ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onload-process",
  "name": "OnLoad - Process",
  "value": {
    "style": {},
    "triggers": [{
      "type": "load",
      "selector": ".b-hero__label",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2s"
      }, {
        "transition": "transform 400ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".hero__date-c",
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "2s"
      }, {
        "transition": "transform 400ms ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onload-art",
  "name": "OnLoad - Art",
  "value": {
    "style": {},
    "triggers": [{
      "type": "load",
      "selector": ".banner-art__text",
      "descend": true,
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 3s ease-in-out 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1,
      }],
      "stepsB": []
    }, {
      "type": "load",
      "selector": ".art_blob",
      "descend": true,
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "opacity": 1,
        "transition": "transform 2s ease-in-out 0, opacity 200 ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1,
      }],
      "stepsB": []
    }, 
    {
      "type": "load",
      "selector": ".c-art__img",
      "descend": true,
      "preload": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "1.5s"
      }, {
        "opacity": 1,
        "transition": "transform 1.2s ease-in-out 0, opacity 1.2s ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-art",
  "name": "OnScroll - Art ",
  "value": {
    "style": {},
    "triggers": [{
      "type": "scroll",
      "selector": ".art_mask",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 3s ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
       }],
      "stepsB": []
    }, {
      "type": "scroll",
      "selector": ".art_blob",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "opacity": 1,
        "transition": "transform 2s ease 0, opacity 200 ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1,
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fadein-1",
  "name": "OnScroll - FadeIn 1",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "50%",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "stepsA": [{
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fadein-2",
  "name": "OnScroll - FadeIn 2",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "50%",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "stepsA": [{
        "wait": "150ms"
      }, {
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fadein-3",
  "name": "OnScroll - FadeIn 3",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "50%",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "300ms"
      }, {
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fadein-4",
  "name": "OnScroll - FadeIn 4",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "50%",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "450ms"
      }, {
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fadein-5",
  "name": "OnScroll - FadeIn 5",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "50%",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "600ms"
      }, {
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-line",
  "name": "OnScroll - line",
  "value": {
    "style": {
      "width": 0,
      "x": "0px",
      "y": "0px",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "250ms"
      }, {
        "width": "100%",
        "transition": "transform 2s ease-in-out 0, width 2s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-circle-1",
  "name": "OnScroll - circle 1",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "500ms"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},

{
  "slug": "onscroll-circle-2",
  "name": "OnScroll - circle 2",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "650ms"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-circle-3",
  "name": "OnScroll - circle 3",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "900ms"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-circle-4",
  "name": "OnScroll - circle 4",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "1.150s"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-circle-5",
  "name": "OnScroll - circle 5",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "1.4s"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-circle-6",
  "name": "OnScroll - circle 6",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "1.650s"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-circle-7",
  "name": "OnScroll - circle 7",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "0",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "1.9s"
      }, {
        "opacity": "1",
        "transition": "transform 1s ease-in-out 0, opacity 1s ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fadein-6",
  "name": "OnScroll - FadeIn 6",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "50%",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "0%",
      "stepsA": [{
        "wait": "750ms"
      }, {
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-scaleslowin-1",
  "name": "OnScroll - ScaleSlowIn 1",
  "value": {
    "style": {
      "opacity": 0,
      "rotateX": "0deg",
      "rotateY": "0deg",
      "rotateZ": "-180deg"
    },
    "triggers": [{
      "type": "scroll",
      "stepsA": [{
        "opacity": 1,
        "transition": "transform 3000ms ease-in-out 0, opacity 500ms ease-in-out 0",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "0deg"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-fade-image",
  "name": "OnScroll - Fade Image",
  "value": {
    "style": {
      "opacity": 0.3500000000000001
    },
    "triggers": [{
      "type": "scroll",
      "offsetBot": "20%",
      "stepsA": [{
        "opacity": 1,
        "transition": "opacity 800ms ease-in-out 0"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onscroll-cs-slide",
  "name": "OnScroll - CS Slide",
  "value": {
    "style": {
      "opacity": 0,
      "x": "0px",
      "y": "10em",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "stepsA": [{
        "opacity": 1,
        "transition": "transform 600ms ease-in-out 0, opacity 600ms ease-in-out 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "onhover-mini-cta",
  "name": "OnHover - Mini CTA",
  "value": {
    "style": {},
    "triggers": [{
      "type": "hover",
      "selector": ".fs-ascii",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 200 ease 0",
        "x": "2px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": [{
        "transition": "transform 200 ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }]
    }]
  }
},
{
  "slug": "onhover-link-mail",
  "name": "OnHover - Link Mail",
  "value": {
    "style": {},
    "triggers": [{
      "type": "hover",
      "selector": ".hero__mail-icn",
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 500ms ease 0",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "360deg"
      }],
      "stepsB": [{
        "transition": "transform 400ms ease 0",
        "rotateX": "0deg",
        "rotateY": "0deg",
        "rotateZ": "0deg"
      }]
    }]
  }
},
{
  "slug": "onhover-team-person",
  "name": "OnHover - Team Person",
  "value": {
    "style": {},
    "triggers": [{
      "type": "hover",
      "selector": ".b-team__name",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "opacity": 1,
        "transition": "opacity 400ms ease 0, transform 200 ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": [{
        "opacity": 0,
        "transition": "opacity 400ms ease 0, transform 400ms ease 0",
        "x": "0px",
        "y": "50px",
        "z": "0px"
      }]
    }, {
      "type": "hover",
      "selector": ".b-team__role",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "opacity": 1,
        "transition": "opacity 400ms ease 0, transform 200 ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": [{
        "opacity": 0,
        "transition": "opacity 400ms ease 0, transform 400ms ease 0",
        "x": "0px",
        "y": "50px",
        "z": "0px"
      }]
    }, {
      "type": "hover",
      "selector": ".b-team__linked",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "opacity": 1,
        "transition": "opacity 400ms ease 0, transform 200 ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": [{
        "opacity": 0,
        "transition": "opacity 400ms ease 0, transform 400ms ease 0",
        "x": "0px",
        "y": "50px",
        "z": "0px"
      }]
    }, {
      "type": "hover",
      "selector": ".b-team__photo",
      "descend": true,
      "stepsA": [{
        "opacity": 0.30000000000000004,
        "transition": "opacity 400ms ease 0"
      }],
      "stepsB": [{
        "opacity": 1,
        "transition": "opacity 400ms ease 0"
      }]
    }]
  }
},
{
  "slug": "ia-cs-image",
  "name": "IA  - CS Image",
  "value": {
    "style": {
      "scaleX": 1.5,
      "scaleY": 1.5,
      "scaleZ": 1
    },
    "triggers": []
  }
},
{
  "slug": "cs-thumb",
  "name": "CS Thumb",
  "value": {
    "style": {
      "x": "0px",
      "y": "100px",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "stepsA": [{
        "transition": "transform 600ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }, {
      "type": "scroll",
      "selector": ".cs-thumb__img",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "transition": "transform 600ms ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "cs-thumb-2",
  "name": "CS Thumb 2",
  "value": {
    "style": {
      "x": "0px",
      "y": "100px",
      "z": "0px"
    },
    "triggers": [{
      "type": "scroll",
      "stepsA": [{
        "wait": "100ms"
      }, {
        "transition": "transform 600ms ease 0",
        "x": "0px",
        "y": "0px",
        "z": "0px"
      }],
      "stepsB": []
    }, {
      "type": "scroll",
      "selector": ".cs-thumb__img",
      "descend": true,
      "preserve3d": true,
      "stepsA": [{
        "wait": "100ms"
      }, {
        "transition": "transform 600ms ease 0",
        "scaleX": 1,
        "scaleY": 1,
        "scaleZ": 1
      }],
      "stepsB": []
    }]
  }
},
{
  "slug": "page-loader",
  "name": "Page Loader",
  "value": {
    "style": {},
    "triggers": [{
      "type": "load",
      "preload": true,
      "stepsA": [{
        "opacity": 0,
        "transition": "opacity 200 ease 0"
      }, {
        "display": "none"
      }],
      "stepsB": []
    }]
  }
}
]);

/*end webflow*/