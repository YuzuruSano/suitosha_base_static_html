!(function(e) {
  var t = {};
  function s(i) {
    if (t[i]) return t[i].exports;
    var a = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = e),
    (s.c = t),
    (s.d = function(e, t, i) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (s.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          s.d(
            i,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = ""),
    s((s.s = 67));
})([
  ,
  function(e, t) {
    var s = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = s);
  },
  function(e, t) {
    e.exports = jQuery;
  },
  function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function(e, t, s) {
    e.exports = !s(8)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(e, t, s) {
    var i = s(16),
      a = s(23);
    e.exports = s(4)
      ? function(e, t, s) {
          return i.f(e, t, a(1, s));
        }
      : function(e, t, s) {
          return (e[t] = s), e;
        };
  },
  function(e, t) {
    var s = (e.exports = { version: "2.6.1" });
    "number" == typeof __e && (__e = s);
  },
  function(e, t, s) {
    var i = s(25)("wks"),
      a = s(11),
      n = s(1).Symbol,
      r = "function" == typeof n;
    (e.exports = function(e) {
      return i[e] || (i[e] = (r && n[e]) || (r ? n : a)("Symbol." + e));
    }).store = i;
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t, s) {
    var i = s(3);
    e.exports = function(e) {
      if (!i(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function(e, t) {
    var s = {}.toString;
    e.exports = function(e) {
      return s.call(e).slice(8, -1);
    };
  },
  function(e, t) {
    var s = 0,
      i = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++s + i).toString(36)
      );
    };
  },
  function(e, t, s) {
    var i = s(17);
    e.exports = function(e, t, s) {
      if ((i(e), void 0 === t)) return e;
      switch (s) {
        case 1:
          return function(s) {
            return e.call(t, s);
          };
        case 2:
          return function(s, i) {
            return e.call(t, s, i);
          };
        case 3:
          return function(s, i, a) {
            return e.call(t, s, i, a);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function(e, t, s) {
    var i = s(1),
      a = s(5),
      n = s(24),
      r = s(11)("src"),
      o = Function.toString,
      l = ("" + o).split("toString");
    (s(6).inspectSource = function(e) {
      return o.call(e);
    }),
      (e.exports = function(e, t, s, o) {
        var d = "function" == typeof s;
        d && (n(s, "name") || a(s, "name", t)),
          e[t] !== s &&
            (d && (n(s, r) || a(s, r, e[t] ? "" + e[t] : l.join(String(t)))),
            e === i
              ? (e[t] = s)
              : o
              ? e[t]
                ? (e[t] = s)
                : a(e, t, s)
              : (delete e[t], a(e, t, s)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[r]) || o.call(this);
      });
  },
  function(e, t) {
    var s = Math.ceil,
      i = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? i : s)(e);
    };
  },
  function(e, t, s) {
    var i = s(9),
      a = s(20),
      n = s(22),
      r = Object.defineProperty;
    t.f = s(4)
      ? Object.defineProperty
      : function(e, t, s) {
          if ((i(e), (t = n(t, !0)), i(s), a))
            try {
              return r(e, t, s);
            } catch (e) {}
          if ("get" in s || "set" in s)
            throw TypeError("Accessors not supported!");
          return "value" in s && (e[t] = s.value), e;
        };
  },
  function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function(e, t, s) {
    var i = s(15),
      a = Math.min;
    e.exports = function(e) {
      return e > 0 ? a(i(e), 9007199254740991) : 0;
    };
  },
  function(e, t, s) {
    var i = s(1),
      a = s(6),
      n = s(5),
      r = s(14),
      o = s(12),
      l = function(e, t, s) {
        var d,
          c,
          p,
          u,
          h = e & l.F,
          m = e & l.G,
          f = e & l.S,
          g = e & l.P,
          v = e & l.B,
          b = m ? i : f ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
          w = m ? a : a[t] || (a[t] = {}),
          y = w.prototype || (w.prototype = {});
        for (d in (m && (s = t), s))
          (p = ((c = !h && b && void 0 !== b[d]) ? b : s)[d]),
            (u =
              v && c
                ? o(p, i)
                : g && "function" == typeof p
                ? o(Function.call, p)
                : p),
            b && r(b, d, p, e & l.U),
            w[d] != p && n(w, d, u),
            g && y[d] != p && (y[d] = p);
      };
    (i.core = a),
      (l.F = 1),
      (l.G = 2),
      (l.S = 4),
      (l.P = 8),
      (l.B = 16),
      (l.W = 32),
      (l.U = 64),
      (l.R = 128),
      (e.exports = l);
  },
  function(e, t, s) {
    e.exports =
      !s(4) &&
      !s(8)(function() {
        return (
          7 !=
          Object.defineProperty(s(21)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(e, t, s) {
    var i = s(3),
      a = s(1).document,
      n = i(a) && i(a.createElement);
    e.exports = function(e) {
      return n ? a.createElement(e) : {};
    };
  },
  function(e, t, s) {
    var i = s(3);
    e.exports = function(e, t) {
      if (!i(e)) return e;
      var s, a;
      if (t && "function" == typeof (s = e.toString) && !i((a = s.call(e))))
        return a;
      if ("function" == typeof (s = e.valueOf) && !i((a = s.call(e)))) return a;
      if (!t && "function" == typeof (s = e.toString) && !i((a = s.call(e))))
        return a;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  function(e, t) {
    var s = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return s.call(e, t);
    };
  },
  function(e, t, s) {
    var i = s(6),
      a = s(1),
      n = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
      return n[e] || (n[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: i.version,
      mode: s(26) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(e, t) {
    e.exports = !1;
  },
  function(e, t, s) {
    "use strict";
    var i = s(19),
      a = s(28)(5),
      n = !0;
    "find" in [] &&
      Array(1).find(function() {
        n = !1;
      }),
      i(i.P + i.F * n, "Array", {
        find: function(e) {
          return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      s(34)("find");
  },
  function(e, t, s) {
    var i = s(12),
      a = s(29),
      n = s(30),
      r = s(18),
      o = s(31);
    e.exports = function(e, t) {
      var s = 1 == e,
        l = 2 == e,
        d = 3 == e,
        c = 4 == e,
        p = 6 == e,
        u = 5 == e || p,
        h = t || o;
      return function(t, o, m) {
        for (
          var f,
            g,
            v = n(t),
            b = a(v),
            w = i(o, m, 3),
            y = r(b.length),
            x = 0,
            T = s ? h(t, y) : l ? h(t, 0) : void 0;
          y > x;
          x++
        )
          if ((u || x in b) && ((g = w((f = b[x]), x, v)), e))
            if (s) T[x] = g;
            else if (g)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return f;
                case 6:
                  return x;
                case 2:
                  T.push(f);
              }
            else if (c) return !1;
        return p ? -1 : d || c ? c : T;
      };
    };
  },
  function(e, t, s) {
    var i = s(10);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return "String" == i(e) ? e.split("") : Object(e);
        };
  },
  function(e, t, s) {
    var i = s(13);
    e.exports = function(e) {
      return Object(i(e));
    };
  },
  function(e, t, s) {
    var i = s(32);
    e.exports = function(e, t) {
      return new (i(e))(t);
    };
  },
  function(e, t, s) {
    var i = s(3),
      a = s(33),
      n = s(7)("species");
    e.exports = function(e) {
      var t;
      return (
        a(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !a(t.prototype)) ||
            (t = void 0),
          i(t) && null === (t = t[n]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function(e, t, s) {
    var i = s(10);
    e.exports =
      Array.isArray ||
      function(e) {
        return "Array" == i(e);
      };
  },
  function(e, t, s) {
    var i = s(7)("unscopables"),
      a = Array.prototype;
    null == a[i] && s(5)(a, i, {}),
      (e.exports = function(e) {
        a[i][e] = !0;
      });
  },
  ,
  function(e, t, s) {
    "use strict";
    s.r(t),
      function(e) {
        function i(e, t) {
          for (var s = 0; s < t.length; s++) {
            var i = t[s];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        s.d(t, "default", function() {
          return a;
        });
        var a = (function() {
          function t() {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
          }
          var s, a, n;
          return (
            (s = t),
            (a = [
              {
                key: "getState",
                value: function() {
                  return "block" == e("#responsive_flg").css("display");
                }
              },
              {
                key: "state",
                value: function() {
                  return _.throttle(this.getState, 500);
                }
              },
              {
                key: "isPhone",
                value: function() {
                  return (
                    (navigator.userAgent.indexOf("iPhone") > 0 &&
                      -1 == navigator.userAgent.indexOf("iPod")) ||
                    (navigator.userAgent.indexOf("Android") > 0 &&
                      navigator.userAgent.indexOf("Mobile") > 0)
                  );
                }
              }
            ]) && i(s.prototype, a),
            n && i(s, n),
            t
          );
        })();
      }.call(this, s(2));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, s) {
    (function(e) {
      !(function() {
        var t = e,
          s = "jQuery.pause",
          i = 1,
          a = t.fn.animate,
          n = {};
        function r() {
          return new Date().getTime();
        }
        (t.fn.animate = function(e, o, l, d) {
          var c = t.speed(o, l, d);
          return (
            (c.complete = c.old),
            this.each(function() {
              this[s] || (this[s] = i++);
              var o = t.extend({}, c);
              a.apply(t(this), [e, t.extend({}, o)]),
                (n[this[s]] = {
                  run: !0,
                  prop: e,
                  opt: o,
                  start: r(),
                  done: 0
                });
            })
          );
        }),
          (t.fn.pause = function() {
            return this.each(function() {
              this[s] || (this[s] = i++);
              var e = n[this[s]];
              e &&
                e.run &&
                ((e.done += r() - e.start),
                e.done > e.opt.duration
                  ? delete n[this[s]]
                  : (t(this).stop(), (e.run = !1)));
            });
          }),
          (t.fn.resume = function() {
            return this.each(function() {
              this[s] || (this[s] = i++);
              var e = n[this[s]];
              e &&
                !e.run &&
                ((e.opt.duration -= e.done),
                (e.done = 0),
                (e.run = !0),
                (e.start = r()),
                a.apply(t(this), [e.prop, t.extend({}, e.opt)]));
            });
          });
      })();
    }.call(this, s(2)));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, s) {
    "use strict";
    s.r(t),
      function(e) {
        var t;
        s(27), s(44);
        (t = e).fn.infiniteslide = function(e) {
          var s = t.extend(
              { height: 400, speed: 30, direction: "left", pauseonhover: !0 },
              e
            ),
            i = function(e) {
              var i = new t.Deferred(),
                a = e.children("ul");
              "right" == s.direction &&
                a.css("left", (-1 * a.width()) / 2 + "px");
              var n = 500 * a.children().length;
              return (
                setTimeout(function() {
                  !(function e() {
                    "left" == s.direction
                      ? a.animate(
                          { left: "-" + a.width() / 2 + "px" },
                          (a.width() / 2) * s.speed,
                          "linear",
                          function() {
                            a.css("left", 0), e();
                          }
                        )
                      : "right" == s.direction &&
                        a.animate(
                          { left: "0px" },
                          (a.width() / 2) * s.speed,
                          "linear",
                          function() {
                            a.css("left", (-1 * a.width()) / 2 + "px"), e();
                          }
                        ),
                      s.pauseonhover &&
                        a
                          .on("mouseenter", function() {
                            t(this).pause();
                          })
                          .on("mouseleave", function() {
                            t(this).resume();
                          });
                  })();
                }, n),
                i.promise()
              );
            };
          return this.each(function() {
            var e, s, a, n, r;
            ((e = t(this)),
            (s = new t.Deferred()),
            (a = e.find("ul")),
            (n = e.find("li")),
            (r = 0),
            e.find("img").each(function(e, s) {
              t("<img />").attr("src", t(this).attr("src")),
                (r += parseInt(t(this).width() + 20));
            }),
            e.css({ overflow: "hidden" }),
            a
              .css({
                width: 2 * r + "px",
                position: "relative",
                overflow: "hidden"
              })
              .children("li")
              .css({ display: "inline", float: "left" }),
            n.hide().each(function(e, s) {
              t(this)
                .delay(200 * e)
                .fadeIn("slow", function() {
                  t(this)
                    .clone()
                    .css("display", "inline")
                    .appendTo(a);
                });
            }),
            s.resolve(),
            s.promise()).then(i(t(this)));
          });
        };
      }.call(this, s(2));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, s) {
    "use strict";
    s.r(t),
      function(e) {
        s(70);
        var i = s(36);
        window.$ = e;
        var a = new i.default();
        s(58);
        t.default = function(t, s, i) {
          var n;
          (n = e)(function() {
            var e, r;
            ((e = n(this)),
            (r = n.Deferred()),
            n.ajax({
              type: "POST",
              url: t,
              dataType: "json",
              context: e,
              success: r.resolve,
              error: r.reject
            }),
            r.promise())
              .then(
                function(e) {
                  var t = _.template(template),
                    i = _.map(e.data, function(e) {
                      return t(e);
                    });
                  n(s).append(i);
                },
                function(e) {
                  console.log("request failed：" + e);
                }
              )
              .then(function() {
                a.state()() || n(i).infiniteslide();
              });
          });
        };
      }.call(this, s(2));
  },
  ,
  ,
  function(e, t, s) {
    "use strict";
    var i =
        "undefined" == typeof document
          ? {
              body: {},
              addEventListener: function() {},
              removeEventListener: function() {},
              activeElement: { blur: function() {}, nodeName: "" },
              querySelector: function() {
                return null;
              },
              querySelectorAll: function() {
                return [];
              },
              getElementById: function() {
                return null;
              },
              createEvent: function() {
                return { initEvent: function() {} };
              },
              createElement: function() {
                return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function() {},
                  getElementsByTagName: function() {
                    return [];
                  }
                };
              },
              location: { hash: "" }
            }
          : document,
      a =
        "undefined" == typeof window
          ? {
              document: i,
              navigator: { userAgent: "" },
              location: {},
              history: {},
              CustomEvent: function() {
                return this;
              },
              addEventListener: function() {},
              removeEventListener: function() {},
              getComputedStyle: function() {
                return {
                  getPropertyValue: function() {
                    return "";
                  }
                };
              },
              Image: function() {},
              Date: function() {},
              screen: {},
              setTimeout: function() {},
              clearTimeout: function() {}
            }
          : window;
    class n {
      constructor(e) {
        const t = this;
        for (let s = 0; s < e.length; s += 1) t[s] = e[s];
        return (t.length = e.length), this;
      }
    }
    function r(e, t) {
      const s = [];
      let r = 0;
      if (e && !t && e instanceof n) return e;
      if (e)
        if ("string" == typeof e) {
          let a, n;
          const o = e.trim();
          if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
            let e = "div";
            for (
              0 === o.indexOf("<li") && (e = "ul"),
                0 === o.indexOf("<tr") && (e = "tbody"),
                (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                  (e = "tr"),
                0 === o.indexOf("<tbody") && (e = "table"),
                0 === o.indexOf("<option") && (e = "select"),
                (n = i.createElement(e)).innerHTML = o,
                r = 0;
              r < n.childNodes.length;
              r += 1
            )
              s.push(n.childNodes[r]);
          } else
            for (
              a =
                t || "#" !== e[0] || e.match(/[ .<>:~]/)
                  ? (t || i).querySelectorAll(e.trim())
                  : [i.getElementById(e.trim().split("#")[1])],
                r = 0;
              r < a.length;
              r += 1
            )
              a[r] && s.push(a[r]);
        } else if (e.nodeType || e === a || e === i) s.push(e);
        else if (e.length > 0 && e[0].nodeType)
          for (r = 0; r < e.length; r += 1) s.push(e[r]);
      return new n(s);
    }
    function o(e) {
      const t = [];
      for (let s = 0; s < e.length; s += 1)
        -1 === t.indexOf(e[s]) && t.push(e[s]);
      return t;
    }
    (r.fn = n.prototype), (r.Class = n), (r.Dom7 = n);
    "resize scroll".split(" ");
    const l = {
      addClass: function(e) {
        if (void 0 === e) return this;
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let s = 0; s < this.length; s += 1)
            void 0 !== this[s] &&
              void 0 !== this[s].classList &&
              this[s].classList.add(t[e]);
        return this;
      },
      removeClass: function(e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let s = 0; s < this.length; s += 1)
            void 0 !== this[s] &&
              void 0 !== this[s].classList &&
              this[s].classList.remove(t[e]);
        return this;
      },
      hasClass: function(e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function(e) {
        const t = e.split(" ");
        for (let e = 0; e < t.length; e += 1)
          for (let s = 0; s < this.length; s += 1)
            void 0 !== this[s] &&
              void 0 !== this[s].classList &&
              this[s].classList.toggle(t[e]);
        return this;
      },
      attr: function(e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function(e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      data: function(e, t) {
        let s;
        if (void 0 !== t) {
          for (let i = 0; i < this.length; i += 1)
            (s = this[i]).dom7ElementDataStorage ||
              (s.dom7ElementDataStorage = {}),
              (s.dom7ElementDataStorage[e] = t);
          return this;
        }
        if ((s = this[0])) {
          if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage)
            return s.dom7ElementDataStorage[e];
          const t = s.getAttribute(`data-${e}`);
          return t || void 0;
        }
      },
      transform: function(e) {
        for (let t = 0; t < this.length; t += 1) {
          const s = this[t].style;
          (s.webkitTransform = e), (s.transform = e);
        }
        return this;
      },
      transition: function(e) {
        "string" != typeof e && (e = `${e}ms`);
        for (let t = 0; t < this.length; t += 1) {
          const s = this[t].style;
          (s.webkitTransitionDuration = e), (s.transitionDuration = e);
        }
        return this;
      },
      on: function(...e) {
        let [t, s, i, a] = e;
        function n(e) {
          const t = e.target;
          if (!t) return;
          const a = e.target.dom7EventData || [];
          if ((a.indexOf(e) < 0 && a.unshift(e), r(t).is(s))) i.apply(t, a);
          else {
            const e = r(t).parents();
            for (let t = 0; t < e.length; t += 1)
              r(e[t]).is(s) && i.apply(e[t], a);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)),
          a || (a = !1);
        const l = t.split(" ");
        let d;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (d = 0; d < l.length; d += 1) {
              const e = l[d];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: n }),
                t.addEventListener(e, n, a);
            }
          else
            for (d = 0; d < l.length; d += 1) {
              const e = l[d];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, a);
            }
        }
        return this;
      },
      off: function(...e) {
        let [t, s, i, a] = e;
        "function" == typeof e[1] && (([t, i, a] = e), (s = void 0)),
          a || (a = !1);
        const n = t.split(" ");
        for (let e = 0; e < n.length; e += 1) {
          const t = n[e];
          for (let e = 0; e < this.length; e += 1) {
            const n = this[e];
            let r;
            if (
              (!s && n.dom7Listeners
                ? (r = n.dom7Listeners[t])
                : s && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                i && s.listener === i
                  ? (n.removeEventListener(t, s.proxyListener, a),
                    r.splice(e, 1))
                  : i ||
                    (n.removeEventListener(t, s.proxyListener, a),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function(...e) {
        const t = e[0].split(" "),
          s = e[1];
        for (let n = 0; n < t.length; n += 1) {
          const r = t[n];
          for (let t = 0; t < this.length; t += 1) {
            const n = this[t];
            let o;
            try {
              o = new a.CustomEvent(r, {
                detail: s,
                bubbles: !0,
                cancelable: !0
              });
            } catch (e) {
              (o = i.createEvent("Event")).initEvent(r, !0, !0), (o.detail = s);
            }
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(o),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
        return this;
      },
      transitionEnd: function(e) {
        const t = ["webkitTransitionEnd", "transitionend"],
          s = this;
        let i;
        function a(n) {
          if (n.target === this)
            for (e.call(this, n), i = 0; i < t.length; i += 1) s.off(t[i], a);
        }
        if (e) for (i = 0; i < t.length; i += 1) s.on(t[i], a);
        return this;
      },
      outerWidth: function(e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function(e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      offset: function() {
        if (this.length > 0) {
          const e = this[0],
            t = e.getBoundingClientRect(),
            s = i.body,
            n = e.clientTop || s.clientTop || 0,
            r = e.clientLeft || s.clientLeft || 0,
            o = e === a ? a.scrollY : e.scrollTop,
            l = e === a ? a.scrollX : e.scrollLeft;
          return { top: t.top + o - n, left: t.left + l - r };
        }
        return null;
      },
      css: function(e, t) {
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (let t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return a.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function(e) {
        if (!e) return this;
        for (let t = 0; t < this.length; t += 1)
          if (!1 === e.call(this[t], t, this[t])) return this;
        return this;
      },
      html: function(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function(e) {
        const t = this[0];
        let s, o;
        if (!t || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (t.matches) return t.matches(e);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          if (t.msMatchesSelector) return t.msMatchesSelector(e);
          for (s = r(e), o = 0; o < s.length; o += 1) if (s[o] === t) return !0;
          return !1;
        }
        if (e === i) return t === i;
        if (e === a) return t === a;
        if (e.nodeType || e instanceof n) {
          for (s = e.nodeType ? [e] : e, o = 0; o < s.length; o += 1)
            if (s[o] === t) return !0;
          return !1;
        }
        return !1;
      },
      index: function() {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function(e) {
        if (void 0 === e) return this;
        const t = this.length;
        let s;
        return new n(
          e > t - 1
            ? []
            : e < 0
            ? (s = t + e) < 0
              ? []
              : [this[s]]
            : [this[e]]
        );
      },
      append: function(...e) {
        let t;
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = i.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof n)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function(e) {
        let t, s;
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            const a = i.createElement("div");
            for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1)
              this[t].insertBefore(a.childNodes[s], this[t].childNodes[0]);
          } else if (e instanceof n)
            for (s = 0; s < e.length; s += 1)
              this[t].insertBefore(e[s], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function(e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e)
              ? new n([this[0].nextElementSibling])
              : new n([])
            : this[0].nextElementSibling
            ? new n([this[0].nextElementSibling])
            : new n([])
          : new n([]);
      },
      nextAll: function(e) {
        const t = [];
        let s = this[0];
        if (!s) return new n([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? r(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return new n(t);
      },
      prev: function(e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && r(t.previousElementSibling).is(e)
              ? new n([t.previousElementSibling])
              : new n([])
            : t.previousElementSibling
            ? new n([t.previousElementSibling])
            : new n([]);
        }
        return new n([]);
      },
      prevAll: function(e) {
        const t = [];
        let s = this[0];
        if (!s) return new n([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? r(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return new n(t);
      },
      parent: function(e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? r(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return r(o(t));
      },
      parents: function(e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? r(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return r(o(t));
      },
      closest: function(e) {
        let t = this;
        return void 0 === e
          ? new n([])
          : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function(e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return new n(t);
      },
      children: function(e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].childNodes;
          for (let s = 0; s < i.length; s += 1)
            e
              ? 1 === i[s].nodeType && r(i[s]).is(e) && t.push(i[s])
              : 1 === i[s].nodeType && t.push(i[s]);
        }
        return new n(o(t));
      },
      remove: function() {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function(...e) {
        const t = this;
        let s, i;
        for (s = 0; s < e.length; s += 1) {
          const a = r(e[s]);
          for (i = 0; i < a.length; i += 1)
            (t[t.length] = a[i]), (t.length += 1);
        }
        return t;
      },
      styles: function() {
        return this[0] ? a.getComputedStyle(this[0], null) : {};
      }
    };
    Object.keys(l).forEach(e => {
      r.fn[e] = l[e];
    });
    const d = {
        deleteProps(e) {
          const t = e;
          Object.keys(t).forEach(e => {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        },
        nextTick: (e, t = 0) => setTimeout(e, t),
        now: () => Date.now(),
        getTranslate(e, t = "x") {
          let s, i, n;
          const r = a.getComputedStyle(e, null);
          return (
            a.WebKitCSSMatrix
              ? ((i = r.transform || r.webkitTransform).split(",").length > 6 &&
                  (i = i
                    .split(", ")
                    .map(e => e.replace(",", "."))
                    .join(", ")),
                (n = new a.WebKitCSSMatrix("none" === i ? "" : i)))
              : (s = (n =
                  r.MozTransform ||
                  r.OTransform ||
                  r.MsTransform ||
                  r.msTransform ||
                  r.transform ||
                  r
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,"))
                  .toString()
                  .split(",")),
            "x" === t &&
              (i = a.WebKitCSSMatrix
                ? n.m41
                : 16 === s.length
                ? parseFloat(s[12])
                : parseFloat(s[4])),
            "y" === t &&
              (i = a.WebKitCSSMatrix
                ? n.m42
                : 16 === s.length
                ? parseFloat(s[13])
                : parseFloat(s[5])),
            i || 0
          );
        },
        parseUrlQuery(e) {
          const t = {};
          let s,
            i,
            n,
            r,
            o = e || a.location.href;
          if ("string" == typeof o && o.length)
            for (
              r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
                .split("&")
                .filter(e => "" !== e)).length,
                s = 0;
              s < r;
              s += 1
            )
              (n = i[s].replace(/#\S+/g, "").split("=")),
                (t[decodeURIComponent(n[0])] =
                  void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "");
          return t;
        },
        isObject: e =>
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object,
        extend(...e) {
          const t = Object(e[0]);
          for (let s = 1; s < e.length; s += 1) {
            const i = e[s];
            if (null != i) {
              const e = Object.keys(Object(i));
              for (let s = 0, a = e.length; s < a; s += 1) {
                const a = e[s],
                  n = Object.getOwnPropertyDescriptor(i, a);
                void 0 !== n &&
                  n.enumerable &&
                  (d.isObject(t[a]) && d.isObject(i[a])
                    ? d.extend(t[a], i[a])
                    : !d.isObject(t[a]) && d.isObject(i[a])
                    ? ((t[a] = {}), d.extend(t[a], i[a]))
                    : (t[a] = i[a]));
              }
            }
          }
          return t;
        }
      },
      c = (function() {
        const e = i.createElement("div");
        return {
          touch:
            (a.Modernizr && !0 === a.Modernizr.touch) ||
            !!(
              a.navigator.maxTouchPoints > 0 ||
              "ontouchstart" in a ||
              (a.DocumentTouch && i instanceof a.DocumentTouch)
            ),
          pointerEvents: !!(
            a.navigator.pointerEnabled ||
            a.PointerEvent ||
            "maxTouchPoints" in a.navigator
          ),
          prefixedPointerEvents: !!a.navigator.msPointerEnabled,
          transition: (function() {
            const t = e.style;
            return (
              "transition" in t ||
              "webkitTransition" in t ||
              "MozTransition" in t
            );
          })(),
          transforms3d:
            (a.Modernizr && !0 === a.Modernizr.csstransforms3d) ||
            (function() {
              const t = e.style;
              return (
                "webkitPerspective" in t ||
                "MozPerspective" in t ||
                "OPerspective" in t ||
                "MsPerspective" in t ||
                "perspective" in t
              );
            })(),
          flexbox: (function() {
            const t = e.style,
              s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                " "
              );
            for (let e = 0; e < s.length; e += 1) if (s[e] in t) return !0;
            return !1;
          })(),
          observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
          passiveListener: (function() {
            let e = !1;
            try {
              const t = Object.defineProperty({}, "passive", {
                get() {
                  e = !0;
                }
              });
              a.addEventListener("testPassiveListener", null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: "ongesturestart" in a
        };
      })();
    class p {
      constructor(e = {}) {
        const t = this;
        (t.params = e),
          (t.eventsListeners = {}),
          t.params &&
            t.params.on &&
            Object.keys(t.params.on).forEach(e => {
              t.on(e, t.params.on[e]);
            });
      }
      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const a = s ? "unshift" : "push";
        return (
          e.split(" ").forEach(e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][a](t);
          }),
          i
        );
      }
      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        return i.on(
          e,
          function s(...a) {
            t.apply(i, a), i.off(e, s);
          },
          s
        );
      }
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach(e => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].length &&
                  s.eventsListeners[e].forEach((i, a) => {
                    i === t && s.eventsListeners[e].splice(a, 1);
                  });
            }),
            s)
          : s;
      }
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, i, a;
        return (
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
            : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
          (Array.isArray(s) ? s : s.split(" ")).forEach(e => {
            if (t.eventsListeners && t.eventsListeners[e]) {
              const s = [];
              t.eventsListeners[e].forEach(e => {
                s.push(e);
              }),
                s.forEach(e => {
                  e.apply(a, i);
                });
            }
          }),
          t
        );
      }
      useModulesParams(e) {
        const t = this;
        t.modules &&
          Object.keys(t.modules).forEach(s => {
            const i = t.modules[s];
            i.params && d.extend(e, i.params);
          });
      }
      useModules(e = {}) {
        const t = this;
        t.modules &&
          Object.keys(t.modules).forEach(s => {
            const i = t.modules[s],
              a = e[s] || {};
            i.instance &&
              Object.keys(i.instance).forEach(e => {
                const s = i.instance[e];
                t[e] = "function" == typeof s ? s.bind(t) : s;
              }),
              i.on &&
                t.on &&
                Object.keys(i.on).forEach(e => {
                  t.on(e, i.on[e]);
                }),
              i.create && i.create.bind(t)(a);
          });
      }
      static set components(e) {
        this.use && this.use(e);
      }
      static installModule(e, ...t) {
        const s = this;
        s.prototype.modules || (s.prototype.modules = {});
        const i =
          e.name || `${Object.keys(s.prototype.modules).length}_${d.now()}`;
        return (
          (s.prototype.modules[i] = e),
          e.proto &&
            Object.keys(e.proto).forEach(t => {
              s.prototype[t] = e.proto[t];
            }),
          e.static &&
            Object.keys(e.static).forEach(t => {
              s[t] = e.static[t];
            }),
          e.install && e.install.apply(s, t),
          s
        );
      }
      static use(e, ...t) {
        const s = this;
        return Array.isArray(e)
          ? (e.forEach(e => s.installModule(e)), s)
          : s.installModule(e, ...t);
      }
    }
    var u = {
      updateSize: function() {
        const e = this;
        let t, s;
        const i = e.$el;
        (t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth),
          (s =
            void 0 !== e.params.height ? e.params.height : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left"), 10) -
              parseInt(i.css("padding-right"), 10)),
            (s =
              s -
              parseInt(i.css("padding-top"), 10) -
              parseInt(i.css("padding-bottom"), 10)),
            d.extend(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s
            }));
      },
      updateSlides: function() {
        const e = this,
          t = e.params,
          { $wrapperEl: s, size: i, rtlTranslate: n, wrongRTL: r } = e,
          o = e.virtual && t.virtual.enabled,
          l = o ? e.virtual.slides.length : e.slides.length,
          p = s.children(`.${e.params.slideClass}`),
          u = o ? e.virtual.slides.length : p.length;
        let h = [];
        const m = [],
          f = [];
        let g = t.slidesOffsetBefore;
        "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
        let v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
          w = e.snapGrid.length;
        let y,
          x,
          T = t.spaceBetween,
          E = -g,
          S = 0,
          C = 0;
        if (void 0 === i) return;
        "string" == typeof T &&
          T.indexOf("%") >= 0 &&
          (T = (parseFloat(T.replace("%", "")) / 100) * i),
          (e.virtualSize = -T),
          n
            ? p.css({ marginLeft: "", marginTop: "" })
            : p.css({ marginRight: "", marginBottom: "" }),
          t.slidesPerColumn > 1 &&
            ((y =
              Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn
                ? u
                : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
        const $ = t.slidesPerColumn,
          M = y / $,
          P = Math.floor(u / t.slidesPerColumn);
        for (let s = 0; s < u; s += 1) {
          x = 0;
          const n = p.eq(s);
          if (t.slidesPerColumn > 1) {
            let i, a, r;
            "column" === t.slidesPerColumnFill
              ? ((r = s - (a = Math.floor(s / $)) * $),
                (a > P || (a === P && r === $ - 1)) &&
                  (r += 1) >= $ &&
                  ((r = 0), (a += 1)),
                (i = a + (r * y) / $),
                n.css({
                  "-webkit-box-ordinal-group": i,
                  "-moz-box-ordinal-group": i,
                  "-ms-flex-order": i,
                  "-webkit-order": i,
                  order: i
                }))
              : (a = s - (r = Math.floor(s / M)) * M),
              n
                .css(
                  `margin-${e.isHorizontal() ? "top" : "left"}`,
                  0 !== r && t.spaceBetween && `${t.spaceBetween}px`
                )
                .attr("data-swiper-column", a)
                .attr("data-swiper-row", r);
          }
          if ("none" !== n.css("display")) {
            if ("auto" === t.slidesPerView) {
              const s = a.getComputedStyle(n[0], null),
                i = n[0].style.transform,
                r = n[0].style.webkitTransform;
              i && (n[0].style.transform = "none"),
                r && (n[0].style.webkitTransform = "none"),
                (x = t.roundLengths
                  ? e.isHorizontal()
                    ? n.outerWidth(!0)
                    : n.outerHeight(!0)
                  : e.isHorizontal()
                  ? parseFloat(s.getPropertyValue("width")) +
                    parseFloat(s.getPropertyValue("padding-left")) +
                    parseFloat(s.getPropertyValue("padding-right")) +
                    parseFloat(s.getPropertyValue("margin-left")) +
                    parseFloat(s.getPropertyValue("margin-right"))
                  : parseFloat(s.getPropertyValue("height")) +
                    parseFloat(s.getPropertyValue("padding-top")) +
                    parseFloat(s.getPropertyValue("padding-bottom")) +
                    parseFloat(s.getPropertyValue("margin-top")) +
                    parseFloat(s.getPropertyValue("margin-bottom"))),
                i && (n[0].style.transform = i),
                r && (n[0].style.webkitTransform = r),
                t.roundLengths && (x = Math.floor(x));
            } else
              (x = (i - (t.slidesPerView - 1) * T) / t.slidesPerView),
                t.roundLengths && (x = Math.floor(x)),
                p[s] &&
                  (e.isHorizontal()
                    ? (p[s].style.width = `${x}px`)
                    : (p[s].style.height = `${x}px`));
            p[s] && (p[s].swiperSlideSize = x),
              f.push(x),
              t.centeredSlides
                ? ((E = E + x / 2 + S / 2 + T),
                  0 === S && 0 !== s && (E = E - i / 2 - T),
                  0 === s && (E = E - i / 2 - T),
                  Math.abs(E) < 0.001 && (E = 0),
                  t.roundLengths && (E = Math.floor(E)),
                  C % t.slidesPerGroup == 0 && h.push(E),
                  m.push(E))
                : (t.roundLengths && (E = Math.floor(E)),
                  C % t.slidesPerGroup == 0 && h.push(E),
                  m.push(E),
                  (E = E + x + T)),
              (e.virtualSize += x + T),
              (S = x),
              (C += 1);
          }
        }
        let k;
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + v),
          n &&
            r &&
            ("slide" === t.effect || "coverflow" === t.effect) &&
            s.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
          (c.flexbox && !t.setWrapperSize) ||
            (e.isHorizontal()
              ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
              : s.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
          t.slidesPerColumn > 1 &&
            ((e.virtualSize = (x + t.spaceBetween) * y),
            (e.virtualSize =
              Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
            e.isHorizontal()
              ? s.css({ width: `${e.virtualSize + t.spaceBetween}px` })
              : s.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
            t.centeredSlides))
        ) {
          k = [];
          for (let s = 0; s < h.length; s += 1) {
            let i = h[s];
            t.roundLengths && (i = Math.floor(i)),
              h[s] < e.virtualSize + h[0] && k.push(i);
          }
          h = k;
        }
        if (!t.centeredSlides) {
          k = [];
          for (let s = 0; s < h.length; s += 1) {
            let a = h[s];
            t.roundLengths && (a = Math.floor(a)),
              h[s] <= e.virtualSize - i && k.push(a);
          }
          (h = k),
            Math.floor(e.virtualSize - i) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - i);
        }
        if (
          (0 === h.length && (h = [0]),
          0 !== t.spaceBetween &&
            (e.isHorizontal()
              ? n
                ? p.css({ marginLeft: `${T}px` })
                : p.css({ marginRight: `${T}px` })
              : p.css({ marginBottom: `${T}px` })),
          t.centerInsufficientSlides)
        ) {
          let e = 0;
          if (
            (f.forEach(s => {
              e += s + (t.spaceBetween ? t.spaceBetween : 0);
            }),
            (e -= t.spaceBetween) < i)
          ) {
            const t = (i - e) / 2;
            h.forEach((e, s) => {
              h[s] = e - t;
            }),
              m.forEach((e, s) => {
                m[s] = e + t;
              });
          }
        }
        d.extend(e, {
          slides: p,
          snapGrid: h,
          slidesGrid: m,
          slidesSizesGrid: f
        }),
          u !== l && e.emit("slidesLengthChange"),
          h.length !== b &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          m.length !== w && e.emit("slidesGridLengthChange"),
          (t.watchSlidesProgress || t.watchSlidesVisibility) &&
            e.updateSlidesOffset();
      },
      updateAutoHeight: function(e) {
        const t = this,
          s = [];
        let i,
          a = 0;
        if (
          ("number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed),
          "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        )
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length) break;
            s.push(t.slides.eq(e)[0]);
          }
        else s.push(t.slides.eq(t.activeIndex)[0]);
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            a = e > a ? e : a;
          }
        a && t.$wrapperEl.css("height", `${a}px`);
      },
      updateSlidesOffset: function() {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function(e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: a } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let n = -e;
        a && (n = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const r = i[e],
            o =
              (n +
                (s.centeredSlides ? t.minTranslate() : 0) -
                r.swiperSlideOffset) /
              (r.swiperSlideSize + s.spaceBetween);
          if (s.watchSlidesVisibility) {
            const a = -(n - r.swiperSlideOffset),
              o = a + t.slidesSizesGrid[e];
            ((a >= 0 && a < t.size) ||
              (o > 0 && o <= t.size) ||
              (a <= 0 && o >= t.size)) &&
              (t.visibleSlides.push(r),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(s.slideVisibleClass));
          }
          r.progress = a ? -o : o;
        }
        t.visibleSlides = r(t.visibleSlides);
      },
      updateProgress: function(e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: a, isBeginning: n, isEnd: r } = t;
        const o = n,
          l = r;
        0 === i
          ? ((a = 0), (n = !0), (r = !0))
          : ((n = (a = (e - t.minTranslate()) / i) <= 0), (r = a >= 1)),
          d.extend(t, { progress: a, isBeginning: n, isEnd: r }),
          (s.watchSlidesProgress || s.watchSlidesVisibility) &&
            t.updateSlidesProgress(e),
          n && !o && t.emit("reachBeginning toEdge"),
          r && !l && t.emit("reachEnd toEdge"),
          ((o && !n) || (l && !r)) && t.emit("fromEdge"),
          t.emit("progress", a);
      },
      updateSlidesClasses: function() {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: a,
            realIndex: n
          } = e,
          r = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${
            s.slideDuplicateActiveClass
          } ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${a}"]`
              )
            : t.eq(a)).addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${n}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${n}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = o
          .nextAll(`.${s.slideClass}`)
          .eq(0)
          .addClass(s.slideNextClass);
        s.loop && 0 === l.length && (l = t.eq(0)).addClass(s.slideNextClass);
        let d = o
          .prevAll(`.${s.slideClass}`)
          .eq(0)
          .addClass(s.slidePrevClass);
        s.loop && 0 === d.length && (d = t.eq(-1)).addClass(s.slidePrevClass),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass));
      },
      updateActiveIndex: function(e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: a,
            params: n,
            activeIndex: r,
            realIndex: o,
            snapIndex: l
          } = t;
        let c,
          p = e;
        if (void 0 === p) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (p = e)
                : s >= i[e] && s < i[e + 1] && (p = e + 1)
              : s >= i[e] && (p = e);
          n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
        }
        if (
          ((c =
            a.indexOf(s) >= 0
              ? a.indexOf(s)
              : Math.floor(p / n.slidesPerGroup)) >= a.length &&
            (c = a.length - 1),
          p === r)
        )
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(p).attr("data-swiper-slide-index") || p,
          10
        );
        d.extend(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: r,
          activeIndex: p
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          t.emit("slideChange");
      },
      updateClickedSlide: function(e) {
        const t = this,
          s = t.params,
          i = r(e.target).closest(`.${s.slideClass}`)[0];
        let a = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            t.slides[e] === i && (a = !0);
        if (!i || !a)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                r(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = r(i).index()),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      }
    };
    var h = {
      getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: a
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        let n = d.getTranslate(a[0], e);
        return s && (n = -n), n || 0;
      },
      setTranslate: function(e, t) {
        const s = this,
          { rtlTranslate: i, params: a, $wrapperEl: n, progress: r } = s;
        let o,
          l = 0,
          d = 0;
        s.isHorizontal() ? (l = i ? -e : e) : (d = e),
          a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
          a.virtualTranslate ||
            (c.transforms3d
              ? n.transform(`translate3d(${l}px, ${d}px, 0px)`)
              : n.transform(`translate(${l}px, ${d}px)`)),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : d);
        const p = s.maxTranslate() - s.minTranslate();
        (o = 0 === p ? 0 : (e - s.minTranslate()) / p) !== r &&
          s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function() {
        return -this.snapGrid[0];
      },
      maxTranslate: function() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }
    };
    var m = {
      setTransition: function(e, t) {
        this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function(e = !0, t) {
        const s = this,
          { activeIndex: i, params: a, previousIndex: n } = s;
        a.autoHeight && s.updateAutoHeight();
        let r = t;
        if (
          (r || (r = i > n ? "next" : i < n ? "prev" : "reset"),
          s.emit("transitionStart"),
          e && i !== n)
        ) {
          if ("reset" === r) return void s.emit("slideResetTransitionStart");
          s.emit("slideChangeTransitionStart"),
            "next" === r
              ? s.emit("slideNextTransitionStart")
              : s.emit("slidePrevTransitionStart");
        }
      },
      transitionEnd: function(e = !0, t) {
        const s = this,
          { activeIndex: i, previousIndex: a } = s;
        (s.animating = !1), s.setTransition(0);
        let n = t;
        if (
          (n || (n = i > a ? "next" : i < a ? "prev" : "reset"),
          s.emit("transitionEnd"),
          e && i !== a)
        ) {
          if ("reset" === n) return void s.emit("slideResetTransitionEnd");
          s.emit("slideChangeTransitionEnd"),
            "next" === n
              ? s.emit("slideNextTransitionEnd")
              : s.emit("slidePrevTransitionEnd");
        }
      }
    };
    var f = {
      slideTo: function(e = 0, t = this.params.speed, s = !0, i) {
        const a = this;
        let n = e;
        n < 0 && (n = 0);
        const {
          params: r,
          snapGrid: o,
          slidesGrid: l,
          previousIndex: d,
          activeIndex: p,
          rtlTranslate: u
        } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        let h = Math.floor(n / r.slidesPerGroup);
        h >= o.length && (h = o.length - 1),
          (p || r.initialSlide || 0) === (d || 0) &&
            s &&
            a.emit("beforeSlideChangeStart");
        const m = -o[h];
        if ((a.updateProgress(m), r.normalizeSlideIndex))
          for (let e = 0; e < l.length; e += 1)
            -Math.floor(100 * m) >= Math.floor(100 * l[e]) && (n = e);
        if (a.initialized && n !== p) {
          if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
            return !1;
          if (
            !a.allowSlidePrev &&
            m > a.translate &&
            m > a.maxTranslate() &&
            (p || 0) !== n
          )
            return !1;
        }
        let f;
        return (
          (f = n > p ? "next" : n < p ? "prev" : "reset"),
          (u && -m === a.translate) || (!u && m === a.translate)
            ? (a.updateActiveIndex(n),
              r.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              "slide" !== r.effect && a.setTranslate(m),
              "reset" !== f && (a.transitionStart(s, f), a.transitionEnd(s, f)),
              !1)
            : (0 !== t && c.transition
                ? (a.setTransition(t),
                  a.setTranslate(m),
                  a.updateActiveIndex(n),
                  a.updateSlidesClasses(),
                  a.emit("beforeTransitionStart", t, i),
                  a.transitionStart(s, f),
                  a.animating ||
                    ((a.animating = !0),
                    a.onSlideToWrapperTransitionEnd ||
                      (a.onSlideToWrapperTransitionEnd = function(e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            a.onSlideToWrapperTransitionEnd
                          ),
                          a.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            a.onSlideToWrapperTransitionEnd
                          ),
                          (a.onSlideToWrapperTransitionEnd = null),
                          delete a.onSlideToWrapperTransitionEnd,
                          a.transitionEnd(s, f));
                      }),
                    a.$wrapperEl[0].addEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      a.onSlideToWrapperTransitionEnd
                    )))
                : (a.setTransition(0),
                  a.setTranslate(m),
                  a.updateActiveIndex(n),
                  a.updateSlidesClasses(),
                  a.emit("beforeTransitionStart", t, i),
                  a.transitionStart(s, f),
                  a.transitionEnd(s, f)),
              !0)
        );
      },
      slideToLoop: function(e = 0, t = this.params.speed, s = !0, i) {
        const a = this;
        let n = e;
        return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
      },
      slideNext: function(e = this.params.speed, t = !0, s) {
        const i = this,
          { params: a, animating: n } = i;
        return a.loop
          ? !n &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s))
          : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s);
      },
      slidePrev: function(e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: a,
            animating: n,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l
          } = i;
        if (a.loop) {
          if (n) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const c = d(l ? i.translate : -i.translate),
          p = r.map(e => d(e)),
          u = (o.map(e => d(e)), r[p.indexOf(c)], r[p.indexOf(c) - 1]);
        let h;
        return (
          void 0 !== u && (h = o.indexOf(u)) < 0 && (h = i.activeIndex - 1),
          i.slideTo(h, e, t, s)
        );
      },
      slideReset: function(e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function(e = this.params.speed, t = !0, s) {
        const i = this;
        let a = i.activeIndex;
        const n = Math.floor(a / i.params.slidesPerGroup);
        if (n < i.snapGrid.length - 1) {
          const e = i.rtlTranslate ? i.translate : -i.translate,
            t = i.snapGrid[n];
          e - t > (i.snapGrid[n + 1] - t) / 2 && (a = i.params.slidesPerGroup);
        }
        return i.slideTo(a, e, t, s);
      },
      slideToClickedSlide: function() {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let a,
          n = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (a = parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? n < e.loopedSlides - i / 2 ||
                n > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (n = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${
                        t.slideDuplicateClass
                      })`
                    )
                    .eq(0)
                    .index()),
                  d.nextTick(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n)
              : n > e.slides.length - i
              ? (e.loopFix(),
                (n = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${
                      t.slideDuplicateClass
                    })`
                  )
                  .eq(0)
                  .index()),
                d.nextTick(() => {
                  e.slideTo(n);
                }))
              : e.slideTo(n);
        } else e.slideTo(n);
      }
    };
    var g = {
      loopCreate: function() {
        const e = this,
          { params: t, $wrapperEl: s } = e;
        s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
        let a = s.children(`.${t.slideClass}`);
        if (t.loopFillGroupWithBlank) {
          const e = t.slidesPerGroup - (a.length % t.slidesPerGroup);
          if (e !== t.slidesPerGroup) {
            for (let a = 0; a < e; a += 1) {
              const e = r(i.createElement("div")).addClass(
                `${t.slideClass} ${t.slideBlankClass}`
              );
              s.append(e);
            }
            a = s.children(`.${t.slideClass}`);
          }
        }
        "auto" !== t.slidesPerView ||
          t.loopedSlides ||
          (t.loopedSlides = a.length),
          (e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10)),
          (e.loopedSlides += t.loopAdditionalSlides),
          e.loopedSlides > a.length && (e.loopedSlides = a.length);
        const n = [],
          o = [];
        a.each((t, s) => {
          const i = r(s);
          t < e.loopedSlides && o.push(s),
            t < a.length && t >= a.length - e.loopedSlides && n.push(s),
            i.attr("data-swiper-slide-index", t);
        });
        for (let e = 0; e < o.length; e += 1)
          s.append(r(o[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (let e = n.length - 1; e >= 0; e -= 1)
          s.prepend(r(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
      },
      loopFix: function() {
        const e = this,
          {
            params: t,
            activeIndex: s,
            slides: i,
            loopedSlides: a,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: o,
            rtlTranslate: l
          } = e;
        let d;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[s] - e.getTranslate();
        s < a
          ? ((d = i.length - 3 * a + s),
            (d += a),
            e.slideTo(d, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((l ? -e.translate : e.translate) - c))
          : (("auto" === t.slidesPerView && s >= 2 * a) || s >= i.length - a) &&
            ((d = -i.length + s + a),
            (d += a),
            e.slideTo(d, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((l ? -e.translate : e.translate) - c));
        (e.allowSlidePrev = n), (e.allowSlideNext = r);
      },
      loopDestroy: function() {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${
              t.slideBlankClass
            }`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      }
    };
    var v = {
      setGrabCursor: function(e) {
        if (
          c.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked)
        )
          return;
        const t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      },
      unsetGrabCursor: function() {
        c.touch ||
          (this.params.watchOverflow && this.isLocked) ||
          (this.el.style.cursor = "");
      }
    };
    var b = {
      appendSlide: function(e) {
        const t = this,
          { $wrapperEl: s, params: i } = t;
        if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
          for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        i.loop && t.loopCreate(), (i.observer && c.observer) || t.update();
      },
      prependSlide: function(e) {
        const t = this,
          { params: s, $wrapperEl: i, activeIndex: a } = t;
        s.loop && t.loopDestroy();
        let n = a + 1;
        if ("object" == typeof e && "length" in e) {
          for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
          n = a + e.length;
        } else i.prepend(e);
        s.loop && t.loopCreate(),
          (s.observer && c.observer) || t.update(),
          t.slideTo(n, 0, !1);
      },
      addSlide: function(e, t) {
        const s = this,
          { $wrapperEl: i, params: a, activeIndex: n } = s;
        let r = n;
        a.loop &&
          ((r -= s.loopedSlides),
          s.loopDestroy(),
          (s.slides = i.children(`.${a.slideClass}`)));
        const o = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= o) return void s.appendSlide(t);
        let l = r > e ? r + 1 : r;
        const d = [];
        for (let t = o - 1; t >= e; t -= 1) {
          const e = s.slides.eq(t);
          e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
          l = r > e ? r + t.length : r;
        } else i.append(t);
        for (let e = 0; e < d.length; e += 1) i.append(d[e]);
        a.loop && s.loopCreate(),
          (a.observer && c.observer) || s.update(),
          a.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1);
      },
      removeSlide: function(e) {
        const t = this,
          { params: s, $wrapperEl: i, activeIndex: a } = t;
        let n = a;
        s.loop &&
          ((n -= t.loopedSlides),
          t.loopDestroy(),
          (t.slides = i.children(`.${s.slideClass}`)));
        let r,
          o = n;
        if ("object" == typeof e && "length" in e) {
          for (let s = 0; s < e.length; s += 1)
            (r = e[s]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < o && (o -= 1);
          o = Math.max(o, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < o && (o -= 1),
            (o = Math.max(o, 0));
        s.loop && t.loopCreate(),
          (s.observer && c.observer) || t.update(),
          s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
      },
      removeAllSlides: function() {
        const e = this,
          t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t);
      }
    };
    const w = (function() {
      const e = a.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: a.cordova || a.phonegap,
          phonegap: a.cordova || a.phonegap
        },
        s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = e.match(/(iPad).*OS\s([\d_]+)/),
        o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (s && ((t.os = "windows"), (t.osVersion = s[2]), (t.windows = !0)),
        n &&
          !s &&
          ((t.os = "android"),
          (t.osVersion = n[2]),
          (t.android = !0),
          (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
        (r || l || o) && ((t.os = "ios"), (t.ios = !0)),
        l && !o && ((t.osVersion = l[2].replace(/_/g, ".")), (t.iphone = !0)),
        r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
        o &&
          ((t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null),
          (t.iphone = !0)),
        t.ios &&
          t.osVersion &&
          e.indexOf("Version/") >= 0 &&
          "10" === t.osVersion.split(".")[0] &&
          (t.osVersion = e
            .toLowerCase()
            .split("version/")[1]
            .split(" ")[0]),
        (t.desktop = !(t.os || t.android || t.webView)),
        (t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        t.os && "ios" === t.os)
      ) {
        const e = t.osVersion.split("."),
          s = i.querySelector('meta[name="viewport"]');
        t.minimalUi =
          !t.webView &&
          (o || l) &&
          (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) &&
          s &&
          s.getAttribute("content").indexOf("minimal-ui") >= 0;
      }
      return (t.pixelRatio = a.devicePixelRatio || 1), t;
    })();
    function y() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e;
      if (
        ((e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        t.freeMode)
      ) {
        const s = Math.min(
          Math.max(e.translate, e.maxTranslate()),
          e.minTranslate()
        );
        e.setTranslate(s),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          t.autoHeight && e.updateAutoHeight();
      } else
        e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0);
      (e.allowSlidePrev = a),
        (e.allowSlideNext = i),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
    }
    var x = {
      attachEvents: function() {
        const e = this,
          { params: t, touchEvents: s, el: n, wrapperEl: o } = e;
        (e.onTouchStart = function(e) {
          const t = this,
            s = t.touchEventsData,
            { params: n, touches: o } = t;
          if (t.animating && n.preventInteractionOnTransition) return;
          let l = e;
          if (
            (l.originalEvent && (l = l.originalEvent),
            (s.isTouchEvent = "touchstart" === l.type),
            !s.isTouchEvent && "which" in l && 3 === l.which)
          )
            return;
          if (!s.isTouchEvent && "button" in l && l.button > 0) return;
          if (s.isTouched && s.isMoved) return;
          if (
            n.noSwiping &&
            r(l.target).closest(
              n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
            )[0]
          )
            return void (t.allowClick = !0);
          if (n.swipeHandler && !r(l).closest(n.swipeHandler)[0]) return;
          (o.currentX =
            "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
            (o.currentY =
              "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
          const c = o.currentX,
            p = o.currentY,
            u = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
            h = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
          if (!u || !(c <= h || c >= a.screen.width - h)) {
            if (
              (d.extend(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }),
              (o.startX = c),
              (o.startY = p),
              (s.touchStartTime = d.now()),
              (t.allowClick = !0),
              t.updateSize(),
              (t.swipeDirection = void 0),
              n.threshold > 0 && (s.allowThresholdMove = !1),
              "touchstart" !== l.type)
            ) {
              let e = !0;
              r(l.target).is(s.formElements) && (e = !1),
                i.activeElement &&
                  r(i.activeElement).is(s.formElements) &&
                  i.activeElement !== l.target &&
                  i.activeElement.blur();
              const a = e && t.allowTouchMove && n.touchStartPreventDefault;
              (n.touchStartForcePreventDefault || a) && l.preventDefault();
            }
            t.emit("touchStart", l);
          }
        }.bind(e)),
          (e.onTouchMove = function(e) {
            const t = this,
              s = t.touchEventsData,
              { params: a, touches: n, rtlTranslate: o } = t;
            let l = e;
            if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
              return void (
                s.startMoving &&
                s.isScrolling &&
                t.emit("touchMoveOpposite", l)
              );
            if (s.isTouchEvent && "mousemove" === l.type) return;
            const c =
                "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
              p = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
            if (l.preventedByNestedSwiper)
              return (n.startX = c), void (n.startY = p);
            if (!t.allowTouchMove)
              return (
                (t.allowClick = !1),
                void (
                  s.isTouched &&
                  (d.extend(n, {
                    startX: c,
                    startY: p,
                    currentX: c,
                    currentY: p
                  }),
                  (s.touchStartTime = d.now()))
                )
              );
            if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
              if (t.isVertical()) {
                if (
                  (p < n.startY && t.translate <= t.maxTranslate()) ||
                  (p > n.startY && t.translate >= t.minTranslate())
                )
                  return (s.isTouched = !1), void (s.isMoved = !1);
              } else if (
                (c < n.startX && t.translate <= t.maxTranslate()) ||
                (c > n.startX && t.translate >= t.minTranslate())
              )
                return;
            if (
              s.isTouchEvent &&
              i.activeElement &&
              l.target === i.activeElement &&
              r(l.target).is(s.formElements)
            )
              return (s.isMoved = !0), void (t.allowClick = !1);
            if (
              (s.allowTouchCallbacks && t.emit("touchMove", l),
              l.targetTouches && l.targetTouches.length > 1)
            )
              return;
            (n.currentX = c), (n.currentY = p);
            const u = n.currentX - n.startX,
              h = n.currentY - n.startY;
            if (
              t.params.threshold &&
              Math.sqrt(u ** 2 + h ** 2) < t.params.threshold
            )
              return;
            if (void 0 === s.isScrolling) {
              let e;
              (t.isHorizontal() && n.currentY === n.startY) ||
              (t.isVertical() && n.currentX === n.startX)
                ? (s.isScrolling = !1)
                : u * u + h * h >= 25 &&
                  ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
                  (s.isScrolling = t.isHorizontal()
                    ? e > a.touchAngle
                    : 90 - e > a.touchAngle));
            }
            if (
              (s.isScrolling && t.emit("touchMoveOpposite", l),
              void 0 === s.startMoving &&
                ((n.currentX === n.startX && n.currentY === n.startY) ||
                  (s.startMoving = !0)),
              s.isScrolling)
            )
              return void (s.isTouched = !1);
            if (!s.startMoving) return;
            (t.allowClick = !1),
              l.preventDefault(),
              a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
              s.isMoved ||
                (a.loop && t.loopFix(),
                (s.startTranslate = t.getTranslate()),
                t.setTransition(0),
                t.animating &&
                  t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                (s.allowMomentumBounce = !1),
                !a.grabCursor ||
                  (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
                  t.setGrabCursor(!0),
                t.emit("sliderFirstMove", l)),
              t.emit("sliderMove", l),
              (s.isMoved = !0);
            let m = t.isHorizontal() ? u : h;
            (n.diff = m),
              (m *= a.touchRatio),
              o && (m = -m),
              (t.swipeDirection = m > 0 ? "prev" : "next"),
              (s.currentTranslate = m + s.startTranslate);
            let f = !0,
              g = a.resistanceRatio;
            if (
              (a.touchReleaseOnEdges && (g = 0),
              m > 0 && s.currentTranslate > t.minTranslate()
                ? ((f = !1),
                  a.resistance &&
                    (s.currentTranslate =
                      t.minTranslate() -
                      1 +
                      (-t.minTranslate() + s.startTranslate + m) ** g))
                : m < 0 &&
                  s.currentTranslate < t.maxTranslate() &&
                  ((f = !1),
                  a.resistance &&
                    (s.currentTranslate =
                      t.maxTranslate() +
                      1 -
                      (t.maxTranslate() - s.startTranslate - m) ** g)),
              f && (l.preventedByNestedSwiper = !0),
              !t.allowSlideNext &&
                "next" === t.swipeDirection &&
                s.currentTranslate < s.startTranslate &&
                (s.currentTranslate = s.startTranslate),
              !t.allowSlidePrev &&
                "prev" === t.swipeDirection &&
                s.currentTranslate > s.startTranslate &&
                (s.currentTranslate = s.startTranslate),
              a.threshold > 0)
            ) {
              if (!(Math.abs(m) > a.threshold || s.allowThresholdMove))
                return void (s.currentTranslate = s.startTranslate);
              if (!s.allowThresholdMove)
                return (
                  (s.allowThresholdMove = !0),
                  (n.startX = n.currentX),
                  (n.startY = n.currentY),
                  (s.currentTranslate = s.startTranslate),
                  void (n.diff = t.isHorizontal()
                    ? n.currentX - n.startX
                    : n.currentY - n.startY)
                );
            }
            a.followFinger &&
              ((a.freeMode ||
                a.watchSlidesProgress ||
                a.watchSlidesVisibility) &&
                (t.updateActiveIndex(), t.updateSlidesClasses()),
              a.freeMode &&
                (0 === s.velocities.length &&
                  s.velocities.push({
                    position: n[t.isHorizontal() ? "startX" : "startY"],
                    time: s.touchStartTime
                  }),
                s.velocities.push({
                  position: n[t.isHorizontal() ? "currentX" : "currentY"],
                  time: d.now()
                })),
              t.updateProgress(s.currentTranslate),
              t.setTranslate(s.currentTranslate));
          }.bind(e)),
          (e.onTouchEnd = function(e) {
            const t = this,
              s = t.touchEventsData,
              {
                params: i,
                touches: a,
                rtlTranslate: n,
                $wrapperEl: r,
                slidesGrid: o,
                snapGrid: l
              } = t;
            let c = e;
            if (
              (c.originalEvent && (c = c.originalEvent),
              s.allowTouchCallbacks && t.emit("touchEnd", c),
              (s.allowTouchCallbacks = !1),
              !s.isTouched)
            )
              return (
                s.isMoved && i.grabCursor && t.setGrabCursor(!1),
                (s.isMoved = !1),
                void (s.startMoving = !1)
              );
            i.grabCursor &&
              s.isMoved &&
              s.isTouched &&
              (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
              t.setGrabCursor(!1);
            const p = d.now(),
              u = p - s.touchStartTime;
            if (
              (t.allowClick &&
                (t.updateClickedSlide(c),
                t.emit("tap", c),
                u < 300 &&
                  p - s.lastClickTime > 300 &&
                  (s.clickTimeout && clearTimeout(s.clickTimeout),
                  (s.clickTimeout = d.nextTick(() => {
                    t && !t.destroyed && t.emit("click", c);
                  }, 300))),
                u < 300 &&
                  p - s.lastClickTime < 300 &&
                  (s.clickTimeout && clearTimeout(s.clickTimeout),
                  t.emit("doubleTap", c))),
              (s.lastClickTime = d.now()),
              d.nextTick(() => {
                t.destroyed || (t.allowClick = !0);
              }),
              !s.isTouched ||
                !s.isMoved ||
                !t.swipeDirection ||
                0 === a.diff ||
                s.currentTranslate === s.startTranslate)
            )
              return (
                (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
              );
            let h;
            if (
              ((s.isTouched = !1),
              (s.isMoved = !1),
              (s.startMoving = !1),
              (h = i.followFinger
                ? n
                  ? t.translate
                  : -t.translate
                : -s.currentTranslate),
              i.freeMode)
            ) {
              if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
              if (h > -t.maxTranslate())
                return void (t.slides.length < l.length
                  ? t.slideTo(l.length - 1)
                  : t.slideTo(t.slides.length - 1));
              if (i.freeModeMomentum) {
                if (s.velocities.length > 1) {
                  const e = s.velocities.pop(),
                    a = s.velocities.pop(),
                    n = e.position - a.position,
                    r = e.time - a.time;
                  (t.velocity = n / r),
                    (t.velocity /= 2),
                    Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                      (t.velocity = 0),
                    (r > 150 || d.now() - e.time > 300) && (t.velocity = 0);
                } else t.velocity = 0;
                (t.velocity *= i.freeModeMomentumVelocityRatio),
                  (s.velocities.length = 0);
                let e = 1e3 * i.freeModeMomentumRatio;
                const a = t.velocity * e;
                let o = t.translate + a;
                n && (o = -o);
                let c,
                  p = !1;
                const u =
                  20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                let h;
                if (o < t.maxTranslate())
                  i.freeModeMomentumBounce
                    ? (o + t.maxTranslate() < -u && (o = t.maxTranslate() - u),
                      (c = t.maxTranslate()),
                      (p = !0),
                      (s.allowMomentumBounce = !0))
                    : (o = t.maxTranslate()),
                    i.loop && i.centeredSlides && (h = !0);
                else if (o > t.minTranslate())
                  i.freeModeMomentumBounce
                    ? (o - t.minTranslate() > u && (o = t.minTranslate() + u),
                      (c = t.minTranslate()),
                      (p = !0),
                      (s.allowMomentumBounce = !0))
                    : (o = t.minTranslate()),
                    i.loop && i.centeredSlides && (h = !0);
                else if (i.freeModeSticky) {
                  let e;
                  for (let t = 0; t < l.length; t += 1)
                    if (l[t] > -o) {
                      e = t;
                      break;
                    }
                  o = -(o =
                    Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) ||
                    "next" === t.swipeDirection
                      ? l[e]
                      : l[e - 1]);
                }
                if (
                  (h &&
                    t.once("transitionEnd", () => {
                      t.loopFix();
                    }),
                  0 !== t.velocity)
                )
                  e = n
                    ? Math.abs((-o - t.translate) / t.velocity)
                    : Math.abs((o - t.translate) / t.velocity);
                else if (i.freeModeSticky) return void t.slideToClosest();
                i.freeModeMomentumBounce && p
                  ? (t.updateProgress(c),
                    t.setTransition(e),
                    t.setTranslate(o),
                    t.transitionStart(!0, t.swipeDirection),
                    (t.animating = !0),
                    r.transitionEnd(() => {
                      t &&
                        !t.destroyed &&
                        s.allowMomentumBounce &&
                        (t.emit("momentumBounce"),
                        t.setTransition(i.speed),
                        t.setTranslate(c),
                        r.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        }));
                    }))
                  : t.velocity
                  ? (t.updateProgress(o),
                    t.setTransition(e),
                    t.setTranslate(o),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating ||
                      ((t.animating = !0),
                      r.transitionEnd(() => {
                        t && !t.destroyed && t.transitionEnd();
                      })))
                  : t.updateProgress(o),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              } else if (i.freeModeSticky) return void t.slideToClosest();
              return void (
                (!i.freeModeMomentum || u >= i.longSwipesMs) &&
                (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
              );
            }
            let m = 0,
              f = t.slidesSizesGrid[0];
            for (let e = 0; e < o.length; e += i.slidesPerGroup)
              void 0 !== o[e + i.slidesPerGroup]
                ? h >= o[e] &&
                  h < o[e + i.slidesPerGroup] &&
                  ((m = e), (f = o[e + i.slidesPerGroup] - o[e]))
                : h >= o[e] &&
                  ((m = e), (f = o[o.length - 1] - o[o.length - 2]));
            const g = (h - o[m]) / f;
            if (u > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection &&
                (g >= i.longSwipesRatio
                  ? t.slideTo(m + i.slidesPerGroup)
                  : t.slideTo(m)),
                "prev" === t.swipeDirection &&
                  (g > 1 - i.longSwipesRatio
                    ? t.slideTo(m + i.slidesPerGroup)
                    : t.slideTo(m));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              "next" === t.swipeDirection && t.slideTo(m + i.slidesPerGroup),
                "prev" === t.swipeDirection && t.slideTo(m);
            }
          }.bind(e)),
          (e.onClick = function(e) {
            const t = this;
            t.allowClick ||
              (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
          }.bind(e));
        const l = "container" === t.touchEventsTarget ? n : o,
          p = !!t.nested;
        if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
          if (c.touch) {
            const i = !(
              "touchstart" !== s.start ||
              !c.passiveListener ||
              !t.passiveListeners
            ) && { passive: !0, capture: !1 };
            l.addEventListener(s.start, e.onTouchStart, i),
              l.addEventListener(
                s.move,
                e.onTouchMove,
                c.passiveListener ? { passive: !1, capture: p } : p
              ),
              l.addEventListener(s.end, e.onTouchEnd, i);
          }
          ((t.simulateTouch && !w.ios && !w.android) ||
            (t.simulateTouch && !c.touch && w.ios)) &&
            (l.addEventListener("mousedown", e.onTouchStart, !1),
            i.addEventListener("mousemove", e.onTouchMove, p),
            i.addEventListener("mouseup", e.onTouchEnd, !1));
        } else
          l.addEventListener(s.start, e.onTouchStart, !1),
            i.addEventListener(s.move, e.onTouchMove, p),
            i.addEventListener(s.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) &&
          l.addEventListener("click", e.onClick, !0),
          e.on(
            w.ios || w.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            y,
            !0
          );
      },
      detachEvents: function() {
        const e = this,
          { params: t, touchEvents: s, el: a, wrapperEl: n } = e,
          r = "container" === t.touchEventsTarget ? a : n,
          o = !!t.nested;
        if (c.touch || (!c.pointerEvents && !c.prefixedPointerEvents)) {
          if (c.touch) {
            const i = !(
              "onTouchStart" !== s.start ||
              !c.passiveListener ||
              !t.passiveListeners
            ) && { passive: !0, capture: !1 };
            r.removeEventListener(s.start, e.onTouchStart, i),
              r.removeEventListener(s.move, e.onTouchMove, o),
              r.removeEventListener(s.end, e.onTouchEnd, i);
          }
          ((t.simulateTouch && !w.ios && !w.android) ||
            (t.simulateTouch && !c.touch && w.ios)) &&
            (r.removeEventListener("mousedown", e.onTouchStart, !1),
            i.removeEventListener("mousemove", e.onTouchMove, o),
            i.removeEventListener("mouseup", e.onTouchEnd, !1));
        } else
          r.removeEventListener(s.start, e.onTouchStart, !1),
            i.removeEventListener(s.move, e.onTouchMove, o),
            i.removeEventListener(s.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) &&
          r.removeEventListener("click", e.onClick, !0),
          e.off(
            w.ios || w.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            y
          );
      }
    };
    var T = {
      setBreakpoint: function() {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: a
          } = e,
          n = a.breakpoints;
        if (!n || (n && 0 === Object.keys(n).length)) return;
        const r = e.getBreakpoint(n);
        if (r && e.currentBreakpoint !== r) {
          const o = r in n ? n[r] : void 0;
          o &&
            ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
              const t = o[e];
              void 0 !== t &&
                (o[e] =
                  "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                    ? "slidesPerView" === e
                      ? parseFloat(t)
                      : parseInt(t, 10)
                    : "auto");
            });
          const l = o || e.originalParams,
            c = a.loop && l.slidesPerView !== a.slidesPerView;
          d.extend(e.params, l),
            d.extend(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }),
            (e.currentBreakpoint = r),
            c &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        }
      },
      getBreakpoint: function(e) {
        const t = this;
        if (!e) return;
        let s = !1;
        const i = [];
        Object.keys(e).forEach(e => {
          i.push(e);
        }),
          i.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
        for (let e = 0; e < i.length; e += 1) {
          const n = i[e];
          t.params.breakpointsInverse
            ? n <= a.innerWidth && (s = n)
            : n >= a.innerWidth && !s && (s = n);
        }
        return s || "max";
      }
    };
    const E = (function() {
      return {
        isIE:
          !!a.navigator.userAgent.match(/Trident/g) ||
          !!a.navigator.userAgent.match(/MSIE/g),
        isEdge: !!a.navigator.userAgent.match(/Edge/g),
        isSafari: (function() {
          const e = a.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          a.navigator.userAgent
        )
      };
    })();
    var S = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    };
    const C = {
        update: u,
        translate: h,
        transition: m,
        slide: f,
        loop: g,
        grabCursor: v,
        manipulation: b,
        events: x,
        breakpoints: T,
        checkOverflow: {
          checkOverflow: function() {
            const e = this,
              t = e.isLocked;
            (e.isLocked = 1 === e.snapGrid.length),
              (e.allowSlideNext = !e.isLocked),
              (e.allowSlidePrev = !e.isLocked),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
              t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
          }
        },
        classes: {
          addClasses: function() {
            const { classNames: e, params: t, rtl: s, $el: i } = this,
              a = [];
            a.push(t.direction),
              t.freeMode && a.push("free-mode"),
              c.flexbox || a.push("no-flexbox"),
              t.autoHeight && a.push("autoheight"),
              s && a.push("rtl"),
              t.slidesPerColumn > 1 && a.push("multirow"),
              w.android && a.push("android"),
              w.ios && a.push("ios"),
              (E.isIE || E.isEdge) &&
                (c.pointerEvents || c.prefixedPointerEvents) &&
                a.push(`wp8-${t.direction}`),
              a.forEach(s => {
                e.push(t.containerModifierClass + s);
              }),
              i.addClass(e.join(" "));
          },
          removeClasses: function() {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" "));
          }
        },
        images: {
          loadImage: function(e, t, s, i, n, r) {
            let o;
            function l() {
              r && r();
            }
            e.complete && n
              ? l()
              : t
              ? (((o = new a.Image()).onload = l),
                (o.onerror = l),
                i && (o.sizes = i),
                s && (o.srcset = s),
                t && (o.src = t))
              : l();
          },
          preloadImages: function() {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          }
        }
      },
      $ = {};
    class M extends p {
      constructor(...e) {
        let t, s;
        1 === e.length && e[0].constructor && e[0].constructor === Object
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = d.extend({}, s)),
          t && !s.el && (s.el = t),
          super(s),
          Object.keys(C).forEach(e => {
            Object.keys(C[e]).forEach(t => {
              M.prototype[t] || (M.prototype[t] = C[e][t]);
            });
          });
        const i = this;
        void 0 === i.modules && (i.modules = {}),
          Object.keys(i.modules).forEach(e => {
            const t = i.modules[e];
            if (t.params) {
              const e = Object.keys(t.params)[0],
                i = t.params[e];
              if ("object" != typeof i || null === i) return;
              if (!(e in s && "enabled" in i)) return;
              !0 === s[e] && (s[e] = { enabled: !0 }),
                "object" != typeof s[e] ||
                  "enabled" in s[e] ||
                  (s[e].enabled = !0),
                s[e] || (s[e] = { enabled: !1 });
            }
          });
        const a = d.extend({}, S);
        i.useModulesParams(a),
          (i.params = d.extend({}, a, $, s)),
          (i.originalParams = d.extend({}, i.params)),
          (i.passedParams = d.extend({}, s)),
          (i.$ = r);
        const n = r(i.params.el);
        if (!(t = n[0])) return;
        if (n.length > 1) {
          const e = [];
          return (
            n.each((t, i) => {
              const a = d.extend({}, s, { el: i });
              e.push(new M(a));
            }),
            e
          );
        }
        (t.swiper = i), n.data("swiper", i);
        const o = n.children(`.${i.params.wrapperClass}`);
        return (
          d.extend(i, {
            $el: n,
            el: t,
            $wrapperEl: o,
            wrapperEl: o[0],
            classNames: [],
            slides: r(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === i.params.direction &&
              ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === o.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function() {
              const e = ["touchstart", "touchmove", "touchend"];
              let t = ["mousedown", "mousemove", "mouseup"];
              return (
                c.pointerEvents
                  ? (t = ["pointerdown", "pointermove", "pointerup"])
                  : c.prefixedPointerEvents &&
                    (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                (i.touchEventsTouch = { start: e[0], move: e[1], end: e[2] }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                c.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: d.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }),
          i.useModules(),
          i.params.init && i.init(),
          i
        );
      }
      slidesPerViewDynamic() {
        const {
          params: e,
          slides: t,
          slidesGrid: s,
          size: i,
          activeIndex: a
        } = this;
        let n = 1;
        if (e.centeredSlides) {
          let e,
            s = t[a].swiperSlideSize;
          for (let r = a + 1; r < t.length; r += 1)
            t[r] &&
              !e &&
              ((n += 1), (s += t[r].swiperSlideSize) > i && (e = !0));
          for (let r = a - 1; r >= 0; r -= 1)
            t[r] &&
              !e &&
              ((n += 1), (s += t[r].swiperSlideSize) > i && (e = !0));
        } else
          for (let e = a + 1; e < t.length; e += 1) s[e] - s[a] < i && (n += 1);
        return n;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let a;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : (a =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      init() {
        const e = this;
        e.initialized ||
          (e.emit("beforeInit"),
          e.params.breakpoints && e.setBreakpoint(),
          e.addClasses(),
          e.params.loop && e.loopCreate(),
          e.updateSize(),
          e.updateSlides(),
          e.params.watchOverflow && e.checkOverflow(),
          e.params.grabCursor && e.setGrabCursor(),
          e.params.preloadImages && e.preloadImages(),
          e.params.loop
            ? e.slideTo(
                e.params.initialSlide + e.loopedSlides,
                0,
                e.params.runCallbacksOnInit
              )
            : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
          e.attachEvents(),
          (e.initialized = !0),
          e.emit("init"));
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, $el: a, $wrapperEl: n, slides: r } = s;
        return void 0 === s.params || s.destroyed
          ? null
          : (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              a.removeAttr("style"),
              n.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach(e => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              s.$el.data("swiper", null),
              d.deleteProps(s)),
            (s.destroyed = !0),
            null);
      }
      static extendDefaults(e) {
        d.extend($, e);
      }
      static get extendedDefaults() {
        return $;
      }
      static get defaults() {
        return S;
      }
      static get Class() {
        return p;
      }
      static get $() {
        return r;
      }
    }
    var P = { name: "device", proto: { device: w }, static: { device: w } },
      k = { name: "support", proto: { support: c }, static: { support: c } },
      z = { name: "browser", proto: { browser: E }, static: { browser: E } },
      L = {
        name: "resize",
        create() {
          const e = this;
          d.extend(e, {
            resize: {
              resizeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (e.emit("beforeResize"), e.emit("resize"));
              },
              orientationChangeHandler() {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  e.emit("orientationchange");
              }
            }
          });
        },
        on: {
          init() {
            a.addEventListener("resize", this.resize.resizeHandler),
              a.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy() {
            a.removeEventListener("resize", this.resize.resizeHandler),
              a.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          }
        }
      };
    const I = {
      func: a.MutationObserver || a.WebkitMutationObserver,
      attach(e, t = {}) {
        const s = this,
          i = new (0, I.func)(e => {
            if (1 === e.length) return void s.emit("observerUpdate", e[0]);
            const t = function() {
              s.emit("observerUpdate", e[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(t)
              : a.setTimeout(t, 0);
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }),
          s.observer.observers.push(i);
      },
      init() {
        const e = this;
        if (c.observer && e.params.observer) {
          if (e.params.observeParents) {
            const t = e.$el.parents();
            for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s]);
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy() {
        this.observer.observers.forEach(e => {
          e.disconnect();
        }),
          (this.observer.observers = []);
      }
    };
    var D = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create() {
        d.extend(this, {
          observer: {
            init: I.init.bind(this),
            attach: I.attach.bind(this),
            destroy: I.destroy.bind(this),
            observers: []
          }
        });
      },
      on: {
        init() {
          this.observer.init();
        },
        destroy() {
          this.observer.destroy();
        }
      }
    };
    const O = {
      update(e) {
        const t = this,
          { slidesPerView: s, slidesPerGroup: i, centeredSlides: a } = t.params,
          { addSlidesBefore: n, addSlidesAfter: r } = t.params.virtual,
          {
            from: o,
            to: l,
            slides: c,
            slidesGrid: p,
            renderSlide: u,
            offset: h
          } = t.virtual;
        t.updateActiveIndex();
        const m = t.activeIndex || 0;
        let f, g, v;
        (f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          a
            ? ((g = Math.floor(s / 2) + i + n), (v = Math.floor(s / 2) + i + r))
            : ((g = s + (i - 1) + n), (v = i + r));
        const b = Math.max((m || 0) - v, 0),
          w = Math.min((m || 0) + g, c.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function x() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (d.extend(t.virtual, {
            from: b,
            to: w,
            offset: y,
            slidesGrid: t.slidesGrid
          }),
          o === b && l === w && !e)
        )
          return (
            t.slidesGrid !== p && y !== h && t.slides.css(f, `${y}px`),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: y,
              from: b,
              to: w,
              slides: (function() {
                const e = [];
                for (let t = b; t <= w; t += 1) e.push(c[t]);
                return e;
              })()
            }),
            void x()
          );
        const T = [],
          E = [];
        if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
        else
          for (let e = o; e <= l; e += 1)
            (e < b || e > w) &&
              t.$wrapperEl
                .find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let t = 0; t < c.length; t += 1)
          t >= b &&
            t <= w &&
            (void 0 === l || e
              ? E.push(t)
              : (t > l && E.push(t), t < o && T.push(t)));
        E.forEach(e => {
          t.$wrapperEl.append(u(c[e], e));
        }),
          T.sort((e, t) => t - e).forEach(e => {
            t.$wrapperEl.prepend(u(c[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(f, `${y}px`),
          x();
      },
      renderSlide(e, t) {
        const s = this,
          i = s.params.virtual;
        if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const a = i.renderSlide
          ? r(i.renderSlide.call(s, e, t))
          : r(
              `<div class="${
                s.params.slideClass
              }" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          a.attr("data-swiper-slide-index") ||
            a.attr("data-swiper-slide-index", t),
          i.cache && (s.virtual.cache[t] = a),
          a
        );
      },
      appendSlide(e) {
        this.virtual.slides.push(e), this.virtual.update(!0);
      },
      prependSlide(e) {
        const t = this;
        if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
          const e = t.virtual.cache,
            s = {};
          Object.keys(e).forEach(t => {
            s[t + 1] = e[t];
          }),
            (t.virtual.cache = s);
        }
        t.virtual.update(!0), t.slideNext(0);
      }
    };
    var A = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create() {
        d.extend(this, {
          virtual: {
            update: O.update.bind(this),
            appendSlide: O.appendSlide.bind(this),
            prependSlide: O.prependSlide.bind(this),
            renderSlide: O.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit() {
          const e = this;
          if (!e.params.virtual.enabled) return;
          e.classNames.push(`${e.params.containerModifierClass}virtual`);
          const t = { watchSlidesProgress: !0 };
          d.extend(e.params, t),
            d.extend(e.originalParams, t),
            e.params.initialSlide || e.virtual.update();
        },
        setTranslate() {
          this.params.virtual.enabled && this.virtual.update();
        }
      }
    };
    const N = {
      handle(e) {
        const t = this,
          { rtlTranslate: s } = t;
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const r = n.keyCode || n.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === r) || (t.isVertical() && 40 === r))
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === r) || (t.isVertical() && 38 === r))
        )
          return !1;
        if (
          !(
            n.shiftKey ||
            n.altKey ||
            n.ctrlKey ||
            n.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              ("input" === i.activeElement.nodeName.toLowerCase() ||
                "textarea" === i.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (37 === r || 39 === r || 38 === r || 40 === r)
          ) {
            let e = !1;
            if (
              t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
              0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
            )
              return;
            const i = a.innerWidth,
              n = a.innerHeight,
              r = t.$el.offset();
            s && (r.left -= t.$el[0].scrollLeft);
            const o = [
              [r.left, r.top],
              [r.left + t.width, r.top],
              [r.left, r.top + t.height],
              [r.left + t.width, r.top + t.height]
            ];
            for (let t = 0; t < o.length; t += 1) {
              const s = o[t];
              s[0] >= 0 && s[0] <= i && s[1] >= 0 && s[1] <= n && (e = !0);
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((37 !== r && 39 !== r) ||
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              ((39 === r && !s) || (37 === r && s)) && t.slideNext(),
              ((37 === r && !s) || (39 === r && s)) && t.slidePrev())
            : ((38 !== r && 40 !== r) ||
                (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)),
              40 === r && t.slideNext(),
              38 === r && t.slidePrev()),
            t.emit("keyPress", r);
        }
      },
      enable() {
        this.keyboard.enabled ||
          (r(i).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable() {
        this.keyboard.enabled &&
          (r(i).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      }
    };
    var G = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create() {
        d.extend(this, {
          keyboard: {
            enabled: !1,
            enable: N.enable.bind(this),
            disable: N.disable.bind(this),
            handle: N.handle.bind(this)
          }
        });
      },
      on: {
        init() {
          const e = this;
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy() {
          const e = this;
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
    const H = {
      lastScrollTime: d.now(),
      event:
        a.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function() {
              let e = "onwheel" in i;
              if (!e) {
                const t = i.createElement("div");
                t.setAttribute("onwheel", "return;"),
                  (e = "function" == typeof t.onwheel);
              }
              return (
                !e &&
                  i.implementation &&
                  i.implementation.hasFeature &&
                  !0 !== i.implementation.hasFeature("", "") &&
                  (e = i.implementation.hasFeature("Events.wheel", "3.0")),
                e
              );
            })()
          ? "wheel"
          : "mousewheel",
      normalize(e) {
        let t = 0,
          s = 0,
          i = 0,
          a = 0;
        return (
          "detail" in e && (s = e.detail),
          "wheelDelta" in e && (s = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
          (i = 10 * t),
          (a = 10 * s),
          "deltaY" in e && (a = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          (i || a) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (a *= 40))
              : ((i *= 800), (a *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          a && !s && (s = a < 1 ? -1 : 1),
          { spinX: t, spinY: s, pixelX: i, pixelY: a }
        );
      },
      handleMouseEnter() {
        this.mouseEntered = !0;
      },
      handleMouseLeave() {
        this.mouseEntered = !1;
      },
      handle(e) {
        let t = e;
        const s = this,
          i = s.params.mousewheel;
        if (!s.mouseEntered && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        let n = 0;
        const r = s.rtlTranslate ? -1 : 1,
          o = H.normalize(t);
        if (i.forceToAxis)
          if (s.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            n = o.pixelX * r;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            n = o.pixelY;
          }
        else
          n =
            Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
        if (0 === n) return !0;
        if ((i.invert && (n = -n), s.params.freeMode)) {
          s.params.loop && s.loopFix();
          let e = s.getTranslate() + n * i.sensitivity;
          const a = s.isBeginning,
            r = s.isEnd;
          if (
            (e >= s.minTranslate() && (e = s.minTranslate()),
            e <= s.maxTranslate() && (e = s.maxTranslate()),
            s.setTransition(0),
            s.setTranslate(e),
            s.updateProgress(),
            s.updateActiveIndex(),
            s.updateSlidesClasses(),
            ((!a && s.isBeginning) || (!r && s.isEnd)) &&
              s.updateSlidesClasses(),
            s.params.freeModeSticky &&
              (clearTimeout(s.mousewheel.timeout),
              (s.mousewheel.timeout = d.nextTick(() => {
                s.slideToClosest();
              }, 300))),
            s.emit("scroll", t),
            s.params.autoplay &&
              s.params.autoplayDisableOnInteraction &&
              s.autoplay.stop(),
            e === s.minTranslate() || e === s.maxTranslate())
          )
            return !0;
        } else {
          if (d.now() - s.mousewheel.lastScrollTime > 60)
            if (n < 0)
              if ((s.isEnd && !s.params.loop) || s.animating) {
                if (i.releaseOnEdges) return !0;
              } else s.slideNext(), s.emit("scroll", t);
            else if ((s.isBeginning && !s.params.loop) || s.animating) {
              if (i.releaseOnEdges) return !0;
            } else s.slidePrev(), s.emit("scroll", t);
          s.mousewheel.lastScrollTime = new a.Date().getTime();
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      enable() {
        const e = this;
        if (!H.event) return !1;
        if (e.mousewheel.enabled) return !1;
        let t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = r(e.params.mousewheel.eventsTarged)),
          t.on("mouseenter", e.mousewheel.handleMouseEnter),
          t.on("mouseleave", e.mousewheel.handleMouseLeave),
          t.on(H.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !0),
          !0
        );
      },
      disable() {
        const e = this;
        if (!H.event) return !1;
        if (!e.mousewheel.enabled) return !1;
        let t = e.$el;
        return (
          "container" !== e.params.mousewheel.eventsTarged &&
            (t = r(e.params.mousewheel.eventsTarged)),
          t.off(H.event, e.mousewheel.handle),
          (e.mousewheel.enabled = !1),
          !0
        );
      }
    };
    const B = {
      update() {
        const e = this,
          t = e.params.navigation;
        if (e.params.loop) return;
        const { $nextEl: s, $prevEl: i } = e.navigation;
        i &&
          i.length > 0 &&
          (e.isBeginning
            ? i.addClass(t.disabledClass)
            : i.removeClass(t.disabledClass),
          i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            t.lockClass
          )),
          s &&
            s.length > 0 &&
            (e.isEnd
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass),
            s[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass));
      },
      onPrevClick(e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick(e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init() {
        const e = this,
          t = e.params.navigation;
        if (!t.nextEl && !t.prevEl) return;
        let s, i;
        t.nextEl &&
          ((s = r(t.nextEl)),
          e.params.uniqueNavElements &&
            "string" == typeof t.nextEl &&
            s.length > 1 &&
            1 === e.$el.find(t.nextEl).length &&
            (s = e.$el.find(t.nextEl))),
          t.prevEl &&
            ((i = r(t.prevEl)),
            e.params.uniqueNavElements &&
              "string" == typeof t.prevEl &&
              i.length > 1 &&
              1 === e.$el.find(t.prevEl).length &&
              (i = e.$el.find(t.prevEl))),
          s && s.length > 0 && s.on("click", e.navigation.onNextClick),
          i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
          d.extend(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0]
          });
      },
      destroy() {
        const e = this,
          { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", e.navigation.onNextClick),
          t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", e.navigation.onPrevClick),
            s.removeClass(e.params.navigation.disabledClass));
      }
    };
    const X = {
      update() {
        const e = this,
          t = e.rtl,
          s = e.params.pagination;
        if (
          !s.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        )
          return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          a = e.pagination.$el;
        let n;
        const o = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((n = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )) >
                i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides),
              n > o - 1 && (n -= o),
              n < 0 && "bullets" !== e.params.paginationType && (n = o + n))
            : (n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let o, l, d;
          if (
            (s.dynamicBullets &&
              ((e.pagination.bulletSize = i
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              a.css(
                e.isHorizontal() ? "width" : "height",
                `${e.pagination.bulletSize * (s.dynamicMainBullets + 4)}px`
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1
                  ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1)
                  : e.pagination.dynamicBulletIndex < 0 &&
                    (e.pagination.dynamicBulletIndex = 0)),
              (o = n - e.pagination.dynamicBulletIndex),
              (d =
                ((l = o + (Math.min(i.length, s.dynamicMainBullets) - 1)) + o) /
                2)),
            i.removeClass(
              `${s.bulletActiveClass} ${s.bulletActiveClass}-next ${
                s.bulletActiveClass
              }-next-next ${s.bulletActiveClass}-prev ${
                s.bulletActiveClass
              }-prev-prev ${s.bulletActiveClass}-main`
            ),
            a.length > 1)
          )
            i.each((e, t) => {
              const i = r(t),
                a = i.index();
              a === n && i.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (a >= o &&
                    a <= l &&
                    i.addClass(`${s.bulletActiveClass}-main`),
                  a === o &&
                    i
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${s.bulletActiveClass}-prev-prev`),
                  a === l &&
                    i
                      .next()
                      .addClass(`${s.bulletActiveClass}-next`)
                      .next()
                      .addClass(`${s.bulletActiveClass}-next-next`));
            });
          else {
            if ((i.eq(n).addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i.eq(o),
                t = i.eq(l);
              for (let e = o; e <= l; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              e
                .prev()
                .addClass(`${s.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${s.bulletActiveClass}-prev-prev`),
                t
                  .next()
                  .addClass(`${s.bulletActiveClass}-next`)
                  .next()
                  .addClass(`${s.bulletActiveClass}-next-next`);
            }
          }
          if (s.dynamicBullets) {
            const a = Math.min(i.length, s.dynamicMainBullets + 4),
              n =
                (e.pagination.bulletSize * a - e.pagination.bulletSize) / 2 -
                d * e.pagination.bulletSize,
              r = t ? "right" : "left";
            i.css(e.isHorizontal() ? r : "top", `${n}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (a.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)),
            a.find(`.${s.totalClass}`).text(s.formatFractionTotal(o))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (n + 1) / o;
          let r = 1,
            l = 1;
          "horizontal" === t ? (r = i) : (l = i),
            a
              .find(`.${s.progressbarFillClass}`)
              .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${l})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (a.html(s.renderCustom(e, n + 1, o)),
            e.emit("paginationRender", e, a[0]))
          : e.emit("paginationUpdate", e, a[0]),
          a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](
            s.lockClass
          );
      },
      render() {
        const e = this,
          t = e.params.pagination;
        if (
          !t.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        )
          return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el;
        let a = "";
        if ("bullets" === t.type) {
          const n = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          for (let s = 0; s < n; s += 1)
            t.renderBullet
              ? (a += t.renderBullet.call(e, s, t.bulletClass))
              : (a += `<${t.bulletElement} class="${t.bulletClass}"></${
                  t.bulletElement
                }>`);
          i.html(a), (e.pagination.bullets = i.find(`.${t.bulletClass}`));
        }
        "fraction" === t.type &&
          ((a = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span>` +
              " / " +
              `<span class="${t.totalClass}"></span>`),
          i.html(a)),
          "progressbar" === t.type &&
            ((a = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(a)),
          "custom" !== t.type &&
            e.emit("paginationRender", e.pagination.$el[0]);
      },
      init() {
        const e = this,
          t = e.params.pagination;
        if (!t.el) return;
        let s = r(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            1 === e.$el.find(t.el).length &&
            (s = e.$el.find(t.el)),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (e.pagination.dynamicBulletIndex = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", `.${t.bulletClass}`, function(t) {
              t.preventDefault();
              let s = r(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          d.extend(e.pagination, { $el: s, el: s[0] }));
      },
      destroy() {
        const e = this.params.pagination;
        if (
          !e.el ||
          !this.pagination.el ||
          !this.pagination.$el ||
          0 === this.pagination.$el.length
        )
          return;
        const t = this.pagination.$el;
        t.removeClass(e.hiddenClass),
          t.removeClass(e.modifierClass + e.type),
          this.pagination.bullets &&
            this.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && t.off("click", `.${e.bulletClass}`);
      }
    };
    const Y = {
      setTranslate() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t, rtlTranslate: s, progress: i } = e,
          { dragSize: a, trackSize: n, $dragEl: r, $el: o } = t,
          l = e.params.scrollbar;
        let d = a,
          p = (n - a) * i;
        s
          ? (p = -p) > 0
            ? ((d = a - p), (p = 0))
            : -p + a > n && (d = n + p)
          : p < 0
          ? ((d = a + p), (p = 0))
          : p + a > n && (d = n - p),
          e.isHorizontal()
            ? (c.transforms3d
                ? r.transform(`translate3d(${p}px, 0, 0)`)
                : r.transform(`translateX(${p}px)`),
              (r[0].style.width = `${d}px`))
            : (c.transforms3d
                ? r.transform(`translate3d(0px, ${p}px, 0)`)
                : r.transform(`translateY(${p}px)`),
              (r[0].style.height = `${d}px`)),
          l.hide &&
            (clearTimeout(e.scrollbar.timeout),
            (o[0].style.opacity = 1),
            (e.scrollbar.timeout = setTimeout(() => {
              (o[0].style.opacity = 0), o.transition(400);
            }, 1e3)));
      },
      setTransition(e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t } = e,
          { $dragEl: s, $el: i } = t;
        (s[0].style.width = ""), (s[0].style.height = "");
        const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
          n = e.size / e.virtualSize,
          r = n * (a / e.size);
        let o;
        (o =
          "auto" === e.params.scrollbar.dragSize
            ? a * n
            : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (s[0].style.width = `${o}px`)
            : (s[0].style.height = `${o}px`),
          (i[0].style.display = n >= 1 ? "none" : ""),
          e.params.scrollbarHide && (i[0].style.opacity = 0),
          d.extend(t, {
            trackSize: a,
            divider: n,
            moveDivider: r,
            dragSize: o
          }),
          t.$el[
            e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
          ](e.params.scrollbar.lockClass);
      },
      setDragPosition(e) {
        const { scrollbar: t, rtlTranslate: s } = this,
          { $el: i, dragSize: a, trackSize: n } = t;
        let r, o;
        (o =
          ((r = this.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageX
              : e.pageX || e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].pageY
            : e.pageY || e.clientY) -
            i.offset()[this.isHorizontal() ? "left" : "top"] -
            a / 2) /
          (n - a)),
          (o = Math.max(Math.min(o, 1), 0)),
          s && (o = 1 - o);
        const l =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
        this.updateProgress(l),
          this.setTranslate(l),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart(e) {
        const t = this.params.scrollbar,
          { scrollbar: s, $wrapperEl: i } = this,
          { $el: a, $dragEl: n } = s;
        (this.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          i.transition(100),
          n.transition(100),
          s.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css("opacity", 1),
          this.emit("scrollbarDragStart", e);
      },
      onDragMove(e) {
        const { scrollbar: t, $wrapperEl: s } = this,
          { $el: i, $dragEl: a } = t;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          s.transition(0),
          i.transition(0),
          a.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd(e) {
        const t = this,
          s = t.params.scrollbar,
          { scrollbar: i } = t,
          { $el: a } = i;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          s.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = d.nextTick(() => {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          s.snapOnRelease && t.slideToClosest());
      },
      enableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: s,
            touchEventsDesktop: a,
            params: n
          } = e,
          r = t.$el[0],
          o = !(!c.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1
          },
          l = !(!c.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1
          };
        c.touch
          ? (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
            r.addEventListener(s.move, e.scrollbar.onDragMove, o),
            r.addEventListener(s.end, e.scrollbar.onDragEnd, l))
          : (r.addEventListener(a.start, e.scrollbar.onDragStart, o),
            i.addEventListener(a.move, e.scrollbar.onDragMove, o),
            i.addEventListener(a.end, e.scrollbar.onDragEnd, l));
      },
      disableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: s,
            touchEventsDesktop: a,
            params: n
          } = e,
          r = t.$el[0],
          o = !(!c.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1
          },
          l = !(!c.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1
          };
        c.touch
          ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
            r.removeEventListener(s.move, e.scrollbar.onDragMove, o),
            r.removeEventListener(s.end, e.scrollbar.onDragEnd, l))
          : (r.removeEventListener(a.start, e.scrollbar.onDragStart, o),
            i.removeEventListener(a.move, e.scrollbar.onDragMove, o),
            i.removeEventListener(a.end, e.scrollbar.onDragEnd, l));
      },
      init() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const { scrollbar: t, $el: s } = e,
          i = e.params.scrollbar;
        let a = r(i.el);
        e.params.uniqueNavElements &&
          "string" == typeof i.el &&
          a.length > 1 &&
          1 === s.find(i.el).length &&
          (a = s.find(i.el));
        let n = a.find(`.${e.params.scrollbar.dragClass}`);
        0 === n.length &&
          ((n = r(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
          a.append(n)),
          d.extend(t, { $el: a, el: a[0], $dragEl: n, dragEl: n[0] }),
          i.draggable && t.enableDraggable();
      },
      destroy() {
        this.scrollbar.disableDraggable();
      }
    };
    const V = {
      setTransform(e, t) {
        const { rtl: s } = this,
          i = r(e),
          a = s ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
        let o = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y");
        const d = i.attr("data-swiper-parallax-scale"),
          c = i.attr("data-swiper-parallax-opacity");
        if (
          (o || l
            ? ((o = o || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((o = n), (l = "0"))
            : ((l = n), (o = "0")),
          (o =
            o.indexOf("%") >= 0
              ? `${parseInt(o, 10) * t * a}%`
              : `${o * t * a}px`),
          (l = l.indexOf("%") >= 0 ? `${parseInt(l, 10) * t}%` : `${l * t}px`),
          null != c)
        ) {
          const e = c - (c - 1) * (1 - Math.abs(t));
          i[0].style.opacity = e;
        }
        if (null == d) i.transform(`translate3d(${o}, ${l}, 0px)`);
        else {
          const e = d - (d - 1) * (1 - Math.abs(t));
          i.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
        }
      },
      setTranslate() {
        const e = this,
          { $el: t, slides: s, progress: i, snapGrid: a } = e;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each((t, s) => {
            e.parallax.setTransform(s, i);
          }),
          s.each((t, s) => {
            let n = s.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (n += Math.ceil(t / 2) - i * (a.length - 1)),
              (n = Math.min(Math.max(n, -1), 1)),
              r(s)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each((t, s) => {
                  e.parallax.setTransform(s, n);
                });
          });
      },
      setTransition(e = this.params.speed) {
        const { $el: t } = this;
        t.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
        ).each((t, s) => {
          const i = r(s);
          let a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (a = 0), i.transition(a);
        });
      }
    };
    const F = {
      getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt((i - t) ** 2 + (a - s) ** 2);
      },
      onGestureStart(e) {
        const t = this,
          s = t.params.zoom,
          i = t.zoom,
          { gesture: a } = i;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !c.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (a.scaleStart = F.getDistanceBetweenTouches(e));
        }
        (a.$slideEl && a.$slideEl.length) ||
        ((a.$slideEl = r(e.target).closest(".swiper-slide")),
        0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)),
        (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
        (a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`)),
        (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
        0 !== a.$imageWrapEl.length)
          ? (a.$imageEl.transition(0), (t.zoom.isScaling = !0))
          : (a.$imageEl = void 0);
      },
      onGestureChange(e) {
        const t = this.params.zoom,
          s = this.zoom,
          { gesture: i } = s;
        if (!c.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (i.scaleMove = F.getDistanceBetweenTouches(e));
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (c.gestures
            ? (s.scale = e.scale * s.currentScale)
            : (s.scale = (i.scaleMove / i.scaleStart) * s.currentScale),
          s.scale > i.maxRatio &&
            (s.scale = i.maxRatio - 1 + (s.scale - i.maxRatio + 1) ** 0.5),
          s.scale < t.minRatio &&
            (s.scale = t.minRatio + 1 - (t.minRatio - s.scale + 1) ** 0.5),
          i.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`));
      },
      onGestureEnd(e) {
        const t = this.params.zoom,
          s = this.zoom,
          { gesture: i } = s;
        if (!c.gestures) {
          if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !w.android)
          )
            return;
          (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
        }
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio)),
          i.$imageEl
            .transition(this.params.speed)
            .transform(`translate3d(0,0,0) scale(${s.scale})`),
          (s.currentScale = s.scale),
          (s.isScaling = !1),
          1 === s.scale && (i.$slideEl = void 0));
      },
      onTouchStart(e) {
        const t = this.zoom,
          { gesture: s, image: i } = t;
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (i.isTouched ||
            (w.android && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (i.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove(e) {
        const t = this,
          s = t.zoom,
          { gesture: i, image: a, velocity: n } = s;
        if (!i.$imageEl || 0 === i.$imageEl.length) return;
        if (((t.allowClick = !1), !a.isTouched || !i.$slideEl)) return;
        a.isMoved ||
          ((a.width = i.$imageEl[0].offsetWidth),
          (a.height = i.$imageEl[0].offsetHeight),
          (a.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
          (a.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
          (i.slideWidth = i.$slideEl[0].offsetWidth),
          (i.slideHeight = i.$slideEl[0].offsetHeight),
          i.$imageWrapEl.transition(0),
          t.rtl && ((a.startX = -a.startX), (a.startY = -a.startY)));
        const r = a.width * s.scale,
          o = a.height * s.scale;
        if (!(r < i.slideWidth && o < i.slideHeight)) {
          if (
            ((a.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
            (a.maxY = -a.minY),
            (a.touchesCurrent.x =
              "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (a.touchesCurrent.y =
              "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
            !a.isMoved && !s.isScaling)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(a.minX) === Math.floor(a.startX) &&
                a.touchesCurrent.x < a.touchesStart.x) ||
                (Math.floor(a.maxX) === Math.floor(a.startX) &&
                  a.touchesCurrent.x > a.touchesStart.x))
            )
              return void (a.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(a.minY) === Math.floor(a.startY) &&
                a.touchesCurrent.y < a.touchesStart.y) ||
                (Math.floor(a.maxY) === Math.floor(a.startY) &&
                  a.touchesCurrent.y > a.touchesStart.y))
            )
              return void (a.isTouched = !1);
          }
          e.preventDefault(),
            e.stopPropagation(),
            (a.isMoved = !0),
            (a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX),
            (a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY),
            a.currentX < a.minX &&
              (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** 0.8),
            a.currentX > a.maxX &&
              (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** 0.8),
            a.currentY < a.minY &&
              (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** 0.8),
            a.currentY > a.maxY &&
              (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** 0.8),
            n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x),
            n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y),
            n.prevTime || (n.prevTime = Date.now()),
            (n.x =
              (a.touchesCurrent.x - n.prevPositionX) /
              (Date.now() - n.prevTime) /
              2),
            (n.y =
              (a.touchesCurrent.y - n.prevPositionY) /
              (Date.now() - n.prevTime) /
              2),
            Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
            Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
            (n.prevPositionX = a.touchesCurrent.x),
            (n.prevPositionY = a.touchesCurrent.y),
            (n.prevTime = Date.now()),
            i.$imageWrapEl.transform(
              `translate3d(${a.currentX}px, ${a.currentY}px,0)`
            );
        }
      },
      onTouchEnd() {
        const e = this.zoom,
          { gesture: t, image: s, velocity: i } = e;
        if (!t.$imageEl || 0 === t.$imageEl.length) return;
        if (!s.isTouched || !s.isMoved)
          return (s.isTouched = !1), void (s.isMoved = !1);
        (s.isTouched = !1), (s.isMoved = !1);
        let a = 300,
          n = 300;
        const r = i.x * a,
          o = s.currentX + r,
          l = i.y * n,
          d = s.currentY + l;
        0 !== i.x && (a = Math.abs((o - s.currentX) / i.x)),
          0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
        const c = Math.max(a, n);
        (s.currentX = o), (s.currentY = d);
        const p = s.width * e.scale,
          u = s.height * e.scale;
        (s.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
          (s.maxX = -s.minX),
          (s.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
          (s.maxY = -s.minY),
          (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
          (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
          t.$imageWrapEl
            .transition(c)
            .transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
      },
      onTransitionEnd() {
        const e = this.zoom,
          { gesture: t } = e;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle(e) {
        const t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in(e) {
        const t = this,
          s = t.zoom,
          i = t.params.zoom,
          { gesture: a, image: n } = s;
        if (
          (a.$slideEl ||
            ((a.$slideEl = t.clickedSlide
              ? r(t.clickedSlide)
              : t.slides.eq(t.activeIndex)),
            (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
            (a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`))),
          !a.$imageEl || 0 === a.$imageEl.length)
        )
          return;
        let o, l, d, c, p, u, h, m, f, g, v, b, w, y, x, T, E, S;
        a.$slideEl.addClass(`${i.zoomedSlideClass}`),
          void 0 === n.touchesStart.x && e
            ? ((o =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (l = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((o = n.touchesStart.x), (l = n.touchesStart.y)),
          (s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
          (s.currentScale =
            a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
          e
            ? ((E = a.$slideEl[0].offsetWidth),
              (S = a.$slideEl[0].offsetHeight),
              (p = (d = a.$slideEl.offset().left) + E / 2 - o),
              (u = (c = a.$slideEl.offset().top) + S / 2 - l),
              (f = a.$imageEl[0].offsetWidth),
              (g = a.$imageEl[0].offsetHeight),
              (v = f * s.scale),
              (b = g * s.scale),
              (x = -(w = Math.min(E / 2 - v / 2, 0))),
              (T = -(y = Math.min(S / 2 - b / 2, 0))),
              (h = p * s.scale) < w && (h = w),
              h > x && (h = x),
              (m = u * s.scale) < y && (m = y),
              m > T && (m = T))
            : ((h = 0), (m = 0)),
          a.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${h}px, ${m}px,0)`),
          a.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${s.scale})`);
      },
      out() {
        const e = this,
          t = e.zoom,
          s = e.params.zoom,
          { gesture: i } = t;
        i.$slideEl ||
          ((i.$slideEl = e.clickedSlide
            ? r(e.clickedSlide)
            : e.slides.eq(e.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (i.$slideEl = void 0));
      },
      enable() {
        const e = this,
          t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const s = !(
          "touchstart" !== e.touchEvents.start ||
          !c.passiveListener ||
          !e.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        c.gestures
          ? (e.$wrapperEl.on(
              "gesturestart",
              ".swiper-slide",
              t.onGestureStart,
              s
            ),
            e.$wrapperEl.on(
              "gesturechange",
              ".swiper-slide",
              t.onGestureChange,
              s
            ),
            e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.on(
              e.touchEvents.start,
              ".swiper-slide",
              t.onGestureStart,
              s
            ),
            e.$wrapperEl.on(
              e.touchEvents.move,
              ".swiper-slide",
              t.onGestureChange,
              s
            ),
            e.$wrapperEl.on(
              e.touchEvents.end,
              ".swiper-slide",
              t.onGestureEnd,
              s
            )),
          e.$wrapperEl.on(
            e.touchEvents.move,
            `.${e.params.zoom.containerClass}`,
            t.onTouchMove
          );
      },
      disable() {
        const e = this,
          t = e.zoom;
        if (!t.enabled) return;
        e.zoom.enabled = !1;
        const s = !(
          "touchstart" !== e.touchEvents.start ||
          !c.passiveListener ||
          !e.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        c.gestures
          ? (e.$wrapperEl.off(
              "gesturestart",
              ".swiper-slide",
              t.onGestureStart,
              s
            ),
            e.$wrapperEl.off(
              "gesturechange",
              ".swiper-slide",
              t.onGestureChange,
              s
            ),
            e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s))
          : "touchstart" === e.touchEvents.start &&
            (e.$wrapperEl.off(
              e.touchEvents.start,
              ".swiper-slide",
              t.onGestureStart,
              s
            ),
            e.$wrapperEl.off(
              e.touchEvents.move,
              ".swiper-slide",
              t.onGestureChange,
              s
            ),
            e.$wrapperEl.off(
              e.touchEvents.end,
              ".swiper-slide",
              t.onGestureEnd,
              s
            )),
          e.$wrapperEl.off(
            e.touchEvents.move,
            `.${e.params.zoom.containerClass}`,
            t.onTouchMove
          );
      }
    };
    const j = {
      loadInSlide(e, t = !0) {
        const s = this,
          i = s.params.lazy;
        if (void 0 === e) return;
        if (0 === s.slides.length) return;
        const a =
          s.virtual && s.params.virtual.enabled
            ? s.$wrapperEl.children(
                `.${s.params.slideClass}[data-swiper-slide-index="${e}"]`
              )
            : s.slides.eq(e);
        let n = a.find(
          `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
        );
        !a.hasClass(i.elementClass) ||
          a.hasClass(i.loadedClass) ||
          a.hasClass(i.loadingClass) ||
          (n = n.add(a[0])),
          0 !== n.length &&
            n.each((e, n) => {
              const o = r(n);
              o.addClass(i.loadingClass);
              const l = o.attr("data-background"),
                d = o.attr("data-src"),
                c = o.attr("data-srcset"),
                p = o.attr("data-sizes");
              s.loadImage(o[0], d || l, c, p, !1, () => {
                if (null != s && s && (!s || s.params) && !s.destroyed) {
                  if (
                    (l
                      ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background"))
                      : (c &&
                          (o.attr("srcset", c), o.removeAttr("data-srcset")),
                        p && (o.attr("sizes", p), o.removeAttr("data-sizes")),
                        d && (o.attr("src", d), o.removeAttr("data-src"))),
                    o.addClass(i.loadedClass).removeClass(i.loadingClass),
                    a.find(`.${i.preloaderClass}`).remove(),
                    s.params.loop && t)
                  ) {
                    const e = a.attr("data-swiper-slide-index");
                    if (a.hasClass(s.params.slideDuplicateClass)) {
                      const t = s.$wrapperEl.children(
                        `[data-swiper-slide-index="${e}"]:not(.${
                          s.params.slideDuplicateClass
                        })`
                      );
                      s.lazy.loadInSlide(t.index(), !1);
                    } else {
                      const t = s.$wrapperEl.children(
                        `.${
                          s.params.slideDuplicateClass
                        }[data-swiper-slide-index="${e}"]`
                      );
                      s.lazy.loadInSlide(t.index(), !1);
                    }
                  }
                  s.emit("lazyImageReady", a[0], o[0]);
                }
              }),
                s.emit("lazyImageLoad", a[0], o[0]);
            });
      },
      load() {
        const e = this,
          { $wrapperEl: t, params: s, slides: i, activeIndex: a } = e,
          n = e.virtual && s.virtual.enabled,
          o = s.lazy;
        let l = s.slidesPerView;
        function d(e) {
          if (n) {
            if (
              t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                .length
            )
              return !0;
          } else if (i[e]) return !0;
          return !1;
        }
        function c(e) {
          return n ? r(e).attr("data-swiper-slide-index") : r(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children(`.${s.slideVisibleClass}`).each((t, s) => {
            const i = n ? r(s).attr("data-swiper-slide-index") : r(s).index();
            e.lazy.loadInSlide(i);
          });
        else if (l > 1)
          for (let t = a; t < a + l; t += 1) d(t) && e.lazy.loadInSlide(t);
        else e.lazy.loadInSlide(a);
        if (o.loadPrevNext)
          if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            const t = o.loadPrevNextAmount,
              s = l,
              n = Math.min(a + s + Math.max(t, s), i.length),
              r = Math.max(a - Math.max(s, t), 0);
            for (let t = a + l; t < n; t += 1) d(t) && e.lazy.loadInSlide(t);
            for (let t = r; t < a; t += 1) d(t) && e.lazy.loadInSlide(t);
          } else {
            const i = t.children(`.${s.slideNextClass}`);
            i.length > 0 && e.lazy.loadInSlide(c(i));
            const a = t.children(`.${s.slidePrevClass}`);
            a.length > 0 && e.lazy.loadInSlide(c(a));
          }
      }
    };
    const R = {
      LinearSpline: function(e, t) {
        const s = (function() {
          let e, t, s;
          return (i, a) => {
            for (t = -1, e = i.length; e - t > 1; )
              i[(s = (e + t) >> 1)] <= a ? (t = s) : (e = s);
            return e;
          };
        })();
        let i, a;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function(e) {
            return e
              ? ((a = s(this.x, e)),
                (i = a - 1),
                ((e - this.x[i]) * (this.y[a] - this.y[i])) /
                  (this.x[a] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction(e) {
        const t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new R.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new R.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate(e, t) {
        const s = this,
          i = s.controller.control;
        let a, n;
        function r(e) {
          const t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by &&
            (s.controller.getInterpolateFunction(e),
            (n = -s.controller.spline.interpolate(-t))),
            (n && "container" !== s.params.controller.by) ||
              ((a =
                (e.maxTranslate() - e.minTranslate()) /
                (s.maxTranslate() - s.minTranslate())),
              (n = (t - s.minTranslate()) * a + e.minTranslate())),
            s.params.controller.inverse && (n = e.maxTranslate() - n),
            e.updateProgress(n),
            e.setTranslate(n, s),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(i))
          for (let e = 0; e < i.length; e += 1)
            i[e] !== t && i[e] instanceof M && r(i[e]);
        else i instanceof M && t !== i && r(i);
      },
      setTransition(e, t) {
        const s = this,
          i = s.controller.control;
        let a;
        function n(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                d.nextTick(() => {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(() => {
                i &&
                  (t.params.loop &&
                    "slide" === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(i))
          for (a = 0; a < i.length; a += 1)
            i[a] !== t && i[a] instanceof M && n(i[a]);
        else i instanceof M && t !== i && n(i);
      }
    };
    const q = {
      makeElFocusable: e => (e.attr("tabIndex", "0"), e),
      addElRole: (e, t) => (e.attr("role", t), e),
      addElLabel: (e, t) => (e.attr("aria-label", t), e),
      disableEl: e => (e.attr("aria-disabled", !0), e),
      enableEl: e => (e.attr("aria-disabled", !1), e),
      onEnterKey(e) {
        const t = this,
          s = t.params.a11y;
        if (13 !== e.keyCode) return;
        const i = r(e.target);
        t.navigation &&
          t.navigation.$nextEl &&
          i.is(t.navigation.$nextEl) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd
            ? t.a11y.notify(s.lastSlideMessage)
            : t.a11y.notify(s.nextSlideMessage)),
          t.navigation &&
            t.navigation.$prevEl &&
            i.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning
              ? t.a11y.notify(s.firstSlideMessage)
              : t.a11y.notify(s.prevSlideMessage)),
          t.pagination &&
            i.is(`.${t.params.pagination.bulletClass}`) &&
            i[0].click();
      },
      notify(e) {
        const t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation() {
        const e = this;
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        s &&
          s.length > 0 &&
          (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)),
          t &&
            t.length > 0 &&
            (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
      },
      updatePagination() {
        const e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each((s, i) => {
            const a = r(i);
            e.a11y.makeElFocusable(a),
              e.a11y.addElRole(a, "button"),
              e.a11y.addElLabel(
                a,
                t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1)
              );
          });
      },
      init() {
        const e = this;
        e.$el.append(e.a11y.liveRegion);
        const t = e.params.a11y;
        let s, i;
        e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
          s &&
            (e.a11y.makeElFocusable(s),
            e.a11y.addElRole(s, "button"),
            e.a11y.addElLabel(s, t.nextSlideMessage),
            s.on("keydown", e.a11y.onEnterKey)),
          i &&
            (e.a11y.makeElFocusable(i),
            e.a11y.addElRole(i, "button"),
            e.a11y.addElLabel(i, t.prevSlideMessage),
            i.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              `.${e.params.pagination.bulletClass}`,
              e.a11y.onEnterKey
            );
      },
      destroy() {
        const e = this;
        let t, s;
        e.a11y.liveRegion &&
          e.a11y.liveRegion.length > 0 &&
          e.a11y.liveRegion.remove(),
          e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
          t && t.off("keydown", e.a11y.onEnterKey),
          s && s.off("keydown", e.a11y.onEnterKey),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.off(
              "keydown",
              `.${e.params.pagination.bulletClass}`,
              e.a11y.onEnterKey
            );
      }
    };
    const W = {
      init() {
        const e = this;
        if (!e.params.history) return;
        if (!a.history || !a.history.pushState)
          return (
            (e.params.history.enabled = !1),
            void (e.params.hashNavigation.enabled = !0)
          );
        const t = e.history;
        (t.initialized = !0),
          (t.paths = W.getPathValues()),
          (t.paths.key || t.paths.value) &&
            (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState ||
              a.addEventListener("popstate", e.history.setHistoryPopState));
      },
      destroy() {
        const e = this;
        e.params.history.replaceState ||
          a.removeEventListener("popstate", e.history.setHistoryPopState);
      },
      setHistoryPopState() {
        (this.history.paths = W.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues() {
        const e = a.location.pathname
            .slice(1)
            .split("/")
            .filter(e => "" !== e),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory(e, t) {
        if (!this.history.initialized || !this.params.history.enabled) return;
        const s = this.slides.eq(t);
        let i = W.slugify(s.attr("data-history"));
        a.location.pathname.includes(e) || (i = `${e}/${i}`);
        const n = a.history.state;
        (n && n.value === i) ||
          (this.params.history.replaceState
            ? a.history.replaceState({ value: i }, null, i)
            : a.history.pushState({ value: i }, null, i));
      },
      slugify: e =>
        e
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      scrollToSlide(e, t, s) {
        const i = this;
        if (t)
          for (let a = 0, n = i.slides.length; a < n; a += 1) {
            const n = i.slides.eq(a);
            if (
              W.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              const t = n.index();
              i.slideTo(t, e, s);
            }
          }
        else i.slideTo(0, e, s);
      }
    };
    const _ = {
      onHashCange() {
        const e = this,
          t = i.location.hash.replace("#", "");
        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          const s = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${t}"]`)
            .index();
          if (void 0 === s) return;
          e.slideTo(s);
        }
      },
      setHash() {
        const e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            a.history &&
            a.history.replaceState
          )
            a.history.replaceState(
              null,
              null,
              `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
            );
          else {
            const t = e.slides.eq(e.activeIndex),
              s = t.attr("data-hash") || t.attr("data-history");
            i.location.hash = s || "";
          }
      },
      init() {
        const e = this;
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        e.hashNavigation.initialized = !0;
        const t = i.location.hash.replace("#", "");
        if (t) {
          const s = 0;
          for (let i = 0, a = e.slides.length; i < a; i += 1) {
            const a = e.slides.eq(i);
            if (
              (a.attr("data-hash") || a.attr("data-history")) === t &&
              !a.hasClass(e.params.slideDuplicateClass)
            ) {
              const t = a.index();
              e.slideTo(t, s, e.params.runCallbacksOnInit, !0);
            }
          }
        }
        e.params.hashNavigation.watchState &&
          r(a).on("hashchange", e.hashNavigation.onHashCange);
      },
      destroy() {
        const e = this;
        e.params.hashNavigation.watchState &&
          r(a).off("hashchange", e.hashNavigation.onHashCange);
      }
    };
    const U = {
      run() {
        const e = this,
          t = e.slides.eq(e.activeIndex);
        let s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          (e.autoplay.timeout = d.nextTick(() => {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, s));
      },
      start() {
        return (
          void 0 === this.autoplay.timeout &&
          (!this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        );
      },
      stop() {
        const e = this;
        return (
          !!e.autoplay.running &&
          (void 0 !== e.autoplay.timeout &&
            (e.autoplay.timeout &&
              (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit("autoplayStop"),
            !0))
        );
      },
      pause(e) {
        const t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? (t.$wrapperEl[0].addEventListener(
                  "transitionend",
                  t.autoplay.onTransitionEnd
                ),
                t.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  t.autoplay.onTransitionEnd
                ))
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      }
    };
    const K = {
      setTranslate() {
        const e = this,
          { slides: t } = e;
        for (let s = 0; s < t.length; s += 1) {
          const t = e.slides.eq(s);
          let i = -t[0].swiperSlideOffset;
          e.params.virtualTranslate || (i -= e.translate);
          let a = 0;
          e.isHorizontal() || ((a = i), (i = 0));
          const n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(t[0].progress), 0)
            : 1 + Math.min(Math.max(t[0].progress, -1), 0);
          t.css({ opacity: n }).transform(`translate3d(${i}px, ${a}px, 0px)`);
        }
      },
      setTransition(e) {
        const t = this,
          { slides: s, $wrapperEl: i } = t;
        if ((s.transition(e), t.params.virtualTranslate && 0 !== e)) {
          let e = !1;
          s.transitionEnd(() => {
            if (e) return;
            if (!t || t.destroyed) return;
            (e = !0), (t.animating = !1);
            const s = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < s.length; e += 1) i.trigger(s[e]);
          });
        }
      }
    };
    const Q = {
      setTranslate() {
        const {
            $el: e,
            $wrapperEl: t,
            slides: s,
            width: i,
            height: a,
            rtlTranslate: n,
            size: o
          } = this,
          l = this.params.cubeEffect,
          d = this.isHorizontal(),
          c = this.virtual && this.params.virtual.enabled;
        let p,
          u = 0;
        l.shadow &&
          (d
            ? (0 === (p = t.find(".swiper-cube-shadow")).length &&
                ((p = r('<div class="swiper-cube-shadow"></div>')),
                t.append(p)),
              p.css({ height: `${i}px` }))
            : 0 === (p = e.find(".swiper-cube-shadow")).length &&
              ((p = r('<div class="swiper-cube-shadow"></div>')), e.append(p)));
        for (let e = 0; e < s.length; e += 1) {
          const t = s.eq(e);
          let i = e;
          c && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
          let a = 90 * i,
            p = Math.floor(a / 360);
          n && ((a = -a), (p = Math.floor(-a / 360)));
          const h = Math.max(Math.min(t[0].progress, 1), -1);
          let m = 0,
            f = 0,
            g = 0;
          i % 4 == 0
            ? ((m = 4 * -p * o), (g = 0))
            : (i - 1) % 4 == 0
            ? ((m = 0), (g = 4 * -p * o))
            : (i - 2) % 4 == 0
            ? ((m = o + 4 * p * o), (g = o))
            : (i - 3) % 4 == 0 && ((m = -o), (g = 3 * o + 4 * o * p)),
            n && (m = -m),
            d || ((f = m), (m = 0));
          const v = `rotateX(${d ? 0 : -a}deg) rotateY(${
            d ? a : 0
          }deg) translate3d(${m}px, ${f}px, ${g}px)`;
          if (
            (h <= 1 &&
              h > -1 &&
              ((u = 90 * i + 90 * h), n && (u = 90 * -i - 90 * h)),
            t.transform(v),
            l.slideShadows)
          ) {
            let e = d
                ? t.find(".swiper-slide-shadow-left")
                : t.find(".swiper-slide-shadow-top"),
              s = d
                ? t.find(".swiper-slide-shadow-right")
                : t.find(".swiper-slide-shadow-bottom");
            0 === e.length &&
              ((e = r(
                `<div class="swiper-slide-shadow-${d ? "left" : "top"}"></div>`
              )),
              t.append(e)),
              0 === s.length &&
                ((s = r(
                  `<div class="swiper-slide-shadow-${
                    d ? "right" : "bottom"
                  }"></div>`
                )),
                t.append(s)),
              e.length && (e[0].style.opacity = Math.max(-h, 0)),
              s.length && (s[0].style.opacity = Math.max(h, 0));
          }
        }
        if (
          (t.css({
            "-webkit-transform-origin": `50% 50% -${o / 2}px`,
            "-moz-transform-origin": `50% 50% -${o / 2}px`,
            "-ms-transform-origin": `50% 50% -${o / 2}px`,
            "transform-origin": `50% 50% -${o / 2}px`
          }),
          l.shadow)
        )
          if (d)
            p.transform(
              `translate3d(0px, ${i / 2 + l.shadowOffset}px, ${-i /
                2}px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`
            );
          else {
            const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              t =
                1.5 -
                (Math.sin((2 * e * Math.PI) / 360) / 2 +
                  Math.cos((2 * e * Math.PI) / 360) / 2),
              s = l.shadowScale,
              i = l.shadowScale / t,
              n = l.shadowOffset;
            p.transform(
              `scale3d(${s}, 1, ${i}) translate3d(0px, ${a / 2 + n}px, ${-a /
                2 /
                i}px) rotateX(-90deg)`
            );
          }
        const h = E.isSafari || E.isUiWebView ? -o / 2 : 0;
        t.transform(
          `translate3d(0px,0,${h}px) rotateX(${
            this.isHorizontal() ? 0 : u
          }deg) rotateY(${this.isHorizontal() ? -u : 0}deg)`
        );
      },
      setTransition(e) {
        const { $el: t, slides: s } = this;
        s
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      }
    };
    const Z = {
      setTranslate() {
        const e = this,
          { slides: t, rtlTranslate: s } = e;
        for (let i = 0; i < t.length; i += 1) {
          const a = t.eq(i);
          let n = a[0].progress;
          e.params.flipEffect.limitRotation &&
            (n = Math.max(Math.min(a[0].progress, 1), -1));
          let o = -180 * n,
            l = 0,
            d = -a[0].swiperSlideOffset,
            c = 0;
          if (
            (e.isHorizontal()
              ? s && (o = -o)
              : ((c = d), (d = 0), (l = -o), (o = 0)),
            (a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
            e.params.flipEffect.slideShadows)
          ) {
            let t = e.isHorizontal()
                ? a.find(".swiper-slide-shadow-left")
                : a.find(".swiper-slide-shadow-top"),
              s = e.isHorizontal()
                ? a.find(".swiper-slide-shadow-right")
                : a.find(".swiper-slide-shadow-bottom");
            0 === t.length &&
              ((t = r(
                `<div class="swiper-slide-shadow-${
                  e.isHorizontal() ? "left" : "top"
                }"></div>`
              )),
              a.append(t)),
              0 === s.length &&
                ((s = r(
                  `<div class="swiper-slide-shadow-${
                    e.isHorizontal() ? "right" : "bottom"
                  }"></div>`
                )),
                a.append(s)),
              t.length && (t[0].style.opacity = Math.max(-n, 0)),
              s.length && (s[0].style.opacity = Math.max(n, 0));
          }
          a.transform(
            `translate3d(${d}px, ${c}px, 0px) rotateX(${l}deg) rotateY(${o}deg)`
          );
        }
      },
      setTransition(e) {
        const t = this,
          { slides: s, activeIndex: i, $wrapperEl: a } = t;
        if (
          (s
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          let e = !1;
          s.eq(i).transitionEnd(function() {
            if (e) return;
            if (!t || t.destroyed) return;
            (e = !0), (t.animating = !1);
            const s = ["webkitTransitionEnd", "transitionend"];
            for (let e = 0; e < s.length; e += 1) a.trigger(s[e]);
          });
        }
      }
    };
    const J = {
      setTranslate() {
        const {
            width: e,
            height: t,
            slides: s,
            $wrapperEl: i,
            slidesSizesGrid: a
          } = this,
          n = this.params.coverflowEffect,
          o = this.isHorizontal(),
          l = this.translate,
          d = o ? e / 2 - l : t / 2 - l,
          p = o ? n.rotate : -n.rotate,
          u = n.depth;
        for (let e = 0, t = s.length; e < t; e += 1) {
          const t = s.eq(e),
            i = a[e],
            l = ((d - t[0].swiperSlideOffset - i / 2) / i) * n.modifier;
          let c = o ? p * l : 0,
            h = o ? 0 : p * l,
            m = -u * Math.abs(l),
            f = o ? 0 : n.stretch * l,
            g = o ? n.stretch * l : 0;
          Math.abs(g) < 0.001 && (g = 0),
            Math.abs(f) < 0.001 && (f = 0),
            Math.abs(m) < 0.001 && (m = 0),
            Math.abs(c) < 0.001 && (c = 0),
            Math.abs(h) < 0.001 && (h = 0);
          const v = `translate3d(${g}px,${f}px,${m}px)  rotateX(${h}deg) rotateY(${c}deg)`;
          if (
            (t.transform(v),
            (t[0].style.zIndex = 1 - Math.abs(Math.round(l))),
            n.slideShadows)
          ) {
            let e = o
                ? t.find(".swiper-slide-shadow-left")
                : t.find(".swiper-slide-shadow-top"),
              s = o
                ? t.find(".swiper-slide-shadow-right")
                : t.find(".swiper-slide-shadow-bottom");
            0 === e.length &&
              ((e = r(
                `<div class="swiper-slide-shadow-${o ? "left" : "top"}"></div>`
              )),
              t.append(e)),
              0 === s.length &&
                ((s = r(
                  `<div class="swiper-slide-shadow-${
                    o ? "right" : "bottom"
                  }"></div>`
                )),
                t.append(s)),
              e.length && (e[0].style.opacity = l > 0 ? l : 0),
              s.length && (s[0].style.opacity = -l > 0 ? -l : 0);
          }
        }
        if (c.pointerEvents || c.prefixedPointerEvents) {
          i[0].style.perspectiveOrigin = `${d}px 50%`;
        }
      },
      setTransition(e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      }
    };
    const ee = {
      init() {
        const e = this,
          { thumbs: t } = e.params,
          s = e.constructor;
        t.swiper instanceof s
          ? ((e.thumbs.swiper = t.swiper),
            d.extend(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }),
            d.extend(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }))
          : d.isObject(t.swiper) &&
            ((e.thumbs.swiper = new s(
              d.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              })
            )),
            (e.thumbs.swiperCreated = !0)),
          e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
          e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
      },
      onThumbClick() {
        const e = this,
          t = e.thumbs.swiper;
        if (!t) return;
        const s = t.clickedIndex,
          i = t.clickedSlide;
        if (i && r(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let a;
        if (
          ((a = t.params.loop
            ? parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10)
            : s),
          e.params.loop)
        ) {
          let t = e.activeIndex;
          e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
            (e.loopFix(),
            (e._clientLeft = e.$wrapperEl[0].clientLeft),
            (t = e.activeIndex));
          const s = e.slides
              .eq(t)
              .prevAll(`[data-swiper-slide-index="${a}"]`)
              .eq(0)
              .index(),
            i = e.slides
              .eq(t)
              .nextAll(`[data-swiper-slide-index="${a}"]`)
              .eq(0)
              .index();
          a = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s;
        }
        e.slideTo(a);
      },
      update(e) {
        const t = this,
          s = t.thumbs.swiper;
        if (!s) return;
        const i =
          "auto" === s.params.slidesPerView
            ? s.slidesPerViewDynamic()
            : s.params.slidesPerView;
        if (t.realIndex !== s.realIndex) {
          let a,
            n = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(n).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (n = s.activeIndex));
            const e = s.slides
                .eq(n)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              i = s.slides
                .eq(n)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            a =
              void 0 === e
                ? i
                : void 0 === i
                ? e
                : i - n == n - e
                ? n
                : i - n < n - e
                ? i
                : e;
          } else a = t.realIndex;
          s.visibleSlidesIndexes.indexOf(a) < 0 &&
            (s.params.centeredSlides
              ? (a =
                  a > n ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1)
              : a > n && (a = a - i + 1),
            s.slideTo(a, e ? 0 : void 0));
        }
        let a = 1;
        const n = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (a = t.params.slidesPerView),
          s.slides.removeClass(n),
          s.params.loop)
        )
          for (let e = 0; e < a; e += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(n);
        else
          for (let e = 0; e < a; e += 1)
            s.slides.eq(t.realIndex + e).addClass(n);
      }
    };
    const te = [
      P,
      k,
      z,
      L,
      D,
      A,
      G,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create() {
          d.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: H.enable.bind(this),
              disable: H.disable.bind(this),
              handle: H.handle.bind(this),
              handleMouseEnter: H.handleMouseEnter.bind(this),
              handleMouseLeave: H.handleMouseLeave.bind(this),
              lastScrollTime: d.now()
            }
          });
        },
        on: {
          init() {
            this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy() {
            this.mousewheel.enabled && this.mousewheel.disable();
          }
        }
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create() {
          d.extend(this, {
            navigation: {
              init: B.init.bind(this),
              update: B.update.bind(this),
              destroy: B.destroy.bind(this),
              onNextClick: B.onNextClick.bind(this),
              onPrevClick: B.onPrevClick.bind(this)
            }
          });
        },
        on: {
          init() {
            this.navigation.init(), this.navigation.update();
          },
          toEdge() {
            this.navigation.update();
          },
          fromEdge() {
            this.navigation.update();
          },
          destroy() {
            this.navigation.destroy();
          },
          click(e) {
            const t = this,
              { $nextEl: s, $prevEl: i } = t.navigation;
            !t.params.navigation.hideOnClick ||
              r(e.target).is(i) ||
              r(e.target).is(s) ||
              (s && s.toggleClass(t.params.navigation.hiddenClass),
              i && i.toggleClass(t.params.navigation.hiddenClass));
          }
        }
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create() {
          d.extend(this, {
            pagination: {
              init: X.init.bind(this),
              render: X.render.bind(this),
              update: X.update.bind(this),
              destroy: X.destroy.bind(this),
              dynamicBulletIndex: 0
            }
          });
        },
        on: {
          init() {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange() {
            const e = this;
            e.params.loop
              ? e.pagination.update()
              : void 0 === e.snapIndex && e.pagination.update();
          },
          snapIndexChange() {
            const e = this;
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange() {
            const e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange() {
            const e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy() {
            this.pagination.destroy();
          },
          click(e) {
            const t = this;
            t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              t.pagination.$el.length > 0 &&
              !r(e.target).hasClass(t.params.pagination.bulletClass) &&
              t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
          }
        }
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create() {
          d.extend(this, {
            scrollbar: {
              init: Y.init.bind(this),
              destroy: Y.destroy.bind(this),
              updateSize: Y.updateSize.bind(this),
              setTranslate: Y.setTranslate.bind(this),
              setTransition: Y.setTransition.bind(this),
              enableDraggable: Y.enableDraggable.bind(this),
              disableDraggable: Y.disableDraggable.bind(this),
              setDragPosition: Y.setDragPosition.bind(this),
              onDragStart: Y.onDragStart.bind(this),
              onDragMove: Y.onDragMove.bind(this),
              onDragEnd: Y.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          });
        },
        on: {
          init() {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update() {
            this.scrollbar.updateSize();
          },
          resize() {
            this.scrollbar.updateSize();
          },
          observerUpdate() {
            this.scrollbar.updateSize();
          },
          setTranslate() {
            this.scrollbar.setTranslate();
          },
          setTransition(e) {
            this.scrollbar.setTransition(e);
          },
          destroy() {
            this.scrollbar.destroy();
          }
        }
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create() {
          d.extend(this, {
            parallax: {
              setTransform: V.setTransform.bind(this),
              setTranslate: V.setTranslate.bind(this),
              setTransition: V.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init() {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTranslate() {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTransition(e) {
            this.params.parallax && this.parallax.setTransition(e);
          }
        }
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create() {
          const e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(s => {
              t[s] = F[s].bind(e);
            }),
            d.extend(e, { zoom: t });
          let s = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: () => s,
            set(t) {
              if (s !== t) {
                const s = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  i = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, s, i);
              }
              s = t;
            }
          });
        },
        on: {
          init() {
            const e = this;
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy() {
            this.zoom.disable();
          },
          touchStart(e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd(e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap(e) {
            const t = this;
            t.params.zoom.enabled &&
              t.zoom.enabled &&
              t.params.zoom.toggle &&
              t.zoom.toggle(e);
          },
          transitionEnd() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          }
        }
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create() {
          d.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: j.load.bind(this),
              loadInSlide: j.loadInSlide.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            const e = this;
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init() {
            const e = this;
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              e.lazy.load();
          },
          scroll() {
            const e = this;
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          resize() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load();
          },
          scrollbarDragMove() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart() {
            const e = this;
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd() {
            const e = this;
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          }
        }
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create() {
          d.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: R.getInterpolateFunction.bind(this),
              setTranslate: R.setTranslate.bind(this),
              setTransition: R.setTransition.bind(this)
            }
          });
        },
        on: {
          update() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate() {
            const e = this;
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate(e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition(e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          }
        }
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create() {
          const e = this;
          d.extend(e, {
            a11y: {
              liveRegion: r(
                `<span class="${
                  e.params.a11y.notificationClass
                }" aria-live="assertive" aria-atomic="true"></span>`
              )
            }
          }),
            Object.keys(q).forEach(t => {
              e.a11y[t] = q[t].bind(e);
            });
        },
        on: {
          init() {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate() {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy() {
            this.params.a11y.enabled && this.a11y.destroy();
          }
        }
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create() {
          d.extend(this, {
            history: {
              init: W.init.bind(this),
              setHistory: W.setHistory.bind(this),
              setHistoryPopState: W.setHistoryPopState.bind(this),
              scrollToSlide: W.scrollToSlide.bind(this),
              destroy: W.destroy.bind(this)
            }
          });
        },
        on: {
          init() {
            const e = this;
            e.params.history.enabled && e.history.init();
          },
          destroy() {
            const e = this;
            e.params.history.enabled && e.history.destroy();
          },
          transitionEnd() {
            const e = this;
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          }
        }
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 }
        },
        create() {
          d.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: _.init.bind(this),
              destroy: _.destroy.bind(this),
              setHash: _.setHash.bind(this),
              onHashCange: _.onHashCange.bind(this)
            }
          });
        },
        on: {
          init() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          transitionEnd() {
            const e = this;
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          }
        }
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create() {
          const e = this;
          d.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: U.run.bind(e),
              start: U.start.bind(e),
              stop: U.stop.bind(e),
              pause: U.pause.bind(e),
              onTransitionEnd(t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              }
            }
          });
        },
        on: {
          init() {
            const e = this;
            e.params.autoplay.enabled && e.autoplay.start();
          },
          beforeTransitionStart(e, t) {
            const s = this;
            s.autoplay.running &&
              (t || !s.params.autoplay.disableOnInteraction
                ? s.autoplay.pause(e)
                : s.autoplay.stop());
          },
          sliderFirstMove() {
            const e = this;
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          destroy() {
            const e = this;
            e.autoplay.running && e.autoplay.stop();
          }
        }
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create() {
          d.extend(this, {
            fadeEffect: {
              setTranslate: K.setTranslate.bind(this),
              setTransition: K.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            if ("fade" !== this.params.effect) return;
            this.classNames.push(`${this.params.containerModifierClass}fade`);
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e);
          },
          setTranslate() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition(e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          }
        }
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        },
        create() {
          d.extend(this, {
            cubeEffect: {
              setTranslate: Q.setTranslate.bind(this),
              setTransition: Q.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            if ("cube" !== this.params.effect) return;
            this.classNames.push(`${this.params.containerModifierClass}cube`),
              this.classNames.push(`${this.params.containerModifierClass}3d`);
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e);
          },
          setTranslate() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition(e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          }
        }
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create() {
          d.extend(this, {
            flipEffect: {
              setTranslate: Z.setTranslate.bind(this),
              setTransition: Z.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            if ("flip" !== this.params.effect) return;
            this.classNames.push(`${this.params.containerModifierClass}flip`),
              this.classNames.push(`${this.params.containerModifierClass}3d`);
            const e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e);
          },
          setTranslate() {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition(e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          }
        }
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        },
        create() {
          d.extend(this, {
            coverflowEffect: {
              setTranslate: J.setTranslate.bind(this),
              setTransition: J.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            "coverflow" === this.params.effect &&
              (this.classNames.push(
                `${this.params.containerModifierClass}coverflow`
              ),
              this.classNames.push(`${this.params.containerModifierClass}3d`),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate() {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition(e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          }
        }
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create() {
          d.extend(this, {
            thumbs: {
              swiper: null,
              init: ee.init.bind(this),
              update: ee.update.bind(this),
              onThumbClick: ee.onThumbClick.bind(this)
            }
          });
        },
        on: {
          beforeInit() {
            const { thumbs: e } = this.params;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange() {
            this.thumbs.swiper && this.thumbs.update();
          },
          update() {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize() {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate() {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition(e) {
            const t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy() {
            const e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          }
        }
      }
    ];
    void 0 === M.use &&
      ((M.use = M.Class.use), (M.installModule = M.Class.installModule)),
      M.use(te);
  }
]);
//# sourceMappingURL=instagram.js.map
