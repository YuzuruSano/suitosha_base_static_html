!(function(t) {
  var e = {};
  function i(s) {
    if (e[s]) return e[s].exports;
    var r = (e[s] = { i: s, l: !1, exports: {} });
    return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function(t, e, s) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (i.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            s,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return s;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 65));
})({
  0: function(t, e, i) {
    "use strict";
    (function(t, s) {
      i.d(e, "e", function() {
        return r;
      }),
        i.d(e, "g", function() {
          return a;
        }),
        i.d(e, "f", function() {
          return n;
        }),
        i.d(e, "c", function() {
          return l;
        }),
        i.d(e, "a", function() {
          return h;
        }),
        i.d(e, "b", function() {
          return _;
        }),
        i.d(e, "d", function() {
          return u;
        });
      /*!
       * VERSION: 2.1.0
       * DATE: 2019-02-15
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      var r =
          "undefined" != typeof window
            ? window
            : t.exports && void 0 !== s
            ? s
            : {},
        n = (function(t) {
          var e = {},
            i = t.document,
            s = (t.GreenSockGlobals = t.GreenSockGlobals || t);
          if (s.TweenLite) return s.TweenLite;
          var r,
            n,
            a,
            o,
            l,
            h,
            _,
            u = function(t) {
              var e,
                i = t.split("."),
                r = s;
              for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
              return r;
            },
            f = u("com.greensock"),
            c = function(t) {
              var e,
                i = [],
                s = t.length;
              for (e = 0; e !== s; i.push(t[e++]));
              return i;
            },
            p = function() {},
            d = ((h = Object.prototype.toString),
            (_ = h.call([])),
            function(t) {
              return (
                null != t &&
                (t instanceof Array ||
                  ("object" == typeof t && !!t.push && h.call(t) === _))
              );
            }),
            m = {},
            g = function(t, i, r, n) {
              (this.sc = m[t] ? m[t].sc : []),
                (m[t] = this),
                (this.gsClass = null),
                (this.func = r);
              var a = [];
              (this.check = function(o) {
                for (var l, h, _, f, c = i.length, p = c; --c > -1; )
                  (l = m[i[c]] || new g(i[c], [])).gsClass
                    ? ((a[c] = l.gsClass), p--)
                    : o && l.sc.push(this);
                if (0 === p && r)
                  for (
                    _ = (h = ("com.greensock." + t).split(".")).pop(),
                      f = u(h.join("."))[_] = this.gsClass = r.apply(r, a),
                      n && (s[_] = e[_] = f),
                      c = 0;
                    c < this.sc.length;
                    c++
                  )
                    this.sc[c].check();
              }),
                this.check(!0);
            },
            v = (t._gsDefine = function(t, e, i, s) {
              return new g(t, e, i, s);
            }),
            y = (f._class = function(t, e, i) {
              return (
                (e = e || function() {}),
                v(
                  t,
                  [],
                  function() {
                    return e;
                  },
                  i
                ),
                e
              );
            });
          v.globals = s;
          var T = [0, 0, 1, 1],
            x = y(
              "easing.Ease",
              function(t, e, i, s) {
                (this._func = t),
                  (this._type = i || 0),
                  (this._power = s || 0),
                  (this._params = e ? T.concat(e) : T);
              },
              !0
            ),
            b = (x.map = {}),
            w = (x.register = function(t, e, i, s) {
              for (
                var r,
                  n,
                  a,
                  o,
                  l = e.split(","),
                  h = l.length,
                  _ = (i || "easeIn,easeOut,easeInOut").split(",");
                --h > -1;

              )
                for (
                  n = l[h],
                    r = s ? y("easing." + n, null, !0) : f.easing[n] || {},
                    a = _.length;
                  --a > -1;

                )
                  (o = _[a]),
                    (b[n + "." + o] = b[o + n] = r[o] = t.getRatio
                      ? t
                      : t[o] || new t());
            });
          for (
            (a = x.prototype)._calcEnd = !1,
              a.getRatio = function(t) {
                if (this._func)
                  return (
                    (this._params[0] = t), this._func.apply(null, this._params)
                  );
                var e = this._type,
                  i = this._power,
                  s =
                    1 === e
                      ? 1 - t
                      : 2 === e
                      ? t
                      : t < 0.5
                      ? 2 * t
                      : 2 * (1 - t);
                return (
                  1 === i
                    ? (s *= s)
                    : 2 === i
                    ? (s *= s * s)
                    : 3 === i
                    ? (s *= s * s * s)
                    : 4 === i && (s *= s * s * s * s),
                  1 === e ? 1 - s : 2 === e ? s : t < 0.5 ? s / 2 : 1 - s / 2
                );
              },
              n = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                .length;
            --n > -1;

          )
            (a = r[n] + ",Power" + n),
              w(new x(null, null, 1, n), a, "easeOut", !0),
              w(
                new x(null, null, 2, n),
                a,
                "easeIn" + (0 === n ? ",easeNone" : "")
              ),
              w(new x(null, null, 3, n), a, "easeInOut");
          (b.linear = f.easing.Linear.easeIn),
            (b.swing = f.easing.Quad.easeInOut);
          var P = y("events.EventDispatcher", function(t) {
            (this._listeners = {}), (this._eventTarget = t || this);
          });
          ((a = P.prototype).addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var n,
              a,
              h = this._listeners[t],
              _ = 0;
            for (
              this !== o || l || o.wake(),
                null == h && (this._listeners[t] = h = []),
                a = h.length;
              --a > -1;

            )
              (n = h[a]).c === e && n.s === i
                ? h.splice(a, 1)
                : 0 === _ && n.pr < r && (_ = a + 1);
            h.splice(_, 0, { c: e, s: i, up: s, pr: r });
          }),
            (a.removeEventListener = function(t, e) {
              var i,
                s = this._listeners[t];
              if (s)
                for (i = s.length; --i > -1; )
                  if (s[i].c === e) return void s.splice(i, 1);
            }),
            (a.dispatchEvent = function(t) {
              var e,
                i,
                s,
                r = this._listeners[t];
              if (r)
                for (
                  (e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget;
                  --e > -1;

                )
                  (s = r[e]) &&
                    (s.up
                      ? s.c.call(s.s || i, { type: t, target: i })
                      : s.c.call(s.s || i));
            });
          var O = t.requestAnimationFrame,
            S = t.cancelAnimationFrame,
            k =
              Date.now ||
              function() {
                return new Date().getTime();
              },
            R = k();
          for (n = (r = ["ms", "moz", "webkit", "o"]).length; --n > -1 && !O; )
            (O = t[r[n] + "RequestAnimationFrame"]),
              (S =
                t[r[n] + "CancelAnimationFrame"] ||
                t[r[n] + "CancelRequestAnimationFrame"]);
          y("Ticker", function(t, e) {
            var s,
              r,
              n,
              a,
              h,
              _ = this,
              u = k(),
              f = !(!1 === e || !O) && "auto",
              c = 500,
              d = 33,
              m = function(t) {
                var e,
                  i,
                  o = k() - R;
                o > c && (u += o - d),
                  (R += o),
                  (_.time = (R - u) / 1e3),
                  (e = _.time - h),
                  (!s || e > 0 || !0 === t) &&
                    (_.frame++, (h += e + (e >= a ? 0.004 : a - e)), (i = !0)),
                  !0 !== t && (n = r(m)),
                  i && _.dispatchEvent("tick");
              };
            P.call(_),
              (_.time = _.frame = 0),
              (_.tick = function() {
                m(!0);
              }),
              (_.lagSmoothing = function(t, e) {
                if (!arguments.length) return c < 1e8;
                (c = t || 1e8), (d = Math.min(e, c, 0));
              }),
              (_.sleep = function() {
                null != n &&
                  (f && S ? S(n) : clearTimeout(n),
                  (r = p),
                  (n = null),
                  _ === o && (l = !1));
              }),
              (_.wake = function(t) {
                null !== n
                  ? _.sleep()
                  : t
                  ? (u += -R + (R = k()))
                  : _.frame > 10 && (R = k() - c + 5),
                  (r =
                    0 === s
                      ? p
                      : f && O
                      ? O
                      : function(t) {
                          return setTimeout(t, (1e3 * (h - _.time) + 1) | 0);
                        }),
                  _ === o && (l = !0),
                  m(2);
              }),
              (_.fps = function(t) {
                if (!arguments.length) return s;
                (a = 1 / ((s = t) || 60)), (h = this.time + a), _.wake();
              }),
              (_.useRAF = function(t) {
                if (!arguments.length) return f;
                _.sleep(), (f = t), _.fps(s);
              }),
              _.fps(t),
              setTimeout(function() {
                "auto" === f &&
                  _.frame < 5 &&
                  "hidden" !== (i || {}).visibilityState &&
                  _.useRAF(!1);
              }, 1500);
          }),
            ((a = f.Ticker.prototype = new f.events.EventDispatcher()).constructor =
              f.Ticker);
          var C = y("core.Animation", function(t, e) {
            if (
              ((this.vars = e = e || {}),
              (this._duration = this._totalDuration = t || 0),
              (this._delay = Number(e.delay) || 0),
              (this._timeScale = 1),
              (this._active = !!e.immediateRender),
              (this.data = e.data),
              (this._reversed = !!e.reversed),
              H)
            ) {
              l || o.wake();
              var i = this.vars.useFrames ? Z : H;
              i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
          });
          (o = C.ticker = new f.Ticker()),
            ((a = C.prototype)._dirty = a._gc = a._initted = a._paused = !1),
            (a._totalTime = a._time = 0),
            (a._rawPrevTime = -1),
            (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
            (a._paused = !1);
          var A = function() {
            l &&
              k() - R > 2e3 &&
              ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) &&
              o.wake();
            var t = setTimeout(A, 2e3);
            t.unref && t.unref();
          };
          A(),
            (a.play = function(t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (a.pause = function(t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (a.resume = function(t, e) {
              return null != t && this.seek(t, e), this.paused(!1);
            }),
            (a.seek = function(t, e) {
              return this.totalTime(Number(t), !1 !== e);
            }),
            (a.restart = function(t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (a.reverse = function(t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (a.render = function(t, e, i) {}),
            (a.invalidate = function() {
              return (
                (this._time = this._totalTime = 0),
                (this._initted = this._gc = !1),
                (this._rawPrevTime = -1),
                (!this._gc && this.timeline) || this._enabled(!0),
                this
              );
            }),
            (a.isActive = function() {
              var t,
                e = this._timeline,
                i = this._startTime;
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < i + this.totalDuration() / this._timeScale - 1e-8)
              );
            }),
            (a._enabled = function(t, e) {
              return (
                l || o.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                !0 !== e &&
                  (t && !this.timeline
                    ? this._timeline.add(this, this._startTime - this._delay)
                    : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              );
            }),
            (a._kill = function(t, e) {
              return this._enabled(!1, !1);
            }),
            (a.kill = function(t, e) {
              return this._kill(t, e), this;
            }),
            (a._uncache = function(t) {
              for (var e = t ? this : this.timeline; e; )
                (e._dirty = !0), (e = e.timeline);
              return this;
            }),
            (a._swapSelfInParams = function(t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i;
            }),
            (a._callback = function(t) {
              var e = this.vars,
                i = e[t],
                s = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
              switch (s ? s.length : 0) {
                case 0:
                  i.call(r);
                  break;
                case 1:
                  i.call(r, s[0]);
                  break;
                case 2:
                  i.call(r, s[0], s[1]);
                  break;
                default:
                  i.apply(r, s);
              }
            }),
            (a.eventCallback = function(t, e, i, s) {
              if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e
                  ? delete r[t]
                  : ((r[t] = e),
                    (r[t + "Params"] =
                      d(i) && -1 !== i.join("").indexOf("{self}")
                        ? this._swapSelfInParams(i)
                        : i),
                    (r[t + "Scope"] = s)),
                  "onUpdate" === t && (this._onUpdate = e);
              }
              return this;
            }),
            (a.delay = function(t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                    this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (a.duration = function(t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                    this._time > 0 &&
                    this._time < this._duration &&
                    0 !== t &&
                    this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration);
            }),
            (a.totalDuration = function(t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              );
            }),
            (a.time = function(t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time;
            }),
            (a.totalTime = function(t, e, i) {
              if ((l || o.wake(), !arguments.length)) return this._totalTime;
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration();
                  var s = this._totalDuration,
                    r = this._timeline;
                  if (
                    (t > s && !i && (t = s),
                    (this._startTime =
                      (this._paused ? this._pauseTime : r._time) -
                      (this._reversed ? s - t : t) / this._timeScale),
                    r._dirty || this._uncache(!1),
                    r._timeline)
                  )
                    for (; r._timeline; )
                      r._timeline._time !==
                        (r._startTime + r._totalTime) / r._timeScale &&
                        r.totalTime(r._totalTime, !0),
                        (r = r._timeline);
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime === t && 0 !== this._duration) ||
                    (z.length && Q(), this.render(t, e, !1), z.length && Q());
              }
              return this;
            }),
            (a.progress = a.totalProgress = function(t, e) {
              var i = this.duration();
              return arguments.length
                ? this.totalTime(i * t, e)
                : i
                ? this._time / i
                : this.ratio;
            }),
            (a.startTime = function(t) {
              return arguments.length
                ? (t !== this._startTime &&
                    ((this._startTime = t),
                    this.timeline &&
                      this.timeline._sortChildren &&
                      this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime;
            }),
            (a.endTime = function(t) {
              return (
                this._startTime +
                (0 != t ? this.totalDuration() : this.duration()) /
                  this._timeScale
              );
            }),
            (a.timeScale = function(t) {
              if (!arguments.length) return this._timeScale;
              var e, i;
              for (
                t = t || 1e-8,
                  this._timeline &&
                    this._timeline.smoothChildTiming &&
                    ((i =
                      (e = this._pauseTime) || 0 === e
                        ? e
                        : this._timeline.totalTime()),
                    (this._startTime =
                      i - ((i - this._startTime) * this._timeScale) / t)),
                  this._timeScale = t,
                  i = this.timeline;
                i && i.timeline;

              )
                (i._dirty = !0), i.totalDuration(), (i = i.timeline);
              return this;
            }),
            (a.reversed = function(t) {
              return arguments.length
                ? (t != this._reversed &&
                    ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed;
            }),
            (a.paused = function(t) {
              if (!arguments.length) return this._paused;
              var e,
                i,
                s = this._timeline;
              return (
                t != this._paused &&
                  s &&
                  (l || t || o.wake(),
                  (i = (e = s.rawTime()) - this._pauseTime),
                  !t &&
                    s.smoothChildTiming &&
                    ((this._startTime += i), this._uncache(!1)),
                  (this._pauseTime = t ? e : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                    0 !== i &&
                    this._initted &&
                    this.duration() &&
                    ((e = s.smoothChildTiming
                      ? this._totalTime
                      : (e - this._startTime) / this._timeScale),
                    this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
              );
            });
          var M = y("core.SimpleTimeline", function(t) {
            C.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((a = M.prototype = new C()).constructor = M),
            (a.kill()._gc = !1),
            (a._first = a._last = a._recent = null),
            (a._sortChildren = !1),
            (a.add = a.insert = function(t, e, i, s) {
              var r, n;
              if (
                ((t._startTime = Number(e || 0) + t._delay),
                t._paused &&
                  this !== t._timeline &&
                  (t._pauseTime =
                    this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                t.timeline && t.timeline._remove(t, !0),
                (t.timeline = t._timeline = this),
                t._gc && t._enabled(!0, !0),
                (r = this._last),
                this._sortChildren)
              )
                for (n = t._startTime; r && r._startTime > n; ) r = r._prev;
              return (
                r
                  ? ((t._next = r._next), (r._next = t))
                  : ((t._next = this._first), (this._first = t)),
                t._next ? (t._next._prev = t) : (this._last = t),
                (t._prev = r),
                (this._recent = t),
                this._timeline && this._uncache(!0),
                this
              );
            }),
            (a._remove = function(t, e) {
              return (
                t.timeline === this &&
                  (e || t._enabled(!1, !0),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._first === t && (this._first = t._next),
                  t._next
                    ? (t._next._prev = t._prev)
                    : this._last === t && (this._last = t._prev),
                  (t._next = t._prev = t.timeline = null),
                  t === this._recent && (this._recent = this._last),
                  this._timeline && this._uncache(!0)),
                this
              );
            }),
            (a.render = function(t, e, i) {
              var s,
                r = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                (s = r._next),
                  (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
                    (r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i)),
                  (r = s);
            }),
            (a.rawTime = function() {
              return l || o.wake(), this._totalTime;
            });
          var D = y(
              "TweenLite",
              function(e, i, s) {
                if (
                  (C.call(this, i, s),
                  (this.render = D.prototype.render),
                  null == e)
                )
                  throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                var r,
                  n,
                  a,
                  o =
                    e.jquery ||
                    (e.length &&
                      e !== t &&
                      e[0] &&
                      (e[0] === t ||
                        (e[0].nodeType && e[0].style && !e.nodeType))),
                  l = this.vars.overwrite;
                if (
                  ((this._overwrite = l =
                    null == l
                      ? G[D.defaultOverwrite]
                      : "number" == typeof l
                      ? l >> 0
                      : G[l]),
                  (o || e instanceof Array || (e.push && d(e))) &&
                    "number" != typeof e[0])
                )
                  for (
                    this._targets = a = c(e),
                      this._propLookup = [],
                      this._siblings = [],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    (n = a[r])
                      ? "string" != typeof n
                        ? n.length &&
                          n !== t &&
                          n[0] &&
                          (n[0] === t ||
                            (n[0].nodeType && n[0].style && !n.nodeType))
                          ? (a.splice(r--, 1),
                            (this._targets = a = a.concat(c(n))))
                          : ((this._siblings[r] = K(n, this, !1)),
                            1 === l &&
                              this._siblings[r].length > 1 &&
                              tt(n, this, null, 1, this._siblings[r]))
                        : "string" == typeof (n = a[r--] = D.selector(n)) &&
                          a.splice(r + 1, 1)
                      : a.splice(r--, 1);
                else
                  (this._propLookup = {}),
                    (this._siblings = K(e, this, !1)),
                    1 === l &&
                      this._siblings.length > 1 &&
                      tt(e, this, null, 1, this._siblings);
                (this.vars.immediateRender ||
                  (0 === i &&
                    0 === this._delay &&
                    !1 !== this.vars.immediateRender)) &&
                  ((this._time = -1e-8),
                  this.render(Math.min(0, -this._delay)));
              },
              !0
            ),
            F = function(e) {
              return (
                e &&
                e.length &&
                e !== t &&
                e[0] &&
                (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
              );
            };
          ((a = D.prototype = new C()).constructor = D),
            (a.kill()._gc = !1),
            (a.ratio = 0),
            (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
            (a._notifyPluginsOfEnabled = a._lazy = !1),
            (D.version = "2.1.0"),
            (D.defaultEase = a._ease = new x(null, null, 1, 1)),
            (D.defaultOverwrite = "auto"),
            (D.ticker = o),
            (D.autoSleep = 120),
            (D.lagSmoothing = function(t, e) {
              o.lagSmoothing(t, e);
            }),
            (D.selector =
              t.$ ||
              t.jQuery ||
              function(e) {
                var s = t.$ || t.jQuery;
                return s
                  ? ((D.selector = s), s(e))
                  : (i || (i = t.document),
                    i
                      ? i.querySelectorAll
                        ? i.querySelectorAll(e)
                        : i.getElementById(
                            "#" === e.charAt(0) ? e.substr(1) : e
                          )
                      : e);
              });
          var z = [],
            E = {},
            I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            N = /[\+-]=-?[\.\d]/,
            X = function(t) {
              for (var e, i = this._firstPT; i; )
                (e = i.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join("")
                    : this.start
                  : i.c * t + i.s),
                  i.m
                    ? (e = i.m.call(
                        this._tween,
                        e,
                        this._target || i.t,
                        this._tween
                      ))
                    : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f
                    ? i.fp
                      ? i.t[i.p](i.fp, e)
                      : i.t[i.p](e)
                    : (i.t[i.p] = e),
                  (i = i._next);
            },
            L = function(t) {
              return ((1e3 * t) | 0) / 1e3 + "";
            },
            B = function(t, e, i, s) {
              var r,
                n,
                a,
                o,
                l,
                h,
                _,
                u = [],
                f = 0,
                c = "",
                p = 0;
              for (
                u.start = t,
                  u.end = e,
                  t = u[0] = t + "",
                  e = u[1] = e + "",
                  i && (i(u), (t = u[0]), (e = u[1])),
                  u.length = 0,
                  r = t.match(I) || [],
                  n = e.match(I) || [],
                  s &&
                    ((s._next = null),
                    (s.blob = 1),
                    (u._firstPT = u._applyPT = s)),
                  l = n.length,
                  o = 0;
                o < l;
                o++
              )
                (_ = n[o]),
                  (c += (h = e.substr(f, e.indexOf(_, f) - f)) || !o ? h : ","),
                  (f += h.length),
                  p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
                  _ === r[o] || r.length <= o
                    ? (c += _)
                    : (c && (u.push(c), (c = "")),
                      (a = parseFloat(r[o])),
                      u.push(a),
                      (u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c:
                          ("=" === _.charAt(1)
                            ? parseInt(_.charAt(0) + "1", 10) *
                              parseFloat(_.substr(2))
                            : parseFloat(_) - a) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : L
                      })),
                  (f += _.length);
              return (
                (c += e.substr(f)) && u.push(c),
                (u.setRatio = X),
                N.test(e) && (u.end = null),
                u
              );
            },
            j = function(t, e, i, s, r, n, a, o, l) {
              "function" == typeof s && (s = s(l || 0, t));
              var h = typeof t[e],
                _ =
                  "function" !== h
                    ? ""
                    : e.indexOf("set") ||
                      "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3),
                u = "get" !== i ? i : _ ? (a ? t[_](a) : t[_]()) : t[e],
                f = "string" == typeof s && "=" === s.charAt(1),
                c = {
                  t: t,
                  p: e,
                  s: u,
                  f: "function" === h,
                  pg: 0,
                  n: r || e,
                  m: n ? ("function" == typeof n ? n : Math.round) : 0,
                  pr: 0,
                  c: f
                    ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2))
                    : parseFloat(s) - u || 0
                };
              if (
                (("number" != typeof u || ("number" != typeof s && !f)) &&
                  (a ||
                  isNaN(u) ||
                  (!f && isNaN(s)) ||
                  "boolean" == typeof u ||
                  "boolean" == typeof s
                    ? ((c.fp = a),
                      (c = {
                        t: B(
                          u,
                          f
                            ? parseFloat(c.s) +
                                c.c +
                                (c.s + "").replace(/[0-9\-\.]/g, "")
                            : s,
                          o || D.defaultStringFilter,
                          c
                        ),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                      }))
                    : ((c.s = parseFloat(u)),
                      f || (c.c = parseFloat(s) - c.s || 0))),
                c.c)
              )
                return (
                  (c._next = this._firstPT) && (c._next._prev = c),
                  (this._firstPT = c),
                  c
                );
            },
            Y = (D._internals = {
              isArray: d,
              isSelector: F,
              lazyTweens: z,
              blobDif: B
            }),
            U = (D._plugins = {}),
            V = (Y.tweenLookup = {}),
            q = 0,
            W = (Y.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1
            }),
            G = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0
            },
            Z = (C._rootFramesTimeline = new M()),
            H = (C._rootTimeline = new M()),
            $ = 30,
            Q = (Y.lazyRender = function() {
              var t,
                e,
                i = z.length;
              for (E = {}, t = 0; t < i; t++)
                (e = z[t]) &&
                  !1 !== e._lazy &&
                  (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
              z.length = 0;
            });
          (H._startTime = o.time),
            (Z._startTime = o.frame),
            (H._active = Z._active = !0),
            setTimeout(Q, 1),
            (C._updateRoot = D.render = function() {
              var t, e, i;
              if (
                (z.length && Q(),
                H.render((o.time - H._startTime) * H._timeScale, !1, !1),
                Z.render((o.frame - Z._startTime) * Z._timeScale, !1, !1),
                z.length && Q(),
                o.frame >= $)
              ) {
                for (i in (($ = o.frame + (parseInt(D.autoSleep, 10) || 120)),
                V)) {
                  for (t = (e = V[i].tweens).length; --t > -1; )
                    e[t]._gc && e.splice(t, 1);
                  0 === e.length && delete V[i];
                }
                if (
                  (!(i = H._first) || i._paused) &&
                  D.autoSleep &&
                  !Z._first &&
                  1 === o._listeners.tick.length
                ) {
                  for (; i && i._paused; ) i = i._next;
                  i || o.sleep();
                }
              }
            }),
            o.addEventListener("tick", C._updateRoot);
          var K = function(t, e, i) {
              var s,
                r,
                n = t._gsTweenID;
              if (
                (V[n || (t._gsTweenID = n = "t" + q++)] ||
                  (V[n] = { target: t, tweens: [] }),
                e && (((s = V[n].tweens)[(r = s.length)] = e), i))
              )
                for (; --r > -1; ) s[r] === e && s.splice(r, 1);
              return V[n].tweens;
            },
            J = function(t, e, i, s) {
              var r,
                n,
                a = t.vars.onOverwrite;
              return (
                a && (r = a(t, e, i, s)),
                (a = D.onOverwrite) && (n = a(t, e, i, s)),
                !1 !== r && !1 !== n
              );
            },
            tt = function(t, e, i, s, r) {
              var n, a, o, l;
              if (1 === s || s >= 4) {
                for (l = r.length, n = 0; n < l; n++)
                  if ((o = r[n]) !== e)
                    o._gc || (o._kill(null, t, e) && (a = !0));
                  else if (5 === s) break;
                return a;
              }
              var h,
                _ = e._startTime + 1e-8,
                u = [],
                f = 0,
                c = 0 === e._duration;
              for (n = r.length; --n > -1; )
                (o = r[n]) === e ||
                  o._gc ||
                  o._paused ||
                  (o._timeline !== e._timeline
                    ? ((h = h || et(e, 0, c)),
                      0 === et(o, h, c) && (u[f++] = o))
                    : o._startTime <= _ &&
                      o._startTime + o.totalDuration() / o._timeScale > _ &&
                      (((c || !o._initted) && _ - o._startTime <= 2e-8) ||
                        (u[f++] = o)));
              for (n = f; --n > -1; )
                if (
                  ((l = (o = u[n])._firstPT),
                  2 === s && o._kill(i, t, e) && (a = !0),
                  2 !== s || (!o._firstPT && o._initted && l))
                ) {
                  if (2 !== s && !J(o, e)) continue;
                  o._enabled(!1, !1) && (a = !0);
                }
              return a;
            },
            et = function(t, e, i) {
              for (
                var s = t._timeline, r = s._timeScale, n = t._startTime;
                s._timeline;

              ) {
                if (((n += s._startTime), (r *= s._timeScale), s._paused))
                  return -100;
                s = s._timeline;
              }
              return (n /= r) > e
                ? n - e
                : (i && n === e) || (!t._initted && n - e < 2e-8)
                ? 1e-8
                : (n += t.totalDuration() / t._timeScale / r) > e + 1e-8
                ? 0
                : n - e - 1e-8;
            };
          (a._init = function() {
            var t,
              e,
              i,
              s,
              r,
              n,
              a = this.vars,
              o = this._overwrittenProps,
              l = this._duration,
              h = !!a.immediateRender,
              _ = a.ease,
              u = this._startAt;
            if (a.startAt) {
              for (s in (u && (u.render(-1, !0), u.kill()),
              (r = {}),
              a.startAt))
                r[s] = a.startAt[s];
              if (
                ((r.data = "isStart"),
                (r.overwrite = !1),
                (r.immediateRender = !0),
                (r.lazy = h && !1 !== a.lazy),
                (r.startAt = r.delay = null),
                (r.onUpdate = a.onUpdate),
                (r.onUpdateParams = a.onUpdateParams),
                (r.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                (this._startAt = D.to(this.target || {}, 0, r)),
                h)
              )
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return;
            } else if (a.runBackwards && 0 !== l)
              if (u) u.render(-1, !0), u.kill(), (this._startAt = null);
              else {
                for (s in (0 !== this._time && (h = !1), (i = {}), a))
                  (W[s] && "autoCSS" !== s) || (i[s] = a[s]);
                if (
                  ((i.overwrite = 0),
                  (i.data = "isFromStart"),
                  (i.lazy = h && !1 !== a.lazy),
                  (i.immediateRender = h),
                  (this._startAt = D.to(this.target, 0, i)),
                  h)
                ) {
                  if (0 === this._time) return;
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null);
              }
            if (
              ((this._ease = _ = _
                ? _ instanceof x
                  ? _
                  : "function" == typeof _
                  ? new x(_, a.easeParams)
                  : b[_] || D.defaultEase
                : D.defaultEase),
              a.easeParams instanceof Array &&
                _.config &&
                (this._ease = _.config.apply(_, a.easeParams)),
              (this._easeType = this._ease._type),
              (this._easePower = this._ease._power),
              (this._firstPT = null),
              this._targets)
            )
              for (n = this._targets.length, t = 0; t < n; t++)
                this._initProps(
                  this._targets[t],
                  (this._propLookup[t] = {}),
                  this._siblings[t],
                  o ? o[t] : null,
                  t
                ) && (e = !0);
            else
              e = this._initProps(
                this.target,
                this._propLookup,
                this._siblings,
                o,
                0
              );
            if (
              (e && D._onPluginEvent("_onInitAllProps", this),
              o &&
                (this._firstPT ||
                  ("function" != typeof this.target && this._enabled(!1, !1))),
              a.runBackwards)
            )
              for (i = this._firstPT; i; )
                (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = a.onUpdate), (this._initted = !0);
          }),
            (a._initProps = function(e, i, s, r, n) {
              var a, o, l, h, _, u;
              if (null == e) return !1;
              for (a in (E[e._gsTweenID] && Q(),
              this.vars.css ||
                (e.style &&
                  e !== t &&
                  e.nodeType &&
                  U.css &&
                  !1 !== this.vars.autoCSS &&
                  (function(t, e) {
                    var i,
                      s = {};
                    for (i in t)
                      W[i] ||
                        (i in e &&
                          "transform" !== i &&
                          "x" !== i &&
                          "y" !== i &&
                          "width" !== i &&
                          "height" !== i &&
                          "className" !== i &&
                          "border" !== i) ||
                        !(!U[i] || (U[i] && U[i]._autoCSS)) ||
                        ((s[i] = t[i]), delete t[i]);
                    t.css = s;
                  })(this.vars, e)),
              this.vars))
                if (((u = this.vars[a]), W[a]))
                  u &&
                    (u instanceof Array || (u.push && d(u))) &&
                    -1 !== u.join("").indexOf("{self}") &&
                    (this.vars[a] = u = this._swapSelfInParams(u, this));
                else if (
                  U[a] &&
                  (h = new U[a]())._onInitTween(e, this.vars[a], this, n)
                ) {
                  for (
                    this._firstPT = _ = {
                      _next: this._firstPT,
                      t: h,
                      p: "setRatio",
                      s: 0,
                      c: 1,
                      f: 1,
                      n: a,
                      pg: 1,
                      pr: h._priority,
                      m: 0
                    },
                      o = h._overwriteProps.length;
                    --o > -1;

                  )
                    i[h._overwriteProps[o]] = this._firstPT;
                  (h._priority || h._onInitAllProps) && (l = !0),
                    (h._onDisable || h._onEnable) &&
                      (this._notifyPluginsOfEnabled = !0),
                    _._next && (_._next._prev = _);
                } else
                  i[a] = j.call(
                    this,
                    e,
                    a,
                    "get",
                    u,
                    a,
                    0,
                    null,
                    this.vars.stringFilter,
                    n
                  );
              return r && this._kill(r, e)
                ? this._initProps(e, i, s, r, n)
                : this._overwrite > 1 &&
                  this._firstPT &&
                  s.length > 1 &&
                  tt(e, this, i, this._overwrite, s)
                ? (this._kill(i, e), this._initProps(e, i, s, r, n))
                : (this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration)) &&
                    (E[e._gsTweenID] = !0),
                  l);
            }),
            (a.render = function(t, e, i) {
              var s,
                r,
                n,
                a,
                o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
              if (t >= l - 1e-8 && t >= 0)
                (this._totalTime = this._time = l),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(1)
                    : 1),
                  this._reversed ||
                    ((s = !0),
                    (r = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (h < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === h && "isPause" !== this.data)) &&
                      h !== t &&
                      ((i = !0), h > 1e-8 && (r = "onReverseComplete")),
                    (this._rawPrevTime = a = !e || t || h === t ? t : 1e-8));
              else if (t < 1e-8)
                (this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== o || (0 === l && h > 0)) &&
                    ((r = "onReverseComplete"), (s = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === l &&
                        (this._initted || !this.vars.lazy || i) &&
                        (h >= 0 &&
                          (1e-8 !== h || "isPause" !== this.data) &&
                          (i = !0),
                        (this._rawPrevTime = a =
                          !e || t || h === t ? t : 1e-8))),
                  (!this._initted ||
                    (this._startAt && this._startAt.progress())) &&
                    (i = !0);
              else if (((this._totalTime = this._time = t), this._easeType)) {
                var _ = t / l,
                  u = this._easeType,
                  f = this._easePower;
                (1 === u || (3 === u && _ >= 0.5)) && (_ = 1 - _),
                  3 === u && (_ *= 2),
                  1 === f
                    ? (_ *= _)
                    : 2 === f
                    ? (_ *= _ * _)
                    : 3 === f
                    ? (_ *= _ * _ * _)
                    : 4 === f && (_ *= _ * _ * _ * _),
                  (this.ratio =
                    1 === u
                      ? 1 - _
                      : 2 === u
                      ? _
                      : t / l < 0.5
                      ? _ / 2
                      : 1 - _ / 2);
              } else this.ratio = this._ease.getRatio(t / l);
              if (this._time !== o || i) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return;
                  if (
                    !i &&
                    this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration))
                  )
                    return (
                      (this._time = this._totalTime = o),
                      (this._rawPrevTime = h),
                      z.push(this),
                      void (this._lazy = [t, e])
                    );
                  this._time && !s
                    ? (this.ratio = this._ease.getRatio(this._time / l))
                    : s &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(
                        0 === this._time ? 0 : 1
                      ));
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active ||
                      (!this._paused &&
                        this._time !== o &&
                        t >= 0 &&
                        (this._active = !0)),
                    0 === o &&
                      (this._startAt &&
                        (t >= 0
                          ? this._startAt.render(t, !0, i)
                          : r || (r = "_dummyGS")),
                      this.vars.onStart &&
                        ((0 === this._time && 0 !== l) ||
                          e ||
                          this._callback("onStart"))),
                    n = this._firstPT;
                  n;

                )
                  n.f
                    ? n.t[n.p](n.c * this.ratio + n.s)
                    : (n.t[n.p] = n.c * this.ratio + n.s),
                    (n = n._next);
                this._onUpdate &&
                  (t < 0 &&
                    this._startAt &&
                    -1e-4 !== t &&
                    this._startAt.render(t, !0, i),
                  e ||
                    ((this._time !== o || s || i) &&
                      this._callback("onUpdate"))),
                  r &&
                    ((this._gc && !i) ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      s &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[r] && this._callback(r),
                      0 === l &&
                        1e-8 === this._rawPrevTime &&
                        1e-8 !== a &&
                        (this._rawPrevTime = 0)));
              }
            }),
            (a._kill = function(t, e, i) {
              if (
                ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
              )
                return (this._lazy = !1), this._enabled(!1, !1);
              e =
                "string" != typeof e
                  ? e || this._targets || this.target
                  : D.selector(e) || e;
              var s,
                r,
                n,
                a,
                o,
                l,
                h,
                _,
                u,
                f =
                  i &&
                  this._time &&
                  i._startTime === this._startTime &&
                  this._timeline === i._timeline,
                c = this._firstPT;
              if ((d(e) || F(e)) && "number" != typeof e[0])
                for (s = e.length; --s > -1; )
                  this._kill(t, e[s], i) && (l = !0);
              else {
                if (this._targets) {
                  for (s = this._targets.length; --s > -1; )
                    if (e === this._targets[s]) {
                      (o = this._propLookup[s] || {}),
                        (this._overwrittenProps = this._overwrittenProps || []),
                        (r = this._overwrittenProps[s] = t
                          ? this._overwrittenProps[s] || {}
                          : "all");
                      break;
                    }
                } else {
                  if (e !== this.target) return !1;
                  (o = this._propLookup),
                    (r = this._overwrittenProps = t
                      ? this._overwrittenProps || {}
                      : "all");
                }
                if (o) {
                  if (
                    ((h = t || o),
                    (_ =
                      t !== r &&
                      "all" !== r &&
                      t !== o &&
                      ("object" != typeof t || !t._tempKill)),
                    i && (D.onOverwrite || this.vars.onOverwrite))
                  ) {
                    for (n in h) o[n] && (u || (u = []), u.push(n));
                    if ((u || !t) && !J(this, i, e, u)) return !1;
                  }
                  for (n in h)
                    (a = o[n]) &&
                      (f && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (l = !0)),
                      a.pg && a.t._kill(h) && (l = !0),
                      (a.pg && 0 !== a.t._overwriteProps.length) ||
                        (a._prev
                          ? (a._prev._next = a._next)
                          : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        (a._next = a._prev = null)),
                      delete o[n]),
                      _ && (r[n] = 1);
                  !this._firstPT && this._initted && c && this._enabled(!1, !1);
                }
              }
              return l;
            }),
            (a.invalidate = function() {
              this._notifyPluginsOfEnabled &&
                D._onPluginEvent("_onDisable", this);
              var t = this._time;
              return (
                (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                (this._propLookup = this._targets ? {} : []),
                C.prototype.invalidate.call(this),
                this.vars.immediateRender &&
                  ((this._time = -1e-8),
                  this.render(t, !1, !1 !== this.vars.lazy)),
                this
              );
            }),
            (a._enabled = function(t, e) {
              if ((l || o.wake(), t && this._gc)) {
                var i,
                  s = this._targets;
                if (s)
                  for (i = s.length; --i > -1; )
                    this._siblings[i] = K(s[i], this, !0);
                else this._siblings = K(this.target, this, !0);
              }
              return (
                C.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                  D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              );
            }),
            (D.to = function(t, e, i) {
              return new D(t, e, i);
            }),
            (D.from = function(t, e, i) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                new D(t, e, i)
              );
            }),
            (D.fromTo = function(t, e, i, s) {
              return (
                (s.startAt = i),
                (s.immediateRender =
                  0 != s.immediateRender && 0 != i.immediateRender),
                new D(t, e, s)
              );
            }),
            (D.delayedCall = function(t, e, i, s, r) {
              return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
              });
            }),
            (D.set = function(t, e) {
              return new D(t, 0, e);
            }),
            (D.getTweensOf = function(t, e) {
              if (null == t) return [];
              var i, s, r, n;
              if (
                ((t = "string" != typeof t ? t : D.selector(t) || t),
                (d(t) || F(t)) && "number" != typeof t[0])
              ) {
                for (i = t.length, s = []; --i > -1; )
                  s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1; )
                  for (n = s[i], r = i; --r > -1; )
                    n === s[r] && s.splice(i, 1);
              } else if (t._gsTweenID)
                for (i = (s = K(t).concat()).length; --i > -1; )
                  (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
              return s || [];
            }),
            (D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
              "object" == typeof e && ((i = e), (e = !1));
              for (var s = D.getTweensOf(t, e), r = s.length; --r > -1; )
                s[r]._kill(i, t);
            });
          var it = y(
            "plugins.TweenPlugin",
            function(t, e) {
              (this._overwriteProps = (t || "").split(",")),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = it.prototype);
            },
            !0
          );
          if (
            ((a = it.prototype),
            (it.version = "1.19.0"),
            (it.API = 2),
            (a._firstPT = null),
            (a._addTween = j),
            (a.setRatio = X),
            (a._kill = function(t) {
              var e,
                i = this._overwriteProps,
                s = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; s; )
                null != t[s.n] &&
                  (s._next && (s._next._prev = s._prev),
                  s._prev
                    ? ((s._prev._next = s._next), (s._prev = null))
                    : this._firstPT === s && (this._firstPT = s._next)),
                  (s = s._next);
              return !1;
            }),
            (a._mod = a._roundProps = function(t) {
              for (var e, i = this._firstPT; i; )
                (e =
                  t[this._propName] ||
                  (null != i.n &&
                    t[i.n.split(this._propName + "_").join("")])) &&
                  "function" == typeof e &&
                  (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                  (i = i._next);
            }),
            (D._onPluginEvent = function(t, e) {
              var i,
                s,
                r,
                n,
                a,
                o = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; o; ) {
                  for (a = o._next, s = r; s && s.pr > o.pr; ) s = s._next;
                  (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (r = o),
                    (o._next = s) ? (s._prev = o) : (n = o),
                    (o = a);
                }
                o = e._firstPT = r;
              }
              for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                  (o = o._next);
              return i;
            }),
            (it.activate = function(t) {
              for (var e = t.length; --e > -1; )
                t[e].API === it.API && (U[new t[e]()._propName] = t[e]);
              return !0;
            }),
            (v.plugin = function(t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e,
                i = t.propName,
                s = t.priority || 0,
                r = t.overwriteProps,
                n = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps"
                },
                a = y(
                  "plugins." +
                    i.charAt(0).toUpperCase() +
                    i.substr(1) +
                    "Plugin",
                  function() {
                    it.call(this, i, s), (this._overwriteProps = r || []);
                  },
                  !0 === t.global
                ),
                o = (a.prototype = new it(i));
              for (e in ((o.constructor = a), (a.API = t.API), n))
                "function" == typeof t[e] && (o[n[e]] = t[e]);
              return (a.version = t.version), it.activate([a]), a;
            }),
            (r = t._gsQueue))
          ) {
            for (n = 0; n < r.length; n++) r[n]();
            for (a in m)
              m[a].func ||
                t.console.log("GSAP encountered missing dependency: " + a);
          }
          return (l = !1), D;
        })(r),
        a = r.GreenSockGlobals,
        o = a.com.greensock,
        l = o.core.SimpleTimeline,
        h = o.core.Animation,
        _ = a.Ease,
        u = (a.Linear, a.Power1, a.Power2, a.Power3, a.Power4, a.TweenPlugin);
      o.events.EventDispatcher;
    }.call(this, i(64)(t), i(66)));
  },
  63: function(t, e, i) {
    "use strict";
    var s = i(0);
    /*!
     * VERSION: 2.1.0
     * DATE: 2019-02-15
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ s.e._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function() {
        var t = function(t) {
            var e,
              i = [],
              s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i;
          },
          e = function(t, e, i) {
            var s,
              r,
              n = t.cycle;
            for (s in n)
              (r = n[s]),
                (t[s] =
                  "function" == typeof r ? r(i, e[i], e) : r[i % r.length]);
            delete t.cycle;
          },
          i = function(t) {
            if ("function" == typeof t) return t;
            var e = isNaN(t)
                ? t
                : { n: 1, from: t < 0 ? (t = -t) && "end" : 0 },
              i = e.ease,
              s = e.from || 0,
              r = e.base || 0,
              n = {},
              a = isNaN(s),
              o = e.axis,
              l = { center: 0.5, end: 1 }[s] || 0;
            return function(h, _, u) {
              var f,
                c,
                p,
                d,
                m,
                g,
                v,
                y,
                T,
                x = (u || e).length,
                b = n[x];
              if (!b) {
                if (!(T = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                  for (
                    v = -1 / 0;
                    v < (v = u[T++].getBoundingClientRect().left) && T < x;

                  );
                  T--;
                }
                for (
                  b = n[x] = [],
                    f = a ? Math.min(T, x) * l - 0.5 : s % T,
                    c = a ? (x * l) / T - 0.5 : (s / T) | 0,
                    v = 0,
                    y = 1 / 0,
                    g = 0;
                  g < x;
                  g++
                )
                  (p = (g % T) - f),
                    (d = c - ((g / T) | 0)),
                    (b[g] = m = o
                      ? Math.abs("y" === o ? d : p)
                      : Math.sqrt(p * p + d * d)),
                    m > v && (v = m),
                    m < y && (y = m);
                (b.max = v - y),
                  (b.min = y),
                  (b.v = e.n ? x * (t || 0) : e.amount);
              }
              return (
                (x = (b[h] - b.min) / b.max), r + (i ? i.getRatio(x) : x) * b.v
              );
            };
          },
          r = function(t, e, i) {
            s.f.call(this, t, e, i),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._repeat && this._uncache(!0),
              (this.render = r.prototype.render);
          },
          n = s.f._internals,
          a = n.isSelector,
          o = n.isArray,
          l = (r.prototype = s.f.to({}, 0.1, {})),
          h = [];
        (r.version = "2.1.0"),
          (l.constructor = r),
          (l.kill()._gc = !1),
          (r.killTweensOf = r.killDelayedCallsTo = s.f.killTweensOf),
          (r.getTweensOf = s.f.getTweensOf),
          (r.lagSmoothing = s.f.lagSmoothing),
          (r.ticker = s.f.ticker),
          (r.render = s.f.render),
          (r.distribute = i),
          (l.invalidate = function() {
            return (
              (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._yoyoEase = null),
              this._uncache(!0),
              s.f.prototype.invalidate.call(this)
            );
          }),
          (l.updateTo = function(t, e) {
            var i,
              r = this.ratio,
              n = this.vars.immediateRender || t.immediateRender;
            for (i in (e &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time),
              this._uncache(!1),
              this._gc
                ? this._enabled(!0, !1)
                : this._timeline.insert(this, this._startTime - this._delay)),
            t))
              this.vars[i] = t[i];
            if (this._initted || n)
              if (e) (this._initted = !1), n && this.render(0, !0, !0);
              else if (
                (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled &&
                  this._firstPT &&
                  s.f._onPluginEvent("_onDisable", this),
                this._time / this._duration > 0.998)
              ) {
                var a = this._totalTime;
                this.render(0, !0, !1),
                  (this._initted = !1),
                  this.render(a, !0, !1);
              } else if (
                ((this._initted = !1), this._init(), this._time > 0 || n)
              )
                for (var o, l = 1 / (1 - r), h = this._firstPT; h; )
                  (o = h.s + h.c), (h.c *= l), (h.s = o - h.c), (h = h._next);
            return this;
          }),
          (l.render = function(t, e, i) {
            this._initted ||
              (0 === this._duration && this.vars.repeat && this.invalidate());
            var r,
              a,
              o,
              l,
              h,
              _,
              u,
              f,
              c,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._time,
              m = this._totalTime,
              g = this._cycle,
              v = this._duration,
              y = this._rawPrevTime;
            if (
              (t >= p - 1e-8 && t >= 0
                ? ((this._totalTime = p),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0))
                    : ((this._time = v),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1)),
                  this._reversed ||
                    ((r = !0),
                    (a = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (y < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === y && "isPause" !== this.data)) &&
                      y !== t &&
                      ((i = !0), y > 1e-8 && (a = "onReverseComplete")),
                    (this._rawPrevTime = f = !e || t || y === t ? t : 1e-8)))
                : t < 1e-8
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== m || (0 === v && y > 0)) &&
                    ((a = "onReverseComplete"), (r = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === v &&
                        (this._initted || !this.vars.lazy || i) &&
                        (y >= 0 && (i = !0),
                        (this._rawPrevTime = f =
                          !e || t || y === t ? t : 1e-8))),
                  this._initted || (i = !0))
                : ((this._totalTime = this._time = t),
                  0 !== this._repeat &&
                    ((l = v + this._repeatDelay),
                    (this._cycle = (this._totalTime / l) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / l &&
                      m <= t &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * l),
                    this._yoyo &&
                      0 != (1 & this._cycle) &&
                      ((this._time = v - this._time),
                      (c = this._yoyoEase || this.vars.yoyoEase) &&
                        (this._yoyoEase ||
                          (!0 !== c || this._initted
                            ? (this._yoyoEase = c =
                                !0 === c
                                  ? this._ease
                                  : c instanceof s.b
                                  ? c
                                  : s.b.map[c])
                            : ((c = this.vars.ease),
                              (this._yoyoEase = c = c
                                ? c instanceof s.b
                                  ? c
                                  : "function" == typeof c
                                  ? new s.b(c, this.vars.easeParams)
                                  : s.b.map[c] || s.f.defaultEase
                                : s.f.defaultEase))),
                        (this.ratio = c
                          ? 1 - c.getRatio((v - this._time) / v)
                          : 0))),
                    this._time > v
                      ? (this._time = v)
                      : this._time < 0 && (this._time = 0)),
                  this._easeType && !c
                    ? ((h = this._time / v),
                      (1 === (_ = this._easeType) || (3 === _ && h >= 0.5)) &&
                        (h = 1 - h),
                      3 === _ && (h *= 2),
                      1 === (u = this._easePower)
                        ? (h *= h)
                        : 2 === u
                        ? (h *= h * h)
                        : 3 === u
                        ? (h *= h * h * h)
                        : 4 === u && (h *= h * h * h * h),
                      (this.ratio =
                        1 === _
                          ? 1 - h
                          : 2 === _
                          ? h
                          : this._time / v < 0.5
                          ? h / 2
                          : 1 - h / 2))
                    : c || (this.ratio = this._ease.getRatio(this._time / v))),
              d !== this._time || i || g !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return;
                if (
                  !i &&
                  this._firstPT &&
                  ((!1 !== this.vars.lazy && this._duration) ||
                    (this.vars.lazy && !this._duration))
                )
                  return (
                    (this._time = d),
                    (this._totalTime = m),
                    (this._rawPrevTime = y),
                    (this._cycle = g),
                    n.lazyTweens.push(this),
                    void (this._lazy = [t, e])
                  );
                !this._time || r || c
                  ? r &&
                    this._ease._calcEnd &&
                    !c &&
                    (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  : (this.ratio = this._ease.getRatio(this._time / v));
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active ||
                    (!this._paused &&
                      this._time !== d &&
                      t >= 0 &&
                      (this._active = !0)),
                  0 === m &&
                    (2 === this._initted && t > 0 && this._init(),
                    this._startAt &&
                      (t >= 0
                        ? this._startAt.render(t, !0, i)
                        : a || (a = "_dummyGS")),
                    this.vars.onStart &&
                      ((0 === this._totalTime && 0 !== v) ||
                        e ||
                        this._callback("onStart"))),
                  o = this._firstPT;
                o;

              )
                o.f
                  ? o.t[o.p](o.c * this.ratio + o.s)
                  : (o.t[o.p] = o.c * this.ratio + o.s),
                  (o = o._next);
              this._onUpdate &&
                (t < 0 &&
                  this._startAt &&
                  this._startTime &&
                  this._startAt.render(t, !0, i),
                e ||
                  ((this._totalTime !== m || a) && this._callback("onUpdate"))),
                this._cycle !== g &&
                  (e ||
                    this._gc ||
                    (this.vars.onRepeat && this._callback("onRepeat"))),
                a &&
                  ((this._gc && !i) ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startTime &&
                      this._startAt.render(t, !0, i),
                    r &&
                      (this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[a] && this._callback(a),
                    0 === v &&
                      1e-8 === this._rawPrevTime &&
                      1e-8 !== f &&
                      (this._rawPrevTime = 0)));
            } else
              m !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (r.to = function(t, e, i) {
            return new r(t, e, i);
          }),
          (r.from = function(t, e, i) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              new r(t, e, i)
            );
          }),
          (r.fromTo = function(t, e, i, s) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              new r(t, e, s)
            );
          }),
          (r.staggerTo = r.allTo = function(n, l, _, u, f, c, p) {
            var d,
              m,
              g,
              v,
              y = [],
              T = i(_.stagger || u),
              x = _.cycle,
              b = (_.startAt || h).cycle;
            for (
              o(n) ||
                ("string" == typeof n && (n = s.f.selector(n) || n),
                a(n) && (n = t(n))),
                d = (n = n || []).length - 1,
                g = 0;
              g <= d;
              g++
            ) {
              for (v in ((m = {}), _)) m[v] = _[v];
              if (
                (x &&
                  (e(m, n, g),
                  null != m.duration && ((l = m.duration), delete m.duration)),
                b)
              ) {
                for (v in ((b = m.startAt = {}), _.startAt))
                  b[v] = _.startAt[v];
                e(m.startAt, n, g);
              }
              (m.delay = T(g, n[g], n) + (m.delay || 0)),
                g === d &&
                  f &&
                  (m.onComplete = function() {
                    _.onComplete &&
                      _.onComplete.apply(_.onCompleteScope || this, arguments),
                      f.apply(p || _.callbackScope || this, c || h);
                  }),
                (y[g] = new r(n[g], l, m));
            }
            return y;
          }),
          (r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              r.staggerTo(t, e, i, s, n, a, o)
            );
          }),
          (r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, l) {
            return (
              (s.startAt = i),
              (s.immediateRender =
                0 != s.immediateRender && 0 != i.immediateRender),
              r.staggerTo(t, e, s, n, a, o, l)
            );
          }),
          (r.delayedCall = function(t, e, i, s, n) {
            return new r(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: i,
              callbackScope: s,
              onReverseComplete: e,
              onReverseCompleteParams: i,
              immediateRender: !1,
              useFrames: n,
              overwrite: 0
            });
          }),
          (r.set = function(t, e) {
            return new r(t, 0, e);
          }),
          (r.isTweening = function(t) {
            return s.f.getTweensOf(t, !0).length > 0;
          });
        var _ = function(t, e) {
            for (var i = [], r = 0, n = t._first; n; )
              n instanceof s.f
                ? (i[r++] = n)
                : (e && (i[r++] = n), (r = (i = i.concat(_(n, e))).length)),
                (n = n._next);
            return i;
          },
          u = (r.getAllTweens = function(t) {
            return _(s.a._rootTimeline, t).concat(
              _(s.a._rootFramesTimeline, t)
            );
          });
        (r.killAll = function(t, e, i, r) {
          null == e && (e = !0), null == i && (i = !0);
          var n,
            a,
            o,
            l = u(0 != r),
            h = l.length,
            _ = e && i && r;
          for (o = 0; o < h; o++)
            (a = l[o]),
              (_ ||
                a instanceof s.c ||
                ((n = a.target === a.vars.onComplete) && i) ||
                (e && !n)) &&
                (t
                  ? a.totalTime(a._reversed ? 0 : a.totalDuration())
                  : a._enabled(!1, !1));
        }),
          (r.killChildTweensOf = function(e, i) {
            if (null != e) {
              var l,
                h,
                _,
                u,
                f,
                c = n.tweenLookup;
              if (
                ("string" == typeof e && (e = s.f.selector(e) || e),
                a(e) && (e = t(e)),
                o(e))
              )
                for (u = e.length; --u > -1; ) r.killChildTweensOf(e[u], i);
              else {
                for (_ in ((l = []), c))
                  for (h = c[_].target.parentNode; h; )
                    h === e && (l = l.concat(c[_].tweens)), (h = h.parentNode);
                for (f = l.length, u = 0; u < f; u++)
                  i && l[u].totalTime(l[u].totalDuration()),
                    l[u]._enabled(!1, !1);
              }
            }
          });
        var f = function(t, e, i, r) {
          (e = !1 !== e), (i = !1 !== i);
          for (
            var n, a, o = u((r = !1 !== r)), l = e && i && r, h = o.length;
            --h > -1;

          )
            (a = o[h]),
              (l ||
                a instanceof s.c ||
                ((n = a.target === a.vars.onComplete) && i) ||
                (e && !n)) &&
                a.paused(t);
        };
        return (
          (r.pauseAll = function(t, e, i) {
            f(!0, t, e, i);
          }),
          (r.resumeAll = function(t, e, i) {
            f(!1, t, e, i);
          }),
          (r.globalTimeScale = function(t) {
            var e = s.a._rootTimeline,
              i = s.f.ticker.time;
            return arguments.length
              ? ((t = t || 1e-8),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e = s.a._rootFramesTimeline),
                (i = s.f.ticker.frame),
                (e._startTime = i - ((i - e._startTime) * e._timeScale) / t),
                (e._timeScale = s.a._rootTimeline._timeScale = t),
                t)
              : e._timeScale;
          }),
          (l.progress = function(t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (l.totalProgress = function(t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (l.time = function(t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
              s = this._cycle,
              r = s * (i * this._repeatDelay);
            return (
              t > i && (t = i),
              this.totalTime(
                this._yoyo && 1 & s ? i - t + r : this._repeat ? t + r : t,
                e
              )
            );
          }),
          (l.duration = function(t) {
            return arguments.length
              ? s.a.prototype.duration.call(this, t)
              : this._duration;
          }),
          (l.totalDuration = function(t) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  ((this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat),
                  (this._dirty = !1)),
                this._totalDuration);
          }),
          (l.repeat = function(t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (l.repeatDelay = function(t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (l.yoyo = function(t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          r
        );
      },
      !0
    );
    var r = s.g.TweenMax;
    /*!
     * VERSION: 2.1.0
     * DATE: 2019-02-15
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    s.e._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function() {
        var t,
          e,
          i,
          r,
          n = function() {
            s.d.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = n.prototype.setRatio);
          },
          a = s.e._gsDefine.globals,
          o = {},
          l = (n.prototype = new s.d("css"));
        (l.constructor = n),
          (n.version = "2.1.0"),
          (n.API = 2),
          (n.defaultTransformPerspective = 0),
          (n.defaultSkewType = "compensated"),
          (n.defaultSmoothOrigin = !0),
          (l = "px"),
          (n.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
          });
        var h,
          _,
          u,
          f,
          c,
          p,
          d,
          m,
          g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          x = /(?:\d|\-|\+|=|#|\.)*/g,
          b = /opacity *= *([^)]*)/i,
          w = /opacity:([^;]*)/i,
          P = /alpha\(opacity *=.+?\)/i,
          O = /^(rgb|hsl)/,
          S = /([A-Z])/g,
          k = /-([a-z])/gi,
          R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          C = function(t, e) {
            return e.toUpperCase();
          },
          A = /(?:Left|Right|Width)/i,
          M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          F = /,(?=[^\)]*(?:\(|$))/gi,
          z = /[\s,\(]/i,
          E = Math.PI / 180,
          I = 180 / Math.PI,
          N = {},
          X = { style: {} },
          L = s.e.document || {
            createElement: function() {
              return X;
            }
          },
          B = function(t, e) {
            return e && L.createElementNS
              ? L.createElementNS(e, t)
              : L.createElement(t);
          },
          j = B("div"),
          Y = B("img"),
          U = (n._internals = { _specialProps: o }),
          V = (s.e.navigator || {}).userAgent || "",
          q = (function() {
            var t = V.indexOf("Android"),
              e = B("a");
            return (
              (u =
                -1 !== V.indexOf("Safari") &&
                -1 === V.indexOf("Chrome") &&
                (-1 === t || parseFloat(V.substr(t + 8, 2)) > 3)),
              (c = u && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6),
              (f = -1 !== V.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) &&
                (p = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          W = function(t) {
            return b.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          G = function(t) {
            s.e.console && console.log(t);
          },
          Z = "",
          H = "",
          $ = function(t, e) {
            var i,
              s,
              r = (e = e || j).style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                s = 5;
              --s > -1 && void 0 === r[i[s] + t];

            );
            return s >= 0
              ? ((Z = "-" + (H = 3 === s ? "ms" : i[s]).toLowerCase() + "-"),
                H + t)
              : null;
          },
          Q =
            "undefined" != typeof window
              ? window
              : L.defaultView || { getComputedStyle: function() {} },
          K = function(t) {
            return Q.getComputedStyle(t);
          },
          J = (n.getStyle = function(t, e, i, s, r) {
            var n;
            return q || "opacity" !== e
              ? (!s && t.style[e]
                  ? (n = t.style[e])
                  : (i = i || K(t))
                  ? (n =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(S, "-$1").toLowerCase()))
                  : t.currentStyle && (n = t.currentStyle[e]),
                null == r ||
                (n && "none" !== n && "auto" !== n && "auto auto" !== n)
                  ? n
                  : r)
              : W(t);
          }),
          tt = (U.convertToPixels = function(t, e, i, r, a) {
            if ("px" === r || (!r && "lineHeight" !== e)) return i;
            if ("auto" === r || !i) return 0;
            var o,
              l,
              h,
              _ = A.test(e),
              u = t,
              f = j.style,
              c = i < 0,
              p = 1 === i;
            if ((c && (i = -i), p && (i *= 100), "lineHeight" !== e || r))
              if ("%" === r && -1 !== e.indexOf("border"))
                o = (i / 100) * (_ ? t.clientWidth : t.clientHeight);
              else {
                if (
                  ((f.cssText =
                    "border:0 solid red;position:" +
                    J(t, "position") +
                    ";line-height:0;"),
                  "%" !== r &&
                    u.appendChild &&
                    "v" !== r.charAt(0) &&
                    "rem" !== r)
                )
                  f[_ ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                else {
                  if (
                    ((u = t.parentNode || L.body),
                    -1 !== J(u, "display").indexOf("flex") &&
                      (f.position = "absolute"),
                    (l = u._gsCache),
                    (h = s.f.ticker.frame),
                    l && _ && l.time === h)
                  )
                    return (l.width * i) / 100;
                  f[_ ? "width" : "height"] = i + r;
                }
                u.appendChild(j),
                  (o = parseFloat(j[_ ? "offsetWidth" : "offsetHeight"])),
                  u.removeChild(j),
                  _ &&
                    "%" === r &&
                    !1 !== n.cacheWidths &&
                    (((l = u._gsCache = u._gsCache || {}).time = h),
                    (l.width = (o / i) * 100)),
                  0 !== o || a || (o = tt(t, e, i, r, !0));
              }
            else
              (l = K(t).lineHeight),
                (t.style.lineHeight = i),
                (o = parseFloat(K(t).lineHeight)),
                (t.style.lineHeight = l);
            return p && (o /= 100), c ? -o : o;
          }),
          et = (U.calculateOffset = function(t, e, i) {
            if ("absolute" !== J(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
              r = J(t, "margin" + s, i);
            return (
              t["offset" + s] - (tt(t, e, parseFloat(r), r.replace(x, "")) || 0)
            );
          }),
          it = function(t, e) {
            var i,
              s,
              r,
              n = {};
            if ((e = e || K(t)))
              if ((i = e.length))
                for (; --i > -1; )
                  (-1 !== (r = e[i]).indexOf("-transform") && Ft !== r) ||
                    (n[r.replace(k, C)] = e.getPropertyValue(r));
              else
                for (i in e)
                  (-1 !== i.indexOf("Transform") && Dt !== i) || (n[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === n[i] &&
                  (n[i.replace(k, C)] = e[i]);
            return (
              q || (n.opacity = W(t)),
              (s = Wt(t, e, !1)),
              (n.rotation = s.rotation),
              (n.skewX = s.skewX),
              (n.scaleX = s.scaleX),
              (n.scaleY = s.scaleY),
              (n.x = s.x),
              (n.y = s.y),
              Et &&
                ((n.z = s.z),
                (n.rotationX = s.rotationX),
                (n.rotationY = s.rotationY),
                (n.scaleZ = s.scaleZ)),
              n.filters && delete n.filters,
              n
            );
          },
          st = function(t, e, i, s, r) {
            var n,
              a,
              o,
              l = {},
              h = t.style;
            for (a in i)
              "cssText" !== a &&
                "length" !== a &&
                isNaN(a) &&
                (e[a] !== (n = i[a]) || (r && r[a])) &&
                -1 === a.indexOf("Origin") &&
                (("number" != typeof n && "string" != typeof n) ||
                  ((l[a] =
                    "auto" !== n || ("left" !== a && "top" !== a)
                      ? ("" !== n && "auto" !== n && "none" !== n) ||
                        "string" != typeof e[a] ||
                        "" === e[a].replace(T, "")
                        ? n
                        : 0
                      : et(t, a)),
                  void 0 !== h[a] && (o = new vt(h, a, h[a], o))));
            if (s) for (a in s) "className" !== a && (l[a] = s[a]);
            return { difs: l, firstMPT: o };
          },
          rt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          nt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          at = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
              return (i || K(t))[e] || 0;
            if (t.getCTM && Ut(t)) return t.getBBox()[e] || 0;
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = rt[e],
              n = r.length;
            for (i = i || K(t); --n > -1; )
              (s -= parseFloat(J(t, "padding" + r[n], i, !0)) || 0),
                (s -= parseFloat(J(t, "border" + r[n] + "Width", i, !0)) || 0);
            return s;
          },
          ot = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null != t && "" !== t) || (t = "0 0");
            var i,
              s = t.split(" "),
              r =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : s[0],
              n =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : s[1];
            if (s.length > 3 && !e) {
              for (
                s = t
                  .split(", ")
                  .join(",")
                  .split(","),
                  t = [],
                  i = 0;
                i < s.length;
                i++
              )
                t.push(ot(s[i]));
              return t.join(",");
            }
            return (
              null == n
                ? (n = "center" === r ? "50%" : "0")
                : "center" === n && (n = "50%"),
              ("center" === r ||
                (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) &&
                (r = "50%"),
              (t = r + " " + n + (s.length > 2 ? " " + s[2] : "")),
              e &&
                ((e.oxp = -1 !== r.indexOf("%")),
                (e.oyp = -1 !== n.indexOf("%")),
                (e.oxr = "=" === r.charAt(1)),
                (e.oyr = "=" === n.charAt(1)),
                (e.ox = parseFloat(r.replace(T, ""))),
                (e.oy = parseFloat(n.replace(T, ""))),
                (e.v = t)),
              e || t
            );
          },
          lt = function(t, e) {
            return (
              "function" == typeof t && (t = t(m, d)),
              "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            );
          },
          ht = function(t, e) {
            "function" == typeof t && (t = t(m, d));
            var i = "string" == typeof t && "=" === t.charAt(1);
            return (
              "string" == typeof t &&
                "v" === t.charAt(t.length - 2) &&
                (t =
                  (i ? t.substr(0, 2) : 0) +
                  window[
                    "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                  ] *
                    (parseFloat(i ? t.substr(2) : t) / 100)),
              null == t
                ? e
                : i
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            );
          },
          _t = function(t, e, i, s) {
            var r, n, a, o;
            return (
              "function" == typeof t && (t = t(m, d)),
              null == t
                ? (a = e)
                : "number" == typeof t
                ? (a = t)
                : (360,
                  (r = t.split("_")),
                  (n =
                    ((o = "=" === t.charAt(1))
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(r[0].substr(2))
                      : parseFloat(r[0])) *
                      (-1 === t.indexOf("rad") ? 1 : I) -
                    (o ? 0 : e)),
                  r.length &&
                    (s && (s[i] = e + n),
                    -1 !== t.indexOf("short") &&
                      (n %= 360) !== n % 180 &&
                      (n = n < 0 ? n + 360 : n - 360),
                    -1 !== t.indexOf("_cw") && n < 0
                      ? (n =
                          ((n + 3599999999640) % 360) - 360 * ((n / 360) | 0))
                      : -1 !== t.indexOf("ccw") &&
                        n > 0 &&
                        (n =
                          ((n - 3599999999640) % 360) - 360 * ((n / 360) | 0))),
                  (a = e + n)),
              a < 1e-6 && a > -1e-6 && (a = 0),
              a
            );
          },
          ut = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          ft = function(t, e, i) {
            return (
              (255 *
                (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                  ? e + (i - e) * t * 6
                  : t < 0.5
                  ? i
                  : 3 * t < 2
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
              0
            );
          },
          ct = (n.parseColor = function(t, e) {
            var i, s, r, n, a, o, l, h, _, u, f;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ut[t])
                )
                  i = ut[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    ((s = t.charAt(1)),
                    (r = t.charAt(2)),
                    (n = t.charAt(3)),
                    (t = "#" + s + s + r + r + n + n)),
                    (i = [
                      (t = parseInt(t.substr(1), 16)) >> 16,
                      (t >> 8) & 255,
                      255 & t
                    ]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = f = t.match(g)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(v);
                  } else
                    (a = (Number(i[0]) % 360) / 360),
                      (o = Number(i[1]) / 100),
                      (s =
                        2 * (l = Number(i[2]) / 100) -
                        (r = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
                      i.length > 3 && (i[3] = Number(i[3])),
                      (i[0] = ft(a + 1 / 3, s, r)),
                      (i[1] = ft(a, s, r)),
                      (i[2] = ft(a - 1 / 3, s, r));
                else i = t.match(g) || ut.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = ut.black;
            return (
              e &&
                !f &&
                ((s = i[0] / 255),
                (r = i[1] / 255),
                (n = i[2] / 255),
                (l = ((h = Math.max(s, r, n)) + (_ = Math.min(s, r, n))) / 2),
                h === _
                  ? (a = o = 0)
                  : ((u = h - _),
                    (o = l > 0.5 ? u / (2 - h - _) : u / (h + _)),
                    (a =
                      h === s
                        ? (r - n) / u + (r < n ? 6 : 0)
                        : h === r
                        ? (n - s) / u + 2
                        : (s - r) / u + 4),
                    (a *= 60)),
                (i[0] = (a + 0.5) | 0),
                (i[1] = (100 * o + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          pt = function(t, e) {
            var i,
              s,
              r,
              n = t.match(dt) || [],
              a = 0,
              o = "";
            if (!n.length) return t;
            for (i = 0; i < n.length; i++)
              (s = n[i]),
                (a += (r = t.substr(a, t.indexOf(s, a) - a)).length + s.length),
                3 === (s = ct(s, e)).length && s.push(1),
                (o +=
                  r +
                  (e
                    ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3]
                    : "rgba(" + s.join(",")) +
                  ")");
            return o + t.substr(a);
          },
          dt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (l in ut) dt += "|" + l + "\\b";
        (dt = new RegExp(dt + ")", "gi")),
          (n.colorStringFilter = function(t) {
            var e,
              i = t[0] + " " + t[1];
            dt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = pt(t[0], e)),
              (t[1] = pt(t[1], e))),
              (dt.lastIndex = 0);
          }),
          s.f.defaultStringFilter ||
            (s.f.defaultStringFilter = n.colorStringFilter);
        var mt = function(t, e, i, s) {
            if (null == t)
              return function(t) {
                return t;
              };
            var r,
              n = e ? (t.match(dt) || [""])[0] : "",
              a =
                t
                  .split(n)
                  .join("")
                  .match(y) || [],
              o = t.substr(0, t.indexOf(a[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              h = -1 !== t.indexOf(" ") ? " " : ",",
              _ = a.length,
              u = _ > 0 ? a[0].replace(g, "") : "";
            return _
              ? (r = e
                  ? function(t) {
                      var e, f, c, p;
                      if ("number" == typeof t) t += u;
                      else if (s && F.test(t)) {
                        for (
                          p = t.replace(F, "|").split("|"), c = 0;
                          c < p.length;
                          c++
                        )
                          p[c] = r(p[c]);
                        return p.join(",");
                      }
                      if (
                        ((e = (t.match(dt) || [n])[0]),
                        (c = (f =
                          t
                            .split(e)
                            .join("")
                            .match(y) || []).length),
                        _ > c--)
                      )
                        for (; ++c < _; )
                          f[c] = i ? f[((c - 1) / 2) | 0] : a[c];
                      return (
                        o +
                        f.join(h) +
                        h +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function(t) {
                      var e, n, f;
                      if ("number" == typeof t) t += u;
                      else if (s && F.test(t)) {
                        for (
                          n = t.replace(F, "|").split("|"), f = 0;
                          f < n.length;
                          f++
                        )
                          n[f] = r(n[f]);
                        return n.join(",");
                      }
                      if (((f = (e = t.match(y) || []).length), _ > f--))
                        for (; ++f < _; )
                          e[f] = i ? e[((f - 1) / 2) | 0] : a[f];
                      return o + e.join(h) + l;
                    })
              : function(t) {
                  return t;
                };
          },
          gt = function(t) {
            return (
              (t = t.split(",")),
              function(e, i, s, r, n, a, o) {
                var l,
                  h = (i + "").split(" ");
                for (o = {}, l = 0; l < 4; l++)
                  o[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                return r.parse(e, o, n, a);
              }
            );
          },
          vt = ((U._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (
              var e, i, s, r, n, a = this.data, o = a.proxy, l = a.firstMPT;
              l;

            )
              (e = o[l.v]),
                l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                (l.t[l.p] = e),
                (l = l._next);
            if (
              (a.autoRotate &&
                (a.autoRotate.rotation = a.mod
                  ? a.mod.call(this._tween, o.rotation, this.t, this._tween)
                  : o.rotation),
              1 === t || 0 === t)
            )
              for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l; ) {
                if ((i = l.t).type) {
                  if (1 === i.type) {
                    for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++)
                      r += i["xn" + s] + i["xs" + (s + 1)];
                    i[n] = r;
                  }
                } else i[n] = i.s + i.xs0;
                l = l._next;
              }
          }),
          function(t, e, i, s, r) {
            (this.t = t),
              (this.p = e),
              (this.v = i),
              (this.r = r),
              s && ((s._prev = this), (this._next = s));
          }),
          yt = ((U._parseToProxy = function(t, e, i, s, r, n) {
            var a,
              o,
              l,
              h,
              _,
              u = s,
              f = {},
              c = {},
              p = i._transform,
              d = N;
            for (
              i._transform = null,
                N = e,
                s = _ = i.parse(t, e, s, r),
                N = d,
                n &&
                  ((i._transform = p),
                  u && ((u._prev = null), u._prev && (u._prev._next = null)));
              s && s !== u;

            ) {
              if (
                s.type <= 1 &&
                ((c[(o = s.p)] = s.s + s.c),
                (f[o] = s.s),
                n || ((h = new vt(s, "s", o, h, s.r)), (s.c = 0)),
                1 === s.type)
              )
                for (a = s.l; --a > 0; )
                  (l = "xn" + a),
                    (c[(o = s.p + "_" + l)] = s.data[l]),
                    (f[o] = s[l]),
                    n || (h = new vt(s, l, o, h, s.rxp[l]));
              s = s._next;
            }
            return { proxy: f, end: c, firstMPT: h, pt: _ };
          }),
          (U.CSSPropTween = function(e, i, s, n, a, o, l, h, _, u, f) {
            (this.t = e),
              (this.p = i),
              (this.s = s),
              (this.c = n),
              (this.n = l || i),
              e instanceof yt || r.push(this.n),
              (this.r = h ? ("function" == typeof h ? h : Math.round) : h),
              (this.type = o || 0),
              _ && ((this.pr = _), (t = !0)),
              (this.b = void 0 === u ? s : u),
              (this.e = void 0 === f ? s + n : f),
              a && ((this._next = a), (a._prev = this));
          })),
          Tt = function(t, e, i, s, r, n) {
            var a = new yt(t, e, i, s - i, r, -1, n);
            return (a.b = i), (a.e = a.xs0 = s), a;
          },
          xt = (n.parseComplex = function(t, e, i, s, r, a, o, l, _, u) {
            (i = i || a || ""),
              "function" == typeof s && (s = s(m, d)),
              (o = new yt(t, e, 0, 0, o, u ? 2 : 1, null, !1, l, i, s)),
              (s += ""),
              r &&
                dt.test(s + i) &&
                ((s = [i, s]), n.colorStringFilter(s), (i = s[0]), (s = s[1]));
            var f,
              c,
              p,
              y,
              T,
              x,
              b,
              w,
              P,
              O,
              S,
              k,
              R,
              C = i
                .split(", ")
                .join(",")
                .split(" "),
              A = s
                .split(", ")
                .join(",")
                .split(" "),
              M = C.length,
              D = !1 !== h;
            for (
              (-1 === s.indexOf(",") && -1 === i.indexOf(",")) ||
                (-1 !== (s + i).indexOf("rgb") || -1 !== (s + i).indexOf("hsl")
                  ? ((C = C.join(" ")
                      .replace(F, ", ")
                      .split(" ")),
                    (A = A.join(" ")
                      .replace(F, ", ")
                      .split(" ")))
                  : ((C = C.join(" ")
                      .split(",")
                      .join(", ")
                      .split(" ")),
                    (A = A.join(" ")
                      .split(",")
                      .join(", ")
                      .split(" "))),
                (M = C.length)),
                M !== A.length && (M = (C = (a || "").split(" ")).length),
                o.plugin = _,
                o.setRatio = u,
                dt.lastIndex = 0,
                f = 0;
              f < M;
              f++
            )
              if (((y = C[f]), (T = A[f] + ""), (w = parseFloat(y)) || 0 === w))
                o.appendXtra(
                  "",
                  w,
                  lt(T, w),
                  T.replace(v, ""),
                  !(!D || -1 === T.indexOf("px")) && Math.round,
                  !0
                );
              else if (r && dt.test(y))
                (k = ")" + ((k = T.indexOf(")") + 1) ? T.substr(k) : "")),
                  (R = -1 !== T.indexOf("hsl") && q),
                  (O = T),
                  (y = ct(y, R)),
                  (T = ct(T, R)),
                  (P = y.length + T.length > 6) && !q && 0 === T[3]
                    ? ((o["xs" + o.l] += o.l ? " transparent" : "transparent"),
                      (o.e = o.e.split(A[f]).join("transparent")))
                    : (q || (P = !1),
                      R
                        ? o
                            .appendXtra(
                              O.substr(0, O.indexOf("hsl")) +
                                (P ? "hsla(" : "hsl("),
                              y[0],
                              lt(T[0], y[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", y[1], lt(T[1], y[1]), "%,", !1)
                            .appendXtra(
                              "",
                              y[2],
                              lt(T[2], y[2]),
                              P ? "%," : "%" + k,
                              !1
                            )
                        : o
                            .appendXtra(
                              O.substr(0, O.indexOf("rgb")) +
                                (P ? "rgba(" : "rgb("),
                              y[0],
                              T[0] - y[0],
                              ",",
                              Math.round,
                              !0
                            )
                            .appendXtra("", y[1], T[1] - y[1], ",", Math.round)
                            .appendXtra(
                              "",
                              y[2],
                              T[2] - y[2],
                              P ? "," : k,
                              Math.round
                            ),
                      P &&
                        ((y = y.length < 4 ? 1 : y[3]),
                        o.appendXtra(
                          "",
                          y,
                          (T.length < 4 ? 1 : T[3]) - y,
                          k,
                          !1
                        ))),
                  (dt.lastIndex = 0);
              else if ((x = y.match(g))) {
                if (!(b = T.match(v)) || b.length !== x.length) return o;
                for (p = 0, c = 0; c < x.length; c++)
                  (S = x[c]),
                    (O = y.indexOf(S, p)),
                    o.appendXtra(
                      y.substr(p, O - p),
                      Number(S),
                      lt(b[c], S),
                      "",
                      !(!D || "px" !== y.substr(O + S.length, 2)) && Math.round,
                      0 === c
                    ),
                    (p = O + S.length);
                o["xs" + o.l] += y.substr(p);
              } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
            if (-1 !== s.indexOf("=") && o.data) {
              for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++)
                k += o["xs" + f] + o.data["xn" + f];
              o.e = k + o["xs" + f];
            }
            return o.l || ((o.type = -1), (o.xs0 = o.e)), o.xfirst || o;
          }),
          bt = 9;
        for ((l = yt.prototype).l = l.pr = 0; --bt > 0; )
          (l["xn" + bt] = 0), (l["xs" + bt] = "");
        (l.xs0 = ""),
          (l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null),
          (l.appendXtra = function(t, e, i, s, r, n) {
            var a = this,
              o = a.l;
            return (
              (a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || ""),
              i || 0 === o || a.plugin
                ? (a.l++,
                  (a.type = a.setRatio ? 2 : 1),
                  (a["xs" + a.l] = s || ""),
                  o > 0
                    ? ((a.data["xn" + o] = e + i),
                      (a.rxp["xn" + o] = r),
                      (a["xn" + o] = e),
                      a.plugin ||
                        ((a.xfirst = new yt(
                          a,
                          "xn" + o,
                          e,
                          i,
                          a.xfirst || a,
                          0,
                          a.n,
                          r,
                          a.pr
                        )),
                        (a.xfirst.xs0 = 0)),
                      a)
                    : ((a.data = { s: e + i }),
                      (a.rxp = {}),
                      (a.s = e),
                      (a.c = i),
                      (a.r = r),
                      a))
                : ((a["xs" + o] += e + (s || "")), a)
            );
          });
        var wt = function(t, e) {
            (e = e || {}),
              (this.p = (e.prefix && $(t)) || t),
              (o[t] = o[this.p] = this),
              (this.format =
                e.formatter ||
                mt(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.allowFunc = e.allowFunc),
              (this.pr = e.priority || 0);
          },
          Pt = (U._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var s,
              r = t.split(","),
              n = e.defaultValue;
            for (i = i || [n], s = 0; s < r.length; s++)
              (e.prefix = 0 === s && e.prefix),
                (e.defaultValue = i[s] || n),
                new wt(r[s], e);
          }),
          Ot = (U._registerPluginProp = function(t) {
            if (!o[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              Pt(t, {
                parser: function(t, i, s, r, n, l, h) {
                  var _ = a.com.greensock.plugins[e];
                  return _
                    ? (_._cssRegister(), o[s].parse(t, i, s, r, n, l, h))
                    : (G("Error: " + e + " js file not loaded."), n);
                }
              });
            }
          });
        ((l = wt.prototype).parseComplex = function(t, e, i, s, r, n) {
          var a,
            o,
            l,
            h,
            _,
            u,
            f = this.keyword;
          if (
            (this.multi &&
              (F.test(i) || F.test(e)
                ? ((o = e.replace(F, "|").split("|")),
                  (l = i.replace(F, "|").split("|")))
                : f && ((o = [e]), (l = [i]))),
            l)
          ) {
            for (
              h = l.length > o.length ? l.length : o.length, a = 0;
              a < h;
              a++
            )
              (e = o[a] = o[a] || this.dflt),
                (i = l[a] = l[a] || this.dflt),
                f &&
                  (_ = e.indexOf(f)) !== (u = i.indexOf(f)) &&
                  (-1 === u
                    ? (o[a] = o[a].split(f).join(""))
                    : -1 === _ && (o[a] += " " + f));
            (e = o.join(", ")), (i = l.join(", "));
          }
          return xt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
        }),
          (l.parse = function(t, e, s, r, n, a, o) {
            return this.parseComplex(
              t.style,
              this.format(J(t, this.p, i, !1, this.dflt)),
              this.format(e),
              n,
              a
            );
          }),
          (n.registerSpecialProp = function(t, e, i) {
            Pt(t, {
              parser: function(t, s, r, n, a, o, l) {
                var h = new yt(t, r, 0, 0, a, 2, r, !1, i);
                return (h.plugin = o), (h.setRatio = e(t, s, n._tween, r)), h;
              },
              priority: i
            });
          }),
          (n.useSVGTransformAttr = !0);
        var St,
          kt,
          Rt,
          Ct,
          At,
          Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
            ","
          ),
          Dt = $("transform"),
          Ft = Z + "transform",
          zt = $("transformOrigin"),
          Et = null !== $("perspective"),
          It = (U.Transform = function() {
            (this.perspective = parseFloat(n.defaultTransformPerspective) || 0),
              (this.force3D =
                !(!1 === n.defaultForce3D || !Et) &&
                (n.defaultForce3D || "auto"));
          }),
          Nt = s.e.SVGElement,
          Xt = function(t, e, i) {
            var s,
              r = L.createElementNS("http://www.w3.org/2000/svg", t),
              n = /([a-z])([A-Z])/g;
            for (s in i)
              r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r), r;
          },
          Lt = L.documentElement || {},
          Bt = ((At = p || (/Android/i.test(V) && !s.e.chrome)),
          L.createElementNS &&
            !At &&
            ((kt = Xt("svg", Lt)),
            (Ct = (Rt = Xt("rect", kt, {
              width: 100,
              height: 50,
              x: 100
            })).getBoundingClientRect().width),
            (Rt.style[zt] = "50% 50%"),
            (Rt.style[Dt] = "scaleX(0.5)"),
            (At = Ct === Rt.getBoundingClientRect().width && !(f && Et)),
            Lt.removeChild(kt)),
          At),
          jt = function(t, e, i, s, r, a) {
            var o,
              l,
              h,
              _,
              u,
              f,
              c,
              p,
              d,
              m,
              g,
              v,
              y,
              T,
              x = t._gsTransform,
              b = qt(t, !0);
            x && ((y = x.xOrigin), (T = x.yOrigin)),
              (!s || (o = s.split(" ")).length < 2) &&
                (0 === (c = t.getBBox()).x &&
                  0 === c.y &&
                  c.width + c.height === 0 &&
                  (c = {
                    x:
                      parseFloat(
                        t.hasAttribute("x")
                          ? t.getAttribute("x")
                          : t.hasAttribute("cx")
                          ? t.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        t.hasAttribute("y")
                          ? t.getAttribute("y")
                          : t.hasAttribute("cy")
                          ? t.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0
                  }),
                (o = [
                  (-1 !== (e = ot(e).split(" "))[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * c.width
                    : parseFloat(e[0])) + c.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * c.height
                    : parseFloat(e[1])) + c.y
                ])),
              (i.xOrigin = _ = parseFloat(o[0])),
              (i.yOrigin = u = parseFloat(o[1])),
              s &&
                b !== Vt &&
                ((f = b[0]),
                (c = b[1]),
                (p = b[2]),
                (d = b[3]),
                (m = b[4]),
                (g = b[5]),
                (v = f * d - c * p) &&
                  ((l = _ * (d / v) + u * (-p / v) + (p * g - d * m) / v),
                  (h = _ * (-c / v) + u * (f / v) - (f * g - c * m) / v),
                  (_ = i.xOrigin = o[0] = l),
                  (u = i.yOrigin = o[1] = h))),
              x &&
                (a &&
                  ((i.xOffset = x.xOffset), (i.yOffset = x.yOffset), (x = i)),
                r || (!1 !== r && !1 !== n.defaultSmoothOrigin)
                  ? ((l = _ - y),
                    (h = u - T),
                    (x.xOffset += l * b[0] + h * b[2] - l),
                    (x.yOffset += l * b[1] + h * b[3] - h))
                  : (x.xOffset = x.yOffset = 0)),
              a || t.setAttribute("data-svg-origin", o.join(" "));
          },
          Yt = function(t) {
            var e,
              i = B(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              s = this.parentNode,
              r = this.nextSibling,
              n = this.style.cssText;
            if (
              (Lt.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              t)
            )
              try {
                (e = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Yt);
              } catch (t) {}
            else this._originalGetBBox && (e = this._originalGetBBox());
            return (
              r ? s.insertBefore(this, r) : s.appendChild(this),
              Lt.removeChild(i),
              (this.style.cssText = n),
              e
            );
          },
          Ut = function(t) {
            return !(
              !Nt ||
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !(function(t) {
                try {
                  return t.getBBox();
                } catch (e) {
                  return Yt.call(t, !0);
                }
              })(t)
            );
          },
          Vt = [1, 0, 0, 1, 0, 0],
          qt = function(t, e) {
            var i,
              s,
              r,
              n,
              a,
              o,
              l,
              h = t._gsTransform || new It(),
              _ = t.style;
            if (
              (Dt
                ? (s = J(t, Ft, null, !0))
                : t.currentStyle &&
                  (s =
                    (s = t.currentStyle.filter.match(M)) && 4 === s.length
                      ? [
                          s[0].substr(4),
                          Number(s[2].substr(4)),
                          Number(s[1].substr(4)),
                          s[3].substr(4),
                          h.x || 0,
                          h.y || 0
                        ].join(",")
                      : ""),
              (i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s),
              Dt &&
                i &&
                !t.offsetParent &&
                ((n = _.display),
                (_.display = "block"),
                ((l = t.parentNode) && t.offsetParent) ||
                  ((a = 1), (o = t.nextSibling), Lt.appendChild(t)),
                (i =
                  !(s = J(t, Ft, null, !0)) ||
                  "none" === s ||
                  "matrix(1, 0, 0, 1, 0, 0)" === s),
                n ? (_.display = n) : $t(_, "display"),
                a &&
                  (o
                    ? l.insertBefore(t, o)
                    : l
                    ? l.appendChild(t)
                    : Lt.removeChild(t))),
              (h.svg || (t.getCTM && Ut(t))) &&
                (i &&
                  -1 !== (_[Dt] + "").indexOf("matrix") &&
                  ((s = _[Dt]), (i = 0)),
                (r = t.getAttribute("transform")),
                i &&
                  r &&
                  ((s =
                    "matrix(" +
                    (r = t.transform.baseVal.consolidate().matrix).a +
                    "," +
                    r.b +
                    "," +
                    r.c +
                    "," +
                    r.d +
                    "," +
                    r.e +
                    "," +
                    r.f +
                    ")"),
                  (i = 0))),
              i)
            )
              return Vt;
            for (r = (s || "").match(g) || [], bt = r.length; --bt > -1; )
              (n = Number(r[bt])),
                (r[bt] = (a = n - (n |= 0))
                  ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + n
                  : n);
            return e && r.length > 6
              ? [r[0], r[1], r[4], r[5], r[12], r[13]]
              : r;
          },
          Wt = (U.getTransform = function(t, e, i, r) {
            if (t._gsTransform && i && !r) return t._gsTransform;
            var a,
              o,
              l,
              h,
              _,
              u,
              f = (i && t._gsTransform) || new It(),
              c = f.scaleX < 0,
              p =
                (Et &&
                  (parseFloat(J(t, zt, e, !1, "0 0 0").split(" ")[2]) ||
                    f.zOrigin)) ||
                0,
              d = parseFloat(n.defaultTransformPerspective) || 0;
            if (
              ((f.svg = !(!t.getCTM || !Ut(t))),
              f.svg &&
                (jt(
                  t,
                  J(t, zt, e, !1, "50% 50%") + "",
                  f,
                  t.getAttribute("data-svg-origin")
                ),
                (St = n.useSVGTransformAttr || Bt)),
              (a = qt(t)) !== Vt)
            ) {
              if (16 === a.length) {
                var m,
                  g,
                  v,
                  y,
                  T,
                  x = a[0],
                  b = a[1],
                  w = a[2],
                  P = a[3],
                  O = a[4],
                  S = a[5],
                  k = a[6],
                  R = a[7],
                  C = a[8],
                  A = a[9],
                  M = a[10],
                  D = a[12],
                  F = a[13],
                  z = a[14],
                  E = a[11],
                  N = Math.atan2(k, M);
                f.zOrigin &&
                  ((D = C * (z = -f.zOrigin) - a[12]),
                  (F = A * z - a[13]),
                  (z = M * z + f.zOrigin - a[14])),
                  (f.rotationX = N * I),
                  N &&
                    ((m = O * (y = Math.cos(-N)) + C * (T = Math.sin(-N))),
                    (g = S * y + A * T),
                    (v = k * y + M * T),
                    (C = O * -T + C * y),
                    (A = S * -T + A * y),
                    (M = k * -T + M * y),
                    (E = R * -T + E * y),
                    (O = m),
                    (S = g),
                    (k = v)),
                  (N = Math.atan2(-w, M)),
                  (f.rotationY = N * I),
                  N &&
                    ((g = b * (y = Math.cos(-N)) - A * (T = Math.sin(-N))),
                    (v = w * y - M * T),
                    (A = b * T + A * y),
                    (M = w * T + M * y),
                    (E = P * T + E * y),
                    (x = m = x * y - C * T),
                    (b = g),
                    (w = v)),
                  (N = Math.atan2(b, x)),
                  (f.rotation = N * I),
                  N &&
                    ((m = x * (y = Math.cos(N)) + b * (T = Math.sin(N))),
                    (g = O * y + S * T),
                    (v = C * y + A * T),
                    (b = b * y - x * T),
                    (S = S * y - O * T),
                    (A = A * y - C * T),
                    (x = m),
                    (O = g),
                    (C = v)),
                  f.rotationX &&
                    Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 &&
                    ((f.rotationX = f.rotation = 0),
                    (f.rotationY = 180 - f.rotationY)),
                  (N = Math.atan2(O, S)),
                  (f.scaleX =
                    ((1e5 * Math.sqrt(x * x + b * b + w * w) + 0.5) | 0) / 1e5),
                  (f.scaleY =
                    ((1e5 * Math.sqrt(S * S + k * k) + 0.5) | 0) / 1e5),
                  (f.scaleZ =
                    ((1e5 * Math.sqrt(C * C + A * A + M * M) + 0.5) | 0) / 1e5),
                  (x /= f.scaleX),
                  (O /= f.scaleY),
                  (b /= f.scaleX),
                  (S /= f.scaleY),
                  Math.abs(N) > 2e-5
                    ? ((f.skewX = N * I),
                      (O = 0),
                      "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(N)))
                    : (f.skewX = 0),
                  (f.perspective = E ? 1 / (E < 0 ? -E : E) : 0),
                  (f.x = D),
                  (f.y = F),
                  (f.z = z),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * x - f.yOrigin * O)),
                    (f.y -= f.yOrigin - (f.yOrigin * b - f.xOrigin * S)));
              } else if (
                !Et ||
                r ||
                !a.length ||
                f.x !== a[4] ||
                f.y !== a[5] ||
                (!f.rotationX && !f.rotationY)
              ) {
                var X = a.length >= 6,
                  L = X ? a[0] : 1,
                  B = a[1] || 0,
                  j = a[2] || 0,
                  Y = X ? a[3] : 1;
                (f.x = a[4] || 0),
                  (f.y = a[5] || 0),
                  (l = Math.sqrt(L * L + B * B)),
                  (h = Math.sqrt(Y * Y + j * j)),
                  (_ = L || B ? Math.atan2(B, L) * I : f.rotation || 0),
                  (u = j || Y ? Math.atan2(j, Y) * I + _ : f.skewX || 0),
                  (f.scaleX = l),
                  (f.scaleY = h),
                  (f.rotation = _),
                  (f.skewX = u),
                  Et &&
                    ((f.rotationX = f.rotationY = f.z = 0),
                    (f.perspective = d),
                    (f.scaleZ = 1)),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * L + f.yOrigin * j)),
                    (f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * Y)));
              }
              for (o in (Math.abs(f.skewX) > 90 &&
                Math.abs(f.skewX) < 270 &&
                (c
                  ? ((f.scaleX *= -1),
                    (f.skewX += f.rotation <= 0 ? 180 : -180),
                    (f.rotation += f.rotation <= 0 ? 180 : -180))
                  : ((f.scaleY *= -1), (f.skewX += f.skewX <= 0 ? 180 : -180))),
              (f.zOrigin = p),
              f))
                f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0);
            }
            return (
              i &&
                ((t._gsTransform = f),
                f.svg &&
                  (St && t.style[Dt]
                    ? s.f.delayedCall(0.001, function() {
                        $t(t.style, Dt);
                      })
                    : !St &&
                      t.getAttribute("transform") &&
                      s.f.delayedCall(0.001, function() {
                        t.removeAttribute("transform");
                      }))),
              f
            );
          }),
          Gt = function(t) {
            var e,
              i,
              s = this.data,
              r = -s.rotation * E,
              n = r + s.skewX * E,
              a = ((Math.cos(r) * s.scaleX * 1e5) | 0) / 1e5,
              o = ((Math.sin(r) * s.scaleX * 1e5) | 0) / 1e5,
              l = ((Math.sin(n) * -s.scaleY * 1e5) | 0) / 1e5,
              h = ((Math.cos(n) * s.scaleY * 1e5) | 0) / 1e5,
              _ = this.t.style,
              u = this.t.currentStyle;
            if (u) {
              (i = o), (o = -l), (l = -i), (e = u.filter), (_.filter = "");
              var f,
                c,
                d = this.t.offsetWidth,
                m = this.t.offsetHeight,
                g = "absolute" !== u.position,
                v =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  a +
                  ", M12=" +
                  o +
                  ", M21=" +
                  l +
                  ", M22=" +
                  h,
                y = s.x + (d * s.xPercent) / 100,
                T = s.y + (m * s.yPercent) / 100;
              if (
                (null != s.ox &&
                  ((y +=
                    (f = (s.oxp ? d * s.ox * 0.01 : s.ox) - d / 2) -
                    (f * a +
                      (c = (s.oyp ? m * s.oy * 0.01 : s.oy) - m / 2) * o)),
                  (T += c - (f * l + c * h))),
                (v += g
                  ? ", Dx=" +
                    ((f = d / 2) - (f * a + (c = m / 2) * o) + y) +
                    ", Dy=" +
                    (c - (f * l + c * h) + T) +
                    ")"
                  : ", sizingMethod='auto expand')"),
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (_.filter = e.replace(D, v))
                  : (_.filter = v + " " + e),
                (0 !== t && 1 !== t) ||
                  (1 === a &&
                    0 === o &&
                    0 === l &&
                    1 === h &&
                    ((g && -1 === v.indexOf("Dx=0, Dy=0")) ||
                      (b.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                      (-1 === e.indexOf(e.indexOf("Alpha")) &&
                        _.removeAttribute("filter")))),
                !g)
              ) {
                var w,
                  P,
                  O,
                  S = p < 8 ? 1 : -1;
                for (
                  f = s.ieOffsetX || 0,
                    c = s.ieOffsetY || 0,
                    s.ieOffsetX = Math.round(
                      (d - ((a < 0 ? -a : a) * d + (o < 0 ? -o : o) * m)) / 2 +
                        y
                    ),
                    s.ieOffsetY = Math.round(
                      (m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * d)) / 2 +
                        T
                    ),
                    bt = 0;
                  bt < 4;
                  bt++
                )
                  (O =
                    (i =
                      -1 !== (w = u[(P = nt[bt])]).indexOf("px")
                        ? parseFloat(w)
                        : tt(this.t, P, parseFloat(w), w.replace(x, "")) ||
                          0) !== s[P]
                      ? bt < 2
                        ? -s.ieOffsetX
                        : -s.ieOffsetY
                      : bt < 2
                      ? f - s.ieOffsetX
                      : c - s.ieOffsetY),
                    (_[P] =
                      (s[P] = Math.round(
                        i - O * (0 === bt || 2 === bt ? 1 : S)
                      )) + "px");
              }
            }
          },
          Zt = (U.set3DTransformRatio = U.setTransformRatio = function(t) {
            var e,
              i,
              s,
              r,
              n,
              a,
              o,
              l,
              h,
              _,
              u,
              c,
              p,
              d,
              m,
              g,
              v,
              y,
              T,
              x,
              b = this.data,
              w = this.t.style,
              P = b.rotation,
              O = b.rotationX,
              S = b.rotationY,
              k = b.scaleX,
              R = b.scaleY,
              C = b.scaleZ,
              A = b.x,
              M = b.y,
              D = b.z,
              F = b.svg,
              z = b.perspective,
              I = b.force3D,
              N = b.skewY,
              X = b.skewX;
            if (
              (N && ((X += N), (P += N)),
              !(
                (((1 !== t && 0 !== t) ||
                  "auto" !== I ||
                  (this.tween._totalTime !== this.tween._totalDuration &&
                    this.tween._totalTime)) &&
                  I) ||
                D ||
                z ||
                S ||
                O ||
                1 !== C
              ) ||
                (St && F) ||
                !Et)
            )
              P || X || F
                ? ((P *= E),
                  (x = X * E),
                  1e5,
                  (i = Math.cos(P) * k),
                  (n = Math.sin(P) * k),
                  (s = Math.sin(P - x) * -R),
                  (a = Math.cos(P - x) * R),
                  x &&
                    "simple" === b.skewType &&
                    ((e = Math.tan(x - N * E)),
                    (s *= e = Math.sqrt(1 + e * e)),
                    (a *= e),
                    N &&
                      ((e = Math.tan(N * E)),
                      (i *= e = Math.sqrt(1 + e * e)),
                      (n *= e))),
                  F &&
                    ((A +=
                      b.xOrigin - (b.xOrigin * i + b.yOrigin * s) + b.xOffset),
                    (M +=
                      b.yOrigin - (b.xOrigin * n + b.yOrigin * a) + b.yOffset),
                    St &&
                      (b.xPercent || b.yPercent) &&
                      ((m = this.t.getBBox()),
                      (A += 0.01 * b.xPercent * m.width),
                      (M += 0.01 * b.yPercent * m.height)),
                    A < (m = 1e-6) && A > -m && (A = 0),
                    M < m && M > -m && (M = 0)),
                  (T =
                    ((1e5 * i) | 0) / 1e5 +
                    "," +
                    ((1e5 * n) | 0) / 1e5 +
                    "," +
                    ((1e5 * s) | 0) / 1e5 +
                    "," +
                    ((1e5 * a) | 0) / 1e5 +
                    "," +
                    A +
                    "," +
                    M +
                    ")"),
                  F && St
                    ? this.t.setAttribute("transform", "matrix(" + T)
                    : (w[Dt] =
                        (b.xPercent || b.yPercent
                          ? "translate(" +
                            b.xPercent +
                            "%," +
                            b.yPercent +
                            "%) matrix("
                          : "matrix(") + T))
                : (w[Dt] =
                    (b.xPercent || b.yPercent
                      ? "translate(" +
                        b.xPercent +
                        "%," +
                        b.yPercent +
                        "%) matrix("
                      : "matrix(") +
                    k +
                    ",0,0," +
                    R +
                    "," +
                    A +
                    "," +
                    M +
                    ")");
            else {
              if (
                (f &&
                  (k < (m = 1e-4) && k > -m && (k = C = 2e-5),
                  R < m && R > -m && (R = C = 2e-5),
                  !z || b.z || b.rotationX || b.rotationY || (z = 0)),
                P || X)
              )
                (P *= E),
                  (g = i = Math.cos(P)),
                  (v = n = Math.sin(P)),
                  X &&
                    ((P -= X * E),
                    (g = Math.cos(P)),
                    (v = Math.sin(P)),
                    "simple" === b.skewType &&
                      ((e = Math.tan((X - N) * E)),
                      (g *= e = Math.sqrt(1 + e * e)),
                      (v *= e),
                      b.skewY &&
                        ((e = Math.tan(N * E)),
                        (i *= e = Math.sqrt(1 + e * e)),
                        (n *= e)))),
                  (s = -v),
                  (a = g);
              else {
                if (!(S || O || 1 !== C || z || F))
                  return void (w[Dt] =
                    (b.xPercent || b.yPercent
                      ? "translate(" +
                        b.xPercent +
                        "%," +
                        b.yPercent +
                        "%) translate3d("
                      : "translate3d(") +
                    A +
                    "px," +
                    M +
                    "px," +
                    D +
                    "px)" +
                    (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""));
                (i = a = 1), (s = n = 0);
              }
              (_ = 1),
                (r = o = l = h = u = c = 0),
                (p = z ? -1 / z : 0),
                (d = b.zOrigin),
                (m = 1e-6),
                ",",
                "0",
                (P = S * E) &&
                  ((g = Math.cos(P)),
                  (l = -(v = Math.sin(P))),
                  (u = p * -v),
                  (r = i * v),
                  (o = n * v),
                  (_ = g),
                  (p *= g),
                  (i *= g),
                  (n *= g)),
                (P = O * E) &&
                  ((e = s * (g = Math.cos(P)) + r * (v = Math.sin(P))),
                  (y = a * g + o * v),
                  (h = _ * v),
                  (c = p * v),
                  (r = s * -v + r * g),
                  (o = a * -v + o * g),
                  (_ *= g),
                  (p *= g),
                  (s = e),
                  (a = y)),
                1 !== C && ((r *= C), (o *= C), (_ *= C), (p *= C)),
                1 !== R && ((s *= R), (a *= R), (h *= R), (c *= R)),
                1 !== k && ((i *= k), (n *= k), (l *= k), (u *= k)),
                (d || F) &&
                  (d && ((A += r * -d), (M += o * -d), (D += _ * -d + d)),
                  F &&
                    ((A +=
                      b.xOrigin - (b.xOrigin * i + b.yOrigin * s) + b.xOffset),
                    (M +=
                      b.yOrigin - (b.xOrigin * n + b.yOrigin * a) + b.yOffset)),
                  A < m && A > -m && (A = "0"),
                  M < m && M > -m && (M = "0"),
                  D < m && D > -m && (D = 0)),
                (T =
                  b.xPercent || b.yPercent
                    ? "translate(" +
                      b.xPercent +
                      "%," +
                      b.yPercent +
                      "%) matrix3d("
                    : "matrix3d("),
                (T +=
                  (i < m && i > -m ? "0" : i) +
                  "," +
                  (n < m && n > -m ? "0" : n) +
                  "," +
                  (l < m && l > -m ? "0" : l)),
                (T +=
                  "," +
                  (u < m && u > -m ? "0" : u) +
                  "," +
                  (s < m && s > -m ? "0" : s) +
                  "," +
                  (a < m && a > -m ? "0" : a)),
                O || S || 1 !== C
                  ? ((T +=
                      "," +
                      (h < m && h > -m ? "0" : h) +
                      "," +
                      (c < m && c > -m ? "0" : c) +
                      "," +
                      (r < m && r > -m ? "0" : r)),
                    (T +=
                      "," +
                      (o < m && o > -m ? "0" : o) +
                      "," +
                      (_ < m && _ > -m ? "0" : _) +
                      "," +
                      (p < m && p > -m ? "0" : p) +
                      ","))
                  : (T += ",0,0,0,0,1,0,"),
                (T += A + "," + M + "," + D + "," + (z ? 1 + -D / z : 1) + ")"),
                (w[Dt] = T);
            }
          });
        ((l =
          It.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0),
          (l.scaleX = l.scaleY = l.scaleZ = 1),
          Pt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function(t, e, s, r, a, o, l) {
                if (r._lastParsedTransform === l) return a;
                r._lastParsedTransform = l;
                var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                h && (l.scale = h(m, t));
                var _,
                  u,
                  f,
                  c,
                  p,
                  g,
                  v,
                  y,
                  T,
                  x = t._gsTransform,
                  b = t.style,
                  w = Mt.length,
                  P = l,
                  O = {},
                  S = Wt(t, i, !0, P.parseTransform),
                  k =
                    P.transform &&
                    ("function" == typeof P.transform
                      ? P.transform(m, d)
                      : P.transform);
                if (
                  ((S.skewType = P.skewType || S.skewType || n.defaultSkewType),
                  (r._transform = S),
                  "rotationZ" in P && (P.rotation = P.rotationZ),
                  k && "string" == typeof k && Dt)
                )
                  ((u = j.style)[Dt] = k),
                    (u.display = "block"),
                    (u.position = "absolute"),
                    -1 !== k.indexOf("%") &&
                      ((u.width = J(t, "width")), (u.height = J(t, "height"))),
                    L.body.appendChild(j),
                    (_ = Wt(j, null, !1)),
                    "simple" === S.skewType &&
                      (_.scaleY *= Math.cos(_.skewX * E)),
                    S.svg &&
                      ((g = S.xOrigin),
                      (v = S.yOrigin),
                      (_.x -= S.xOffset),
                      (_.y -= S.yOffset),
                      (P.transformOrigin || P.svgOrigin) &&
                        ((k = {}),
                        jt(
                          t,
                          ot(P.transformOrigin),
                          k,
                          P.svgOrigin,
                          P.smoothOrigin,
                          !0
                        ),
                        (g = k.xOrigin),
                        (v = k.yOrigin),
                        (_.x -= k.xOffset - S.xOffset),
                        (_.y -= k.yOffset - S.yOffset)),
                      (g || v) &&
                        ((y = qt(j, !0)),
                        (_.x -= g - (g * y[0] + v * y[2])),
                        (_.y -= v - (g * y[1] + v * y[3])))),
                    L.body.removeChild(j),
                    _.perspective || (_.perspective = S.perspective),
                    null != P.xPercent &&
                      (_.xPercent = ht(P.xPercent, S.xPercent)),
                    null != P.yPercent &&
                      (_.yPercent = ht(P.yPercent, S.yPercent));
                else if ("object" == typeof P) {
                  if (
                    ((_ = {
                      scaleX: ht(
                        null != P.scaleX ? P.scaleX : P.scale,
                        S.scaleX
                      ),
                      scaleY: ht(
                        null != P.scaleY ? P.scaleY : P.scale,
                        S.scaleY
                      ),
                      scaleZ: ht(P.scaleZ, S.scaleZ),
                      x: ht(P.x, S.x),
                      y: ht(P.y, S.y),
                      z: ht(P.z, S.z),
                      xPercent: ht(P.xPercent, S.xPercent),
                      yPercent: ht(P.yPercent, S.yPercent),
                      perspective: ht(P.transformPerspective, S.perspective)
                    }),
                    null != (p = P.directionalRotation))
                  )
                    if ("object" == typeof p) for (u in p) P[u] = p[u];
                    else P.rotation = p;
                  "string" == typeof P.x &&
                    -1 !== P.x.indexOf("%") &&
                    ((_.x = 0), (_.xPercent = ht(P.x, S.xPercent))),
                    "string" == typeof P.y &&
                      -1 !== P.y.indexOf("%") &&
                      ((_.y = 0), (_.yPercent = ht(P.y, S.yPercent))),
                    (_.rotation = _t(
                      "rotation" in P
                        ? P.rotation
                        : "shortRotation" in P
                        ? P.shortRotation + "_short"
                        : S.rotation,
                      S.rotation,
                      "rotation",
                      O
                    )),
                    Et &&
                      ((_.rotationX = _t(
                        "rotationX" in P
                          ? P.rotationX
                          : "shortRotationX" in P
                          ? P.shortRotationX + "_short"
                          : S.rotationX || 0,
                        S.rotationX,
                        "rotationX",
                        O
                      )),
                      (_.rotationY = _t(
                        "rotationY" in P
                          ? P.rotationY
                          : "shortRotationY" in P
                          ? P.shortRotationY + "_short"
                          : S.rotationY || 0,
                        S.rotationY,
                        "rotationY",
                        O
                      ))),
                    (_.skewX = _t(P.skewX, S.skewX)),
                    (_.skewY = _t(P.skewY, S.skewY));
                }
                for (
                  Et &&
                    null != P.force3D &&
                    ((S.force3D = P.force3D), (c = !0)),
                    (f =
                      S.force3D ||
                      S.z ||
                      S.rotationX ||
                      S.rotationY ||
                      _.z ||
                      _.rotationX ||
                      _.rotationY ||
                      _.perspective) ||
                      null == P.scale ||
                      (_.scaleZ = 1);
                  --w > -1;

                )
                  ((k = _[(T = Mt[w])] - S[T]) > 1e-6 ||
                    k < -1e-6 ||
                    null != P[T] ||
                    null != N[T]) &&
                    ((c = !0),
                    (a = new yt(S, T, S[T], k, a)),
                    T in O && (a.e = O[T]),
                    (a.xs0 = 0),
                    (a.plugin = o),
                    r._overwriteProps.push(a.n));
                return (
                  (k =
                    "function" == typeof P.transformOrigin
                      ? P.transformOrigin(m, d)
                      : P.transformOrigin),
                  S.svg &&
                    (k || P.svgOrigin) &&
                    ((g = S.xOffset),
                    (v = S.yOffset),
                    jt(t, ot(k), _, P.svgOrigin, P.smoothOrigin),
                    (a = Tt(
                      S,
                      "xOrigin",
                      (x ? S : _).xOrigin,
                      _.xOrigin,
                      a,
                      "transformOrigin"
                    )),
                    (a = Tt(
                      S,
                      "yOrigin",
                      (x ? S : _).yOrigin,
                      _.yOrigin,
                      a,
                      "transformOrigin"
                    )),
                    (g === S.xOffset && v === S.yOffset) ||
                      ((a = Tt(
                        S,
                        "xOffset",
                        x ? g : S.xOffset,
                        S.xOffset,
                        a,
                        "transformOrigin"
                      )),
                      (a = Tt(
                        S,
                        "yOffset",
                        x ? v : S.yOffset,
                        S.yOffset,
                        a,
                        "transformOrigin"
                      ))),
                    (k = "0px 0px")),
                  (k || (Et && f && S.zOrigin)) &&
                    (Dt
                      ? ((c = !0),
                        (T = zt),
                        k ||
                          (k =
                            (k = (J(t, T, i, !1, "50% 50%") + "").split(
                              " "
                            ))[0] +
                            " " +
                            k[1] +
                            " " +
                            S.zOrigin +
                            "px"),
                        (k += ""),
                        ((a = new yt(b, T, 0, 0, a, -1, "transformOrigin")).b =
                          b[T]),
                        (a.plugin = o),
                        Et
                          ? ((u = S.zOrigin),
                            (k = k.split(" ")),
                            (S.zOrigin =
                              (k.length > 2 ? parseFloat(k[2]) : u) || 0),
                            (a.xs0 = a.e =
                              k[0] + " " + (k[1] || "50%") + " 0px"),
                            ((a = new yt(
                              S,
                              "zOrigin",
                              0,
                              0,
                              a,
                              -1,
                              a.n
                            )).b = u),
                            (a.xs0 = a.e = S.zOrigin))
                          : (a.xs0 = a.e = k))
                      : ot(k + "", S)),
                  c &&
                    (r._transformType =
                      (S.svg && St) || (!f && 3 !== this._transformType)
                        ? 2
                        : 3),
                  h && (l.scale = h),
                  a
                );
              },
              allowFunc: !0,
              prefix: !0
            }
          ),
          Pt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
          }),
          Pt("clipPath", {
            defaultValue: "inset(0px)",
            prefix: !0,
            multi: !0,
            formatter: mt("inset(0px 0px 0px 0px)", !1, !0)
          }),
          Pt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, s, r, n, a, o) {
              s = this.format(s);
              var l,
                h,
                _,
                u,
                f,
                c,
                p,
                d,
                m,
                g,
                v,
                y,
                T,
                x,
                b,
                w,
                P = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius"
                ],
                O = t.style;
              for (
                m = parseFloat(t.offsetWidth),
                  g = parseFloat(t.offsetHeight),
                  l = s.split(" "),
                  h = 0;
                h < P.length;
                h++
              )
                this.p.indexOf("border") && (P[h] = $(P[h])),
                  -1 !== (f = u = J(t, P[h], i, !1, "0px")).indexOf(" ") &&
                    ((u = f.split(" ")), (f = u[0]), (u = u[1])),
                  (c = _ = l[h]),
                  (p = parseFloat(f)),
                  (y = f.substr((p + "").length)),
                  (T = "=" === c.charAt(1))
                    ? ((d = parseInt(c.charAt(0) + "1", 10)),
                      (c = c.substr(2)),
                      (d *= parseFloat(c)),
                      (v = c.substr((d + "").length - (d < 0 ? 1 : 0)) || ""))
                    : ((d = parseFloat(c)), (v = c.substr((d + "").length))),
                  "" === v && (v = e[r] || y),
                  v !== y &&
                    ((x = tt(t, "borderLeft", p, y)),
                    (b = tt(t, "borderTop", p, y)),
                    "%" === v
                      ? ((f = (x / m) * 100 + "%"), (u = (b / g) * 100 + "%"))
                      : "em" === v
                      ? ((f = x / (w = tt(t, "borderLeft", 1, "em")) + "em"),
                        (u = b / w + "em"))
                      : ((f = x + "px"), (u = b + "px")),
                    T &&
                      ((c = parseFloat(f) + d + v),
                      (_ = parseFloat(u) + d + v))),
                  (a = xt(O, P[h], f + " " + u, c + " " + _, !1, "0px", a));
              return a;
            },
            prefix: !0,
            formatter: mt("0px 0px 0px 0px", !1, !0)
          }),
          Pt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function(t, e, s, r, n, a) {
                return xt(
                  t.style,
                  s,
                  this.format(J(t, s, i, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  n
                );
              },
              prefix: !0,
              formatter: mt("0px 0px", !1, !0)
            }
          ),
          Pt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, s, r, n, a) {
              var o,
                l,
                h,
                _,
                u,
                f,
                c = "background-position",
                d = i || K(t),
                m = this.format(
                  (d
                    ? p
                      ? d.getPropertyValue(c + "-x") +
                        " " +
                        d.getPropertyValue(c + "-y")
                      : d.getPropertyValue(c)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                g = this.format(e);
              if (
                (-1 !== m.indexOf("%")) != (-1 !== g.indexOf("%")) &&
                g.split(",").length < 2 &&
                (f = J(t, "backgroundImage").replace(R, "")) &&
                "none" !== f
              ) {
                for (
                  o = m.split(" "),
                    l = g.split(" "),
                    Y.setAttribute("src", f),
                    h = 2;
                  --h > -1;

                )
                  (_ = -1 !== (m = o[h]).indexOf("%")) !==
                    (-1 !== l[h].indexOf("%")) &&
                    ((u =
                      0 === h
                        ? t.offsetWidth - Y.width
                        : t.offsetHeight - Y.height),
                    (o[h] = _
                      ? (parseFloat(m) / 100) * u + "px"
                      : (parseFloat(m) / u) * 100 + "%"));
                m = o.join(" ");
              }
              return this.parseComplex(t.style, m, g, n, a);
            },
            formatter: ot
          }),
          Pt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
              return "co" === (t += "").substr(0, 2)
                ? t
                : ot(-1 === t.indexOf(" ") ? t + " " + t : t);
            }
          }),
          Pt("perspective", { defaultValue: "0px", prefix: !0 }),
          Pt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          Pt("transformStyle", { prefix: !0 }),
          Pt("backfaceVisibility", { prefix: !0 }),
          Pt("userSelect", { prefix: !0 }),
          Pt("margin", {
            parser: gt("marginTop,marginRight,marginBottom,marginLeft")
          }),
          Pt("padding", {
            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
          }),
          Pt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, s, r, n, a) {
              var o, l, h;
              return (
                p < 9
                  ? ((l = t.currentStyle),
                    (h = p < 8 ? " " : ","),
                    (o =
                      "rect(" +
                      l.clipTop +
                      h +
                      l.clipRight +
                      h +
                      l.clipBottom +
                      h +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e)
                      .split(",")
                      .join(h)))
                  : ((o = this.format(J(t, this.p, i, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, o, e, n, a)
              );
            }
          }),
          Pt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
          }),
          Pt("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
              return r;
            }
          }),
          Pt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, s, r, n, a) {
              var o = J(t, "borderTopWidth", i, !1, "0px"),
                l = this.format(e).split(" "),
                h = l[0].replace(x, "");
              return (
                "px" !== h &&
                  (o = parseFloat(o) / tt(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(
                  t.style,
                  this.format(
                    o +
                      " " +
                      J(t, "borderTopStyle", i, !1, "solid") +
                      " " +
                      J(t, "borderTopColor", i, !1, "#000")
                  ),
                  l.join(" "),
                  n,
                  a
                )
              );
            },
            color: !0,
            formatter: function(t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(dt) || ["#000"])[0]
              );
            }
          }),
          Pt("borderWidth", {
            parser: gt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            )
          }),
          Pt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r, n) {
              var a = t.style,
                o = "cssFloat" in a ? "cssFloat" : "styleFloat";
              return new yt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e);
            }
          });
        var Ht = function(t) {
          var e,
            i = this.t,
            s = i.filter || J(this.data, "filter") || "",
            r = (this.s + this.c * t) | 0;
          100 === r &&
            (-1 === s.indexOf("atrix(") &&
            -1 === s.indexOf("radient(") &&
            -1 === s.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !J(this.data, "filter")))
              : ((i.filter = s.replace(P, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"),
              -1 === s.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = s + " alpha(opacity=" + r + ")")
                : (i.filter = s.replace(b, "opacity=" + r)));
        };
        Pt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(t, e, s, r, n, a) {
            var o = parseFloat(J(t, "opacity", i, !1, "1")),
              l = t.style,
              h = "autoAlpha" === s;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
              h &&
                1 === o &&
                "hidden" === J(t, "visibility", i) &&
                0 !== e &&
                (o = 0),
              q
                ? (n = new yt(l, "opacity", o, e - o, n))
                : (((n = new yt(
                    l,
                    "opacity",
                    100 * o,
                    100 * (e - o),
                    n
                  )).xn1 = h ? 1 : 0),
                  (l.zoom = 1),
                  (n.type = 2),
                  (n.b = "alpha(opacity=" + n.s + ")"),
                  (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                  (n.data = t),
                  (n.plugin = a),
                  (n.setRatio = Ht)),
              h &&
                (((n = new yt(
                  l,
                  "visibility",
                  0,
                  0,
                  n,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== o ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )).xs0 = "inherit"),
                r._overwriteProps.push(n.n),
                r._overwriteProps.push(s)),
              n
            );
          }
        });
        var $t = function(t, e) {
            e &&
              (t.removeProperty
                ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                    (e = "-" + e),
                  t.removeProperty(e.replace(S, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          Qt = function(t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : $t(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        Pt("className", {
          parser: function(e, s, r, n, a, o, l) {
            var h,
              _,
              u,
              f,
              c,
              p = e.getAttribute("class") || "",
              d = e.style.cssText;
            if (
              (((a = n._classNamePT = new yt(e, r, 0, 0, a, 2)).setRatio = Qt),
              (a.pr = -11),
              (t = !0),
              (a.b = p),
              (_ = it(e, i)),
              (u = e._gsClassPT))
            ) {
              for (f = {}, c = u.data; c; ) (f[c.p] = 1), (c = c._next);
              u.setRatio(1);
            }
            return (
              (e._gsClassPT = a),
              (a.e =
                "=" !== s.charAt(1)
                  ? s
                  : p.replace(
                      new RegExp("(?:\\s|^)" + s.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === s.charAt(0) ? " " + s.substr(2) : "")),
              e.setAttribute("class", a.e),
              (h = st(e, _, it(e), l, f)),
              e.setAttribute("class", p),
              (a.data = h.firstMPT),
              (e.style.cssText = d),
              (a = a.xfirst = n.parse(e, h.difs, a, o))
            );
          }
        });
        var Kt = function(t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              s,
              r,
              n,
              a = this.t.style,
              l = o.transform.parse;
            if ("all" === this.e) (a.cssText = ""), (r = !0);
            else
              for (
                s = (e = this.e
                  .split(" ")
                  .join("")
                  .split(",")).length;
                --s > -1;

              )
                (i = e[s]),
                  o[i] &&
                    (o[i].parse === l
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? zt : o[i].p)),
                  $t(a, i);
            r &&
              ($t(a, Dt),
              (n = this.t._gsTransform) &&
                (n.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          Pt("clearProps", {
            parser: function(e, i, s, r, n) {
              return (
                ((n = new yt(e, s, 0, 0, n, 2)).setRatio = Kt),
                (n.e = i),
                (n.pr = -10),
                (n.data = r._tween),
                (t = !0),
                n
              );
            }
          }),
            l = "bezier,throwProps,physicsProps,physics2D".split(","),
            bt = l.length;
          bt--;

        )
          Ot(l[bt]);
        ((l =
          n.prototype)._firstPT = l._lastParsedTransform = l._transform = null),
          (l._onInitTween = function(s, a, l, f) {
            if (!s.nodeType) return !1;
            (this._target = d = s),
              (this._tween = l),
              (this._vars = a),
              (m = f),
              (h = a.autoRound),
              (t = !1),
              (e = a.suffixMap || n.suffixMap),
              (i = K(s)),
              (r = this._overwriteProps);
            var p,
              g,
              v,
              y,
              T,
              x,
              b,
              P,
              O,
              S = s.style;
            if (
              (_ &&
                "" === S.zIndex &&
                (("auto" !== (p = J(s, "zIndex", i)) && "" !== p) ||
                  this._addLazySet(S, "zIndex", 0)),
              "string" == typeof a &&
                ((y = S.cssText),
                (p = it(s, i)),
                (S.cssText = y + ";" + a),
                (p = st(s, p, it(s)).difs),
                !q && w.test(a) && (p.opacity = parseFloat(RegExp.$1)),
                (a = p),
                (S.cssText = y)),
              a.className
                ? (this._firstPT = g = o.className.parse(
                    s,
                    a.className,
                    "className",
                    this,
                    null,
                    null,
                    a
                  ))
                : (this._firstPT = g = this.parse(s, a, null)),
              this._transformType)
            ) {
              for (
                O = 3 === this._transformType,
                  Dt
                    ? u &&
                      ((_ = !0),
                      "" === S.zIndex &&
                        (("auto" !== (b = J(s, "zIndex", i)) && "" !== b) ||
                          this._addLazySet(S, "zIndex", 0)),
                      c &&
                        this._addLazySet(
                          S,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (O ? "visible" : "hidden")
                        ))
                    : (S.zoom = 1),
                  v = g;
                v && v._next;

              )
                v = v._next;
              (P = new yt(s, "transform", 0, 0, null, 2)),
                this._linkCSSP(P, null, v),
                (P.setRatio = Dt ? Zt : Gt),
                (P.data = this._transform || Wt(s, i, !0)),
                (P.tween = l),
                (P.pr = -1),
                r.pop();
            }
            if (t) {
              for (; g; ) {
                for (x = g._next, v = y; v && v.pr > g.pr; ) v = v._next;
                (g._prev = v ? v._prev : T) ? (g._prev._next = g) : (y = g),
                  (g._next = v) ? (v._prev = g) : (T = g),
                  (g = x);
              }
              this._firstPT = y;
            }
            return !0;
          }),
          (l.parse = function(t, s, r, n) {
            var a,
              l,
              _,
              u,
              f,
              c,
              p,
              g,
              v,
              y,
              T = t.style;
            for (a in s) {
              if (
                ((c = s[a]),
                (l = o[a]),
                "function" != typeof c || (l && l.allowFunc) || (c = c(m, d)),
                l)
              )
                r = l.parse(t, c, a, this, r, n, s);
              else {
                if ("--" === a.substr(0, 2)) {
                  this._tween._propLookup[a] = this._addTween.call(
                    this._tween,
                    t.style,
                    "setProperty",
                    K(t).getPropertyValue(a) + "",
                    c + "",
                    a,
                    !1,
                    a
                  );
                  continue;
                }
                (f = J(t, a, i) + ""),
                  (v = "string" == typeof c),
                  "color" === a ||
                  "fill" === a ||
                  "stroke" === a ||
                  -1 !== a.indexOf("Color") ||
                  (v && O.test(c))
                    ? (v ||
                        (c =
                          ((c = ct(c)).length > 3 ? "rgba(" : "rgb(") +
                          c.join(",") +
                          ")"),
                      (r = xt(T, a, f, c, !0, "transparent", r, 0, n)))
                    : v && z.test(c)
                    ? (r = xt(T, a, f, c, !0, null, r, 0, n))
                    : ((p =
                        (_ = parseFloat(f)) || 0 === _
                          ? f.substr((_ + "").length)
                          : ""),
                      ("" !== f && "auto" !== f) ||
                        ("width" === a || "height" === a
                          ? ((_ = at(t, a, i)), (p = "px"))
                          : "left" === a || "top" === a
                          ? ((_ = et(t, a, i)), (p = "px"))
                          : ((_ = "opacity" !== a ? 0 : 1), (p = ""))),
                      (y = v && "=" === c.charAt(1))
                        ? ((u = parseInt(c.charAt(0) + "1", 10)),
                          (c = c.substr(2)),
                          (u *= parseFloat(c)),
                          (g = c.replace(x, "")))
                        : ((u = parseFloat(c)),
                          (g = v ? c.replace(x, "") : "")),
                      "" === g && (g = a in e ? e[a] : p),
                      (c = u || 0 === u ? (y ? u + _ : u) + g : s[a]),
                      p !== g &&
                        (("" === g && "lineHeight" !== a) ||
                          ((u || 0 === u) &&
                            _ &&
                            ((_ = tt(t, a, _, p)),
                            "%" === g
                              ? ((_ /= tt(t, a, 100, "%") / 100),
                                !0 !== s.strictUnits && (f = _ + "%"))
                              : "em" === g ||
                                "rem" === g ||
                                "vw" === g ||
                                "vh" === g
                              ? (_ /= tt(t, a, 1, g))
                              : "px" !== g &&
                                ((u = tt(t, a, u, g)), (g = "px")),
                            y && (u || 0 === u) && (c = u + _ + g)))),
                      y && (u += _),
                      (!_ && 0 !== _) || (!u && 0 !== u)
                        ? void 0 !== T[a] &&
                          (c || (c + "" != "NaN" && null != c))
                          ? ((r = new yt(
                              T,
                              a,
                              u || _ || 0,
                              0,
                              r,
                              -1,
                              a,
                              !1,
                              0,
                              f,
                              c
                            )).xs0 =
                              "none" !== c ||
                              ("display" !== a && -1 === a.indexOf("Style"))
                                ? c
                                : f)
                          : G("invalid " + a + " tween value: " + s[a])
                        : ((r = new yt(
                            T,
                            a,
                            _,
                            u - _,
                            r,
                            0,
                            a,
                            !1 !== h && ("px" === g || "zIndex" === a),
                            0,
                            f,
                            c
                          )).xs0 = g));
              }
              n && r && !r.plugin && (r.plugin = n);
            }
            return r;
          }),
          (l.setRatio = function(t) {
            var e,
              i,
              s,
              r = this._firstPT;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                -1e-6 === this._tween._rawPrevTime
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = r.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (2 === (s = r.l))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === s)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === s)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++)
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((e = r.r(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (
                          s = r.l, i = r.xs0 + e + r.xs1, s = 1;
                          s < r.l;
                          s++
                        )
                          i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = e + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next;
              }
          }),
          (l._enableTransforms = function(t) {
            (this._transform = this._transform || Wt(this._target, i, !0)),
              (this._transformType =
                (this._transform.svg && St) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Jt = function(t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (l._addLazySet = function(t, e, i) {
          var s = (this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2));
          (s.e = i), (s.setRatio = Jt), (s.data = this);
        }),
          (l._linkCSSP = function(t, e, i, s) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (s = !0)),
                i
                  ? (i._next = t)
                  : s || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (l._mod = function(t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]), (e = e._next);
          }),
          (l._kill = function(t) {
            var e,
              i,
              r,
              n = t;
            if (t.autoAlpha || t.alpha) {
              for (i in ((n = {}), t)) n[i] = t[i];
              (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
            }
            for (
              t.className &&
                (e = this._classNamePT) &&
                ((r = e.xfirst) && r._prev
                  ? this._linkCSSP(r._prev, e._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = e._next),
                e._next && this._linkCSSP(e._next, e._next._next, r._prev),
                (this._classNamePT = null)),
                e = this._firstPT;
              e;

            )
              e.plugin &&
                e.plugin !== i &&
                e.plugin._kill &&
                (e.plugin._kill(t), (i = e.plugin)),
                (e = e._next);
            return s.d.prototype._kill.call(this, n);
          });
        var te = function(t, e, i) {
          var s, r, n, a;
          if (t.slice) for (r = t.length; --r > -1; ) te(t[r], e, i);
          else
            for (r = (s = t.childNodes).length; --r > -1; )
              (a = (n = s[r]).type),
                n.style && (e.push(it(n)), i && i.push(n)),
                (1 !== a && 9 !== a && 11 !== a) ||
                  !n.childNodes.length ||
                  te(n, e, i);
        };
        return (
          (n.cascadeTo = function(t, e, i) {
            var r,
              n,
              a,
              o,
              l = s.f.to(t, e, i),
              h = [l],
              _ = [],
              u = [],
              f = [],
              c = s.f._internals.reservedProps;
            for (
              t = l._targets || l.target,
                te(t, _, f),
                l.render(e, !0, !0),
                te(t, u),
                l.render(0, !0, !0),
                l._enabled(!0),
                r = f.length;
              --r > -1;

            )
              if ((n = st(f[r], _[r], u[r])).firstMPT) {
                for (a in ((n = n.difs), i)) c[a] && (n[a] = i[a]);
                for (a in ((o = {}), n)) o[a] = _[r][a];
                h.push(s.f.fromTo(f[r], e, o, n));
              }
            return h;
          }),
          s.d.activate([n]),
          n
        );
      },
      !0
    );
    var n = s.g.CSSPlugin,
      a = s.e._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(t, e, i, s) {
          var r, n;
          if ("function" != typeof t.setAttribute) return !1;
          for (r in e)
            "function" == typeof (n = e[r]) && (n = n(s, t)),
              this._addTween(
                t,
                "setAttribute",
                t.getAttribute(r) + "",
                n + "",
                r,
                !1,
                r
              ),
              this._overwriteProps.push(r);
          return !0;
        }
      }),
      o = s.e._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function(t, e, i) {
          return (this._tween = i), !0;
        }
      }),
      l = function(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function(i) {
          return ((Math.round(i / t) * t * e) | 0) / e;
        };
      },
      h = function(t, e) {
        for (; t; ) t.f || t.blob || (t.m = e || Math.round), (t = t._next);
      },
      _ = o.prototype;
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ (_._onInitAllProps = function() {
      var t,
        e,
        i,
        s,
        r = this._tween,
        n = r.vars.roundProps,
        a = {},
        o = r._propLookup.roundProps;
      if ("object" != typeof n || n.push)
        for (
          "string" == typeof n && (n = n.split(",")), i = n.length;
          --i > -1;

        )
          a[n[i]] = Math.round;
      else for (s in n) a[s] = l(n[s]);
      for (s in a)
        for (t = r._firstPT; t; )
          (e = t._next),
            t.pg
              ? t.t._mod(a)
              : t.n === s &&
                (2 === t.f && t.t
                  ? h(t.t._firstPT, a[s])
                  : (this._add(t.t, s, t.s, t.c, a[s]),
                    e && (e._prev = t._prev),
                    t._prev
                      ? (t._prev._next = e)
                      : r._firstPT === t && (r._firstPT = e),
                    (t._next = t._prev = null),
                    (r._propLookup[s] = o))),
            (t = e);
      return !1;
    }),
      (_._add = function(t, e, i, s, r) {
        this._addTween(t, e, i, i + s, e, r || Math.round),
          this._overwriteProps.push(e);
      });
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var u = s.e._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function(t, e, i, s) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var r,
          n,
          a,
          o,
          l,
          h,
          _ = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (r in e)
          "useRadians" !== r &&
            ("function" == typeof (o = e[r]) && (o = o(s, t)),
            (n = (h = (o + "").split("_"))[0]),
            (a = parseFloat(
              "function" != typeof t[r]
                ? t[r]
                : t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
            )),
            (l =
              (o = this.finals[r] =
                "string" == typeof n && "=" === n.charAt(1)
                  ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))
                  : Number(n) || 0) - a),
            h.length &&
              (-1 !== (n = h.join("_")).indexOf("short") &&
                (l %= _) !== l % (_ / 2) &&
                (l = l < 0 ? l + _ : l - _),
              -1 !== n.indexOf("_cw") && l < 0
                ? (l = ((l + 9999999999 * _) % _) - ((l / _) | 0) * _)
                : -1 !== n.indexOf("ccw") &&
                  l > 0 &&
                  (l = ((l - 9999999999 * _) % _) - ((l / _) | 0) * _)),
            (l > 1e-6 || l < -1e-6) &&
              (this._addTween(t, r, a, a + l, r),
              this._overwriteProps.push(r)));
        return !0;
      },
      set: function(t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      }
    });
    (u._autoCSS = !0),
      /*!
       * VERSION: 2.1.0
       * DATE: 2019-02-15
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       */
      s.e._gsDefine(
        "TimelineLite",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function() {
          var t = function(t) {
              s.c.call(this, t);
              var e,
                i,
                r = this.vars;
              for (i in ((this._labels = {}),
              (this.autoRemoveChildren = !!r.autoRemoveChildren),
              (this.smoothChildTiming = !!r.smoothChildTiming),
              (this._sortChildren = !0),
              (this._onUpdate = r.onUpdate),
              r))
                (e = r[i]),
                  n(e) &&
                    -1 !== e.join("").indexOf("{self}") &&
                    (r[i] = this._swapSelfInParams(e));
              n(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
            },
            e = s.f._internals,
            i = (t._internals = {}),
            r = e.isSelector,
            n = e.isArray,
            a = e.lazyTweens,
            o = e.lazyRender,
            l = s.e._gsDefine.globals,
            h = function(t) {
              var e,
                i = {};
              for (e in t) i[e] = t[e];
              return i;
            },
            _ = function(t, e, i) {
              var s,
                r,
                n = t.cycle;
              for (s in n)
                (r = n[s]),
                  (t[s] =
                    "function" == typeof r ? r(i, e[i], e) : r[i % r.length]);
              delete t.cycle;
            },
            u = (i.pauseCallback = function() {}),
            f = function(t, e, i, s) {
              var r = "immediateRender";
              return (
                r in e || (e[r] = !(t._paused || (i && !1 === i[r]) || s)), e
              );
            },
            c = function(t) {
              if ("function" == typeof t) return t;
              var e = isNaN(t)
                  ? t
                  : { n: 1, from: t < 0 ? (t = -t) && "end" : 0 },
                i = e.ease,
                s = e.from || 0,
                r = e.base || 0,
                n = {},
                a = isNaN(s),
                o = e.axis,
                l = { center: 0.5, end: 1 }[s] || 0;
              return function(h, _, u) {
                var f,
                  c,
                  p,
                  d,
                  m,
                  g,
                  v,
                  y,
                  T,
                  x = (u || e).length,
                  b = n[x];
                if (!b) {
                  if (!(T = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                    for (
                      v = -1 / 0;
                      v < (v = u[T++].getBoundingClientRect().left) && T < x;

                    );
                    T--;
                  }
                  for (
                    b = n[x] = [],
                      f = a ? Math.min(T, x) * l - 0.5 : s % T,
                      c = a ? (x * l) / T - 0.5 : (s / T) | 0,
                      v = 0,
                      y = 1 / 0,
                      g = 0;
                    g < x;
                    g++
                  )
                    (p = (g % T) - f),
                      (d = c - ((g / T) | 0)),
                      (b[g] = m = o
                        ? Math.abs("y" === o ? d : p)
                        : Math.sqrt(p * p + d * d)),
                      m > v && (v = m),
                      m < y && (y = m);
                  (b.max = v - y),
                    (b.min = y),
                    (b.v = e.n ? x * (t || 0) : e.amount);
                }
                return (
                  (x = (b[h] - b.min) / b.max),
                  r + (i ? i.getRatio(x) : x) * b.v
                );
              };
            },
            p = (t.prototype = new s.c());
          return (
            (t.version = "2.1.0"),
            (t.distribute = c),
            (p.constructor = t),
            (p.kill()._gc = p._forcingPlayhead = p._hasPause = !1),
            (p.to = function(t, e, i, r) {
              var n = (i.repeat && l.TweenMax) || s.f;
              return e ? this.add(new n(t, e, i), r) : this.set(t, i, r);
            }),
            (p.from = function(t, e, i, r) {
              return this.add(
                ((i.repeat && l.TweenMax) || s.f).from(t, e, f(this, i)),
                r
              );
            }),
            (p.fromTo = function(t, e, i, r, n) {
              var a = (r.repeat && l.TweenMax) || s.f;
              return (
                (r = f(this, r, i)),
                e ? this.add(a.fromTo(t, e, i, r), n) : this.set(t, r, n)
              );
            }),
            (p.staggerTo = function(e, i, n, a, o, l, u, f) {
              var p,
                d,
                m = new t({
                  onComplete: l,
                  onCompleteParams: u,
                  callbackScope: f,
                  smoothChildTiming: this.smoothChildTiming
                }),
                g = c(n.stagger || a),
                v = n.startAt,
                y = n.cycle;
              for (
                "string" == typeof e && (e = s.f.selector(e) || e),
                  r((e = e || [])) &&
                    (e = (function(t) {
                      var e,
                        i = [],
                        s = t.length;
                      for (e = 0; e !== s; i.push(t[e++]));
                      return i;
                    })(e)),
                  d = 0;
                d < e.length;
                d++
              )
                (p = h(n)),
                  v && ((p.startAt = h(v)), v.cycle && _(p.startAt, e, d)),
                  y &&
                    (_(p, e, d),
                    null != p.duration &&
                      ((i = p.duration), delete p.duration)),
                  m.to(e[d], i, p, g(d, e[d], e));
              return this.add(m, o);
            }),
            (p.staggerFrom = function(t, e, i, s, r, n, a, o) {
              return (
                (i.runBackwards = !0),
                this.staggerTo(t, e, f(this, i), s, r, n, a, o)
              );
            }),
            (p.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
              return (
                (s.startAt = i),
                this.staggerTo(t, e, f(this, s, i), r, n, a, o, l)
              );
            }),
            (p.call = function(t, e, i, r) {
              return this.add(s.f.delayedCall(0, t, e, i), r);
            }),
            (p.set = function(t, e, i) {
              return this.add(new s.f(t, 0, f(this, e, null, !0)), i);
            }),
            (t.exportRoot = function(e, i) {
              null == (e = e || {}).smoothChildTiming &&
                (e.smoothChildTiming = !0);
              var r,
                n,
                a,
                o,
                l = new t(e),
                h = l._timeline;
              for (
                null == i && (i = !0),
                  h._remove(l, !0),
                  l._startTime = 0,
                  l._rawPrevTime = l._time = l._totalTime = h._time,
                  a = h._first;
                a;

              )
                (o = a._next),
                  (i && a instanceof s.f && a.target === a.vars.onComplete) ||
                    ((n = a._startTime - a._delay) < 0 && (r = 1), l.add(a, n)),
                  (a = o);
              return h.add(l, 0), r && l.totalDuration(), l;
            }),
            (p.add = function(e, i, r, a) {
              var o, l, h, _, u, f;
              if (
                ("number" != typeof i &&
                  (i = this._parseTimeOrLabel(i, 0, !0, e)),
                !(e instanceof s.a))
              ) {
                if (e instanceof Array || (e && e.push && n(e))) {
                  for (
                    r = r || "normal", a = a || 0, o = i, l = e.length, h = 0;
                    h < l;
                    h++
                  )
                    n((_ = e[h])) && (_ = new t({ tweens: _ })),
                      this.add(_, o),
                      "string" != typeof _ &&
                        "function" != typeof _ &&
                        ("sequence" === r
                          ? (o =
                              _._startTime + _.totalDuration() / _._timeScale)
                          : "start" === r && (_._startTime -= _.delay())),
                      (o += a);
                  return this._uncache(!0);
                }
                if ("string" == typeof e) return this.addLabel(e, i);
                if ("function" != typeof e)
                  throw "Cannot add " +
                    e +
                    " into the timeline; it is not a tween, timeline, function, or string.";
                e = s.f.delayedCall(0, e);
              }
              if (
                (s.c.prototype.add.call(this, e, i),
                (e._time || (!e._duration && e._initted)) &&
                  ((o = (this.rawTime() - e._startTime) * e._timeScale),
                  (!e._duration ||
                    Math.abs(Math.max(0, Math.min(e.totalDuration(), o))) -
                      e._totalTime >
                      1e-5) &&
                    e.render(o, !1, !1)),
                (this._gc || this._time === this._duration) &&
                  !this._paused &&
                  this._duration < this.duration())
              )
                for (f = (u = this).rawTime() > e._startTime; u._timeline; )
                  f && u._timeline.smoothChildTiming
                    ? u.totalTime(u._totalTime, !0)
                    : u._gc && u._enabled(!0, !1),
                    (u = u._timeline);
              return this;
            }),
            (p.remove = function(t) {
              if (t instanceof s.a) {
                this._remove(t, !1);
                var e = (t._timeline = t.vars.useFrames
                  ? s.a._rootFramesTimeline
                  : s.a._rootTimeline);
                return (
                  (t._startTime =
                    (t._paused ? t._pauseTime : e._time) -
                    (t._reversed
                      ? t.totalDuration() - t._totalTime
                      : t._totalTime) /
                      t._timeScale),
                  this
                );
              }
              if (t instanceof Array || (t && t.push && n(t))) {
                for (var i = t.length; --i > -1; ) this.remove(t[i]);
                return this;
              }
              return "string" == typeof t
                ? this.removeLabel(t)
                : this.kill(null, t);
            }),
            (p._remove = function(t, e) {
              return (
                s.c.prototype._remove.call(this, t, e),
                this._last
                  ? this._time > this.duration() &&
                    ((this._time = this._duration),
                    (this._totalTime = this._totalDuration))
                  : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                this
              );
            }),
            (p.append = function(t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
            }),
            (p.insert = p.insertMultiple = function(t, e, i, s) {
              return this.add(t, e || 0, i, s);
            }),
            (p.appendMultiple = function(t, e, i, s) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
            }),
            (p.addLabel = function(t, e) {
              return (this._labels[t] = this._parseTimeOrLabel(e)), this;
            }),
            (p.addPause = function(t, e, i, r) {
              var n = s.f.delayedCall(0, u, i, r || this);
              return (
                (n.vars.onComplete = n.vars.onReverseComplete = e),
                (n.data = "isPause"),
                (this._hasPause = !0),
                this.add(n, t)
              );
            }),
            (p.removeLabel = function(t) {
              return delete this._labels[t], this;
            }),
            (p.getLabelTime = function(t) {
              return null != this._labels[t] ? this._labels[t] : -1;
            }),
            (p._parseTimeOrLabel = function(t, e, i, r) {
              var a, o;
              if (r instanceof s.a && r.timeline === this) this.remove(r);
              else if (r && (r instanceof Array || (r.push && n(r))))
                for (o = r.length; --o > -1; )
                  r[o] instanceof s.a &&
                    r[o].timeline === this &&
                    this.remove(r[o]);
              if (
                ((a =
                  "number" != typeof t || e
                    ? this.duration() > 99999999999
                      ? this.recent().endTime(!1)
                      : this._duration
                    : 0),
                "string" == typeof e)
              )
                return this._parseTimeOrLabel(
                  e,
                  i && "number" == typeof t && null == this._labels[e]
                    ? t - a
                    : 0,
                  i
                );
              if (
                ((e = e || 0),
                "string" != typeof t || (!isNaN(t) && null == this._labels[t]))
              )
                null == t && (t = a);
              else {
                if (-1 === (o = t.indexOf("=")))
                  return null == this._labels[t]
                    ? i
                      ? (this._labels[t] = a + e)
                      : e
                    : this._labels[t] + e;
                (e =
                  parseInt(t.charAt(o - 1) + "1", 10) *
                  Number(t.substr(o + 1))),
                  (t =
                    o > 1
                      ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i)
                      : a);
              }
              return Number(t) + e;
            }),
            (p.seek = function(t, e) {
              return this.totalTime(
                "number" == typeof t ? t : this._parseTimeOrLabel(t),
                !1 !== e
              );
            }),
            (p.stop = function() {
              return this.paused(!0);
            }),
            (p.gotoAndPlay = function(t, e) {
              return this.play(t, e);
            }),
            (p.gotoAndStop = function(t, e) {
              return this.pause(t, e);
            }),
            (p.render = function(t, e, i) {
              this._gc && this._enabled(!0, !1);
              var s,
                r,
                n,
                l,
                h,
                _,
                u,
                f,
                c = this._time,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._startTime,
                m = this._timeScale,
                g = this._paused;
              if (
                (c !== this._time && (t += this._time - c),
                t >= p - 1e-8 && t >= 0)
              )
                (this._totalTime = this._time = p),
                  this._reversed ||
                    this._hasPausedChild() ||
                    ((r = !0),
                    (l = "onComplete"),
                    (h = !!this._timeline.autoRemoveChildren),
                    0 === this._duration &&
                      ((t <= 0 && t >= -1e-8) ||
                        this._rawPrevTime < 0 ||
                        1e-8 === this._rawPrevTime) &&
                      this._rawPrevTime !== t &&
                      this._first &&
                      ((h = !0),
                      this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))),
                  (this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : 1e-8),
                  (t = p + 1e-4);
              else if (t < 1e-8)
                if (
                  ((this._totalTime = this._time = 0),
                  t > -1e-8 && (t = 0),
                  (0 !== c ||
                    (0 === this._duration &&
                      1e-8 !== this._rawPrevTime &&
                      (this._rawPrevTime > 0 ||
                        (t < 0 && this._rawPrevTime >= 0)))) &&
                    ((l = "onReverseComplete"), (r = this._reversed)),
                  t < 0)
                )
                  (this._active = !1),
                    this._timeline.autoRemoveChildren && this._reversed
                      ? ((h = r = !0), (l = "onReverseComplete"))
                      : this._rawPrevTime >= 0 && this._first && (h = !0),
                    (this._rawPrevTime = t);
                else {
                  if (
                    ((this._rawPrevTime =
                      this._duration || !e || t || this._rawPrevTime === t
                        ? t
                        : 1e-8),
                    0 === t && r)
                  )
                    for (s = this._first; s && 0 === s._startTime; )
                      s._duration || (r = !1), (s = s._next);
                  (t = 0), this._initted || (h = !0);
                }
              else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                  if (t >= c)
                    for (s = this._first; s && s._startTime <= t && !_; )
                      s._duration ||
                        "isPause" !== s.data ||
                        s.ratio ||
                        (0 === s._startTime && 0 === this._rawPrevTime) ||
                        (_ = s),
                        (s = s._next);
                  else
                    for (s = this._last; s && s._startTime >= t && !_; )
                      s._duration ||
                        ("isPause" === s.data && s._rawPrevTime > 0 && (_ = s)),
                        (s = s._prev);
                  _ &&
                    ((this._time = this._totalTime = t = _._startTime),
                    (f = this._startTime + t / this._timeScale));
                }
                this._totalTime = this._time = this._rawPrevTime = t;
              }
              if ((this._time !== c && this._first) || i || h || _) {
                if (
                  (this._initted || (this._initted = !0),
                  this._active ||
                    (!this._paused &&
                      this._time !== c &&
                      t > 0 &&
                      (this._active = !0)),
                  0 === c &&
                    this.vars.onStart &&
                    ((0 === this._time && this._duration) ||
                      e ||
                      this._callback("onStart")),
                  (u = this._time) >= c)
                )
                  for (
                    s = this._first;
                    s &&
                    ((n = s._next), u === this._time && (!this._paused || g));

                  )
                    (s._active ||
                      (s._startTime <= u && !s._paused && !s._gc)) &&
                      (_ === s && (this.pause(), (this._pauseTime = f)),
                      s._reversed
                        ? s.render(
                            (s._dirty ? s.totalDuration() : s._totalDuration) -
                              (t - s._startTime) * s._timeScale,
                            e,
                            i
                          )
                        : s.render((t - s._startTime) * s._timeScale, e, i)),
                      (s = n);
                else
                  for (
                    s = this._last;
                    s &&
                    ((n = s._prev), u === this._time && (!this._paused || g));

                  ) {
                    if (
                      s._active ||
                      (s._startTime <= c && !s._paused && !s._gc)
                    ) {
                      if (_ === s) {
                        for (_ = s._prev; _ && _.endTime() > this._time; )
                          _.render(
                            _._reversed
                              ? _.totalDuration() -
                                  (t - _._startTime) * _._timeScale
                              : (t - _._startTime) * _._timeScale,
                            e,
                            i
                          ),
                            (_ = _._prev);
                        (_ = null), this.pause(), (this._pauseTime = f);
                      }
                      s._reversed
                        ? s.render(
                            (s._dirty ? s.totalDuration() : s._totalDuration) -
                              (t - s._startTime) * s._timeScale,
                            e,
                            i
                          )
                        : s.render((t - s._startTime) * s._timeScale, e, i);
                    }
                    s = n;
                  }
                this._onUpdate &&
                  (e || (a.length && o(), this._callback("onUpdate"))),
                  l &&
                    (this._gc ||
                      (d !== this._startTime && m === this._timeScale) ||
                      ((0 === this._time || p >= this.totalDuration()) &&
                        (r &&
                          (a.length && o(),
                          this._timeline.autoRemoveChildren &&
                            this._enabled(!1, !1),
                          (this._active = !1)),
                        !e && this.vars[l] && this._callback(l))));
              }
            }),
            (p._hasPausedChild = function() {
              for (var e = this._first; e; ) {
                if (e._paused || (e instanceof t && e._hasPausedChild()))
                  return !0;
                e = e._next;
              }
              return !1;
            }),
            (p.getChildren = function(t, e, i, r) {
              r = r || -9999999999;
              for (var n = [], a = this._first, o = 0; a; )
                a._startTime < r ||
                  (a instanceof s.f
                    ? !1 !== e && (n[o++] = a)
                    : (!1 !== i && (n[o++] = a),
                      !1 !== t &&
                        (o = (n = n.concat(a.getChildren(!0, e, i))).length))),
                  (a = a._next);
              return n;
            }),
            (p.getTweensOf = function(t, e) {
              var i,
                r,
                n = this._gc,
                a = [],
                o = 0;
              for (
                n && this._enabled(!0, !0), r = (i = s.f.getTweensOf(t)).length;
                --r > -1;

              )
                (i[r].timeline === this || (e && this._contains(i[r]))) &&
                  (a[o++] = i[r]);
              return n && this._enabled(!1, !0), a;
            }),
            (p.recent = function() {
              return this._recent;
            }),
            (p._contains = function(t) {
              for (var e = t.timeline; e; ) {
                if (e === this) return !0;
                e = e.timeline;
              }
              return !1;
            }),
            (p.shiftChildren = function(t, e, i) {
              i = i || 0;
              for (var s, r = this._first, n = this._labels; r; )
                r._startTime >= i && (r._startTime += t), (r = r._next);
              if (e) for (s in n) n[s] >= i && (n[s] += t);
              return this._uncache(!0);
            }),
            (p._kill = function(t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (
                var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                  s = i.length,
                  r = !1;
                --s > -1;

              )
                i[s]._kill(t, e) && (r = !0);
              return r;
            }),
            (p.clear = function(t) {
              var e = this.getChildren(!1, !0, !0),
                i = e.length;
              for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0);
            }),
            (p.invalidate = function() {
              for (var t = this._first; t; ) t.invalidate(), (t = t._next);
              return s.a.prototype.invalidate.call(this);
            }),
            (p._enabled = function(t, e) {
              if (t === this._gc)
                for (var i = this._first; i; ) i._enabled(t, !0), (i = i._next);
              return s.c.prototype._enabled.call(this, t, e);
            }),
            (p.totalTime = function(t, e, i) {
              this._forcingPlayhead = !0;
              var r = s.a.prototype.totalTime.apply(this, arguments);
              return (this._forcingPlayhead = !1), r;
            }),
            (p.duration = function(t) {
              return arguments.length
                ? (0 !== this.duration() &&
                    0 !== t &&
                    this.timeScale(this._duration / t),
                  this)
                : (this._dirty && this.totalDuration(), this._duration);
            }),
            (p.totalDuration = function(t) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                    (e = r._prev),
                      r._dirty && r.totalDuration(),
                      r._startTime > n &&
                      this._sortChildren &&
                      !r._paused &&
                      !this._calculatingDuration
                        ? ((this._calculatingDuration = 1),
                          this.add(r, r._startTime - r._delay),
                          (this._calculatingDuration = 0))
                        : (n = r._startTime),
                      r._startTime < 0 &&
                        !r._paused &&
                        ((s -= r._startTime),
                        this._timeline.smoothChildTiming &&
                          ((this._startTime += r._startTime / this._timeScale),
                          (this._time -= r._startTime),
                          (this._totalTime -= r._startTime),
                          (this._rawPrevTime -= r._startTime)),
                        this.shiftChildren(-r._startTime, !1, -9999999999),
                        (n = 0)),
                      (i = r._startTime + r._totalDuration / r._timeScale) >
                        s && (s = i),
                      (r = e);
                  (this._duration = this._totalDuration = s),
                    (this._dirty = !1);
                }
                return this._totalDuration;
              }
              return t && this.totalDuration()
                ? this.timeScale(this._totalDuration / t)
                : this;
            }),
            (p.paused = function(t) {
              if (!1 === t && this._paused)
                for (var e = this._first; e; )
                  e._startTime === this._time &&
                    "isPause" === e.data &&
                    (e._rawPrevTime = 0),
                    (e = e._next);
              return s.a.prototype.paused.apply(this, arguments);
            }),
            (p.usesFrames = function() {
              for (var t = this._timeline; t._timeline; ) t = t._timeline;
              return t === s.a._rootFramesTimeline;
            }),
            (p.rawTime = function(t) {
              return t &&
                (this._paused ||
                  (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                ? this._totalTime % (this._duration + this._repeatDelay)
                : this._paused
                ? this._totalTime
                : (this._timeline.rawTime(t) - this._startTime) *
                  this._timeScale;
            }),
            t
          );
        },
        !0
      );
    var f = s.g.TimelineLite;
    /*!
     * VERSION: 2.1.0
     * DATE: 2019-02-15
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */ s.e._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function() {
        var t = function(t) {
            f.call(this, t),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = !!this.vars.yoyo),
              (this._dirty = !0);
          },
          e = s.f._internals,
          i = e.lazyTweens,
          r = e.lazyRender,
          n = s.e._gsDefine.globals,
          a = new s.b(null, null, 1, 0),
          o = (t.prototype = new f());
        return (
          (o.constructor = t),
          (o.kill()._gc = !1),
          (t.version = "2.1.0"),
          (o.invalidate = function() {
            return (
              (this._yoyo = !!this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              f.prototype.invalidate.call(this)
            );
          }),
          (o.addCallback = function(t, e, i, r) {
            return this.add(s.f.delayedCall(0, t, i, r), e);
          }),
          (o.removeCallback = function(t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    s = i.length,
                    r = this._parseTimeOrLabel(e);
                  --s > -1;

                )
                  i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this;
          }),
          (o.removePause = function(t) {
            return this.removeCallback(f._internals.pauseCallback, t);
          }),
          (o.tweenTo = function(t, e) {
            e = e || {};
            var i,
              r,
              o,
              l = {
                ease: a,
                useFrames: this.usesFrames(),
                immediateRender: !1,
                lazy: !1
              },
              h = (e.repeat && n.TweenMax) || s.f;
            for (r in e) l[r] = e[r];
            return (
              (l.time = this._parseTimeOrLabel(t)),
              (i =
                Math.abs(Number(l.time) - this._time) / this._timeScale ||
                0.001),
              (o = new h(this, i, l)),
              (l.onStart = function() {
                o.target.paused(!0),
                  o.vars.time === o.target.time() ||
                    i !== o.duration() ||
                    o.isFromTo ||
                    o
                      .duration(
                        Math.abs(o.vars.time - o.target.time()) /
                          o.target._timeScale
                      )
                      .render(o.time(), !0, !0),
                  e.onStart &&
                    e.onStart.apply(
                      e.onStartScope || e.callbackScope || o,
                      e.onStartParams || []
                    );
              }),
              o
            );
          }),
          (o.tweenFromTo = function(t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
              }),
              (i.immediateRender = !1 !== i.immediateRender);
            var s = this.tweenTo(e, i);
            return (
              (s.isFromTo = 1),
              s.duration(Math.abs(s.vars.time - t) / this._timeScale || 0.001)
            );
          }),
          (o.render = function(t, e, s) {
            this._gc && this._enabled(!0, !1);
            var n,
              a,
              o,
              l,
              h,
              _,
              u,
              f,
              c,
              p = this._time,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._duration,
              g = this._totalTime,
              v = this._startTime,
              y = this._timeScale,
              T = this._rawPrevTime,
              x = this._paused,
              b = this._cycle;
            if (
              (p !== this._time && (t += this._time - p),
              t >= d - 1e-8 && t >= 0)
            )
              this._locked ||
                ((this._totalTime = d), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((a = !0),
                  (l = "onComplete"),
                  (h = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((t <= 0 && t >= -1e-8) || T < 0 || 1e-8 === T) &&
                    T !== t &&
                    this._first &&
                    ((h = !0), T > 1e-8 && (l = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t
                    ? t
                    : 1e-8),
                this._yoyo && 1 & this._cycle
                  ? (this._time = t = 0)
                  : ((this._time = m), (t = m + 1e-4));
            else if (t < 1e-8)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                t > -1e-8 && (t = 0),
                (0 !== p ||
                  (0 === m &&
                    1e-8 !== T &&
                    (T > 0 || (t < 0 && T >= 0)) &&
                    !this._locked)) &&
                  ((l = "onReverseComplete"), (a = this._reversed)),
                t < 0)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((h = a = !0), (l = "onReverseComplete"))
                    : T >= 0 && this._first && (h = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    m || !e || t || this._rawPrevTime === t ? t : 1e-8),
                  0 === t && a)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (a = !1), (n = n._next);
                (t = 0), this._initted || (h = !0);
              }
            else if (
              (0 === m && T < 0 && (h = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((_ = m + this._repeatDelay),
                  (this._cycle = (this._totalTime / _) >> 0),
                  this._cycle &&
                    this._cycle === this._totalTime / _ &&
                    g <= t &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * _),
                  this._yoyo &&
                    1 & this._cycle &&
                    (this._time = m - this._time),
                  this._time > m
                    ? ((this._time = m), (t = m + 1e-4))
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if ((t = this._time) >= p || (this._repeat && b !== this._cycle))
                for (n = this._first; n && n._startTime <= t && !u; )
                  n._duration ||
                    "isPause" !== n.data ||
                    n.ratio ||
                    (0 === n._startTime && 0 === this._rawPrevTime) ||
                    (u = n),
                    (n = n._next);
              else
                for (n = this._last; n && n._startTime >= t && !u; )
                  n._duration ||
                    ("isPause" === n.data && n._rawPrevTime > 0 && (u = n)),
                    (n = n._prev);
              u &&
                ((c = this._startTime + u._startTime / this._timeScale),
                u._startTime < m &&
                  ((this._time = this._rawPrevTime = t = u._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay))));
            }
            if (this._cycle !== b && !this._locked) {
              var w = this._yoyo && 0 != (1 & b),
                P = w === (this._yoyo && 0 != (1 & this._cycle)),
                O = this._totalTime,
                S = this._cycle,
                k = this._rawPrevTime,
                R = this._time;
              if (
                ((this._totalTime = b * m),
                this._cycle < b ? (w = !w) : (this._totalTime += m),
                (this._time = p),
                (this._rawPrevTime = 0 === m ? T - 1e-4 : T),
                (this._cycle = b),
                (this._locked = !0),
                (p = w ? 0 : m),
                this.render(p, e, 0 === m),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = S),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                p !== this._time)
              )
                return;
              if (
                (P &&
                  ((this._cycle = b),
                  (this._locked = !0),
                  (p = w ? m + 1e-4 : -1e-4),
                  this.render(p, !0, !1)),
                (this._locked = !1),
                this._paused && !x)
              )
                return;
              (this._time = R),
                (this._totalTime = O),
                (this._cycle = S),
                (this._rawPrevTime = k);
            }
            if ((this._time !== p && this._first) || s || h || u) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._totalTime !== g &&
                    t > 0 &&
                    (this._active = !0)),
                0 === g &&
                  this.vars.onStart &&
                  ((0 === this._totalTime && this._totalDuration) ||
                    e ||
                    this._callback("onStart")),
                (f = this._time) >= p)
              )
                for (
                  n = this._first;
                  n &&
                  ((o = n._next), f === this._time && (!this._paused || x));

                )
                  (n._active ||
                    (n._startTime <= this._time && !n._paused && !n._gc)) &&
                    (u === n && (this.pause(), (this._pauseTime = c)),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          s
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, s)),
                    (n = o);
              else
                for (
                  n = this._last;
                  n &&
                  ((o = n._prev), f === this._time && (!this._paused || x));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= p && !n._paused && !n._gc)
                  ) {
                    if (u === n) {
                      for (u = n._prev; u && u.endTime() > this._time; )
                        u.render(
                          u._reversed
                            ? u.totalDuration() -
                                (t - u._startTime) * u._timeScale
                            : (t - u._startTime) * u._timeScale,
                          e,
                          s
                        ),
                          (u = u._prev);
                      (u = null), this.pause(), (this._pauseTime = c);
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          s
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, s);
                  }
                  n = o;
                }
              this._onUpdate &&
                (e || (i.length && r(), this._callback("onUpdate"))),
                l &&
                  (this._locked ||
                    this._gc ||
                    (v !== this._startTime && y === this._timeScale) ||
                    ((0 === this._time || d >= this.totalDuration()) &&
                      (a &&
                        (i.length && r(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[l] && this._callback(l))));
            } else
              g !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"));
          }),
          (o.getActive = function(t, e, i) {
            var s,
              r,
              n = [],
              a = this.getChildren(t || null == t, e || null == t, !!i),
              o = 0,
              l = a.length;
            for (s = 0; s < l; s++) (r = a[s]).isActive() && (n[o++] = r);
            return n;
          }),
          (o.getLabelAfter = function(t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              s = i.length;
            for (e = 0; e < s; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (o.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (o.getLabelsArray = function() {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function(t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (o.invalidate = function() {
            return (this._locked = !1), f.prototype.invalidate.call(this);
          }),
          (o.progress = function(t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration() || 0;
          }),
          (o.totalProgress = function(t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (o.totalDuration = function(t) {
            return arguments.length
              ? -1 !== this._repeat && t
                ? this.timeScale(this.totalDuration() / t)
                : this
              : (this._dirty &&
                  (f.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (o.time = function(t, e) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration,
              s = this._cycle,
              r = s * (i * this._repeatDelay);
            return (
              t > i && (t = i),
              this.totalTime(
                this._yoyo && 1 & s ? i - t + r : this._repeat ? t + r : t,
                e
              )
            );
          }),
          (o.repeat = function(t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (o.repeatDelay = function(t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (o.yoyo = function(t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (o.currentLabel = function(t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          t
        );
      },
      !0
    );
    var c = s.g.TimelineMax,
      p = 180 / Math.PI,
      d = [],
      m = [],
      g = [],
      v = {},
      y = s.e._gsDefine.globals,
      T = function(t, e, i, s) {
        i === s && (i = s - (s - e) / 1e6),
          t === e && (e = t + (i - t) / 1e6),
          (this.a = t),
          (this.b = e),
          (this.c = i),
          (this.d = s),
          (this.da = s - t),
          (this.ca = i - t),
          (this.ba = e - t);
      },
      x = function(t, e, i, s) {
        var r = { a: t },
          n = {},
          a = {},
          o = { c: s },
          l = (t + e) / 2,
          h = (e + i) / 2,
          _ = (i + s) / 2,
          u = (l + h) / 2,
          f = (h + _) / 2,
          c = (f - u) / 8;
        return (
          (r.b = l + (t - l) / 4),
          (n.b = u + c),
          (r.c = n.a = (r.b + n.b) / 2),
          (n.c = a.a = (u + f) / 2),
          (a.b = f - c),
          (o.b = _ + (s - _) / 4),
          (a.c = o.a = (a.b + o.b) / 2),
          [r, n, a, o]
        );
      },
      b = function(t, e, i, s, r) {
        var n,
          a,
          o,
          l,
          h,
          _,
          u,
          f,
          c,
          p,
          v,
          y,
          T,
          b = t.length - 1,
          w = 0,
          P = t[0].a;
        for (n = 0; n < b; n++)
          (a = (h = t[w]).a),
            (o = h.d),
            (l = t[w + 1].d),
            r
              ? ((v = d[n]),
                (T = (((y = m[n]) + v) * e * 0.25) / (s ? 0.5 : g[n] || 0.5)),
                (f =
                  o -
                  ((_ = o - (o - a) * (s ? 0.5 * e : 0 !== v ? T / v : 0)) +
                    ((((u = o + (l - o) * (s ? 0.5 * e : 0 !== y ? T / y : 0)) -
                      _) *
                      ((3 * v) / (v + y) + 0.5)) /
                      4 || 0))))
              : (f =
                  o -
                  ((_ = o - (o - a) * e * 0.5) + (u = o + (l - o) * e * 0.5)) /
                    2),
            (_ += f),
            (u += f),
            (h.c = c = _),
            (h.b = 0 !== n ? P : (P = h.a + 0.6 * (h.c - h.a))),
            (h.da = o - a),
            (h.ca = c - a),
            (h.ba = P - a),
            i
              ? ((p = x(a, P, c, o)),
                t.splice(w, 1, p[0], p[1], p[2], p[3]),
                (w += 4))
              : w++,
            (P = u);
        ((h = t[w]).b = P),
          (h.c = P + 0.4 * (h.d - P)),
          (h.da = h.d - h.a),
          (h.ca = h.c - h.a),
          (h.ba = P - h.a),
          i &&
            ((p = x(h.a, P, h.c, h.d)), t.splice(w, 1, p[0], p[1], p[2], p[3]));
      },
      w = function(t, e, i, s) {
        var r,
          n,
          a,
          o,
          l,
          h,
          _ = [];
        if (s)
          for (n = (t = [s].concat(t)).length; --n > -1; )
            "string" == typeof (h = t[n][e]) &&
              "=" === h.charAt(1) &&
              (t[n][e] = s[e] + Number(h.charAt(0) + h.substr(2)));
        if ((r = t.length - 2) < 0)
          return (_[0] = new T(t[0][e], 0, 0, t[0][e])), _;
        for (n = 0; n < r; n++)
          (a = t[n][e]),
            (o = t[n + 1][e]),
            (_[n] = new T(a, 0, 0, o)),
            i &&
              ((l = t[n + 2][e]),
              (d[n] = (d[n] || 0) + (o - a) * (o - a)),
              (m[n] = (m[n] || 0) + (l - o) * (l - o)));
        return (_[n] = new T(t[n][e], 0, 0, t[n + 1][e])), _;
      },
      P = function(t, e, i, s, r, n) {
        var a,
          o,
          l,
          h,
          _,
          u,
          f,
          c,
          p = {},
          y = [],
          T = n || t[0];
        for (o in ((r =
          "string" == typeof r
            ? "," + r + ","
            : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == e && (e = 1),
        t[0]))
          y.push(o);
        if (t.length > 1) {
          for (c = t[t.length - 1], f = !0, a = y.length; --a > -1; )
            if (((o = y[a]), Math.abs(T[o] - c[o]) > 0.05)) {
              f = !1;
              break;
            }
          f &&
            ((t = t.concat()),
            n && t.unshift(n),
            t.push(t[1]),
            (n = t[t.length - 3]));
        }
        for (d.length = m.length = g.length = 0, a = y.length; --a > -1; )
          (o = y[a]),
            (v[o] = -1 !== r.indexOf("," + o + ",")),
            (p[o] = w(t, o, v[o], n));
        for (a = d.length; --a > -1; )
          (d[a] = Math.sqrt(d[a])), (m[a] = Math.sqrt(m[a]));
        if (!s) {
          for (a = y.length; --a > -1; )
            if (v[o])
              for (u = (l = p[y[a]]).length - 1, h = 0; h < u; h++)
                (_ = l[h + 1].da / m[h] + l[h].da / d[h] || 0),
                  (g[h] = (g[h] || 0) + _ * _);
          for (a = g.length; --a > -1; ) g[a] = Math.sqrt(g[a]);
        }
        for (a = y.length, h = i ? 4 : 1; --a > -1; )
          (l = p[(o = y[a])]),
            b(l, e, i, s, v[o]),
            f && (l.splice(0, h), l.splice(l.length - h, h));
        return p;
      },
      O = function(t, e, i) {
        for (
          var s, r, n, a, o, l, h, _, u, f, c, p = 1 / i, d = t.length;
          --d > -1;

        )
          for (
            n = (f = t[d]).a,
              a = f.d - n,
              o = f.c - n,
              l = f.b - n,
              s = r = 0,
              _ = 1;
            _ <= i;
            _++
          )
            (s =
              r -
              (r =
                ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h)),
              (e[(c = d * i + _ - 1)] = (e[c] || 0) + s * s);
      },
      S = s.e._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function(t, e, i) {
          (this._target = t),
            e instanceof Array && (e = { values: e }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes =
              null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
          var s,
            r,
            n,
            a,
            o,
            l = e.values || [],
            h = {},
            _ = l[0],
            u = e.autoRotate || i.vars.orientToBezier;
          for (s in ((this._autoRotate = u
            ? u instanceof Array
              ? u
              : [["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]]
            : null),
          _))
            this._props.push(s);
          for (n = this._props.length; --n > -1; )
            (s = this._props[n]),
              this._overwriteProps.push(s),
              (r = this._func[s] = "function" == typeof t[s]),
              (h[s] = r
                ? t[
                    s.indexOf("set") ||
                    "function" != typeof t["get" + s.substr(3)]
                      ? s
                      : "get" + s.substr(3)
                  ]()
                : parseFloat(t[s])),
              o || (h[s] !== l[0][s] && (o = h));
          if (
            ((this._beziers =
              "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                ? P(
                    l,
                    isNaN(e.curviness) ? 1 : e.curviness,
                    !1,
                    "thruBasic" === e.type,
                    e.correlate,
                    o
                  )
                : (function(t, e, i) {
                    var s,
                      r,
                      n,
                      a,
                      o,
                      l,
                      h,
                      _,
                      u,
                      f,
                      c,
                      p = {},
                      d = "cubic" === (e = e || "soft") ? 3 : 2,
                      m = "soft" === e,
                      g = [];
                    if (
                      (m && i && (t = [i].concat(t)),
                      null == t || t.length < d + 1)
                    )
                      throw "invalid Bezier data";
                    for (u in t[0]) g.push(u);
                    for (l = g.length; --l > -1; ) {
                      for (
                        p[(u = g[l])] = o = [], f = 0, _ = t.length, h = 0;
                        h < _;
                        h++
                      )
                        (s =
                          null == i
                            ? t[h][u]
                            : "string" == typeof (c = t[h][u]) &&
                              "=" === c.charAt(1)
                            ? i[u] + Number(c.charAt(0) + c.substr(2))
                            : Number(c)),
                          m &&
                            h > 1 &&
                            h < _ - 1 &&
                            (o[f++] = (s + o[f - 2]) / 2),
                          (o[f++] = s);
                      for (_ = f - d + 1, f = 0, h = 0; h < _; h += d)
                        (s = o[h]),
                          (r = o[h + 1]),
                          (n = o[h + 2]),
                          (a = 2 === d ? 0 : o[h + 3]),
                          (o[f++] = c =
                            3 === d
                              ? new T(s, r, n, a)
                              : new T(s, (2 * r + s) / 3, (2 * r + n) / 3, n));
                      o.length = f;
                    }
                    return p;
                  })(l, e.type, h)),
            (this._segCount = this._beziers[s].length),
            this._timeRes)
          ) {
            var f = (function(t, e) {
              var i,
                s,
                r,
                n,
                a = [],
                o = [],
                l = 0,
                h = 0,
                _ = (e = e >> 0 || 6) - 1,
                u = [],
                f = [];
              for (i in t) O(t[i], a, e);
              for (r = a.length, s = 0; s < r; s++)
                (l += Math.sqrt(a[s])),
                  (f[(n = s % e)] = l),
                  n === _ &&
                    ((h += l),
                    (u[(n = (s / e) >> 0)] = f),
                    (o[n] = h),
                    (l = 0),
                    (f = []));
              return { length: h, lengths: o, segments: u };
            })(this._beziers, this._timeRes);
            (this._length = f.length),
              (this._lengths = f.lengths),
              (this._segments = f.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length);
          }
          if ((u = this._autoRotate))
            for (
              this._initialRotations = [],
                u[0] instanceof Array || (this._autoRotate = u = [u]),
                n = u.length;
              --n > -1;

            ) {
              for (a = 0; a < 3; a++)
                (s = u[n][a]),
                  (this._func[s] =
                    "function" == typeof t[s] &&
                    t[
                      s.indexOf("set") ||
                      "function" != typeof t["get" + s.substr(3)]
                        ? s
                        : "get" + s.substr(3)
                    ]);
              (s = u[n][2]),
                (this._initialRotations[n] =
                  (this._func[s]
                    ? this._func[s].call(this._target)
                    : this._target[s]) || 0),
                this._overwriteProps.push(s);
            }
          return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
        },
        set: function(t) {
          var e,
            i,
            s,
            r,
            n,
            a,
            o,
            l,
            h,
            _,
            u = this._segCount,
            f = this._func,
            c = this._target,
            d = t !== this._startRatio;
          if (this._timeRes) {
            if (
              ((h = this._lengths),
              (_ = this._curSeg),
              (t *= this._length),
              (s = this._li),
              t > this._l2 && s < u - 1)
            ) {
              for (l = u - 1; s < l && (this._l2 = h[++s]) <= t; );
              (this._l1 = h[s - 1]),
                (this._li = s),
                (this._curSeg = _ = this._segments[s]),
                (this._s2 = _[(this._s1 = this._si = 0)]);
            } else if (t < this._l1 && s > 0) {
              for (; s > 0 && (this._l1 = h[--s]) >= t; );
              0 === s && t < this._l1 ? (this._l1 = 0) : s++,
                (this._l2 = h[s]),
                (this._li = s),
                (this._curSeg = _ = this._segments[s]),
                (this._s1 = _[(this._si = _.length - 1) - 1] || 0),
                (this._s2 = _[this._si]);
            }
            if (
              ((e = s),
              (t -= this._l1),
              (s = this._si),
              t > this._s2 && s < _.length - 1)
            ) {
              for (l = _.length - 1; s < l && (this._s2 = _[++s]) <= t; );
              (this._s1 = _[s - 1]), (this._si = s);
            } else if (t < this._s1 && s > 0) {
              for (; s > 0 && (this._s1 = _[--s]) >= t; );
              0 === s && t < this._s1 ? (this._s1 = 0) : s++,
                (this._s2 = _[s]),
                (this._si = s);
            }
            a = (s + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
          } else
            a =
              (t - (e = t < 0 ? 0 : t >= 1 ? u - 1 : (u * t) >> 0) * (1 / u)) *
              u;
          for (i = 1 - a, s = this._props.length; --s > -1; )
            (r = this._props[s]),
              (o =
                (a * a * (n = this._beziers[r][e]).da +
                  3 * i * (a * n.ca + i * n.ba)) *
                  a +
                n.a),
              this._mod[r] && (o = this._mod[r](o, c)),
              f[r] ? c[r](o) : (c[r] = o);
          if (this._autoRotate) {
            var m,
              g,
              v,
              y,
              T,
              x,
              b,
              w = this._autoRotate;
            for (s = w.length; --s > -1; )
              (r = w[s][2]),
                (x = w[s][3] || 0),
                (b = !0 === w[s][4] ? 1 : p),
                (n = this._beziers[w[s][0]]),
                (m = this._beziers[w[s][1]]),
                n &&
                  m &&
                  ((n = n[e]),
                  (m = m[e]),
                  (g = n.a + (n.b - n.a) * a),
                  (g += ((y = n.b + (n.c - n.b) * a) - g) * a),
                  (y += (n.c + (n.d - n.c) * a - y) * a),
                  (v = m.a + (m.b - m.a) * a),
                  (v += ((T = m.b + (m.c - m.b) * a) - v) * a),
                  (T += (m.c + (m.d - m.c) * a - T) * a),
                  (o = d
                    ? Math.atan2(T - v, y - g) * b + x
                    : this._initialRotations[s]),
                  this._mod[r] && (o = this._mod[r](o, c)),
                  f[r] ? c[r](o) : (c[r] = o));
          }
        }
      }),
      k = S.prototype;
    /*!
     * VERSION: 1.3.8
     * DATE: 2018-05-30
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/ (S.bezierThrough = P),
      (S.cubicToQuadratic = x),
      (S._autoCSS = !0),
      (S.quadraticToCubic = function(t, e, i) {
        return new T(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
      }),
      (S._cssRegister = function() {
        var t = y.CSSPlugin;
        if (t) {
          var e = t._internals,
            i = e._parseToProxy,
            s = e._setPluginRatio,
            r = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function(t, e, n, a, o, l) {
              e instanceof Array && (e = { values: e }), (l = new S());
              var h,
                _,
                u,
                f = e.values,
                c = f.length - 1,
                p = [],
                d = {};
              if (c < 0) return o;
              for (h = 0; h <= c; h++)
                (u = i(t, f[h], a, o, l, c !== h)), (p[h] = u.end);
              for (_ in e) d[_] = e[_];
              return (
                (d.values = p),
                ((o = new r(t, "bezier", 0, 0, u.pt, 2)).data = u),
                (o.plugin = l),
                (o.setRatio = s),
                0 === d.autoRotate && (d.autoRotate = !0),
                !d.autoRotate ||
                  d.autoRotate instanceof Array ||
                  ((h = !0 === d.autoRotate ? 0 : Number(d.autoRotate)),
                  (d.autoRotate =
                    null != u.end.left
                      ? [["left", "top", "rotation", h, !1]]
                      : null != u.end.x && [["x", "y", "rotation", h, !1]])),
                d.autoRotate &&
                  (a._transform || a._enableTransforms(!1),
                  (u.autoRotate = a._target._gsTransform),
                  (u.proxy.rotation = u.autoRotate.rotation || 0),
                  a._overwriteProps.push("rotation")),
                l._onInitTween(u.proxy, d, a._tween),
                o
              );
            }
          });
        }
      }),
      (k._mod = function(t) {
        for (var e, i = this._overwriteProps, s = i.length; --s > -1; )
          (e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e);
      }),
      (k._kill = function(t) {
        var e,
          i,
          s = this._props;
        for (e in this._beziers)
          if (e in t)
            for (
              delete this._beziers[e], delete this._func[e], i = s.length;
              --i > -1;

            )
              s[i] === e && s.splice(i, 1);
        if ((s = this._autoRotate))
          for (i = s.length; --i > -1; ) t[s[i][2]] && s.splice(i, 1);
        return this._super._kill.call(this, t);
      }),
      /*!
       * VERSION: 1.16.1
       * DATE: 2018-08-27
       * UPDATES AND DOCS AT: http://greensock.com
       *
       * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
       * This work is subject to the terms at http://greensock.com/standard-license or for
       * Club GreenSock members, the software agreement that was issued with your membership.
       *
       * @author: Jack Doyle, jack@greensock.com
       **/
      s.e._gsDefine(
        "easing.Back",
        ["easing.Ease"],
        function() {
          var t,
            e,
            i,
            r,
            n = s.e.GreenSockGlobals || s.e,
            a = n.com.greensock,
            o = 2 * Math.PI,
            l = Math.PI / 2,
            h = a._class,
            _ = function(t, e) {
              var i = h("easing." + t, function() {}, !0),
                r = (i.prototype = new s.b());
              return (r.constructor = i), (r.getRatio = e), i;
            },
            u = s.b.register || function() {},
            f = function(t, e, i, s, r) {
              var n = h(
                "easing." + t,
                { easeOut: new e(), easeIn: new i(), easeInOut: new s() },
                !0
              );
              return u(n, t), n;
            },
            c = function(t, e, i) {
              (this.t = t),
                (this.v = e),
                i &&
                  ((this.next = i),
                  (i.prev = this),
                  (this.c = i.v - e),
                  (this.gap = i.t - t));
            },
            p = function(t, e) {
              var i = h(
                  "easing." + t,
                  function(t) {
                    (this._p1 = t || 0 === t ? t : 1.70158),
                      (this._p2 = 1.525 * this._p1);
                  },
                  !0
                ),
                r = (i.prototype = new s.b());
              return (
                (r.constructor = i),
                (r.getRatio = e),
                (r.config = function(t) {
                  return new i(t);
                }),
                i
              );
            },
            d = f(
              "Back",
              p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
              }),
              p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1);
              }),
              p("BackInOut", function(t) {
                return (t *= 2) < 1
                  ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                  : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
              })
            ),
            m = h(
              "easing.SlowMo",
              function(t, e, i) {
                (e = e || 0 === e ? e : 0.7),
                  null == t ? (t = 0.7) : t > 1 && (t = 1),
                  (this._p = 1 !== t ? e : 0),
                  (this._p1 = (1 - t) / 2),
                  (this._p2 = t),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === i);
              },
              !0
            ),
            g = (m.prototype = new s.b());
          return (
            (g.constructor = m),
            (g.getRatio = function(t) {
              var e = t + (0.5 - t) * this._p;
              return t < this._p1
                ? this._calcEnd
                  ? 1 - (t = 1 - t / this._p1) * t
                  : e - (t = 1 - t / this._p1) * t * t * t * e
                : t > this._p3
                ? this._calcEnd
                  ? 1 === t
                    ? 0
                    : 1 - (t = (t - this._p3) / this._p1) * t
                  : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                : this._calcEnd
                ? 1
                : e;
            }),
            (m.ease = new m(0.7, 0.7)),
            (g.config = m.config = function(t, e, i) {
              return new m(t, e, i);
            }),
            ((g = (t = h(
              "easing.SteppedEase",
              function(t, e) {
                (t = t || 1),
                  (this._p1 = 1 / t),
                  (this._p2 = t + (e ? 0 : 1)),
                  (this._p3 = e ? 1 : 0);
              },
              !0
            )).prototype = new s.b()).constructor = t),
            (g.getRatio = function(t) {
              return (
                t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999),
                (((this._p2 * t) | 0) + this._p3) * this._p1
              );
            }),
            (g.config = t.config = function(e, i) {
              return new t(e, i);
            }),
            ((g = (e = h(
              "easing.ExpoScaleEase",
              function(t, e, i) {
                (this._p1 = Math.log(e / t)),
                  (this._p2 = e - t),
                  (this._p3 = t),
                  (this._ease = i);
              },
              !0
            )).prototype = new s.b()).constructor = e),
            (g.getRatio = function(t) {
              return (
                this._ease && (t = this._ease.getRatio(t)),
                (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
              );
            }),
            (g.config = e.config = function(t, i, s) {
              return new e(t, i, s);
            }),
            ((g = (i = h(
              "easing.RoughEase",
              function(t) {
                for (
                  var e,
                    i,
                    r,
                    n,
                    a,
                    o,
                    l = (t = t || {}).taper || "none",
                    h = [],
                    _ = 0,
                    u = 0 | (t.points || 20),
                    f = u,
                    p = !1 !== t.randomize,
                    d = !0 === t.clamp,
                    m = t.template instanceof s.b ? t.template : null,
                    g = "number" == typeof t.strength ? 0.4 * t.strength : 0.4;
                  --f > -1;

                )
                  (e = p ? Math.random() : (1 / u) * f),
                    (i = m ? m.getRatio(e) : e),
                    (r =
                      "none" === l
                        ? g
                        : "out" === l
                        ? (n = 1 - e) * n * g
                        : "in" === l
                        ? e * e * g
                        : e < 0.5
                        ? (n = 2 * e) * n * 0.5 * g
                        : (n = 2 * (1 - e)) * n * 0.5 * g),
                    p
                      ? (i += Math.random() * r - 0.5 * r)
                      : f % 2
                      ? (i += 0.5 * r)
                      : (i -= 0.5 * r),
                    d && (i > 1 ? (i = 1) : i < 0 && (i = 0)),
                    (h[_++] = { x: e, y: i });
                for (
                  h.sort(function(t, e) {
                    return t.x - e.x;
                  }),
                    o = new c(1, 1, null),
                    f = u;
                  --f > -1;

                )
                  (a = h[f]), (o = new c(a.x, a.y, o));
                this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
              },
              !0
            )).prototype = new s.b()).constructor = i),
            (g.getRatio = function(t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; ) e = e.next;
                e = e.prev;
              } else for (; e.prev && t <= e.t; ) e = e.prev;
              return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
            }),
            (g.config = function(t) {
              return new i(t);
            }),
            (i.ease = new i()),
            f(
              "Bounce",
              _("BounceOut", function(t) {
                return t < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              }),
              _("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75
                  ? 1 - 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                  : t < 2.5 / 2.75
                  ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                  : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
              }),
              _("BounceInOut", function(t) {
                var e = t < 0.5;
                return (
                  (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                    ? (t *= 7.5625 * t)
                    : (t =
                        t < 2 / 2.75
                          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                          : t < 2.5 / 2.75
                          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                  e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                );
              })
            ),
            f(
              "Circ",
              _("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t);
              }),
              _("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1);
              }),
              _("CircInOut", function(t) {
                return (t *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                  : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
              })
            ),
            f(
              "Elastic",
              (r = function(t, e, i) {
                var r = h(
                    "easing." + t,
                    function(t, e) {
                      (this._p1 = t >= 1 ? t : 1),
                        (this._p2 = (e || i) / (t < 1 ? t : 1)),
                        (this._p3 =
                          (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                        (this._p2 = o / this._p2);
                    },
                    !0
                  ),
                  n = (r.prototype = new s.b());
                return (
                  (n.constructor = r),
                  (n.getRatio = e),
                  (n.config = function(t, e) {
                    return new r(t, e);
                  }),
                  r
                );
              })(
                "ElasticOut",
                function(t) {
                  return (
                    this._p1 *
                      Math.pow(2, -10 * t) *
                      Math.sin((t - this._p3) * this._p2) +
                    1
                  );
                },
                0.3
              ),
              r(
                "ElasticIn",
                function(t) {
                  return (
                    -this._p1 *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin((t - this._p3) * this._p2)
                  );
                },
                0.3
              ),
              r(
                "ElasticInOut",
                function(t) {
                  return (t *= 2) < 1
                    ? this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        -0.5
                    : this._p1 *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2) *
                        0.5 +
                        1;
                },
                0.45
              )
            ),
            f(
              "Expo",
              _("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t);
              }),
              _("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - 0.001;
              }),
              _("ExpoInOut", function(t) {
                return (t *= 2) < 1
                  ? 0.5 * Math.pow(2, 10 * (t - 1))
                  : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
              })
            ),
            f(
              "Sine",
              _("SineOut", function(t) {
                return Math.sin(t * l);
              }),
              _("SineIn", function(t) {
                return 1 - Math.cos(t * l);
              }),
              _("SineInOut", function(t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
              })
            ),
            h(
              "easing.EaseLookup",
              {
                find: function(t) {
                  return s.b.map[t];
                }
              },
              !0
            ),
            u(n.SlowMo, "SlowMo", "ease,"),
            u(i, "RoughEase", "ease,"),
            u(t, "SteppedEase", "ease,"),
            d
          );
        },
        !0
      );
    var R = s.g.Back,
      C = s.g.Elastic,
      A = s.g.Bounce,
      M = s.g.RoughEase,
      D = s.g.SlowMo,
      F = s.g.SteppedEase,
      z = s.g.Circ,
      E = s.g.Expo,
      I = s.g.Sine,
      N = s.g.ExpoScaleEase,
      X = r;
    (X._autoActivated = [f, c, n, a, S, o, u, R, C, A, M, D, F, z, E, I, N]),
      i.d(e, "a", function() {
        return X;
      });
  },
  64: function(t, e) {
    t.exports = function(t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          Object.defineProperty(e, "exports", { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  65: function(t, e, i) {
    "use strict";
    i.r(e),
      function(t) {
        var e = i(63);
        function s(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (t[e] = i),
            t
          );
        }
        function r(t, e) {
          for (var i = 0; i < e.length; i++) {
            var s = e[i];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              "value" in s && (s.writable = !0),
              Object.defineProperty(t, s.key, s);
          }
        }
        var n = (function() {
          function t(e) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "bottom",
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0.5,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 20,
              n =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : "swing";
            !(function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.elem = e),
              (this.speed = s),
              (this.direction = i),
              (this.distance = r),
              (this.before_val = -1 * r),
              (this.after_val = 0),
              (this.initial_bottom = this.elem.css(this.direction)),
              (this.initial_position = this.elem.css("position")),
              (this.easing = n);
          }
          var i, n, a;
          return (
            (i = t),
            (n = [
              {
                key: "animateOneObj",
                value: function() {
                  var t, i;
                  this.setInitialProp(),
                    e.a.fromTo(
                      this.elem,
                      this.speed,
                      (s((t = {}), this.direction, this.before_val),
                      s(t, "position", this.initial_position),
                      t),
                      (s((i = {}), this.direction, this.after_val),
                      s(i, "position", this.initial_position),
                      s(i, "autoAlpha", 1),
                      s(i, "delay", 0),
                      s(i, "ease", this.easing),
                      s(
                        i,
                        "onComplete",
                        function() {
                          this.setAnimatedClass();
                        }.bind(this)
                      ),
                      i)
                    );
                }
              },
              {
                key: "animateStagger",
                value: function(t) {
                  var i,
                    r,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0.3;
                  this.setInitialProp(),
                    e.a.staggerFromTo(
                      this.elem,
                      this.speed,
                      (s((i = {}), this.direction, this.before_val),
                      s(i, "position", this.initial_position),
                      i),
                      (s((r = {}), this.direction, this.after_val),
                      s(r, "position", this.initial_position),
                      s(r, "autoAlpha", 1),
                      s(r, "delay", 0),
                      s(r, "ease", this.easing),
                      s(
                        r,
                        "onComplete",
                        function() {
                          this.setAnimatedClass(t);
                        }.bind(this)
                      ),
                      r),
                      n
                    );
                }
              },
              {
                key: "setAnimatedClass",
                value: function() {
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.elem
                  ).addClass("animated");
                }
              },
              {
                key: "setInitialProp",
                value: function() {
                  "auto" != this.initial_bottom &&
                    ((this.before_val =
                      parseInt(this.initial_bottom) - this.distance),
                    (this.after_val = parseInt(this.initial_bottom))),
                    "absolute" != this.initial_position &&
                      (this.initial_position = "relative");
                }
              }
            ]) && r(i.prototype, n),
            a && r(i, a),
            t
          );
        })();
        t.exports = n;
      }.call(this, i(64)(t));
  },
  66: function(t, e) {
    var i;
    i = (function() {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  }
});
//# sourceMappingURL=FloatAnimation.js.map
